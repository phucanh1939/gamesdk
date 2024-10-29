# Step-by-Step Guide to Build a JavaScript SDK with TypeScript

## 1. Set Up the Project

First, create a new folder for your SDK and navigate into it.

```bash
mkdir my-sdk/javascript
cd my-sdk/javscript
```

## 2. Initialize the Project

Use `npm` to initialize a `package.json` file, which will manage dependencies.

```bash
npm init -y
```

## 3. Install Dependencies

- typescript: To write your SDK in TypeScript.
- webpack: To bundle all your TypeScript/JavaScript files into a single output.
- webpack-cli: The command-line interface for Webpack.
- ts-loader: A Webpack loader to transpile TypeScript into JavaScript.

```bash
npm install --save-dev typescript webpack webpack-cli ts-loader
```

## 4. Configure TypeScript

Create a `tsconfig.json` file to configure how TypeScript compile ts to javascript

```bash
npx tsc --init
```

## 5. Create SDK Code

Create a `src` folder where you will write the SDK modules.

```bash
mkdir src
```
