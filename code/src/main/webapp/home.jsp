<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>

  <title>Infographics Tool</title>

  <link href="<c:url value='/resources/js/jQueryAssets/jquery.ui.core.min.css' />" rel="stylesheet" type="text/css">
  <link href="<c:url value='/resources/js/jQueryAssets/jquery.ui.theme.min.css' />" rel="stylesheet" type="text/css">
  <link href="<c:url value='/resources/js/jQueryAssets/jquery.ui.dialog.min.css' />" rel="stylesheet" type="text/css">
  <link href="<c:url value='/resources/js/jQueryAssets/jquery.ui.resizable.min.css' />" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/page.css'/>">
  <link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/style1.css'/>">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <script src="<c:url value='/resources/js/jQueryAssets/jquery-1.11.1.min.js' />" type="text/javascript"></script>
  <script src="<c:url value='/resources/js/jQueryAssets/jquery.ui-1.10.4.dialog.min.js' />" type="text/javascript"></script>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <script type="text/javascript" src="<c:url value='/resources/js/example1.js' />"></script>
  <script type="text/javascript" src="<c:url value='/resources/js/functions.js' />"></script>
  <script src="http://d3js.org/d3.v3.min.js"></script>
  <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
  <script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
</head>

<body>

  <nav id="pageheader" class="navbar navbar-inverse">
    <p class="navbar-brand" style="color: white;">SAS Infographics Tool<p>
  </nav>

  <div class="container-fluid">

<!--Left nav bar-->

		<div class = "row">
			<div class="col-md-2 lsidebar"> 
  			<ul class="nav nav-sidebar">
          <li><button id="openfile" class="btn btn-default" style="background-color: #3385FF; color: white;">Open File</button></li>
          <br>
          <li><button id="selectdata" class="btn btn-default" style="background-color: #3385FF; color: white;">Select Data</button></li>
          <br>
          <li><button class="btn btn-default" style="background-color: orange; color: black;">Templates</button></li>
          <br>

          <div class="dropdown">         
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Add Chart<span class="caret"></span></button>
    				<ul class="dropdown-menu" role="menu" id="adchart">
  						<li role="presentation"><a href="#">Bar Chart</a></li>
  						<li role="presentation"><a href="#">Pie Chart</a></li>
    					<li role="presentation"><a href="#">Line Graph</a></li>
   					</ul>
          </div>
          <br>
          <div class="dropdown">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Add Tooltip<span class="caret"></span></button>
              <ul class="dropdown-menu" role="menu">
                <li role="presentation"><a href="#">Blank Tooltip</a></li>
                <li role="presentation" id="wizard"><a href="#">Custom Tooltips</a></li>
              </ul>
          </div>
          <br>
  			  <li><button class="btn btn-default" id="text" style="background-color: orange; color: black;">Add Text</button></li>
          <br>
  				<li><button class="btn btn-default" style="background-color: orange; color: black;">Add Shapes</button></li>
          <br>
  				<li>
            <button class="btn btn-default" id="imgselect" style="background-color: orange; color: black;">Add Image</button></li>
          <br>
  				<!-- <li><button class="btn btn-default" style="background-color: orange; color: black;">Add Background</button></li>-->
          <br>
			  </ul>
			</div>

  <!--End of left nav bar ............................. Start of canvas -->

			<div class = "col-md-8">
       <br>
          <div id="canvas1">
          
            <!--<div id="drag">
              <img src="<c:url value='/resources/images/fire-truck4.png' />" id="image" style="height:400px; width:650 px;">
            </div>

           <p id="textbox1"></p>-->

           <div id="chart">
           <div id="barchart1" class="chart" style="z-index:2;position:relative"></div>
           <div id="barchart2" class="chart" style="z-index:2;position:relative"></div>
           <div id="barchart3" class="chart" style="z-index:2;position:relative"></div>
           </div>
          </div>

        
      </div>

  <!--End of canvas ............................. Start of right nav bar -->

			<div class="col-md-2 rsidebar"> 
			
			<div><p><b> Dataset Explorer </b></p> <p id="selectedDataSet"></p></div>
			<hr/>
			<div id="tools">
        <h5><p> Tools </p></h5>
        <br>
		    <button id="bg" type="button" class="btn btn-default"><span class="glyphicon glyphicon-cog"></span></button>&nbsp;
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-resize-small"></span></button>&nbsp;
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-scissors"></span></button>  
        <br><br>
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-link"></span></button>
        <br><br><br>
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-refresh"></span></button>
      </div>
        <hr/>
        <div id="desc">
          Click on the canvas or an element to show its properties  
        </div>
        <hr/>
        <div id="canvasprop">
          <h5><p> Background Colour </p></h5>
          <button id="white" class="btn btn-default" style="background-color:white;"></button>&nbsp;
          <button id="blue" class="btn btn-default" style="background-color:#CCE6FF;"></button>&nbsp;
          <button id="green" class="btn btn-default" style="background-color:#70DB70;"></button>
          <button id="grey" class="btn btn-default" style="background-color:lightgrey;"></button>
          <button id="red" class="btn btn-default" style="background-color:#E60000;"></button>
          <br><br>
          <h5><p> Background Image </p></h5>
          <input type="image" id="pic1" src="<c:url value='/resources/images/pic2.png' />" style="width:40px; height=25px;"/>
          <input type="image" id="pic2" src="<c:url value='/resources/images/pic3.png' />" style="width:40px; height=25px;"/>
          <input type="image" id="pic3" src="<c:url value='/resources/images/pic4.png' />" style="width:40px; height=25px;"/>
        </div>
        <br>
        <div id="imageprop">
          <h5><p> Image Properties </p></h5>
          <button id="imgbutton" class="btn btn-default">Remove</button>
        </div>
        <div id="textprop">
          <h5><p> Text Properties </p></h5>
            <button id="textbutton" class="btn btn-default">Remove</button>
        </div>
        <div id="chartprop">
          <h5><p> Create Filters </p></h5>
            <button id="chartbutton" class="btn btn-default">Add Filter</button>
        </div>
			</div>
		</div>
    <hr/>

<!--Bottom nav bar-->

    <div class="row">
      <div class="col-md-2">
        <button class="btn btn-default" style="background-color:yellow;">Help</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-default" onClick="save()" style="background-color:#3385FF;">Save</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-default" onClick="saveastemp()" style="background-color:#3385FF;">Save as Template</button>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-1">
        <button class="btn btn-default" onClick="undo()">Undo</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-default" onClick="erase();">Erase</button>
      </div>
    </div>

  <!--End of bottom nav bar ............................. Start of dialog boxes -->

  <div id="Dialog1" title="Select Dataset">
    <form id="selectDataset" method="POST" enctype="multipart/form-data" action="uploadFile">
		File to upload:<input type="file" name="file">
	</form>
  </div>
  <div id="Dialog2" title="Chart Properties"></div>
  
  <div id="Dialog3">Select Image
    <form id="imageform" method="POST" enctype="multipart/form-data" action="uploadimage">
      <br>
      <input type="radio" name="img" value="<c:url value='/resources/images/images.png' />"><img src="<c:url value='/resources/images/images.png' />" style="height:60px; width:100px;">&nbsp;&nbsp;
      <input type="radio" name="img" value="<c:url value='/resources/images/images.png' />"><img src="<c:url value='/resources/images/images.png' />" style="height:50px; width:50px;">
      <br><br>
      <input type="radio" name="img" value="<c:url value='/resources/images/img1.png' />"><img src="<c:url value='/resources/images/img1.png' />" style="height:40px; width:100px;">&nbsp;&nbsp;
      <input type="radio" name="img" value="<c:url value='/resources/images/img2.jpg' />"><img src="<c:url value='/resources/images/img2.jpg' />" style="height:50px; width:30px;">
      <!-- <input type="image" src="<c:url value='/resources/images/images.png' />" style="height:60px; width:100px;">&nbsp;
      <input type="image" src="Images/images.jpg" style="height:50px; width:50px;">
      <input type="image" src="Images/img1.png" style="height:40px; width:100px;">
      <input type="image" src="Images/img2.jpg" style="height:50px; width:px;">
      <a href="#img1"><img src="<c:url value='/resources/images/images.png' />" style="height:60px; width:100px;"></a>-->
      <br><br>
      OR
      <br><br>
      Upload Image
      <input type="radio" name="img" value="file"><input type="file" name="image">
      <br>
    </form>
  </div>

  <div id="Dialog4">
    <h3>Tooltip Wizard</h3>
    <br><br>
    <p><h4>Select Columns for tooltips</h4><p>
      <form>
        <select name="SelectChart" id="selectchart">
        <option value="selectchart" selected> Select Chart</option>
        </select>
        <br><br>
        <input type="checkbox" name="allcolumns" value="selectallcolumns"/>All columns
        <br>
        <input type="checkbox" name="column1" value="selectcolumn1"/>Column 1
        <br>
        <input type="checkbox" name="column2" value="selectcolumn2"/>Column 2
        <br>
        <input type="checkbox" name="columnrange" value="selectrange"/>Column range: 
        <input type="text" name="columnrangetext"/> 
        <br>
      </form>   
  </div>

  <div id="TooltipTypeDialog" title="Build Tooltips">
    <h3>Tooltip Wizard</h3>
    <br><br>
    <p><h4>Select type of tooltip</h4></p>
      <form id="tooltipform" method="POST" action="customtooltip">
      	<input type="hidden" name="chartid">
        <input type="radio" name="tooltiptext" value="FormatText"/> Format tooltip text: 
        <input type="text" name="formatstring" value="Team xval won yval"/>
        <br><br>
        <input type="radio" name="ttchart" value="TTchart"/> Chart:
        <select name="SelectChart">
        <option value="selectchart" selected> Select Chart</option>
        <option value="rowchart">Row Chart</option>
        <option value="columnchart">Column Chart</option>
        <option value="linechart">Line Chart</option>
        <option value="piechart">Pie Chart</option>
        </select>
        <br>
        <button id="binddata">Bind Data</button>
        <br><br>
        <input type="radio" name="ttimage" value="TTimage"/> Image:<br><button id="loadimage">Load Image File</button>
        <br><br>
        <input type="radio" name="ttquery" value="TTquery"/> Query:<button id="query">Select Variables & Query</button>
      </form>
  </div>

  <div id="TooltipProperties" title="Build Tooltips">
    <h3>Tooltip Wizard</h3>
    <br><br>
    <p><h4>Tooltip properties</h4></p>
    <br>
      <form>
        <p>Select tip direction</p>
        <input type="radio" name="ttdirection1" value="TTdirection1"/><img src="<c:url value='/resources/images/tooltip1.PNG' />" width="40px" height="30px"/>
        <input type="radio" name="ttdirection2" value="TTdirection2"/><img src="<c:url value='/resources/images/tooltip3.PNG' />" width="40px" height="30px"/>
        <input type="radio" name="ttdirection3" value="TTdirection3"/><img src="<c:url value='/resources/images/tooltip2.PNG' />" width="40px" height="30px"/>
        <input type="radio" name="ttdirection4" value="TTdirection4"/><img src="<c:url value='/resources/images/tooltip4.PNG' />" width="40px" height="30px"/>
        <br><br>
        <p>Select rotation</p>
        <input type="radio" name="rotateleft" value="TTrotateleft"/>Rotate left 90 deg
        <input type="radio" name="rotateright" value="TTrotateright"/>Rotate right 90 deg
        <br><br>
        <p>Visibility</p>
        <input type="radio" name="visibilityshow" value="TTvisibilityshow"/> Always show
        <input type="radio" name="visibilityhover" value="TTvisibilityhover"/> Show on hover
      </form>
  </div>
  <div id="dynbtn1" class="dyndiv" title="Creating filters">
  	<form id="dynamicGraphic1" method="POST" action="parseFile">
  	</form>
  </div>
  <div id="dynbtn2" class="dyndiv" title="Creating filters">
  	<form id="dynamicGraphic2" method="POST" action="parseFile">
  	</form>
  </div>
  </div>

</body>
</html>
