import React, { FC } from "react";
import { graphql } from "gatsby";

import UnitsView from "../view/UnitsView";

interface Props {
    data: {
        markdownRemark: {
            frontmatter: {
                currency: string;
                weight: string;
            };
        };
    };
}

const UnitsSettings: FC<Props> = ({ data }) => {
    const {
        markdownRemark: { frontmatter: post }
    } = data;

    return <UnitsView source={post} />;
};

export default UnitsSettings;

export const unitsSettingsQuery = graphql`
    query UnitsSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                currency
                weight
            }
        }
    }
`;
