import React from 'react'
import Navbar from '../components/NavbarContainer/Navbar'
import ParentContainer from '../components/ParentContainer/ParentContainer'
import SideNav from '../components/SideNavContainer/SideNav'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <div className="home--split">
                <SideNav />
                <ParentContainer/>
            </div>
        </div>
    )
}

export default Home
