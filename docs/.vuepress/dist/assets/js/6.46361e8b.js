(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{731:function(t,a,s){"use strict";s.r(a);var e=s(105),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"聊一聊怎么编写好的单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聊一聊怎么编写好的单元测试"}},[t._v("#")]),t._v(" 聊一聊怎么编写好的单元测试")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("维基百科上单元测试的定义是针对程序模块（软件设计的最小单位）来进行正确性检验的测试工作。程序单元是应用的最小可测试部件。")]),t._v(" "),s("p",[t._v("对于java应用来说，单元测试是对一个java类的方法级别测试。今天我们来聊下怎么编写优雅的单元测试的一些方法论和最佳实践。")]),t._v(" "),s("h3",{attrs:{id:"为什么需要单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要单元测试"}},[t._v("#")]),t._v(" 为什么需要单元测试")]),t._v(" "),s("ol",[s("li",[t._v("单元测试能够以较低的成本，来验证代码逻辑的正确性。它也能很大程度上提高代码质量。")]),t._v(" "),s("li",[t._v("降低测试成本。 虽然编写单测会花费我们一些功夫，但是Bug发现的越早，修复的代价越小。另外如果代码有良好的单元测试，集成测试和系统测试就只需要关注功能和流程方面的问题，回归测试成本也大幅减少。")]),t._v(" "),s("li",[t._v("重构代码时提升信心。单测可以确保重构后的代码没有改变原来的逻辑，如果逻辑发生来改变，会有失败的用例提示你。")]),t._v(" "),s("li",[t._v("有助于理解代码的逻辑。测试用例很直观的可以看出待测试方法想要表达的逻辑，很多著名的框架都提供对应的测试用例，如Spring，Guava。")]),t._v(" "),s("li",[t._v("最后就是公司的研发流程规范有覆盖率要求。")])]),t._v(" "),s("h3",{attrs:{id:"单元测试的时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单元测试的时机"}},[t._v("#")]),t._v(" 单元测试的时机")]),t._v(" "),s("ul",[s("li",[t._v("刚写好类的方法时，这是最熟悉这段业务逻辑的时候，赶紧写一个Junit来验证下自己的成果。")]),t._v(" "),s("li",[t._v("重构代码之前，重构最怕的是是什么，当然是改出问题来。一个良好的单测能让你再重构的时候更从容一些。")]),t._v(" "),s("li",[t._v("覆盖率不够的时候，需要我们补测试用例到达目标值，经验值是70%。当然提升覆盖率也不是越高越好。太高的指标会导致开发人员采用Hack的方式来提高覆盖率。")])]),t._v(" "),s("h3",{attrs:{id:"怎么写单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么写单元测试"}},[t._v("#")]),t._v(" 怎么写单元测试")]),t._v(" "),s("p",[t._v("3A（Arrange、Act、Assert）模式是编写待测试方法的单元测试的常用方法。一个Junit典型结构如下所示：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('@Test\npublic void getCategoryPath() {\n    // 准备数据\n    Category zj = new Category();\n    zj.setCategoryId(1000L);\n    zj.setParentId(100L);\n    zj.setCategoryName("张江");\n    Mockito.when(knowledgeCategoryDao.queryAllKnowledgeCategory()).thenReturn(mockData());\n    Mockito.when(knowledgeCategoryDao.queryByPk(1000L)).thenReturn(zj);\n    \n    // 调用测试方法\n    String path = categoryService.getCategoryPath(1000L);\n    \n    // 断言\n    Assert.assertThat(path, is("上海市/浦东新区/张江"));\n}\n')])])]),s("h4",{attrs:{id:"arrange-准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrange-准备"}},[t._v("#")]),t._v(" Arrange，准备")]),t._v(" "),s("p",[t._v("准备阶段构造调⽤所需要的外部环境，如数据，临时变量，网路请求，环境变量等。这里是挑战最大的部分，引入测试替身(Test Double)能够显著降低这部分的难度。")]),t._v(" "),s("h5",{attrs:{id:"测试替身"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试替身"}},[t._v("#")]),t._v(" 测试替身")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("测试替身")]),t._v(" "),s("th",[t._v("定义")]),t._v(" "),s("th",[t._v("使用场景")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Dummy")]),t._v(" "),s("td",[t._v("只用来传参从不被真正使用")]),t._v(" "),s("td",[t._v("填充参数列表，消除编译错误")])]),t._v(" "),s("tr",[s("td",[t._v("Fake")]),t._v(" "),s("td",[t._v("一个可以work的简单实现，不能用于生产")]),t._v(" "),s("td",[t._v("H2，内存中执行CRUD操作")])]),t._v(" "),s("tr",[s("td",[t._v("Stub")]),t._v(" "),s("td",[t._v("有实际实现的对象替换一部分功能的程序")]),t._v(" "),s("td",[t._v("当从数据库查询时，直接返回预定义好的数据")])]),t._v(" "),s("tr",[s("td",[t._v("Mock")]),t._v(" "),s("td",[t._v("创建一个虚假的对象，满足预定的参数它会返回预定结果")]),t._v(" "),s("td",[t._v("第三单接口，when x then y")])])])]),t._v(" "),s("p",[s("em",[t._v("这里的Stub是指用来替换一部分功能的程序段。桩程序可以用来模拟已有程序的行为（比如一个远端机器的过程）或是对将要开发的代码的一种临时替代。")])]),t._v(" "),s("p",[t._v("Stub 的典型应用场景即是当某个对象需要从数据库抓取数据时，它并不是真实的从数据库抓取数据，而是直接返回预定义好的数据。")]),t._v(" "),s("p",[t._v("Stub和Mock微妙的区别")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// code in StubDao\npublic Category queryByPk(Long id) {\n    return new Category(id);\n}\nCategoryDao categoryDao = new StubDao();\nCategory category = categoryDao.queryByPk(2L);\n")])])]),s("p",[t._v("Mock实例:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CategoryDao")]),t._v(" categoryDao "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mockito")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CategoryDao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mockito")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("when")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("categoryDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryByPk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("thenReturn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Category")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("了解更多请参考"),s("a",{attrs:{href:"https://martinfowler.com/articles/mocksArentStubs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Martin Fowler 的 Mocks Aren't Stubs\n"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"act-执行要测试的方法。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#act-执行要测试的方法。"}},[t._v("#")]),t._v(" Act，执行要测试的方法。")]),t._v(" "),s("h4",{attrs:{id:"assert-断言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assert-断言"}},[t._v("#")]),t._v(" Assert，断言")]),t._v(" "),s("p",[t._v("最后判断结果是否符合预期，推荐Hamcrest, 它提供符合直觉，更好的可读性的断言功能。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SPF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Henan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equalTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Henan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" collection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newArrayList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertThat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ef"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"什么是好的单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是好的单元测试"}},[t._v("#")]),t._v(" 什么是好的单元测试")]),t._v(" "),s("p",[t._v("好的单元测试必须遵守AIR原则，感觉像空气（AIR）一样并不存在。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("A：Automatic（自动化）\n全自动执行，无人为干预和交互。一般是在CI/CD流程中。")])]),t._v(" "),s("li",[s("p",[t._v("I: Independent（独立性）\n要求单测无调用关系，无调用顺序。")])]),t._v(" "),s("li",[s("p",[t._v("R: Repeatable（可重复）。\n是指不能受到外界环境的影响")])])]),t._v(" "),s("p",[t._v("除了AIR这些原则之外，下面是我们实践中总结的一些经验:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("起个好名字\n好的命名能让单测更容易理解。为测试用例起个好名字其实没有为变量或方法取名那么困难，一般是以我们测试的方法同名，如果测试用例有2个分支的话，最好写2个测试用例，并在方法名上加以区分，例如doSomethingWithA, doSomethingWithB。")])]),t._v(" "),s("li",[s("p",[t._v("简单\n是指测试用例简单明了，避免单测本身包含复杂的逻辑。")])]),t._v(" "),s("li",[s("p",[t._v("完整\n是要求用执行正常场景和异常场景，边界等，覆盖不同的代码分支。")])]),t._v(" "),s("li",[s("p",[t._v("快速\n执行速度要快，一般不要超过1秒，试想下如果100个用例，每个用例跑1分钟的画面。")])])]),t._v(" "),s("h3",{attrs:{id:"最佳实践-提倡和不提倡的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践-提倡和不提倡的"}},[t._v("#")]),t._v(" 最佳实践，提倡和不提倡的")]),t._v(" "),s("p",[t._v("几乎所有的开发同学同学都写过单元测试，在编写测试用例的时候是否遇到测试代码难以下手，测试结果不稳定，执行时间长这些问题呢？")]),t._v(" "),s("p",[t._v("这些问题或许能从下面的最佳实践中找到解决方法。")]),t._v(" "),s("h3",{attrs:{id:"do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#do"}},[t._v("#")]),t._v(" DO")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("只测要测试的方法。试着这样思考，输入是 x 和 y，输出会是 z 吗？而不是\n如果我的输入是 x 和 y，那么这个方法会先调用 A 类，然后调用 B 类，接着输出 A 类和 B 类返回值相加的结果吗？")])]),t._v(" "),s("li",[s("p",[t._v("Mock第三方依赖，如Mockito。这会使测试更稳定，且迅速。\n比如用户还款方法，依赖支付接口，我们并不希望发生一笔支付交易,可以使用使用Mockito创建一个假的支付接口，这样就可以全面控制它了。在下面的例子里，返回支付成功。")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("PayClient payClient = Mockito.Mock(PayClient.class);\nMockito.when(payClient.tx(txRequest)).thenReturn(true);\nUserRepayService userRepayService = new UserRepayServiceImpl(payClient);\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("使用最细粒度的断言。对比下面2个断言，很明显上面的断言更明确。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('Assert.assertThat(items, hasItems("one", "two"));\n\nAssert.assertThat(items, not(empty()));\n')])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("编写容易测试的代码，下面是一些建议:")]),t._v(" "),s("ul",[s("li",[t._v("方法的行数要少")]),t._v(" "),s("li",[t._v("避免静态代码块初始化类")]),t._v(" "),s("li",[t._v("依赖注入避字段注入，推荐构造函数注入。我们项目中Idea会提示"),s("em",[t._v("Field injection is not recommended")]),t._v("。Field Injection的问题这里不做讨论，它还导致依赖服务很难被注入。\n如果采用构造器注入的话，我们可以很容易的new一个依赖传入待测试的类里。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public class UserRepayServiceImplTest {\n    // 构建待测试实例\n    private PayTradeInfoClient payTradeInfoClient = Mockito.mock(PayTradeInfoClient.class);\n    private ThorQueryClient thorQueryClient = Mockito.mock(ThorQueryClient.class);\n\n    private UserRepayServiceImpl userRepayService = new UserRepayServiceImpl(this.payTradeInfoClient, this.thorQueryClient);\n    \n    @Test\n    // 省略测试用例代码\n}\n")])])]),s("p",[t._v("如果使用Field injection也不用担心，我们可以通过反射方式设置字段。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('    MockitoAnnotations.initMocks(this);\n    ReflectionTestUtils.setField(categoryService, "knowledgeCategoryDao", knowledgeCategoryDao);\n')])])]),s("p",[t._v("对比下下面2个类，哪个更容易测试? 它们的名字或许会给你答案。")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('    public class UnTestableDemo {\n        public void writeUserName(int id) {\n            String userName = App.getDatabaseManager().getUserDatabase().getUserName(id);\n            try (FileWriter writer = new FileWriter("user.txt")) {\n                writer.write(userName);\n            }\n        }\n    }\n    \n    public class EasyTestableDemo {\n        private final UserDatabase userDatabase;\n  \n        public MyClass(final UserDatabase userDatabase) {\n            this.userDatabase = userDatabase\n        }\n      \n        public void writeUserName(int id, Writer writer) {\n            String userName = this.userDatabase.getUserName(id);\n            writer.write(userName);\n      }\n    }\n    \n')])])]),s("p",[s("strong",[t._v("tips")]),t._v(" 在Idea中光标在要测试的类上，使用Alt + Enter可以快速创建Junit。")]),t._v(" "),s("h4",{attrs:{id:"not-do"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#not-do"}},[t._v("#")]),t._v(" NOT DO")]),t._v(" "),s("ul",[s("li",[t._v("不依赖数据库，如果必须的话，使用H2模拟一个。测试环境的数据库有可能会被修改，而且执行时间也会加长。")]),t._v(" "),s("li",[t._v("不要mock值对象。")]),t._v(" "),s("li",[t._v("不要怕测试用例代码重复，它们只是测试代码。")]),t._v(" "),s("li",[t._v("不要skip用例，被skip的测试用例不会执行。skip失败的用例只会把问题掩盖。")]),t._v(" "),s("li",[t._v("避免使用SpringTestRunner，SpringTestRunner有什么问题呢？")])]),t._v(" "),s("ol",[s("li",[t._v("慢，加载Spring一般要1min左右，如果Test Case多的话，跑完全部话费的时间太长，而且随着用例次数的增长线性增长。")]),t._v(" "),s("li",[t._v("引入额外依赖，创建太多不需要的bean，有可能因为不相关的bean的创建失败，导致整个用例失败。")])]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("以上我们谈了单元测试对提升代码质量，提高测试效率等好处，还有实践中遇到的问题和解决方法。希望能对大家编写好的单元测试有所帮助。")]),t._v(" "),s("p",[t._v("Happy Testing, Happier Coding")]),t._v(" "),s("p",[t._v("参考资料:"),s("br"),t._v("\nhttps://github.com/mockito/mockito/wiki/How-to-write-good-tests\n"),s("br"),t._v("\nhttps://mp.weixin.qq.com/s/okmWMOeBm7cCIZ1zzFr4KQ\n"),s("br"),t._v("\nhttps://stackoverflow.com/a/69263/2299922\n"),s("br"),t._v("\n《Java程序员修炼之道》")]),t._v(" "),s("h3",{attrs:{id:"作者介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作者介绍"}},[t._v("#")]),t._v(" 作者介绍")]),t._v(" "),s("p",[t._v("SPF007, 信也科技中台研发催收部门研发一枚，主要负责客服系统的研发。")])])}),[],!1,null,null,null);a.default=n.exports}}]);