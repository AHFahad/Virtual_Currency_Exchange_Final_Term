<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;


class SellerCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user=User::find($request->session()->get('id'));
        if($user->type=='seller'){
            return $next($request);
        }
        else{
            $request->session()->flash('msg', 'You have to login first as a seller');
            return redirect()->route('login');
        }
        return $next($request);
    }
}
