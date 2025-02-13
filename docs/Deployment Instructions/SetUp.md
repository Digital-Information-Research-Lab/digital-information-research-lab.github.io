# <span class="h1style">Setting up the server:</span>
This page will help you navigate to the right pages, settings, and installations to set up your server correctly. This page is verified by: *Laerk Ndreko*

## <span class="h2style">Initial Navigation</span>
To start, navigate to **console.cloud.com** using an appropriate BU or other authorized account.
- If you are given access to the project, you should be able to see **"empirica-fall-2024"**.
  - If this is not the case, please contact a team lead or supervisor of the research to access.
- On the top-left-hand side, navigate to the three bars, hover over **Compute Engine**, and select **VM Instances**.

---

## <span class="h2style">Server Settings</span>
Now, navigate to **"Create Instance"**. Select **"CREATE VM FROM..."**
- Select **"Marketplace"** and search for **"Ubuntu 22.04 LTS (Jammy)"**.
  - It is **IMPORTANT** that you select this version and not the **Pro** version.
- Launch the virtual operating system.

- Now rename the server to **"(yourname)-h2h-server"**.
    - There is no requirement to what you name your server however it is easy to keep track of:
      - who: started the server.
      - what: the server will host.

- Once that is done, ensure that your server is selected to run with **"E2"** under the **"Machine Configuration"** section.
- **Important** - under **Machine type**:
  - select **High CPU**
  - then select **e2-highcpu-8**
    - **NOTE: If you did this right, the monthly estimate should be "$145.45"**.
 
- Next, under **Identity and API access - Access scopes** select **Allow full access to all Cloud APIs**.

- Next, under **Firewall**, select both **Allow HTTP traffic** AND **Allow HTTPS traffic**.

- **ALL DONE HERE!** Now select "CREATE".
  - Wait for the server to be created and then move on to the next steps.
---
## <span class="h2style">Firewall Settings</span>

- At the top of the page, search for and click **"Firewall"**. Create a new firewall rule.
  - Name it "(yourname)-http-allowall".
    - Enter "Allow all incoming connections to (yourname)'s machines." in the description.
  - Turn on logs.
  - Enter "(yourname)-http-server" in **Target tags**.
  - Enter "0.0.0.0/0" in **Source IPV4 Ranges**.
  - Under **Protocols and ports**, under **Specified protocols and ports**, under **BOTH TCP and UDP** enter "80, 443, 8000".
  - Create!
 
- Navigate back to your vm machine, select it and click edit.
  - Under both "Labels" and "Network Tags", enter **"(yourname)-http-server"**.
  - 


---
## <span class="h2style">SSH and Terminal Instructions</span>
- Now we have to enter the SSH terminal and install the necessary packages.
  - For this to work ensure that any settings on your device, allow pop-ups (including disabling any ad-blockers).

- There should be a button under "SSH", select that and you should have a terminal pop up on your screen.

- Once that is loaded, now we have to install our libraries/packages for this to work. For that to happen we need to initialize an environment.
- We will be using Miniconda. Copy and paste "**wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh**" into your terminal and press enter.
  - Enter the command "**bash Miniconda3-latest-Linux-x86_64.sh**" and hit enter.
  - Now your terminal should be going through Miniconda's terms and conditions (to shortcut this press q).
  - Follow all instructions and select "yes" when prompted to.
  - If the terminal asks for a folder location, you may hit **Enter** or select a folder yourself.

- Once Miniconda is downloaded, enter "**source ~/.bashrc**".
  - You should see a "(base)" environment to the left of your terminal line, if this appears you have taken all of the correct steps!
  - We now have to create and activate our environment, copy and paste these commands into your terminal:
    **conda create --name fake_news_env python=3.9**
    **conda activate fake_news_env**
    **conda install -c conda-forge::nodejs**
    - You may give your environment another name as well.

The `callbacks.js` file is the **core logic handler** for initializing and managing game states in the **Empirica framework**. It defines:
- **Player attributes** for both **producers** and **consumers**.
- **Game rules** that dictate the **economy and player interactions**.
- **Stage progression** that structures each round.
- **Scorekeeping mechanisms** for tracking performance.

It utilizes Empirica's **`ClassicListenersCollector`** to manage game lifecycle events such as:
- **Game Start**
- **Round Transitions**
- **Stage Completions**

---

## <span class="h2style">Variables</span>

### <span class="custom-heading">Explanation</span>

1. **Imported Constants and Modules**:
   - The game **imports multiple constants** from `constants.js`, which store **predefined values** such as:
     - **`productPrice`**
     - **`warrantCost`**
     - **`challengeCost`**
     - **Scoring parameters**
   - Hooks from **`@empirica/core`** allow interaction with **player data** and **game states**.

2. **Player Variable Assignments**:
   - The game initializes **player attributes** using `player.set()`, defining their:
     - **Role** → (`"producer"` or `"consumer"`)
     - **Resources** → (`wallet`, `capital`)
     - **Tracking Metrics** → (`score`, `reviews`, `claims`, etc.)
   - Many variables are stored as **arrays**, allowing the game to **track historical data** across multiple rounds.

---

## <span class="h2style">Functions</span>
This is the list of functions that are defined in this file:

- [Empirica.onGameStart()](./onGameStart().md)
- [Empirica.onRoundStart()](./onRoundStart().md)
- [Empirica.onStageEnded()](./onStageEnded().md)

Click on any of these functions to view **detailed documentation** on their role in game execution.

---

## <span class="h2style">Logical Flow</span>

1. **Game Initialization (`onGameStart`)**
   - Defines **game parameters**.
   - **Assigns players** as **producers or consumers**.
   - Sets **initial attributes** for each player.

2. **Round Start (`onRoundStart`)**
   - **Resets player variables** for the new round.
   - Updates **financial resources, reviews, and claims**.
   - Ensures producers and consumers **begin fresh**.

3. **Stage Completion (`onStageEnded`)**
   - Executes **core game logic** at the **end of each stage**.
   - Processes **transactions, challenges, reviews, and scoring**.
   - Updates **player history and market conditions**.
