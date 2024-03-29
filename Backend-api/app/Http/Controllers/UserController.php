<?php

namespace App\Http\Controllers;
//header('Access-Control-Allow-Origin:*');
use App\Models\Follow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Order;
use App\Models\Product;

class UserController extends Controller
{
    public function dashboard(Request $req, $id){
        $user = User::find($id);
        $products = Product::orderBy('created_at','ASC')->get();

        return response()->json([
            'user' => $user,
            'products' => $products,
            'status'=>'success'
        ]);

        //return view('user.dashboard',compact('user','products'));
    }
    public function profile(Request $req, $id){
        //$user = User::find($req->session()->get('id'));
        $user = User::find($id);
        //return view('user.profile',compact('user'));
        return response()->json([
            'user' => $user,
            'status'=>'success'
        ]);
    }
    public function history(Request $req, $id){

        $orders=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('orders.buyer_id',$id)
                        ->get(['orders.id','users.name as sellerName','orders.created_at','products.name as productName','orders.status']);
                        //dd($orders);

        return response()->json([
            'orders' => $orders,
            'status'=>'success'
        ]);
        //return view('user.history',compact('orders'));
    }

    public function details(Request $req,$id){

        // $order_list=Product::join('orders','orders.product_id','=','products.id')
        //                 ->join('users','users.id','=','products.seller_id')
        //                 ->where('orders.id',$id)
        //                 ->get(['users.id','users.phone_number','products.description','orders.created_at','products.name','orders.review','orders.rating']);
        //                 dump($order_list);

        $order_list = Order::find($id);

        $product_list = Product::find($order_list->product_id);

        $seller_list = User::find($product_list->seller_id);

        return response()->json([
            'order_list' => $order_list,
            'product_list' => $product_list,
            'seller_list' => $seller_list,
            'status'=>'success'
        ]);


        //return view('user.detailsHistory',compact('order_list','product_list','seller_list'));
    }

    public function details_update(Request $req,$id){

        // $order_list=Product::join('orders','orders.product_id','=','products.id')
        //                 ->join('users','users.id','=','products.seller_id')
        //                 ->where('orders.id',$id)
        //                 ->get(['users.id','users.phone_number','products.description','orders.created_at','products.name','orders.review','orders.rating']);
        //                 dump($order_list);

        Order::where('id',$id)
                ->update(['rating'=>$req->rating,'review'=>$req->review]);

        $order_list = Order::find($id);

        $product_list = Product::find($order_list->product_id);

        $seller_list = User::find($product_list->seller_id);


        return view('user.detailsHistory',compact('order_list','product_list','seller_list'));
    }

    public function follow(Request $req){
         $follows = Follow::join('users','users.id','=','follows.seller_id')
                        ->where('follows.user_id',$req->session()->get('id'))
                        //->get();
                        ->get(['users.name as userName','users.phone_number']);

       // $follows = Follow::where('follows.user_id',$req->session()->get('id'))->get();

        //dd($follows);

        //$follow_list = User::find($follows[0]->seller_id)->get();
        return view('user.followList',compact('follows'));
    }
    public function orders(Request $req){
        //$orders = Order::find($req->session()->get('id'))->get();

        $orders=Product::join('orders','orders.product_id','=','products.id')
                        ->join('users','users.id','=','products.seller_id')
                        ->where('orders.buyer_id',$req->session()->get('id'))
                        ->get(['orders.id','orders.created_at','products.name']);

        //dump($orders);

        return view('user.orders',compact('orders'));
    }
    public function followUser(Request $req, $id){
        Follow::insert([
            'user_id' => $req->session()->get('id'),
            'seller_id' => $id,
        ]);

        return back();
    }
    public function unfollow(Request $req, $id){
        Follow::where('user_id',$req->session()->get('id'))
                ->where('seller_id',$id)
                ->delete();

        return back();
    }

    public function order(Request $req, $uid, $id){
        $product = Product::find($id);

        $seller = User::find($product->seller_id);

        $follows = Follow::where('user_id',$uid)->get();
        //dd($follows);
        return response()->json([
            'product' => $product,
            'seller' => $seller,
            'follows' => $follows,
            'status'=>'success'
        ]);
        //return view('user.order',compact('product','seller','follows'));
    }
    public function orderConfirm(Request $req,$uid,$id){
        // addtional database work
        
        $product = Product::find($id);

        // if($req->has('gameId')){
        // Validator::make($req->all(), [
        //     'phone' => 'required|min:11|max:11',
        //     'transection_number' => 'required',
        //     'gameId' => 'required',
        //     'reply' => 'required',
        // ])->validate();

        // Order::insert([
        //     'product_id' => $id,
        //     'buyer_id' => $req->session()->get('id'),
        //     'price_on_selling_time' => $product->price,
        //     'transection_no' => $req->transection_number,
        //     'amount' => $req->quantity,
        //     'transection_number_of_sender' => $req->phone,
        //     'buyer_reply' => $req->reply,
        //     //'profile_picture' => $req->photo,
        //     //'nid_card_picture' => $req->photo,
        //     'game_id' => $req->gameId,
        //     'status' => 'process',
        // ]);

        // }

        //else{
            $validator = Validator::make($req->all(), [
                'transection_number_of_sender' => 'required|min:11|max:11',
                'transection_no' => 'required',
                'buyer_reply' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    "errorData"=>$validator->errors(),
                    'msg' => "Validation Error",
                    'status' => 'error',
                    'error'=>'400'
                ]);
            }
            Order::insert([
                'product_id' => $id,
                'buyer_id' => $uid,
                'price_on_selling_time' => $product->price,
                'transection_no' => $req->transection_number,
                'amount' => $req->amount,
                'transection_number_of_sender' => $req->transection_number_of_sender,
                'buyer_reply' => $req->buyer_reply,
                'status' => 'process',
            ]);

            // Order::insert([
            //     'product_id' => $id,
            //     'buyer_id' => $uid,
            //     'price_on_selling_time' => $product->price,
            //     'transection_no' => $req->input('transection_number'),
            //     'amount' => $req->input('amount'),
            //     'transection_number_of_sender' => $req->input('transection_number_of_sender'),
            //     'buyer_reply' => $req->input('buyer_reply'),
            //     'status' => 'process',
            // ]);

        //}

        // if($validator->fails()){
        //     return back()->withErrors($validator)->withInput();
        // }

        //return redirect('user/orders');
    }

    public function notification(Request $req){

        $list=Follow::join('users','users.id','=','follows.seller_id')
                        ->join('products','product.seller_id','=','user.id')
                        ->where('follows.buyer_id',$req->session()->get('id'))
                        ->get();
        dd($list);
        return view('user.notification');
        //return view('user.notification',compact('list'));
    }
    public function messages(Request $req){
        return view('user.messages');
    }
}
