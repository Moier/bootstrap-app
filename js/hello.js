$(document).ready(function(){
	$(".modal").modal("show");
});


function formsubmit(){
	var email = $("#form-email").val();
	var password = $("#form-password").val();
	var file = $("#form-file").val();
	var checkbox = $("#form-check").prop("checked");
	var radio = $("input[name='inlineRadioOptions']:checked").val();
	alert(email+" "+password+" "+file+" "+checkbox+" "+radio);
}