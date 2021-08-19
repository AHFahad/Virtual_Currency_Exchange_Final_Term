<?php

namespace App\Http\Controllers\seller;
use Illuminate\Support\Facades\Validator;

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
    // ReportRequest
    public function store(Request $request){

        // $validator = Validator::make($request->all(),$this->rules() );;

        $validator = Validator::make($request->all(), [
                'report' => 'required|max:500|min:10',
        ],
         [
            'report.required' => 'Provide a desciption of the problem .',
            'report.min' => 'Please..write proper report . 10 character minimum'
        ]
        );
        if ($validator->fails()) {
            return response()->json([
                "errorData"=>$validator->errors()->first(),
                'msg' => $validator->errors()->first(),
                'status' => 'error',
                'error'=>'400'
            ]);
        }

        // $request->session()->get('id')

        $user=User::find(1);
        $user= $request->user();
        $report=new Report;
        $report->seller_id=$user->id;
        $report->rep_description=$request->report;
        $report->buyer_id=0;// 0 becouse report is done by seller
        $report->save();
        return response()->json([
            'msg' => "Report is Sucessfully done.",
            'user' => $user,
            'status'=>'success',
        ]);
        // $request->session()->flash('msg'," Report is Sucessfully done.");
        // return redirect()->back();
    }
}
