---
sidebar: auto
---

# CompeleteFeature并发调用接口导致的NullPointerException

最近项目中遇到一个很"高级"的Bug，具体就是使用CompleteFeature并发调用接口后把符合条件的结果加到一个ArrayList中。

```java
// items 保存结果

List<Label> items = new ArrayList();

// 并发调用
CompletableFuture[] cfs = lists.stream().map(label -> CompletableFuture.supplyAsync(() -> queryUserHitLabel(userId, label))
        .exceptionally(e -> {
            logger.error("hitLabel 异常", e);
            return false;
        }).thenAccept(b -> {
                    if (b) {
                        items.add(label);
                    }
                }
        )).toArray(CompletableFuture[]::new);

try {
    CompletableFuture.allOf(cfs).get(60, TimeUnit.SECONDS);
} catch (Exception e) {
    logger.error("并发执行异常: userId = " + userId, e);
    throw new RuntimeException("并发执行异常 " + userId);
}
```


遍历items会偶发的出现NullPointerException，最初的想法是不可思议, 这里的items是临时变量，我首先排除了线程安全的问题(经验主义害死人啊)。

Debug发现items中的元素确实有null。这就很奇怪了，因为以上代码中只有
```java
if (b) {
    items.add(label);
}
```
这里添加了元素。如果add后不可能出现空指针的啊。

判断问题可能出现在List.Add(E)里，其试下如下
```java
    public boolean add(E e) {
        ensureCapacityInternal(size + 1);  // Increments modCount!!
        // 这里不是原子操作
        elementData[size++] = e;
        return true;
    }
```
经过一番思考后，终于看出问题在哪里。
就是elementData[size++] = e在并发执行时有可能size++和给数组的元素赋值由不同的线程执行，产生了索引位置有可能null值的问题。

解决方案非常简单，只要把items换成一个线程安全的类，或则使用Collections.synchronizedList()包装下ArraryList.

```java
List<Label> items = new CopyOnWriteArrayList<>();
```
顺便吐槽下java竟然只提供了一个并发安全的类CopyOnWriteArrayList。它也有一个问题就是并发写的效率并不好。