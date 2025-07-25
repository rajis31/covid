<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;


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
            'gender' => 'required|string',
            'date_of_long_covid_onset' => 'required|date',
            'date_of_recovery' => 'required_if:has_recovered,true|date|nullable',
        ]);

        if (Testimonial::where('user_id', Auth::id())->exists()) {
            throw ValidationException::withMessages([
                'duplicate' => ['You already submitted a testimonial, please edit your testimonial in the dashboard to make any changes.'],
            ]);
        }

        if ($request->has('is_anonymous') && $request->is_anonymous) {
            $anonymous_user_id = Str::uuid();
        }

        Testimonial::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'story' => $request->story,
            'is_anonymous' => $request->is_anonymous ?? false,
            'symptoms' => json_encode($request->symptoms),
            'treatments' => json_encode($request->treatments),
            'date_of_last_infection' => $request->date_of_last_infection,
            'date_of_long_covid_onset' => $request->date_of_long_covid_onset,
            'num_of_times_infected' => $request->num_of_times_infected,
            'vaccinated' => $request->vaccinated,
            'vaccine_type' => $request->vaccine_type,
            'num_of_vaccines' => $request->num_of_vaccines,
            'has_recovered' => $request->has_recovered,
            'date_of_recovery' => $request->date_of_recovery,
            'anonymous' => $request->is_anonymous ? true : false,
            'anonymous_user_id' => $request->is_anonymous ? 'User-' . $anonymous_user_id : null,
        ]);
        return redirect()->back()->with('success', 'Testimonial submitted successfully.');
    }
}
