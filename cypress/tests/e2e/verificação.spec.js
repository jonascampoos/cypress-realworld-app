describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('teste')
    cy.get('#password').type('teste123')
    cy.get('[type=submit]').click()
    cy.get('[data-test=nav-personal-tab]').click()
    cy.get('.css-r6xdvf-MuiListSubheader-root').should('have.text', 'Personal')

  });
});

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {

    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type('teste')
    cy.get('#password').type('teste123')
    cy.get('[type=submit]').click()
    cy.get('[data-test=nav-personal-tab]').click()
    cy.get('[data-test=transaction-list-filter-date-range-button]').click()
    cy.get('.react-calendar__tile').eq(14).click().click()
    cy.get('.css-mpyo7s-MuiTypography-root').should('have.text', 'No Transactions')

  });
});