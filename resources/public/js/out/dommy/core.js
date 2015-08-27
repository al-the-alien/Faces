// Compiled by ClojureScript 0.0-3308 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__16627__auto__ = elem.textContent;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
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
dommy.core.style = (function dommy$core$style(){
var G__27951 = arguments.length;
switch (G__27951) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

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
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
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
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(){
var G__27954 = arguments.length;
switch (G__27954) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(){
var G__27958 = arguments.length;
switch (G__27958) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__27956_SHARP_){
return !((p1__27956_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
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
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
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
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 * (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__27962_27968 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__27963_27969 = null;
var count__27964_27970 = (0);
var i__27965_27971 = (0);
while(true){
if((i__27965_27971 < count__27964_27970)){
var vec__27966_27972 = cljs.core._nth.call(null,chunk__27963_27969,i__27965_27971);
var k_27973 = cljs.core.nth.call(null,vec__27966_27972,(0),null);
var v_27974 = cljs.core.nth.call(null,vec__27966_27972,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_27973),v_27974);

var G__27975 = seq__27962_27968;
var G__27976 = chunk__27963_27969;
var G__27977 = count__27964_27970;
var G__27978 = (i__27965_27971 + (1));
seq__27962_27968 = G__27975;
chunk__27963_27969 = G__27976;
count__27964_27970 = G__27977;
i__27965_27971 = G__27978;
continue;
} else {
var temp__4425__auto___27979 = cljs.core.seq.call(null,seq__27962_27968);
if(temp__4425__auto___27979){
var seq__27962_27980__$1 = temp__4425__auto___27979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27962_27980__$1)){
var c__17412__auto___27981 = cljs.core.chunk_first.call(null,seq__27962_27980__$1);
var G__27982 = cljs.core.chunk_rest.call(null,seq__27962_27980__$1);
var G__27983 = c__17412__auto___27981;
var G__27984 = cljs.core.count.call(null,c__17412__auto___27981);
var G__27985 = (0);
seq__27962_27968 = G__27982;
chunk__27963_27969 = G__27983;
count__27964_27970 = G__27984;
i__27965_27971 = G__27985;
continue;
} else {
var vec__27967_27986 = cljs.core.first.call(null,seq__27962_27980__$1);
var k_27987 = cljs.core.nth.call(null,vec__27967_27986,(0),null);
var v_27988 = cljs.core.nth.call(null,vec__27967_27986,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_27987),v_27988);

var G__27989 = cljs.core.next.call(null,seq__27962_27980__$1);
var G__27990 = null;
var G__27991 = (0);
var G__27992 = (0);
seq__27962_27968 = G__27989;
chunk__27963_27969 = G__27990;
count__27964_27970 = G__27991;
i__27965_27971 = G__27992;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq27960){
var G__27961 = cljs.core.first.call(null,seq27960);
var seq27960__$1 = cljs.core.next.call(null,seq27960);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27961,seq27960__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__27995_28001 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__27996_28002 = null;
var count__27997_28003 = (0);
var i__27998_28004 = (0);
while(true){
if((i__27998_28004 < count__27997_28003)){
var vec__27999_28005 = cljs.core._nth.call(null,chunk__27996_28002,i__27998_28004);
var k_28006 = cljs.core.nth.call(null,vec__27999_28005,(0),null);
var v_28007 = cljs.core.nth.call(null,vec__27999_28005,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_28006,[cljs.core.str(v_28007),cljs.core.str("px")].join(''));

var G__28008 = seq__27995_28001;
var G__28009 = chunk__27996_28002;
var G__28010 = count__27997_28003;
var G__28011 = (i__27998_28004 + (1));
seq__27995_28001 = G__28008;
chunk__27996_28002 = G__28009;
count__27997_28003 = G__28010;
i__27998_28004 = G__28011;
continue;
} else {
var temp__4425__auto___28012 = cljs.core.seq.call(null,seq__27995_28001);
if(temp__4425__auto___28012){
var seq__27995_28013__$1 = temp__4425__auto___28012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27995_28013__$1)){
var c__17412__auto___28014 = cljs.core.chunk_first.call(null,seq__27995_28013__$1);
var G__28015 = cljs.core.chunk_rest.call(null,seq__27995_28013__$1);
var G__28016 = c__17412__auto___28014;
var G__28017 = cljs.core.count.call(null,c__17412__auto___28014);
var G__28018 = (0);
seq__27995_28001 = G__28015;
chunk__27996_28002 = G__28016;
count__27997_28003 = G__28017;
i__27998_28004 = G__28018;
continue;
} else {
var vec__28000_28019 = cljs.core.first.call(null,seq__27995_28013__$1);
var k_28020 = cljs.core.nth.call(null,vec__28000_28019,(0),null);
var v_28021 = cljs.core.nth.call(null,vec__28000_28019,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_28020,[cljs.core.str(v_28021),cljs.core.str("px")].join(''));

var G__28022 = cljs.core.next.call(null,seq__27995_28013__$1);
var G__28023 = null;
var G__28024 = (0);
var G__28025 = (0);
seq__27995_28001 = G__28022;
chunk__27996_28002 = G__28023;
count__27997_28003 = G__28024;
i__27998_28004 = G__28025;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq27993){
var G__27994 = cljs.core.first.call(null,seq27993);
var seq27993__$1 = cljs.core.next.call(null,seq27993);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27994,seq27993__$1);
});
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
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(){
var G__28031 = arguments.length;
switch (G__28031) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17678__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,"true");
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__28032 = elem;
(G__28032[k__$1] = v);

return G__28032;
} else {
var G__28033 = elem;
G__28033.setAttribute(k__$1,v);

return G__28033;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__28034_28041 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__28035_28042 = null;
var count__28036_28043 = (0);
var i__28037_28044 = (0);
while(true){
if((i__28037_28044 < count__28036_28043)){
var vec__28038_28045 = cljs.core._nth.call(null,chunk__28035_28042,i__28037_28044);
var k_28046__$1 = cljs.core.nth.call(null,vec__28038_28045,(0),null);
var v_28047__$1 = cljs.core.nth.call(null,vec__28038_28045,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_28046__$1,v_28047__$1);

var G__28048 = seq__28034_28041;
var G__28049 = chunk__28035_28042;
var G__28050 = count__28036_28043;
var G__28051 = (i__28037_28044 + (1));
seq__28034_28041 = G__28048;
chunk__28035_28042 = G__28049;
count__28036_28043 = G__28050;
i__28037_28044 = G__28051;
continue;
} else {
var temp__4425__auto___28052 = cljs.core.seq.call(null,seq__28034_28041);
if(temp__4425__auto___28052){
var seq__28034_28053__$1 = temp__4425__auto___28052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28034_28053__$1)){
var c__17412__auto___28054 = cljs.core.chunk_first.call(null,seq__28034_28053__$1);
var G__28055 = cljs.core.chunk_rest.call(null,seq__28034_28053__$1);
var G__28056 = c__17412__auto___28054;
var G__28057 = cljs.core.count.call(null,c__17412__auto___28054);
var G__28058 = (0);
seq__28034_28041 = G__28055;
chunk__28035_28042 = G__28056;
count__28036_28043 = G__28057;
i__28037_28044 = G__28058;
continue;
} else {
var vec__28039_28059 = cljs.core.first.call(null,seq__28034_28053__$1);
var k_28060__$1 = cljs.core.nth.call(null,vec__28039_28059,(0),null);
var v_28061__$1 = cljs.core.nth.call(null,vec__28039_28059,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_28060__$1,v_28061__$1);

var G__28062 = cljs.core.next.call(null,seq__28034_28053__$1);
var G__28063 = null;
var G__28064 = (0);
var G__28065 = (0);
seq__28034_28041 = G__28062;
chunk__28035_28042 = G__28063;
count__28036_28043 = G__28064;
i__28037_28044 = G__28065;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq28026){
var G__28027 = cljs.core.first.call(null,seq28026);
var seq28026__$1 = cljs.core.next.call(null,seq28026);
var G__28028 = cljs.core.first.call(null,seq28026__$1);
var seq28026__$2 = cljs.core.next.call(null,seq28026__$1);
var G__28029 = cljs.core.first.call(null,seq28026__$2);
var seq28026__$3 = cljs.core.next.call(null,seq28026__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28027,G__28028,G__28029,seq28026__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(){
var G__28070 = arguments.length;
switch (G__28070) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_28076__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_28076__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_28076__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__28071_28077 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__28072_28078 = null;
var count__28073_28079 = (0);
var i__28074_28080 = (0);
while(true){
if((i__28074_28080 < count__28073_28079)){
var k_28081__$1 = cljs.core._nth.call(null,chunk__28072_28078,i__28074_28080);
dommy.core.remove_attr_BANG_.call(null,elem,k_28081__$1);

var G__28082 = seq__28071_28077;
var G__28083 = chunk__28072_28078;
var G__28084 = count__28073_28079;
var G__28085 = (i__28074_28080 + (1));
seq__28071_28077 = G__28082;
chunk__28072_28078 = G__28083;
count__28073_28079 = G__28084;
i__28074_28080 = G__28085;
continue;
} else {
var temp__4425__auto___28086 = cljs.core.seq.call(null,seq__28071_28077);
if(temp__4425__auto___28086){
var seq__28071_28087__$1 = temp__4425__auto___28086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28071_28087__$1)){
var c__17412__auto___28088 = cljs.core.chunk_first.call(null,seq__28071_28087__$1);
var G__28089 = cljs.core.chunk_rest.call(null,seq__28071_28087__$1);
var G__28090 = c__17412__auto___28088;
var G__28091 = cljs.core.count.call(null,c__17412__auto___28088);
var G__28092 = (0);
seq__28071_28077 = G__28089;
chunk__28072_28078 = G__28090;
count__28073_28079 = G__28091;
i__28074_28080 = G__28092;
continue;
} else {
var k_28093__$1 = cljs.core.first.call(null,seq__28071_28087__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_28093__$1);

var G__28094 = cljs.core.next.call(null,seq__28071_28087__$1);
var G__28095 = null;
var G__28096 = (0);
var G__28097 = (0);
seq__28071_28077 = G__28094;
chunk__28072_28078 = G__28095;
count__28073_28079 = G__28096;
i__28074_28080 = G__28097;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq28066){
var G__28067 = cljs.core.first.call(null,seq28066);
var seq28066__$1 = cljs.core.next.call(null,seq28066);
var G__28068 = cljs.core.first.call(null,seq28066__$1);
var seq28066__$2 = cljs.core.next.call(null,seq28066__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28067,G__28068,seq28066__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(){
var G__28099 = arguments.length;
switch (G__28099) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(){
var G__28105 = arguments.length;
switch (G__28105) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___28119 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___28119)){
var class_list_28120 = temp__4423__auto___28119;
var seq__28106_28121 = cljs.core.seq.call(null,classes__$1);
var chunk__28107_28122 = null;
var count__28108_28123 = (0);
var i__28109_28124 = (0);
while(true){
if((i__28109_28124 < count__28108_28123)){
var c_28125 = cljs.core._nth.call(null,chunk__28107_28122,i__28109_28124);
class_list_28120.add(c_28125);

var G__28126 = seq__28106_28121;
var G__28127 = chunk__28107_28122;
var G__28128 = count__28108_28123;
var G__28129 = (i__28109_28124 + (1));
seq__28106_28121 = G__28126;
chunk__28107_28122 = G__28127;
count__28108_28123 = G__28128;
i__28109_28124 = G__28129;
continue;
} else {
var temp__4425__auto___28130 = cljs.core.seq.call(null,seq__28106_28121);
if(temp__4425__auto___28130){
var seq__28106_28131__$1 = temp__4425__auto___28130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28106_28131__$1)){
var c__17412__auto___28132 = cljs.core.chunk_first.call(null,seq__28106_28131__$1);
var G__28133 = cljs.core.chunk_rest.call(null,seq__28106_28131__$1);
var G__28134 = c__17412__auto___28132;
var G__28135 = cljs.core.count.call(null,c__17412__auto___28132);
var G__28136 = (0);
seq__28106_28121 = G__28133;
chunk__28107_28122 = G__28134;
count__28108_28123 = G__28135;
i__28109_28124 = G__28136;
continue;
} else {
var c_28137 = cljs.core.first.call(null,seq__28106_28131__$1);
class_list_28120.add(c_28137);

var G__28138 = cljs.core.next.call(null,seq__28106_28131__$1);
var G__28139 = null;
var G__28140 = (0);
var G__28141 = (0);
seq__28106_28121 = G__28138;
chunk__28107_28122 = G__28139;
count__28108_28123 = G__28140;
i__28109_28124 = G__28141;
continue;
}
} else {
}
}
break;
}
} else {
var seq__28110_28142 = cljs.core.seq.call(null,classes__$1);
var chunk__28111_28143 = null;
var count__28112_28144 = (0);
var i__28113_28145 = (0);
while(true){
if((i__28113_28145 < count__28112_28144)){
var c_28146 = cljs.core._nth.call(null,chunk__28111_28143,i__28113_28145);
var class_name_28147 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_28147,c_28146))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_28147 === ""))?c_28146:[cljs.core.str(class_name_28147),cljs.core.str(" "),cljs.core.str(c_28146)].join('')));
}

var G__28148 = seq__28110_28142;
var G__28149 = chunk__28111_28143;
var G__28150 = count__28112_28144;
var G__28151 = (i__28113_28145 + (1));
seq__28110_28142 = G__28148;
chunk__28111_28143 = G__28149;
count__28112_28144 = G__28150;
i__28113_28145 = G__28151;
continue;
} else {
var temp__4425__auto___28152 = cljs.core.seq.call(null,seq__28110_28142);
if(temp__4425__auto___28152){
var seq__28110_28153__$1 = temp__4425__auto___28152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28110_28153__$1)){
var c__17412__auto___28154 = cljs.core.chunk_first.call(null,seq__28110_28153__$1);
var G__28155 = cljs.core.chunk_rest.call(null,seq__28110_28153__$1);
var G__28156 = c__17412__auto___28154;
var G__28157 = cljs.core.count.call(null,c__17412__auto___28154);
var G__28158 = (0);
seq__28110_28142 = G__28155;
chunk__28111_28143 = G__28156;
count__28112_28144 = G__28157;
i__28113_28145 = G__28158;
continue;
} else {
var c_28159 = cljs.core.first.call(null,seq__28110_28153__$1);
var class_name_28160 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_28160,c_28159))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_28160 === ""))?c_28159:[cljs.core.str(class_name_28160),cljs.core.str(" "),cljs.core.str(c_28159)].join('')));
}

var G__28161 = cljs.core.next.call(null,seq__28110_28153__$1);
var G__28162 = null;
var G__28163 = (0);
var G__28164 = (0);
seq__28110_28142 = G__28161;
chunk__28111_28143 = G__28162;
count__28112_28144 = G__28163;
i__28113_28145 = G__28164;
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

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__28114_28165 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__28115_28166 = null;
var count__28116_28167 = (0);
var i__28117_28168 = (0);
while(true){
if((i__28117_28168 < count__28116_28167)){
var c_28169 = cljs.core._nth.call(null,chunk__28115_28166,i__28117_28168);
dommy.core.add_class_BANG_.call(null,elem,c_28169);

var G__28170 = seq__28114_28165;
var G__28171 = chunk__28115_28166;
var G__28172 = count__28116_28167;
var G__28173 = (i__28117_28168 + (1));
seq__28114_28165 = G__28170;
chunk__28115_28166 = G__28171;
count__28116_28167 = G__28172;
i__28117_28168 = G__28173;
continue;
} else {
var temp__4425__auto___28174 = cljs.core.seq.call(null,seq__28114_28165);
if(temp__4425__auto___28174){
var seq__28114_28175__$1 = temp__4425__auto___28174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28114_28175__$1)){
var c__17412__auto___28176 = cljs.core.chunk_first.call(null,seq__28114_28175__$1);
var G__28177 = cljs.core.chunk_rest.call(null,seq__28114_28175__$1);
var G__28178 = c__17412__auto___28176;
var G__28179 = cljs.core.count.call(null,c__17412__auto___28176);
var G__28180 = (0);
seq__28114_28165 = G__28177;
chunk__28115_28166 = G__28178;
count__28116_28167 = G__28179;
i__28117_28168 = G__28180;
continue;
} else {
var c_28181 = cljs.core.first.call(null,seq__28114_28175__$1);
dommy.core.add_class_BANG_.call(null,elem,c_28181);

var G__28182 = cljs.core.next.call(null,seq__28114_28175__$1);
var G__28183 = null;
var G__28184 = (0);
var G__28185 = (0);
seq__28114_28165 = G__28182;
chunk__28115_28166 = G__28183;
count__28116_28167 = G__28184;
i__28117_28168 = G__28185;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq28101){
var G__28102 = cljs.core.first.call(null,seq28101);
var seq28101__$1 = cljs.core.next.call(null,seq28101);
var G__28103 = cljs.core.first.call(null,seq28101__$1);
var seq28101__$2 = cljs.core.next.call(null,seq28101__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28102,G__28103,seq28101__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(){
var G__28190 = arguments.length;
switch (G__28190) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___28196 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___28196)){
var class_list_28197 = temp__4423__auto___28196;
class_list_28197.remove(c__$1);
} else {
var class_name_28198 = dommy.core.class$.call(null,elem);
var new_class_name_28199 = dommy.utils.remove_class_str.call(null,class_name_28198,c__$1);
if((class_name_28198 === new_class_name_28199)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_28199);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__28191 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__28192 = null;
var count__28193 = (0);
var i__28194 = (0);
while(true){
if((i__28194 < count__28193)){
var c = cljs.core._nth.call(null,chunk__28192,i__28194);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__28200 = seq__28191;
var G__28201 = chunk__28192;
var G__28202 = count__28193;
var G__28203 = (i__28194 + (1));
seq__28191 = G__28200;
chunk__28192 = G__28201;
count__28193 = G__28202;
i__28194 = G__28203;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28191);
if(temp__4425__auto__){
var seq__28191__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28191__$1)){
var c__17412__auto__ = cljs.core.chunk_first.call(null,seq__28191__$1);
var G__28204 = cljs.core.chunk_rest.call(null,seq__28191__$1);
var G__28205 = c__17412__auto__;
var G__28206 = cljs.core.count.call(null,c__17412__auto__);
var G__28207 = (0);
seq__28191 = G__28204;
chunk__28192 = G__28205;
count__28193 = G__28206;
i__28194 = G__28207;
continue;
} else {
var c = cljs.core.first.call(null,seq__28191__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__28208 = cljs.core.next.call(null,seq__28191__$1);
var G__28209 = null;
var G__28210 = (0);
var G__28211 = (0);
seq__28191 = G__28208;
chunk__28192 = G__28209;
count__28193 = G__28210;
i__28194 = G__28211;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq28186){
var G__28187 = cljs.core.first.call(null,seq28186);
var seq28186__$1 = cljs.core.next.call(null,seq28186);
var G__28188 = cljs.core.first.call(null,seq28186__$1);
var seq28186__$2 = cljs.core.next.call(null,seq28186__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28187,G__28188,seq28186__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(){
var G__28213 = arguments.length;
switch (G__28213) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___28215 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___28215)){
var class_list_28216 = temp__4423__auto___28215;
class_list_28216.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(){
var G__28218 = arguments.length;
switch (G__28218) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(){
var G__28221 = arguments.length;
switch (G__28221) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(){
var G__28227 = arguments.length;
switch (G__28227) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__28228 = parent;
G__28228.appendChild(child);

return G__28228;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__28229_28234 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28230_28235 = null;
var count__28231_28236 = (0);
var i__28232_28237 = (0);
while(true){
if((i__28232_28237 < count__28231_28236)){
var c_28238 = cljs.core._nth.call(null,chunk__28230_28235,i__28232_28237);
dommy.core.append_BANG_.call(null,parent,c_28238);

var G__28239 = seq__28229_28234;
var G__28240 = chunk__28230_28235;
var G__28241 = count__28231_28236;
var G__28242 = (i__28232_28237 + (1));
seq__28229_28234 = G__28239;
chunk__28230_28235 = G__28240;
count__28231_28236 = G__28241;
i__28232_28237 = G__28242;
continue;
} else {
var temp__4425__auto___28243 = cljs.core.seq.call(null,seq__28229_28234);
if(temp__4425__auto___28243){
var seq__28229_28244__$1 = temp__4425__auto___28243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28229_28244__$1)){
var c__17412__auto___28245 = cljs.core.chunk_first.call(null,seq__28229_28244__$1);
var G__28246 = cljs.core.chunk_rest.call(null,seq__28229_28244__$1);
var G__28247 = c__17412__auto___28245;
var G__28248 = cljs.core.count.call(null,c__17412__auto___28245);
var G__28249 = (0);
seq__28229_28234 = G__28246;
chunk__28230_28235 = G__28247;
count__28231_28236 = G__28248;
i__28232_28237 = G__28249;
continue;
} else {
var c_28250 = cljs.core.first.call(null,seq__28229_28244__$1);
dommy.core.append_BANG_.call(null,parent,c_28250);

var G__28251 = cljs.core.next.call(null,seq__28229_28244__$1);
var G__28252 = null;
var G__28253 = (0);
var G__28254 = (0);
seq__28229_28234 = G__28251;
chunk__28230_28235 = G__28252;
count__28231_28236 = G__28253;
i__28232_28237 = G__28254;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq28223){
var G__28224 = cljs.core.first.call(null,seq28223);
var seq28223__$1 = cljs.core.next.call(null,seq28223);
var G__28225 = cljs.core.first.call(null,seq28223__$1);
var seq28223__$2 = cljs.core.next.call(null,seq28223__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28224,G__28225,seq28223__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(){
var G__28259 = arguments.length;
switch (G__28259) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__28260 = parent;
G__28260.insertBefore(child,parent.firstChild);

return G__28260;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__28261_28266 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28262_28267 = null;
var count__28263_28268 = (0);
var i__28264_28269 = (0);
while(true){
if((i__28264_28269 < count__28263_28268)){
var c_28270 = cljs.core._nth.call(null,chunk__28262_28267,i__28264_28269);
dommy.core.prepend_BANG_.call(null,parent,c_28270);

var G__28271 = seq__28261_28266;
var G__28272 = chunk__28262_28267;
var G__28273 = count__28263_28268;
var G__28274 = (i__28264_28269 + (1));
seq__28261_28266 = G__28271;
chunk__28262_28267 = G__28272;
count__28263_28268 = G__28273;
i__28264_28269 = G__28274;
continue;
} else {
var temp__4425__auto___28275 = cljs.core.seq.call(null,seq__28261_28266);
if(temp__4425__auto___28275){
var seq__28261_28276__$1 = temp__4425__auto___28275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28261_28276__$1)){
var c__17412__auto___28277 = cljs.core.chunk_first.call(null,seq__28261_28276__$1);
var G__28278 = cljs.core.chunk_rest.call(null,seq__28261_28276__$1);
var G__28279 = c__17412__auto___28277;
var G__28280 = cljs.core.count.call(null,c__17412__auto___28277);
var G__28281 = (0);
seq__28261_28266 = G__28278;
chunk__28262_28267 = G__28279;
count__28263_28268 = G__28280;
i__28264_28269 = G__28281;
continue;
} else {
var c_28282 = cljs.core.first.call(null,seq__28261_28276__$1);
dommy.core.prepend_BANG_.call(null,parent,c_28282);

var G__28283 = cljs.core.next.call(null,seq__28261_28276__$1);
var G__28284 = null;
var G__28285 = (0);
var G__28286 = (0);
seq__28261_28266 = G__28283;
chunk__28262_28267 = G__28284;
count__28263_28268 = G__28285;
i__28264_28269 = G__28286;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq28255){
var G__28256 = cljs.core.first.call(null,seq28255);
var seq28255__$1 = cljs.core.next.call(null,seq28255);
var G__28257 = cljs.core.first.call(null,seq28255__$1);
var seq28255__$2 = cljs.core.next.call(null,seq28255__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28256,G__28257,seq28255__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
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
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___28287 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___28287)){
var next_28288 = temp__4423__auto___28287;
dommy.core.insert_before_BANG_.call(null,elem,next_28288);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
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
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(){
var G__28290 = arguments.length;
switch (G__28290) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__28291 = p;
G__28291.removeChild(elem);

return G__28291;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28293){
var vec__28294 = p__28293;
var special_mouse_event = cljs.core.nth.call(null,vec__28294,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__28294,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__28294,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__28294,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__16627__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__16615__auto__ = related_target;
if(cljs.core.truth_(and__16615__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__16615__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__28294,special_mouse_event,real_mouse_event))
});})(vec__28294,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__16615__auto__ = selected_target;
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__16615__auto__;
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
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__16627__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(){
var argseq__17667__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17667__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq28295){
var G__28296 = cljs.core.first.call(null,seq28295);
var seq28295__$1 = cljs.core.next.call(null,seq28295);
var G__28297 = cljs.core.first.call(null,seq28295__$1);
var seq28295__$2 = cljs.core.next.call(null,seq28295__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28296,G__28297,seq28295__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
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
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__28300_28323 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28324 = cljs.core.nth.call(null,vec__28300_28323,(0),null);
var selector_28325 = cljs.core.nth.call(null,vec__28300_28323,(1),null);
var seq__28301_28326 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28308_28327 = null;
var count__28309_28328 = (0);
var i__28310_28329 = (0);
while(true){
if((i__28310_28329 < count__28309_28328)){
var vec__28317_28330 = cljs.core._nth.call(null,chunk__28308_28327,i__28310_28329);
var orig_type_28331 = cljs.core.nth.call(null,vec__28317_28330,(0),null);
var f_28332 = cljs.core.nth.call(null,vec__28317_28330,(1),null);
var seq__28311_28333 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28331,new cljs.core.PersistentArrayMap.fromArray([orig_type_28331,cljs.core.identity], true, false)));
var chunk__28313_28334 = null;
var count__28314_28335 = (0);
var i__28315_28336 = (0);
while(true){
if((i__28315_28336 < count__28314_28335)){
var vec__28318_28337 = cljs.core._nth.call(null,chunk__28313_28334,i__28315_28336);
var actual_type_28338 = cljs.core.nth.call(null,vec__28318_28337,(0),null);
var factory_28339 = cljs.core.nth.call(null,vec__28318_28337,(1),null);
var canonical_f_28340 = (cljs.core.truth_(selector_28325)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28324,selector_28325):cljs.core.identity).call(null,factory_28339.call(null,f_28332));
dommy.core.update_event_listeners_BANG_.call(null,elem_28324,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28325,actual_type_28338,f_28332], null),canonical_f_28340);

if(cljs.core.truth_(elem_28324.addEventListener)){
elem_28324.addEventListener(cljs.core.name.call(null,actual_type_28338),canonical_f_28340);
} else {
elem_28324.attachEvent(cljs.core.name.call(null,actual_type_28338),canonical_f_28340);
}

var G__28341 = seq__28311_28333;
var G__28342 = chunk__28313_28334;
var G__28343 = count__28314_28335;
var G__28344 = (i__28315_28336 + (1));
seq__28311_28333 = G__28341;
chunk__28313_28334 = G__28342;
count__28314_28335 = G__28343;
i__28315_28336 = G__28344;
continue;
} else {
var temp__4425__auto___28345 = cljs.core.seq.call(null,seq__28311_28333);
if(temp__4425__auto___28345){
var seq__28311_28346__$1 = temp__4425__auto___28345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28311_28346__$1)){
var c__17412__auto___28347 = cljs.core.chunk_first.call(null,seq__28311_28346__$1);
var G__28348 = cljs.core.chunk_rest.call(null,seq__28311_28346__$1);
var G__28349 = c__17412__auto___28347;
var G__28350 = cljs.core.count.call(null,c__17412__auto___28347);
var G__28351 = (0);
seq__28311_28333 = G__28348;
chunk__28313_28334 = G__28349;
count__28314_28335 = G__28350;
i__28315_28336 = G__28351;
continue;
} else {
var vec__28319_28352 = cljs.core.first.call(null,seq__28311_28346__$1);
var actual_type_28353 = cljs.core.nth.call(null,vec__28319_28352,(0),null);
var factory_28354 = cljs.core.nth.call(null,vec__28319_28352,(1),null);
var canonical_f_28355 = (cljs.core.truth_(selector_28325)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28324,selector_28325):cljs.core.identity).call(null,factory_28354.call(null,f_28332));
dommy.core.update_event_listeners_BANG_.call(null,elem_28324,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28325,actual_type_28353,f_28332], null),canonical_f_28355);

if(cljs.core.truth_(elem_28324.addEventListener)){
elem_28324.addEventListener(cljs.core.name.call(null,actual_type_28353),canonical_f_28355);
} else {
elem_28324.attachEvent(cljs.core.name.call(null,actual_type_28353),canonical_f_28355);
}

var G__28356 = cljs.core.next.call(null,seq__28311_28346__$1);
var G__28357 = null;
var G__28358 = (0);
var G__28359 = (0);
seq__28311_28333 = G__28356;
chunk__28313_28334 = G__28357;
count__28314_28335 = G__28358;
i__28315_28336 = G__28359;
continue;
}
} else {
}
}
break;
}

var G__28360 = seq__28301_28326;
var G__28361 = chunk__28308_28327;
var G__28362 = count__28309_28328;
var G__28363 = (i__28310_28329 + (1));
seq__28301_28326 = G__28360;
chunk__28308_28327 = G__28361;
count__28309_28328 = G__28362;
i__28310_28329 = G__28363;
continue;
} else {
var temp__4425__auto___28364 = cljs.core.seq.call(null,seq__28301_28326);
if(temp__4425__auto___28364){
var seq__28301_28365__$1 = temp__4425__auto___28364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28301_28365__$1)){
var c__17412__auto___28366 = cljs.core.chunk_first.call(null,seq__28301_28365__$1);
var G__28367 = cljs.core.chunk_rest.call(null,seq__28301_28365__$1);
var G__28368 = c__17412__auto___28366;
var G__28369 = cljs.core.count.call(null,c__17412__auto___28366);
var G__28370 = (0);
seq__28301_28326 = G__28367;
chunk__28308_28327 = G__28368;
count__28309_28328 = G__28369;
i__28310_28329 = G__28370;
continue;
} else {
var vec__28320_28371 = cljs.core.first.call(null,seq__28301_28365__$1);
var orig_type_28372 = cljs.core.nth.call(null,vec__28320_28371,(0),null);
var f_28373 = cljs.core.nth.call(null,vec__28320_28371,(1),null);
var seq__28302_28374 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28372,new cljs.core.PersistentArrayMap.fromArray([orig_type_28372,cljs.core.identity], true, false)));
var chunk__28304_28375 = null;
var count__28305_28376 = (0);
var i__28306_28377 = (0);
while(true){
if((i__28306_28377 < count__28305_28376)){
var vec__28321_28378 = cljs.core._nth.call(null,chunk__28304_28375,i__28306_28377);
var actual_type_28379 = cljs.core.nth.call(null,vec__28321_28378,(0),null);
var factory_28380 = cljs.core.nth.call(null,vec__28321_28378,(1),null);
var canonical_f_28381 = (cljs.core.truth_(selector_28325)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28324,selector_28325):cljs.core.identity).call(null,factory_28380.call(null,f_28373));
dommy.core.update_event_listeners_BANG_.call(null,elem_28324,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28325,actual_type_28379,f_28373], null),canonical_f_28381);

if(cljs.core.truth_(elem_28324.addEventListener)){
elem_28324.addEventListener(cljs.core.name.call(null,actual_type_28379),canonical_f_28381);
} else {
elem_28324.attachEvent(cljs.core.name.call(null,actual_type_28379),canonical_f_28381);
}

var G__28382 = seq__28302_28374;
var G__28383 = chunk__28304_28375;
var G__28384 = count__28305_28376;
var G__28385 = (i__28306_28377 + (1));
seq__28302_28374 = G__28382;
chunk__28304_28375 = G__28383;
count__28305_28376 = G__28384;
i__28306_28377 = G__28385;
continue;
} else {
var temp__4425__auto___28386__$1 = cljs.core.seq.call(null,seq__28302_28374);
if(temp__4425__auto___28386__$1){
var seq__28302_28387__$1 = temp__4425__auto___28386__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28302_28387__$1)){
var c__17412__auto___28388 = cljs.core.chunk_first.call(null,seq__28302_28387__$1);
var G__28389 = cljs.core.chunk_rest.call(null,seq__28302_28387__$1);
var G__28390 = c__17412__auto___28388;
var G__28391 = cljs.core.count.call(null,c__17412__auto___28388);
var G__28392 = (0);
seq__28302_28374 = G__28389;
chunk__28304_28375 = G__28390;
count__28305_28376 = G__28391;
i__28306_28377 = G__28392;
continue;
} else {
var vec__28322_28393 = cljs.core.first.call(null,seq__28302_28387__$1);
var actual_type_28394 = cljs.core.nth.call(null,vec__28322_28393,(0),null);
var factory_28395 = cljs.core.nth.call(null,vec__28322_28393,(1),null);
var canonical_f_28396 = (cljs.core.truth_(selector_28325)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28324,selector_28325):cljs.core.identity).call(null,factory_28395.call(null,f_28373));
dommy.core.update_event_listeners_BANG_.call(null,elem_28324,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28325,actual_type_28394,f_28373], null),canonical_f_28396);

if(cljs.core.truth_(elem_28324.addEventListener)){
elem_28324.addEventListener(cljs.core.name.call(null,actual_type_28394),canonical_f_28396);
} else {
elem_28324.attachEvent(cljs.core.name.call(null,actual_type_28394),canonical_f_28396);
}

var G__28397 = cljs.core.next.call(null,seq__28302_28387__$1);
var G__28398 = null;
var G__28399 = (0);
var G__28400 = (0);
seq__28302_28374 = G__28397;
chunk__28304_28375 = G__28398;
count__28305_28376 = G__28399;
i__28306_28377 = G__28400;
continue;
}
} else {
}
}
break;
}

var G__28401 = cljs.core.next.call(null,seq__28301_28365__$1);
var G__28402 = null;
var G__28403 = (0);
var G__28404 = (0);
seq__28301_28326 = G__28401;
chunk__28308_28327 = G__28402;
count__28309_28328 = G__28403;
i__28310_28329 = G__28404;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq28298){
var G__28299 = cljs.core.first.call(null,seq28298);
var seq28298__$1 = cljs.core.next.call(null,seq28298);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28299,seq28298__$1);
});
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
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__28407_28430 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28431 = cljs.core.nth.call(null,vec__28407_28430,(0),null);
var selector_28432 = cljs.core.nth.call(null,vec__28407_28430,(1),null);
var seq__28408_28433 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28415_28434 = null;
var count__28416_28435 = (0);
var i__28417_28436 = (0);
while(true){
if((i__28417_28436 < count__28416_28435)){
var vec__28424_28437 = cljs.core._nth.call(null,chunk__28415_28434,i__28417_28436);
var orig_type_28438 = cljs.core.nth.call(null,vec__28424_28437,(0),null);
var f_28439 = cljs.core.nth.call(null,vec__28424_28437,(1),null);
var seq__28418_28440 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28438,new cljs.core.PersistentArrayMap.fromArray([orig_type_28438,cljs.core.identity], true, false)));
var chunk__28420_28441 = null;
var count__28421_28442 = (0);
var i__28422_28443 = (0);
while(true){
if((i__28422_28443 < count__28421_28442)){
var vec__28425_28444 = cljs.core._nth.call(null,chunk__28420_28441,i__28422_28443);
var actual_type_28445 = cljs.core.nth.call(null,vec__28425_28444,(0),null);
var __28446 = cljs.core.nth.call(null,vec__28425_28444,(1),null);
var keys_28447 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28432,actual_type_28445,f_28439], null);
var canonical_f_28448 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28431),keys_28447);
dommy.core.update_event_listeners_BANG_.call(null,elem_28431,dommy.utils.dissoc_in,keys_28447);

if(cljs.core.truth_(elem_28431.removeEventListener)){
elem_28431.removeEventListener(cljs.core.name.call(null,actual_type_28445),canonical_f_28448);
} else {
elem_28431.detachEvent(cljs.core.name.call(null,actual_type_28445),canonical_f_28448);
}

var G__28449 = seq__28418_28440;
var G__28450 = chunk__28420_28441;
var G__28451 = count__28421_28442;
var G__28452 = (i__28422_28443 + (1));
seq__28418_28440 = G__28449;
chunk__28420_28441 = G__28450;
count__28421_28442 = G__28451;
i__28422_28443 = G__28452;
continue;
} else {
var temp__4425__auto___28453 = cljs.core.seq.call(null,seq__28418_28440);
if(temp__4425__auto___28453){
var seq__28418_28454__$1 = temp__4425__auto___28453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28418_28454__$1)){
var c__17412__auto___28455 = cljs.core.chunk_first.call(null,seq__28418_28454__$1);
var G__28456 = cljs.core.chunk_rest.call(null,seq__28418_28454__$1);
var G__28457 = c__17412__auto___28455;
var G__28458 = cljs.core.count.call(null,c__17412__auto___28455);
var G__28459 = (0);
seq__28418_28440 = G__28456;
chunk__28420_28441 = G__28457;
count__28421_28442 = G__28458;
i__28422_28443 = G__28459;
continue;
} else {
var vec__28426_28460 = cljs.core.first.call(null,seq__28418_28454__$1);
var actual_type_28461 = cljs.core.nth.call(null,vec__28426_28460,(0),null);
var __28462 = cljs.core.nth.call(null,vec__28426_28460,(1),null);
var keys_28463 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28432,actual_type_28461,f_28439], null);
var canonical_f_28464 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28431),keys_28463);
dommy.core.update_event_listeners_BANG_.call(null,elem_28431,dommy.utils.dissoc_in,keys_28463);

if(cljs.core.truth_(elem_28431.removeEventListener)){
elem_28431.removeEventListener(cljs.core.name.call(null,actual_type_28461),canonical_f_28464);
} else {
elem_28431.detachEvent(cljs.core.name.call(null,actual_type_28461),canonical_f_28464);
}

var G__28465 = cljs.core.next.call(null,seq__28418_28454__$1);
var G__28466 = null;
var G__28467 = (0);
var G__28468 = (0);
seq__28418_28440 = G__28465;
chunk__28420_28441 = G__28466;
count__28421_28442 = G__28467;
i__28422_28443 = G__28468;
continue;
}
} else {
}
}
break;
}

var G__28469 = seq__28408_28433;
var G__28470 = chunk__28415_28434;
var G__28471 = count__28416_28435;
var G__28472 = (i__28417_28436 + (1));
seq__28408_28433 = G__28469;
chunk__28415_28434 = G__28470;
count__28416_28435 = G__28471;
i__28417_28436 = G__28472;
continue;
} else {
var temp__4425__auto___28473 = cljs.core.seq.call(null,seq__28408_28433);
if(temp__4425__auto___28473){
var seq__28408_28474__$1 = temp__4425__auto___28473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28408_28474__$1)){
var c__17412__auto___28475 = cljs.core.chunk_first.call(null,seq__28408_28474__$1);
var G__28476 = cljs.core.chunk_rest.call(null,seq__28408_28474__$1);
var G__28477 = c__17412__auto___28475;
var G__28478 = cljs.core.count.call(null,c__17412__auto___28475);
var G__28479 = (0);
seq__28408_28433 = G__28476;
chunk__28415_28434 = G__28477;
count__28416_28435 = G__28478;
i__28417_28436 = G__28479;
continue;
} else {
var vec__28427_28480 = cljs.core.first.call(null,seq__28408_28474__$1);
var orig_type_28481 = cljs.core.nth.call(null,vec__28427_28480,(0),null);
var f_28482 = cljs.core.nth.call(null,vec__28427_28480,(1),null);
var seq__28409_28483 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28481,new cljs.core.PersistentArrayMap.fromArray([orig_type_28481,cljs.core.identity], true, false)));
var chunk__28411_28484 = null;
var count__28412_28485 = (0);
var i__28413_28486 = (0);
while(true){
if((i__28413_28486 < count__28412_28485)){
var vec__28428_28487 = cljs.core._nth.call(null,chunk__28411_28484,i__28413_28486);
var actual_type_28488 = cljs.core.nth.call(null,vec__28428_28487,(0),null);
var __28489 = cljs.core.nth.call(null,vec__28428_28487,(1),null);
var keys_28490 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28432,actual_type_28488,f_28482], null);
var canonical_f_28491 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28431),keys_28490);
dommy.core.update_event_listeners_BANG_.call(null,elem_28431,dommy.utils.dissoc_in,keys_28490);

if(cljs.core.truth_(elem_28431.removeEventListener)){
elem_28431.removeEventListener(cljs.core.name.call(null,actual_type_28488),canonical_f_28491);
} else {
elem_28431.detachEvent(cljs.core.name.call(null,actual_type_28488),canonical_f_28491);
}

var G__28492 = seq__28409_28483;
var G__28493 = chunk__28411_28484;
var G__28494 = count__28412_28485;
var G__28495 = (i__28413_28486 + (1));
seq__28409_28483 = G__28492;
chunk__28411_28484 = G__28493;
count__28412_28485 = G__28494;
i__28413_28486 = G__28495;
continue;
} else {
var temp__4425__auto___28496__$1 = cljs.core.seq.call(null,seq__28409_28483);
if(temp__4425__auto___28496__$1){
var seq__28409_28497__$1 = temp__4425__auto___28496__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28409_28497__$1)){
var c__17412__auto___28498 = cljs.core.chunk_first.call(null,seq__28409_28497__$1);
var G__28499 = cljs.core.chunk_rest.call(null,seq__28409_28497__$1);
var G__28500 = c__17412__auto___28498;
var G__28501 = cljs.core.count.call(null,c__17412__auto___28498);
var G__28502 = (0);
seq__28409_28483 = G__28499;
chunk__28411_28484 = G__28500;
count__28412_28485 = G__28501;
i__28413_28486 = G__28502;
continue;
} else {
var vec__28429_28503 = cljs.core.first.call(null,seq__28409_28497__$1);
var actual_type_28504 = cljs.core.nth.call(null,vec__28429_28503,(0),null);
var __28505 = cljs.core.nth.call(null,vec__28429_28503,(1),null);
var keys_28506 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28432,actual_type_28504,f_28482], null);
var canonical_f_28507 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28431),keys_28506);
dommy.core.update_event_listeners_BANG_.call(null,elem_28431,dommy.utils.dissoc_in,keys_28506);

if(cljs.core.truth_(elem_28431.removeEventListener)){
elem_28431.removeEventListener(cljs.core.name.call(null,actual_type_28504),canonical_f_28507);
} else {
elem_28431.detachEvent(cljs.core.name.call(null,actual_type_28504),canonical_f_28507);
}

var G__28508 = cljs.core.next.call(null,seq__28409_28497__$1);
var G__28509 = null;
var G__28510 = (0);
var G__28511 = (0);
seq__28409_28483 = G__28508;
chunk__28411_28484 = G__28509;
count__28412_28485 = G__28510;
i__28413_28486 = G__28511;
continue;
}
} else {
}
}
break;
}

var G__28512 = cljs.core.next.call(null,seq__28408_28474__$1);
var G__28513 = null;
var G__28514 = (0);
var G__28515 = (0);
seq__28408_28433 = G__28512;
chunk__28415_28434 = G__28513;
count__28416_28435 = G__28514;
i__28417_28436 = G__28515;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq28405){
var G__28406 = cljs.core.first.call(null,seq28405);
var seq28405__$1 = cljs.core.next.call(null,seq28405);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28406,seq28405__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__28518_28525 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28526 = cljs.core.nth.call(null,vec__28518_28525,(0),null);
var selector_28527 = cljs.core.nth.call(null,vec__28518_28525,(1),null);
var seq__28519_28528 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28520_28529 = null;
var count__28521_28530 = (0);
var i__28522_28531 = (0);
while(true){
if((i__28522_28531 < count__28521_28530)){
var vec__28523_28532 = cljs.core._nth.call(null,chunk__28520_28529,i__28522_28531);
var type_28533 = cljs.core.nth.call(null,vec__28523_28532,(0),null);
var f_28534 = cljs.core.nth.call(null,vec__28523_28532,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_28533,((function (seq__28519_28528,chunk__28520_28529,count__28521_28530,i__28522_28531,vec__28523_28532,type_28533,f_28534,vec__28518_28525,elem_28526,selector_28527){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_28533,dommy$core$this_fn);

return f_28534.call(null,e);
});})(seq__28519_28528,chunk__28520_28529,count__28521_28530,i__28522_28531,vec__28523_28532,type_28533,f_28534,vec__28518_28525,elem_28526,selector_28527))
);

var G__28535 = seq__28519_28528;
var G__28536 = chunk__28520_28529;
var G__28537 = count__28521_28530;
var G__28538 = (i__28522_28531 + (1));
seq__28519_28528 = G__28535;
chunk__28520_28529 = G__28536;
count__28521_28530 = G__28537;
i__28522_28531 = G__28538;
continue;
} else {
var temp__4425__auto___28539 = cljs.core.seq.call(null,seq__28519_28528);
if(temp__4425__auto___28539){
var seq__28519_28540__$1 = temp__4425__auto___28539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28519_28540__$1)){
var c__17412__auto___28541 = cljs.core.chunk_first.call(null,seq__28519_28540__$1);
var G__28542 = cljs.core.chunk_rest.call(null,seq__28519_28540__$1);
var G__28543 = c__17412__auto___28541;
var G__28544 = cljs.core.count.call(null,c__17412__auto___28541);
var G__28545 = (0);
seq__28519_28528 = G__28542;
chunk__28520_28529 = G__28543;
count__28521_28530 = G__28544;
i__28522_28531 = G__28545;
continue;
} else {
var vec__28524_28546 = cljs.core.first.call(null,seq__28519_28540__$1);
var type_28547 = cljs.core.nth.call(null,vec__28524_28546,(0),null);
var f_28548 = cljs.core.nth.call(null,vec__28524_28546,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_28547,((function (seq__28519_28528,chunk__28520_28529,count__28521_28530,i__28522_28531,vec__28524_28546,type_28547,f_28548,seq__28519_28540__$1,temp__4425__auto___28539,vec__28518_28525,elem_28526,selector_28527){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_28547,dommy$core$this_fn);

return f_28548.call(null,e);
});})(seq__28519_28528,chunk__28520_28529,count__28521_28530,i__28522_28531,vec__28524_28546,type_28547,f_28548,seq__28519_28540__$1,temp__4425__auto___28539,vec__28518_28525,elem_28526,selector_28527))
);

var G__28549 = cljs.core.next.call(null,seq__28519_28540__$1);
var G__28550 = null;
var G__28551 = (0);
var G__28552 = (0);
seq__28519_28528 = G__28549;
chunk__28520_28529 = G__28550;
count__28521_28530 = G__28551;
i__28522_28531 = G__28552;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq28516){
var G__28517 = cljs.core.first.call(null,seq28516);
var seq28516__$1 = cljs.core.next.call(null,seq28516);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28517,seq28516__$1);
});

//# sourceMappingURL=core.js.map