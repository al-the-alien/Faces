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
var G__35855__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__35854 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__35854,(0),null);
var body = cljs.core.nthnext.call(null,vec__35854,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__35855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35856__i = 0, G__35856__a = new Array(arguments.length -  0);
while (G__35856__i < G__35856__a.length) {G__35856__a[G__35856__i] = arguments[G__35856__i + 0]; ++G__35856__i;}
  args = new cljs.core.IndexedSeq(G__35856__a,0);
} 
return G__35855__delegate.call(this,args);};
G__35855.cljs$lang$maxFixedArity = 0;
G__35855.cljs$lang$applyTo = (function (arglist__35857){
var args = cljs.core.seq(arglist__35857);
return G__35855__delegate(args);
});
G__35855.cljs$core$IFn$_invoke$arity$variadic = G__35855__delegate;
return G__35855;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__11697__auto__ = (function iter__35862(s__35863){
return (new cljs.core.LazySeq(null,(function (){
var s__35863__$1 = s__35863;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35863__$1);
if(temp__4406__auto__){
var s__35863__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35863__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__35863__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__35865 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__35864 = (0);
while(true){
if((i__35864 < size__11696__auto__)){
var args = cljs.core._nth.call(null,c__11695__auto__,i__35864);
cljs.core.chunk_append.call(null,b__35865,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35866 = (i__35864 + (1));
i__35864 = G__35866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35865),iter__35862.call(null,cljs.core.chunk_rest.call(null,s__35863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35865),null);
}
} else {
var args = cljs.core.first.call(null,s__35863__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__35862.call(null,cljs.core.rest.call(null,s__35863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,arglists);
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
var iter__11697__auto__ = (function iter__35871(s__35872){
return (new cljs.core.LazySeq(null,(function (){
var s__35872__$1 = s__35872;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35872__$1);
if(temp__4406__auto__){
var s__35872__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35872__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__35872__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__35874 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__35873 = (0);
while(true){
if((i__35873 < size__11696__auto__)){
var style = cljs.core._nth.call(null,c__11695__auto__,i__35873);
cljs.core.chunk_append.call(null,b__35874,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35875 = (i__35873 + (1));
i__35873 = G__35875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35874),iter__35871.call(null,cljs.core.chunk_rest.call(null,s__35872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35874),null);
}
} else {
var style = cljs.core.first.call(null,s__35872__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__35871.call(null,cljs.core.rest.call(null,s__35872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__35876__i = 0, G__35876__a = new Array(arguments.length -  0);
while (G__35876__i < G__35876__a.length) {G__35876__a[G__35876__i] = arguments[G__35876__i + 0]; ++G__35876__i;}
  styles = new cljs.core.IndexedSeq(G__35876__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__35877){
var styles = cljs.core.seq(arglist__35877);
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
sablono.core.link_to35878 = (function() { 
var link_to35878__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to35878 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__35879__i = 0, G__35879__a = new Array(arguments.length -  1);
while (G__35879__i < G__35879__a.length) {G__35879__a[G__35879__i] = arguments[G__35879__i + 1]; ++G__35879__i;}
  content = new cljs.core.IndexedSeq(G__35879__a,0);
} 
return link_to35878__delegate.call(this,url,content);};
link_to35878.cljs$lang$maxFixedArity = 1;
link_to35878.cljs$lang$applyTo = (function (arglist__35880){
var url = cljs.core.first(arglist__35880);
var content = cljs.core.rest(arglist__35880);
return link_to35878__delegate(url,content);
});
link_to35878.cljs$core$IFn$_invoke$arity$variadic = link_to35878__delegate;
return link_to35878;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to35878);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to35881 = (function() { 
var mail_to35881__delegate = function (e_mail,p__35882){
var vec__35884 = p__35882;
var content = cljs.core.nth.call(null,vec__35884,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__10941__auto__ = content;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to35881 = function (e_mail,var_args){
var p__35882 = null;
if (arguments.length > 1) {
var G__35885__i = 0, G__35885__a = new Array(arguments.length -  1);
while (G__35885__i < G__35885__a.length) {G__35885__a[G__35885__i] = arguments[G__35885__i + 1]; ++G__35885__i;}
  p__35882 = new cljs.core.IndexedSeq(G__35885__a,0);
} 
return mail_to35881__delegate.call(this,e_mail,p__35882);};
mail_to35881.cljs$lang$maxFixedArity = 1;
mail_to35881.cljs$lang$applyTo = (function (arglist__35886){
var e_mail = cljs.core.first(arglist__35886);
var p__35882 = cljs.core.rest(arglist__35886);
return mail_to35881__delegate(e_mail,p__35882);
});
mail_to35881.cljs$core$IFn$_invoke$arity$variadic = mail_to35881__delegate;
return mail_to35881;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to35881);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list35887 = (function unordered_list35887(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__11697__auto__ = (function iter__35892(s__35893){
return (new cljs.core.LazySeq(null,(function (){
var s__35893__$1 = s__35893;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35893__$1);
if(temp__4406__auto__){
var s__35893__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35893__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__35893__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__35895 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__35894 = (0);
while(true){
if((i__35894 < size__11696__auto__)){
var x = cljs.core._nth.call(null,c__11695__auto__,i__35894);
cljs.core.chunk_append.call(null,b__35895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35896 = (i__35894 + (1));
i__35894 = G__35896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35895),iter__35892.call(null,cljs.core.chunk_rest.call(null,s__35893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35895),null);
}
} else {
var x = cljs.core.first.call(null,s__35893__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__35892.call(null,cljs.core.rest.call(null,s__35893__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list35887);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list35897 = (function ordered_list35897(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__11697__auto__ = (function iter__35902(s__35903){
return (new cljs.core.LazySeq(null,(function (){
var s__35903__$1 = s__35903;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35903__$1);
if(temp__4406__auto__){
var s__35903__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35903__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__35903__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__35905 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__35904 = (0);
while(true){
if((i__35904 < size__11696__auto__)){
var x = cljs.core._nth.call(null,c__11695__auto__,i__35904);
cljs.core.chunk_append.call(null,b__35905,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35906 = (i__35904 + (1));
i__35904 = G__35906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35905),iter__35902.call(null,cljs.core.chunk_rest.call(null,s__35903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35905),null);
}
} else {
var x = cljs.core.first.call(null,s__35903__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__35902.call(null,cljs.core.rest.call(null,s__35903__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list35897);
/**
* Create an image element.
*/
sablono.core.image35907 = (function() {
var image35907 = null;
var image35907__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image35907__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image35907 = function(src,alt){
switch(arguments.length){
case 1:
return image35907__1.call(this,src);
case 2:
return image35907__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image35907.cljs$core$IFn$_invoke$arity$1 = image35907__1;
image35907.cljs$core$IFn$_invoke$arity$2 = image35907__2;
return image35907;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image35907);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__35908_SHARP_,p2__35909_SHARP_){
return [cljs.core.str(p1__35908_SHARP_),cljs.core.str("["),cljs.core.str(p2__35909_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__35910_SHARP_,p2__35911_SHARP_){
return [cljs.core.str(p1__35910_SHARP_),cljs.core.str("-"),cljs.core.str(p2__35911_SHARP_)].join('');
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
sablono.core.color_field35912 = (function() {
var color_field35912 = null;
var color_field35912__1 = (function (name__23592__auto__){
return color_field35912.call(null,name__23592__auto__,null);
});
var color_field35912__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23592__auto__,value__23593__auto__);
});
color_field35912 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return color_field35912__1.call(this,name__23592__auto__);
case 2:
return color_field35912__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field35912.cljs$core$IFn$_invoke$arity$1 = color_field35912__1;
color_field35912.cljs$core$IFn$_invoke$arity$2 = color_field35912__2;
return color_field35912;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field35912);

/**
* Creates a date input field.
*/
sablono.core.date_field35913 = (function() {
var date_field35913 = null;
var date_field35913__1 = (function (name__23592__auto__){
return date_field35913.call(null,name__23592__auto__,null);
});
var date_field35913__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23592__auto__,value__23593__auto__);
});
date_field35913 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return date_field35913__1.call(this,name__23592__auto__);
case 2:
return date_field35913__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field35913.cljs$core$IFn$_invoke$arity$1 = date_field35913__1;
date_field35913.cljs$core$IFn$_invoke$arity$2 = date_field35913__2;
return date_field35913;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field35913);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field35914 = (function() {
var datetime_field35914 = null;
var datetime_field35914__1 = (function (name__23592__auto__){
return datetime_field35914.call(null,name__23592__auto__,null);
});
var datetime_field35914__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23592__auto__,value__23593__auto__);
});
datetime_field35914 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return datetime_field35914__1.call(this,name__23592__auto__);
case 2:
return datetime_field35914__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field35914.cljs$core$IFn$_invoke$arity$1 = datetime_field35914__1;
datetime_field35914.cljs$core$IFn$_invoke$arity$2 = datetime_field35914__2;
return datetime_field35914;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field35914);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field35915 = (function() {
var datetime_local_field35915 = null;
var datetime_local_field35915__1 = (function (name__23592__auto__){
return datetime_local_field35915.call(null,name__23592__auto__,null);
});
var datetime_local_field35915__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23592__auto__,value__23593__auto__);
});
datetime_local_field35915 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return datetime_local_field35915__1.call(this,name__23592__auto__);
case 2:
return datetime_local_field35915__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field35915.cljs$core$IFn$_invoke$arity$1 = datetime_local_field35915__1;
datetime_local_field35915.cljs$core$IFn$_invoke$arity$2 = datetime_local_field35915__2;
return datetime_local_field35915;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field35915);

/**
* Creates a email input field.
*/
sablono.core.email_field35916 = (function() {
var email_field35916 = null;
var email_field35916__1 = (function (name__23592__auto__){
return email_field35916.call(null,name__23592__auto__,null);
});
var email_field35916__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23592__auto__,value__23593__auto__);
});
email_field35916 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return email_field35916__1.call(this,name__23592__auto__);
case 2:
return email_field35916__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field35916.cljs$core$IFn$_invoke$arity$1 = email_field35916__1;
email_field35916.cljs$core$IFn$_invoke$arity$2 = email_field35916__2;
return email_field35916;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field35916);

/**
* Creates a file input field.
*/
sablono.core.file_field35917 = (function() {
var file_field35917 = null;
var file_field35917__1 = (function (name__23592__auto__){
return file_field35917.call(null,name__23592__auto__,null);
});
var file_field35917__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23592__auto__,value__23593__auto__);
});
file_field35917 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return file_field35917__1.call(this,name__23592__auto__);
case 2:
return file_field35917__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field35917.cljs$core$IFn$_invoke$arity$1 = file_field35917__1;
file_field35917.cljs$core$IFn$_invoke$arity$2 = file_field35917__2;
return file_field35917;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field35917);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field35918 = (function() {
var hidden_field35918 = null;
var hidden_field35918__1 = (function (name__23592__auto__){
return hidden_field35918.call(null,name__23592__auto__,null);
});
var hidden_field35918__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23592__auto__,value__23593__auto__);
});
hidden_field35918 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return hidden_field35918__1.call(this,name__23592__auto__);
case 2:
return hidden_field35918__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field35918.cljs$core$IFn$_invoke$arity$1 = hidden_field35918__1;
hidden_field35918.cljs$core$IFn$_invoke$arity$2 = hidden_field35918__2;
return hidden_field35918;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field35918);

/**
* Creates a month input field.
*/
sablono.core.month_field35919 = (function() {
var month_field35919 = null;
var month_field35919__1 = (function (name__23592__auto__){
return month_field35919.call(null,name__23592__auto__,null);
});
var month_field35919__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23592__auto__,value__23593__auto__);
});
month_field35919 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return month_field35919__1.call(this,name__23592__auto__);
case 2:
return month_field35919__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field35919.cljs$core$IFn$_invoke$arity$1 = month_field35919__1;
month_field35919.cljs$core$IFn$_invoke$arity$2 = month_field35919__2;
return month_field35919;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field35919);

/**
* Creates a number input field.
*/
sablono.core.number_field35920 = (function() {
var number_field35920 = null;
var number_field35920__1 = (function (name__23592__auto__){
return number_field35920.call(null,name__23592__auto__,null);
});
var number_field35920__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23592__auto__,value__23593__auto__);
});
number_field35920 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return number_field35920__1.call(this,name__23592__auto__);
case 2:
return number_field35920__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field35920.cljs$core$IFn$_invoke$arity$1 = number_field35920__1;
number_field35920.cljs$core$IFn$_invoke$arity$2 = number_field35920__2;
return number_field35920;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field35920);

/**
* Creates a password input field.
*/
sablono.core.password_field35921 = (function() {
var password_field35921 = null;
var password_field35921__1 = (function (name__23592__auto__){
return password_field35921.call(null,name__23592__auto__,null);
});
var password_field35921__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23592__auto__,value__23593__auto__);
});
password_field35921 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return password_field35921__1.call(this,name__23592__auto__);
case 2:
return password_field35921__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field35921.cljs$core$IFn$_invoke$arity$1 = password_field35921__1;
password_field35921.cljs$core$IFn$_invoke$arity$2 = password_field35921__2;
return password_field35921;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field35921);

/**
* Creates a range input field.
*/
sablono.core.range_field35922 = (function() {
var range_field35922 = null;
var range_field35922__1 = (function (name__23592__auto__){
return range_field35922.call(null,name__23592__auto__,null);
});
var range_field35922__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23592__auto__,value__23593__auto__);
});
range_field35922 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return range_field35922__1.call(this,name__23592__auto__);
case 2:
return range_field35922__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field35922.cljs$core$IFn$_invoke$arity$1 = range_field35922__1;
range_field35922.cljs$core$IFn$_invoke$arity$2 = range_field35922__2;
return range_field35922;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field35922);

/**
* Creates a search input field.
*/
sablono.core.search_field35923 = (function() {
var search_field35923 = null;
var search_field35923__1 = (function (name__23592__auto__){
return search_field35923.call(null,name__23592__auto__,null);
});
var search_field35923__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23592__auto__,value__23593__auto__);
});
search_field35923 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return search_field35923__1.call(this,name__23592__auto__);
case 2:
return search_field35923__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field35923.cljs$core$IFn$_invoke$arity$1 = search_field35923__1;
search_field35923.cljs$core$IFn$_invoke$arity$2 = search_field35923__2;
return search_field35923;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field35923);

/**
* Creates a tel input field.
*/
sablono.core.tel_field35924 = (function() {
var tel_field35924 = null;
var tel_field35924__1 = (function (name__23592__auto__){
return tel_field35924.call(null,name__23592__auto__,null);
});
var tel_field35924__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23592__auto__,value__23593__auto__);
});
tel_field35924 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return tel_field35924__1.call(this,name__23592__auto__);
case 2:
return tel_field35924__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field35924.cljs$core$IFn$_invoke$arity$1 = tel_field35924__1;
tel_field35924.cljs$core$IFn$_invoke$arity$2 = tel_field35924__2;
return tel_field35924;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field35924);

/**
* Creates a text input field.
*/
sablono.core.text_field35925 = (function() {
var text_field35925 = null;
var text_field35925__1 = (function (name__23592__auto__){
return text_field35925.call(null,name__23592__auto__,null);
});
var text_field35925__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23592__auto__,value__23593__auto__);
});
text_field35925 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return text_field35925__1.call(this,name__23592__auto__);
case 2:
return text_field35925__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field35925.cljs$core$IFn$_invoke$arity$1 = text_field35925__1;
text_field35925.cljs$core$IFn$_invoke$arity$2 = text_field35925__2;
return text_field35925;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field35925);

/**
* Creates a time input field.
*/
sablono.core.time_field35926 = (function() {
var time_field35926 = null;
var time_field35926__1 = (function (name__23592__auto__){
return time_field35926.call(null,name__23592__auto__,null);
});
var time_field35926__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23592__auto__,value__23593__auto__);
});
time_field35926 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return time_field35926__1.call(this,name__23592__auto__);
case 2:
return time_field35926__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field35926.cljs$core$IFn$_invoke$arity$1 = time_field35926__1;
time_field35926.cljs$core$IFn$_invoke$arity$2 = time_field35926__2;
return time_field35926;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field35926);

/**
* Creates a url input field.
*/
sablono.core.url_field35927 = (function() {
var url_field35927 = null;
var url_field35927__1 = (function (name__23592__auto__){
return url_field35927.call(null,name__23592__auto__,null);
});
var url_field35927__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23592__auto__,value__23593__auto__);
});
url_field35927 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return url_field35927__1.call(this,name__23592__auto__);
case 2:
return url_field35927__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field35927.cljs$core$IFn$_invoke$arity$1 = url_field35927__1;
url_field35927.cljs$core$IFn$_invoke$arity$2 = url_field35927__2;
return url_field35927;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field35927);

/**
* Creates a week input field.
*/
sablono.core.week_field35928 = (function() {
var week_field35928 = null;
var week_field35928__1 = (function (name__23592__auto__){
return week_field35928.call(null,name__23592__auto__,null);
});
var week_field35928__2 = (function (name__23592__auto__,value__23593__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23592__auto__,value__23593__auto__);
});
week_field35928 = function(name__23592__auto__,value__23593__auto__){
switch(arguments.length){
case 1:
return week_field35928__1.call(this,name__23592__auto__);
case 2:
return week_field35928__2.call(this,name__23592__auto__,value__23593__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field35928.cljs$core$IFn$_invoke$arity$1 = week_field35928__1;
week_field35928.cljs$core$IFn$_invoke$arity$2 = week_field35928__2;
return week_field35928;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field35928);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box35929 = (function() {
var check_box35929 = null;
var check_box35929__1 = (function (name){
return check_box35929.call(null,name,null);
});
var check_box35929__2 = (function (name,checked_QMARK_){
return check_box35929.call(null,name,checked_QMARK_,"true");
});
var check_box35929__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box35929 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box35929__1.call(this,name);
case 2:
return check_box35929__2.call(this,name,checked_QMARK_);
case 3:
return check_box35929__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box35929.cljs$core$IFn$_invoke$arity$1 = check_box35929__1;
check_box35929.cljs$core$IFn$_invoke$arity$2 = check_box35929__2;
check_box35929.cljs$core$IFn$_invoke$arity$3 = check_box35929__3;
return check_box35929;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box35929);
/**
* Creates a radio button.
*/
sablono.core.radio_button35930 = (function() {
var radio_button35930 = null;
var radio_button35930__1 = (function (group){
return radio_button35930.call(null,group,null);
});
var radio_button35930__2 = (function (group,checked_QMARK_){
return radio_button35930.call(null,group,checked_QMARK_,"true");
});
var radio_button35930__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button35930 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button35930__1.call(this,group);
case 2:
return radio_button35930__2.call(this,group,checked_QMARK_);
case 3:
return radio_button35930__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button35930.cljs$core$IFn$_invoke$arity$1 = radio_button35930__1;
radio_button35930.cljs$core$IFn$_invoke$arity$2 = radio_button35930__2;
radio_button35930.cljs$core$IFn$_invoke$arity$3 = radio_button35930__3;
return radio_button35930;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button35930);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options35931 = (function() {
var select_options35931 = null;
var select_options35931__1 = (function (coll){
return select_options35931.call(null,coll,null);
});
var select_options35931__2 = (function (coll,selected){
var iter__11697__auto__ = (function iter__35940(s__35941){
return (new cljs.core.LazySeq(null,(function (){
var s__35941__$1 = s__35941;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35941__$1);
if(temp__4406__auto__){
var s__35941__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35941__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__35941__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__35943 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__35942 = (0);
while(true){
if((i__35942 < size__11696__auto__)){
var x = cljs.core._nth.call(null,c__11695__auto__,i__35942);
cljs.core.chunk_append.call(null,b__35943,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35946 = x;
var text = cljs.core.nth.call(null,vec__35946,(0),null);
var val = cljs.core.nth.call(null,vec__35946,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35946,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options35931.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__35948 = (i__35942 + (1));
i__35942 = G__35948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35943),iter__35940.call(null,cljs.core.chunk_rest.call(null,s__35941__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35943),null);
}
} else {
var x = cljs.core.first.call(null,s__35941__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__35947 = x;
var text = cljs.core.nth.call(null,vec__35947,(0),null);
var val = cljs.core.nth.call(null,vec__35947,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__35947,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options35931.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__35940.call(null,cljs.core.rest.call(null,s__35941__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,coll);
});
select_options35931 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options35931__1.call(this,coll);
case 2:
return select_options35931__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options35931.cljs$core$IFn$_invoke$arity$1 = select_options35931__1;
select_options35931.cljs$core$IFn$_invoke$arity$2 = select_options35931__2;
return select_options35931;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options35931);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down35949 = (function() {
var drop_down35949 = null;
var drop_down35949__2 = (function (name,options){
return drop_down35949.call(null,name,options,null);
});
var drop_down35949__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down35949 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down35949__2.call(this,name,options);
case 3:
return drop_down35949__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down35949.cljs$core$IFn$_invoke$arity$2 = drop_down35949__2;
drop_down35949.cljs$core$IFn$_invoke$arity$3 = drop_down35949__3;
return drop_down35949;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down35949);
/**
* Creates a text area element.
*/
sablono.core.text_area35950 = (function() {
var text_area35950 = null;
var text_area35950__1 = (function (name){
return text_area35950.call(null,name,null);
});
var text_area35950__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area35950 = function(name,value){
switch(arguments.length){
case 1:
return text_area35950__1.call(this,name);
case 2:
return text_area35950__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area35950.cljs$core$IFn$_invoke$arity$1 = text_area35950__1;
text_area35950.cljs$core$IFn$_invoke$arity$2 = text_area35950__2;
return text_area35950;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area35950);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label35951 = (function label35951(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label35951);
/**
* Creates a submit button.
*/
sablono.core.submit_button35952 = (function submit_button35952(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button35952);
/**
* Creates a form reset button.
*/
sablono.core.reset_button35953 = (function reset_button35953(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button35953);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to35954 = (function() { 
var form_to35954__delegate = function (p__35955,body){
var vec__35957 = p__35955;
var method = cljs.core.nth.call(null,vec__35957,(0),null);
var action = cljs.core.nth.call(null,vec__35957,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to35954 = function (p__35955,var_args){
var body = null;
if (arguments.length > 1) {
var G__35958__i = 0, G__35958__a = new Array(arguments.length -  1);
while (G__35958__i < G__35958__a.length) {G__35958__a[G__35958__i] = arguments[G__35958__i + 1]; ++G__35958__i;}
  body = new cljs.core.IndexedSeq(G__35958__a,0);
} 
return form_to35954__delegate.call(this,p__35955,body);};
form_to35954.cljs$lang$maxFixedArity = 1;
form_to35954.cljs$lang$applyTo = (function (arglist__35959){
var p__35955 = cljs.core.first(arglist__35959);
var body = cljs.core.rest(arglist__35959);
return form_to35954__delegate(p__35955,body);
});
form_to35954.cljs$core$IFn$_invoke$arity$variadic = form_to35954__delegate;
return form_to35954;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to35954);
