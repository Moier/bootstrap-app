
// $(document).ready(function(){
// 	$(".modal").modal("show");
// });


function formsubmit(){
	var email = $("#form-email").val();
	var password = $("#form-password").val();
	var file = $("#form-file").val();
	var checkbox = $("#form-check").prop("checked");
	var radio = $("input[name='inlineRadioOptions']:checked").val();
	alert(email+" "+password+" "+file+" "+checkbox+" "+radio);
}


function changeValue(){

	var width = $("#progressbarid").width();
	var totalWidth = $(".progress").width();
	var percentWidth = width / totalWidth * 100;

	if(percentWidth + 10 <= 100){
		percentWidth += 10;
	}else{
		percentWidth = 100;
	}
	 $("#progressbarid").css({"width":percentWidth+"%"});
	 $("#progressbarid").html(percentWidth+"%");
}