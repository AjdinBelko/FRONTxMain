describe('FrontexTesting HomePage', () => {

    before('BeforHook', function() {
        //
        cy.visit('https://dev-f0x-wallet.netlify.app/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8')

        cy.log('visit');
    })
    it('Check bxo validation', () => {

        //already done once but , 

        cy.get('.block > input')
        .should('be.visible')
        .check();


    });

    it('Search option Validation', () => {

        //checking for other or currnet nft 

        cy.xpath("//input[@placeholder='Search NFTs']")
            .should('be.empty')
            .type('Teste')

            // there are no nfts currently beside the one 

            // clearing the are

            .clear();


    });


    it('NFTs area functional Validation', () => {

        //navigating

        cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('NFTs')
        .click({setTimeout:2000});

    });

    it('NFTs Recieve', () => {

        cy.get('.max-w-6xl > :nth-child(2) > .flex > :nth-child(1)')
            .should('be.visible')
            .click({setTimeout:2000});
            //nothing happens as on tests

    });


    it('NFTs Buy functional Validation', () => {

        cy.get('.max-w-6xl > :nth-child(2) > .flex > :nth-child(2)')
            .should('be.visible')
            .click({setTimeout:2000});

            //nothing happens as on tests

    });


    it('NFTs Favorites funciton', () => {

        //sorting the NFTs
        cy.get('[href="/nfts?tab=favorites"]')
            .should('be.visible')
            .click();

        cy.url().should('include' , 'favorites')

    });


    it('NFTs Activity functional Validation', () => {

                //sorting the NFTs
                cy.get('[href="/nfts?tab=favorites"]')
                .should('be.visible')
                .click();
    
            cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/nfts?tab=favorites')

    });

    it('NFTs Collection putback' , () => {

        cy.get('[href="/nfts?tab=collections"]')
            .should('be.visible')
            .click()

            cy.url().should('include' , 'collections')
    });

});


//these are the current active and aviliable options on site
// i completed all manual test for it 
// and automated the same ones
//rest of explanation on github