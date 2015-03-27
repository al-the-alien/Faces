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
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function text(elem){
var or__14444__auto__ = elem.textContent;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
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
return elem.getAttribute(dommy.utils.as_str.call(null,k));
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
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
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

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4404__auto__ = elem.classList;
if(cljs.core.truth_(temp__4404__auto__)){
var class_list = temp__4404__auto__;
return class_list.contains(c__$1);
} else {
var temp__4406__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4406__auto__)){
var class_name = temp__4406__auto__;
var temp__4406__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
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
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
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
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
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
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
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
return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__31292_SHARP_){
return !((p1__31292_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
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
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__31299_31305 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__31300_31306 = null;
var count__31301_31307 = (0);
var i__31302_31308 = (0);
while(true){
if((i__31302_31308 < count__31301_31307)){
var vec__31303_31309 = cljs.core._nth.call(null,chunk__31300_31306,i__31302_31308);
var k_31310 = cljs.core.nth.call(null,vec__31303_31309,(0),null);
var v_31311 = cljs.core.nth.call(null,vec__31303_31309,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_31310),v_31311);

var G__31312 = seq__31299_31305;
var G__31313 = chunk__31300_31306;
var G__31314 = count__31301_31307;
var G__31315 = (i__31302_31308 + (1));
seq__31299_31305 = G__31312;
chunk__31300_31306 = G__31313;
count__31301_31307 = G__31314;
i__31302_31308 = G__31315;
continue;
} else {
var temp__4406__auto___31316 = cljs.core.seq.call(null,seq__31299_31305);
if(temp__4406__auto___31316){
var seq__31299_31317__$1 = temp__4406__auto___31316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31299_31317__$1)){
var c__15231__auto___31318 = cljs.core.chunk_first.call(null,seq__31299_31317__$1);
var G__31319 = cljs.core.chunk_rest.call(null,seq__31299_31317__$1);
var G__31320 = c__15231__auto___31318;
var G__31321 = cljs.core.count.call(null,c__15231__auto___31318);
var G__31322 = (0);
seq__31299_31305 = G__31319;
chunk__31300_31306 = G__31320;
count__31301_31307 = G__31321;
i__31302_31308 = G__31322;
continue;
} else {
var vec__31304_31323 = cljs.core.first.call(null,seq__31299_31317__$1);
var k_31324 = cljs.core.nth.call(null,vec__31304_31323,(0),null);
var v_31325 = cljs.core.nth.call(null,vec__31304_31323,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_31324),v_31325);

var G__31326 = cljs.core.next.call(null,seq__31299_31317__$1);
var G__31327 = null;
var G__31328 = (0);
var G__31329 = (0);
seq__31299_31305 = G__31326;
chunk__31300_31306 = G__31327;
count__31301_31307 = G__31328;
i__31302_31308 = G__31329;
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
var G__31330__i = 0, G__31330__a = new Array(arguments.length -  1);
while (G__31330__i < G__31330__a.length) {G__31330__a[G__31330__i] = arguments[G__31330__i + 1]; ++G__31330__i;}
  kvs = new cljs.core.IndexedSeq(G__31330__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31331){
var elem = cljs.core.first(arglist__31331);
var kvs = cljs.core.rest(arglist__31331);
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

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__31338_31344 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__31339_31345 = null;
var count__31340_31346 = (0);
var i__31341_31347 = (0);
while(true){
if((i__31341_31347 < count__31340_31346)){
var vec__31342_31348 = cljs.core._nth.call(null,chunk__31339_31345,i__31341_31347);
var k_31349 = cljs.core.nth.call(null,vec__31342_31348,(0),null);
var v_31350 = cljs.core.nth.call(null,vec__31342_31348,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_31349,[cljs.core.str(v_31350),cljs.core.str("px")].join(''));

var G__31351 = seq__31338_31344;
var G__31352 = chunk__31339_31345;
var G__31353 = count__31340_31346;
var G__31354 = (i__31341_31347 + (1));
seq__31338_31344 = G__31351;
chunk__31339_31345 = G__31352;
count__31340_31346 = G__31353;
i__31341_31347 = G__31354;
continue;
} else {
var temp__4406__auto___31355 = cljs.core.seq.call(null,seq__31338_31344);
if(temp__4406__auto___31355){
var seq__31338_31356__$1 = temp__4406__auto___31355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31338_31356__$1)){
var c__15231__auto___31357 = cljs.core.chunk_first.call(null,seq__31338_31356__$1);
var G__31358 = cljs.core.chunk_rest.call(null,seq__31338_31356__$1);
var G__31359 = c__15231__auto___31357;
var G__31360 = cljs.core.count.call(null,c__15231__auto___31357);
var G__31361 = (0);
seq__31338_31344 = G__31358;
chunk__31339_31345 = G__31359;
count__31340_31346 = G__31360;
i__31341_31347 = G__31361;
continue;
} else {
var vec__31343_31362 = cljs.core.first.call(null,seq__31338_31356__$1);
var k_31363 = cljs.core.nth.call(null,vec__31343_31362,(0),null);
var v_31364 = cljs.core.nth.call(null,vec__31343_31362,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_31363,[cljs.core.str(v_31364),cljs.core.str("px")].join(''));

var G__31365 = cljs.core.next.call(null,seq__31338_31356__$1);
var G__31366 = null;
var G__31367 = (0);
var G__31368 = (0);
seq__31338_31344 = G__31365;
chunk__31339_31345 = G__31366;
count__31340_31346 = G__31367;
i__31341_31347 = G__31368;
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
var G__31369__i = 0, G__31369__a = new Array(arguments.length -  1);
while (G__31369__i < G__31369__a.length) {G__31369__a[G__31369__i] = arguments[G__31369__i + 1]; ++G__31369__i;}
  kvs = new cljs.core.IndexedSeq(G__31369__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__31370){
var elem = cljs.core.first(arglist__31370);
var kvs = cljs.core.rest(arglist__31370);
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
return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__31379 = elem;
(G__31379[k__$1] = v);

return G__31379;
} else {
var G__31380 = elem;
G__31380.setAttribute(k__$1,v);

return G__31380;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__31387__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__31381_31388 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__31382_31389 = null;
var count__31383_31390 = (0);
var i__31384_31391 = (0);
while(true){
if((i__31384_31391 < count__31383_31390)){
var vec__31385_31392 = cljs.core._nth.call(null,chunk__31382_31389,i__31384_31391);
var k_31393__$1 = cljs.core.nth.call(null,vec__31385_31392,(0),null);
var v_31394__$1 = cljs.core.nth.call(null,vec__31385_31392,(1),null);
set_attr_BANG_.call(null,elem,k_31393__$1,v_31394__$1);

var G__31395 = seq__31381_31388;
var G__31396 = chunk__31382_31389;
var G__31397 = count__31383_31390;
var G__31398 = (i__31384_31391 + (1));
seq__31381_31388 = G__31395;
chunk__31382_31389 = G__31396;
count__31383_31390 = G__31397;
i__31384_31391 = G__31398;
continue;
} else {
var temp__4406__auto___31399 = cljs.core.seq.call(null,seq__31381_31388);
if(temp__4406__auto___31399){
var seq__31381_31400__$1 = temp__4406__auto___31399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31381_31400__$1)){
var c__15231__auto___31401 = cljs.core.chunk_first.call(null,seq__31381_31400__$1);
var G__31402 = cljs.core.chunk_rest.call(null,seq__31381_31400__$1);
var G__31403 = c__15231__auto___31401;
var G__31404 = cljs.core.count.call(null,c__15231__auto___31401);
var G__31405 = (0);
seq__31381_31388 = G__31402;
chunk__31382_31389 = G__31403;
count__31383_31390 = G__31404;
i__31384_31391 = G__31405;
continue;
} else {
var vec__31386_31406 = cljs.core.first.call(null,seq__31381_31400__$1);
var k_31407__$1 = cljs.core.nth.call(null,vec__31386_31406,(0),null);
var v_31408__$1 = cljs.core.nth.call(null,vec__31386_31406,(1),null);
set_attr_BANG_.call(null,elem,k_31407__$1,v_31408__$1);

var G__31409 = cljs.core.next.call(null,seq__31381_31400__$1);
var G__31410 = null;
var G__31411 = (0);
var G__31412 = (0);
seq__31381_31388 = G__31409;
chunk__31382_31389 = G__31410;
count__31383_31390 = G__31411;
i__31384_31391 = G__31412;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__31387 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__31413__i = 0, G__31413__a = new Array(arguments.length -  3);
while (G__31413__i < G__31413__a.length) {G__31413__a[G__31413__i] = arguments[G__31413__i + 3]; ++G__31413__i;}
  kvs = new cljs.core.IndexedSeq(G__31413__a,0);
} 
return G__31387__delegate.call(this,elem,k,v,kvs);};
G__31387.cljs$lang$maxFixedArity = 3;
G__31387.cljs$lang$applyTo = (function (arglist__31414){
var elem = cljs.core.first(arglist__31414);
arglist__31414 = cljs.core.next(arglist__31414);
var k = cljs.core.first(arglist__31414);
arglist__31414 = cljs.core.next(arglist__31414);
var v = cljs.core.first(arglist__31414);
var kvs = cljs.core.rest(arglist__31414);
return G__31387__delegate(elem,k,v,kvs);
});
G__31387.cljs$core$IFn$_invoke$arity$variadic = G__31387__delegate;
return G__31387;
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
var G__31415 = null;
if (arguments.length > 3) {
var G__31416__i = 0, G__31416__a = new Array(arguments.length -  3);
while (G__31416__i < G__31416__a.length) {G__31416__a[G__31416__i] = arguments[G__31416__i + 3]; ++G__31416__i;}
G__31415 = new cljs.core.IndexedSeq(G__31416__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__31415);
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
var k_31425__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_31425__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_31425__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__31426__delegate = function (elem,k,ks){
var seq__31421_31427 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__31422_31428 = null;
var count__31423_31429 = (0);
var i__31424_31430 = (0);
while(true){
if((i__31424_31430 < count__31423_31429)){
var k_31431__$1 = cljs.core._nth.call(null,chunk__31422_31428,i__31424_31430);
remove_attr_BANG_.call(null,elem,k_31431__$1);

var G__31432 = seq__31421_31427;
var G__31433 = chunk__31422_31428;
var G__31434 = count__31423_31429;
var G__31435 = (i__31424_31430 + (1));
seq__31421_31427 = G__31432;
chunk__31422_31428 = G__31433;
count__31423_31429 = G__31434;
i__31424_31430 = G__31435;
continue;
} else {
var temp__4406__auto___31436 = cljs.core.seq.call(null,seq__31421_31427);
if(temp__4406__auto___31436){
var seq__31421_31437__$1 = temp__4406__auto___31436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31421_31437__$1)){
var c__15231__auto___31438 = cljs.core.chunk_first.call(null,seq__31421_31437__$1);
var G__31439 = cljs.core.chunk_rest.call(null,seq__31421_31437__$1);
var G__31440 = c__15231__auto___31438;
var G__31441 = cljs.core.count.call(null,c__15231__auto___31438);
var G__31442 = (0);
seq__31421_31427 = G__31439;
chunk__31422_31428 = G__31440;
count__31423_31429 = G__31441;
i__31424_31430 = G__31442;
continue;
} else {
var k_31443__$1 = cljs.core.first.call(null,seq__31421_31437__$1);
remove_attr_BANG_.call(null,elem,k_31443__$1);

var G__31444 = cljs.core.next.call(null,seq__31421_31437__$1);
var G__31445 = null;
var G__31446 = (0);
var G__31447 = (0);
seq__31421_31427 = G__31444;
chunk__31422_31428 = G__31445;
count__31423_31429 = G__31446;
i__31424_31430 = G__31447;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__31426 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__31448__i = 0, G__31448__a = new Array(arguments.length -  2);
while (G__31448__i < G__31448__a.length) {G__31448__a[G__31448__i] = arguments[G__31448__i + 2]; ++G__31448__i;}
  ks = new cljs.core.IndexedSeq(G__31448__a,0);
} 
return G__31426__delegate.call(this,elem,k,ks);};
G__31426.cljs$lang$maxFixedArity = 2;
G__31426.cljs$lang$applyTo = (function (arglist__31449){
var elem = cljs.core.first(arglist__31449);
arglist__31449 = cljs.core.next(arglist__31449);
var k = cljs.core.first(arglist__31449);
var ks = cljs.core.rest(arglist__31449);
return G__31426__delegate(elem,k,ks);
});
G__31426.cljs$core$IFn$_invoke$arity$variadic = G__31426__delegate;
return G__31426;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__31450 = null;
if (arguments.length > 2) {
var G__31451__i = 0, G__31451__a = new Array(arguments.length -  2);
while (G__31451__i < G__31451__a.length) {G__31451__a[G__31451__i] = arguments[G__31451__i + 2]; ++G__31451__i;}
G__31450 = new cljs.core.IndexedSeq(G__31451__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__31450);
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
return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
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
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4404__auto___31476 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___31476)){
var class_list_31477 = temp__4404__auto___31476;
var seq__31464_31478 = cljs.core.seq.call(null,classes__$1);
var chunk__31465_31479 = null;
var count__31466_31480 = (0);
var i__31467_31481 = (0);
while(true){
if((i__31467_31481 < count__31466_31480)){
var c_31482 = cljs.core._nth.call(null,chunk__31465_31479,i__31467_31481);
class_list_31477.add(c_31482);

var G__31483 = seq__31464_31478;
var G__31484 = chunk__31465_31479;
var G__31485 = count__31466_31480;
var G__31486 = (i__31467_31481 + (1));
seq__31464_31478 = G__31483;
chunk__31465_31479 = G__31484;
count__31466_31480 = G__31485;
i__31467_31481 = G__31486;
continue;
} else {
var temp__4406__auto___31487 = cljs.core.seq.call(null,seq__31464_31478);
if(temp__4406__auto___31487){
var seq__31464_31488__$1 = temp__4406__auto___31487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31464_31488__$1)){
var c__15231__auto___31489 = cljs.core.chunk_first.call(null,seq__31464_31488__$1);
var G__31490 = cljs.core.chunk_rest.call(null,seq__31464_31488__$1);
var G__31491 = c__15231__auto___31489;
var G__31492 = cljs.core.count.call(null,c__15231__auto___31489);
var G__31493 = (0);
seq__31464_31478 = G__31490;
chunk__31465_31479 = G__31491;
count__31466_31480 = G__31492;
i__31467_31481 = G__31493;
continue;
} else {
var c_31494 = cljs.core.first.call(null,seq__31464_31488__$1);
class_list_31477.add(c_31494);

var G__31495 = cljs.core.next.call(null,seq__31464_31488__$1);
var G__31496 = null;
var G__31497 = (0);
var G__31498 = (0);
seq__31464_31478 = G__31495;
chunk__31465_31479 = G__31496;
count__31466_31480 = G__31497;
i__31467_31481 = G__31498;
continue;
}
} else {
}
}
break;
}
} else {
var seq__31468_31499 = cljs.core.seq.call(null,classes__$1);
var chunk__31469_31500 = null;
var count__31470_31501 = (0);
var i__31471_31502 = (0);
while(true){
if((i__31471_31502 < count__31470_31501)){
var c_31503 = cljs.core._nth.call(null,chunk__31469_31500,i__31471_31502);
var class_name_31504 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_31504,c_31503))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_31504 === ""))?c_31503:[cljs.core.str(class_name_31504),cljs.core.str(" "),cljs.core.str(c_31503)].join('')));
}

var G__31505 = seq__31468_31499;
var G__31506 = chunk__31469_31500;
var G__31507 = count__31470_31501;
var G__31508 = (i__31471_31502 + (1));
seq__31468_31499 = G__31505;
chunk__31469_31500 = G__31506;
count__31470_31501 = G__31507;
i__31471_31502 = G__31508;
continue;
} else {
var temp__4406__auto___31509 = cljs.core.seq.call(null,seq__31468_31499);
if(temp__4406__auto___31509){
var seq__31468_31510__$1 = temp__4406__auto___31509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31468_31510__$1)){
var c__15231__auto___31511 = cljs.core.chunk_first.call(null,seq__31468_31510__$1);
var G__31512 = cljs.core.chunk_rest.call(null,seq__31468_31510__$1);
var G__31513 = c__15231__auto___31511;
var G__31514 = cljs.core.count.call(null,c__15231__auto___31511);
var G__31515 = (0);
seq__31468_31499 = G__31512;
chunk__31469_31500 = G__31513;
count__31470_31501 = G__31514;
i__31471_31502 = G__31515;
continue;
} else {
var c_31516 = cljs.core.first.call(null,seq__31468_31510__$1);
var class_name_31517 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_31517,c_31516))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_31517 === ""))?c_31516:[cljs.core.str(class_name_31517),cljs.core.str(" "),cljs.core.str(c_31516)].join('')));
}

var G__31518 = cljs.core.next.call(null,seq__31468_31510__$1);
var G__31519 = null;
var G__31520 = (0);
var G__31521 = (0);
seq__31468_31499 = G__31518;
chunk__31469_31500 = G__31519;
count__31470_31501 = G__31520;
i__31471_31502 = G__31521;
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
var G__31522__delegate = function (elem,classes,more_classes){
var seq__31472_31523 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__31473_31524 = null;
var count__31474_31525 = (0);
var i__31475_31526 = (0);
while(true){
if((i__31475_31526 < count__31474_31525)){
var c_31527 = cljs.core._nth.call(null,chunk__31473_31524,i__31475_31526);
add_class_BANG_.call(null,elem,c_31527);

var G__31528 = seq__31472_31523;
var G__31529 = chunk__31473_31524;
var G__31530 = count__31474_31525;
var G__31531 = (i__31475_31526 + (1));
seq__31472_31523 = G__31528;
chunk__31473_31524 = G__31529;
count__31474_31525 = G__31530;
i__31475_31526 = G__31531;
continue;
} else {
var temp__4406__auto___31532 = cljs.core.seq.call(null,seq__31472_31523);
if(temp__4406__auto___31532){
var seq__31472_31533__$1 = temp__4406__auto___31532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31472_31533__$1)){
var c__15231__auto___31534 = cljs.core.chunk_first.call(null,seq__31472_31533__$1);
var G__31535 = cljs.core.chunk_rest.call(null,seq__31472_31533__$1);
var G__31536 = c__15231__auto___31534;
var G__31537 = cljs.core.count.call(null,c__15231__auto___31534);
var G__31538 = (0);
seq__31472_31523 = G__31535;
chunk__31473_31524 = G__31536;
count__31474_31525 = G__31537;
i__31475_31526 = G__31538;
continue;
} else {
var c_31539 = cljs.core.first.call(null,seq__31472_31533__$1);
add_class_BANG_.call(null,elem,c_31539);

var G__31540 = cljs.core.next.call(null,seq__31472_31533__$1);
var G__31541 = null;
var G__31542 = (0);
var G__31543 = (0);
seq__31472_31523 = G__31540;
chunk__31473_31524 = G__31541;
count__31474_31525 = G__31542;
i__31475_31526 = G__31543;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__31522 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__31544__i = 0, G__31544__a = new Array(arguments.length -  2);
while (G__31544__i < G__31544__a.length) {G__31544__a[G__31544__i] = arguments[G__31544__i + 2]; ++G__31544__i;}
  more_classes = new cljs.core.IndexedSeq(G__31544__a,0);
} 
return G__31522__delegate.call(this,elem,classes,more_classes);};
G__31522.cljs$lang$maxFixedArity = 2;
G__31522.cljs$lang$applyTo = (function (arglist__31545){
var elem = cljs.core.first(arglist__31545);
arglist__31545 = cljs.core.next(arglist__31545);
var classes = cljs.core.first(arglist__31545);
var more_classes = cljs.core.rest(arglist__31545);
return G__31522__delegate(elem,classes,more_classes);
});
G__31522.cljs$core$IFn$_invoke$arity$variadic = G__31522__delegate;
return G__31522;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__31546 = null;
if (arguments.length > 2) {
var G__31547__i = 0, G__31547__a = new Array(arguments.length -  2);
while (G__31547__i < G__31547__a.length) {G__31547__a[G__31547__i] = arguments[G__31547__i + 2]; ++G__31547__i;}
G__31546 = new cljs.core.IndexedSeq(G__31547__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__31546);
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
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4404__auto___31556 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___31556)){
var class_list_31557 = temp__4404__auto___31556;
class_list_31557.remove(c__$1);
} else {
var class_name_31558 = dommy.core.class$.call(null,elem);
var new_class_name_31559 = dommy.utils.remove_class_str.call(null,class_name_31558,c__$1);
if((class_name_31558 === new_class_name_31559)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_31559);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__31560__delegate = function (elem,class$,classes){
var seq__31552 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__31553 = null;
var count__31554 = (0);
var i__31555 = (0);
while(true){
if((i__31555 < count__31554)){
var c = cljs.core._nth.call(null,chunk__31553,i__31555);
remove_class_BANG_.call(null,elem,c);

var G__31561 = seq__31552;
var G__31562 = chunk__31553;
var G__31563 = count__31554;
var G__31564 = (i__31555 + (1));
seq__31552 = G__31561;
chunk__31553 = G__31562;
count__31554 = G__31563;
i__31555 = G__31564;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__31552);
if(temp__4406__auto__){
var seq__31552__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31552__$1)){
var c__15231__auto__ = cljs.core.chunk_first.call(null,seq__31552__$1);
var G__31565 = cljs.core.chunk_rest.call(null,seq__31552__$1);
var G__31566 = c__15231__auto__;
var G__31567 = cljs.core.count.call(null,c__15231__auto__);
var G__31568 = (0);
seq__31552 = G__31565;
chunk__31553 = G__31566;
count__31554 = G__31567;
i__31555 = G__31568;
continue;
} else {
var c = cljs.core.first.call(null,seq__31552__$1);
remove_class_BANG_.call(null,elem,c);

var G__31569 = cljs.core.next.call(null,seq__31552__$1);
var G__31570 = null;
var G__31571 = (0);
var G__31572 = (0);
seq__31552 = G__31569;
chunk__31553 = G__31570;
count__31554 = G__31571;
i__31555 = G__31572;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__31560 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__31573__i = 0, G__31573__a = new Array(arguments.length -  2);
while (G__31573__i < G__31573__a.length) {G__31573__a[G__31573__i] = arguments[G__31573__i + 2]; ++G__31573__i;}
  classes = new cljs.core.IndexedSeq(G__31573__a,0);
} 
return G__31560__delegate.call(this,elem,class$,classes);};
G__31560.cljs$lang$maxFixedArity = 2;
G__31560.cljs$lang$applyTo = (function (arglist__31574){
var elem = cljs.core.first(arglist__31574);
arglist__31574 = cljs.core.next(arglist__31574);
var class$ = cljs.core.first(arglist__31574);
var classes = cljs.core.rest(arglist__31574);
return G__31560__delegate(elem,class$,classes);
});
G__31560.cljs$core$IFn$_invoke$arity$variadic = G__31560__delegate;
return G__31560;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__31575 = null;
if (arguments.length > 2) {
var G__31576__i = 0, G__31576__a = new Array(arguments.length -  2);
while (G__31576__i < G__31576__a.length) {G__31576__a[G__31576__i] = arguments[G__31576__i + 2]; ++G__31576__i;}
G__31575 = new cljs.core.IndexedSeq(G__31576__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__31575);
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
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4404__auto___31577 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___31577)){
var class_list_31578 = temp__4404__auto___31577;
class_list_31578.toggle(c__$1);
} else {
toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
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
return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
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
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
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
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){
var G__31584 = parent;
G__31584.appendChild(child);

return G__31584;
});
var append_BANG___3 = (function() { 
var G__31589__delegate = function (parent,child,more_children){
var seq__31585_31590 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__31586_31591 = null;
var count__31587_31592 = (0);
var i__31588_31593 = (0);
while(true){
if((i__31588_31593 < count__31587_31592)){
var c_31594 = cljs.core._nth.call(null,chunk__31586_31591,i__31588_31593);
append_BANG_.call(null,parent,c_31594);

var G__31595 = seq__31585_31590;
var G__31596 = chunk__31586_31591;
var G__31597 = count__31587_31592;
var G__31598 = (i__31588_31593 + (1));
seq__31585_31590 = G__31595;
chunk__31586_31591 = G__31596;
count__31587_31592 = G__31597;
i__31588_31593 = G__31598;
continue;
} else {
var temp__4406__auto___31599 = cljs.core.seq.call(null,seq__31585_31590);
if(temp__4406__auto___31599){
var seq__31585_31600__$1 = temp__4406__auto___31599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31585_31600__$1)){
var c__15231__auto___31601 = cljs.core.chunk_first.call(null,seq__31585_31600__$1);
var G__31602 = cljs.core.chunk_rest.call(null,seq__31585_31600__$1);
var G__31603 = c__15231__auto___31601;
var G__31604 = cljs.core.count.call(null,c__15231__auto___31601);
var G__31605 = (0);
seq__31585_31590 = G__31602;
chunk__31586_31591 = G__31603;
count__31587_31592 = G__31604;
i__31588_31593 = G__31605;
continue;
} else {
var c_31606 = cljs.core.first.call(null,seq__31585_31600__$1);
append_BANG_.call(null,parent,c_31606);

var G__31607 = cljs.core.next.call(null,seq__31585_31600__$1);
var G__31608 = null;
var G__31609 = (0);
var G__31610 = (0);
seq__31585_31590 = G__31607;
chunk__31586_31591 = G__31608;
count__31587_31592 = G__31609;
i__31588_31593 = G__31610;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__31589 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__31611__i = 0, G__31611__a = new Array(arguments.length -  2);
while (G__31611__i < G__31611__a.length) {G__31611__a[G__31611__i] = arguments[G__31611__i + 2]; ++G__31611__i;}
  more_children = new cljs.core.IndexedSeq(G__31611__a,0);
} 
return G__31589__delegate.call(this,parent,child,more_children);};
G__31589.cljs$lang$maxFixedArity = 2;
G__31589.cljs$lang$applyTo = (function (arglist__31612){
var parent = cljs.core.first(arglist__31612);
arglist__31612 = cljs.core.next(arglist__31612);
var child = cljs.core.first(arglist__31612);
var more_children = cljs.core.rest(arglist__31612);
return G__31589__delegate(parent,child,more_children);
});
G__31589.cljs$core$IFn$_invoke$arity$variadic = G__31589__delegate;
return G__31589;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__31613 = null;
if (arguments.length > 2) {
var G__31614__i = 0, G__31614__a = new Array(arguments.length -  2);
while (G__31614__i < G__31614__a.length) {G__31614__a[G__31614__i] = arguments[G__31614__i + 2]; ++G__31614__i;}
G__31613 = new cljs.core.IndexedSeq(G__31614__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__31613);
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
var G__31620 = parent;
G__31620.insertBefore(child,parent.firstChild);

return G__31620;
});
var prepend_BANG___3 = (function() { 
var G__31625__delegate = function (parent,child,more_children){
var seq__31621_31626 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__31622_31627 = null;
var count__31623_31628 = (0);
var i__31624_31629 = (0);
while(true){
if((i__31624_31629 < count__31623_31628)){
var c_31630 = cljs.core._nth.call(null,chunk__31622_31627,i__31624_31629);
prepend_BANG_.call(null,parent,c_31630);

var G__31631 = seq__31621_31626;
var G__31632 = chunk__31622_31627;
var G__31633 = count__31623_31628;
var G__31634 = (i__31624_31629 + (1));
seq__31621_31626 = G__31631;
chunk__31622_31627 = G__31632;
count__31623_31628 = G__31633;
i__31624_31629 = G__31634;
continue;
} else {
var temp__4406__auto___31635 = cljs.core.seq.call(null,seq__31621_31626);
if(temp__4406__auto___31635){
var seq__31621_31636__$1 = temp__4406__auto___31635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31621_31636__$1)){
var c__15231__auto___31637 = cljs.core.chunk_first.call(null,seq__31621_31636__$1);
var G__31638 = cljs.core.chunk_rest.call(null,seq__31621_31636__$1);
var G__31639 = c__15231__auto___31637;
var G__31640 = cljs.core.count.call(null,c__15231__auto___31637);
var G__31641 = (0);
seq__31621_31626 = G__31638;
chunk__31622_31627 = G__31639;
count__31623_31628 = G__31640;
i__31624_31629 = G__31641;
continue;
} else {
var c_31642 = cljs.core.first.call(null,seq__31621_31636__$1);
prepend_BANG_.call(null,parent,c_31642);

var G__31643 = cljs.core.next.call(null,seq__31621_31636__$1);
var G__31644 = null;
var G__31645 = (0);
var G__31646 = (0);
seq__31621_31626 = G__31643;
chunk__31622_31627 = G__31644;
count__31623_31628 = G__31645;
i__31624_31629 = G__31646;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__31625 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__31647__i = 0, G__31647__a = new Array(arguments.length -  2);
while (G__31647__i < G__31647__a.length) {G__31647__a[G__31647__i] = arguments[G__31647__i + 2]; ++G__31647__i;}
  more_children = new cljs.core.IndexedSeq(G__31647__a,0);
} 
return G__31625__delegate.call(this,parent,child,more_children);};
G__31625.cljs$lang$maxFixedArity = 2;
G__31625.cljs$lang$applyTo = (function (arglist__31648){
var parent = cljs.core.first(arglist__31648);
arglist__31648 = cljs.core.next(arglist__31648);
var child = cljs.core.first(arglist__31648);
var more_children = cljs.core.rest(arglist__31648);
return G__31625__delegate(parent,child,more_children);
});
G__31625.cljs$core$IFn$_invoke$arity$variadic = G__31625__delegate;
return G__31625;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__31649 = null;
if (arguments.length > 2) {
var G__31650__i = 0, G__31650__a = new Array(arguments.length -  2);
while (G__31650__i < G__31650__a.length) {G__31650__a[G__31650__i] = arguments[G__31650__i + 2]; ++G__31650__i;}
G__31649 = new cljs.core.IndexedSeq(G__31650__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__31649);
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
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var temp__4404__auto___31651 = other.nextSibling;
if(cljs.core.truth_(temp__4404__auto___31651)){
var next_31652 = temp__4404__auto___31651;
dommy.core.insert_before_BANG_.call(null,elem,next_31652);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){
var G__31654 = p;
G__31654.removeChild(elem);

return G__31654;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__31655){
var vec__31656 = p__31655;
var special_mouse_event = cljs.core.nth.call(null,vec__31656,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__31656,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__31656,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__31656,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__14444__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__14432__auto__ = related_target;
if(cljs.core.truth_(and__14432__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__14432__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__31656,special_mouse_event,real_mouse_event))
});})(vec__31656,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__14432__auto__ = selected_target;
if(cljs.core.truth_(and__14432__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__14432__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__14444__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
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
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__31657__i = 0, G__31657__a = new Array(arguments.length -  2);
while (G__31657__i < G__31657__a.length) {G__31657__a[G__31657__i] = arguments[G__31657__i + 2]; ++G__31657__i;}
  args = new cljs.core.IndexedSeq(G__31657__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__31658){
var elem = cljs.core.first(arglist__31658);
arglist__31658 = cljs.core.next(arglist__31658);
var f = cljs.core.first(arglist__31658);
var args = cljs.core.rest(arglist__31658);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__31682_31705 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31706 = cljs.core.nth.call(null,vec__31682_31705,(0),null);
var selector_31707 = cljs.core.nth.call(null,vec__31682_31705,(1),null);
var seq__31683_31708 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31690_31709 = null;
var count__31691_31710 = (0);
var i__31692_31711 = (0);
while(true){
if((i__31692_31711 < count__31691_31710)){
var vec__31699_31712 = cljs.core._nth.call(null,chunk__31690_31709,i__31692_31711);
var orig_type_31713 = cljs.core.nth.call(null,vec__31699_31712,(0),null);
var f_31714 = cljs.core.nth.call(null,vec__31699_31712,(1),null);
var seq__31693_31715 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31713,new cljs.core.PersistentArrayMap.fromArray([orig_type_31713,cljs.core.identity], true, false)));
var chunk__31695_31716 = null;
var count__31696_31717 = (0);
var i__31697_31718 = (0);
while(true){
if((i__31697_31718 < count__31696_31717)){
var vec__31700_31719 = cljs.core._nth.call(null,chunk__31695_31716,i__31697_31718);
var actual_type_31720 = cljs.core.nth.call(null,vec__31700_31719,(0),null);
var factory_31721 = cljs.core.nth.call(null,vec__31700_31719,(1),null);
var canonical_f_31722 = (cljs.core.truth_(selector_31707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31706,selector_31707):cljs.core.identity).call(null,factory_31721.call(null,f_31714));
dommy.core.update_event_listeners_BANG_.call(null,elem_31706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31707,actual_type_31720,f_31714], null),canonical_f_31722);

if(cljs.core.truth_(elem_31706.addEventListener)){
elem_31706.addEventListener(cljs.core.name.call(null,actual_type_31720),canonical_f_31722);
} else {
elem_31706.attachEvent(cljs.core.name.call(null,actual_type_31720),canonical_f_31722);
}

var G__31723 = seq__31693_31715;
var G__31724 = chunk__31695_31716;
var G__31725 = count__31696_31717;
var G__31726 = (i__31697_31718 + (1));
seq__31693_31715 = G__31723;
chunk__31695_31716 = G__31724;
count__31696_31717 = G__31725;
i__31697_31718 = G__31726;
continue;
} else {
var temp__4406__auto___31727 = cljs.core.seq.call(null,seq__31693_31715);
if(temp__4406__auto___31727){
var seq__31693_31728__$1 = temp__4406__auto___31727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31693_31728__$1)){
var c__15231__auto___31729 = cljs.core.chunk_first.call(null,seq__31693_31728__$1);
var G__31730 = cljs.core.chunk_rest.call(null,seq__31693_31728__$1);
var G__31731 = c__15231__auto___31729;
var G__31732 = cljs.core.count.call(null,c__15231__auto___31729);
var G__31733 = (0);
seq__31693_31715 = G__31730;
chunk__31695_31716 = G__31731;
count__31696_31717 = G__31732;
i__31697_31718 = G__31733;
continue;
} else {
var vec__31701_31734 = cljs.core.first.call(null,seq__31693_31728__$1);
var actual_type_31735 = cljs.core.nth.call(null,vec__31701_31734,(0),null);
var factory_31736 = cljs.core.nth.call(null,vec__31701_31734,(1),null);
var canonical_f_31737 = (cljs.core.truth_(selector_31707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31706,selector_31707):cljs.core.identity).call(null,factory_31736.call(null,f_31714));
dommy.core.update_event_listeners_BANG_.call(null,elem_31706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31707,actual_type_31735,f_31714], null),canonical_f_31737);

if(cljs.core.truth_(elem_31706.addEventListener)){
elem_31706.addEventListener(cljs.core.name.call(null,actual_type_31735),canonical_f_31737);
} else {
elem_31706.attachEvent(cljs.core.name.call(null,actual_type_31735),canonical_f_31737);
}

var G__31738 = cljs.core.next.call(null,seq__31693_31728__$1);
var G__31739 = null;
var G__31740 = (0);
var G__31741 = (0);
seq__31693_31715 = G__31738;
chunk__31695_31716 = G__31739;
count__31696_31717 = G__31740;
i__31697_31718 = G__31741;
continue;
}
} else {
}
}
break;
}

var G__31742 = seq__31683_31708;
var G__31743 = chunk__31690_31709;
var G__31744 = count__31691_31710;
var G__31745 = (i__31692_31711 + (1));
seq__31683_31708 = G__31742;
chunk__31690_31709 = G__31743;
count__31691_31710 = G__31744;
i__31692_31711 = G__31745;
continue;
} else {
var temp__4406__auto___31746 = cljs.core.seq.call(null,seq__31683_31708);
if(temp__4406__auto___31746){
var seq__31683_31747__$1 = temp__4406__auto___31746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31683_31747__$1)){
var c__15231__auto___31748 = cljs.core.chunk_first.call(null,seq__31683_31747__$1);
var G__31749 = cljs.core.chunk_rest.call(null,seq__31683_31747__$1);
var G__31750 = c__15231__auto___31748;
var G__31751 = cljs.core.count.call(null,c__15231__auto___31748);
var G__31752 = (0);
seq__31683_31708 = G__31749;
chunk__31690_31709 = G__31750;
count__31691_31710 = G__31751;
i__31692_31711 = G__31752;
continue;
} else {
var vec__31702_31753 = cljs.core.first.call(null,seq__31683_31747__$1);
var orig_type_31754 = cljs.core.nth.call(null,vec__31702_31753,(0),null);
var f_31755 = cljs.core.nth.call(null,vec__31702_31753,(1),null);
var seq__31684_31756 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31754,new cljs.core.PersistentArrayMap.fromArray([orig_type_31754,cljs.core.identity], true, false)));
var chunk__31686_31757 = null;
var count__31687_31758 = (0);
var i__31688_31759 = (0);
while(true){
if((i__31688_31759 < count__31687_31758)){
var vec__31703_31760 = cljs.core._nth.call(null,chunk__31686_31757,i__31688_31759);
var actual_type_31761 = cljs.core.nth.call(null,vec__31703_31760,(0),null);
var factory_31762 = cljs.core.nth.call(null,vec__31703_31760,(1),null);
var canonical_f_31763 = (cljs.core.truth_(selector_31707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31706,selector_31707):cljs.core.identity).call(null,factory_31762.call(null,f_31755));
dommy.core.update_event_listeners_BANG_.call(null,elem_31706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31707,actual_type_31761,f_31755], null),canonical_f_31763);

if(cljs.core.truth_(elem_31706.addEventListener)){
elem_31706.addEventListener(cljs.core.name.call(null,actual_type_31761),canonical_f_31763);
} else {
elem_31706.attachEvent(cljs.core.name.call(null,actual_type_31761),canonical_f_31763);
}

var G__31764 = seq__31684_31756;
var G__31765 = chunk__31686_31757;
var G__31766 = count__31687_31758;
var G__31767 = (i__31688_31759 + (1));
seq__31684_31756 = G__31764;
chunk__31686_31757 = G__31765;
count__31687_31758 = G__31766;
i__31688_31759 = G__31767;
continue;
} else {
var temp__4406__auto___31768__$1 = cljs.core.seq.call(null,seq__31684_31756);
if(temp__4406__auto___31768__$1){
var seq__31684_31769__$1 = temp__4406__auto___31768__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31684_31769__$1)){
var c__15231__auto___31770 = cljs.core.chunk_first.call(null,seq__31684_31769__$1);
var G__31771 = cljs.core.chunk_rest.call(null,seq__31684_31769__$1);
var G__31772 = c__15231__auto___31770;
var G__31773 = cljs.core.count.call(null,c__15231__auto___31770);
var G__31774 = (0);
seq__31684_31756 = G__31771;
chunk__31686_31757 = G__31772;
count__31687_31758 = G__31773;
i__31688_31759 = G__31774;
continue;
} else {
var vec__31704_31775 = cljs.core.first.call(null,seq__31684_31769__$1);
var actual_type_31776 = cljs.core.nth.call(null,vec__31704_31775,(0),null);
var factory_31777 = cljs.core.nth.call(null,vec__31704_31775,(1),null);
var canonical_f_31778 = (cljs.core.truth_(selector_31707)?cljs.core.partial.call(null,dommy.core.live_listener,elem_31706,selector_31707):cljs.core.identity).call(null,factory_31777.call(null,f_31755));
dommy.core.update_event_listeners_BANG_.call(null,elem_31706,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31707,actual_type_31776,f_31755], null),canonical_f_31778);

if(cljs.core.truth_(elem_31706.addEventListener)){
elem_31706.addEventListener(cljs.core.name.call(null,actual_type_31776),canonical_f_31778);
} else {
elem_31706.attachEvent(cljs.core.name.call(null,actual_type_31776),canonical_f_31778);
}

var G__31779 = cljs.core.next.call(null,seq__31684_31769__$1);
var G__31780 = null;
var G__31781 = (0);
var G__31782 = (0);
seq__31684_31756 = G__31779;
chunk__31686_31757 = G__31780;
count__31687_31758 = G__31781;
i__31688_31759 = G__31782;
continue;
}
} else {
}
}
break;
}

var G__31783 = cljs.core.next.call(null,seq__31683_31747__$1);
var G__31784 = null;
var G__31785 = (0);
var G__31786 = (0);
seq__31683_31708 = G__31783;
chunk__31690_31709 = G__31784;
count__31691_31710 = G__31785;
i__31692_31711 = G__31786;
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
var G__31787__i = 0, G__31787__a = new Array(arguments.length -  1);
while (G__31787__i < G__31787__a.length) {G__31787__a[G__31787__i] = arguments[G__31787__i + 1]; ++G__31787__i;}
  type_fs = new cljs.core.IndexedSeq(G__31787__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__31788){
var elem_sel = cljs.core.first(arglist__31788);
var type_fs = cljs.core.rest(arglist__31788);
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
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__31812_31835 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31836 = cljs.core.nth.call(null,vec__31812_31835,(0),null);
var selector_31837 = cljs.core.nth.call(null,vec__31812_31835,(1),null);
var seq__31813_31838 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31820_31839 = null;
var count__31821_31840 = (0);
var i__31822_31841 = (0);
while(true){
if((i__31822_31841 < count__31821_31840)){
var vec__31829_31842 = cljs.core._nth.call(null,chunk__31820_31839,i__31822_31841);
var orig_type_31843 = cljs.core.nth.call(null,vec__31829_31842,(0),null);
var f_31844 = cljs.core.nth.call(null,vec__31829_31842,(1),null);
var seq__31823_31845 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31843,new cljs.core.PersistentArrayMap.fromArray([orig_type_31843,cljs.core.identity], true, false)));
var chunk__31825_31846 = null;
var count__31826_31847 = (0);
var i__31827_31848 = (0);
while(true){
if((i__31827_31848 < count__31826_31847)){
var vec__31830_31849 = cljs.core._nth.call(null,chunk__31825_31846,i__31827_31848);
var actual_type_31850 = cljs.core.nth.call(null,vec__31830_31849,(0),null);
var __31851 = cljs.core.nth.call(null,vec__31830_31849,(1),null);
var keys_31852 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31837,actual_type_31850,f_31844], null);
var canonical_f_31853 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31836),keys_31852);
dommy.core.update_event_listeners_BANG_.call(null,elem_31836,dommy.utils.dissoc_in,keys_31852);

if(cljs.core.truth_(elem_31836.removeEventListener)){
elem_31836.removeEventListener(cljs.core.name.call(null,actual_type_31850),canonical_f_31853);
} else {
elem_31836.detachEvent(cljs.core.name.call(null,actual_type_31850),canonical_f_31853);
}

var G__31854 = seq__31823_31845;
var G__31855 = chunk__31825_31846;
var G__31856 = count__31826_31847;
var G__31857 = (i__31827_31848 + (1));
seq__31823_31845 = G__31854;
chunk__31825_31846 = G__31855;
count__31826_31847 = G__31856;
i__31827_31848 = G__31857;
continue;
} else {
var temp__4406__auto___31858 = cljs.core.seq.call(null,seq__31823_31845);
if(temp__4406__auto___31858){
var seq__31823_31859__$1 = temp__4406__auto___31858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31823_31859__$1)){
var c__15231__auto___31860 = cljs.core.chunk_first.call(null,seq__31823_31859__$1);
var G__31861 = cljs.core.chunk_rest.call(null,seq__31823_31859__$1);
var G__31862 = c__15231__auto___31860;
var G__31863 = cljs.core.count.call(null,c__15231__auto___31860);
var G__31864 = (0);
seq__31823_31845 = G__31861;
chunk__31825_31846 = G__31862;
count__31826_31847 = G__31863;
i__31827_31848 = G__31864;
continue;
} else {
var vec__31831_31865 = cljs.core.first.call(null,seq__31823_31859__$1);
var actual_type_31866 = cljs.core.nth.call(null,vec__31831_31865,(0),null);
var __31867 = cljs.core.nth.call(null,vec__31831_31865,(1),null);
var keys_31868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31837,actual_type_31866,f_31844], null);
var canonical_f_31869 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31836),keys_31868);
dommy.core.update_event_listeners_BANG_.call(null,elem_31836,dommy.utils.dissoc_in,keys_31868);

if(cljs.core.truth_(elem_31836.removeEventListener)){
elem_31836.removeEventListener(cljs.core.name.call(null,actual_type_31866),canonical_f_31869);
} else {
elem_31836.detachEvent(cljs.core.name.call(null,actual_type_31866),canonical_f_31869);
}

var G__31870 = cljs.core.next.call(null,seq__31823_31859__$1);
var G__31871 = null;
var G__31872 = (0);
var G__31873 = (0);
seq__31823_31845 = G__31870;
chunk__31825_31846 = G__31871;
count__31826_31847 = G__31872;
i__31827_31848 = G__31873;
continue;
}
} else {
}
}
break;
}

var G__31874 = seq__31813_31838;
var G__31875 = chunk__31820_31839;
var G__31876 = count__31821_31840;
var G__31877 = (i__31822_31841 + (1));
seq__31813_31838 = G__31874;
chunk__31820_31839 = G__31875;
count__31821_31840 = G__31876;
i__31822_31841 = G__31877;
continue;
} else {
var temp__4406__auto___31878 = cljs.core.seq.call(null,seq__31813_31838);
if(temp__4406__auto___31878){
var seq__31813_31879__$1 = temp__4406__auto___31878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31813_31879__$1)){
var c__15231__auto___31880 = cljs.core.chunk_first.call(null,seq__31813_31879__$1);
var G__31881 = cljs.core.chunk_rest.call(null,seq__31813_31879__$1);
var G__31882 = c__15231__auto___31880;
var G__31883 = cljs.core.count.call(null,c__15231__auto___31880);
var G__31884 = (0);
seq__31813_31838 = G__31881;
chunk__31820_31839 = G__31882;
count__31821_31840 = G__31883;
i__31822_31841 = G__31884;
continue;
} else {
var vec__31832_31885 = cljs.core.first.call(null,seq__31813_31879__$1);
var orig_type_31886 = cljs.core.nth.call(null,vec__31832_31885,(0),null);
var f_31887 = cljs.core.nth.call(null,vec__31832_31885,(1),null);
var seq__31814_31888 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_31886,new cljs.core.PersistentArrayMap.fromArray([orig_type_31886,cljs.core.identity], true, false)));
var chunk__31816_31889 = null;
var count__31817_31890 = (0);
var i__31818_31891 = (0);
while(true){
if((i__31818_31891 < count__31817_31890)){
var vec__31833_31892 = cljs.core._nth.call(null,chunk__31816_31889,i__31818_31891);
var actual_type_31893 = cljs.core.nth.call(null,vec__31833_31892,(0),null);
var __31894 = cljs.core.nth.call(null,vec__31833_31892,(1),null);
var keys_31895 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31837,actual_type_31893,f_31887], null);
var canonical_f_31896 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31836),keys_31895);
dommy.core.update_event_listeners_BANG_.call(null,elem_31836,dommy.utils.dissoc_in,keys_31895);

if(cljs.core.truth_(elem_31836.removeEventListener)){
elem_31836.removeEventListener(cljs.core.name.call(null,actual_type_31893),canonical_f_31896);
} else {
elem_31836.detachEvent(cljs.core.name.call(null,actual_type_31893),canonical_f_31896);
}

var G__31897 = seq__31814_31888;
var G__31898 = chunk__31816_31889;
var G__31899 = count__31817_31890;
var G__31900 = (i__31818_31891 + (1));
seq__31814_31888 = G__31897;
chunk__31816_31889 = G__31898;
count__31817_31890 = G__31899;
i__31818_31891 = G__31900;
continue;
} else {
var temp__4406__auto___31901__$1 = cljs.core.seq.call(null,seq__31814_31888);
if(temp__4406__auto___31901__$1){
var seq__31814_31902__$1 = temp__4406__auto___31901__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31814_31902__$1)){
var c__15231__auto___31903 = cljs.core.chunk_first.call(null,seq__31814_31902__$1);
var G__31904 = cljs.core.chunk_rest.call(null,seq__31814_31902__$1);
var G__31905 = c__15231__auto___31903;
var G__31906 = cljs.core.count.call(null,c__15231__auto___31903);
var G__31907 = (0);
seq__31814_31888 = G__31904;
chunk__31816_31889 = G__31905;
count__31817_31890 = G__31906;
i__31818_31891 = G__31907;
continue;
} else {
var vec__31834_31908 = cljs.core.first.call(null,seq__31814_31902__$1);
var actual_type_31909 = cljs.core.nth.call(null,vec__31834_31908,(0),null);
var __31910 = cljs.core.nth.call(null,vec__31834_31908,(1),null);
var keys_31911 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_31837,actual_type_31909,f_31887], null);
var canonical_f_31912 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_31836),keys_31911);
dommy.core.update_event_listeners_BANG_.call(null,elem_31836,dommy.utils.dissoc_in,keys_31911);

if(cljs.core.truth_(elem_31836.removeEventListener)){
elem_31836.removeEventListener(cljs.core.name.call(null,actual_type_31909),canonical_f_31912);
} else {
elem_31836.detachEvent(cljs.core.name.call(null,actual_type_31909),canonical_f_31912);
}

var G__31913 = cljs.core.next.call(null,seq__31814_31902__$1);
var G__31914 = null;
var G__31915 = (0);
var G__31916 = (0);
seq__31814_31888 = G__31913;
chunk__31816_31889 = G__31914;
count__31817_31890 = G__31915;
i__31818_31891 = G__31916;
continue;
}
} else {
}
}
break;
}

var G__31917 = cljs.core.next.call(null,seq__31813_31879__$1);
var G__31918 = null;
var G__31919 = (0);
var G__31920 = (0);
seq__31813_31838 = G__31917;
chunk__31820_31839 = G__31918;
count__31821_31840 = G__31919;
i__31822_31841 = G__31920;
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
var G__31921__i = 0, G__31921__a = new Array(arguments.length -  1);
while (G__31921__i < G__31921__a.length) {G__31921__a[G__31921__i] = arguments[G__31921__i + 1]; ++G__31921__i;}
  type_fs = new cljs.core.IndexedSeq(G__31921__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__31922){
var elem_sel = cljs.core.first(arglist__31922);
var type_fs = cljs.core.rest(arglist__31922);
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
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__31930_31937 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_31938 = cljs.core.nth.call(null,vec__31930_31937,(0),null);
var selector_31939 = cljs.core.nth.call(null,vec__31930_31937,(1),null);
var seq__31931_31940 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__31932_31941 = null;
var count__31933_31942 = (0);
var i__31934_31943 = (0);
while(true){
if((i__31934_31943 < count__31933_31942)){
var vec__31935_31944 = cljs.core._nth.call(null,chunk__31932_31941,i__31934_31943);
var type_31945 = cljs.core.nth.call(null,vec__31935_31944,(0),null);
var f_31946 = cljs.core.nth.call(null,vec__31935_31944,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_31945,((function (seq__31931_31940,chunk__31932_31941,count__31933_31942,i__31934_31943,vec__31935_31944,type_31945,f_31946,vec__31930_31937,elem_31938,selector_31939){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_31945,this_fn);

return f_31946.call(null,e);
});})(seq__31931_31940,chunk__31932_31941,count__31933_31942,i__31934_31943,vec__31935_31944,type_31945,f_31946,vec__31930_31937,elem_31938,selector_31939))
);

var G__31947 = seq__31931_31940;
var G__31948 = chunk__31932_31941;
var G__31949 = count__31933_31942;
var G__31950 = (i__31934_31943 + (1));
seq__31931_31940 = G__31947;
chunk__31932_31941 = G__31948;
count__31933_31942 = G__31949;
i__31934_31943 = G__31950;
continue;
} else {
var temp__4406__auto___31951 = cljs.core.seq.call(null,seq__31931_31940);
if(temp__4406__auto___31951){
var seq__31931_31952__$1 = temp__4406__auto___31951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31931_31952__$1)){
var c__15231__auto___31953 = cljs.core.chunk_first.call(null,seq__31931_31952__$1);
var G__31954 = cljs.core.chunk_rest.call(null,seq__31931_31952__$1);
var G__31955 = c__15231__auto___31953;
var G__31956 = cljs.core.count.call(null,c__15231__auto___31953);
var G__31957 = (0);
seq__31931_31940 = G__31954;
chunk__31932_31941 = G__31955;
count__31933_31942 = G__31956;
i__31934_31943 = G__31957;
continue;
} else {
var vec__31936_31958 = cljs.core.first.call(null,seq__31931_31952__$1);
var type_31959 = cljs.core.nth.call(null,vec__31936_31958,(0),null);
var f_31960 = cljs.core.nth.call(null,vec__31936_31958,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_31959,((function (seq__31931_31940,chunk__31932_31941,count__31933_31942,i__31934_31943,vec__31936_31958,type_31959,f_31960,seq__31931_31952__$1,temp__4406__auto___31951,vec__31930_31937,elem_31938,selector_31939){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_31959,this_fn);

return f_31960.call(null,e);
});})(seq__31931_31940,chunk__31932_31941,count__31933_31942,i__31934_31943,vec__31936_31958,type_31959,f_31960,seq__31931_31952__$1,temp__4406__auto___31951,vec__31930_31937,elem_31938,selector_31939))
);

var G__31961 = cljs.core.next.call(null,seq__31931_31952__$1);
var G__31962 = null;
var G__31963 = (0);
var G__31964 = (0);
seq__31931_31940 = G__31961;
chunk__31932_31941 = G__31962;
count__31933_31942 = G__31963;
i__31934_31943 = G__31964;
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
var G__31965__i = 0, G__31965__a = new Array(arguments.length -  1);
while (G__31965__i < G__31965__a.length) {G__31965__a[G__31965__i] = arguments[G__31965__i + 1]; ++G__31965__i;}
  type_fs = new cljs.core.IndexedSeq(G__31965__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__31966){
var elem_sel = cljs.core.first(arglist__31966);
var type_fs = cljs.core.rest(arglist__31966);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map