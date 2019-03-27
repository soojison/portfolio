import React, { Component } from "react"
import styles from "../styles/template.module.scss"
import ImageZoom from 'react-medium-image-zoom'

class WorkTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    var capacity = this.props.capacity.split(", ");

    return (
      <div className={styles.container}>
        <div className={styles.header} >
        <img className={styles.headerImg} src={this.props.header} alt="Header"/>
        <h1>{this.props.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.carousel}>
          <ImageZoom image={{
            src: this.props.poster,
            alt: 'Poster',
          }}
          zoomImage={{
            src: this.props.poster,
            alt: 'Poster'
          }}
      />
          {this.props.photos.map((pic,i) =>
            <a>
            <ImageZoom image={{
              src: pic.file.url,
                alt: 'Photos',
            }}
            zoomImage={{
              src: pic.file.url,
                alt: 'Photos'
            }}
            />
            </a>
          )}
        </div>
        <div className={styles.text}>
          <h2>{this.props.title}</h2>
          <p className={styles.desc}>{this.props.desc}</p>
          <ul className={styles.capacity}>
            {capacity.map((i) =>
              <li>{i}</li>
            )}
          </ul>
          <a href="/thd" className={styles.back}>Back</a>
      </div>
      </div>
    </div>
  )
  }
}

export default WorkTemplate
