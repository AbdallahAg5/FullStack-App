<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// php artisan make:controller Api/UserController --model=User --requests --resource --api


    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // this logout route should be here inside the middleware bcz the user need to be auth to do this action
    Route::post('/logout', [AuthController::class,'logout']); 
    Route::apiResource('/users',UserController::class);






Route::post('/signup', [AuthController::class,'signup']);
Route::post('/login', [AuthController::class,'login']);




