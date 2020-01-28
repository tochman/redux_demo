import fakeLocation from '../support/fakeLocation'

describe('Visit from various locations', () => {


  it('Kiruna', () => {
    cy.visit('/', fakeLocation({latitude: 67.855721, longitude: 20.225130}))
    cy.get('#location-display')
    .should('contain', 'Hello visitor from Kiruna')
    // .and('contain', "You are sailing at 67°51'20'' N 20°13'30'' E")
  })

  it('Paris', () => {
    cy.visit('/', fakeLocation({latitude: 48.85, longitude: 2.35}))
    cy.get('#location-display')
    .should('contain', 'Hello visitor from Paris')
    // .and('contain', "You are sailing at 67°51'20'' N 20°13'30'' E")
  })
});