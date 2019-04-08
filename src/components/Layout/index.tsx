import React, { FC, Fragment } from "react";
import Helmet from "react-helmet";

import { Layout as Default } from "../../state/layout/constant";
import { AUTHOR, LANG, SITEURL } from "../../common/constant";
import { LayoutProps } from "../../state/layout";
import favicon from "../../assets/img/favicon.ico";
import Header from "./Header";
import Counter from "./Counter";

interface Props {
    source?: LayoutProps;
}

const Layout: FC<Props> = ({ source = Default, children }) => {
    let { name, title, description, keywords, isHeader } = source;
    title = `${title || Default.title} | ${name || Default.name}`;
    description = description || Default.description;
    keywords = keywords || Default.keywords;
    const HeaderElement = isHeader == false ? <></> : <Header />;

    return (
        <Fragment>
            <Helmet htmlAttributes={{ lang: LANG }}>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="hostname" content={SITEURL} />
                <meta name="author" content={AUTHOR} />
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            {HeaderElement}
            {children}
            <Counter />
        </Fragment>
    );
};

export default Layout;
