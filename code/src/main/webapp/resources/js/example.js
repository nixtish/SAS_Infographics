$(function() {
	
	function addData() {
		$("#main p").append($("input[name=data]:checked").val());
		$(this).dialog("close");
	}

	$( "#Dialog1" ).dialog({
	autoOpen: false,
	modal: true,
	buttons:{
		Ok: addData,
		Close: function() {
			$(this).dialog("close");
		}
	},
	}); 
		
	var form = $(this).find("for").on("submit", function(event){
		event.preventDefault();
		addData();
	});
			
	$("#opendialog").button().on("click", function(){
		$("#Dialog1").dialog("open");
	});

	$("#OW").button().on("click", function(){
			$("p").html("Changed data");
		});
});