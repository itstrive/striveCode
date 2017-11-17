<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{title}}</title>
</head>
<body>
    <h3>{{title}}</h3>
    <ul>
        <% for value in arr%>
        <li>{{value}}</li>
        <% endfor%>
    </ul>
</body>
</html>