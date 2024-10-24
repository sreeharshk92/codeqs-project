<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name'=>'Frontend'
        ]);
        Category::create([
            'name'=>'Backend'
        ]);
        Category::create([
            'name'=>'Database'
        ]);
        Category::create([
            'name'=>'others'
        ]);
    }
}
