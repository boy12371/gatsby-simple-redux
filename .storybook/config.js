import { configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import "antd/dist/antd.less";

withOptions({
    name: "匡架网络",
    downPanelInRight: true
});

// Stories loader
const req = require.context("../stories", true, /\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
    console.log(pathname);
};

// Initialize react-storybook
configure(loadStories, module);
