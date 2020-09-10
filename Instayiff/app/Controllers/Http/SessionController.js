'use strict';

class SessionController {
    
    async logout ({ auth, response }) {
        /**
         * Logout the user.
         *
         * ref: http://adonisjs.com/docs/4.1/authentication#_logout
         */
        await auth.logout();

        return response.redirect('/');
    }
}


module.exports = SessionController;
