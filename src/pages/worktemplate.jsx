import React, { Component } from "react"
import styles from "../styles/template.module.scss"

class WorkTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
    <div className={styles.container}>
      <div className={styles.header} >
        <img className={styles.headerImg} src={this.props.header} />
        <h1>{this.props.title}</h1>
      </div>
      <div className={styles.content}>
        <img src={this.props.poster} />
        <p>{this.props.desc}</p>
        <div className={styles.carousel}>
        {this.props.photos.map((pic,i) =>
          <img key={i} src={pic.file.url} />
        )}
        </div>
      </div>
    </div>
    );
  }
}

export default WorkTemplate;
