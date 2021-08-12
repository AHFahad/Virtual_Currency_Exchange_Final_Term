<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

class NormarlSellerCheck
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
        if($user->prime_status=='normal'){
            return $next($request);
        }
        else{
            $request->session()->flash('msg', 'Your are already an Prime User!');
            return redirect()->back();
        }
    }
}
