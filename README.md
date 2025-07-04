# Kendall Square Cofoundry Website

This is the official website for Kendall Square Cofoundry, hosted at [cofoundry.global](https://cofoundry.global).

Built with [Start Bootstrap - Grayscale](https://startbootstrap.com/theme/grayscale/) theme and deployed to GitHub Pages.

## Live Site

**[View Live Site](https://cofoundry.global)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-grayscale/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-grayscale.svg)](https://www.npmjs.com/package/startbootstrap-grayscale)

## Download and Installation

To begin using this template, choose one of the following options to get started:

- [Download the latest release on Start Bootstrap](https://startbootstrap.com/theme/grayscale/)
- Install using npm: `npm i startbootstrap-grayscale`
- Clone the repo: `git clone https://github.com/StartBootstrap/startbootstrap-grayscale.git`
- [Fork, Clone, or Download on GitHub](https://github.com/StartBootstrap/startbootstrap-grayscale)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with `dist` directory. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

## 🚀 Making Changes to the Website

This site uses a static site generator with Pug templates and SCSS. Follow this workflow for any changes:

### Complete Workflow for Updates

```bash
# 1. Make changes to source files
# Edit files in: src/pug/*.pug, src/scss/*.scss, src/assets/*

# 2. Commit your changes 
git add -A
git commit -m "Describe your changes"

# 3. Build the site (compiles pug→html, scss→css)
npm run build

# 4. Deploy to GitHub Pages 
npm run deploy

# 5. Push to main branch (recommended)
git push origin main
```

**Important**: Always follow this complete workflow. Changes to `.pug` files won't appear live until you build and deploy!

### Development Workflow

For local development and testing:

```bash
# Install dependencies (first time only)
npm install

# Start development server with live reload
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Site Structure

- **Source files**: `/src/pug/` (templates), `/src/scss/` (styles), `/src/assets/` (images)
- **Built files**: `/dist/` (generated HTML, CSS, JS - don't edit directly)
- **Live site**: Served from `gh-pages` branch at [cofoundry.global](https://cofoundry.global)

### Troubleshooting

**Changes not appearing live?**
1. Ensure you committed your source file changes
2. Run `npm run build` to compile templates
3. Run `npm run deploy` to publish
4. Wait 5-10 minutes for GitHub Pages cache
5. Clear Cloudflare cache if needed

#### npm Scripts

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
- `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
- `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
- `npm run start:debug` runs the project in debug mode
- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/StartBootstrap/startbootstrap-grayscale/issues) here on GitHub or leave a comment on the [theme overview page at Start Bootstrap](https://startbootstrap.com/theme/grayscale/).

## About

Start Bootstrap is an open source library of free Bootstrap themes and templates. All of the free themes and templates on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

- <https://startbootstrap.com>
- <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](https://davidmiller.io/)**.

- <https://davidmiller.io>
- <https://twitter.com/davidmillerhere>
- <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2023 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE) license.
