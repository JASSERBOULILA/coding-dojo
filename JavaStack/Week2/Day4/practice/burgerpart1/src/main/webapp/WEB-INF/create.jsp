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

</head>
    <body>
        <h1>
            Burger Tracker
        </h1>
        <table>
            <thead>
                <th>Burger Name</th>
                <th>Restaturnt Name</th>
                <th>Rationg (out of 5)</th>
            </thead>
            <tbody>
                <c:forEach  var="oneItem" items="${allBurgers}">
                    <tr>
                        <td>${oneItem.burgerName}</td>
                        <td>${oneItem.restaurantName}</td>
                        <td>${oneItem.rating}</td>
                        <td><form action="http://localhost:8080/burger/edit/${oneItem.id}">
                            <input type="hidden" name="_method" value="put">
                            <input type="submit" value="Update">
                        </form></td>
                    </tr>
                </c:forEach >
            </tbody>
        </table>
        <h1>Add a Burger</h1>
        <form:form action="/burger/new" method="post" modelAttribute="burger">
            <form:errors path="*" />
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