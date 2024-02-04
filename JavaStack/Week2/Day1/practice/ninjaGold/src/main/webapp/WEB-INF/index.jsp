<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ninja Gold Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        form {
            margin-top: 20px;
        }
        #log {
            margin-top: 30px;
        }
    </style>
</head>
<body>
<h1>Ninja Gold Game</h1>
<h3>Current Gold: ${gold}</h3>

<form action="/process_money" method="post">
    <input type="hidden" name="location" value="farm">
    <button type="submit">Farm</button>
</form>

<form action="/process_money" method="post">
    <input type="hidden" name="location" value="cave">
    <button type="submit">Cave</button>
</form>

<form action="/process_money" method="post">
    <input type="hidden" name="location" value="house">
    <button type="submit">House</button>
</form>

<form action="/process_money" method="post">
    <input type="hidden" name="location" value="quest">
    <button type="submit">Quest</button>
</form>

<form action="/process_money" method="post">
    <input type="hidden" name="location" value="spa">
    <button type="submit">Spa</button>
</form>

<form action="/reset" method="post">
    <button type="submit">Reset</button>
</form>

<!-- ... existing content ... -->

<div id="log">
    <h3>Activity Log</h3>
    <ul>
        <!-- Use preformatted text to display each log entry on a new line -->
        <pre>${activityLog}</pre>
    </ul>
</div>

<!-- ... existing content ... -->

</body>
</html>
