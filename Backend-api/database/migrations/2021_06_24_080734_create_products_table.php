<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name',50);
            $table->integer('price');
            $table->string('product_picture',150)->nullable();
            $table->string('description',1500);
            $table->enum('number_of_info',['transection','phone','game_id'])->default('transection');
            $table->integer('from_currency')->default(null);
            $table->integer('To_currency')->default(null);
            $table->string('Pyament_recive_no',30);
            $table->integer('seller_id');
            $table->enum('delete_status',['deleted','active','deactive'])->default('active');
            $table->timestamps('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
