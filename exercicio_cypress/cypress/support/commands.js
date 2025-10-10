// Comando para adicionar contato
Cypress.Commands.add("adicionarContato", (nome, telefone, email) => {
  cy.get('input[placeholder="Nome"]').clear().type(nome);
  cy.get('input[placeholder="E-mail"]').clear().type(email);
  cy.get('input[placeholder="Telefone"]').clear().type(telefone);
  cy.get(".adicionar").click();
});

// Comando para validar se contato existe
Cypress.Commands.add("validarContatoExiste", (nome) => {
  cy.get(".contato").should("contain", nome);
});

// Comando para editar contato
Cypress.Commands.add(
  "editarContato",
  (nomeOriginal, novoNome, novoEmail, novoTelefone) => {
    cy.contains(".contato", nomeOriginal).within(() => {
      cy.get(".edit").click();
    });

    cy.get('input[placeholder="Nome"]').clear().type(novoNome);
    cy.get('input[placeholder="E-mail"]').clear().type(novoEmail);
    cy.get('input[placeholder="Telefone"]').clear().type(novoTelefone);
    cy.get(".alterar").click();
  }
);

// Comando para remover contato
Cypress.Commands.add("removerContato", (nome) => {
  cy.contains('.contato', nome).should('exist');

  cy.contains(".contato", nome).within(() => {
    cy.get(".delete").click();
  });

  cy.wait(500);

  cy.contains('.contato', nome).should('not.exist');
});

// Comando para limpar todos os contatos
Cypress.Commands.add("limparTodosContatos", () => {
  cy.get('body').then(($body) => {
    if ($body.find('.contato').length > 0) {
      cy.get('.contato').each(($contato) => {
        cy.wrap($contato).within(() => {
          cy.get('.delete').click();
        });
      });
    }
  });
});

// Comando para validar que não há contatos
Cypress.Commands.add("validarListaVazia", () => {
  cy.get('.contato').should('not.exist');
});