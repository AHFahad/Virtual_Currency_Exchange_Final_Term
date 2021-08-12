<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use App\Http\Requests\seller\OrderConfirmRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $request->session()->put('id', 1);
        $user=User::find(1);
        // dd($user->id);
        $product=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('products.seller_id',$user->id)
                        ->where('orders.status','process')
                        ->get(['orders.id','orders.created_at','orders.product_id','products.name']);

        // return view('seller.sellerorders',compact('product','user'));

        // return $product;

        return response()->json([
            'product' => $product,
            'user' => $user,
        ]);

        //
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
        $user=User::find(1);
        $order=Order::find($id);
        $product=Product::find($order->product_id);
        // return view('seller.orderDetails',compact('user','order','product'));

        return response()->json([
            'product' => $product,
            'user' => $user,
            'order'=>$order,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id,Request $request)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //complete order
    public function update(OrderConfirmRequest $request, $id)
    {
        $order=Order::find($id);
        $user=User::find($request->session()->get('id'));

        $product=Product::find($order->product_id);

        if($product->seller_id== $user->id){
            $order->transection_no=$request->transection_no;
            $order->seller_reply=$request->seller_reply;
            if($request->cancel=='cancelled'){
                $order->status='cancelled';
                $request->session()->flash('msg','order cancelled Successfully');
            }
            else{
                $order->status='completed';
                if($user->prime_status=='normal'){
                    $user->points=$user->points+1;
                    $request->session()->flash('msg','order completed Successfully! and you got 1 point!');
                }
                else{
                    $request->session()->flash('msg','order completed Successfully');
                }

            }
            $order->update();
            $user->update();
        }
        else{
            $request->session()->flash('msg','Some thing went wrong');
            return redirect()->back();
        }

        return redirect()->route('seller.order.index');




    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function orderComplete($id,Request $request)
    {

    }
    public function destroy($id)
    {
        //
    }


}
