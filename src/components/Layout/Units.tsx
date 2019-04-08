import React, { FC } from "react";
import { graphql, StaticQuery } from "gatsby";

import { UnitsQueryData } from "../../state/layout/types";
import UnitsView from "../../view/UnitsView";

const Units: FC = () => {
    return (
        <StaticQuery
            query={query}
            render={(data: UnitsQueryData) => {
                const {
                    allMarkdownRemark: {
                        edges: [
                            {
                                node: { frontmatter: post }
                            }
                        ]
                    }
                } = data;

                return <UnitsView source={post} />;
            }}
        />
    );
};

export default Units;

const query = graphql`
    query UnitsQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "UnitsSettings" } } }) {
            edges {
                node {
                    frontmatter {
                        currency
                        weight
                    }
                }
            }
        }
    }
`;
