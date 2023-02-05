<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table='products';

    public function getname(){
        //  name of the colomn
        return $this->attributes['name_product'];
    }

    public function getid(){
        //  name of the colomn
        return $this->attributes['id'];
    }
}
