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
            Log::info('Received ID for deletion: ' . $id);
            $course = Course::find($id); // Using plain ID

            if ($course) {
                Log::info('Deleting course: ' . $course->name);

                // Delete the associated image if it exists
                if ($course->image) {
                    $imagePath = 'images/' . $course->image;
                    Log::info('Deleting image at path: ' . $imagePath);
                    Storage::delete($imagePath);
                }

                $course->delete();
                Log::info('Course deleted successfully.');
                return response()->json(['message' => 'Course deleted successfully.'], 200);
            }

            Log::warning('Course not found for ID: ' . $id);
            return response()->json(['error' => 'Course not found.'], 404);
        } catch (\Exception $e) {
            Log::error('Course deletion error: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to delete course: ' . $e->getMessage()], 500);
        }
    }


}
