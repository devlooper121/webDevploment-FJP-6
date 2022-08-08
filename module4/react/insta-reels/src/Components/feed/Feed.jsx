import "./feed.css"


import { VideoCard } from "../videoCard/videocard"
import { NavBar } from "../NavBar/NavBar"



function Feed() {
    return (
        <>
            <NavBar></NavBar>
            <div className="mainContainer">
                <div className="reelContainer-top">
                    <div className="reelContainer">
                        <VideoCard></VideoCard>
                    </div>
                </div>
                <div className="detailContainer">

                </div>
            </div>
        </>
    )
}




export default Feed