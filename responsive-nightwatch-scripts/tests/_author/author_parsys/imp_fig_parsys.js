
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
                .verify.visible('.x-form-item input[name="./shelfId"]')
                .click('.x-form-item input[name="./shelfId"]')
                .setValue('.x-form-item input[name="./shelfId"]','Important figures-Authored')  
                .pause(5000) 
                .verify.visible("[style*='visibility: visible;'] .x-form-element [class*='hideTitle'] .x-form-check-wrap .x-form-checkbox")
                client.click("[style*='visibility: visible;'] .x-form-element [class*='hideTitle'] .x-form-check-wrap .x-form-checkbox")
                .waitForElementVisible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon",2000)
                 client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(2000)
    },
    titleComp = function(client){
        return client
            .pause(3000)
            .verify.visible('.auth--info')
            .click('.auth--info')
            .doubleClick()
            .pause(5000);
    },
    //populating data for title
    titleInput = function(client,titleText){
        var property = values.data,
        titleInputSel=property['$titleInputSel'];
        return client
            .pause(10000)
            .waitForElementVisible(titleInputSel, 60000)                                       
            .setValue(titleInputSel, titleText)
            .pause(5000)
            //.click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
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

    titComp=function(client){     
    var title_text=['Title goes here','Title goes here','Title goes here','Title goes here'];
        return client
        .elements('css selector','.impfigcomp .item-list .title-wrapper .auth--info',function(result){
                    result.value.forEach(function(element,index){

                    client
                        .pause(2000)
                        .elementIdClick(element.ELEMENT)
                        .doubleClick()
                        .pause(2000)
                        .click("[style*='visibility: visible;'] .x-form-field[name='./text']")
                        .pause(2000)
                        .setValue("[style*='visibility: visible;'] .x-form-field[name='./text']",title_text[index])
                        .pause(3000)
                        .click('[style*="visibility: visible;"] .x-form-element .x-form-element .x-form-field-wrap')
                        .pause(3000)
                        .waitForElementVisible('[style*="visibility: visible;"].x-layer .x-combo-list-item:nth-child(6)', 15000, false)
                        .click('[style*="visibility: visible;"].x-layer .x-combo-list-item:nth-child(6)')
                        .pause(3000)
                        client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                    })
                })
             
    },

    desccomp=function(client,selector,textval){
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
                        .pause(3000)
                        client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                    })
                })
    },
   
    
    infoTitle = function(client){
        return client
            /*.useXpath()
            .waitForElementVisible('(//button[text()="Edit"])[2]', 10000, false)
            .click('(//button[text()="Edit"])[2]')
            .useCss()
            //.pause(3000)*/
            /*.waitForElementVisible('.x-btn-over .x-btn-small .x-btn-mc .x-btn-text', 15000, false)
            .click('.x-btn-over .x-btn-small .x-btn-mc .x-btn-text')
            .pause(3000)*/
            .waitForElementVisible('#ext-comp-1088 #cq-gen48', 10000)
            .click('#ext-comp-1088 #cq-gen48')
            //.click('.x-form-text.x-form-field.x-form-invalid')
            .pause(3000)
            .setValue(".x-form-text.x-form-field.x-form-invalid", 'Title of the Accordion goes here' )
             .pause(5000)
            .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },

    acccTitle=function(client){
    return client
            .pause(3000)
            .verify.visible('.cq-element-master-par_47importantfigures_47item_95accordion_47title .auth--info')
            .click('.cq-element-master-par_47importantfigures_47item_95accordion_47title .auth--info')
            .doubleClick()
            .pause(5000)
            .setValue("[style*='visibility: visible;'] .x-form-text.x-form-field.x-form-invalid", 'Purchase APR')
            .pause(5000)
            .click('.x-form-text.x-form-field.x-trigger-noedit')
            .pause(5000)
            .useXpath()
            .waitForElementVisible('//div[text()="H3-custom"]', 10000, false)
            .click('//div[text()="H3-custom"]')
            .useCss()
            .pause(5000)
            .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    rteWrapper=function(client){
    return client
            .pause(3000)
            .verify.visible('.rteWrapper .auth--info')
            .click('.rteWrapper .auth--info')
            .doubleClick()
            .pause(5000)
        
    },
    rteInput = function(client,impfig_rteContent){
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

                         client.pause(5000);
                         client.setValue(rteInputSel, impfig_rteContent );
                         client.frame(null);
                    });


            })
            .perform(() => {
                client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                  client
                    .frame(result.value)
                     .waitForElementVisible('.cq-wcm-edit', 10000);
                    
                });
            })

         .pause(5000)
            .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");                       
    };



module.exports = {
                UniqueShelfId:UniqueShelfId,
                titleComp:titleComp,
                titleInput:titleInput,
                headerType:headerType,
                titComp:titComp,
                desccomp:desccomp,
                infoTitle:infoTitle,
                acccTitle:acccTitle,
                rteWrapper:rteWrapper,
                rteInput:rteInput
               
                
};
