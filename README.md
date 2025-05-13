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

### Test Production Site Locally

```
$ yarn build && npx serve build
```

This tests your site in production (can test issues that may come up in production but not locally)

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
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

- **Feature List** and **Supported By** sections are implemented in:  
  - `src/components/HomepageFeatures/index.js`  
  - `src/pages/index.js`  

- **Images** used for the experiment cards are stored in:  
  - `static/img/`  

- **Styling for homepage features** can be modified in:  
  - `src/components/HomepageFeatures/styles.module.css`  

---
## People Section

The **People** section of the website displays information about the team members, including Principal Investigators, Postdoctoral Associates, Graduate Students, and Undergraduate Students. It includes their names, roles, contact details, and profile pictures. Below is the breakdown of the structure and corresponding files:

### **1. Components**
These files handle the rendering of individual elements in the People section.

- **`src/components/people/Headshot.jsx`**  
  - This component renders the profile picture (headshot) of a person.
  - It loads the image from `static/headshot/` and can display it in a circular frame if required.

- **`src/components/people/ProfileCard.jsx`**  
  - This component creates a profile card for each individual.
  - It includes the **headshot, name, role, and email contact** (if available).
  - Uses the **Headshot** component inside the profile card.

### **2. Styling**
The CSS styles for the People section are defined in:

- **`src/css/people.module.css`**  
  - Defines styles for profile cards, images, layout, and hover effects.
  - Ensures profile images are properly sized and can be circular.
  - Implements an **underline hover effect** on the profile cards.

### **3. Data**
The information for each category of people is stored in JSON format:

- **`src/data/people/grad.json`** – Graduate students  
- **`src/data/people/pi.json`** – Principal Investigators  
- **`src/data/people/postdoc.json`** – Postdoctoral associates  
- **`src/data/people/undergrad.json`** – Undergraduate students  

Each file contains structured data for the respective category, including attributes like `id`, `name`, `role`, `contact`, and `joined` (year).

### **4. People Page**
The main **People** page (`src/pages/people.js`) is responsible for:

- Importing data from the JSON files.
- Sorting and displaying the people based on their joining year.
- Rendering the **ProfileCard** components inside categories.
- Implementing a **popup modal** to show additional details when a profile is clicked.

---

### **Summary of File Structure**
| File | Description |
|------|------------|
| `src/components/people/Headshot.jsx` | Displays a person's headshot. |
| `src/components/people/ProfileCard.jsx` | Renders the profile card with name, role, and contact. |
| `src/css/people.module.css` | Styles the People section (headshots, cards, hover effects). |
| `src/data/people/pi.json` | Data file containing Principal Investigators. |
| `src/data/people/postdoc.json` | Data file containing Postdoctoral Associates. |
| `src/data/people/grad.json` | Data file containing Graduate Students. |
| `src/data/people/undergrad.json` | Data file containing Undergraduate Students. |
| `src/pages/people.js` | Displays all people, categorizes them, and implements a modal popup. |

##  Configurations and Styling

- **Custom CSS**:  
  Located in `src/css/custom.css`.
- **Site Metadata**:  
  Managed in `docusaurus.config.js`.
---



# Adding a New Page to the Website

## 1. Add the Page to the Navbar
- Open `docusaurus.config.js`.
- Locate `themeConfig > navbar > items` and add:

  ```javascript
  {
    to: '/newPage', 
    position: 'right',
    label: 'NewPage'
  },
 
### 2. Create the Page
- Navigate to `src/pages/` and create `newPage.md` or `newPage.js`
- Add content to the page

---

# Image Storage and Access

All images and static assets are stored in the `static/` folder, which serves as the root (`/`) in the generated website.

## Storage Locations
- General images: `static/img/`
- Headshots: `static/headshot/`

## Accessing Images
```javascript
const myImage = require('@site/static/img/example.png');

function ImageComponent() {
  return <img src={myImage} alt="Example" />;
}
