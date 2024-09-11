describe('Cypress basics', () => {
    it.only('Should visit  a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        // const title = cy.title()
        // console.log(title)]

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().debug().should('contains', 'Campo').debug();

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contains', 'Campo')

        cy.title().should(title => {
            console.log(title)
        })

        
    });

    it('Should visit  a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')


        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')
       


        
    });
    
});