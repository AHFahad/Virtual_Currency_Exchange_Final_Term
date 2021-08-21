<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SslCommerzPaymentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RegistrationController;


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
    route::Post('profile/updateprofile','profileController@updateProfile')->name('profile.update');
    route::Post('profile/update/password','profileController@updatePassword')->name('profile.update.password');
    route::post('prime','PrimeController@store');
    route::post('report','ReportController@store');
    route::get('ssl/payment/{result}','SslController@result')->name('ssl.payment.result');
    route::post('search/product','productController@search')->name('product.search');

});
//ssl ecommarz
Route::get('/example1', [SslCommerzPaymentController::class, 'exampleEasyCheckout']);
Route::get('/example2', [SslCommerzPaymentController::class, 'exampleHostedCheckout']);

Route::post('/pay', [SslCommerzPaymentController::class, 'index']);
Route::post('/pay-via-ajax', [SslCommerzPaymentController::class, 'payViaAjax']);

Route::post('/success', [SslCommerzPaymentController::class, 'success']);
Route::post('/fail', [SslCommerzPaymentController::class, 'fail']);
Route::post('/cancel', [SslCommerzPaymentController::class, 'cancel']);

Route::post('/ipn', [SslCommerzPaymentController::class, 'ipn']);


//buyer
Route::get('/user/profile/{id}', [UserController::class,'profile'])->name('user.profile');
Route::get('/user/history/{id}', [UserController::class,'history'])->name('user.history');
Route::get('/user/details/{id}', [UserController::class,'details'])->name('user.details');
Route::get('/user/dashboard/{id}', [UserController::class,'dashboard']);
Route::get('/user/order/{uid}/{id}', [UserController::class,'order']);
Route::post('/user/order/{uid}/{id}', [UserController::class,'orderConfirm']);

Route::post('/register', [RegistrationController::class,'comfirmRegister']);