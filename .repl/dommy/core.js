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
var or__10941__auto__ = elem.textContent;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__42447_SHARP_){
return !((p1__42447_SHARP_ === base));
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
var seq__42454_42460 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__42455_42461 = null;
var count__42456_42462 = (0);
var i__42457_42463 = (0);
while(true){
if((i__42457_42463 < count__42456_42462)){
var vec__42458_42464 = cljs.core._nth.call(null,chunk__42455_42461,i__42457_42463);
var k_42465 = cljs.core.nth.call(null,vec__42458_42464,(0),null);
var v_42466 = cljs.core.nth.call(null,vec__42458_42464,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_42465),v_42466);

var G__42467 = seq__42454_42460;
var G__42468 = chunk__42455_42461;
var G__42469 = count__42456_42462;
var G__42470 = (i__42457_42463 + (1));
seq__42454_42460 = G__42467;
chunk__42455_42461 = G__42468;
count__42456_42462 = G__42469;
i__42457_42463 = G__42470;
continue;
} else {
var temp__4406__auto___42471 = cljs.core.seq.call(null,seq__42454_42460);
if(temp__4406__auto___42471){
var seq__42454_42472__$1 = temp__4406__auto___42471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42454_42472__$1)){
var c__11728__auto___42473 = cljs.core.chunk_first.call(null,seq__42454_42472__$1);
var G__42474 = cljs.core.chunk_rest.call(null,seq__42454_42472__$1);
var G__42475 = c__11728__auto___42473;
var G__42476 = cljs.core.count.call(null,c__11728__auto___42473);
var G__42477 = (0);
seq__42454_42460 = G__42474;
chunk__42455_42461 = G__42475;
count__42456_42462 = G__42476;
i__42457_42463 = G__42477;
continue;
} else {
var vec__42459_42478 = cljs.core.first.call(null,seq__42454_42472__$1);
var k_42479 = cljs.core.nth.call(null,vec__42459_42478,(0),null);
var v_42480 = cljs.core.nth.call(null,vec__42459_42478,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_42479),v_42480);

var G__42481 = cljs.core.next.call(null,seq__42454_42472__$1);
var G__42482 = null;
var G__42483 = (0);
var G__42484 = (0);
seq__42454_42460 = G__42481;
chunk__42455_42461 = G__42482;
count__42456_42462 = G__42483;
i__42457_42463 = G__42484;
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
var G__42485__i = 0, G__42485__a = new Array(arguments.length -  1);
while (G__42485__i < G__42485__a.length) {G__42485__a[G__42485__i] = arguments[G__42485__i + 1]; ++G__42485__i;}
  kvs = new cljs.core.IndexedSeq(G__42485__a,0);
} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__42486){
var elem = cljs.core.first(arglist__42486);
var kvs = cljs.core.rest(arglist__42486);
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

var seq__42493_42499 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__42494_42500 = null;
var count__42495_42501 = (0);
var i__42496_42502 = (0);
while(true){
if((i__42496_42502 < count__42495_42501)){
var vec__42497_42503 = cljs.core._nth.call(null,chunk__42494_42500,i__42496_42502);
var k_42504 = cljs.core.nth.call(null,vec__42497_42503,(0),null);
var v_42505 = cljs.core.nth.call(null,vec__42497_42503,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_42504,[cljs.core.str(v_42505),cljs.core.str("px")].join(''));

var G__42506 = seq__42493_42499;
var G__42507 = chunk__42494_42500;
var G__42508 = count__42495_42501;
var G__42509 = (i__42496_42502 + (1));
seq__42493_42499 = G__42506;
chunk__42494_42500 = G__42507;
count__42495_42501 = G__42508;
i__42496_42502 = G__42509;
continue;
} else {
var temp__4406__auto___42510 = cljs.core.seq.call(null,seq__42493_42499);
if(temp__4406__auto___42510){
var seq__42493_42511__$1 = temp__4406__auto___42510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42493_42511__$1)){
var c__11728__auto___42512 = cljs.core.chunk_first.call(null,seq__42493_42511__$1);
var G__42513 = cljs.core.chunk_rest.call(null,seq__42493_42511__$1);
var G__42514 = c__11728__auto___42512;
var G__42515 = cljs.core.count.call(null,c__11728__auto___42512);
var G__42516 = (0);
seq__42493_42499 = G__42513;
chunk__42494_42500 = G__42514;
count__42495_42501 = G__42515;
i__42496_42502 = G__42516;
continue;
} else {
var vec__42498_42517 = cljs.core.first.call(null,seq__42493_42511__$1);
var k_42518 = cljs.core.nth.call(null,vec__42498_42517,(0),null);
var v_42519 = cljs.core.nth.call(null,vec__42498_42517,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_42518,[cljs.core.str(v_42519),cljs.core.str("px")].join(''));

var G__42520 = cljs.core.next.call(null,seq__42493_42511__$1);
var G__42521 = null;
var G__42522 = (0);
var G__42523 = (0);
seq__42493_42499 = G__42520;
chunk__42494_42500 = G__42521;
count__42495_42501 = G__42522;
i__42496_42502 = G__42523;
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
var G__42524__i = 0, G__42524__a = new Array(arguments.length -  1);
while (G__42524__i < G__42524__a.length) {G__42524__a[G__42524__i] = arguments[G__42524__i + 1]; ++G__42524__i;}
  kvs = new cljs.core.IndexedSeq(G__42524__a,0);
} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__42525){
var elem = cljs.core.first(arglist__42525);
var kvs = cljs.core.rest(arglist__42525);
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
var G__42534 = elem;
(G__42534[k__$1] = v);

return G__42534;
} else {
var G__42535 = elem;
G__42535.setAttribute(k__$1,v);

return G__42535;
}
} else {
return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__42542__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__42536_42543 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__42537_42544 = null;
var count__42538_42545 = (0);
var i__42539_42546 = (0);
while(true){
if((i__42539_42546 < count__42538_42545)){
var vec__42540_42547 = cljs.core._nth.call(null,chunk__42537_42544,i__42539_42546);
var k_42548__$1 = cljs.core.nth.call(null,vec__42540_42547,(0),null);
var v_42549__$1 = cljs.core.nth.call(null,vec__42540_42547,(1),null);
set_attr_BANG_.call(null,elem,k_42548__$1,v_42549__$1);

var G__42550 = seq__42536_42543;
var G__42551 = chunk__42537_42544;
var G__42552 = count__42538_42545;
var G__42553 = (i__42539_42546 + (1));
seq__42536_42543 = G__42550;
chunk__42537_42544 = G__42551;
count__42538_42545 = G__42552;
i__42539_42546 = G__42553;
continue;
} else {
var temp__4406__auto___42554 = cljs.core.seq.call(null,seq__42536_42543);
if(temp__4406__auto___42554){
var seq__42536_42555__$1 = temp__4406__auto___42554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42536_42555__$1)){
var c__11728__auto___42556 = cljs.core.chunk_first.call(null,seq__42536_42555__$1);
var G__42557 = cljs.core.chunk_rest.call(null,seq__42536_42555__$1);
var G__42558 = c__11728__auto___42556;
var G__42559 = cljs.core.count.call(null,c__11728__auto___42556);
var G__42560 = (0);
seq__42536_42543 = G__42557;
chunk__42537_42544 = G__42558;
count__42538_42545 = G__42559;
i__42539_42546 = G__42560;
continue;
} else {
var vec__42541_42561 = cljs.core.first.call(null,seq__42536_42555__$1);
var k_42562__$1 = cljs.core.nth.call(null,vec__42541_42561,(0),null);
var v_42563__$1 = cljs.core.nth.call(null,vec__42541_42561,(1),null);
set_attr_BANG_.call(null,elem,k_42562__$1,v_42563__$1);

var G__42564 = cljs.core.next.call(null,seq__42536_42555__$1);
var G__42565 = null;
var G__42566 = (0);
var G__42567 = (0);
seq__42536_42543 = G__42564;
chunk__42537_42544 = G__42565;
count__42538_42545 = G__42566;
i__42539_42546 = G__42567;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__42542 = function (elem,k,v,var_args){
var kvs = null;
if (arguments.length > 3) {
var G__42568__i = 0, G__42568__a = new Array(arguments.length -  3);
while (G__42568__i < G__42568__a.length) {G__42568__a[G__42568__i] = arguments[G__42568__i + 3]; ++G__42568__i;}
  kvs = new cljs.core.IndexedSeq(G__42568__a,0);
} 
return G__42542__delegate.call(this,elem,k,v,kvs);};
G__42542.cljs$lang$maxFixedArity = 3;
G__42542.cljs$lang$applyTo = (function (arglist__42569){
var elem = cljs.core.first(arglist__42569);
arglist__42569 = cljs.core.next(arglist__42569);
var k = cljs.core.first(arglist__42569);
arglist__42569 = cljs.core.next(arglist__42569);
var v = cljs.core.first(arglist__42569);
var kvs = cljs.core.rest(arglist__42569);
return G__42542__delegate(elem,k,v,kvs);
});
G__42542.cljs$core$IFn$_invoke$arity$variadic = G__42542__delegate;
return G__42542;
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
var G__42570 = null;
if (arguments.length > 3) {
var G__42571__i = 0, G__42571__a = new Array(arguments.length -  3);
while (G__42571__i < G__42571__a.length) {G__42571__a[G__42571__i] = arguments[G__42571__i + 3]; ++G__42571__i;}
G__42570 = new cljs.core.IndexedSeq(G__42571__a,0);
}
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, G__42570);
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
var k_42580__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_42580__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_42580__$1);
}

return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__42581__delegate = function (elem,k,ks){
var seq__42576_42582 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__42577_42583 = null;
var count__42578_42584 = (0);
var i__42579_42585 = (0);
while(true){
if((i__42579_42585 < count__42578_42584)){
var k_42586__$1 = cljs.core._nth.call(null,chunk__42577_42583,i__42579_42585);
remove_attr_BANG_.call(null,elem,k_42586__$1);

var G__42587 = seq__42576_42582;
var G__42588 = chunk__42577_42583;
var G__42589 = count__42578_42584;
var G__42590 = (i__42579_42585 + (1));
seq__42576_42582 = G__42587;
chunk__42577_42583 = G__42588;
count__42578_42584 = G__42589;
i__42579_42585 = G__42590;
continue;
} else {
var temp__4406__auto___42591 = cljs.core.seq.call(null,seq__42576_42582);
if(temp__4406__auto___42591){
var seq__42576_42592__$1 = temp__4406__auto___42591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42576_42592__$1)){
var c__11728__auto___42593 = cljs.core.chunk_first.call(null,seq__42576_42592__$1);
var G__42594 = cljs.core.chunk_rest.call(null,seq__42576_42592__$1);
var G__42595 = c__11728__auto___42593;
var G__42596 = cljs.core.count.call(null,c__11728__auto___42593);
var G__42597 = (0);
seq__42576_42582 = G__42594;
chunk__42577_42583 = G__42595;
count__42578_42584 = G__42596;
i__42579_42585 = G__42597;
continue;
} else {
var k_42598__$1 = cljs.core.first.call(null,seq__42576_42592__$1);
remove_attr_BANG_.call(null,elem,k_42598__$1);

var G__42599 = cljs.core.next.call(null,seq__42576_42592__$1);
var G__42600 = null;
var G__42601 = (0);
var G__42602 = (0);
seq__42576_42582 = G__42599;
chunk__42577_42583 = G__42600;
count__42578_42584 = G__42601;
i__42579_42585 = G__42602;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__42581 = function (elem,k,var_args){
var ks = null;
if (arguments.length > 2) {
var G__42603__i = 0, G__42603__a = new Array(arguments.length -  2);
while (G__42603__i < G__42603__a.length) {G__42603__a[G__42603__i] = arguments[G__42603__i + 2]; ++G__42603__i;}
  ks = new cljs.core.IndexedSeq(G__42603__a,0);
} 
return G__42581__delegate.call(this,elem,k,ks);};
G__42581.cljs$lang$maxFixedArity = 2;
G__42581.cljs$lang$applyTo = (function (arglist__42604){
var elem = cljs.core.first(arglist__42604);
arglist__42604 = cljs.core.next(arglist__42604);
var k = cljs.core.first(arglist__42604);
var ks = cljs.core.rest(arglist__42604);
return G__42581__delegate(elem,k,ks);
});
G__42581.cljs$core$IFn$_invoke$arity$variadic = G__42581__delegate;
return G__42581;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
var G__42605 = null;
if (arguments.length > 2) {
var G__42606__i = 0, G__42606__a = new Array(arguments.length -  2);
while (G__42606__i < G__42606__a.length) {G__42606__a[G__42606__i] = arguments[G__42606__i + 2]; ++G__42606__i;}
G__42605 = new cljs.core.IndexedSeq(G__42606__a,0);
}
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, G__42605);
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
var temp__4404__auto___42631 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___42631)){
var class_list_42632 = temp__4404__auto___42631;
var seq__42619_42633 = cljs.core.seq.call(null,classes__$1);
var chunk__42620_42634 = null;
var count__42621_42635 = (0);
var i__42622_42636 = (0);
while(true){
if((i__42622_42636 < count__42621_42635)){
var c_42637 = cljs.core._nth.call(null,chunk__42620_42634,i__42622_42636);
class_list_42632.add(c_42637);

var G__42638 = seq__42619_42633;
var G__42639 = chunk__42620_42634;
var G__42640 = count__42621_42635;
var G__42641 = (i__42622_42636 + (1));
seq__42619_42633 = G__42638;
chunk__42620_42634 = G__42639;
count__42621_42635 = G__42640;
i__42622_42636 = G__42641;
continue;
} else {
var temp__4406__auto___42642 = cljs.core.seq.call(null,seq__42619_42633);
if(temp__4406__auto___42642){
var seq__42619_42643__$1 = temp__4406__auto___42642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42619_42643__$1)){
var c__11728__auto___42644 = cljs.core.chunk_first.call(null,seq__42619_42643__$1);
var G__42645 = cljs.core.chunk_rest.call(null,seq__42619_42643__$1);
var G__42646 = c__11728__auto___42644;
var G__42647 = cljs.core.count.call(null,c__11728__auto___42644);
var G__42648 = (0);
seq__42619_42633 = G__42645;
chunk__42620_42634 = G__42646;
count__42621_42635 = G__42647;
i__42622_42636 = G__42648;
continue;
} else {
var c_42649 = cljs.core.first.call(null,seq__42619_42643__$1);
class_list_42632.add(c_42649);

var G__42650 = cljs.core.next.call(null,seq__42619_42643__$1);
var G__42651 = null;
var G__42652 = (0);
var G__42653 = (0);
seq__42619_42633 = G__42650;
chunk__42620_42634 = G__42651;
count__42621_42635 = G__42652;
i__42622_42636 = G__42653;
continue;
}
} else {
}
}
break;
}
} else {
var seq__42623_42654 = cljs.core.seq.call(null,classes__$1);
var chunk__42624_42655 = null;
var count__42625_42656 = (0);
var i__42626_42657 = (0);
while(true){
if((i__42626_42657 < count__42625_42656)){
var c_42658 = cljs.core._nth.call(null,chunk__42624_42655,i__42626_42657);
var class_name_42659 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_42659,c_42658))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_42659 === ""))?c_42658:[cljs.core.str(class_name_42659),cljs.core.str(" "),cljs.core.str(c_42658)].join('')));
}

var G__42660 = seq__42623_42654;
var G__42661 = chunk__42624_42655;
var G__42662 = count__42625_42656;
var G__42663 = (i__42626_42657 + (1));
seq__42623_42654 = G__42660;
chunk__42624_42655 = G__42661;
count__42625_42656 = G__42662;
i__42626_42657 = G__42663;
continue;
} else {
var temp__4406__auto___42664 = cljs.core.seq.call(null,seq__42623_42654);
if(temp__4406__auto___42664){
var seq__42623_42665__$1 = temp__4406__auto___42664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42623_42665__$1)){
var c__11728__auto___42666 = cljs.core.chunk_first.call(null,seq__42623_42665__$1);
var G__42667 = cljs.core.chunk_rest.call(null,seq__42623_42665__$1);
var G__42668 = c__11728__auto___42666;
var G__42669 = cljs.core.count.call(null,c__11728__auto___42666);
var G__42670 = (0);
seq__42623_42654 = G__42667;
chunk__42624_42655 = G__42668;
count__42625_42656 = G__42669;
i__42626_42657 = G__42670;
continue;
} else {
var c_42671 = cljs.core.first.call(null,seq__42623_42665__$1);
var class_name_42672 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_42672,c_42671))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_42672 === ""))?c_42671:[cljs.core.str(class_name_42672),cljs.core.str(" "),cljs.core.str(c_42671)].join('')));
}

var G__42673 = cljs.core.next.call(null,seq__42623_42665__$1);
var G__42674 = null;
var G__42675 = (0);
var G__42676 = (0);
seq__42623_42654 = G__42673;
chunk__42624_42655 = G__42674;
count__42625_42656 = G__42675;
i__42626_42657 = G__42676;
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
var G__42677__delegate = function (elem,classes,more_classes){
var seq__42627_42678 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__42628_42679 = null;
var count__42629_42680 = (0);
var i__42630_42681 = (0);
while(true){
if((i__42630_42681 < count__42629_42680)){
var c_42682 = cljs.core._nth.call(null,chunk__42628_42679,i__42630_42681);
add_class_BANG_.call(null,elem,c_42682);

var G__42683 = seq__42627_42678;
var G__42684 = chunk__42628_42679;
var G__42685 = count__42629_42680;
var G__42686 = (i__42630_42681 + (1));
seq__42627_42678 = G__42683;
chunk__42628_42679 = G__42684;
count__42629_42680 = G__42685;
i__42630_42681 = G__42686;
continue;
} else {
var temp__4406__auto___42687 = cljs.core.seq.call(null,seq__42627_42678);
if(temp__4406__auto___42687){
var seq__42627_42688__$1 = temp__4406__auto___42687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42627_42688__$1)){
var c__11728__auto___42689 = cljs.core.chunk_first.call(null,seq__42627_42688__$1);
var G__42690 = cljs.core.chunk_rest.call(null,seq__42627_42688__$1);
var G__42691 = c__11728__auto___42689;
var G__42692 = cljs.core.count.call(null,c__11728__auto___42689);
var G__42693 = (0);
seq__42627_42678 = G__42690;
chunk__42628_42679 = G__42691;
count__42629_42680 = G__42692;
i__42630_42681 = G__42693;
continue;
} else {
var c_42694 = cljs.core.first.call(null,seq__42627_42688__$1);
add_class_BANG_.call(null,elem,c_42694);

var G__42695 = cljs.core.next.call(null,seq__42627_42688__$1);
var G__42696 = null;
var G__42697 = (0);
var G__42698 = (0);
seq__42627_42678 = G__42695;
chunk__42628_42679 = G__42696;
count__42629_42680 = G__42697;
i__42630_42681 = G__42698;
continue;
}
} else {
}
}
break;
}

return elem;
};
var G__42677 = function (elem,classes,var_args){
var more_classes = null;
if (arguments.length > 2) {
var G__42699__i = 0, G__42699__a = new Array(arguments.length -  2);
while (G__42699__i < G__42699__a.length) {G__42699__a[G__42699__i] = arguments[G__42699__i + 2]; ++G__42699__i;}
  more_classes = new cljs.core.IndexedSeq(G__42699__a,0);
} 
return G__42677__delegate.call(this,elem,classes,more_classes);};
G__42677.cljs$lang$maxFixedArity = 2;
G__42677.cljs$lang$applyTo = (function (arglist__42700){
var elem = cljs.core.first(arglist__42700);
arglist__42700 = cljs.core.next(arglist__42700);
var classes = cljs.core.first(arglist__42700);
var more_classes = cljs.core.rest(arglist__42700);
return G__42677__delegate(elem,classes,more_classes);
});
G__42677.cljs$core$IFn$_invoke$arity$variadic = G__42677__delegate;
return G__42677;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
var G__42701 = null;
if (arguments.length > 2) {
var G__42702__i = 0, G__42702__a = new Array(arguments.length -  2);
while (G__42702__i < G__42702__a.length) {G__42702__a[G__42702__i] = arguments[G__42702__i + 2]; ++G__42702__i;}
G__42701 = new cljs.core.IndexedSeq(G__42702__a,0);
}
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, G__42701);
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
var temp__4404__auto___42711 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___42711)){
var class_list_42712 = temp__4404__auto___42711;
class_list_42712.remove(c__$1);
} else {
var class_name_42713 = dommy.core.class$.call(null,elem);
var new_class_name_42714 = dommy.utils.remove_class_str.call(null,class_name_42713,c__$1);
if((class_name_42713 === new_class_name_42714)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_42714);
}
}

return elem;
});
var remove_class_BANG___3 = (function() { 
var G__42715__delegate = function (elem,class$,classes){
var seq__42707 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__42708 = null;
var count__42709 = (0);
var i__42710 = (0);
while(true){
if((i__42710 < count__42709)){
var c = cljs.core._nth.call(null,chunk__42708,i__42710);
remove_class_BANG_.call(null,elem,c);

var G__42716 = seq__42707;
var G__42717 = chunk__42708;
var G__42718 = count__42709;
var G__42719 = (i__42710 + (1));
seq__42707 = G__42716;
chunk__42708 = G__42717;
count__42709 = G__42718;
i__42710 = G__42719;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__42707);
if(temp__4406__auto__){
var seq__42707__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42707__$1)){
var c__11728__auto__ = cljs.core.chunk_first.call(null,seq__42707__$1);
var G__42720 = cljs.core.chunk_rest.call(null,seq__42707__$1);
var G__42721 = c__11728__auto__;
var G__42722 = cljs.core.count.call(null,c__11728__auto__);
var G__42723 = (0);
seq__42707 = G__42720;
chunk__42708 = G__42721;
count__42709 = G__42722;
i__42710 = G__42723;
continue;
} else {
var c = cljs.core.first.call(null,seq__42707__$1);
remove_class_BANG_.call(null,elem,c);

var G__42724 = cljs.core.next.call(null,seq__42707__$1);
var G__42725 = null;
var G__42726 = (0);
var G__42727 = (0);
seq__42707 = G__42724;
chunk__42708 = G__42725;
count__42709 = G__42726;
i__42710 = G__42727;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__42715 = function (elem,class$,var_args){
var classes = null;
if (arguments.length > 2) {
var G__42728__i = 0, G__42728__a = new Array(arguments.length -  2);
while (G__42728__i < G__42728__a.length) {G__42728__a[G__42728__i] = arguments[G__42728__i + 2]; ++G__42728__i;}
  classes = new cljs.core.IndexedSeq(G__42728__a,0);
} 
return G__42715__delegate.call(this,elem,class$,classes);};
G__42715.cljs$lang$maxFixedArity = 2;
G__42715.cljs$lang$applyTo = (function (arglist__42729){
var elem = cljs.core.first(arglist__42729);
arglist__42729 = cljs.core.next(arglist__42729);
var class$ = cljs.core.first(arglist__42729);
var classes = cljs.core.rest(arglist__42729);
return G__42715__delegate(elem,class$,classes);
});
G__42715.cljs$core$IFn$_invoke$arity$variadic = G__42715__delegate;
return G__42715;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
var G__42730 = null;
if (arguments.length > 2) {
var G__42731__i = 0, G__42731__a = new Array(arguments.length -  2);
while (G__42731__i < G__42731__a.length) {G__42731__a[G__42731__i] = arguments[G__42731__i + 2]; ++G__42731__i;}
G__42730 = new cljs.core.IndexedSeq(G__42731__a,0);
}
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, G__42730);
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
var temp__4404__auto___42732 = elem.classList;
if(cljs.core.truth_(temp__4404__auto___42732)){
var class_list_42733 = temp__4404__auto___42732;
class_list_42733.toggle(c__$1);
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
var G__42739 = parent;
G__42739.appendChild(child);

return G__42739;
});
var append_BANG___3 = (function() { 
var G__42744__delegate = function (parent,child,more_children){
var seq__42740_42745 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__42741_42746 = null;
var count__42742_42747 = (0);
var i__42743_42748 = (0);
while(true){
if((i__42743_42748 < count__42742_42747)){
var c_42749 = cljs.core._nth.call(null,chunk__42741_42746,i__42743_42748);
append_BANG_.call(null,parent,c_42749);

var G__42750 = seq__42740_42745;
var G__42751 = chunk__42741_42746;
var G__42752 = count__42742_42747;
var G__42753 = (i__42743_42748 + (1));
seq__42740_42745 = G__42750;
chunk__42741_42746 = G__42751;
count__42742_42747 = G__42752;
i__42743_42748 = G__42753;
continue;
} else {
var temp__4406__auto___42754 = cljs.core.seq.call(null,seq__42740_42745);
if(temp__4406__auto___42754){
var seq__42740_42755__$1 = temp__4406__auto___42754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42740_42755__$1)){
var c__11728__auto___42756 = cljs.core.chunk_first.call(null,seq__42740_42755__$1);
var G__42757 = cljs.core.chunk_rest.call(null,seq__42740_42755__$1);
var G__42758 = c__11728__auto___42756;
var G__42759 = cljs.core.count.call(null,c__11728__auto___42756);
var G__42760 = (0);
seq__42740_42745 = G__42757;
chunk__42741_42746 = G__42758;
count__42742_42747 = G__42759;
i__42743_42748 = G__42760;
continue;
} else {
var c_42761 = cljs.core.first.call(null,seq__42740_42755__$1);
append_BANG_.call(null,parent,c_42761);

var G__42762 = cljs.core.next.call(null,seq__42740_42755__$1);
var G__42763 = null;
var G__42764 = (0);
var G__42765 = (0);
seq__42740_42745 = G__42762;
chunk__42741_42746 = G__42763;
count__42742_42747 = G__42764;
i__42743_42748 = G__42765;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__42744 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__42766__i = 0, G__42766__a = new Array(arguments.length -  2);
while (G__42766__i < G__42766__a.length) {G__42766__a[G__42766__i] = arguments[G__42766__i + 2]; ++G__42766__i;}
  more_children = new cljs.core.IndexedSeq(G__42766__a,0);
} 
return G__42744__delegate.call(this,parent,child,more_children);};
G__42744.cljs$lang$maxFixedArity = 2;
G__42744.cljs$lang$applyTo = (function (arglist__42767){
var parent = cljs.core.first(arglist__42767);
arglist__42767 = cljs.core.next(arglist__42767);
var child = cljs.core.first(arglist__42767);
var more_children = cljs.core.rest(arglist__42767);
return G__42744__delegate(parent,child,more_children);
});
G__42744.cljs$core$IFn$_invoke$arity$variadic = G__42744__delegate;
return G__42744;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__42768 = null;
if (arguments.length > 2) {
var G__42769__i = 0, G__42769__a = new Array(arguments.length -  2);
while (G__42769__i < G__42769__a.length) {G__42769__a[G__42769__i] = arguments[G__42769__i + 2]; ++G__42769__i;}
G__42768 = new cljs.core.IndexedSeq(G__42769__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__42768);
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
var G__42775 = parent;
G__42775.insertBefore(child,parent.firstChild);

return G__42775;
});
var prepend_BANG___3 = (function() { 
var G__42780__delegate = function (parent,child,more_children){
var seq__42776_42781 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__42777_42782 = null;
var count__42778_42783 = (0);
var i__42779_42784 = (0);
while(true){
if((i__42779_42784 < count__42778_42783)){
var c_42785 = cljs.core._nth.call(null,chunk__42777_42782,i__42779_42784);
prepend_BANG_.call(null,parent,c_42785);

var G__42786 = seq__42776_42781;
var G__42787 = chunk__42777_42782;
var G__42788 = count__42778_42783;
var G__42789 = (i__42779_42784 + (1));
seq__42776_42781 = G__42786;
chunk__42777_42782 = G__42787;
count__42778_42783 = G__42788;
i__42779_42784 = G__42789;
continue;
} else {
var temp__4406__auto___42790 = cljs.core.seq.call(null,seq__42776_42781);
if(temp__4406__auto___42790){
var seq__42776_42791__$1 = temp__4406__auto___42790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42776_42791__$1)){
var c__11728__auto___42792 = cljs.core.chunk_first.call(null,seq__42776_42791__$1);
var G__42793 = cljs.core.chunk_rest.call(null,seq__42776_42791__$1);
var G__42794 = c__11728__auto___42792;
var G__42795 = cljs.core.count.call(null,c__11728__auto___42792);
var G__42796 = (0);
seq__42776_42781 = G__42793;
chunk__42777_42782 = G__42794;
count__42778_42783 = G__42795;
i__42779_42784 = G__42796;
continue;
} else {
var c_42797 = cljs.core.first.call(null,seq__42776_42791__$1);
prepend_BANG_.call(null,parent,c_42797);

var G__42798 = cljs.core.next.call(null,seq__42776_42791__$1);
var G__42799 = null;
var G__42800 = (0);
var G__42801 = (0);
seq__42776_42781 = G__42798;
chunk__42777_42782 = G__42799;
count__42778_42783 = G__42800;
i__42779_42784 = G__42801;
continue;
}
} else {
}
}
break;
}

return parent;
};
var G__42780 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__42802__i = 0, G__42802__a = new Array(arguments.length -  2);
while (G__42802__i < G__42802__a.length) {G__42802__a[G__42802__i] = arguments[G__42802__i + 2]; ++G__42802__i;}
  more_children = new cljs.core.IndexedSeq(G__42802__a,0);
} 
return G__42780__delegate.call(this,parent,child,more_children);};
G__42780.cljs$lang$maxFixedArity = 2;
G__42780.cljs$lang$applyTo = (function (arglist__42803){
var parent = cljs.core.first(arglist__42803);
arglist__42803 = cljs.core.next(arglist__42803);
var child = cljs.core.first(arglist__42803);
var more_children = cljs.core.rest(arglist__42803);
return G__42780__delegate(parent,child,more_children);
});
G__42780.cljs$core$IFn$_invoke$arity$variadic = G__42780__delegate;
return G__42780;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__42804 = null;
if (arguments.length > 2) {
var G__42805__i = 0, G__42805__a = new Array(arguments.length -  2);
while (G__42805__i < G__42805__a.length) {G__42805__a[G__42805__i] = arguments[G__42805__i + 2]; ++G__42805__i;}
G__42804 = new cljs.core.IndexedSeq(G__42805__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__42804);
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
var temp__4404__auto___42806 = other.nextSibling;
if(cljs.core.truth_(temp__4404__auto___42806)){
var next_42807 = temp__4404__auto___42806;
dommy.core.insert_before_BANG_.call(null,elem,next_42807);
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
var G__42809 = p;
G__42809.removeChild(elem);

return G__42809;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__42810){
var vec__42811 = p__42810;
var special_mouse_event = cljs.core.nth.call(null,vec__42811,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__42811,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__42811,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__42811,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__10941__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__10929__auto__ = related_target;
if(cljs.core.truth_(and__10929__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__10929__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__42811,special_mouse_event,real_mouse_event))
});})(vec__42811,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__10929__auto__ = selected_target;
if(cljs.core.truth_(and__10929__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__10929__auto__;
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
var or__10941__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
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
var G__42812__i = 0, G__42812__a = new Array(arguments.length -  2);
while (G__42812__i < G__42812__a.length) {G__42812__a[G__42812__i] = arguments[G__42812__i + 2]; ++G__42812__i;}
  args = new cljs.core.IndexedSeq(G__42812__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__42813){
var elem = cljs.core.first(arglist__42813);
arglist__42813 = cljs.core.next(arglist__42813);
var f = cljs.core.first(arglist__42813);
var args = cljs.core.rest(arglist__42813);
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

var vec__42837_42860 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_42861 = cljs.core.nth.call(null,vec__42837_42860,(0),null);
var selector_42862 = cljs.core.nth.call(null,vec__42837_42860,(1),null);
var seq__42838_42863 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__42845_42864 = null;
var count__42846_42865 = (0);
var i__42847_42866 = (0);
while(true){
if((i__42847_42866 < count__42846_42865)){
var vec__42854_42867 = cljs.core._nth.call(null,chunk__42845_42864,i__42847_42866);
var orig_type_42868 = cljs.core.nth.call(null,vec__42854_42867,(0),null);
var f_42869 = cljs.core.nth.call(null,vec__42854_42867,(1),null);
var seq__42848_42870 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_42868,new cljs.core.PersistentArrayMap.fromArray([orig_type_42868,cljs.core.identity], true, false)));
var chunk__42850_42871 = null;
var count__42851_42872 = (0);
var i__42852_42873 = (0);
while(true){
if((i__42852_42873 < count__42851_42872)){
var vec__42855_42874 = cljs.core._nth.call(null,chunk__42850_42871,i__42852_42873);
var actual_type_42875 = cljs.core.nth.call(null,vec__42855_42874,(0),null);
var factory_42876 = cljs.core.nth.call(null,vec__42855_42874,(1),null);
var canonical_f_42877 = (cljs.core.truth_(selector_42862)?cljs.core.partial.call(null,dommy.core.live_listener,elem_42861,selector_42862):cljs.core.identity).call(null,factory_42876.call(null,f_42869));
dommy.core.update_event_listeners_BANG_.call(null,elem_42861,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42862,actual_type_42875,f_42869], null),canonical_f_42877);

if(cljs.core.truth_(elem_42861.addEventListener)){
elem_42861.addEventListener(cljs.core.name.call(null,actual_type_42875),canonical_f_42877);
} else {
elem_42861.attachEvent(cljs.core.name.call(null,actual_type_42875),canonical_f_42877);
}

var G__42878 = seq__42848_42870;
var G__42879 = chunk__42850_42871;
var G__42880 = count__42851_42872;
var G__42881 = (i__42852_42873 + (1));
seq__42848_42870 = G__42878;
chunk__42850_42871 = G__42879;
count__42851_42872 = G__42880;
i__42852_42873 = G__42881;
continue;
} else {
var temp__4406__auto___42882 = cljs.core.seq.call(null,seq__42848_42870);
if(temp__4406__auto___42882){
var seq__42848_42883__$1 = temp__4406__auto___42882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42848_42883__$1)){
var c__11728__auto___42884 = cljs.core.chunk_first.call(null,seq__42848_42883__$1);
var G__42885 = cljs.core.chunk_rest.call(null,seq__42848_42883__$1);
var G__42886 = c__11728__auto___42884;
var G__42887 = cljs.core.count.call(null,c__11728__auto___42884);
var G__42888 = (0);
seq__42848_42870 = G__42885;
chunk__42850_42871 = G__42886;
count__42851_42872 = G__42887;
i__42852_42873 = G__42888;
continue;
} else {
var vec__42856_42889 = cljs.core.first.call(null,seq__42848_42883__$1);
var actual_type_42890 = cljs.core.nth.call(null,vec__42856_42889,(0),null);
var factory_42891 = cljs.core.nth.call(null,vec__42856_42889,(1),null);
var canonical_f_42892 = (cljs.core.truth_(selector_42862)?cljs.core.partial.call(null,dommy.core.live_listener,elem_42861,selector_42862):cljs.core.identity).call(null,factory_42891.call(null,f_42869));
dommy.core.update_event_listeners_BANG_.call(null,elem_42861,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42862,actual_type_42890,f_42869], null),canonical_f_42892);

if(cljs.core.truth_(elem_42861.addEventListener)){
elem_42861.addEventListener(cljs.core.name.call(null,actual_type_42890),canonical_f_42892);
} else {
elem_42861.attachEvent(cljs.core.name.call(null,actual_type_42890),canonical_f_42892);
}

var G__42893 = cljs.core.next.call(null,seq__42848_42883__$1);
var G__42894 = null;
var G__42895 = (0);
var G__42896 = (0);
seq__42848_42870 = G__42893;
chunk__42850_42871 = G__42894;
count__42851_42872 = G__42895;
i__42852_42873 = G__42896;
continue;
}
} else {
}
}
break;
}

var G__42897 = seq__42838_42863;
var G__42898 = chunk__42845_42864;
var G__42899 = count__42846_42865;
var G__42900 = (i__42847_42866 + (1));
seq__42838_42863 = G__42897;
chunk__42845_42864 = G__42898;
count__42846_42865 = G__42899;
i__42847_42866 = G__42900;
continue;
} else {
var temp__4406__auto___42901 = cljs.core.seq.call(null,seq__42838_42863);
if(temp__4406__auto___42901){
var seq__42838_42902__$1 = temp__4406__auto___42901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42838_42902__$1)){
var c__11728__auto___42903 = cljs.core.chunk_first.call(null,seq__42838_42902__$1);
var G__42904 = cljs.core.chunk_rest.call(null,seq__42838_42902__$1);
var G__42905 = c__11728__auto___42903;
var G__42906 = cljs.core.count.call(null,c__11728__auto___42903);
var G__42907 = (0);
seq__42838_42863 = G__42904;
chunk__42845_42864 = G__42905;
count__42846_42865 = G__42906;
i__42847_42866 = G__42907;
continue;
} else {
var vec__42857_42908 = cljs.core.first.call(null,seq__42838_42902__$1);
var orig_type_42909 = cljs.core.nth.call(null,vec__42857_42908,(0),null);
var f_42910 = cljs.core.nth.call(null,vec__42857_42908,(1),null);
var seq__42839_42911 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_42909,new cljs.core.PersistentArrayMap.fromArray([orig_type_42909,cljs.core.identity], true, false)));
var chunk__42841_42912 = null;
var count__42842_42913 = (0);
var i__42843_42914 = (0);
while(true){
if((i__42843_42914 < count__42842_42913)){
var vec__42858_42915 = cljs.core._nth.call(null,chunk__42841_42912,i__42843_42914);
var actual_type_42916 = cljs.core.nth.call(null,vec__42858_42915,(0),null);
var factory_42917 = cljs.core.nth.call(null,vec__42858_42915,(1),null);
var canonical_f_42918 = (cljs.core.truth_(selector_42862)?cljs.core.partial.call(null,dommy.core.live_listener,elem_42861,selector_42862):cljs.core.identity).call(null,factory_42917.call(null,f_42910));
dommy.core.update_event_listeners_BANG_.call(null,elem_42861,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42862,actual_type_42916,f_42910], null),canonical_f_42918);

if(cljs.core.truth_(elem_42861.addEventListener)){
elem_42861.addEventListener(cljs.core.name.call(null,actual_type_42916),canonical_f_42918);
} else {
elem_42861.attachEvent(cljs.core.name.call(null,actual_type_42916),canonical_f_42918);
}

var G__42919 = seq__42839_42911;
var G__42920 = chunk__42841_42912;
var G__42921 = count__42842_42913;
var G__42922 = (i__42843_42914 + (1));
seq__42839_42911 = G__42919;
chunk__42841_42912 = G__42920;
count__42842_42913 = G__42921;
i__42843_42914 = G__42922;
continue;
} else {
var temp__4406__auto___42923__$1 = cljs.core.seq.call(null,seq__42839_42911);
if(temp__4406__auto___42923__$1){
var seq__42839_42924__$1 = temp__4406__auto___42923__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42839_42924__$1)){
var c__11728__auto___42925 = cljs.core.chunk_first.call(null,seq__42839_42924__$1);
var G__42926 = cljs.core.chunk_rest.call(null,seq__42839_42924__$1);
var G__42927 = c__11728__auto___42925;
var G__42928 = cljs.core.count.call(null,c__11728__auto___42925);
var G__42929 = (0);
seq__42839_42911 = G__42926;
chunk__42841_42912 = G__42927;
count__42842_42913 = G__42928;
i__42843_42914 = G__42929;
continue;
} else {
var vec__42859_42930 = cljs.core.first.call(null,seq__42839_42924__$1);
var actual_type_42931 = cljs.core.nth.call(null,vec__42859_42930,(0),null);
var factory_42932 = cljs.core.nth.call(null,vec__42859_42930,(1),null);
var canonical_f_42933 = (cljs.core.truth_(selector_42862)?cljs.core.partial.call(null,dommy.core.live_listener,elem_42861,selector_42862):cljs.core.identity).call(null,factory_42932.call(null,f_42910));
dommy.core.update_event_listeners_BANG_.call(null,elem_42861,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42862,actual_type_42931,f_42910], null),canonical_f_42933);

if(cljs.core.truth_(elem_42861.addEventListener)){
elem_42861.addEventListener(cljs.core.name.call(null,actual_type_42931),canonical_f_42933);
} else {
elem_42861.attachEvent(cljs.core.name.call(null,actual_type_42931),canonical_f_42933);
}

var G__42934 = cljs.core.next.call(null,seq__42839_42924__$1);
var G__42935 = null;
var G__42936 = (0);
var G__42937 = (0);
seq__42839_42911 = G__42934;
chunk__42841_42912 = G__42935;
count__42842_42913 = G__42936;
i__42843_42914 = G__42937;
continue;
}
} else {
}
}
break;
}

var G__42938 = cljs.core.next.call(null,seq__42838_42902__$1);
var G__42939 = null;
var G__42940 = (0);
var G__42941 = (0);
seq__42838_42863 = G__42938;
chunk__42845_42864 = G__42939;
count__42846_42865 = G__42940;
i__42847_42866 = G__42941;
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
var G__42942__i = 0, G__42942__a = new Array(arguments.length -  1);
while (G__42942__i < G__42942__a.length) {G__42942__a[G__42942__i] = arguments[G__42942__i + 1]; ++G__42942__i;}
  type_fs = new cljs.core.IndexedSeq(G__42942__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__42943){
var elem_sel = cljs.core.first(arglist__42943);
var type_fs = cljs.core.rest(arglist__42943);
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

var vec__42967_42990 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_42991 = cljs.core.nth.call(null,vec__42967_42990,(0),null);
var selector_42992 = cljs.core.nth.call(null,vec__42967_42990,(1),null);
var seq__42968_42993 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__42975_42994 = null;
var count__42976_42995 = (0);
var i__42977_42996 = (0);
while(true){
if((i__42977_42996 < count__42976_42995)){
var vec__42984_42997 = cljs.core._nth.call(null,chunk__42975_42994,i__42977_42996);
var orig_type_42998 = cljs.core.nth.call(null,vec__42984_42997,(0),null);
var f_42999 = cljs.core.nth.call(null,vec__42984_42997,(1),null);
var seq__42978_43000 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_42998,new cljs.core.PersistentArrayMap.fromArray([orig_type_42998,cljs.core.identity], true, false)));
var chunk__42980_43001 = null;
var count__42981_43002 = (0);
var i__42982_43003 = (0);
while(true){
if((i__42982_43003 < count__42981_43002)){
var vec__42985_43004 = cljs.core._nth.call(null,chunk__42980_43001,i__42982_43003);
var actual_type_43005 = cljs.core.nth.call(null,vec__42985_43004,(0),null);
var __43006 = cljs.core.nth.call(null,vec__42985_43004,(1),null);
var keys_43007 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42992,actual_type_43005,f_42999], null);
var canonical_f_43008 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_42991),keys_43007);
dommy.core.update_event_listeners_BANG_.call(null,elem_42991,dommy.utils.dissoc_in,keys_43007);

if(cljs.core.truth_(elem_42991.removeEventListener)){
elem_42991.removeEventListener(cljs.core.name.call(null,actual_type_43005),canonical_f_43008);
} else {
elem_42991.detachEvent(cljs.core.name.call(null,actual_type_43005),canonical_f_43008);
}

var G__43009 = seq__42978_43000;
var G__43010 = chunk__42980_43001;
var G__43011 = count__42981_43002;
var G__43012 = (i__42982_43003 + (1));
seq__42978_43000 = G__43009;
chunk__42980_43001 = G__43010;
count__42981_43002 = G__43011;
i__42982_43003 = G__43012;
continue;
} else {
var temp__4406__auto___43013 = cljs.core.seq.call(null,seq__42978_43000);
if(temp__4406__auto___43013){
var seq__42978_43014__$1 = temp__4406__auto___43013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42978_43014__$1)){
var c__11728__auto___43015 = cljs.core.chunk_first.call(null,seq__42978_43014__$1);
var G__43016 = cljs.core.chunk_rest.call(null,seq__42978_43014__$1);
var G__43017 = c__11728__auto___43015;
var G__43018 = cljs.core.count.call(null,c__11728__auto___43015);
var G__43019 = (0);
seq__42978_43000 = G__43016;
chunk__42980_43001 = G__43017;
count__42981_43002 = G__43018;
i__42982_43003 = G__43019;
continue;
} else {
var vec__42986_43020 = cljs.core.first.call(null,seq__42978_43014__$1);
var actual_type_43021 = cljs.core.nth.call(null,vec__42986_43020,(0),null);
var __43022 = cljs.core.nth.call(null,vec__42986_43020,(1),null);
var keys_43023 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42992,actual_type_43021,f_42999], null);
var canonical_f_43024 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_42991),keys_43023);
dommy.core.update_event_listeners_BANG_.call(null,elem_42991,dommy.utils.dissoc_in,keys_43023);

if(cljs.core.truth_(elem_42991.removeEventListener)){
elem_42991.removeEventListener(cljs.core.name.call(null,actual_type_43021),canonical_f_43024);
} else {
elem_42991.detachEvent(cljs.core.name.call(null,actual_type_43021),canonical_f_43024);
}

var G__43025 = cljs.core.next.call(null,seq__42978_43014__$1);
var G__43026 = null;
var G__43027 = (0);
var G__43028 = (0);
seq__42978_43000 = G__43025;
chunk__42980_43001 = G__43026;
count__42981_43002 = G__43027;
i__42982_43003 = G__43028;
continue;
}
} else {
}
}
break;
}

var G__43029 = seq__42968_42993;
var G__43030 = chunk__42975_42994;
var G__43031 = count__42976_42995;
var G__43032 = (i__42977_42996 + (1));
seq__42968_42993 = G__43029;
chunk__42975_42994 = G__43030;
count__42976_42995 = G__43031;
i__42977_42996 = G__43032;
continue;
} else {
var temp__4406__auto___43033 = cljs.core.seq.call(null,seq__42968_42993);
if(temp__4406__auto___43033){
var seq__42968_43034__$1 = temp__4406__auto___43033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42968_43034__$1)){
var c__11728__auto___43035 = cljs.core.chunk_first.call(null,seq__42968_43034__$1);
var G__43036 = cljs.core.chunk_rest.call(null,seq__42968_43034__$1);
var G__43037 = c__11728__auto___43035;
var G__43038 = cljs.core.count.call(null,c__11728__auto___43035);
var G__43039 = (0);
seq__42968_42993 = G__43036;
chunk__42975_42994 = G__43037;
count__42976_42995 = G__43038;
i__42977_42996 = G__43039;
continue;
} else {
var vec__42987_43040 = cljs.core.first.call(null,seq__42968_43034__$1);
var orig_type_43041 = cljs.core.nth.call(null,vec__42987_43040,(0),null);
var f_43042 = cljs.core.nth.call(null,vec__42987_43040,(1),null);
var seq__42969_43043 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43041,new cljs.core.PersistentArrayMap.fromArray([orig_type_43041,cljs.core.identity], true, false)));
var chunk__42971_43044 = null;
var count__42972_43045 = (0);
var i__42973_43046 = (0);
while(true){
if((i__42973_43046 < count__42972_43045)){
var vec__42988_43047 = cljs.core._nth.call(null,chunk__42971_43044,i__42973_43046);
var actual_type_43048 = cljs.core.nth.call(null,vec__42988_43047,(0),null);
var __43049 = cljs.core.nth.call(null,vec__42988_43047,(1),null);
var keys_43050 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42992,actual_type_43048,f_43042], null);
var canonical_f_43051 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_42991),keys_43050);
dommy.core.update_event_listeners_BANG_.call(null,elem_42991,dommy.utils.dissoc_in,keys_43050);

if(cljs.core.truth_(elem_42991.removeEventListener)){
elem_42991.removeEventListener(cljs.core.name.call(null,actual_type_43048),canonical_f_43051);
} else {
elem_42991.detachEvent(cljs.core.name.call(null,actual_type_43048),canonical_f_43051);
}

var G__43052 = seq__42969_43043;
var G__43053 = chunk__42971_43044;
var G__43054 = count__42972_43045;
var G__43055 = (i__42973_43046 + (1));
seq__42969_43043 = G__43052;
chunk__42971_43044 = G__43053;
count__42972_43045 = G__43054;
i__42973_43046 = G__43055;
continue;
} else {
var temp__4406__auto___43056__$1 = cljs.core.seq.call(null,seq__42969_43043);
if(temp__4406__auto___43056__$1){
var seq__42969_43057__$1 = temp__4406__auto___43056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42969_43057__$1)){
var c__11728__auto___43058 = cljs.core.chunk_first.call(null,seq__42969_43057__$1);
var G__43059 = cljs.core.chunk_rest.call(null,seq__42969_43057__$1);
var G__43060 = c__11728__auto___43058;
var G__43061 = cljs.core.count.call(null,c__11728__auto___43058);
var G__43062 = (0);
seq__42969_43043 = G__43059;
chunk__42971_43044 = G__43060;
count__42972_43045 = G__43061;
i__42973_43046 = G__43062;
continue;
} else {
var vec__42989_43063 = cljs.core.first.call(null,seq__42969_43057__$1);
var actual_type_43064 = cljs.core.nth.call(null,vec__42989_43063,(0),null);
var __43065 = cljs.core.nth.call(null,vec__42989_43063,(1),null);
var keys_43066 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42992,actual_type_43064,f_43042], null);
var canonical_f_43067 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_42991),keys_43066);
dommy.core.update_event_listeners_BANG_.call(null,elem_42991,dommy.utils.dissoc_in,keys_43066);

if(cljs.core.truth_(elem_42991.removeEventListener)){
elem_42991.removeEventListener(cljs.core.name.call(null,actual_type_43064),canonical_f_43067);
} else {
elem_42991.detachEvent(cljs.core.name.call(null,actual_type_43064),canonical_f_43067);
}

var G__43068 = cljs.core.next.call(null,seq__42969_43057__$1);
var G__43069 = null;
var G__43070 = (0);
var G__43071 = (0);
seq__42969_43043 = G__43068;
chunk__42971_43044 = G__43069;
count__42972_43045 = G__43070;
i__42973_43046 = G__43071;
continue;
}
} else {
}
}
break;
}

var G__43072 = cljs.core.next.call(null,seq__42968_43034__$1);
var G__43073 = null;
var G__43074 = (0);
var G__43075 = (0);
seq__42968_42993 = G__43072;
chunk__42975_42994 = G__43073;
count__42976_42995 = G__43074;
i__42977_42996 = G__43075;
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
var G__43076__i = 0, G__43076__a = new Array(arguments.length -  1);
while (G__43076__i < G__43076__a.length) {G__43076__a[G__43076__i] = arguments[G__43076__i + 1]; ++G__43076__i;}
  type_fs = new cljs.core.IndexedSeq(G__43076__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__43077){
var elem_sel = cljs.core.first(arglist__43077);
var type_fs = cljs.core.rest(arglist__43077);
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

var vec__43085_43092 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43093 = cljs.core.nth.call(null,vec__43085_43092,(0),null);
var selector_43094 = cljs.core.nth.call(null,vec__43085_43092,(1),null);
var seq__43086_43095 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43087_43096 = null;
var count__43088_43097 = (0);
var i__43089_43098 = (0);
while(true){
if((i__43089_43098 < count__43088_43097)){
var vec__43090_43099 = cljs.core._nth.call(null,chunk__43087_43096,i__43089_43098);
var type_43100 = cljs.core.nth.call(null,vec__43090_43099,(0),null);
var f_43101 = cljs.core.nth.call(null,vec__43090_43099,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43100,((function (seq__43086_43095,chunk__43087_43096,count__43088_43097,i__43089_43098,vec__43090_43099,type_43100,f_43101,vec__43085_43092,elem_43093,selector_43094){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43100,this_fn);

return f_43101.call(null,e);
});})(seq__43086_43095,chunk__43087_43096,count__43088_43097,i__43089_43098,vec__43090_43099,type_43100,f_43101,vec__43085_43092,elem_43093,selector_43094))
);

var G__43102 = seq__43086_43095;
var G__43103 = chunk__43087_43096;
var G__43104 = count__43088_43097;
var G__43105 = (i__43089_43098 + (1));
seq__43086_43095 = G__43102;
chunk__43087_43096 = G__43103;
count__43088_43097 = G__43104;
i__43089_43098 = G__43105;
continue;
} else {
var temp__4406__auto___43106 = cljs.core.seq.call(null,seq__43086_43095);
if(temp__4406__auto___43106){
var seq__43086_43107__$1 = temp__4406__auto___43106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43086_43107__$1)){
var c__11728__auto___43108 = cljs.core.chunk_first.call(null,seq__43086_43107__$1);
var G__43109 = cljs.core.chunk_rest.call(null,seq__43086_43107__$1);
var G__43110 = c__11728__auto___43108;
var G__43111 = cljs.core.count.call(null,c__11728__auto___43108);
var G__43112 = (0);
seq__43086_43095 = G__43109;
chunk__43087_43096 = G__43110;
count__43088_43097 = G__43111;
i__43089_43098 = G__43112;
continue;
} else {
var vec__43091_43113 = cljs.core.first.call(null,seq__43086_43107__$1);
var type_43114 = cljs.core.nth.call(null,vec__43091_43113,(0),null);
var f_43115 = cljs.core.nth.call(null,vec__43091_43113,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43114,((function (seq__43086_43095,chunk__43087_43096,count__43088_43097,i__43089_43098,vec__43091_43113,type_43114,f_43115,seq__43086_43107__$1,temp__4406__auto___43106,vec__43085_43092,elem_43093,selector_43094){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43114,this_fn);

return f_43115.call(null,e);
});})(seq__43086_43095,chunk__43087_43096,count__43088_43097,i__43089_43098,vec__43091_43113,type_43114,f_43115,seq__43086_43107__$1,temp__4406__auto___43106,vec__43085_43092,elem_43093,selector_43094))
);

var G__43116 = cljs.core.next.call(null,seq__43086_43107__$1);
var G__43117 = null;
var G__43118 = (0);
var G__43119 = (0);
seq__43086_43095 = G__43116;
chunk__43087_43096 = G__43117;
count__43088_43097 = G__43118;
i__43089_43098 = G__43119;
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
var G__43120__i = 0, G__43120__a = new Array(arguments.length -  1);
while (G__43120__i < G__43120__a.length) {G__43120__a[G__43120__i] = arguments[G__43120__i + 1]; ++G__43120__i;}
  type_fs = new cljs.core.IndexedSeq(G__43120__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__43121){
var elem_sel = cljs.core.first(arglist__43121);
var type_fs = cljs.core.rest(arglist__43121);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
