var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   HeroRBS_parsys = require('../author_parsys/HeroRBS_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          pageinTitle=property['$Hero_pageTitle'],
          pageinName=property['$Hero_pageName'],
          templateName =property['$templateName'],
          shelves_group_under_sidekick = property['$shelves_group_under_sidekick'],
          getcompShelfName = property['$Hero_getcompShelfName'];

      pageCreation.createPage(client,pageinTitle,pageinName,templateName,getcompShelfName,shelves_group_under_sidekick);   //page creation
      HeroRBS_parsys.IllustrationShelfID(client);
      HeroRBS_parsys.IllustrationImage(client);
      //HeroRBS_parsys.SwitchToRbsPhotoMode(client);
      //HeroRBS_parsys.RBSbgImage(client);
      HeroRBS_parsys.product_title(client);
      HeroRBS_parsys.MultiLineTitle(client);
      HeroRBS_parsys.apr_title1(client);
      HeroRBS_parsys.apr_text(client);
      HeroRBS_parsys.remove_compliance(client);
      HeroRBS_parsys.remove_bottomSpace(client);
      HeroRBS_parsys.activate_page(client);
      HeroRBS_parsys.Ending_the_session(client);
  }
};