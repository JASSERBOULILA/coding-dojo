<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <title>Demo JSP</title>
</head>
<body>
    <h1>You have visited
     <a href="#">http://your_server</a>
      <c:out value="${counter}" />
     times <a href="/your_server">Test another Visit?</a></h1>
     <h2><c:out value="${counter}" /></h2>
</body>
</html>