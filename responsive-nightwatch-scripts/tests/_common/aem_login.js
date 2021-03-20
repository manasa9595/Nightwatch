module.exports = {
//url for all brands
//personal Natwest
url : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-personal/NightWatch_Author_Pages",
//personal RBS
//url : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/rbs_co_uk/en_uk/responsive_personal/NightWatch_Author_Pages",
//business NatWest
//url : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-business/NightWatch_Author_Pages",
//premier URL
//url : "https://author-rbs-retail-test-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-premier/NightWatch_Author_Pages",
//url : "https://author-rbs-retail-test-61.adobecqms.net/cf#/content/natwest_com/en_uk/responsive-personal/NightWatch_Author_Pages/Table_shelf.html",
//STAGE URL
//url:"https://author-rbs-retail-stage-61.adobecqms.net/siteadmin#/content/natwest_com/en_uk/responsive-premier/Nightwatch_pages",
	elements:{
		usernameField:{selector:'input[id="username"]'},
		passwordField:{selector:'input[id="password"]'},
		submit:{selector:'button[id="submit-button"]'}
	},

	commands:[{
		signInAsAdmin:function(){
		return this
				.waitForElementVisible('@usernameField', 5000)
				.setValue('@usernameField', 'peddir')
				.setValue('@passwordField', 'Password1')
				.click('@submit')
		}
	}]
};
