const el2 = require('./elements').ELEMENTS2

class MenuLateral {
    visualizarLogo(){
        cy.get(el2.logoMenu).should('be.visible')

        //cy.get('.oxd-brand-banner').should('be.visible')
    }

    abrirMenu(){
        cy.get(el2.openMenu).click()

        //cy.get('[type="button"]').click() //para abrir
        //cy.get('[type="button"]').click() // para fechar
    }

    menuBusca(){
        cy.get(el2.searchMenu).type('1')
        .clear()
        .should('have.value', '')

        //cy.get('[placeholder="Search"]').type('Admin')
        //cy.get('[placeholder="Search"]').type('PIM')...
        
        cy.get(el2.searchMenu).type('a')
        .clear()
        .should('have.value', '')
        
        cy.get(el2.searchMenu).type('Admin')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('PIM')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Leave')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Time')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Recruitment')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('My Info')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Performance')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Dashboard')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Directory')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Maintenance')
        .clear()
        .should('have.value', '')

        cy.get(el2.searchMenu).type('Buzz')
        .clear()
        .should('have.value', '')
    }

}

export default new MenuLateral();