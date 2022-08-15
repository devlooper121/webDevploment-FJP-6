import { useRef } from "react"
import styles from "./comment.module.css"
import CommentCard from "./commentCard"

const Comment = (props) => {
    const postComment = () => {
        console.log(inputRef.current.innerText);
        inputRef.current.innerText = ""
    }
    const inputRef = useRef();
    return (
        <div className={styles.comments}>
            <div className={styles["back-btn"]}><span  onClick={props.onBack} className="material-symbols-rounded">
                keyboard_backspace
            </span>Comments</div>
            <div className={styles["comment-box"]}>
                <CommentCard data={{
                    name: "Siksha",
                    date: "2 min ago",
                    comment: "I love this video this is cool i lovvvvvvvvv",
                    likes: "2 likes"
                }} />
                <CommentCard data={{
                    name: "SKumar",
                    date: "20 min ago",
                    comment: "Awsome  video this is cool i lovvvvvvvvv",
                    likes: "2 likes"
                }} />
                <CommentCard data={{
                    name: "Siksha",
                    date: "2 min ago",
                    comment: "I love this video this is cool i lovvvvvvvvv",
                    likes: "2 likes"
                }} />
                <CommentCard data={{
                    name: "Siksha",
                    date: "2 min ago",
                    comment: "I love this video this is cool i lovvvvvvvvv",
                    likes: "2 likes"
                }} />
                <CommentCard data={{
                    name: "Siksha",
                    date: "2 min ago",
                    comment: "I love this video this is cool i lovvvvvvvvv",
                    likes: "2 likes"
                }} />
            </div>
            <div className={styles.newComment}>
                <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652__340.png" alt="" />
                <span ref={inputRef} className={styles.input} contentEditable ></span>
                <button onClick={postComment} type="button">post</button>
            </div>
        </div>
    )
}

export default Comment