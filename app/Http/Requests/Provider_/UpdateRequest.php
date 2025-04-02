<?php

namespace App\Http\Requests\Provider_;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
         return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|string|max:200|unique:providers',
            'ruc_number' => 'required|string|max:15|min:15|unique:providers',
            'address' => 'nullable|string|max:255',
            'phone' => 'required|string|max:8|min:8|unique:providers',
        ];    
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Este campo es requerido',
            'name.string' => 'El valor no es correcto',
            'name.max' => 'Solo se permiten 255 caracteres',

            'email.string' => 'El valor no es correcto',
            'email.email' => 'Correo electrónico inválido',
            'email.required' => 'Este campo es requerido',
            'email.max' => 'Solo se permiten 255 caracteres',
            'email.unique' => 'Ya se encuentra registrado',

            'ruc_number.required' => 'Este campo es requerido',
            'ruc_number.string' => 'El valor no es correcto',
            'ruc_number.max' => 'Deden ser 15 caracteres',
            'ruc_number.min' => 'Deden ser 15 caracteres',
            'ruc_number.unique' => 'Ya se encuentra registrado',

            'address.max' => 'Solo se permiten 255 caracteres',
            'address.string' => 'El valor no es correcto',

            'phone.string' => 'El valor no es correcto',
            'phone.max' => 'Deben ser 8 caracteres',
            'phone.min' => 'Deben ser 8 caracteres',
            'phone.required' => 'Ya se encuentra registrado',
        ];
    }

}
