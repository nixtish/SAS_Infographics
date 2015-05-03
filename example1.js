$(function() {

	$( "#Dialog1" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Ok: bar,
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

	$( "#Dialog2" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Upload: upload,
		Close: function() {
			$(this).dialog("close");
		}
	},
	}); 

	$("#imgselect").button().on("click", function(){
		$("#Dialog2").dialog("open");
	});

	function upload() {
		//if($(pic).is(":checked"))
		$("#drag").append($("input[name=img]:checked").val());
		$(this).dialog("close");
	}

//	("#img1").click(function() {
//		("#drag").append('<img src="Images/images.png" style="height: 100px; width: 100px;>');
//	});
		
	$("#chart").draggable();
	$("#drag").draggable();

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

	var counter = 1;

	$("#text").click(function(){
		var div1 = $(document.createElement('div')).attr("id", 'textbox' + counter);
		$("#textbox1").append([div1, '<input type="text"/>']);
	});
	
	$("#textbox1").draggable();

	$("#textbox1").click(function() {
		$("#textprop").css("visibility", "visible");
	});

	$("#textbutton").click(function() {
		//$("#textbox1").remove();
		$("#textbox1").html("");
		$("#textprop").css("visibility", "hidden");
	});

	//Tooltip wizard


	
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