describe('My first Cypress Tests',() => {
    //this is my workbook for doing cypress stuff. I will also use it as a cheat sheet in later projects

    it('First Test', () => {
        cy.visit("http://cypress.io")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="dropdown-product"]').click();
        /* ==== End Cypress Studio ==== */
    })
    //The base URL has been set in cypress.config.js
    //so this just opens the page
    it('homepage', () => {
        cy.visit("/")
    })

    //This just opens the page for now
    it('ab test', ()=>{
        cy.visit("abtest")
    })

    //this only opens the page for now
    it('add and remove elements', ()=>{
        cy.visit("add_remove_elements/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('button').click();
        cy.get('.added-manually').click();
        /* ==== End Cypress Studio ==== */
    })
    
    //A very simple login form good for practice. this will fail the login
    it('Text Boxes - click submit and error', ()=>{
        cy.visit("login")

        //very cool. some commands generated by cypress kind of like Selenium Recorder
        /* ==== Generated with Cypress Studio ==== */
        //Lets enter some text
        //unnecessary cruft from studio. left here for education cy.get('#username').clear('B');
        cy.get('#username')
            .type('Booger');
        //unnecessary cruft from studio. left here for education cy.get('#password').clear('M');
        cy.get('#password')
            .type('Mona');
        //lets submit the credentials
        cy.get('.fa')
            .click();
        /* ==== End Cypress Studio ==== */
        //this test page will always fail no matter what
        cy.get('#flash'); //this is the red banner error
        // verify the error text
        cy.contains('Your username is invalid!');
        //lets close the red error alert banner
        cy.get('.close')
            .click( { force: true }); //forced because an image element is overlaying it
        //lets make sure its gone
        cy.get('#flash')
            .should('not.exist');
    })
    //A very simple login form good for practice. It will fail the login
    it('Text Boxes - Enter to submit and error', ()=>{
        cy.visit("login")
        //very cool. some commands generated by cypress kind of like Selenium Recorder
        /* ==== Generated with Cypress Studio ==== */
        //Lets enter some text
        //unnecessary cruft from studio. left here for education cy.get('#username').clear('B');
        cy.get('#username')
            .type('Booger');
        //unnecessary cruft from studio. left here for education cy.get('#password').clear('M');
        cy.get('#password')
            .type('Mona{Enter}');
        //lets submit the credentials
        //cy.get('.fa').click();
        /* ==== End Cypress Studio ==== */
        //this test page will always fail no matter what
        cy.get('#flash'); //this is the red banner error
        // verify the error text
        cy.contains('Your username is invalid!');
        //lets close the red error alert banner
        cy.get('.close')
            .click( { force: true }); //forced because an image element is overlaying it
        //lets make sure its gone
        cy.get('#flash')
            .should('not.exist');
    })
    //A very simple login form good for practice. It will Pass the login
    it('Text Boxes - Enter to submit and succeed', ()=>{
        cy.visit("login")
        //very cool. some commands generated by cypress kind of like Selenium Recorder
        /* ==== Generated with Cypress Studio ==== */
        //Lets enter some text
        //unnecessary cruft from studio. left here for education cy.get('#username').clear('B');
        cy.get('#username')
            .type('tomsmith');
        //unnecessary cruft from studio. left here for education cy.get('#password').clear('M');
        cy.get('#password')
            .type('SuperSecretPassword!{Enter}');
        //lets submit the credentials
        //cy.get('.fa').click();
        /* ==== End Cypress Studio ==== */
        //this test page will always fail no matter what
        cy.get('#flash'); //this is the green banner success
        // verify the Success text
        cy.contains(' You logged into a secure area!');
        //lets close the green alert banner
        cy.get('.close')
            .click( { force: true }); //forced because an image element is overlaying it
        //lets make sure its gone
        cy.get('#flash')
            .should('not.exist');
        //now we need to logout
        /* ==== Generated with Cypress Studio ==== */
        //cy.get('.icon-2x').click();//I dont like the name of that button looks like studio goes for the first thing it can get. good thing to remember
        cy.get('.icon-signout')
            .click();
        /* ==== End Cypress Studio ==== */
        //now lets close the banner
        cy.get('.close')
            .click( { force: true }); //forced because an image element is overlaying it
        //lets make sure its gone
        cy.get('#flash')
            .should('not.exist');
    })
    
})




