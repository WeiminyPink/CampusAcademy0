## javascript: ##
`<script type="text/javascript">
 	window.onload=function(){
----------
		var oBtn=documnet.getElementById("btnLogin");//获取点击的节点
			oBtn.onclick=function(){//鼠标点击事件
					//对事件进行的处理（在这里也就是以下全部内容，全部代码）
				}
		var sHeigth=document.documentElement.scrollHeight;//获取页面的高度
		var sWidth=documentElement.scrollWidth;//获取页面的宽度
		var wHeight=document.documentElement.clientHeight;//获取可视区域的高度

----------

		var oMask=document.createElement("div");//创建元素节点
			oMask.id="mask";
			oMask.style.height=sHeight+"px";//获取页面的高度
			oMask.style.width=sWidth+"px";//获取页面的宽度
			document.bofy.appendChild(oMask);//在页面的尾部去追加一个节点，把这个节点插入进去。
 		
----------

		//实现登录框	
		var oLogin=document.creatElement("div");//创建元素节点
			oLogin.id="login";
			oLogin.innerHTML="放入login中的html内容"；//把放进去的内容传给节点，使他展示出来，使他变成元素的节点显示出来
			document.body.appendChild(oLogin);//把这个元素节点插入进去
			//获取login的宽度和高度(一定要写在插入之后，才会变得可见）
		var dHeight=oLogin.offsetHeight;//获取元素的高度
		var dWidth=oLogin.offsetWidth;//获取元素的宽度
			oLogin.style.left=(sWidth-dWidth)/2+"px";//给login的left赋值
			oLogin.style.top=(wHeight-dHeight)/2+"px";//给login的top赋值

----------

		var oClose=document.getElementById("close");//获取id 为close的元素
			oMask.onclick=oClose.onclick=function(){//把点击叉叉符号（弹出框）和点击遮罩层，这两个事件串起来
				document.body.removeChild(oMask);//删除遮罩层，删除页面文档里面body下面的字节点oMask
				document.body.removeChild(oLogin);//删除弹出框
				}
</script>`
## 优化后的操作 ##

----------

`function openNew(){
	var sHeigth=document.documentElement.scrollHeight;//获取页面的高度
		var sWidth=documentElement.scrollWidth;//获取页面的宽度
		var wHeight=document.documentElement.clientHeight;//获取可视区域的高度
	var oMask=document.createElement("div");//创建元素节点
			oMask.id="mask";
			oMask.style.height=sHeight+"px";//获取页面的高度
			oMask.style.width=sWidth+"px";//获取页面的宽度
			document.body.appendChild(oMask);//在页面的尾部去追加一个节点，把这个节点插入进去。
	var oLogin=document.creatElement("div");//创建元素节点
			oLogin.id="login";
			oLogin.innerHTML="放入login中的html内容"；//把放进去的内容传给节点，使他展示出来，使他变成元素的节点显示出来
			document.body.appendChild(oLogin);//把这个元素节点插入进去
			//获取login的宽度和高度(一定要写在插入之后，才会变得可见）
		var dHeight=oLogin.offsetHeight;//获取元素的高度
		var dWidth=oLogin.offsetWidth;//获取元素的宽度
			oLogin.style.left=(sWidth-dWidth)/2+"px";//给login的left赋值
			oLogin.style.top=(wHeight-dHeight)/2+"px";//给login的top赋值
	var oClose=document.getElementById("close");//获取id 为close的元素
			oMask.onclick=oClose.onclick=function(){//把点击叉叉符号（弹出框）和点击遮罩层，这两个事件串起来
				document.body.removeChild(oMask);//删除遮罩层，删除页面文档里面body下面的字节点oMask
				document.body.removeChild(oLogin);//删除弹出框
				}
}


----------

window.onload=function(){
	var oBtn=documnet.getElementById("btnLogin");//获取点击的节点
			oBtn.onclick=function(){
				openNew();
				}


----------
`
![](http://i.imgur.com/B1ougrM.png)
![](http://i.imgur.com/vFv3802.png)
![](http://i.imgur.com/qRqL04w.png)
![](http://i.imgur.com/q5P9imo.png)