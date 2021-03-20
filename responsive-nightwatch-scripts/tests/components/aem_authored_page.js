
 var aemCommands = {

	initialize_window_settings: function() {

		this.waitForElementPresent('#cq-cf-frame', 200000);
		var self = this;
		this.api.frame('cq-cf-frame', function(result) {
			console.log(" frame " + JSON.stringify(result));
			self.api.pause(5000);
		});
	
	},

    activate_page: function() {
		
		this.api.frame();
		
		this.select_a_page_function_from_the_sidekick_dialog('@sidekick_page_activate');

		this.waitForElementVisible('.cq-notification-msg-title', 10000, function() {
			this.expect.element('.cq-notification-msg-content').text.to.equal('Page successfully activated');
			this.waitForElementNotPresent('.cq-notification-msg-title', 10000);	
		});   
    },

   open_the_menu_list_at_location: function(location) {
		
		this.api.pause(4000);
		
		var self = this;
        this.waitForElementVisible(location, 2000, function(result) {
			
            self.moveToElement(location, 10, 10);
             
         });
			
        this.api.mouseButtonClick('right');
        //this.api.doubleClick();

    },
   /* open_the_menu_list_at_location: function(location) {
    	var self = this;
    	self.click('.cq-editrollover-insert-container') {
            self.moveToElement(result.value, 0, 0 ,function(){
				self.api.mouseButtonClick('right');
            });
		});
    },*/
   /* open_the_menu_list: function(location) {
		
		this.api.pause(3000);
		var self = this;
        this.waitForElementVisible(location, 10000, function(result) {
		self.moveToElement(location, 10, 10);
			
		});
			
        this.api.doubleClick();

    },*/
	
	insert_a_new_component: function(component) {
  
		this.select_an_action_from_the_menu_list('New');
		
		this.select_a_component_from_the_sidekick_dialog(component);
		
		//this.click_ok();
		this.api.click(".x-btn.cq-btn-ok.x-btn-noicon");
		
	},
	
	select_an_action_from_the_menu_list: function(item) {
		
		var selected;
				
        //this.waitForElementVisible('@menu_list', 2000000);  
		
		switch (item) {
			case 'New':
			selected = '@menu_list_first'
				break;
			case 'Edit':
				selected = '@menu_list_edit'
				break;
			default:	
				selected = '@menu_list_last'
		};
		
		this.click(selected);
		
	},
		
	select_an_action_from_the_shelf_menu_options: function(shelf, option) {
		
		this.api.elements('css selector', '.x-panel.cq-editbar', function(results) {
			var self = this;
			results.value.forEach(function(element) {
				self.elementIdText(element.ELEMENT, function (result) {	
					if (result.value.search(shelf) > 0) {
						this.elementIdElements(element.ELEMENT, 'css selector', '.x-btn-noicon', function(buttons){
							buttons.value.forEach(function(element) {
								self.elementIdText(element.ELEMENT, function (result) {	
									if (result.value.search(option) > 0) {
										self.moveTo(element.ELEMENT, 10, 10, function(result) {	
											self.pause(3000);
											//Hack to set focus on the element ok for now
											self.elementIdClick(element.ELEMENT);  
											self.elementIdClick(element.ELEMENT);
										});
									};
								});
							});	
						});
					};
				});	
			});
		});	
	},
	
	select_a_page_function_from_the_sidekick_dialog: function(request) {
	
			this.waitForElementVisible('@sidekick_tab_icon_page', 10000)
				.click('@sidekick_tab_icon_page')
				.waitForElementVisible(request, 10000)
				.click(request);
		

	},
	
	select_a_component_from_the_sidekick_dialog: function(component_text) {
		
		var sidekick_buttons;
		
		var shelf_list = this.api.globals.data.list_of_shelves;
					
		if (shelf_list.match(component_text)) {		
		console.log("its a shelf")
			this.waitForElementVisible('@sidekick_expand_shelf_btn', 10000) 
				.click('@sidekick_expand_shelf_btn')
				.waitForElementVisible('@sidekick_shelf_buttons', 10000);
				
			// sidekick_buttons = '.x-panel.cq-sidekick-buttons.cq-cmpts-Shelves.x-panel-noborder';
			//sidekick_buttons = '.x-panel.cq-sidekick-buttons.cq-cmpts-Responsive_32Shelves.x-panel-noborder';
            //.x-panel.cq-sidekick-buttons .x-panel.cq-sidekick-buttons.cq-cmpts-Responsive_32Shelves
			 sidekick_buttons = '.x-panel.cq-sidekick-buttons .x-panel.cq-sidekick-buttons.cq-cmpts-Responsive_32Shelves';

			
		} else {
			
			if ((component_text == "List Item") || (component_text == "FAQ Item") || (component_text == "FAQ Search") || (component_text == "Rich Text Editor")) {
				console.log("its a component in an expanded list dont click")
				this.waitForElementVisible('@sidekick_component_buttons', 10000); 
				sidekick_buttons = '.x-panel.cq-sidekick-buttons.cq-cmpts-Components.x-panel-noborder';
				
			} else {
				console.log("its a component in a collapsed list click it to expand")
				//this.waitForElementVisible('@sidekick_expand_component_btn', 200000) 
					//.click('@sidekick_expand_component_btn')
					//.waitForElementVisible('@sidekick_component_buttons', 200000); 
			
				sidekick_buttons = '.x-panel.cq-sidekick-buttons.cq-cmpts-Responsive.x-panel-noborder';
				
			};
		};
		
		this.select_an_element_by_text(sidekick_buttons, '.x-btn-text', component_text);

	},
	
	select_an_element_by_text: function(elements_class, element_class, component_text) {
		
		this.api.elements('css selector',elements_class, function(list) {
			
			var self = this;		
			list.value.forEach(function(element) {	
				self.elementIdElements(element.ELEMENT, 'css selector', element_class, function(components) {
					components.value.forEach(function(element) {					
  						self.elementIdText(element.ELEMENT, function (result) {	
							if (result.value.search(component_text) >= 0) {
								self.moveTo(element.ELEMENT, 0, 0, function() {	
									self.pause(4000)
										.elementIdClick(element.ELEMENT)  
										.elementIdClick(element.ELEMENT); //Hack to set focus on the element ok for now
								});
							};
						});	
					});
				});
			});
		});	
	},

	click_ok: function() {
		
        this.waitForElementVisible('@component_ok_btn', 10000);  
		
		this.moveToElement('@component_ok_btn', 10, 10, function(result) {
		
			this.api.mouseButtonClick('left');
			this.api.waitForElementNotPresent('@component_ok_btn', 10000);
//			this.api.pause(4000);
			
		});
 
	},

	click_to_confirm: function(confirm) {
		
		this.waitForElementVisible(confirm, 10000)
			.click(confirm);
			
	},
	drag_drop:function(LocatorFrom, LocatorTo, callback) {
				 var self = this;

		  this
		    .getLocation(LocatorTo, function (result) {
		      let xto = result.value.x;
		      let yto = result.value.y;

		      this.moveToElement(LocatorFrom,  10,  10)
		        .mouseButtonDown(0)
		        .pause(5000)
		        .moveToElement(LocatorTo,  xto,  yto)
		        .pause(5000)
		        .mouseButtonUp(0);
		      return this;
		    });
		return this;
	}

};

module.exports = {
    
    url: function() {
		//return this.api.launchUrl + '/cf#/content/automation_test';
        return 'https://author-rbs-retail-test-61.adobecqms.net/cf#/content/natwest_com/en_uk/responsive-personal/';
    },
    
    commands: [aemCommands],

    elements: {    

//locations on the page to select
        
		next_steps_cta_btn: '.cta5.base.cq-element-nextpar_47nextstep_47cta5', 
        next_steps_cta_text: '.cta6.base.cq-element-nextpar_47nextstep_47cta6', 
		next_steps_rte_text: '.rte.base.cq-element-nextpar_47nextstep_47rte',

//Shelf selectors
		hero_shelf: '.hero__mask',
		teaser_article_single_shelf: '.single-article',
		teaser_article_single_shelf_base: '.section.teaserarticle.base',
		teaser_article_multiple_shelf: '.teaser--2',

		carousel_shelf: '.section.carousel.base',
		subnav_shelf_base: '.subnav.base',
		faqs_shelf: '.faq.section.base',
		faqs_shelf_list: '.carousel__slider__slides',	

//Menu
        menu_list: '.x-menu-list',
        //menu_list : '.x-menu-item',
        menu_list_item: '#cq-gen82 .x-menu-list-item',
		menu_list_active: '.x-menu-list.x-menu-item-active',
		menu_list_first: '.x-menu-list > li:nth-child(1)',
        menu_list_edit: '.x-menu-list > li:nth-child(1)',
		menu_list_last: '.x-menu-list > li:nth-child(2)',
		
//Components common
		component_window_header: '.x-window-header-text',
		component_ok_btn: '.x-btn.cq-btn-ok.x-btn-noicon',
        
//Title component       
        title_component_title: '.x-form-text.x-form-field',
        title_component_centre_align: '.x-form-checkbox.x-form-field', 
            
//CTA component
		cta_component_text: 'input[name="./ctatext"]',
		cta_component_open_in_new_window: 'input[name="./newwindow"]',
		cta_component_shelf_id: 'input[name="./sectionid"]',	
	
		cta_component_lightbox_toggle: '.x-tool.x-tool-toggle',
		cta_component_lightbox_target: 'input[name="./ctatarget"]',
		cta_component_lightbox_reference: 'input[name="./referencepar"]',	
		
		cta_component_target: 'input[name="./ctatarget"]',
		
		cta_component_type: '#ext-comp-1603',
		
		cta_nav_search: '.x-form-trigger.x-form-search-trigger',
		
//Display Options		
		display_options_hide_in_brochure: 'input[name="./hideInBWView"]',
		display_options_hide_in_interstitial: 'input[name="./hideInIntView"]',
		display_options_hide_in_mobile: 'input[name="./hideinmobile"]',

//RTE component
        rte_component_config_tab: '.x-tab-strip.x-tab-strip-top > li:nth-child(1)',
        rte_component_display_tab: '.x-tab-strip.x-tab-strip-top > li:nth-child(2)',
        rte_component_additional_styling_tab: '.x-tab-strip.x-tab-strip-top > li:nth-child(3)',
        rte_component_editor_tab: '.x-html-editor-tb',
		
		rte_component_top_separator: '#ext-comp-1576',
		rte_component_bottom_separator: '#ext-comp-1579',
		
		rte_component_link: '#ext-comp-1643',
		
        rte_component_icon_insert: '. x-btn-text.x-edit-inserticon',
		rte_component_icon_bold: '.x-btn-text.x-edit-bold',
		rte_component_icon_italic: '.x-btn-text.x-edit-italic',
		rte_component_icon_bullet: '.x-btn-text.x-edit-unordered',
		rte_component_icon_table: '.x-btn-text.x-edit-table',
		rte_component_icon_hyperlink: '.x-btn-text.x-edit-modifylink',
		rte_component_table_btn_ok: '#ext-comp-1647',
 
        rte_component_text: '#CQrte > p:nth-child(1)', 
        rte_component_text_body: '#CQrte',
		
		rte_table_tr1_td1: '#CQrte > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)',
		rte_table_tr1_td2: '#CQrte > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)',
		rte_table_tr1_td3: '#CQrte > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(3)',
		
//Benefit List Shelf
		benefit_list_shelf: '.benefitlist.section.base',
		benefit_list_theme: 'div.shelf',	
		benefit_list_shelf_header_rte_text: '.rte.base.cq-element-par_47benefitlist_47rte',
		benefit_list_shelf_list_item1_rte_text: '.rte.base.cq-element-par_47benefitlist_47gridPar1_47benefitlisitem_47rte',
		benefit_list_cta_placeholder: '.cta6.base.cq-element-par_47benefitlist_47gridPar1_47benefitlisitem_47cta6',
		benefit_list_item1_placeholder: '.benefitlisitem.base.cq-element-par_47benefitlist_47gridPar1_47benefitlisitem',
		benefit_list_new_list_item: '.benefitlisitem.base.cq-element-par_47benefitlist_47gridPar2_47benefitlisitem_951899797505',	
		benefit_list_cta_list_item1_text: '#cq-gen267 > span:nth-child(1) > a:nth-child(1)',
		benefit_list_shelf_drag_and_drop_area: '#ext-comp-1646',
		
		benefit_list_configuration_hide_header_group: '#ext-comp-1688',
		benefit_list_configuration_column_values: '.x-form-trigger.x-form-arrow-trigger',
		benefit_list_configuration_shelf_anchor: '#ext-comp-1699',
		benefit_list_display_options_themes: '#ext-comp-1703',
		benefit_list_display_options_hide_in_brochure: '#ext-comp-1705',
		benefit_list_display_options_hide_in_interstitial: '#ext-comp-1708',
		benefit_list_display_options_hide_in_mobile: '#ext-comp-1711',		
		
//Canvas Shelf
		canvas_shelf: '.canvas-shelf',
		canvas_shelf_theme: '.canvas-shelf',
		canvas_shelf_rte_text: '.rte.section.base.cq-element-par_47canvas_47blogpar_47rte',
		canvas_shelf_drag_and_drop_area: '#ext-comp-1502',
		
		canvas_shelf_grid_one_drag_and_drop_area: '#ext-comp-1520',
		canvas_shelf_row_reward_one_drag_and_drop_area: '#ext-comp-1946',
		
		canvas_shelf_grid_one_of_two_drag_and_drop_area: '#ext-comp-1541',
		canvas_shelf_grid_two_of_two_drag_and_drop_area: '#ext-comp-1595',
		
		canvas_shelf_text_and_image1: '#ext-comp-1415',
		canvas_shelf_grid_one_image: '.image.parbase.cq-element-par_47canvas_47canvasgrid_47gridPar1_47textimage_47image',
		
		canvas_shelf_text_and_image2: '#ext-comp-1640',
		canvas_shelf_grid_two_image: '.image.parbase.cq-element-par_47canvas_47canvasgrid_47gridPar2_47textimage_47image',
		
		canvas_display_options_themes: '#ext-comp-1531',
		canvas_display_options_hide_in_brochure: '#ext-comp-1533',
		canvas_display_options_hide_in_interstitial: '#ext-comp-1536',
		canvas_display_options_hide_in_mobile: '#ext-comp-1539',
		
		canvas_style_show_headergroup: '#ext-comp-1552',
		canvas_style_headergroup_alignment: '#ext-comp-1556',
		canvas_style_shelf_anchor: '#ext-comp-1563',
		canvas_style_top_separator: '#ext-comp-1565',
		canvas_style_bottom_separator: '#ext-comp-1568',
		
		canvas_configuration_column_values: '.x-form-trigger.x-form-arrow-trigger',
		configuration_cta_target: 'input[name="./ctatarget"]',
		configuration_apply_background: 'input[name="./applyBackGround"]',
		canvas_configuration_cta_types: '#ext-comp-1590',
		
		canvas_shelf_grid_drag_and_drop_area: '#ext-comp-1520',
		canvas_shelf_cta: '.cta.section.base.cq-element-par_47canvas_47canvasgrid_47gridPar1_47cta',
		
//Carousel Slider
		carousel_slider: '.cq-element-par_47carouselslider',	
		carousel_slider_header_above_image: '.headerrte.base.cq-element-par_47carouselslider_47parname1_47headerrte',
		carousel_slider_cta_above_image: '.headercta.base.cq-element-par_47carouselslider_47parname1_47headercta',
		carousel_slider_image: '.image.parbase.cq-element-par_47carouselslider_47parname1_47image',
		carousel_slider_image_img: '.image.parbase.cq-element-par_47carouselslider_47parname1_47image > img',
		carousel_slider_header_below_image: '.headingrte.base.cq-element-par_47carouselslider_47parname1_47headingrte',
		carousel_slider_cta_below_image: '.carousalcta.base.cq-element-par_47carouselslider_47parname1_47carousalcta',
		
		carousel_slider_configuration_select: '#ext-comp-2106',
		
		carousel_slider_parname1: '.x-panel.cq-editbar.cq-element-par_47carouselslider_47parname1',
		carousel_slider_parname2: '.x-panel.cq-editbar.cq-element-par_47carouselslider_47parname2',
		carousel_slider_parname3: '.x-panel.cq-editbar.cq-element-par_47carouselslider_47parname3',
		carousel_slider_parname4: '.x-panel.cq-editbar.cq-element-par_47carouselslider_47parname4',
		carousel_slider_parname5: '.x-panel.cq-editbar.cq-element-par_47carouselslider_47parname5',
		carousel_slider_parname6: '.x-panel.cq-editbar.cq-element-par_47carouselslider_47parname6',
		
//Comparison Carousel		
		comparison_carousel: '.cq-element-par_47canvas_47canvasgrid_47gridPar1_47mobilecomparisoncaro',
		comparison_carousel_configuration_columns: '#ext-comp-2601',
		comparison_header_row: '.comparison-header-row',
		
//Download Shelf
		download_shelf: '.downloads.section.base',
		download_shelf_theme: '.downloads.section.base > section',
		download_shelf_signpost: '.strapline.base.cq-element-par_47downloads_47hgroup_47strapline',
		download_shelf_signpost_p: '.strapline.base.cq-element-par_47downloads_47hgroup_47strapline > p:nth-child(1)',
		
		download_shelf_title: '.headline.base.cq-element-par_47downloads_47hgroup_47headline',
		download_shelf_title_p: '.headline.base.cq-element-par_47downloads_47hgroup_47headline > p:nth-child(1)',
		
		download_shelf_file_lnk: '.download',
		download_shelf_file_icon:'.download__icon',
		download_shelf_file_text: '.download__text',		
		
		download_edit_component_title: '#ext-comp-1664',
		download_edit_component_center_align_title: '#ext-comp-1666',
		
		download_display_options_themes: '#ext-comp-1661',
		
		download_link_hover: 'input[name="./hovertext"]',
		download_link_title: 'input[name="./assettitle"]',
		
//FAQ Shelf		
		faq_shelf: '.faq.section.base',
		faq_theme: '.shelf.shelf--faq',
		faq_shelf_drag_and_drop_area: '#ext-comp-1646',
		faq_shelf_drag_and_drop_area_search: '#ext-comp-1612',
		faq_shelf_first_faq_item: '.faqitem.section.base.cq-element-par_47faq_47faqcloud_47extpar_47faqitem',
		faq_shelf_question: '.question.base.cq-element-par_47faq_47faqcloud_47extpar_47faqitem_47question',
		faq_shelf_answer: '.answer.base.cq-element-par_47faq_47faqcloud_47extpar_47faqitem_47answer',
		
		faq_shelf_search: 'faq-search-wrap',

		faq_shelf_display_options_themes: '#ext-comp-1698',
		
		faq_shelf_display_options_hide_in_brochure: '#ext-comp-1700',
		faq_shelf_display_options_hide_in_interstitial: '#ext-comp-1703',
		faq_shelf_display_options_hide_in_mobile: '#ext-comp-1706',
		
		faq_item_question: '#ext-comp-1701',
		faq_item_theme: '#ext-comp-1727',
		faq_item_answer: '#ext-comp-1728',
		faq_item_reference: 'input[name="./reference"]',
		
		
		faq_search_edit_component_text: '#ext-comp-1744',
		
		faq_search_configuration_search_engine: '#ext-comp-1772',
		faq_search_configuration_ask_question_text: 'input[name="./askaquestiontext"]',
		faq_search_configuration_submit_btn_text: 'input[name="./submittext"]',
		faq_search_display_options_hide_in_brochure: '#ext-comp-1777',
		faq_search_display_options_hide_in_interstitial: '#ext-comp-1780',
		faq_search_display_options_hide_in_mobile: '#ext-comp-1783',
		
		faq_cta_properties_text: 'input[name="./ctatext"]',
		faq_cta_properties_target: '#ext-comp-1841',
		faq_cta_display_options_hide_in_brochure: '#ext-comp-1863',
		faq_cta_display_options_hide_in_interstitial: '#ext-comp-1866',
		faq_cta_display_options_hide_in_mobile: '#ext-comp-1869',
			
		faq_new_list_item: '.parsys.cq-element-par_47faq_47faqcloud_47extpar > div:nth-child(4)',
		faq_new_reference: '.faqitem.section.base.cq-element-par_47faq_47faqcloud_47extpar_47faqitem > li:nth-child(1)',
		faq_new_reference_item: '.faqreference',
		faq_new_reference_item_overlay_lnk: '.overlay-link > a:nth-child(1)',
		
		faq_new_search_title: '.faq-search-title',
		faq_new_search_input: '.faq-input-text',
		faq_new_search_btn: '.faq-btn',
		faq_new_search_engine_enquirer: 'div.x-combo-list-item:nth-child(2)',
		faq_new_cta_common_questions: '.cta.base.cq-element-par_47faq_47par_47faqsearch_47cta',
		faq_new_cta_common_questions_lnk: '.cta--s > a:nth-child(1)',
		faq_new_cta_common_questions_arrow: '.cta--s > a:nth-child(1) > span:nth-child(1)',
//Hero Shelf
		hero_shelf_drag_and_drop_area: '#ext-comp-1324',
		hero_config_tab: '.x-tab-strip.x-tab-strip-top > li:nth-child(2)',
		hero_config_heading_max_width_list: '#ext-comp-1420',
		hero_config_heading_font_size_list: '#ext-comp-1425',
		hero_config_signpost_max_width_list: '#ext-comp-1429',
		hero_config_signpost_font_size_list: '#ext-comp-1432',
		hero_config_m_box_toggle: '.x-tool.x-tool-toggle',
		hero_config_m_box_setting: '#ext-comp-1435',
		hero_display_options_hide_in_brochure: '#ext-comp-1410',
		hero_display_options_hide_in_interstitial: '#ext-comp-1413',
		hero_display_options_hide_in_mobile: '#ext-comp-1416',
		hero_display_mask_shelf: 'cq-placeholder-hero_47image',
		hero_mask_shelf: '#cq-gen4 > div.wrapper > div.main > section.shelf.shelf--hero > div > div.hero__mask.shelf--hero__mask1',
		
//Multi Article Shelf	
		multi_article_shelf: '.multipleteaserarticle.base',
		multi_article_theme: '.teaser-multiple',	
		
		multi_article_configuration_horizontal: 'input[name="./horizontal"]',
		multi_article_configuration_cta_overlay: 'input[name="./ctawrap"]',
		multi_article_configuration_column_values: '.x-form-trigger.x-form-arrow-trigger',
		multi_article_configuration_column_values: '#ext-comp-1793',
		multi_article_configuration_shelf_anchor: 'input[name="./idForAnchoring"]',
		multi_article_configuration_image_alignment: '#ext-comp-1622',
		multi_article_configuration_cta_types: '#ext-comp-1662',
		multi_article_display_options_themes: '#ext-comp-1801',

		multi_article_grid: '.grid.layout--true',
		multi_article_shelf_anchor: '#multi_article_shelf_anchor',
		multi_article_shelf_image1: '.image.parbase.section.cq-element-par_47multipleteaserarticl_47article_95container_951_47article_47articlepar_47image > img',
		multi_article_shelf_image2: '.image.parbase.section.cq-element-par_47multipleteaserarticl_47article_95container_952_47article_47articlepar_47image > img',
		multi_article_shelf_cta_wrap: 'div > .teaser__content > div:nth-child(2) > div:nth-child(3)', 
		multi_article_shelf_image_cta_lnk: '.cta1.base.cq-element-par_47multipleteaserarticl_47article_95container_951_47article_47cta1 > div > span:nth-child(1) > a:nth-child(1)',

//Next Steps Shelf
		next_steps_shelf: '.nextstep.base',
		next_steps_shelf_theme: '.nextstep.base > section',
		next_steps_signpost: '.strapline.base.cq-element-nextpar_47nextstep_47headergroup_47strapline',
		
		next_steps_cta_branded_btn: '.cta5.base.cq-element-nextpar_47nextstep_47cta5',
		next_steps_cta_branded_lnk: '.cta6.base.cq-element-nextpar_47nextstep_47cta6',	
		next_steps_cta_icon_call: '.cta3.base.cq-element-nextpar_47nextstep_47cta3',
		next_steps_cta_icon_visit: '.cta2.base.cq-element-nextpar_47nextstep_47cta2',
		
		next_steps_edit_component_title: '#ext-comp-1577',
		next_steps_edit_component_centre_align: '#ext-comp-1579',

		next_steps_cta_selector: '#ext-comp-1411',
		next_steps_display_options_themes: '#ext-comp-1418',
		next_steps_display_options_hide_in_brochure: '#ext-comp-1420',
		next_steps_display_options_hide_in_interstitial: '#ext-comp-1423',
		next_steps_display_options_hide_in_mobile: '#ext-comp-1426',
		
		next_steps_confirm_delete: '#ext-comp-1407.x-btn.x-btn-noicon',
		
//Notification Shelf
		notification_shelf: '.notification.section.base',
		notification_shelf_theme: '.notification-shelf',
		notification_shelf_rte_text: '.rte.base.cq-element-par_47notification_47rte',
		
		notification_configuration_show_group_header: '#ext-comp-1451',
		notification_display_options_themes: '#ext-comp-1456',
		notification_display_options_hide_in_brochure: '#ext-comp-1458',
		notification_display_options_hide_in_interstitial: '#ext-comp-1461',
		notification_display_options_hide_in_mobile: '#ext-comp-1464',	
//PDP Hero Shelf
		pdp_hero_shelf: '.pdphero.base',
		pdp_hero_shelf_subtitle: '.strapline.base.cq-element-par_47pdphero_47strapline',
		pdp_hero_shelf_separator: 'div.hero__separator:nth-child(5)',
		
		pdp_configuration_separator: 'input[name="./lineseparator"]',
		pdp_configuration_hide_subtitle: 'input[name="./hideSubTitle"]',	
//Product Detail Shelf		
		product_detail_shelf: '.productdetail.section.base',
		product_detail_theme: 'section.shelf:nth-child(2)',
		product_detail_shelf_drag_and_drop_area: '#ext-comp-1667',
		
		product_detail_new_list_item: '.benefitlisitem.base.cq-element-par_47productdetail_47productpar_47gridPar2_47benefitlisitem',
		
		product_detail_configuration_hide_offer: '#ext-comp-1711',
		product_detail_configuration_shelf_anchor: '#ext-comp-1713',
		product_detail_display_options_themes: '#ext-comp-1717',
		product_detail_display_options_hide_in_brochure: '#ext-comp-1719',
		product_detail_display_options_hide_in_interstitial: '#ext-comp-1722',
		product_detail_display_options_hide_in_mobile: '#ext-comp-1725',
//

		publish_buddy_check: 'div.x-combo-list-item:nth-child(12)',
		
//Shared Content Shelf
		shared_content_reference_input: '#ext-comp-1423',
		
		shared_shelf: '.par.parsys.cq-element-par',
		benefit_list: '.benefitlist',
//Single Article Shelf	
		single_article_shelf: '.teaserarticle.base',
		single_article_theme: '.single-article',	
		single_article_shelf_cta: '.cta.ctapath.base.cq-element-par_47teaserarticle_47ctapath',
		
		single_article_configuration_column_values: '.x-form-trigger.x-form-arrow-trigger',
		single_article_configuration_column_values: '#ext-comp-1619',
		single_article_configuration_shelf_anchor: '#ext-comp-1629',
		single_article_configuration_separator: '#ext-comp-1632',
		single_article_configuration_image_alignment: '#ext-comp-1622',
		single_article_configuration_cta_types: '#ext-comp-1662',
		single_article_display_options_themes: '#ext-comp-1636',
		single_article_display_options_hide_in_brochure: '#ext-comp-1638',
		single_article_display_options_hide_in_interstitial: '#ext-comp-1641',
		single_article_display_options_hide_in_mobile: '#ext-comp-1644',	
		
		single_article_grid: '.single-article > div:nth-child(1) > div:nth-child(1)',
		single_article_shelf_anchor: '#single_article_shelf_anchor',
		single_article_shelf_top_separator: '.single-article-top-separator',
		single_article_shelf_bottom_separator: '.single-article-bottom-separator',
//Sub Nav Shelf
		sub_nav_shelf: '.subnav.base',
		sub_nav_configuration_column_values: '#ext-comp-1748', //this looks strange but, these are two separate dropdowns with the fixed id re-used
		sub_nav_shelf_type: '#ext-comp-1748',
		sub_nav_item_type: '#ext-comp-1751',
		sub_nav_shelf_title: '.subnavhead.base',
		sub_nav_shelf_cta: 'div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(3)', 
		sub_nav_headergroup_checkbox: '#ext-comp-1753',
		
		sub_nav_display_options_hide_in_brochure: '#ext-comp-1761', 
		sub_nav_display_options_hide_in_interstitial: '#ext-comp-1764',
		sub_nav_display_options_hide_in_mobile: '#ext-comp-1767',
		sub_nav_sytle_anchor: '#ext-comp-1755',
		
//Row Item Rebrand
		row_item_rebrand: '.rowitemrebrand.section.base',
		row_item_rebrand_accordion: '.accordion-shelf',
		row_item_rebrand_image: '.image.parbase.accimage.cq-element-par_47canvas_47canvasgrid_47gridPar1_47rowitemrebrand_47accimage',
		row_item_rebrand_image_img: '.image.parbase.accimage.cq-element-par_47canvas_47canvasgrid_47gridPar1_47rowitemrebrand_47accimage > img',
		row_item_rebrand_accordion_chevron: '.chevron-click',
		
		row_item_rebrand_configuration_accordion: 'input[name="./isAccReq"]',
		row_item_rebrand_configuration_border: '#ext-comp-1612',
		row_item_rebrand_configuration_accordion_expanded: 'input[name="./expandRow"]',
		
//Row Item Reward
		row_item_reward_configuration_row_type: '#ext-comp-2073',

//Table Component
		table_container: '.cq-element-par_47canvas_47canvasgrid_47gridPar1_47pdpcomparisontable',
		table_header_area: '.comparison-table-heading',
		table_drag_and_drop_area: '#ext-comp-1946',
		table_title: 'input[name="./text"]',
        table_title_centre_align: 'input[name="./centrealign"]', 
		table_configurations_columns: '#ext-comp-2083',
		table_display_options_hide_in_brochure: '#ext-comp-2086',
		table_display_options_hide_in_interstitial: '#ext-comp-2089',
		table_display_options_hide_in_mobile: '#ext-comp-2092',
		table_text: '.cq-element-par_47canvas_47canvasgrid_47gridPar1_47pdpcomparisontable',
		
		table_col1: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
		table_col1_heading: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1)',
		table_col1_subheading: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h5:nth-child(2)',
		table_col1_rte: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)',
		table_col1_cta: '.cq-element-par_47canvas_47canvasgrid_47gridPar1_47pdpcomparisontable_47headerrowitem_47cta1',
		table_col1_cta_lnk: '.cta1 > div > span:nth-child(1) > a:nth-child(1)',
		
		table_col2: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(2)',
		table_col3: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(3)',
		table_col4: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(4)',
		table_col5: 'div.comparison-header-main-table:nth-child(2) > div:nth-child(1) > div:nth-child(5)',
		
//Text and Image Grid Controls
		text_and_image_configure_view_selection: '#ext-comp-1598',
		text_and_image_configure_background: '#ext-comp-1600',
		text_and_image_background: '.text-image-wrapper',

		
//window dialog common		
		window_dialog: '.x-window.x-window-plain.x-window-dlg',
		window_dialog_text: '.ext-mb-text',
		
		shelf_tab_2: '.x-tab-strip.x-tab-strip-top > li:nth-child(2)',
				
//window dialog (delete shelf)
		
		delete_benefit_list_shelf: '#ext-comp-1448.x-btn.x-btn-noicon',
		delete_benefit_list_shelf: '#ext-comp-1685.x-btn.x-btn-noicon',
		
// Tab Panel ========>
		document_icon: '.x-tab-strip-text.cq-cft-tab-icon.documents',
		
		sidebar_image1: 'div.thumb-wrap:nth-child(1) > div:nth-child(1)',
		sidebar_image2: 'div.thumb-wrap:nth-child(2) > div:nth-child(1)',
		sidebar_image3: 'div.thumb-wrap:nth-child(3) > div:nth-child(1)',
		sidebar_image4: 'div.thumb-wrap:nth-child(4) > div:nth-child(1)',
		
		sidebar_manuscript: 'div.x-view-selected:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > img:nth-child(1)',
		sidebar_document1: '#ext-comp-1048 > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > img:nth-child(1)',
		spending_abroad_document: 'div.thumb-sh-wrap:nth-child(25) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > img:nth-child(1)',
	
//Sidekick Panel =======>

//Components
		sidekick_panel: '#cq-sk',
		sidekick_tab_toggle: '#cq-gen160',
        sidekick_tab_icon_components: '.x-tab-strip-text.cq-sidekick-tab.cq-sidekick-tab-icon-components',
		sidekick_faq_item: '.x-btn-text.cq-_47apps_47dmp_47components_47composit_47faqitem',
		sidekick_list_item: '.x-btn-text.cq-_47apps_47dmp_47components_47foundation_47benefitlisitem',
		sidekick_rte_component: '.x-btn-text.cq-_47apps_47dmp_47components_47foundation_47rte',
		
		//sidekick_expand_component_btn: '.x-panel.cq-sidekick-buttons.cq-cmpts-Components.x-panel-noborder.x-panel-collapsed',
		//sidekick_component_buttons: '.x-panel.cq-sidekick-buttons.cq-cmpts-Components.x-panel-noborder',
		sidekick_expand_component_btn: '.x-panel.cq-sidekick-buttons.cq-cmpts-Responsive.x-panel-noborder.x-panel-collapsed',
		sidekick_component_buttons: '.x-panel.cq-sidekick-buttons.cq-cmpts-Responsive.x-panel-noborder',
//Shelves                            
        //sidekick_expand_shelf_btn: '.x-panel.cq-sidekick-buttons.cq-cmpts-Shelves.x-panel-noborder.x-panel-collapsed',
		//sidekick_shelf_buttons: '.x-panel.cq-sidekick-buttons.cq-cmpts-Shelves.x-panel-noborder',
		sidekick_expand_shelf_btn: '#ext-comp-1075',
		//sidekick_expand_shelf_btn: '.x-panel.cq-sidekick-buttons.cq-cmpts-Responsive_32Shelves.x-panel-noborder.x-panel-collapsed',
		sidekick_shelf_buttons: '.x-panel.cq-sidekick-buttons.cq-cmpts-Responsive_32Shelves.x-panel-noborder',
		
		sidekick_benefit_list_shelf: '.cq-_47apps_47dmp_47shelves_47benefitlist',
        sidekick_teaser_article_multiple_shelf: '.cq-_47apps_47dmp_47shelves_47multipleteaserarticle',
		sidekick_teaser_article_single_shelf: '.cq-_47apps_47dmp_47shelves_47teaserarticle',
		sidekick_canvas_shelf: '.cq-_47apps_47dmp_47shelves_47canvas',
		sidekick_carousel_shelf: '.cq-_47apps_47dmp_47shelves_47carousel',
        sidekick_faqs_shelf: '.cq-_47apps_47dmp_47shelves_47faq',	
		sidekick_benefit_list_shelf: '.cq-_47apps_47dmp_47shelves_47benefit_list',
//Page        
        sidekick_tab_icon_page: '.x-tab-strip-text.cq-sidekick-tab.cq-sidekick-tab-icon-page',
        //sidekick_page_activate: '#ext-comp-1106',
		//sidekick_page_activate: '#ext-comp-1187',
		sidekick_page_activate: '#ext-comp-1189',
		sidekick_page_deactivate: '#ext-comp-1107', 
		sidekick_page_delete: '#ext-comp-1105', 

//Workflow        
        sidekick_tab_icon_workflow: '.x-tab-strip-text.cq-sidekick-tab.cq-sidekick-tab-icon-workflow',
		sidekick_open_workflow:'.x-form-trigger.x-form-arrow-trigger',
		sidekick_start_workflow: '#cq\.sidekick\.workflow\.start',
		sidekick_workflow_type: '#ext-comp-1150', 
		sidekick_workflow_form: '#ext-comp-1154',
		sidekick_workflow_info: '#ext-comp-1227', 
		
//      standard template section
		//first_shelf_drag_and_drop_area : '#ext-comp-1052', /* #ext-comp-1036*/
		first_shelf_drag_and_drop_area : '.cq-editrollover-insert-container',
		why_us_shelf: '.comp_whyUs_shelf',
		what_need_to_know_shelf: '.what_need_to_know_shelf',
		product_benefits_list: 'tick-comp-wrapper'
        
    }

};





