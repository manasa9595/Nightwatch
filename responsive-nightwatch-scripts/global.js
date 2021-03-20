var size = {
    widths:{   
    			"lg" : {width: 1378, height : 700},
          "md" : {width: 1257, height : 900},
          "sm" : {width: 1023, height : 800},
          "xs" : {width: 480, height : 640} 
    },
    zeplinPOC_widths:{   
          "xl" : {width: 1378, height : 700},
          "l" : {width: 1257, height : 900},
          "m" : {width: 1023, height : 800},
          "s" : {width: 480, height : 640} 
    },

  //colWidth:{'lg':'296px','md':'244px','sm':'376px','xs':'232px'},
  stop:{'lg':'','md':'','sm':'','xs':true}
};

var published_urls = {
    published_url: 'https://rbs-retail-test-61.adobecqms.net/'
};

//page_names
var tests = {
	standard_page : "standard_responsive",
    one : "asdsa"
};

var test_data = {
	list_of_shelves: 'Hero Shelf',
  standard_page_title1 : 'Product Title',
  standard_page_description1 : 'A lovely title explaining the benefits of the product',
  standard_page_title2:'Representative X.X% APR',
  standard_page_description2:'Compliance copy goes here and should be no longer than 2-3 lines.',
  standard_page_alt_title : 'Image_hero'
};

var devices = {
	desktop: 'true'
};

var shelfUrl = {
	url : 'https://rbs-retail-test-61.adobecqms.net/content/rbs_co_uk/en_uk/responsive_personal/automation_check/' + tests.standard_page + '.html'
	//url : "https://rbs-retail-stage-61.adobecqms.net/content/rbs_co_uk/en_uk/responsive_personal/demopage.html"
}
module.exports = {
    retryAssertionTimeout: 10000,
    test: tests,
    env_root: published_urls,
    data: test_data,
    // brand: themes,
    device: devices,
    size: size,
    urls : shelfUrl,
    beforeEach: function(browser, done) {
      
      var clientBrowser = {
          width: '',
          height: '',
          device: ''
      },
      size = browser.globals.size;

      browser.windowSize('current', function(res){
        clientBrowser.width = res.value.width;
        clientBrowser.height = res.value.height;            
                    
        if(clientBrowser.width >= size.widths['lg'].width){
            clientBrowser.device = 'lg';
        } else if(clientBrowser.width >= size.widths['md'].width && clientBrowser.width < size.widths['lg'].width){
            clientBrowser.device = 'md';
        } else if(clientBrowser.width >= size.widths['sm'].width && clientBrowser.width < size.widths['md'].width){
            clientBrowser.device = 'sm';
        } else if(clientBrowser.width >= size.widths['xs'].width && clientBrowser.width < size.widths['md'].width){
            clientBrowser.device = 'xs';
        }

        browser.clientBrowser = clientBrowser;
      });

      setTimeout(function(){
        done();
      }, 200);

    }
};
