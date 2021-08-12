<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('product_id');
            $table->integer('buyer_id');
            $table->integer('price_on_selling_time');
            $table->string('transection_number_of_sender',40);
            $table->integer('amount')->default(0);
            $table->string('buyer_reply')->nullable();
            $table->string('seller_reply')->nullable();
            $table->string('review')->nullable();
            $table->integer('rating')->nullable()->default(null);
            $table->string('transection_no',40)->nullable();
            $table->string('phone_number',15)->nullable();
            $table->string('game_id',40)->nullable();
            $table->enum('status',['deleted','process','completed','cancelled'])->default('cancelled');
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
        Schema::dropIfExists('orders');
    }
}
