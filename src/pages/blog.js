import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'


const BlogPage = ({ data }) => {
    console.log('data')
    console.log(data);
    return (
        <Layout pageTitile="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>Name: {node.frontmatter.name}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query MyQuery {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    name
                }
                id
                body
            }
        }
    }
`

export default BlogPage