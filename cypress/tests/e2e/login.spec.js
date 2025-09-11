
describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('teste')
    cy.get('#password').type('teste123')
    cy.get('[type=submit]').click()

  });
});