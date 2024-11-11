const path = require("path");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: "./src/index.ts",  // Entry point of your TypeScript files
        output: {
            filename: isProduction ? "gdk.min.js" : "gdk.js",  // Different output filenames for production and development
            path: path.resolve(__dirname, "dist"),  // Output directory
            // clean: true,  // Clean the output directory before each build
            library: {
                type: "umd", // Universal Module Definition makes the bundle compatible with various module systems
                name: "fearth", // Sets the name of the global variable to access in non-module environments 
                umdNamedDefine: true, // ensures that the UMD wrapper will use the name when loaded by AMD (e.g., RequireJS).
            },
        },
        resolve: {
            extensions: [".ts", ".js"],  // Resolve .ts and .js files
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,  // Apply ts-loader to TypeScript files
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        mode: isProduction ? "production" : "development",  // Set mode based on environment
        devtool: isProduction ? 'source-map' : 'inline-source-map',  // Use source maps for development and production
        devServer: {
            static: path.join(__dirname, 'dist'),  // Replace contentBase with static
            compress: true,                       // Enable gzip compression
            port: 9000,                           // Port to serve on
            open: true,                           // Open the browser automatically
            hot: true,                            // Enable hot module replacement
            historyApiFallback: true,            // For single-page apps, serve index.html for all routes
            watchFiles: ["src/**/*"],             // Watch all source files for changes
        },
    };
};
