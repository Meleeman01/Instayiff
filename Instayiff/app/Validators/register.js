'use strict';

class register {
    get rules () {
        return {
            // validation rules
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required',
            password_confirmation: 'required_if:password|same:password',
        };
    }

    get messages () {
        return {
            'username.required': 'You must provide a username.',
            'username.unique': 'That username is already taken sowwy :(',
            'email.required': 'You must provide an email pwease :3',
            'email.email': 'I don\'t think that was an email you just typed in.',
            'email.unique':'That email already exists in our database, are you sure you don\'t have an account with us already?',
            'password.required': 'You must provide a password',
            'password_confirmation.required_if':'you must enter your password confirmation in order to register.',
            'password_confirmation.same':'your passwords don\'t match :('
        };
    }
}

module.exports = register;
