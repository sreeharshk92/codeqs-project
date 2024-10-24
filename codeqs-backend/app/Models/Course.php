<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;

    // Specify the table if it's not the plural of the model name
    protected $table = 'courses';

    // Define the fillable properties to allow mass assignment
    protected $fillable = [
        'name',
        'price',
        'category_id',
        'image',
        'status',
        'is_favourate',
    ];

    // Define the relationship with the Category model
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
