第一种：直接在link中判断设备的尺寸，然后引用不同的css文件：
<link rel="stylesheet" type="text/css" href="styleA.css" media="screen and (min-width:400px)" >//意思是当屏幕的宽度大于等于400px的时候，应用styleA.css


在media属性中，screen是媒体类型里的一种；and称为关键字，其他关键字还包括not（排除某种设备）,only（限定某种设备）；（min-width)就是媒体特性，其被放置在一对圆括号中。

<link rel="stylesheet" type="text/css" href="styleB.css" media="screen and (min-width:600px) and (max-width:800px)">//意思是当屏幕的宽度大于600小于800时，应用styleB.css




第二种：直接写在<style>标签里：

@media screen and (max-width: 600px) { /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
  .class {
    background: #ccc;
  }
}
@media screen and (min-width: 600px) and (max-width: 900px) {
  .class {
  /*下面的样式会在可视区域的宽度在 600px 和 900px 之间的时候被应用*/
    background: #fff;
  }
}
写法是前面加@media，其它跟link里的media属性相同。