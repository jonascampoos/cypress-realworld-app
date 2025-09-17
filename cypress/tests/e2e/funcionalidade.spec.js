describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('teste')
    cy.get('#password').type('teste123')
    cy.get('[type=submit]').click()
    cy.get('.css-1xjobie-MuiButtonBase-root-MuiButton-root').click()
    cy.get('#user-list-search-input').type('990-583-8419')
    cy.get('[data-test=user-list-item-WHjJ4qR2R2]').click ()
    cy.get('#amount').type('100')
    cy.get('#transaction-create-description-input').type('pago')
    cy.get('[data-test=transaction-create-submit-payment]').click()
  
  });
});

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
  
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('teste')
    cy.get('#password').type('teste123')
    cy.get('[type=submit]').click()
    cy.get('.css-1xjobie-MuiButtonBase-root-MuiButton-root').click()
    cy.get('#user-list-search-input').type('990-583-8419')
    cy.get('[data-test=user-list-item-WHjJ4qR2R2]').click ()
    cy.get('#amount').type('200')
    cy.get('#transaction-create-description-input').type('pago')
    cy.get('[data-test=transaction-create-submit-payment]').click()
  
  });
});