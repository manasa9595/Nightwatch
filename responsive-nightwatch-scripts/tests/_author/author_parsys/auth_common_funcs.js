var values = require('../../_data/author_data.js');
//standardPage = require('../')


//double click on title component
var titleComp = function(client) {
        return client
            .pause(3000)
            //.verify.visible('.title-wrapper .auth--info')
            .verify.visible('.incident-notification__title-wrapper .auth--info') //Incident notification title
            .click('.incident-notification__title-wrapper .title-comp')
            .doubleClick()
            .pause(5000);
    },
    //populating data for title
    titleInput = function(client, titleText) {
        var property = values.data,
            //titleText =property['$titleText'],
            titleInputSel = property['$titleInputSel'];
        return client
            .waitForElementVisible(titleInputSel, 80000)
            .setValue(titleInputSel, titleText)
            .pause(5000)
        //.click(".x-btn.cq-btn-ok.x-btn-noicon");
    },
    //click of any button on tool bar(edit,cut,copy,paste)
    toolbarClick = function(client, shelfClass) {
        var property = values.data,
            shelfClass = property['$shelfClass'];
        return client
            .waitForElementVisible(shelfClass, 60000)


    },
    setddvalues = function(client, selector, textval) {

        return client.pause(1000)
            .elements('css selector', selector, function(result) {
                result.value.forEach(function(element, index) {
                    //var selectval=element.ELEMENT;
                    //console.log("-----hello inside for loop-----");
                    client.elementIdClick(element.ELEMENT);
                    client.pause(1000)
                        .elementIdValue(element.ELEMENT, textval)
                        .pause(9000)
                        .elementIdClick(element.ELEMENT)
                        .pause(5000)
                        .click(".x-btn.cq-btn-ok.x-btn-noicon");

                });
            });
    },
    setinputvalues = function(client, selector, textval) {
        var test = textval,
            test1 = test[0];
        console.log(test, test1);
        return client
            .pause(1000)
            .elements('css selector', selector, function(result) {
                result.value.forEach(function(element, index) {
                    client.elementIdValue(element.ELEMENT, textval[index]);
                    client.doubleClick()
                        .pause(5000);

                });
            });

    },
    multipleText = function(client, selector, item) {
        console.log('hello');
        return client
            .elements('css selector', selector, function(result) {
                result.value.forEach(function(element) {
                    client.elementIdText(element.ELEMENT, function(res) {
                        var getval = res.value;
                        console.log(getval);
                        if (getval == item) {
                            client.elementIdClick(element.ELEMENT)
                                .pause(4000);
                        }
                    });
                });
            });
    },
    addbutton = function(client, selector, item, no) {
        return client
            .elements('css selector', selector, function(result) {
                result.value.forEach(function(element) {
                    client.elementIdText(element.ELEMENT, function(res) {
                        var getval = res.value;
                        console.log(getval);
                        if (getval == item) {
                            for (var i = 1; i <= no; i++) {
                                client.elementIdClick(element.ELEMENT)
                                    .pause(2000);
                            }
                        }
                    });
                });
            });
    },
    clearvalInput = function(client, selector) {
        return client.elements('css selector', selector, function(result) {
            result.value.forEach(function(element) {
                client.elementIdClear(element.ELEMENT)
                    .pause(3000);
            });

        });
    },
    selectTabs = function(client, selector, browserTab) {
        return client
        assert.visible('@selector')
            .elements('css slector', selector, function(res) {
                result.value.forEach(function(element) {
                    client.elementIdText(element.ELEMENT, function(res) {
                        var getval = res.value;
                        if (getval == browserTab) {
                            client.elementIdClick(element.ELEMENT)
                                .doubleClick()
                                .pause(1000);
                        }
                    });
                });
            });
        client.pause(5000);
    }




/*dropdownValue = function(client){
	var property = values.data,
  		editBtn =property['$editBtn'];
	return client
		.waitForElementVisible('input[type="text"]', 60000)			
		.click('input[type="text"]')
		.pause(5000);
}*/

//div.x-panel[class*='pagenavigation'] .x-panel-bwrap .x-panel-body-noheader button




module.exports = {
    titleComp: titleComp,
    titleInput: titleInput,
    setinputvalues: setinputvalues,
    multipleText: multipleText,
    addbutton: addbutton,
    clearvalInput: clearvalInput,
    setddvalues: setddvalues,
    //multipletbns: multipletbns,
    //editBtnClick: editBtnClick

};