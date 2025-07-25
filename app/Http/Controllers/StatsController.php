<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StatsController extends Controller
{
    public function showStats()
    {
        // Total unique long haulers
        $totalLongHaulers = Testimonial::distinct('anonymous_user_id')->count();

        // Total fully recovered users
        $fullyRecoveredCount = Testimonial::where('has_recovered', true)
            ->distinct('anonymous_user_id')
            ->count();

        // Percent fully recovered
        $percentFullyRecovered = $totalLongHaulers > 0
            ? round(($fullyRecoveredCount / $totalLongHaulers) * 100, 1)
            : 0;

        // Average duration of recovery in months
        $averageDurationInMonths = Testimonial::whereNotNull('date_of_recovery')
            ->whereNotNull('date_of_long_covid_onset')
            ->where('has_recovered', true)
            ->select(DB::raw('
                COALESCE(AVG((date_of_recovery - date_of_long_covid_onset) / 30.44), 0) as avg_months
            '))
            ->value('avg_months');

        // New Haulers YTD
        $newHaulersYTD = Testimonial::where('created_at', '>=', Carbon::now()->startOfYear())->count();

        // Top 20 symptoms
       $topSymptoms = DB::select("
            SELECT
                jsonb_array_elements_text(symptoms::jsonb) AS symptom,
                COUNT(*) AS count
            FROM testimonials
            WHERE jsonb_typeof(symptoms::jsonb) = 'array'
            GROUP BY symptom
            ORDER BY count DESC
            LIMIT 20
        ");


        return Inertia::render('Stats')->with([
            'totalLongHaulers' => $totalLongHaulers,
            'percentFullyRecovered' => $percentFullyRecovered,
            'averageRecoveryDuration' => $averageDurationInMonths ? round($averageDurationInMonths, 1) : null,
            'newHaulersYTD' => $newHaulersYTD,
            'topSymptoms' =>$topSymptoms,
        ]);
    }
}
