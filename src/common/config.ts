import { SiteMetadata } from "./types";
import { GatsbyPlugin } from "./types";
import { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, ROOT } from "./constant";

export const siteMetadata: SiteMetadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    author: AUTHOR
};

export const plugins: GatsbyPlugin[] = [
    "gatsby-plugin-typescript",
    {
        resolve: "gatsby-plugin-less",
        options: {
            javascriptEnabled: true
        }
    },
    {
        resolve: "gatsby-plugin-antd",
        options: {
            style: true
        }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
        resolve: "gatsby-source-filesystem",
        options: { name: "images", path: `${ROOT}/src/assets/img` }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: { name: "uploads", path: `${ROOT}/static/img` }
    },
    {
        resolve: "gatsby-source-filesystem",
        options: { name: "pages", path: `${ROOT}/src/pages` }
    },
    {
        resolve: "gatsby-plugin-manifest",
        options: {
            name: "gatsby-starter-default",
            short_name: "starter",
            start_url: "/",
            background_color: "#663399",
            theme_color: "#663399",
            display: "minimal-ui",
            icon: `${ROOT}/src/assets/img/logo.png`
        }
    },
    {
        resolve: "gatsby-transformer-remark",
        options: {
            plugins: [
                {
                    resolve: "gatsby-remark-relative-images",
                    options: { name: "uploads" }
                },
                {
                    resolve: "gatsby-remark-images",
                    options: { maxWidth: 2048 }
                },
                {
                    resolve: "gatsby-remark-copy-linked-files",
                    options: { destinationDir: "static" }
                }
            ]
        }
    },
    {
        resolve: "gatsby-plugin-netlify-cms",
        options: {
            modulePath: `${ROOT}/src/cms/cms`,
            enableIdentityWidget: true,
            publicPath: "admin",
            htmlTitle: "匡架网络管理后台"
        }
    },
    "gatsby-plugin-no-sourcemaps",
    {
        resolve: "gatsby-plugin-purgecss",
        options: { develop: true, purgeOnly: ["/all.sass"] }
    },
    "gatsby-plugin-netlify"
];
