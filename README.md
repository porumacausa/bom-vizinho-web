# Bom Vizinho website

[Vê aqui um video de introdução da ideia](https://youtu.be/NECdIh1b1fA)

Se já és membro da equipa no GitHub, junta-te à conversa no Gitter no [canal Geral](https://gitter.im/porumacausa) ou então passa pelo [canal de Web (acesso público)](https://gitter.im/porumacausa/web)

Se ainda não és membro da [equipa Código por uma Causa](https://github.com/orgs/porumacausa/people), deixa-nos uma [nota nos issues com o teu user to GitHub](https://github.com/porumacausa/brainstorming/issues) para que te possamos adicionar.

## Development environment setup

Please fork the project on GitHub and clone your repository copy.

```Shell
# clone your repository copy
git clone https://github.com/<user>/bom-vizinho-web.git

# add your repository copy as origin
git remote add origin https://github.com/<user>/bom-vizinho-web.git

# add original repository as upstream
git remote add upstream https://github.com/porumacausa/bom-vizinho-web.git
```

Make changes in a branch and open a Pull Request to merge back into the project original repository. You should not be making changes on the master branch.

If you setup your copy as **origin** and the original repository as **upstream** it is easier to manage merges.

You can read more details about [forks](https://help.github.com/articles/about-forks/), [pull requests](https://help.github.com/articles/using-pull-requests/) and [upstream](https://help.github.com/articles/merging-an-upstream-repository-into-your-fork/) on GitHub.


You will need to have [Node.js](https://nodejs.org/) and [Bower](http://bower.io/) installed on the system already.
The recommended way if using [nvm](https://github.com/creationix/nvm) so you can manage multiple version of node more easily.

```Shell
# install project build tools dependencies
npm install

# install javascript package dependencies
bower install

# start web server and open site
npm start
```

Optional: if you are using Visual Studio Code, you will also need [tsd](http://definitelytyped.org/tsd/) installed to provide IntelliSense for Javascript code.

```Shell
# install typescript definition manager on the system
npm install -g tsd

# install project typescript definition files
tsd install
```
