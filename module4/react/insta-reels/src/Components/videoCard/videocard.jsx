import { useRef } from "react"
import { useState } from "react"
import Comment from "./comment"
import YNBtn from "./PlayPauseBtn"

import "./videoCard.css"

const link = "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4"

export const VideoCard = () => {
    const videoRef = useRef();
    const [playing, setPlay] = useState(false);
    const [videoShrink, setVideoShrink] = useState(false);
    const playPause = () => {
        if (playing) {
            videoRef.current.play()
            setPlay(false)
        } else {
            videoRef.current.pause()
            setPlay(true)
        }
    }
    return (
        <>
            <div className="video-card">
                <div onClick={() => { console.log("actiom"); return 0 }} className="action">
                    <div className="video-info ">
                        <div className="post-info">
                            <img className="post-profile" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png" alt="" />
                            <p className="post-name">dheeraj__007</p>
                        </div>
                        <p className="post-info"><span className="material-symbols-rounded">
                            music_note
                        </span>original-chinise</p>
                    </div>
                    <ul className="likeShare">
                        <li className="like-list"><span className="material-symbols-rounded fill">
                            favorite
                        </span>23</li>
                        <li onClick={() => setVideoShrink(true)} className="like-list"><span className="material-symbols-rounded fill">
                            mode_comment
                        </span>2</li>
                        {/* <li className="like-list"><span className="material-symbols-rounded">
                            send
                        </span></li>
                        <li className="like-list"><span className="material-symbols-rounded">
                            more_vert
                        </span></li> */}
                    </ul>
                    <YNBtn status={playing} onClick={playPause}/>
                    <video 
                        loop
                        autoPlay
                        className={videoShrink ? "shrink" : ""} 
                        onClick={(e) => { console.log("video");setVideoShrink(false); return playPause() }} 
                        src={link}
                        ref={videoRef}
                        >
                    </video>
                    {videoShrink && <Comment onBack={()=>setVideoShrink(false)}></Comment>}
                </div>
            </div>
        </>
    )
}

