<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{


    public function login(){
        return view('home.login');
    }

    public function index(){

        $counter = DB::table('site_infos')->value('trafic_number');
        $updated_counter=$counter+1;
        $affected = DB::update('update site_infos set trafic_number = '.$updated_counter.' where id = 1');

        return view('home.index');
    }

    public function contact(){
        return view('home.contact');
   }

   public function help(){
    return view('home.help');
    }

    public function home(){
        return view('home.index');
    }

    public function announcement(){
        return view('home.announcement');
    }

    public function postCard(){
        return view('home.postCard');
    }

    public function chatbox(){
        return view('home.chatbox');
    }

    public function marketplace(){
        return view('home.marketplace');
    }
    public function chat()
    {
        return view('chat');
    }
}
