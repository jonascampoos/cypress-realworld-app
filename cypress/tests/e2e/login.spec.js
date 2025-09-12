const { should } = require("chai");

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('teste')
    cy.get('#password').type('teste123')
    cy.get('[type=submit]').click()
  });
});

   describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('test')
    cy.get('#password').type('test12')
    cy.get('[type=submit]').click()
    cy.get('.MuiAlert-message').should('have.text','Username or password is invalid')
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('[data-test=signup]'). click()
    cy.get('#firstName').type('lucas')
    cy.get('#lastName').type('souza')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin12')
    cy.get('#confirmPassword').type('admin12')
    cy.get('[type=submit]'). click ()
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

     cy.visit('http://localhost:3000/signin')
    cy.get('[data-test=signup]'). click()
    cy.get('#firstName').type('lucas')
    cy.get('#lastName').click()
    cy.get('#username').type('admin')
    cy.get('#password').type('admin12')
    cy.get('#confirmPassword').type('admin12')
    cy.get('#lastName-helper-text').should('have.text','Last Name is required')
  });
});