

----------

js:`<script type="text/javascript">
        window.onload=function(){
            var container=document.getElementById('container');
            var list=document.getElementById('list');
            var buttons=document.getElementById('buttons').getElementsByTagName('span');
            var prev=document.getElementById('prev');
            var next=document.getElementById('next');
            var index=1;

            function showButton(){//设置小圆点滚动
                for(var i=0;i<buttons.length;i++){//让滚过的小圆点不亮，开始
                    if(buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }//让滚过的小圆点不亮，结束
                buttons[index - 1].className='on';
            }

            function animate(offset){//无限滚动开始
                var newLeft=parseInt(list.style.left) + offset;
                list.style.left=newLeft + 'px';//parseInt是只取数值忽略单位
                if(newLeft>-600){
                    list.style.left=-3000+'px';
                }
                if(newLeft<-3000){
                    list.style.left=-600+'px';
                }
//
            }//无限滚动结束

            next.onclick=function(){//点击箭头事件开始
                if(index == 5){
                    index = 1;
                }
                else{
                    index += 1;
                }
                showButton();
                animate(-600);

            }
            prev.onclick=function(){
                if(index == 1){
                    index = 5;
                }
                else{
                    index -= 1;
                }
                showButton();
                animate(600);

            }//点击箭头事件结束

            for(var i = 0;i<buttons.length;i++){
                buttons[i].onclick=function(){
                    if(this.className == 'on'){
                        return;
                    }
                    var myIndex=parseInt(this.getAttribute('index'));//getAttribute既可以获取自带的属性，也可以获取自定义的属性
                    var offset=-600 * (myIndex - index);
                    animate(offset);
                    index=myIndex;
                    showButton();
                }
            }
        }
    </script>`


----------

html:`<div id="container">
    <div id="list" style="left:-600px;">
        <img src="images/5.jpg" title="pic" alt="pic" />
        <img src="images/1.jpg" title="pic" alt="pic" />
        <img src="images/2.jpg" title="pic" alt="pic" />
        <img src="images/3.jpg" title="pic" alt="pic" />
        <img src="images/4.jpg" title="pic" alt="pic" />
        <img src="images/5.jpg" title="pic" alt="pic" />
        <img src="images/1.jpg" title="pic" alt="pic" />
    </div>
    <div id="buttons">
        <span index="1" class="on"></span>
        <span index="2"></span>
        <span index="3"></span>
        <span index="4"></span>
        <span index="5"></span>
    </div>
    <a href="javascript:;" class="arrow" id="prev">&lt;</a>
    <a href="javascript:;" class="arrow" id="next">&gt;</a>
</div>`