/// <reference types="cypress" />

import Login from '../support/pages/Login';
import MenuLateral from '../support/pages/Menu Lateral';
import AdminUser from '../support/pages/Admin';

describe('Teste de Login', () => {
 
  beforeEach(() => {
    Login.acessarLogin();

    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  })

  it('Validar login com sucesso', () => {
    Login.preencherLogin();

  })

  it('Mensagem para invalidar login com erro de "username"', () => {
    Login.acessarLogin();
    Login.preencherLoginUserErrado(); 
    
  })

  it('Mensagem para invalidar login com erro de "password"', () => {
    Login.acessarLogin();
    Login.preencherLoginPasswordErrado();
    
  })
})

describe('Teste de Menu Lateral', () => {  

  before(() => {
    Login.acessarLogin();
    Login.preencherLogin();

  })

  it('Teste visibilidade da logo', () => {
    MenuLateral.visualizarLogo();

  })

  it('Botão para extender a barra de menu vertical', () => {
    MenuLateral.abrirMenu();
    MenuLateral.abrirMenu();
    
  })
  
  it('Campo de busca ', () => {
    MenuLateral.menuBusca();

  })
})  

describe('Teste de Admin/Add User/Username', () => {  

  beforeEach(() => {
    Login.acessarLogin();
    Login.preencherLogin();

  })

  it('Teste sem campos preenchidos, mensagem: "Required" - Username', () => {
    AdminUser.campoBranco();

  })

  it('Teste com usuário existente, mensagem: "Already exits"', () => {
    AdminUser.usuarioExistente();

  })


})