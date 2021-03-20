
var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client){
    var property = values.data,
        titleInputSel=property['$titleInputSel'];
        return client
            .pause(3000)
            .verify.visible('.auth--info')  //select title component
            .click('.auth--info')
            .doubleClick()

            .pause(10000)
            .waitForElementVisible(titleInputSel, 60000)                                       
            .setValue(titleInputSel, 'Standalone Compliance')  //title input
            .pause(5000)

            .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            .click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
    textWrapper = function(client){
    var property = values.data,
        titleInputSel=property['$titleInputSel'];
        return client
                    .pause(5000)
                    .verify.visible('.textWrapper .auth--info')  //select text wrapper
                    .click('.textWrapper .auth--info')
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
                         client.setValue(rteInputSel, standalone_rteContent ); //text wrapper input
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
    },
    parsysSelect = function(client){
            return client
            .frame(null);
            console.log("outside")
            client.waitForElementPresent('#cq-cf-frame', 200000)
            .perform(() => {
                console.log("Inside")
                    client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                      client
                        .frame(result.value)
                         client.waitForElementVisible('.cq-wcm-edit', 10000);
                         client.click('.cq-wcm-edit .cq-editrollover-insert-container')
                         .pause(5000)
                         .doubleClick().pause(5000);
                    });
            });
         },     
    dragdropFunc = function(client,shelves_group_under_sidekick){
            return client
            .waitForElementPresent('div[class*="cq-insertdialog"] .x-panel-body .cq-sidekick-buttons span', 10000)
            .pause(9000)
            .elements('css selector','div[class*="cq-insertdialog"] .x-panel-body .cq-sidekick-buttons span',function(result){
                result.value.forEach(function(element) {
                    client.elementIdText(element.ELEMENT, function(res){
                        var getval=res.value;
                        console.log(getval+""+""+res.value);
                         //values calling from author_data.js                         
                            if(getval===shelves_group_under_sidekick){
                                client.elementIdClick(element.ELEMENT)
                                .pause(9000)
                            } 
                    });
                });
            }); 
         },
    compSelection = function(client,ComponentSel,getcompShelfName){
            return client
            .elements('css selector','div[class*="cq-insertdialog cq-insertdialog-master"] div[class*="cq-cmpts-Responsive_"] .x-panel-bwrap button.x-btn-text',function(result){
                result.value.forEach(function(element) {
                    client.elementIdText(element.ELEMENT, function(res){
                        var getval=res.value;
                        //console.log(getval,getcompShelfName);
                        
                            if(getval===getcompShelfName){

                                console.log("getval"+getval+"getcompShelfName"+getcompShelfName);
                                client.elementIdClick(element.ELEMENT)
                                .pause(9000)
                                .click(".x-btn.cq-btn-ok.x-btn-noicon")
                                .pause(5000);
                            } 
                    });
                });
            });     
         },
         compSelectiontemp = function(client,ComponentSel){
            var ComponentSel =property['$inPageNavsel'];
            return client
            .waitForElementPresent(ComponentSel, 10000)
            .pause(9000)
            .click(ComponentSel)
            .pause(9000)
            .click(".x-btn.cq-btn-ok.x-btn-noicon");
         },
    hideTitle = function(client){
        return client
            .pause(4000)
            //.verify.visible('.cq-editbar[class$="standalone"]')
            .click('.cq-editbar[class$="standalone"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
            .pause(1000)
            .click("[style*='visibility: visible;'] .x-form-element [class*='hideTitle'] .x-form-check-wrap .x-form-checkbox")
            .pause(2000)
            .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
    },
    Shelf_props=function(client){
        return client
                .pause(3000)
                .verify.visible('.cq-editbar[class$="standalone"]')
                .click('.cq-editbar[class$="standalone"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
    },

    dropdown=function(client){
            return client
                .pause(5000)
                .verify.visible('.x-form-element .x-form-field-trigger-wrap')
                .click('.x-form-element .x-form-field-trigger-wrap')
                .pause(3000)
                .elements('css selector','.x-combo-list[class*="articleCount"] .x-combo-list-inner .x-combo-list-item',function(result){
                     //console.log("---Before for each---"+result.value.length);
                    result.value.forEach(function(element) {
                        client.elementIdText(element.ELEMENT, function(res){
                             //console.log("---Inside for each---"+res.value.length);
                            var getval=res.value,
                                property = values.data,
                                articlesCount=property['$articlesCount'];
                               // console.log("---"+articlesCount);
                                if(getval==articlesCount){
                                    console.log("---- Drop down values & ----"+getval+"----- Auhtored value ----"+articlesCount);
                                    client.elementIdClick(element.ELEMENT)
                                } 
                        });
                    });
                })
                .pause(2000)
                .verify.visible("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");
        };


module.exports = {
                titleComp:titleComp,
                textWrapper:textWrapper,
                rteInput:rteInput,
                parsysSelect:parsysSelect,
                dragdropFunc:dragdropFunc,
                Shelf_props:Shelf_props,
                dropdown:dropdown,
                hideTitle:hideTitle,
                compSelection:compSelection,
                compSelectiontemp:compSelectiontemp
                
};
