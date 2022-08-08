import { useState } from "react"
import  Comment from "./comment"

import "./videoCard.css"

export const VideoCard = () => {
    const [playing, setPlay] = useState(false);
    const [videoShrink, setVideoShrink] = useState(false);
    const playPause = (e) => {
        if (playing) {
            e.currentTarget.play()
            setPlay(false)
        } else {
            e.currentTarget.pause()
            setPlay(true)
        }
    }
    return (
        <>
            <div className="video-card">

                
                    
                <div onClick={()=>{console.log("actiom"); return 0}} className="action">
                    <div className="video-info ">
                        <div className="post-info">
                            <img className="post-profile" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png" alt="" />
                            <p className="post-name">dheeraj__007</p>
                        </div>
                        <p className="post-info"><span class="material-symbols-rounded">
                            music_note
                        </span>original-chinise</p>
                    </div>
                    <ul className="likeShare">
                        <li className="like-list"><span class="material-symbols-rounded fill">
                            favorite
                        </span>23</li>
                        <li onClick={()=>setVideoShrink(true)} className="like-list"><span class="material-symbols-rounded fill">
                            mode_comment
                        </span>2</li>
                        {/* <li className="like-list"><span class="material-symbols-rounded">
                            send
                        </span></li>
                        <li className="like-list"><span class="material-symbols-rounded">
                            more_vert
                        </span></li> */}
                    </ul>
                <video className={videoShrink ? "shrink": ""} onClick={(e) => {console.log("video"); return playPause(e)}} src="http://techslides.com/demos/sample-videos/small.webm">
                </video>
                {videoShrink && <Comment onClick={(e)=>{console.log("click");e.stopPropagation(); return setVideoShrink(false)}} ></Comment>}
                </div>

            </div>
        </>
    )
}

