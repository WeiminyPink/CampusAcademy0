

----------
html:`<div class="star"></div><!--六角星-->
    <div class="curvedarrow"></div><!--弯曲的尾巴箭头-->
    <div class="starFive"></div><!--五角星-->
    <div class="moon"></div><!--月亮-->
    <div class="pacman"></div><!--吃豆人-->
    <div class="heart"></div><!--心形-->`


----------
css:`.star{
            width:0;
            height:0;
            border-left:50px solid transparent;
            border-right:50px solid transparent;
            border-bottom:100px solid red;
            position:relative;
            margin:20px auto;
        }
        .star:after{/*在每个.star后面添加图形*/
            width:0;
            height:0;
            border-left:50px solid transparent;
            border-right:50px solid transparent;
            border-top:100px solid red;
            position:absolute;
            content:"";
            top:35px;
            left:-50px;
        }
        .curvedarrow {
            position: relative;
            width: 0;
            height: 0;
            border-top: 9px solid transparent;
            border-right: 9px solid red;
            -webkit-transform: rotate(10deg);
            -moz-transform: rotate(10deg);
            -ms-transform: rotate(10deg);
            -o-transform: rotate(10deg);
            margin:60px auto;
        }
        .curvedarrow:after {
            content: "";
            position: absolute;
            border-top: 3px solid red;
            border-radius: 20px 0 0 0;/*粗细不一样*/
            top: -12px;
            left: -9px;
            width: 12px;
            height: 12px;
            -webkit-transform: rotate(45deg);/*线条的弯曲程度要大于整体的弯曲程度*/
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
        }
        .starFive {
            margin: 100px auto;
            position: relative;
            display: block;
            color: red;
            width: 0;
            height: 0;
            border-right:  100px solid transparent;
            border-bottom: 70px  solid red;
            border-left:   100px solid transparent;
            -moz-transform:    rotate(35deg);
            -webkit-transform: rotate(35deg);
            -ms-transform:     rotate(35deg);
            -o-transform:      rotate(35deg);
        }
        .starFive:before {
            border-bottom: 80px solid red;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            position: absolute;
            height: 0;
            width: 0;
            top: -45px;
            left: -62px;
            content: '';
            -webkit-transform: rotate(-35deg);
            -moz-transform:    rotate(-35deg);
            -ms-transform:     rotate(-35deg);
            -o-transform:      rotate(-35deg);

        }
        .starFive:after {
            position: absolute;
            display: block;
            color: red;
            top: 3px;
            left: -105px;
            width: 0;
            height: 0;
            border-right: 100px solid transparent;
            border-bottom: 70px solid red;
            border-left: 100px solid transparent;
            -webkit-transform: rotate(-70deg);
            -moz-transform:    rotate(-70deg);
            -ms-transform:     rotate(-70deg);
            -o-transform:      rotate(-70deg);
            content: '';
        }
        .moon{
            width:200px;
            height:200px;
            border-radius:100px;
            box-shadow:50px 50px 0 0 red;
            margin:0 auto;
        }
        .pacman{
            width:0;
            height:0;
            margin:120px auto;
            border-right:60px solid transparent;
            border-top:60px solid red;
            border-left:60px solid red;
            border-bottom:60px solid red;
            border-top-left-radius:60px;
            border-top-right-radius:60px;
            border-bottom-left-radius:60px;
            border-bottom-right-radius:60px;
        }
        .heart{
            position:relative;
            margin:-20px auto;
            width:100px;
            height:90px;
        }
        .heart:before,.heart:after{
            position:absolute;
            content:"";
            width:50px;
            height:80px;
            background:red;
            border-radius:50px 50px 0 0;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }
        .heart:before{
            left:28px;
        }
        .heart:after{
            left:50px;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
        }`