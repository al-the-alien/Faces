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
var G__30357__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30356 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__30356,(0),null);
var body = cljs.core.nthnext.call(null,vec__30356,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30358__i = 0, G__30358__a = new Array(arguments.length -  0);
while (G__30358__i < G__30358__a.length) {G__30358__a[G__30358__i] = arguments[G__30358__i + 0]; ++G__30358__i;}
  args = new cljs.core.IndexedSeq(G__30358__a,0);
} 
return G__30357__delegate.call(this,args);};
G__30357.cljs$lang$maxFixedArity = 0;
G__30357.cljs$lang$applyTo = (function (arglist__30359){
var args = cljs.core.seq(arglist__30359);
return G__30357__delegate(args);
});
G__30357.cljs$core$IFn$_invoke$arity$variadic = G__30357__delegate;
return G__30357;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__15200__auto__ = (function iter__30364(s__30365){
return (new cljs.core.LazySeq(null,(function (){
var s__30365__$1 = s__30365;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__30365__$1);
if(temp__4406__auto__){
var s__30365__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30365__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__30365__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__30367 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__30366 = (0);
while(true){
if((i__30366 < size__15199__auto__)){
var args = cljs.core._nth.call(null,c__15198__auto__,i__30366);
cljs.core.chunk_append.call(null,b__30367,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30368 = (i__30366 + (1));
i__30366 = G__30368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30367),iter__30364.call(null,cljs.core.chunk_rest.call(null,s__30365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30367),null);
}
} else {
var args = cljs.core.first.call(null,s__30365__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__30364.call(null,cljs.core.rest.call(null,s__30365__$2)));
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
var iter__15200__auto__ = (function iter__30373(s__30374){
return (new cljs.core.LazySeq(null,(function (){
var s__30374__$1 = s__30374;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__30374__$1);
if(temp__4406__auto__){
var s__30374__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30374__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__30374__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__30376 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__30375 = (0);
while(true){
if((i__30375 < size__15199__auto__)){
var style = cljs.core._nth.call(null,c__15198__auto__,i__30375);
cljs.core.chunk_append.call(null,b__30376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__30377 = (i__30375 + (1));
i__30375 = G__30377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30376),iter__30373.call(null,cljs.core.chunk_rest.call(null,s__30374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30376),null);
}
} else {
var style = cljs.core.first.call(null,s__30374__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__30373.call(null,cljs.core.rest.call(null,s__30374__$2)));
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
var G__30378__i = 0, G__30378__a = new Array(arguments.length -  0);
while (G__30378__i < G__30378__a.length) {G__30378__a[G__30378__i] = arguments[G__30378__i + 0]; ++G__30378__i;}
  styles = new cljs.core.IndexedSeq(G__30378__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__30379){
var styles = cljs.core.seq(arglist__30379);
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
sablono.core.link_to30380 = (function() { 
var link_to30380__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to30380 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__30381__i = 0, G__30381__a = new Array(arguments.length -  1);
while (G__30381__i < G__30381__a.length) {G__30381__a[G__30381__i] = arguments[G__30381__i + 1]; ++G__30381__i;}
  content = new cljs.core.IndexedSeq(G__30381__a,0);
} 
return link_to30380__delegate.call(this,url,content);};
link_to30380.cljs$lang$maxFixedArity = 1;
link_to30380.cljs$lang$applyTo = (function (arglist__30382){
var url = cljs.core.first(arglist__30382);
var content = cljs.core.rest(arglist__30382);
return link_to30380__delegate(url,content);
});
link_to30380.cljs$core$IFn$_invoke$arity$variadic = link_to30380__delegate;
return link_to30380;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30380);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to30383 = (function() { 
var mail_to30383__delegate = function (e_mail,p__30384){
var vec__30386 = p__30384;
var content = cljs.core.nth.call(null,vec__30386,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__14444__auto__ = content;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to30383 = function (e_mail,var_args){
var p__30384 = null;
if (arguments.length > 1) {
var G__30387__i = 0, G__30387__a = new Array(arguments.length -  1);
while (G__30387__i < G__30387__a.length) {G__30387__a[G__30387__i] = arguments[G__30387__i + 1]; ++G__30387__i;}
  p__30384 = new cljs.core.IndexedSeq(G__30387__a,0);
} 
return mail_to30383__delegate.call(this,e_mail,p__30384);};
mail_to30383.cljs$lang$maxFixedArity = 1;
mail_to30383.cljs$lang$applyTo = (function (arglist__30388){
var e_mail = cljs.core.first(arglist__30388);
var p__30384 = cljs.core.rest(arglist__30388);
return mail_to30383__delegate(e_mail,p__30384);
});
mail_to30383.cljs$core$IFn$_invoke$arity$variadic = mail_to30383__delegate;
return mail_to30383;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30383);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list30389 = (function unordered_list30389(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__15200__auto__ = (function iter__30394(s__30395){
return (new cljs.core.LazySeq(null,(function (){
var s__30395__$1 = s__30395;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__30395__$1);
if(temp__4406__auto__){
var s__30395__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30395__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__30395__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__30397 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__30396 = (0);
while(true){
if((i__30396 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__30396);
cljs.core.chunk_append.call(null,b__30397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30398 = (i__30396 + (1));
i__30396 = G__30398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30397),iter__30394.call(null,cljs.core.chunk_rest.call(null,s__30395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30397),null);
}
} else {
var x = cljs.core.first.call(null,s__30395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30394.call(null,cljs.core.rest.call(null,s__30395__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30389);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list30399 = (function ordered_list30399(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__15200__auto__ = (function iter__30404(s__30405){
return (new cljs.core.LazySeq(null,(function (){
var s__30405__$1 = s__30405;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__30405__$1);
if(temp__4406__auto__){
var s__30405__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30405__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__30405__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__30407 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__30406 = (0);
while(true){
if((i__30406 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__30406);
cljs.core.chunk_append.call(null,b__30407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30408 = (i__30406 + (1));
i__30406 = G__30408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30407),iter__30404.call(null,cljs.core.chunk_rest.call(null,s__30405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30407),null);
}
} else {
var x = cljs.core.first.call(null,s__30405__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30404.call(null,cljs.core.rest.call(null,s__30405__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30399);
/**
* Create an image element.
*/
sablono.core.image30409 = (function() {
var image30409 = null;
var image30409__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image30409__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image30409 = function(src,alt){
switch(arguments.length){
case 1:
return image30409__1.call(this,src);
case 2:
return image30409__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image30409.cljs$core$IFn$_invoke$arity$1 = image30409__1;
image30409.cljs$core$IFn$_invoke$arity$2 = image30409__2;
return image30409;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30409);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__30410_SHARP_,p2__30411_SHARP_){
return [cljs.core.str(p1__30410_SHARP_),cljs.core.str("["),cljs.core.str(p2__30411_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__30412_SHARP_,p2__30413_SHARP_){
return [cljs.core.str(p1__30412_SHARP_),cljs.core.str("-"),cljs.core.str(p2__30413_SHARP_)].join('');
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
sablono.core.color_field30414 = (function() {
var color_field30414 = null;
var color_field30414__1 = (function (name__15982__auto__){
return color_field30414.call(null,name__15982__auto__,null);
});
var color_field30414__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__15982__auto__,value__15983__auto__);
});
color_field30414 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return color_field30414__1.call(this,name__15982__auto__);
case 2:
return color_field30414__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field30414.cljs$core$IFn$_invoke$arity$1 = color_field30414__1;
color_field30414.cljs$core$IFn$_invoke$arity$2 = color_field30414__2;
return color_field30414;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30414);

/**
* Creates a date input field.
*/
sablono.core.date_field30415 = (function() {
var date_field30415 = null;
var date_field30415__1 = (function (name__15982__auto__){
return date_field30415.call(null,name__15982__auto__,null);
});
var date_field30415__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__15982__auto__,value__15983__auto__);
});
date_field30415 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return date_field30415__1.call(this,name__15982__auto__);
case 2:
return date_field30415__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field30415.cljs$core$IFn$_invoke$arity$1 = date_field30415__1;
date_field30415.cljs$core$IFn$_invoke$arity$2 = date_field30415__2;
return date_field30415;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30415);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field30416 = (function() {
var datetime_field30416 = null;
var datetime_field30416__1 = (function (name__15982__auto__){
return datetime_field30416.call(null,name__15982__auto__,null);
});
var datetime_field30416__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__15982__auto__,value__15983__auto__);
});
datetime_field30416 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return datetime_field30416__1.call(this,name__15982__auto__);
case 2:
return datetime_field30416__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field30416.cljs$core$IFn$_invoke$arity$1 = datetime_field30416__1;
datetime_field30416.cljs$core$IFn$_invoke$arity$2 = datetime_field30416__2;
return datetime_field30416;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30416);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field30417 = (function() {
var datetime_local_field30417 = null;
var datetime_local_field30417__1 = (function (name__15982__auto__){
return datetime_local_field30417.call(null,name__15982__auto__,null);
});
var datetime_local_field30417__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__15982__auto__,value__15983__auto__);
});
datetime_local_field30417 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return datetime_local_field30417__1.call(this,name__15982__auto__);
case 2:
return datetime_local_field30417__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field30417.cljs$core$IFn$_invoke$arity$1 = datetime_local_field30417__1;
datetime_local_field30417.cljs$core$IFn$_invoke$arity$2 = datetime_local_field30417__2;
return datetime_local_field30417;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30417);

/**
* Creates a email input field.
*/
sablono.core.email_field30418 = (function() {
var email_field30418 = null;
var email_field30418__1 = (function (name__15982__auto__){
return email_field30418.call(null,name__15982__auto__,null);
});
var email_field30418__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__15982__auto__,value__15983__auto__);
});
email_field30418 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return email_field30418__1.call(this,name__15982__auto__);
case 2:
return email_field30418__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field30418.cljs$core$IFn$_invoke$arity$1 = email_field30418__1;
email_field30418.cljs$core$IFn$_invoke$arity$2 = email_field30418__2;
return email_field30418;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30418);

/**
* Creates a file input field.
*/
sablono.core.file_field30419 = (function() {
var file_field30419 = null;
var file_field30419__1 = (function (name__15982__auto__){
return file_field30419.call(null,name__15982__auto__,null);
});
var file_field30419__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__15982__auto__,value__15983__auto__);
});
file_field30419 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return file_field30419__1.call(this,name__15982__auto__);
case 2:
return file_field30419__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field30419.cljs$core$IFn$_invoke$arity$1 = file_field30419__1;
file_field30419.cljs$core$IFn$_invoke$arity$2 = file_field30419__2;
return file_field30419;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30419);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field30420 = (function() {
var hidden_field30420 = null;
var hidden_field30420__1 = (function (name__15982__auto__){
return hidden_field30420.call(null,name__15982__auto__,null);
});
var hidden_field30420__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__15982__auto__,value__15983__auto__);
});
hidden_field30420 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return hidden_field30420__1.call(this,name__15982__auto__);
case 2:
return hidden_field30420__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field30420.cljs$core$IFn$_invoke$arity$1 = hidden_field30420__1;
hidden_field30420.cljs$core$IFn$_invoke$arity$2 = hidden_field30420__2;
return hidden_field30420;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30420);

/**
* Creates a month input field.
*/
sablono.core.month_field30421 = (function() {
var month_field30421 = null;
var month_field30421__1 = (function (name__15982__auto__){
return month_field30421.call(null,name__15982__auto__,null);
});
var month_field30421__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__15982__auto__,value__15983__auto__);
});
month_field30421 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return month_field30421__1.call(this,name__15982__auto__);
case 2:
return month_field30421__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field30421.cljs$core$IFn$_invoke$arity$1 = month_field30421__1;
month_field30421.cljs$core$IFn$_invoke$arity$2 = month_field30421__2;
return month_field30421;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30421);

/**
* Creates a number input field.
*/
sablono.core.number_field30422 = (function() {
var number_field30422 = null;
var number_field30422__1 = (function (name__15982__auto__){
return number_field30422.call(null,name__15982__auto__,null);
});
var number_field30422__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__15982__auto__,value__15983__auto__);
});
number_field30422 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return number_field30422__1.call(this,name__15982__auto__);
case 2:
return number_field30422__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field30422.cljs$core$IFn$_invoke$arity$1 = number_field30422__1;
number_field30422.cljs$core$IFn$_invoke$arity$2 = number_field30422__2;
return number_field30422;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30422);

/**
* Creates a password input field.
*/
sablono.core.password_field30423 = (function() {
var password_field30423 = null;
var password_field30423__1 = (function (name__15982__auto__){
return password_field30423.call(null,name__15982__auto__,null);
});
var password_field30423__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__15982__auto__,value__15983__auto__);
});
password_field30423 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return password_field30423__1.call(this,name__15982__auto__);
case 2:
return password_field30423__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field30423.cljs$core$IFn$_invoke$arity$1 = password_field30423__1;
password_field30423.cljs$core$IFn$_invoke$arity$2 = password_field30423__2;
return password_field30423;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30423);

/**
* Creates a range input field.
*/
sablono.core.range_field30424 = (function() {
var range_field30424 = null;
var range_field30424__1 = (function (name__15982__auto__){
return range_field30424.call(null,name__15982__auto__,null);
});
var range_field30424__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__15982__auto__,value__15983__auto__);
});
range_field30424 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return range_field30424__1.call(this,name__15982__auto__);
case 2:
return range_field30424__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field30424.cljs$core$IFn$_invoke$arity$1 = range_field30424__1;
range_field30424.cljs$core$IFn$_invoke$arity$2 = range_field30424__2;
return range_field30424;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30424);

/**
* Creates a search input field.
*/
sablono.core.search_field30425 = (function() {
var search_field30425 = null;
var search_field30425__1 = (function (name__15982__auto__){
return search_field30425.call(null,name__15982__auto__,null);
});
var search_field30425__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__15982__auto__,value__15983__auto__);
});
search_field30425 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return search_field30425__1.call(this,name__15982__auto__);
case 2:
return search_field30425__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field30425.cljs$core$IFn$_invoke$arity$1 = search_field30425__1;
search_field30425.cljs$core$IFn$_invoke$arity$2 = search_field30425__2;
return search_field30425;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30425);

/**
* Creates a tel input field.
*/
sablono.core.tel_field30426 = (function() {
var tel_field30426 = null;
var tel_field30426__1 = (function (name__15982__auto__){
return tel_field30426.call(null,name__15982__auto__,null);
});
var tel_field30426__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__15982__auto__,value__15983__auto__);
});
tel_field30426 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return tel_field30426__1.call(this,name__15982__auto__);
case 2:
return tel_field30426__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field30426.cljs$core$IFn$_invoke$arity$1 = tel_field30426__1;
tel_field30426.cljs$core$IFn$_invoke$arity$2 = tel_field30426__2;
return tel_field30426;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30426);

/**
* Creates a text input field.
*/
sablono.core.text_field30427 = (function() {
var text_field30427 = null;
var text_field30427__1 = (function (name__15982__auto__){
return text_field30427.call(null,name__15982__auto__,null);
});
var text_field30427__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__15982__auto__,value__15983__auto__);
});
text_field30427 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return text_field30427__1.call(this,name__15982__auto__);
case 2:
return text_field30427__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field30427.cljs$core$IFn$_invoke$arity$1 = text_field30427__1;
text_field30427.cljs$core$IFn$_invoke$arity$2 = text_field30427__2;
return text_field30427;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30427);

/**
* Creates a time input field.
*/
sablono.core.time_field30428 = (function() {
var time_field30428 = null;
var time_field30428__1 = (function (name__15982__auto__){
return time_field30428.call(null,name__15982__auto__,null);
});
var time_field30428__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__15982__auto__,value__15983__auto__);
});
time_field30428 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return time_field30428__1.call(this,name__15982__auto__);
case 2:
return time_field30428__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field30428.cljs$core$IFn$_invoke$arity$1 = time_field30428__1;
time_field30428.cljs$core$IFn$_invoke$arity$2 = time_field30428__2;
return time_field30428;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30428);

/**
* Creates a url input field.
*/
sablono.core.url_field30429 = (function() {
var url_field30429 = null;
var url_field30429__1 = (function (name__15982__auto__){
return url_field30429.call(null,name__15982__auto__,null);
});
var url_field30429__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__15982__auto__,value__15983__auto__);
});
url_field30429 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return url_field30429__1.call(this,name__15982__auto__);
case 2:
return url_field30429__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field30429.cljs$core$IFn$_invoke$arity$1 = url_field30429__1;
url_field30429.cljs$core$IFn$_invoke$arity$2 = url_field30429__2;
return url_field30429;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30429);

/**
* Creates a week input field.
*/
sablono.core.week_field30430 = (function() {
var week_field30430 = null;
var week_field30430__1 = (function (name__15982__auto__){
return week_field30430.call(null,name__15982__auto__,null);
});
var week_field30430__2 = (function (name__15982__auto__,value__15983__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__15982__auto__,value__15983__auto__);
});
week_field30430 = function(name__15982__auto__,value__15983__auto__){
switch(arguments.length){
case 1:
return week_field30430__1.call(this,name__15982__auto__);
case 2:
return week_field30430__2.call(this,name__15982__auto__,value__15983__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field30430.cljs$core$IFn$_invoke$arity$1 = week_field30430__1;
week_field30430.cljs$core$IFn$_invoke$arity$2 = week_field30430__2;
return week_field30430;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30430);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box30431 = (function() {
var check_box30431 = null;
var check_box30431__1 = (function (name){
return check_box30431.call(null,name,null);
});
var check_box30431__2 = (function (name,checked_QMARK_){
return check_box30431.call(null,name,checked_QMARK_,"true");
});
var check_box30431__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box30431 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box30431__1.call(this,name);
case 2:
return check_box30431__2.call(this,name,checked_QMARK_);
case 3:
return check_box30431__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box30431.cljs$core$IFn$_invoke$arity$1 = check_box30431__1;
check_box30431.cljs$core$IFn$_invoke$arity$2 = check_box30431__2;
check_box30431.cljs$core$IFn$_invoke$arity$3 = check_box30431__3;
return check_box30431;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30431);
/**
* Creates a radio button.
*/
sablono.core.radio_button30432 = (function() {
var radio_button30432 = null;
var radio_button30432__1 = (function (group){
return radio_button30432.call(null,group,null);
});
var radio_button30432__2 = (function (group,checked_QMARK_){
return radio_button30432.call(null,group,checked_QMARK_,"true");
});
var radio_button30432__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button30432 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button30432__1.call(this,group);
case 2:
return radio_button30432__2.call(this,group,checked_QMARK_);
case 3:
return radio_button30432__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button30432.cljs$core$IFn$_invoke$arity$1 = radio_button30432__1;
radio_button30432.cljs$core$IFn$_invoke$arity$2 = radio_button30432__2;
radio_button30432.cljs$core$IFn$_invoke$arity$3 = radio_button30432__3;
return radio_button30432;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30432);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options30433 = (function() {
var select_options30433 = null;
var select_options30433__1 = (function (coll){
return select_options30433.call(null,coll,null);
});
var select_options30433__2 = (function (coll,selected){
var iter__15200__auto__ = (function iter__30442(s__30443){
return (new cljs.core.LazySeq(null,(function (){
var s__30443__$1 = s__30443;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__30443__$1);
if(temp__4406__auto__){
var s__30443__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30443__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__30443__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__30445 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__30444 = (0);
while(true){
if((i__30444 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__30444);
cljs.core.chunk_append.call(null,b__30445,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30448 = x;
var text = cljs.core.nth.call(null,vec__30448,(0),null);
var val = cljs.core.nth.call(null,vec__30448,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30448,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30433.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__30450 = (i__30444 + (1));
i__30444 = G__30450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30445),iter__30442.call(null,cljs.core.chunk_rest.call(null,s__30443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30445),null);
}
} else {
var x = cljs.core.first.call(null,s__30443__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30449 = x;
var text = cljs.core.nth.call(null,vec__30449,(0),null);
var val = cljs.core.nth.call(null,vec__30449,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30449,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30433.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__30442.call(null,cljs.core.rest.call(null,s__30443__$2)));
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
select_options30433 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options30433__1.call(this,coll);
case 2:
return select_options30433__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options30433.cljs$core$IFn$_invoke$arity$1 = select_options30433__1;
select_options30433.cljs$core$IFn$_invoke$arity$2 = select_options30433__2;
return select_options30433;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30433);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down30451 = (function() {
var drop_down30451 = null;
var drop_down30451__2 = (function (name,options){
return drop_down30451.call(null,name,options,null);
});
var drop_down30451__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down30451 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down30451__2.call(this,name,options);
case 3:
return drop_down30451__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down30451.cljs$core$IFn$_invoke$arity$2 = drop_down30451__2;
drop_down30451.cljs$core$IFn$_invoke$arity$3 = drop_down30451__3;
return drop_down30451;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30451);
/**
* Creates a text area element.
*/
sablono.core.text_area30452 = (function() {
var text_area30452 = null;
var text_area30452__1 = (function (name){
return text_area30452.call(null,name,null);
});
var text_area30452__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area30452 = function(name,value){
switch(arguments.length){
case 1:
return text_area30452__1.call(this,name);
case 2:
return text_area30452__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area30452.cljs$core$IFn$_invoke$arity$1 = text_area30452__1;
text_area30452.cljs$core$IFn$_invoke$arity$2 = text_area30452__2;
return text_area30452;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30452);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label30453 = (function label30453(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30453);
/**
* Creates a submit button.
*/
sablono.core.submit_button30454 = (function submit_button30454(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30454);
/**
* Creates a form reset button.
*/
sablono.core.reset_button30455 = (function reset_button30455(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30455);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to30456 = (function() { 
var form_to30456__delegate = function (p__30457,body){
var vec__30459 = p__30457;
var method = cljs.core.nth.call(null,vec__30459,(0),null);
var action = cljs.core.nth.call(null,vec__30459,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to30456 = function (p__30457,var_args){
var body = null;
if (arguments.length > 1) {
var G__30460__i = 0, G__30460__a = new Array(arguments.length -  1);
while (G__30460__i < G__30460__a.length) {G__30460__a[G__30460__i] = arguments[G__30460__i + 1]; ++G__30460__i;}
  body = new cljs.core.IndexedSeq(G__30460__a,0);
} 
return form_to30456__delegate.call(this,p__30457,body);};
form_to30456.cljs$lang$maxFixedArity = 1;
form_to30456.cljs$lang$applyTo = (function (arglist__30461){
var p__30457 = cljs.core.first(arglist__30461);
var body = cljs.core.rest(arglist__30461);
return form_to30456__delegate(p__30457,body);
});
form_to30456.cljs$core$IFn$_invoke$arity$variadic = form_to30456__delegate;
return form_to30456;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30456);

//# sourceMappingURL=core.js.map