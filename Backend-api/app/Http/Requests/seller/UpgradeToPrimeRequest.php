<?php

namespace App\Http\Requests\seller;

use Illuminate\Foundation\Http\FormRequest;

class UpgradeToPrimeRequest extends FormRequest
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
                'transection_no' => 'required|max:40|min:11',
                'payment_method'=>'required|not_in:0',
                'package'=>'required|not_in:0',
        ];
    }
    public function messages()
    {
        return [
            'transection_no.required' => 'Please proper description of the problem..',
            'package.not_in' => 'select a package',
            'payment_method.not_in'=>'select a payment method'
        ];
    }
}
