require([
	"dojo/_base/event",
	"dojo/request/xhr",
	"dojo/request/script",
	"dojo/io-query",
	"dojo/ready",
	"dojo/on",
	"dojo/dom",
	"dojo/dom-style",
	"dojo/dom-class",
	"dojo/dom-construct",
	"dojo/dom-geometry",
	
	"dijit/registry",
	
	"engine/widgets/newsThumb"
], function(event, xhr, script, ioQuery, ready, on, dom, domStyle, domClass, domConstruct, domGeometry, registry, WidgetNewsThumb){
	
	// class names for handlers
	var classNameMobileClicked = 'clicked',
		classNameMobileSearchMode = 'mobileSearchMode',
		classNameMobileActive = 'active';
	
	/**
	 * Main project object in global scope
	 */
	dojo.global.Engine = {
			
		/**
		 * Container with main content
		 */	
		containerContent: null,
		
		/**
		 * Header nodes
		 */
		searchInput: null,
		nodeHeader: null,
		nodeSearch: null,
		nodeMenu: null,
		mobileButtonSearch: null,
		mobileButtonMenu: null,
		
		/**
		 * Clear header in mobile mode
		 */
		closeMobileSearch: function(){
			domClass.remove(Engine.mobileButtonSearch, classNameMobileClicked);
			domClass.remove(Engine.nodeHeader, classNameMobileSearchMode);
			domClass.remove(Engine.nodeSearch, classNameMobileActive);
		},
		closeMobileMenu: function(){
			domClass.remove(Engine.mobileButtonMenu, classNameMobileClicked);
			domClass.remove(Engine.nodeMenu, classNameMobileActive);
			Engine.underlay.hide();
		},
		clearMobileHeader: function(){
			Engine.closeMobileSearch();
			Engine.closeMobileMenu();
		},
		
		/**
		 * Project init
		 */
		init: function(){
			Engine.containerContent = dom.byId('containerMain');
			Engine.searchInput = dom.byId('inputSearchQuery');
			Engine.nodeHeader = dom.byId('nodeHeader');
			Engine.nodeSearch = dom.byId('nodeSearch');
			Engine.nodeMenu = dom.byId('nodeMenu');
			Engine.mobileButtonSearch = dom.byId('mobileButtonSearch');
			Engine.mobileButtonMenu = dom.byId('mobileButtonMenu');
			
			// handle buttons in Mobile screen mode
			on(Engine.mobileButtonSearch, 'click', function(evt){
				domClass.toggle(Engine.mobileButtonSearch, classNameMobileClicked);
				if(domClass.contains(Engine.mobileButtonSearch, classNameMobileClicked)){
					Engine.closeMobileMenu();
					domClass.add(Engine.nodeHeader, classNameMobileSearchMode);
					domClass.add(Engine.nodeSearch, classNameMobileActive);
				}else{
					Engine.clearMobileHeader();
				}
			});
			on(Engine.mobileButtonMenu, 'click', function(evt){
				domClass.toggle(Engine.mobileButtonMenu, classNameMobileClicked);
				if(domClass.contains(Engine.mobileButtonMenu, classNameMobileClicked)){
					Engine.closeMobileSearch();
					domClass.add(Engine.nodeMenu, classNameMobileActive);
					Engine.underlay.show();
				}else{
					Engine.clearMobileHeader();
				}
			});
			
			on(dom.byId('formSearchNews'), 'submit', function(evt){
				event.stop(evt);
				
				
				var searchQuery = Engine.searchInput.value;
				if(!searchQuery) return;
				
				var queryObjectV2 = {
					q: searchQuery,
//					fl: 'headline,multimedia,web_url,blog',
//					callback: 'svc_search_v2_articlesearch',
					'api-key': 'a3c14eca6cc1fcc9327663f1bb9d9666:7:72233434'
				};
				
				var queryObjectV1 = {
						query: searchQuery,
						fields: 'title,multimedia,url',
//					callback: 'svc_search_v2_articlesearch',
						'api-key': 'a3c14eca6cc1fcc9327663f1bb9d9666:7:72233434'
				};
				
				/*
				var queryStr = ioQuery.objectToQuery(queryObject);
				
				var promise = script.get('api_nytimes/svc/search/v2/articlesearch.json', {
					query: queryObject
				});
				promise.then(function(data){
					console.log(data);
				}, function(err){
					console.log(err);
				});
				
				var scriptNode = domConstruct.create('script');
				scriptNode.src = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?' + queryStr;
				domConstruct.place(scriptNode, 'containerJsonp', 'only');
				*/
				
				var promise = xhr.get('api_nytimes/svc/search/v2/articlesearch.json', {
//				var promise = xhr.get('api_nytimes/svc/search/v1/article', {
					query: queryObjectV2,
					handleAs: "json"
				});
				
				promise.then(function(data){
					console.log(data);
					Engine.renderNews(data);
				}, function(err){
					console.log(err);
				});
			});
		},
		
		renderNews: function(data){
			if(!(data && data.response && data.response.docs)) return;
			
			Engine.clearMobileHeader();
			
			// clear main container
			registry.findWidgets(Engine.containerContent).forEach(function(widget){
				widget.destroyRecursive();
			});
			domConstruct.empty(Engine.containerContent);
			
			for(var i in data.response.docs){
				new WidgetNewsThumb({entity: data.response.docs[i]}).placeAt(Engine.containerContent);
			}
		},
		
		/**
		 * Page underlay object
		 */
		underlay: function(){
			var underlayWrapper;
			var resizeWrapper = function(){
				var posContainer = domGeometry.position(Engine.containerContent, true);
				var posFooterNode = domGeometry.position('nodeFooter', true);
				
				domStyle.set(underlayWrapper, {
					top: posContainer.y + 'px',
					height: (posFooterNode.y + posFooterNode.h - posContainer.y) + 'px'
					
				});
			}
			
			return {
				show: function(){
					if(underlayWrapper) return;
					
					underlayWrapper = domConstruct.create('div', {
						style: {
							position: 'absolute',
							left: '0',
							width: '100%',
							zIndex: 998,
							background: 'transparent'
						}
					});
					resizeWrapper();
					domConstruct.place(underlayWrapper, Engine.containerContent);
					var underlay = domConstruct.create('div', {
						style: {
							width: '100%',
							height: '100%',
							backgroundColor: '#4198D2',
							opacity: '0.5'
						}
					}, underlayWrapper);
				},
				hide: function(){
					if(underlayWrapper){
						domConstruct.destroy(underlayWrapper);
						underlayWrapper = null;
					}
				}
			};
		}()
	};
	
	/**
	 * NYTimes response handler. (requirement for jsonp callbak name http://developer.nytimes.com/docs/read/article_search_api_v2) 
	 */
	/*
	dojo.global.svc_search_v2_articlesearch = function(data){
		if(!(data && data.response && data.response.docs)) return;
		
		// clear main container
		registry.findWidgets(Engine.containerContent).forEach(function(widget){
			widget.destroyRecursive();
		});
		domConstruct.empty(Engine.containerContent);
		
		for(var i in data.response.docs){
			new WidgetNewsThumb({entity: data.response.docs[i]}).placeAt(Engine.containerContent);
		}
		console.log(data);
	};
	*/
	
	ready(function(){
		Engine.init();
	});
});
