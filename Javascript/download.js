var download = function() {
	var allTextInputed = $("#main-input").val();

	$("html").html(allTextInputed);
	alert(
		"Press [Enter] or click [OK] and then press [Control] + [S] to download."+
	    " Remember to change the .html to .txt!");
}




$(document).ready(function() {

	$("#download-button").click(function() {
		download();
	});

});