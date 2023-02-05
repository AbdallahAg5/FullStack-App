<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel='stylesheet' href='./css/index.css'>
    </link>
    {{-- get the css from the public folder --}}
    <title>My Blog</title>
</head>

<body>
  {{-- $slot necessary in this case  --}}
    {{ $slot }}
</body>

</html>
