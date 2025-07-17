<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;


class TestimonialController extends Controller
{
    public function showTestimonial()
    {
        return Inertia::render('Testimonial');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'story' => 'required|string',
            'symptoms' => 'required|array',
            'symptoms.*' => 'string',
        ]);

        if($request->has("is_anonymous") && $request->is_anonymous){
            $anonymous_user_id = Str::uuid();
        }

       Testimonial::create([
            'name' => $request->name,
            'email' => $request->email,
            'story' => $request->story,
            'is_anonymous' => $request->is_anonymous ?? false,
            'symptoms' => json_encode($request->symptoms),
            'treatments' => json_encode($request->treatments),
            'date_of_last_infection' => $request->date_of_last_infection,
            'num_of_times_infected' => $request->num_of_times_infected,
            'vaccinated' => $request->vaccinated,
            'vaccine_type' => $request->vaccine_type,
            'num_of_vaccines' => $request->num_of_vaccines,
            'anonymous_user_id' => $request->is_anonymous ? $anonymous_user_id : null,
        ]);
        return redirect()->back()->with('success', 'Testimonial submitted successfully.');
    }
}
