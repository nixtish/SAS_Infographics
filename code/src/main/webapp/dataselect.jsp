<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Select Data</title>
</head>
<body>
<form method="post" action="parseFile">
<c:forEach var="heading" items="${columns}" varStatus="count">
	<input type="radio" name="columnIndex1" value="${count.index}">${heading}<br>
</c:forEach>
<c:forEach var="heading" items="${columns}" varStatus="count">
	<input type="radio" name="columnIndex2" value="${count.index}">${heading}<br>
</c:forEach>
<input type="submit" value="Done">
</form>
</body>
</html>