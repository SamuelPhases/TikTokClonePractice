import React from 'react'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SuggestedUser from './SuggestedUser'
import TopAccount from './TopAccount';
import './SideNav.css'


function SideNav() {
    return (
        <div className='sidenav'>
            <div className="sidenav--content">
                <h2 className="sidenav--titles"><HomeRoundedIcon  className='sidenav--navIcon' /> for you</h2>
                <h2 className="sidenav--titles"><PeopleAltRoundedIcon className='sidenav--navIcon' />  following</h2>
                <div className="line"></div>
                <div className="sidenav--suggested">
                    <h4 className="title">Suggested accounts</h4>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser />
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser />
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser />
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser />
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser />
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <SuggestedUser/>
                    <div className="toggle">
                        <h3>See all </h3>
                        <ExpandMoreRoundedIcon className='more--toggle' />
                    </div>
                </div>
                <div className="line"></div>
                <div className="sidenav--accounts sidenav--suggested">
                    <h4 className='title'>Your top accounts</h4>
                    <TopAccount/>
                    <TopAccount/>
                    <TopAccount/>
                    <TopAccount/>
                    <TopAccount />
                    <div className="toggle">
                        <h3>See all</h3>
                        <ExpandMoreRoundedIcon/>
                    </div>
                </div>
                <div className="line"></div>
                <div className="links">
                    <p>about</p>
                    <p>newsrooms</p>
                    <p>contact</p>
                    <p>careers</p>
                    <p>ByteDance</p>
                </div>
                <p className="copy">&copy; 2020 TikTok  Clone</p>
                <select name="" id="">
                    <option value="English">English</option>
                </select>
            </div>
        </div>
    )
}

export default SideNav
