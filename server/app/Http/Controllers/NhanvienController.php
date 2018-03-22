<?php

namespace App\Http\Controllers;
use App\Nhanvien;

use Illuminate\Http\Request;

class NhanvienController extends Controller
{
    public function postNhanvien(Request $request){
    	$nhanvien = new Nhanvien();
    	$nhanvien->name = $request->input('name');
    	$nhanvien->age = $request->input('age');
    	$nhanvien->hometown = $request->input('hometown');
    	$nhanvien->save();
    	return response()->json($nhanvien);
    }

    public function getNhanvien(){
    	$nhanvien = Nhanvien::all();
    	return response()->json($nhanvien);
    }

    public function putNhanvien($id, Request $request){
    	$nhanvien = Nhanvien::find($id);
    	if(!$nhanvien){
    		return response()->json(['message' => 'nhan vien not found'],404);
    	}
    	$nhanvien->name = $request->input('name');
    	$nhanvien->age = $request->input('age');
    	$nhanvien->hometown = $request->input('hometown');
    	$nhanvien->save();
    	return response()->json($nhanvien);
    }

    public function deleteNhanvien($id){
    	$nhanvien = Nhanvien::find($id);
    	$nhanvien->delete();
    	return response()->json(['message' => 'nhan vien deleted'],200);
    }
}
