
var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client){
    return client
        .pause(3000)
        .verify.visible('.text-only-header__product-title .auth--info')
        .click('.text-only-header__product-title .auth--info')
        .pause(3000)
        .doubleClick()                              
    },
    //populating data for title
    titleInput = function(client,titleText){
      return client  
        .pause(3000)
        .waitForElementVisible('.x-form-element .x-form-text', 60000)                                       
        .setValue('.x-form-element .x-form-text', titleText )
        .pause(5000)
        .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    textComp = function(client){
    return client
        .pause(3000)
        .verify.visible('.text-only-header__heading .title-comp')
        .click('.text-only-header__heading ')
        .doubleClick()
        .pause(5000)                
    },
     //populating data for text
    textInput = function(client,productTitleText){
        return client
            .pause(3000)
            .waitForElementVisible("[style*='visibility: visible;'] .x-form-element input[name='./text']", 60000)                                       
            .setValue("[style*='visibility: visible;'] .x-form-element input[name='./text']", productTitleText )
            .pause(2000)
            .acceptAlert();
    },
    headerType = function(client){
    return client
        .pause(3000)
        .verify.visible('.x-form-element .x-form-element .x-form-field-wrap')
        .click('.x-form-element .x-form-element .x-form-field-wrap')
        .pause(5000)
        .waitForElementVisible('.x-layer .x-combo-list-item:nth-child(2)',5000)
        .click('.x-layer .x-combo-list-item:nth-child(2)')
        .pause(5000)
        .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    new_shelf = function(client){
    return client
        .pause(5000)
        .waitForElementVisible('.cq-editbar[class$="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(10) .x-btn.x-btn-noicon',6000)
        .click('.cq-editbar[class$="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(10) .x-btn.x-btn-noicon')
        .pause(2000)
    },
    GoldBG_personal = function(client){
    return client
        .waitForElementVisible('.cq-editbar[class*="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',6000)
        .click('.cq-editbar[class*="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .pause(2000)
        .click("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']")
        .setValue("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']","Gold BG")
        .pause(3000)
        .click("[style*='visibility: visible;'] .x-form-element .x-trigger-noedit")
        .pause(3000)
        .click("[style*='visibility: visible;'] .x-combo-list-inner .x-combo-list-item:nth-child(3)")
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
        
    },
    BlueBG_business = function(client){
    return client
        .waitForElementVisible('.cq-editbar[class*="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',6000)
        .click('.cq-editbar[class*="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .pause(2000)
        .click("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']")
        .setValue("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']","Blue BG")
        .pause(3000)
        .click("[style*='visibility: visible;'] .x-form-element .x-trigger-noedit")
        .pause(3000)
        .click("[style*='visibility: visible;'] .x-combo-list-inner .x-combo-list-item:nth-child(6)")
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
        
    },
    Enable_Compliance = function(client){
        return client
        .verify.visible('.cq-editbar[class$="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .click('.cq-editbar[class$="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .pause(2000)
        .verify.visible("[style*='visibility: visible;'] .x-form-element [class*='enableCompliance'] .x-form-check-wrap .x-form-checkbox")
        .click("[style*='visibility: visible;'] .x-form-element [class*='enableCompliance'] .x-form-check-wrap .x-form-checkbox")
        .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        .pause(5000)
    },
    clickCompliance = function(client){
    return client
        .pause(3000)
        .verify.visible('.text-only-header__compliance .shelf-textarea .auth--info')
        .pause(1000)
        .click('.text-only-header__compliance .shelf-textarea .auth--info')
        .doubleClick()  
        .pause(3000)                             
    },
    //populating data for title
    ComplianceInput = function(client){
      return client  
        .pause(3000)
        .waitForElementVisible('.x-form-element [name="./text"]', 6000)                                       
        .setValue('.x-form-element [name="./text"]', '24px compliance icon vertically centered to first line. 15px spacing between icon and copy (as per other icons and bullets).' )
        .pause(5000)
        .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    Shelf_props=function(client){
        return client
            .waitForElementVisible('.cq-editbar[class$="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',6000)
            .click('.cq-editbar[class$="textonlyheader"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='addRemoveSpace'] .x-form-check-wrap .x-form-checkbox")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']")
            .pause(2000)
            .setValue("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']","Text Only Header-Default BG")
            .pause(3000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    MultiLineTitle = function(client){
    return client
    //double click on title with twill
                    .pause(8000)
                    .verify.visible('.text-only-header__twill .auth--info h1')
                    .click('.text-only-header__twill .auth--info h1')
                    .doubleClick()
                    .pause(5000)

    //Set value for 3 line title
   .perform(function(){
    client
            .elements("css selector", ".x-panel-bwrap .x-form-item.x-tab-item", function(result) {
                var total_links=["A flexible title enabling us to","introduce the content on","the page"]; 
                console.log("Number of main links:" + total_links.length); 
                    for (let i = 1; i <=total_links.length; i++) {
                         client.verify.visible('.cq-tbtn .x-btn-text')
                        client.click('.cq-tbtn .x-btn-text')
                        .pause(3000)   
                          console.log("i value Inside loop:"+i)                             
                           //client.elementIdClick(element.ELEMENT)      
                            client.verify.visible("input[name='./multilinetitle/item_"+i+"/lineTitle']")
                            client.click("input[name='./multilinetitle/item_"+i+"/lineTitle']")
                            console.log("total_links : "+total_links[i-1])
                            client.setValue("input[name='./multilinetitle/item_"+i+"/lineTitle']",total_links[i-1])
                            
                    }
                    client.pause(3000)
                    .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                    .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            })   
                
         })
    },
//To activate page in the side kick
    activate_page= function(client) {
        var btnActivate = '.x-panel-bwrap .cq-sidekick-buttons .x-panel-body .x-btn-mc button';
        return client
            .frame(null)
            .pause(5000)
            .waitForElementVisible('#cq-sk .x-window-bwrap',5000)
            .click('.x-tab-panel-header .x-tab-with-icon .x-tab-strip-text.cq-sidekick-tab-icon-page')
            .useXpath()
                .waitForElementVisible("//button[text()='Activate Page']",2000)
                .click("//button[text()='Activate Page']")
                .pause(5000)
            .useCss()
            .pause(6000)
    },
    Ending_the_session= function(client){
        client.end();
    };
               


module.exports = {
                titleComp:titleComp,
                headerType:headerType,
                titleInput:titleInput,
                textComp:textComp,
                textInput:textInput,
                MultiLineTitle:MultiLineTitle,
                Enable_Compliance:Enable_Compliance,
                clickCompliance:clickCompliance,
                ComplianceInput:ComplianceInput,
                Shelf_props:Shelf_props,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session,
                new_shelf:new_shelf,
                GoldBG_personal:GoldBG_personal,
                BlueBG_business:BlueBG_business
};
