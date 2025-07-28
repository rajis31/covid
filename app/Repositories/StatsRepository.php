<?php

namespace App\Repositories;

use App\Models\Testimonial;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class StatsRepository
{
    public function totalLongHaulers(): int
    {
        return Testimonial::distinct('anonymous_user_id')->count();
    }

    public function fullyRecoveredCount(): int
    {
        return Testimonial::where('has_recovered', true)
            ->distinct('anonymous_user_id')
            ->count();
    }

    public function percentFullyRecovered(): float
    {
        $total = $this->totalLongHaulers();
        $recovered = $this->fullyRecoveredCount();

        return $total > 0 ? round(($recovered / $total) * 100, 1) : 0;
    }

    public function averageRecoveryDuration(): ?float
    {
        $months = Testimonial::whereNotNull('date_of_recovery')
            ->whereNotNull('date_of_long_covid_onset')
            ->where('has_recovered', true)
            ->select(DB::raw('
                COALESCE(AVG((date_of_recovery - date_of_long_covid_onset) / 30.44), 0) as avg_months
            '))
            ->value('avg_months');

        return $months ? round($months, 1) : null;
    }

    public function newHaulersYTD(): int
    {
        return Testimonial::where('created_at', '>=', Carbon::now()->startOfYear())->count();
    }

    public function topSymptoms(): array
    {
        return DB::select("
            SELECT
                jsonb_array_elements_text(symptoms::jsonb) AS symptom,
                COUNT(*) AS count
            FROM testimonials
            WHERE jsonb_typeof(symptoms::jsonb) = 'array'
            GROUP BY symptom
            ORDER BY count DESC
            LIMIT 20
        ");
    }

    public function haulersByGender(): array
    {
        $total = Testimonial::count();

        if ($total === 0) {
            return [
                'male' => 0,
                'female' => 0,
                'other' => 0
            ];
        }
        $res = Testimonial::select('gender', DB::raw('count(*) as count'))
            ->groupBy('gender')
            ->pluck('count', 'gender')
            ->toArray();

        $percentages = [];
        foreach ($res as $gender => $count) {
            if ($gender === null) {
                $percentages['other'] = round(($count / $total) * 100, 1);
            } else {
                $percentages[$gender] = round(($count / $total) * 100, 1);
            }
        }

        if (!array_key_exists('male', $percentages)) {
            $percentages['male'] = 0;
        }
        if (!array_key_exists('female', $percentages)) {
            $percentages['female'] = 0;
        }
        if (!array_key_exists('other', $percentages)) {
            $percentages['other'] = 0;
        }

        return $percentages;
    }
}
