describe('FrontexTesting HomePage', () => {

    before('BeforHook', function() {
        //
        cy.visit('https://dev-f0x-wallet.netlify.app/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8')

        cy.log('visit');
    })
    it('Support link / area', () => {

        cy.get('nav > .flex')
            .find('> li')
            .contains('Support')
            .click();
            cy.window().then((win) => {
                cy.stub(win, 'open', url => {
                    win.location.href = 'https://dev-f0x-wallet.netlify.app/support';
                }).as("popup")

    });

    //new area 

        cy.xpath("//h2[normalize-space()='This page could not be found.']")
            .should('have.text' , 'This page could not be found.');

});

it('FAQ link / area', () => {

    cy.get('nav > .flex')
        .find('> li')
        .contains('FAQs')
        .click();
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://dev-f0x-wallet.netlify.app/faqs';
            }).as("popup")

});

//new area 

    cy.xpath("//h2[normalize-space()='This page could not be found.']")
        .should('have.text' , 'This page could not be found.');

});

it('Marketplace / area', () => {

    cy.get('nav > .flex')
        .find('> li')
        .contains('Marketplace')
        .click();
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://dev-f0x-wallet.netlify.app/marketplace';
            }).as("popup")

});

//new area 

    cy.xpath("//h2[normalize-space()='This page could not be found.']")
        .should('have.text' , 'This page could not be found.');


});

});

//this will conclude the basic validatio of the home page
//which loads on the provided link
// I will attach the Fucntions method in another folder
// Upload it to the Github
//No changes neeed here

// All description has been added to github manual report
