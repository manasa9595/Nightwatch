var values = require('../../_data/author_data.js'),
   pageCreation = require('../author_scripts/page_creation.js'),
   commonFunctions = require('../author_parsys/auth_common_funcs.js'),
   atAGlanceShelfParsys = require('../author_parsys/atAGlance_parsys.js');


module.exports= {
  'Create Page and Populate title':function(client){
      var property = values.data,
          page_overview_pageTitle=property['$page_overview_pageTitle'],
          page_overview_pageName=property['$page_overview_pageName'],
          getcompShelfName =property['$comp_shelfs_name_page_overview'],
          templateName =property['$StandardtemplateName'],  
          shelves_group_under_sidekick=property['$shelves_group_under_sidekick'],
          page_over_title_sel=property['$page_over_title_sel'],
          page_over_title_text =property['$page_over_title_text'],
          page_over_text_sel=property['$page_over_text_sel'],
          page_over_text_value =property['$page_over_text_value'],
          page_overvview_compliance_sel=property['$page_overvview_compliance_sel'],
          page_overvview_compliance_text=property['$page_overvview_compliance_text'];


       pageCreation.createPage(client,page_overview_pageTitle,page_overview_pageName,templateName,getcompShelfName,shelves_group_under_sidekick);  
       atAGlanceShelfParsys.Shelf_props(client);
       atAGlanceShelfParsys.SettingTitleValue(client,page_over_title_sel,page_over_title_text);
       atAGlanceShelfParsys.SettingtextValue(client,page_over_text_sel,page_over_text_value);  
       atAGlanceShelfParsys.SettingComplianceTextValue(client,page_overvview_compliance_sel,page_overvview_compliance_text);
       atAGlanceShelfParsys.activate_page(client);
       //atAGlanceShelfParsys.Ending_the_session(client);
  }
};