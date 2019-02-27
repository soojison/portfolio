import React, { Component } from "react"
import { Document, Page } from 'react-pdf'
import { graphql } from "gatsby"
import styles from "../styles/cs.module.scss"
import { Link } from "@reach/router";

export const query = graphql`
query thdQuery {
  contentfulResume(contentful_id: {eq: "39oSXNSr3OI3E2Ty6XpoTN"}) {
    media {
      file {
        url
      }
    }
}
contentfulPicture(contentful_id: {eq: "3YxSJGUFONNp4nJiyHUToR"}) {
    photo {
      file {
        url
      }
    }
  }
}
`

const bgStyle = (url) => ({
    background: 'url(' + url + ') bottom right no-repeat fixed',
    backgroundSize: 'cover',
    color: 'white'
})

class ThdResume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
      const file = this.props.data.contentfulResume;
      const pic = this.props.data.contentfulPicture

      const { pageNumber, numPages } = this.state;

      return (
        <div className={styles.cs} style={bgStyle(pic.photo.file.url)}>
        <Link to="/" className={styles.backlink}>
        ★
        <span className={styles.hovermsg}>go back</span>
        </Link>
        <Document
          className={styles.document}
          file={file.media.file.url}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
        <Page
          className={styles.page}
          pageNumber={pageNumber} />
        <p className={styles.pageNumber}>Page {pageNumber} of {numPages}</p>
        </Document>
        <a
          className={styles.btn}
          href={file.media.file.url}
          target="_blank">Download PDF
        </a>
        </div>
      )
    }
}

export default ThdResume
