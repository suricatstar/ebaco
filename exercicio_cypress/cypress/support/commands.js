// Comando para adicionar contato (apenas nome e telefone)
Cypress.Commands.add("adicionarContato", (nome, telefone) => {
  cy.get('#nome').clear().type(nome);
  cy.get('#telefone').clear().type(telefone);
  cy.get('button').contains('Cadastrar').click();
});

// Comando para validar se contato existe na tabela
Cypress.Commands.add("validarContatoExiste", (nome) => {
  cy.get('table').should('contain', nome);
});

// Comando para editar contato
Cypress.Commands.add("editarContato", (nomeOriginal, novoNome, novoTelefone) => {
  // Procura pela linha da tabela que contém o nome original
  cy.contains('tr', nomeOriginal).within(() => {
    cy.get('button').contains('Editar').click();
  });

  // Preenche os novos dados
  cy.get('#nome').clear().type(novoNome);
  cy.get('#telefone').clear().type(novoTelefone);
  cy.get('button').contains('Alterar').click();
});

// Comando para remover contato
Cypress.Commands.add("removerContato", (nome) => {
  // Procura pela linha da tabela que contém o nome
  cy.contains('tr', nome).within(() => {
    cy.get('button').contains('Excluir').click();
  });
});

// Comando para validar que contato não existe mais
Cypress.Commands.add("validarContatoNaoExiste", (nome) => {
  cy.get('table').should('not.contain', nome);
});

// Comando para validar campos obrigatórios
Cypress.Commands.add("validarCamposObrigatorios", () => {
  cy.get('#nome').should('be.visible');
  cy.get('#telefone').should('be.visible');
});
