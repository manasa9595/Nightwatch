var props = require('../components/other_comp/productlisting_props.js'),
    globalTitleComp = require('../components/title/globaltitle.js'),
    titleComp = require('../components/title/title.js'),
    textComp = require('../components/text/text.js');

module.exports = {
    
    "Check for legal copy": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.productTitleLCSel.selector,
            selector1 = pageObj.elements.multiproductcompSel.selector,
            size = client.globals.size.widths;

            signup.navigate() 
                .signInAsAdmin();
                client.maximizeWindow();
                client.url(signup.url);
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = globalTitleComp.globaltitle.legalCopy(scr);
            callback.singleElem(client, selector, properties, scr);

            properties = props.productlistingProps.multiproductcompSelProps(scr);
            callback.singleElem(client, selector1, properties, scr);


        }
    },

     "Check for Product H2": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.productTitleH2Sel.selector,
             size = client.globals.size.widths; 
              client.maximizeWindow();       
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);                      properties = globalTitleComp.globaltitle.h2props(scr);
             callback.singleElem(client, selector, properties, scr);

             properties = props.productlistingProps.productTitleH2Props(scr);
             callback.singleElem(client, selector, properties, scr);
         }
     },   

    "Check for product Shelf Text": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.productShelfTextSel.selector,
             size = client.globals.size.widths;
              client.maximizeWindow();
        
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);            
             properties = props.productlistingProps.productShelfTextProps(scr);
             callback.singleElem(client, selector, properties, scr);
         }
     },   
    
      "Check for single Title H4 Props": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.singleTitleH4Sel.selector,
            size = client.globals.size.widths;
              client.maximizeWindow();
       
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);
            
             properties = globalTitleComp.globaltitle.h4props(scr);
             callback.multiloop(client, selector, properties, scr);

             properties = props.productlistingProps.singleTitleH4Props(scr);
             callback.multiloop(client, selector, properties, scr);
         }
     },

 
     "Check for single Content Text": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.singleContentTextSel.selector,
             bodyCls = pageObj.elements.singleContentTextSel.selector,
             size = client.globals.size.widths;
             if(client.globals.test_settings.isLocal){
                for (scr in size) {
                     client.resizeWindow(size[scr].width, size[scr].height);            
                     properties = props.productlistingProps.singleContentTextProps(scr);
                     callback.multiloop(client, selector, properties, scr);
                    properties = globalTitleComp.globaltitle.h4props(scr);
                     callback.multiloop(client, selector, properties, scr);
                 }
             }
             else {
                 if(client.options.desiredCapabilities.isLGDevice){
                     properties = props.productlistingProps.singleContentTextProps('lg');
                     callback.multiloop(client, selector, properties, 'lg');

                    properties = globalTitleComp.globaltitle.h4props('lg');
                     callback.multiloop(client, selector, properties, 'lg');
                 }
                else if(client.options.desiredCapabilities.isSMDevice){
                     properties = props.productlistingProps.singleContentTextProps('sm');
                     callback.multiloop(client, selector, properties, 'sm');

                     properties = globalTitleComp.globaltitle.h4props('sm');
                     callback.multiloop(client, selector, properties, 'sm');
                  }
                 else if(client.options.desiredCapabilities.isXSDevice){
                     properties = props.productlistingProps.singleContentTextProps('xs');
                     callback.multiloop(client, selector, properties, 'xs');

                     properties = globalTitleComp.globaltitle.h4props('xs');
                     callback.multiloop(client, selector, properties, 'xs');
                 }
          }
        
     },  
     "Check for single Content H3": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.singleContentH3Sel.selector,
             size = client.globals.size.widths,
            
             selector_2 = pageObj.elements.singleConRTAWraperSel.selector;
              client.maximizeWindow();
        
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);            
             properties = props.productlistingProps.singleContentH3Props(scr);
             callback.multiloop(client, selector, properties, scr);

             properties = globalTitleComp.globaltitle.productSingleprops(scr);
             callback.multiloop(client, selector, properties, scr);

             properties = props.productlistingProps.singleConRTAWraperProps(scr);
             callback.multiloop(client, selector_2, properties, scr);
         }

     },

     /*Start: Has to run Only for Nawest
     ------------------------------*/
    
     "Check for single Content P": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.singleContentSel.selector,
             selector_2 = pageObj.elements.singleConRTAWraperSel.selector,
             size = client.globals.size.widths;
        
            
         client.maximizeWindow();
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);            
             properties = props.productlistingProps.singleContentProps(scr);
             callback.multiloop(client, selector, properties, scr);

             properties = props.productlistingProps.singleConRTAWraperProps(scr);
             callback.multiloop(client, selector_2, properties, scr);
         }
     },
    
     "Check for single Content Li square": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.singleContentLiSquareSel.selector,
             size = client.globals.size.widths,
             existingProps;
        
         client.maximizeWindow();
         for (scr in size) {
           client.resizeWindow(size[scr].width, size[scr].height);            
             properties = props.productlistingProps.singleContentLiProps(scr);            
             callback.pseudoSingleElem(client, selector, ':before', properties);

             properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
             callback.multiloop(client, selector, properties, scr);
         }
    },
     /*End: Has to run Only for Nawest
     -------------------*/
   
     /*Start: Has to run Only for RBS*/
    /* "Check for single Content Li circle": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.singleContentLiCircleSel.selector,
             size = client.globals.size.widths;
        
         client.maximizeWindow();
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);            
             properties = props.productlistingProps.singleContentLiProps(scr);            
             callback.pseudoSingleElem(client, selector, ':before', properties);

             properties = globalTitleComp.globaltitle.bodyCopyProps(scr);
             callback.singleElem(client, selector, properties, scr);
         }
     },
 //    /*End: Has to run Only for RBS*/

     //compliance text properties check 
   "Check for text properties in compliance": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             complText = pageObj.elements.complText.selector,
             size = client.globals.size.widths;
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);
             properties = globalTitleComp.globaltitle.bodyCopyCustProps(scr);
             callback.multiloop(client, complText, properties, scr);
         }

     },
     //compliance text margin left check
     "Check for compliance text margin left": function(client) { 
            var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             complTextML = pageObj.elements.complTextML.selector,
             size = client.globals.size.widths;
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);
             properties = props.productlistingProps.complTextMLProps(scr);
             callback.multiloop(client, complTextML, properties, scr);

         }

    },
      //compliance area paddings check 
    "Check for compliance area paddings": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             complPadding = pageObj.elements.complPadding.selector,
             size = client.globals.size.widths;
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);
             properties = props.productlistingProps.complPaddingProps(scr);
             callback.multiloop(client, complPadding, properties, scr);

         }

     },

     //compliance image properties check 
     "Check for image properties in compliance": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             complImage = pageObj.elements.complImage.selector,
             size = client.globals.size.widths;
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);
             properties = props.productlistingProps.complImageProps(scr);
             callback.multiloop(client, complImage, properties, scr);
         }

     }, 
     "Check for button Fs and lh": function(client) {
         var pageObj = client.page.productlisting_selectors(),
             signup = client.page.signup(),
             callback = client.page.common(),
             selector = pageObj.elements.buttonTextSel.selector,
             size = client.globals.size.widths;
              client.maximizeWindow();
        
         for (scr in size) {
             client.resizeWindow(size[scr].width, size[scr].height);            
             properties = props.productlistingProps.buttonTextProps(scr);
             callback.multiloop(client, selector, properties, scr);
         }
     },    

    "Check for product Shelf Info Img Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.productTitleImgSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.productShelfImgProps(scr);
            callback.singleElem(client, selector, properties, scr);
        }
    }, 
     "Check for single Content CTA": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.singleContentCTASel.selector,
            selector_1 = pageObj.elements.singleContentCTAbSel.selector,
            size = client.globals.size.widths;
        
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.singleContentCTAProps(scr);            
            callback.multiloop(client, selector, properties, scr);

            properties = props.productlistingProps.singleContentCTAbProps(scr);            
            callback.multiloop(client, selector_1, properties, scr);
        }
    } ,  

    
    //Single shelf component properties start
    "Check for product Single Shelf": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.productSingleShelfSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.productSingleShelfProps(scr);
            callback.singleElem(client, selector, properties, scr);
        }
    },
    "Check for product Single Shelf product Comp Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.proSingleShelfProCompSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.proSingleShelfProCompProps(scr);
            callback.singleElem(client, selector, properties, scr);
        }
    },
    "Check for singleImg width": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.singleImgwidthSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
      
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.singleImgwidthProps(scr);
            callback.singleElem(client, selector, properties, scr);
        }
    },

   
    //End : Single Shelf Properties
    //Start : MultiShelf properties
    "Check for MultiImg width": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.multiproductImg.selector,
            size = client.globals.size.widths;
      
        client.maximizeWindow();
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.multiImgwidthProps(scr);
            callback.multiloop(client, selector, properties, scr);
        }
    },
     "Check for Multiproduct Single Shelf": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.multiproductShelfSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.productMultipleShelfProps(scr);
            callback.multiloop(client, selector, properties, scr);
        }
    },
    "Check for Multiproduct Single Shelf product Comp Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            selector = pageObj.elements.multiproSingleShelfProCompSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.proMultiShelfProCompProps(scr);
            callback.multiloop(client, selector, properties, scr);
        }

    },
    "Check for Image wrapper background1 Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imageBg1Sel = pageObj.elements.imageBg1Sel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.imageBg1Props(scr);
            callback.multiloop(client, imageBg1Sel, properties, scr);
        }

    },
    "Check for Image wrapper background2 Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imageBg2Sel = pageObj.elements.imageBg2Sel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.imageBg2Props(scr);
            callback.multiloop(client, imageBg2Sel, properties, scr);
        }

    },
    "Check for Image wrapper background3 Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imageBg3Sel = pageObj.elements.imageBg3Sel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.imageBg3Props(scr);
            callback.multiloop(client, imageBg3Sel, properties, scr);
        }

    },
     "Check for Image wrapper background4 Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imageBg4Sel = pageObj.elements.imageBg4Sel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.imageBg4Props(scr);
            callback.multiloop(client, imageBg4Sel, properties, scr);
        }

    },
    "Check for Image wrapper background single Listing Props": function(client) {
        var pageObj = client.page.productlisting_selectors(),
            signup = client.page.signup(),
            callback = client.page.common(),
            imageBgSingleSel = pageObj.elements.imageBgSingleSel.selector,
            size = client.globals.size.widths;
             client.maximizeWindow();
        
        for (scr in size) {
            client.resizeWindow(size[scr].width, size[scr].height);            
            properties = props.productlistingProps.imageBgSingleSelProps(scr);
            callback.multiloop(client, imageBgSingleSel, properties, scr);
        }
        client.end();

    }
   
}