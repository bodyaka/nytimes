define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/newsThumb.html"
], function(declare, WidgetBase, TemplatedMixin, template){
	return declare([WidgetBase, TemplatedMixin], {
		
		templateString: template,
		
		multimedia: null,
		_setMultimediaAttr: function(multimedia){
			if(!Array.isArray(multimedia)) return;
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
		
		headline: null,
		_setHeadlineAttr: function(headline){
			if(!headline.main) return;
			
			var str = headline.main;
			if(str.length > 40) {
				str = str.substr(0, 40);
				str += '...';
			}
			
			this.nodeTitle.innerHTML = str;
		},
		
		postCreate: function(){
			
		}
	});
});