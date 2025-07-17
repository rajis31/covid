<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('testimonials', function (Blueprint $table) {
            $table->string('name', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->date('date_of_last_infection')->nullable();
            $table->integer('num_of_times_infected')->nullable();
            $table->boolean("vaccinated")->nullable();
            $table->string("vaccine_type", 255)->nullable();
            $table->integer('num_of_vaccines')->nullable();
            $table->text('story');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('testimonials', function (Blueprint $table) {
            $table->dropColumn([
                'name',
                'email',
                'date_of_last_infection',
                'num_of_times_infected',
                'story',
                'vaccinated',
                'vaccine_type',
                'num_of_vaccines'
            ]);
        });
    }
};
