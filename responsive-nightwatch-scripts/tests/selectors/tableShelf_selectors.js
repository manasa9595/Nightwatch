module.exports = {
    //url : 'https://rbs-retail-test-61.adobecqms.net/responsive-premier/table-shelf/table4.html', //RBS url
    //url : 'https://rbs-retail-test-61.adobecqms.net/responsive-premier/table-shelf/table4.html', //RBS url
    url : 'https://rbs-retail-test-61.adobecqms.net/responsive_personal/table_shelf/table-accordion.html',
    elements: {
        shelfTitle : {
            selector :'.table-shelf-wrapper .table-shelf-title-wrapper'
        },
        shelfTxt : {
            selector : '.table-shelf-wrapper .table-shelf-text-wrapper'
        },
        tableDropdown : {
            selector : '.table-shelf-wrapper .table-dropdown-wrapper .table-shelf-dropdown label'
        }, 

        maxHtTitle: {
            selector: '.table-shelf-wrapper .table-dropdown-wrapper .table-component-wrapper .table-section .responsive-table-component .table_container .tablemainwrapper .table_row:first-child'
        },
        /* Given is the selector for body table which should be taken only for body styles
        excluding header selector*/
        maxHtTable: {
        	selector: '.table-shelf-wrapper .table-dropdown-wrapper .table-component-wrapper .table-section .responsive-table-component .table_container .tablemainwrapper .table_row'
        },
        complText: {
        	selector: '.responsive-table-component .compliance-table .shelf-textarea'
        },
        complTextML: {
            selector: '.responsive-table-component .compliance-table .shelf-textarea'
        },
        complTextMB: {
        	selector: '.responsive-table-component .compliance-table'
        },
        complLineMB: {
        	selector: '.table-shelf-wrapper .table-shelf-border-bottom-line span'
        },
        complImage: {
        	selector: '.responsive-table-component .compliance_row .compliance-table .shelf-textarea'
        },
        titleSelUI : {
            selector:'.table-shelf-wrapper .table-shelf-title-wrapper h2'
        },
        textSelUI: {
            selector: '.table-shelf-wrapper .table-shelf-text-wrapper span'
        },
        dropDownTxtUI: {
            selector : '.table-shelf-dropdown .text-comp'
        },
        tableTitleSel : {
            selector :'.table-shelf-wrapper .table-dropdown-wrapper .table-component-wrapper .table-section .responsive-table-component .table_container .tablemainwrapper.scrollable__columnwrapper .table_row .title-comp'
        },
        complText :{
            selector:'.responsive-table-component .compliance-table .shelf-textarea'
        },
        complianceTableSel : {
            selector:".responsive-table-component .compliance-table"
        },
        tableTitColor : {
            selector : ".responsive-table-component .table_container .table-mainsection .title-comp"
        },
        tableTextCls :{
            selector : ".table-mainsection .table_row"
        },
        tablerowMargin : {
            selector : ".table-mainsection .row1.table_row"
        },
        tableTextMB : {
            selector : ".table-mainsection .table_row"
        },
        Textanimation1 : {
            selector : '.accordion-global .product-accordion .product-acr-header .accordion-header a .animated_underline'
        },
        cross1 : {
            selector : '.accordion-global .product-accordion .product-acr-header .accordion-header a .acordion-crossicon'
        },
        accText : {
            selector : '.accordion-global .product-accordion .product-acr-header .accordion-header a'
        },
        accContainer : {
            selector : '.accordion-global .product-accordion .product-acr-body .product-acr-container'
        },
        accPara : {
            selector : '.accordion-global .product-accordion .product-acr-body .product-acr-container .accordian-content-wrapper .rteWrapper p'
        },
        acch3 : {
            selector : '.accordion-global .product-accordion .product-acr-body .product-acr-container .accordian-content-wrapper .rteWrapper h3'
        },
        accList : {
            selector : '.comp-rich-text p'
        },
        accClose : {
            selector : '.accordion-global .product-accordion .product-acr-body .product-acr-footer'
        },
        accClosetext : {
            selector : '.accordion-global .product-accordion .product-acr-body .product-acr-footer a'
        },
        accContClose : {
            selector : '.accordion-global .product-accordion .product-acr-body .product-acr-footer a .close-footer'
        },

        accWrapper:{
           selector : ".compliance-tableshelf-border .responsive-table-component .accordion-global"
        }
      }
     }