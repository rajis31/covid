<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('testimonials', function (Blueprint $table) {
            $table->boolean('has_recovered')->default(false)->after('date_of_long_covid_onset');
            $table->date('date_of_recovery')->nullable()->after('has_recovered');
            $table->string("gender", 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('testimonials', function (Blueprint $table) {
            $table->dropColumn(['has_recovered', 'date_of_recovery', 'gender']);
        });
    }
};
