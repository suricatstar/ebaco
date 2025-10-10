describe("CRUD de Contatos", () => {
  let contatos;

  beforeEach(() => {
    cy.fixture("contatos").then((data) => {
      contatos = data;
    });
    cy.visit("/");
  });

  it("LIMPEZA - remover todos os contatos existentes", () => {
    cy.visit("/");
    cy.limparTodosContatos();
    cy.validarListaVazia();
  });

  it("deve adicionar um novo contato", () => {
    const { nome, email, telefone } = contatos.contatoTeste;

    cy.adicionarContato(nome, telefone, email);
    cy.validarContatoExiste(nome);

    cy.contains(".contato", nome).should("contain", email);
    cy.contains(".contato", nome).should("contain", telefone);
  });

  it("deve editar um contato existente", () => {
    const { nome, email, telefone } = contatos.contatoEdicao;
    const {
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone,
    } = contatos.contatoEditado;

    cy.adicionarContato(nome, telefone, email);
    cy.validarContatoExiste(nome);

    cy.editarContato(nome, novoNome, novoEmail, novoTelefone);

    cy.validarContatoExiste(novoNome);
  });

  it("Deve remover um contato", () => {
    const { nome, email, telefone } = contatos.contatoRemocao;

    cy.adicionarContato(nome, telefone, email);
    cy.validarContatoExiste(nome);

    cy.removerContato(nome);
    cy.contains("li", nome).should("not.exist");
  });
 
});
