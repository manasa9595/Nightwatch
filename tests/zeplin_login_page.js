var zeplin_pageurl = require('./zeplin_pageurls.js');
var zeplin_Test = require('./shelfs/zeplinTest.js');
var readline = require('readline-sync');
var shelf_name = readline.question("What is the shelf name? "),
    brand_type = readline.question("Which brand? [nw_personal/rbs_personal] : ");
    json_path = readline.question("Enter the path where JSON file should be saved : ");

module.exports = { 
  url: function(){
        console.log("Checking "+zeplin_pageurl.breakpoint+" breakpoint in Zeplin");
        return zeplin_pageurl[shelf_name][brand_type][zeplin_pageurl.breakpoint];
  },

  elements: {
    zeplinUsername: {
      selector: '#handle'
    },
    zeplinPassword:{
      selector: '#password'
    },
    clickLogin:{
      selector:'#loginForm button'
    }
  },
  commands: [{
    zeplinSignin:function(){
      return this.setValue('@zeplinUsername', 'manasan')
          .setValue('@zeplinPassword', 'wNr-pEo09')
          .click('@clickLogin')
    },
    zeplinLogin:function(){
      return;
    }
  }],
  shelf_name : shelf_name,
  brand_type : brand_type
};
