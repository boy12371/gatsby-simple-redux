export interface SiteMetadata {
    readonly title: string;
    readonly description: string;
    readonly keywords: string;
    readonly author: string;
}

export type GatsbyPlugin =
    | string
    | {
          resolve: string;
          options: any;
      };

// ====================== Base ======================

export interface Frontmatter {
    title: string;
    description?: string;
    tags?: string[];
    date?: string;
}

// ====================== Tags ======================

export interface Edge<F extends Frontmatter = Frontmatter> {
    node: {
        fields: {
            slug: string;
        };
        frontmatter: F;
    };
}

export interface TagRouteProps<F extends Frontmatter = Frontmatter> {
    data: {
        allMarkdownRemark: {
            edges: Edge<F>[];
            totalCount: number;
        };
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    pageContext: {
        tag: string;
    };
}
