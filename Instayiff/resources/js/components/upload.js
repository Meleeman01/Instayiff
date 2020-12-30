import React from 'react';
import '../styles/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Upload(props) {
    //pass in a variable as a string, this will be our state manager in a function lol
    function select(option) {
        //hardcoded state for app
        if (typeof option == 'string') {
            let state = {
                prompt:document.querySelector('#prompt'),
                output:document.querySelector('#result'),
                fileInput:document.querySelector('#theFile'),
                submit:document.querySelector('#uploadSubmit')
            };
            return state[option];
        }
        else {
            console.error(option+" is not a string, or option is not made availible yet.");
        }
        
    }
    
    function createPreview(e) {
        let prompt = select('prompt');

        if (e) {
            clean();
        }

        let files = e.target.files;
        //console.log(files);
        let output = select('output');

        for (let file in files) {
            //console.log(files[file]);
            if (files[file].type != undefined) {
                let fileReader = new FileReader();
                fileReader.addEventListener("load", function(e) {
                    let picFile = e.target;
                    let div = document.createElement("div");
                    div.setAttribute('id',files[file].name);

                    //check if the media is an image
                    if (files[file].type.startsWith('image')) {
                        div.innerHTML = "<p>"+files[file].name+"</p>"+
                        "<img class='thumbnail flx center middle' src='" + picFile.result + "'" + "title='" + files[file].name + "'/>";
                    }
                    //check if the media is a video
                    if (files[file].type.startsWith('video')) {
                        div.innerHTML = "<p>"+files[file].name+"</p><video src='" + 
                        picFile.result + "'" + "title='" + files[file].name + "' controls />";
                    }
                    output.insertBefore(div, null);
                });
                fileReader.readAsDataURL(files[file]);

                //prompt.innerHTML = 'add a caption?';
                prompt.addEventListener('click',function(event) {
                    console.log('change me into an input');

                    prompt.outerHTML = `<input id="prompt" style="text-align center" class="is-full padme" type="text" placeholder="add a caption?"/>`;
                });
                //caption.classList.remove('hidden');
            }
        }
    }
    
    //cleans our image preview
    function clean() {
        let output = select('output');
        let prompt = select('prompt');
        prompt.innerHTML = `add a caption?`;
        if (output.children) {
            output.outerHTML = `<output id='result' className="flx(wrap) space-around middle" />`;
        }
        
        return output;
    }

    function uploadFile(e) {
        let file = select('fileInput'); //state or props maybe?
        enableSubmit();
        file.removeAttribute('multiple');
        file.setAttribute('accept', 'image/*,video/*');
        file.click();
        
    }

    function image() {
        let file = select('fileInput'); //this code is anything but dry omfg
        enableSubmit();
        file.removeAttribute('multiple');
        file.setAttribute('accept', 'image/*');
        file.click();
    }

    function album(e) {
        let file = select('fileInput');
        enableSubmit();
        file.setAttribute('multiple',true);
        file.setAttribute('accept', 'image/*');
        file.click();
    }

    function video() {
        
        let file = select('fileInput');
        enableSubmit();
        file.removeAttribute('multiple'); 
        file.setAttribute('accept', 'video/*');
        file.click();
    }

    function enableSubmit() {
        let submitBtn = select('submit');
        submitBtn.removeAttribute('disabled');
    }

    function submit(e) {
        e.preventDefault();
        console.log('lololsubmit');
    }

    return (

        <div onClick={props.onDelete} className={'modal flx(wrap) middle center'} >
            
            <div className={' modal-body flx(wrap) middle center is-6'}>
                <div onClick={props.onDelete} className={'modal-close'}><FontAwesomeIcon className={'modal-close'} icon='times-circle' size="2x"/></div>
            	<div className={'is-full flx(wrap) center middle'}>
            		<h2 className="font5">Post a Yiff</h2>
            	</div>
                <div className={'is-full flx(wrap) middle space-evenly marginme'}>
                    <button onClick={(event)=>uploadFile(event)} className={'btn is-secondary  is-round flx'} ><FontAwesomeIcon icon='upload' /></button>
                    <button onClick={(event)=>image(event)} className={'btn is-secondary is-round flx'}><FontAwesomeIcon icon='camera-retro' /></button>
                    <button onClick={(event)=>album(event)} className={'btn is-secondary  is-round flx'}><FontAwesomeIcon icon='address-book' /></button>
                    <button onClick={(event)=>video(event)} className={'btn is-secondary  is-round flx'}><FontAwesomeIcon icon='video' /></button>
                </div>
            	<div>
                    <form className={'flx(column) middle center'}>
                        
                        <output id='result' className="flx(wrap) space-around middle "/>
                        <input onChange={(event)=>createPreview(event)}  type="file" id="theFile" />
                        <p id="prompt">Click one of the buttons above to upload a file</p>
                        <div id="" className={'is-full '}>
                            <label>Tippable?</label>
                            <input type='checkbox' />
                            <label>Tags</label>
                            <input type='text' placeholder="#selfie #otter #wolf"/>
                        </div>
                        <button id="uploadSubmit" onClick={(event)=>submit(event)} className={'btn is-success is-round flx middle center is-6 marginme'} type="submit" disabled>Yiff!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Upload;