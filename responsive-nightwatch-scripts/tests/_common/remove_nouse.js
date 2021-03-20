//var InsertNewComponentaut = require('../author/InsertNewComponentaut.js');
/*var funnewpage = function(client){
		console.log("working");
		var aemlogin = client.page.loginaem();
		var createpage = client.page.createpagepo();
		var npname = client.globals.inputs.pagetitle;
		var nptitle = client.globals.inputs.pagetitle;
		
		aemlogin.navigate()
		//.waitForElementVisible('body', 90000)
		// client.pause(8000)
		aemlogin.login();

		createpage.sites(client);
		createpage.MainPath(client);
		createpage.SubPath(client);
		createpage.CreateButton(client);
		createpage.PageIcon(client);
		createpage.BasePage(client);
		createpage.NextButton(client);
		createpage.NameText(client, npname);
		createpage.TitleText(client, nptitle);
		createpage.BaseCreateButton(client);
		createpage.OpenButton(client);

		
		return;
},
*/
var editTitle = function(client){
	return client
		.pause(3000)
		.assert.visible('.title-wrapper .auth--info')
		.click('.title-wrapper .auth--info')
		.doubleClick()
		.pause(5000);     
};


module.exports = {
	editTitle:editTitle
	
};
