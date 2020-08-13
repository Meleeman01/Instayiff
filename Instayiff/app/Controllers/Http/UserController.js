'use strict';

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class UserController {

    loginPage ({auth, request, view}) {
        
        return view.render('loginregister');
    
        
    }

    async login ({ auth, request, view, session }) {
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

    async register ({auth,request, session, response}) {
        const data = request.only(['username', 'email', 'password', 'password_confirmation']);
        const validation = await validateAll(data, {
            username: 'required|unique:users',
            email: 'required|email|unique:users',
            password: 'required',
            password_confirmation: 'required_if:password|same:password',
        });
        /**
     * If validation fails, early returns with validation message.
     */
        if (validation.fails()) {
            session
                .withErrors(validation.messages())
                .flashExcept(['password']);

            return response.redirect('back');
        }

        // Deleting the confirmation field since we don't
        // want to save it
        delete data.password_confirmation;

        /**
     * Creating a new user into the database.
     *
     * ref: http://adonisjs.com/docs/4.1/lucid#_create
     */
        const user = await User.create(data);

        // Authenticate the user
        await auth.login(user);

        return response.redirect('/');

    }

}

module.exports = UserController;
