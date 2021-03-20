var props = require('../components/other_comp/heroShelf_Props.js'),
    globalTitleComp = require('../components/title/globaltitle.js');
module.exports = {
    "1.hero-shelf properties for hero-image-wrapper natwest(photography mode)": function(client) {
        //console.log(client);
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var imgWrapNW = pageObj.elements.imgWrapClsNW.selector,
            imgHeightCls = pageObj.elements.imgWrapperNW.selector,
            imageCls = pageObj.elements.ImgCls.selector,
            imgContCls = pageObj.elements.ImgContentCls.selector,
            imgCompClass = pageObj.elements.ImgCompGeneric.selector;
        var size = client.globals.size.widths;
        pageObj.navigate()
        //.signInAsAdmin();
        client.maximizeWindow();
        client.maximizeWindow("current");
        client.url(pageObj.url);
        //client.waitForElementVisible('.heroimagewrapper .heroimagecontainer', 5000);
       if(client.globals.test_settings.isLocal){
        for (scr in size) {
           
            client.resizeWindow(size[scr].width, size[scr].height);
            
            properties = props.heroShelfProps.imgWrapperProps(scr);
            callback.singleElem(client, imgHeightCls, properties, scr);
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.imgProperties(scr);
            callback.singleElem(client, imageCls, properties, scr);
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContProps(scr);
            callback.singleElem(client, imgContCls, properties, scr);
            //hero shelf img-comp-generic properties
            properties = props.heroShelfProps.imgProps(scr);
            callback.singleElem(client, imgCompClass, properties, scr);

        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            properties = props.heroShelfProps.imgWrapperProps('lg');
            callback.singleElem(client, imgHeightCls, properties, 'lg');
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.imgProperties('lg');
            callback.singleElem(client, imageCls, properties, 'lg');
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContProps('lg');
            callback.singleElem(client, imgContCls, properties, 'lg');
            //hero shelf img-comp-generic properties
            properties = props.heroShelfProps.imgProps('lg');
            callback.singleElem(client, imgCompClass, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
            properties = props.heroShelfProps.imgWrapperProps('sm');
            callback.singleElem(client, imgHeightCls, properties, 'sm');
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.imgProperties('sm');
            callback.singleElem(client, imageCls, properties, 'sm');
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContProps('sm');
            callback.singleElem(client, imgContCls, properties, 'sm');
            //hero shelf img-comp-generic properties
            properties = props.heroShelfProps.imgProps('sm');
            callback.singleElem(client, imgCompClass, properties, 'sm');
         } 
         else if(client.options.desiredCapabilities.isXSDevice){
            properties = props.heroShelfProps.imgWrapperProps('xs');
            callback.singleElem(client, imgHeightCls, properties, 'xs');
            //heroshelf image wrapper properties
            properties = props.heroShelfProps.imgProperties('xs');
            callback.singleElem(client, imageCls, properties, 'xs');
            //heroshelf image-content properties
            properties = props.heroShelfProps.imgContProps('xs');
            callback.singleElem(client, imgContCls, properties, 'xs');
            //hero shelf img-comp-generic properties
            properties = props.heroShelfProps.imgProps('xs');
            callback.singleElem(client, imgCompClass, properties, 'xs');

            }

      }

    },
   "2.hero-shelf properties for hero-title-block natwest(photography mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var heroTitCls = pageObj.elements.heroTitBlock.selector,
            heroTitTextCls = pageObj.elements.heroTitText.selector,
            heroTitlePaddingCls = pageObj.elements.heroTitNwPad.selector;
        var size = client.globals.size.widths;
        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for Margin properties of hero title block
            properties = props.heroShelfProps.heroTitProps(scr);
            callback.singleElem(client, heroTitCls, properties, scr);
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps(scr);
            callback.singleElem(client, heroTitTextCls, properties, scr);
            //check for hero-title padding props
            properties = props.heroShelfProps.heroTitPad(scr);
            callback.singleElem(client, heroTitlePaddingCls, properties, scr);
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props(scr);
            callback.singleElem(client, heroTitTextCls, properties, scr);
        }
     }
     else{
        if(client.options.desiredCapabilities.isLGDevice){
            //Check for Margin properties of hero title block
            properties = props.heroShelfProps.heroTitProps('lg');
            callback.singleElem(client, heroTitCls, properties, 'lg');
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps('lg');
            callback.singleElem(client, heroTitTextCls, properties, 'lg');
            //check for hero-title padding props
            properties = props.heroShelfProps.heroTitPad('lg');
            callback.singleElem(client, heroTitlePaddingCls, properties, 'lg');
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props('lg');
            callback.singleElem(client, heroTitTextCls, properties, 'lg');

        }
        else if(client.options.desiredCapabilities.isSMDevice){
            //Check for Margin properties of hero title block
            properties = props.heroShelfProps.heroTitProps('sm');
            callback.singleElem(client, heroTitCls, properties, 'sm');
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps('sm');
            callback.singleElem(client, heroTitTextCls, properties, 'sm');
            //check for hero-title padding props
            properties = props.heroShelfProps.heroTitPad('sm');
            callback.singleElem(client, heroTitlePaddingCls, properties, 'sm');
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props('sm');
            callback.singleElem(client, heroTitTextCls, properties, 'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
            //Check for Margin properties of hero title block
            properties = props.heroShelfProps.heroTitProps('xs');
            callback.singleElem(client, heroTitCls, properties, 'xs');
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps('xs');
            callback.singleElem(client, heroTitTextCls, properties, 'xs');
            //check for hero-title padding props
            properties = props.heroShelfProps.heroTitPad('xs');
            callback.singleElem(client, heroTitlePaddingCls, properties, 'xs');
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props('xs');
            callback.singleElem(client, heroTitTextCls, properties, 'xs');
        }

     }
        
    },
   "3.hero-shelf properties for product-title natwest(photography mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var proTitleCls = pageObj.elements.prodTitCls.selector,
            prodTitTextCls = pageObj.elements.prodTitText.selector;
        var size = client.globals.size.widths;

        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for product title properties
            properties = props.heroShelfProps.prodTitProps(scr);
            callback.singleElem(client, proTitleCls, properties, scr);
            //check for product title bg color
            properties = props.heroShelfProps.prodTitbgclr(scr);
            callback.singleElem(client, proTitleCls, properties, scr);
            //check for product title properties
            properties = props.heroShelfProps.prodTitText(scr);
            callback.singleElem(client, prodTitTextCls, properties, scr);
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.singleElem(client, prodTitTextCls, properties, scr);
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
             //check for product title properties
            properties = props.heroShelfProps.prodTitProps('lg');
            callback.singleElem(client, proTitleCls, properties, 'lg');
            //check for product title bg color
            properties = props.heroShelfProps.prodTitbgclr('lg');
            callback.singleElem(client, proTitleCls, properties, 'lg');
            //check for product title properties
            properties = props.heroShelfProps.prodTitText('lg');
            callback.singleElem(client, prodTitTextCls, properties, 'lg');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('lg');
            callback.singleElem(client, prodTitTextCls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
            //check for product title properties
            properties = props.heroShelfProps.prodTitProps('sm');
            callback.singleElem(client, proTitleCls, properties, 'sm');
            //check for product title bg color
            properties = props.heroShelfProps.prodTitbgclr('sm');
            callback.singleElem(client, proTitleCls, properties, 'sm');
            //check for product title properties
            properties = props.heroShelfProps.prodTitText('sm');
            callback.singleElem(client, prodTitTextCls, properties, 'sm');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('sm');
            callback.singleElem(client, prodTitTextCls, properties, 'sm');     
        }
        else if(client.options.desiredCapabilities.isXSDevice){
            //check for product title properties
            properties = props.heroShelfProps.prodTitProps('xs');
            callback.singleElem(client, proTitleCls, properties, 'xs');
            //check for product title bg color
            properties = props.heroShelfProps.prodTitbgclr('xs');
            callback.singleElem(client, proTitleCls, properties, 'xs');
            //check for product title properties
            properties = props.heroShelfProps.prodTitText('xs');
            callback.singleElem(client, prodTitTextCls, properties, 'xs');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('xs');
            callback.singleElem(client, prodTitTextCls, properties, 'xs'); 
         }

     } 

    },
    "4.hero-shelf properties for apr-title & apr-legal copy natwest,rbs(photography & illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var aprTitleCls = pageObj.elements.aprMargin.selector,
            aprLegalCopyCls = pageObj.elements.aprLegalCls.selector,
            aprTitTxtCls = pageObj.elements.aprTitleTxt.selector,
            aprTitleTextClass = pageObj.elements.aprTitleTxt.selector,
            aprTitleCls = pageObj.elements.aprMargin.selector,
            aprTitle=pageObj.elements.aprTitle.selector
        var size = client.globals.size.widths;
        //pageObj.navigate();

        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for apr-title props
            properties = props.heroShelfProps.aprContainerProps(scr);
            callback.singleElem(client, aprTitle, properties, scr);
            //check for apr-title fs and lh props
            properties = globalTitleComp.globaltitle.h1props(scr);
            callback.singleElem(client, aprTitTxtCls, properties, scr);
            //check for apr-legal-copy properties
            properties = props.heroShelfProps.aprLegalProps(scr);
            callback.singleElem(client, aprLegalCopyCls, properties, scr);
           
        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            //check for apr-title props
            properties = props.heroShelfProps.aprContainerProps('lg');
            callback.singleElem(client, aprTitle, properties, 'lg');
            //check for apr-title fs and lh props
            properties = globalTitleComp.globaltitle.h1props('lg');
            callback.singleElem(client, aprTitTxtCls, properties, 'lg');
            //check for apr-legal-copy properties
            properties = props.heroShelfProps.aprLegalProps('lg');
            callback.singleElem(client, aprLegalCopyCls, properties, 'lg');
            }
            else if(client.options.desiredCapabilities.isSMDevice){
                //check for apr-title props
            properties = props.heroShelfProps.aprContainerProps('sm');
            callback.singleElem(client, aprTitle, properties, 'sm');
            //check for apr-title fs and lh props
            properties = globalTitleComp.globaltitle.h1props('sm');
            callback.singleElem(client, aprTitTxtCls, properties, 'sm');
            //check for apr-legal-copy properties
            properties = props.heroShelfProps.aprLegalProps('sm');
            callback.singleElem(client, aprLegalCopyCls, properties, 'sm');
          }
           else if(client.options.desiredCapabilities.isXSDevice){
            //check for apr-title props
            properties = props.heroShelfProps.aprContainerProps('xs');
            callback.singleElem(client, aprTitle, properties, 'xs');
            //check for apr-title fs and lh props
            properties = globalTitleComp.globaltitle.h1props('xs');
            callback.singleElem(client, aprTitTxtCls, properties, 'xs');
            //check for apr-legal-copy properties
            properties = props.heroShelfProps.aprLegalProps('xs');
            callback.singleElem(client, aprLegalCopyCls, properties, 'xs');
         }

        }

    },
    "5.hero-shelf properties for illustration wrapper for Natwest (illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illWrapCls = pageObj.elements.illWrapper.selector;
        var size = client.globals.size.widths;
        client.maximizeWindow();
         if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //hero shelf illustration wrapper
            properties = props.heroShelfProps.illWrapProps(scr);
            callback.singleElem(client, illWrapCls, properties, scr);
            //hero shelf illustration wrapper
            properties = props.heroShelfProps.illProps(scr);
            callback.singleElem(client, illWrapCls, properties, scr);

        }
    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            //hero shelf illustration wrapper
            properties = props.heroShelfProps.illWrapProps('lg');
            callback.singleElem(client, illWrapCls, properties, 'lg');
            //hero shelf illustration wrapper
            //properties = props.heroShelfProps.illProps('lg');
            //callback.singleElem(client, illWrapCls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
             
            //hero shelf illustration wrapper
            properties = props.heroShelfProps.illWrapProps('sm');
            callback.singleElem(client, illWrapCls, properties, 'sm');
            //hero shelf illustration wrapper
            //properties = props.heroShelfProps.illProps('sm');
            //callback.singleElem(client, illWrapCls, properties, 'sm');

        }
        else if(client.options.desiredCapabilities.isXSDevice){

            //hero shelf illustration wrapper
            properties = props.heroShelfProps.illWrapProps('xs');
            callback.singleElem(client, illWrapCls, properties, 'xs');
            //hero shelf illustration wrapper
            //properties = props.heroShelfProps.illProps('xs');
            //callback.singleElem(client, illWrapCls, properties, 'xs');

        }
    }

        
    },
    "6.hero-shelf properties for image wrapper for Natwest (illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illImgWrapCls = pageObj.elements.illImage.selector,
            illImgCompCls = pageObj.elements.illCompImg.selector;
        var size = client.globals.size.widths;

        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //hero shelf illustration image wrapper
            properties = props.heroShelfProps.illImgProps(scr);
            callback.singleElem(client, illImgWrapCls, properties, scr);
            //hero shelf properties for comp-img generic
            properties = props.heroShelfProps.illCompImg(scr);
            callback.singleElem(client, illImgCompCls, properties, scr);
        }

    }
    else{
        if(client.options.desiredCapabilities.isLGDevice){
            //hero shelf illustration image wrapper
            properties = props.heroShelfProps.illImgProps('lg');
            callback.singleElem(client, illImgWrapCls, properties, 'lg');
            //hero shelf properties for comp-img generic
            properties = props.heroShelfProps.illCompImg('lg');
            callback.singleElem(client, illImgCompCls, properties, 'lg');

         }
          else if(client.options.desiredCapabilities.isSMDevice){
            //hero shelf illustration image wrapper
            properties = props.heroShelfProps.illImgProps('sm');
            callback.singleElem(client, illImgWrapCls, properties, 'sm');
            //hero shelf properties for comp-img generic
            properties = props.heroShelfProps.illCompImg('sm');
            callback.singleElem(client, illImgCompCls, properties, 'sm');
        }
         else if(client.options.desiredCapabilities.isXSDevice){
            //hero shelf illustration image wrapper
            properties = props.heroShelfProps.illImgProps('xs');
            callback.singleElem(client, illImgWrapCls, properties, 'xs');
            //hero shelf properties for comp-img generic
            properties = props.heroShelfProps.illCompImg('xs');
            callback.singleElem(client, illImgCompCls, properties, 'xs');
        }

     }

    },
    "7.hero-shelf properties for hero-title-block Natwest (illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illHeroTitBloCls = pageObj.elements.illHeroTitBlock.selector,
            illHeroTith1Cls = pageObj.elements.illHeroTitBloh1.selector,
            illHeroTitPadCls = pageObj.elements.illHeroTitH1.selector;

        var size = client.globals.size.widths;

        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //Check for properties of hero title block
            properties = props.heroShelfProps.heroTitPropsill(scr);
            callback.singleElem(client, illHeroTitBloCls, properties, scr);
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps(scr);
            callback.singleElem(client, illHeroTith1Cls, properties, scr);
            //check for hero-title-block-h1 padding
            properties = props.heroShelfProps.heroTith1(scr);
            callback.singleElem(client, illHeroTitPadCls, properties, scr);
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props(scr);
            callback.singleElem(client, illHeroTith1Cls, properties, scr);
        }
       }
       else{
        if(client.options.desiredCapabilities.isLGDevice){
            //Check for properties of hero title block
            properties = props.heroShelfProps.heroTitPropsill('lg');
            callback.singleElem(client, illHeroTitBloCls, properties, 'lg');
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps('lg');
            callback.singleElem(client, illHeroTith1Cls, properties, 'lg');
            //check for hero-title-block-h1 padding
            properties = props.heroShelfProps.heroTith1('lg');
            callback.singleElem(client, illHeroTitPadCls, properties, 'lg');
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props('lg');
            callback.singleElem(client, illHeroTith1Cls, properties, 'lg');
           }
           else if(client.options.desiredCapabilities.isSMDevice){
            //Check for properties of hero title block
            properties = props.heroShelfProps.heroTitPropsill('sm');
            callback.singleElem(client, illHeroTitBloCls, properties, 'sm');
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps('sm');
            callback.singleElem(client, illHeroTith1Cls, properties, 'sm');
            //check for hero-title-block-h1 padding
            properties = props.heroShelfProps.heroTith1('sm');
            callback.singleElem(client, illHeroTitPadCls, properties, 'sm');
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props('sm');
            callback.singleElem(client, illHeroTith1Cls, properties, 'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
            //Check for properties of hero title block
            properties = props.heroShelfProps.heroTitPropsill('xs');
            callback.singleElem(client, illHeroTitBloCls, properties, 'xs');
            //check for hero title text properties
            properties = props.heroShelfProps.heroTitTextProps('xs');
            callback.singleElem(client, illHeroTith1Cls, properties, 'xs');
            //check for hero-title-block-h1 padding
            properties = props.heroShelfProps.heroTith1('xs');
            callback.singleElem(client, illHeroTitPadCls, properties, 'xs');
            //hero-title text properties(fs and lh global)
            properties = globalTitleComp.globaltitle.h1props('xs');
            callback.singleElem(client, illHeroTith1Cls, properties, 'xs');
        }
      }

    },
    "8.hero-shelf properties for product-title Natwest (illustration mode)": function(client) {
        var pageObj = client.page.heroShelf_selectors(),
            signup = client.page.signup(),
            callback = client.page.common();
        var illProdTitCls = pageObj.elements.illProdTit.selector, //product title class
            illProdTitTextCls = pageObj.elements.illProdTitText.selector; //product title text

        var size = client.globals.size.widths;

        client.maximizeWindow();
        if(client.globals.test_settings.isLocal){
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);
            //check for product title properties-llustration mode
            properties = props.heroShelfProps.illprodTitText(scr);
            callback.singleElem(client, illProdTitTextCls, properties, scr);
            //check for product title properties
            properties = props.heroShelfProps.titleProdill(scr);
            callback.singleElem(client, illProdTitCls, properties, scr);
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props(scr);
            callback.singleElem(client, illProdTitTextCls, properties, scr);
        }
    }
     else{
        if(client.options.desiredCapabilities.isLGDevice){
            //check for product title properties-llustration mode
            properties = props.heroShelfProps.illprodTitText('lg');
            callback.singleElem(client, illProdTitTextCls, properties, 'lg');
            //check for product title properties
            properties = props.heroShelfProps.titleProdill('lg');
            callback.singleElem(client, illProdTitCls, properties, 'lg');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('lg');
            callback.singleElem(client, illProdTitTextCls, properties, 'lg');
        }
        else if(client.options.desiredCapabilities.isSMDevice){
            //check for product title properties-llustration mode
            properties = props.heroShelfProps.illprodTitText('sm');
            callback.singleElem(client, illProdTitTextCls, properties, 'sm');
            //check for product title properties
            properties = props.heroShelfProps.titleProdill('sm');
            callback.singleElem(client, illProdTitCls, properties, 'sm');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('sm');
            callback.singleElem(client, illProdTitTextCls, properties, 'sm');
         }
         else if(client.options.desiredCapabilities.isXSDevice){
            //check for product title properties-llustration mode
            properties = props.heroShelfProps.illprodTitText('xs');
            callback.singleElem(client, illProdTitTextCls, properties, 'xs');
            //check for product title properties
            properties = props.heroShelfProps.titleProdill('xs');
            callback.singleElem(client, illProdTitCls, properties, 'xs');
            //check for product title text properties(fs and lh)
            properties = globalTitleComp.globaltitle.h4props('xs');
            callback.singleElem(client, illProdTitTextCls, properties, 'xs');
        }
    }
    client.end();
}
}