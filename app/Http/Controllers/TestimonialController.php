<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function showTestimonial()
    {
        return Inertia::render('Testimonial');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required|string',
            'is_anonymous' => 'required|boolean',
            'symptoms' => 'required|array',
            'symptoms.*' => 'string',
        ]);

        Testimonial::create($validated);

        return response()->json(['message' => 'Testimonial submitted successfully.']);
    }
}
