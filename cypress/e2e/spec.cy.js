import 'cypress-axe';

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}


describe('template spec', () => {
  it('passes', () => {
    const testUrl = Cypress.env('CYPRESS_TEST_URL');
    cy.log(`test_url: ${testUrl}`);
    cy.visit(testUrl)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})