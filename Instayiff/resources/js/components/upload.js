import React from 'react';
import '../styles/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Upload(props) {
    //pass in a variable as a string, this will be our state manager in a function lol
    const modalClose = props.onDelete;
  
    function select(option) {
        //hardcoded state for app
        if (typeof option == 'string') {
            let state = {
                close:document.querySelector('.modal-close'),
                prompt:document.querySelector('#prompt'),
                output:document.querySelector('#result'),
                fileInput:document.querySelector('#theFile'),
                submit:document.querySelector('#uploadSubmit'),
                tipsTags:document.querySelector('#tips-and-tags'),
                uploadStatus:document.querySelector('#uploadStatus')
            };
            return state[option];
        }
        else {
            console.error(option+" is not a string, or option is not made availible yet.");
        }
        
    }
    
    function createPreview(e) {
        let prompt = select('prompt');
        let tipsTags = select('tipsTags');
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

                prompt.addEventListener('click',function(event) {
                    console.log('change me into an input');

                    prompt.outerHTML = `<input id="prompt" style="text-align center" class="is-full padme" type="text" placeholder="add a caption?" name="caption"/>`;
                });
                tipsTags.classList.remove('hidden');
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
        const submitBtn = select('submit');
        const csrf = select('tipsTags');
        //make sure we pass the csrf token
        csrf.innerHTML += `<input type="hidden" name="_csrf" value="${document.querySelector('#random').value}"/>`;
        submitBtn.removeAttribute('disabled');
    }

    async function statusMessage(message){
        //select our upload status button
        const status = select('uploadStatus');
        const submitBtn = select('submit');

        if (message[0] == undefined) {
            //this means were successful 
            status.classList.remove('hidden');
            status.classList.add('is-info');
            submitBtn.classList.add('hidden');
            status.innerHTML='<span>'+message.message+'</span>';
            //after the message close the modal and goto feed
            return true;
        }
        if (typeof message[0] == 'object') {
            //this means we have an error
            status.classList.remove('hidden');
            status.classList.add('is-error');
            status.innerHTML='<span>'+message[0].message+'</span>';
            return false;
        }
        
    }
    function hideStatusMessage(props){
        const status = select('uploadStatus');
        status.classList.add('hidden');
    }

    function submit(e) {
        e.preventDefault();
        e.persist();
        let data = new FormData(e.target);
        let files = [...data];

        console.log(files);
        
        fetch('/post', {
            credentials: 'include',
            method: 'POST',
            body: data,
        }).then( async (response) => {
            const message = await response.json();
            console.log(message);

            if (!await statusMessage(message)) {
                return;
            }
            else {
                await e.target.classList.add('modal-success');
                await setTimeout(()=>{props.onDelete(e);},1000);
            }
            
        }).catch( (error) => {console.log('error============:', error);});
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
                    <form encType="multipart/mixed" className={'flx(column) middle center'} onSubmit={(event)=>submit(event)}>
                        
                        <output id='result' className="flx(wrap) space-around middle "/>
                        <input onChange={(event)=>createPreview(event)}  type="file" id="theFile" name="files[]" />
                        <p id="prompt">Click one of the buttons above to upload a file</p>
                        <div id="tips-and-tags" className={'is-full flx(column,wrap) col-left col-middle hidden'}>
                            <div className={'flx(wrap) left middle is-full'}>
                                <label className={'padme'}>Tippable?:</label>
                                <input name='tipable' type='checkbox' />
                            </div>
                            <div className={'flx(wrap) left middle is-full'}>
                                <label className="padme">Tags:</label>
                                <input className="padme" type='text' name='tags' placeholder="(i.e.) #selfie #otter #wolf"/>
                            </div>

                        </div>
                        <button id="uploadSubmit" className={'btn is-success is-round flx middle center is-6 marginme'} disabled>Yiff!</button>
                    </form>
                    <div id="uploadStatus" onClick={(event)=>hideStatusMessage(event)} className={'hidden padme'}></div>
                </div>
            </div>
        </div>
    );
}

export default Upload;