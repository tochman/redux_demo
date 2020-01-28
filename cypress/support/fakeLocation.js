const fakeLocation = options => ({
  onBeforeLoad(win) {
    const fakeLocation = {
      coords: {
        latitude: options.latitude,
        longitude: options.longitude
      }
    }

    cy.stub(win.navigator.geolocation, 'getCurrentPosition')
      .callsFake(object => {
        return object(fakeLocation)
      })
  }
})

export default fakeLocation