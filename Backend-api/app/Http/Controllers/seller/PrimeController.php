<?php

namespace App\Http\Controllers\seller;
use Illuminate\Support\Facades\Validator;
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
    // UpgradeToPrimeRequest
    public function store(Request $request){
        // $request->session()->get('id')


        $validator = Validator::make($request->all(), [
            'transection_no' => 'required|max:40|min:11',
            'payment_method'=>'required|not_in:0',
            'package'=>'required|not_in:0',
         ],
         [
            'transection_no.required' => 'Please proper description of the problem..',
            'package.not_in' => 'select a package',
            'payment_method.not_in'=>'select a payment method'
        ]
        );

         if ($validator->fails()) {
            return response()->json([
                "errorData"=>$validator->errors(),
                'msg' => "Validation Error",
                'status' => 'error',
                'error'=>'400'
            ]);
        }
        // $user=User::find(1);
        $user= $request->user();
        $payment =new Payment;
        $payment->seller_id=$user->id;
        $payment->package=$request->package;
        $payment->transection_no=$request->transection_no;
        $payment->payment_method=$request->payment_method;
        $payment->save();
        // $request->session()->flash('msg',"Successfully! done .wait for aprovals");
        return response()->json([
            'msg' => " Successfully! done .wait for aprovals",
            'user' => $user,
            'status'=>'success'
        ]);
        // return redirect()->route('seller.dashboard');
    }
}
