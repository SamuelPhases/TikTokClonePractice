import React from 'react'
import './Navbar.css'
import CloudUploadRoundedIcon from '@material-ui/icons/CloudUploadRounded';

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar--content">
                <div className="navbar--logo">
                    <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg" alt=""/>
                    <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg" alt=""/>
                </div>
                <div className="navbar--items">
                    <CloudUploadRoundedIcon  className='upload--btn' />
                    <div className='user--dp'>
                        <h1>A</h1>
                        {/* <img src="" alt=""/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
