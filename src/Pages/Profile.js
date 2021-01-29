import React from 'react'
import Navbar from '../components/NavbarContainer/Navbar'
import ProfileContainer from '../components/ProfileContainer/ProfileContainer'
import SideNav from '../components/SideNavContainer/SideNav'
import './Profile.css'

function Profile() {
    return (
        <div className='profile--container'>
            <Navbar />
            <div className="profile--split">
                <SideNav />
                <ProfileContainer/>
            </div>
        </div>
    )
}

export default Profile
