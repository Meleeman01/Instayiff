import React from 'react';
import '../styles/modal.css';

function Upload(props) {

    return (
        <div  className={'modal flx(wrap,column) middle center'} >
            <div className={' modal-body flx(wrap,column) middle center is-6'}>
            	<div className={'is-full flx(wrap) center middle'}>
            		<h2 onClick={props.onDelete}>Post a Yiff!</h2>
            	</div>
            	<div>body here </div>
            </div>
        </div>
    );
}

export default Upload;