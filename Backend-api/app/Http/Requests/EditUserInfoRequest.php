<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditUserInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:20|min:4',
            'email' => 'required|max:20|min:11',
            'password' => 'required|max:20|min:8|regex:/^.+@.+$/',
            'address' => 'required|max:50|min:3',
            'phone' => 'required|max:11|min:11',
            'prime_status' => 'required',
            'status' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Must provide a name',
            'email.required' => 'Must provide a email.',
            'password.required' => 'Must provide a password within 8-20 Characters',
            'password.regex' => 'Password must have atleast one of these characters: "/^.+@.+$/"',
            'prime_status.required' => 'Must choose one',
            'status.required' => 'Must choose one'
        ];
    }
}
