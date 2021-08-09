module.exports = {
    mode: "development",
    entry: {
        home: "./resources/js/home.js",
        notification: "./resources/js/notification.js",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/assets/js/",
    },
};
