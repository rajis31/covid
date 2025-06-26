<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/donate', function () {
    return Inertia::render('Donate');
})->name('donate');

Route::get('/login', [AuthController::class, 'showLogin'])
    ->name('login');


require __DIR__.'/auth.php';
