<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $this->authorize("create", User::class);
        $request->validate([
            'email' => 'required|unique:users,email|email',
            'name' => 'required',
            'password' => 'required'
        ]);
        $user = User::create([
            'email' => $request->email,
            'name' => $request->name,
            'password' => Hash::make($request->password),
            'role_id' => $request->role,
            'status' => 0
        ]);
        if ($user) {
            event(new Registered($user));
            return response()->json([
                'status'=> '200',
                'user'=> $user
            ]);
        }
        return response()->json([
            'status' => '400',
            'message'=> 'error'
        ]);
    }

    public function index()
    { 
        $this->authorize('index', User::class); 
        $users = User::member()->get();
        return response()->json([
            'status' => '200',
            'users' => $users,
        ]);
    }
}
