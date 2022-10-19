# vue-login-form

This project is a simple login feature.

## tools:

1. Vue 3
2. Vite
3. global state manage tool: Pinia

## Features:

1. Use **Vite** to startup project
2. Use **Vue** as frontend framework
3. Use **Composition API** with **Pinia** to make code easy-organized.
    - If you want to know more about <u>composition API</u>, please [read this offical document](https://vuejs.org/guide/introduction.html#composition-api).
    - More infomation about <u>Pinia</u>, please [read this](https://stackblitz.com/github/piniajs/example-vue-3-vite?file=README.md).

## Installation
1. git clone this project
2. run `npm install`
3. run `npm run dev`
4. then you can see this project is running on http://127.0.0.1:5173/

## Deploy
1. run `npm run build`
2. run `npm install -g serve` (a stastic file server from Node.js)
3. (You can't just open dist/index.html, this won't work.)
4. run `serve -s dist`
5. open http://localhost:3000 and you can see your final project
6. read [this document](https://cli.vuejs.org/guide/deployment.html#previewing-locally) if you want to know more detail

> Sometimes your project might work well through executing `npm run dev` but not work as expected when you build out.  So please don't ignore this step!

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
