//支持IE的早期版本
var EventUtil = {
        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        },
        removeHandler: function(element, type, handler) {
            if (event.removeEventListener) {
                event.removeEventListener(type, handler, false);
            } else if (event.detachEvent) {
                event.detachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        },
        getEvent: function(event) {
            return event ? event : window.event;
        }
    }
var request= new XMLHttpRequest();
var totle = document.getElementById('all');
var aDiv = document.getElementsByTagName('div')[0];
var left = document.getElementsByTagName('a')[0];
var right = document.getElementsByTagName('a')[1];
var i = 0;
var flag = true;
var timer;

request.open('get', 'http://study.163.com/webDev/hotcouresByCategory.htm', true);
request.send(null);
var aWrap;

//获取json中的数据并转换成js
request.onreadystatechange = function(){
	if(request.readyState==4){
		if((request.status >= 200 && request.status < 300) || request.status == 304){
			aWrap = JSON.parse(request.responseText);
			child();
		}
	}
}

    //屏幕自适应
	screen();
	window.onresize = function(){
		screen();
	}
	function screen(){
		var screenW = window.innerWidth;
		aDiv.style.left = (screenW-440)/2 + 'px';
	}

	//创建子节点
	function child(){
        for (i; i < aWrap.length; i++) {
            var oLi = document.createElement('li');

            var oImg = document.createElement('img');
            oImg.src = aWrap[i].bigPhotoUrl;
            var oDiv = document.createElement('div');
            oLi.appendChild(oImg);
            var p1 = document.createElement('p');
            p1.innerHTML = "name:<span>" + aWrap[i].name + "</span>";
            oDiv.appendChild(p1);
            var p2 = document.createElement('p');
            p2.innerHTML = "provider:<span>" + aWrap[i].provider + "</span>";
            oDiv.appendChild(p2);
            var p3 = document.createElement('p');
            p3.innerHTML = "targetUser:<span>" + aWrap[i].targetUser + "</span>";
            oDiv.appendChild(p3);
            var p4 = document.createElement('p');
            p4.innerHTML="Publish:<span>"+aWrap[i].firstPublishTime+"</span>";
            oDiv.appendChild(p4);
            var p5 = document.createElement('p');
            p5.innerHTML = "providerDesc:<span>" + aWrap[i].providerDesc + "</span>";
            oDiv.appendChild(p5);

            oLi.appendChild(oDiv);
            all.appendChild(oLi);
        }
	}

	//添加点击事件
	right.addEventListener('click', function(){
		if(flag){
			slide(-440);
		}
	},false);
	left.addEventListener('click', function(){
		if(flag){
			slide(440);
		}
	},false);

	//滚动
	function slide(offset){
		flag = false;	
		var all = document.getElementById('all');
		if(all.offsetLeft > -440){
			all.style.left = '-8800px';
		}
		if(all.offsetLeft<-8800){
			all.style.left = '-440px';
		}
		var newOffset = offset + all.offsetLeft;
		var time = 440;
		var interval = 10;
		var speed = offset/(time/interval);
		function scroll(){
			if(speed>0 && all.offsetLeft<newOffset||speed<0 && all.offsetLeft>newOffset){
				all.style.left = all.offsetLeft + speed + 'px';
				setTimeout(function(){
					scroll();
				},interval)
			} else {
				flag = true;
			}
		}
		scroll();
	}

	//自动轮播
	function play(){
		timer = setInterval(function(){
			slide(-440);
		},1500)
	}
	play();
	//停止播放
	aDiv.addEventListener('mouseover', function(){
		clearInterval(timer);
	},false)
	aDiv.addEventListener('mouseout', function(){
		play();
	},false)