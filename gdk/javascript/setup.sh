#!/bin/bash

# Step 1: Initialize package.json
echo "Initializing npm project..."
npm init -y

# Step 2: Install Webpack, Webpack CLI, TypeScript, ts-loader, and webpack-dev-server
echo "Installing Webpack and TypeScript dependencies..."
npm install --save-dev webpack webpack-cli typescript ts-loader webpack-dev-server

# Step 3: Create tsconfig.json
echo "Creating tsconfig.json..."
cat <<EOT > tsconfig.json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "ES6",
    "strict": true,
    "declaration": false,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
EOT

# Step 4: Create webpack.config.js
echo "Creating webpack.config.js..."
cat <<EOT > webpack.config.js
const path = require("path");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: "./src/index.ts",  // Entry point of your TypeScript files
        output: {
            filename: isProduction ? "gdk.min.js" : "gdk.js",  // Different output filenames for production and development
            path: path.resolve(__dirname, "dist"),  // Output directory
            clean: true,  // Clean the output directory before each build
            library: {
                type: "umd", // Universal Module Definition makes the bundle compatible with various module systems
                name: "Fearth", // Sets the name of the global variable to access in non-module environments 
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
EOT

# Step 5: Add build and dev scripts to package.json
echo "Adding build and start scripts to package.json..."
npx json -I -f package.json -e 'this.scripts.build="webpack --mode production"'
npx json -I -f package.json -e 'this.scripts["build:dev"]="webpack --mode development"'
npx json -I -f package.json -e 'this.scripts.start="webpack serve --mode development"'

# Step 6: Create a sample TypeScript entry file if it doesn't exist
if [ ! -f src/index.ts ]; then
    echo "Creating sample TypeScript file: src/index.ts..."
    echo 'console.log("Hello, Webpack and TypeScript!");' > src/index.ts
fi

# Final message
echo "Setup complete! Run 'npm run build' for production build, 'npm run build:dev' for development build, and 'npm start' for the development server."
