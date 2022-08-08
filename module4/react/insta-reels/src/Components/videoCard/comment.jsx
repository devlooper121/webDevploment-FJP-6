import styles from "./comment.module.css"
import CommentCard from "./commentCard"

const Comment = ()=>{
    const postComment =(e)=>{
        e.preventDefault()
        console.log(e.target.value);
    }
    return(
        <div className={styles.comments}>
            <h3 className={styles["comment-header"]}>Comment 2</h3>
            <div className={styles["comment-box"]}>
            <CommentCard data={{
                name:"Siksha",
                date:"2 min ago",
                comment:"I love this video this is cool i lovvvvvvvvv",
                likes: "2 likes"
            }}/>
            <CommentCard data={{
                name:"SKumar",
                date:"20 min ago",
                comment:"Awsome  video this is cool i lovvvvvvvvv",
                likes: "2 likes"
            }}/>
            <CommentCard data={{
                name:"Siksha",
                date:"2 min ago",
                comment:"I love this video this is cool i lovvvvvvvvv",
                likes: "2 likes"
            }}/>
            <CommentCard data={{
                name:"Siksha",
                date:"2 min ago",
                comment:"I love this video this is cool i lovvvvvvvvv",
                likes: "2 likes"
            }}/>
            <CommentCard data={{
                name:"Siksha",
                date:"2 min ago",
                comment:"I love this video this is cool i lovvvvvvvvv",
                likes: "2 likes"
            }}/>
            </div>
            <div className={styles.newComment}>
                <input type="text" name="" id="" placeholder="Add comment .." />
                <button onClick={postComment} type="button">{">"}</button>
            </div>
        </div>
    )
}

export default Comment