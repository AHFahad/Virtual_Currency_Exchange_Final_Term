<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
class LoginController extends Controller
{
    public function login(){
        return view('login');
    }



    public function verify(Request $req){

        // $result = DB::table('users')
        //                 ->where('email', $req->email)
        //                 ->where('password', $req->password)
        //                 ->first();
        $result = User::whereEmail($req->email)->where('password', $req->password)->first();

        if($result){

            if($result->status == "active"){

                // $req->session()->put('email', $req->email);
                // return response()->json([
                //     'email' => $req->email,
                // ]);

                if($result->type == "admin"){
                    // return redirect()->route('adminHome');
                    return response()->json([
                        'user' => $result,
                        'msg' => 'Login successfull',
                        'status'=>'success',
                        'token'=>$result->createToken("token")->plainTextToken
                    ]);
                }
                elseif($result->type == "buyer"){
                    // $req->session()->put('id', $result->id);
                    // $req->session()->put('name', $result->name);
                    // $req->session()->put('photo', $result->profile_picture);

                    // return redirect()->route('user.dashboard');
                    return response()->json([
                        'user' => $result,
                        'msg' => 'Login successfull',
                        'status'=>'success',
                        'token'=>$result->createToken("token")->plainTextToken
                    ]);

                }
                elseif($result->type == "seller"){
                    // $req->session()->put('id', $result->id);
                    return response()->json([
                        'user' => $result,
                        'msg' => 'Login successfull',
                        'status'=>'success',
                        'token'=>$result->createToken("token")->plainTextToken
                    ]);
                    // return redirect()->route('seller.dashboard');
                }
            }else{
                // $req->session()->flash('msg', 'Your Account is deactivated');
                // return redirect('/login');
                return response()->json([
                    'msg' => 'Your Account is deactivated',
                    'status'=>'error'
                ]);
            }
        }
        else{
            // $req->session()->flash('msg', 'Invalid email or password!');
            // return redirect('/login');
            return response()->json([
                'msg' => 'Invalid email or password!',
                'status'=>'error'
            ]);
        }
    }
     public function github(){
        // return Socialite::driver('github')->redirect();
        return Socialite::with('github')->stateless()->redirect()->getTargetUrl();

    }
    public function githubRedirect(Request $req){

        try{
            // $data = Socialite::driver('github')->user();
            // Socialite::with('github')->stateless()->redirect()->getTargetUrl();
            $data = Socialite::with('github')->stateless()->user();

        } catch (\Exception $e) {
            // $req->session()->flash('msg', 'Something went wrong or You have rejected the app!');
            // return redirect('/login');
            return response()->json([
                'msg' => 'Something went wrong or You have rejected the app!',
                'status'=>'error'
            ]);
        }



        // $user=User::where('email',$data->email)->first();
        $user=User::whereEmail($data->email)->first();
        if(!$user){
            $user=new User();
            if(is_null($data->name)){
                $user->name=$data->nickname;
            }else{
                $user->name=$data->name;
            }
            $user->email=$data->email;
            $user->status='active';
            $user->provider_id=$data->id;
            $user->save();

        }
                    // $req->session()->put('id', $user->id);
                    // $req->session()->put('name', $user->name);
                    // return redirect()->route('user.dashboard');
                    // return response()->json([
                    //     'user' => $user,
                    //     'msg' => 'Login successfull',
                    //     'status'=>'success',
                    //     'token'=>$user->createToken("token")->plainTextToken
                    // ]);
                    $token=$user->createToken("token")->plainTextToken;
                    return redirect('http://localhost:3000/seller/log/'.$token);

    }
    public function google(){
        // return Socialite::driver('google')->redirect();
        return Socialite::with('google')->stateless()->redirect()->getTargetUrl();
        // return Socialite::with('google')->stateless()->redirect();
    }


    public function googleRedirect(Request $req){
        try{
            // $data = Socialite::driver('google')->user();
            // Socialite::with('google')->stateless()->redirect()->getTargetUrl();
            $data = Socialite::with('google')->stateless()->user();
        } catch (\Exception $e) {

            // $req->session()->flash('msg', 'Something went wrong or You have rejected the app!');
            // return redirect('/login');
            return response()->json([
                'msg' => 'Something went wrong or You have rejected the app!',
                'status'=>'error'
            ]);
        }



        // $user=User::where('email',$data->email)->first();
        $user=User::whereEmail($data->email)->first();
        if(!$user){
            $user=new User();
            $user->name=$data->name;
            $user->email=$data->email;
            $user->status='active';
            $user->provider_id=$data->id;
            $user->save();
        }
        $token=$user->createToken("token")->plainTextToken;
                    // $req->session()->put('id', $user->id);
                    // $req->session()->put('name', $user->name);
                    // return redirect()->route('user.dashboard');
                    // return response()->json([
                    //     'user' => $user,
                    //     'msg' => 'Login successfull',
                    //     'status'=>'success',
                    //     'token'=>$user->createToken("token")->plainTextToken
                    // ]);
                    return redirect('http://localhost:3000/seller/log/'.$token);

    }



}
