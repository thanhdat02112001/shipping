<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }
    public function create(User $user) {
        return $user->isSuperAdmin() ? Response::allow() : Response::deny('You dont have permission');
    }

    public function index(User $user) {
        return $user->isSuperAdmin() ? Response::allow() : Response::deny('You dont have permission');
    }
}
