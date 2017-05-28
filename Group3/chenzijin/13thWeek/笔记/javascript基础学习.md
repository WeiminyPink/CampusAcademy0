

----------
var myHeading=document.querySelector('h1');//获取标题这个对象，将其存储在变量中
myHeading.innerHTML='Hello world!';//将变量myHeading的属性innerHTML赋予值,替换元素内容 


----------
添加一个图像转换器`var myHeading=document.querySelector('h1');//获取标题这个对象，将其存储在变量中
myHeading.innerHTML='Hello world!';//将变量myHeading的属性innerHTML赋予值,替换元素内容
var myImage=document.querySelector('img');
myImage.onclick=function(){//匿名函数
    var mySrc=myImage.getAttribute('src');//找到image元素的src属性
    if(mySrc==='imgaes/firefox-icon.png'){//判断src的值是否等于原始图像的路径
        myImage.setAttribute('src','images/firefox2.png');//如果是，则将src的值改为第二张图片的路径，强制在<image>内读取另一张图片
    }else{//如果不是
        myImage.setAttribute('src','imgaes/firefox-icon.png');//把src的值重新设置为原始图片的路径
    }
}`


----------
添加个性化的欢迎信息`var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');
function setUserName(){
    var myName=prompt('Please enter your name.');//prompt函数，会弹出一个对话框，需要用户输入数据，同时在用户点击OK后将数据存储在变量里
    localStorage.setItem('name',myName);//调用一个叫 localStorage 的API， 它允许我们将数据存储在浏览器里以供后续调用。使用 localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，然后将其值设置为包含用户输入的姓名的 myName 变量。
    myHeading.innerHTML='Mozilla is cool,' + myName;
}
if(!localStorage.getItem('name')){//检查name数据是否存在
    setUserName();//不存在的话，这个函数就会运行来创建它
}else{//如果存在
    var storedName=localStorage.getItem('name');//通过 getItem()调用存储过的 name
    myHeading.innerHTML='Mozilla is cool,'+storedName;
}
myButton.onclick=function(){
    setUserName();
}`