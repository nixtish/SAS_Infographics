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
  <div class="container-fluid">
		<div class = "row">
			<div class="col-md-2 lsidebar"> 
  			<ul class="nav nav-sidebar">
          <li><button id="openfile" class="btn btn-default" style="background-color: #3385FF; color: white;">Open File</button></li>
          <br>
          <li><button id="selectdata" class="btn btn-default" style="background-color: #3385FF; color: white;">Select Data</button></li>
          <br>
          <li><button class="btn btn-default" style="background-color: orange; color: black;">Templates</button></li>
          <br>
  				<li role="presentation" class="dropdown">
   	 			<a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-expanded="false" style="background-color: #F2F2F2;">Charts<span class="caret"></span></a>
    				<ul class="dropdown-menu" role="menu">
  						<li role="presentation"><a href="#">Bar Chart</a></li>
  						<li role="presentation"><a href="#">Pie Chart</a></li>
    					<li role="presentation"><a href="#">Line Graph</a></li>
   					</ul>
  				</li>
          <br>
  			  <li><button class="btn btn-default" style="background-color: orange; color: black;">Add Text</button></li>
          <br>
  				<li><button class="btn btn-default" style="background-color: orange; color: black;">Add Shapes</button></li>
          <br>
  				<li><button class="btn btn-default" style="background-color: orange; color: black;">Add Images</button></li>
          <br>
					<li><button class="btn btn-default" style="background-color: orange; color: black;">Add Tooltips</button></li>
          <br>
  				<li><button class="btn btn-default" style="background-color: orange; color: black;">Add Labels</button></li>
          <br>
			  </ul>
			</div>

  <!--End of left nav bar ............................. Start of canvas -->

			<div class = "col-md-8">
       
          <br><br>
          <!--<div class="embed-responsive embed-responsive-4by3">
            <iframe class="embed-responsive-item" src = "trial_copy.html" style="border: none;" seamless></iframe>
          </div>-->
          <div id="canvas1">
            
            <img src="<c:url value='/resources/images/fire-truck4.png' />" id="image" style="height:400px; width:650 px;">

            <div id="chart"></div>

          </div>

        
      </div>

  <!--End of canvas ............................. Start of right nav bar -->

			<div class="col-md-2 rsidebar"> 
        <p> Tools </p>
        <br>
		    <button id="bg" type="button" class="btn btn-default"><span class="glyphicon glyphicon-cog"></span></button>&nbsp;
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-resize-small"></span></button>&nbsp;
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-scissors"></span></button>  
        <br><br>
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-link"></span></button>
        <br><br><br>
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-refresh"></span></button>
        <hr/>
			</div>
		</div>
    <hr/>

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

  <!--End of right nav bar ............................. Start of dialog boxes -->

  <div id="Dialog1">Select Dataset
    <form id="selectDataset" method="POST" enctype="multipart/form-data" action="uploadFile">
		File to upload: <input type="file" name="file"><br/> 
		<br/> 
		<input type="submit" value="Upload">
	</form>
  </div>
  <div id="Dialog2"></div>
  </div>

</body>
</html>
