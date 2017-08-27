//获取cookie
function getCookie(name){
	var arr = document.cookie.split('; ');
	var i = 0;

	for(i=0; i<arr.length; i++){

		var arr2 = arr[i].split('=');
		if(arr2[0] == name){
			return arr2[1];
		}
	}
	return '';
}
//设置cookie
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}

//验证cookie
if(getCookie('a') == 1){
	$(".tips").css("display", "none");
}

$(function(){
	//头部不再提醒
	$(".remind").click(function(){
		document.cookie = "a=1";
		$(".tips").css("display", "none");
	})
	
	//轮播动画
	bannerFade();
	$(".banner").hover(function(){
		clearInterval(timer);
	},function(){
		bannerFade();
	})

	//轮播
    var timer = null;
	var i = 2;
	function bannerFade(){
		timer = setInterval(function(){
			$(".banner_img").parent().parent().css("display","none");
			$(".dot").children().css("background-color", "#fff");
			i--;
			if(i == -1){
				i = 2;
			}
			$(".banner_img").parent().parent().eq(i).fadeIn(500).css("display","block");
			$(".dot").children().eq(i).css("background-color", "#000")
		},5000)
	}

	//点击小圆点播放
	$(".dot").children().click(function(){
		$(".banner_img").parent().parent().css("display","none");
		$(".dot").children().css("background-color", "#fff");
		$(".banner_img").parent().parent().eq($(this).index()).fadeIn(500).css("display","block");
		$(".dot").children().eq($(this).index()).css("background-color", "#000");
		i=$(this).index();
	})

	//课程切换
	var ty = 10,page = 1,psi = 20;
	var wid = $(".left").width();
	course(page,psi,ty);
		
	if(wid==740){
		psi=15;
	}
	$(".tab p").click(function(){
		$(".tab p").css({"background-color":"#fff","color":"#666"});
		$(this).css({"background-color":"#39a030","color":"#fff"});
		if($(this).text()=="产品设计"){
			ty = 10;
		}else{
			ty = 20;
		}
		course(page,psi,ty);
	});

	//页码
	$(".page li").click(function(){
	    if ($(this).is(".page li:eq(0)")) {
	        if ($(".page li").find(".active").is(".page li:eq(1)")) {
	            return;
	        }else{
	            $(".page li").find(".active").addClass("active").next().removeClass();
	            page--;
	            course(page,psi,ty);
	        }
	    }else if($(this).is(".page li:eq(4)")){
	        if ($(".page li").find(".active").is(".page li:eq(3)")) {
	            return;
	        } else {
	            $(".page li").find(".active").addClass("active").prev().removeClass();
	            page++;
	            course(page,psi,ty);
	        }
	    } else if ($(this).is("active")) {
	        return;
	    } else {
	        $(".page li").removeClass();
	        $(this).addClass("active");
	        page = parseInt($(this).text());
	        course(page,psi,ty);
	    }
	});
	course(page,psi,ty);

	//最热滚动
	var $this = $(".line");
    var Timer;
        Timer = setInterval(function() {
            scrollhot($this);
        },
        5000);
    function scrollhot(obj) {
	    var $self = obj.find("ul:first");
	    var lineHeight = $self.find("li:first").height();
	    $self.animate({
	        "margin-top": -lineHeight -20+ "px"
	    },500,
	    function() {
	        $self.css({
	            "margin-top": "0px"
	        }).find("li:first").appendTo($self);
	    })
    }

    //观看视频
    $(".vedio>img").click(function(){
    	$(".playvedio").css("display","block");
    	$(".mask").css("height","3000px");
    })
    $(".playvedio>a").click(function(){
    	$(".playvedio").css("display","none");
    	$(".mask").css("height","0");
    })

    //点击登录
    $(".plus").click(function(){
    	$(".mask").css("height","3000px");
    	$(".log").css("display","block");
    })
     $(".log>a").click(function(){
    	$(".log").css("display","none");
    	$(".mask").css("height","0");
    })
     $(".minuskey").click(function(){
    	$(".minus").css("display","none");
    	$(".plus").css("display","block");
    	$(".fan").css("padding-left","50px");
    })

     //登录弹窗
	$(".minuskey").click(function(){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()-1);
		document.cookie = "b=1;expires"+oDate;
		$(".plus").css("display",'none');
	})
	$(".plus").click(function(){
		if(getCookie('user')==""||getCookie('pass')==""){
			$(".log").css("display", "block");
			$(".mask").css("height", "3000px");
		}else{
			$(".minus").css("display",'block');
		}

	})
	$(".log>a").click(function(){
		$(".log").css("display", "none");
		$(".mask").css("height", "0px");
	})

});

//获取课程
function course(pageNo, psize, type){
	
	$.ajax({
		type:"GET",
		url:"http://study.163.com/webDev/couresByCategory.htm?pageNo="+pageNo+"&psize="+psize+"&type="+type+"" ,
		dataType:"json",
		success:function(data){
			$(".content li").remove();
			for(var i=0;i<psize;i++){
				var $li = $("<li>"+
					"<div class='table'>"+
						"<img src='"+data.list[i].bigPhotoUrl+"'>"+
						"<div>"+
							"<p class='name'>"+data.list[i].name+"</p>"+
							"<p class='who'>"+data.list[i].provider +"</p>"+
							"<p id='number'>"+data.list[i].learnerCount+"</p>"+
							"<p class='price'>￥"+data.list[i].price +"</p>"+
						"</div>"+
					"</div>"+
					"<div class='detail'>"+
						"<div class='totle'>"+
							"<img src='"+data.list[i].bigPhotoUrl+"'>"+
							"<div class='dtl'>"+
								"<p>"+data.list[i].name.substring(0,11)+"...</p>"+
								"<p>"+data.list[i].learnerCount +"人在学</p>"+
								"<p>发布者："+data.list[i].provider +"</p>"+
								"<p>分类： "+data.list[i].categoryName+"</p>"+
							"</div>"+
						"</div>"+
						"<div class='info'>"+data.list[i].description.substring(0,60)+
						"...</div>"+
					"</div>"+
					"</li>");


				$(".content ul").append($li);
			}
		}
	})
}

//获取最热排行数据 
function getHot(){
    $.ajax({
        type: "get",
        url: 'http://study.163.com/webDev/hotcouresByCategory.htm',
        dataType:"json",
        success: function(str) {
            $(".hottable li").remove();
			for(var i=0;i<str.length;i++){
				var $li = $("<li class='hoty'>"+
					"<img src=" + str[i]['middlePhotoUrl'] + ">"+
						"<div class='small'>"+
							"<p>" + str[i]['name'].substr(0, 8) + "...</p>"+
							"<span>" + str[i]['learnerCount'] + "</span>"+
						"</div>"+
					"</li>");

				$(".hottable").append($li);
			}
        },
        error: function(str) {
            alert("获取数据失败");
        }
    });
}
getHot();

//登陆按钮点击效果
$('.submit').mousedown(function(){
	$user = md5($('.user').val());
	$pass = md5($('.password').val());
	$.ajax({
		type: 'get',
        url:"http://study.163.com/webDev/login.htm?userName="+$user+"&password="+$pass+"",
        success : function(data) {
            if (data==1) {
            	$.ajax({
            		type: 'get',
            		url:'http://study.163.com /webDev/ attention.htm',
                    success : function(data) {
                        setCookie('logtable',true,30);
            	        setCookie('logsee',true,30);
            	        $('.log').css('display','none');
            	        $(".plus").css("display","none");
            	        $(".minus").css("display","block");
                    }
                })
            }
            else {
            	alert('用户名或密码错误！请重新输入');
            }
        }
	});
});







