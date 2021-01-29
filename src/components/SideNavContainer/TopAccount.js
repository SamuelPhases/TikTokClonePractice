import React from 'react'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import './TopAccount.css'


function TopAccount() {
    return (
        <div className='topAccount'>
            <div className='topAccount--dp'>
                <img src="" alt=""/>
            </div>
            <div className="topAccount--info">
                <div className="topAccount--verified">
                    <h3>LoremIpsum</h3>
                    <CheckCircleRoundedIcon className='verified--icon' />
                </div>
                <h4>Lorem Cali</h4>
            </div>
        </div>
    )
}

export default TopAccount
