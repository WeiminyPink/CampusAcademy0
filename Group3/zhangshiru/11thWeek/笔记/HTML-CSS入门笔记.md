# HTML/CSS入门笔记

##img/a
    <img src="路径" alt="名字"> 设置alt便于搜索引擎获取内容
    <a href="链接地址" target=""> target常用属性：_blank,_self
    <base target="_blank" /> 定义页面所有链接打开方式
    href="文件"  点击后下载文件
    href="#书签" 锚点链接
a标签伪类书写顺序 a:link a:visited a:hover a:active
IE6不支持a标签以外其他任何标签的伪类
IE6以上支持所有标签的hover伪类

##清楚默认样式
    body,p,h1,h2,h3,h4,h5,h6,dl,dd{margin:0;}
    ol,ul{list-style:none;padding:0;margin:0;}
    a{text-derection:none;} 
    img{border:none;}  IE6下兼容
    th,td{padding:0;}
    form{margin:0;}
    input,textarea{margin:0;padding:0;}
    select{margin:0;}
##display属性
IE6、7不支持inline-block

##cursor 'abbr'
cursor:url(图片.cur),pointer;  图片加载失败时定义的默认鼠标样式
<abbr titlt="Hypertext Markup Language">HTML</abbr>

    <cite>我</cite> 定义引用
    <abbr titlt="Hypertext Markup Language">HTML</abbr> 该标签定义缩写

##代码书写规范
1.英文半角小写
2.id，class以字母开头
3.所有标签必须闭合
4.html标签用tab缩进
5.属性值带引号
6.注释有空格 <!-- 文本 --> /* css */
7.拥有父子级关系的标签不能嵌套其他标签
8.p,dt,h标签中不能嵌套块级标签
9.a标签不能嵌套a，内联标签不能嵌套块级标签

##浮动
1.浮动元素会与其他元素顶部对齐，当宽度不够时在下一行显示，遇到前面元素高度比浮动元素高时，左（右）浮动与其对齐，而不会浮动到最前（后）面
2.若父元素未设置宽高，子元素浮动时，父元素不会被内容撑开，父子元素同时浮动，父元素宽高被撑开；
对父元素设置**display:inline-block**也可将父元素撑开
3.IE6下的最小高度问题：高度小于19px会被当作19px处理，设置**font-size:0**或**overflow:hidden**解决
4.在浮动元素下加**<br clear="all" />**清除浮动，但不符合标准
5.IE6、7不支持after伪类，浮动元素父级有有宽度就不用清除浮动，清除浮动需设置**zoom:1**触发
haslayout，只在IE6、7下有效
6.触发haslayout方法：
* display:inline-block
* height:除auto外任何值
* float:left/right
* position:absolute
* zoom
7.父级元素加**overflow:hidden**,IE6下不支持，可配合**zoom:1**使用
8.清除浮动最佳方法，给浮动父级元素添加以下代码

    .clearfix{zoom:1;}
    .clearfix:after{content:""; display:block; clear:both;}
9.IE6下的双边距BUG
    
    样式
    .wrap{float:left;border:2px solid #000;}
    .box{width:100px;height:100px;background:red;margin:0 100px;float:left; }
    结构
    <div class="wrap">
	    <div class="box"></div>
    </div>   在IE6下，块元素有浮动和横向margin的时候，横向的margin值会被放大成两倍
解决办法
    
    display:inline;
10.IE6，7下li的间隙
在IE6，7下li本身没浮动,但是li内容有浮动的时候，li下边就会产生几px的间隙
解决办法: 
- 给li加浮动
- 给li加**vertical-align:top**;
11.给浮动父级元素加**position:absolute/fixed;**
##相对定位
a、不影响元素本身的特性；
b、不使元素脱离文档流；
c、如果没有定位偏移量，对元素本身没有任何影响；
d、定位元素位置控制
top/right/bottom/left  定位元素偏移量。
e、在 IE6 下定位元素的父级宽高都为奇数那么在 IE6 下定位元素的 right 和 bottom 都有1像素的偏差。

##绝对定位
a、使元素完全脱离文档流；
b、使内嵌支持宽高；
c、块属性标签内容撑开宽度；
d、如果有定位父级相对于定位父级发生偏移，没有定位父级相对于整个文档发生偏移；
e、相对定位一般都是配合绝对定位元素使用；
f、**定位元素 默认后者层级高于前者**
g、ie6 下父级的overflow:hidden;是包不住子级的相对定位的

##固定定位
1.IE6不支持

##表格
1、不要给table,th,td以外的表格标签加样式；
2、单元格默认平分table 的宽度
3、th里面的内容默认加粗并且左右上下居中显示
4、td里面的内容默认上下居中左右居左显示
5、 table 决定了整个表格的宽度；
6、table里面的单元格宽度会被转换成百分比；
7、表格里面的每一列必须有宽度；
8、表格同一竖列继承最大宽度；
9、表格同行继承最大高度；

##表单
1.单选框需设置相同的name属性
2.上传文件按钮设置value无效
3.hidden类型用于后端存储数据，希望它不能被用户看到
4.IE6下form与form之间有默认外边距
5.input,select都可设置宽高
6.textarea设置**resize:none;**禁止缩放文本框，设置**overflow:auto**在IE6下不显示滚动条
7.IE6下input背景滚动
解决方案：用div包裹input并设置相同宽高，在div中设置背景，inputborder和background设为none

##css精灵
1.圆角
* CSS Sprites，是一种网页图片应用处理方式。它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去。
* 将圆角图片切出来，进行div嵌套使用背景图片，从而达到圆角的效果
* 图片比较大的用三层嵌套
* 优点：利用CSS 精灵能很好地减少了网页的http请求次数，从而大大的提高了页面的性能，这也是CSS 精灵最大的优点；减少图片大小
* 缺点：降低开发效率，维护难度加大；
2.滑动门
滑动门是利用背景图像的可层叠性，并允许他们在彼此之上进行滑动，以创造一些特殊的效果。 
3.css3圆角
border-raduis不支持IE6
