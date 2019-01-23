import React from "react"
import styles from "../styles/index.module.scss"

export default () => 
<div className={styles.container}>
    <a className={[styles.text, styles.csc].join(' ')} href="/cs">
        <div className={styles.r}>> computer science</div>
        <div className={styles.g}>> computer science</div>
        <div className={styles.b}>> computer science</div>
    </a>
    <a className={[styles.text, styles.thd].join(' ')} href="/he">
        <div className={styles.r}>> theatre arts</div>
        <div className={styles.g}>> theatre arts</div>
        <div className={styles.b}>> theatre arts</div>
    </a>
</div>
