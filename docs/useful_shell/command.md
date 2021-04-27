# 常用命令和填的坑

## ik_anlysis的stopword默认是关闭的，启动需打开如下配置

```
<entry key="ext_stopwords"></entry>
```

## git 查看代码行数
```
git ls-files | xargs wc -l
```


## es集群自定义扩展字典

进入容器
```
docker exec -it es03  bash
```

安装vim 
```
yum install vim

vim IKAnalyzer.cfg.xml # 如果出现乱码, set enc=utf8即可

# 修改扩展词典
<entry key="remote_ext_dict">http://docker.for.mac.host.internal:8080/ik/dict/customize.dict</entry>
```

macOS版Docker提供了一个指向宿主机的域名docker.for.mac.host.internal 。在需要访问宿主机服务时使用此域名即可。
```
docker.for.mac.host.internal
```


## stop all contrainer

```
docker stop $(docker ps -a -q)

Turns out exit code 137 with docker containers is commonly due to memory allocation issues!

```

```
git branch -d <branch-name>

// 提示下面的错误要退出当前分支在其他分支执行既可
error: Cannot delete branch 'new' checked out at 'D:/web/webpack_project/front-end' 
```

## 创建mvn项目脚手架
```
mvn archetype:create-from-project -s=/Users/pengfeisu/dev/tool/apache-maven-3.3.9/conf/settings.xml

mvn install -s=/Users/pengfeisu/dev/tool/apache-maven-3.3.9/conf/settings.xml

mvn archetype:crawl
```



```
find . -name "*.xml" |xargs grep "hello world"
```
## find top 5 size file in curr path
```bash 
du -a . | sort -n -r | head -n 5
```

## corn ex
```
// 每三分钟执行一次
0 0/3 * * * ? *

// 每天的14点09执行
0 9 14 * * ? *
```

## find cpu usage thread
```
top -H -p $PID
# 按CPU耗时总时间倒序排序
SHIFT+T

printf "%x\n" 11490

jstack #pid

find nid(native id) in stack dumps

```

## java heap dump
```
jmap -dump:format=b,file=cheap.bin <pid>
```

## process running time
```
ps -o etime= -p "$$"
```

## To remove java 1.7 and install java 1.8:
````
sudo yum install java-1.8.0
sudo yum remove java-1.7.0-openjdk


yum search java | grep openjdk
yum install java-1.8.<revision number from yum search>-openjdk-headless.x86_64
yum install java-1.8.<revision number from yum search>-openjdk-devel.x86_64
update-alternatives --config java #pick java 1.8
update-alternatives --config javac #pick java 1.8
````



## make date as txt with format yyyy
````
`date +%Y-%m-%d`
````

## find and remove 7 days file
````
 find . -mtime +7 -exec rm {} \;
````

## forward 80 port to 8080
````
echo "
rdr pass inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 8080
rdr pass inet proto tcp from any to any port 443 -> 127.0.0.1 port 8443
" | sudo pfctl -ef -
````

## remove forward
````
sudo pfctl -F all -f /etc/pf.conf
````


## git show current and last diff
```
git diff HEAD^ HEAD
```

## 放弃本地修改
```
 git checkout .
```

## 放弃暂存区修改
```
git reset HEAD .
```