<?php

namespace App\Http\Controllers\seller;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Http\Requests\seller\EditProfileRequest;
use Illuminate\Http\Request;
use App\Models\User;
class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $user=User::find($request->session()->get('id'));
        // $user=User::find(1);
        $user= $request->user();

        // dd($user);
        // return view('seller.profile',compact('user'));

        return response()->json([
            'user' => $user,
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function editProfile(Request $request)
    {
         $user=User::find($request->session()->get('id'));
         return view('seller.sellerEditProfile',compact('user'));
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // EditProfileRequest
    public function updateProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:40|min:3',
            'address' => 'required|max:500|min:10',
            'phone_number' => 'required|max:40|min:11',
         ],
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
        // $user=User::find(1);
        $user= $request->user();

        if($user->points >=10 || $user->prime_status=="prime"){
            if($user->prime_status!="prime")
            $user->points=$user->points-10;
            if($request->hasFile('profile_picture')){
                if($user->profile_picture)unlink($user->profile_picture);
                $extension = $request->profile_picture->getClientOriginalExtension();
                $newName = date('U').'.'.$extension;
                $folderPath = "seller/image/profile/";
                $user->profile_picture = $folderPath.$newName;
                $request->profile_picture->move($folderPath, $newName);
                }
                $user->name=$request->input('name');
                // $user->email=$request->input('email');
                $user->address=$request->input('address');
                $user->phone_number=$request->input('phone_number');
                $user->update();
                // $request->session()->flash('msg','Profile is Updated!');
                return response()->json([
                    'msg' => "Profile is Updated!",
                    'user' => $user,
                    'status'=>'success'
                ]);
        }
        else{
            // $request->session()->flash('msg'," you do not have enough points");
            return response()->json([
                'msg' => " you do not have enough points",
                'user' => $user,
                'status'=>'error'
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
    public function changePassword(Request $request)
    {
        $user = User::find($request->session()->get('id'));
        // dd($request->session()->get('id'));
        return view('seller.changePassword',compact('user'));

    }
    public function updatePassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'new_password' => 'required|max:50|min:4',
         ],);

         if ($validator->fails()) {
            return response()->json([
                "errorData"=>$validator->errors(),
                'msg' => "Validation Error",
                'status' => 'error',
                'error'=>'400'
            ]);
        }
            // $request->session()->get('id')
            // $user=User::find(1);
            $user= $request->user();

            if($user->password==$request->old_password){
                $user->password=$request->new_password;
                $user->update();
                // $request->session()->flash('msg', "Password change successfully!");
                return response()->json([
                    'msg' => " Password change successfully!",
                    'user' => $user,
                    'status'=>'success'
                ]);
            }
            else{
                // $request->session()->flash('msg', "Wrong Password");
                return response()->json([
                    'msg' => " Wrong Password",
                    'user' => $user,
                    'status'=>'error'
                ]);
            }

            // return redirect()->Back();




    }
    public function destroy($id)
    {
        //
    }
}
