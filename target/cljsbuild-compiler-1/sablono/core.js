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
var G__26124__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__26123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26123,(0),null);
var body = cljs.core.nthnext(vec__26123,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26125__i = 0, G__26125__a = new Array(arguments.length -  0);
while (G__26125__i < G__26125__a.length) {G__26125__a[G__26125__i] = arguments[G__26125__i + 0]; ++G__26125__i;}
  args = new cljs.core.IndexedSeq(G__26125__a,0);
} 
return G__26124__delegate.call(this,args);};
G__26124.cljs$lang$maxFixedArity = 0;
G__26124.cljs$lang$applyTo = (function (arglist__26126){
var args = cljs.core.seq(arglist__26126);
return G__26124__delegate(args);
});
G__26124.cljs$core$IFn$_invoke$arity$variadic = G__26124__delegate;
return G__26124;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__6646__auto__ = (function iter__26133(s__26134){
return (new cljs.core.LazySeq(null,(function (){
var s__26134__$1 = s__26134;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__26134__$1);
if(temp__4406__auto__){
var s__26134__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26134__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__26134__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__26136 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__26135 = (0);
while(true){
if((i__26135 < size__6645__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__26135);
cljs.core.chunk_append(b__26136,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26139 = (i__26135 + (1));
i__26135 = G__26139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26136),iter__26133(cljs.core.chunk_rest(s__26134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26136),null);
}
} else {
var args = cljs.core.first(s__26134__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26133(cljs.core.rest(s__26134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
var G__26141 = element;
return React.renderToString(G__26141);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__26143 = element;
return React.renderToStaticMarkup(G__26143);
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
var iter__6646__auto__ = (function iter__26150(s__26151){
return (new cljs.core.LazySeq(null,(function (){
var s__26151__$1 = s__26151;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__26151__$1);
if(temp__4406__auto__){
var s__26151__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26151__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__26151__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__26153 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__26152 = (0);
while(true){
if((i__26152 < size__6645__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__26152);
cljs.core.chunk_append(b__26153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$20,"text/css",cljs.core.constant$keyword$104,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$105,"stylesheet"], null)], null));

var G__26156 = (i__26152 + (1));
i__26152 = G__26156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26153),iter__26150(cljs.core.chunk_rest(s__26151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26153),null);
}
} else {
var style = cljs.core.first(s__26151__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$103,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$20,"text/css",cljs.core.constant$keyword$104,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$105,"stylesheet"], null)], null),iter__26150(cljs.core.rest(s__26151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__26157__i = 0, G__26157__a = new Array(arguments.length -  0);
while (G__26157__i < G__26157__a.length) {G__26157__a[G__26157__i] = arguments[G__26157__i + 0]; ++G__26157__i;}
  styles = new cljs.core.IndexedSeq(G__26157__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__26158){
var styles = cljs.core.seq(arglist__26158);
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
var G__26163 = (function (){return goog.dom.getDocument();
})().body;
var G__26164 = (function (){var G__26165 = "script";
var G__26166 = {"src": src};
return goog.dom.createDom(G__26165,G__26166);
})();
return goog.dom.appendChild(G__26163,G__26164);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26167 = (function() { 
var link_to26167__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26167 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__26168__i = 0, G__26168__a = new Array(arguments.length -  1);
while (G__26168__i < G__26168__a.length) {G__26168__a[G__26168__i] = arguments[G__26168__i + 1]; ++G__26168__i;}
  content = new cljs.core.IndexedSeq(G__26168__a,0);
} 
return link_to26167__delegate.call(this,url,content);};
link_to26167.cljs$lang$maxFixedArity = 1;
link_to26167.cljs$lang$applyTo = (function (arglist__26169){
var url = cljs.core.first(arglist__26169);
var content = cljs.core.rest(arglist__26169);
return link_to26167__delegate(url,content);
});
link_to26167.cljs$core$IFn$_invoke$arity$variadic = link_to26167__delegate;
return link_to26167;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26167);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26170 = (function() { 
var mail_to26170__delegate = function (e_mail,p__26171){
var vec__26173 = p__26171;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26173,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$106,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$104,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5890__auto__ = content;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to26170 = function (e_mail,var_args){
var p__26171 = null;
if (arguments.length > 1) {
var G__26174__i = 0, G__26174__a = new Array(arguments.length -  1);
while (G__26174__i < G__26174__a.length) {G__26174__a[G__26174__i] = arguments[G__26174__i + 1]; ++G__26174__i;}
  p__26171 = new cljs.core.IndexedSeq(G__26174__a,0);
} 
return mail_to26170__delegate.call(this,e_mail,p__26171);};
mail_to26170.cljs$lang$maxFixedArity = 1;
mail_to26170.cljs$lang$applyTo = (function (arglist__26175){
var e_mail = cljs.core.first(arglist__26175);
var p__26171 = cljs.core.rest(arglist__26175);
return mail_to26170__delegate(e_mail,p__26171);
});
mail_to26170.cljs$core$IFn$_invoke$arity$variadic = mail_to26170__delegate;
return mail_to26170;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26170);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26176 = (function unordered_list26176(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$107,(function (){var iter__6646__auto__ = (function iter__26183(s__26184){
return (new cljs.core.LazySeq(null,(function (){
var s__26184__$1 = s__26184;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__26184__$1);
if(temp__4406__auto__){
var s__26184__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26184__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__26184__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__26186 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__26185 = (0);
while(true){
if((i__26185 < size__6645__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__26185);
cljs.core.chunk_append(b__26186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,x], null));

var G__26189 = (i__26185 + (1));
i__26185 = G__26189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26186),iter__26183(cljs.core.chunk_rest(s__26184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26186),null);
}
} else {
var x = cljs.core.first(s__26184__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,x], null),iter__26183(cljs.core.rest(s__26184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26176);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26190 = (function ordered_list26190(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$109,(function (){var iter__6646__auto__ = (function iter__26197(s__26198){
return (new cljs.core.LazySeq(null,(function (){
var s__26198__$1 = s__26198;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__26198__$1);
if(temp__4406__auto__){
var s__26198__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26198__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__26198__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__26200 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__26199 = (0);
while(true){
if((i__26199 < size__6645__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__26199);
cljs.core.chunk_append(b__26200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,x], null));

var G__26203 = (i__26199 + (1));
i__26199 = G__26203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26200),iter__26197(cljs.core.chunk_rest(s__26198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26200),null);
}
} else {
var x = cljs.core.first(s__26198__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$108,x], null),iter__26197(cljs.core.rest(s__26198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26190);
/**
* Create an image element.
*/
sablono.core.image26204 = (function() {
var image26204 = null;
var image26204__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$111,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26204__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$111,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$112,alt], null)], null);
});
image26204 = function(src,alt){
switch(arguments.length){
case 1:
return image26204__1.call(this,src);
case 2:
return image26204__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26204.cljs$core$IFn$_invoke$arity$1 = image26204__1;
image26204.cljs$core$IFn$_invoke$arity$2 = image26204__2;
return image26204;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26204);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26205_SHARP_,p2__26206_SHARP_){
return [cljs.core.str(p1__26205_SHARP_),cljs.core.str("["),cljs.core.str(p2__26206_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26207_SHARP_,p2__26208_SHARP_){
return [cljs.core.str(p1__26207_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26208_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$20,type,cljs.core.constant$keyword$32,sablono.core.make_name(name),cljs.core.constant$keyword$99,sablono.core.make_id(name),cljs.core.constant$keyword$18,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field26209 = (function() {
var color_field26209 = null;
var color_field26209__1 = (function (name__17516__auto__){
return color_field26209.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var color_field26209__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__17516__auto__,value__17517__auto__);
});
color_field26209 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return color_field26209__1.call(this,name__17516__auto__);
case 2:
return color_field26209__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26209.cljs$core$IFn$_invoke$arity$1 = color_field26209__1;
color_field26209.cljs$core$IFn$_invoke$arity$2 = color_field26209__2;
return color_field26209;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field26209);

/**
* Creates a date input field.
*/
sablono.core.date_field26212 = (function() {
var date_field26212 = null;
var date_field26212__1 = (function (name__17516__auto__){
return date_field26212.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var date_field26212__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__17516__auto__,value__17517__auto__);
});
date_field26212 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return date_field26212__1.call(this,name__17516__auto__);
case 2:
return date_field26212__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26212.cljs$core$IFn$_invoke$arity$1 = date_field26212__1;
date_field26212.cljs$core$IFn$_invoke$arity$2 = date_field26212__2;
return date_field26212;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field26212);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26215 = (function() {
var datetime_field26215 = null;
var datetime_field26215__1 = (function (name__17516__auto__){
return datetime_field26215.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var datetime_field26215__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__17516__auto__,value__17517__auto__);
});
datetime_field26215 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return datetime_field26215__1.call(this,name__17516__auto__);
case 2:
return datetime_field26215__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26215.cljs$core$IFn$_invoke$arity$1 = datetime_field26215__1;
datetime_field26215.cljs$core$IFn$_invoke$arity$2 = datetime_field26215__2;
return datetime_field26215;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field26215);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26218 = (function() {
var datetime_local_field26218 = null;
var datetime_local_field26218__1 = (function (name__17516__auto__){
return datetime_local_field26218.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var datetime_local_field26218__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__17516__auto__,value__17517__auto__);
});
datetime_local_field26218 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26218__1.call(this,name__17516__auto__);
case 2:
return datetime_local_field26218__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26218.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26218__1;
datetime_local_field26218.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26218__2;
return datetime_local_field26218;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field26218);

/**
* Creates a email input field.
*/
sablono.core.email_field26221 = (function() {
var email_field26221 = null;
var email_field26221__1 = (function (name__17516__auto__){
return email_field26221.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var email_field26221__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__17516__auto__,value__17517__auto__);
});
email_field26221 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return email_field26221__1.call(this,name__17516__auto__);
case 2:
return email_field26221__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26221.cljs$core$IFn$_invoke$arity$1 = email_field26221__1;
email_field26221.cljs$core$IFn$_invoke$arity$2 = email_field26221__2;
return email_field26221;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26221);

/**
* Creates a file input field.
*/
sablono.core.file_field26224 = (function() {
var file_field26224 = null;
var file_field26224__1 = (function (name__17516__auto__){
return file_field26224.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var file_field26224__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__17516__auto__,value__17517__auto__);
});
file_field26224 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return file_field26224__1.call(this,name__17516__auto__);
case 2:
return file_field26224__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26224.cljs$core$IFn$_invoke$arity$1 = file_field26224__1;
file_field26224.cljs$core$IFn$_invoke$arity$2 = file_field26224__2;
return file_field26224;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field26224);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26227 = (function() {
var hidden_field26227 = null;
var hidden_field26227__1 = (function (name__17516__auto__){
return hidden_field26227.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var hidden_field26227__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__17516__auto__,value__17517__auto__);
});
hidden_field26227 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return hidden_field26227__1.call(this,name__17516__auto__);
case 2:
return hidden_field26227__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26227.cljs$core$IFn$_invoke$arity$1 = hidden_field26227__1;
hidden_field26227.cljs$core$IFn$_invoke$arity$2 = hidden_field26227__2;
return hidden_field26227;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26227);

/**
* Creates a month input field.
*/
sablono.core.month_field26230 = (function() {
var month_field26230 = null;
var month_field26230__1 = (function (name__17516__auto__){
return month_field26230.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var month_field26230__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__17516__auto__,value__17517__auto__);
});
month_field26230 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return month_field26230__1.call(this,name__17516__auto__);
case 2:
return month_field26230__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26230.cljs$core$IFn$_invoke$arity$1 = month_field26230__1;
month_field26230.cljs$core$IFn$_invoke$arity$2 = month_field26230__2;
return month_field26230;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field26230);

/**
* Creates a number input field.
*/
sablono.core.number_field26233 = (function() {
var number_field26233 = null;
var number_field26233__1 = (function (name__17516__auto__){
return number_field26233.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var number_field26233__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__17516__auto__,value__17517__auto__);
});
number_field26233 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return number_field26233__1.call(this,name__17516__auto__);
case 2:
return number_field26233__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26233.cljs$core$IFn$_invoke$arity$1 = number_field26233__1;
number_field26233.cljs$core$IFn$_invoke$arity$2 = number_field26233__2;
return number_field26233;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field26233);

/**
* Creates a password input field.
*/
sablono.core.password_field26236 = (function() {
var password_field26236 = null;
var password_field26236__1 = (function (name__17516__auto__){
return password_field26236.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var password_field26236__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__17516__auto__,value__17517__auto__);
});
password_field26236 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return password_field26236__1.call(this,name__17516__auto__);
case 2:
return password_field26236__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26236.cljs$core$IFn$_invoke$arity$1 = password_field26236__1;
password_field26236.cljs$core$IFn$_invoke$arity$2 = password_field26236__2;
return password_field26236;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26236);

/**
* Creates a range input field.
*/
sablono.core.range_field26239 = (function() {
var range_field26239 = null;
var range_field26239__1 = (function (name__17516__auto__){
return range_field26239.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var range_field26239__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__17516__auto__,value__17517__auto__);
});
range_field26239 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return range_field26239__1.call(this,name__17516__auto__);
case 2:
return range_field26239__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26239.cljs$core$IFn$_invoke$arity$1 = range_field26239__1;
range_field26239.cljs$core$IFn$_invoke$arity$2 = range_field26239__2;
return range_field26239;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field26239);

/**
* Creates a search input field.
*/
sablono.core.search_field26242 = (function() {
var search_field26242 = null;
var search_field26242__1 = (function (name__17516__auto__){
return search_field26242.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var search_field26242__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__17516__auto__,value__17517__auto__);
});
search_field26242 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return search_field26242__1.call(this,name__17516__auto__);
case 2:
return search_field26242__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26242.cljs$core$IFn$_invoke$arity$1 = search_field26242__1;
search_field26242.cljs$core$IFn$_invoke$arity$2 = search_field26242__2;
return search_field26242;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field26242);

/**
* Creates a tel input field.
*/
sablono.core.tel_field26245 = (function() {
var tel_field26245 = null;
var tel_field26245__1 = (function (name__17516__auto__){
return tel_field26245.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var tel_field26245__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__17516__auto__,value__17517__auto__);
});
tel_field26245 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return tel_field26245__1.call(this,name__17516__auto__);
case 2:
return tel_field26245__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26245.cljs$core$IFn$_invoke$arity$1 = tel_field26245__1;
tel_field26245.cljs$core$IFn$_invoke$arity$2 = tel_field26245__2;
return tel_field26245;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field26245);

/**
* Creates a text input field.
*/
sablono.core.text_field26248 = (function() {
var text_field26248 = null;
var text_field26248__1 = (function (name__17516__auto__){
return text_field26248.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var text_field26248__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__17516__auto__,value__17517__auto__);
});
text_field26248 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return text_field26248__1.call(this,name__17516__auto__);
case 2:
return text_field26248__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26248.cljs$core$IFn$_invoke$arity$1 = text_field26248__1;
text_field26248.cljs$core$IFn$_invoke$arity$2 = text_field26248__2;
return text_field26248;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26248);

/**
* Creates a time input field.
*/
sablono.core.time_field26251 = (function() {
var time_field26251 = null;
var time_field26251__1 = (function (name__17516__auto__){
return time_field26251.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var time_field26251__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__17516__auto__,value__17517__auto__);
});
time_field26251 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return time_field26251__1.call(this,name__17516__auto__);
case 2:
return time_field26251__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26251.cljs$core$IFn$_invoke$arity$1 = time_field26251__1;
time_field26251.cljs$core$IFn$_invoke$arity$2 = time_field26251__2;
return time_field26251;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field26251);

/**
* Creates a url input field.
*/
sablono.core.url_field26254 = (function() {
var url_field26254 = null;
var url_field26254__1 = (function (name__17516__auto__){
return url_field26254.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var url_field26254__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__17516__auto__,value__17517__auto__);
});
url_field26254 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return url_field26254__1.call(this,name__17516__auto__);
case 2:
return url_field26254__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26254.cljs$core$IFn$_invoke$arity$1 = url_field26254__1;
url_field26254.cljs$core$IFn$_invoke$arity$2 = url_field26254__2;
return url_field26254;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field26254);

/**
* Creates a week input field.
*/
sablono.core.week_field26257 = (function() {
var week_field26257 = null;
var week_field26257__1 = (function (name__17516__auto__){
return week_field26257.cljs$core$IFn$_invoke$arity$2(name__17516__auto__,null);
});
var week_field26257__2 = (function (name__17516__auto__,value__17517__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__17516__auto__,value__17517__auto__);
});
week_field26257 = function(name__17516__auto__,value__17517__auto__){
switch(arguments.length){
case 1:
return week_field26257__1.call(this,name__17516__auto__);
case 2:
return week_field26257__2.call(this,name__17516__auto__,value__17517__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26257.cljs$core$IFn$_invoke$arity$1 = week_field26257__1;
week_field26257.cljs$core$IFn$_invoke$arity$2 = week_field26257__2;
return week_field26257;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field26257);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26260 = (function() {
var check_box26260 = null;
var check_box26260__1 = (function (name){
return check_box26260.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26260__2 = (function (name,checked_QMARK_){
return check_box26260.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26260__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$20,"checkbox",cljs.core.constant$keyword$32,sablono.core.make_name(name),cljs.core.constant$keyword$99,sablono.core.make_id(name),cljs.core.constant$keyword$18,value,cljs.core.constant$keyword$113,checked_QMARK_], null)], null);
});
check_box26260 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26260__1.call(this,name);
case 2:
return check_box26260__2.call(this,name,checked_QMARK_);
case 3:
return check_box26260__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26260.cljs$core$IFn$_invoke$arity$1 = check_box26260__1;
check_box26260.cljs$core$IFn$_invoke$arity$2 = check_box26260__2;
check_box26260.cljs$core$IFn$_invoke$arity$3 = check_box26260__3;
return check_box26260;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26260);
/**
* Creates a radio button.
*/
sablono.core.radio_button26266 = (function() {
var radio_button26266 = null;
var radio_button26266__1 = (function (group){
return radio_button26266.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26266__2 = (function (group,checked_QMARK_){
return radio_button26266.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26266__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$20,"radio",cljs.core.constant$keyword$32,sablono.core.make_name(group),cljs.core.constant$keyword$99,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$18,value,cljs.core.constant$keyword$113,checked_QMARK_], null)], null);
});
radio_button26266 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26266__1.call(this,group);
case 2:
return radio_button26266__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26266__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26266.cljs$core$IFn$_invoke$arity$1 = radio_button26266__1;
radio_button26266.cljs$core$IFn$_invoke$arity$2 = radio_button26266__2;
radio_button26266.cljs$core$IFn$_invoke$arity$3 = radio_button26266__3;
return radio_button26266;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26266);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26272 = (function() {
var select_options26272 = null;
var select_options26272__1 = (function (coll){
return select_options26272.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26272__2 = (function (coll,selected){
var iter__6646__auto__ = (function iter__26293(s__26294){
return (new cljs.core.LazySeq(null,(function (){
var s__26294__$1 = s__26294;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__26294__$1);
if(temp__4406__auto__){
var s__26294__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26294__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__26294__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__26296 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__26295 = (0);
while(true){
if((i__26295 < size__6645__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__26295);
cljs.core.chunk_append(b__26296,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26301 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26301,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$114,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$115,text], null),select_options26272.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$18,val,cljs.core.constant$keyword$116,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$117,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__26303 = (i__26295 + (1));
i__26295 = G__26303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26296),iter__26293(cljs.core.chunk_rest(s__26294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26296),null);
}
} else {
var x = cljs.core.first(s__26294__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26302 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26302,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$114,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$115,text], null),select_options26272.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$18,val,cljs.core.constant$keyword$116,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$117,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$116,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26293(cljs.core.rest(s__26294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(coll);
});
select_options26272 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26272__1.call(this,coll);
case 2:
return select_options26272__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26272.cljs$core$IFn$_invoke$arity$1 = select_options26272__1;
select_options26272.cljs$core$IFn$_invoke$arity$2 = select_options26272__2;
return select_options26272;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26272);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26304 = (function() {
var drop_down26304 = null;
var drop_down26304__2 = (function (name,options){
return drop_down26304.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26304__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$118,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,sablono.core.make_name(name),cljs.core.constant$keyword$99,sablono.core.make_id(name)], null),(function (){var G__26310 = options;
var G__26311 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__26310,G__26311) : sablono.core.select_options.call(null,G__26310,G__26311));
})()], null);
});
drop_down26304 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26304__2.call(this,name,options);
case 3:
return drop_down26304__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26304.cljs$core$IFn$_invoke$arity$2 = drop_down26304__2;
drop_down26304.cljs$core$IFn$_invoke$arity$3 = drop_down26304__3;
return drop_down26304;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26304);
/**
* Creates a text area element.
*/
sablono.core.text_area26312 = (function() {
var text_area26312 = null;
var text_area26312__1 = (function (name){
return text_area26312.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26312__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,sablono.core.make_name(name),cljs.core.constant$keyword$99,sablono.core.make_id(name),cljs.core.constant$keyword$18,value], null)], null);
});
text_area26312 = function(name,value){
switch(arguments.length){
case 1:
return text_area26312__1.call(this,name);
case 2:
return text_area26312__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26312.cljs$core$IFn$_invoke$arity$1 = text_area26312__1;
text_area26312.cljs$core$IFn$_invoke$arity$2 = text_area26312__2;
return text_area26312;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26312);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26315 = (function label26315(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$97,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26315);
/**
* Creates a submit button.
*/
sablono.core.submit_button26316 = (function submit_button26316(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$20,"submit",cljs.core.constant$keyword$18,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26316);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26317 = (function reset_button26317(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$20,"reset",cljs.core.constant$keyword$18,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26317);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26318 = (function() { 
var form_to26318__delegate = function (p__26319,body){
var vec__26323 = p__26319;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26323,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26323,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$119,null,cljs.core.constant$keyword$120,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,method_str,cljs.core.constant$keyword$123,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$122,"POST",cljs.core.constant$keyword$123,action_uri], null),(function (){var G__26324 = "_method";
var G__26325 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__26324,G__26325) : sablono.core.hidden_field.call(null,G__26324,G__26325));
})()], null)),body));
};
var form_to26318 = function (p__26319,var_args){
var body = null;
if (arguments.length > 1) {
var G__26326__i = 0, G__26326__a = new Array(arguments.length -  1);
while (G__26326__i < G__26326__a.length) {G__26326__a[G__26326__i] = arguments[G__26326__i + 1]; ++G__26326__i;}
  body = new cljs.core.IndexedSeq(G__26326__a,0);
} 
return form_to26318__delegate.call(this,p__26319,body);};
form_to26318.cljs$lang$maxFixedArity = 1;
form_to26318.cljs$lang$applyTo = (function (arglist__26327){
var p__26319 = cljs.core.first(arglist__26327);
var body = cljs.core.rest(arglist__26327);
return form_to26318__delegate(p__26319,body);
});
form_to26318.cljs$core$IFn$_invoke$arity$variadic = form_to26318__delegate;
return form_to26318;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26318);
