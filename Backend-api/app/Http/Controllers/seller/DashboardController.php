<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Models\Prime_reset;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{



    public function index(Request $request){
        $this->pointsChecker($request);
        $user = User::find($request->session()->get('id'));

        $product=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','process')
                        ->get('orders.id');

        $processingOrder=$product->count();

        $product2=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','completed')
                        ->get('orders.id');

        $total_earning=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','completed')
                        ->get(['orders.amount','orders.price_on_selling_time'])
                        ->sum(function($t){
                            return $t->amount * $t->price_on_selling_time;
                    });

        $completedOrder=$product2->count();

        $product3=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','cancelled')
                        ->get('orders.id');
        $cancelledOrder=$product3->count();
        $start_date=date('d-m-Y');
        $end_date=date('d-m-Y');


        return view('seller.sellerdashboard',compact('processingOrder','completedOrder','cancelledOrder','user','start_date','end_date','total_earning'));

    }
    public function get(Request $request){
        $user = User::find($request->session()->get('id'));
        $start_date=$request->start_date;
        $end_date=$request->end_date;

        $product=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','process')
                        ->whereBetween('orders.created_at',[$start_date,$end_date])
                        ->get('orders.id');

        $processingOrder=$product->count();

        $product2=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','completed')
                        ->whereBetween('orders.created_at',[$start_date,$end_date])
                        ->get('orders.id');

        $completedOrder=$product2->count();

        $product3=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','cancelled')
                        ->whereBetween('orders.created_at',[$start_date,$end_date])
                        ->get('orders.id');
        $cancelledOrder=$product3->count();

        $total_earning=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','completed')
                        ->whereBetween('orders.created_at',[$start_date,$end_date])
                        ->get(['orders.amount','orders.price_on_selling_time'])
                        ->sum(function($t){
                                    return $t->amount * $t->price_on_selling_time;
                        });

        return view('seller.sellerdashboard',compact('processingOrder','completedOrder','cancelledOrder','user','start_date','end_date','total_earning'));

    }
    public function pointsChecker(Request $request){

        $user = User::find($request->session()->get('id'));
        $p=Prime_reset::where('seller_id',$user->id)->first();
        // dd($prime->count());

        //found in the table


        if($p){
            $expireDate=carbon::parse($p->expire_date);
            $primeExpireDate=carbon::parse($p->prime_expire_date);
            $current_date=Carbon::now();

            //for normal users
            if($user->prime_status=='normal'){
                //checking expire date is over or not

                if($current_date->gt($expireDate)){
                    $expireDate->addMonth();
                    //checking  expire date if more than 1 month then add month with current date
                    if($current_date->gt($expireDate)){
                        $expireDate=$current_date;
                        $expireDate->addMonth();
                        $p->expire_date=$expireDate;
                        $p->update();
                        $user->points=150;
                        $user->update();
                    }
                    else{
                        $p->expire_date=$expireDate;
                        $p->update();
                        $user->points=150;
                        $user->update();
                    }
                }
            }
            //for prime users
            else{
                if($primeExpireDate->lte($current_date)){
                    $user->prime_status='normal';
                    $user->update();
                    $request->session()->flash('msg'," Your Prime status expired");
                }
            }
        }
        //first time login assign expire date of poinst
        else{
            $prime=new Prime_reset;
            $prime->seller_id=$user->id;
            $prime->expire_date=Carbon::now();
            $prime->expire_date->addMonth();
            $prime->save();
        }

    }

}
