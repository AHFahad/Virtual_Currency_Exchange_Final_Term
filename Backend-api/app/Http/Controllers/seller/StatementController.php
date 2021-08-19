<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;

class StatementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $request->session()->get('id')
        // $user=User::find(1);
        $user= $request->user();
        $product=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where(function($q){
                            $q->Where('orders.status','cancelled')
                            ->orWhere('orders.status','completed');
                        })
                        ->orderBy('updated_at','desc')->take(1000)
                        ->get(['orders.id','orders.updated_at','orders.price_on_selling_time','orders.amount','orders.status','orders.product_id','products.name','products.seller_id','orders.buyer_id']);
        $total_income=0;
        // return view('seller.sellerstatements',compact('product','user','total_income'));
        return response()->json([
            'product' => $product,
            'user' => $user,
            'total_income' => $total_income,
            'user' => $user->id,
            'status'=>'success'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        // $request->session()->get('id')
        // $user=User::find(1);
        $user= $request->user();
        $order=Order::find($id);
        $product=Product::find($order->product_id);
        // return view('seller.statementdetails',compact('user','order','product'));
        return response()->json([
            'product' => $product,
            'user' => $user,
            'order' => $order,
            'status'=>'success'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {
        $order=Order::find($id);
        $user=User::find($request->session()->get('id'));

        $product=Product::find($order->product_id);

        if($product->seller_id== $user->id){
            $order->transection_no=$request->transection_no;
            $order->seller_reply=$request->seller_reply;
             $order->status='deleted';

            $order->update();
            $request->session()->flash('msg','Successfully cleared!');
        }
        else{
            $request->session()->flash('msg','Some thing went wrong');
        }

        return redirect()->back();

    }
}
