<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email',50)->unique()->unique();
            $table->string('password',100);
            $table->string('address');
            $table->string('phone_number',16)->unique();
            $table->string('nid_card_picture',150)->nullable();
            $table->string('nid_number',30)->unique()->nullable();
            $table->enum('prime_status',['normal','prime'])->default('normal');
            $table->integer('aproved_by');
            $table->string('profile_picture',150)->nullable();
            $table->enum('status',['deleted','active','deactive'])->default('deactive');
            $table->integer('points')->default(0);
            $table->enum('type',['admin','seller','buyer'])->default('buyer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
