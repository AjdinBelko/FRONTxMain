describe('FrontexTesting HomePage', () => {

    before('BeforHook', function() {
        //
        cy.visit('https://dev-f0x-wallet.netlify.app/nft/ethereum/0x63D360Aa96470B806CD1dFd709A155039bdA37F8')

        cy.log('visit');
    })
    it('HomePage Welcome', () => {

        // FIRST visit of the page & validating assertion for load 
        // assertion for both request
        // cy.request included

        //Home Page

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
  
    it('List menu' , () => {

        // Header bar

        cy.get('.sticky')
            .should('be.visible')
            .should('have.length' , '1');

        // getting the ul 
        // navigating the List items with assertions

        cy.xpath("//ul[@class='flex gap-8']").find('> li')
        .should('have.length' , '6')
        .should(($lis) => {
            expect($lis, '6 items').to.have.length(6)
            expect($lis.eq(0), 'first item').to.contain('Dashboard')
            expect($lis.eq(1), 'second item').to.contain('NFTs')
            expect($lis.eq(2), 'third item').to.contain('Tokens')
            expect($lis.eq(3), 'third item').to.contain('Connect')
            expect($lis.eq(4), 'third item').to.contain('Chat')
            expect($lis.eq(5), 'third item').to.contain('Settings')
          })

     
    });
  
    it('User Account & Token Validation' , () => {

        // validating if wallet user is visible @ account

        cy.get('.sticky > p')
            .should('have.text' , 'ropsten')
            .and('be.visible')
            .and('have.value' , '');

        // token

        cy.get('.sticky > :nth-child(4)')
            .should('have.text' , '0x306...857f')
            .and('have.length', '1')
            .and('be.visible')

  
  });

  it('Main body of Welcome page' , () =>{

    //main body of the page

    cy.get('.m-10')
        .should('have.text' , 'Wallet Balance DashboardETH : 0.000031944377934NFTsCollections Blue NFTLottery GeneNFTLotteryBlue NFTLottery Genesis')
        .should('have.length' , 1)
        .should('have.value' , '')

    cy.log('.m10');


    
    

  });

  it('VIP ticket', () => {

    // getting the NFT collections feed

    cy.get('.w-48')
            .find('h2')
            .should('have.text', 'NFTLottery')

    // next one 

        cy.get('.w-48')
            .find('h3')
            .should('have.text', 'Blue NFTLottery Genesis')

        //if it contains the image

        cy.xpath("//img[@class='h-48 cover']")
            .should('be.visible')
            .and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.greaterThan(0)
            });

  });

  it('Collections Area', () =>{

    //validating the Collections area

    cy.xpath("//div[@class='w-1/4']")
        .find('h2')
        .should('have.text', 'Collections')
        .should('have.length' , '1');

    //checkbox validation

    cy.get('.block')
        .should('be.visible')
        .and('have.text', ' Blue NFTLottery Gene')
        // .should('have.attr', 'placeholder');

    //gettiong the checkbox
    cy.get('.block > input')
        .should('be.visible')
        .check();
    

        
        
  });

  it('NFT description', () =>{

    //validating nft description

    cy.get('.p-2')
        .find('h2')
        .should('have.text' , 'NFTLottery');

    //

    cy.get('.text-xs')
        .should('have.text' , 'Blue NFTLottery Genesis');
        
  });

  it('Footer bar' , () => {

    //getting the validation for Footer bar

    cy.xpath("//footer[@class='px-8 py-10 bg-gray-300 space-y-6']")
        .should('have.length' , 1)
        .and('be.visible');

    //navigation bar LI

    cy.get('nav > .flex').find('> li')
        .should('have.length' , '3')
        .should(($lis) => {
            expect($lis, '3 items').to.have.length(3)
            expect($lis.eq(0), 'first item').to.contain('Support')
            expect($lis.eq(1), 'second item').to.contain('FAQs')
            expect($lis.eq(2), 'third item').to.contain('Marketplace')

          });

    // validating images first logo Discord
    cy.get(':nth-child(2) > svg')
            // .find('svg')
            // .should('be.visible')
            // .and(($img) => {
            // // "naturalWidth" and "naturalHeight" are set when the image loads
            // expect($img[0].naturalWidth).to.be.greaterThan(0)
            // });
            .should('have.text' , 'Discord');

    cy.get('.gap-8 > :nth-child(1) > svg')
          .should('have.text' , 'Twitter');

          //last logo 

    cy.get('.px-8 > .w-40 > .w-full')
          .should('be.visible')
          .and('have.text' , 'Frontier X logo');


  });

});


//this will conclude the basic validatio of the home page
//which loads on the provided link
// I will attach the Fucntions method in another folder
// Upload it to the Github
//No changes neeed here

// All description has been added to github manual report
