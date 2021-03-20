
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
            .click(".x-btn.cq-btn-ok.x-btn-noicon")
            .pause(5000);
    },
    contextualAccordionSel =function(client){
        return client
            .pause(3000)
            .verify.visible('.acordion-animation .auth--info')
            .click('.acordion-animation .auth--info')
            .doubleClick()
            .pause(5000);
    },
    contextAccordTitleInput = function(client,contextAccordTitle){
        var property = values.data,
        titleInputSel=property['$titleInputSel'];
        return client
            .pause(10000)
            .waitForElementVisible(titleInputSel, 60000)                                       
            .setValue(titleInputSel, contextAccordTitle)
            .pause(5000)
            .click(".x-btn.cq-btn-ok.x-btn-noicon");
    },

  /*  Accheader=function(client,selector){ //backup
         var property = values.data,
            classTitle=property['$classTitle'],
            contextAccordTitle=property['$contextAccordTitle'];
    return client
        .elements('css selector','.acordion-animation .auth--info',function(result){
           // console.log("---------------outside Loop ----------");
            result.value.forEach(function(element,index) {
               // console.log("-----inside Loop ----------");
                client.elementIdValue(element.ELEMENT, function(res){
                        client.click('.acordion-animation .auth--info')
                        .doubleClick();
                         client.pause(5000);
                         //console.log("------- "+ element.ELEMENT+" ------");
                       client.elements('css selector', 'input[name="./text"]',function (result) {
                            var elstext=["reward","accounts","enable"],indx=0;
                            console.log(result.value.length+1);
                            for (let i = 0; i <=result.value.length; i++) {
                                client.elementIdValue(result.value[i].ELEMENT, elstext[i]);
                              client.pause(2000);
                              client.verify.visible('.x-btn.cq-btn-ok');
                              client.click('.x-btn.cq-btn-ok');
                            }
                          });
                        client.pause(3000);
                       okBtns(client,"OK");
                });
            });
        });
    },*/
Accheader=function(client){
    var header=["reward","accounts","enable","reward1","accounts1","enable1","reward2","accounts2","enable2"];
    var acc=["acc1","acc2","acc3","acc4","acc5","acc6","acc7","acc8","acc9"]
    return client
    .elements('css selector','.acordion-animation .auth--info',function(result){
        result.value.forEach(function(element,index){
            client.pause(2000);
            client.elementIdClick(element.ELEMENT)
                  .doubleClick();
             client.pause(2000);
            client.click('.x-tab-panel-bwrap .x-form-element input[name="./text"]')
            .pause(2000)
            client.setValue("[style*='visibility: visible;'] input[name='./text']",header[index])
            client.click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            .pause(2000)
        })
    })
},
AccContent=function(client){
        var acc=["acc1","acc2","acc3","acc4","acc5","acc6","acc7","acc8","acc9"];
        var property = values.data,
                        rteInputSel=property['$rteInputSel'];
        return client
        client.perform(() => {
            client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
            client.frame(result.value)
                client.elements('css selector','.panel-body .auth--info',function(result){
                result.value.forEach(function(element,index){
                     client.pause(2000);
                     client.elementIdClick(element.ELEMENT)
                          .doubleClick();
                     client.pause(2000);
                        
                        client.waitForElementPresent('.x-html-editor-wrap iframe', 6000)
                        client.getAttribute('.x-html-editor-wrap iframe', 'id',(result) => {
                            client.frame(result.value);
                            client.waitForElementVisible('body#CQrte', 5000)
                            .click('body#CQrte p')
                            .pause(3000)
                            .setValue(rteInputSel, acc[index] );
                            client.frame(null)
                        })
                        .perform(() => { 
                            client.getAttribute('#cq-cf-framewrapper iframe', 'id',(result) => {
                                client.frame(result.value)
                                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                                .pause(2000);
                            })
                        })

                    })  
                })
            })
        })     
};
module.exports = {
                titleComp:titleComp,
                titleInput:titleInput,
                contextualAccordionSel:contextualAccordionSel,
                contextAccordTitleInput:contextAccordTitleInput,              
                Accheader:Accheader, 
                AccContent:AccContent        
};
