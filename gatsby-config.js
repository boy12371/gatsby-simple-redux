"use strict";

require("source-map-support").install();

require("tsconfig-paths").register({
    baseUrl: "./",
    paths: {
        "@src/*": ["src/*"],
        "@test/*": ["test/*"]
    }
});

require("ts-node").register({
    compilerOptions: {
        module: "commonjs",
        target: "es5",
        noImplicitAny: false
    }
});

const config = require("./src/common/config");

module.exports = {
    siteMetadata: config.siteMetadata,
    plugins: config.plugins
};
