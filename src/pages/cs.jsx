import React, { Component } from "react"
import { Document, Page } from 'react-pdf'
import { graphql } from "gatsby"

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
  }
`
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
        console.log(file.name);

        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file={file.media.file.url}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }
}

export default CSResume