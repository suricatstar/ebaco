describe("CRUD de Contatos - Agenda EBAC", () => {
  let contatos;

  beforeEach(() => {
    cy.fixture("contatos").then((data) => {
      contatos = data;
    });
    cy.visit("/");
  });

  it("Deve adicionar um novo contato", () => {
    const { nome, telefone } = contatos.contatoTeste;

    cy.adicionarContato(nome, telefone);
    cy.validarContatoExiste(nome);
    
    cy.get('table').should('contain', telefone);
  });

  it("Deve editar um contato existente", () => {
    const { nome, telefone } = contatos.contatoEdicao;
    const { nome: novoNome, telefone: novoTelefone } = contatos.contatoEditado;

    cy.adicionarContato(nome, telefone);
    cy.validarContatoExiste(nome);

    cy.editarContato(nome, novoNome, novoTelefone);

    cy.validarContatoExiste(novoNome);
    cy.get('table').should('contain', novoTelefone);
    cy.validarContatoNaoExiste(nome);
  });

  it("Deve remover um contato", () => {
    const { nome, telefone } = contatos.contatoRemocao;

    cy.adicionarContato(nome, telefone);
    cy.validarContatoExiste(nome);

    cy.removerContato(nome);

    cy.validarContatoNaoExiste(nome);
  });

  it("Deve validar campos obrigatórios", () => {
    cy.get('button').contains('Adicionar').click();
    
    cy.validarCamposObrigatorios();
  });

  it("Deve realizar fluxo completo CRUD", () => {
    const { nome, telefone } = contatos.contatoTeste;
    const { nome: novoNome, telefone: novoTelefone } = contatos.contatoEditado;

    cy.adicionarContato(nome, telefone);
    cy.validarContatoExiste(nome);

    cy.get('table').should('contain', nome);
    cy.get('table').should('contain', telefone);

    cy.editarContato(nome, novoNome, novoTelefone);
    cy.validarContatoExiste(novoNome);

    cy.removerContato(novoNome);
    cy.validarContatoNaoExiste(novoNome);
  });

  it("Deve validar contato com dados inválidos", () => {
    const { nome, telefone } = contatos.contatoInvalido;

    cy.get('#nome').clear().type(nome);
    cy.get('#telefone').clear().type(telefone);
    cy.get('button').contains('Adicionar').click();

    if (nome === "") {
      cy.validarCamposObrigatorios();
    }
  });
});
