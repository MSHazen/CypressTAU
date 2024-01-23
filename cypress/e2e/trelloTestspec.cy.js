describe('My first Cypress Tests',() => {
    //this is my workbook for doing cypress stuff. I will also use it as a cheat sheet in later projects
    //This baseurl was global in the cypress config but Im now adding tests for another domain
    //so I will put the baseurl for these tests here
    before(() => {
        Cypress.config('baseUrl','http://localhost:3000');
    })
    //validate initial state
    it('homepage', () => {
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


})