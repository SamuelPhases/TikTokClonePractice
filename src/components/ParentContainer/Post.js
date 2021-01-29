import React from 'react'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import ScreenShareRoundedIcon from '@material-ui/icons/ScreenShareRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import PauseRoundedIcon from '@material-ui/icons/PauseRounded';
import VolumeMuteRoundedIcon from '@material-ui/icons/VolumeMuteRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';
import './Post.css'

function Post() {
    return (
        <div className='post'>
            <div className="post--dp">
                <img src="" alt=""/>
            </div>
            <div className="post--content">
                <div className="post--info">
                    <h3>LoremIpsum</h3>
                    <h4>Lorem Cali</h4>
                </div>
                <div className="post--hash">
                    <MusicNoteRoundedIcon/>
                    <p>original sound - Chipmunk</p>
                </div>
                <div className="post--item">
                    <video src='https://www.tiktok.com/@tiwasavage/video/6817144987634142469?sender_device=pc&sender_web_id=6891966950605506050&is_from_webapp=1' loop ></video>
                    <div className="post--header">
                        <div className="post--header--a">
                            {/* <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg" alt="" className='img--id--small'/> */}
                            <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg" alt=""    className='img--id'/>
                        </div>
                        <h4 className="post--header--b">LoremIpsum</h4>
                    </div>
                    <div className="post--report">
                        <FlagRoundedIcon />
                        <p>Report</p>
                    </div>
                    <div className="post--footer">
                        <PauseRoundedIcon className='pause' />
                        <VolumeMuteRoundedIcon className='volume' />
                    </div>
                    <div className="post--header--footer">
                        {/* <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg" alt=""/> */}
                        <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg" alt="" />
                        <h4>LoremIpsum</h4>
                    </div>
                </div>
                <div className="post--fav">
                    <div>
                        <div><FavoriteRoundedIcon   className='fav--icon'/></div>
                        <p>100.5m</p>
                    </div>
                    <div>
                        <div><CommentRoundedIcon    className='fav--icon'/></div>
                        <p>100m</p>
                    </div>
                    <div>
                        <div><ScreenShareRoundedIcon    className='fav--icon'/></div>
                        <p>100.5m</p>
                    </div>
                </div>
            </div>
            <button className="post--follow">follow</button>
        </div>
    )
}

export default Post
