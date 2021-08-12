<?php

namespace App\Http\Requests\seller;

use Illuminate\Foundation\Http\FormRequest;

class EditProfileRequest extends FormRequest
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
            'name' => 'required|max:40|min:3',
            'address' => 'required|max:500|min:10',
            'phone_number' => 'required|max:40|min:11',
        ];
    }
}
