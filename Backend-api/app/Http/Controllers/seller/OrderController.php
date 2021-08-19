<?php

namespace App\Http\Controllers\seller;
use Illuminate\Support\Facades\Validator;
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
        // $user=User::find(1);
        $user= $request->user();
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
        // $user=User::find(1);
        $user= $request->user();

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
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'seller_reply' => 'required|max:500|min:10',
         ],
        [
            'seller_reply.required' => 'Provide a reply',
            'seller_reply.min' => 'Provide a proper reply minimum 10 characters..'
        ]);

         if ($validator->fails()) {
            return response()->json([
                "errorData"=>$validator->errors(),
                'msg' => "Validation Error",
                'status' => 'error',
                'error'=>'400'
            ]);
        }
        // $request->session()->get('id')
        $order=Order::find($id);
        // $user=User::find(1);
        $user= $request->user();

        $product=Product::find($order->product_id);

        if($product->seller_id== $user->id){
            $order->transection_no=$request->transection_no;
            $order->seller_reply=$request->seller_reply;
            if($request->status=='cancelled'){
                $order->status='cancelled';

                $user->update();
                if($order->update()){
                    return response()->json([
                        'msg' => 'order cancelled Successfully',
                        'user' => $user,
                        'status'=>'success'
                    ]);
                }else{
                    return response()->json([
                        'msg' => 'order cancelled had a problem',
                        'user' => $user,
                        'status'=>'error'
                    ]);

                }

            }
            else{
                $order->status='completed';
                if($user->prime_status=='normal'){
                    $user->points=$user->points+1;
                    $order->update();
                     $user->update();
                    return response()->json([
                        'msg' => 'order completed Successfully! and you got 1 point!',
                        'user' => $user,
                        'status'=>'success'
                    ]);
                }
                else{
                    $user->update();
                    if($order->update()){
                       return response()->json([
                        'msg' => 'order completed Successfully',
                        'user' => $user,
                        'status'=>'success',
                        'status2'=>$request->status
                    ]);
                    }
                    else{
                        return response()->json([
                            'msg' => 'order  Successfully not Updated',
                            'user' => $user,
                            'status'=>'error'
                        ]);
                    }

                }

            }

        }
        else{
            return response()->json([
                'msg' => 'Some thing went wrong',
                'user' => $user,
                'status'=>'error'
            ]);
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
