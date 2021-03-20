var values = require('../../_data/author_data.js');
//double click on title component
var UniqueShelfId= function(client){
    return client
        //Shelf ID configuration
                .pause(2000)
                .useXpath()
                .waitForElementVisible('//button[text()="Edit"]', 10000, false)
                .click('//button[text()="Edit"]')
                .useCss()
                .pause(2000)
                .verify.visible('.x-form-item input[name="./uniqueShelfId"]')
                .click('.x-form-item input[name="./uniqueShelfId"]')
                .setValue('.x-form-item input[name="./uniqueShelfId"]','TaskBased Panel - Authored')  
                .pause(3000)  
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(2000)
    },
    //Doubleclick title component
    titleComp = function(client){
                return client
                    .pause(3000)
                    .verify.visible('.taskpanel__title .auth--info')
                    .click('.taskpanel__title')
                    .doubleClick()
                    .pause(5000)
    },
    //populating data for title
    titleInput = function(client,titleText){
                    var property = values.data,
                           titleInputSel=property['$titleInputSel'];
                return client
                    .pause(3000)
                    .waitForElementVisible(titleInputSel, 6000)                                       
                    .setValue(titleInputSel, titleText );
    },
    //type of header. Here H2
    headerType = function(client){
    return client
                    .pause(3000)
                    .verify.visible('.x-form-element .x-form-element .x-form-field-wrap')
                    .click('.x-form-element .x-form-element .x-form-field-wrap')
                    .pause(5000)

                    .verify.visible('.x-layer .x-combo-list-item:nth-child(2)')
                    .click('.x-layer .x-combo-list-item:nth-child(2)')
                    .pause(5000)
                    .verify.visible('.x-btn.cq-btn-ok.x-btn-noicon')
                    .click(".x-btn.cq-btn-ok.x-btn-noicon")
    },
    //Doubleclick search title component
    searchTitleComp = function(client){
                return client
                    .pause(2000)
                    .waitForElementVisible('.taskpanel__search__label .auth--info',8000)
                    .pause(3000)
                    console.log("hiohhi")
                   // .moveToElement('.taskpanel__search__label .auth--info',  0,  0)
                    .click('.taskpanel__search__label .auth--info')
                    .doubleClick()
                    .pause(5000);
    },
    //populating search title
    searchTitleInput = function(client,search_titleText,item){
        return client
            .pause(5000)
            .waitForElementVisible('.x-form-element .x-form-text.x-form-field.x-form-invalid', 6000)                                       
            .setValue('.x-form-element .x-form-text.x-form-field.x-form-invalid', search_titleText )
            .pause(5000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    //To switch to photography mode
    SwitchToRbsPhotoMode = function(client){
        return client   
            .useXpath()
            .waitForElementVisible('//button[text()="Edit"]', 10000, false)
            .click('//button[text()="Edit"]')
            .useCss()

            .pause(5000)
            .click('.cq-_46_47layout .x-form-text')

            .useXpath()              
            .pause(5000)
            .waitForElementVisible("//div[text()='Photographic']", 10000, false)
            .click("//div[text()='Photographic']")
            .useCss()

            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
                         
    },
    RBSbgImage = function(client){
        return client
        .elements('css selector','.taskpanel .taskpanel__image-wrap .comp-image',function(result){ 
        client
            //double click the images
            .pause(4000)
            .waitForElementVisible('.taskpanel .taskpanel__image-wrap .comp-image',6000)
            .pause(3000)
            .click('.taskpanel .taskpanel__image-wrap .comp-image')
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
            .moveToElement('.thumb-wrap',  625,  625)      
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
                        .pause(5000)
                });
            }); 
        });
    },
    //RBS twill title setValue
    MultiLineTitle = function(client){
        return client
        //double click on title with twill
                        .pause(8000)
                        .verify.visible('.taskpanel__title--twill .auth--info h1')
                        .click('.taskpanel__title--twill .auth--info h1')
                        .doubleClick()
                        .pause(5000)

        //Set value for 3 line title
       .perform(function(){
        client
            .elements("css selector", ".x-panel-bwrap .x-form-item.x-tab-item", function(result) {
                var total_links=["Howdy, partner","Welcome back to the","homepage"]; 
                console.log("Number of main links:" + total_links.length); 
                    for (let i = 1; i <=total_links.length; i++) {
                        client.verify.visible('.x-panel-bwrap .cq-tbtn')
                        .click('.x-panel-bwrap .cq-tbtn');
                        client.pause(3000)     
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
    //set values for multiple CTA for 3 tasks
    ctalinkconfigure=function(client,cta_text){
        return client               
        // 3 tasks configuration
            .elements('css selector','.taskpanel__list__item__ctaWrap .cta-secondary',function(result){
                result.value.forEach(function(element,index){
                    client.pause(2000);
                    client.elementIdClick(element.ELEMENT)
                          .doubleClick();
                     client.pause(2000);
                    client.clearValue("[style*='visibility: visible;'] input[name='./ctaLinkText']")
                    client.click('.x-tab-panel-bwrap .x-form-element input[name*="ctaLinkText"]')
                    .pause(2000)
                      client.setValue("[style*='visibility: visible;'] input[name='./ctaLinkText']",cta_text[index])
                    client.pause(3000);
                    client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                    .pause(2000)
                })
            })
    },
    //set values for multiple CTA for 4th and 5th tasks
    configureTask4_5=function(client,cta_text){
        return client
        .elements('css selector','.taskpanel__list__item__ctaWrap .cta-secondary',function(result){
            //4 and 5 tasks configuration
          for(let i=4; i<=5; i++)
            {
                client
                .useXpath()
                .waitForElementVisible('//button[text()="Edit"]', 5000, false)
                .click('//button[text()="Edit"]')
                .useCss()

                .pause(3000)
                .click('.cq-_46_47taskCount .x-form-text')
                .pause(3000)

                .useXpath()
                .waitForElementVisible('//div[text()='+i+']', 5000, false)
                .click('//div[text()='+i+']')
                .useCss()
                .pause(2000)

                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(8000)
                .click('.taskpanel__list__item__ctaWrap .cta-wrapper a[title="Secondary CTA"]')
                .doubleClick()
                
                .pause(5000)
                .clearValue("[style*='visibility: visible;'] input[name='./ctaLinkText']")
                .click('.x-tab-panel-bwrap .x-form-element input[name*="ctaLinkText"]')
                .setValue("[style*='visibility: visible;'] input[name='./ctaLinkText']",cta_text[i-1])
                .pause(4000)
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            
            } 
        })
    },
    //Drag image
    image_comp = function(client){
     var images=['nighthouse','rainbow','speaker','pencils','credit-card'];
     return client
     //The image selector should be clear to perform for each.
    .elements('css selector','.taskpanel__list__item .taskpanel__list__item__imgWrap .comp-image',function(result){
       result.value.forEach(function(element,index){
        client
            //double click the images
            .pause(6000)
            .click('.taskpanel__list__item .taskpanel__list__item__imgWrap .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field','nw-pers-ill-'+images[index]+'-square-purple')
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
                        .pause(2000); 
                        client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
                });
            }); 
        })
    })
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
    }

module.exports = {
                UniqueShelfId:UniqueShelfId,
                titleComp:titleComp,
                titleInput:titleInput,
                headerType:headerType,
                searchTitleComp:searchTitleComp,
                searchTitleInput:searchTitleInput,
				ctalinkconfigure:ctalinkconfigure, 
                configureTask4_5:configureTask4_5, 
                SwitchToRbsPhotoMode:SwitchToRbsPhotoMode,
                RBSbgImage:RBSbgImage, 
                MultiLineTitle:MultiLineTitle,  
                activate_page:activate_page,
                Ending_the_session:Ending_the_session, 
                image_comp:image_comp   
};
