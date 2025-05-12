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

<AboutProject />

---

# H2H Market Architecture Flowchart

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
- **Deployment**  

> **Callbacks, Client Stages, Client Components format matches the main branch of the h2h-market repository!**

---

## **Documentation: How to document code?**
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

## **Documentation: Format to document code - Client Side**
Each file in the **h2h-market** repository has a **corresponding file** in this documentation website. Remember to use **docstrings** in the codebase.

### **How to document a function:**
1. **Add a description** – What the function does.
2. **List function parameters** – Explain input variables.
3. **Specify the return value** – What the function returns.
4. **Include a code explanation** – With clear logical steps.
5. **Explain logical flow** – Describe how the function works step by step.

---

## **Documentation: Format to document code - Callbacks.js**
Each function in **callbacks.js** has a **separate file** in this documentation website. Remember to use **docstrings** in the codebase.

### **How to document a function in Callbacks.js:**
- **Each function file is divided into conditions.**
- **Each condition is further divided into smaller conditions (if statements).**
- **For each condition:**
  1. **Include a description of the condition (in the first line).**
  2. **Explain how the logic inside the condition works and its logical flow(in the second line).**

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

## **Deployment/ Installtion Docs**
This section explains how to **install the marketplace** and how to **deploy the marketplace** in Google Cloud Platform.

- [Installation Guide](/docs/DeploymentInstructions/installation.md)
- [Setting up the Server](/docs/documentationInstructions/SetUp.md)

---

By following this documentation, you will gain an in-depth understanding of the **MVA h2h marketplace** and how to work with it effectively.
