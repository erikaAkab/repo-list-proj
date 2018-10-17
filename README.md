# repo-list-proj
Aplicação desenvolvida em angular 6 para listagem de repositórios de uma conta do github

### Testado nos navegadores:
  - Chrome Versão 69.0.3497.100 (Versão oficial) 64 bits
  - Firefox Quantum 62.0.3 (64-bit)
  
#### Rodando localmente a aplicação:
Para rodar a aplicação localmente deve-se ter instalado Node.js e npm que pode ser obtido no site:
https://www.npmjs.com/get-npm

Após a instalação, para rodar a aplicação localmente execute o comando na pasta do projeto:
```sh
$ ng serve -o
```

Pode ser necessário instalar o modulo angular-devkit usando o comando:
```sh
$ npm install --save-dev @angular-devkit/build-angular
```

#### Modulos importados
Módulo para exibição de uma notificação na tela:
```sh
$ npm install vanilla-toast
```
### Rodando lint:
```sh
$ ng lint
```
### Rodando testes unitários:
```sh
$ ng test
```

### Gerando build de produção otimizado:
```sh
$ npm run build
```
