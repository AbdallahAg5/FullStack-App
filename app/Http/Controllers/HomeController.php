<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class HomeController extends Controller
{

 

    public function home(Request $request){
         
         return view('article',[ 'name' => $request->name]);
    }
   // the val that is passed on the function param needs to be on the route 
    /*
       public function about_name( $name ){
          $city='Rabat';
          return view('aboutName')->with('name',$name)->with('city',$city);
    }
    */

    public function products(){
          $products=Product::all(); 
          return view('products')->with('products',$products);
    }

    public function get_product($id){
        $products=Product::all(); 
        return view('product')->with('id',$id)->with('products',$products);
  }

}
