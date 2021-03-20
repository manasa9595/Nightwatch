var values = require('../../_data/author_data.js');
//double click on title component
var IllustrationShelfID = function(client){
        return client   
            .useXpath()
            .waitForElementVisible('//button[text()="Edit"]', 10000, false)
            .click('//button[text()="Edit"]')
            .useCss()

            .verify.visible('.x-form-item input[name="./shelfId"]')
            .click('.x-form-item input[name="./shelfId"]')
            .setValue('.x-form-item input[name="./shelfId"]','Illustration Mode')  
            .pause(3000)  

            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");                  
    },
    IllustrationImage = function(client){
        return client
        .elements('css selector','.hero .rbshero-illustration-wrapper .image-wrapper .comp-image',function(result){ 
        client
            //double click the images
            .pause(3000)
            .waitForElementVisible('.hero .rbshero-illustration-wrapper .image-wrapper .comp-image',6000)
            .pause(2000)
            .click('.hero .rbshero-illustration-wrapper .image-wrapper .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field','rb-pers-ill-hats-square-transparent')
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
            .moveToElement('.thumb-wrap',  625,  560)      
            .pause(3000)
            .mouseButtonUp(2)
            .pause(8000)
            .perform(() => {
                client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                       client
                       .frame(result.value)
                       //Advanced tab for alt text
                        .click("[style*='visibility: visible;'] .x-tab-panel-header-plain ul li:nth-child(2)")
                        .pause(1000)
                        .click('.x-form-element input[name="./alt"]')
                        .setValue('.x-form-element input[name="./alt"]','Image Component')
                        .pause(1000)
                        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(3000)
                });
            }); 
        });
    },
    SwitchToPhotoMode = function(client){
        return client   
            .useXpath()
            .waitForElementVisible('//button[text()="Edit"]', 10000, false)
            .click('//button[text()="Edit"]')
            .useCss()

            .pause(3000)
            .click('.cq-_46_47displaymode .x-form-focus')

            .useXpath()              
            .pause(3000)
            .waitForElementVisible("//div[text()='Photography']", 10000, false)
            .click("//div[text()='Photography']")
            .useCss()

            .verify.visible('.x-form-item input[name="./shelfId"]')
            .click('.x-form-item input[name="./shelfId"]')
            .setValue('.x-form-item input[name="./shelfId"]','Photographic Mode')  
            .pause(3000)  

            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
                         
    },
    NWbgImage = function(client){
        return client
        .elements('css selector','.hero .heroimagewrapper .image-wrapper .comp-image',function(result){ 
        client
            //double click the images
            .pause(3000)
            .waitForElementVisible('.hero .heroimagewrapper .image-wrapper .comp-image',6000)
            .pause(4000)
            .moveToElement('.hero .heroimagewrapper .image-wrapper .comp-image', 825, 650)
            .click('.hero .heroimagewrapper .image-wrapper .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field','Hero_002')
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
            .moveToElement('.thumb-wrap',  825, 650)   
            .pause(3000)
            .mouseButtonUp(2)
            .pause(8000)
            .perform(() => {
                client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                       client
                       .frame(result.value)
                       //Advanced tab for alt text
                        .click("[style*='visibility: visible;'] .x-tab-panel-header-plain ul li:nth-child(2)")
                        .pause(1000)
                        .click('.x-form-element input[name="./alt"]')
                        .setValue('.x-form-element input[name="./alt"]','Image Component')
                        .pause(1000)
                        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(3000)
                });
            }); 
        });
    },
    product_title = function(client){
        var property = values.data,
           titleInputSel=property['$titleInputSel'];
        return client
            .pause(2000)
            .verify.visible('.hero-image-content .product-title .auth--info')
            .click('.hero-image-content .product-title .auth--info')
            .doubleClick()
            .pause(3000)
                .waitForElementVisible(titleInputSel, 6000)                                       
                .setValue(titleInputSel, 'Product title' )
            .pause(3000)
                .verify.visible('.x-form-element .x-form-element .x-form-field-wrap')
                .click('.x-form-element .x-form-element .x-form-field-wrap')
                .pause(3000)

                .verify.visible('.x-layer .x-combo-list-item:nth-child(6)')
                .click('.x-layer .x-combo-list-item:nth-child(6)')
                .pause(3000)
                .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
    
    },
    //RBS twill title setValue
    Title = function(client){
        return client
        //double click on title with twill
                        .pause(4000)
                        .verify.visible('.hero-title-block .titleWrapper .auth--info')
                        .click('.hero-title-block .titleWrapper .auth--info')
                        .doubleClick()
                        .pause(3000)
                .waitForElementVisible("[style*='visibility: visible;'] input[name='./text']", 6000)                                       
                .setValue("[style*='visibility: visible;'] input[name='./text']", 'A lovely title explaining the benefits of the product ' )
            .pause(3000)
                .verify.visible("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
                .click("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
                .pause(3000)

                .verify.visible("[style*='visibility: visible;'].x-layer .x-combo-list-item:nth-child(1)")
                .click("[style*='visibility: visible;'].x-layer .x-combo-list-item:nth-child(1)")
                .pause(3000)
                .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
    
    },
    apr_title1 = function(client){
        return client
            .pause(2000)
            .verify.visible('.hero .apr-container .apr-title .auth--info')
            .click('.hero .apr-container .apr-title .auth--info')
            .doubleClick()
            .pause(2000)
                .waitForElementVisible("[style*='visibility: visible;'] input[name='./text']", 6000)                                       
                .setValue("[style*='visibility: visible;'] input[name='./text']", 'Representative X.X% APR' )
            .pause(4000)
                .verify.visible("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
                .click("[style*='visibility: visible;'] .x-form-element .x-form-element .x-form-field-wrap")
                .pause(4000)

                .verify.visible("[style*='visibility: visible;'].x-layer .x-combo-list-item:nth-child(1)")
                .click("[style*='visibility: visible;'].x-layer .x-combo-list-item:nth-child(1)")
                .pause(4000)
                .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
    
    },
    apr_text = function(client){
        return client
            .pause(2000)
            .verify.visible('.hero .apr-container .apr-text .auth--info')
            .click('.hero .apr-container .apr-text .auth--info')
            .doubleClick()
            .pause(2000)
                .waitForElementVisible("[style*='visibility: visible;'] input[name='./text']", 6000)                                       
                .setValue("[style*='visibility: visible;'] input[name='./text']", 'Compliance copy goes here and should be no longer than 2-3 lines.' )
            .pause(2000)
            .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
    },
    remove_compliance = function(client){
        return client
            .pause(4000)
            .waitForElementVisible('.cq-editbar[class$="hero"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',4000)
            .click('.cq-editbar[class$="hero"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='hiderepapr'] .x-form-check-wrap .x-form-checkbox")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    remove_bottomSpace = function(client){
        return client
            .pause(4000)
            .waitForElementVisible('.cq-editbar[class$="hero"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',4000)
            .click('.cq-editbar[class$="hero"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='removebottomspace'] .x-form-check-wrap .x-form-checkbox")
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
                IllustrationShelfID:IllustrationShelfID,
                IllustrationImage:IllustrationImage,
                SwitchToPhotoMode:SwitchToPhotoMode,
                NWbgImage:NWbgImage,
                product_title:product_title, 
                Title:Title,
                apr_title1:apr_title1,  
                apr_text:apr_text,
                remove_compliance:remove_compliance,
                remove_bottomSpace:remove_bottomSpace,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session, 
};
