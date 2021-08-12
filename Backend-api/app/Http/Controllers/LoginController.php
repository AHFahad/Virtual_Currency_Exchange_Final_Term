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

        $result = DB::table('users')
                        ->where('email', $req->email)
                        ->where('password', $req->password)
                        ->first();

        if($result){

            if($result->status == "active"){

                $req->session()->put('email', $req->email);

                if($result->type == "admin"){
                    return redirect()->route('adminHome');
                }
                elseif($result->type == "buyer"){
                    $req->session()->put('id', $result->id);
                    $req->session()->put('name', $result->name);
                    $req->session()->put('photo', $result->profile_picture);
                    return redirect()->route('user.dashboard');

                }
                elseif($result->type == "seller"){
                    $req->session()->put('id', $result->id);
                    return redirect()->route('seller.dashboard');
                }
            }else{
                $req->session()->flash('msg', 'Your Account is deactivated');
                return redirect('/login');
            }
        }
        else{
            $req->session()->flash('msg', 'Invalid email or password!');
            return redirect('/login');
        }
    }
     public function github(){
        return Socialite::driver('github')->redirect();
    }
    public function githubRedirect(Request $req){
        try{
            $data = Socialite::driver('github')->user();
        } catch (\Exception $e) {
            $req->session()->flash('msg', 'Something went wrong or You have rejected the app!');
            return redirect('/login');
        }



        $user=User::where('email',$data->email)->first();
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
                    $req->session()->put('id', $user->id);
                    $req->session()->put('name', $user->name);
                    return redirect()->route('user.dashboard');

    }
    public function google(){
        return Socialite::driver('google')->redirect();
    }


    public function googleRedirect(Request $req){
        try{
            $data = Socialite::driver('google')->user();
        } catch (\Exception $e) {

            $req->session()->flash('msg', 'Something went wrong or You have rejected the app!');
            return redirect('/login');
        }



        $user=User::where('email',$data->email)->first();
        if(!$user){
            $user=new User();
            $user->name=$data->name;
            $user->email=$data->email;
            $user->status='active';
            $user->provider_id=$data->id;
            $user->save();
        }
                    $req->session()->put('id', $user->id);
                    $req->session()->put('name', $user->name);
                    return redirect()->route('user.dashboard');

    }



}
