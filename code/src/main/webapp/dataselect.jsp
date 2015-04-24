<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Select Data</title>
</head>
<body>
<div id="content">
<p>Select Data<p>
<form id="selectData" method="POST" action="parseFile">
<p>Available Columns<p>
<c:forEach var="heading" items="${columns}" varStatus="count">
	<input type="radio" name="columnIndex1" value="${count.index}">${heading}<br>
</c:forEach>
<p>Available Rows<p>
<c:forEach var="heading" items="${columns}" varStatus="count">
	<input type="radio" name="columnIndex2" value="${count.index}">${heading}<br>
</c:forEach>
<input type="submit" value="Done">
</form>
</div>
</body>
</html>