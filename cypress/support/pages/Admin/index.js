const el3 = require('./elements').ELEMENTS3

class AdminUser {
    campoBranco(){
        cy.xpath(el3.acessarAdmin).click()
        cy.xpath(el3.acessarUsername).click()
        cy.xpath(el3.botãoSave).click()
        cy.xpath(el3.mensagemRequired).should('have.text','Required')
    }

    usuarioExistente(){
        cy.xpath(el3.acessarAdmin).click()
        cy.xpath(el3.acessarUsername).click()
        cy.xpath(el3.registrar).type('admin')
        cy.xpath(el3.mensagemAlreadyExists).should('have.text','Already exists')
    }

}

export default new AdminUser();