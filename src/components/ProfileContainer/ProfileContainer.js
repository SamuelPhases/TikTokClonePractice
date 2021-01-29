import React from 'react'
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import './ProfileContainer.css'


function ProfileContainer() {
    return (
        <div className='profileContainer'>
            <div className="profileContainer--content">
                <div className="profileContainer--header">
                    <div className="profileContainer--dp">
                        <img src="" alt=""/>
                    </div>
                    <div className="profileContainer--info">
                        <h3>LoremIpsum</h3>
                        <h4>Lorem Cali</h4>
                        <button className="conditional--btn">Follow</button>
                    </div>
                    <MoreHorizIcon className='report--link' />
                </div>
                <div className="profileContainer--details">
                    <div>
                        <h5>1</h5>
                        <p>Following</p>
                    </div>
                    <div>
                        <h5>1.7b</h5>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h5>1b</h5>
                        <p>Likes</p>
                    </div>
                </div>
                <p className="profileContainer--bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum.</p>
                <a href="" target='_blank'    className='profileContainer--link' ><LinkRoundedIcon className='rotate--link'   />www.instagram.com/LoremIpsum</a>
                <div className="profileContainer--activities">
                    <div className="videos--header">
                        <h3 className='active' >Videos</h3>
                        <h3><LockRoundedIcon/> Likes</h3>
                    </div>
                    <div className="videos--posted">
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                        <div>
                            {/* <video src=""></video> */}
                            <div className="viewers--count">
                            <PlayArrowOutlinedIcon/>   <p>10m</p>
                            </div>
                        </div>
                </div>
                {/* <div className="likes">
                    <LockRoundedIcon/>
                    <h3>Likes</h3>
                    <div className="videos--liked">
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                        <div>
                            <video src=""></video>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
        </div>
    )
}

export default ProfileContainer
