var values = require('../../_data/author_data.js'),
 //values calling from author_data.js
   property = values.data,
   pageTitle =property['$pageTitle'],
   pageName = property['$pageName'],
   brandUrl = property['$brandUrl'],
   redirectUrl = brandUrl+"/"+pageName +'.html';

module.exports = {
   url : redirectUrl,
  
	elements: {
		newPage : {
			selector:'button.x-btn-text.cq-siteadmin-create-page-icon'
		}
		
	}
};
/*module.exports = {
    url: function() {
        //return this.api.launchUrl + '/libs/granite/core/content/login.html';
        return redirectUrl;
    },
	commands:[{
		admin_login:function() {
				console.log(redirectUrl);
				this.api.maximizeWindow();
		        this.navigate();
			}
	}]
};*/










