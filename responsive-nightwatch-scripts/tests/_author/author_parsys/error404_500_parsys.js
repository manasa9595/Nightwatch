
var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client){
    return client
                    .pause(3000)
                    .verify.visible('.message-only__heading .title-comp')
                    .click('.message-only__heading')
                    .doubleClick()
                    .pause(5000);
    },
    //populating data for title
    titleInput = function(client,titleText){
        var property = values.data,
                        titleInputSel=property['$titleInputSel'];
        return client
            .pause(1000)
            .waitForElementVisible(titleInputSel, 6000)                                       
            .setValue(titleInputSel, titleText )
            .pause(5000)
    },
    headerType = function(client){
    return client
        .pause(3000)
        .verify.visible("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
        .click("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
        .pause(3000)
        .verify.visible('[style*="visibility: visible;"].x-layer .x-combo-list-item:nth-child(1)')
        .click('[style*="visibility: visible;"].x-layer .x-combo-list-item:nth-child(1)')
        .pause(5000)
        .verify.visible('[style*="visibility: visible;"] .x-btn.cq-btn-ok.x-btn-noicon')
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    //double click on text component
    textComp = function(client) {
        return client
            .pause(3000)
            .verify.visible('.message-only__rte')
            .click('.message-only__rte')
            .doubleClick()
            .pause(5000);
    },
    //populating data for text
    textInput = function(client, populateText) {
        var property = values.data,
            rteInputSel=property['$rteInputSel'];
        return client
        .waitForElementPresent('.x-html-editor-wrap iframe', 6000)
        .perform(() => {
            client.getAttribute('.x-html-editor-wrap iframe', 'id',(result) => {
              client
                .frame(result.value);
                 client.waitForElementVisible('body#CQrte', 6000);
                 client.click('body#CQrte p')

                 client.pause(3000);
                 client.setValue(rteInputSel, populateText );
                 client.frame(null);
            });
        }) 
        client.pause(3000);
    },
    okBtns=function(client){
        return client
        .perform(() => {
            console.log("Inside perform")
            client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                console.log("Inside")
                client.frame(result.value)
                client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(2000)
            })
        }) 
    },
    /*searchTitleComp = function(client){
    return client
        .waitForElementVisible('.taskpanel__search__label .auth--info',7000)
        .click('.taskpanel__search__label .auth--info')
        .doubleClick()
        .pause(3000);
    },
    //populating data for title
    searchTitleInput = function(client){
        return client
            .pause(3000)
            .waitForElementVisible("[style*='visibility: visible;'] input[name='./text']", 6000)                                       
            .setValue("[style*='visibility: visible;'] input[name='./text']", 'We couldn’t find the page you wanted.' )
            .pause(5000)
    },*/

    imageWrap = function(client){
    return client
     //The image selector should be clear to perform for each.
    .elements('css selector','.message-only__image-wrapper .comp-image',function(result){ 
        client
            //double click the images
            .pause(5000)
            .waitForElementVisible('.message-only__image-wrapper .comp-image',6000)
            .pause(3000)
            .click('.message-only__image-wrapper .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field','warning.png')
            .pause(3000)
            .click('.x-trigger-wrap-focus .x-form-trigger.x-form-search-trigger')
            .pause(1000)
            //drags(down) and drops(up) the first image of left side panel through thumb-wrap
            .verify.visible('.thumb-wrap')
            .moveToElement('.thumb-wrap',  0,  0)
            .mouseButtonDown(0)
            .pause(100)
            .moveToElement('.thumb-wrap',  20,  20)  
            .pause(100)
            //move element from thumb-wrap to destination. 
            //NOTE: moveToElement works for the same element/selector. Destination selector doesn't work 
            .moveToElement('.thumb-wrap',  625, 490)      
            .pause(3000)
            .mouseButtonUp(2)
            .pause(5000)
            .perform(() => {
                client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                       client
                       .frame(result.value)
                       //Advanced tab for alt text
                        .click("[style*='visibility: visible;'] .x-tab-panel-header-plain ul li:nth-child(2)")
                        .pause(1000)
                        .click('.x-form-element input[name="./alt"]')
                        .setValue('.x-form-element input[name="./alt"]','Image Component')
                        .pause(1000); 

                        //Configuration tab for image to render in ie8(default image)
                        client.click("[style*='visibility: visible;'] .x-tab-panel-header-plain ul li:nth-child(3)")
                        .pause(1000)
                        .click('.x-form-element input[name="./defaultImage"]')
                        .pause(1000)
                        .setValue('.x-form-element input[name="./defaultImage"]','/content/dam/BoB-SVG/HomePage/NatWest/illustration_camera.png')
                        .click("[style*='visibility: visible;'] .x-form-field-trigger-wrap input[name='./defaultImage']+.x-form-search-trigger")
                        .pause(2000)
                        .click(".cq-browsedialog .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(2000)
                        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(5000)
                });
            }); 
        });
    },
    enter_search_text = function(client){
        return client
            .waitForElementVisible('.cq-editbar[class$="messageonly"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',5000)
            .click('.cq-editbar[class$="messageonly"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [name='./placeHolder']")
            .setValue("[style*='visibility: visible;'] .x-form-element [name='./placeHolder']","savings")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-form-element [name='./removeBottomSpace']")
            .pause(2000)
            .click('.x-form-item input[name="./shelfId"]')
            .setValue('.x-form-item input[name="./shelfId"]','Error Page')  
            .pause(2000)  
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            .pause(3000)

    },
    hide_search = function(client){
        return client
            .waitForElementVisible('.cq-editbar[class$="messageonly"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',5000)
            .click('.cq-editbar[class$="messageonly"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [name='./hideSearch']")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
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
                okBtns:okBtns,
                /*searchTitleComp:searchTitleComp,
                searchTitleInput:searchTitleInput,*/
                imageWrap:imageWrap,
                enter_search_text:enter_search_text,
                hide_search:hide_search,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session  
};
