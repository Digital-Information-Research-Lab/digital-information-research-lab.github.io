---
sidebar_position: 1
---
import H2HFlowchart from '@theme/H2HFlowchart';
import H2HArchitectureFlow from '@theme/H2HArchitectureFlow';
import AutoPlayVideo from '@site/src/components/AutoPlay';
import Link from '@docusaurus/Link';
import AboutProject from '@site/src/components/HomepageFeatures/AboutProject';


# Introduction

Welcome to the documentation for **MVA h2h marketplace**!

This documentation will guide you through the **features, setup, and usage** of the project. Below, you will find a structured list of all the sections included in this documentation for the project.

## **What are we building**

<AboutProject />

---

## **H2H Market Architecture Flowchart**

Below is an interactive flowchart explaining the architecture of the H2H Market system:

<H2HFlowchart />

---


## **About This Documentation**
The **H2H Market Documentation** website is a guide for understanding how the **Empirica Marketplace Simulation** works.

### **What it does:**
- **Provides Tutorial Gameplays of all the Marketplaces** - gives an overview of different marketplaces' workflow
- **Explains how the H2H market codebase works** – covers client folder, server folder, and mechanics.
- **Breaks down the code** – details how different parts of the system function together.
- **Helps developers** – modify and expand the codebase.
- **Explains how the H2H market Data Analysis works** - details how diffreent steps in collect, modify and use the data.
- **Provides deployment/ installation instructions** – how to install, run, and use the simulation.
- **Documents each feature** – detailed info on stages, functions, and variables.

This serves as a **resource** to make the H2H market simulation **easy to understand and use**.  
Files are organized into the following folders:
- **Gameplay Tutorials**
- **Callbacks**
- **Client Stages**
- **Client Components**
- **Data Analysis**
- **Deployment/ Installation**  
- **components** - beta testing
- **index** - beta testing

> **Callbacks, Client Stages, Client Components folders format matches the main branch of the h2h-market repository!**

---

## **Manual Documentation: How to document code?**
You should ideally document **everything** you push or edit in the **h2h-market** repository!

### **Setup for editing the documentation:**
The website is built using **Docusaurus** (https://docusaurus.io/docs). To contribute, **pull the code** from the `documentation` branch in the `digital-information-research-lab.github.io` repository.

### **Steps to start working:**
1. **Install Dependencies:** run `install npm` in your terminal.
2. **Run the site locally:** run `npm run start`.
3. **Modify and edit markdown files** following the documentation structure.
4. **Commit and push your changes** in the `documentation` branch to keep the documentation updated.

**Important:** Try **NOT** to edit the configuration file, as it is linked to deployment!

---

## **Documentation (Manual Docs): Format to document code - Client Side**
Each file in the **h2h-market** repository has a **corresponding file** in this documentation website. Remember to use **docstrings** in the codebase.

### **How to document a function:**
1. **Add a description** – What the function does.
2. **List function parameters** – Explain input variables.
3. **Specify the return value** – What the function returns.
4. **Include a code explanation** – With clear logical steps.
5. **Explain logical flow** – Describe how the function works step by step.

---

## **Documentation (Manual Docs): Format to document code - Callbacks.js**
Each function in **callbacks.js** has a **separate file** in this documentation website. Remember to use **docstrings** in the codebase.

### **How to document a function in Callbacks.js:**
- **Each function file is divided into conditions.**
- **Each condition is further divided into smaller conditions (if statements).**
- **For each condition:**
  1. **Include a description of the condition (in the first line).**
  2. **Explain how the logic inside the condition works and its logical flow(in the second line).**

---

## **Auto-Generated Documentation: How to document code?**

The h2h repository uses an **automated documentation pipeline** that scans the codebase and generates Markdown files using `jsdoc-to-markdown`. You only need to follow a specific format for your code comments, and the rest is taken care of with one command.

**Add docsstrings & comments when creating or modifying files in the codebase!**

---

### **How to Document Your Code (Auto-Generated Docs)**
To include your code in the docs, use JSDoc-style comments like this:

```javascript 
/**
*@summary This runs when a round ends.
*@param {object} round - The round object.
*@returns {void} */ Empirica.onRoundEnded(({ round }) => { ... });
*/
```

✅ Use valid types like: `string`, `number`, `boolean`, `object`, `Array<string>`, etc.

Check out the follwoing exampples for refernce!

```javascript
/**
 * @summary Adds two numbers and returns the result.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
  return a + b;
}
```

```javascript
/**
 * @summary Sends a welcome message to the user.
 * @param {string} username - The name of the user.
 * @returns {void}
 */
function greetUser(username) {
  console.log(`Welcome, ${username}!`);
}
```

```javascript
/**
 * @summary Returns a list of active users.
 * @returns {Array<string>} An array of usernames.
 */
function getActiveUsers() {
  return ["alice", "bob", "charlie"];
}
```

```javascript
/**
 * @summary Initializes the player in the game.
 * @param {object} player - The player object.
 * @param {string} role - The role assigned to the player ("producer" or "consumer").
 * @returns {void}
 */
function initPlayer(player, role) {
  player.set("role", role);
}
```

```javascript
/**
 * @summary Calculates profit based on price and cost.
 * @param {number} price - Selling price of the product.
 * @param {number} cost - Production cost of the product.
 * @returns {number} The profit earned.
 */
function calculateProfit(price, cost) {
  return price - cost;
}
```

**Additionally any comments with `/** */` will also be included in documenatation.**

For Example:
```javascript
/**
  This loop takes in the number of rounds from the treatment and verifies the round exists.
  @returns N/A
  */
  ```

---

### **How to Generate Docs (Auto-Generated Docs)**

Run this command from the root of the repo:

`npm run gendocs`

This will:

- Scan all files in client/src and server/src (subfolders like components, stages, intro-exit)

- Parse JSDoc-style comments

- Auto-generate .md files in documentation/docs/components/ and documentation/docs/server/

- Clean invalid HTML formatting for Docusaurus

---

### **Output Location (Auto-Generated Docs)**

Docs will be created inside:

`documentation/docs/components/`
`documentation/docs/server/`

**Each JS or JSX file will have a matching .md file in the same folder structure.**

---

*In brief just add proper JSDoc comments to your code and run:*

`npm run gendocs`

This will generate docs in the right folders — no manual setup needed. <br />

*The last two folders in the sidebar (components and index) are auto-generated folders from the documentation pipeline and contains auto-generated docs and are in beta testing phase at the moment.*

---

## **Gameplay Tutorials**
This section explains each step of the **gameplay process** to understand the core mechanics and slow of the game.

- [LLM Gameplay](/docs/Gameplay/Gameplay.md)

---

## **Callbacks Docs**
This section explains the core **callbacks** used in the game logic.

- [Callbacks Component](/docs/callbacks/callbacks1.md)
- [Empirica.onGameStart()](/docs/callbacks/onGameStart())
- [Empirica.onRoundStart()](/docs/callbacks/onRoundStart().md)
- [Empirica.onStageEnded()](/docs/callbacks/onStageEnded().md)

---

## **Client Stages Docs**
This section explains the **different game stages** in the client-side implementation.

- [Client Stage Component](/docs/clientStages/clientStage.md)
- [ConsumerChoice](/docs/clientStages/consumerChoice.md)
- [FeedbackStage](/docs/clientStages/feedback.md)
- [ProducerChoice](/docs/clientStages/producerChoice.md)
- [Results](/docs/clientStages/results.md)

---

## **Client Components Docs**
This section provides details on the client-side **React components** used in the project.

- [FeedbackPage](/docs/clientComponents/feedbackPage.md)
- [ProductCard](/docs/clientComponents/productCardPage.md)
- [ResultsCard](/docs/clientComponents/resultsCard.md)

---

## **Data Analysis Docs**
This section explains the **Data Analysis** code used in the project.

- [Data Analysis Overview](/docs/DataAnalysisDocs/overview.md)

---

## **Deployment/ Installation Docs**
This section explains how to **install the marketplace** and how to **deploy the marketplace** in Google Cloud Platform.

- [Installation Guide](/docs/DeploymentInstructions/installation.md)
- [Setting up the Server](/docs/DeploymentInstructions/SetUp.md)

---

By following this documentation, you will gain an in-depth understanding of the **MVA h2h marketplace** and how to work with it effectively.
