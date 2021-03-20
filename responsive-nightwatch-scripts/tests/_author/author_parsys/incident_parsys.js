
var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client){
                return client
                    .pause(3000)
                    .verify.visible('.incident-notification__title-wrapper .auth--info')
                    .click('.incident-notification__title-wrapper .auth--info')
                    .doubleClick()
                    .pause(2000);
    },
    //populating data for title
    titleInput = function(client,titleText){
        var property = values.data,                       
                        titleInputSel=property['$titleInputSel'];
        return client
                        .pause(2000)
                        .waitForElementVisible(titleInputSel, 80000)                                       
                        .setValue(titleInputSel, titleText )
                        .pause(3000)
                        .click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
    textAreaComp = function(client){
        return client
            .pause(2000)
            .verify.visible('.incident-notification__text-wrapper .auth--info')
            .click('.incident-notification__text-wrapper .auth--info')
            .doubleClick()
            .pause(2000)
    },
    textArea = function(client,incident_textAreaInput){
        var property = values.data,                       
                        incident_textAreaInput=property['$incident_textAreaInput'];
        return client
            .pause(1000)
            .click('.x-form-textarea.x-form-field')
            .setValue('.x-form-textarea.x-form-field',incident_textAreaInput)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
    },
    image_comp = function(client){
     return client
     //The image selector should be clear to perform for each.
    .elements('css selector','.incident-notification .incident-notification__image-wrapper .comp-image',function(result){ 
        client
            //double click the images
            .pause(4000)
            .click('.incident-notification .incident-notification__image-wrapper .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field','icon-tea.svg')
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
            .moveToElement('.thumb-wrap',  625,  50)      
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
                        .pause(4000)
                        .click(".cq-browsedialog .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(2000)
                        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(5000) 
                });
            }); 
        });
    },
    remove_cta = function(client){
        return client
            .pause(4000)
            .verify.visible('.cq-editbar[class$="incidentnotification"]')
            .click('.cq-editbar[class$="incidentnotification"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='hideAction'] .x-form-check-wrap .x-form-checkbox")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    //To activate page in the side kick
    activate_page= function(client) {
        var btnActivate = '.x-panel-bwrap .cq-sidekick-buttons .x-panel-body .x-btn-mc button';
        return client
            //.pause(9000)
            //.waitForElementVisible('.cq-editrollover-insert-container', 5000)
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
                titleInput:titleInput,
                textAreaComp:textAreaComp,
                textArea:textArea,
                image_comp:image_comp,
                remove_cta:remove_cta,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session,              
};
