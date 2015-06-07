require([
	"dojo/_base/event",
	"dojo/io-query",
	"dojo/ready",
	"dojo/on",
	"dojo/dom",
	"dojo/dom-construct",
	
	"engine/widgets/newsThumb"
], function(event, ioQuery, ready, on, dom, domConstruct, WidgetNewsThumb){
	
	dojo.global.Engine = {
		
		/**
		 * Container with main content
		 */	
		containerContentId: 'containerMain',
		
		/**
		 * Project init
		 */
		init: function(){
			
			var searchInput = dom.byId('inputSearchTitle');
			
			on(dom.byId('formSearchNews'), 'submit', function(evt){
				event.stop(evt);
				console.log('form');
				
				var queryStr = ioQuery.objectToQuery({
					q: searchInput.value,
					fl: 'headline,multimedia,web_url',
					callback: 'svc_search_v2_articlesearch',
					'api-key': 'a3c14eca6cc1fcc9327663f1bb9d9666:7:72233434'
				});
				
				var script = domConstruct.create('script');
				script.src = 'http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?' + queryStr;
				domConstruct.place(script, 'containerJsonp', 'only');
			});
		}
	};
	
	/**
	 * NYTimes response handler. (requirement for jsonp callbak name http://developer.nytimes.com/docs/read/article_search_api_v2) 
	 */
	dojo.global.svc_search_v2_articlesearch = function(data){
		if(!(data && data.response && data.response.docs)) return;
		
		domConstruct.empty(Engine.containerContentId);
		
		for(var i in data.response.docs){
			new WidgetNewsThumb(data.response.docs[i]).placeAt(Engine.containerContentId);
		}
		console.log(data);
	};
	
	ready(function(){
		Engine.init();
	});
});
