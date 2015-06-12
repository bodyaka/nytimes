require({cache:{
'url:engine/widgets/templates/newsThumb.html':"<div class=\"newsThumb\">\n\t<div class=\"thumb\">\n\t\t<img data-dojo-attach-point=\"nodeImg\" />\n\t</div>\n\t<div class=\"title\">\n\t\t<a href=\"javascript:void(0)\" data-dojo-attach-point=\"nodeTitle\"></a>\n\t</div>\n</div>"}});
define("engine/widgets/newsThumb", [
	"dojo/_base/declare",
	"dojo/on",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/newsThumb.html",
	
	"engine/widgets/newsView"
], function(declare, on, WidgetBase, TemplatedMixin, template, WidgetNewsView){
	return declare([WidgetBase, TemplatedMixin], {
		
		templateString: template,
		
		/**
		 * Set multimedia
		 */
		_setMultimedia: function(multimedia){
			
			var imgSrc = '';
			for(var i in multimedia){
				if(!(multimedia[i].type == 'image' && multimedia[i].subtype == 'xlarge')) continue;
				
				imgSrc= 'http://nytimes.com/' + multimedia[i].url;
				break;
			}
			
			if(imgSrc){
				this.nodeImg.src = imgSrc;
			}else{
				this.nodeImg.src = 'public/images/noimage.jpg';
			}
			
		},
		
		/**
		 * Set title
		 */
		_setHeadline: function(headline){
			if(headline.length > 40) {
				headline = headline.substr(0, 40);
				headline += '...';
			}
			
			this.nodeTitle.innerHTML = headline;
		},
		
		/**
		 * News entity 
		 */
		entity: null,
		_setEntityAttr: function(entity){
			if(entity.headline.main) this._setHeadline(entity.headline.main);
			if(Array.isArray(entity.multimedia)) this._setMultimedia(entity.multimedia);
		},
		
		postCreate: function(){
			var scope = this;
			this.own(on(this.domNode, 'click', function(){
				new WidgetNewsView(scope.entity).placeAt(Engine.containerContent);
			}));
		}
	});
});