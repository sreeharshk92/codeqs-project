<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CourseSaveRequest;
use App\Models\Course;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CourseController extends Controller
{
    public function save(CourseSaveRequest $request)
    {
        try {
            Log::info('Incoming request data:', $request->all());
            $validated = $request->validated();

            if ($request->hasFile('image')) {
                $extension = $request->image->extension();
                $filename = Str::random(6) . '-' . time() . '_course.' . $extension;
                $request->image->storeAs('images', $filename);
                $validated['image'] = $filename;
            }

            Course::create($validated);
            return response()->json(['message' => 'Course saved successfully.'], 201);
        } catch (\Exception $e) {
            Log::error('Course save error: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to save course'], 500);
        }
    }

    public function list()
    {
        $courses = Course::with('category')->latest()->paginate(15);
        return response()->json($courses);
    }

    public function delete($id)
    {
        try {
            $course = Course::find(decrypt($id));

            if ($course) {
                // Delete the associated image if it exists
                if ($course->image) {
                    Storage::delete('images/' . $course->image);
                }
                $course->delete();
                return response()->json(['message' => 'Course deleted successfully.'], 200);
            }

            return response()->json(['error' => 'Course not found.'], 404);
        } catch (\Exception $e) {
            Log::error('Course deletion error: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to delete course'], 500);
        }
    }
}
