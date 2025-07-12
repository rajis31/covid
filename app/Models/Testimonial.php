<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $guarded = [];

    protected $casts = [
        'symptoms' => 'array',
        'is_anonymous' => 'boolean',
    ];
}
