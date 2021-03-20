
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
            .pause(1000)
            .waitForElementVisible(titleInputSel, 60000) 
            .setValue(titleInputSel, titleText )
            .pause(5000)
            .click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
    primaryCta= function(client){
        return client
        .waitForElementVisible(".cta-wrapper[class*='inpagenav-primary-cta'] .cta-text",5000)
        .click(".cta-wrapper[class*='inpagenav-primary-cta'] .cta-text")
        .doubleClick()
        .pause(1000)
        .click("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
        .clearValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
        .pause(2000)
        .setValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']",'Apply Now')
        .pause(3000)
        .setValue("[style*='visibility: visible;'] .x-form-field[name='./screenReaderText']",'Apply Now')
        .pause(2000)
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
    },
    sec_linksConfigure = function(client,pagein_cta_link){
        return client
        .elements('css selector','[class*="inpagenavigation"] .cta.cta-secondary .cta-text',function(result){
            result.value.forEach(function(element,index){
            client
                .pause(2000)
                .elementIdClick(element.ELEMENT)
                .doubleClick()
                .pause(2000)
                .click("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
                .clearValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
                .pause(2000)
                .setValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']",pagein_cta_link[index])
                .pause(3000)
                .setValue("[style*='visibility: visible;'] .x-form-field[name='./screenReaderText']",pagein_cta_link[index])
                .pause(2000)
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            })
        })        
    },
    additional_secCTA = function(client,pagein_cta_link){
        return client
        .elements('css selector','[class*="inpagenavigation"] .cta.cta-secondary .cta-text',function(result){
        for(let i=4; i<=9; i++)
            {
                client
                .pause(2000)
                .waitForElementVisible('.x-panel[class*="inpagenavigation"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',5000)
                .click('.x-panel[class*="inpagenavigation"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
                .pause(2000)
                .click('.cq-_46_47links .x-form-element')

                .useXpath()
                .waitForElementVisible('//div[text()='+i+']', 5000, false)
                .click('//div[text()='+i+']')
                .useCss()
                .pause(2000)

                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
                .pause(6000)
                .waitForElementVisible('[class*="inpagenavigation"] .cta.cta-secondary[aria-labelledby="Secondary CTA"] .cta-text',7000)
                .pause(4000)
                .click('[class*="inpagenavigation"] .cta.cta-secondary[aria-labelledby="Secondary CTA"] .cta-text')
                .doubleClick()
                .pause(5000)
                .click("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
                .clearValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']")
                .pause(1000)
                .setValue("[style*='visibility: visible;'] .x-form-field[name='./ctaLinkText']",pagein_cta_link[i-1])
                .pause(2000)
                .setValue("[style*='visibility: visible;'] .x-form-field[name='./screenReaderText']",pagein_cta_link[i-1])
                .pause(2000)
                .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
            
            } 
        })
    },
    hide_primaryCta_space = function(client){
        return client
        .waitForElementVisible('.x-panel[class*="inpagenavigation"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon',5000)
        .click('.x-panel[class*="inpagenavigation"] .x-toolbar-left .x-toolbar-cell:nth-child(2) .x-btn.x-btn-noicon')
        .pause(2000)
        .click(".x-panel[class*='hideApplyNow'] input[name='./hideApplyNow']")
        .pause(1000)
        .click(".x-panel[class*='removebottomspace'] input[name='./removebottomspace']")
        .pause(2000)
        .click("[style*='visibility: visible;'] .x-btn.cq-btn-ok.x-btn-noicon")
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
    };

module.exports = {
                titleComp:titleComp,
                titleInput:titleInput,
                primaryCta:primaryCta,
                sec_linksConfigure:sec_linksConfigure,
                additional_secCTA:additional_secCTA,
                hide_primaryCta_space:hide_primaryCta_space,
                activate_page:activate_page,
                Ending_the_session:Ending_the_session
};
