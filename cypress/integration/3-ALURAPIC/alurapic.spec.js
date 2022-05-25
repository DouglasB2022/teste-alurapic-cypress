describe ('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    })

    it('verifica mensagens validacao', ()=>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        })

        it('verifica mensagens de e-mail invalido', ()=>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type('Douglas')
            cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
           
        })
        it('verifica mensagens de senha com menos de 8 caracteres', ()=>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="password"]').type('123');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
           
        })

        it('verifica mensagens de nome invalido', ()=>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="fullName"]').type('D');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
           
        })

        it('verifica nome de usuario', ()=>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="userName"]').type('DOUGLAS');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })  

    it.only('fazer login do usuario valido', ()=>{
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })  

    it.only('fazer login do usuario invalido', ()=>{
       cy.login('douglas', '1234')
        cy.on('window:alert', (str) => {
            expert(str).to.equal('Invalid user name or password')
            })
    })

    
})