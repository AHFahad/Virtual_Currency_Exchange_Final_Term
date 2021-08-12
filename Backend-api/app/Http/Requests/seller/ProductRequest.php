<?php

namespace App\Http\Requests\seller;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'description' => 'required|max:500|min:10',
            'price' => 'required|max:40|min:1',
            'Pyament_recive_no' => 'required|max:40|min:11',
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Please provide a Title.',
            'description.required' => 'Provide a desciption.',
            'price.required' => 'Prisc is needed for the product.'

        ];
    }
}
