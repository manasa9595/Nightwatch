var props = require('../components/other_comp/whyUsShelf_props.js'),
globalTitleComp = require('../components/title/globaltitle.js');

module.exports={
    'navigate to Page': function(client){
        var signup = client.page.signup(),
            shelfSelector = client.page.whyusshelf_selector(),
            callback = client.page.common();
            signup.navigate();
        //.signInAsAdmin();
        client.maximizeWindow();
         client.url(shelfSelector.url);
            client.waitForElementVisible("body",5000); 
            
    },
   /* 'Testing Psueudo Properties for Twill': function(client){
        var shelfSelector = client.page.whyusshelf_selector(),
            callback = client.page.common(),
            TwillPseudo = shelfSelector.elements.TwillPseudo.selector,
            properties = props.whyUsShelfProps.whyUspseudoProp();
            callback.pseudoSingleElem(client,TwillPseudo,':after',properties);

    },*/
    'Testing WhiteBg whyUsShelf': function(client){
      var shelfSelector = client.page.whyusshelf_selector(),
          whiteShelf=shelfSelector.elements.whiteShelf.selector,
          Shelfprop=shelfSelector.elements.Shelfprop.selector,
          shelfText=shelfSelector.elements.shelfText.selector,
          callback = client.page.common(),
          size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
          for(scr in size){
          client.resizeWindow(size[scr].width, size[scr].height);
          properties = props.whyUsShelfProps.whyUsWhiteShelfProps(scr);
          callback.singleElem(client,whiteShelf,properties,scr)

          properties = props.whyUsShelfProps.whyUsWhiteShelftitle(scr);
          callback.singleElem(client,Shelfprop,properties,scr)

          properties = props.whyUsShelfProps.whyUsWhiteShelftext(scr);
          callback.singleElem(client,shelfText,properties,scr)

        }
      }
      else {
          if(client.options.desiredCapabilities.isLGDevice){
          properties = props.whyUsShelfProps.whyUsWhiteShelfProps('lg');
          callback.singleElem(client,whiteShelf,properties,'lg')

          properties = props.whyUsShelfProps.whyUsWhiteShelftitle('lg');
          callback.singleElem(client,Shelfprop,properties,'lg')

          properties = props.whyUsShelfProps.whyUsWhiteShelftext('lg');
          callback.singleElem(client,shelfText,properties,'lg')
          }
          else if(client.options.desiredCapabilities.isSMDevice){
          properties = props.whyUsShelfProps.whyUsWhiteShelfProps('sm');
          callback.singleElem(client,whiteShelf,properties,'sm')

          properties = props.whyUsShelfProps.whyUsWhiteShelftitle('sm');
          callback.singleElem(client,Shelfprop,properties,'sm')

          properties = props.whyUsShelfProps.whyUsWhiteShelftext('sm');
          callback.singleElem(client,shelfText,properties,'sm')
          }
          else if(client.options.desiredCapabilities.isXSDevice){
          properties = props.whyUsShelfProps.whyUsWhiteShelfProps('xs');
          callback.singleElem(client,whiteShelf,properties,'xs')

          properties = props.whyUsShelfProps.whyUsWhiteShelftitle('xs');
          callback.singleElem(client,Shelfprop,properties,'xs')

          properties = props.whyUsShelfProps.whyUsWhiteShelftext('xs');
          callback.singleElem(client,shelfText,properties,'xs')
          }
      }
    },
    'Testing PurpleBg whyUsShelf': function(client){
      var shelfSelector = client.page.whyusshelf_selector(),
          purpleShelf=shelfSelector.elements.purpleShelf.selector;
          Shelftitle=shelfSelector.elements.Shelftitle.selector;
          shelfTextPurplebg=shelfSelector.elements.shelfTextPurplebg.selector;
          callback = client.page.common(),
          size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
          for(scr in size){
          client.resizeWindow(size[scr].width, size[scr].height);
          properties = props.whyUsShelfProps.whyUsPurpleShelfProps(scr);
          callback.singleElem(client,purpleShelf,properties,scr);

          properties = props.whyUsShelfProps.whyUspurpleShelftitle(scr);
          callback.singleElem(client,Shelftitle,properties,scr);

          properties = props.whyUsShelfProps.whyUspurpleShelftext(scr);
          callback.singleElem(client,shelfTextPurplebg,properties,scr);
        }
      }
       else {
          if(client.options.desiredCapabilities.isLGDevice){
          properties = props.whyUsShelfProps.whyUsPurpleShelfProps('lg');
          callback.singleElem(client,purpleShelf,properties,'lg');

          properties = props.whyUsShelfProps.whyUspurpleShelftitle('lg');
          callback.singleElem(client,Shelftitle,properties,'lg');

          properties = props.whyUsShelfProps.whyUspurpleShelftext('lg');
          callback.singleElem(client,shelfTextPurplebg,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
          properties = props.whyUsShelfProps.whyUsPurpleShelfProps('sm');
          callback.singleElem(client,purpleShelf,properties,'sm');

          properties = props.whyUsShelfProps.whyUspurpleShelftitle('sm');
          callback.singleElem(client,Shelftitle,properties,'sm');

          properties = props.whyUsShelfProps.whyUspurpleShelftext('sm');
          callback.singleElem(client,shelfTextPurplebg,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
          properties = props.whyUsShelfProps.whyUsPurpleShelfProps('xs');
          callback.singleElem(client,purpleShelf,properties,'xs');

          properties = props.whyUsShelfProps.whyUspurpleShelftitle('xs');
          callback.singleElem(client,Shelftitle,properties,'xs');

          properties = props.whyUsShelfProps.whyUspurpleShelftext('xs');
          callback.singleElem(client,shelfTextPurplebg,properties,'xs');
          }

        }
    },

    'Testing main title whyUsShelf': function(client){
      var shelfSelector = client.page.whyusshelf_selector(),
          title=shelfSelector.elements.title.selector;
          titleColorBg=shelfSelector.elements.titleColorBg.selector;
          callback = client.page.common(),
          size = client.globals.size.widths;
        if(client.globals.test_settings.isLocal){
          for(scr in size){
          client.resizeWindow(size[scr].width, size[scr].height);
          properties = props.whyUsShelfProps.titleProps(scr);
          callback.multiloop(client,title,properties,scr);

          properties = globalTitleComp.globaltitle.h2props(scr);
          callback.multiloop(client,title,properties,scr);

          properties = props.whyUsShelfProps.titleColorBgProps(scr);
          callback.multiloop(client,titleColorBg,properties,scr);

          properties = globalTitleComp.globaltitle.h2props(scr);
          callback.multiloop(client,titleColorBg,properties,scr);

        }
      }
       else {
          if(client.options.desiredCapabilities.isLGDevice){
          properties = props.whyUsShelfProps.titleProps('lg');
          callback.singleElem(client,title,properties,'lg');

          properties = globalTitleComp.globaltitle.h2props('lg');
          callback.singleElem(client,title,properties,'lg');

          properties = props.whyUsShelfProps.titleColorBgProps('lg');
          callback.multiloop(client,titleColorBg,properties,'lg');

          properties = globalTitleComp.globaltitle.h2props('lg');
          callback.multiloop(client,titleColorBg,properties,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
          properties = props.whyUsShelfProps.titleProps('sm');
          callback.singleElem(client,title,properties,'sm');

          properties = globalTitleComp.globaltitle.h2props('sm');
          callback.singleElem(client,title,properties,'sm');

          properties = props.whyUsShelfProps.titleColorBgProps('sm');
          callback.multiloop(client,titleColorBg,properties,'sm');

          properties = globalTitleComp.globaltitle.h2props('sm');
          callback.multiloop(client,titleColorBg,properties,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
          properties = props.whyUsShelfProps.titleProps('xs');
          callback.singleElem(client,title,properties,'xs');

          properties = globalTitleComp.globaltitle.h2props('xs');
          callback.singleElem(client,title,properties,'xs');

          properties = props.whyUsShelfProps.titleColorBgProps('xs');
          callback.multiloop(client,titleColorBg,properties,'xs');

          properties = globalTitleComp.globaltitle.h2props('xs');
          callback.multiloop(client,titleColorBg,properties,'xs');
          }

        }
    },
    'Testing Grid1 properties': function(client){
      var shelfSelector = client.page.whyusshelf_selector(),
          grid1=shelfSelector.elements.grid1.selector,
          grid2=shelfSelector.elements.grid2.selector,
          grid3=shelfSelector.elements.grid3.selector,
          grid4=shelfSelector.elements.grid4.selector,
          callback = client.page.common(),
          
          size = client.globals.size.widths;

          client.maximizeWindow();
          if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
           
              properties1 = props.whyUsShelfProps.whyUsShelfGrid1(scr);
              callback.singleElem(client,grid1,properties1,scr);

              properties2 = props.whyUsShelfProps.whyUsShelfGrid2(scr);
              callback.singleElem(client,grid2,properties2,scr);

              properties3 = props.whyUsShelfProps.whyUsShelfGrid3(scr);
              callback.singleElem(client,grid3,properties3,scr);

              properties4 = props.whyUsShelfProps.whyUsShelfGrid4(scr);
              callback.singleElem(client,grid4,properties4,scr);
          } 
        }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
            properties1 = props.whyUsShelfProps.whyUsShelfGrid1('lg');
            callback.singleElem(client,grid1,properties1,'lg');

            properties2 = props.whyUsShelfProps.whyUsShelfGrid2('lg');
            callback.singleElem(client,grid2,properties2,'lg');

            properties3 = props.whyUsShelfProps.whyUsShelfGrid3('lg');
            callback.singleElem(client,grid3,properties3,'lg');

            properties4 = props.whyUsShelfProps.whyUsShelfGrid4('lg');
            callback.singleElem(client,grid4,properties4,'lg');
          }
          else if(client.options.desiredCapabilities.isSMDevice){
            properties1 = props.whyUsShelfProps.whyUsShelfGrid1('sm');
            callback.singleElem(client,grid1,properties1,'sm');

            properties2 = props.whyUsShelfProps.whyUsShelfGrid2('sm');
            callback.singleElem(client,grid2,properties2,'sm');

            properties3 = props.whyUsShelfProps.whyUsShelfGrid3('sm');
            callback.singleElem(client,grid3,properties3,'sm');

            properties4 = props.whyUsShelfProps.whyUsShelfGrid4('sm');
            callback.singleElem(client,grid4,properties4,'sm');
          }
          else if(client.options.desiredCapabilities.isXSDevice){
            properties1 = props.whyUsShelfProps.whyUsShelfGrid1('xs');
            callback.singleElem(client,grid1,properties1,'xs');

            properties2 = props.whyUsShelfProps.whyUsShelfGrid2('xs');
            callback.singleElem(client,grid2,properties2,'xs');

            properties3 = props.whyUsShelfProps.whyUsShelfGrid3('xs');
            callback.singleElem(client,grid3,properties3,'xs');

            properties4 = props.whyUsShelfProps.whyUsShelfGrid4('xs');
            callback.singleElem(client,grid4,properties4,'xs');
          }
        }               
    },
    'Testing Multiloop for grid': function(client){
      var shelfSelector = client.page.whyusshelf_selector(),
          gridImage=shelfSelector.elements.gridImage.selector,
          gridTitle=shelfSelector.elements.gridTitle.selector,
          gridTitleComp=shelfSelector.elements.gridTitleComp.selector,
          gridText=shelfSelector.elements.gridText.selector,
          gridSecCTAWrap=shelfSelector.elements.gridSecCTAWrap.selector,
          gridSecCTA=shelfSelector.elements.gridSecCTA.selector,
          gridSecCTAPurple=shelfSelector.elements.gridSecCTAPurple.selector,
          callback = client.page.common(),
           size = client.globals.size.widths;
           client.maximizeWindow();
          if(client.globals.test_settings.isLocal){
          for(scr in size){
            client.resizeWindow(size[scr].width, size[scr].height);
              imgprops = props.whyUsShelfProps.whyUsImgProps(scr);
              callback.multiloop(client,gridImage,imgprops,scr);

              titleprops = props.whyUsShelfProps.whyUsTitleProps(scr);
              callback.multiloop(client,gridTitle,titleprops,scr);

              titlecompprops = props.whyUsShelfProps.whyUsTitlecompProps(scr);
              callback.multiloop(client,gridTitleComp,titlecompprops,scr); 

              textprops = props.whyUsShelfProps.whyUsTextProps(scr);
              callback.multiloop(client,gridText,textprops,scr);

              secctawrapprops = props.whyUsShelfProps.whyUsSecCTAWrapProps(scr);
              callback.multiloop(client,gridSecCTAWrap,secctawrapprops,scr);

              secctaprops = props.whyUsShelfProps.whyUsSecCTAProps(scr);
              callback.multiloop(client,gridSecCTA,secctaprops,scr);

              secctapurpleprops = props.whyUsShelfProps.whyUsSecCTAPurpleProps(scr);
              callback.multiloop(client,gridSecCTAPurple,secctapurpleprops,scr);
          }
        }
        else {
          if(client.options.desiredCapabilities.isLGDevice){
            imgprops = props.whyUsShelfProps.whyUsImgProps('lg');
            callback.multiloop(client,gridImage,imgprops,'lg');

            titleprops = props.whyUsShelfProps.whyUsTitleProps('lg');
            callback.multiloop(client,gridTitle,titleprops,'lg');

            titlecompprops = props.whyUsShelfProps.whyUsTitlecompProps('lg');
              callback.multiloop(client,gridTitleComp,titlecompprops,'lg'); 

            textprops = props.whyUsShelfProps.whyUsTextProps('lg');
            callback.multiloop(client,gridText,textprops,'lg');

            secctawrapprops = props.whyUsShelfProps.whyUsSecCTAWrapProps('lg');
            callback.multiloop(client,gridSecCTAWrap,secctawrapprops,'lg');

            secctaprops = props.whyUsShelfProps.whyUsSecCTAProps('lg');
            callback.multiloop(client,gridSecCTA,secctaprops,'lg');

            secctapurpleprops = props.whyUsShelfProps.whyUsSecCTAPurpleProps('lg');
            callback.multiloop(client,gridSecCTAPurple,secctapurpleprops,'lg');
          }
        else if(client.options.desiredCapabilities.isSMDevice){
            imgprops = props.whyUsShelfProps.whyUsImgProps('sm');
            callback.multiloop(client,gridImage,imgprops,'sm');

            titleprops = props.whyUsShelfProps.whyUsTitleProps('sm');
            callback.multiloop(client,gridTitle,titleprops,'sm');

            titlecompprops = props.whyUsShelfProps.whyUsTitlecompProps('sm');
              callback.multiloop(client,gridTitleComp,titlecompprops,'sm'); 

            textprops = props.whyUsShelfProps.whyUsTextProps('sm');
            callback.multiloop(client,gridText,textprops,'sm');

            secctawrapprops = props.whyUsShelfProps.whyUsSecCTAWrapProps('sm');
            callback.multiloop(client,gridSecCTAWrap,secctawrapprops,'sm');

            secctaprops = props.whyUsShelfProps.whyUsSecCTAProps('sm');
            callback.multiloop(client,gridSecCTA,secctaprops,'sm');

            secctapurpleprops = props.whyUsShelfProps.whyUsSecCTAPurpleProps('sm');
            callback.multiloop(client,gridSecCTAPurple,secctapurpleprops,'sm');
        }
        else if(client.options.desiredCapabilities.isXSDevice){
            imgprops = props.whyUsShelfProps.whyUsImgProps('xs');
            callback.multiloop(client,gridImage,imgprops,'xs');

            titleprops = props.whyUsShelfProps.whyUsTitleProps('xs');
            callback.multiloop(client,gridTitle,titleprops,'xs');

            titlecompprops = props.whyUsShelfProps.whyUsTitlecompProps('xs');
            callback.multiloop(client,gridTitleComp,titlecompprops,'xs'); 

            textprops = props.whyUsShelfProps.whyUsTextProps('xs');
            callback.multiloop(client,gridText,textprops,'xs');

            secctawrapprops = props.whyUsShelfProps.whyUsSecCTAWrapProps('xs');
            callback.multiloop(client,gridSecCTAWrap,secctawrapprops,'xs');

            secctaprops = props.whyUsShelfProps.whyUsSecCTAProps('xs');
            callback.multiloop(client,gridSecCTA,secctaprops,'xs');

            secctapurpleprops = props.whyUsShelfProps.whyUsSecCTAPurpleProps('xs');
            callback.multiloop(client,gridSecCTAPurple,secctapurpleprops,'xs');
        }
      }
    },

    'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
};
