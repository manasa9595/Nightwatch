var props = require('../components/other_comp/preapplySmallBusinessLoan_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    ctaComp = require('../components/cta/cta.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js'),
    rteComp = require('../components/Rte/rte.js');


module.exports = {
//Flow_1
/*"Check for appButtonNew click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2NewCustomerBtn = pageObj.elements.f2NewCustomerBtn.selector,
            size = client.globals.size.widths;
            signup.navigate()
            //.signInAsAdmin();
        client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2NewCustomerBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2NewCustomerBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2NewCustomerBtn.selector,'color','rgba(81, 108, 179, 1)');
                    this.assert.cssProperty(pageObj.elements.f2NewCustomerBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },
"Check click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
           // PBtns = pageObj.elements.Btns.selector,
             btnfour = 
            size = client.globals.size.widths;
            signup.navigate()
            //.signInAsAdmin();
        client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
         client.elements('css selector',PBtns, function (result) {
                    result.value.forEach(function(element,index){
                      client.pause(2000);
                      client.elementIdClick(element.ELEMENT,function() {
                         console.log('.....'+ element.ELEMENT+'---->'+index);


                      });
                    });
            }); 
         //client.end();


        client.elements('css selector',PBtns, function (result) {
                result.value.forEach(function(element,index){
                  client.pause(2000);
                  client.elementIdClick(element.ELEMENT,function() {
                     console.log('.....'+ element.ELEMENT+'---->'+index);
                     });
                      for(var n=0; n<=4; n++){
                        console
                        client.click(".preapply-shelf .toggle-shelf.theme-purple .apptogglebtn4 .btnwrapper:nth-child(" + n+1 + ")  .appbtn")
                            
                      
                      }

                  
               });
        }); 
}

"Check click properties": function(client) {
    var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
        signup = client.page.signup(),
        callback = client.page.common(),
        PBtns = pageObj.elements.Btns.selector,
        btnfour =
        size = client.globals.size.widths;
    signup.navigate()
    //.signInAsAdmin();
    client.waitForElementVisible("body", 5000);
    client.maximizeWindow();

    client.click('.preapply-shelf .toggle-shelf.theme-bluebg .apptogglebtn2 .btnwrapper:nth-child(odd) .appbtn', function(result) {
        for (var n = 0; n <= 3; n++) {
            client.click(".preapply-shelf .toggle-shelf.theme-purple .apptogglebtn4 .btnwrapper:nth-child(" + (n + 1) + ")  .appbtn", function(result) {
                console.log("hieeeeeeeeeee");
                this.pause(4000);
                //client.click('.preapply-shelf .toggle-shelf.theme-purple .apptogglebtn1 .btnwrapper button[data-target-id="Check_and_read_this"]')
                client
                    .elements('css selector', '.preapply-shelf .toggle-shelf.theme-purple .apptogglebtn1 .btnwrapper button[data-target-id="Check_and_read_this"]', iterate)

                // this.pause(4000);
            });
            this.pause(3000);
        }

    });

    function iterate(elements) {
        elements.value.forEach(function(el) {
            client.click(el.ELEMENT, function(result) {
                this.assert.cssProperty('.download_shelf', 'display', 'block')
            });
        });
    }
}
*/


//CLICK_1
        //appButton click properties check 
      "Check for appButtonNew click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2NewCustomerBtn = pageObj.elements.f2NewCustomerBtn.selector,
            size = client.globals.size.widths;
            signup.navigate()
            //.signInAsAdmin();
        client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2NewCustomerBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2NewCustomerBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2NewCustomerBtn.selector,'color','rgba(81, 108, 179, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2NewCustomerBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

//CLICK_2
    "Check for appButtonSole click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2SoleTraderBtn = pageObj.elements.f2SoleTraderBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2SoleTraderBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2SoleTraderBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2SoleTraderBtn.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2SoleTraderBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },


//CLICK_3
    "Check for appButtonRead click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ReadBtn = pageObj.elements.f2ReadBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();

        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2ReadBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2ReadBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2ReadBtn.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2ReadBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

//CLICK_4
    "Check for appButtonTerms click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2TermsBtn = pageObj.elements.f2TermsBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();

        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2TermsBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2TermsBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2TermsBtn.selector,'color','rgba(0, 159, 172, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2TermsBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

//CLICK1_BLOCK1

    //shelf padding check 
    "Check for shelf padding": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ShelfPadding = pageObj.elements.f2ShelfPadding.selector,
            size = client.globals.size.widths;
            // client.waitForElementVisible("body",5000);
            client.maximizeWindow();
            for (scr in size) {
                client.resizeWindow(size[scr].width, size[scr].height);
                properties = props.toggleShelfProps.f2shelfPadProps(scr);
                callback.multiloop(client, f2ShelfPadding, properties, scr);
            }

    },

    //title properties check 
    "Check for title properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2shelfTitle = pageObj.elements.f2shelfTitle.selector,
            f2FourBtnshelfTitle = pageObj.elements.f2FourBtnshelfTitle.selector,
            f2SingleArticleTitle = pageObj.elements.f2SingleArticleTitle.selector,
            size = client.globals.size.widths;
        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.multiloop(client, f2shelfTitle, properties, scr);
            callback.multiloop(client, f2FourBtnshelfTitle, properties, scr);
            callback.multiloop(client, f2SingleArticleTitle, properties, scr);
        }

    },

    //titleWrapper properties check 
    "Check for titleWrapper properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2shelfTitleWrap = pageObj.elements.f2shelfTitleWrap.selector,
            f2FourBtnTitleWrap = pageObj.elements.f2FourBtnTitleWrap.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2shelfTitleWrapProps(scr);
            callback.multiloop(client, f2shelfTitleWrap, properties, scr);
            callback.multiloop(client, f2FourBtnTitleWrap, properties, scr);
        }

    }, 

    //buttonWrapper properties check 
    "Check for buttonWrapper properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2shelfButtonWrap = pageObj.elements.f2shelfButtonWrap.selector,
            f2FourBtnWrap = pageObj.elements.f2FourBtnWrap.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2shelfButtonWrapProps(scr);
            callback.multiloop(client, f2shelfButtonWrap, properties, scr);
            callback.multiloop(client, f2FourBtnWrap, properties, scr);
        }

    },

    //Two Toggle Button properties check 
    "Check for Two Toggle Button properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2shelfAppButton = pageObj.elements.f2shelfAppButton.selector,
            f2shelfAppButtonEven = pageObj.elements.f2shelfAppButtonEven.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2shelfAppButtonProps(scr);
            callback.multiloop(client, f2shelfAppButton, properties, scr);
            properties = props.toggleShelfProps.f2shelfAppButtonEvenProps(scr);
            callback.multiloop(client, f2shelfAppButtonEven, properties, scr);
        }
    },
        //Two Toggle Button properties check 
    "Check for Four Toggle Button properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2shelfFourBtn = pageObj.elements.f2shelfFourBtn.selector,
            f2shelfFourBtnEven = pageObj.elements.f2shelfFourBtnEven.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2shelfAppButtonProps(scr);
            callback.multiloop(client, f2shelfFourBtn, properties, scr);
            properties = props.toggleShelfProps.f2shelfAppButtonEvenProps(scr);
            callback.multiloop(client, f2shelfFourBtnEven, properties, scr);
        }
    },
        //Two Toggle Button properties check 
    "Check for Single Toggle Button properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2shelfSingleBtn = pageObj.elements.f2shelfSingleBtn.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2shelfAppButtonProps(scr);
            callback.multiloop(client, f2shelfSingleBtn, properties, scr);
        }
    }, 

//CLICK1_BLOCK2

    //buttonWrapper Child properties check 
    "Check for buttonWrapperChild properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2FourBtnChildWrap = pageObj.elements.f2FourBtnChildWrap.selector,
            f2FourBtnEvenChild = pageObj.elements.f2FourBtnEvenChild.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2FourBtnChildProps(scr);
            callback.multiloop(client, f2FourBtnChildWrap, properties, scr);
        }

    },

    //buttonWrapper Even Child properties check 
    "Check for buttonWrapperEvenChild properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2FourBtnEvenChild = pageObj.elements.f2FourBtnEvenChild.selector,
            size = client.globals.size.widths;

        //client.waitForElementVisible("body",5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2FourBtnEvenChildProps(scr);
            callback.multiloop(client, f2FourBtnEvenChild, properties, scr);
        }

    }, 

//CLICK1_BLOCK3

    //Single Article shelf padding check
   "Check for Articleshelf paddingNEW": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ArticlePaddingNEW = pageObj.elements.f2ArticlePaddingNEW.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2ArticleShelfPaddingNEW(scr);
            callback.multiloop(client, f2ArticlePaddingNEW , properties, scr);

        }
    }, 
    "Check for Articleshelf paddingOLD": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ArticlePaddingOLD = pageObj.elements.f2ArticlePaddingOLD.selector,
            f2ArticlePaddingGrey = pageObj.elements.f2ArticlePaddingGrey.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2ArticleShelfPaddingOLD(scr);
            callback.multiloop(client, f2ArticlePaddingOLD , properties, scr);
            callback.multiloop(client, f2ArticlePaddingGrey , properties, scr);

        }
    }, 

    //Personal details title margin check
    "Check for subtitle1 margin": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2Articleh3Mar = pageObj.elements.f2Articleh3Mar.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2ArtShelfh3MarProps(scr);
            callback.singleElem(client, f2Articleh3Mar , properties, scr);

        }
    }, 

     //Personal details title margin check
    "Check for content": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ArticleContentMar = pageObj.elements.f2ArticleContentMar.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2ArtShelfListProps(scr);
            callback.multiloop(client, f2ArticleContentMar , properties, scr);

        }
    }, 

    //additional rte margin check
    "Check for additonal rte margin": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2SingleArtRTE = pageObj.elements.f2SingleArtRTE.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2SingleArtRTEProps(scr);
            callback.multiloop(client, f2SingleArtRTE , properties, scr);
        }
    },

     //Personal details title margin check
    "Check for subtitle2 margin": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ArticleSubtitMar = pageObj.elements.f2ArticleSubtitMar.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2ArtShelfSubProps(scr);
            callback.multiloop(client, f2ArticleSubtitMar , properties, scr);
        }
    }, 

   "Check for primary cta properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2PrimaryCTAMar = pageObj.elements.f2PrimaryCTAMar.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2PrimaryCTAMarProps(scr);
            callback.multiloop(client, f2PrimaryCTAMar , properties, scr);

        }       
    },

     "Check for primary cta padding properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2PrimaryCTA = pageObj.elements.f2PrimaryCTA.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2PrimaryCTAProps(scr);
            callback.multiloop(client, f2PrimaryCTA , properties, scr);

        }       
    },

    "Check for secondary cta properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2SecCTA = pageObj.elements.f2SecCTA.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2SecCTAMarProps(scr);
            callback.multiloop(client, f2SecCTA , properties, scr);

        }
    },

    "Testing Hover effect" : function(client){
       var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            callback = client.page.common(),
            size = client.globals.size.widths,
            f2SecCTA = pageObj.elements.f2SecCTA.selector;

             for(scr in size){
                properties = props.toggleShelfProps.HoverstyleProps(scr);
                callback.multiloop(client,f2SecCTA,properties,scr);
             }

           client.maximizeWindow();
            
            client.moveToElement(f2SecCTA, 0, 0, function (result) {
                client.pause(500)
            });

            var properties1 = props.toggleShelfProps.HoverProps();
            callback.pseudoSingleElem(client,f2SecCTA,':after',properties1);
    },


   "Check for download shelf padding": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dShelfPadding = pageObj.elements.dShelfPadding.selector,
            size = client.globals.size.widths;
        
       // client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dShelfPaddingProps(scr);
            callback.singleElem(client, dShelfPadding, properties, scr);
        }

    },
    //check for download shelf title wrapper properties
      "Check for download shelf title wrapper props": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dTitleWrapper = pageObj.elements.dTitleWrapper.selector,
           
            size = client.globals.size.widths;
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dTitleWrapperProps(scr);
            callback.singleElem(client, dTitleWrapper , properties, scr);

        }
      
    },
    //download shelf title properties check 
    "Check for download shelf title properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dshelfTitle = pageObj.elements.dshelfTitle.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.singleElem(client, dshelfTitle, properties, scr);
        }

    },
    //check for download shelf text wrapper properties
      "Check for download shelf text wrapper props": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dTextWrapper = pageObj.elements.dTextWrapper.selector,
           
            size = client.globals.size.widths;
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dTextWrapperProps(scr);
            callback.singleElem(client, dTextWrapper , properties, scr);

        }
      
    },
    //check for download shelf content properties
    "Check for download shelf content props": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dContent = pageObj.elements.dContent.selector,
            
            size = client.globals.size.widths;
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);          
            callback.singleElem(client, dContent , properties, scr);
            

        }
      
    },
    //check for download shelf link wrapper properties
      "Check for download shelf link wrapper props": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dLinkWrapper = pageObj.elements.dLinkWrapper.selector,
           
            size = client.globals.size.widths;
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dLinkWrapperProps(scr);
            callback.singleElem(client, dLinkWrapper , properties, scr);

        }
      
    },
    //check for download shelf link properties
      "Check for download shelf link props": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dLink = pageObj.elements.dLink.selector,          
            size = client.globals.size.widths;
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dLinkProps(scr);
            callback.singleElem(client, dLink , properties, scr);

        }
      
    }, 

     "Check for appButtonLTD click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2LTDBtn = pageObj.elements.f2LTDBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2LTDBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2LTDBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2SoleTraderBtn.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2LTDBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

     "Check for appButtonPartnership click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2PartnershipBtn = pageObj.elements.f2PartnershipBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2PartnershipBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2PartnershipBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2SoleTraderBtn.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2PartnershipBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

    "Check for appButtonLLP click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2LLPBtn = pageObj.elements.f2LLPBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2LLPBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2LLPBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2SoleTraderBtn.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2LLPBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },
//Flow_2
//CLICK1
    "Check for appButtonExisting click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2ExistingCustomerBtn = pageObj.elements.f2ExistingCustomerBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2ExistingCustomerBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2ExistingCustomerBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2ExistingCustomerBtn.selector,'color','rgba(81, 108, 179, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2ExistingCustomerBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

    "Check for YesButtonExisting with cta click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2YesBtnwithcta = pageObj.elements.f2YesBtnwithcta.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2YesBtnwithcta.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2YesBtnwithcta.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2YesBtnwithcta.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2YesBtnwithcta.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

    //single art

    "Check for NoButtonExisting with cta click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2NoBtnwithcta = pageObj.elements.f2NoBtnwithcta.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2NoBtnwithcta.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2NoBtnwithcta.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2NoBtnwithcta.selector,'color','rgba(111, 44, 145, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2NoBtnwithcta.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },


    //additional rte margin check
    "Check for rte with paragraph margin check": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2SingleArtPContent = pageObj.elements.f2SingleArtPContent.selector,
            size = client.globals.size.widths;
            //console.log(signup.url);
            //client.url(signup.url);
            //signup.navigate();
            //.signInAsAdmin();
            client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.f2SingleArtPContentProps(scr);
            callback.multiloop(client, f2SingleArtPContent , properties, scr);
        }
    },
    "Check for YesButton click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2YesBtn = pageObj.elements.f2YesBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2YesBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2YesBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2YesBtn.selector,'color','rgba(0, 159, 172, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2YesBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

     "Check for NoButton click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2NoBtn = pageObj.elements.f2NoBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //properties = props.toggleShelfProps.f2buttonClickProps(scr);
            //callback.multiloop(client, f2NewCustomerBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
                client.click(pageObj.elements.f2NoBtn.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2NoBtn.selector,'display','block');
                    //this.assert.cssProperty(pageObj.elements.f2NoBtn.selector,'color','rgba(0, 159, 172, 1)');
                    //this.assert.cssProperty(pageObj.elements.f2NoBtn.selector,'background-color','rgba(255, 255, 255, 1)');
                //this.pause(1000);
                });
        }
    },

    "Check for secondaryCTA click properties": function(client) {
        var pageObj = client.page.preapplySmallBusinessLoan_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            f2SecondayCTA = pageObj.elements.f2SecondayCTA.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();

        client.moveToElement(f2SecondayCTA, 0, 0, function (result) {
                client.pause(500)
            });

            var properties1 = props.toggleShelfProps.HoverProps();
            callback.pseudoSingleElem(client,f2SecondayCTA,':after',properties1);

        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
                client.click(pageObj.elements.f2SecondayCTA.selector, function(result) {
                    this.assert.cssProperty(pageObj.elements.f2SecondayCTA.selector,'line-height','26px');
                    this.assert.cssProperty(pageObj.elements.f2SecondayCTA.selector,'text-decoration-line','none');
                });
        }
    }
}