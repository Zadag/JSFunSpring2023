# JavaScript Fundamentals

**[CanCode Communities Class](https://cancode.org/)**

**Spring 2023**

This is the git repository for the class. It will be updated on a class by class basis.

You will submit your assignments by doing pull requests. You will need to create a Github account if you do not have one already. Fork this repository by clicking on the _Fork_ button. Then clone your forked repository with this command, replacing YOUR-USERNAME with your Github username:

```bash
git clone https://github.com/YOUR-USERNAME/JSFunSpring2023.git
```

Add the original repository as a remote to your forked repository:

```bash
cd JSFunSpring2023
git remote add upstream https://github.com/AlbanyCanCodeCourses/JSFunSpring2023.git
git remote -v
# You should see your upstream set as https://github.com/AlbanyCanCodeCourses/JSFunSpring2023.git
git config pull.rebase false
```

If git asks you to signin with your username and password, then you will need to follow this guide on [generating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic). Give yourself access to all available scopes. You username will be your Github username and the password will be the token.

Finally, to run the tests for the exercises, you will need to install testing libraries:

```bash
npm install
```

#### On Making Pull Requests

Whenever you are ready to submit your work, you will need to [commit your work, push to your own repository, and then make a pull request](docs/SubmittingAssignments.md).

## Resources

- Installation Guide: [Mac](docs/InstallationGuideMac.md) | [Windows](docs/InstallationGuideWindows.md) | [Linux](docs/InstallationGuideLinuxAndNVM.md)
- JavaScript - [MDN](https://developer.mozilla.org/en-US/) (Unofficial JavaScript Manual) | [Tutorials](https://javascript.info/)
- Command Line: [Unix Crash Course](https://itnext.io/unix-command-line-crash-course-453e409d62f5) | [Unix Cheat Sheet](https://www.guru99.com/linux-commands-cheat-sheet.html) | [Unix Tutorial](http://www.ee.surrey.ac.uk/Teaching/Unix/) | [NPM Guide](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
- Git: [Git Commands for Beginners](http://rogerdudler.github.io/git-guide/) | [First Contributions Tutorial](https://github.com/firstcontributions/first-contributions)
- Visual Studio Code: [Mac Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf) | [Windows Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) | [Getting Started](https://code.visualstudio.com/docs/getstarted/introvideos) | [How to use Quokka.js](https://debug.to/1441/quokka-js-extension-for-visual-studio-code)
