---
sidebar_position: 5
---
# Installation Guide

Follow the steps below to **install and run the Empirica experiment** on your local system. If the standard [Empirica installation instructions](https://docs.empirica.ly/getting-started/setup) are not sufficient, use this guide.

---

## **Prerequisites for Running an Empirica Experiment (OSX)**

1. Clone your experiment from GitHub using the command:
```bash
git clone [repo]
```

2. Ensure Node.js is installed on your device. This is the language the application is written in and that you will be developing the extended experiments in: [Install Node.js and npm using Homebrew on OS X](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
    a. For Macbook users, use [Homebrew](https://brew.sh) to install Node.js using:
```bash
brew install npm
```

   b. If you don’t want to use Homebrew then there are other ways to install node.js through the [Anaconda](https://anaconda.org/conda-forge/nodejs) package manager.

3. Empirica

   a. Install Empirica following the instructions in [Setup - Empirica v2 Docs](https://docs.empirica.ly/getting-started/setup)

   b. After cloning your experiment, you need to install your modules in `package.json` for both your client and server directories. You can do all this in one command.
```bash
cd client && npm i && cd server && npm i
```
   c. Optional: try [creating](https://docs.empirica.ly/getting-started/quick-start) and [running](https://docs.empirica.ly/getting-started/quick-test) a sample experiment on your machine following the instructions. 
   
   d. If things don’t work because of a Meteor error then follow the instructions to [Install Meteor.js](https://docs.meteor.com/install) via the Node package manager (npm)

4. Note: If you have an issue installing the most recent version of Empirica due to some GLIBC issues, please try to use a virtual machine with a recent version of Ubuntu (22.04 LTS) or Debian (12) which should have the updated drivers. You could also install a slightly older Empirica version so you can run it on your local system with less work going into this.

## **Installation on Windows:** ##

1. Download and install [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install).

2. Install Miniconda by grabbing the latest Linux installer from [this page](https://docs.conda.io/projects/miniconda/en/latest/).

   a. Inside a WSL terminal, run:
   ```bash
   wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
   ```

   b. Then install it with:
   ```bash
   bash Miniconda3-latest-Linux-x86_64.sh
   ```
   Follow the prompts to initialize conda (this sets up your PATH so that your shell starts with the `base` environment activated).

3. Create a project-specific conda environment:
   ```bash
   conda create -n empirica_env python=3.9
   ```
   a. This makes an environment named `empirica_env`.  
   b. Activate it:
   ```bash
   conda activate empirica_env
   ```

4. Install Node.js inside that environment:
   ```bash
   conda install nodejs -c conda-forge
   ```

## **Running the Empirica Experiment** ##

To run the Empirica experiment, simply run:
   ```bash
   empirica
   ```

### Troubleshooting

   1. To reload settings, delete the `tajriba` state file:
   ```bash
   rm .empirica/local/tajriba.json
   ```

   2. If Empirica still doesn’t start, ensure no processes are blocking port 3000:
   ```bash
   lsof -i :3000 -t | xargs kill -9
   ```
  
## **Optional Step: Set up your SSH Public Key on GitHub** ##

1. Generate a new SSH key (or follow GitHub’s guide [here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)):
   ```bash
   ssh-keygen
   ```
   - Accept the defaults (it will save to `~/.ssh/id_rsa`).  
   - Choose and remember a passphrase.

2. Add your new key to your GitHub account per the linked tutorial so you can access private repos via SSH.
