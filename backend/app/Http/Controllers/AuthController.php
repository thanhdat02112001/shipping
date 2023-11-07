<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate(
            [
                'email' => 'email|required', 
                'password' => 'required'
            ]
        );
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer'
            ]);
        }
        return response()->json([
            'status_code' => 500,
            'message' => 'Unauthorized'
        ]);
    }

    public function register(Request $request)
    {
        $request->validate(
            [
                'email' => 'email|required', 
                'password' => 'required'
            ]
        );
        $newUser = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];
        $user = User::create($newUser);
        if ($user) {
            Auth::login($user);
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer'
            ]);
        }
        return response()->json([
            'status_code' => 500,
            'message' => 'Unauthorized'
        ]);
    }

}
