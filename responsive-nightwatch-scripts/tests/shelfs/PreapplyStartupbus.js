var props = require('../components/other_comp/PreapplyStartupbus_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    ctaComp = require('../components/cta/cta.js');


module.exports = {
  /*  //shelf background color check 
    "Check for bg color": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            toggBgColor = pageObj.elements.toggBgColor.selector,
            size = client.globals.size.widths;
        signup.navigate()
        .signInAsAdmin();
        client.url(signup.url); 
        client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.bgProps(scr);
            callback.singleElem(client, toggBgColor, properties, scr);
        }

    }, */

    //shelf padding check 
    "Check for shelf padding": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            tShelfPadding = pageObj.elements.tShelfPadding.selector,
            size = client.globals.size.widths;
             signup.navigate()
        .signInAsAdmin();
        client.url(signup.url); 
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfPadProps(scr);
            callback.singleElem(client, tShelfPadding, properties, scr);
        }

    },
    //title properties check 
    "Check for title properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfTitle = pageObj.elements.shelfTitle.selector,
            yellowShelfTitle = pageObj.elements.yellowShelfTitle.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.singleElem(client, shelfTitle, properties, scr);

            properties = props.toggleShelfProps.titleColorProps(scr);
            callback.singleElem(client, shelfTitle, properties, scr);
            /* Only for natwest personal */
            properties = props.toggleShelfProps.yellowTitleColorProps(scr);
            callback.singleElem(client, yellowShelfTitle, properties, scr);
        }

    },
    //titleWrapper properties check 
    "Check for titleWrapper properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfTitleWrap = pageObj.elements.shelfTitleWrap.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfTitleWrapProps(scr);
            callback.singleElem(client, shelfTitleWrap, properties, scr);
        }

    },
    //buttonWrapper properties check 
    "Check for buttonWrapper properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfButtonWrap = pageObj.elements.shelfButtonWrap.selector,
            t4shelfButtonWrap = pageObj.elements.t4shelfButtonWrap.selector,
            t1shelfButtonWrap = pageObj.elements.t1shelfButtonWrap.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfButtonWrapProps(scr);
            callback.singleElem(client, shelfButtonWrap, properties, scr);
            callback.singleElem(client, t4shelfButtonWrap, properties, scr);
            callback.singleElem(client, t1shelfButtonWrap, properties, scr);
        }

    },
    //appButton properties check 
    "Check for appButton properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfAppButton = pageObj.elements.shelfAppButton.selector,
            yellowShelfAppButton = pageObj.elements.yellowShelfAppButton.selector,
            shelfAppButtonEven = pageObj.elements.shelfAppButtonEven.selector,
           // t4shelfAppButton = pageObj.elements.t4shelfAppButton.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfAppButtonProps(scr);
            callback.singleElem(client, shelfAppButton, properties, scr);
            /* only for natwest personal*/
            properties = props.toggleShelfProps.yellowShelfAppButtonProps(scr);
            callback.singleElem(client, yellowShelfAppButton, properties, scr);

            properties = props.toggleShelfProps.shelfAppButtonEvenProps(scr);
            callback.singleElem(client, shelfAppButtonEven, properties, scr);
        }
    },

   /* //appButton text color check 
    "Check for appButton text color properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            appButtonText = pageObj.elements.appButtonText.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.appButtonTextProps(scr);
            callback.singleElem(client, appButtonText, properties, scr);
        }
    },
    //appButton nth properties check 
    "Check for appButtonnth properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfAppnthchild = pageObj.elements.shelfAppnthchild.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfAppnthProps(scr);
            callback.singleElem(client, shelfAppnthchild, properties, scr);
        }
    }, */
    //CTA wrap properties check
    "Check for CTAWrap properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCTAWrap = pageObj.elements.shelfCTAWrap.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfCTAWrapProps(scr);
            callback.singleElem(client, shelfCTAWrap, properties, scr);
        }
    },
    //CTA text properties check
    "Check for CTAText properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            shelfCTAText = pageObj.elements.shelfCTAText.selector,
            yellowShelfCTAText = pageObj.elements.yellowShelfCTAText.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.shelfCTATextProps(scr);
            callback.singleElem(client, shelfCTAText, properties, scr);
            /* only for natwest personal*/
            properties = props.toggleShelfProps.yellowShelfCTATextProps(scr);
            callback.singleElem(client, yellowShelfCTAText, properties, scr);
        }
    },
    //check for appbutton new customer click
    "Check for appButton click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            NewCustomerBtn = pageObj.elements.NewCustomerBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, NewCustomerBtn, properties, scr);
            client.click(pageObj.elements.NewCustomerBtn.selector, function(result) {
                this.verify.cssProperty(pageObj.elements.NewCustomerBtn.selector, 'display', 'block');
            });
        }
    }, 

    //check for sole trader button click
    "Check for appButton click1 properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            SoleTraderBtn = pageObj.elements.SoleTraderBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.multiloop(client, SoleTraderBtn, properties, scr);
            client.click(pageObj.elements.SoleTraderBtn.selector, function(result) {
                this.verify.cssProperty("#Sole_trader", 'display', 'block');
                //this.verify.cssProperty("#Sole_trader",'background-color','$primary_2');
                //this.pause(1000);
            });
        }
    },
    //check for check and read this click
    "Check for appButton click2 properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            CheckBtn = pageObj.elements.CheckBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.multiloop(client, CheckBtn, properties, scr);
            client.click(pageObj.elements.CheckBtn.selector, function(result) {
                this.verify.cssProperty("#Check_and_read_this", 'display', 'block');
                //this.verify.cssProperty("#Check_and_read_this",'background-color','$primary_2');
                //this.pause(1000);
            });
        }
    },
    //check for 'i have read these' click
    "Check for appButton click3 properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ReadBtn = pageObj.elements.ReadBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.multiloop(client, ReadBtn, properties, scr);
            client.click(pageObj.elements.ReadBtn.selector, function(result) {
                this.verify.cssProperty("#Yes_I_have_read_these", 'display', 'block');
            });
        }
    },
    /* //check for background color of 4 toggles block
    "Check for block2_bg color": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            block2_bgColor = pageObj.elements.block2_bgColor.selector,
            size = client.globals.size.widths;

        // client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.block2_bgProps(scr);
            callback.singleElem(client, block2_bgColor, properties, scr);
        }

    }, */
    //t4 appButton nth properties check 
    "Check for t4appButtonnth properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            t4shelfAppnthchild = pageObj.elements.t4shelfAppnthchild.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.t4shelfAppnthProps(scr);
            callback.multiloop(client, t4shelfAppnthchild, properties, scr);
        }
    },
    //single article shelf padding top 
    "Check for single article shelf padding top": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            sashelfPaddingTop = pageObj.elements.sashelfPaddingTop.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.sashelfPaddingtopProps(scr);
            callback.multiloop(client, sashelfPaddingTop, properties, scr);
        }

    },
    //single article shelf padding bottom 
    "Check for single article shelf padding bottom": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            sashelfPaddingBot = pageObj.elements.sashelfPaddingBot.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.sashelfPaddingbotProps(scr);
            callback.multiloop(client, sashelfPaddingBot, properties, scr);
        }
    },

    /* "Check for img width and height": function(client) {
          var pageObj = client.page.PreapplyStartupbus_selectors(),
              signup = client.page.signup(),
              callback = client.page.common(),
              imgWrapCls = pageObj.elements.imgWrap.selector,
              size = client.globals.size.widths;
              client.maximizeWindow();
       
          for (scr in size) {
              client.resizeWindow(size[scr].width, size[scr].height);
              properties = props.toggleShelfProps.imgWrapProps(scr);
              callback.singleElem(client, imgWrapCls , properties, scr);
          }
        }, */


    //check for single article title properties
    "Check for sa title wrapper props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saTitle = pageObj.elements.saTitle.selector,
            saTitle1 = pageObj.elements.saTitle1.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.multiloop(client, saTitle, properties, scr);
            callback.multiloop(client, saTitle1, properties, scr);

        }
    },

     //check for single article title properties 60-40
    "Check for sa title wrapper props 60-40": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saAddRTETitle = pageObj.elements.saAddRTETitle.selector,
            saThemeWhiteTitle = pageObj.elements.saThemeWhiteTitle.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.multiloop(client, saAddRTETitle, properties, scr);
            callback.multiloop(client, saThemeWhiteTitle, properties, scr);

        }

    },

    //check for single article content 
    "Check for sa content props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saContent = pageObj.elements.saContent.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
           // properties = props.toggleShelfProps.saContentProps(scr);
            callback.multiloop(client, saContent, properties, scr);
        }

    },
    //check for single article content padding
    "Check for sa padding props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saContentPadding = pageObj.elements.saContentPadding.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            properties = props.toggleShelfProps.saContentPaddingProps(scr);
            callback.multiloop(client, saContentPadding, properties, scr);
        }

    },
   /* //check for background color of single toggle block
    "Check for block4_bg color": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            block4_bgColor = pageObj.elements.block4_bgColor.selector,
            size = client.globals.size.widths;

        // client.waitForElementVisible("body", 5000);
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.block4_bgProps(scr);

            callback.singleElem(client, block4_bgColor, properties, scr);
        }

    }, */
    //check for download shelf padding
    "Check for download shelf padding": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dShelfPadding = pageObj.elements.dShelfPadding.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dShelfPaddingProps(scr);
            callback.multiloop(client, dShelfPadding, properties, scr);
        }

    },
    //check for download shelf title wrapper properties
    "Check for download shelf title wrapper props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dTitleWrapper = pageObj.elements.dTitleWrapper.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dTitleWrapperProps(scr);
            callback.multiloop(client, dTitleWrapper, properties, scr);

        }

    },
    //download shelf title properties check 
    "Check for download shelf title properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dshelfTitle = pageObj.elements.dshelfTitle.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.h3props(scr);
            callback.multiloop(client, dshelfTitle, properties, scr);
        }

    },
    //check for download shelf text wrapper properties
    "Check for download shelf text wrapper props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dTextWrapper = pageObj.elements.dTextWrapper.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dTextWrapperProps(scr);
            callback.multiloop(client, dTextWrapper, properties, scr);

        }

    },
    //check for download shelf content properties
    "Check for download shelf content props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dContent = pageObj.elements.dContent.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, dContent, properties, scr);

        }

    },
    //check for download shelf link wrapper properties
    "Check for download shelf link wrapper props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dLinkWrapper = pageObj.elements.dLinkWrapper.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dLinkWrapperProps(scr);
            callback.multiloop(client, dLinkWrapper, properties, scr);

        }

    },
    //check for download shelf link properties
    "Check for download shelf link props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            dLink = pageObj.elements.dLink.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.dLinkProps(scr);
            callback.multiloop(client, dLink, properties, scr);

        }

    },

    //check for partnership click
    "Check for partnership click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            PartnershipBtn = pageObj.elements.PartnershipBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.multiloop(client, PartnershipBtn, properties, scr);
            //client.waitForElementVisible(pageObj.elements.NewCustomerBtn.selector,5000);
            client.click(pageObj.elements.PartnershipBtn.selector, function(result) {
                this.verify.cssProperty("#Partnership", 'display', 'block');
            });
        }
    },
    //check for LLP click
    "Check for LLP click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            LLPBtn = pageObj.elements.LLPBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.multiloop(client, LLPBtn, properties, scr);
            client.click(pageObj.elements.LLPBtn.selector, function(result) {
                this.verify.cssProperty("#LLP", 'display', 'block');
            });
        }
    },
    //check for single article content wrap without cta
    "Check for sa content wrap props without cta": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saContentWrapNoCta = pageObj.elements.saContentWrapNoCta.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.saContentWrapNoCtaProps(scr);
            callback.multiloop(client, saContentWrapNoCta, properties, scr);
        }

    },
    //check for single article content without cta
    "Check for sa content props without cta": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saContentNoCta = pageObj.elements.saContentNoCta.selector,

            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, saContentNoCta, properties, scr);
        }

    },
    //check for single article additional content wrap without cta
    "Check for sa additional content wrap props without cta": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saAddContentWrapNoCta = pageObj.elements.saAddContentWrapNoCta.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.saAddContentWrapNoCtaProps(scr);
            callback.multiloop(client, saAddContentWrapNoCta, properties, scr);
        }

    },
    //check for single article additional content props without cta
    "Check for sa additional content props without cta": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            saAddContentNoCta = pageObj.elements.saAddContentNoCta.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.multiloop(client, saAddContentNoCta, properties, scr);
        }

    },

    //primary cta margin properties in single article
    "Check for primary cta properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            PrimaryCTAMargin = pageObj.elements.PrimaryCTAMargin.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.PrimaryCTAMarginProps(scr);
            callback.multiloop(client, PrimaryCTAMargin, properties, scr);

        }
    },

    //primary cta padding properties in single article
    "Check for primary cta padding properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            PrimaryCTAPadding = pageObj.elements.PrimaryCTAPadding.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.PrimaryCTAPaddingProps(scr);
            callback.multiloop(client, PrimaryCTAPadding, properties, scr);

        }
    },

    //secondary cta properties in single article
    "Check for secondary cta properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            SecCTA = pageObj.elements.SecCTA.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.SecCTAProps(scr);
            callback.multiloop(client, SecCTA, properties, scr);

        }
    },

    //check for appbutton existing customer click
    "Check for appButton existing customer click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ExistingCustomerBtn = pageObj.elements.ExistingCustomerBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, ExistingCustomerBtn, properties, scr);
            client.click(pageObj.elements.ExistingCustomerBtn.selector, function(result) {
                this.verify.cssProperty(pageObj.elements.ExistingCustomerBtn.selector, 'display', 'block');
            });
        }
    },
    //check for an existing business click
    "Check for an existing business click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ExistingBusinessBtn = pageObj.elements.ExistingBusinessBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, ExistingBusinessBtn, properties, scr);
            client.click(pageObj.elements.ExistingBusinessBtn.selector, function(result) {
                this.verify.cssProperty("#An_existing_business", 'display', 'block');
            });
        }
    },
    //check for yes click
    "Check for yes click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            YesBtn = pageObj.elements.YesBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, YesBtn, properties, scr);
            client.click(pageObj.elements.YesBtn.selector, function(result) {
                this.verify.cssProperty("#Yes", 'display', 'block');
            });
        }
    },
    //check for no click
    "Check for no click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            NoBtn = pageObj.elements.NoBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, NoBtn, properties, scr);
            client.click(pageObj.elements.NoBtn.selector, function(result) {
                this.verify.cssProperty("#No", 'display', 'block');
            });
        }
    },
    //check for cta click
    "Check for cta click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            ctaClick = pageObj.elements.ctaClick.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, ctaClick, properties, scr);
            client.click(pageObj.elements.ctaClick.selector, function(result) {
                this.verify.cssProperty(".preapply-shelf .toggle-shelf.theme-bluebg .cta-wrapper  a.cta-secondary", 'display', 'inline-block');
            });

        }
    },
    //check for new business click
    "Check for new business click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            newBusinessBtn = pageObj.elements.newBusinessBtn.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.buttonClickProps(scr);
            callback.singleElem(client, newBusinessBtn, properties, scr);
            client.click(pageObj.elements.newBusinessBtn.selector, function(result) {
                this.verify.cssProperty(".toggle-app.appbtn-group.apptogglebtn2 .btnwrapper button[data-target-id='A_new_business'].appbtn", 'display', 'block');
            });
        }
    }, 

//secondary cta click properties 
    "Check for secondaryCTA click properties": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            SecondaryCTA = pageObj.elements.SecondaryCTA.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        client.moveToElement(SecondaryCTA, 0, 0, function (result) {
                client.pause(500)
            });
        properties = props.toggleShelfProps.HoverProps();
        callback.pseudoSingleElem(client,SecondaryCTA,':after',properties);
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            client.click(pageObj.elements.SecondaryCTA.selector, function(result) {
                this.verify.cssProperty(pageObj.elements.SecondaryCTA.selector,'line-height','26px');
            });
        }
    },  

    //check for single article(aqua) properties(only for natwest personal)
     /*Padding top value is considered as 97px (XL & L), 82px(M), 63px(S) for Pre Apply shelf 
    when single article is the first child */
    "Check for single article aqua props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            SAaquaPadding = pageObj.elements.SAaquaPadding.selector,
            size = client.globals.size.widths;
            signup.navigate()
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.SAaquaPaddingProps(scr);
            callback.multiloop(client, SAaquaPadding, properties, scr);

        }

    },
    //check for single article(aqua) CTA properties(only for natwest personal)
    "Check for single article aqua CTA props": function(client) {
        var pageObj = client.page.PreapplyStartupbus_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            SAaquaCTA = pageObj.elements.SAaquaCTA.selector,
            size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            properties = props.toggleShelfProps.SAaquaCTAProps(scr);
            callback.multiloop(client, SAaquaCTA, properties, scr);

        }
    }
   
}