# 留言板任务接口文档

## BaseURL

[http://thungghuan.xyz:3000]

##  全局错误码

401：未登录

500： 服务器错误

###   错误返回格式

```json
{
    "status":401,
    "message":用户未登录,
    "data":null
}
```

##  未登录状态

GET /

调用一个初始html界面，并展示所有的留言板

####   Response

```json
{
    "boards":[
        {
            "ID":1,(注：一个正整数的留言板编号，由数据库分配)
            "date":"发布日期",
            "last":"上次修改日期",
            "text":"文本前8个字+......"
        },
		{
            "ID":2,
            "date":"发布日期"，
            "last":"上次修改日期",
            "text":"文本前8个字+......"
        }
		......
    ]
	//具体数量未知，可以为空，因此用一个列表包裹json数据
}
```



##  注册

POST  /register

####   Request Body

```json
{
	"username":"用户名"，
    "password":"密码"
}
```



####   错误处理

400：用户名不能为空/密码不能为空

406：用户名已存在



##   登录/注销

POST /session



####   Request Body

```json
{
    "username":"用户名",
    "password":"密码"
}
```

登陆成功后跳转至 /<username>页面

这个<username>是后端的装饰器要传的参，前端写的时候写/<username>即可

####  错误处理

408：用户名或密码错误



##  查看用户的留言板信息

GET /<username>

理想状况在登陆成功或重新加载之后直接显示这个html界面

####   Response Body

```json
{
    "boards":[
        {
            "ID":8,(注：一个正整数的留言板编号，由数据库分配)
            "date":"发布日期",
            "last":"上次修改日期",
            "text":"文本前8个字+......"
        },
		{
            "ID":16,
            "date":"发布日期"，
            "last":"上次修改日期",
            "text":"文本前8个字+......"
        }
		......
    ]
}//具体数量未知，可以为空，因此用一个列表包裹json数据
```



##  修改用户的用户名或密码

PUT  /<username>/username    /<username>/password



####  Request  Body   

....../username

```json
{
    "username":"新用户名"
}
```

....../password

```json
{
	"password":"新密码"
}
```



####  错误处理

400：新用户名/密码不能为空

401：未登录

406：该用户名已存在



## 添加留言板

PUT   /<username>/add    

作为按钮在/<username>调用的html界面出现，获得请求以后调用一个html模板，允许填入文本内容，上限255字符（数据库长度限制）

####  Request Body(....../add)

```json
{
    "text":"文本内容"
}
```



##  修改/删除留言板

GET /<username>/board   PUT  /<username>/board/put    POST  /<username>/board/delete

在/<username>的html界面准备一个文本框，输入数字，按钮”修改“用于调用GET请求并加载对应的html页面

/board读取来自数据库的文本内容并预先写在文本框内，展示上述html界面用于修改文本

/board/put是上述html页面的一个按钮，用于提交文本修改，写入数据库，后重定向于/<username>页面

/delete作为按钮出现在上述html模板里，调用当前查看的留言板id（这个地方后端处理），后在数据库里移除这个留言板

####  Response Body(....../delete)

```json
{
	"message":"删除成功"
}
```





####  添加修改删除留言板的错误处理

401：未登录（实际上可能不用处理，不过这个问题后端处理）

411：字符数量超出上限（后端解决）

