//header.js

import React from 'react';
import '../styles/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) { 
        super(props);
        //define a class state lol for hiding the search icon on click
        this.state = { 
            classList: '',
        }; 
        this.search = this.search.bind(this); //lol dumb
    } 

    search(){
        //needs to affect search icon
        console.log(this.props);

        if (this.state.classList == '') {
            console.log(false);
            this.setState(state => ({
                classList: 'hidden'
            }));
        }
        else {
            this.setState(state => ({
                classList: ''
            }));
        }
        
    }
    //we'll have to implement a router of sorts.
    render() {
        return (
            <div className={'flx(wrap) middle space-around header padme primary'}>
                <div className={'flx(wrap) left middle is-1'}>
                    <img src={'../paw-print1.svg'} />
                </div> 
                <div className={'flx(wrap) right middle is-4 search-bar'} >
                    <img className={'search-button '+this.state.classList} src={'../loupe.svg'}/>
                    <input className={'padme is-full'} type="text" placeholder="search for furry goodness?" onBlur={this.search} onFocus={this.search}/> 
                </div>

                <div className={' flx(wrap) space-around middle is-4'}>
                    <Link to="/feed"><img src={'../animal.svg'} /></Link>
                    <Link to="/messages"><img src={'../email.svg'} /></Link>
                    <Link to="/explore"><img src={'../explore.svg'} /></Link>
                    <Link to="/upload"><img src={'../send1.svg'} /></Link>
                    <Link to="/profile"><img className="profile-image" src="http://placekitten.com/100/100" /></Link>
                </div>


            </div>
        );
    }
}





export default Header; 