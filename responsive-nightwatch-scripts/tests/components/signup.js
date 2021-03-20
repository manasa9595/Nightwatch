module.exports = {  
    url: "https://rbs-retail-test-61.adobecqms.net/responsive-premier/TEMPLATE.html",
    //url: "https://rbs-natwest-retail-test-61.adobecqms.net/responsive-personal/campaignPromo.html",
    //url: "https://author-rbs-retail-test-61.adobecqms.net/content/natwest_com/en_uk/responsive-business/TestPreApply.html?wcmmode=disabled",
    //url: "https://author-rbs-retail-test-61.adobecqms.net/content/rbs_co_uk/en_uk/responsive_personal/important-figures.html?wcmmode=disabled",
    //url: "https://author-rbs-retail-test-61.adobecqms.net/content/natwest_com/en_uk/responsive-business/demopreapply/NewToBank.html?wcmmode=disabled",
    //(Flow- SmallBusinessLoan nw) url: "https://rbs-natwest-retail-stage-61.adobecqms.net/responsive-business/pre-apply-flows/small-business-loan.html",
    //(Flow- SmallBusinessLoan rbs) url: "https://rbs-retail-stage-61.adobecqms.net/responsive_business/pre-apply-flows/small-business-loan.html?wcmmode=disabled",
    //(Startupbusiness nw)url: "https://rbs-natwest-retail-test-61.adobecqms.net/responsive-business/pre-apply-flows/Start-up_main-business-bank-account.html?wcmmode=disabled",
    //(Startupbusiness rbs)url: "https://rbs-retail-test-61.adobecqms.net/content/rbs_co_uk/en_uk/responsive_business/pre-apply-flows/Start-up_main-business-bank-account.html?wcmmode=disabled",
    //(pre-apply business-overdraft)url:"https://rbs-natwest-retail-test-61.adobecqms.net/responsive-business/pre-apply-flows/Business-overdraft.html",
    
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
    signInAsAdmin: function() {
      return this.setValue('@usernameField', 'peddir')
                 .setValue('@passwordField', 'Password1')
                 .click('@content')
                 .click('@submit')
                 
    }
  }]
};