<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/donate', function () {
    return Inertia::render('Donate');
})->name('donate');

Route::get('/login', [AuthController::class, 'showLogin'])
    ->name('login.show');

Route::get('/register', [AuthController::class, 'showRegister'])
    ->name('register.show');

Route::post('/register', [AuthController::class, 'register'])
    ->name('register');


Route::group(['prefix' => 'testimonial'], function () {
    Route::get('/',  [TestimonialController::class, 'showTestimonial']);
});