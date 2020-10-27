'use strict';

class passwordReset {
    get rules () {
        return {
        // validation rules
            email: 'required|email|exists:users,email', // exists takes 2 args delimited by a comma, which is table and column.
        };

    }
    get messages () {
        return {
            'email.required': 'You must provide an email pwease :3',
            'email.email': 'I don\'t think that was an email you just typed in.',
            'email.exists':'That email doesn\'t exist in our database'
        };
    }
}

module.exports = passwordReset;
