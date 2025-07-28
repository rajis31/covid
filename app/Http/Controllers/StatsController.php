<?php

namespace App\Http\Controllers;

use App\Repositories\StatsRepository;
use Inertia\Inertia;

class StatsController extends Controller
{
    protected $stats;

    public function __construct(StatsRepository $stats)
    {
        $this->stats = $stats;
    }

    public function showStats()
    {
        return Inertia::render('Stats')->with([
            'totalLongHaulers' => $this->stats->totalLongHaulers(),
            'percentFullyRecovered' => $this->stats->percentFullyRecovered(),
            'averageRecoveryDuration' => $this->stats->averageRecoveryDuration(),
            'newHaulersYTD' => $this->stats->newHaulersYTD(),
            'topSymptoms' => $this->stats->topSymptoms(),
            'haulersByGender' => $this->stats->haulersByGender(),
        ]);
    }
}
