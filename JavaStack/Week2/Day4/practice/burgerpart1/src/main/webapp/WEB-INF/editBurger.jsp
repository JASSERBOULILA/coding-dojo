<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
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
    <body>
        <h1>Edit Burger</h1>
        <a href="http://localhost:8080">Go Back</a>
        <form:form action="/burger/edit/${burger.id}" method="post" modelAttribute="burger">
            <input type="hidden" name="_method" value="put">
            <p>
                <form:label path="burgerName">Title</form:label>
                <form:errors path="burgerName"/>
                <form:input path="burgerName"/>
            </p>
            <p>
                <form:label path="restaurantName">Description</form:label>
                <form:errors path="restaurantName"/>
                <form:textarea path="restaurantName"/>
            </p>
            <p>
                <form:label path="rating">Language</form:label>
                <form:errors path="rating"/>
                <form:input type="number" path="rating"/>
            </p>
            <p>
                <form:label path="notes">Pages</form:label>
                <form:errors path="notes"/>
                <form:input type="text" path="notes"/>
            </p>
            <input type="submit" value="Submit"/>
        </form:form>
    </body>
</html>