# Installation Guide - Mac

## What You Will Be Installing

1. Microsoft Teams
2. Xcode
3. Homebrew
4. Git and Github
5. Node.js (latest LTS version) and NPM Packages
6. Visual Studio Code (Recommended) and Extensions
7. Chrome or Firefox (Recommended)

We are going to install software over the command line, so before starting, open your terminal window. (You can open it by pressing `command+space` and searching for _terminal_).

## Microsoft Teams

Before class began, you should have received emails and training from CanCode Communities about on how to install, setup, and use Microsoft Teams.

You will need to give Teams permissions for _Screen Recording_, because we ask students to share their screens during class. [Here is how you can enable this on Big Sur and Catalina.](https://www.marquette.edu/microsoft-teams/teams-macos-access.php)

## Xcode

Xcode can be found in the App Store. It will take around 50 minutes to install, so please install ASAP.

Once Xcode is complete, go to your terminal and install the command line tools:

```bash
xcode-select --install
```

## Homebrew

[Homebrew](https://brew.sh/) is a package manager for Mac, meaning that it will help make installing and managing a lot of command line software easier. We will be installing Node.js with Homebrew to avoid permission issues.

If you already have Homebrew installed or if you are not sure whether you have it installed, type `brew -v` in your terminal. If you see a response like _Homebrew 3.6.20_, then you have it installed. Update homebrew with `brew update` and then you can skip ahead to the next section. If you get a _command not found_ error, you will need to install Homebrew.

To install Homebrew, type this in your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Hit enter when the installation prompts you to hit enter. At some point, you may be requested to enter your password. The password is the same password you use to login with your computer.

Once installed, type `brew -v` to confirm that everything worked. As a safe measure, type `brew doctor`. You should see _Your system is ready to brew_.

Type `echo $PATH`. Make sure that _/usr/local/bin_ is somewhere in the response. If it is not, then type:

```bash
export PATH="/usr/local/bin:$PATH"
```

## Git and Github

Git is version control software. It is used for sharing code, combining team members' code and managing different versions of your code.

You will need to [create a Github account](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) if you do not have one.

If you are not sure whether you have it installed, type `git --version` in your terminal. If you see output like this - _git version 2.39.1_ - then congratulations! You already have git installed and you can skip ahead to the next section.

To install git, type this in your terminal:

```bash
brew install git
brew tap microsoft/git
brew install --cask git-credential-manager-core
```

When it's finished, type `git --version` to confirm that it has installed.

## Node.js and NPM Packages

Node.js is a JavaScript runtime engine. It allows you to run JavaScript programs outside of Chrome, Safari, Edge or another web browser.

You will need to have the latest LTS version of Node installed as of February 2023 (18.x). If you already have Node.js installed, type `node -v` in your terminal. If you do not have the latest version, you can do one of the following to things:

1. [Upgrade Node.js whatever whatever you originally installed Node.js with.](https://flaviocopes.com/how-to-update-node/) If you have Node.js projects on your computer and you wish to maintain them, this could break your existing projects.
2. Install multiple version of Node.js on your computer with NVM. See the _Node Version Manager (NVM)_ section of the [Linux Installation Guide](InstallationGuideLinuxAndNVM.md).

If you do not have Node.js installed, type this is your terminal:

```bash
brew install node@18
```

When it’s finished, type `node -v` to confirm that it is now installed.

You should also update NPM. You can update it with:

```bash
npm install -g npm@latest
```

### ESLint

ESLint is a linter, meaning that it will point out potential errors in real-time while you are typing in a code editor like Visual Studio Code.

To install ESLint, type:

```bash
npm install -g eslint
```

When it’s finished, type `eslint -v` in your terminal to confirm it is now installed.

## Visual Studio Code (Recommended) and Extensions

Visual Studio Code is an IDE, which is an intelligent code editor. We will be teaching with Visual Studio Code and highly recommend that you use it too. If you are experienced with programming and the command line, and you believe that you can translate whatever we teach you in Visual Studio Code to your editor of choice, you may opt for another editor, but we will not be able to help you if problems arise.

To install, go to https://code.visualstudio.com and click on the _Download Mac Universal_ dropdown and select the _Stable_ version.

When it finishes downloading, double click on the downloaded ZIP file and move Visual Studio Code from your Downloads folder to your Applications folder. You many need to enter your password.

Open Visual Studio Code.

If you see this security warning at any time during our class, click on _Open_.

![Do you trust the authors of these files](install-screens/vscode-security-warning.png)

### Adding Visual Studio Code to Your Path Variable

You should configure your computer so that you can open Visual Studio Code via the terminal. Press `command+shift+p`, search for _shell command_ and click on _Shell Command: Install 'code' command in PATH_.

![](install-screens/vscode-mac-path.png)

### Configuring Git to Open in Visual Studio Code

You should have a terminal open in the bottom panel of the screen like this. (If you do not, press `control+ ~` to open it).

![Mac Terminal](install-screens/terminal-mac.png)

Click on it and enter the following:

```bash
git config --global core.editor "code --wait"
git config --global -e
```

Restart Visual Studio Code.

### ESLint Extension

Open the Extensions tab on the left, search for _ESLint_ and install _ESLint_.

![](install-screens/vscode-eslint.png)

Once its installed, the _Install_ button may have transformed into a _Reload_ button. If you see _Reload_, click on it.

### Quokka.js

[Quokka.js](https://quokkajs.com/docs/?editor=vsc) is a sandbox that lets you play with JavaScript inside Visual Studio Code and other popular code editors. Search for _Quokka_ in the Extensions tab on the left and install _Quokka.js_. Once its installed, click on _Reload_ if necessary.

If Quokka prompts you to go Pro, select _'Community' features only_.

![](install-screens/vscode-quokka-prompt.png)

### Prettier Extension (Optional)

Prettier automatically formats your code and you can configure it to format your code whenever you save a file. Using this is optional for now but we will require it for group projects.

If you would like to use prettier, search for _Prettier_ in the Extensions tab on the left and install _Prettier - Code formatter_. Once its installed, click on _Reload_ if necessary.

You can now adjust Visual Studio's settings so that it will format on save and will play nicely with Prettier's defaults. Press `command+shift+p,` search for _settings_ and click on _Preferences: Open Settings (JSON))_.

![](install-screens/settings-search.png)

Paste the following into the JSON file. Do not overwrite any settings that you already have.

```json
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
```

## Chrome or Firefox (Recommended)

You should use any modern browser that has good Developer Tools available. (In other words, not Internet Explorer). We recommend Chrome because we will be demonstrating Chrome's tools in class. Firefox is also a great choice.

- [Chrome](https://www.google.com/chrome/)
- [Firefox](https://www.mozilla.org/en-US/firefox/)
