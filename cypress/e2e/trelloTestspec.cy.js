describe('My first Cypress Tests',() => {
    //this is my workbook for doing cypress stuff. I will also use it as a cheat sheet in later projects
    //This baseurl was global in the cypress config but Im now adding tests for another domain
    //so I will put the baseurl for these tests here
    before(() => {
        Cypress.config('baseUrl','http://localhost:3000');
    })
    //validate initial state
    //Im not really good at getting cypress to go deep in the dom
    //So I will add more validations as I learn about them
    it('homepage initial state validation', () => {
        cy
        .visit("/");

        cy.get('.Nav')
            .should("be.visible")
        
        cy.get('.Nav_logo')
            .should("be.visible")

        cy.get('[data-cy="login-menu"]')
            .should("be.visible")
            .should("have.text", "\n        Log in\n      ")

        cy.get(".background_title")
            .should("be.visible")
            .contains("My Boards")//probably not a great validation. But I havent figured out how to get a node data = text to work yet. I'll probably kick myslef when I figure it out

        cy.get('[data-cy="create-board"]')
            .should("be.visible")
        
        cy.get('[data-cy="create-board"]')
            .should("be.visible")
        })
    it('Initial homepage but now we do stuff', () => {
        cy.visit("/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="create-board"]')
            .click()
        cy.get('[data-cy="new-board-input"]')
            .type('I create my first board{enter}');
        cy.get('[data-cy="add-list"]')
            .click();
        /* ==== End Cypress Studio ==== */
    })
    it('Clear the board - test cleanup', () => {
        cy.visit("/")
        /*
        this is an example of me overthinking it. 
        I needed to bring up a hidden menu that let me clear the data created by tests
        I spent a good hour trying to get F2 to play and reveal the menu. 
        but when I finally poked through the DOM, I found that there was
        just a hidden flag. so Force: True was all I really needed. 
        s
        cy.get('body').trigger('keydown', { keyCode: 113, which: 113 });
        */
        cy.get('#tools > :nth-child(1)')
            .click({force: true}) 


    })


})