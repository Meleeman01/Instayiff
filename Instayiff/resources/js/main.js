

//main 
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Header from './components/header';
import Feed from './pages/feed';
import Explore from './pages/explore';
import Messages from './pages/messages';
import Upload from './pages/upload';
import Profile from './pages/profile';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/feed">
                            <Feed />
                        </Route>
                        <Route path="/messages">
                            <Messages />
                        </Route>
                        <Route path="/explore">
                            <Explore />
                        </Route>
                        <Route path="/upload">
                            <Upload />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                    </Switch> 
                </Router>
            </div>
        );
    }
}

// You can think of these components as "pages"
// in your app.





export default App;