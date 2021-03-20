/**
 * Created by Vikash on 28/06/2017.
 * cssPath: path of css selector 
 * pseudo: ":after" of ":before"
 * cssProperty: css property like font-size, line-height etc.
 * cssPropertyValue: value of property like 32px.
 */

exports.command = function(cssPath, pseudo, cssProperty, cssPropertyValue) {
    var client = this;

    client.execute(function(data){
			var allSelector = window.getComputedStyle(document.querySelector(arguments[0]), arguments[1]).getPropertyValue(arguments[2]);			
			return 	allSelector;
		},[cssPath,pseudo,cssProperty],function (result){
				var cssValue = result.value;	
				client.verify.equal(cssValue, cssPropertyValue,"Property "+cssProperty+" equals to "+cssPropertyValue);
		});

    return this;
};