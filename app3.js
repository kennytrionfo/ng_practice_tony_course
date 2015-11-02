$(document).ready(function() {

	var currentStep = 0;

	$("#step1").hide();
	$("#step2").hide();

	$("#btnStep1").click(function() {
		$("#step1").show();
		$("#step2").show();

		currentStep = 1;
	})

}