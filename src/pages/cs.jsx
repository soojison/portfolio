import React, { Component } from "react"
import { Document, Page } from 'react-pdf'
import { graphql } from "gatsby"
import styles from "../styles/cs.module.scss"
import { Link } from "@reach/router";

export const query = graphql`
query resumeQuery {
    contentfulResume {
      name
      media {
        file {
          url
        }
      }
    }
  contentfulPicture {
    contentful_id
    photo{
      file {
        url
      }
    }
  }
}
`

const bgStyle = (url) => ({
    background: 'url(' + url + ') center center no-repeat fixed',
    backgroundSize: 'cover'
})

class CSResume extends Component {
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
        console.log(file.name);

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
            </div>
        )
    }
}

export default CSResume