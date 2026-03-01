# Netninja's basic webpack + typescript (no framework app)

Repo contains code from youTube tutorial:
[Net Ninja (Webpack & TypeScript Setup)](https://youtube.com/playlist?list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&si=2Sik4JRnZg4dPXmU).

#

### Compatibility

Built with `node v24.0.2`.

#

### What's different?

- My generated output folder name is `dist` (the instructor named theirs `public`).
- Webpack dev server (live reload) works as it should using `devServer.static.directory: join(__dirname, 'dist')` (the instructor's `output.publicPath: 'dist'` method did not work in my case).
- My package.json scripts for serving via webpack dev server & doing one-time build are `web:serve` and `web:build` respectively (in summary, mine has a `web:` prefix).

#

### Development Instructions

Clone this repository locally unto your computer. What ever script commands you are asked to run in this doc should be done from the root of this repository/folder. In your terminal, change directory into the root of this folder and run the commands below.

Install dependencies (only the first time you run this project & any time your package.json dependencies have changed but not yet installed):

````
npm install
````

Run the app using webpack dev server's live page reload (access the app UI in the browser at localhost PORT `8080`):

> [!NOTE]  
> This doesn't build (i.e. generate and send) .js files into the `dist` folder. Webpack just serves your `.js` files from memory. This is useful in development mode ✅

````
npm run web:serve
````

#

### Webpack's production mode

To build the app for production (i.e. one-time build which always generate and send built files to the `dist` folder), use the script command below, then spin up the app from the `dist` folder in the browser using VScode's live server:

> [!NOTE]  
> Change `mode: 'development'` to `mode: 'production'` in your webpack config. In a real app, you may have to create separate webpack config to cater for this differently instead of having to manually change the mode in the file ✅

````
npm run web:build
````

#

### Using (eval) source-map debugging in the browser

To test how this works:
- Uncomment the broken "person" code in the `index.ts` file. 
- Run the production mode's `web:build` script command to rebuild the `dist` folder files (for this debugging, it doesn't matter if your webpack config mode is set to production or not, it will work).
- Open your app in the browser (i.e. spin up the app from the `dist` folder in the browser using VScode's live server).
- `Inspect` with dev tool: Go to the `console` tab, and click on the `index.ts` link from the error displayed there. It will take you to the unbundled readable code which is in the `sources` tab.
- Use the debugger feature in the `source` tab as shown by Net Ninja in video #6 at: https://www.youtube.com/watch?v=Gb9_yBWql24&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=7.

> **TODO**: Make a short screen recorded video of how to use the debugger feature in the `source` tab, and add it here.
