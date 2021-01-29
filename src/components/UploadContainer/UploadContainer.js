import React from 'react'
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';

import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './UploadContainer.css'

function UploadContainer() {
    return (
        <div className='uploadContainer'>
            <div className="uploadContainer--header">
                <h1>Upload video</h1>
                <h3>This video will be published to @LoremIpsum</h3>
            </div>
            <form className="upload--container--split">
                <div className="uploadContainer--left">
                    <label className="uploadContainer--post">
                        <div>
                            <input type="file" name="" id="" />
                            <CloudUploadIcon className='uploadContainer--icon' />
                            <h3>Select video to upload</h3>
                            <p>Or drag and drop a file</p>
                            <ul>
                                <li>MP4 or WebM</li>
                                <li>720x1280 resolution or higher</li>
                                <li>Up to 60 seconds</li>
                            </ul>
                        </div>
                    </label>
                </div>
                <div className="uploadContainer--right">
                    <label htmlFor="">
                        <h2>Caption</h2>
                        <p>0/150</p>
                    </label>
                    <div className="uploadContainer--input">
                        <input type="text" name="" id=""/>
                        <div className="icon--addon">
                            <AlternateEmailRoundedIcon
                            className='email--icon'/>
                            <p>#</p>
                        </div>
                    </div>
                    <label htmlFor=""  className='uploadContainer--coverheader'>
                        <h2>Cover</h2>
                    </label>
                    <div className="uploadContainer--cover">
                            <div className="uploadContainer--content"></div>
                    </div>
                    <div className="uploadContainer--selection">
                        <div className="uploadContainer--radio uploadContainer--check">
                            <label htmlFor="">Who can view this video</label>
                            <div>
                                <input type="radio" name="view" id="" />   
                                <label htmlFor="">
                                    Public
                                </label>
                                <input type="radio" name="view" id="" />
                                <label htmlFor="">
                                    Friends
                                </label>
                                <input type="radio" name="view" id="" />
                                <label htmlFor="">
                                    Private
                                </label>
                            </div>
                        </div>
                        <div className="uploadContainer--checkbox  uploadContainer--check">
                            <label htmlFor="">Allow users to:</label>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">
                                    Comment
                                </label>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">
                                    Duet / React
                                </label>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">
                                    Stitch
                                </label>
                            </div>
                        </div>

                    </div>
                    
                    <div className="btns--cancel--submit">
                        <div className="btns--cancel--submit--content">
                            <button className='cancel'>
                                Discard
                            </button>
                            <button className='submit'>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <footer>
                
            </footer>
        </div>
    )
}

export default UploadContainer
