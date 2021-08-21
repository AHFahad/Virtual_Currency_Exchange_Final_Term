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
        // $user=User::find(1);
        $user= $request->user();
        if($result=='success'){
            // $request->session()->flash('msg'," Successfully Upgraded to prime User!");
            return response()->json([
                'msg' => " Successfully Upgraded to prime User!",
                'user' => $user,
                'status'=>'success'
            ]);
        }
        else{
            // $request->session()->flash('msg',$result);
            return response()->json([
                'msg' => $result,
                'user' => $user,
                'status'=>'error'
            ]);
        }
        return redirect()->route('seller.dashboard');
    }

}
