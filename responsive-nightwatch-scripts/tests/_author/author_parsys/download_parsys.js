
var values = require('../../_data/author_data.js');

//double click on title component
var titleComp = function(client){
        return client
            .pause(3000)
            .verify.visible('.title-wrapper .auth--info')
            .click('.title-wrapper')
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
            .click(".x-btn.cq-btn-ok.x-btn-noicon");

    },








































    titleLink=function(client,titlelinkurl){
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
                multipletbns=function(client,selector,item){
                console.log('hello');
                return client
                                                .elements('css selector',selector,function(result){
                                                                result.value.forEach(function(element,index) {
                                                        client.elementIdText(element.ELEMENT, function(res){
                                                                var getval=res.value;
                                                                console.log(getval);
                                                                if(getval==item && index!=0 || index!=1){
                                                                                                client.elementIdClick(element.ELEMENT)
                                                                                                                                .pause(4000);
                                                                } 
                                                                    });
                                                                });
                                                });
                };




                
                
                /*dropdownValue = function(client){
                                var property = values.data,
                                                editBtn =property['$editBtn'];
                                return client
                                                .waitForElementVisible('input[type="text"]', 60000)                                       
                                                .click('input[type="text"]')
                                                .pause(5000);
                }*/
                
                //div.x-panel[class*='pagenavigation'] .x-panel-bwrap .x-panel-body-noheader button
                




module.exports = {
                titleComp:titleComp,
                titleInput:titleInput,
                setddvalues:setddvalues,
                multiplepageinConfigure:multiplepageinConfigure,
                ctalinkconfigure:ctalinkconfigure,
                ctatargetUrl:ctatargetUrl,
                pageinddsel:pageinddsel,
                multipletbns:multipletbns,
                tooltiptext:tooltiptext,
                titleLink:titleLink
                //editBtnClick:editBtnClick
                
};
