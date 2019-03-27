import React, { Component } from "react"
import styles from "../styles/theatre.module.scss"
import { Link } from "gatsby";

export const query = graphql`
query WorkCoverQuery {
    allContentfulWorkCover {
        edges{
          node {
            name,
            link,
            pic {
              file {
                url
              }
            }
          }
        }
      }
}
`

class Theatre extends Component {
    render() {
        const data = this.props.data.allContentfulWorkCover.edges;

        return (
            <div className={styles.container}>
                <nav className={styles.header}>
                    <Link to="/cs">CS</Link>
                    <Link to="/">Home</Link>
                    <Link to="/thdresume">Resume</Link>
                </nav>
                <h1 className={styles.blurb}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <div className={styles.flexbox}>
                    {data.map((item,i) => 
                        <a className={styles.element} key={i}
                           href={`/thd${item.node.link}`}>
                            <img src={item.node.pic.file.url}></img>
                            <div>{item.node.name}</div>
                        </a>)
                    }
                </div>
                <div className={styles.footer}>
                    <h1>Get in touch</h1>
                    <button>clicc</button>
                    <p>I did the design and code</p>
                </div>
            </div>
        );
    }
}

export default Theatre
