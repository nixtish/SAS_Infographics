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
	
	$( "#Dialog2" ).dialog({
		autoOpen: false,
		modal: true,
		buttons:{
			//Ok: bar,
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
	$("#selectDataset").submit(function(event) {

        event.preventDefault();
        var formData = new FormData(this);
        $.ajax({
        	url: $(this).attr("action"),
        	type: $(this).attr("method"),
        	data: formData,
        	dataType: 'html',
        	mimeType: $(this).attr("enctype"),
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
    });
	
	$("#Dialog2").on('submit', '#selectData', function(event) {

        event.preventDefault();
        $.ajax({
        	url: $(this).attr("action"),
        	type: $(this).attr("method"),
        	data: $(this).serialize(),
        	dataType: 'html',
        	success:function(response)
        	{
        		$("#Dialog2").dialog("close");
        		$("#chart").empty().append(response);
        	},
        });
        //$(this).unbind(event);
    });
});