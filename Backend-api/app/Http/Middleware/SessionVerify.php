<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SessionVerify
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
        if($request->session()->has('id')){
            return $next($request);

        }else{
            $request->session()->flash('msg', 'You have to login first');
            return redirect()->route('login');
        }
    }
}
