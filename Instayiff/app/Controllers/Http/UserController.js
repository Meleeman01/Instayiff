'use strict';

class UserController {

    loginPage ({auth, request, view}) {

        if (auth.check()) {
            return view.render('loginregister');
        }
        else {
            console.log('lol');
            return view.render('feed');
        }
    }

    async login ({ auth, request }) {
        const { email, password } = request.all();
        await auth.attempt(email, password);

        return 'Logged in successfully';
    }
    //example code from adonis
    show ({auth, params} ){
        if (auth.user.id !== Number(params.id)) {
            return "You cannot see someone else's profile";
        }
        return auth.user;
    }

    register () {

    }

}

module.exports = UserController;
