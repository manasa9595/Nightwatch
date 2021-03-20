module.exports = {
   // url: 'https://rbs-natwest-retail-test-61.adobecqms.net/responsive-premier/download.html',
    elements: {
        dShelfPadding : {
                selector : '.container-fluid:not(.shelf-nopadding).download_shelf'
        },
        dShelfIcon : {
                selector : '.download_shelf .downloadicon'
        },
        dShelfnoPadding : {
                selector : '.download_shelf.shelf-nopadding'
        },
        dTitleWrapper : {
                selector : '.download_shelf .titleWrapper'
        },
        dshelfTitle : {
                selector : '.download_shelf .titleWrapper .title-comp'
        },
        dTextWrapper : {
                selector : '.download_shelf .textWrapper'
        },
        dContent : {
                selector : '.download_shelf .textWrapper .text-comp'
        },
        dLinkWrapper : {
                selector : '.download_shelf .downloadLinkWrapper'
        },
        dLink : {
                selector : '.download_shelf .downloadLinkWrapper a.dlinks'
        },
         dLinkIcon : {
                selector : 'a.dlinks.dlRightIcon:after'
        }     
    }
};