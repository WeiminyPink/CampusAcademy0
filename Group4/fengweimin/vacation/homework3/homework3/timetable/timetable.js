//隐藏与显示
$(".expandAll").click(function(){
  $(".linemajor .lineevent").stop(true,false).toggle(500);
});

$(".linemaker").click(function(){
  //$(this).parent().siblings().find(".lineevent").css("display","none");
  $(this).nextAll().find(".lineevent").stop(true,false).toggle(500);
});

$(".mainevent").click(function(){
	$(this).siblings(".lineevent").stop(true,false).toggle(500);
});

//滚动
var iTop = 0;//设置一个变量
$("body").on("mousewheel", function(event){
	if (event.originalEvent.wheelDelta < 0){
		if(iTop==$(this).find(".linemajor").length-1){
			return;
		}
	 	 $(this).find(".linemajor:eq("+(iTop++)+") ").stop(true,false).slideUp(600);
	}else{
		if(iTop==0){
			return;
		}
	     $(this).find(".linemajor:eq("+(--iTop)+") ").stop(true,false).slideDown(600);
		}
});
