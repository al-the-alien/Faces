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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__34294_SHARP_){
return !((p1__34294_SHARP_ === base));
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
var seq__34301_34307 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__34302_34308 = null;
var count__34303_34309 = (0);
var i__34304_34310 = (0);
while(true){
if((i__34304_34310 < count__34303_34309)){
var vec__34305_34311 = cljs.core._nth.call(null,chunk__34302_34308,i__34304_34310);
var k_34312 = cljs.core.nth.call(null,vec__34305_34311,(0),null);
var v_34313 = cljs.core.nth.call(null,vec__34305_34311,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_34312),v_34313);

var G__34314 = seq__34301_34307;
var G__34315 = chunk__34302_34308;
var G__34316 = count__34303_34309;
var G__34317 = (i__34304_34310 + (1));
seq__34301_34307 = G__34314;
chunk__34302_34308 = G__34315;
count__34303_34309 = G__34316;
i__34304_34310 = G__34317;
continue;
} else {
var temp__4406__auto___34318 = cljs.core.seq.call(null,seq__34301_34307);
if(temp__4406__auto___34318){
var seq__34301_34319__$1 = temp__4406__auto___34318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34301_34319__$1)){
var c__15231__auto___34320 = cljs.core.chunk_first.call(null,seq__34301_34319__$1);
var G__34321 = cljs.core.chunk_rest.call(null,seq__34301_34319__$1);
var G__34322 = c__15231__auto___34320;
var G__34323 = cljs.core.count.call(null,c__15231__auto___34320);
var G__34324 = (0);
seq__34301_34307 = G__34321;
chunk__34302_34308 = G__34322;
count__34303_34309 = G__34323;
i__34304_34310 = G__34324;
continue;
} else {
var vec__34306_34325 = cljs.core.first.call(null,seq__34301_34319__$1);
var k_34326 = cljs.core.nth.call(null,vec__34306_34325,(0),null);
var v_34327 = cljs.core.nth.call(null,vec__34306_34325,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_34326),v_34327);

var G__34328 = cljs.core.next.call(null,seq__34301_34319__$1);
var G__34329 = null;
var G__34330 = (0);
var G__34331 = (0);
seq__34301_34307 = G__34328;
chunk__34302_34308 = G__34329;
count__34303_34309 = G__34330;
i__34304_34310 = G__34331;
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
var G__34332__i = 0, G__34332__a = new Array(arguments.length -  1);
while (G__34332__i < G__34332__a.length) {G__34332__a[G__34332__i] = arguments[G__34332__i + 1]; ++G__34332__i;}
  kvs = new cljs.core.IndexedSeq(G__34332__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__34333){
var elem = cljs.core.first(arglist__34333);
var kvs = cljs.core.rest(arglist__34333);
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

var seq__34340_34346 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__34341_34347 = null;
var count__34342_34348 = (0);
var i__34343_34349 = (0);
while(true){
if((i__34343_34349 < count__34342_34348)){
var vec__34344_34350 = cljs.core._nth.call(null,chunk__34341_34347,i__34343_34349);
var k_34351 = cljs.core.nth.call(null,vec__34344_34350,(0),null);
var v_34352 = cljs.core.nth.call(null,vec__34344_34350,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_34351,[cljs.core.str(v_34352),cljs.core.str("px")].join(''));

var G__34353 = seq__34340_34346;
var G__34354 = chunk__34341_34347;
var G__34355 = count__34342_34348;
var G__34356 = (i__34343_34349 + (1));
seq__34340_34346 = G__34353;
chunk__34341_34347 = G__34354;
count__34342_34348 = G__34355;
i__34343_34349 = G__34356;
continue;
} else {
var temp__4406__auto___34357 = cljs.core.seq.call(null,seq__34340_34346);
if(temp__4406__auto___34357){
var seq__34340_34358__$1 = temp__4406__auto___34357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34340_34358__$1)){
var c__15231__auto___34359 = cljs.core.chunk_first.call(null,seq__34340_34358__$1);
var G__34360 = cljs.core.chunk_rest.call(null,seq__34340_34358__$1);
var G__34361 = c__15231__auto___34359;
var G__34362 = cljs.core.count.call(null,c__15231__auto___34359);
var G__34363 = (0);
seq__34340_34346 = G__34360;
chunk__34341_34347 = G__34361;
count__34342_34348 = G__34362;
i__34343_34349 = G__34363;
continue;
} else {
var vec__34345_34364 = cljs.core.first.call(null,seq__34340_34358__$1);
var k_34365 = cljs.core.nth.call(null,vec__34345_34364,(0),null);
var v_34366 = cljs.core.nth.call(null,vec__34345_34364,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_34365,[cljs.core.str(v_34366),cljs.core.str("px")].join(''));

var G__34367 = cljs.core.next.call(null,seq__34340_34358__$1);
var G__34368 = null;
var G__34369 = (0);
var G__34370 = (0);
seq__34340_34346 = G__34367;
chunk__34341_34347 = G__34368;
count__34342_34348 = G__34369;
i__34343_34349 = G__34370;
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
var G__34371__i = 0, G__34371__a = new Array(arguments.length -  1);
while (G__34371__i < G__34371__a.length) {G__34371__a[G__34371__i] = arguments[G__34371__i + 1]; ++G__34371__i;}
  kvs = new cljs.core.IndexedSeq(G__34371__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__34372){
var elem = cljs.core.first(arglist__34372);
var kvs = cljs.core.rest(arglist__34372);
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
var G__34381 = elem;
(G__34381[k__$1] = v);

return G__34381;
} else {
var G__34382 = elem;
G__34382.setAttribute(k__$1,v);

return G__34382;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__34389__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__34383_34390 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__34384_34391 = null;
var count__34385_34392 = (0);
var i__34386_34393 = (0);
while(true){
if((i__34386_34393 < count__34385_34392)){
var vec__34387_34394 = cljs.core._nth.call(null,chunk__34384_34391,i__34386_34393);
var k_34395__$1 = cljs.core.nth.call(null,vec__34387_34394,(0),null);
var v_34396__$1 = cljs.core.nth.call(null,vec__34387_34394,(1),null);
set_attr_BANG_.call(null,elem,k_34395__$1,v_34396__$1);

var G__34397 = seq__34383_34390;
var G__34398 = chunk__34384_34391;
var G__34399 = count__34385_34392;
var G__34400 = (i__34386_34393 + (1));
seq__34383_34390 = G__34397;
chunk__34384_34391 = G__34398;
count__34385_34392 = G__34399;
i__34386_34393 = G__34400;
continue;
} else {
var temp__4406__auto___34401 = cljs.core.seq.call(null,seq__34383_34390);
if(temp__4406__auto___34401){
var seq__34383_34402__$1 = temp__4406__auto___34401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34383_34402__$1)){
var c__15231__auto___34403 = cljs.core.chunk_first.call(null,seq__34383_34402__$1);
var G__34404 = cljs.core.chunk_rest.call(null,seq__34383_34402__$1);
var G__34405 = c__15231__auto___34403;
var G__34406 = cljs.core.count.call(null,c__15231__auto___34403);
var G__34407 = (0);
seq__34383_34390 = G__34404;
chunk__34384_34391 = G__34405;
count__34385_34392 = G__34406;
i__34386_34393 = G__34407;
continue;
} else {
var vec__34388_34408 = cljs.core.first.call(null,seq__34383_34402__$1);
var k_34409__$1 = cljs.core.nth.call(null,vec__34388_34408,(0),null);
var v_34410__$1 = cljs.core.nth.call(null,vec__34388_34408,(1),null);
set_attr_BANG_.call(null,elem,k_34409__$1,v_34410__$1);

var G__34411 = cljs.core.next.call(null,seq__34383_34402__$1);
var G__34412 = null;
var G__34413 = (0);
var G__34414 = (0);
seq__34383_34390 = G__34411;
chunk__34384_34391 = G__34412;
count__34385_34392 = G__34413;
i__34386_34393 = G__34414;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__34389 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__34415__i = 0, G__34415__a = new Array(arguments.length -  3);
while (G__34415__i < G__34415__a.length) {G__34415__a[G__34415__i] = arguments[G__34415__i + 3]; ++G__34415__i;}
  kvs = new cljs.core.IndexedSeq(G__34415__a,0);
} 
return G__34389__delegate.call(this,elem,k,v,kvs);};
G__34389.cljs$lang$maxFixedArity = 3;
G__34389.cljs$lang$applyTo = (function (arglist__34416){
var elem = cljs.core.first(arglist__34416);
arglist__34416 = cljs.core.next(arglist__34416);
var k = cljs.core.first(arglist__34416);
arglist__34416 = cljs.core.next(arglist__34416);
var v = cljs.core.first(arglist__34416);
var kvs = cljs.core.rest(arglist__34416);
return G__34389__delegate(elem,k,v,kvs);
});
G__34389.cljs$core$IFn$_invoke$arity$variadic = G__34389__delegate;
return G__34389;
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
var G__34417 = null;
if (arguments.length > 3) {
var G__34418__i = 0, G__34418__a = new Array(arguments.length -  3);
while (G__34418__i < G__34418__a.length) {G__34418__a[G__34418__i] = arguments[G__34418__i + 3]; ++G__34418__i;}
G__34417 = new cljs.core.IndexedSeq(G__34418__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__34417);
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
var k_34427__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_34427__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_34427__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__34428__delegate = function (elem,k,ks){
var seq__34423_34429 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__34424_34430 = null;
var count__34425_34431 = (0);
var i__34426_34432 = (0);
while(true){
if((i__34426_34432 < count__34425_34431)){
var k_34433__$1 = cljs.core._nth.call(null,chunk__34424_34430,i__34426_34432);
remove_attr_BANG_.call(null,elem,k_34433__$1);

var G__34434 = seq__34423_34429;
var G__34435 = chunk__34424_34430;
var G__34436 = count__34425_34431;
var G__34437 = (i__34426_34432 + (1));
seq__34423_34429 = G__34434;
chunk__34424_34430 = G__34435;
count__34425_34431 = G__34436;
i__34426_34432 = G__34437;
continue;
} else {
var temp__4406__auto___34438 = cljs.core.seq.call(null,seq__34423_34429);
if(temp__4406__auto___34438){
var seq__34423_34439__$1 = temp__4406__auto___34438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34423_34439__$1)){
var c__15231__auto___34440 = cljs.core.chunk_first.call(null,seq__34423_34439__$1);
var G__34441 = cljs.core.chunk_rest.call(null,seq__34423_34439__$1);
var G__34442 = c__15231__auto___34440;
var G__34443 = cljs.core.count.call(null,c__15231__auto___34440);
var G__34444 = (0);
seq__34423_34429 = G__34441;
chunk__34424_34430 = G__34442;
count__34425_34431 = G__34443;
i__34426_34432 = G__34444;
continue;
} else {
var k_34445__$1 = cljs.core.first.call(null,seq__34423_34439__$1);
remove_attr_BANG_.call(null,elem,k_34445__$1);

var G__34446 = cljs.core.next.call(null,seq__34423_34439__$1);
var G__34447 = null;
var G__34448 = (0);
var G__34449 = (0);
seq__34423_34429 = G__34446;
chunk__34424_34430 = G__34447;
count__34425_34431 = G__34448;
i__34426_34432 = G__34449;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__34428 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__34450__i = 0, G__34450__a = new Array(arguments.length -  2);
while (G__34450__i < G__34450__a.length) {G__34450__a[G__34450__i] = arguments[G__34450__i + 2]; ++G__34450__i;}
  ks = new cljs.core.IndexedSeq(G__34450__a,0);
} 
return G__34428__delegate.call(this,elem,k,ks);};
G__34428.cljs$lang$maxFixedArity = 2;
G__34428.cljs$lang$applyTo = (function (arglist__34451){
var elem = cljs.core.first(arglist__34451);
arglist__34451 = cljs.core.next(arglist__34451);
var k = cljs.core.first(arglist__34451);
var ks = cljs.core.rest(arglist__34451);
return G__34428__delegate(elem,k,ks);
});
G__34428.cljs$core$IFn$_invoke$arity$variadic = G__34428__delegate;
return G__34428;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__34452 = null;
if (arguments.length > 2) {
var G__34453__i = 0, G__34453__a = new Array(arguments.length -  2);
while (G__34453__i < G__34453__a.length) {G__34453__a[G__34453__i] = arguments[G__34453__i + 2]; ++G__34453__i;}
G__34452 = new cljs.core.IndexedSeq(G__34453__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__34452);
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
var temp__4404__auto___34478 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___34478)){
var class_list_34479 = temp__4404__auto___34478;
var seq__34466_34480 = cljs.core.seq.call(null,classes__$1);
var chunk__34467_34481 = null;
var count__34468_34482 = (0);
var i__34469_34483 = (0);
while(true){
if((i__34469_34483 < count__34468_34482)){
var c_34484 = cljs.core._nth.call(null,chunk__34467_34481,i__34469_34483);
class_list_34479.add(c_34484);

var G__34485 = seq__34466_34480;
var G__34486 = chunk__34467_34481;
var G__34487 = count__34468_34482;
var G__34488 = (i__34469_34483 + (1));
seq__34466_34480 = G__34485;
chunk__34467_34481 = G__34486;
count__34468_34482 = G__34487;
i__34469_34483 = G__34488;
continue;
} else {
var temp__4406__auto___34489 = cljs.core.seq.call(null,seq__34466_34480);
if(temp__4406__auto___34489){
var seq__34466_34490__$1 = temp__4406__auto___34489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34466_34490__$1)){
var c__15231__auto___34491 = cljs.core.chunk_first.call(null,seq__34466_34490__$1);
var G__34492 = cljs.core.chunk_rest.call(null,seq__34466_34490__$1);
var G__34493 = c__15231__auto___34491;
var G__34494 = cljs.core.count.call(null,c__15231__auto___34491);
var G__34495 = (0);
seq__34466_34480 = G__34492;
chunk__34467_34481 = G__34493;
count__34468_34482 = G__34494;
i__34469_34483 = G__34495;
continue;
} else {
var c_34496 = cljs.core.first.call(null,seq__34466_34490__$1);
class_list_34479.add(c_34496);

var G__34497 = cljs.core.next.call(null,seq__34466_34490__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__34466_34480 = G__34497;
chunk__34467_34481 = G__34498;
count__34468_34482 = G__34499;
i__34469_34483 = G__34500;
continue;
}
} else {
}
}
break;
}
} else {
var seq__34470_34501 = cljs.core.seq.call(null,classes__$1);
var chunk__34471_34502 = null;
var count__34472_34503 = (0);
var i__34473_34504 = (0);
while(true){
if((i__34473_34504 < count__34472_34503)){
var c_34505 = cljs.core._nth.call(null,chunk__34471_34502,i__34473_34504);
var class_name_34506 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_34506,c_34505))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_34506 === ""))?c_34505:[cljs.core.str(class_name_34506),cljs.core.str(" "),cljs.core.str(c_34505)].join('')));
}

var G__34507 = seq__34470_34501;
var G__34508 = chunk__34471_34502;
var G__34509 = count__34472_34503;
var G__34510 = (i__34473_34504 + (1));
seq__34470_34501 = G__34507;
chunk__34471_34502 = G__34508;
count__34472_34503 = G__34509;
i__34473_34504 = G__34510;
continue;
} else {
var temp__4406__auto___34511 = cljs.core.seq.call(null,seq__34470_34501);
if(temp__4406__auto___34511){
var seq__34470_34512__$1 = temp__4406__auto___34511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34470_34512__$1)){
var c__15231__auto___34513 = cljs.core.chunk_first.call(null,seq__34470_34512__$1);
var G__34514 = cljs.core.chunk_rest.call(null,seq__34470_34512__$1);
var G__34515 = c__15231__auto___34513;
var G__34516 = cljs.core.count.call(null,c__15231__auto___34513);
var G__34517 = (0);
seq__34470_34501 = G__34514;
chunk__34471_34502 = G__34515;
count__34472_34503 = G__34516;
i__34473_34504 = G__34517;
continue;
} else {
var c_34518 = cljs.core.first.call(null,seq__34470_34512__$1);
var class_name_34519 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_34519,c_34518))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_34519 === ""))?c_34518:[cljs.core.str(class_name_34519),cljs.core.str(" "),cljs.core.str(c_34518)].join('')));
}

var G__34520 = cljs.core.next.call(null,seq__34470_34512__$1);
var G__34521 = null;
var G__34522 = (0);
var G__34523 = (0);
seq__34470_34501 = G__34520;
chunk__34471_34502 = G__34521;
count__34472_34503 = G__34522;
i__34473_34504 = G__34523;
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
var G__34524__delegate = function (elem,classes,more_classes){
var seq__34474_34525 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__34475_34526 = null;
var count__34476_34527 = (0);
var i__34477_34528 = (0);
while(true){
if((i__34477_34528 < count__34476_34527)){
var c_34529 = cljs.core._nth.call(null,chunk__34475_34526,i__34477_34528);
add_class_BANG_.call(null,elem,c_34529);

var G__34530 = seq__34474_34525;
var G__34531 = chunk__34475_34526;
var G__34532 = count__34476_34527;
var G__34533 = (i__34477_34528 + (1));
seq__34474_34525 = G__34530;
chunk__34475_34526 = G__34531;
count__34476_34527 = G__34532;
i__34477_34528 = G__34533;
continue;
} else {
var temp__4406__auto___34534 = cljs.core.seq.call(null,seq__34474_34525);
if(temp__4406__auto___34534){
var seq__34474_34535__$1 = temp__4406__auto___34534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34474_34535__$1)){
var c__15231__auto___34536 = cljs.core.chunk_first.call(null,seq__34474_34535__$1);
var G__34537 = cljs.core.chunk_rest.call(null,seq__34474_34535__$1);
var G__34538 = c__15231__auto___34536;
var G__34539 = cljs.core.count.call(null,c__15231__auto___34536);
var G__34540 = (0);
seq__34474_34525 = G__34537;
chunk__34475_34526 = G__34538;
count__34476_34527 = G__34539;
i__34477_34528 = G__34540;
continue;
} else {
var c_34541 = cljs.core.first.call(null,seq__34474_34535__$1);
add_class_BANG_.call(null,elem,c_34541);

var G__34542 = cljs.core.next.call(null,seq__34474_34535__$1);
var G__34543 = null;
var G__34544 = (0);
var G__34545 = (0);
seq__34474_34525 = G__34542;
chunk__34475_34526 = G__34543;
count__34476_34527 = G__34544;
i__34477_34528 = G__34545;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__34524 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__34546__i = 0, G__34546__a = new Array(arguments.length -  2);
while (G__34546__i < G__34546__a.length) {G__34546__a[G__34546__i] = arguments[G__34546__i + 2]; ++G__34546__i;}
  more_classes = new cljs.core.IndexedSeq(G__34546__a,0);
} 
return G__34524__delegate.call(this,elem,classes,more_classes);};
G__34524.cljs$lang$maxFixedArity = 2;
G__34524.cljs$lang$applyTo = (function (arglist__34547){
var elem = cljs.core.first(arglist__34547);
arglist__34547 = cljs.core.next(arglist__34547);
var classes = cljs.core.first(arglist__34547);
var more_classes = cljs.core.rest(arglist__34547);
return G__34524__delegate(elem,classes,more_classes);
});
G__34524.cljs$core$IFn$_invoke$arity$variadic = G__34524__delegate;
return G__34524;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__34548 = null;
if (arguments.length > 2) {
var G__34549__i = 0, G__34549__a = new Array(arguments.length -  2);
while (G__34549__i < G__34549__a.length) {G__34549__a[G__34549__i] = arguments[G__34549__i + 2]; ++G__34549__i;}
G__34548 = new cljs.core.IndexedSeq(G__34549__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__34548);
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
var temp__4404__auto___34558 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___34558)){
var class_list_34559 = temp__4404__auto___34558;
class_list_34559.remove(c__$1);
} else {
var class_name_34560 = dommy.core.class$.call(null,elem);
var new_class_name_34561 = dommy.utils.remove_class_str.call(null,class_name_34560,c__$1);
if((class_name_34560 === new_class_name_34561)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_34561);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__34562__delegate = function (elem,class$,classes){
var seq__34554 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__34555 = null;
var count__34556 = (0);
var i__34557 = (0);
while(true){
if((i__34557 < count__34556)){
var c = cljs.core._nth.call(null,chunk__34555,i__34557);
remove_class_BANG_.call(null,elem,c);

var G__34563 = seq__34554;
var G__34564 = chunk__34555;
var G__34565 = count__34556;
var G__34566 = (i__34557 + (1));
seq__34554 = G__34563;
chunk__34555 = G__34564;
count__34556 = G__34565;
i__34557 = G__34566;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__34554);
if(temp__4406__auto__){
var seq__34554__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34554__$1)){
var c__15231__auto__ = cljs.core.chunk_first.call(null,seq__34554__$1);
var G__34567 = cljs.core.chunk_rest.call(null,seq__34554__$1);
var G__34568 = c__15231__auto__;
var G__34569 = cljs.core.count.call(null,c__15231__auto__);
var G__34570 = (0);
seq__34554 = G__34567;
chunk__34555 = G__34568;
count__34556 = G__34569;
i__34557 = G__34570;
continue;
} else {
var c = cljs.core.first.call(null,seq__34554__$1);
remove_class_BANG_.call(null,elem,c);

var G__34571 = cljs.core.next.call(null,seq__34554__$1);
var G__34572 = null;
var G__34573 = (0);
var G__34574 = (0);
seq__34554 = G__34571;
chunk__34555 = G__34572;
count__34556 = G__34573;
i__34557 = G__34574;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__34562 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__34575__i = 0, G__34575__a = new Array(arguments.length -  2);
while (G__34575__i < G__34575__a.length) {G__34575__a[G__34575__i] = arguments[G__34575__i + 2]; ++G__34575__i;}
  classes = new cljs.core.IndexedSeq(G__34575__a,0);
} 
return G__34562__delegate.call(this,elem,class$,classes);};
G__34562.cljs$lang$maxFixedArity = 2;
G__34562.cljs$lang$applyTo = (function (arglist__34576){
var elem = cljs.core.first(arglist__34576);
arglist__34576 = cljs.core.next(arglist__34576);
var class$ = cljs.core.first(arglist__34576);
var classes = cljs.core.rest(arglist__34576);
return G__34562__delegate(elem,class$,classes);
});
G__34562.cljs$core$IFn$_invoke$arity$variadic = G__34562__delegate;
return G__34562;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__34577 = null;
if (arguments.length > 2) {
var G__34578__i = 0, G__34578__a = new Array(arguments.length -  2);
while (G__34578__i < G__34578__a.length) {G__34578__a[G__34578__i] = arguments[G__34578__i + 2]; ++G__34578__i;}
G__34577 = new cljs.core.IndexedSeq(G__34578__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__34577);
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
var temp__4404__auto___34579 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___34579)){
var class_list_34580 = temp__4404__auto___34579;
class_list_34580.toggle(c__$1);
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
var G__34586 = parent;
G__34586.appendChild(child);

return G__34586;
});
var append_BANG___3 = (function() { 
var G__34591__delegate = function (parent,child,more_children){
var seq__34587_34592 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__34588_34593 = null;
var count__34589_34594 = (0);
var i__34590_34595 = (0);
while(true){
if((i__34590_34595 < count__34589_34594)){
var c_34596 = cljs.core._nth.call(null,chunk__34588_34593,i__34590_34595);
append_BANG_.call(null,parent,c_34596);

var G__34597 = seq__34587_34592;
var G__34598 = chunk__34588_34593;
var G__34599 = count__34589_34594;
var G__34600 = (i__34590_34595 + (1));
seq__34587_34592 = G__34597;
chunk__34588_34593 = G__34598;
count__34589_34594 = G__34599;
i__34590_34595 = G__34600;
continue;
} else {
var temp__4406__auto___34601 = cljs.core.seq.call(null,seq__34587_34592);
if(temp__4406__auto___34601){
var seq__34587_34602__$1 = temp__4406__auto___34601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34587_34602__$1)){
var c__15231__auto___34603 = cljs.core.chunk_first.call(null,seq__34587_34602__$1);
var G__34604 = cljs.core.chunk_rest.call(null,seq__34587_34602__$1);
var G__34605 = c__15231__auto___34603;
var G__34606 = cljs.core.count.call(null,c__15231__auto___34603);
var G__34607 = (0);
seq__34587_34592 = G__34604;
chunk__34588_34593 = G__34605;
count__34589_34594 = G__34606;
i__34590_34595 = G__34607;
continue;
} else {
var c_34608 = cljs.core.first.call(null,seq__34587_34602__$1);
append_BANG_.call(null,parent,c_34608);

var G__34609 = cljs.core.next.call(null,seq__34587_34602__$1);
var G__34610 = null;
var G__34611 = (0);
var G__34612 = (0);
seq__34587_34592 = G__34609;
chunk__34588_34593 = G__34610;
count__34589_34594 = G__34611;
i__34590_34595 = G__34612;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__34591 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__34613__i = 0, G__34613__a = new Array(arguments.length -  2);
while (G__34613__i < G__34613__a.length) {G__34613__a[G__34613__i] = arguments[G__34613__i + 2]; ++G__34613__i;}
  more_children = new cljs.core.IndexedSeq(G__34613__a,0);
} 
return G__34591__delegate.call(this,parent,child,more_children);};
G__34591.cljs$lang$maxFixedArity = 2;
G__34591.cljs$lang$applyTo = (function (arglist__34614){
var parent = cljs.core.first(arglist__34614);
arglist__34614 = cljs.core.next(arglist__34614);
var child = cljs.core.first(arglist__34614);
var more_children = cljs.core.rest(arglist__34614);
return G__34591__delegate(parent,child,more_children);
});
G__34591.cljs$core$IFn$_invoke$arity$variadic = G__34591__delegate;
return G__34591;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__34615 = null;
if (arguments.length > 2) {
var G__34616__i = 0, G__34616__a = new Array(arguments.length -  2);
while (G__34616__i < G__34616__a.length) {G__34616__a[G__34616__i] = arguments[G__34616__i + 2]; ++G__34616__i;}
G__34615 = new cljs.core.IndexedSeq(G__34616__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__34615);
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
var G__34622 = parent;
G__34622.insertBefore(child,parent.firstChild);

return G__34622;
});
var prepend_BANG___3 = (function() { 
var G__34627__delegate = function (parent,child,more_children){
var seq__34623_34628 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__34624_34629 = null;
var count__34625_34630 = (0);
var i__34626_34631 = (0);
while(true){
if((i__34626_34631 < count__34625_34630)){
var c_34632 = cljs.core._nth.call(null,chunk__34624_34629,i__34626_34631);
prepend_BANG_.call(null,parent,c_34632);

var G__34633 = seq__34623_34628;
var G__34634 = chunk__34624_34629;
var G__34635 = count__34625_34630;
var G__34636 = (i__34626_34631 + (1));
seq__34623_34628 = G__34633;
chunk__34624_34629 = G__34634;
count__34625_34630 = G__34635;
i__34626_34631 = G__34636;
continue;
} else {
var temp__4406__auto___34637 = cljs.core.seq.call(null,seq__34623_34628);
if(temp__4406__auto___34637){
var seq__34623_34638__$1 = temp__4406__auto___34637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34623_34638__$1)){
var c__15231__auto___34639 = cljs.core.chunk_first.call(null,seq__34623_34638__$1);
var G__34640 = cljs.core.chunk_rest.call(null,seq__34623_34638__$1);
var G__34641 = c__15231__auto___34639;
var G__34642 = cljs.core.count.call(null,c__15231__auto___34639);
var G__34643 = (0);
seq__34623_34628 = G__34640;
chunk__34624_34629 = G__34641;
count__34625_34630 = G__34642;
i__34626_34631 = G__34643;
continue;
} else {
var c_34644 = cljs.core.first.call(null,seq__34623_34638__$1);
prepend_BANG_.call(null,parent,c_34644);

var G__34645 = cljs.core.next.call(null,seq__34623_34638__$1);
var G__34646 = null;
var G__34647 = (0);
var G__34648 = (0);
seq__34623_34628 = G__34645;
chunk__34624_34629 = G__34646;
count__34625_34630 = G__34647;
i__34626_34631 = G__34648;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__34627 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__34649__i = 0, G__34649__a = new Array(arguments.length -  2);
while (G__34649__i < G__34649__a.length) {G__34649__a[G__34649__i] = arguments[G__34649__i + 2]; ++G__34649__i;}
  more_children = new cljs.core.IndexedSeq(G__34649__a,0);
} 
return G__34627__delegate.call(this,parent,child,more_children);};
G__34627.cljs$lang$maxFixedArity = 2;
G__34627.cljs$lang$applyTo = (function (arglist__34650){
var parent = cljs.core.first(arglist__34650);
arglist__34650 = cljs.core.next(arglist__34650);
var child = cljs.core.first(arglist__34650);
var more_children = cljs.core.rest(arglist__34650);
return G__34627__delegate(parent,child,more_children);
});
G__34627.cljs$core$IFn$_invoke$arity$variadic = G__34627__delegate;
return G__34627;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__34651 = null;
if (arguments.length > 2) {
var G__34652__i = 0, G__34652__a = new Array(arguments.length -  2);
while (G__34652__i < G__34652__a.length) {G__34652__a[G__34652__i] = arguments[G__34652__i + 2]; ++G__34652__i;}
G__34651 = new cljs.core.IndexedSeq(G__34652__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__34651);
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
var temp__4404__auto___34653 = other.nextSibling;
if(cljs.core.truth_(temp__4404__auto___34653)){
var next_34654 = temp__4404__auto___34653;
dommy.core.insert_before_BANG_.call(null,elem,next_34654);
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
var G__34656 = p;
G__34656.removeChild(elem);

return G__34656;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34657){
var vec__34658 = p__34657;
var special_mouse_event = cljs.core.nth.call(null,vec__34658,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__34658,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__34658,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__34658,special_mouse_event,real_mouse_event){
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
;})(vec__34658,special_mouse_event,real_mouse_event))
});})(vec__34658,special_mouse_event,real_mouse_event))
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
var G__34659__i = 0, G__34659__a = new Array(arguments.length -  2);
while (G__34659__i < G__34659__a.length) {G__34659__a[G__34659__i] = arguments[G__34659__i + 2]; ++G__34659__i;}
  args = new cljs.core.IndexedSeq(G__34659__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__34660){
var elem = cljs.core.first(arglist__34660);
arglist__34660 = cljs.core.next(arglist__34660);
var f = cljs.core.first(arglist__34660);
var args = cljs.core.rest(arglist__34660);
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

var vec__34684_34707 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_34708 = cljs.core.nth.call(null,vec__34684_34707,(0),null);
var selector_34709 = cljs.core.nth.call(null,vec__34684_34707,(1),null);
var seq__34685_34710 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__34692_34711 = null;
var count__34693_34712 = (0);
var i__34694_34713 = (0);
while(true){
if((i__34694_34713 < count__34693_34712)){
var vec__34701_34714 = cljs.core._nth.call(null,chunk__34692_34711,i__34694_34713);
var orig_type_34715 = cljs.core.nth.call(null,vec__34701_34714,(0),null);
var f_34716 = cljs.core.nth.call(null,vec__34701_34714,(1),null);
var seq__34695_34717 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_34715,new cljs.core.PersistentArrayMap.fromArray([orig_type_34715,cljs.core.identity], true, false)));
var chunk__34697_34718 = null;
var count__34698_34719 = (0);
var i__34699_34720 = (0);
while(true){
if((i__34699_34720 < count__34698_34719)){
var vec__34702_34721 = cljs.core._nth.call(null,chunk__34697_34718,i__34699_34720);
var actual_type_34722 = cljs.core.nth.call(null,vec__34702_34721,(0),null);
var factory_34723 = cljs.core.nth.call(null,vec__34702_34721,(1),null);
var canonical_f_34724 = (cljs.core.truth_(selector_34709)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34708,selector_34709):cljs.core.identity).call(null,factory_34723.call(null,f_34716));
dommy.core.update_event_listeners_BANG_.call(null,elem_34708,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34709,actual_type_34722,f_34716], null),canonical_f_34724);

if(cljs.core.truth_(elem_34708.addEventListener)){
elem_34708.addEventListener(cljs.core.name.call(null,actual_type_34722),canonical_f_34724);
} else {
elem_34708.attachEvent(cljs.core.name.call(null,actual_type_34722),canonical_f_34724);
}

var G__34725 = seq__34695_34717;
var G__34726 = chunk__34697_34718;
var G__34727 = count__34698_34719;
var G__34728 = (i__34699_34720 + (1));
seq__34695_34717 = G__34725;
chunk__34697_34718 = G__34726;
count__34698_34719 = G__34727;
i__34699_34720 = G__34728;
continue;
} else {
var temp__4406__auto___34729 = cljs.core.seq.call(null,seq__34695_34717);
if(temp__4406__auto___34729){
var seq__34695_34730__$1 = temp__4406__auto___34729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34695_34730__$1)){
var c__15231__auto___34731 = cljs.core.chunk_first.call(null,seq__34695_34730__$1);
var G__34732 = cljs.core.chunk_rest.call(null,seq__34695_34730__$1);
var G__34733 = c__15231__auto___34731;
var G__34734 = cljs.core.count.call(null,c__15231__auto___34731);
var G__34735 = (0);
seq__34695_34717 = G__34732;
chunk__34697_34718 = G__34733;
count__34698_34719 = G__34734;
i__34699_34720 = G__34735;
continue;
} else {
var vec__34703_34736 = cljs.core.first.call(null,seq__34695_34730__$1);
var actual_type_34737 = cljs.core.nth.call(null,vec__34703_34736,(0),null);
var factory_34738 = cljs.core.nth.call(null,vec__34703_34736,(1),null);
var canonical_f_34739 = (cljs.core.truth_(selector_34709)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34708,selector_34709):cljs.core.identity).call(null,factory_34738.call(null,f_34716));
dommy.core.update_event_listeners_BANG_.call(null,elem_34708,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34709,actual_type_34737,f_34716], null),canonical_f_34739);

if(cljs.core.truth_(elem_34708.addEventListener)){
elem_34708.addEventListener(cljs.core.name.call(null,actual_type_34737),canonical_f_34739);
} else {
elem_34708.attachEvent(cljs.core.name.call(null,actual_type_34737),canonical_f_34739);
}

var G__34740 = cljs.core.next.call(null,seq__34695_34730__$1);
var G__34741 = null;
var G__34742 = (0);
var G__34743 = (0);
seq__34695_34717 = G__34740;
chunk__34697_34718 = G__34741;
count__34698_34719 = G__34742;
i__34699_34720 = G__34743;
continue;
}
} else {
}
}
break;
}

var G__34744 = seq__34685_34710;
var G__34745 = chunk__34692_34711;
var G__34746 = count__34693_34712;
var G__34747 = (i__34694_34713 + (1));
seq__34685_34710 = G__34744;
chunk__34692_34711 = G__34745;
count__34693_34712 = G__34746;
i__34694_34713 = G__34747;
continue;
} else {
var temp__4406__auto___34748 = cljs.core.seq.call(null,seq__34685_34710);
if(temp__4406__auto___34748){
var seq__34685_34749__$1 = temp__4406__auto___34748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34685_34749__$1)){
var c__15231__auto___34750 = cljs.core.chunk_first.call(null,seq__34685_34749__$1);
var G__34751 = cljs.core.chunk_rest.call(null,seq__34685_34749__$1);
var G__34752 = c__15231__auto___34750;
var G__34753 = cljs.core.count.call(null,c__15231__auto___34750);
var G__34754 = (0);
seq__34685_34710 = G__34751;
chunk__34692_34711 = G__34752;
count__34693_34712 = G__34753;
i__34694_34713 = G__34754;
continue;
} else {
var vec__34704_34755 = cljs.core.first.call(null,seq__34685_34749__$1);
var orig_type_34756 = cljs.core.nth.call(null,vec__34704_34755,(0),null);
var f_34757 = cljs.core.nth.call(null,vec__34704_34755,(1),null);
var seq__34686_34758 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_34756,new cljs.core.PersistentArrayMap.fromArray([orig_type_34756,cljs.core.identity], true, false)));
var chunk__34688_34759 = null;
var count__34689_34760 = (0);
var i__34690_34761 = (0);
while(true){
if((i__34690_34761 < count__34689_34760)){
var vec__34705_34762 = cljs.core._nth.call(null,chunk__34688_34759,i__34690_34761);
var actual_type_34763 = cljs.core.nth.call(null,vec__34705_34762,(0),null);
var factory_34764 = cljs.core.nth.call(null,vec__34705_34762,(1),null);
var canonical_f_34765 = (cljs.core.truth_(selector_34709)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34708,selector_34709):cljs.core.identity).call(null,factory_34764.call(null,f_34757));
dommy.core.update_event_listeners_BANG_.call(null,elem_34708,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34709,actual_type_34763,f_34757], null),canonical_f_34765);

if(cljs.core.truth_(elem_34708.addEventListener)){
elem_34708.addEventListener(cljs.core.name.call(null,actual_type_34763),canonical_f_34765);
} else {
elem_34708.attachEvent(cljs.core.name.call(null,actual_type_34763),canonical_f_34765);
}

var G__34766 = seq__34686_34758;
var G__34767 = chunk__34688_34759;
var G__34768 = count__34689_34760;
var G__34769 = (i__34690_34761 + (1));
seq__34686_34758 = G__34766;
chunk__34688_34759 = G__34767;
count__34689_34760 = G__34768;
i__34690_34761 = G__34769;
continue;
} else {
var temp__4406__auto___34770__$1 = cljs.core.seq.call(null,seq__34686_34758);
if(temp__4406__auto___34770__$1){
var seq__34686_34771__$1 = temp__4406__auto___34770__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34686_34771__$1)){
var c__15231__auto___34772 = cljs.core.chunk_first.call(null,seq__34686_34771__$1);
var G__34773 = cljs.core.chunk_rest.call(null,seq__34686_34771__$1);
var G__34774 = c__15231__auto___34772;
var G__34775 = cljs.core.count.call(null,c__15231__auto___34772);
var G__34776 = (0);
seq__34686_34758 = G__34773;
chunk__34688_34759 = G__34774;
count__34689_34760 = G__34775;
i__34690_34761 = G__34776;
continue;
} else {
var vec__34706_34777 = cljs.core.first.call(null,seq__34686_34771__$1);
var actual_type_34778 = cljs.core.nth.call(null,vec__34706_34777,(0),null);
var factory_34779 = cljs.core.nth.call(null,vec__34706_34777,(1),null);
var canonical_f_34780 = (cljs.core.truth_(selector_34709)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34708,selector_34709):cljs.core.identity).call(null,factory_34779.call(null,f_34757));
dommy.core.update_event_listeners_BANG_.call(null,elem_34708,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34709,actual_type_34778,f_34757], null),canonical_f_34780);

if(cljs.core.truth_(elem_34708.addEventListener)){
elem_34708.addEventListener(cljs.core.name.call(null,actual_type_34778),canonical_f_34780);
} else {
elem_34708.attachEvent(cljs.core.name.call(null,actual_type_34778),canonical_f_34780);
}

var G__34781 = cljs.core.next.call(null,seq__34686_34771__$1);
var G__34782 = null;
var G__34783 = (0);
var G__34784 = (0);
seq__34686_34758 = G__34781;
chunk__34688_34759 = G__34782;
count__34689_34760 = G__34783;
i__34690_34761 = G__34784;
continue;
}
} else {
}
}
break;
}

var G__34785 = cljs.core.next.call(null,seq__34685_34749__$1);
var G__34786 = null;
var G__34787 = (0);
var G__34788 = (0);
seq__34685_34710 = G__34785;
chunk__34692_34711 = G__34786;
count__34693_34712 = G__34787;
i__34694_34713 = G__34788;
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
var G__34789__i = 0, G__34789__a = new Array(arguments.length -  1);
while (G__34789__i < G__34789__a.length) {G__34789__a[G__34789__i] = arguments[G__34789__i + 1]; ++G__34789__i;}
  type_fs = new cljs.core.IndexedSeq(G__34789__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__34790){
var elem_sel = cljs.core.first(arglist__34790);
var type_fs = cljs.core.rest(arglist__34790);
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

var vec__34814_34837 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_34838 = cljs.core.nth.call(null,vec__34814_34837,(0),null);
var selector_34839 = cljs.core.nth.call(null,vec__34814_34837,(1),null);
var seq__34815_34840 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__34822_34841 = null;
var count__34823_34842 = (0);
var i__34824_34843 = (0);
while(true){
if((i__34824_34843 < count__34823_34842)){
var vec__34831_34844 = cljs.core._nth.call(null,chunk__34822_34841,i__34824_34843);
var orig_type_34845 = cljs.core.nth.call(null,vec__34831_34844,(0),null);
var f_34846 = cljs.core.nth.call(null,vec__34831_34844,(1),null);
var seq__34825_34847 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_34845,new cljs.core.PersistentArrayMap.fromArray([orig_type_34845,cljs.core.identity], true, false)));
var chunk__34827_34848 = null;
var count__34828_34849 = (0);
var i__34829_34850 = (0);
while(true){
if((i__34829_34850 < count__34828_34849)){
var vec__34832_34851 = cljs.core._nth.call(null,chunk__34827_34848,i__34829_34850);
var actual_type_34852 = cljs.core.nth.call(null,vec__34832_34851,(0),null);
var __34853 = cljs.core.nth.call(null,vec__34832_34851,(1),null);
var keys_34854 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34839,actual_type_34852,f_34846], null);
var canonical_f_34855 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_34838),keys_34854);
dommy.core.update_event_listeners_BANG_.call(null,elem_34838,dommy.utils.dissoc_in,keys_34854);

if(cljs.core.truth_(elem_34838.removeEventListener)){
elem_34838.removeEventListener(cljs.core.name.call(null,actual_type_34852),canonical_f_34855);
} else {
elem_34838.detachEvent(cljs.core.name.call(null,actual_type_34852),canonical_f_34855);
}

var G__34856 = seq__34825_34847;
var G__34857 = chunk__34827_34848;
var G__34858 = count__34828_34849;
var G__34859 = (i__34829_34850 + (1));
seq__34825_34847 = G__34856;
chunk__34827_34848 = G__34857;
count__34828_34849 = G__34858;
i__34829_34850 = G__34859;
continue;
} else {
var temp__4406__auto___34860 = cljs.core.seq.call(null,seq__34825_34847);
if(temp__4406__auto___34860){
var seq__34825_34861__$1 = temp__4406__auto___34860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34825_34861__$1)){
var c__15231__auto___34862 = cljs.core.chunk_first.call(null,seq__34825_34861__$1);
var G__34863 = cljs.core.chunk_rest.call(null,seq__34825_34861__$1);
var G__34864 = c__15231__auto___34862;
var G__34865 = cljs.core.count.call(null,c__15231__auto___34862);
var G__34866 = (0);
seq__34825_34847 = G__34863;
chunk__34827_34848 = G__34864;
count__34828_34849 = G__34865;
i__34829_34850 = G__34866;
continue;
} else {
var vec__34833_34867 = cljs.core.first.call(null,seq__34825_34861__$1);
var actual_type_34868 = cljs.core.nth.call(null,vec__34833_34867,(0),null);
var __34869 = cljs.core.nth.call(null,vec__34833_34867,(1),null);
var keys_34870 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34839,actual_type_34868,f_34846], null);
var canonical_f_34871 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_34838),keys_34870);
dommy.core.update_event_listeners_BANG_.call(null,elem_34838,dommy.utils.dissoc_in,keys_34870);

if(cljs.core.truth_(elem_34838.removeEventListener)){
elem_34838.removeEventListener(cljs.core.name.call(null,actual_type_34868),canonical_f_34871);
} else {
elem_34838.detachEvent(cljs.core.name.call(null,actual_type_34868),canonical_f_34871);
}

var G__34872 = cljs.core.next.call(null,seq__34825_34861__$1);
var G__34873 = null;
var G__34874 = (0);
var G__34875 = (0);
seq__34825_34847 = G__34872;
chunk__34827_34848 = G__34873;
count__34828_34849 = G__34874;
i__34829_34850 = G__34875;
continue;
}
} else {
}
}
break;
}

var G__34876 = seq__34815_34840;
var G__34877 = chunk__34822_34841;
var G__34878 = count__34823_34842;
var G__34879 = (i__34824_34843 + (1));
seq__34815_34840 = G__34876;
chunk__34822_34841 = G__34877;
count__34823_34842 = G__34878;
i__34824_34843 = G__34879;
continue;
} else {
var temp__4406__auto___34880 = cljs.core.seq.call(null,seq__34815_34840);
if(temp__4406__auto___34880){
var seq__34815_34881__$1 = temp__4406__auto___34880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34815_34881__$1)){
var c__15231__auto___34882 = cljs.core.chunk_first.call(null,seq__34815_34881__$1);
var G__34883 = cljs.core.chunk_rest.call(null,seq__34815_34881__$1);
var G__34884 = c__15231__auto___34882;
var G__34885 = cljs.core.count.call(null,c__15231__auto___34882);
var G__34886 = (0);
seq__34815_34840 = G__34883;
chunk__34822_34841 = G__34884;
count__34823_34842 = G__34885;
i__34824_34843 = G__34886;
continue;
} else {
var vec__34834_34887 = cljs.core.first.call(null,seq__34815_34881__$1);
var orig_type_34888 = cljs.core.nth.call(null,vec__34834_34887,(0),null);
var f_34889 = cljs.core.nth.call(null,vec__34834_34887,(1),null);
var seq__34816_34890 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_34888,new cljs.core.PersistentArrayMap.fromArray([orig_type_34888,cljs.core.identity], true, false)));
var chunk__34818_34891 = null;
var count__34819_34892 = (0);
var i__34820_34893 = (0);
while(true){
if((i__34820_34893 < count__34819_34892)){
var vec__34835_34894 = cljs.core._nth.call(null,chunk__34818_34891,i__34820_34893);
var actual_type_34895 = cljs.core.nth.call(null,vec__34835_34894,(0),null);
var __34896 = cljs.core.nth.call(null,vec__34835_34894,(1),null);
var keys_34897 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34839,actual_type_34895,f_34889], null);
var canonical_f_34898 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_34838),keys_34897);
dommy.core.update_event_listeners_BANG_.call(null,elem_34838,dommy.utils.dissoc_in,keys_34897);

if(cljs.core.truth_(elem_34838.removeEventListener)){
elem_34838.removeEventListener(cljs.core.name.call(null,actual_type_34895),canonical_f_34898);
} else {
elem_34838.detachEvent(cljs.core.name.call(null,actual_type_34895),canonical_f_34898);
}

var G__34899 = seq__34816_34890;
var G__34900 = chunk__34818_34891;
var G__34901 = count__34819_34892;
var G__34902 = (i__34820_34893 + (1));
seq__34816_34890 = G__34899;
chunk__34818_34891 = G__34900;
count__34819_34892 = G__34901;
i__34820_34893 = G__34902;
continue;
} else {
var temp__4406__auto___34903__$1 = cljs.core.seq.call(null,seq__34816_34890);
if(temp__4406__auto___34903__$1){
var seq__34816_34904__$1 = temp__4406__auto___34903__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34816_34904__$1)){
var c__15231__auto___34905 = cljs.core.chunk_first.call(null,seq__34816_34904__$1);
var G__34906 = cljs.core.chunk_rest.call(null,seq__34816_34904__$1);
var G__34907 = c__15231__auto___34905;
var G__34908 = cljs.core.count.call(null,c__15231__auto___34905);
var G__34909 = (0);
seq__34816_34890 = G__34906;
chunk__34818_34891 = G__34907;
count__34819_34892 = G__34908;
i__34820_34893 = G__34909;
continue;
} else {
var vec__34836_34910 = cljs.core.first.call(null,seq__34816_34904__$1);
var actual_type_34911 = cljs.core.nth.call(null,vec__34836_34910,(0),null);
var __34912 = cljs.core.nth.call(null,vec__34836_34910,(1),null);
var keys_34913 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34839,actual_type_34911,f_34889], null);
var canonical_f_34914 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_34838),keys_34913);
dommy.core.update_event_listeners_BANG_.call(null,elem_34838,dommy.utils.dissoc_in,keys_34913);

if(cljs.core.truth_(elem_34838.removeEventListener)){
elem_34838.removeEventListener(cljs.core.name.call(null,actual_type_34911),canonical_f_34914);
} else {
elem_34838.detachEvent(cljs.core.name.call(null,actual_type_34911),canonical_f_34914);
}

var G__34915 = cljs.core.next.call(null,seq__34816_34904__$1);
var G__34916 = null;
var G__34917 = (0);
var G__34918 = (0);
seq__34816_34890 = G__34915;
chunk__34818_34891 = G__34916;
count__34819_34892 = G__34917;
i__34820_34893 = G__34918;
continue;
}
} else {
}
}
break;
}

var G__34919 = cljs.core.next.call(null,seq__34815_34881__$1);
var G__34920 = null;
var G__34921 = (0);
var G__34922 = (0);
seq__34815_34840 = G__34919;
chunk__34822_34841 = G__34920;
count__34823_34842 = G__34921;
i__34824_34843 = G__34922;
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
var G__34923__i = 0, G__34923__a = new Array(arguments.length -  1);
while (G__34923__i < G__34923__a.length) {G__34923__a[G__34923__i] = arguments[G__34923__i + 1]; ++G__34923__i;}
  type_fs = new cljs.core.IndexedSeq(G__34923__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__34924){
var elem_sel = cljs.core.first(arglist__34924);
var type_fs = cljs.core.rest(arglist__34924);
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

var vec__34932_34939 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_34940 = cljs.core.nth.call(null,vec__34932_34939,(0),null);
var selector_34941 = cljs.core.nth.call(null,vec__34932_34939,(1),null);
var seq__34933_34942 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__34934_34943 = null;
var count__34935_34944 = (0);
var i__34936_34945 = (0);
while(true){
if((i__34936_34945 < count__34935_34944)){
var vec__34937_34946 = cljs.core._nth.call(null,chunk__34934_34943,i__34936_34945);
var type_34947 = cljs.core.nth.call(null,vec__34937_34946,(0),null);
var f_34948 = cljs.core.nth.call(null,vec__34937_34946,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_34947,((function (seq__34933_34942,chunk__34934_34943,count__34935_34944,i__34936_34945,vec__34937_34946,type_34947,f_34948,vec__34932_34939,elem_34940,selector_34941){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_34947,this_fn);

return f_34948.call(null,e);
});})(seq__34933_34942,chunk__34934_34943,count__34935_34944,i__34936_34945,vec__34937_34946,type_34947,f_34948,vec__34932_34939,elem_34940,selector_34941))
);

var G__34949 = seq__34933_34942;
var G__34950 = chunk__34934_34943;
var G__34951 = count__34935_34944;
var G__34952 = (i__34936_34945 + (1));
seq__34933_34942 = G__34949;
chunk__34934_34943 = G__34950;
count__34935_34944 = G__34951;
i__34936_34945 = G__34952;
continue;
} else {
var temp__4406__auto___34953 = cljs.core.seq.call(null,seq__34933_34942);
if(temp__4406__auto___34953){
var seq__34933_34954__$1 = temp__4406__auto___34953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34933_34954__$1)){
var c__15231__auto___34955 = cljs.core.chunk_first.call(null,seq__34933_34954__$1);
var G__34956 = cljs.core.chunk_rest.call(null,seq__34933_34954__$1);
var G__34957 = c__15231__auto___34955;
var G__34958 = cljs.core.count.call(null,c__15231__auto___34955);
var G__34959 = (0);
seq__34933_34942 = G__34956;
chunk__34934_34943 = G__34957;
count__34935_34944 = G__34958;
i__34936_34945 = G__34959;
continue;
} else {
var vec__34938_34960 = cljs.core.first.call(null,seq__34933_34954__$1);
var type_34961 = cljs.core.nth.call(null,vec__34938_34960,(0),null);
var f_34962 = cljs.core.nth.call(null,vec__34938_34960,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_34961,((function (seq__34933_34942,chunk__34934_34943,count__34935_34944,i__34936_34945,vec__34938_34960,type_34961,f_34962,seq__34933_34954__$1,temp__4406__auto___34953,vec__34932_34939,elem_34940,selector_34941){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_34961,this_fn);

return f_34962.call(null,e);
});})(seq__34933_34942,chunk__34934_34943,count__34935_34944,i__34936_34945,vec__34938_34960,type_34961,f_34962,seq__34933_34954__$1,temp__4406__auto___34953,vec__34932_34939,elem_34940,selector_34941))
);

var G__34963 = cljs.core.next.call(null,seq__34933_34954__$1);
var G__34964 = null;
var G__34965 = (0);
var G__34966 = (0);
seq__34933_34942 = G__34963;
chunk__34934_34943 = G__34964;
count__34935_34944 = G__34965;
i__34936_34945 = G__34966;
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
var G__34967__i = 0, G__34967__a = new Array(arguments.length -  1);
while (G__34967__i < G__34967__a.length) {G__34967__a[G__34967__i] = arguments[G__34967__i + 1]; ++G__34967__i;}
  type_fs = new cljs.core.IndexedSeq(G__34967__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__34968){
var elem_sel = cljs.core.first(arglist__34968);
var type_fs = cljs.core.rest(arglist__34968);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map