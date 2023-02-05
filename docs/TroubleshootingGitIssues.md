# Troubleshooting Git Issues

In the last class, we had several students who could not push there code. If you are getting an error, or git does not respond when you do a `git push`, Here are some articles that might help.

Try resetting your git credentials. For Windows, see [this dirask post](https://dirask.com/posts/Git-git-config-error-could-not-lock-config-file-Permission-denied-Kj825D) and this [Stackoverflow post](https://stackoverflow.com/questions/15381198/remove-credentials-from-git). For those on Mac, see [this Codex article](https://medium.com/codex/git-credentials-on-macos-caching-updating-and-deleting-your-git-credentials-8d22b6126533) or [scroll halfway down this Stackoverflow post](https://stackoverflow.com/questions/15381198/remove-credentials-from-git).

Then try doing a git push and typing your credentials as prompted.

If that doesn't work, try doing a `git push --verbose origin main` or [creating a debugging script to get more information](https://selleo.com/til/posts/m8eirl36cu-debugging-git-pushssh-hanging).
