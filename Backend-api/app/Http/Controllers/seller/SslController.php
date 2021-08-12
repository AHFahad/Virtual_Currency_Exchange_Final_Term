<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class SslController extends Controller
{
    public function index(Request $request){
        $user=User::find($request->session()->get('id'));
        return view('seller.sllpayment',compact('user'));
    }
    public function result(Request $request,$result){
        if($result=='success'){
            $request->session()->flash('msg'," Successfully Upgraded to prime User!");
        }
        else{
            $request->session()->flash('msg',$result);
        }
        return redirect()->route('seller.dashboard');
    }

}
