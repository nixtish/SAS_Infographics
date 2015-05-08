$(function() {

	var chartcnt = 1;
	var dynbtn = 0;
// Open File Dialog Box

	$( "#Dialog1" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Cancel: function() {$(this).dialog("close");},
		//SelectData: selectDatasetsubmit,
		Done: showSelectedDataset
		
	},
	}); 
	
	$( "#Dialog2" ).dialog({
		autoOpen: false,
		modal: true,
		buttons:{
			Cancel: function() { $(this).dialog("close"); },
			Done: selectDataSubmit
		},
	}); 
	
	$( "#Dialog3" ).dialog({
		autoOpen: false,
		modal: true,
		buttons:{
			Cancel: function() { $(this).dialog("close");},
	        Done: selectImage
	        },
	});
	
	$( "#Dialog4" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Cancel: function() {
			$(this).dialog("close");
		},
        Next: function(){
            $(this).dialog("close");    
            $("#tooltipform input[name=chartid]").val($("#selectchart").val());
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
        Done: getTooltipGraph,
        }
	}); 
//Use Case 15
	
	$( ".dyndiv" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Cancel: function() {$(this).dialog("close");},
		Done: createFilterBtn
	},
	}); 
	
	$("#openfile").button().on("click", function(){
		$("#Dialog1").dialog("open");
	});

	$("#selectdata").button().on("click", function(){
		$("#Dialog1").dialog("open");
	});
	
	$("#adchart a").on("click", function(){
		$("#Dialog2").dialog("open");
	});
	
	//Tooltips Dialog Boxes
	$("#wizard").click(function(){
		$("#selectchart").empty().append('<option value="selectchart" selected> Select Chart</option>');
		for(i=1;i<chartcnt;i++){
        	var val = "barchart"+i;
            $("#selectchart").append('<option value="'+val+'">'+val+'</option>')
        }
		$("#Dialog4").dialog("open");
	});
	
	$("#imgselect").click(function(){
		$("#Dialog3").dialog("open");
	});
	
	$("#chart").on("click", ".chart", function(){
		$("#desc").css("display", "none");
		$("#chartprop").css("visibility", "visible");
	});

	$("#chartbutton").button().on("click", function(){
		$.ajax({
        	url: "createFilter",
        	type: "GET",
        	dataType: 'html',
        	success:function(response)
        	{
        		var content = $($.parseHTML(response)).filter("#content");
        		//alert(response);
        		dynbtn++;
        		$("#dynamicGraphic"+dynbtn).empty().append(response);      		
        		$("#chartprop").css("visibility", "hidden");
        		$("#dynbtn"+dynbtn).dialog("open");
        	},
        });
	});
		
	$("#chart").draggable();

	$("#drag").draggable();

	//$("#image").resizable();

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
		var height = $('#canvas1').height();
		var width = $('#canvas1').width();
		var size = width+"px "+height+"px";
		$("#canvas1").css({"background-image":"url('resources/images/pic2.png')", "background-size":size});
	});

	$("#pic2").on("click", function(){
		$("#canvas1").css("background-color", "inherit");
		var height = $('#canvas1').height();
		var width = $('#canvas1').width();
		var size = width+"px "+height+"px";
		$("#canvas1").css({"background-image":"url('resources/images/pic3.png')", "background-size":size});
	});

	$("#pic3").on("click", function(){
		$("#canvas1").css("background-color", "inherit");
		var height = $('#canvas1').height();
		var width = $('#canvas1').width();
		var size = width+"px "+height+"px";
		$("#canvas1").css({"background-image":"url('resources/images/pic4.png')", "background-size":size, "background-repeat":"no-repeat"});
	});

	//Image properties
	$("#canvas1").on('click' , '.image', function() {
		$("#canvasprop").toggle();
		$("#imageprop").css("visibility", "visible");
	});

	//Textbox
	var counter = 1;
	var rem=0;
	$("#text").click(function(event){
		event.preventDefault();
		var newDiv = $(document.createElement('div')).attr("id", 'textbox' + counter);
		newDiv.after().html('<textarea name="text'+counter+'" id="text'+counter+'"style="z-index:5;position:relative"></textarea>');
		newDiv.appendTo("#canvas1");

		$("#textbox"+counter).draggable();
		$("#text"+counter).css({"font-size":"10","font-weight":"bold"});
		$("#text"+counter).focus();
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
	function selectDatasetsubmit(){

        var formData = new FormData($("#selectDataset")[0]);
        $.ajax({
        	url: $('#selectDataset').attr("action"),
        	type: $('#selectDataset').attr("method"),
        	data: formData,
        	dataType: 'html',
        	mimeType: $('#selectDataset').attr("enctype"),
        	contentType: false,
            cache: false,
            processData:false,
        	success:function(response)
        	{
        		$("#Dialog1").dialog("close");
        		var content = $($.parseHTML(response)).filter("#content");
                $("#Dialog2").empty().append(content);               
                $("#Dialog2").dialog("open");
        	},
        });
        //$(this).unbind(event);
    }
	
	function selectDataSubmit() {
		$("#selectData input[name=chartid]").val("barchart"+chartcnt);
        $.ajax({
        	url: $('#selectData').attr("action"),
        	type: $('#selectData').attr("method"),
        	data: $('#selectData').serializeArray(),
        	dataType: 'html',
        	success:function(response)
        	{
        		$("#Dialog2").dialog("close");
        		//var content = $($.parseHTML(response)).filter("#content");
        		//alert(response);
        		$("#barchart"+chartcnt).empty().append(response);
        		$("#barchart"+chartcnt).draggable();
                chartcnt++;
        	},
        });
    }
	
	function showSelectedDataset() {

		var formData = new FormData($("#selectDataset")[0]);
        $.ajax({
        	url: $('#selectDataset').attr("action"),
        	type: $('#selectDataset').attr("method"),
        	data: formData,
        	dataType: 'html',
        	mimeType: $('#selectDataset').attr("enctype"),
        	contentType: false,
            cache: false,
            processData:false,
        	success:function(response)
        	{
        		$("#Dialog1").dialog("close");
        		var content = $($.parseHTML(response)).filter("#content");
                $("#Dialog2").empty().append(content);
                $("#selectedDataSet").empty().append("sample.xlsx");
        	},
        });
    }
	var imgcounter=1;
	var imgrem = 0;
	function selectImage(){
		$("#Dialog3").dialog("close");
		var value = $('input[name="img"]:checked').val() ;
		//alert("message:"+value);
		if(value !== 'file' ){
			var newDiv = $(document.createElement('div')).attr("id", 'image' + imgcounter);
			newDiv.after().html('<img class="image" src="'+value+'" style="width:500px;height:300px;z-index:1;position:relative">');
			newDiv.appendTo("#canvas1");

			$("#image"+imgcounter).draggable();
			imgcounter++;
		} else {
			var formData = new FormData($("#imageform")[0]);
	        $.ajax({
	        	url: $('#imageform').attr("action"),
	        	type: $('#imageform').attr("method"),
	        	data: formData,
	        	dataType: 'html',
	        	mimeType: $('#imageform').attr("enctype"),
	        	contentType: false,
	            cache: false,
	            processData:false,
	        	success:function(response)
	        	{
	        		var imageurl = $($.parseHTML(response)).filter("#content").html();
	        		var newDiv = $(document.createElement('div')).attr("id", 'image' + imgcounter);
	    			newDiv.after().html('<img class="image" src="'+imageurl+'" style="width:500px;height:300px;z-index:1;position:relative">');
	    			newDiv.appendTo("#canvas1");

	    			$("#image"+imgcounter).draggable();
	    			imgcounter++;
	    			imgrem++;
	        	},
	        });	
		}
	}
	
	function getTooltipGraph(){
		$.ajax({
        	url: $('#tooltipform').attr("action"),
        	type: $('#tooltipform').attr("method"),
        	data: $('#tooltipform').serializeArray(),
        	dataType: 'html',
        	success:function(response)
        	{
        		$("#TooltipProperties").dialog("close");
        		//var content = $($.parseHTML(response)).filter("#content");
        		//alert(response);
        		var id = $("#tooltipform input[name=chartid]").val();
        		$("#"+id).empty().append(response);
        	},
        });
	}
	var filtercounter=1
	function createFilterBtn(){
		var id = "#dynamicGraphic"+dynbtn;
		var val = $(id+" input[name=btnname]").val();
		var newDiv = $(document.createElement('div')).attr("id", 'filterbtn' + filtercounter);
		newDiv.after().html('<button id="'+dynbtn+'" type="button" class="filter" style="z-index:3;position:relative">'+val+'</button>');
		newDiv.appendTo("#canvas1");
		$(this).dialog("close");
		//alert("id:"+newDiv.id);
		$("#filterbtn"+filtercounter).draggable();
		filtercounter++;
	}
	$('#canvas1').on('click','.filter', function (event){

		//alert(this.id);
		var id=this.id;
		var formID = "#dynamicGraphic"+id;
		$.ajax({
        	url: $(formID).attr("action"),
        	type: $(formID).attr("method"),
        	data: $(formID).serializeArray(),
        	dataType: 'html',
        	success:function(response)
        	{
        		//alert(response);
        		$("#barchart2").empty().append(response);			
        	},
        });
	});
	$("#imgbutton").click(function() {
		if(imgcounter>0)
		{
			imgcounter--;
			$("#image"+imgcounter).remove();
			//counter--;
			imgrem--;
		}
		if(imgrem<1)
		{
			$("#imageprop").css("visibility", "hidden");
		}
		

	});
});