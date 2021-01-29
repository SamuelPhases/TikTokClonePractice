import React from 'react'
import './ParentContainer.css'
import Post from './Post'
import {Scrollbars} from  'react-custom-scrollbars'

function ParentContainer() {
    return (
        <div className='parentContainer'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default ParentContainer
