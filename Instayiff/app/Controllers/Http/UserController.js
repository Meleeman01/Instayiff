'use strict';

const User = use('App/Models/User');
const UserDatum = use('App/Models/UserDatum');
const Config = use('Config');

class UserController {

    loginPage ({auth, request, view}) {
        
        return view.render('loginregister');
    }

    async login ({ auth, request, response, session, view }) {

        const data = request.only(['username','password']);

        let username = data['username']; //for convieniance

        try {

            //attempt log them in with an email first, since that is what a user is most likely to remember.
            await auth.attempt(username, data.password);

            return response.redirect('feed');
        } catch (exeption) {

            //if there was a potential error with logging a user in via email, they probably entered a username.
            for (let error in exeption) {
                if (error == 'uidField') {
                    //try again with a username instead of email.
                    try{
                        //this will set the uid in memory for the session. 
                        Config.set('auth.session.uid', 'username');
                        await auth.attempt(username, data.password);
                        return response.redirect('feed');
                    } catch (exeption) {
                        session.flash({error: 'User ' + data.username + ' does not exist in our Database.'}); break; 
                    }
                }
                else if (error == 'passwordField') {
                    session.flash({error: 'User ' + data.username + '\'s'+' password is incorrect.'}); break;}
                else {
                    session.flash({ error: ''+exeption+''});
                }
            }
            /**
               * Since the authentication failed we redirect
               * our user back to the form.
               */
            return response.redirect('/');
        }
    }

    async register ({auth,request, session, response}) {
        const data = request.only(['username', 'email', 'password', 'password_confirmation']);
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
        //log them into the feed :D
        return response.redirect('/feed'); 
    }
    
}

module.exports = UserController;
