<?php

namespace App\Controllers;

class AuthController
{
    public function login()
    {
        var_dump(input());
        return $input;
    }

    public function register()
    {
        $inputs = input()->all(['email', 'password']);

        if (!$this->isValid($inputs))
        {
            return 'form is not valid';
        }

        if ($this->isEmailExist($inputs['email']))
        {
            return 'email already used';
        }

        \Builder::table('users')->insert([
            'email' => $inputs['email'],
            'password' => password_hash($inputs['password'], PASSWORD_DEFAULT),
            'role' => 'student'
        ]);

        return 'success';
    }

    private function isEmailExist($email)
    {
        return !is_null(\Builder::table('users')->where('email', '=', $email)->first());
    }

    /**
     * Check if array has falsy values
     *
     * @param array $inputs
     * @return boolean
     */
    private function isValid($inputs)
    {
        return !in_array(false, $this->isEmpty($inputs));
    }

    /**
     * Transform all values in array to (boolean) false depending
     * on whether its empty or not. The element will be false if
     * it is empty.
     *
     * @param array $arrays
     * @return array
     */
    private function isEmpty($arrays)
    {
        return array_map(
            function ($value)
            {
                return !empty($value);
            },
            $arrays
        );
    }
}