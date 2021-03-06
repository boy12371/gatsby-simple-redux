// import React, { FC } from "react";
// import { Link, graphql } from "gatsby";

// import Layout from "../../components/Layout";
// import { TagRouteProps } from "../../common/types";

// const TagRoute: FC<TagRouteProps> = ({ data, pageContext }) => {
//     const {
//         allMarkdownRemark: { edges: posts, totalCount },
//         site: { siteMetadata: title }
//     } = data;
//     const postLinks = posts.map(post => (
//         <li key={post.node.fields.slug}>
//             <Link to={post.node.fields.slug}>
//                 <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
//             </Link>
//         </li>
//     ));
//     const { tag } = pageContext;
//     // const tag = this.props.pageContext.tag;
//     // const title = this.props.data.site.siteMetadata.title;
//     // const totalCount = this.props.data.allMarkdownRemark.totalCount;
//     const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with “${tag}”`;

//     return (
//         <Layout source={{ title: `${tag}`, name: `${title}` }}>
//             <section className="section">
//                 <div className="container content">
//                     <div className="columns">
//                         <div className="column is-10 is-offset-1" style={{ marginBottom: "6rem" }}>
//                             <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
//                             <ul className="taglist">{postLinks}</ul>
//                             <p>
//                                 <Link to="/tags/">浏览所有分类</Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Layout>
//     );
// };

// export default TagRoute;

// export const tagPageQuery = graphql`
//     query TagPage($tag: String) {
//         site {
//             siteMetadata {
//                 title
//             }
//         }
//         allMarkdownRemark(
//             limit: 1000
//             sort: { fields: [frontmatter___date], order: DESC }
//             filter: { frontmatter: { tags: { in: [$tag] } } }
//         ) {
//             totalCount
//             edges {
//                 node {
//                     fields {
//                         slug
//                     }
//                     frontmatter {
//                         title
//                     }
//                 }
//             }
//         }
//     }
// `;
