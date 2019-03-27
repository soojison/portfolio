import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import WorkTemplate from "../worktemplate.jsx"

export default props => (
  <StaticQuery
    query={graphql`
      query unamundaQuery {
        contentfulWorkDetail(contentful_id:{eq:"2HP7b99lyQQaI8rMLWogs1"}) {
          title
          poster {
            file {
              url
            }
          }
          header {
            file {
              url
            }
          }
          desc {
            desc
          }
          capacity
          photos {
            file {
              url
            }
          }
        }
      }
    `}
    render={data => (
     <WorkTemplate
        title={data.contentfulWorkDetail.title}
        header={data.contentfulWorkDetail.header.file.url}
        poster={data.contentfulWorkDetail.poster.file.url}
        desc={data.contentfulWorkDetail.desc.desc}
        photos={data.contentfulWorkDetail.photos}
        capacity={data.contentfulWorkDetail.capacity}
      />
    )}
  />
)
