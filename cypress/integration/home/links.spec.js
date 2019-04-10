const LOCALHOST = `http://localhost:3000`

context('Home Page - Links', () => {
  beforeEach(() => {
    cy.visit(LOCALHOST)
  })

  it('banner manga', () => {
    cy.get('.cover').within($cover => {
      cy.get('a').within($link => {
        cy.get('img').click()
      })
    })
  })

  it('test read more toggle', () => {
    cy.get('.jsx-1o117041653')
      .contains('read more')
      .click()

    cy.get('.jsx-1117041653')
      .contains('read less')
      .click()
  })
})
