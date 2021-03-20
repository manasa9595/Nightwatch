var pageurl = require('./pageurls.js');
var zeplin_login_page = require('./zeplin_login_page.js');

module.exports = { 
  url : pageurl[zeplin_login_page.shelf_name][zeplin_login_page.brand_type],

  elements: {
    usernameField: {
      selector: 'input[id=username]'
    },
    passwordField: {
      selector: 'input[id=password]'
    },
    submit: {
      selector: 'button[id=submit-button]'
    },
    content:{
      selector:'div[id=login-box]'
    }
  },
  commands: [{
    signInAsAdmin: function(client) {
       this.setValue('@usernameField', 'peddir')
                .setValue('@passwordField', 'Password1')
                 .click('@content')
                 .click('@submit')
                 return client
                 //client.navigate(pageurl.NW_PER_CAMPAIGN_PROMO);
                 
    },
    publish_login:function(){
      return;
    }
  }]
}; 
