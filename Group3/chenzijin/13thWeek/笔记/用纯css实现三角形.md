

----------
html:`<div class="triangleO"></div><!--方法一：利用border属性-->
<div class="tooltip"><!--tooltip效果(做两个三角形，一个背景色，一个边框色，然后让两个不同颜色的三角形图标叠加并且位置错开1px)-->
    <div class="triangleT trangle-border"></div><!--边框色-->
    <div class="triangleT trangle-bg"></div><!--背景色-->
</div>
<div class="char">	&Delta;</div><!--利用特殊字符实现-->`


----------
css:`.triangleO{
            margin:30px auto;
            width:0;
            height:0;
            background-color:#fff;
            border-width:180px;
            border-style:solid;
            border-color:#FF0592 transparent transparent transparent;
            /*border-color:#FF0592 #FC5BB6 #FFBEE3 #FFF6FB;*/
        }
        .tooltip{
            position:relative;
            width:300px;
            height:120px;
            background:#57D1C9;
            border-radius:10px;
            margin:0 auto;
        }
        .triangleT{
            position:absolute;
            width:0;
            height:0;
            border-width:30px 25px 0;/*不设置下面的border*/
            border-style:solid;
            border-left-color:transparent;
            border-right-color:transparent;/*只留下三角形*/
            right:50%;/*小三角居中*/
        }
        .trangle-border{
            color:#57D1C9;
            bottom:-30px;/*边框要错开1px*/
            right:120px;
        }
        .trangle-bg{
            color:#FFFBCB;
            bottom:-29px;
            right:120px;
        }
        .char{
            position:relative;
            top:100px;
            text-align:center;
            color:#FFFBCB;/*上色*/
            font-size:100px;/*字符大小实现方式*/
            /*transform:rotate(50deg);!*改变角度*!*/
            /*transform:scale(1.5,2);!*改变三角形的宽度和高度*!*/
        }`