
var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client){
                return client
                    .pause(5000)
                    .verify.visible('.completion-prompt__title-wrapper .auth--info')
                    .click('.completion-prompt__title-wrapper .auth--info')
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
    rteComp = function(client){
        return client
            .pause(7000)
            .verify.visible('.completion-prompt__rte-wrapper .auth--info')
            .click('.completion-prompt__rte-wrapper .auth--info')
            .doubleClick()
            .pause(2000)
    },
    rte = function(client,completion_rteInput){
        var property = values.data,                       
                        rteInputSel=property['$rteInputSel'];
        return client
        .waitForElementPresent('.x-html-editor-wrap iframe', 5000)
        .perform(() => {
            client.getAttribute('.x-html-editor-wrap iframe', 'id',(result) => {
              client
                .frame(result.value);
                 client.waitForElementVisible('body#CQrte', 10000);
                 client.click('body#CQrte p')

                 client.pause(3000);
                 client.setValue(rteInputSel, completion_rteInput );
                 client.frame(null);
            });
            client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                client.frame(result.value)
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(2000)
            });
        })
    },
    image_comp = function(client){
     return client
     //The image selector should be clear to perform for each.
    .elements('css selector','.completion-prompt .completion-prompt__image-wrapper .comp-image',function(result){ 
        client
            //double click the images
            .pause(4000)
            .click('.completion-prompt .completion-prompt__image-wrapper .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field','what-i-icon-pencils.svg')
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
                        .pause(2000)
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
            .verify.visible('.cq-editbar[class$="completionprompt"]')
            .click('.cq-editbar[class$="completionprompt"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='hideAction'] .x-form-check-wrap .x-form-checkbox")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    remove_completionPrompt = function(client){
        return client
            .pause(3000)
            .verify.visible('.cq-editbar[class$="completionprompt"]')
            .click('.cq-editbar[class$="completionprompt"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='hideCompletionPrompt'] .x-form-check-wrap .x-form-checkbox")
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
                rteComp:rteComp,
                rte:rte,
                image_comp:image_comp,
                remove_cta:remove_cta,
                remove_completionPrompt:remove_completionPrompt,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session,              
};
