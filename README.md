## Built with [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

<p align="center">
<img src=".erb/img/erb-logo.png" width="200px" />
</p>

### Code details

The app is built using electron framework and react library for building the UI. The implementation uses Typescript as coding language and basic css stylings for design changes. I have used `electron-store` for handling storage needs.

For syntax highlighting, I've used prismjs which is an amazing lightweight tool built just for this.

The requirements was as below.

> Design and implement a Code Snippet Manager application using Electron, React, and TypeScript. The application should provide the following features:
> 1. Main Window:
>    ● Display a list of code snippets.
>    ● Allow users to create new snippets, edit existing snippets, and delete
>    snippets.
>    ● Implement search functionality to search for snippets by title or
>    description.
> 2. Code Snippet Entry:
>    ● Each snippet should have a title, description, and the code snippet itself.
>    ● Include syntax highlighting for the code snippets based on their language.
> 3. Persistence and Storage:
>    ● Enable the application to persist code snippets using a local storage mechanism (e.g., Electron's built-in storage or a database of your choice).

---

### Scripts

1. `npm run build` OR `yarn build` : Builds both `main` and `renderer` modules. `main` handles the core electron specific changes and `renderer` handles the UI part of the code.
2. `npm run start` OR `yarn start` : Starts the app in dev mode and opens the dev tools along with it for inspecting while working using the `electron-debug` module.
3. `npm run package` OR `yarn package` : Builds packages the app for the local platform

---

### Note from dev (me)
I am very new to electron and have built this app from the knowledge I have on Cordova and Phonegap along with my command over JS/TS. I would love to discuss on further improving this in any manner that might help in building the knowledge.

