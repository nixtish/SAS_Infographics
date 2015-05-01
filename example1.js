$(function() {

	$( "#Dialog1" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Ok: bar,
		//Ok: function() {$(this).dialog("close");},
		Close: function() {
			$(this).dialog("close");
		}
	},
	}); 
	
	$("#openfile").button().on("click", function(){
		$("#Dialog1").dialog("open");
	});

	$("#selectdata").button().on("click", function(){
		$("#Dialog1").dialog("open");
	});

	function bar() {
		$("#chart").load("trial_copy.html");
		$(this).dialog("close");
	}
		
	$("#chart").draggable();

	$("#drag").draggable();

	//$("#image").resizable();

	//Background properties
	$("#canvas1").click(function() {
		$("#canvasprop").css("visibility", "visible");
		//$("#imageprop").toggle();
	});
	$("#white").on("click", function(){
		$("#canvas1").css("background-color", "white");
	});
	$("#blue").on("click", function(){
		$("#canvas1").css("background-color", "blue");
	});
	$("#green").on("click", function(){
		$("#canvas1").css("background-color", "green");
	});
	$("#grey").on("click", function(){
		$("#canvas1").css("background-color", "grey");
	});

	//Image properties
	$("#image").click(function() {
		$("#canvasprop").toggle();
		$("#imageprop").css("visibility", "visible");
	});

	//Textbox


	$("#text").click(function(){
		$("#textbox1").append('<input type="text"/>');
	});
	
	$("#textbox1").draggable();

	$("#textbox1").click(function() {
		$("#textprop").css("visibility", "visible");
	});

	$("#textbutton").click(function() {
		$("#textbox1").remove();
	});
	/*var form = $(this).find("for").on("submit", function(event){
		event.preventDefault();
		addData();
	});
			
	function addData() {
		$("#main p").append($("input[name=data]:checked").val());
		$(this).dialog("close");
	}

	$("#OW").button().on("click", function(){
			$("p").html("Changed data");
		});*/
});