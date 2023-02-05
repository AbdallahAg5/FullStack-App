<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>@foreach ($products as $item)
        <p>{{$item->getname()}}</p>
        
      @endforeach</div>
      <a href="/products/{{$item->getid()}}" >Show More</a>
</body>
</html>