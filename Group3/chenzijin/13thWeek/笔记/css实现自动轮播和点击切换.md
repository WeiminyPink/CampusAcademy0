利用纯css自动轮播和点击切换只能同时实现一种


----------
自动轮播：`<div class="wrapT">
        <ul class="sliders">
            <li id="sliderOne"></li>
            <li id="sliderTwo"></li>
            <li id="sliderThree"></li>
            <li id="sliderFour"></li>
        </ul>
        <div class="buttons">
            <a href="#sliderOne">1</a>
            <a href="#sliderTwo">2</a>
            <a href="#sliderThree">3</a>
        </div>
    </div>``.wrapT {
    position:relative;
    width:270px;
    height:110px;
    margin:50px auto;
    overflow:hidden;
}
.sliders {
    width:1080px;
    height:110px;
    -webkit-animation:slide 3000ms ease infinite;
    animation:slide 3000ms ease infinite;
}
.sliders li {
    float:left;
    width:270px;
    height:110px;
}
#sliderOne,#sliderFour{
    background:#36D1C4;
}
#sliderTwo{
    background:#FFF2BE;
}
#sliderThree{
    background:#F6318C;
}
.buttons{
    position:absolute;
    right:0;
    bottom:0;
}
.buttons a{
    display:inline-block;
    width:28px;
    height:28px;
    text-align:center;
    line-height:28px;
    color:#fff;
    background-color:rgba(225,225,225,0.6);
}
@-webkit-keyframes slide {
    0%{margin-left:0;}
    15%{margin-left:-270px;}
    30%{margin-left:-540px;}
    45%{margin-left:-810px;}
    60%{margin-left:-540px;}
    75%{margin-left:-270px;}
    100%{margin-left:0;}
}
@keyframes slide {
    0%{margin-left:0;}
    15%{margin-left:-270px;}
    30%{margin-left:-540px;}
    45%{margin-left:-810px;}
    60%{margin-left:-540px;}
    75%{margin-left:-270px;}
    100%{margin-left:0;}
}`


----------
点击切换：`.wrapT {
    position:relative;
    width:270px;
    height:110px;
    margin:50px auto;
    overflow:hidden;
    background:#36D1C4;
}
.sliders {
    width:270px;
    height:110px;
    position:absolute;
    left:0;
    right:0;
}
.sliders li:target {/*突出显示活动*/
    left:0;
}
.sliders li {
    width:270px;
    height:110px;
    position:absolute;
    top:0;
    left:-270px;
}
#sliderOne,#sliderFour{
    background:#36D1C4;
}
#sliderTwo{
    background:#FFF2BE;
}
#sliderThree{
    background:#F6318C;
}
.buttons{
    position:absolute;
    right:0;
    bottom:0;
}
.buttons a{
    display:inline-block;
    width:28px;
    height:28px;
    text-align:center;
    line-height:28px;
    color:#fff;
    background-color:rgba(225,225,225,0.6);
}`