<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::group([
    'prefix'=>'seller',
    'namespace'=>'seller',
    'as'=>'seller.'
],function()
{
    route::resource('product','ProductController')->except('update');
    route::post('product/{id}','ProductController@update');
    route::resource('profile','profileController')->only('index');
    route::resource('order','OrderController')->only(['index','show','update']);
    route::post('product/update/status','productController@updateStatus')->name('product.updatestatus');
    route::resource('statement','StatementController');
    route::get('invoice/{id}/{seller_id}/{buyer_id}','InvoiceController@index')->name('invoice.index');
    route::get('dashboard','DashboardController@index')->name('dashboard');
    route::Post('dashboard','DashboardController@get')->name('dashboard.get');
});
