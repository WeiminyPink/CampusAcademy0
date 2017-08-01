var con = document.getElementById('conse');
var onoff=false;//最开始关
var xop=true;

//点击计算器执行操作
function command (num)
{
	var str = con.innerHTML;
	str = (str == '0'?"":str);//如果str是0就选择"",否则选择str
    str += num;
    con.innerHTML = str;
    onoff=true;//开

	play(num);
};
//执行操作符
function tools(n,m)
{
	if(onoff)
	{
		var cc=con.innerHTML;
        cc=(cc==0?"":cc);
        con.innerHTML=cc+n;
        onoff=false;//关

	}
	play(m);
};
//计算等于
function equal(m)
{
	var str = con.innerText;
	var r = eval(str);
	con.innerText = r;         
	play(m);
};
//清空
function clearZero(m)
{
	con.innerText=0;

	play(m);
};
//小数点
function point(m)
{
	if(xop)
	{
	    var num = con.innerText;
	    num = num + ".";
	    con.innerText = num;
	    play(m);
    }
}
//点击播放音乐
function play(num)
{
	var Music=document.getElementById('music');
	Music.src="music/"+num+".m4a";
	Music.play();
}