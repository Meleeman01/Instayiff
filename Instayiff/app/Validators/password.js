'use strict';

class password {
    get rules () {
        return {
            // validation rules
            password: 'required|string',
            password_confirmation: 'required:password|same:password',
        };
    }

    get messages () {
        return {
            'password.required': 'You must provide a new password',
            'password_confirmation.required':'you must enter your password confirmation in order change your password',
            'password_confirmation.same':'your passwords don\'t match :('
        };
    }
}

module.exports = password;
