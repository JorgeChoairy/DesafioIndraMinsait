const el = require('./elements').ELEMENTS

class Login {
    acessarLogin(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    preencherLogin(){
        cy.get(el.user).type('Admin')
        cy.get(el.password).type('admin123')
        cy.get(el.buttonLogin).click()
    }

    preencherLoginUserErrado(){
        cy.get(el.user).type('Ad')
        cy.get(el.password).type('admin123')
        cy.get(el.buttonLogin).click()
        cy.get(el.alert).should('have.text','Invalid credentials')
    }

    preencherLoginPasswordErrado(){
        cy.get(el.user).type('Admin')
        cy.get(el.password).type('admin12')
        cy.get(el.buttonLogin).click()
        cy.get(el.alert).should('have.text','Invalid credentials')
    }

}

export default new Login();