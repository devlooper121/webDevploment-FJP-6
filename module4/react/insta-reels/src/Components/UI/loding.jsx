import React from "react"
import styles from "./loding.module.css"


const Loding = () => {
    return <React.Fragment>
        <div class={styles.backdrop}></div>
        <div class={styles["loder-box"]}>
            <div class={styles.loder}>
                <div class={styles.circle}></div>
            </div>
            <div class={styles.spike} id={styles["top"]}></div>
            <div class={styles.spike} id={styles["left"]}></div>
            <div class={styles.spike} id={styles["right"]}></div>
            <div class={styles.spike} id={styles["bottom"]}></div>
            <div class={styles.round} id={styles["top1"]}></div>
            <div class={styles.round} id={styles["left1"]}></div>
            <div class={styles.round} id={styles["bottom1"]}></div>
            <div class={styles.round} id={styles["left1"]}></div>

        </div>
        <div class={styles["loding"]}>
            <h1>Loding</h1>
            <div class={styles["spinner"]}></div>
        </div>
    </React.Fragment>
}

export default Loding