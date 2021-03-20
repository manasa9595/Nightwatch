var props = require('../components/other_comp/inPageNav_Props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    ctaComp = require('../components/cta/cta.js');
module.exports = {
    '@tags': ['select_account','inPage'],
    "Check for in-page-nav title": function(client) {
        var pageObj = client.page.inPageNav_selectors(),
            signup = client.page.signup(),
            stageUrl = client.page.inPageNav_selectors(),
            callback = client.page.common();
        var titleWrapCls = pageObj.elements.titleWrap.selector,
            titleTextCls = pageObj.elements.titleText.selector,
             size = client.globals.size.widths;
              signup.navigate();
             //pageObj.navigate();
        //stageUrl.navigate()
        //.signInAsAdmin();
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //in page nav title wrapper
            properties = titleComp.text.titleNav(scr);
            callback.singleElem(client, titleWrapCls, properties, scr);
            //in-page title fs and lh
            properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
            callback.singleElem(client, titleTextCls, properties, scr);
            //in-page title text
            properties =  props.navLinkProps.titlefontProps(scr);
            callback.singleElem(client, titleTextCls , properties, scr);
           
        }
      
    },
    "Check for background color and other props for wrapper": function(client) {
        var pageObj = client.page.inPageNav_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var wrapColorCls = pageObj.elements.wrapColorClass.selector,
            vcenterCls = pageObj.elements.vcenterSel.selector,
            pageNavTabCls = pageObj.elements.pageNavTable.selector,
            titRowCls = pageObj.elements.titRowSel.selector,
             size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for background-color and other props for pag-nav props
            properties = props.navLinkProps.wrapProps(scr);
            callback.singleElem(client, wrapColorCls, properties, scr);
            //check for page-nav wrapper tableRow props
            properties = props.navLinkProps.pageNavProps(scr);
            callback.multiloop(client,pageNavTabCls, properties, scr);
             //check for vcenter props
            properties = props.navLinkProps.vcenterProps(scr);
            callback.multiloop(client, vcenterCls, properties, scr);
            //check for title row  props
            properties = props.navLinkProps.titRowProps(scr);
            callback.singleElem(client, titRowCls, properties, scr);
      }
    },
   "Check for in-page-nav links properties": function(client) {
        var pageObj = client.page.inPageNav_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var navLinkClass = pageObj.elements.linkSel.selector,
            inPageLinksCls = pageObj.elements.inPageLinksSel.selector,
             size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //page link properties
            properties = props.navLinkProps.pageLinkProps(scr);
            callback.multiloop(client, inPageLinksCls, properties, scr);
            //in-page-nav links props
            properties = props.navLinkProps.LinksProps(scr);
            callback.multiloop(client, navLinkClass, properties, scr);
            //in-page-nav links fs and lh props
            properties = props.navLinkProps.inPageNavfontProps(scr);
            callback.multiloop(client, navLinkClass, properties, scr);
           
        }
        client.end();
    }
     /*"check for hover on secondary cta": function(client) {
        var pageObj = client.page.footer_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            menu=pageObj.elements.linksHover.selector,
            size = client.globals.size.widths,nextElem;
        client.maximizeWindow();
        client.elements('css selector',menu,function(res){
            res.value.forEach(function(element,index){
               console.log(res.value.length);
                for(var i=0; i<res.value.length; i++){
                    let nextElem='.cta.cta-secondary:hover'+':nth-of-type('+(i+1)+')';
                      console.log(nextElem);
                      client.moveToElement(nextElem, 10, 10, function(){
                            this.assert.cssProperty(nextElem,'text-decoration-line','none');
                      });
                   }
                
           });
        })
    },*/
    /*"Check for cta wrapper and cta props": function(client) {
        var pageObj = client.page.inPageNav_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var ctaPrimaryCls = pageObj.elements.ctaPrimary.selector,
            rowCtaCls = pageObj.elements.rowCtaSel.selector,
            ctaWrapCls = pageObj.elements.ctaWrap.selectora            
            ctaTextCls= pageObj.elements.ctaText.selector,
             size = client.globals.size.widths;
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //row nav cta props
            properties = props.navLinkProps.navCtaProps(scr);
            callback.multiloop(client, rowCtaCls , properties, scr);
            //primary cta props
            properties = ctaComp.cta.pageNavCta(scr);
            callback.multiloop(client, ctaPrimaryCls, properties, scr);
            //primary cta wrapper props
            properties = ctaComp.cta.ctaWrapProps(scr);
            callback.multiloop(client, ctaWrapCls , properties, scr);
            //primary cta text props
            properties = ctaComp.cta.ctaTextProps(scr);
            callback.multiloop(client, ctaTextCls , properties, scr);
          }
      client.end(); 
    }
 */

    
}
