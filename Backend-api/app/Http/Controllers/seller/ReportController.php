<?php

namespace App\Http\Controllers\seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Report;
use App\Models\User;
use App\Models\Order;
use App\Http\Requests\seller\ReportRequest;
class ReportController extends Controller
{
    public function index(Request $request)
    {
        $user=User::find($request->session()->get('id'));
        return view('seller.report',compact('user'));

    }
    public function store(ReportRequest $request){
        $user=User::find($request->session()->get('id'));
        $report=new Report;
        $report->seller_id=$user->id;
        $report->rep_description=$request->report;
        $report->buyer_id=0;// 0 becouse report is done by seller
        $report->save();
        $request->session()->flash('msg'," Report is Sucessfully done.");
        return redirect()->back();
    }
}
