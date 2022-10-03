describe('FrontexTesting HomePage', () => {

  before('BeforHook', function() {
    //
    cy.visit('https://dev-f0x-wallet.netlify.app/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8')

    cy.log('visit');
})


// Tests will contain all action towards the site provided in github manual test and exmplanation
// It will be breakdown into 23 as I wrote 

// Feature are added on github too


  it('HomePage [Validation', () => {
    // repeated home page validation

    cy.visit('https://dev-f0x-wallet.netlify.app/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8');

      cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8');

      // cy.request
  cy.request({

        method: 'GET',

        url: '/0x63D360Aa96470B806CD1dFd709A155039bdA37F',

         failOnStatusCode: false,

        }).then((resp) => {



        expect(resp.status).to.eq(404);
  
         expect(resp.body).to.have.length(11195);
  
         expect(resp).to.have.property('headers');
  
         expect(resp).to.have.property('duration');

  cy.log(resp);

    });

    });

  it('Dashboard Validation and function' , () => {

    //getting the Dashboard functional item

    cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('Dashboard')
        .click({setTimeout:2000});

    // assertion for new page

    cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/' );

    //also the new fields are in after the loadout/redirection

    //description

    cy.xpath("//div[@class='max-w-md mx-auto py-10 px-10']")
      .should('have.text' , 'Please enter your email to loginLogin');
    
    // input field

    cy.get('#email')
        .should('be.empty')
        .should('have.attr' , 'placeholder' , 'Email');

        //submit button

        cy.get('.py-2')
          .should('be.visible')
          .and('have.text' , 'Login');

          cy.log('Dashboard');

  });

  it('NFTs option validation' , () => {

    //nfts option form menu bar

    cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('NFTs')
        .click({setTimeout:2000});

        //new options and fields
        //but first simple request

        cy.request('https://dev-f0x-wallet.netlify.app/nfts').as('NFTs')

        cy.get('@NFTs').should((response) => {

           expect(response.body).to.have.length(11957);

           expect(response).to.have.property('headers')

          expect(response).to.have.property('duration')
          })

          //new options 

          cy.get('.max-w-6xl > :nth-child(1)')
            .should('have.text' , 'You own 0 NFTsSpanning 7 collections');

          // cy.get('.max-w-6xl > :nth-child(2)')

          cy.get('.max-w-6xl > :nth-child(2)')
            .find('button')
            .should('have.text' , 'Receive NFTBuy NFT')

            //also 

            cy.get('.space-y-8').find('> li')
                .should('have.length' , '8')
                .should(($lis) => {
                expect($lis, '8 items').to.have.length(8)
                expect($lis.eq(0), 'first item').to.contain('Sneaks of Nature')
                expect($lis.eq(1), 'second item').to.contain('Sneaks of Nature')
                expect($lis.eq(3), 'third item').to.contain('Sneaks of Nature')
                expect($lis.eq(4), 'forth item').to.contain('Sneaks of Nature')
                expect($lis.eq(5), 'fifth item').to.contain('Sneaks of Nature')
                expect($lis.eq(6), 'sixth item').to.contain('Sneaks of Nature')
                expect($lis.eq(7), 'seventh item').to.contain('Sneaks of Nature')
                // expect($lis.eq(8), 'third item').to.contain('Sneaks of Nature')

              });

  });

  it('Tokens options validation' , () => {

    //getting to the menu
    cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('Tokens')
        .click({setTimeout:2000});
        
        //new url

        cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/tokens');

        //also

        cy.get('.h-full')
          .should( 'have.text','Ethereum ballance: 0.0IMX ballance: 0.0')

  });

  it('Connect option validation' , () => {

    //connect option validation

    cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('Connect')
        .click({setTimeout:2000});

        //new url

        cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/connect');

        //empty page of site

  });

  it('Chat functions validation' , () => {

    //Chat opetion

    cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('Chat')
        .click({setTimeout:2000});

        //new url

        cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/chat');

        //same page as previous one 
    
        //input fields are already asserted and tested

  });

  it('Settings functions validation' , () => {

    //Settings Option

    cy.get('.sticky > :nth-child(2) > .flex')
        .find('>li')
        .should('have.length' , '6')
        .contains('Settings')
        .click();

        //new url

        cy.url().should('eq' , 'https://dev-f0x-wallet.netlify.app/settings');

        // new options 

        cy.get('.max-w-md > .flex')
          .should('have.text' , 'Choose networksMainnetRopstenGoerliSave')
          .should('be.visible');

          //new

          cy.get('.mx-5')
            .select('ropsten')
            .should('have.value' , 'ropsten')
            
            //without save

            cy.get('.py-2')
              .should('be.visible')
              .should('have.text' , 'Save');
              //click() if needed

  });

});

//this will conclude the basic validatio of the home page
//which loads on the provided link
// I will attach the Fucntions method in another folder
// Upload it to the Github
//No changes neeed here

// All description has been added to github manual report