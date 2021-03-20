var values = require('../../_data/author_data.js');
   

var createPage=function(client,pageTitle,pageName,templateName,getcompShelfName,shelves_group_under_sidekick){
    var signup=client.page.aem_login(),
        pageCreation = client.page.standard_page(),
        //pageCreation = client.page.home_page(),

        //values calling from author_data.js
         property = values.data,
          TemplateSel=property['$templateSel'],
          existingPages=property['$existingPages'],
          redirectSel=property['$redirectSel'],
          ComponentSel=property['$ComponentSel'],
         ShelfSel=property['$ShelfSel'];
        
   
    //selecting template and creating page
    signup.navigate().signInAsAdmin();
    client.maximizeWindow();
    pageCreation.navigate();
    pageCreation.deletePage(client,existingPages,pageTitle);
    pageCreation.NewPage();
    pageCreation.PageTitle(client,pageTitle);
    pageCreation.PageName(client,pageName);
    pageCreation.tempSelection(client,TemplateSel,templateName);
    pageCreation.redPage(client,redirectSel,pageName);
    pageCreation.parsysSelect(client);
    
    pageCreation.dragdropFunc(client,shelves_group_under_sidekick);
    pageCreation.compSelection(client,ComponentSel,getcompShelfName);
  },
 newShelf=function(client,getcompShelfName,shelves_group_under_sidekick){
   var property = values.data,
   pageCreation = client.page.standard_page(),
   ComponentSel=property['$ComponentSel'];

   pageCreation.dragdropFunc(client,shelves_group_under_sidekick);
   pageCreation.compSelection(client,ComponentSel,getcompShelfName);
}

module.exports= {
createPage:createPage,
newShelf:newShelf
};