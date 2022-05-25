
Cypress.Commands.add('login', (nome , senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('registra', (email, fullName, userName, password ) => {
cy.contains('a', 'Register now').click();
cy.contains('button', 'Register').click();
cy.get('input[formcontrol="email"]').type(email);
cy.get('input[formcontrol="fullName"]').type(fullName);
cy.get('input[formcontrol="userName"]').type(userName);
cy.get('input[formcontrol="password"]').type(password);

})
