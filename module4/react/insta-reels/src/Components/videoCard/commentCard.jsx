import styles from "./commentCard.module.css"


const CommentCard = (props) => {
    const { name, comment, date, likes } = props.data;

    return (
        <div className={styles["comment-card"]}>
            <img  src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="commenter" />
            <div className={styles.details}>
                <div className={styles.content}>
                    <p className={styles["user-name"]} ><b>{name}</b> <span>{comment}</span></p>
                    

                </div>
                <div className={styles["details-other"]}>
                    <span>{date}</span>
                    <span>{likes}</span>
                </div>
            </div>
            <div className={styles.like}>
            <span className={`material-symbols-rounded ${styles.liked}`}>
                favorite
            </span>
            </div>
        </div>
    )
}

export default CommentCard