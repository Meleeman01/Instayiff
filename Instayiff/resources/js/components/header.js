//header.js

import React from 'react';
import '../styles/header.css';
import Upload from './upload';
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
        const { upload } = this.props;
        this.state = { 
            classListSearch: '',
            Upload: false,
        };

        this.search = this.search.bind(this); //lol dumb
        this.upload = this.upload.bind(this);
    } 

    search(){
        //needs to affect search icon
        console.log(this.props);

        if (this.state.classListSearch == '') {
            console.log(false);
            this.setState(state => ({
                classListSearch: 'hidden'
            }));
        }
        else {
            this.setState(state => ({
                classListSearch: ''
            }));
        }
        
    }
    upload(e) {

        console.log(e);

        //add the active class to show teh upload modal
        if (!this.state.Upload) {
            this.setState(state => ({
                Upload: true
            }));

        }
        else {
            e.stopPropagation();
            this.setState(state => ({
                Upload: false
            }));
        }
    }
    //we'll have to implement a router of sorts.
    render() {
        let headerState = this.state.Upload;
        console.log(headerState);
        let modal; //maybe make it a function and pass some props?
        if (headerState) {
            modal = <Upload onDelete={this.upload} />;
        }
        if (!headerState) {
            modal = undefined; 
        }
        
        return (
            <div>
                {modal}

                <div className={'flx(wrap) middle space-around header padme primary'}>
                
                    <div className={'flx(wrap) left middle is-1'}>
                        <Link to="/notifications"><img src={'../paw-print1.svg'} /></Link>
                    </div> 
                    <div className={'flx(wrap) right middle is-4 search-bar'} >
                        <img className={'search-button '+this.state.classListSearch} src={'../loupe.svg'}/>
                        <input className={'padme is-full'} type="text" placeholder="search for furry goodness?" onBlur={this.search} onFocus={this.search}/> 
                    </div>

                    <div className={' flx(wrap) space-around middle is-4'}>
                        <Link to="/feed"><img src={'../animal.svg'} /></Link>
                        <Link to="/messages"><img src={'../email.svg'} /></Link>
                        <Link to="/explore"><img src={'../explore.svg'} /></Link>
                        <img src={'../send1.svg'} onClick={this.upload} />
                        <Link to="/profile"><img className="profile-image" src="http://placekitten.com/100/100" /></Link>
                    </div>


                </div>
            </div>
            
        );
    }
}





export default Header; 