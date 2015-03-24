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
var G__29221__i = 0, G__29221__a = new Array(arguments.length -  0);
while (G__29221__i < G__29221__a.length) {G__29221__a[G__29221__i] = arguments[G__29221__i + 0]; ++G__29221__i;}
  content = new cljs.core.IndexedSeq(G__29221__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__29222){
var content = cljs.core.seq(arglist__29222);
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
shapes.dev.pupils = (function pupils(p__29223){
var map__29225 = p__29223;
var map__29225__$1 = ((cljs.core.seq_QMARK_.call(null,map__29225))?cljs.core.apply.call(null,cljs.core.hash_map,map__29225):map__29225);
var x = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cxb = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"cxb","cxb",-286755718));
var cxa = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"cxa","cxa",279393819));
var ry = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var height = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rx = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var cxy = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"cxy","cxy",703664037));
var width = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var pr = (((rx + ry) / (2)) / (3));
var pcxa = cxa;
var pcxb = cxb;
var pcy = cy;
var sr = (pr / (4));
var scxa = ((cxa + pr) - sr);
var scxb = ((cxb + pr) - sr);
var scy = ((cy - pr) + sr);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pr","pr",-583594500),pr,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792),pcxa,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351),pcxb,new cljs.core.Keyword(null,"pcy","pcy",-1228409588),pcy,new cljs.core.Keyword(null,"sr","sr",-2009815970),sr,new cljs.core.Keyword(null,"scxa","scxa",-1980316782),scxa,new cljs.core.Keyword(null,"scxb","scxb",-1613143470),scxb,new cljs.core.Keyword(null,"scy","scy",2144350732),scy], null);
});
shapes.dev.eyes = (function eyes(p__29226){
var map__29228 = p__29226;
var map__29228__$1 = ((cljs.core.seq_QMARK_.call(null,map__29228))?cljs.core.apply.call(null,cljs.core.hash_map,map__29228):map__29228);
var rx = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var height = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__29228__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cx_offset = (rx / 2.5);
var cxa = (x - cx_offset);
var cxb = (x + cx_offset);
var cy_offset = (height / (20));
var cy = y;
var rx_max = (x - cxa);
var rx_min = (rx_max - (width / (20)));
var rx__$1 = (rx_min + ((rx_max - rx_min) / (8)));
var ry = (height / (9));
var prx = (rx__$1 / (4));
var pry = (rx__$1 / (4));
var srx = (prx / (4));
var sry = srx;
var scxa = ((cxa + prx) - srx);
var scxb = ((cxb + prx) - srx);
var scy = ((cy - pry) + sry);
var eye_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"srx","srx",724194373),new cljs.core.Keyword(null,"scy","scy",2144350732),new cljs.core.Keyword(null,"scxb","scxb",-1613143470),new cljs.core.Keyword(null,"scxa","scxa",-1980316782),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"cxb","cxb",-286755718),new cljs.core.Keyword(null,"cxa","cxa",279393819),new cljs.core.Keyword(null,"sry","sry",-1622901988),new cljs.core.Keyword(null,"ry","ry",-334598563)],[rx__$1,srx,scy,scxb,scxa,cy,cxb,cxa,sry,ry]);
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map));
});
shapes.dev.draw_eyes = (function draw_eyes(p__29229){
var map__29231 = p__29229;
var map__29231__$1 = ((cljs.core.seq_QMARK_.call(null,map__29231))?cljs.core.apply.call(null,cljs.core.hash_map,map__29231):map__29231);
var cxb = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"cxb","cxb",-286755718));
var cxa = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"cxa","cxa",279393819));
var pr = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"pr","pr",-583594500));
var ry = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var sr = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"sr","sr",-2009815970));
var rx = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var pcxa = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792));
var scy = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"scy","scy",2144350732));
var pcy = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"pcy","pcy",-1228409588));
var pcxb = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351));
var scxb = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"scxb","scxb",-1613143470));
var scxa = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"scxa","scxa",-1980316782));
var cy = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"cx": cxa, "cy": cy, "rx": rx, "ry": ry}),React.createElement("circle",{"className": "pupil", "cx": pcxa, "cy": pcy, "r": pr, "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxa, "cy": scy, "r": sr, "stroke": "white"}),React.createElement("ellipse",{"cx": cxb, "cy": cy, "rx": rx, "ry": ry}),React.createElement("circle",{"className": "pupil", "cx": pcxb, "cy": pcy, "r": pr, "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxb, "cy": scy, "r": sr, "stroke": "white"}));
});
shapes.dev.face = (function face(){
var cx = (400);
var cy = (200);
var width = (150);
var height = (200);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),cy,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"rx","rx",1627208482),(width / (2)),new cljs.core.Keyword(null,"ry","ry",-334598563),(height / (2))], null);
});

var ufv___29251 = schema.utils.use_fn_validation;
var output_schema29233_29252 = schema.core.Any;
var input_schema29234_29253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker29235_29254 = schema.core.checker.call(null,input_schema29234_29253);
var output_checker29236_29255 = schema.core.checker.call(null,output_schema29233_29252);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function app(G__29237,G__29238){
var validate__17001__auto__ = ufv___29251.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___29256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__29237,G__29238], null);
var temp__4406__auto___29257 = input_checker29235_29254.call(null,args__17002__auto___29256);
if(cljs.core.truth_(temp__4406__auto___29257)){
var error__17003__auto___29258 = temp__4406__auto___29257;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___29258)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___29258,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___29256,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema29234_29253,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__29237;
var owner = G__29238;
while(true){
if(typeof shapes.dev.t29245 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t29245 = (function (owner,data,validate__17001__auto__,output_checker29236,input_schema29234,G__29237,output_schema29233,G__29238,input_checker29235,app,ufv__,meta29246){
this.owner = owner;
this.data = data;
this.validate__17001__auto__ = validate__17001__auto__;
this.output_checker29236 = output_checker29236;
this.input_schema29234 = input_schema29234;
this.G__29237 = G__29237;
this.output_schema29233 = output_schema29233;
this.G__29238 = G__29238;
this.input_checker29235 = input_checker29235;
this.app = app;
this.ufv__ = ufv__;
this.meta29246 = meta29246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t29245.prototype.om$core$IDisplayName$ = true;

shapes.dev.t29245.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

shapes.dev.t29245.prototype.om$core$IRenderState$ = true;

shapes.dev.t29245.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (_,p__29248){
var self__ = this;
var map__29249 = p__29248;
var map__29249__$1 = ((cljs.core.seq_QMARK_.call(null,map__29249))?cljs.core.apply.call(null,cljs.core.hash_map,map__29249):map__29249);
var measurements = cljs.core.get.call(null,map__29249__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__29249,map__29249__$1,measurements,validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"shapes","shapes",1897594879),"hi");
});})(___$1,map__29249,map__29249__$1,measurements,validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
}),sablono.interpreter.interpret.call(null,(function (){var map__29250 = measurements;
var map__29250__$1 = ((cljs.core.seq_QMARK_.call(null,map__29250))?cljs.core.apply.call(null,cljs.core.hash_map,map__29250):map__29250);
var height = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ry = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var y = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__29250__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements))], null);
})())));
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

shapes.dev.t29245.prototype.om$core$IInitState$ = true;

shapes.dev.t29245.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null)], null);
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

shapes.dev.t29245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (_29247){
var self__ = this;
var _29247__$1 = this;
return self__.meta29246;
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

shapes.dev.t29245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (_29247,meta29246__$1){
var self__ = this;
var _29247__$1 = this;
return (new shapes.dev.t29245(self__.owner,self__.data,self__.validate__17001__auto__,self__.output_checker29236,self__.input_schema29234,self__.G__29237,self__.output_schema29233,self__.G__29238,self__.input_checker29235,self__.app,self__.ufv__,meta29246__$1));
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

shapes.dev.t29245.cljs$lang$type = true;

shapes.dev.t29245.cljs$lang$ctorStr = "shapes.dev/t29245";

shapes.dev.t29245.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t29245");
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

shapes.dev.__GT_t29245 = ((function (validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255){
return (function __GT_t29245(owner__$1,data__$1,validate__17001__auto____$1,output_checker29236__$1,input_schema29234__$1,G__29237__$1,output_schema29233__$1,G__29238__$1,input_checker29235__$1,app__$1,ufv____$1,meta29246){
return (new shapes.dev.t29245(owner__$1,data__$1,validate__17001__auto____$1,output_checker29236__$1,input_schema29234__$1,G__29237__$1,output_schema29233__$1,G__29238__$1,input_checker29235__$1,app__$1,ufv____$1,meta29246));
});})(validate__17001__auto__,ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

}

return (new shapes.dev.t29245(owner,data,validate__17001__auto__,output_checker29236_29255,input_schema29234_29253,G__29237,output_schema29233_29252,G__29238,input_checker29235_29254,app,ufv___29251,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___29259 = output_checker29236_29255.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___29259)){
var error__17003__auto___29260 = temp__4406__auto___29259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___29260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___29260,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema29233_29252,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___29251,output_schema29233_29252,input_schema29234_29253,input_checker29235_29254,output_checker29236_29255))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema29233_29252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema29234_29253], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m29232){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m29232);
});
__GT_app = function(cursor__18789__auto__,m29232){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m29232);
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