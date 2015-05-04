$(function() {

// Open File Dialog Box

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

//Upload Image Dialog Box

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
		if($(pic).is(":checked"))
		$("#drag").append($("input[name=img]:checked").src());
	}

//Draggable components
		
	$("#chart").draggable();
	$("#drag").draggable();

//Background properties

	$("#canvas1").click(function() {
		//$("#imageprop").css("visibility", "hidden");
		$("#canvasprop").css("visibility", "visible");
		//$("#imageprop").toggle();
	});

	$("#white").on("click", function(){
		$("#canvas1").css("background-color", "white");
	});
	$("#blue").on("click", function(){
		$("#canvas1").css("background-color", "#CCE6FF");
	});
	$("#green").on("click", function(){
		$("#canvas1").css("background-color", "#70DB70");
	});
	$("#grey").on("click", function(){
		$("#canvas1").css("background-color", "lightgrey");
	});
	$("#red").on("click", function(){
		$("#canvas1").css("background-color", "#E60000");
	});

//Image properties

	/*$("#image").click(function() {
		//$("#canvasprop").toggle();
		//$("#canvasprop").css("visibility", "");
		$("#imageprop").css("visibility", "visible");
	});
	*/

//Textbox 

	var counter = 1;
	var rem=0;
	$("#text").click(function(){
		var newDiv = $(document.createElement('div')).attr("id", 'textbox' + counter);
		newDiv.after().html('<textarea name="text' + counter + 
	      '" id="text' + counter + '"></textarea>');
		newDiv.appendTo("#canvas1");

		$("#textbox"+counter).draggable();
		counter++;
		rem++;
		$("#textprop").css("visibility", "visible");
	});
	
	$("#textbutton").click(function() {
		if(counter>0)
		{
			counter--;
			$("#textbox"+counter).remove();
			//counter--;
			rem--;
		}
		if(rem<1)
		{
			$("#textprop").css("visibility", "hidden");
		}
		

	});

	/*$("#textbox"+counter).on("click", "#text"+counter, function() {
		$("#textprop").css("visibility", "visible");
	});*/

	$("#textbox1").click(function(){
		$("#textprop").css("visibility", "visible");
	});

//Tooltips Dialog Boxes

	$("#wizard").click(function(){
		$("#Dialog3").dialog("open");
	});

	$( "#Dialog3" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Cancel: function() {
			$(this).dialog("close");
		},
        Next: function(){
            $(this).dialog("close");
            $("#TooltipTypeDialog").dialog("open");
        }
	},
	}); 
    
    $( "#TooltipTypeDialog" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Cancel: function() {
			$(this).dialog("close");
		},
        Previous: function(){
            $(this).dialog("close");
            $("#TooltipsDialog").dialog("open");
        },
        Next: function(){
            $(this).dialog("close");
            $("#TooltipProperties").dialog("open");
        }
	},
	}); 
		
    $( "#TooltipProperties" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Cancel: function() {
			$(this).dialog("close");
		},
        Previous: function(){
            $(this).dialog("close");
            $("#TooltipTypeDialog").dialog("open");
        },
        //Next: addData,
        }
	}); 
	
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

//	("#img1").click(function() {
//		("#drag").append('<img src="Images/images.png" style="height: 100px; width: 100px;>');
//	});