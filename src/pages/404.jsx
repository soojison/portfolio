import React from "react"
import styles from "../styles/index.module.scss"

export default () => 
<div className={styles.container}>
    <div className={[styles.text, styles.csc].join(' ')}>
        <div className={styles.r}>404 Not Found :(</div>
        <div className={styles.g}>404 Not Found :(</div>
        <div className={styles.b}>404 Not Found :(</div>
    </div>
    <a className={[styles.text, styles.thd].join(' ')} href="/">
        <div className={styles.r}>back home</div>
        <div className={styles.g}>back home</div>
        <div className={styles.b}>back home</div>
    </a>
</div>
