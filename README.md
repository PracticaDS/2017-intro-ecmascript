# 2017-intro-ecmascript

Introducción a EcmaScript: snippets de código

[Ver diapositivas](https://docs.google.com/presentation/d/1W6kW-uyfv89-3OcOOlrKKrZYqQxKnNZMVxUKT1i8N2Y/edit?usp=sharing)

# Setup de Node

Se requiere tener instalado node. Una buena forma es a través de [nvm](https://github.com/creationix/nvm) que permite tener varias versiones de node al mismo tiempo (similar a rvm para ruby).
En la página indica como instalarlo.

Luego 

```bash
nvm install v9
```

Para instalar node v9 (última estable)

Luego para configurarlo como default

```bash
nvm alias default v9
```

o, cada vez que quieran cambiar o usar esa versión en particular

```bash
nvm use v9
```

# Yarn / NPM

Luego vamos a instalar "yarn", un gestor de paquetes/dependencias
Para eso seguir estas instrucciones [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

# Setup del proyecto

Ahora sí, una vez que clonamos este repo, vamos a instalar la dependencias

```bash
yarn install
```

Va a tardar un rato.

# Ejecutar scripts

Para ejecutar un script se puede hacer así

```bash
yarn babel objetos/objects.js   # por ejemplo, o cualquier otro archivo del proyecto
```

# Tests

El proyecto también tiene tests automáticos en la carpeta "tests". Y se pueden correr con

```
yarn test
```
