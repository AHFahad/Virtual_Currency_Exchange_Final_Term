<?php

namespace App\Http\Controllers\seller;
use Illuminate\Support\Facades\Validator;
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

        // $request->session()->get('id')
        // $user=User::find(1);
        $user= $request->user();
        $product=Product::where('seller_id',$user->id)->get();

        // return view('seller.sellerProducts',compact('product','user'));

        return response()->json([
            'product' => $product,
            'user' => $user,
            'status'=>'success'
        ]);
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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:40|min:3',
            'description' => 'required|max:500|min:10',
            'price' => 'required|max:40|min:1',
            'Pyament_recive_no' => 'required|max:40|min:11',
         ],
         [
            'name.required' => 'Please provide a Title.',
            'description.required' => 'Provide a desciption.',
            'price.required' => 'Price is needed for the product.'
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
        // $request->session()->get('id')
        $product = new Product;
        // $user=User::find(1);
        $user= $request->user();
        $extension="";
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
            $product->seller_id=$user->id;
            if($product->save()){
                // $request->session()->flash('msg',"Product Added Successfully!");
                return response()->json([
                    'msg' => "Product Added Successfully!",
                    'user' => $user,
                    'status'=>'success',
                    'proudct_ic'=>$request->hasFile('product_picture')
                ]);
            }
            else
            {
                // $request->session()->flash('msg'," Failed To Add Product!");
                return response()->json([
                    'msg' => "Failed To Add Product!",
                    'user' => $user,
                    'status'=>'error'
                ]);
            }

        }
        else{
            // $request->session()->flash('msg'," you do not have enough points, you can upgrate to prime seller!");
            return response()->json([
                'msg' => "you do not have enough points, you can upgrate to prime seller!",
                'user' => $user,
                'status'=>'error'
            ]);

        }

        return response()->json([
            'msg' => "Product Added Successfully! done",
            'user' => $user,
            'status'=>'success'
        ]);


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
        // $user=User::find(1);
        $user= $request->user();
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

        return response()->json([
            'product' => $product,
            'user' => $user,
            'status'=>'success',
            'payment_methods' => $payment_methods,
            'counter' => $counter,
            'counter2' => $counter2,
            'avg_rating' => $avg_rating,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit( $id,Request $request)
    {
        // $request->session()->get('id')
        // $user=User::find(1);
        $user= $request->user();
        $payment_methods = array('none',"Bkash", "Nagod", "roket","Mkash","Ukash","Gkash");
        $counter=0;
        $counter2=0;
        // return View('seller.editproduct',compact('product','payment_methods','counter','counter2','user'));
        $product=Product::find($id);
        return response()->json([
            'product' => $product,
            'user' => $user,
            'status'=>'success',
            'payment_methods' => $payment_methods,
            'counter' => $counter,
            'counter2' => $counter2,
        ]);
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
        // $request->session()->get('id')
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:40|min:3',
            'description' => 'required|max:500|min:10',
            'price' => 'required|max:40|min:1',
            'Pyament_recive_no' => 'required|max:40|min:11',
         ],
         [
            'name.required' => 'Please provide a Title.',
            'description.required' => 'Provide a desciption.',
            'price.required' => 'Prisc is needed for the product.'
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
        //  $user=User::find(1);
        $user= $request->user();
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
                // $request->session()->flash('msg','Product is Updated!');
                return response()->json([
                    'msg' => "Product is Updated!",
                    'user' => $user,
                    'status'=>'success',
                ]);
            }
            else{
                // $request->session()->flash('msg'," you do not have enough points");
                return response()->json([
                    'msg' => " you do not have enough points",
                    'user' => $user,
                    'status'=>'success',
                ]);
             }


        // return redirect()->back();
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
        $product->update();
        return response()->json([
            'msg' => 'Update successfully...',
            'status'=>'success',
        ]);
    }

    public function deactive(Request $request, $id )
    {   $product=Product::find($id);
        $product->delete_status= 'deactive';
        $product->update();
        $request->session()->flash('msg','Product deactivated Successfully');
        return redirect()->back();
    }


    public function search(Request $request){
        // $request->session()->get('id')
        // $user=User::find(1);
        $user= $request->user();
        $search = $request->search;
        $product=Product::where('seller_id',$user->id)
                        ->where('name','LIKE','%'. $search .'%')
                        ->orWhere('description','LIKE','%'. $search .'%')
                        ->get();
        // return view('seller.sellerProducts',compact('product','user'));


        return response()->json([
            'product' => $product,
            'user' => $user,
            'status'=>'success'
        ]);

    }

    public function destroy(Product $product,Request $request)
    {

        $product->delete_status= 'deleted';
        $product->update();
        // $request->session()->flash('msg','Product Deleted Successfully');
        // return redirect()->route('seller.product.index');

        return response()->json([
            'msg' => 'Product Deleted Successfully',
            'status'=>'success',
        ]);
    }
}
