<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use LaravelDaily\Invoices\Invoice;
use LaravelDaily\Invoices\Classes\Buyer;
use LaravelDaily\Invoices\Classes\InvoiceItem;

use App\Models\User;
use App\Models\Order;
use App\Models\Product;
use PDF;

class InvoiceController extends Controller
{
    public function index($id,$seller_id,$buyer_id,Request $request){
        // $request->session()->get('id')
        // $user=User::find(1);
        $user= $request->user();
        // $order=Product::join('orders','orders.product_id','=','products.id')
        //                 ->join('users','users.id','=','products.seller_id')
        //                 ->where('products.seller_id',$user->id)
        //                 ->Where('orders.id',$id)
        //                 ->get(['orders.id','orders.updated_at','orders.price_on_selling_time','orders.amount','orders.status','orders.product_id','products.name']);
        $order=Order::find($id);
        $seller=User::find($seller_id);
        $buyer=User::find($buyer_id);
        $product=Product::find($order->product_id);

        $data=[
            'order'=>$order,
            'seller'=>$seller,
            'buyer'=>$buyer,
            'product'=>$product,
        ];
        $name="INVOICE".$order->id.".pdf";
        $pdf=PDF::loadview('seller.invoice',$data);
        return $pdf->download($name);


        return view('seller.invoice',compact('seller','order','buyer','product'));
    }
}
