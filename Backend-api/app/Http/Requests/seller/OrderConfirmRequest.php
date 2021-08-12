<?php

namespace App\Http\Requests\seller;

use Illuminate\Foundation\Http\FormRequest;

class OrderConfirmRequest extends FormRequest
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
            'seller_reply' => 'required|max:500|min:10',
        ];
    }
     public function messages()
    {
        return [
            'seller_reply.required' => 'Provide a reply',
            'seller_reply.min' => 'Provide a proper reply minimum 10 characters..'
        ];
    }
}
