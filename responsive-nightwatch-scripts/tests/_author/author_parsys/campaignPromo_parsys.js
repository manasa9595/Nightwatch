
var values = require('../../_data/author_data.js');
var ShelfId= function(client){
    return client
        //Shelf ID configuration
                .pause(2000)
                .useXpath()
                .waitForElementVisible('//button[text()="Edit"]', 10000, false)
                .click('//button[text()="Edit"]')
                .useCss()
                .pause(2000)
                .verify.visible('.x-form-item input[name="./shelfId"]')
                .click('.x-form-item input[name="./shelfId"]')
                .setValue('.x-form-item input[name="./shelfId"]','Left image')  
                .pause(3000)  
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(2000)
    },
    titleComp = function(client){
    return client
        .pause(3000)
        .verify.visible('.campaign-promo__title-wrapper  .auth--info')
        .click('.campaign-promo__title-wrapper ')
        .doubleClick()
        .pause(3000);
    },
    //populating data for title
    titleInput = function(client,titleText){
        var property = values.data,
                        titleInputSel=property['$titleInputSel'];
    return client
        .waitForElementVisible(titleInputSel, 6000)                                       
        .setValue(titleInputSel, titleText )
        .pause(2000)
    },
    headerType = function(client){
    return client
        .pause(3000)
        .verify.visible("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
        .click("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
        .pause(3000)
        .verify.visible('.x-layer .x-combo-list-item:nth-child(2)')
        .click('.x-layer .x-combo-list-item:nth-child(2)')
        .pause(5000)
        .verify.visible('[style*="visibility: visible;"] .x-btn.cq-btn-ok.x-btn-noicon')
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    rteWrapper = function(client){
        return client
            .pause(5000)
            .verify.visible('.campaign-promo__rte-wrapper .auth--info')
            .click('.campaign-promo__rte-wrapper')
            .doubleClick()
            .pause(5000);
    },
    rteInput = function(client,campaignPromo_rteContent){
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
                     client.setValue(rteInputSel, campaignPromo_rteContent );
                     client.frame(null);
                });
        })                         
    },
    okBtns=function(client,item){
    return client
        .perform(() => {
            client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                client.frame(result.value)
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(2000)
            });
        }); 
    },
    imageWrap = function(client){
    return client
     //The image selector should be clear to perform for each.
    .elements('css selector','.campaign-promo .campaign-promo__image-wrapper .comp-image',function(result){ 
        client
            //double click the images
            .pause(4000)
            .waitForElementVisible('.campaign-promo .campaign-promo__image-wrapper .comp-image',6000)
            .pause(3000)
            .moveToElement('.campaign-promo .campaign-promo__image-wrapper .comp-image', 20, 20)
            .click('.campaign-promo .campaign-promo__image-wrapper .comp-image')
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
    image_placement = function(client){
        return client
        .pause(5000)
        .verify.visible('.cq-editbar[class$="campaignpromo"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .click('.cq-editbar[class$="campaignpromo"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .pause(2000)
        .verify.visible("[class*='imagePlacement'] .x-form-field-wrap.x-form-field-trigger-wrap")
        .click("[class*='imagePlacement'] .x-form-field-wrap.x-form-field-trigger-wrap")
        .pause(3000)
        .waitForElementVisible("[class*='imagePlacement-0'] .x-combo-list-inner .x-combo-list-item:nth-child(2)",2000)
        .click("[class*='imagePlacement-0'] .x-combo-list-inner .x-combo-list-item:nth-child(2)")

        .verify.visible('.x-form-item input[name="./shelfId"]')
        .clearValue('.x-form-item input[name="./shelfId"]')
        .click('.x-form-item input[name="./shelfId"]')
        .setValue('.x-form-item input[name="./shelfId"]','Right image')  
        .pause(3000)  
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
        .pause(2000)

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
                ShelfId:ShelfId,
                titleComp:titleComp,
                titleInput:titleInput,
                headerType:headerType,
                rteWrapper:rteWrapper,
                rteInput:rteInput,
                okBtns:okBtns,
                imageWrap:imageWrap,
                image_placement:image_placement,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session
};
