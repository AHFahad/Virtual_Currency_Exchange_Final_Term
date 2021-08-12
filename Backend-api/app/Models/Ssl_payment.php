<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ssl_payment extends Model
{
    protected $fillable =['name','email','phone','amount','address','status','transaction_id'];
}
