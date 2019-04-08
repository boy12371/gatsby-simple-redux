import React, { FC, MouseEvent } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import Header from "./header";
import { StoreState, ActionTypes } from "../state/createStore";
import "../assets/styles/layout.css";

interface Props {
    count: number;
    increment: (event: MouseEvent) => void;
}

const Counter: FC<Props> = ({ count, increment }) => (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
);
interface StateProps {
    count: number;
}

const mapStateToProps = (state: StoreState): StateProps => ({ count: state.count });

interface DispatchProps {
    increment: () => {
        type: ActionTypes.INCREMENT;
    };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => {
    return { increment: () => dispatch({ type: ActionTypes.INCREMENT }) };
};

const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

const Layout: FC = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[{ name: "description", content: "Sample" }, { name: "keywords", content: "sample, something" }]}
                >
                    <html lang="en" />
                </Helmet>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div
                    style={{
                        margin: "0 auto",
                        maxWidth: 960,
                        padding: "0px 1.0875rem 1.45rem",
                        paddingTop: 0
                    }}
                >
                    {children}
                    <ConnectedCounter increment={() => ActionTypes.INCREMENT} />
                </div>
            </>
        )}
    />
);

export default Layout;
