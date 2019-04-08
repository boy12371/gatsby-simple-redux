const path = require("path");

module.exports = ({ config, mode }) => {
    mode: "DEVELOPMENT";

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [require.resolve("@babel/preset-react"), require.resolve("@babel/preset-env")];

    // use @babel/plugin-proposal-class-properties for class arrow functions
    config.module.rules[0].use[0].options.plugins = [require.resolve("@babel/plugin-proposal-class-properties")];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];

    // Add typescript loader
    config.module.rules.push({
        test: /\.tsx?$/,
        use: [
            {
                loader: require.resolve("babel-loader"),
                options: {
                    presets: [require.resolve("babel-preset-react-app")]
                }
            },
            require.resolve("react-docgen-typescript-loader")
        ],
        exclude: /node_modules/
    });
    config.resolve.extensions.push(".ts", ".tsx");

    // Add less loader
    config.module.rules.push({
        test: /\.less$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    });
    config.resolve.extensions.push(".less");

    // Add markdown loader
    config.module.rules.push({
        test: /\.md$/,
        resourceQuery: /blockType=docs/,
        use: ["storybook-readme/vue/docs-loader", "html-loader", "markdown-loader"],
        include: path.resolve(__dirname, "../src")
    });
    config.resolve.extensions.push(".md");

    return config;
};
