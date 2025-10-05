# Testes Automatizados - Agenda de Contatos EBAC

Este projeto contém testes automatizados usando Cypress para a aplicação de agenda de contatos.

## Instalação

```bash
npm install
```

## Executar Testes

### Modo Interativo
```bash
npm run cypress:open
```

### Modo Headless
```bash
npm run cypress:run
```

## Funcionalidades Testadas

- ✅ Inclusão de contatos
- ✅ Alteração de contatos  
- ✅ Remoção de contatos

## Estrutura do Projeto

```
cypress/
├── e2e/
│   └── crud-contatos.cy.js
├── fixtures/
│   └── contatos.json
└── support/
    ├── commands.js
    └── e2e.js
```