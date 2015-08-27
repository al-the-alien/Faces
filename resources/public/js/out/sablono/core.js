// Compiled by ClojureScript 0.0-3308 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__30252__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30251 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__30251,(0),null);
var body = cljs.core.nthnext.call(null,vec__30251,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30253__i = 0, G__30253__a = new Array(arguments.length -  0);
while (G__30253__i < G__30253__a.length) {G__30253__a[G__30253__i] = arguments[G__30253__i + 0]; ++G__30253__i;}
  args = new cljs.core.IndexedSeq(G__30253__a,0);
} 
return G__30252__delegate.call(this,args);};
G__30252.cljs$lang$maxFixedArity = 0;
G__30252.cljs$lang$applyTo = (function (arglist__30254){
var args = cljs.core.seq(arglist__30254);
return G__30252__delegate(args);
});
G__30252.cljs$core$IFn$_invoke$arity$variadic = G__30252__delegate;
return G__30252;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17381__auto__ = (function sablono$core$update_arglists_$_iter__30259(s__30260){
return (new cljs.core.LazySeq(null,(function (){
var s__30260__$1 = s__30260;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30260__$1);
if(temp__4425__auto__){
var s__30260__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30260__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__30260__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__30262 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__30261 = (0);
while(true){
if((i__30261 < size__17380__auto__)){
var args = cljs.core._nth.call(null,c__17379__auto__,i__30261);
cljs.core.chunk_append.call(null,b__30262,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30263 = (i__30261 + (1));
i__30261 = G__30263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30262),sablono$core$update_arglists_$_iter__30259.call(null,cljs.core.chunk_rest.call(null,s__30260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30262),null);
}
} else {
var args = cljs.core.first.call(null,s__30260__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__30259.call(null,cljs.core.rest.call(null,s__30260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var argseq__17667__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17667__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17381__auto__ = (function sablono$core$iter__30265(s__30266){
return (new cljs.core.LazySeq(null,(function (){
var s__30266__$1 = s__30266;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30266__$1);
if(temp__4425__auto__){
var s__30266__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30266__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__30266__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__30268 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__30267 = (0);
while(true){
if((i__30267 < size__17380__auto__)){
var style = cljs.core._nth.call(null,c__17379__auto__,i__30267);
cljs.core.chunk_append.call(null,b__30268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__30269 = (i__30267 + (1));
i__30267 = G__30269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30268),sablono$core$iter__30265.call(null,cljs.core.chunk_rest.call(null,s__30266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30268),null);
}
} else {
var style = cljs.core.first.call(null,s__30266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__30265.call(null,cljs.core.rest.call(null,s__30266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq30264){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30264));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to30270 = (function sablono$core$link_to30270(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to30270.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

sablono.core.link_to30270.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to30270.cljs$lang$maxFixedArity = (1);

sablono.core.link_to30270.cljs$lang$applyTo = (function (seq30271){
var G__30272 = cljs.core.first.call(null,seq30271);
var seq30271__$1 = cljs.core.next.call(null,seq30271);
return sablono.core.link_to30270.cljs$core$IFn$_invoke$arity$variadic(G__30272,seq30271__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30270);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to30273 = (function sablono$core$mail_to30273(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to30273.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

sablono.core.mail_to30273.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__30276){
var vec__30277 = p__30276;
var content = cljs.core.nth.call(null,vec__30277,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16627__auto__ = content;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to30273.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to30273.cljs$lang$applyTo = (function (seq30274){
var G__30275 = cljs.core.first.call(null,seq30274);
var seq30274__$1 = cljs.core.next.call(null,seq30274);
return sablono.core.mail_to30273.cljs$core$IFn$_invoke$arity$variadic(G__30275,seq30274__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30273);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list30278 = (function sablono$core$unordered_list30278(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17381__auto__ = (function sablono$core$unordered_list30278_$_iter__30283(s__30284){
return (new cljs.core.LazySeq(null,(function (){
var s__30284__$1 = s__30284;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30284__$1);
if(temp__4425__auto__){
var s__30284__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30284__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__30284__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__30286 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__30285 = (0);
while(true){
if((i__30285 < size__17380__auto__)){
var x = cljs.core._nth.call(null,c__17379__auto__,i__30285);
cljs.core.chunk_append.call(null,b__30286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30287 = (i__30285 + (1));
i__30285 = G__30287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30286),sablono$core$unordered_list30278_$_iter__30283.call(null,cljs.core.chunk_rest.call(null,s__30284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30286),null);
}
} else {
var x = cljs.core.first.call(null,s__30284__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list30278_$_iter__30283.call(null,cljs.core.rest.call(null,s__30284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30278);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list30288 = (function sablono$core$ordered_list30288(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17381__auto__ = (function sablono$core$ordered_list30288_$_iter__30293(s__30294){
return (new cljs.core.LazySeq(null,(function (){
var s__30294__$1 = s__30294;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30294__$1);
if(temp__4425__auto__){
var s__30294__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30294__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__30294__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__30296 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__30295 = (0);
while(true){
if((i__30295 < size__17380__auto__)){
var x = cljs.core._nth.call(null,c__17379__auto__,i__30295);
cljs.core.chunk_append.call(null,b__30296,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30297 = (i__30295 + (1));
i__30295 = G__30297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30296),sablono$core$ordered_list30288_$_iter__30293.call(null,cljs.core.chunk_rest.call(null,s__30294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30296),null);
}
} else {
var x = cljs.core.first.call(null,s__30294__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list30288_$_iter__30293.call(null,cljs.core.rest.call(null,s__30294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30288);
/**
 * Create an image element.
 */
sablono.core.image30298 = (function sablono$core$image30298(){
var G__30300 = arguments.length;
switch (G__30300) {
case 1:
return sablono.core.image30298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image30298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image30298.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image30298.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image30298.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30298);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__30302_SHARP_,p2__30303_SHARP_){
return [cljs.core.str(p1__30302_SHARP_),cljs.core.str("["),cljs.core.str(p2__30303_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__30304_SHARP_,p2__30305_SHARP_){
return [cljs.core.str(p1__30304_SHARP_),cljs.core.str("-"),cljs.core.str(p2__30305_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field30306 = (function sablono$core$color_field30306(){
var G__30308 = arguments.length;
switch (G__30308) {
case 1:
return sablono.core.color_field30306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field30306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field30306.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.color_field30306.call(null,name__22706__auto__,null);
});

sablono.core.color_field30306.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.color_field30306.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30306);

/**
 * Creates a date input field.
 */
sablono.core.date_field30309 = (function sablono$core$date_field30309(){
var G__30311 = arguments.length;
switch (G__30311) {
case 1:
return sablono.core.date_field30309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field30309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field30309.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.date_field30309.call(null,name__22706__auto__,null);
});

sablono.core.date_field30309.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.date_field30309.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30309);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field30312 = (function sablono$core$datetime_field30312(){
var G__30314 = arguments.length;
switch (G__30314) {
case 1:
return sablono.core.datetime_field30312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field30312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field30312.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.datetime_field30312.call(null,name__22706__auto__,null);
});

sablono.core.datetime_field30312.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.datetime_field30312.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30312);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field30315 = (function sablono$core$datetime_local_field30315(){
var G__30317 = arguments.length;
switch (G__30317) {
case 1:
return sablono.core.datetime_local_field30315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field30315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field30315.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.datetime_local_field30315.call(null,name__22706__auto__,null);
});

sablono.core.datetime_local_field30315.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.datetime_local_field30315.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30315);

/**
 * Creates a email input field.
 */
sablono.core.email_field30318 = (function sablono$core$email_field30318(){
var G__30320 = arguments.length;
switch (G__30320) {
case 1:
return sablono.core.email_field30318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field30318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field30318.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.email_field30318.call(null,name__22706__auto__,null);
});

sablono.core.email_field30318.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.email_field30318.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30318);

/**
 * Creates a file input field.
 */
sablono.core.file_field30321 = (function sablono$core$file_field30321(){
var G__30323 = arguments.length;
switch (G__30323) {
case 1:
return sablono.core.file_field30321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field30321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field30321.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.file_field30321.call(null,name__22706__auto__,null);
});

sablono.core.file_field30321.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.file_field30321.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30321);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field30324 = (function sablono$core$hidden_field30324(){
var G__30326 = arguments.length;
switch (G__30326) {
case 1:
return sablono.core.hidden_field30324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field30324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field30324.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.hidden_field30324.call(null,name__22706__auto__,null);
});

sablono.core.hidden_field30324.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.hidden_field30324.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30324);

/**
 * Creates a month input field.
 */
sablono.core.month_field30327 = (function sablono$core$month_field30327(){
var G__30329 = arguments.length;
switch (G__30329) {
case 1:
return sablono.core.month_field30327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field30327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field30327.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.month_field30327.call(null,name__22706__auto__,null);
});

sablono.core.month_field30327.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.month_field30327.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30327);

/**
 * Creates a number input field.
 */
sablono.core.number_field30330 = (function sablono$core$number_field30330(){
var G__30332 = arguments.length;
switch (G__30332) {
case 1:
return sablono.core.number_field30330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field30330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field30330.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.number_field30330.call(null,name__22706__auto__,null);
});

sablono.core.number_field30330.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.number_field30330.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30330);

/**
 * Creates a password input field.
 */
sablono.core.password_field30333 = (function sablono$core$password_field30333(){
var G__30335 = arguments.length;
switch (G__30335) {
case 1:
return sablono.core.password_field30333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field30333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field30333.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.password_field30333.call(null,name__22706__auto__,null);
});

sablono.core.password_field30333.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.password_field30333.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30333);

/**
 * Creates a range input field.
 */
sablono.core.range_field30336 = (function sablono$core$range_field30336(){
var G__30338 = arguments.length;
switch (G__30338) {
case 1:
return sablono.core.range_field30336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field30336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field30336.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.range_field30336.call(null,name__22706__auto__,null);
});

sablono.core.range_field30336.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.range_field30336.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30336);

/**
 * Creates a search input field.
 */
sablono.core.search_field30339 = (function sablono$core$search_field30339(){
var G__30341 = arguments.length;
switch (G__30341) {
case 1:
return sablono.core.search_field30339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field30339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field30339.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.search_field30339.call(null,name__22706__auto__,null);
});

sablono.core.search_field30339.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.search_field30339.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30339);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field30342 = (function sablono$core$tel_field30342(){
var G__30344 = arguments.length;
switch (G__30344) {
case 1:
return sablono.core.tel_field30342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field30342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field30342.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.tel_field30342.call(null,name__22706__auto__,null);
});

sablono.core.tel_field30342.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.tel_field30342.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30342);

/**
 * Creates a text input field.
 */
sablono.core.text_field30345 = (function sablono$core$text_field30345(){
var G__30347 = arguments.length;
switch (G__30347) {
case 1:
return sablono.core.text_field30345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field30345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field30345.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.text_field30345.call(null,name__22706__auto__,null);
});

sablono.core.text_field30345.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.text_field30345.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30345);

/**
 * Creates a time input field.
 */
sablono.core.time_field30348 = (function sablono$core$time_field30348(){
var G__30350 = arguments.length;
switch (G__30350) {
case 1:
return sablono.core.time_field30348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field30348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field30348.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.time_field30348.call(null,name__22706__auto__,null);
});

sablono.core.time_field30348.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.time_field30348.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30348);

/**
 * Creates a url input field.
 */
sablono.core.url_field30351 = (function sablono$core$url_field30351(){
var G__30353 = arguments.length;
switch (G__30353) {
case 1:
return sablono.core.url_field30351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field30351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field30351.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.url_field30351.call(null,name__22706__auto__,null);
});

sablono.core.url_field30351.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.url_field30351.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30351);

/**
 * Creates a week input field.
 */
sablono.core.week_field30354 = (function sablono$core$week_field30354(){
var G__30356 = arguments.length;
switch (G__30356) {
case 1:
return sablono.core.week_field30354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field30354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field30354.cljs$core$IFn$_invoke$arity$1 = (function (name__22706__auto__){
return sablono.core.week_field30354.call(null,name__22706__auto__,null);
});

sablono.core.week_field30354.cljs$core$IFn$_invoke$arity$2 = (function (name__22706__auto__,value__22707__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22706__auto__,value__22707__auto__);
});

sablono.core.week_field30354.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30354);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box30374 = (function sablono$core$check_box30374(){
var G__30376 = arguments.length;
switch (G__30376) {
case 1:
return sablono.core.check_box30374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box30374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box30374.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box30374.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box30374.call(null,name,null);
});

sablono.core.check_box30374.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box30374.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box30374.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box30374.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30374);
/**
 * Creates a radio button.
 */
sablono.core.radio_button30378 = (function sablono$core$radio_button30378(){
var G__30380 = arguments.length;
switch (G__30380) {
case 1:
return sablono.core.radio_button30378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button30378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button30378.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button30378.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button30378.call(null,group,null);
});

sablono.core.radio_button30378.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button30378.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button30378.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button30378.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30378);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options30382 = (function sablono$core$select_options30382(){
var G__30384 = arguments.length;
switch (G__30384) {
case 1:
return sablono.core.select_options30382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options30382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options30382.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options30382.call(null,coll,null);
});

sablono.core.select_options30382.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__17381__auto__ = (function sablono$core$iter__30385(s__30386){
return (new cljs.core.LazySeq(null,(function (){
var s__30386__$1 = s__30386;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30386__$1);
if(temp__4425__auto__){
var s__30386__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30386__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__30386__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__30388 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__30387 = (0);
while(true){
if((i__30387 < size__17380__auto__)){
var x = cljs.core._nth.call(null,c__17379__auto__,i__30387);
cljs.core.chunk_append.call(null,b__30388,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30391 = x;
var text = cljs.core.nth.call(null,vec__30391,(0),null);
var val = cljs.core.nth.call(null,vec__30391,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30391,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options30382.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__30394 = (i__30387 + (1));
i__30387 = G__30394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30388),sablono$core$iter__30385.call(null,cljs.core.chunk_rest.call(null,s__30386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30388),null);
}
} else {
var x = cljs.core.first.call(null,s__30386__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30392 = x;
var text = cljs.core.nth.call(null,vec__30392,(0),null);
var val = cljs.core.nth.call(null,vec__30392,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30392,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options30382.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__30385.call(null,cljs.core.rest.call(null,s__30386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,coll);
});

sablono.core.select_options30382.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30382);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down30395 = (function sablono$core$drop_down30395(){
var G__30397 = arguments.length;
switch (G__30397) {
case 2:
return sablono.core.drop_down30395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down30395.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down30395.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down30395.call(null,name,options,null);
});

sablono.core.drop_down30395.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down30395.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30395);
/**
 * Creates a text area element.
 */
sablono.core.text_area30399 = (function sablono$core$text_area30399(){
var G__30401 = arguments.length;
switch (G__30401) {
case 1:
return sablono.core.text_area30399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area30399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area30399.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area30399.call(null,name,null);
});

sablono.core.text_area30399.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area30399.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30399);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label30403 = (function sablono$core$label30403(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30403);
/**
 * Creates a submit button.
 */
sablono.core.submit_button30404 = (function sablono$core$submit_button30404(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30404);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button30405 = (function sablono$core$reset_button30405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30405);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to30406 = (function sablono$core$form_to30406(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to30406.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

sablono.core.form_to30406.cljs$core$IFn$_invoke$arity$variadic = (function (p__30409,body){
var vec__30410 = p__30409;
var method = cljs.core.nth.call(null,vec__30410,(0),null);
var action = cljs.core.nth.call(null,vec__30410,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to30406.cljs$lang$maxFixedArity = (1);

sablono.core.form_to30406.cljs$lang$applyTo = (function (seq30407){
var G__30408 = cljs.core.first.call(null,seq30407);
var seq30407__$1 = cljs.core.next.call(null,seq30407);
return sablono.core.form_to30406.cljs$core$IFn$_invoke$arity$variadic(G__30408,seq30407__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30406);

//# sourceMappingURL=core.js.map