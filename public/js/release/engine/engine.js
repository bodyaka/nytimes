/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
require({cache:{"dojo/request/script":function(){define(["module","./watch","./util","../_base/kernel","../_base/array","../_base/lang","../on","../dom","../dom-construct","../has","../_base/window"],function(_1,_2,_3,_4,_5,_6,on,_7,_8,_9,_a){_9.add("script-readystatechange",function(_b,_c){var _d=_c.createElement("script");return typeof _d["onreadystatechange"]!=="undefined"&&(typeof _b["opera"]==="undefined"||_b["opera"].toString()!=="[object Opera]");});var _e=_1.id.replace(/[\/\.\-]/g,"_"),_f=0,_10=_9("script-readystatechange")?"readystatechange":"load",_11=/complete|loaded/,_12=_4.global[_e+"_callbacks"]={},_13=[];function _14(id,url,_15){var doc=(_15||_a.doc),_16=doc.createElement("script");_16.type="text/javascript";_16.src=url;_16.id=id;_16.async=true;_16.charset="utf-8";return doc.getElementsByTagName("head")[0].appendChild(_16);};function _17(id,_18,_19){_8.destroy(_7.byId(id,_18));if(_12[id]){if(_19){_12[id]=function(){delete _12[id];};}else{delete _12[id];}}};function _1a(dfd){var _1b=dfd.response.options,_1c=_1b.ioArgs?_1b.ioArgs.frameDoc:_1b.frameDoc;_13.push({id:dfd.id,frameDoc:_1c});if(_1b.ioArgs){_1b.ioArgs.frameDoc=null;}_1b.frameDoc=null;};function _1d(dfd,_1e){if(dfd.canDelete){_1f._remove(dfd.id,_1e.options.frameDoc,true);}};function _20(_21){if(_13&&_13.length){_5.forEach(_13,function(_22){_1f._remove(_22.id,_22.frameDoc);_22.frameDoc=null;});_13=[];}return _21.options.jsonp?!_21.data:true;};function _23(_24){return !!this.scriptLoaded;};function _25(_26){var _27=_26.options.checkString;return _27&&eval("typeof("+_27+") !== \"undefined\"");};function _28(_29,_2a){if(this.canDelete){_1a(this);}if(_2a){this.reject(_2a);}else{this.resolve(_29);}};function _1f(url,_2b,_2c){var _2d=_3.parseArgs(url,_3.deepCopy({},_2b));url=_2d.url;_2b=_2d.options;var dfd=_3.deferred(_2d,_1d,_20,_2b.jsonp?null:(_2b.checkString?_25:_23),_28);_6.mixin(dfd,{id:_e+(_f++),canDelete:false});if(_2b.jsonp){var _2e=new RegExp("[?&]"+_2b.jsonp+"=");if(!_2e.test(url)){url+=(~url.indexOf("?")?"&":"?")+_2b.jsonp+"="+(_2b.frameDoc?"parent.":"")+_e+"_callbacks."+dfd.id;}dfd.canDelete=true;_12[dfd.id]=function(_2f){_2d.data=_2f;dfd.handleResponse(_2d);};}if(_3.notify){_3.notify.emit("send",_2d,dfd.promise.cancel);}if(!_2b.canAttach||_2b.canAttach(dfd)){var _30=_1f._attach(dfd.id,url,_2b.frameDoc);if(!_2b.jsonp&&!_2b.checkString){var _31=on(_30,_10,function(evt){if(evt.type==="load"||_11.test(_30.readyState)){_31.remove();dfd.scriptLoaded=evt;}});}}_2(dfd);return _2c?dfd:dfd.promise;};_1f.get=_1f;_1f._attach=_14;_1f._remove=_17;_1f._callbacksProperty=_e+"_callbacks";return _1f;});},"dijit/registry":function(){define(["dojo/_base/array","dojo/_base/window","./main"],function(_32,win,_33){var _34={},_35={};var _36={length:0,add:function(_37){if(_35[_37.id]){throw new Error("Tried to register widget with id=="+_37.id+" but that id is already registered");}_35[_37.id]=_37;this.length++;},remove:function(id){if(_35[id]){delete _35[id];this.length--;}},byId:function(id){return typeof id=="string"?_35[id]:id;},byNode:function(_38){return _35[_38.getAttribute("widgetId")];},toArray:function(){var ar=[];for(var id in _35){ar.push(_35[id]);}return ar;},getUniqueId:function(_39){var id;do{id=_39+"_"+(_39 in _34?++_34[_39]:_34[_39]=0);}while(_35[id]);return _33._scopeName=="dijit"?id:_33._scopeName+"_"+id;},findWidgets:function(_3a,_3b){var _3c=[];function _3d(_3e){for(var _3f=_3e.firstChild;_3f;_3f=_3f.nextSibling){if(_3f.nodeType==1){var _40=_3f.getAttribute("widgetId");if(_40){var _41=_35[_40];if(_41){_3c.push(_41);}}else{if(_3f!==_3b){_3d(_3f);}}}}};_3d(_3a);return _3c;},_destroyAll:function(){_33._curFocus=null;_33._prevFocus=null;_33._activeStack=[];_32.forEach(_36.findWidgets(win.body()),function(_42){if(!_42._destroyed){if(_42.destroyRecursive){_42.destroyRecursive();}else{if(_42.destroy){_42.destroy();}}}});},getEnclosingWidget:function(_43){while(_43){var id=_43.nodeType==1&&_43.getAttribute("widgetId");if(id){return _35[id];}_43=_43.parentNode;}return null;},_hash:_35};_33.registry=_36;return _36;});},"dijit/main":function(){define(["dojo/_base/kernel"],function(_44){return _44.dijit;});},"engine/widgets/newsThumb":function(){define(["dojo/_base/declare","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/newsThumb.html","engine/widgets/newsView"],function(_45,on,_46,_47,_48,_49){return _45([_46,_47],{templateString:_48,_setMultimedia:function(_4a){var _4b="";for(var i in _4a){if(!(_4a[i].type=="image"&&_4a[i].subtype=="xlarge")){continue;}_4b="http://nytimes.com/"+_4a[i].url;break;}if(_4b){this.nodeImg.src=_4b;}else{this.nodeImg.src="public/images/noimage.jpg";}},_setHeadline:function(_4c){if(_4c.length>40){_4c=_4c.substr(0,40);_4c+="...";}this.nodeTitle.innerHTML=_4c;},entity:null,_setEntityAttr:function(_4d){if(_4d.headline.main){this._setHeadline(_4d.headline.main);}if(Array.isArray(_4d.multimedia)){this._setMultimedia(_4d.multimedia);}},postCreate:function(){var _4e=this;this.own(on(this.domNode,"click",function(){Engine.clearMobileHeader();new _49(_4e.entity).placeAt(Engine.containerContent);}));}});});},"dijit/_WidgetBase":function(){define(["require","dojo/_base/array","dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/ready","dojo/Stateful","dojo/topic","dojo/_base/window","./Destroyable","dojo/has!dojo-bidi?./_BidiMixin","./registry"],function(_4f,_50,_51,_52,_53,_54,dom,_55,_56,_57,_58,_59,has,_5a,_5b,on,_5c,_5d,_5e,win,_5f,_60,_61){has.add("dijit-legacy-requires",!_5a.isAsync);has.add("dojo-bidi",false);if(has("dijit-legacy-requires")){_5c(0,function(){var _62=["dijit/_base/manager"];_4f(_62);});}var _63={};function _64(obj){var ret={};for(var _65 in obj){ret[_65.toLowerCase()]=true;}return ret;};function _66(_67){return function(val){_55[val?"set":"remove"](this.domNode,_67,val);this._set(_67,val);};};function _68(a,b){return a===b||(a!==a&&b!==b);};var _69=_54("dijit._WidgetBase",[_5d,_5f],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:_66("lang"),dir:"",_setDirAttr:_66("dir"),"class":"",_setClassAttr:{node:"domNode",type:"class"},_setTypeAttr:null,style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(val){this._set("ownerDocument",val);},attributeMap:{},_blankGif:_52.blankGif||_4f.toUrl("dojo/resources/blank.gif"),_introspect:function(){var _6a=this.constructor;if(!_6a._setterAttrs){var _6b=_6a.prototype,_6c=_6a._setterAttrs=[],_6d=(_6a._onMap={});for(var _6e in _6b.attributeMap){_6c.push(_6e);}for(_6e in _6b){if(/^on/.test(_6e)){_6d[_6e.substring(2).toLowerCase()]=_6e;}if(/^_set[A-Z](.*)Attr$/.test(_6e)){_6e=_6e.charAt(4).toLowerCase()+_6e.substr(5,_6e.length-9);if(!_6b.attributeMap||!(_6e in _6b.attributeMap)){_6c.push(_6e);}}}}},postscript:function(_6f,_70){this.create(_6f,_70);},create:function(_71,_72){this._introspect();this.srcNodeRef=dom.byId(_72);this._connects=[];this._supportingWidgets=[];if(this.srcNodeRef&&(typeof this.srcNodeRef.id=="string")){this.id=this.srcNodeRef.id;}if(_71){this.params=_71;_5b.mixin(this,_71);}this.postMixInProperties();if(!this.id){this.id=_61.getUniqueId(this.declaredClass.replace(/\./g,"_"));if(this.params){delete this.params.id;}}this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:document);this.ownerDocumentBody=win.body(this.ownerDocument);_61.add(this);this.buildRendering();var _73;if(this.domNode){this._applyAttributes();var _74=this.srcNodeRef;if(_74&&_74.parentNode&&this.domNode!==_74){_74.parentNode.replaceChild(this.domNode,_74);_73=true;}this.domNode.setAttribute("widgetId",this.id);}this.postCreate();if(_73){delete this.srcNodeRef;}this._created=true;},_applyAttributes:function(){var _75={};for(var key in this.params||{}){_75[key]=this._get(key);}_50.forEach(this.constructor._setterAttrs,function(key){if(!(key in _75)){var val=this._get(key);if(val){this.set(key,val);}}},this);for(key in _75){this.set(key,_75[key]);}},postMixInProperties:function(){},buildRendering:function(){if(!this.domNode){this.domNode=this.srcNodeRef||this.ownerDocument.createElement("div");}if(this.baseClass){var _76=this.baseClass.split(" ");if(!this.isLeftToRight()){_76=_76.concat(_50.map(_76,function(_77){return _77+"Rtl";}));}_56.add(this.domNode,_76);}},postCreate:function(){},startup:function(){if(this._started){return;}this._started=true;_50.forEach(this.getChildren(),function(obj){if(!obj._started&&!obj._destroyed&&_5b.isFunction(obj.startup)){obj.startup();obj._started=true;}});},destroyRecursive:function(_78){this._beingDestroyed=true;this.destroyDescendants(_78);this.destroy(_78);},destroy:function(_79){this._beingDestroyed=true;this.uninitialize();function _7a(w){if(w.destroyRecursive){w.destroyRecursive(_79);}else{if(w.destroy){w.destroy(_79);}}};_50.forEach(this._connects,_5b.hitch(this,"disconnect"));_50.forEach(this._supportingWidgets,_7a);if(this.domNode){_50.forEach(_61.findWidgets(this.domNode,this.containerNode),_7a);}this.destroyRendering(_79);_61.remove(this.id);this._destroyed=true;},destroyRendering:function(_7b){if(this.bgIframe){this.bgIframe.destroy(_7b);delete this.bgIframe;}if(this.domNode){if(_7b){_55.remove(this.domNode,"widgetId");}else{_57.destroy(this.domNode);}delete this.domNode;}if(this.srcNodeRef){if(!_7b){_57.destroy(this.srcNodeRef);}delete this.srcNodeRef;}},destroyDescendants:function(_7c){_50.forEach(this.getChildren(),function(_7d){if(_7d.destroyRecursive){_7d.destroyRecursive(_7c);}});},uninitialize:function(){return false;},_setStyleAttr:function(_7e){var _7f=this.domNode;if(_5b.isObject(_7e)){_59.set(_7f,_7e);}else{if(_7f.style.cssText){_7f.style.cssText+="; "+_7e;}else{_7f.style.cssText=_7e;}}this._set("style",_7e);},_attrToDom:function(_80,_81,_82){_82=arguments.length>=3?_82:this.attributeMap[_80];_50.forEach(_5b.isArray(_82)?_82:[_82],function(_83){var _84=this[_83.node||_83||"domNode"];var _85=_83.type||"attribute";switch(_85){case "attribute":if(_5b.isFunction(_81)){_81=_5b.hitch(this,_81);}var _86=_83.attribute?_83.attribute:(/^on[A-Z][a-zA-Z]*$/.test(_80)?_80.toLowerCase():_80);if(_84.tagName){_55.set(_84,_86,_81);}else{_84.set(_86,_81);}break;case "innerText":_84.innerHTML="";_84.appendChild(this.ownerDocument.createTextNode(_81));break;case "innerHTML":_84.innerHTML=_81;break;case "class":_56.replace(_84,_81,this[_80]);break;}},this);},get:function(_87){var _88=this._getAttrNames(_87);return this[_88.g]?this[_88.g]():this._get(_87);},set:function(_89,_8a){if(typeof _89==="object"){for(var x in _89){this.set(x,_89[x]);}return this;}var _8b=this._getAttrNames(_89),_8c=this[_8b.s];if(_5b.isFunction(_8c)){var _8d=_8c.apply(this,Array.prototype.slice.call(arguments,1));}else{var _8e=this.focusNode&&!_5b.isFunction(this.focusNode)?"focusNode":"domNode",tag=this[_8e]&&this[_8e].tagName,_8f=tag&&(_63[tag]||(_63[tag]=_64(this[_8e]))),map=_89 in this.attributeMap?this.attributeMap[_89]:_8b.s in this?this[_8b.s]:((_8f&&_8b.l in _8f&&typeof _8a!="function")||/^aria-|^data-|^role$/.test(_89))?_8e:null;if(map!=null){this._attrToDom(_89,_8a,map);}this._set(_89,_8a);}return _8d||this;},_attrPairNames:{},_getAttrNames:function(_90){var apn=this._attrPairNames;if(apn[_90]){return apn[_90];}var uc=_90.replace(/^[a-z]|-[a-zA-Z]/g,function(c){return c.charAt(c.length-1).toUpperCase();});return (apn[_90]={n:_90+"Node",s:"_set"+uc+"Attr",g:"_get"+uc+"Attr",l:uc.toLowerCase()});},_set:function(_91,_92){var _93=this[_91];this[_91]=_92;if(this._created&&!_68(_93,_92)){if(this._watchCallbacks){this._watchCallbacks(_91,_93,_92);}this.emit("attrmodified-"+_91,{detail:{prevValue:_93,newValue:_92}});}},_get:function(_94){return this[_94];},emit:function(_95,_96,_97){_96=_96||{};if(_96.bubbles===undefined){_96.bubbles=true;}if(_96.cancelable===undefined){_96.cancelable=true;}if(!_96.detail){_96.detail={};}_96.detail.widget=this;var ret,_98=this["on"+_95];if(_98){ret=_98.apply(this,_97?_97:[_96]);}if(this._started&&!this._beingDestroyed){on.emit(this.domNode,_95.toLowerCase(),_96);}return ret;},on:function(_99,_9a){var _9b=this._onMap(_99);if(_9b){return _51.after(this,_9b,_9a,true);}return this.own(on(this.domNode,_99,_9a))[0];},_onMap:function(_9c){var _9d=this.constructor,map=_9d._onMap;if(!map){map=(_9d._onMap={});for(var _9e in _9d.prototype){if(/^on/.test(_9e)){map[_9e.replace(/^on/,"").toLowerCase()]=_9e;}}}return map[typeof _9c=="string"&&_9c.toLowerCase()];},toString:function(){return "[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]";},getChildren:function(){return this.containerNode?_61.findWidgets(this.containerNode):[];},getParent:function(){return _61.getEnclosingWidget(this.domNode.parentNode);},connect:function(obj,_9f,_a0){return this.own(_53.connect(obj,_9f,this,_a0))[0];},disconnect:function(_a1){_a1.remove();},subscribe:function(t,_a2){return this.own(_5e.subscribe(t,_5b.hitch(this,_a2)))[0];},unsubscribe:function(_a3){_a3.remove();},isLeftToRight:function(){return this.dir?(this.dir.toLowerCase()=="ltr"):_58.isBodyLtr(this.ownerDocument);},isFocusable:function(){return this.focus&&(_59.get(this.domNode,"display")!="none");},placeAt:function(_a4,_a5){var _a6=!_a4.tagName&&_61.byId(_a4);if(_a6&&_a6.addChild&&(!_a5||typeof _a5==="number")){_a6.addChild(this,_a5);}else{var ref=_a6&&("domNode" in _a6)?(_a6.containerNode&&!/after|before|replace/.test(_a5||"")?_a6.containerNode:_a6.domNode):dom.byId(_a4,this.ownerDocument);_57.place(this.domNode,ref,_a5);if(!this._started&&(this.getParent()||{})._started){this.startup();}}return this;},defer:function(fcn,_a7){var _a8=setTimeout(_5b.hitch(this,function(){if(!_a8){return;}_a8=null;if(!this._destroyed){_5b.hitch(this,fcn)();}}),_a7||0);return {remove:function(){if(_a8){clearTimeout(_a8);_a8=null;}return null;}};}});if(has("dojo-bidi")){_69.extend(_60);}return _69;});},"dojo/Stateful":function(){define(["./_base/declare","./_base/lang","./_base/array","./when"],function(_a9,_aa,_ab,_ac){return _a9("dojo.Stateful",null,{_attrPairNames:{},_getAttrNames:function(_ad){var apn=this._attrPairNames;if(apn[_ad]){return apn[_ad];}return (apn[_ad]={s:"_"+_ad+"Setter",g:"_"+_ad+"Getter"});},postscript:function(_ae){if(_ae){this.set(_ae);}},_get:function(_af,_b0){return typeof this[_b0.g]==="function"?this[_b0.g]():this[_af];},get:function(_b1){return this._get(_b1,this._getAttrNames(_b1));},set:function(_b2,_b3){if(typeof _b2==="object"){for(var x in _b2){if(_b2.hasOwnProperty(x)&&x!="_watchCallbacks"){this.set(x,_b2[x]);}}return this;}var _b4=this._getAttrNames(_b2),_b5=this._get(_b2,_b4),_b6=this[_b4.s],_b7;if(typeof _b6==="function"){_b7=_b6.apply(this,Array.prototype.slice.call(arguments,1));}else{this[_b2]=_b3;}if(this._watchCallbacks){var _b8=this;_ac(_b7,function(){_b8._watchCallbacks(_b2,_b5,_b3);});}return this;},_changeAttrValue:function(_b9,_ba){var _bb=this.get(_b9);this[_b9]=_ba;if(this._watchCallbacks){this._watchCallbacks(_b9,_bb,_ba);}return this;},watch:function(_bc,_bd){var _be=this._watchCallbacks;if(!_be){var _bf=this;_be=this._watchCallbacks=function(_c0,_c1,_c2,_c3){var _c4=function(_c5){if(_c5){_c5=_c5.slice();for(var i=0,l=_c5.length;i<l;i++){_c5[i].call(_bf,_c0,_c1,_c2);}}};_c4(_be["_"+_c0]);if(!_c3){_c4(_be["*"]);}};}if(!_bd&&typeof _bc==="function"){_bd=_bc;_bc="*";}else{_bc="_"+_bc;}var _c6=_be[_bc];if(typeof _c6!=="object"){_c6=_be[_bc]=[];}_c6.push(_bd);var _c7={};_c7.unwatch=_c7.remove=function(){var _c8=_ab.indexOf(_c6,_bd);if(_c8>-1){_c6.splice(_c8,1);}};return _c7;}});});},"dijit/Destroyable":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(_c9,_ca,_cb){return _cb("dijit.Destroyable",null,{destroy:function(_cc){this._destroyed=true;},own:function(){var _cd=["destroyRecursive","destroy","remove"];_c9.forEach(arguments,function(_ce){var _cf;var odh=_ca.before(this,"destroy",function(_d0){_ce[_cf](_d0);});var _d1=[];function _d2(){odh.remove();_c9.forEach(_d1,function(hdh){hdh.remove();});};if(_ce.then){_cf="cancel";_ce.then(_d2,_d2);}else{_c9.forEach(_cd,function(_d3){if(typeof _ce[_d3]==="function"){if(!_cf){_cf=_d3;}_d1.push(_ca.after(_ce,_d3,_d2,true));}});}},this);return arguments;}});});},"dijit/_TemplatedMixin":function(){define(["dojo/cache","dojo/_base/declare","dojo/dom-construct","dojo/_base/lang","dojo/on","dojo/sniff","dojo/string","./_AttachMixin"],function(_d4,_d5,_d6,_d7,on,has,_d8,_d9){var _da=_d5("dijit._TemplatedMixin",_d9,{templateString:null,templatePath:null,_skipNodeCache:false,searchContainerNode:true,_stringRepl:function(_db){var _dc=this.declaredClass,_dd=this;return _d8.substitute(_db,this,function(_de,key){if(key.charAt(0)=="!"){_de=_d7.getObject(key.substr(1),false,_dd);}if(typeof _de=="undefined"){throw new Error(_dc+" template:"+key);}if(_de==null){return "";}return key.charAt(0)=="!"?_de:this._escapeValue(""+_de);},this);},_escapeValue:function(val){return val.replace(/["'<>&]/g,function(val){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;"}[val];});},buildRendering:function(){if(!this._rendered){if(!this.templateString){this.templateString=_d4(this.templatePath,{sanitize:true});}var _df=_da.getCachedTemplate(this.templateString,this._skipNodeCache,this.ownerDocument);var _e0;if(_d7.isString(_df)){_e0=_d6.toDom(this._stringRepl(_df),this.ownerDocument);if(_e0.nodeType!=1){throw new Error("Invalid template: "+_df);}}else{_e0=_df.cloneNode(true);}this.domNode=_e0;}this.inherited(arguments);if(!this._rendered){this._fillContent(this.srcNodeRef);}this._rendered=true;},_fillContent:function(_e1){var _e2=this.containerNode;if(_e1&&_e2){while(_e1.hasChildNodes()){_e2.appendChild(_e1.firstChild);}}}});_da._templateCache={};_da.getCachedTemplate=function(_e3,_e4,doc){var _e5=_da._templateCache;var key=_e3;var _e6=_e5[key];if(_e6){try{if(!_e6.ownerDocument||_e6.ownerDocument==(doc||document)){return _e6;}}catch(e){}_d6.destroy(_e6);}_e3=_d8.trim(_e3);if(_e4||_e3.match(/\$\{([^\}]+)\}/g)){return (_e5[key]=_e3);}else{var _e7=_d6.toDom(_e3,doc);if(_e7.nodeType!=1){throw new Error("Invalid template: "+_e3);}return (_e5[key]=_e7);}};if(has("ie")){on(window,"unload",function(){var _e8=_da._templateCache;for(var key in _e8){var _e9=_e8[key];if(typeof _e9=="object"){_d6.destroy(_e9);}delete _e8[key];}});}return _da;});},"dojo/cache":function(){define(["./_base/kernel","./text"],function(_ea){return _ea.cache;});},"dojo/text":function(){define(["./_base/kernel","require","./has","./request"],function(_eb,_ec,has,_ed){var _ee;if(1){_ee=function(url,_ef,_f0){_ed(url,{sync:!!_ef,headers:{"X-Requested-With":null}}).then(_f0);};}else{if(_ec.getText){_ee=_ec.getText;}else{console.error("dojo/text plugin failed to load because loader does not support getText");}}var _f1={},_f2=function(_f3){if(_f3){_f3=_f3.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");var _f4=_f3.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);if(_f4){_f3=_f4[1];}}else{_f3="";}return _f3;},_f5={},_f6={};_eb.cache=function(_f7,url,_f8){var key;if(typeof _f7=="string"){if(/\//.test(_f7)){key=_f7;_f8=url;}else{key=_ec.toUrl(_f7.replace(/\./g,"/")+(url?("/"+url):""));}}else{key=_f7+"";_f8=url;}var val=(_f8!=undefined&&typeof _f8!="string")?_f8.value:_f8,_f9=_f8&&_f8.sanitize;if(typeof val=="string"){_f1[key]=val;return _f9?_f2(val):val;}else{if(val===null){delete _f1[key];return null;}else{if(!(key in _f1)){_ee(key,true,function(_fa){_f1[key]=_fa;});}return _f9?_f2(_f1[key]):_f1[key];}}};return {dynamic:true,normalize:function(id,_fb){var _fc=id.split("!"),url=_fc[0];return (/^\./.test(url)?_fb(url):url)+(_fc[1]?"!"+_fc[1]:"");},load:function(id,_fd,_fe){var _ff=id.split("!"),_100=_ff.length>1,_101=_ff[0],url=_fd.toUrl(_ff[0]),_102="url:"+url,text=_f5,_103=function(text){_fe(_100?_f2(text):text);};if(_101 in _f1){text=_f1[_101];}else{if(_fd.cache&&_102 in _fd.cache){text=_fd.cache[_102];}else{if(url in _f1){text=_f1[url];}}}if(text===_f5){if(_f6[url]){_f6[url].push(_103);}else{var _104=_f6[url]=[_103];_ee(url,!_fd.async,function(text){_f1[_101]=_f1[url]=text;for(var i=0;i<_104.length;){_104[i++](text);}delete _f6[url];});}}else{_103(text);}}};});},"dojo/request":function(){define(["./request/default!"],function(_105){return _105;});},"dojo/request/default":function(){define(["exports","require","../has"],function(_106,_107,has){var _108=has("config-requestProvider"),_109;if(1||has("host-webworker")){_109="./xhr";}else{if(0){_109="./node";}}if(!_108){_108=_109;}_106.getPlatformDefaultId=function(){return _109;};_106.load=function(id,_10a,_10b,_10c){_107([id=="platform"?_109:_108],function(_10d){_10b(_10d);});};});},"dojo/string":function(){define(["./_base/kernel","./_base/lang"],function(_10e,lang){var _10f=/[&<>'"\/]/g;var _110={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#x27;","/":"&#x2F;"};var _111={};lang.setObject("dojo.string",_111);_111.escape=function(str){if(!str){return "";}return str.replace(_10f,function(c){return _110[c];});};_111.rep=function(str,num){if(num<=0||!str){return "";}var buf=[];for(;;){if(num&1){buf.push(str);}if(!(num>>=1)){break;}str+=str;}return buf.join("");};_111.pad=function(text,size,ch,end){if(!ch){ch="0";}var out=String(text),pad=_111.rep(ch,Math.ceil((size-out.length)/ch.length));return end?out+pad:pad+out;};_111.substitute=function(_112,map,_113,_114){_114=_114||_10e.global;_113=_113?lang.hitch(_114,_113):function(v){return v;};return _112.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(_115,key,_116){var _117=lang.getObject(key,false,map);if(_116){_117=lang.getObject(_116,false,_114).call(_114,_117,key);}return _113(_117,key).toString();});};_111.trim=String.prototype.trim?lang.trim:function(str){str=str.replace(/^\s+/,"");for(var i=str.length-1;i>=0;i--){if(/\S/.test(str.charAt(i))){str=str.substring(0,i+1);break;}}return str;};return _111;});},"dijit/_AttachMixin":function(){define(["require","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/mouse","dojo/on","dojo/touch","./_WidgetBase"],function(_118,_119,_11a,_11b,lang,_11c,on,_11d,_11e){var _11f=lang.delegate(_11d,{"mouseenter":_11c.enter,"mouseleave":_11c.leave,"keypress":_11a._keypress});var _120;var _121=_11b("dijit._AttachMixin",null,{constructor:function(){this._attachPoints=[];this._attachEvents=[];},buildRendering:function(){this.inherited(arguments);this._attachTemplateNodes(this.domNode);this._beforeFillContent();},_beforeFillContent:function(){},_attachTemplateNodes:function(_122){var node=_122;while(true){if(node.nodeType==1&&(this._processTemplateNode(node,function(n,p){return n.getAttribute(p);},this._attach)||this.searchContainerNode)&&node.firstChild){node=node.firstChild;}else{if(node==_122){return;}while(!node.nextSibling){node=node.parentNode;if(node==_122){return;}}node=node.nextSibling;}}},_processTemplateNode:function(_123,_124,_125){var ret=true;var _126=this.attachScope||this,_127=_124(_123,"dojoAttachPoint")||_124(_123,"data-dojo-attach-point");if(_127){var _128,_129=_127.split(/\s*,\s*/);while((_128=_129.shift())){if(lang.isArray(_126[_128])){_126[_128].push(_123);}else{_126[_128]=_123;}ret=(_128!="containerNode");this._attachPoints.push(_128);}}var _12a=_124(_123,"dojoAttachEvent")||_124(_123,"data-dojo-attach-event");if(_12a){var _12b,_12c=_12a.split(/\s*,\s*/);var trim=lang.trim;while((_12b=_12c.shift())){if(_12b){var _12d=null;if(_12b.indexOf(":")!=-1){var _12e=_12b.split(":");_12b=trim(_12e[0]);_12d=trim(_12e[1]);}else{_12b=trim(_12b);}if(!_12d){_12d=_12b;}this._attachEvents.push(_125(_123,_12b,lang.hitch(_126,_12d)));}}}return ret;},_attach:function(node,type,func){type=type.replace(/^on/,"").toLowerCase();if(type=="dijitclick"){type=_120||(_120=_118("./a11yclick"));}else{type=_11f[type]||type;}return on(node,type,func);},_detachTemplateNodes:function(){var _12f=this.attachScope||this;_119.forEach(this._attachPoints,function(_130){delete _12f[_130];});this._attachPoints=[];_119.forEach(this._attachEvents,function(_131){_131.remove();});this._attachEvents=[];},destroyRendering:function(){this._detachTemplateNodes();this.inherited(arguments);}});lang.extend(_11e,{dojoAttachEvent:"",dojoAttachPoint:""});return _121;});},"dojo/touch":function(){define(["./_base/kernel","./aspect","./dom","./dom-class","./_base/lang","./on","./has","./mouse","./domReady","./_base/window"],function(dojo,_132,dom,_133,lang,on,has,_134,_135,win){var ios4=has("ios")<5;var _136=has("pointer-events")||has("MSPointer"),_137=(function(){var _138={};for(var type in {down:1,move:1,up:1,cancel:1,over:1,out:1}){_138[type]=has("MSPointer")?"MSPointer"+type.charAt(0).toUpperCase()+type.slice(1):"pointer"+type;}return _138;})();var _139=has("touch-events");var _13a,_13b,_13c=false,_13d,_13e,_13f,_140,_141,_142;var _143;function _144(_145,_146,_147){if(_136&&_147){return function(node,_148){return on(node,_147,_148);};}else{if(_139){return function(node,_149){var _14a=on(node,_146,function(evt){_149.call(this,evt);_143=(new Date()).getTime();}),_14b=on(node,_145,function(evt){if(!_143||(new Date()).getTime()>_143+1000){_149.call(this,evt);}});return {remove:function(){_14a.remove();_14b.remove();}};};}else{return function(node,_14c){return on(node,_145,_14c);};}}};function _14d(node){do{if(node.dojoClick!==undefined){return node;}}while(node=node.parentNode);};function _14e(e,_14f,_150){var _151=_14d(e.target);_13b=!e.target.disabled&&_151&&_151.dojoClick;if(_13b){_13c=(_13b=="useTarget");_13d=(_13c?_151:e.target);if(_13c){e.preventDefault();}_13e=e.changedTouches?e.changedTouches[0].pageX-win.global.pageXOffset:e.clientX;_13f=e.changedTouches?e.changedTouches[0].pageY-win.global.pageYOffset:e.clientY;_140=(typeof _13b=="object"?_13b.x:(typeof _13b=="number"?_13b:0))||4;_141=(typeof _13b=="object"?_13b.y:(typeof _13b=="number"?_13b:0))||4;if(!_13a){_13a=true;function _152(e){if(_13c){_13b=dom.isDescendant(win.doc.elementFromPoint((e.changedTouches?e.changedTouches[0].pageX-win.global.pageXOffset:e.clientX),(e.changedTouches?e.changedTouches[0].pageY-win.global.pageYOffset:e.clientY)),_13d);}else{_13b=_13b&&(e.changedTouches?e.changedTouches[0].target:e.target)==_13d&&Math.abs((e.changedTouches?e.changedTouches[0].pageX-win.global.pageXOffset:e.clientX)-_13e)<=_140&&Math.abs((e.changedTouches?e.changedTouches[0].pageY-win.global.pageYOffset:e.clientY)-_13f)<=_141;}};win.doc.addEventListener(_14f,function(e){_152(e);if(_13c){e.preventDefault();}},true);win.doc.addEventListener(_150,function(e){_152(e);if(_13b){_142=(new Date()).getTime();var _153=(_13c?_13d:e.target);if(_153.tagName==="LABEL"){_153=dom.byId(_153.getAttribute("for"))||_153;}var src=(e.changedTouches)?e.changedTouches[0]:e;var _154=document.createEvent("MouseEvents");_154._dojo_click=true;_154.initMouseEvent("click",true,true,e.view,e.detail,src.screenX,src.screenY,src.clientX,src.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);setTimeout(function(){on.emit(_153,"click",_154);_142=(new Date()).getTime();},0);}},true);function _155(type){win.doc.addEventListener(type,function(e){if(!e._dojo_click&&(new Date()).getTime()<=_142+1000&&!(e.target.tagName=="INPUT"&&_133.contains(e.target,"dijitOffScreen"))){e.stopPropagation();e.stopImmediatePropagation&&e.stopImmediatePropagation();if(type=="click"&&(e.target.tagName!="INPUT"||e.target.type=="radio"||e.target.type=="checkbox")&&e.target.tagName!="TEXTAREA"&&e.target.tagName!="AUDIO"&&e.target.tagName!="VIDEO"){e.preventDefault();}}},true);};_155("click");_155("mousedown");_155("mouseup");}}};var _156;if(_136){_135(function(){win.doc.addEventListener(_137.down,function(evt){_14e(evt,_137.move,_137.up);},true);});}else{if(_139){_135(function(){_156=win.body();win.doc.addEventListener("touchstart",function(evt){_143=(new Date()).getTime();var _157=_156;_156=evt.target;on.emit(_157,"dojotouchout",{relatedTarget:_156,bubbles:true});on.emit(_156,"dojotouchover",{relatedTarget:_157,bubbles:true});_14e(evt,"touchmove","touchend");},true);function _158(evt){var _159=lang.delegate(evt,{bubbles:true});if(has("ios")>=6){_159.touches=evt.touches;_159.altKey=evt.altKey;_159.changedTouches=evt.changedTouches;_159.ctrlKey=evt.ctrlKey;_159.metaKey=evt.metaKey;_159.shiftKey=evt.shiftKey;_159.targetTouches=evt.targetTouches;}return _159;};on(win.doc,"touchmove",function(evt){_143=(new Date()).getTime();var _15a=win.doc.elementFromPoint(evt.pageX-(ios4?0:win.global.pageXOffset),evt.pageY-(ios4?0:win.global.pageYOffset));if(_15a){if(_156!==_15a){on.emit(_156,"dojotouchout",{relatedTarget:_15a,bubbles:true});on.emit(_15a,"dojotouchover",{relatedTarget:_156,bubbles:true});_156=_15a;}if(!on.emit(_15a,"dojotouchmove",_158(evt))){evt.preventDefault();}}});on(win.doc,"touchend",function(evt){_143=(new Date()).getTime();var node=win.doc.elementFromPoint(evt.pageX-(ios4?0:win.global.pageXOffset),evt.pageY-(ios4?0:win.global.pageYOffset))||win.body();on.emit(node,"dojotouchend",_158(evt));});});}}var _15b={press:_144("mousedown","touchstart",_137.down),move:_144("mousemove","dojotouchmove",_137.move),release:_144("mouseup","dojotouchend",_137.up),cancel:_144(_134.leave,"touchcancel",_136?_137.cancel:null),over:_144("mouseover","dojotouchover",_137.over),out:_144("mouseout","dojotouchout",_137.out),enter:_134._eventHandler(_144("mouseover","dojotouchover",_137.over)),leave:_134._eventHandler(_144("mouseout","dojotouchout",_137.out))};1&&(dojo.touch=_15b);return _15b;});},"engine/widgets/newsView":function(){define(["dojo/_base/declare","dojo/_base/window","dojo/_base/lang","dojo/on","dojo/dom-style","dojo/dom-geometry","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/newsView.html",],function(_15c,win,lang,on,_15d,_15e,_15f,_160,_161){return _15c([_15f,_160],{templateString:_161,multimedia:null,_setMultimediaAttr:function(_162){if(!Array.isArray(_162)){return;}var _163="";for(var i in _162){if(!(_162[i].type=="image"&&_162[i].subtype=="xlarge")){continue;}_163="http://nytimes.com/"+_162[i].url;break;}if(_163){this.nodeImg.src=_163;}else{_15d.set(this.nodeImg.parentNode,"display","none");}},headline:null,_setHeadlineAttr:function(_164){if(!_164.main){return;}this.nodeTitle.innerHTML=_164.main;},setContentBlock:function(node,_165){if(_165){node.innerHTML=_165;_15d.set(node.parentNode,"display","block");}},lead_paragraph:null,_setLead_paragraphAttr:function(_166){this.setContentBlock(this.nodeLeadParagraph,_166);},snippet:null,_setSnippetAttr:function(_167){this.setContentBlock(this.nodeSnippet,_167);},source:null,_setSourceAttr:function(_168){this.setContentBlock(this.nodeSource,_168);},web_url:null,_setWeb_urlAttr:function(_169){this.setContentBlock(this.nodeWebUrl,_169);this.nodeWebUrl.href=_169;},widgetClose:function(){this.destroyRecursive();Engine.underlay.hide();},reposition:function(){var _16a=567;var _16b=_15e.position(Engine.containerContent,true);var _16c={width:_16a+"px",top:_16b.y+"px",height:_16b.h+"px"};var _16d=Math.floor((_16b.w-_16a)/2);if(_16d>0){_16c.left=_16d+"px";}else{_16c.left="0px";_16c.width="100%";}_15d.set(this.domNode,_16c);},postCreate:function(){this.reposition();var _16e=this;this.own(on(this.nodeCloseButton,"click",function(evt){_16e.widgetClose();}));this.own(on(win.doc,"keydown",function(evt){if(evt.keyCode==27){_16e.widgetClose();}}));this.own(on(win.global,"resize",function(evt){_16e.reposition();}));Engine.underlay.show();}});});},"url:engine/widgets/templates/newsThumb.html":"<div class=\"newsThumb\">\n\t<div class=\"thumb\">\n\t\t<img data-dojo-attach-point=\"nodeImg\" />\n\t</div>\n\t<div class=\"title\">\n\t\t<a href=\"javascript:void(0)\" data-dojo-attach-point=\"nodeTitle\"></a>\n\t</div>\n</div>","url:engine/widgets/templates/newsView.html":"<div class=\"newsView\">\n\t<div class=\"header\">\n\t\t<div data-dojo-attach-point=\"nodeCloseButton\" class=\"closeButton\"></div>\n\t</div>\n\t<div class=\"body\">\n\t\t<div class=\"title\">\n\t\t\t<span data-dojo-attach-point=\"nodeTitle\"></span>\n\t\t</div>\n\t\t<div class=\"multimedia\">\n\t\t\t<img data-dojo-attach-point=\"nodeImg\" />\n\t\t</div>\n\t\t<div class=\"content\">\n\t\t\t<div>\n\t\t\t\t<div class=\"label\">[lead_paragraph]</div>\n\t\t\t\t<div data-dojo-attach-point=\"nodeLeadParagraph\"></div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"label\">[snippet]</div>\n\t\t\t\t<div data-dojo-attach-point=\"nodeSnippet\"></div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"label\">[source]</div>\n\t\t\t\t<div data-dojo-attach-point=\"nodeSource\"></div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<div class=\"label\">[web_url]</div>\n\t\t\t\t<a data-dojo-attach-point=\"nodeWebUrl\" target=\"_blank\"></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}});require(["dojo/_base/event","dojo/request/xhr","dojo/request/script","dojo/io-query","dojo/ready","dojo/on","dojo/dom","dojo/dom-style","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dijit/registry","engine/widgets/newsThumb"],function(_16f,xhr,_170,_171,_172,on,dom,_173,_174,_175,_176,_177,_178){var _179="clicked",_17a="mobileSearchMode",_17b="active";dojo.global.Engine={containerContent:null,searchInput:null,nodeHeader:null,nodeSearch:null,nodeMenu:null,mobileButtonSearch:null,mobileButtonMenu:null,closeMobileSearch:function(){_174.remove(Engine.mobileButtonSearch,_179);_174.remove(Engine.nodeHeader,_17a);_174.remove(Engine.nodeSearch,_17b);},closeMobileMenu:function(){_174.remove(Engine.mobileButtonMenu,_179);_174.remove(Engine.nodeMenu,_17b);Engine.underlay.hide();},clearMobileHeader:function(){Engine.closeMobileSearch();Engine.closeMobileMenu();},init:function(){Engine.containerContent=dom.byId("containerMain");Engine.searchInput=dom.byId("inputSearchQuery");Engine.nodeHeader=dom.byId("nodeHeader");Engine.nodeSearch=dom.byId("nodeSearch");Engine.nodeMenu=dom.byId("nodeMenu");Engine.mobileButtonSearch=dom.byId("mobileButtonSearch");Engine.mobileButtonMenu=dom.byId("mobileButtonMenu");on(Engine.mobileButtonSearch,"click",function(evt){_174.toggle(Engine.mobileButtonSearch,_179);if(_174.contains(Engine.mobileButtonSearch,_179)){Engine.closeMobileMenu();_174.add(Engine.nodeHeader,_17a);_174.add(Engine.nodeSearch,_17b);}else{Engine.clearMobileHeader();}});on(Engine.mobileButtonMenu,"click",function(evt){_174.toggle(Engine.mobileButtonMenu,_179);if(_174.contains(Engine.mobileButtonMenu,_179)){Engine.closeMobileSearch();_174.add(Engine.nodeMenu,_17b);Engine.underlay.show();}else{Engine.clearMobileHeader();}});on(dom.byId("formSearchNews"),"submit",function(evt){_16f.stop(evt);var _17c=Engine.searchInput.value;if(!_17c){return;}var _17d={q:_17c,"api-key":"a3c14eca6cc1fcc9327663f1bb9d9666:7:72233434"};var _17e={query:_17c,fields:"title,multimedia,url","api-key":"a3c14eca6cc1fcc9327663f1bb9d9666:7:72233434"};var _17f=xhr.get("api_nytimes/svc/search/v2/articlesearch.json",{query:_17d,handleAs:"json"});_17f.then(function(data){Engine.renderNews(data);},function(err){});});},renderNews:function(data){if(!(data&&data.response&&data.response.docs)){return;}Engine.clearMobileHeader();_177.findWidgets(Engine.containerContent).forEach(function(_180){_180.destroyRecursive();});_175.empty(Engine.containerContent);for(var i in data.response.docs){new _178({entity:data.response.docs[i]}).placeAt(Engine.containerContent);}},underlay:function(){var _181;var _182=function(){var _183=_176.position(Engine.containerContent,true);var _184=_176.position("nodeFooter",true);_173.set(_181,{top:_183.y+"px",height:(_184.y+_184.h-_183.y)+"px"});};return {show:function(){if(_181){return;}_181=_175.create("div",{style:{position:"absolute",left:"0",width:"100%",zIndex:998,background:"transparent"}});_182();_175.place(_181,Engine.containerContent);var _185=_175.create("div",{style:{width:"100%",height:"100%",backgroundColor:"#4198D2",opacity:"0.5"}},_181);},hide:function(){if(_181){_175.destroy(_181);_181=null;}}};}()};_172(function(){Engine.init();});});