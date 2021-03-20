var textComp = require('../components/text/text.js'),
    titleComp =require('../components/title/title.js'),
    productComp =require('../components/other_comp/product.js');
module.exports={
    'Checking the properties of Shelf':function(browser){
       var test=browser.page.common(),signup=browser.page.signup(),select=browser.page.path(),
           prdtitClass=select.elements.prodtitClass.selector,tabClass=select.elements.tabClass.selector,
           tabClassa=tabClass+" ul li a",tabAc=tabClass+" ul li.ui-state-active a",
            prdtxtClass=select.elements.prodtxtClass.selector,prdtxtWrap=prdtxtClass+" .text-comp",
            size=browser.globals.size.widths,cssprops,css,props;
            signup.navigate() 
                .signInAsAdmin();
                    browser.pause(10000)
                    .maximizeWindow();
            for(scr in size){
                browser.resizeWindow(size[scr].width, size[scr].height);
                /* -- Checking the Properties of Title Component -- */
                cssprops=titleComp.text.titleCompP(scr);
                test.singleElem(browser,prdtitClass,cssprops);
                
                /* -- Checking the Properties of Title Component -- */
                props=textComp.text.textCompsP(scr);
                test.singleElem(browser,prdtxtWrap,props);
                if(scr=="lg" || scr=="xs" || scr=="sm"){
                   browser.assert.cssProperty(prdtxtClass,"margin-bottom","30px");
                }
                else{
                   browser.assert.cssProperty(prdtxtClass,"margin-bottom","29px");  
                }
                /* -- Checking the block of Shelf -- */
                if(scr=="lg" || scr=="sm" || scr=="md"){
                  props=productComp.text.mainTitleM(scr),css=productComp.text.tabA(scr);
                    test.singleElem(browser,tabClass,props);   
                    test.multiloop(browser,tabClassa,css);
                    browser.elements("css selector",tabAc, function(res) {
                        res.value.forEach(function(element,index){
                            browser.click(element.ELEMENT,function(r){
                                browser.elementIdCssProperty(element.ELEMENT,"font-family",function(result) {
                                this.verify.equal(result.value, 'RNHouseSansBold, sans-serif');
                                });
                            });
                            
                        });
                   });
                }
           }
      browser.end(); 
    }  
};


