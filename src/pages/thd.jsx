import React from "react";
import styles from "../styles/theatre.module.scss"
import { Link } from "gatsby";

const Theatre = props => (
    <div className={styles.container}>
        <nav className={styles.header}>
            <Link to="/cs">CS</Link>
            <Link to="/">Home</Link>
            <Link to="/">Resume</Link>
        </nav>
        <h1 className={styles.blurb}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <div className={styles.flexbox}>
            <div className={styles.element}>
                <img src="https://images.unsplash.com/photo-1548837150-233ab2a9730b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"></img>
                <div>Name of Work</div>
            </div>
            <div className={styles.element}>
                <img src="https://images.unsplash.com/photo-1548921441-0ab1949bdbb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
                <div>Name of Work</div>
            </div>
            <div className={styles.element}>
                <img src="https://images.unsplash.com/photo-1548990044-11586bc151f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"></img>
                <div>Name of Work</div>
            </div>
            <div className={styles.element}>
                <img src="https://images.unsplash.com/photo-1548850174-4bf3a73dbc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"></img>
                <div>Name of Work</div>
            </div>
        </div>
        <div className={styles.footer}>
            <h1>bye</h1>
            <button>clicc</button>
            <p>I did the design and code</p>
        </div>
    </div>
)

export default Theatre