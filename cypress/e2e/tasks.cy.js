/// <reference types="cypress" />

describe('tasks', () => {
    it('should add a new task', () => {
        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: {
                name: 'Read a book'
            }
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:3000')
        
        cy.get('input[placeholder="Add a new Task"]').type('Read a book')
        cy.contains('button', 'Create').click()
    
        cy.contains('main div p', 'Read a book').should('be.visible')
    })
})