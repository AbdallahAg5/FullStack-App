laravel shit

View::make() || view() [make view]()

return ['name'=>'Abdallah'];   [return json data ]()

abort(404)  [ returns the 404 page]()

dd($var) || ddd($var) [function fur debugging the code]()

## Pass var into url + regex to it with the where function

Route::get('/article/{name}',function($name){</br>
   $name;</br>
   return view('article',[ 'name' => $name]);
})->where('name','[1-9]+'); || whereAlphaNumeric(letter + num) || whereNumber(num) 


