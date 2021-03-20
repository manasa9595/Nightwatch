const updateJsonFile = require('update-json-file');
var fs = require("fs");
var zeplin_login_page = require('../zeplin_login_page.js');
var zeplin_pageurl = require('../zeplin_pageurls.js');
var pageurl = require('../pageurls.js');
var functions = require('./sublisting_funtions.js');

var break_point;

//Fetch zeplin values
var Navigate_zeplin = function(client) {
    var signup = client.page.zeplin_login_page(),
        size = client.globals.size.widths;
      signup.navigate()
            .zeplinSignin();
      client.maximizeWindow();
      client.pause(6000);
    },
    login_zeplin = function(client) {
       var signup = client.page.zeplin_login_page(),
        size = client.globals.size.widths;
      signup.navigate()
            .zeplinLogin();
      client.pause(6000);
    },
    zeplinVersion = function(client, clickSel,  getTextSel, section, version) {
      client.waitForElementVisible(clickSel, 20000);
      client.click(clickSel, function(result) {
          client.getAttribute(getTextSel,'title', function(result) {
            console.log(getTextSel + " value:", result.value);
          updateJsonFile(json_path, (data) => {
              if(!data[version] || !Object.keys(data[version]).length) {
                data[section][break_point][version] = "";
              }
              data[section][break_point][version] = result.value;
            return data
            }) 
        });
      });
    },
    checkZeplinVersion = function(client){
      fs.readFile(json_path, 'utf8', readData);
        function readData(err, data) {
          readObj1 = {};
          readObj1 = JSON.parse(data);
          //console.log("CURRENT VERSION : \n", readObj1.component.version);
          client.getAttribute('.date time-ago','title', function(result) {
            if(readObj1.component[break_point].version <= result.value){
              console.log("No Update. Current Version : "+readObj1.component[break_point].version)
            }
            else{  
              check_zeplin_functions(client);
            } 
        })
      }
    },
    componentProps = function(client, clickSel, MoveToELementSel, getTextSel, section, zeplinSelectorsObj, prop, end) {
      var size = client.globals.size.widths;
      client.waitForElementVisible(clickSel, 20000);
      client.moveToElement(clickSel, 4, 25);
      client.click(clickSel, function(result) {
        client.moveToElement(MoveToELementSel, 0, 0, function(result) {
          client.getText(getTextSel, function(result) {
            console.log(getTextSel + " value:", result.value);
            updateJsonFile(json_path, (data) => {
              if (prop == "shelfName") {
                var str = result.value;
                var res = str.split("_")[0];
                str = str.replace(res, "");
                str = str.replace(str[0], "");
                data[section][break_point][zeplinSelectorsObj] = str;
              } 
              else if (prop == "color") {
                client.convertHex = function(hex, opacity) {
                  hex = hex.replace('#', '');
                  r = parseInt(hex.substring(0, 2), 16);
                  g = " " + parseInt(hex.substring(2, 4), 16);
                  b = " " + parseInt(hex.substring(4, 6), 16);
                  rgbValue = 'rgba(' + r + ',' + g + ',' + b + ',' + ' ' + opacity / 100 + ')';
                  console.log("rgb Value: " + rgbValue);
                }
                  client.convertHex(result.value, 100);
                  if(!data[section][zeplinSelectorsObj] || !Object.keys(data[section][zeplinSelectorsObj]).length) {
                    data[section][zeplinSelectorsObj] = {};
                  }
                  if(!data[section][zeplinSelectorsObj][break_point] || !Object.keys(data[section][zeplinSelectorsObj][break_point]).length) {
                    data[section][zeplinSelectorsObj][break_point] = {};  
                  }
                  if(!data[section][zeplinSelectorsObj][break_point][prop] || !Object.keys(data[section][zeplinSelectorsObj][break_point][prop]).length) {
                    if(result.value == ""){
                      data[section][zeplinSelectorsObj][break_point][prop] = "0px";
                    } else{
                      data[section][zeplinSelectorsObj][break_point][prop] = rgbValue;
                    }
                  }   
                }
              else { 
                if(!data[section][zeplinSelectorsObj] || !Object.keys(data[section][zeplinSelectorsObj]).length) { 
                  data[section][zeplinSelectorsObj] = {};
                }
                if(!data[section][zeplinSelectorsObj][break_point] || !Object.keys(data[section][zeplinSelectorsObj][break_point]).length) {
                  data[section][zeplinSelectorsObj][break_point] = {};  
                }
                if(!data[section][zeplinSelectorsObj][break_point][prop] || !Object.keys(data[section][zeplinSelectorsObj][break_point][prop]).length) {
                  if(result.value == ""){
                    data[section][zeplinSelectorsObj][break_point][prop] = "0px";
                  } else{
                    data[section][zeplinSelectorsObj][break_point][prop] = result.value;  
                  }
                }                 
              }
              return data
            })           
          });
        });
      });
    };

//Compare zeplin values in publish
var Navigate_publish = function(client) {
      var signup = client.page.login_page(),
          size = client.globals.size.zeplinPOC_widths;
      //client.url(publish_url);
      signup.navigate()
            .publish_login();
      client.maximizeWindow();
      client.pause(4000);
    },
    checkPublishProps = function(client,compSelector,compSection,sectionProp) {
    //client.maximizeWindow();
     var callback = client.page.common(),
         size = client.globals.size.zeplinPOC_widths;
      //check if component exists
      client.elements('css selector',readObj2["shelf"]["publish-selector"],function(numShelfsResult){  
        const numShelfs = numShelfsResult.value.length;
        //console.log("Number of shelfs present :"+numShelfs);
        client.elements('css selector', compSelector, numElementsResult => {
          const numElements = numElementsResult.value.length;
          //console.log("Number of components present :"+numElements);

          /*compare number of shelfs and number of components. If they are not equal, 
            check values for the components which are present and throw a message for the components
            not present in the shelf*/
            if(numShelfs == numElements){
                console.log("\nComponent exists :" + compSelector) 
                if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice){
                  client.maximizeWindow();
                  for(scr in size) { 
                    client.resizeWindow(size[scr].width, size[scr].height);

                    compProperty = readObj2[compSection][sectionProp][scr];
                    callback.multiloop(client, compSelector, compProperty, scr);
                  }
                } 
              } 
              else{
                if(numElements > 0){
                  console.log("\n component exists :" + compSelector)
                  if(client.globals.test_settings.isLocal || client.options.desiredCapabilities.isLGDevice){
                  client.maximizeWindow();
                  for(scr in size) {
                    client.resizeWindow(size[scr].width, size[scr].height); 

                    compProperty = readObj2[compSection][sectionProp][scr];
                    callback.multiloop(client, compSelector, compProperty, scr);
                  }
                } 
              }
                //To throw message when the component doesnot exist
                for (var i = 0; i < (numShelfs-numElements); i++) {
                  client.source(() => { 
                    console.log("shelf ["+compSelector+"] component not configured in the shelf")
                  })
                }
              } 
        });    
      })
    },
    sessionEnd = function(client) {
      client.end();
    };

var getZeplinData = function(client){
      fs.readFile(json_path, 'utf8', readData);
        function readData(err, data) {
          readObj1 = {};
          console.log("Zeplin selectors : \n", data);
          readObj1 = JSON.parse(data);
      }
    },
    check_publish = function(client) {
      fs.readFile(json_path, 'utf8', readData);
      function readData(err, data) {
          readObj2 = {};
          console.log("Data : \n", data);
          readObj2 = JSON.parse(data);
          console.log("\nComparing with publish..")

          checkPublishProps(client, readObj2["shelf"]["publish-selector"], "shelf", "shelf-props");
          checkPublishProps(client, readObj2["imageWrap"]["publish-selector"], "imageWrap", "image-props");
          checkPublishProps(client, readObj2["titleWrap"]["publish-selector"], "titleWrap", "title-props");
      }  
    },
    check_zeplin_functions = function(client){
      getZeplinData(client); 
      functions.zeplin_functions(client);
    },
    check_publish_functions = function(client){
        Navigate_publish(client);
        check_publish(client);
        sessionEnd(client);
        client.pause(2000);
    };
 
var test_zeplin_publish = function(client){
  var break_points = ['xl','l','m','s'], _testObj = {}; 
  for (let i = 0; i < break_points.length; i++) {
    _testObj['Automating Zeplin Nightwatch ' + break_points[i]] = function (client) {
    zeplin_pageurl.breakpoint = break_points[i];
    break_point = zeplin_pageurl.breakpoint;
        if(break_point == 'xl'){
          Navigate_zeplin(client);
          
        } 
        else {
          login_zeplin(client);
        }
        client.source(() => { 
          //checkZeplinVersion(client);
          check_zeplin_functions(client);
        })
          
          client.pause(2000);
    }
  }
  //check publish
  _testObj['Automating Publish Nightwatch ' + break_point] = function (client) {
       check_publish_functions(client);
   }
  return _testObj;
};


module.exports = test_zeplin_publish();