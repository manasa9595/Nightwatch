
var values = require('../../_data/author_data.js');
//Shelf level edit click in tool bar
var  Selecting_shelf_properties_at_edit_bar=function(client){ 
    return client
    .pause(3000)
    .verify.visible('.cq-editbar[class$="ataglance"]')
    .click('.cq-editbar[class$="ataglance"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
    .pause(1000)
    .click("[style*='visibility: visible;'] .x-form-element [class*='addRemoveSpace'] .x-form-check-wrap .x-form-checkbox")
    .pause(2000)
    .click("[style*='visibility: visible;'] .x-form-element [class*='enableCompliance'] .x-form-check-wrap .x-form-checkbox")
    .pause(2000)
    .click("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']")
    .pause(2000)
    .setValue("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']","pageOverview")
    .pause(3000)
    .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
},

//for authoring titles in each slide
SettingTitleValue = function(client,selector,titleval){     
    return client
    .elements('css selector',selector,function(result){
        result.value.forEach(function(element,index){
        client
        .pause(2000)
        .elementIdClick(element.ELEMENT)
        .doubleClick()
        .pause(2000)
        .click("[style*='visibility: visible;'] .x-form-field[name='./text']")
        .pause(2000)
        .setValue("[style*='visibility: visible;'] .x-form-field[name='./text']",titleval)
        .pause(1000);
        client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
        })
    })             
},

//for authoring content in text component in each slide
SettingtextValue=function(client,selector,textval){
 return client
    .elements('css selector',selector,function(result){
        result.value.forEach(function(element,index){
        client
            .pause(2000)
            .elementIdClick(element.ELEMENT)
            .doubleClick()
            .pause(2000)
            //.click("[style*='visibility: visible;'] .x-panel-bwrap .x-form-element input[name='./text']")
            .pause(2000)
            .setValue("[style*='visibility: visible;'] .x-form-field[name='./text']",textval)
            .pause(1000);
            client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        })
    })
},
//for authoring content in text component in each slide
SettingComplianceTextValue=function(client,selector,complaianceText){
 return client
    .elements('css selector',selector,function(result){
        result.value.forEach(function(element,index){
        client
            .pause(2000)
            .elementIdClick(element.ELEMENT)
            .doubleClick()
            .pause(2000)
            //.click("[style*='visibility: visible;'] .x-panel-bwrap .x-form-element input[name='./text']")
            .pause(2000)
            .setValue("[style*='visibility: visible;'] .x-form-field[name='./text']",complaianceText)
            .pause(1000);
            client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
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
}
module.exports = {
    Shelf_props:Selecting_shelf_properties_at_edit_bar,    
    SettingTitleValue:SettingTitleValue,
    SettingtextValue:SettingtextValue,
    SettingComplianceTextValue:SettingComplianceTextValue,    
    activate_page:activate_page,
   Ending_the_session:Ending_the_session
};
