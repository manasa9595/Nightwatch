module.exports = {
    url: 'https://author-rbs-retail-test-61.adobecqms.net/content/natwest_com/en_uk/responsive-business/pre-apply-flows/Start-up_main-business-bank-account.html?wcmmode=disabled',
    elements: {
         /*toggBgColor: {
            selector: '.preapply-shelf .toggle-shelf.theme-purple'
        }, */
        tShelfPadding : {
            selector : '.preapply-shelf .toggle-shelf'
        },
        shelfTitle : {
            selector : '.preapply-shelf  .titleWrapper .title-comp'
        },
        yellowShelfTitle : {
            selector : '.preapply-shelf .nwp.theme-yellow  .titleWrapper .title-comp'
        },
        shelfTitleWrap: {
            selector : '.preapply-shelf .toggle-shelf .titleWrapper'
        },
        shelfButtonWrap: {
            selector : '.toggle-app.apptogglebtn2 .btnwrapper'
        },
        shelfAppButton: {
            selector : '.toggle-app .btnwrapper .appbtn'
        },
        yellowShelfAppButton : {
            selector : '.nwp.theme-yellow .toggle-app .btnwrapper .appbtn'
        },
        shelfAppButtonEven : {
        	selector : '.preapply-shelf .toggle-shelf .toggle-app.apptogglebtn2 .btnwrapper:nth-child(even) .appbtn'
        },
       /* appButtonText : {
            selector : '.preapply-shelf .btnwrapper .appbtn'
        }, */
        shelfCTAWrap : {
            selector: '.preapply-shelf .toggle-shelf .cta-wrapper'
        },
        shelfCTAText : {
            selector: '.preapply-shelf .toggle-shelf .cta-wrapper .cta-secondary span'
        },
        yellowShelfCTAText : {
            selector : '.preapply-shelf .toggle-shelf.nwp.theme-yellow  .cta-wrapper .cta-secondary span'
        },
        NewCustomerBtn : {
            selector : '.toggle-app.apptogglebtn2 .btnwrapper .appbtn'
        },
        SoleTraderBtn : {
            selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="Sole_trader"]'
        },
        CheckBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="Check_and_read_this"]'
        },
        ReadBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="Yes_I_have_read_these"]'
        },
        
        /*block2_bgColor : {
        	selector : '.preapply-shelf .toggle-shelf.theme-rose'
        },*/
        t4shelfButtonWrap : {
        	selector : '.toggle-app.apptogglebtn4 .btnwrapper'
        },
        t4shelfAppnthchild : {
        	selector : '.toggle-app.apptogglebtn4 .btnwrapper:nth-child(odd)'
        },
        sashelfPaddingTop : {
        	selector : '.preapply-shelf .singlearticle:first-child .single-article-shelf'
        },
        sashelfPaddingBot : {
        	selector : '.single-article-shelf'
        },
       /* imgWrapCls : {
        	selector : ''
        } */
        saTitle : {
       		selector : '.single-article-shelf.fifty-fifty .title-wrapper .title-comp'
        },
        saTitle1 : {
        	selector : ' .single-article-shelf.shelf-margin.sixty-forty .title-wrapper .title-comp'
        },
        saAddRTETitle : {
        	selector : '.single-article-shelf .additional-rte-wrapper .comp-rich-text h4'
        },
        saThemeWhiteTitle : {
            selector : '.preappy-ctawrap .single-article-shelf.theme-white.shelf-margin.sixty-forty .title-wrapper .title-comp'
        },
        saContent : {
       		selector : '.rte-wrapper .comp-rich-text'
        },
       /* block4_bgColor : {
       		selector : '.preapply-shelf .toggle-shelf.theme-bluebg'
        }, */
        t1shelfButtonWrap : {
       		selector : '.toggle-app.apptogglebtn1 .btnwrapper'
        },
       
        saContentPadding : {
       		selector : '.comp-rich-text span.list-item-square'
        },
        
        dShelfPadding : {
        	selector : '.download_shelf'
        },
        dTitleWrapper : {
        	selector : '.download_shelf .titleWrapper'
        },
        dshelfTitle : {
        	selector : '.download_shelf .titleWrapper .title-comp'
        },
        dTextWrapper : {
        	selector : '.download_shelf .textWrapper'
        },
        dContent : {
        	selector : '.download_shelf .textWrapper .text-comp'
        },
        dLinkWrapper : {
        	selector : '.download_shelf .downloadLinkWrapper'
        },
        dLink : {
        	selector : '.download_shelf .downloadLinkWrapper a.dlinks'
        },
        PartnershipBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="Partnership"]'
        },
        LLPBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="LLP"]'
        },
        saContentWrapNoCta : {
        	selector : '.single-article-shelf .rte-wrapper .comp-rich-text p'
        },
        saContentNoCta : {
        	selector : '.single-article-shelf .rte-wrapper .comp-rich-text'
        }, 
        saAddContentWrapNoCta : {
        	selector : '.single-article-shelf .additional-rte-wrapper'    
        },
        saAddContentNoCta : {
        	selector : '.single-article-shelf .additional-rte-wrapper .comp-rich-text'
        },
        PrimaryCTAMargin: {
            selector: '.single-article-shelf .toggle-app .btnwrapper'
        },
        PrimaryCTAPadding: {
            selector: '.single-article-shelf .toggle-app .btnwrapper .appbtn'
        },
        SecCTA: {
            selector: '.single-article-shelf .cta-wrapper .cta-secondary'
        },
        SecondaryCTA : {
        	selector : '.preapply-shelf .cta.cta-secondary'
        },
        ExistingCustomerBtn : {
            selector : '.toggle-app.apptogglebtn2 .btnwrapper .appbtn[data-target-id="Existing_Business_customer"]'
        },
        ExistingBusinessBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="An_existing_business"]'
        },
        YesBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="Yes"]'
        },
        NoBtn : {
        	selector : '.reference-wrapper .toggle-app .btnwrapper button[data-target-id="No"]'
        },
        ctaClick : {
        	selector : '.preapply-shelf .toggle-shelf .cta-wrapper  a.cta-secondary'
        },
        newBusinessBtn : {
        	selector : '.toggle-app.appbtn-group.apptogglebtn2 .btnwrapper button[data-target-id="A_new_business"].appbtn'
        },
        SAaquaPadding : {
            selector : '.single-article-shelf.theme-aqua'
        },
        SAaquaCTA : {
            selector : '.theme-aqua .cta.cta-primary .cta-text'
        }    
    }
};