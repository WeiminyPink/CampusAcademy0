var btn1=document.getElementById('dl');
var btn2 = document.getElementsByTagName('input')[0];
var btn3 = document.getElementById('btn');
var mask = document.getElementById('mask');
var mask2 = document.getElementById('mask2');
var login = document.getElementById('login');

btn1.addEventListener('click', toShow,false);
btn2.addEventListener('click', toHidden,false);
btn3.addEventListener('click', toJudge,false);
//btn3.addEventListener('click', toShow,false);
mask2.addEventListener('click', toHidden,false);
login.addEventListener('mousedown', toDown,false);
login.addEventListener('mouseup', toUp, false);

    //居中
    toCenter();
	function toCenter(){
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHight;
		login.style.top = (height-300)/2+'px';
		login.style.left = (width-450)/2+'px';
		/*var sHeight=document.documentElement.scrollHeight;//735
        var sWidth=document.documentElement.scrollWidth;//1536
        var dHeight=login.offsetHeight;
        var dWidth=login.offsetWidth;
		login.style.left=(sWidth-dWidth)/2+'px';
		login.style.top=(sHeight-dHeight)/2+'px';*/
	}
	//显示登录弹窗
	function toShow(){
		mask.style.opacity = '0.5';
		login.style.display = 'block';
	}
	//隐藏登录弹窗
	function toHidden(){
		mask.style.opacity = '1';
		login.style.display = 'none';
	}

    //判断
	function toJudge(){
		event.preventDefault();
		var name = document.getElementsByTagName('input')[1].value;
		var password = document.getElementsByTagName('input')[2].value;
		var jud1 = false;
		var jud2 = false;
		var regex = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
		//alert(password);

		if(/[^\u4e00-\u9fa5a-zA-Z]/.test(name)){
			jud1 = false;
		}else{
			jud1=true;
		}
		//alert(/[^0-9]/.test(password));
		if(!/[0-9]{6,20}/.test(password)){
				jud2=false;
		}else{jud2=true;}

		if(jud1 && jud2){
			alert('登录成功！');
			
		}else if(!jud1 && !jud2){
			alert('用户名应为中英文字符');
			alert('至少6位数字的密码');
		}else if(!jud1){
			alert('用户名应为中英文字符');
		}else if(!jud2){
			alert('至少6位数字的密码');
		}
	}



	//拖动
	function toDown(ev){
		var oEvent = ev|| event;
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
		oldClientX = oEvent.clientX-login.offsetLeft;
		oldClientY = oEvent.clientY-login.offsetTop;
		login.style.cursor = 'move';
		login.addEventListener('mousemove', toMove, false);
		login.addEventListener('mouseup', toUp, false);
	}
	function toMove(ev){
		var oEvent = ev|| event;
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
		login.style.left = oEvent.clientX-oldClientX + scrollLeft +'px';
		login.style.top = oEvent.clientY-oldClientY + scrollTop +'px';
	}
	function toUp(){
		login.style.cursor = 'auto';
		login.removeEventListener('mousedowm',toDown,false);
		login.removeEventListener('mousemove',toMove,false);
	}
