var items = [];
$.ajax({
    url: 'http://weixin.jirengu.com/weather',
    dataType: 'json',
    type: "GET",
    success: function(data) {
        $.each(data, function(key, val) {
        	if(key=="weather"){
        		$.each(val,function(key,val){
        			$.each(val,function(key,val){
        				if(key=="future"){
        					items = val;
        				}
        			})
        		})
        	}
    	})
    }
}).done(function(){
    var cu = 0;
    $.each(items,function(i,days){
    	$('#innerline').append("<div class='day'></div>").find('div:eq('+cu+++')').append("<p>" + days['date'] + "</p>")
        .append("<img src='http:\/\/weixin.jirengu.com/images/weather/code/" + days['code1'] + ".png'>~")
        .append("<img src='http:\/\/weixin.jirengu.com/images/weather/code/" + days['code2'] + ".png'>")
        .append("<p><span>" + days['low'] + "</span>℃~<span>" + days['high'] + "</span>℃</p>")
        .append("<p><span>" + days['text'] + "</span>")
        .append("<p><span>"+ days['wind'] + "</span></p>")
    })
}).done(function(){
	var lis = $(".nav>li");
	var divs = $(".day");
	var iDay = 0;
	lis.click(function(){
		//今天
		if($(this).is('.nav li:eq(0)')){
            $('.day:eq(0)').slideUp(500);
		}
        //下一天
        if($(this).is('.nav li:eq(2)')){
            if(iDay != divs.length-1){
                $('.day:eq('+ iDay++ +')').slideUp(500);
            }
        }
        //上一天
        if($(this).is('.nav li:eq(1)')){
            if(iDay!=0){
                $('.day:eq('+ --iDay +')').slideDown(500);
            }
        }
		var active = $(this);//选中的li分类
		lis.removeClass();//清空li CSS属性
		active.addClass("active");//选中li添加属性
	});
});
