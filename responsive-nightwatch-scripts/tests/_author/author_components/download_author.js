var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   download_parsys = require('../author_parsys/download_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          pageinTitle=property['$Download_shelf_pageTitle'],
          pageinName=property['$Download_shelf_pageName'],
          templateName =property['$StandardtemplateName'], 
          getcompShelfName =property['$download_name'],
          //shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          titleText =property['$downloadTitleText'];
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'];

/*
          pageinddsel=property['$inpageddsel'],
          pageinddval=property['inpageddvalue'],
          pageinlinkval=property['$inpagelinkval'],
          pageinlinkurl=property['$inpagelinkurl'],
          pageinbtnsel=property['inpagebtnsel'],
          pageinbtnval=property['inpagebtnval'],
          contextAccordTitle=property['$contextAccordTitle'],
            */
        

       pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
       download_parsys.titleComp(client);   //double clicking title component
       download_parsys.titleInput(client,titleText);
       
       
  }
};