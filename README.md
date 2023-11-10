# PWA-Text-Editor

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" width="100">
</div>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Deployed-Application](#deployed-application)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

The JATE Text Editor is a powerful web application designed for writing and editing code. It combines a client-server architecture with robust features to enhance your coding experience.

### Key Features:

- **Client-Server Structure:** When you open the application in your editor, you'll see a structured client-server folder layout for seamless development.

- **Backend Startup:** Running `npm run start` from the root directory initiates the backend, serving the client and providing a smooth development environment.

- **Webpack Bundling:** Executing the text editor application in your terminal triggers Webpack to bundle your JavaScript files, optimizing performance.

- **Plugin-Generated Files:** Webpack plugins generate essential files including HTML, a service worker, and a manifest file for a complete web application experience.

- **Next-Gen JavaScript Support:** The application supports next-generation JavaScript, ensuring smooth functionality without errors.

- **IndexedDB Integration:** Upon opening the text editor, IndexedDB promptly creates a database storage for efficient content management.

- **Automatic Content Saving:** Enter content in the text editor and click off the DOM window. Your content is automatically saved using IndexedDB.

- **Persistent Content Retrieval:** Reopen the text editor after closing it, and your content is retrieved seamlessly from IndexedDB.

- **Installable Web Application:** Clicking on the Install button enables you to download the web application as an icon on your desktop.

- **Service Worker Integration:** Upon loading the web application, a registered service worker using Workbox ensures optimal performance.

- **Static Asset Caching:** Subsequent pages and static assets are pre-cached upon loading for improved speed and reliability.

- **Deployment:** You can access the deployed application on Heroku via *https://evening-sea-02025-d78ee56e0095.herokuapp.com/*.

## Installation

### Clone the repository to your local machine

```sh
git clone https://github.com/dmerk2/PWA-Text-Editor.git
```

### Install necessary dependencies and start the application

```sh
npm install && npm start
```

## Deployed Application

Click the lightning bolt [⚡](https://evening-sea-02025-d78ee56e0095.herokuapp.com/) to go to J.A.T.E. text editor!

## License

This project is licensed under the terms of the **[MIT License](https://opensource.org/licenses/MIT)**

## Contributing

Daniel Merkin

## Tests

N/A

## Questions

If you have any questions or suggestions about this project, please feel free to contact me:

- GitHub: [@dmerk2](https://github.com/dmerk2)
- Email: dan.merkin@gmail.com
