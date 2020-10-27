'use strict';

class loginRegister {

    get rules () {
        return {
            // validation rules
            username:'required',
            password: 'required'
        };
    }

    get messages () {
        return {
            'username.required': 'You must provide an email address or username.',
            'password.required': 'You must provide a password'
        };
    }


}

module.exports = loginRegister;
