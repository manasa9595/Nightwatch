var props = require('../components/other_comp/heroShelf_Props.js'),
    globalTitleComp = require('../components/title/globaltitle.js');
module.exports = {
     'navigate to Page': function(client){
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            size = client.globals.size.widths;
            pageObj.navigate()
            //.signInAsAdmin();
            client.maximizeWindow();
            client.url(signup.url);    
            
    },
    
    "hero-shelf properties for hero-image-wrapper rbs(photography mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var imgWrapCls = pageObj.elements.imgWrapperRBS.selector,
            heroImgContCls = pageObj.elements.heroImgCont.selector,
            imgWrapperCls = pageObj.elements.heroImgWrapper.selector;
            size = client.globals.size.widths;
        //signup.navigate()
        //.signInAsAdmin();
        //client.maximizeWindow();
        //client.url(signup.url);
        //client.waitForElementVisible('.heroimagewrapper .heroimagecontainer', 5000);
     if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.heroImgWrapRBS(scr);
            callback.singleElem(client, imgWrapCls, properties, scr);
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContPropsRbs(scr);
            callback.singleElem(client, heroImgContCls, properties, scr);
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.ImgWrapperRbs(scr);
            callback.singleElem(client, imgWrapperCls, properties, scr);

         }
      }
      else{
        if(client.options.desiredCapabilities.isLGDevice){
                properties = props.heroShelfProps.heroImgWrapRBS('lg');
            callback.singleElem(client, imgWrapCls, properties, 'lg');
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContPropsRbs('lg');
            callback.singleElem(client, heroImgContCls, properties, 'lg');
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.ImgWrapperRbs('lg');
            callback.singleElem(client, imgWrapperCls, properties, 'lg');
            } 
            else if(client.options.desiredCapabilities.isSMDevice){
                properties = props.heroShelfProps.heroImgWrapRBS('sm');
            callback.singleElem(client, imgWrapCls, properties, 'sm');
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContPropsRbs('sm');
            callback.singleElem(client, heroImgContCls, properties, 'sm');
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.ImgWrapperRbs('sm');
            callback.singleElem(client, imgWrapperCls, properties, 'sm');
            } 
            else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
                properties = props.heroShelfProps.heroImgWrapRBS('xs');
            callback.singleElem(client, imgWrapCls, properties, 'xs');
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContPropsRbs('xs');
            callback.singleElem(client, heroImgContCls, properties, 'xs');
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.ImgWrapperRbs('xs');
            callback.singleElem(client, imgWrapperCls, properties, 'xs');

            }
      }

    },

    "hero-shelf properties for product-title rbs(photography mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var ProdTitMarginCls = pageObj.elements.prodTitRbs.selector, //product title margin properties
            prodTitTxtClass = pageObj.elements.prodTitTxtCls.selector, //product title text class
            size = client.globals.size.widths;

        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for product title margin properties
            properties = props.heroShelfProps.prodTitMargin(scr);
            callback.singleElem(client, ProdTitMarginCls, properties, scr);
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.singleElem(client, prodTitTxtClass, properties, scr);
            //check for product title text properties
            properties = props.heroShelfProps.prodTitTextProps(scr);
            callback.singleElem(client, prodTitTxtClass, properties, scr);
        }
    }
    else {
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.heroShelfProps.prodTitMargin('lg');
            callback.singleElem(client, ProdTitMarginCls, properties,'lg');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('lg');
            callback.singleElem(client, prodTitTxtClass, properties, 'lg');
            //check for product title text properties
            properties = props.heroShelfProps.prodTitTextProps('lg');
            callback.singleElem(client, prodTitTxtClass, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           properties = props.heroShelfProps.prodTitMargin('sm');
            callback.singleElem(client, ProdTitMarginCls, properties, 'sm');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('sm');
            callback.singleElem(client, prodTitTxtClass, properties, 'sm');
            //check for product title text properties
            properties = props.heroShelfProps.prodTitTextProps('sm');
            callback.singleElem(client, prodTitTxtClass, properties, 'sm');
            } 
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
             properties = props.heroShelfProps.prodTitMargin('xs');
            callback.singleElem(client, ProdTitMarginCls, properties, 'xs');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('xs');
            callback.singleElem(client, prodTitTxtClass, properties, 'xs');
            //check for product title text properties
            properties = props.heroShelfProps.prodTitTextProps('xs');
            callback.singleElem(client, prodTitTxtClass, properties, 'xs');
            }
          }

    },

  "hero-shelf properties for twill-block rbs(photography mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var twillBlockClass = pageObj.elements.twillBlockCls.selector, //twill block margin props
            twillBloTitCls = pageObj.elements.illSpan.selector, //twill block title(h1) props
            twillBloAllTitCls = pageObj.elements.twillBloTitleAll.selector, //twil block all title class
            twillBlockSpanCls = pageObj.elements.illSpan.selector, //twill block span props
            spanTit1Cls = pageObj.elements.twillBlockSpanTit1.selector, //twill block span(title 1) class
            spanTit2Cls = pageObj.elements.twillBlockSpanTit2.selector, //twill block span(title 2) class
            size = client.globals.size.widths;

        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for twill block margin props
            properties = props.heroShelfProps.twillBlockProps(scr);
            callback.singleElem(client, twillBlockClass, properties, scr);
            //check for twill block title(h1) global props
            properties = props.heroShelfProps.twillTitles(scr);
            callback.singleElem(client, twillBloTitCls, properties, scr);
            //check for twill block title(h1) props
            properties = props.heroShelfProps.twillBlockTitle(scr);
            callback.singleElem(client, twillBloTitCls, properties, scr);
            //check for twill block all title props
            properties = props.heroShelfProps.twillBlockTitleProps(scr);
            callback.singleElem(client, twillBloAllTitCls, properties, scr);
            //check for twill block span props
            properties = props.heroShelfProps.SpanProps(scr);
            callback.singleElem(client, twillBlockSpanCls, properties, scr);
            //check for span(class=title1) properties
            properties = props.heroShelfProps.spanTitle1(scr);
            callback.singleElem(client, spanTit1Cls, properties, scr);
            //check for span(class=title2) properties
            properties = props.heroShelfProps.spanTitle2(scr);
            callback.singleElem(client, spanTit2Cls, properties, scr);
        }
     }
    else {
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.heroShelfProps.twillBlockProps('lg');
            callback.singleElem(client, twillBlockClass, properties, 'lg');
            //check for twill block title(h1) global props
            properties = props.heroShelfProps.twillTitles('lg');
            callback.singleElem(client, twillBloTitCls, properties, 'lg');
            //check for twill block title(h1) props
            properties = props.heroShelfProps.twillBlockTitle('lg');
            callback.singleElem(client, twillBloTitCls, properties, 'lg');
            //check for twill block all title props
            properties = props.heroShelfProps.twillBlockTitleProps('lg');
            callback.singleElem(client, twillBloAllTitCls, properties, 'lg');
            //check for twill block span props
            properties = props.heroShelfProps.SpanProps('lg');
            callback.singleElem(client, twillBlockSpanCls, properties, 'lg');
            //check for span(class=title1) properties
            properties = props.heroShelfProps.spanTitle1('lg');
            callback.singleElem(client, spanTit1Cls, properties, 'lg');
            //check for span(class=title2) properties
            properties = props.heroShelfProps.spanTitle2('lg');
            callback.singleElem(client, spanTit2Cls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           properties = props.heroShelfProps.twillBlockProps('sm');
            callback.singleElem(client, twillBlockClass, properties, 'sm');
            //check for twill block title(h1) global props
            properties = props.heroShelfProps.twillTitles('sm');
            callback.singleElem(client, twillBloTitCls, properties, 'sm');
            //check for twill block title(h1) props
            properties = props.heroShelfProps.twillBlockTitle('sm');
            callback.singleElem(client, twillBloTitCls, properties, 'sm');
            //check for twill block all title props
            properties = props.heroShelfProps.twillBlockTitleProps('sm');
            callback.singleElem(client, twillBloAllTitCls, properties, 'sm');
            //check for twill block span props
            properties = props.heroShelfProps.SpanProps('sm');
            callback.singleElem(client, twillBlockSpanCls, properties, 'sm');
            //check for span(class=title1) properties
            properties = props.heroShelfProps.spanTitle1('sm');
            callback.singleElem(client, spanTit1Cls, properties, 'sm');
            //check for span(class=title2) properties
            properties = props.heroShelfProps.spanTitle2('sm');
            callback.singleElem(client, spanTit2Cls, properties, 'sm');
            } 
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
            properties = props.heroShelfProps.twillBlockProps('xs');
            callback.singleElem(client, twillBlockClass, properties, 'xs');
            //check for twill block title(h1) global props
            properties = props.heroShelfProps.twillTitles('xs');
            callback.singleElem(client, twillBloTitCls, properties, 'xs');
            //check for twill block title(h1) props
            properties = props.heroShelfProps.twillBlockTitle('xs');
            callback.singleElem(client, twillBloTitCls, properties, 'xs');
            //check for twill block all title props
            properties = props.heroShelfProps.twillBlockTitleProps('xs');
            callback.singleElem(client, twillBloAllTitCls, properties, 'xs');
            //check for twill block span props
            properties = props.heroShelfProps.SpanProps('xs');
            callback.singleElem(client, twillBlockSpanCls, properties, 'xs');
            //check for span(class=title1) properties
            properties = props.heroShelfProps.spanTitle1('xs');
            callback.singleElem(client, spanTit1Cls, properties, 'xs');
            //check for span(class=title2) properties
            properties = props.heroShelfProps.spanTitle2('xs');
            callback.singleElem(client, spanTit2Cls, properties, 'xs');
            }
          }
        

    },
    "Check for twill-block-background-image rbs(photography mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var twilBloTitOneCls = pageObj.elements.twillBloTitOne.selector, //twill block title one props
            twillBloTitTwoCls = pageObj.elements.twillBlockTitTwo.selector, //twill block title two
            twillBlockTitThreeCls = pageObj.elements.twillBlockTitThree.selector, //twill block title three
            size = client.globals.size.widths;

        client.maximizeWindow();
     if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for twill block title one props
            properties = props.heroShelfProps.twillBloTitOneProps(scr);
            callback.singleElem(client, twilBloTitOneCls, properties, scr);
            //check for twill block title two props
            properties = props.heroShelfProps.twillBlockTitTwo(scr);
            callback.singleElem(client, twillBloTitTwoCls, properties, scr);
            //check for twill block title three props
            properties = props.heroShelfProps.twillBlockTitTwo(scr);
            callback.singleElem(client, twillBlockTitThreeCls, properties, scr);
        }

     }
    else {
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.heroShelfProps.twillBloTitOneProps('lg');
            callback.singleElem(client, twilBloTitOneCls, properties, 'lg');
            //check for twill block title two props
            properties = props.heroShelfProps.twillBlockTitTwo('lg');
            callback.singleElem(client, twillBloTitTwoCls, properties, 'lg');
            //check for twill block title three props
            properties = props.heroShelfProps.twillBlockTitTwo('lg');
            callback.singleElem(client, twillBlockTitThreeCls, properties, 'lg');
        }    
    
    else if(client.options.desiredCapabilities.isSMDevice){
           properties = props.heroShelfProps.twillBloTitOneProps('sm');
            callback.singleElem(client, twilBloTitOneCls, properties, 'sm');
            //check for twill block title two props
            properties = props.heroShelfProps.twillBlockTitTwo('sm');
            callback.singleElem(client, twillBloTitTwoCls, properties, 'sm');
            //check for twill block title three props
            properties = props.heroShelfProps.twillBlockTitTwo('sm');
            callback.singleElem(client, twillBlockTitThreeCls, properties, 'sm');
            } 
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
             properties = props.heroShelfProps.twillBloTitOneProps('xs');
            callback.singleElem(client, twilBloTitOneCls, properties, 'xs');
            //check for twill block title two props
            properties = props.heroShelfProps.twillBlockTitTwo('xs');
            callback.singleElem(client, twillBloTitTwoCls, properties, 'xs');
            //check for twill block title three props
            properties = props.heroShelfProps.twillBlockTitTwo('xs');
            callback.singleElem(client, twillBlockTitThreeCls, properties, 'xs');
            }
      }  
    },
   "hero-shelf properties for apr-container bg-color rbs(photography & illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var aprTitleCls = pageObj.elements.aprMargin.selector,
            size = client.globals.size.widths;

        client.maximizeWindow();
      if(client.globals.test_settings.isLocal){
            for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for apr-conainer margin props
            properties = props.heroShelfProps.aprProps(scr);
            callback.singleElem(client, aprTitleCls, properties, scr);
         }
      }
      else {
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.heroShelfProps.aprProps('lg');
            callback.singleElem(client, aprTitleCls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           properties = props.heroShelfProps.aprProps('sm');
            callback.singleElem(client, aprTitleCls, properties, 'sm');
        } 
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
            properties = props.heroShelfProps.aprProps('xs');
            callback.singleElem(client, aprTitleCls, properties, 'xs');
        }
      }   
        

    },

    /*"Check for hero-image-wrapper rbs(illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illWrapRbsCls = pageObj.elements.illWrapRbs.selector,
            illImgHeightCls = pageObj.elements.illImgHeight.selector,
            illImageCls = pageObj.elements.illImgCls.selector;
        var size = client.globals.size.widths;

        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for image wrapper height
            properties = props.heroShelfProps.imgWrapProps(scr);
            callback.singleElem(client, illImgHeightCls, properties, scr);
            
        }

    }
    else {
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.heroShelfProps.imgWrapProps('lg');
            callback.singleElem(client, illImgHeightCls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           properties = props.heroShelfProps.imgWrapProps('sm');
            callback.singleElem(client, illImgHeightCls, properties, 'sm');
        } 
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
            properties = props.heroShelfProps.imgWrapProps('xs');
            callback.singleElem(client, illImgHeightCls, properties, 'xs');
        }
    }
        

    },*/
    "Check for product-title rbs(illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illProdTitH4Cls = pageObj.elements.illProdTitRbsh4.selector, //prod tit fs and lh class
            illProdTitCls = pageObj.elements.illProdTitMar.selector; //prod tit margin class
        var size = client.globals.size.widths;

        client.maximizeWindow();
     if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //hero shelf product title margin top
            properties = props.heroShelfProps.prodTitleMargin(scr);
            callback.singleElem(client, illProdTitCls, properties, scr);
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.singleElem(client, illProdTitH4Cls, properties, scr);
            //check for prod title other props(font-family)
            properties = props.heroShelfProps.illTwillBloTit(scr);
            callback.singleElem(client, illProdTitH4Cls, properties, scr);
            //check for prod title color 
            properties = props.heroShelfProps.prodTitColor(scr);
            callback.singleElem(client, illProdTitH4Cls, properties, scr);
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            //hero shelf product title margin top
            properties = props.heroShelfProps.prodTitleMargin('lg');
            callback.singleElem(client, illProdTitCls, properties, 'lg');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('lg');
            callback.singleElem(client, illProdTitH4Cls, properties, 'lg');
            //check for prod title other props(font-family)
            properties = props.heroShelfProps.illTwillBloTit('lg');
            callback.singleElem(client, illProdTitH4Cls, properties, 'lg');
            //check for prod title color 
            properties = props.heroShelfProps.prodTitColor('lg');
            callback.singleElem(client, illProdTitH4Cls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           //hero shelf product title margin top
            properties = props.heroShelfProps.prodTitleMargin('sm');
            callback.singleElem(client, illProdTitCls, properties, 'sm');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('sm');
            callback.singleElem(client, illProdTitH4Cls, properties, 'sm');
            //check for prod title other props(font-family)
            properties = props.heroShelfProps.illTwillBloTit('sm');
            callback.singleElem(client, illProdTitH4Cls, properties, 'sm');
            //check for prod title color 
            properties = props.heroShelfProps.prodTitColor('sm');
            callback.singleElem(client, illProdTitH4Cls, properties, 'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
            //hero shelf product title margin top
            properties = props.heroShelfProps.prodTitleMargin('xs');
            callback.singleElem(client, illProdTitCls, properties, 'xs');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('xs');
            callback.singleElem(client, illProdTitH4Cls, properties, 'xs');
            //check for prod title other props(font-family)
            properties = props.heroShelfProps.illTwillBloTit('xs');
            callback.singleElem(client, illProdTitH4Cls, properties, 'xs');
            //check for prod title color 
            properties = props.heroShelfProps.prodTitColor('xs');
            callback.singleElem(client, illProdTitH4Cls, properties, 'xs');
          }
    }
},

        
/*
   "Check for twill-block title properties rbs(illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illHeroTwillCls = pageObj.elements.illHeroTwillMar.selector, //hero twill block margin class
            illSpanTit1 = pageObj.elements.illSpanTitle1.selector,
            illSpanTitCls = pageObj.elements.illSpanComTit.selector,
            illSpanTit2 = pageObj.elements.illHeroTitTwo.selector,
            illTwillBlockTit3 = pageObj.elements.illSpanTitThree.selector,
            illHerBloTitle = pageObj.elements.illHeroRbsTitle.selector;
        var size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for hero twill block margin props
            properties = props.heroShelfProps.illHeroTwillBlock(scr);
            callback.singleElem(client, illHeroTwillCls, properties, scr);
            //check for hero twill block title-one props
            properties = props.heroShelfProps.illSpanTit1(scr);
            callback.singleElem(client, illSpanTit1, properties, scr);
            //check for hero twill block common title-one props
            properties = props.heroShelfProps.SpanProps(scr);
            callback.singleElem(client, illSpanTitCls, properties, scr);
            //check for hero twill block  title-two props
            properties = props.heroShelfProps.spanTit2(scr);
            callback.singleElem(client, illSpanTit2, properties, scr);
            //check for twill block span title 3 props
            properties = props.heroShelfProps.spanTit3(scr);
            callback.singleElem(client, illTwillBlockTit3, properties, scr);
            //check for hero twill block All title props
            properties = props.heroShelfProps.twillBlockTitleProps(scr);
            callback.singleElem(client, illHerBloTitle, properties, scr);
        }
    

    },*/

    "Check for twill-block-background-color rbs(illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illHeroTitone = pageObj.elements.illHeroTitOne.selector,
            illSpanTitTwoCls = pageObj.elements.illHeroTitTwo.selector,
            illTwillBlockTit3 = pageObj.elements.illSpanTitThree.selector;
        var size = client.globals.size.widths;

        client.maximizeWindow();
    if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for hero twill block title-one props
            properties = props.heroShelfProps.illtwillBloTitOneProps(scr); //url
            callback.singleElem(client, illHeroTitone, properties, scr);
            //check for hero twill block  title-two props
            properties = props.heroShelfProps.illtwillBlockTitTwo(scr);
            callback.singleElem(client, illSpanTitTwoCls, properties, scr);
            //check for hero twill block  title-threeprops
            properties = props.heroShelfProps.illtwillBlockTitTwo(scr);
            callback.singleElem(client, illTwillBlockTit3, properties, scr);
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){           
           //check for hero twill block title-one props
            properties = props.heroShelfProps.illtwillBloTitOneProps('lg'); 
            callback.singleElem(client, illHeroTitone, properties, 'lg');
            //check for hero twill block  title-two props
            properties = props.heroShelfProps.illtwillBlockTitTwo('lg');
            callback.singleElem(client, illSpanTitTwoCls, properties, 'lg');
            //check for hero twill block  title-threeprops
            properties = props.heroShelfProps.illtwillBlockTitTwo('lg');
            callback.singleElem(client, illTwillBlockTit3, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
           //check for hero twill block title-one props
            properties = props.heroShelfProps.illtwillBloTitOneProps('sm'); //url
            callback.singleElem(client, illHeroTitone, properties, 'sm');
            //check for hero twill block  title-two props
            properties = props.heroShelfProps.illtwillBlockTitTwo('sm');
            callback.singleElem(client, illSpanTitTwoCls, properties, 'sm');
            //check for hero twill block  title-threeprops
            properties = props.heroShelfProps.illtwillBlockTitTwo('sm');
            callback.singleElem(client, illTwillBlockTit3, properties, 'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
                console.log("isXSDevice");
            //check for hero twill block title-one props
            properties = props.heroShelfProps.illtwillBloTitOneProps('xs'); //url
            callback.singleElem(client, illHeroTitone, properties, 'xs');
            //check for hero twill block  title-two props
            properties = props.heroShelfProps.illtwillBlockTitTwo('xs');
            callback.singleElem(client, illSpanTitTwoCls, properties, 'xs');
            //check for hero twill block  title-threeprops
            properties = props.heroShelfProps.illtwillBlockTitTwo('xs');
            callback.singleElem(client, illTwillBlockTit3, properties, 'xs');
          }
       }
        client.end();
   },
        
   /* "check for background-image rbs(photography)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            client.expect.element('.hero-twill-block .title.one').to.have.css('background-image').which.contains('header-pink-twill');
            client.expect.element('.hero-twill-block .title.two').to.have.css('background-image').which.contains('header-twill');
            client.expect.element('.hero-twill-block .title.three').to.have.css('background-image').which.contains('header-twill');
        }
       
    },
    "check for background-image rbs(illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var size = client.globals.size.widths;

        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            client.expect.element('.hero-twill-block .title.one').to.have.css('background-image').which.contains('header-pink-twill');
            client.expect.element('.hero-twill-block .title.two').to.have.css('background-image').which.contains('header-pink-twill');
            client.expect.element('.hero-twill-block .title.three').to.have.css('background-image').which.contains('header-pink-twill');
        }
         client.end();
     }*/
}