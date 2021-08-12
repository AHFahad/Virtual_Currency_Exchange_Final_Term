<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use App\Models\Order;
use App\Http\Requests\seller\ProductRequest;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\Environment\Console;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // $user=User::find($request->session()->get('id'));
        $product=Product::where('seller_id',1)->get();

        // return view('seller.sellerProducts',compact('product','user'));
        return $product;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user=User::find($request->session()->get('id'));
        return view('seller.createproduct',compact('user'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {

        $product = new Product;
        $user=User::find($request->session()->get('id'));
        if($user->points >=10 || $user->prime_status=="prime"){
            if($user->prime_status!="prime")
            $user->points=$user->points-10;
            $user->update();
            if($request->hasFile('product_picture')){
                $extension = $request->product_picture->getClientOriginalExtension();
                $newName = date('U').'.'.$extension;
                $folderPath = "seller/image/product/";
                $product->product_picture = $folderPath.$newName;
                $request->product_picture->move($folderPath, $newName);
            }

            $product->name= $request->input('name');
            $product->price= $request->input('price');
            $product->description= $request->input('description');
            $product->number_of_info= $request->input('number_of_info');
            $product->Pyament_recive_no= $request->input('Pyament_recive_no');
            // $product->delete_status= $request->input('delete_status');

            $product->from_currency= $request->input('from_currency');
            $product->To_currency= $request->input('To_currency');
            // $product->seller_id=$request->session()->get('id');
            $product->seller_id=1;
            if($product->save()){
                // $request->session()->flash('msg',"Product Added Successfully!");
                return response()->json([
                    "message" => "Product Added Successfully!"
                  ], 404);
            }
            else
            {
                // $request->session()->flash('msg'," Failed To Add Product!");
                return response()->json([
                    "message" => "Failed To Add Product!"
                  ], 404);
            }

        }
        else{
            // $request->session()->flash('msg'," you do not have enough points, you can upgrate to prime seller!");
            return response()->json([
                "message" => "you do not have enough points, you can upgrate to prime seller!"
              ], 404);
        }

        return response()->json([
            "message" => "done"
          ], 404);


        //  return redirect()->Back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product,Request $request)
    {
        // $user=User::find($request->session()->get('id'));
        $user=User::find(1);
        $payment_methods = array('none',"Bkash", "Nagod", "roket","Mkash","Ukash","Gkash");
        $counter=0;
        $counter2=0;



        $rating=Product::join('orders','orders.product_id','=','products.id')
                            ->where('orders.rating','!=','')
                            ->where('products.seller_id',$user->id)
                            ->where('products.id',$product->id)
                            ->get('orders.rating');



                            // $user->id
        if($rating){
                $count=count($rating);
            $sum=$rating->sum('rating');

            if($count<1){
                $avg_rating='No rating';
            }
            else{
                $avg_rating=$sum/$count;
            }
        }


        // return View('seller.showproduct',compact('product','payment_methods','counter','counter2','user','avg_rating'));
        return $product;

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product,Request $request)
    {
        $user=User::find($request->session()->get('id'));
        $payment_methods = array('none',"Bkash", "Nagod", "roket","Mkash","Ukash","Gkash");
        $counter=0;
        $counter2=0;
        return View('seller.editproduct',compact('product','payment_methods','counter','counter2','user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, $id)
    {
         $user=User::find($request->session()->get('id'));
            if($user->points >=5 || $user->prime_status=="prime"){
                if($user->prime_status!="prime"){
                    $user->points=$user->points-5;
                    $user->update();
                }
                $product=Product::find($id);
                if($request->hasFile('product_picture')){
                if($product->product_picture)unlink($product->product_picture);
                $extension = $request->product_picture->getClientOriginalExtension();
                $newName = date('U').'.'.$extension;
                $folderPath = "seller/image/product/";
                $product->product_picture = $folderPath.$newName;
                $request->product_picture->move($folderPath, $newName);
                }
                $product->name= $request->input('name');
                $product->price= $request->input('price');
                $product->description= $request->input('description');
                $product->number_of_info= $request->input('number_of_info');
                $product->Pyament_recive_no= $request->input('Pyament_recive_no');
                $product->from_currency= $request->input('from_currency');
                $product->To_currency= $request->input('To_currency');
                $product->number_of_info=$request->input('number_of_info');
                $product->update();
                $request->session()->flash('msg','Product is Updated!');
            }
            else{
                $request->session()->flash('msg'," you do not have enough points");
             }


        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function active(Request $request, $id )
    {   $product=Product::find($id);
        $product->delete_status= 'active';
        $product->update();
        $request->session()->flash('msg','Product activated Successfully');
        return redirect()->back();
    }

    public function updateStatus(Request $request)
    {





        $id=$request->id;
        $product=Product::find($id);
        $product->delete_status=$request->status;


            if ($product->update()) {
                return response()->json([
                    'success' => 'Update successfully.'
                ]);
            } else {
                return response()->json([
                    'success' => 'Something went wrong.'
                ]);
            }




        // $request->session()->flash('msg','Product activated Successfully');
        // return redirect()->back();
    }

    public function deactive(Request $request, $id )
    {   $product=Product::find($id);
        $product->delete_status= 'deactive';
        $product->update();
        $request->session()->flash('msg','Product deactivated Successfully');
        return redirect()->back();
    }


    public function search(Request $request){
        $user=User::find($request->session()->get('id'));
        $search = $request->input('search');
        $product=Product::where('seller_id',$user->id)
                        ->where('name','LIKE','%'. $search .'%')
                        ->orWhere('description','LIKE','%'. $search .'%')
                        ->paginate(4);
        return view('seller.sellerProducts',compact('product','user'));

    }

    public function destroy(Product $product,Request $request)
    {

        $product->delete_status= 'deleted';
        $product->update();
        $request->session()->flash('msg','Product Deleted Successfully');
        return redirect()->route('seller.product.index');
    }
}
