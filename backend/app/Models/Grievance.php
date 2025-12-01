<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grievance extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'description',
        'latitude',
        'longitude',
        'status',
        'upvotes',
        'image_tag',
    ];

    protected $casts = [
        'latitude' => 'float',
        'longitude' => 'float',
        'upvotes' => 'integer',
    ];
}
