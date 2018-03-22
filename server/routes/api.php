<?php

use Illuminate\Http\Request;

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
Route::post('/post-nhanvien',[
	'uses' => 'NhanvienController@postNhanvien'
]);
Route::get('/get-nhanvien',[
	'uses' => 'NhanvienController@getNhanvien'
]);
Route::put('/put-nhanvien/{id}',[
	'uses' => 'NhanvienController@putNhanvien'
]);
Route::delete('/delete-nhanvien/{id}',[
	'uses' => 'NhanvienController@deleteNhanvien'
]);
