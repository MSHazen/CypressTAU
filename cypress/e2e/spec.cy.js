describe('My first Cypress Tests',() => {
    it('First Test', () => {
        cy.visit("http://cypress.io")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="dropdown-product"]').click();
        /* ==== End Cypress Studio ==== */
    })

    it('homepage', () => {
        cy.visit("/")
    })

    it('ab test', ()=>{
        cy.visit("abtest")
    })

    it('add and remove elements', ()=>{
        cy.visit("add_remove_elements/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('button').click();
        cy.get('.added-manually').click();
        /* ==== End Cypress Studio ==== */
    })
    
    it('Text Boxes', ()=>{
        cy.visit("login")
        /* ==== Generated with Cypress Studio ==== */
        //Lets enter some text
        //unnecessary cruft from studio. left here for education cy.get('#username').clear('B');
        cy.get('#username').type('Booger');
        //unnecessary cruft from studio. left here for education cy.get('#password').clear('M');
        cy.get('#password').type('Mona');
        //lets submit the credentials
        cy.get('.fa').click();
        /* ==== End Cypress Studio ==== */
        //this test page will always fail no matter what
        cy.get('#flash'); //this is the red banner error
        //lets close the red error alert banner
        cy.get('.close').click( { force: true }); //forced because an image element is overlaying it
        //lets make sure its gone
        cy.get('#flash').should('not.exist');
    })
})




