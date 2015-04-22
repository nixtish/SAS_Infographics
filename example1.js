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

	$("#bg").on("click", function(){
		$("#canvas1").css("background-color", "red");
	});
		
	$("#chart").draggable();

	$("#image").draggable();

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