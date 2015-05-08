<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
</head>
<body>
<input type="hidden" name="chartid" value="barchart2">
filter name:<input type="text" id="btnname" name="btnname"><br>
<p>Available Columns<p>
<c:forEach var="heading" items="${columns}" varStatus="count">
	<input type="radio" name="columnIndex1" value="${count.index}">${heading}<br>
</c:forEach>
<p>Available Rows<p>
<c:forEach var="heading" items="${columns}" varStatus="count">
	<input type="radio" name="columnIndex2" value="${count.index}">${heading}<br>
</c:forEach>
</body>
</html>