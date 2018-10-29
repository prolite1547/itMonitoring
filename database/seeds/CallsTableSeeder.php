<?php

use Illuminate\Database\Seeder;

class CallsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Call::class,30)->create()->each(function ($u){
           $u->incident()->save(factory(App\Incident::class)->make());
        });
    }
}
