<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'SuperAdmin'],
            ['name' => 'Admin'],
            ['name' => 'Staff']
        ];
        DB::table('roles')->insert($roles);
    }
}
