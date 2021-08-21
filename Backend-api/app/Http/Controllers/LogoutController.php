<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function index(Request $request){

        // $req->session()->flush();
        // $request->user()->tokens()->delete();
        // $user = request()->user();
        // $user->tokens()->where('tokenable_id', $user->id)->delete();
        $request->user()->currentAccessToken()->delete();
        // $user = request()->user();
        // $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();;
        return response()->json([
            'msg' => 'successfully Logout',
            'status'=>'success',
        ]);
    }
}
