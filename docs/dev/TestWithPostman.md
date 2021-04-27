
#### 自动化api测试

```
cd /home/supengfei/mcoml-api-test

git pull

sleep 10

cat /home/supengfei/mcoml-api-test/src/mcoml.postman_collection.json>/home/supengfei/coml-test-demo2.postman_collection.json

cd /home/supengfei

newman run coml-test-demo2.postman_collection.json -r cli,html --reporter-html-export newman/test-rpt.html

sleep 10

echo `date` | mail -a/home/supengfei/newman/test-rpt.html -v -s "mcoml api 自动化测试报告"  supengfei@ppdai.com

```