import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
    <Layout data={data}>
      <div>
        <h1>Learning Gatsby</h1>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query MyQuery {
    site {
      menu {
        id
        name
        url
      }
    }
  }
`