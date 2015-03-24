// Compiled by ClojureScript 0.0-2816 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__33359__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33358 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__33358,(0),null);
var body = cljs.core.nthnext.call(null,vec__33358,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33360__i = 0, G__33360__a = new Array(arguments.length -  0);
while (G__33360__i < G__33360__a.length) {G__33360__a[G__33360__i] = arguments[G__33360__i + 0]; ++G__33360__i;}
  args = new cljs.core.IndexedSeq(G__33360__a,0);
} 
return G__33359__delegate.call(this,args);};
G__33359.cljs$lang$maxFixedArity = 0;
G__33359.cljs$lang$applyTo = (function (arglist__33361){
var args = cljs.core.seq(arglist__33361);
return G__33359__delegate(args);
});
G__33359.cljs$core$IFn$_invoke$arity$variadic = G__33359__delegate;
return G__33359;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__15200__auto__ = (function iter__33366(s__33367){
return (new cljs.core.LazySeq(null,(function (){
var s__33367__$1 = s__33367;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__33367__$1);
if(temp__4406__auto__){
var s__33367__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33367__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__33367__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__33369 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__33368 = (0);
while(true){
if((i__33368 < size__15199__auto__)){
var args = cljs.core._nth.call(null,c__15198__auto__,i__33368);
cljs.core.chunk_append.call(null,b__33369,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33370 = (i__33368 + (1));
i__33368 = G__33370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33369),iter__33366.call(null,cljs.core.chunk_rest.call(null,s__33367__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33369),null);
}
} else {
var args = cljs.core.first.call(null,s__33367__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__33366.call(null,cljs.core.rest.call(null,s__33367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__15200__auto__ = (function iter__33375(s__33376){
return (new cljs.core.LazySeq(null,(function (){
var s__33376__$1 = s__33376;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__33376__$1);
if(temp__4406__auto__){
var s__33376__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33376__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__33376__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__33378 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__33377 = (0);
while(true){
if((i__33377 < size__15199__auto__)){
var style = cljs.core._nth.call(null,c__15198__auto__,i__33377);
cljs.core.chunk_append.call(null,b__33378,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33379 = (i__33377 + (1));
i__33377 = G__33379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33378),iter__33375.call(null,cljs.core.chunk_rest.call(null,s__33376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33378),null);
}
} else {
var style = cljs.core.first.call(null,s__33376__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__33375.call(null,cljs.core.rest.call(null,s__33376__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__33380__i = 0, G__33380__a = new Array(arguments.length -  0);
while (G__33380__i < G__33380__a.length) {G__33380__a[G__33380__i] = arguments[G__33380__i + 0]; ++G__33380__i;}
  styles = new cljs.core.IndexedSeq(G__33380__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__33381){
var styles = cljs.core.seq(arglist__33381);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to33382 = (function() { 
var link_to33382__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to33382 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__33383__i = 0, G__33383__a = new Array(arguments.length -  1);
while (G__33383__i < G__33383__a.length) {G__33383__a[G__33383__i] = arguments[G__33383__i + 1]; ++G__33383__i;}
  content = new cljs.core.IndexedSeq(G__33383__a,0);
} 
return link_to33382__delegate.call(this,url,content);};
link_to33382.cljs$lang$maxFixedArity = 1;
link_to33382.cljs$lang$applyTo = (function (arglist__33384){
var url = cljs.core.first(arglist__33384);
var content = cljs.core.rest(arglist__33384);
return link_to33382__delegate(url,content);
});
link_to33382.cljs$core$IFn$_invoke$arity$variadic = link_to33382__delegate;
return link_to33382;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33382);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to33385 = (function() { 
var mail_to33385__delegate = function (e_mail,p__33386){
var vec__33388 = p__33386;
var content = cljs.core.nth.call(null,vec__33388,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__14444__auto__ = content;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to33385 = function (e_mail,var_args){
var p__33386 = null;
if (arguments.length > 1) {
var G__33389__i = 0, G__33389__a = new Array(arguments.length -  1);
while (G__33389__i < G__33389__a.length) {G__33389__a[G__33389__i] = arguments[G__33389__i + 1]; ++G__33389__i;}
  p__33386 = new cljs.core.IndexedSeq(G__33389__a,0);
} 
return mail_to33385__delegate.call(this,e_mail,p__33386);};
mail_to33385.cljs$lang$maxFixedArity = 1;
mail_to33385.cljs$lang$applyTo = (function (arglist__33390){
var e_mail = cljs.core.first(arglist__33390);
var p__33386 = cljs.core.rest(arglist__33390);
return mail_to33385__delegate(e_mail,p__33386);
});
mail_to33385.cljs$core$IFn$_invoke$arity$variadic = mail_to33385__delegate;
return mail_to33385;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33385);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list33391 = (function unordered_list33391(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__15200__auto__ = (function iter__33396(s__33397){
return (new cljs.core.LazySeq(null,(function (){
var s__33397__$1 = s__33397;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__33397__$1);
if(temp__4406__auto__){
var s__33397__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33397__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__33397__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__33399 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__33398 = (0);
while(true){
if((i__33398 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__33398);
cljs.core.chunk_append.call(null,b__33399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33400 = (i__33398 + (1));
i__33398 = G__33400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33399),iter__33396.call(null,cljs.core.chunk_rest.call(null,s__33397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33399),null);
}
} else {
var x = cljs.core.first.call(null,s__33397__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__33396.call(null,cljs.core.rest.call(null,s__33397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33391);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list33401 = (function ordered_list33401(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__15200__auto__ = (function iter__33406(s__33407){
return (new cljs.core.LazySeq(null,(function (){
var s__33407__$1 = s__33407;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__33407__$1);
if(temp__4406__auto__){
var s__33407__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33407__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__33407__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__33409 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__33408 = (0);
while(true){
if((i__33408 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__33408);
cljs.core.chunk_append.call(null,b__33409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33410 = (i__33408 + (1));
i__33408 = G__33410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33409),iter__33406.call(null,cljs.core.chunk_rest.call(null,s__33407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33409),null);
}
} else {
var x = cljs.core.first.call(null,s__33407__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__33406.call(null,cljs.core.rest.call(null,s__33407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33401);
/**
* Create an image element.
*/
sablono.core.image33411 = (function() {
var image33411 = null;
var image33411__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image33411__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image33411 = function(src,alt){
switch(arguments.length){
case 1:
return image33411__1.call(this,src);
case 2:
return image33411__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image33411.cljs$core$IFn$_invoke$arity$1 = image33411__1;
image33411.cljs$core$IFn$_invoke$arity$2 = image33411__2;
return image33411;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33411);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__33412_SHARP_,p2__33413_SHARP_){
return [cljs.core.str(p1__33412_SHARP_),cljs.core.str("["),cljs.core.str(p2__33413_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__33414_SHARP_,p2__33415_SHARP_){
return [cljs.core.str(p1__33414_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33415_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field33416 = (function() {
var color_field33416 = null;
var color_field33416__1 = (function (name__20606__auto__){
return color_field33416.call(null,name__20606__auto__,null);
});
var color_field33416__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__20606__auto__,value__20607__auto__);
});
color_field33416 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return color_field33416__1.call(this,name__20606__auto__);
case 2:
return color_field33416__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field33416.cljs$core$IFn$_invoke$arity$1 = color_field33416__1;
color_field33416.cljs$core$IFn$_invoke$arity$2 = color_field33416__2;
return color_field33416;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33416);

/**
* Creates a date input field.
*/
sablono.core.date_field33417 = (function() {
var date_field33417 = null;
var date_field33417__1 = (function (name__20606__auto__){
return date_field33417.call(null,name__20606__auto__,null);
});
var date_field33417__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__20606__auto__,value__20607__auto__);
});
date_field33417 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return date_field33417__1.call(this,name__20606__auto__);
case 2:
return date_field33417__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field33417.cljs$core$IFn$_invoke$arity$1 = date_field33417__1;
date_field33417.cljs$core$IFn$_invoke$arity$2 = date_field33417__2;
return date_field33417;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33417);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field33418 = (function() {
var datetime_field33418 = null;
var datetime_field33418__1 = (function (name__20606__auto__){
return datetime_field33418.call(null,name__20606__auto__,null);
});
var datetime_field33418__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__20606__auto__,value__20607__auto__);
});
datetime_field33418 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return datetime_field33418__1.call(this,name__20606__auto__);
case 2:
return datetime_field33418__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field33418.cljs$core$IFn$_invoke$arity$1 = datetime_field33418__1;
datetime_field33418.cljs$core$IFn$_invoke$arity$2 = datetime_field33418__2;
return datetime_field33418;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33418);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field33419 = (function() {
var datetime_local_field33419 = null;
var datetime_local_field33419__1 = (function (name__20606__auto__){
return datetime_local_field33419.call(null,name__20606__auto__,null);
});
var datetime_local_field33419__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__20606__auto__,value__20607__auto__);
});
datetime_local_field33419 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return datetime_local_field33419__1.call(this,name__20606__auto__);
case 2:
return datetime_local_field33419__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field33419.cljs$core$IFn$_invoke$arity$1 = datetime_local_field33419__1;
datetime_local_field33419.cljs$core$IFn$_invoke$arity$2 = datetime_local_field33419__2;
return datetime_local_field33419;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33419);

/**
* Creates a email input field.
*/
sablono.core.email_field33420 = (function() {
var email_field33420 = null;
var email_field33420__1 = (function (name__20606__auto__){
return email_field33420.call(null,name__20606__auto__,null);
});
var email_field33420__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__20606__auto__,value__20607__auto__);
});
email_field33420 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return email_field33420__1.call(this,name__20606__auto__);
case 2:
return email_field33420__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field33420.cljs$core$IFn$_invoke$arity$1 = email_field33420__1;
email_field33420.cljs$core$IFn$_invoke$arity$2 = email_field33420__2;
return email_field33420;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33420);

/**
* Creates a file input field.
*/
sablono.core.file_field33421 = (function() {
var file_field33421 = null;
var file_field33421__1 = (function (name__20606__auto__){
return file_field33421.call(null,name__20606__auto__,null);
});
var file_field33421__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__20606__auto__,value__20607__auto__);
});
file_field33421 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return file_field33421__1.call(this,name__20606__auto__);
case 2:
return file_field33421__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field33421.cljs$core$IFn$_invoke$arity$1 = file_field33421__1;
file_field33421.cljs$core$IFn$_invoke$arity$2 = file_field33421__2;
return file_field33421;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33421);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field33422 = (function() {
var hidden_field33422 = null;
var hidden_field33422__1 = (function (name__20606__auto__){
return hidden_field33422.call(null,name__20606__auto__,null);
});
var hidden_field33422__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__20606__auto__,value__20607__auto__);
});
hidden_field33422 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return hidden_field33422__1.call(this,name__20606__auto__);
case 2:
return hidden_field33422__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field33422.cljs$core$IFn$_invoke$arity$1 = hidden_field33422__1;
hidden_field33422.cljs$core$IFn$_invoke$arity$2 = hidden_field33422__2;
return hidden_field33422;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33422);

/**
* Creates a month input field.
*/
sablono.core.month_field33423 = (function() {
var month_field33423 = null;
var month_field33423__1 = (function (name__20606__auto__){
return month_field33423.call(null,name__20606__auto__,null);
});
var month_field33423__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__20606__auto__,value__20607__auto__);
});
month_field33423 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return month_field33423__1.call(this,name__20606__auto__);
case 2:
return month_field33423__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field33423.cljs$core$IFn$_invoke$arity$1 = month_field33423__1;
month_field33423.cljs$core$IFn$_invoke$arity$2 = month_field33423__2;
return month_field33423;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33423);

/**
* Creates a number input field.
*/
sablono.core.number_field33424 = (function() {
var number_field33424 = null;
var number_field33424__1 = (function (name__20606__auto__){
return number_field33424.call(null,name__20606__auto__,null);
});
var number_field33424__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__20606__auto__,value__20607__auto__);
});
number_field33424 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return number_field33424__1.call(this,name__20606__auto__);
case 2:
return number_field33424__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field33424.cljs$core$IFn$_invoke$arity$1 = number_field33424__1;
number_field33424.cljs$core$IFn$_invoke$arity$2 = number_field33424__2;
return number_field33424;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33424);

/**
* Creates a password input field.
*/
sablono.core.password_field33425 = (function() {
var password_field33425 = null;
var password_field33425__1 = (function (name__20606__auto__){
return password_field33425.call(null,name__20606__auto__,null);
});
var password_field33425__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__20606__auto__,value__20607__auto__);
});
password_field33425 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return password_field33425__1.call(this,name__20606__auto__);
case 2:
return password_field33425__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field33425.cljs$core$IFn$_invoke$arity$1 = password_field33425__1;
password_field33425.cljs$core$IFn$_invoke$arity$2 = password_field33425__2;
return password_field33425;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33425);

/**
* Creates a range input field.
*/
sablono.core.range_field33426 = (function() {
var range_field33426 = null;
var range_field33426__1 = (function (name__20606__auto__){
return range_field33426.call(null,name__20606__auto__,null);
});
var range_field33426__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__20606__auto__,value__20607__auto__);
});
range_field33426 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return range_field33426__1.call(this,name__20606__auto__);
case 2:
return range_field33426__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field33426.cljs$core$IFn$_invoke$arity$1 = range_field33426__1;
range_field33426.cljs$core$IFn$_invoke$arity$2 = range_field33426__2;
return range_field33426;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33426);

/**
* Creates a search input field.
*/
sablono.core.search_field33427 = (function() {
var search_field33427 = null;
var search_field33427__1 = (function (name__20606__auto__){
return search_field33427.call(null,name__20606__auto__,null);
});
var search_field33427__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__20606__auto__,value__20607__auto__);
});
search_field33427 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return search_field33427__1.call(this,name__20606__auto__);
case 2:
return search_field33427__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field33427.cljs$core$IFn$_invoke$arity$1 = search_field33427__1;
search_field33427.cljs$core$IFn$_invoke$arity$2 = search_field33427__2;
return search_field33427;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33427);

/**
* Creates a tel input field.
*/
sablono.core.tel_field33428 = (function() {
var tel_field33428 = null;
var tel_field33428__1 = (function (name__20606__auto__){
return tel_field33428.call(null,name__20606__auto__,null);
});
var tel_field33428__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__20606__auto__,value__20607__auto__);
});
tel_field33428 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return tel_field33428__1.call(this,name__20606__auto__);
case 2:
return tel_field33428__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field33428.cljs$core$IFn$_invoke$arity$1 = tel_field33428__1;
tel_field33428.cljs$core$IFn$_invoke$arity$2 = tel_field33428__2;
return tel_field33428;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33428);

/**
* Creates a text input field.
*/
sablono.core.text_field33429 = (function() {
var text_field33429 = null;
var text_field33429__1 = (function (name__20606__auto__){
return text_field33429.call(null,name__20606__auto__,null);
});
var text_field33429__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__20606__auto__,value__20607__auto__);
});
text_field33429 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return text_field33429__1.call(this,name__20606__auto__);
case 2:
return text_field33429__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field33429.cljs$core$IFn$_invoke$arity$1 = text_field33429__1;
text_field33429.cljs$core$IFn$_invoke$arity$2 = text_field33429__2;
return text_field33429;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33429);

/**
* Creates a time input field.
*/
sablono.core.time_field33430 = (function() {
var time_field33430 = null;
var time_field33430__1 = (function (name__20606__auto__){
return time_field33430.call(null,name__20606__auto__,null);
});
var time_field33430__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__20606__auto__,value__20607__auto__);
});
time_field33430 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return time_field33430__1.call(this,name__20606__auto__);
case 2:
return time_field33430__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field33430.cljs$core$IFn$_invoke$arity$1 = time_field33430__1;
time_field33430.cljs$core$IFn$_invoke$arity$2 = time_field33430__2;
return time_field33430;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33430);

/**
* Creates a url input field.
*/
sablono.core.url_field33431 = (function() {
var url_field33431 = null;
var url_field33431__1 = (function (name__20606__auto__){
return url_field33431.call(null,name__20606__auto__,null);
});
var url_field33431__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__20606__auto__,value__20607__auto__);
});
url_field33431 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return url_field33431__1.call(this,name__20606__auto__);
case 2:
return url_field33431__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field33431.cljs$core$IFn$_invoke$arity$1 = url_field33431__1;
url_field33431.cljs$core$IFn$_invoke$arity$2 = url_field33431__2;
return url_field33431;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33431);

/**
* Creates a week input field.
*/
sablono.core.week_field33432 = (function() {
var week_field33432 = null;
var week_field33432__1 = (function (name__20606__auto__){
return week_field33432.call(null,name__20606__auto__,null);
});
var week_field33432__2 = (function (name__20606__auto__,value__20607__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__20606__auto__,value__20607__auto__);
});
week_field33432 = function(name__20606__auto__,value__20607__auto__){
switch(arguments.length){
case 1:
return week_field33432__1.call(this,name__20606__auto__);
case 2:
return week_field33432__2.call(this,name__20606__auto__,value__20607__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field33432.cljs$core$IFn$_invoke$arity$1 = week_field33432__1;
week_field33432.cljs$core$IFn$_invoke$arity$2 = week_field33432__2;
return week_field33432;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33432);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box33433 = (function() {
var check_box33433 = null;
var check_box33433__1 = (function (name){
return check_box33433.call(null,name,null);
});
var check_box33433__2 = (function (name,checked_QMARK_){
return check_box33433.call(null,name,checked_QMARK_,"true");
});
var check_box33433__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box33433 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box33433__1.call(this,name);
case 2:
return check_box33433__2.call(this,name,checked_QMARK_);
case 3:
return check_box33433__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box33433.cljs$core$IFn$_invoke$arity$1 = check_box33433__1;
check_box33433.cljs$core$IFn$_invoke$arity$2 = check_box33433__2;
check_box33433.cljs$core$IFn$_invoke$arity$3 = check_box33433__3;
return check_box33433;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33433);
/**
* Creates a radio button.
*/
sablono.core.radio_button33434 = (function() {
var radio_button33434 = null;
var radio_button33434__1 = (function (group){
return radio_button33434.call(null,group,null);
});
var radio_button33434__2 = (function (group,checked_QMARK_){
return radio_button33434.call(null,group,checked_QMARK_,"true");
});
var radio_button33434__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button33434 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button33434__1.call(this,group);
case 2:
return radio_button33434__2.call(this,group,checked_QMARK_);
case 3:
return radio_button33434__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button33434.cljs$core$IFn$_invoke$arity$1 = radio_button33434__1;
radio_button33434.cljs$core$IFn$_invoke$arity$2 = radio_button33434__2;
radio_button33434.cljs$core$IFn$_invoke$arity$3 = radio_button33434__3;
return radio_button33434;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33434);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options33435 = (function() {
var select_options33435 = null;
var select_options33435__1 = (function (coll){
return select_options33435.call(null,coll,null);
});
var select_options33435__2 = (function (coll,selected){
var iter__15200__auto__ = (function iter__33444(s__33445){
return (new cljs.core.LazySeq(null,(function (){
var s__33445__$1 = s__33445;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__33445__$1);
if(temp__4406__auto__){
var s__33445__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33445__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__33445__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__33447 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__33446 = (0);
while(true){
if((i__33446 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__33446);
cljs.core.chunk_append.call(null,b__33447,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33450 = x;
var text = cljs.core.nth.call(null,vec__33450,(0),null);
var val = cljs.core.nth.call(null,vec__33450,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33450,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options33435.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__33452 = (i__33446 + (1));
i__33446 = G__33452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33447),iter__33444.call(null,cljs.core.chunk_rest.call(null,s__33445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33447),null);
}
} else {
var x = cljs.core.first.call(null,s__33445__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33451 = x;
var text = cljs.core.nth.call(null,vec__33451,(0),null);
var val = cljs.core.nth.call(null,vec__33451,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33451,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options33435.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__33444.call(null,cljs.core.rest.call(null,s__33445__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,coll);
});
select_options33435 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options33435__1.call(this,coll);
case 2:
return select_options33435__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options33435.cljs$core$IFn$_invoke$arity$1 = select_options33435__1;
select_options33435.cljs$core$IFn$_invoke$arity$2 = select_options33435__2;
return select_options33435;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33435);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down33453 = (function() {
var drop_down33453 = null;
var drop_down33453__2 = (function (name,options){
return drop_down33453.call(null,name,options,null);
});
var drop_down33453__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down33453 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down33453__2.call(this,name,options);
case 3:
return drop_down33453__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down33453.cljs$core$IFn$_invoke$arity$2 = drop_down33453__2;
drop_down33453.cljs$core$IFn$_invoke$arity$3 = drop_down33453__3;
return drop_down33453;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33453);
/**
* Creates a text area element.
*/
sablono.core.text_area33454 = (function() {
var text_area33454 = null;
var text_area33454__1 = (function (name){
return text_area33454.call(null,name,null);
});
var text_area33454__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area33454 = function(name,value){
switch(arguments.length){
case 1:
return text_area33454__1.call(this,name);
case 2:
return text_area33454__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area33454.cljs$core$IFn$_invoke$arity$1 = text_area33454__1;
text_area33454.cljs$core$IFn$_invoke$arity$2 = text_area33454__2;
return text_area33454;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33454);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label33455 = (function label33455(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33455);
/**
* Creates a submit button.
*/
sablono.core.submit_button33456 = (function submit_button33456(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33456);
/**
* Creates a form reset button.
*/
sablono.core.reset_button33457 = (function reset_button33457(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33457);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to33458 = (function() { 
var form_to33458__delegate = function (p__33459,body){
var vec__33461 = p__33459;
var method = cljs.core.nth.call(null,vec__33461,(0),null);
var action = cljs.core.nth.call(null,vec__33461,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to33458 = function (p__33459,var_args){
var body = null;
if (arguments.length > 1) {
var G__33462__i = 0, G__33462__a = new Array(arguments.length -  1);
while (G__33462__i < G__33462__a.length) {G__33462__a[G__33462__i] = arguments[G__33462__i + 1]; ++G__33462__i;}
  body = new cljs.core.IndexedSeq(G__33462__a,0);
} 
return form_to33458__delegate.call(this,p__33459,body);};
form_to33458.cljs$lang$maxFixedArity = 1;
form_to33458.cljs$lang$applyTo = (function (arglist__33463){
var p__33459 = cljs.core.first(arglist__33463);
var body = cljs.core.rest(arglist__33463);
return form_to33458__delegate(p__33459,body);
});
form_to33458.cljs$core$IFn$_invoke$arity$variadic = form_to33458__delegate;
return form_to33458;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33458);

//# sourceMappingURL=core.js.map