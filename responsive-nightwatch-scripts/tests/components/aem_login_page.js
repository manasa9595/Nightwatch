
var aemCommands = {
	
    admin_login: function(username,userpwd) {
		
		this.api.maximizeWindow();
		
		username = username || 'panim';
		userpwd = userpwd || 'Password1';
		
        this.navigate()
            .waitForElementVisible('@login_form', 200000)
            .setValue('@username', username)
            .setValue('@password', userpwd)
            .click('@sign_in');
            
    }

};


module.exports = {

    url: function() {
        //return this.api.launchUrl + '/libs/granite/core/content/login.html';
        
        return "https://author-rbs-retail-test-61.adobecqms.net/siteadmin";
    },

    commands: [aemCommands],

    elements: {
        login_form: '#login',
        username: '#username',
        password: '#password',
        sign_in: 'button[type="submit"]'
    }

};






