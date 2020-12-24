'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');


Route.on('/about').render('Misc.about'); //about page
Route.on('/privacy').render('Misc.privacy'); //privacy page

Route.group(()=>{ //these are all pages that have no static pages yet
    Route.on('profile').render('feed');
    Route.on('upload').render('feed');
    Route.on('messages').render('feed');
    Route.on('explore').render('feed');
    Route.on('notifications').render('feed');
    //the following need this so when a user visits logon when already logged on it redirects them to feed.
    Route.get('/login', 'UserController.loginPage');
    Route.get('/', 'UserController.loginPage');
    //recovery
    Route.get('forgot','SessionController.forgot');
}).middleware('redirect');//redirect if a user is logged in


Route
    .get('users/:id', 'UserController.show')
    .middleware('auth');

//for logging in 
Route.post('signin', 'UserController.login').validator('login');
Route.get('feed','FeedController.show'); 
    
Route
    .post('register', 'UserController.register')
    .middleware('guest')
    .validator('register');

Route.get('logout', 'SessionController.logout');

//display forgot modal to send an account renewal link
 //might need to refactor the session and USER controller..
Route
    .post('recover', 'SessionController.emailReset')
    .validator('passwordReset');

//change password after a user is verified their token
Route
    .get('password_reset', 'SessionController.resetPassword');

Route
    .post('password_store','SessionController.resetPasswordStore')
    .validator('password');

