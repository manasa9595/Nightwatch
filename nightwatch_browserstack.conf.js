var browserstack = require('browserstack-local');

nightwatch_config = {
    src_folders: ["tests/shelfs/single-listing-card/single_listing_card.js"],
	"output_folder" : "reports",
  "custom_commands_path" : "./lib/commands/",
  "custom_assertions_path" : "",
  "page_objects_path" : [
							"./tests/",
							"./tests/components/",
							"./tests/components/image/",
							"./tests/components/breadcrumb/",
							"./tests/components/cookie/",
							"./tests/components/search/",
							"./tests/components/header/",
							"./tests/components/rte/",
							"./tests/components/footer/",
							"./tests/components/business-login/",
							"./tests/components/toggle-app/",
							"./tests/tools/",
							"./tests/tools/credit-card/",
                            "./tests/tools/loans-calculator/",
							"./tests/shelfs/link-cards-with-promo/",
							"./tests/shelfs/link-cards/",
							"./tests/shelfs/contextual-help/",
							"./tests/shelfs/completion-prompt/",
                         	"./tests/shelfs/campaign-promo/",
                         	"./tests/shelfs/actionable-content/",
                         	"./tests/shelfs/download/",
                         	"./tests/shelfs/eligibility-and-legal/",
                         	"./tests/shelfs/features-and-benefits/",
                         	"./tests/shelfs/help-and-support/",
                         	"./tests/shelfs/important-figures/",
                         	"./tests/shelfs/hero/",
                         	"./tests/shelfs/highlights-with-svg-icons/",
                         	"./tests/shelfs/incident-notification/",
                         	"./tests/shelfs/missing-page-and-site-down/",
                         	"./tests/shelfs/multiple-listing-card/",
                         	"./tests/shelfs/on-page-navigation/",
                         	"./tests/shelfs/table/",
                         	"./tests/shelfs/pre-apply/",
                         	"./tests/shelfs/page-overview/",
                         	"./tests/shelfs/single-article/",
                         	"./tests/shelfs/single-listing-card/",
                         	"./tests/shelfs/step-by-step/",
                         	"./tests/shelfs/ready-to-apply/",
                         	"./tests/shelfs/text-only-header/",
                         	"./tests/shelfs/notifications/",
                         	"./tests/shelfs/sublisting/"
                         	"./tests/shelfs/task-based/",

						],
  "globals_path" : "global.js",

    selenium: {
        "start_process": false,
        "host": "hub-cloud.browserstack.com",
        "port": 80
    },

    common_capabilities: {
        'build': 'BOB_Parallel_v0.3',
        'project': 'BOB',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'kalyan.reddy@rbs.co.uk',
        
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'nkpF2aA96s6hWVFKiepw',
        'browserstack.debug': true,
        'browserstack.local': true
    },

    test_settings: {  		
        default: {
        	isLocal: false
		},
		ie_11_win_8_1: {
			desiredCapabilities: {
				os: 'Windows',
				os_version: '8.1',
				browser: 'IE',
				'resolution' : '1366x768',
				'isLGDevice': true
			} 
		},
		ie_11_win_7: {
			desiredCapabilities: {
				os: 'Windows',
				os_version: '7',
				browser: 'IE',
				'resolution' : '1366x768',
				'isLGDevice': true
			}
		},
		ie_10_win_7: {
			desiredCapabilities: {
				os: 'Windows',
				os_version: '7',
				browser: 'IE',
				browser_version: '10.0',
				'resolution' : '1366x768',
				'isLGDevice': true,
				'isIEbrowser':true
			}
		},
		ie_9_win_7: {
			desiredCapabilities: {
				os: 'Windows',
				os_version: '7',
				browser: 'IE',
				browser_version: '9.0',
				'resolution' : '1366x768',
				'isLGDevice': true
			}
		},
		ie_8_win_7: {
			desiredCapabilities: {
				os: 'Windows',
				os_version: '7',
				browser: 'IE',
				browser_version: '8.0',
				'resolution' : '1366x768',
				'isLGDevice': true
			}
		},
		chrome_win_10: {
            desiredCapabilities: {
				os: 'Windows',
				os_version: '10',
				browser: 'Chrome',
				'resolution' : '1366x768',
				'isLGDevice': true
			}
        },
        chrome_Win_8: {
            desiredCapabilities: {
				os: 'Windows',
				os_version: '8.1',
				browser: 'Chrome',
				'resolution' : '1366x768',
				'isLGDevice': true
			}       
        },
		chrome_Win_7: {
            desiredCapabilities: {
				os: 'Windows',
				os_version: '7',
				browser: 'Chrome',
				'resolution' : '1366x768',
				'isLGDevice': true
			}        
        },
		safari_mac: {
			desiredCapabilities: {
				os: 'OS X',
				browser: 'Safari',
				os_version : 'High Sierra',
                browser_version : '11.0',
				'resolution' : '1280x960', 
				'isLGDevice': true
			}
		},				
        firefox_win_10: {
            desiredCapabilities: {
				os: 'Windows',
				os_version: '10',
				browser: 'firefox',
				'resolution' : '1366x768',
				'isLGDevice': true
            }
        },
		firefox_win_7: {
            desiredCapabilities: {
				os: 'Windows',
				os_version: '7',
				browser: 'firefox',
				'resolution' : '1366x768',
				'isLGDevice': true
            }
        },
		ie_edge_windows_10: {
			desiredCapabilities: {
				os: 'Windows',
				os_version: '10',
				browser: 'Edge',
				'resolution' : '1366x768',
				'isLGDevice': true
			} 
		},
		chrome_android_tablet: {
			desiredCapabilities: {
				'browserName': 'chrome',
				'platform': 'ANDROID',
				'device': 'Samsung Galaxy Tab 4 10.1',
				'isSMDevice': true
			} 
		},
		chrome_android_S_6: {
			desiredCapabilities: {
				'browserName': 'chrome',
				'platform': 'ANDROID',
				'device': 'Samsung Galaxy S6',
				'isXSDevice': true
			}
		},
		safari_ios_iphone_5s: {
			desiredCapabilities: {
				'browserName': 'iPhone',
				'platform': 'MAC',
				'device': 'iPhone 5S',
				'isXSDevice': true
			}
		},
		safari_ios_iphone_6: {
			desiredCapabilities: {
				'device': 'iPhone 6S',
				'realMobile': true,
				'isXSDevice': true
			}
		},
		safari_ios_ipad_air: {
			desiredCapabilities: {
				'device': 'iPad 5th',
				'realMobile': true,
				'isSMDevice': true
			}
		}
    }
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;