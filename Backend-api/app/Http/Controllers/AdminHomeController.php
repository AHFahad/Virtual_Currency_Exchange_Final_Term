<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\EditProfileRequest;
use App\Http\Requests\EditUserInfoRequest;
use Illuminate\Support\Facades\DB;

class AdminHomeController extends Controller
{
    
    public function index(Request $req){
        $id = $req->session()->get('id');
        $name = DB::table('users')->where('id', $id)->first();
        
        $orders = DB::table('orders')->count();
        $values = DB::table('orders')->sum('price_on_selling_time');
        $counter = DB::table('site_infos')->value('trafic_number');
        $users = DB::table('users')->where('status', '<>', 'deleted')->count();
        $admins = DB::table('users')->where('type', 'admin')->where('status', '<>', 'deleted')->count();
        $sellers = DB::table('users')->where('type', 'seller')->where('status', '<>', 'deleted')->count();
        $buyers = DB::table('users')->where('type', 'buyer')->where('status', '<>', 'deleted')->count();
        $primes = DB::table('users')->where('prime_status', 'prime')->count();

        return view('admin.adminHome', compact('users','admins','sellers','buyers','primes','orders','values','counter'))->with('adminHome',$name);
    }

    public function addAdmin(Request $req){
        return view('admin.createAdmin');
    }

    public function verifyAddAdmin(EditProfileRequest $req){
        DB::table('users')->insert(
            ['name' => $req->name,
            'email' => $req->email,
            'password' => $req->password,
            'address' => $req->address,
            'phone_number' => $req->phone,
            'nid_number' => $req->nid_number,
            'type' => 'admin',
            'aproved_by' => $req->session()->get('id'),
            'status' => 'active',
            'created_at' => date('Y/m/d H:i:s'),
        ]);
        return redirect()->route('adminViewAllUserInfo');
    }

    public function editProfile(Request $req){

        $id = $req->session()->get('id');
        $name = DB::table('users')->where('id', $id)->first();

        return view('admin.adminEditProfile')->with('adminEditProfile',$name);
    }

    public function verifyEditProfile(EditProfileRequest $req, $id){


        if($req->hasFile('profile_picture')){
            $extension = $req->profile_picture->getClientOriginalExtension();
            $newName = 'adminDP1'.'.'.$extension;
            $folderPath = "admin/";
            DB::table('users')
            ->where('id', $req->id)
            ->update(['name' => $req->name,
                      'email' => $req->email,
                      'password' => $req->password,
                      'address' => $req->address,
                      'phone_number' => $req->phone,
                      'updated_at' => date('Y/m/d H:i:s'),
                      'profile_picture' => $folderPath.$newName,
                    ]);
           
            $req->profile_picture->move($folderPath, $newName);
        }


        else{
            DB::table('users')
            ->where('id', $req->id)
            ->update(['name' => $req->name,
                      'email' => $req->email,
                      'password' => $req->password,
                      'address' => $req->address,
                      'phone_number' => $req->phone,
                      'updated_at' => date('Y/m/d H:i:s'),
                    ]);
        }
        return redirect()->route('adminEditProfile');
    }

    public function viewAllUserInfo(Request $req){
        $users = DB::table('users')->where('status', '<>', 'deleted')->where('id', '<>', $req->session()->get('id'))->get();

        return view('admin.adminViewAllUserInfo')->with('adminViewAllUserInfo',$users);
    }

    public function editUserInfo(Request $req, $id){
        $users = DB::table('users')->where('id', $id)->first();

        return view('admin.adminEditUserInfo')->with('adminEditUserInfo',$users);
    }
    
    public function verifyEditUserInfo(EditUserInfoRequest $req, $id){
        DB::table('users')
            ->where('id', $req->id)
            ->update(['name' => $req->name,
                      'email' => $req->email,
                      'password' => $req->password,
                      'address' => $req->address,
                      'phone_number' => $req->phone,
                      'prime_status' => $req->prime_status,
                      'status' => $req->status,
                      'updated_at' => date('Y/m/d H:i:s'),
                    ]);
        return redirect()->route('adminViewAllUserInfo');
    }

    public function deleteUserInfo(Request $req, $id){
        DB::table('users')
        ->where('id', $req->id)
        ->update(['status' => 'deleted']);
        return redirect()->route('adminViewAllUserInfo');
    }

    public function viewAllTransaction(Request $req){
        $orders = DB::table('orders')->get();

        return view('admin.adminViewAllTransaction')->with('adminViewAllTransaction',$orders);
    }

    public function userReports(Request $req){
        $reports = DB::table('reports')->get();

        return view('admin.adminUserReports')->with('adminUserReports',$reports);
    }

    public function announcement(Request $req){
        $announcements = DB::table('announcements')->where('status','=','active')->get();

        return view('admin.adminAnnouncement')->with('adminAnnouncement',$announcements);
    }

    public function sendAnnouncement(Request $req){
        DB::table('announcements')->insert(
            ['admin_id' => $req->session()->get('id'),
            'description' => $req->desc,
            'created_at' => date('Y/m/d H:i:s'),
            'status' => 'active'
        ]);
        return redirect()->route('adminAnnouncement');
    }

    public function deleteAnnouncement(Request $req, $id){
        DB::table('announcements')
        ->where('ann_id', $req->id)
        ->update(['status' => 'deleted']);
        return redirect()->route('adminAnnouncement');
    }

    public function prime_approval(Request $req){
        $prime = DB::table('payments')->get();

        return view('admin.prime_approval')->with('prime_approval',$prime);
    }

    public function editPrimeDuration(Request $req, $seller_id){
        $users = DB::table('prime_resets')->where('seller_id', $seller_id)->first();

        return view('admin.editPrime_resets')->with('prime_resets',$users);
    }

    public function updatePrimeDuration(Request $req, $seller_id){
        DB::table('prime_resets')
            ->where('seller_id', $req->seller_id)
            ->update(['prime_expire_date' => $req->prime_expire_date,
                      'updated_at' => date('Y/m/d H:i:s'),
                    ]);
        return redirect()->route('prime_approval');
    }
}
