import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Button variant="contained">Default</Button>
  </Layout>
)

export default IndexPage
