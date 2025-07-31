<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\StatsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonialController;
use App\Models\Testimonial;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $testimonials = Testimonial::orderBy('created_at', 'desc')->limit(5)->get();
    return Inertia::render('Home', [
        'testimonials' => $testimonials,
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');


Route::post('/register', [AuthController::class, 'register'])
    ->name('register');

Route::middleware(['auth'])->group(function () {
    Route::group(['prefix' => 'testimonial'], function () {
        Route::get('/', [TestimonialController::class, 'showTestimonial'])->name("testimonial.show");
        Route::post('/store', [TestimonialController::class, 'store']);
    });
});

// Stats
Route::get('/stats', [StatsController::class, 'showStats'])
    ->name('stats.show');

Route::get('/donate', function () {
    return Inertia::render('Donate');
})->name('donate');

// Route::get('/login', [AuthController::class, 'showLogin'])
//     ->name('login');

// Route::get('/register', [AuthController::class, 'showRegister'])
//     ->name('register.show');

require __DIR__.'/auth.php';
