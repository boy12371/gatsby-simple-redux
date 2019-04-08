export enum LayoutActionTypes {
    INCREMENT = "@@layout/INCREMENT"
}

export interface LayoutState {
    readonly count: number;
}

export interface LayoutProps {
    title?: string;
    name?: string;
    description?: string;
    keywords?: string;
    isHeader?: boolean;
}

export interface UnitsViewProps {
    currency?: string;
    weight?: string;
}

export interface UnitsQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: UnitsViewProps;
                };
            }
        ];
    };
}
