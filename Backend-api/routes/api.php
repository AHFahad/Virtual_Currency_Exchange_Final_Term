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

















































Route::get('/admin/home', 'AdminHomeController@index')->name('adminHome');

Route::get('/admin/editProfile', 'AdminHomeController@editProfile')->name('adminEditProfile');
Route::post('/admin/editProfile/{id}', 'AdminHomeController@verifyEditProfile')->name('verifyEditProfile');

Route::get('/admin/viewAllUserInfo', 'AdminHomeController@viewAllUserInfo')->name('adminViewAllUserInfo');
Route::get('/admin/userSearch', 'AdminHomeController@userSearch')->name('userSearch');

Route::get('/admin/addAdmin', 'AdminHomeController@addAdmin')->name('addAdmin');
Route::post('/admin/addAdmin', 'AdminHomeController@verifyAddAdmin')->name('verifyAddAdmin');

Route::get('/admin/adminEditUserInfo/{id}', 'AdminHomeController@editUserInfo')->name('adminEditUserInfo');
Route::post('/admin/adminEditUserInfo/{id}', 'AdminHomeController@verifyEditUserInfo')->name('verifyEditUserInfo');

Route::get('/admin/adminDeleteUserInfo/{id}', 'AdminHomeController@deleteUserInfo')->name('adminDeleteUserInfo');


Route::get('/admin/viewAllTransaction', 'AdminHomeController@viewAllTransaction')->name('adminViewAllTransaction');
Route::get('/admin/buyerMonitoringSearch', 'AdminHomeController@buyerMonitoringSearch')->name('buyerMonitoringSearch');

Route::get('/admin/userReports', 'AdminHomeController@userReports')->name('adminUserReports');

Route::get('/admin/announcement', 'AdminHomeController@announcement')->name('adminAnnouncement');
Route::post('/admin/announcement', 'AdminHomeController@sendAnnouncement')->name('sendAnnouncement');
Route::get('/admin/deleteAnnouncement/{id}', 'AdminHomeController@deleteAnnouncement')->name('deleteAnnouncement');

Route::get('/admin/prime_approval', 'AdminHomeController@prime_approval')->name('prime_approval');
Route::get('/admin/editPrimeDuration/{seller_id}', 'AdminHomeController@editPrimeDuration')->name('editPrimeDuration');
Route::post('/admin/updatePrimeDuration/{seller_id}', 'AdminHomeController@updatePrimeDuration')->name('updatePrimeDuration');