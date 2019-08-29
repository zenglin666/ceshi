###接口文档

#### addwq.php

**发送方式不做限制**
>改接口必填参数有三个;<br>
>*title*=>问题的标题;字符串类型<br>
>*detail*=>问题的详情;<br>
>*idea*=>问题解析;<br>

>返回值为:
>0 失败;
>1 成功;

使用举例(get):http://localhost/addwq.php?title=闭包&detail=不理解概念&idea=暂时不知道

#### showlist.php

**发送方式不做限制**

>返回json数据=><br>
>数据格式如下:<br>
{
	"detail":[
		{
			"wq_id":"1",
			"wq_title":"",
			"wq_detail":"",
			"wq_idea":"",
			"submission_date":"2019-07-26"
		},
		{
			"wq_id":"1",
			"wq_title":"",
			"wq_detail":"",
			"wq_idea":"",
			"submission_date":"2019-07-26"
		},
		{
			"wq_id":"1",
			"wq_title":"",
			"wq_detail":"",
			"wq_idea":"",
			"submission_date":"2019-07-26"
		}
	]
}


#### removeitem.php

**发送方式不做限制**
>改接口必填参数有一个;<br>
>*id*=>问题的id;字符串类型<br>

>返回值为:
>0 失败;
>1 成功;

使用举例(get):http://localhost/removeitem.php?id=1

#### updateitem.php

**发送方式不做限制**
>改接口必填参数有一个;<br>
>*id*=>问题的id;字符串类型<br>
>该接口可选参数有三个;<br>
>*title*=>问题的标题;字符串类型<br>
>*detail*=>问题的详情;<br>
>*idea*=>问题解析;<br>

>返回值为:
>0 失败;
>1 成功;

使用举例(get):http://localhost/updateitem.php?id=1