var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   taskBased_parsys = require('../author_parsys/taskBasedPanel_parsys.js');


module.exports= {
'@tags': ['taskpanel_author'],
  'Create Page and Populate title':function(client){
      var property = values.data,
          titleText =property['$taskBased_titleText'],
          search_titleText =property['$search_titleText'],
          pageinTitle=property['$taskBased_pageTitle'],
          pageinName=property['$taskBased_pageName'],
          cta_text=property['$taskBased_cta_text'],
          templateName =property['$templateName'],
          getcompShelfName = property['$taskBased_getcompShelfName'];

      pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName);   //page creation
      //taskBased_parsys.UniqueShelfId(client);
      //for NW
      // taskBased_parsys.titleComp(client);   //double clicking title component
      // taskBased_parsys.titleInput(client,titleText); //populating the data for title
      // taskBased_parsys.headerType(client);
      //for RBS
      taskBased_parsys.SwitchToRbsPhotoMode(client);
      //taskBased_parsys.RBSbgImage(client);
      //taskBased_parsys.MultiLineTitle(client);
      
      taskBased_parsys.searchTitleComp(client);   //double clicking title component
      taskBased_parsys.searchTitleInput(client,search_titleText); //populating the data for title       
      //taskBased_parsys.ctalinkconfigure(client,cta_text);
      //taskBased_parsys.configureTask4_5(client,cta_text);
      //taskBased_parsys.image_comp(client);  
      //taskBased_parsys.activate_page(client);
      //taskBased_parsys.Ending_the_session(client);
  }
};