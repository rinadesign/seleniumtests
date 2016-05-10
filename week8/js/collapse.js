$(function(){
	$("#logInCollapse").hide();
	$("#showLog").click(function(){
		$("#logInCollapse").toggle();
		$("#signUpCollapse").hide();
	});
	$("#signUpCollapse").hide();
	$("#showSign").click(function(){
		$("#signUpCollapse").toggle();
		$("#logInCollapse").hide();
	});
	$("#signOut").click(function(){
		window.location.href="index.html";
	});
	
});