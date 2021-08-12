<?php

namespace App\Http\Requests\seller;

use Illuminate\Foundation\Http\FormRequest;

class ReportRequest extends FormRequest
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
            'report' => 'required|max:500|min:10',
        ];
    }
    public function messages()
    {
        return [
            'report.required' => 'Provide a desciption of the problem',
            'report.min' => 'write proper report please'
        ];
    }
}
