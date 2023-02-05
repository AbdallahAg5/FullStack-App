<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MyfirstController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  $allParams=[
       "name" => "Abdallah",
       "age" => 15
  ];
    return View::make('welcome',$allParams);
    // return view('welcome');
      // return ['name'=>'Abdallah'];   return json data
});

// dd($var ?  true :  false ) ; just for debug
Route::get('/article/{name}', [HomeController::class, 'home'])->whereAlphaNumeric('name'); // num + letters accepted
Route::get('/hi',[MyfirstController::class,'index']);

// Route::get('/article',function (){
//          return View::make('article');
// });

// Route::get('/products', [HomeController::class,'products']);
// Route::get('/products/{id}', [HomeController::class,'get_product']);
