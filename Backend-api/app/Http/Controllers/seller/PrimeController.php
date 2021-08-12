<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Payment;
use App\Http\Requests\seller\UpgradeToPrimeRequest;
class PrimeController extends Controller
{
    public function index(Request $request){
        $user=User::find($request->session()->get('id'));
        return view('seller.applyforprimeseller',compact('user'));
    }
    public function store(UpgradeToPrimeRequest $request){
        $user=User::find($request->session()->get('id'));
        $payment =new Payment;
        $payment->seller_id=$user->id;
        $payment->package=$request->package;
        $payment->transection_no=$request->transection_no;
        $payment->payment_method=$request->payment_method;
        $payment->save();
        $request->session()->flash('msg',"Successfully! done .wait for aprovals");
        return redirect()->route('seller.dashboard');
    }
}
