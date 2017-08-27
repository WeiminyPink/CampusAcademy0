$("form :input.required").each(function(){
	var $required = $("<strong class='warn'>*</strong>");
	$(this).parent().append($required);
});

$('form :input').blur(function(){
	var $parent = $(this).parent();
	$parent.find(".tips").remove();
	$parent.find(".tipss").remove();

	//验证用户名
	if($(this).is('#name')){
		if(this.value == "" ||this.value.length<6){
			var error = '请输入至少6位的用户名';
			$parent.append('<span class="tips onError">'+error+'</span>');
		}else{
			var vic = '输入正确';
			$parent.append('<span class="tipss onSuccess">'+vic+'</span>');
		}
	}

	//验证电话
	if($(this).is('#tel')){
		if(this.value.length!=11 || /[^0-9]/.test($('#tel').val())){
			var error = '请输入正确的电话';
			$parent.append('<span class="tips onError">'+error+'</span>');
		}
		else{
			var vic = '输入正确';
			$parent.append('<span class="tipss onSuccess">'+vic+'</span>');
		}
	}

	//验证邮箱
	if($(this).is('#mail')){
		if(this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value))){
			var error = '请输入正确的E-Mail';
			$parent.append('<span class="tips onError">'+error+'</span>');
		}else{
			var vic = '输入正确';
			$parent.append('<span class="tipss onSuccess">'+vic+'</span>');
		}
	}

	//验证密码
	if($(this).is('#password')){
		if(this.value == "" ||this.value.length<6){
			var error = '请输入至少6位密码';
			$parent.append('<span class="tips onError">'+error+'</span>');
		}else{
			var vic = '输入正确';
			$parent.append('<span class="tipss onSuccess">'+vic+'</span>');
		}
	}
	if($(this).is("#passagain")){
	    if($('#password').val() == $(this).val()){
		    var vic = '输入正确';
		    $parent.append('<span class="tipss onSuccess">'+vic+'</span>');
	    }else{
		    var error = '输入密码不一致';
		    $parent.append('<span class="tips onError">'+error+'</span>');
	    }
    }
}).keyup(function(){
	$(this).triggerHandler("blur");
}).focus(function(){
    $(this).triggerHandler("blur");
});//end blur

//提交，最终验证。
$('#sub').click(function(){
    $("form :input.required").trigger('blur');
        var numError = $('form .onError').length;
        if(numError){
             return false;
        } 
         alert("注册成功!欢迎加入仙女团！");
});

//重置
$('#res').click(function(){
    $(".tips").remove(); 
});
