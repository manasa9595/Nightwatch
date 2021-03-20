var props = require('../components/other_comp/globalNotifications_props.js');

module.exports={
    before: function(client) {
        console.log("Setting up...");
        client.globals.state = {};
    },

    'navigate to Page': function(client){
        var signup = client.page.signup();
            signup.navigate()
            //.signInAsAdmin();
            client.waitForElementVisible("body",5000);
        var shelfSelector = client.page.notification_selector(),
            slider = shelfSelector.elements.slider.selector,
            secCTASelector = shelfSelector.elements.secCTASelector.selector,
            settings = client.globals,
            state = client.globals.state;
            
            client.element('css selector', slider, function(result){
                if(result.status != -1)
                    state.visibility = true;
                else
                    state.visibility = false;
            });
            client.element('css selector', slider, function(result){
                if(result.status != -1)
                    state.secCTA = true;
                else
                    state.secCTA = false;
            });
            
    },
    'Testing properties of Notification' : function(client){

        var shelfSelector = client.page.notification_selector(),
            callback = client.page.common();

        var notification = shelfSelector.elements.notification.selector,
            properties = props.notificationProps.notification();

            client.execute(function () {
                // console.log($('.notification-section').offset().top - ($(window).height()))
                // $(window).scrollTop($('.notification-section').offset().top - ($(window).height()));
                $(window).scrollTop(150);
            }, []);
            client.pause(3000);
            callback.singleElem(client,notification,properties);
    },
    'Testing Image properties' : function(client){
        var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths;

            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);

                var notificationImageWrap = shelfSelector.elements.notificationImageWrap.selector,
                    properties = props.notificationProps.notificationImageWrap(scr);
                callback.singleElem(client,notificationImageWrap,properties,scr);

                var notificationImage = shelfSelector.elements.notificationImage.selector,
                    properties2 = props.notificationProps.notificationImage(scr);                    
                callback.singleElem(client,notificationImage,properties2,scr);

                //var imageWrap = shelfSelector.elements.imageWrap.selector,
                 //   properties2 = props.notificationProps.imageWrap(scr);                    
               // callback.singleElem(client,imageWrap,properties2);
            }   
            
    },
    'Testing Notification Properties' : function(client){
        var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths;

        var settings = client.globals,
                state = client.globals.state,
                visibility = state.visibility;

            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);

                var notificationWrap = shelfSelector.elements.notificationWrap.selector,
                    properties = props.notificationProps.notificationWrap(scr,visibility);
                callback.singleElem(client,notificationWrap,properties,scr);
            }   
            
    },
    'Testing Title and Text Wrappers' : function(client){
        

        var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths;

            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);

                var titleWrap = shelfSelector.elements.titleWrap.selector,
                    properties = props.notificationProps.titleWrap(scr);
                callback.singleElem(client,titleWrap,properties,scr);

                var textWrap = shelfSelector.elements.textWrap.selector,
                    properties = props.notificationProps.textWrap(scr);
                callback.singleElem(client,textWrap,properties,scr);

                var settings = client.globals,
                state = client.globals.state;
                if(state.secCTA){
                    var secCTASelector = shelfSelector.elements.secCTASelector.selector,
                        secCTASProps = props.notificationProps.secCTASProps(scr);
                        callback.singleElem(client,secCTASelector,secCTASProps,scr);
                }
            }   
            
    },
    'Testing Slider properties' : function(client){
        var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
             size = client.globals.size.widths,
            settings = client.globals,
            state = client.globals.state,
            visibility = state.visibility;

            if(visibility){
                for(scr in size){
                    client.resizeWindow(size[scr].width, size[scr].height);

                    var slickArrow = shelfSelector.elements.slickArrow.selector,
                        properties = props.notificationProps.slickArrow(scr);

                    callback.multiloop(client,slickArrow,properties,scr);

                    // client.getCssProperty(selector, currentSize, function(result) {
                    //     this.verify.contains(result.value, props[currentSize],"Property "+currentSize+" equals to "+props[currentSize]);
                    // });
                } 
            }else{
                console.log('Slider Not available')
            }
            
    },
    'Testing verticle Line Properties' : function(client){
         var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths,

            verticleLine = shelfSelector.elements.notificationImage.selector,
            properties = props.notificationProps.verticleLineProps();
            callback.pseudoSingleElem(client,verticleLine,':after',properties);
    },
    'Testing Close Button Properties' : function(client){
         var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths

            for(scr in size){
                client.resizeWindow(size[scr].width, size[scr].height);

                closeBtnWrap = shelfSelector.elements.closeBtnWrap.selector,
                properties = props.notificationProps.closeBtnWrapProps(scr);
                callback.singleElem(client,closeBtnWrap,properties,scr);

                closeBtn = shelfSelector.elements.closeBtn.selector,
                properties2 = props.notificationProps.closeBtnProps(scr);
                callback.singleElem(client,closeBtn,properties2,scr);
            }
    },
    'Testing functionality on Click' : function(client){
         var shelfSelector = client.page.notification_selector(),
            selector = shelfSelector.elements.slideItems.selector

        client.elements('css selector',selector,function(result){             
            for (var x = 0; x < result.value.length; x++){
                var y = x+1,
                slideItem = ".slide-item:nth-of-type("+y+")",
                button = ".slick-dots li:nth-of-type("+y+") button",
                slickPrev = ".slick-prev",
                slickNext = ".slick-next"
                if(x==0){
                    /*client.getCssProperty(slickPrev,'background-image',function(result){
                        this.assert.containsText(result.value,"disabled");
                        console.log(result)
                    });*/
                    client.expect.element(slickPrev).to.have.css('background-image').which.contains('disabled');
                }
                if(x==result.value.length-1){                       
                    client.expect.element(slickNext).to.have.css('background-image').which.contains('disabled');
                }
                client.getAttribute(slideItem,'aria-hidden',function(result){
                    this.verify.equal(result.value,"false")
                });
                client.getCssProperty(button,'background-color',function(result){
                    this.verify.equal(result.value,"rgba(255, 255, 255, 1)")
                });
                client.click(slickNext); 
                client.pause(500);
            }
            for (var x = result.value.length; x > 0; x--){
                var slideItem = ".slide-item:nth-of-type("+x+")",
                    button = ".slick-dots li:nth-of-type("+x+") button"
                client.getAttribute(slideItem,'aria-hidden',function(result){
                    this.verify.equal(result.value,"false")
                });
                client.getCssProperty(button,'background-color',function(result){
                    this.verify.equal(result.value,"rgba(255, 255, 255, 1)")
                });
                client.click(slickPrev); 
                client.pause(500);               
            }
        })
    },


    'Testing Close Button on Click' : function(client){
         var shelfSelector = client.page.notification_selector(),
            callback = client.page.common(),
            size = client.globals.size.widths

            closeBtn = shelfSelector.elements.closeBtn.selector,
            globalNotification = shelfSelector.elements.globalNotification.selector,
            properties = props.notificationProps.globalNotiProps();
            client.click(closeBtn);
            client.pause(2000);
            callback.singleElem(client,globalNotification,properties);
    },
    'Closing Browser': function(client){
      client.pause(1000);
      client.end();
    }
};
