var values = require('../../_data/author_data.js'),
	 pageCreation = require('../author_scripts/page_creation.js'),
	 commonFunctions = require('../author_parsys/auth_common_funcs.js');

module.exports= {
  'Create Page and Populate title':function(client){
   		var property = values.data,
	  		titleText =property['$titleText'];
	  		

       pageCreation.createPage(client);   //page creation
       //commonFunctions.titleComp(client);   //double clicking title component
       //commonFunctions.titleInput(client,titleText); //populating the data for title
       //commonFunctions.editBtnClick(client); //click on edit button 
  }
};