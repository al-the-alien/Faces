// Compiled by ClojureScript 0.0-2816 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__5890__auto__ = elem.textContent;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function html(elem){
return elem.innerHTML;
});
dommy.core.value = (function value(elem){
return elem.value;
});
dommy.core.class$ = (function class$(elem){
return elem.className;
});
dommy.core.attr = (function attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
var G__20065 = pixels;
return parseInt(G__20065);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4404__auto__ = elem.classList;
if(cljs.core.truth_(temp__4404__auto__)){
var class_list = temp__4404__auto__;
return class_list.contains(c__$1);
} else {
var temp__4406__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4406__auto__)){
var class_name = temp__4406__auto__;
var temp__4406__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4406__auto____$1)){
var i = temp__4406__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.constant$keyword$124) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$125,r.top,cljs.core.constant$keyword$126,r.bottom,cljs.core.constant$keyword$127,r.left,cljs.core.constant$keyword$128,r.right,cljs.core.constant$keyword$129,r.width,cljs.core.constant$keyword$130,r.height], null);
});
dommy.core.parent = (function parent(elem){
return elem.parentNode;
});
dommy.core.children = (function children(elem){
return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){
return closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__20068_SHARP_){
return !((p1__20068_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){
return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

var style = elem.style;
var seq__20078_20084 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__20079_20085 = null;
var count__20080_20086 = (0);
var i__20081_20087 = (0);
while(true){
if((i__20081_20087 < count__20080_20086)){
var vec__20082_20088 = chunk__20079_20085.cljs$core$IIndexed$_nth$arity$2(null,i__20081_20087);
var k_20089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082_20088,(0),null);
var v_20090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082_20088,(1),null);
style.setProperty(dommy.utils.as_str(k_20089),v_20090);

var G__20091 = seq__20078_20084;
var G__20092 = chunk__20079_20085;
var G__20093 = count__20080_20086;
var G__20094 = (i__20081_20087 + (1));
seq__20078_20084 = G__20091;
chunk__20079_20085 = G__20092;
count__20080_20086 = G__20093;
i__20081_20087 = G__20094;
continue;
} else {
var temp__4406__auto___20095 = cljs.core.seq(seq__20078_20084);
if(temp__4406__auto___20095){
var seq__20078_20096__$1 = temp__4406__auto___20095;
if(cljs.core.chunked_seq_QMARK_(seq__20078_20096__$1)){
var c__6677__auto___20097 = cljs.core.chunk_first(seq__20078_20096__$1);
var G__20098 = cljs.core.chunk_rest(seq__20078_20096__$1);
var G__20099 = c__6677__auto___20097;
var G__20100 = cljs.core.count(c__6677__auto___20097);
var G__20101 = (0);
seq__20078_20084 = G__20098;
chunk__20079_20085 = G__20099;
count__20080_20086 = G__20100;
i__20081_20087 = G__20101;
continue;
} else {
var vec__20083_20102 = cljs.core.first(seq__20078_20096__$1);
var k_20103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083_20102,(0),null);
var v_20104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20083_20102,(1),null);
style.setProperty(dommy.utils.as_str(k_20103),v_20104);

var G__20105 = cljs.core.next(seq__20078_20096__$1);
var G__20106 = null;
var G__20107 = (0);
var G__20108 = (0);
seq__20078_20084 = G__20105;
chunk__20079_20085 = G__20106;
count__20080_20086 = G__20107;
i__20081_20087 = G__20108;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__20109__i = 0, G__20109__a = new Array(arguments.length -  1);
while (G__20109__i < G__20109__a.length) {G__20109__a[G__20109__i] = arguments[G__20109__i + 1]; ++G__20109__i;}
  kvs = new cljs.core.IndexedSeq(G__20109__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20110){
var elem = cljs.core.first(arglist__20110);
var kvs = cljs.core.rest(arglist__20110);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

var seq__20117_20123 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__20118_20124 = null;
var count__20119_20125 = (0);
var i__20120_20126 = (0);
while(true){
if((i__20120_20126 < count__20119_20125)){
var vec__20121_20127 = chunk__20118_20124.cljs$core$IIndexed$_nth$arity$2(null,i__20120_20126);
var k_20128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20121_20127,(0),null);
var v_20129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20121_20127,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_20128,[cljs.core.str(v_20129),cljs.core.str("px")].join('')], 0));

var G__20130 = seq__20117_20123;
var G__20131 = chunk__20118_20124;
var G__20132 = count__20119_20125;
var G__20133 = (i__20120_20126 + (1));
seq__20117_20123 = G__20130;
chunk__20118_20124 = G__20131;
count__20119_20125 = G__20132;
i__20120_20126 = G__20133;
continue;
} else {
var temp__4406__auto___20134 = cljs.core.seq(seq__20117_20123);
if(temp__4406__auto___20134){
var seq__20117_20135__$1 = temp__4406__auto___20134;
if(cljs.core.chunked_seq_QMARK_(seq__20117_20135__$1)){
var c__6677__auto___20136 = cljs.core.chunk_first(seq__20117_20135__$1);
var G__20137 = cljs.core.chunk_rest(seq__20117_20135__$1);
var G__20138 = c__6677__auto___20136;
var G__20139 = cljs.core.count(c__6677__auto___20136);
var G__20140 = (0);
seq__20117_20123 = G__20137;
chunk__20118_20124 = G__20138;
count__20119_20125 = G__20139;
i__20120_20126 = G__20140;
continue;
} else {
var vec__20122_20141 = cljs.core.first(seq__20117_20135__$1);
var k_20142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122_20141,(0),null);
var v_20143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20122_20141,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_20142,[cljs.core.str(v_20143),cljs.core.str("px")].join('')], 0));

var G__20144 = cljs.core.next(seq__20117_20135__$1);
var G__20145 = null;
var G__20146 = (0);
var G__20147 = (0);
seq__20117_20123 = G__20144;
chunk__20118_20124 = G__20145;
count__20119_20125 = G__20146;
i__20120_20126 = G__20147;
continue;
}
} else {
}
}
break;
}

return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__20148__i = 0, G__20148__a = new Array(arguments.length -  1);
while (G__20148__i < G__20148__a.length) {G__20148__a[G__20148__i] = arguments[G__20148__i + 1]; ++G__20148__i;}
  kvs = new cljs.core.IndexedSeq(G__20148__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__20149){
var elem = cljs.core.first(arglist__20149);
var kvs = cljs.core.rest(arglist__20149);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__20167 = elem;
(G__20167[k__$1] = v);

return G__20167;
} else {
var G__20168 = elem;
G__20168.setAttribute(k__$1,v);

return G__20168;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__20175__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

var seq__20169_20176 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__20170_20177 = null;
var count__20171_20178 = (0);
var i__20172_20179 = (0);
while(true){
if((i__20172_20179 < count__20171_20178)){
var vec__20173_20180 = chunk__20170_20177.cljs$core$IIndexed$_nth$arity$2(null,i__20172_20179);
var k_20181__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173_20180,(0),null);
var v_20182__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173_20180,(1),null);
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_20181__$1,v_20182__$1);

var G__20183 = seq__20169_20176;
var G__20184 = chunk__20170_20177;
var G__20185 = count__20171_20178;
var G__20186 = (i__20172_20179 + (1));
seq__20169_20176 = G__20183;
chunk__20170_20177 = G__20184;
count__20171_20178 = G__20185;
i__20172_20179 = G__20186;
continue;
} else {
var temp__4406__auto___20187 = cljs.core.seq(seq__20169_20176);
if(temp__4406__auto___20187){
var seq__20169_20188__$1 = temp__4406__auto___20187;
if(cljs.core.chunked_seq_QMARK_(seq__20169_20188__$1)){
var c__6677__auto___20189 = cljs.core.chunk_first(seq__20169_20188__$1);
var G__20190 = cljs.core.chunk_rest(seq__20169_20188__$1);
var G__20191 = c__6677__auto___20189;
var G__20192 = cljs.core.count(c__6677__auto___20189);
var G__20193 = (0);
seq__20169_20176 = G__20190;
chunk__20170_20177 = G__20191;
count__20171_20178 = G__20192;
i__20172_20179 = G__20193;
continue;
} else {
var vec__20174_20194 = cljs.core.first(seq__20169_20188__$1);
var k_20195__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174_20194,(0),null);
var v_20196__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20174_20194,(1),null);
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_20195__$1,v_20196__$1);

var G__20197 = cljs.core.next(seq__20169_20188__$1);
var G__20198 = null;
var G__20199 = (0);
var G__20200 = (0);
seq__20169_20176 = G__20197;
chunk__20170_20177 = G__20198;
count__20171_20178 = G__20199;
i__20172_20179 = G__20200;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20175 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__20201__i = 0, G__20201__a = new Array(arguments.length -  3);
while (G__20201__i < G__20201__a.length) {G__20201__a[G__20201__i] = arguments[G__20201__i + 3]; ++G__20201__i;}
  kvs = new cljs.core.IndexedSeq(G__20201__a,0);
} 
return G__20175__delegate.call(this,elem,k,v,kvs);};
G__20175.cljs$lang$maxFixedArity = 3;
G__20175.cljs$lang$applyTo = (function (arglist__20202){
var elem = cljs.core.first(arglist__20202);
arglist__20202 = cljs.core.next(arglist__20202);
var k = cljs.core.first(arglist__20202);
arglist__20202 = cljs.core.next(arglist__20202);
var v = cljs.core.first(arglist__20202);
var kvs = cljs.core.rest(arglist__20202);
return G__20175__delegate(elem,k,v,kvs);
});
G__20175.cljs$core$IFn$_invoke$arity$variadic = G__20175__delegate;
return G__20175;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
var G__20203 = null;
if (arguments.length > 3) {
var G__20204__i = 0, G__20204__a = new Array(arguments.length -  3);
while (G__20204__i < G__20204__a.length) {G__20204__a[G__20204__i] = arguments[G__20204__i + 3]; ++G__20204__i;}
G__20203 = new cljs.core.IndexedSeq(G__20204__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__20203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var k_20217__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_20217__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_20217__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__20218__delegate = function (elem,k,ks){
var seq__20213_20219 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__20214_20220 = null;
var count__20215_20221 = (0);
var i__20216_20222 = (0);
while(true){
if((i__20216_20222 < count__20215_20221)){
var k_20223__$1 = chunk__20214_20220.cljs$core$IIndexed$_nth$arity$2(null,i__20216_20222);
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_20223__$1);

var G__20224 = seq__20213_20219;
var G__20225 = chunk__20214_20220;
var G__20226 = count__20215_20221;
var G__20227 = (i__20216_20222 + (1));
seq__20213_20219 = G__20224;
chunk__20214_20220 = G__20225;
count__20215_20221 = G__20226;
i__20216_20222 = G__20227;
continue;
} else {
var temp__4406__auto___20228 = cljs.core.seq(seq__20213_20219);
if(temp__4406__auto___20228){
var seq__20213_20229__$1 = temp__4406__auto___20228;
if(cljs.core.chunked_seq_QMARK_(seq__20213_20229__$1)){
var c__6677__auto___20230 = cljs.core.chunk_first(seq__20213_20229__$1);
var G__20231 = cljs.core.chunk_rest(seq__20213_20229__$1);
var G__20232 = c__6677__auto___20230;
var G__20233 = cljs.core.count(c__6677__auto___20230);
var G__20234 = (0);
seq__20213_20219 = G__20231;
chunk__20214_20220 = G__20232;
count__20215_20221 = G__20233;
i__20216_20222 = G__20234;
continue;
} else {
var k_20235__$1 = cljs.core.first(seq__20213_20229__$1);
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_20235__$1);

var G__20236 = cljs.core.next(seq__20213_20229__$1);
var G__20237 = null;
var G__20238 = (0);
var G__20239 = (0);
seq__20213_20219 = G__20236;
chunk__20214_20220 = G__20237;
count__20215_20221 = G__20238;
i__20216_20222 = G__20239;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20218 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__20240__i = 0, G__20240__a = new Array(arguments.length -  2);
while (G__20240__i < G__20240__a.length) {G__20240__a[G__20240__i] = arguments[G__20240__i + 2]; ++G__20240__i;}
  ks = new cljs.core.IndexedSeq(G__20240__a,0);
} 
return G__20218__delegate.call(this,elem,k,ks);};
G__20218.cljs$lang$maxFixedArity = 2;
G__20218.cljs$lang$applyTo = (function (arglist__20241){
var elem = cljs.core.first(arglist__20241);
arglist__20241 = cljs.core.next(arglist__20241);
var k = cljs.core.first(arglist__20241);
var ks = cljs.core.rest(arglist__20241);
return G__20218__delegate(elem,k,ks);
});
G__20218.cljs$core$IFn$_invoke$arity$variadic = G__20218__delegate;
return G__20218;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__20242 = null;
if (arguments.length > 2) {
var G__20243__i = 0, G__20243__a = new Array(arguments.length -  2);
while (G__20243__i < G__20243__a.length) {G__20243__a[G__20243__i] = arguments[G__20243__i + 2]; ++G__20243__i;}
G__20242 = new cljs.core.IndexedSeq(G__20243__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__20242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){
return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4404__auto___20275 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___20275)){
var class_list_20276 = temp__4404__auto___20275;
var seq__20263_20277 = cljs.core.seq(classes__$1);
var chunk__20264_20278 = null;
var count__20265_20279 = (0);
var i__20266_20280 = (0);
while(true){
if((i__20266_20280 < count__20265_20279)){
var c_20281 = chunk__20264_20278.cljs$core$IIndexed$_nth$arity$2(null,i__20266_20280);
class_list_20276.add(c_20281);

var G__20282 = seq__20263_20277;
var G__20283 = chunk__20264_20278;
var G__20284 = count__20265_20279;
var G__20285 = (i__20266_20280 + (1));
seq__20263_20277 = G__20282;
chunk__20264_20278 = G__20283;
count__20265_20279 = G__20284;
i__20266_20280 = G__20285;
continue;
} else {
var temp__4406__auto___20286 = cljs.core.seq(seq__20263_20277);
if(temp__4406__auto___20286){
var seq__20263_20287__$1 = temp__4406__auto___20286;
if(cljs.core.chunked_seq_QMARK_(seq__20263_20287__$1)){
var c__6677__auto___20288 = cljs.core.chunk_first(seq__20263_20287__$1);
var G__20289 = cljs.core.chunk_rest(seq__20263_20287__$1);
var G__20290 = c__6677__auto___20288;
var G__20291 = cljs.core.count(c__6677__auto___20288);
var G__20292 = (0);
seq__20263_20277 = G__20289;
chunk__20264_20278 = G__20290;
count__20265_20279 = G__20291;
i__20266_20280 = G__20292;
continue;
} else {
var c_20293 = cljs.core.first(seq__20263_20287__$1);
class_list_20276.add(c_20293);

var G__20294 = cljs.core.next(seq__20263_20287__$1);
var G__20295 = null;
var G__20296 = (0);
var G__20297 = (0);
seq__20263_20277 = G__20294;
chunk__20264_20278 = G__20295;
count__20265_20279 = G__20296;
i__20266_20280 = G__20297;
continue;
}
} else {
}
}
break;
}
} else {
var seq__20267_20298 = cljs.core.seq(classes__$1);
var chunk__20268_20299 = null;
var count__20269_20300 = (0);
var i__20270_20301 = (0);
while(true){
if((i__20270_20301 < count__20269_20300)){
var c_20302 = chunk__20268_20299.cljs$core$IIndexed$_nth$arity$2(null,i__20270_20301);
var class_name_20303 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_20303,c_20302))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_20303 === ""))?c_20302:[cljs.core.str(class_name_20303),cljs.core.str(" "),cljs.core.str(c_20302)].join('')));
}

var G__20304 = seq__20267_20298;
var G__20305 = chunk__20268_20299;
var G__20306 = count__20269_20300;
var G__20307 = (i__20270_20301 + (1));
seq__20267_20298 = G__20304;
chunk__20268_20299 = G__20305;
count__20269_20300 = G__20306;
i__20270_20301 = G__20307;
continue;
} else {
var temp__4406__auto___20308 = cljs.core.seq(seq__20267_20298);
if(temp__4406__auto___20308){
var seq__20267_20309__$1 = temp__4406__auto___20308;
if(cljs.core.chunked_seq_QMARK_(seq__20267_20309__$1)){
var c__6677__auto___20310 = cljs.core.chunk_first(seq__20267_20309__$1);
var G__20311 = cljs.core.chunk_rest(seq__20267_20309__$1);
var G__20312 = c__6677__auto___20310;
var G__20313 = cljs.core.count(c__6677__auto___20310);
var G__20314 = (0);
seq__20267_20298 = G__20311;
chunk__20268_20299 = G__20312;
count__20269_20300 = G__20313;
i__20270_20301 = G__20314;
continue;
} else {
var c_20315 = cljs.core.first(seq__20267_20309__$1);
var class_name_20316 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_20316,c_20315))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_20316 === ""))?c_20315:[cljs.core.str(class_name_20316),cljs.core.str(" "),cljs.core.str(c_20315)].join('')));
}

var G__20317 = cljs.core.next(seq__20267_20309__$1);
var G__20318 = null;
var G__20319 = (0);
var G__20320 = (0);
seq__20267_20298 = G__20317;
chunk__20268_20299 = G__20318;
count__20269_20300 = G__20319;
i__20270_20301 = G__20320;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});
var add_class_BANG___3 = (function() { 
var G__20321__delegate = function (elem,classes,more_classes){
var seq__20271_20322 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__20272_20323 = null;
var count__20273_20324 = (0);
var i__20274_20325 = (0);
while(true){
if((i__20274_20325 < count__20273_20324)){
var c_20326 = chunk__20272_20323.cljs$core$IIndexed$_nth$arity$2(null,i__20274_20325);
add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_20326);

var G__20327 = seq__20271_20322;
var G__20328 = chunk__20272_20323;
var G__20329 = count__20273_20324;
var G__20330 = (i__20274_20325 + (1));
seq__20271_20322 = G__20327;
chunk__20272_20323 = G__20328;
count__20273_20324 = G__20329;
i__20274_20325 = G__20330;
continue;
} else {
var temp__4406__auto___20331 = cljs.core.seq(seq__20271_20322);
if(temp__4406__auto___20331){
var seq__20271_20332__$1 = temp__4406__auto___20331;
if(cljs.core.chunked_seq_QMARK_(seq__20271_20332__$1)){
var c__6677__auto___20333 = cljs.core.chunk_first(seq__20271_20332__$1);
var G__20334 = cljs.core.chunk_rest(seq__20271_20332__$1);
var G__20335 = c__6677__auto___20333;
var G__20336 = cljs.core.count(c__6677__auto___20333);
var G__20337 = (0);
seq__20271_20322 = G__20334;
chunk__20272_20323 = G__20335;
count__20273_20324 = G__20336;
i__20274_20325 = G__20337;
continue;
} else {
var c_20338 = cljs.core.first(seq__20271_20332__$1);
add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_20338);

var G__20339 = cljs.core.next(seq__20271_20332__$1);
var G__20340 = null;
var G__20341 = (0);
var G__20342 = (0);
seq__20271_20322 = G__20339;
chunk__20272_20323 = G__20340;
count__20273_20324 = G__20341;
i__20274_20325 = G__20342;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__20321 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__20343__i = 0, G__20343__a = new Array(arguments.length -  2);
while (G__20343__i < G__20343__a.length) {G__20343__a[G__20343__i] = arguments[G__20343__i + 2]; ++G__20343__i;}
  more_classes = new cljs.core.IndexedSeq(G__20343__a,0);
} 
return G__20321__delegate.call(this,elem,classes,more_classes);};
G__20321.cljs$lang$maxFixedArity = 2;
G__20321.cljs$lang$applyTo = (function (arglist__20344){
var elem = cljs.core.first(arglist__20344);
arglist__20344 = cljs.core.next(arglist__20344);
var classes = cljs.core.first(arglist__20344);
var more_classes = cljs.core.rest(arglist__20344);
return G__20321__delegate(elem,classes,more_classes);
});
G__20321.cljs$core$IFn$_invoke$arity$variadic = G__20321__delegate;
return G__20321;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__20345 = null;
if (arguments.length > 2) {
var G__20346__i = 0, G__20346__a = new Array(arguments.length -  2);
while (G__20346__i < G__20346__a.length) {G__20346__a[G__20346__i] = arguments[G__20346__i + 2]; ++G__20346__i;}
G__20345 = new cljs.core.IndexedSeq(G__20346__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__20345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4404__auto___20359 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___20359)){
var class_list_20360 = temp__4404__auto___20359;
class_list_20360.remove(c__$1);
} else {
var class_name_20361 = dommy.core.class$(elem);
var new_class_name_20362 = dommy.utils.remove_class_str(class_name_20361,c__$1);
if((class_name_20361 === new_class_name_20362)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_20362);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__20363__delegate = function (elem,class$,classes){
var seq__20355 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__20356 = null;
var count__20357 = (0);
var i__20358 = (0);
while(true){
if((i__20358 < count__20357)){
var c = chunk__20356.cljs$core$IIndexed$_nth$arity$2(null,i__20358);
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__20364 = seq__20355;
var G__20365 = chunk__20356;
var G__20366 = count__20357;
var G__20367 = (i__20358 + (1));
seq__20355 = G__20364;
chunk__20356 = G__20365;
count__20357 = G__20366;
i__20358 = G__20367;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq(seq__20355);
if(temp__4406__auto__){
var seq__20355__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20355__$1)){
var c__6677__auto__ = cljs.core.chunk_first(seq__20355__$1);
var G__20368 = cljs.core.chunk_rest(seq__20355__$1);
var G__20369 = c__6677__auto__;
var G__20370 = cljs.core.count(c__6677__auto__);
var G__20371 = (0);
seq__20355 = G__20368;
chunk__20356 = G__20369;
count__20357 = G__20370;
i__20358 = G__20371;
continue;
} else {
var c = cljs.core.first(seq__20355__$1);
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__20372 = cljs.core.next(seq__20355__$1);
var G__20373 = null;
var G__20374 = (0);
var G__20375 = (0);
seq__20355 = G__20372;
chunk__20356 = G__20373;
count__20357 = G__20374;
i__20358 = G__20375;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__20363 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__20376__i = 0, G__20376__a = new Array(arguments.length -  2);
while (G__20376__i < G__20376__a.length) {G__20376__a[G__20376__i] = arguments[G__20376__i + 2]; ++G__20376__i;}
  classes = new cljs.core.IndexedSeq(G__20376__a,0);
} 
return G__20363__delegate.call(this,elem,class$,classes);};
G__20363.cljs$lang$maxFixedArity = 2;
G__20363.cljs$lang$applyTo = (function (arglist__20377){
var elem = cljs.core.first(arglist__20377);
arglist__20377 = cljs.core.next(arglist__20377);
var class$ = cljs.core.first(arglist__20377);
var classes = cljs.core.rest(arglist__20377);
return G__20363__delegate(elem,class$,classes);
});
G__20363.cljs$core$IFn$_invoke$arity$variadic = G__20363__delegate;
return G__20363;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__20378 = null;
if (arguments.length > 2) {
var G__20379__i = 0, G__20379__a = new Array(arguments.length -  2);
while (G__20379__i < G__20379__a.length) {G__20379__a[G__20379__i] = arguments[G__20379__i + 2]; ++G__20379__i;}
G__20378 = new cljs.core.IndexedSeq(G__20379__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__20378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4404__auto___20383 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___20383)){
var class_list_20384 = temp__4404__auto___20383;
class_list_20384.toggle(c__$1);
} else {
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
return toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.constant$keyword$124,((show_QMARK_)?"":"none")], 0));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){
return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__20396 = parent;
G__20396.appendChild(child);

return G__20396;
});
var append_BANG___3 = (function() { 
var G__20401__delegate = function (parent,child,more_children){
var seq__20397_20402 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__20398_20403 = null;
var count__20399_20404 = (0);
var i__20400_20405 = (0);
while(true){
if((i__20400_20405 < count__20399_20404)){
var c_20406 = chunk__20398_20403.cljs$core$IIndexed$_nth$arity$2(null,i__20400_20405);
append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_20406);

var G__20407 = seq__20397_20402;
var G__20408 = chunk__20398_20403;
var G__20409 = count__20399_20404;
var G__20410 = (i__20400_20405 + (1));
seq__20397_20402 = G__20407;
chunk__20398_20403 = G__20408;
count__20399_20404 = G__20409;
i__20400_20405 = G__20410;
continue;
} else {
var temp__4406__auto___20411 = cljs.core.seq(seq__20397_20402);
if(temp__4406__auto___20411){
var seq__20397_20412__$1 = temp__4406__auto___20411;
if(cljs.core.chunked_seq_QMARK_(seq__20397_20412__$1)){
var c__6677__auto___20413 = cljs.core.chunk_first(seq__20397_20412__$1);
var G__20414 = cljs.core.chunk_rest(seq__20397_20412__$1);
var G__20415 = c__6677__auto___20413;
var G__20416 = cljs.core.count(c__6677__auto___20413);
var G__20417 = (0);
seq__20397_20402 = G__20414;
chunk__20398_20403 = G__20415;
count__20399_20404 = G__20416;
i__20400_20405 = G__20417;
continue;
} else {
var c_20418 = cljs.core.first(seq__20397_20412__$1);
append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_20418);

var G__20419 = cljs.core.next(seq__20397_20412__$1);
var G__20420 = null;
var G__20421 = (0);
var G__20422 = (0);
seq__20397_20402 = G__20419;
chunk__20398_20403 = G__20420;
count__20399_20404 = G__20421;
i__20400_20405 = G__20422;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__20401 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__20423__i = 0, G__20423__a = new Array(arguments.length -  2);
while (G__20423__i < G__20423__a.length) {G__20423__a[G__20423__i] = arguments[G__20423__i + 2]; ++G__20423__i;}
  more_children = new cljs.core.IndexedSeq(G__20423__a,0);
} 
return G__20401__delegate.call(this,parent,child,more_children);};
G__20401.cljs$lang$maxFixedArity = 2;
G__20401.cljs$lang$applyTo = (function (arglist__20424){
var parent = cljs.core.first(arglist__20424);
arglist__20424 = cljs.core.next(arglist__20424);
var child = cljs.core.first(arglist__20424);
var more_children = cljs.core.rest(arglist__20424);
return G__20401__delegate(parent,child,more_children);
});
G__20401.cljs$core$IFn$_invoke$arity$variadic = G__20401__delegate;
return G__20401;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__20425 = null;
if (arguments.length > 2) {
var G__20426__i = 0, G__20426__a = new Array(arguments.length -  2);
while (G__20426__i < G__20426__a.length) {G__20426__a[G__20426__i] = arguments[G__20426__i + 2]; ++G__20426__i;}
G__20425 = new cljs.core.IndexedSeq(G__20426__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__20425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){
var G__20436 = parent;
G__20436.insertBefore(child,parent.firstChild);

return G__20436;
});
var prepend_BANG___3 = (function() { 
var G__20441__delegate = function (parent,child,more_children){
var seq__20437_20442 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__20438_20443 = null;
var count__20439_20444 = (0);
var i__20440_20445 = (0);
while(true){
if((i__20440_20445 < count__20439_20444)){
var c_20446 = chunk__20438_20443.cljs$core$IIndexed$_nth$arity$2(null,i__20440_20445);
prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_20446);

var G__20447 = seq__20437_20442;
var G__20448 = chunk__20438_20443;
var G__20449 = count__20439_20444;
var G__20450 = (i__20440_20445 + (1));
seq__20437_20442 = G__20447;
chunk__20438_20443 = G__20448;
count__20439_20444 = G__20449;
i__20440_20445 = G__20450;
continue;
} else {
var temp__4406__auto___20451 = cljs.core.seq(seq__20437_20442);
if(temp__4406__auto___20451){
var seq__20437_20452__$1 = temp__4406__auto___20451;
if(cljs.core.chunked_seq_QMARK_(seq__20437_20452__$1)){
var c__6677__auto___20453 = cljs.core.chunk_first(seq__20437_20452__$1);
var G__20454 = cljs.core.chunk_rest(seq__20437_20452__$1);
var G__20455 = c__6677__auto___20453;
var G__20456 = cljs.core.count(c__6677__auto___20453);
var G__20457 = (0);
seq__20437_20442 = G__20454;
chunk__20438_20443 = G__20455;
count__20439_20444 = G__20456;
i__20440_20445 = G__20457;
continue;
} else {
var c_20458 = cljs.core.first(seq__20437_20452__$1);
prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_20458);

var G__20459 = cljs.core.next(seq__20437_20452__$1);
var G__20460 = null;
var G__20461 = (0);
var G__20462 = (0);
seq__20437_20442 = G__20459;
chunk__20438_20443 = G__20460;
count__20439_20444 = G__20461;
i__20440_20445 = G__20462;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__20441 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__20463__i = 0, G__20463__a = new Array(arguments.length -  2);
while (G__20463__i < G__20463__a.length) {G__20463__a[G__20463__i] = arguments[G__20463__i + 2]; ++G__20463__i;}
  more_children = new cljs.core.IndexedSeq(G__20463__a,0);
} 
return G__20441__delegate.call(this,parent,child,more_children);};
G__20441.cljs$lang$maxFixedArity = 2;
G__20441.cljs$lang$applyTo = (function (arglist__20464){
var parent = cljs.core.first(arglist__20464);
arglist__20464 = cljs.core.next(arglist__20464);
var child = cljs.core.first(arglist__20464);
var more_children = cljs.core.rest(arglist__20464);
return G__20441__delegate(parent,child,more_children);
});
G__20441.cljs$core$IFn$_invoke$arity$variadic = G__20441__delegate;
return G__20441;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__20465 = null;
if (arguments.length > 2) {
var G__20466__i = 0, G__20466__a = new Array(arguments.length -  2);
while (G__20466__i < G__20466__a.length) {G__20466__a[G__20466__i] = arguments[G__20466__i + 2]; ++G__20466__i;}
G__20465 = new cljs.core.IndexedSeq(G__20466__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__20465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4404__auto___20467 = other.nextSibling;
if(cljs.core.truth_(temp__4404__auto___20467)){
var next_20468 = temp__4404__auto___20467;
dommy.core.insert_before_BANG_(elem,next_20468);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"p","p",1791580836,null)], 0)))].join('')));
}

return remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__20472 = p;
G__20472.removeChild(elem);

return G__20472;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20473){
var vec__20474 = p__20473;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__20474,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__20474,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__5890__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__5878__auto__ = related_target;
if(cljs.core.truth_(and__5878__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__5878__auto__;
}
})())){
return null;
} else {
var G__20475 = event;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20475) : f.call(null,G__20475));
}
});
;})(vec__20474,special_mouse_event,real_mouse_event))
});})(vec__20474,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,cljs.core.constant$keyword$133,cljs.core.constant$keyword$132,cljs.core.constant$keyword$134], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__5878__auto__ = selected_target;
if(cljs.core.truth_(and__5878__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.constant$keyword$117));
} else {
return and__5878__auto__;
}
})())){
event.selectedTarget = selected_target;

var G__20477 = event;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20477) : f.call(null,G__20477));
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__5890__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__20478__i = 0, G__20478__a = new Array(arguments.length -  2);
while (G__20478__i < G__20478__a.length) {G__20478__a[G__20478__i] = arguments[G__20478__i + 2]; ++G__20478__i;}
  args = new cljs.core.IndexedSeq(G__20478__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__20479){
var elem = cljs.core.first(arglist__20479);
arglist__20479 = cljs.core.next(arglist__20479);
var f = cljs.core.first(arglist__20479);
var args = cljs.core.rest(arglist__20479);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0)))].join('')));
}

var vec__20507_20534 = dommy.core.elem_and_selector(elem_sel);
var elem_20535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507_20534,(0),null);
var selector_20536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507_20534,(1),null);
var seq__20508_20537 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__20515_20538 = null;
var count__20516_20539 = (0);
var i__20517_20540 = (0);
while(true){
if((i__20517_20540 < count__20516_20539)){
var vec__20524_20541 = chunk__20515_20538.cljs$core$IIndexed$_nth$arity$2(null,i__20517_20540);
var orig_type_20542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20524_20541,(0),null);
var f_20543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20524_20541,(1),null);
var seq__20518_20544 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_20542,new cljs.core.PersistentArrayMap.fromArray([orig_type_20542,cljs.core.identity], true, false)));
var chunk__20520_20545 = null;
var count__20521_20546 = (0);
var i__20522_20547 = (0);
while(true){
if((i__20522_20547 < count__20521_20546)){
var vec__20525_20548 = chunk__20520_20545.cljs$core$IIndexed$_nth$arity$2(null,i__20522_20547);
var actual_type_20549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20525_20548,(0),null);
var factory_20550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20525_20548,(1),null);
var canonical_f_20551 = (cljs.core.truth_(selector_20536)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_20535,selector_20536):cljs.core.identity).call(null,(function (){var G__20526 = f_20543;
return (factory_20550.cljs$core$IFn$_invoke$arity$1 ? factory_20550.cljs$core$IFn$_invoke$arity$1(G__20526) : factory_20550.call(null,G__20526));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20535,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20536,actual_type_20549,f_20543], null),canonical_f_20551], 0));

if(cljs.core.truth_(elem_20535.addEventListener)){
elem_20535.addEventListener(cljs.core.name(actual_type_20549),canonical_f_20551);
} else {
elem_20535.attachEvent(cljs.core.name(actual_type_20549),canonical_f_20551);
}

var G__20552 = seq__20518_20544;
var G__20553 = chunk__20520_20545;
var G__20554 = count__20521_20546;
var G__20555 = (i__20522_20547 + (1));
seq__20518_20544 = G__20552;
chunk__20520_20545 = G__20553;
count__20521_20546 = G__20554;
i__20522_20547 = G__20555;
continue;
} else {
var temp__4406__auto___20556 = cljs.core.seq(seq__20518_20544);
if(temp__4406__auto___20556){
var seq__20518_20557__$1 = temp__4406__auto___20556;
if(cljs.core.chunked_seq_QMARK_(seq__20518_20557__$1)){
var c__6677__auto___20558 = cljs.core.chunk_first(seq__20518_20557__$1);
var G__20559 = cljs.core.chunk_rest(seq__20518_20557__$1);
var G__20560 = c__6677__auto___20558;
var G__20561 = cljs.core.count(c__6677__auto___20558);
var G__20562 = (0);
seq__20518_20544 = G__20559;
chunk__20520_20545 = G__20560;
count__20521_20546 = G__20561;
i__20522_20547 = G__20562;
continue;
} else {
var vec__20527_20563 = cljs.core.first(seq__20518_20557__$1);
var actual_type_20564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527_20563,(0),null);
var factory_20565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20527_20563,(1),null);
var canonical_f_20566 = (cljs.core.truth_(selector_20536)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_20535,selector_20536):cljs.core.identity).call(null,(function (){var G__20528 = f_20543;
return (factory_20565.cljs$core$IFn$_invoke$arity$1 ? factory_20565.cljs$core$IFn$_invoke$arity$1(G__20528) : factory_20565.call(null,G__20528));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20535,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20536,actual_type_20564,f_20543], null),canonical_f_20566], 0));

if(cljs.core.truth_(elem_20535.addEventListener)){
elem_20535.addEventListener(cljs.core.name(actual_type_20564),canonical_f_20566);
} else {
elem_20535.attachEvent(cljs.core.name(actual_type_20564),canonical_f_20566);
}

var G__20567 = cljs.core.next(seq__20518_20557__$1);
var G__20568 = null;
var G__20569 = (0);
var G__20570 = (0);
seq__20518_20544 = G__20567;
chunk__20520_20545 = G__20568;
count__20521_20546 = G__20569;
i__20522_20547 = G__20570;
continue;
}
} else {
}
}
break;
}

var G__20571 = seq__20508_20537;
var G__20572 = chunk__20515_20538;
var G__20573 = count__20516_20539;
var G__20574 = (i__20517_20540 + (1));
seq__20508_20537 = G__20571;
chunk__20515_20538 = G__20572;
count__20516_20539 = G__20573;
i__20517_20540 = G__20574;
continue;
} else {
var temp__4406__auto___20575 = cljs.core.seq(seq__20508_20537);
if(temp__4406__auto___20575){
var seq__20508_20576__$1 = temp__4406__auto___20575;
if(cljs.core.chunked_seq_QMARK_(seq__20508_20576__$1)){
var c__6677__auto___20577 = cljs.core.chunk_first(seq__20508_20576__$1);
var G__20578 = cljs.core.chunk_rest(seq__20508_20576__$1);
var G__20579 = c__6677__auto___20577;
var G__20580 = cljs.core.count(c__6677__auto___20577);
var G__20581 = (0);
seq__20508_20537 = G__20578;
chunk__20515_20538 = G__20579;
count__20516_20539 = G__20580;
i__20517_20540 = G__20581;
continue;
} else {
var vec__20529_20582 = cljs.core.first(seq__20508_20576__$1);
var orig_type_20583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20529_20582,(0),null);
var f_20584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20529_20582,(1),null);
var seq__20509_20585 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_20583,new cljs.core.PersistentArrayMap.fromArray([orig_type_20583,cljs.core.identity], true, false)));
var chunk__20511_20586 = null;
var count__20512_20587 = (0);
var i__20513_20588 = (0);
while(true){
if((i__20513_20588 < count__20512_20587)){
var vec__20530_20589 = chunk__20511_20586.cljs$core$IIndexed$_nth$arity$2(null,i__20513_20588);
var actual_type_20590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20530_20589,(0),null);
var factory_20591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20530_20589,(1),null);
var canonical_f_20592 = (cljs.core.truth_(selector_20536)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_20535,selector_20536):cljs.core.identity).call(null,(function (){var G__20531 = f_20584;
return (factory_20591.cljs$core$IFn$_invoke$arity$1 ? factory_20591.cljs$core$IFn$_invoke$arity$1(G__20531) : factory_20591.call(null,G__20531));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20535,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20536,actual_type_20590,f_20584], null),canonical_f_20592], 0));

if(cljs.core.truth_(elem_20535.addEventListener)){
elem_20535.addEventListener(cljs.core.name(actual_type_20590),canonical_f_20592);
} else {
elem_20535.attachEvent(cljs.core.name(actual_type_20590),canonical_f_20592);
}

var G__20593 = seq__20509_20585;
var G__20594 = chunk__20511_20586;
var G__20595 = count__20512_20587;
var G__20596 = (i__20513_20588 + (1));
seq__20509_20585 = G__20593;
chunk__20511_20586 = G__20594;
count__20512_20587 = G__20595;
i__20513_20588 = G__20596;
continue;
} else {
var temp__4406__auto___20597__$1 = cljs.core.seq(seq__20509_20585);
if(temp__4406__auto___20597__$1){
var seq__20509_20598__$1 = temp__4406__auto___20597__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20509_20598__$1)){
var c__6677__auto___20599 = cljs.core.chunk_first(seq__20509_20598__$1);
var G__20600 = cljs.core.chunk_rest(seq__20509_20598__$1);
var G__20601 = c__6677__auto___20599;
var G__20602 = cljs.core.count(c__6677__auto___20599);
var G__20603 = (0);
seq__20509_20585 = G__20600;
chunk__20511_20586 = G__20601;
count__20512_20587 = G__20602;
i__20513_20588 = G__20603;
continue;
} else {
var vec__20532_20604 = cljs.core.first(seq__20509_20598__$1);
var actual_type_20605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20532_20604,(0),null);
var factory_20606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20532_20604,(1),null);
var canonical_f_20607 = (cljs.core.truth_(selector_20536)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_20535,selector_20536):cljs.core.identity).call(null,(function (){var G__20533 = f_20584;
return (factory_20606.cljs$core$IFn$_invoke$arity$1 ? factory_20606.cljs$core$IFn$_invoke$arity$1(G__20533) : factory_20606.call(null,G__20533));
})());
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20535,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20536,actual_type_20605,f_20584], null),canonical_f_20607], 0));

if(cljs.core.truth_(elem_20535.addEventListener)){
elem_20535.addEventListener(cljs.core.name(actual_type_20605),canonical_f_20607);
} else {
elem_20535.attachEvent(cljs.core.name(actual_type_20605),canonical_f_20607);
}

var G__20608 = cljs.core.next(seq__20509_20598__$1);
var G__20609 = null;
var G__20610 = (0);
var G__20611 = (0);
seq__20509_20585 = G__20608;
chunk__20511_20586 = G__20609;
count__20512_20587 = G__20610;
i__20513_20588 = G__20611;
continue;
}
} else {
}
}
break;
}

var G__20612 = cljs.core.next(seq__20508_20576__$1);
var G__20613 = null;
var G__20614 = (0);
var G__20615 = (0);
seq__20508_20537 = G__20612;
chunk__20515_20538 = G__20613;
count__20516_20539 = G__20614;
i__20517_20540 = G__20615;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__20616__i = 0, G__20616__a = new Array(arguments.length -  1);
while (G__20616__i < G__20616__a.length) {G__20616__a[G__20616__i] = arguments[G__20616__i + 1]; ++G__20616__i;}
  type_fs = new cljs.core.IndexedSeq(G__20616__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__20617){
var elem_sel = cljs.core.first(arglist__20617);
var type_fs = cljs.core.rest(arglist__20617);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0)))].join('')));
}

var vec__20641_20664 = dommy.core.elem_and_selector(elem_sel);
var elem_20665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641_20664,(0),null);
var selector_20666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641_20664,(1),null);
var seq__20642_20667 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__20649_20668 = null;
var count__20650_20669 = (0);
var i__20651_20670 = (0);
while(true){
if((i__20651_20670 < count__20650_20669)){
var vec__20658_20671 = chunk__20649_20668.cljs$core$IIndexed$_nth$arity$2(null,i__20651_20670);
var orig_type_20672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20658_20671,(0),null);
var f_20673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20658_20671,(1),null);
var seq__20652_20674 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_20672,new cljs.core.PersistentArrayMap.fromArray([orig_type_20672,cljs.core.identity], true, false)));
var chunk__20654_20675 = null;
var count__20655_20676 = (0);
var i__20656_20677 = (0);
while(true){
if((i__20656_20677 < count__20655_20676)){
var vec__20659_20678 = chunk__20654_20675.cljs$core$IIndexed$_nth$arity$2(null,i__20656_20677);
var actual_type_20679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20659_20678,(0),null);
var __20680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20659_20678,(1),null);
var keys_20681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20666,actual_type_20679,f_20673], null);
var canonical_f_20682 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_20665),keys_20681);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20665,dommy.utils.dissoc_in,cljs.core.array_seq([keys_20681], 0));

if(cljs.core.truth_(elem_20665.removeEventListener)){
elem_20665.removeEventListener(cljs.core.name(actual_type_20679),canonical_f_20682);
} else {
elem_20665.detachEvent(cljs.core.name(actual_type_20679),canonical_f_20682);
}

var G__20683 = seq__20652_20674;
var G__20684 = chunk__20654_20675;
var G__20685 = count__20655_20676;
var G__20686 = (i__20656_20677 + (1));
seq__20652_20674 = G__20683;
chunk__20654_20675 = G__20684;
count__20655_20676 = G__20685;
i__20656_20677 = G__20686;
continue;
} else {
var temp__4406__auto___20687 = cljs.core.seq(seq__20652_20674);
if(temp__4406__auto___20687){
var seq__20652_20688__$1 = temp__4406__auto___20687;
if(cljs.core.chunked_seq_QMARK_(seq__20652_20688__$1)){
var c__6677__auto___20689 = cljs.core.chunk_first(seq__20652_20688__$1);
var G__20690 = cljs.core.chunk_rest(seq__20652_20688__$1);
var G__20691 = c__6677__auto___20689;
var G__20692 = cljs.core.count(c__6677__auto___20689);
var G__20693 = (0);
seq__20652_20674 = G__20690;
chunk__20654_20675 = G__20691;
count__20655_20676 = G__20692;
i__20656_20677 = G__20693;
continue;
} else {
var vec__20660_20694 = cljs.core.first(seq__20652_20688__$1);
var actual_type_20695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660_20694,(0),null);
var __20696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20660_20694,(1),null);
var keys_20697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20666,actual_type_20695,f_20673], null);
var canonical_f_20698 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_20665),keys_20697);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20665,dommy.utils.dissoc_in,cljs.core.array_seq([keys_20697], 0));

if(cljs.core.truth_(elem_20665.removeEventListener)){
elem_20665.removeEventListener(cljs.core.name(actual_type_20695),canonical_f_20698);
} else {
elem_20665.detachEvent(cljs.core.name(actual_type_20695),canonical_f_20698);
}

var G__20699 = cljs.core.next(seq__20652_20688__$1);
var G__20700 = null;
var G__20701 = (0);
var G__20702 = (0);
seq__20652_20674 = G__20699;
chunk__20654_20675 = G__20700;
count__20655_20676 = G__20701;
i__20656_20677 = G__20702;
continue;
}
} else {
}
}
break;
}

var G__20703 = seq__20642_20667;
var G__20704 = chunk__20649_20668;
var G__20705 = count__20650_20669;
var G__20706 = (i__20651_20670 + (1));
seq__20642_20667 = G__20703;
chunk__20649_20668 = G__20704;
count__20650_20669 = G__20705;
i__20651_20670 = G__20706;
continue;
} else {
var temp__4406__auto___20707 = cljs.core.seq(seq__20642_20667);
if(temp__4406__auto___20707){
var seq__20642_20708__$1 = temp__4406__auto___20707;
if(cljs.core.chunked_seq_QMARK_(seq__20642_20708__$1)){
var c__6677__auto___20709 = cljs.core.chunk_first(seq__20642_20708__$1);
var G__20710 = cljs.core.chunk_rest(seq__20642_20708__$1);
var G__20711 = c__6677__auto___20709;
var G__20712 = cljs.core.count(c__6677__auto___20709);
var G__20713 = (0);
seq__20642_20667 = G__20710;
chunk__20649_20668 = G__20711;
count__20650_20669 = G__20712;
i__20651_20670 = G__20713;
continue;
} else {
var vec__20661_20714 = cljs.core.first(seq__20642_20708__$1);
var orig_type_20715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20661_20714,(0),null);
var f_20716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20661_20714,(1),null);
var seq__20643_20717 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_20715,new cljs.core.PersistentArrayMap.fromArray([orig_type_20715,cljs.core.identity], true, false)));
var chunk__20645_20718 = null;
var count__20646_20719 = (0);
var i__20647_20720 = (0);
while(true){
if((i__20647_20720 < count__20646_20719)){
var vec__20662_20721 = chunk__20645_20718.cljs$core$IIndexed$_nth$arity$2(null,i__20647_20720);
var actual_type_20722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20662_20721,(0),null);
var __20723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20662_20721,(1),null);
var keys_20724 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20666,actual_type_20722,f_20716], null);
var canonical_f_20725 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_20665),keys_20724);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20665,dommy.utils.dissoc_in,cljs.core.array_seq([keys_20724], 0));

if(cljs.core.truth_(elem_20665.removeEventListener)){
elem_20665.removeEventListener(cljs.core.name(actual_type_20722),canonical_f_20725);
} else {
elem_20665.detachEvent(cljs.core.name(actual_type_20722),canonical_f_20725);
}

var G__20726 = seq__20643_20717;
var G__20727 = chunk__20645_20718;
var G__20728 = count__20646_20719;
var G__20729 = (i__20647_20720 + (1));
seq__20643_20717 = G__20726;
chunk__20645_20718 = G__20727;
count__20646_20719 = G__20728;
i__20647_20720 = G__20729;
continue;
} else {
var temp__4406__auto___20730__$1 = cljs.core.seq(seq__20643_20717);
if(temp__4406__auto___20730__$1){
var seq__20643_20731__$1 = temp__4406__auto___20730__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20643_20731__$1)){
var c__6677__auto___20732 = cljs.core.chunk_first(seq__20643_20731__$1);
var G__20733 = cljs.core.chunk_rest(seq__20643_20731__$1);
var G__20734 = c__6677__auto___20732;
var G__20735 = cljs.core.count(c__6677__auto___20732);
var G__20736 = (0);
seq__20643_20717 = G__20733;
chunk__20645_20718 = G__20734;
count__20646_20719 = G__20735;
i__20647_20720 = G__20736;
continue;
} else {
var vec__20663_20737 = cljs.core.first(seq__20643_20731__$1);
var actual_type_20738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20663_20737,(0),null);
var __20739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20663_20737,(1),null);
var keys_20740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_20666,actual_type_20738,f_20716], null);
var canonical_f_20741 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_20665),keys_20740);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_20665,dommy.utils.dissoc_in,cljs.core.array_seq([keys_20740], 0));

if(cljs.core.truth_(elem_20665.removeEventListener)){
elem_20665.removeEventListener(cljs.core.name(actual_type_20738),canonical_f_20741);
} else {
elem_20665.detachEvent(cljs.core.name(actual_type_20738),canonical_f_20741);
}

var G__20742 = cljs.core.next(seq__20643_20731__$1);
var G__20743 = null;
var G__20744 = (0);
var G__20745 = (0);
seq__20643_20717 = G__20742;
chunk__20645_20718 = G__20743;
count__20646_20719 = G__20744;
i__20647_20720 = G__20745;
continue;
}
} else {
}
}
break;
}

var G__20746 = cljs.core.next(seq__20642_20708__$1);
var G__20747 = null;
var G__20748 = (0);
var G__20749 = (0);
seq__20642_20667 = G__20746;
chunk__20649_20668 = G__20747;
count__20650_20669 = G__20748;
i__20651_20670 = G__20749;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__20750__i = 0, G__20750__a = new Array(arguments.length -  1);
while (G__20750__i < G__20750__a.length) {G__20750__a[G__20750__i] = arguments[G__20750__i + 1]; ++G__20750__i;}
  type_fs = new cljs.core.IndexedSeq(G__20750__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__20751){
var elem_sel = cljs.core.first(arglist__20751);
var type_fs = cljs.core.rest(arglist__20751);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))], 0)))].join('')));
}

var vec__20763_20774 = dommy.core.elem_and_selector(elem_sel);
var elem_20775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20763_20774,(0),null);
var selector_20776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20763_20774,(1),null);
var seq__20764_20777 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__20765_20778 = null;
var count__20766_20779 = (0);
var i__20767_20780 = (0);
while(true){
if((i__20767_20780 < count__20766_20779)){
var vec__20768_20781 = chunk__20765_20778.cljs$core$IIndexed$_nth$arity$2(null,i__20767_20780);
var type_20782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768_20781,(0),null);
var f_20783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768_20781,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_20782,((function (seq__20764_20777,chunk__20765_20778,count__20766_20779,i__20767_20780,vec__20768_20781,type_20782,f_20783,vec__20763_20774,elem_20775,selector_20776){
return (function this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_20782,this_fn], 0));

var G__20770 = e;
return (f_20783.cljs$core$IFn$_invoke$arity$1 ? f_20783.cljs$core$IFn$_invoke$arity$1(G__20770) : f_20783.call(null,G__20770));
});})(seq__20764_20777,chunk__20765_20778,count__20766_20779,i__20767_20780,vec__20768_20781,type_20782,f_20783,vec__20763_20774,elem_20775,selector_20776))
], 0));

var G__20784 = seq__20764_20777;
var G__20785 = chunk__20765_20778;
var G__20786 = count__20766_20779;
var G__20787 = (i__20767_20780 + (1));
seq__20764_20777 = G__20784;
chunk__20765_20778 = G__20785;
count__20766_20779 = G__20786;
i__20767_20780 = G__20787;
continue;
} else {
var temp__4406__auto___20788 = cljs.core.seq(seq__20764_20777);
if(temp__4406__auto___20788){
var seq__20764_20789__$1 = temp__4406__auto___20788;
if(cljs.core.chunked_seq_QMARK_(seq__20764_20789__$1)){
var c__6677__auto___20790 = cljs.core.chunk_first(seq__20764_20789__$1);
var G__20791 = cljs.core.chunk_rest(seq__20764_20789__$1);
var G__20792 = c__6677__auto___20790;
var G__20793 = cljs.core.count(c__6677__auto___20790);
var G__20794 = (0);
seq__20764_20777 = G__20791;
chunk__20765_20778 = G__20792;
count__20766_20779 = G__20793;
i__20767_20780 = G__20794;
continue;
} else {
var vec__20771_20795 = cljs.core.first(seq__20764_20789__$1);
var type_20796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20771_20795,(0),null);
var f_20797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20771_20795,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_20796,((function (seq__20764_20777,chunk__20765_20778,count__20766_20779,i__20767_20780,vec__20771_20795,type_20796,f_20797,seq__20764_20789__$1,temp__4406__auto___20788,vec__20763_20774,elem_20775,selector_20776){
return (function this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_20796,this_fn], 0));

var G__20773 = e;
return (f_20797.cljs$core$IFn$_invoke$arity$1 ? f_20797.cljs$core$IFn$_invoke$arity$1(G__20773) : f_20797.call(null,G__20773));
});})(seq__20764_20777,chunk__20765_20778,count__20766_20779,i__20767_20780,vec__20771_20795,type_20796,f_20797,seq__20764_20789__$1,temp__4406__auto___20788,vec__20763_20774,elem_20775,selector_20776))
], 0));

var G__20798 = cljs.core.next(seq__20764_20789__$1);
var G__20799 = null;
var G__20800 = (0);
var G__20801 = (0);
seq__20764_20777 = G__20798;
chunk__20765_20778 = G__20799;
count__20766_20779 = G__20800;
i__20767_20780 = G__20801;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__20802__i = 0, G__20802__a = new Array(arguments.length -  1);
while (G__20802__i < G__20802__a.length) {G__20802__a[G__20802__i] = arguments[G__20802__i + 1]; ++G__20802__i;}
  type_fs = new cljs.core.IndexedSeq(G__20802__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__20803){
var elem_sel = cljs.core.first(arglist__20803);
var type_fs = cljs.core.rest(arglist__20803);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
