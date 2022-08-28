import "./feed.css"
import {useState, useContext } from "react";

import { VideoCard } from "../videoCard/videocard"
import { NavBar } from "../NavBar/NavBar"



import Button from "../UI/Button"
import { AuthContext } from "../../Context/AuthContext";

function Feed() {
    const {reelsData} = useContext(AuthContext);
    const [videoIdx, setVideoIdx] = useState(0);
    let selectedVideo = reelsData ? reelsData[videoIdx]:"";
    // console.log(selectedVideo);


    const nextVideo = () => {
        if(reelsData)
            setVideoIdx(idx => {
                if(idx===reelsData.length-1){
                    return 0;
                }else{
                    return idx+1;
                }
            })
    }
    const prevVideo = () => {
        if(reelsData)
            setVideoIdx(idx => {
                if(idx===0){
                    return reelsData.length-1;
                }else{
                    return idx-1;
                }
            })
    }
    return (
        <>
            <NavBar></NavBar>

            <div className="mainContainer">
                <div className="reelContainer-top">
                    {selectedVideo && <VideoCard
                        key={selectedVideo.key}
                        url={selectedVideo.value.url}
                        title={"unknown"}
                        likes={selectedVideo.value.likes}
                        comments={selectedVideo.value.comments}
                        uid={selectedVideo.value.uid}
                        id={selectedVideo.key}
                    ></VideoCard>}

                </div>

                <div className="detailContainer">
                    <Button className="feedBtn" onClick={nextVideo}>Prev</Button>
                    <Button className="feedBtn" onClick={prevVideo}>Next</Button>
                </div>
            </div>
        </>
    )
}




export default Feed