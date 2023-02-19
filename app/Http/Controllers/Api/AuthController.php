<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SigninRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function signup(SigninRequest $request)
    {
        /* validate the data */
        $data = $request->validated();
        /* insert data on the user table  */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        /* create the token */
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

     public function login(LoginRequest $request)
     {   
        /* validate data  */
         $credentials = $request->validated();
         if (!Auth::attempt($credentials)) {
            return response(['message' => 'Provided email or password is incorrect'],422);
         }

         $user = Auth::user();
         $token = $user->createToken('main')->plainTextToken;
         return response(compact('user', 'token'));
     }

     public function logout(Request $request)
     {
         $user = $request->user();
         $user->currentAccessToken()->delete();
        return response('', 204);
     }
}
