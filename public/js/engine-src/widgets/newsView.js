define([
	"dojo/_base/declare",
	"dojo/_base/window",
	"dojo/_base/lang",
	"dojo/on",
	"dojo/dom-style",
	"dojo/dom-geometry",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/newsView.html",
	
], function(declare, win, lang, on, domStyle, domGeometry, WidgetBase, TemplatedMixin, template){
	return declare([WidgetBase, TemplatedMixin], {
		
		templateString: template,
		
		/**
		 * Set multimedia
		 */
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
				domStyle.set(this.nodeImg.parentNode, 'display', 'none');
			}
			
		},
		
		/**
		 * Set title
		 */
		headline: null,
		_setHeadlineAttr: function(headline){
			if(!headline.main) return;
			
			this.nodeTitle.innerHTML = headline.main;
		},
		
		/**
		 * Set content block
		 */
		setContentBlock: function(node, content){
			if(content){
				node.innerHTML = content;
				domStyle.set(node.parentNode, 'display', 'block');
			}
		},
		
		/**
		 * Set lead_paragraph
		 */
		lead_paragraph: null,
		_setLead_paragraphAttr: function(lead_paragraph){
			this.setContentBlock(this.nodeLeadParagraph, lead_paragraph);
		},
		
		/**
		 * Set snippet
		 */
		snippet: null,
		_setSnippetAttr: function(snippet){
			this.setContentBlock(this.nodeSnippet, snippet);
		},
		
		/**
		 * Set source
		 */
		source: null,
		_setSourceAttr: function(source){
			this.setContentBlock(this.nodeSource, source);
		},
		
		/**
		 * Set web_url
		 */
		web_url: null,
		_setWeb_urlAttr: function(web_url){
			this.setContentBlock(this.nodeWebUrl, web_url);
			this.nodeWebUrl.href = web_url;
		},
		
		/**
		 * Correctly close widget
		 */
		widgetClose: function(){
			this.destroyRecursive();
			Engine.underlay.hide();
		},
		
		/**
		 * Widget reposition 
		 */
		reposition: function(){
			var wWidth = 567;
			var posContainer = domGeometry.position(Engine.containerContent, true);
			
			var style = {
				width: wWidth + 'px',
				top: posContainer.y + 'px',
				height: posContainer.h + 'px'
			};
			
			var _left = Math.floor((posContainer.w - wWidth) / 2);
			if(_left > 0){
				style.left = _left + 'px';
			}else{
				style.left = '0px';
				style.width = '100%';
			}
			
			domStyle.set(this.domNode, style);
		},
		
		postCreate: function(){
			
			// reposition widget
			this.reposition();
			
			// handle close events
			var scope = this;
			this.own(on(this.nodeCloseButton, 'click', function(evt){
				scope.widgetClose();
			}));
			this.own(on(win.doc, 'keydown', function(evt){
				if(evt.keyCode == 27) scope.widgetClose();
			}));
			this.own(on(win.global, 'resize', function(evt){
				scope.reposition();
			}));
			
			// show underlay
			Engine.underlay.show();
		}
	});
});