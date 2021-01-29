import React from 'react'
import Navbar from '../components/NavbarContainer/Navbar'
import UploadContainer from '../components/UploadContainer/UploadContainer'
import './Upload.css'

function Upload() {
    return (
        <div className='upload'>
            <Navbar />
            <UploadContainer/>
        </div>
    )
}

export default Upload
