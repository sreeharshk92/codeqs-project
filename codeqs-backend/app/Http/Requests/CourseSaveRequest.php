<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CourseSaveRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;  // Allow all users to make this request
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', 'unique:courses,name'], // Ensure course name is unique
            'price' => ['required', 'numeric', 'min:0'], // Ensure price is non-negative
            'category_id' => ['nullable', 'exists:categories,id'], // Validate against existing categories
            'status' => ['nullable', 'boolean'], // Accepts true or false
            'is_favourate' => ['nullable', 'boolean'], // Accepts true or false
            'image' => ['nullable', 'image', 'mimes:jpg,png,jpeg,gif', 'max:2048'], // Max size of 2MB
        ];
    }

    /**
     * Get custom validation messages.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The course name is required.',
            'name.unique' => 'The course name must be unique.',
            'price.required' => 'The price is required.',
            'price.numeric' => 'The price must be a number.',
            'price.min' => 'The price must be at least 0.',
            'category_id.exists' => 'The selected category does not exist.',
            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'The image must be a file of type: jpg, png, jpeg, gif.',
            'image.max' => 'The image may not be greater than 2MB.',
        ];
    }
}

