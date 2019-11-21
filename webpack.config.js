const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = (_, argv) => {
    const mode = argv.mode == "production" ? argv.mode : "development"
    return {
        mode,
        devServer: {
            historyApiFallback: true,
            overlay: true
        },
        entry: ["./src"],
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
        },
        output: {
            path: __dirname + "/dist",
            hashDigestLength: 8,
            filename: "[name].[hash].js",
            chunkFilename: "[name].[hash].js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader"
                }
            ]
        },
        plugins: [
            new HTMLPlugin({ template: "public/index.html" }),
            new CopyPlugin(["./public"]),
            new CleanWebpackPlugin
        ]
    }
}
