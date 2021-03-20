var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   HeroNW_parsys = require('../author_parsys/HeroNW_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          pageinTitle=property['$Hero_pageTitle'],
          pageinName=property['$Hero_pageName'],
          templateName =property['$templateName'],
          shelves_group_under_sidekick = property['$shelves_group_under_sidekick'],
          getcompShelfName = property['$Hero_getcompShelfName'];

      pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
      //HeroNW_parsys.IllustrationShelfID(client);
      //HeroNW_parsys.IllustrationImage(client);
      HeroNW_parsys.SwitchToPhotoMode(client);
      HeroNW_parsys.NWbgImage(client);
      // HeroNW_parsys.product_title(client);
      // HeroNW_parsys.Title(client);
      // HeroNW_parsys.apr_title1(client);
      // HeroNW_parsys.apr_text(client);
      // HeroNW_parsys.remove_compliance(client);
      // HeroNW_parsys.remove_bottomSpace(client);
      //HeroNW_parsys.activate_page(client);
      //HeroNW_parsys.Ending_the_session(client);
  }
};