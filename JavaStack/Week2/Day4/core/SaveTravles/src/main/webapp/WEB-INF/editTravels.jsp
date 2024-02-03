<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<html>
<head>
    <meta charset="UTF-8">
    <title>Demo JSP</title>
    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/main.css" />
    <!-- For any Bootstrap that uses JS -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <title>Title</title>
</head>
<body>
<h1>
    Edit Travels
</h1>
<form:form action="/travels/editt/${travel.id}" method="post" modelAttribute="travels">
    <input type="hidden" name="_method" value="put">
    <p>
        <form:label path="expenseName">ExpenseName</form:label>
        <form:errors path="expenseName"/>
        <form:input path="expenseName" value="${travels.expenseName}"/>
    </p>

    <p>
        <form:label path="description">Description</form:label>
        <form:errors path="description"/>
        <form:textarea path="description" value="${travels.description}"></form:textarea>
    </p>

    <p>
        <form:label path="vendor">Vendor</form:label>
        <form:errors path="vendor"/>
        <form:input path="vendor" value="${travels.vendor}"/>
    </p>

    <p>
        <form:label path="amount">Amount</form:label>
        <form:errors path="amount"/>
        <form:input path="amount" value="${travels.amount}"/>
    </p>

    <input type="submit" value="Submit"/>
</form:form>
</body>
</html>
