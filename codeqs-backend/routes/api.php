<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Middleware\HandleCors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware([HandleCors::class])->group(function () {
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::post('/courses', [CourseController::class, 'save']);
    Route::get('/courses', [CourseController::class, 'list']);
    Route::delete('/courses/{id}', [CourseController::class, 'delete']); // Route for deleting courses

});
