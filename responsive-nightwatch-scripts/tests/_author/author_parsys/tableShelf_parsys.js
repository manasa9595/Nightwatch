var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client) {
        return client
            .pause(20000)
            .verify.visible('.table-shelf-title-wrapper .auth--info')
            .click('.table-shelf-title-wrapper .auth--info')
            .doubleClick()
            .pause(9000);
    },
    //populating data for title
    titleInput = function(client, titleText) {
        var property = values.data,
            titleInputSel = property['$titleInputSel'];
        return client
            .pause(10000)
            .waitForElementVisible(titleInputSel, 60000)
            .setValue(titleInputSel, titleText)
            .pause(10000)
            .click(".x-form-element .x-form-field-wrap input.x-trigger-noedit")
        //.pause(10000);

    },
    //click on drop down
   /* multipletbns = function(client, selector, item) {
        console.log('hello');
        return client
            .elements('css selector', selector, function(result) {
                result.value.forEach(function(element, index) {
                    client.elementIdText(element.ELEMENT, function(res) {
                        var getval = res.value;
                        console.log(getval);
                        if (getval == item && index != 0 || index != 1) {
                            client.elementIdClick(element.ELEMENT)
                                .pause(4000);
                        }
                    });
                });
            });
        client.pause(5000)
            .click(".x-btn.cq-btn-ok.x-btn-noicon");
    };*/

//double click on text component
textComp = function(client, selector) {
        return client
            .pause(3000)
            .verify.visible(selector)
            .click(selector)
            .doubleClick()
            .pause(5000);
    },
    //populating data for text
    textInput = function(client, populateText) {
        var property = values.data,
            textInputSel = property['$textInputSel'];
        return client
            .pause(10000)
            .waitForElementVisible(textInputSel, 60000)
            .setValue(textInputSel, populateText)
            .pause(9000)
        //.click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
    dropDownInput = function(client, dropDownText) {
        var property = values.data,
            textInputSel = property['$classTitle'];
        return client
            .pause(10000)
            .waitForElementVisible(textInputSel, 60000)
            .setValue(textInputSel, dropDownText)
            .pause(9000)
        //.click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
    //double click on CTA
    ctaClick = function(client) {
        return client
            .pause(3000)
            .verify.visible('.table-cta-wrapper')
            .click('.table-cta-wrapper')
            .doubleClick()
            .pause(7000)
            .click('.x-form-text');
    },

    ctaInputName = function(client, ctapopulateText) {
        var property = values.data,
            ctaInputSel = property['$ctaInputSel'];
        return client
            .pause(3000)
            .waitForElementVisible(ctaInputSel, 60000)
            .setValue(ctaInputSel, ctapopulateText)
            .pause(7000);

    },
    //click of any button on tool bar(edit,cut,copy,paste)
    toolbarClick = function(client, shelfClass) {
        var property = values.data,
            shelfClass = property['$table_editBtnClick'];
        return client
            .waitForElementVisible(shelfClass, 60000)
            .click(shelfClass);

    },
     dropdownLink = function(client) {
        return client
            .pause(5000)
            .verify.visible('.cq-tbtn.cq-tbtn-medium .x-btn-text')
            .click('.cq-tbtn.cq-tbtn-medium .x-btn-text')
            .pause(5000);
    },
    optionBoxPopulate = function(client, optionTxtPopulate, optionValPopulate, okbtnClick) {
        var property = values.data,
            optionInputSel = property['$optionInputSel'],
            optionValSel = property['$optionValSel'];
        return client
            .pause(8000)
            .waitForElementVisible(optionInputSel, 60000)
            .setValue(optionInputSel, optionTxtPopulate)
            .pause(2000)
            .waitForElementVisible(optionValSel, 7000)
            .setValue(optionValSel, optionValPopulate)
            .pause(7000)
            .click(okbtnClick);
    },
    tableLoopTitle=function(client){
        var textval=["Title here","Title here","Title here","Title here","Title here"];
    return client
            .elements('css selector','div.table_container .row0.table_row',function(result){
            console.log("---------------outside Loop ----------");
            result.value.forEach(function(element,index) {
               console.log("-----inside Loop ----------");
              
                        client.elementIdClick(element.ELEMENT)
                        .doubleClick();
                         client.pause(5000);
                         client.click('input[name="./text"]')
                                .pause(3000)
                                .setValue('input[name="./text"]',textval[index]);

                        client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon");

                         //console.log("------- "+ element.ELEMENT+" ------");
                       /*client.elements('css selector', 'input[name="./text"]',function (result) {
                            //var elstext=["Title here"],indx=0;
                            var titText = "Title here";
                            console.log(result.value.length+1);
                            for (let i = 0; i <=result.value.length; i++) {
                                this.elementIdValue(result.value[i].ELEMENT, titText);
                              client.pause(2000);
                             /* client.verify.visible('.x-btn.cq-btn-ok');
                              client.click('.x-btn.cq-btn-ok');*/
                            //}
                          //});
                        client.pause(3000);

                            });
        });
    },
    multipletbns = function(client, selector, item) {
        console.log('hello');
        return client
            .elements('css selector', selector, function(result) {
                result.value.forEach(function(element, index) {
                    client.elementIdText(element.ELEMENT, function(res) {
                        var getval = res.value;
                        console.log(getval);
                        if (getval == item && index != 0 || index == 1) {
                            client.elementIdClick(element.ELEMENT)
                                .pause(4000);
                        }
                    });
                });
            });
    };





/*titleLink=function(client,titlelinkurl){
                            return client.pause(3000)
                                               .waitForElementVisible('.x-form-field-wrap input[name="./linkUrl"]',5000)
                                               .setValue('.x-form-field-wrap input[name="./linkUrl"]',titlelinkurl)
                                               .pause(3000);
            },
            tooltiptext=function(client,tooltipval){
                            return client.pause(3000)
                                                            .waitForElementVisible('.x-form-element input[name="./tooltiptext"]',5000)
                                                            .setValue('.x-form-element input[name="./tooltiptext"]',tooltipval)
                                                            .pause(3000);
            },
//click of any button on tool bar(edit,cut,copy,paste)
 toolbarClick = function(client,shelfClass){
            var property = values.data,
                                            shelfClass =property['$shelfClass'];
                            return client
                                            .waitForElementVisible(shelfClass, 60000)                                            
                                            
 },
 multiplepageinConfigure=function(client,linkssel,ddsel,ddvalue,ctalinkval,ctatargeturlval,btnsel,btnval,ctaddval){
            return client.pause(5000)
            .element('css selector',linkssel,function(result){
                           // result.value.forEach(function(element) {
                               client.elementIdClick(element.ELEMENT)
                                        .doubleClick()
                                            setddvalues(client,ddsel,ddvalue,ctaddval);
                                            ctalinkconfigure(client,ctalinkval,ctaddval);
                                            ctatargetUrl(client,ctatargeturlval,ctaddval);
                                            multipletbns(client,btnsel,btnval)

                       //     });
            }); 

 },
 setddvalues = function(client,selector,textval,ctaddval){
            console.log('wroking---->'+ctaddval);
  return client.pause(1000)
                        .elements('css selector',selector,function(result){
                            result.value.forEach(function(element,index) {
                                            //var selectval=element.ELEMENT;
                                             pageinddsel(client,ctaddval);
                                                                             client.elementIdClick(element.ELEMENT);
                  client.pause(1000)
                    .elementIdValue(element.ELEMENT, textval)
                    .pause(3000)
                    .elementIdClick(element.ELEMENT)
                    .pause(5000);

                });
            });
            },
            ctalinkconfigure=function(client,ctalinkval,ctaddval){
                            return client.elements('css selector','.x-panel-bwrap input[name="./ctaLinkText"]',function(result){
                            result.value.forEach(function(element,index) {
                            if(ctaddval==0 && index==0){
                                                            client.elementIdClick(element.ELEMENT)
                                                                            .pause(3000)
                                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==1 && index==1){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==2 && index==2){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                             else if(ctaddval==3 && index==3){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                             else if(ctaddval==4 && index==4){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                             else if(ctaddval==5 && index==5){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                             else if(ctaddval==6 && index==6){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==7 && index==7){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==8 && index==8){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000)
                                                            .elementIdClear(element.ELEMENT);
                                                            client.elementIdValue(element.ELEMENT, ctalinkval)
                                                            .pause(3000);
                            }

                });
            });
                            
            },
            ctatargetUrl=function(client,ctatargeturlval,ctaddval){
                            return client.elements('css selector','.x-form-field-wrap input[name="./targetUrl"]',function(result){
                            result.value.forEach(function(element,index) {
                            if(ctaddval==0 && index==0){
                                                            client.elementIdClick(element.ELEMENT)
                                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==1 && index==1){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==2 && index==2){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==3 && index==3){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==4 && index==4){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==5 && index==5){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==6 && index==6){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==7 && index==7){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }
                            else if(ctaddval==8 && index==8){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                                                            client.elementIdValue(element.ELEMENT, ctatargeturlval)
                                                            .pause(3000);
                            }

                });
            });

            },
            pageinddsel=function(client,ctaddval){
                            return client.elements('css selector','div.x-form-label-left:nth-of-type(1) .x-panel-body-noborder div.x-hide-label:nth-child(2) .x-form-element',function(result){
                            result.value.forEach(function(element,index) {
                            if(ctaddval==0 && index==0){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==1 && index==1){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==2 && index==2){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==3 && index==3){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==4 && index==4){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==5 && index==5){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==6 && index==6){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==7 && index==7){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }
                            else if(ctaddval==8 && index==8){
                                                            client.elementIdClick(element.ELEMENT)
                                                            .pause(3000);
                            }

                });
            });
            },
            




            
            
            dropdownValue = function(client){
                            var property = values.data,
                                            editBtn =property['$editBtn'];
                            return client
                                            .waitForElementVisible('input[type="text"]', 60000)                                       
                                            .click('input[type="text"]')
                                            .pause(5000);
            }*/

//div.x-panel[class*='pagenavigation'] .x-panel-bwrap .x-panel-body-noheader button




module.exports = {
    titleComp: titleComp,
    titleInput: titleInput,
    textComp: textComp,
    textInput: textInput,
    multipletbns: multipletbns,
    ctaClick: ctaClick,
    dropDownInput: dropDownInput,
    toolbarClick:toolbarClick,
    dropdownLink:dropdownLink,
    optionBoxPopulate:optionBoxPopulate,
    tableLoopTitle:tableLoopTitle

    /* setddvalues:setddvalues,
     multiplepageinConfigure:multiplepageinConfigure,
     ctalinkconfigure:ctalinkconfigure,
     ctatargetUrl:ctatargetUrl,
     pageinddsel:pageinddsel,
     multipletbns:multipletbns,
     tooltiptext:tooltiptext,
     titleLink:titleLink*/
    

};