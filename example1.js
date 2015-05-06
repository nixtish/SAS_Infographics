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

//Use Case 15
	
	$( "#Dialog15" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		//Ok: ,
		Close: function() {
			$(this).dialog("close");
		}
	},
	}); 

	$("#chart").on("click", function(){
		$("#desc").css("display", "none");
		$("#chartprop").css("visibility", "visible");
	});

	$("#chartbutton").button().on("click", function(){
		$("#Dialog15").dialog("open");
		$("#chartprop").css("visibility", "hidden");
	});

//Draggable components
		
	$("#chart").draggable();
	$("#drag").draggable();

//Background properties

	$("#canvas1").click(function() {
		$("#desc").css("display", "none");
		$("#canvasprop").css("visibility", "visible");
	});

	$("#white").on("click", function(){
		$("#canvas1").css("background-image", "none");
		$("#canvas1").css("background-color", "white");
	});
	$("#blue").on("click", function(){
		$("#canvas1").css("background-image", "none");
		$("#canvas1").css("background-color", "#CCE6FF");
	});
	$("#green").on("click", function(){
		$("#canvas1").css("background-image", "none");
		$("#canvas1").css("background-color", "#70DB70");
	});
	$("#grey").on("click", function(){
		$("#canvas1").css("background-image", "none");
		$("#canvas1").css("background-color", "lightgrey");
	});
	$("#red").on("click", function(){
		$("#canvas1").css("background-image", "none");
		$("#canvas1").css("background-color", "#E60000");
	});

	$("#pic1").on("click", function(){
		$("#canvas1").css("background-color", "inherit");
		$("#canvas1").css({"background-image":"url('Images/pic2.png')", "background-size":"722px 560px"});
	});

	$("#pic2").on("click", function(){
		$("#canvas1").css("background-color", "inherit");
		$("#canvas1").css({"background-image":"url('Images/pic3.png')", "background-size":"722px 560px"});
	});

	$("#pic3").on("click", function(){
		$("#canvas1").css("background-color", "inherit");
		$("#canvas1").css({"background-image":"url('Images/pic4.png')", "background-size":"722px 560px"});
	});
	
//Textbox 

	var counter = 1;
	var rem=0;
	$("#text").click(function(){
		var newDiv = $(document.createElement('div')).attr("id", 'textbox' + counter);
		newDiv.after().html('<textarea name="text' + counter + 
	      '" id="text' + counter + '"></textarea>');
		newDiv.appendTo("#canvas1");

		$("#textbox"+counter).draggable();
		$("#text"+counter).css({"font-size":"10","font-weight":"bold"});
		counter++;
		rem++;
		$("#textprop").css("visibility", "visible");
		$("#desc").css("display", "none");
	});
	
	$("#textbox"+counter).keyup(function(){
		//if ($(this).val>0)
		//{
			$(this).css("border-color", "transparent");
		//}
	});

	$("#textbutton").click(function() {
		//$("#text"+counter).css("border-color", "transparent");
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
		$("#desc").css("visibility", "hidden");
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