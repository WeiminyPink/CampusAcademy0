代码如下：

<div>上部层</div>

<div> <!--父层-->
     <div style="margin-top:200px;">子层</div>
</div>

理想中的效果是父层和上部层贴边显示，子层距离父层顶部有200px的距离，在ie中正常，但是在ff中却出现问题，子层和父层贴边了，而父层和上部层却间隔了200px。

百思不得其解，求助google，得到如下的一句：

当两个容器嵌套时,如果外层容器和内层容器之间没有别的元素,firefox会把内层元素的margin-top作用与父元素。

也就是说因为子层是父层的第一个非空子元素，所以使用margin-top会发生这个错误。

解决的办法有两个：

1、使用浮动来解决，即将子层代码改为：<div style="margin-top:200px;float:left";>子层</div>

2、使用padding-top来解决，即：

<div style="padding-top:200px;">
    <div>子层</div>
</div>