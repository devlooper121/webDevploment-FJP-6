import styles from "./backdrop.module.css"


export const Backdrop1 = (props) => {
    return <div className={styles.bc1} onClick={props.onClick}>
        {props.children}
    </div>
} 