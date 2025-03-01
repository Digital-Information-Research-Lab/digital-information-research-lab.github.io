# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Platform Governance Research Lab - Website Structure

This document provides an overview of the structure of the website, including the navigation bar sections and the corresponding files that define each part of the website.

## Navbar Sections

The navigation bar includes the following sections:

| Section Name   | Description                                       | Corresponding File(s) |
|---------------|---------------------------------------------------|----------------------|
| **Home**       | The main landing page of the website.           | `src/pages/index.js` |
| **Documentation** | Provides research documentation and guides.  | `/docs` folder|
| **Publications** | Lists published research papers and findings. | `src/pages/publications.md` |
| **GitHub**     | Links to the project repository.                | External Link |

The **navbar configuration** is defined in:
- `docusaurus.config.js` → under the `themeConfig.navbar` section.

---

## Landing Page

The landing page includes the following key components:

- **Experiment Cards** and **Supported By** sections are implemented in:  
  - `src/components/HomepageFeatures/index.js`  
  - `src/pages/index.js`  

- **Images** used for the experiment cards are stored in:  
  - `static/img/`  

- **Styling for homepage features** can be modified in:  
  - `src/components/HomepageFeatures/styles.module.css`  

---


##  Configurations and Styling

- **Custom CSS**:  
  Located in `src/css/custom.css`.
- **Site Metadata**:  
  Managed in `docusaurus.config.js`.
---
