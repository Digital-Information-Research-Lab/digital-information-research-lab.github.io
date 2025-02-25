---
sidebar_position: 5
---
# Installation Guide

Follow the steps below to **install and run the Empirica experiment** on your local system. If the standard [Empirica installation instructions](https://docs.empirica.ly/getting-started/setup) are not sufficient, use this guide.

---

## **Prerequisites for Running an Empirica Experiment (OSX)**

1. Try to clone and run the experiment from github: git clone git@github.com:Digital-Information-Research-Lab/take-home-summer-assignment.git (see [how to create public keys](https://docs.google.com/document/d/1T7Ha5S31H4mF5hlIpHFNMGZa5WqQINp88Hf3SHtJhkk/edit?tab=t.0#bookmark=kix.fugj8x5vvpr) since that might make your life easier and ensure you have provided Swapneel with your github username)

2. Node.js - this is the language the application is written in and that you will be developing the extended experiments in: [Install Node.js and npm using Homebrew on OS X](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)

    a. `brew install npm` works for me since I have installed the [Homebrew package manager](https://brew.sh/) for mac.

    b. If you don’t want to use Homebrew then there are other ways to install node.js through the [Anaconda](https://anaconda.org/conda-forge/nodejs) package manager, if you have used this in the past.

3. Empirica

    a. Install Empirica following the instructions in [Setup - Empirica v2 Docs](https://docs.empirica.ly/getting-started/setup)

    b. REMEMBER: you need to `cd client && npm install` and `cd server && npm install` in order to install the packages in the `package.json` file in both the client/ and server/ directories.

    c. Try [creating](https://docs.empirica.ly/getting-started/quick-start) and [running](https://docs.empirica.ly/getting-started/quick-test) a sample experiment on your machine following the instructions.

    d. If things don’t work because of a Meteor error then follow the instructions to [Install Meteor.js](https://docs.meteor.com/install) via the Node package manager (npm)

4. Note: If you have an issue installing the most recent version of Empirica due to some GLIBC issues, please try to use a virtual machine with a recent version of Ubuntu (22.04 LTS) or Debian (12) which should have the updated drivers. You could also install a slightly older Empirica version so you can run it on your local system with less work going into this.

## **Installation on Windows:** ##

1. Download and install [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install).

2. Install miniconda by finding the latest Linux installer from [this page](https://docs.conda.io/projects/miniconda/en/latest/).

    a. Inside a WSL terminal, use command:
    
    wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

    b. Then run:
    
    `bash Miniconda3-latest-Linux-x86_64.sh`

    And follow the instructions to install and initialize the conda environment on your system in Linux (initializing is the process of setting a path so that every time you open Linux, you launch a conda base environment to work out of. Ideally you need a separate conda environment for each project so let’s create one now).

3. Create a conda environment for your project: `conda create -n empirica_env python=3.9`

    a. This creates a named empirica environment for your system.

    b. Activate the environment after it's installed: `conda activate empirica_env`

4. Now install nodejs inside the conda environment: `conda install nodejs -c conda-forge`

## **Optional Step: Set up your Public Key on Github** ##

1. Follow this tutorial for generating a key: [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

    i. Or just run the command ssh-keygen and it will generate one for you – follow the defaults saving it to the id_rsa file and setting a password of your choice for it – REMEMBER THIS PASSWORD!!!

    ii. Basically, you will generate a local SSH key from within WSL that you will use to tell github that you have permissions to access this private repository. The tutorial will walk you through adding it to ssh-agent but you don’t need to do that right now.

2. Add this key to Github so github knows it exists. Follow that part in the tutorial linked above.








