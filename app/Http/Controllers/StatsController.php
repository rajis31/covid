<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatsController extends Controller
{
      public function showStats()
    {
        $totalLongHaulers = Testimonial::distinct('email')->count('email');
        return Inertia::render('Stats')->with([
            "totalLongHaulers" => $totalLongHaulers,
        ]);
    }
}
