//header.js

import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className={'flx(wrap) center space-evenly header'}>
                <div className={'is-4'}>
                    <svg><use xlinkHref="another.svg#rectangle" className="blue"/></svg>
                </div> 
                <div className={'is-4'}>searchbar</div>
                <div className={'is-4'}>uibs</div>
            </div>
        );
    }
}
export default Header;