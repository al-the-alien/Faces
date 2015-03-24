// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.dev');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('dommy.core');
/**
* @param {...*} var_args
*/
shapes.dev.println = (function() { 
var println__delegate = function (content){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,content));
};
var println = function (var_args){
var content = null;
if (arguments.length > 0) {
var G__31431__i = 0, G__31431__a = new Array(arguments.length -  0);
while (G__31431__i < G__31431__a.length) {G__31431__a[G__31431__i] = arguments[G__31431__i + 0]; ++G__31431__i;}
  content = new cljs.core.IndexedSeq(G__31431__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__31432){
var content = cljs.core.seq(arglist__31432);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, development!"], null));
}
shapes.dev.pupils = (function pupils(p__31433,dev_QMARK_){
var map__31435 = p__31433;
var map__31435__$1 = ((cljs.core.seq_QMARK_.call(null,map__31435))?cljs.core.apply.call(null,cljs.core.hash_map,map__31435):map__31435);
var x = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ry = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var height = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ecxa = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"ecxa","ecxa",67808068));
var width = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ecxb = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"ecxb","ecxb",-1307296271));
var cy = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var ecy = cljs.core.get.call(null,map__31435__$1,new cljs.core.Keyword(null,"ecy","ecy",488686007));
var pr = (cljs.core.truth_(dev_QMARK_)?(((rx + ry) / (2)) / (3)):(((rx + ry) / (2)) / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(8)))));
var pcxa = ecxa;
var pcxb = ecxb;
var pcy = ecy;
var sr = (pr / (4));
var scxa = ((ecxa + pr) - sr);
var scxb = ((ecxb + pr) - sr);
var scy = ((ecy - pr) + sr);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pr","pr",-583594500),pr,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792),pcxa,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351),pcxb,new cljs.core.Keyword(null,"pcy","pcy",-1228409588),pcy,new cljs.core.Keyword(null,"sr","sr",-2009815970),sr,new cljs.core.Keyword(null,"scxa","scxa",-1980316782),scxa,new cljs.core.Keyword(null,"scxb","scxb",-1613143470),scxb,new cljs.core.Keyword(null,"scy","scy",2144350732),scy], null);
});
shapes.dev.eyes = (function eyes(p__31436,dev_QMARK_){
var map__31438 = p__31436;
var map__31438__$1 = ((cljs.core.seq_QMARK_.call(null,map__31438))?cljs.core.apply.call(null,cljs.core.hash_map,map__31438):map__31438);
var measures = map__31438__$1;
var rx = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var height = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__31438__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var ecx_offset = (cljs.core.truth_(dev_QMARK_)?(rx / 2.5):(rx / (cljs.core.rand.call(null) + (2))));
var ecxa = (cx - ecx_offset);
var ecxb = (cx + ecx_offset);
var ecy_offset = (height / (20));
var ecy = (cljs.core.truth_(dev_QMARK_)?cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,(cy - ecy_offset),(cy + ecy_offset))));
var rx_max = (cx - ecxa);
var rx_min = (rx_max - (width / (20)));
var rx__$1 = (cljs.core.truth_(dev_QMARK_)?(rx_min + ((rx_max - rx_min) / (8))):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var ry = (cljs.core.truth_(dev_QMARK_)?(height / (9)):(height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(6),(11),0.1))));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ecxa","ecxa",67808068),ecxa,new cljs.core.Keyword(null,"ecxb","ecxb",-1307296271),ecxb,new cljs.core.Keyword(null,"ecy","ecy",488686007),ecy,new cljs.core.Keyword(null,"rx","rx",1627208482),rx__$1,new cljs.core.Keyword(null,"ry","ry",-334598563),ry], null));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__31439){
var map__31441 = p__31439;
var map__31441__$1 = ((cljs.core.seq_QMARK_.call(null,map__31441))?cljs.core.apply.call(null,cljs.core.hash_map,map__31441):map__31441);
var pr = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"pr","pr",-583594500));
var ry = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var sr = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"sr","sr",-2009815970));
var rx = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ecxa = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"ecxa","ecxa",67808068));
var pcxa = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792));
var scy = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"scy","scy",2144350732));
var pcy = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"pcy","pcy",-1228409588));
var ecxb = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"ecxb","ecxb",-1307296271));
var pcxb = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351));
var scxb = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"scxb","scxb",-1613143470));
var scxa = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"scxa","scxa",-1980316782));
var ecy = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"ecy","ecy",488686007));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"cx": ecxa, "cy": ecy, "rx": rx, "ry": ry}),React.createElement("circle",{"className": "pupil", "cx": pcxa, "cy": pcy, "r": pr, "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxa, "cy": scy, "r": sr, "stroke": "white"}),React.createElement("ellipse",{"cx": ecxb, "cy": ecy, "rx": rx, "ry": ry}),React.createElement("circle",{"className": "pupil", "cx": pcxb, "cy": pcy, "r": pr, "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxb, "cy": scy, "r": sr, "stroke": "white"}));
});
shapes.dev.face = (function face(){
var cx = (400);
var cy = (150);
var width = (150);
var height = (200);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"rx","rx",1627208482),(width / (2)),new cljs.core.Keyword(null,"ry","ry",-334598563),(height / (2))], null);
});

var ufv___31461 = schema.utils.use_fn_validation;
var output_schema31443_31462 = schema.core.Any;
var input_schema31444_31463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker31445_31464 = schema.core.checker.call(null,input_schema31444_31463);
var output_checker31446_31465 = schema.core.checker.call(null,output_schema31443_31462);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function app(G__31447,G__31448){
var validate__17001__auto__ = ufv___31461.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___31466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31447,G__31448], null);
var temp__4406__auto___31467 = input_checker31445_31464.call(null,args__17002__auto___31466);
if(cljs.core.truth_(temp__4406__auto___31467)){
var error__17003__auto___31468 = temp__4406__auto___31467;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___31468)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___31468,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___31466,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31444_31463,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__31447;
var owner = G__31448;
while(true){
if(typeof shapes.dev.t31455 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t31455 = (function (G__31448,owner,data,input_checker31445,validate__17001__auto__,G__31447,output_checker31446,output_schema31443,app,input_schema31444,ufv__,meta31456){
this.G__31448 = G__31448;
this.owner = owner;
this.data = data;
this.input_checker31445 = input_checker31445;
this.validate__17001__auto__ = validate__17001__auto__;
this.G__31447 = G__31447;
this.output_checker31446 = output_checker31446;
this.output_schema31443 = output_schema31443;
this.app = app;
this.input_schema31444 = input_schema31444;
this.ufv__ = ufv__;
this.meta31456 = meta31456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t31455.prototype.om$core$IDisplayName$ = true;

shapes.dev.t31455.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

shapes.dev.t31455.prototype.om$core$IRenderState$ = true;

shapes.dev.t31455.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (_,p__31458){
var self__ = this;
var map__31459 = p__31458;
var map__31459__$1 = ((cljs.core.seq_QMARK_.call(null,map__31459))?cljs.core.apply.call(null,cljs.core.hash_map,map__31459):map__31459);
var measurements = cljs.core.get.call(null,map__31459__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("h1",{"style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},(cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__31459,map__31459__$1,measurements,validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"shapes","shapes",1897594879),"hi");
});})(___$1,map__31459,map__31459__$1,measurements,validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
}),React.createElement("rect",{"className": "dev-mode-on", "x": (10), "y": (0), "width": (100), "height": (50), "fill": "green", "onClick": ((function (___$1,map__31459,map__31459__$1,measurements,validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);
});})(___$1,map__31459,map__31459__$1,measurements,validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
}),React.createElement("rect",{"className": "dev-mode-off", "x": (10), "y": (60), "width": (100), "height": (50), "fill": "red", "onClick": ((function (___$1,map__31459,map__31459__$1,measurements,validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
});})(___$1,map__31459,map__31459__$1,measurements,validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
}),sablono.interpreter.interpret.call(null,(function (){var map__31460 = measurements;
var map__31460__$1 = ((cljs.core.seq_QMARK_.call(null,map__31460))?cljs.core.apply.call(null,cljs.core.hash_map,map__31460):map__31460);
var height = cljs.core.get.call(null,map__31460__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__31460__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ry = cljs.core.get.call(null,map__31460__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__31460__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var cy = cljs.core.get.call(null,map__31460__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__31460__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data)))], null);
})())));
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

shapes.dev.t31455.prototype.om$core$IInitState$ = true;

shapes.dev.t31455.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null)], null);
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

shapes.dev.t31455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (_31457){
var self__ = this;
var _31457__$1 = this;
return self__.meta31456;
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

shapes.dev.t31455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (_31457,meta31456__$1){
var self__ = this;
var _31457__$1 = this;
return (new shapes.dev.t31455(self__.G__31448,self__.owner,self__.data,self__.input_checker31445,self__.validate__17001__auto__,self__.G__31447,self__.output_checker31446,self__.output_schema31443,self__.app,self__.input_schema31444,self__.ufv__,meta31456__$1));
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

shapes.dev.t31455.cljs$lang$type = true;

shapes.dev.t31455.cljs$lang$ctorStr = "shapes.dev/t31455";

shapes.dev.t31455.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t31455");
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

shapes.dev.__GT_t31455 = ((function (validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465){
return (function __GT_t31455(G__31448__$1,owner__$1,data__$1,input_checker31445__$1,validate__17001__auto____$1,G__31447__$1,output_checker31446__$1,output_schema31443__$1,app__$1,input_schema31444__$1,ufv____$1,meta31456){
return (new shapes.dev.t31455(G__31448__$1,owner__$1,data__$1,input_checker31445__$1,validate__17001__auto____$1,G__31447__$1,output_checker31446__$1,output_schema31443__$1,app__$1,input_schema31444__$1,ufv____$1,meta31456));
});})(validate__17001__auto__,ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

}

return (new shapes.dev.t31455(G__31448,owner,data,input_checker31445_31464,validate__17001__auto__,G__31447,output_checker31446_31465,output_schema31443_31462,app,input_schema31444_31463,ufv___31461,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___31469 = output_checker31446_31465.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___31469)){
var error__17003__auto___31470 = temp__4406__auto___31469;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___31470)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___31470,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31443_31462,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___31461,output_schema31443_31462,input_schema31444_31463,input_checker31445_31464,output_checker31446_31465))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema31443_31462,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31444_31463], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m31442){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m31442);
});
__GT_app = function(cursor__18789__auto__,m31442){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m31442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
if(weasel.repl.alive_QMARK_.call(null)){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));
om.core.root.call(null,shapes.dev.app,shapes.dev.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=dev.js.map