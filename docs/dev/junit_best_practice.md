# 聊一聊怎么编写好的单元测试

## 前言
维基百科上单元测试的定义是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。程序单元是应用的最小可测试部件。

对于java应用来说，单元测试是对一个java类的方法级别测试。今天我们来聊下怎么编写优雅的单元测试的一些方法论和最佳实践。

## 为什么需要单元测试

1. 单元测试能够以较低的成本，来验证代码逻辑的正确性。它也能很大程度上提高代码质量。
2. 降低测试成本。 虽然编写单测会花费我们一些功夫，但是Bug发现的越早，修复的代价越小。另外如果代码有良好的单元测试，集成测试和系统测试就只需要关注功能和流程方面的问题，回归测试成本也大幅减少。
3. 重构代码时提升信心。单测可以确保重构后的代码没有改变原来的逻辑，如果逻辑发生来改变，会有失败的用例提示你。
4. 有助于理解代码的逻辑。测试用例很直观的可以看出待测试方法想要表达的逻辑，很多著名的框架都提供对应的测试用例，如Spring，Guava。
5. 最后就是公司的研发流程规范有覆盖率要求。

## 单元测试的时机

- 刚写好类的方法时，这是最熟悉这段业务逻辑的时候，赶紧写一个Junit来验证下自己的成果。
- 重构代码之前，重构最怕的是是什么，当然是改出问题来。一个良好的单测能让你再重构的时候更从容一些。
- 覆盖率不够的时候，需要我们补测试用例到达目标值，经验值是70%。当然提升覆盖率也不是越高越好。太高的指标会导致开发人员采用Hack的方式来提高覆盖率。

## 怎么写单元测试

3A（Arrange、Act、Assert）模式是编写待测试方法的单元测试的常用方法。一个Junit典型结构如下所示：
```
@Test
public void getCategoryPath() {
    // 准备数据
    Category zj = new Category();
    zj.setCategoryId(1000L);
    zj.setParentId(100L);
    zj.setCategoryName("张江");
    Mockito.when(knowledgeCategoryDao.queryAllKnowledgeCategory()).thenReturn(mockData());
    Mockito.when(knowledgeCategoryDao.queryByPk(1000L)).thenReturn(zj);
    
    // 调用测试方法
    String path = categoryService.getCategoryPath(1000L);
    
    // 断言
    Assert.assertThat(path, is("上海市/浦东新区/张江"));
}
```
### Arrange，准备
准备阶段构造调⽤所需要的外部环境，如数据，临时变量，网路请求，环境变量等。这里是挑战最大的部分，引入测试替身(Test Double)能够显著降低这部分的难度。

#### 测试替身

| 测试替身 | 定义 | 使用场景 |
| ------ | ------ | ------ |
| Dummy | 只用来传参从不被真正使用 | 填充参数列表，消除编译错误 |
| Fake | 一个可以work的简单实现，不能用于生产 | H2，内存中执行CRUD操作 |
| Stub | 有实际实现的对象替换一部分功能的程序| 当从数据库查询时，直接返回预定义好的数据|
| Mock | 创建一个虚假的对象，满足预定的参数它会返回预定结果 | 第三单接口，when x then y |

*这里的Stub是指用来替换一部分功能的程序段。桩程序可以用来模拟已有程序的行为（比如一个远端机器的过程）或是对将要开发的代码的一种临时替代。*

Stub 的典型应用场景即是当某个对象需要从数据库抓取数据时，它并不是真实的从数据库抓取数据，而是直接返回预定义好的数据。

Stub和Mock微妙的区别 

```
// code in StubDao
public Category queryByPk(Long id) {
    return new Category(id);
}
CategoryDao categoryDao = new StubDao();
Category category = categoryDao.queryByPk(2L);
```
Mock实例:
```java
CategoryDao categoryDao = Mockito.mock(CategoryDao.class);
Mockito.when(categoryDao.queryByPk(2L)).thenReturn(new Category());
```

了解更多请参考[Martin Fowler 的 Mocks Aren't Stubs
](https://martinfowler.com/articles/mocksArentStubs.html)

### Act，执行要测试的方法。

### Assert，断言
最后判断结果是否符合预期，推荐Hamcrest, 它提供符合直觉，更好的可读性的断言功能。

```java
Person person = new Person("SPF", "Henan");
assertThat(person, hasProperty("address", equalTo("Henan")));

List<String> collection = Lists.newArrayList("ab", "cd", "ef");
assertThat(collection, hasItem("cd"));
assertThat(collection, contains("ab", "cd", "ef"));

```

## 什么是好的单元测试

好的单元测试必须遵守AIR原则，感觉像空气（AIR）一样并不存在。

- A：Automatic（自动化）
全自动执行，无人为干预和交互。一般是在CI/CD流程中。

- I: Independent（独立性）
要求单测无调用关系，无调用顺序。

- R: Repeatable（可重复）。
是指不能受到外界环境的影响

除了AIR这些原则之外，下面是我们实践中总结的一些经验:

- 起个好名字
好的命名能让单测更容易理解。为测试用例起个好名字其实没有为变量或方法取名那么困难，一般是以我们测试的方法同名，如果测试用例有2个分支的话，最好写2个测试用例，并在方法名上加以区分，例如doSomethingWithA, doSomethingWithB。

- 简单
是指测试用例简单明了，避免单测本身包含复杂的逻辑。

- 完整
是要求用执行正常场景和异常场景，边界等，覆盖不同的代码分支。

- 快速
执行速度要快，一般不要超过1秒，试想下如果100个用例，每个用例跑1分钟的画面。


## 最佳实践，提倡和不提倡的
几乎所有的开发同学同学都写过单元测试，在编写测试用例的时候是否遇到测试代码难以下手，测试结果不稳定，执行时间长这些问题呢？

这些问题或许能从下面的最佳实践中找到解决方法。

## DO
1. 只测要测试的方法。试着这样思考，输入是 x 和 y，输出会是 z 吗？而不是
如果我的输入是 x 和 y，那么这个方法会先调用 A 类，然后调用 B 类，接着输出 A 类和 B 类返回值相加的结果吗？

2. Mock第三方依赖，如Mockito。这会使测试更稳定，且迅速。
比如用户还款方法，依赖支付接口，我们并不希望发生一笔支付交易,可以使用使用Mockito创建一个假的支付接口，这样就可以全面控制它了。在下面的例子里，返回支付成功。
```
PayClient payClient = Mockito.Mock(PayClient.class);
Mockito.when(payClient.tx(txRequest)).thenReturn(true);
UserRepayService userRepayService = new UserRepayServiceImpl(payClient);
```

3. 使用最细粒度的断言。对比下面2个断言，很明显上面的断言更明确。

```
Assert.assertThat(items, hasItems("one", "two"));

Assert.assertThat(items, not(empty()));
```

4. 编写容易测试的代码，下面是一些建议:
    - 方法的行数要少
    - 避免静态代码块初始化类
    - 依赖注入避字段注入，推荐构造函数注入。我们项目中Idea会提示*Field injection is not recommended*。Field Injection的问题这里不做讨论，它还导致依赖服务很难被注入。
    如果采用构造器注入的话，我们可以很容易的new一个依赖传入待测试的类里。
    ```
    public class UserRepayServiceImplTest {
        // 构建待测试实例
        private PayTradeInfoClient payTradeInfoClient = Mockito.mock(PayTradeInfoClient.class);
        private ThorQueryClient thorQueryClient = Mockito.mock(ThorQueryClient.class);
    
        private UserRepayServiceImpl userRepayService = new UserRepayServiceImpl(this.payTradeInfoClient, this.thorQueryClient);
        
        @Test
        // 省略测试用例代码
    }
    ```
    如果使用Field injection也不用担心，我们可以通过反射方式设置字段。
    ```
        MockitoAnnotations.initMocks(this);
        ReflectionTestUtils.setField(categoryService, "knowledgeCategoryDao", knowledgeCategoryDao);
    ```
    
    对比下下面2个类，哪个更容易测试? 它们的名字或许会给你答案。
```
    public class UnTestableDemo {
        public void writeUserName(int id) {
            String userName = App.getDatabaseManager().getUserDatabase().getUserName(id);
            try (FileWriter writer = new FileWriter("user.txt")) {
                writer.write(userName);
            }
        }
    }
    
    public class EasyTestableDemo {
        private final UserDatabase userDatabase;
  
        public MyClass(final UserDatabase userDatabase) {
            this.userDatabase = userDatabase
        }
      
        public void writeUserName(int id, Writer writer) {
            String userName = this.userDatabase.getUserName(id);
            writer.write(userName);
      }
    }
    
```
    
**tips** 在Idea中光标在要测试的类上，使用Alt + Enter可以快速创建Junit。

### NOT DO
- 不依赖数据库，如果必须的话，使用H2模拟一个。测试环境的数据库有可能会被修改，而且执行时间也会加长。
- 不要mock值对象。
- 不要怕测试用例代码重复，它们只是测试代码。
- 不要skip用例，被skip的测试用例不会执行。skip失败的用例只会把问题掩盖。
- 避免使用SpringTestRunner，SpringTestRunner有什么问题呢？
1. 慢，加载Spring一般要1min左右，如果Test Case多的话，跑完全部话费的时间太长，而且随着用例次数的增长线性增长。
2. 引入额外依赖，创建太多不需要的bean，有可能因为不相关的bean的创建失败，导致整个用例失败。

## 总结
以上我们谈了单元测试对提升代码质量，提高测试效率等好处，还有实践中遇到的问题和解决方法。希望能对大家编写好的单元测试有所帮助。

Happy Testing, Happier Coding


参考资料:<br/>
https://github.com/mockito/mockito/wiki/How-to-write-good-tests
<br/>
https://mp.weixin.qq.com/s/okmWMOeBm7cCIZ1zzFr4KQ
<br/>
https://stackoverflow.com/a/69263/2299922
<br/>
《Java程序员修炼之道》
