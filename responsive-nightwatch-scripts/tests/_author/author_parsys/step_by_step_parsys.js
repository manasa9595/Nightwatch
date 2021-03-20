
var values = require('../../_data/author_data.js');




//Shelf level edit click in tool bar
var  Shelf_props=function(client){
        return client
                .pause(3000)
                .verify.visible('.cq-editbar[class$="whatineedtoknow"]')
                .click('.cq-editbar[class$="whatineedtoknow"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
                .pause(1000)
                .click("[style*='visibility: visible;'] .x-form-element [class*='addRemoveSpace'] .x-form-check-wrap .x-form-checkbox")
                .pause(2000)
                .click("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']")
                .pause(2000)
                .setValue("[style*='visibility: visible;'] .x-form-element .x-form-text[name='./shelfId']","wink")
                .pause(3000)
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
//double click on Main Shelf title component
titleComp = function(client){
    return client
           .pause(8000)
           .verify.visible('.slidertitle .auth--info')
           .click('.slidertitle')
           .doubleClick()
           .pause(5000);
},

//populating data for Main Shelf title componente
titleInput = function(client,titleText){
    var property = values.data,
    titleInputSel=property['$titleInputSel'];
    return client
           .pause(10000)
           .waitForElementVisible(titleInputSel, 60000)                                       
           .setValue(titleInputSel, titleText );
},
//selecting header type(h2) in drop down
headerType = function(client){
    return client
            .pause(5000)
            .verify.visible('.x-form-element .x-form-element .x-form-field-wrap')
            .click('.x-form-element .x-form-element .x-form-field-wrap')
            .pause(5000)

            .verify.visible('.x-layer .x-combo-list-item:nth-child(2)')
            .click('.x-layer .x-combo-list-item:nth-child(2)')
            .pause(5000)
            .verify.visible('.x-btn.cq-btn-ok.x-btn-noicon')
            .click(".x-btn.cq-btn-ok.x-btn-noicon");
},

//for authoring titles in each slide
slidertitleComp=function(client,selector,titleval){     
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
                        .setValue("[style*='visibility: visible;'] .x-form-field[name='./text']",titleval[index])
                        .pause(1000);
                        client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
                    })
                })
             
},

//for authoring content in text component in each slide
slidertextComp=function(client,selector,textval){
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
                    .setValue("[style*='visibility: visible;'] .x-form-field[name='./text']",textval[index])
                    .pause(1000);
                    client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                })
            })
},
//selecting CTA type(Secondary) in drop down
CTAType =function(client,selector,ctaval,ctatarget,ctawindow){     
    return client
    .elements('css selector',selector,function(result){
                result.value.forEach(function(element,index){

                client
                    .pause(2000)
                    .elementIdClick(element.ELEMENT)
                    .doubleClick()
                    .pause(2000)
                    .click('[style*="visibility: visible;"] .x-form-element .x-form-element .x-form-field-wrap')
                    .pause(3000)
                    .waitForElementVisible('[style*="visibility: visible;"].x-layer .x-combo-list-item:nth-child(2)', 15000, false)
                    .pause(3000)
                    .click('[style*="visibility: visible;"].x-layer .x-combo-list-item:nth-child(2)')
                    .pause(3000)
                     .click("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
                    .pause(2000)
                    .setValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']",ctaval[index])
                    .pause(2000)
                     .click("[style*='visibility: visible;'] .x-form-field[name='./targetUrl']")
                     .pause(2000)
                    .setValue("[style*='visibility: visible;'] .x-form-field[name='./targetUrl']",ctatarget[index])
                    /*.pause(2000)
                    .click("[style*='visibility: visible;'] .x-form-field[name='./opennewwindow']")
                    .pause(2000)
                    .setAttribute("[style*='visibility: visible;'] .x-form-field[name='./opennewwindow']",ctawindow[index])*/
                    .pause(1000);
                    client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
                })
            })
         
},
image_comp = function(client,sliderimgs,imgsalttext,ieeightimgs,hoverimgs){
     return client
      //The image selector should be clear to perform for each.
    .elements('css selector','.image-wrapper .comp-image',function(result){
       result.value.forEach(function(element,index){
        //var images=['nighthouse','rainbow','speaker','pencils','credit-card'];
        client
            //double click the images
            .pause(6000)
            .click('.image-wrapper .comp-image')
            .doubleClick()
            .pause(2000)
            //make frame null to perform drag drop from left
            .frame(null)
            //array of image by names
            .waitForElementVisible('.x-tab-panel-body-noborder .x-form-text.x-form-field',6000)
            .click('.x-tab-panel-body-noborder .x-form-text.x-form-field')
            .setValue('.x-tab-panel-body-noborder .x-form-text.x-form-field',sliderimgs[index])
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
                        .setValue('.x-form-element input[name="./alt"]',imgsalttext[index])
                        .pause(2000)
                        //Configuration tab for image to render in ie8(default image)
                        .click("[style*='visibility: visible;'] .x-tab-panel-header-plain ul li:nth-child(3)")
                        .pause(1000)
                        .click('.x-form-element input[name="./defaultImage"]')
                        .pause(1000)
                        .setValue('.x-form-element input[name="./defaultImage"]',ieeightimgs[index])
                        .click("[style*='visibility: visible;'] .x-form-field-trigger-wrap input[name='./defaultImage']+.x-form-search-trigger")
                        .pause(4000)
                        .click(".cq-browsedialog .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(3000)
                        //Configuration tab for  animation image(hover image)
                        .click('.x-form-element input[name="./hoverImage"]')
                        .pause(1000)
                        .setValue('.x-form-element input[name="./hoverImage"]',hoverimgs[index])
                        .click("[style*='visibility: visible;'] .x-form-field-trigger-wrap input[name='./hoverImage']+.x-form-search-trigger")
                        .pause(4000)
                        .click("[style*='visibility: visible;'].cq-browsedialog .x-btn.cq-btn-ok.x-btn-noicon")
                        .pause(3000)
                        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
                });
            }); 
           // console.log("---imag loop---");
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
    Shelf_props:Shelf_props,
    titleComp:titleComp,
    titleInput:titleInput,
    headerType:headerType,
    slidertitleComp:slidertitleComp,
    slidertextComp:slidertextComp,
    CTAType:CTAType,
    image_comp:image_comp,
    activate_page:activate_page,
   Ending_the_session:Ending_the_session
};
