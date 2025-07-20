<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StatsController extends Controller
{
      public function showStats()
    {
        return Inertia::render('Stats');
    }
}
