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
var G__27401__i = 0, G__27401__a = new Array(arguments.length -  0);
while (G__27401__i < G__27401__a.length) {G__27401__a[G__27401__i] = arguments[G__27401__i + 0]; ++G__27401__i;}
  content = new cljs.core.IndexedSeq(G__27401__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__27402){
var content = cljs.core.seq(arglist__27402);
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
shapes.dev.eyes = (function eyes(p__27403){
var map__27405 = p__27403;
var map__27405__$1 = ((cljs.core.seq_QMARK_.call(null,map__27405))?cljs.core.apply.call(null,cljs.core.hash_map,map__27405):map__27405);
var rx = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var height = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__27405__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cx_offset = (rx / (cljs.core.rand.call(null) + (2)));
var cxa = (x - cx_offset);
var cxb = (x + cx_offset);
var cy_offset = (height / (20));
var cy = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(y - cy_offset),(y + cy_offset)));
var rx_max = (x - cxa);
var rx_min = (rx_max - (width / (20)));
var rx__$1 = cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1));
var ry = (height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(6),(11),0.1)));
var prx = (rx__$1 / (4));
var pry = (rx__$1 / (4));
var srx = (prx / (4));
var sry = srx;
var scxa = ((cxa + prx) - srx);
var scxb = ((cxb + prx) - srx);
var scy = ((cy - pry) + sry);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"prx","prx",-15032060),new cljs.core.Keyword(null,"srx","srx",724194373),new cljs.core.Keyword(null,"pry","pry",1508120329),new cljs.core.Keyword(null,"scy","scy",2144350732),new cljs.core.Keyword(null,"scxb","scxb",-1613143470),new cljs.core.Keyword(null,"scxa","scxa",-1980316782),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"cxb","cxb",-286755718),new cljs.core.Keyword(null,"cxa","cxa",279393819),new cljs.core.Keyword(null,"sry","sry",-1622901988),new cljs.core.Keyword(null,"ry","ry",-334598563)],[rx__$1,prx,srx,pry,scy,scxb,scxa,cy,cxb,cxa,sry,ry]);
});
shapes.dev.draw_eyes = (function draw_eyes(p__27406){
var map__27408 = p__27406;
var map__27408__$1 = ((cljs.core.seq_QMARK_.call(null,map__27408))?cljs.core.apply.call(null,cljs.core.hash_map,map__27408):map__27408);
var cxb = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"cxb","cxb",-286755718));
var cxa = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"cxa","cxa",279393819));
var sry = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"sry","sry",-1622901988));
var ry = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var prx = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"prx","prx",-15032060));
var srx = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"srx","srx",724194373));
var pry = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"pry","pry",1508120329));
var scy = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"scy","scy",2144350732));
var scxb = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"scxb","scxb",-1613143470));
var scxa = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"scxa","scxa",-1980316782));
var cy = cljs.core.get.call(null,map__27408__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"cx": cxa, "cy": cy, "rx": rx, "ry": ry}),React.createElement("ellipse",{"className": "pupil", "cx": cxa, "cy": cy, "rx": prx, "ry": pry, "fill": "black"}),React.createElement("ellipse",{"className": "shine", "cx": scxa, "cy": scy, "rx": srx, "ry": sry, "stroke": "white"}),React.createElement("ellipse",{"cx": cxb, "cy": cy, "rx": rx, "ry": ry}),React.createElement("ellipse",{"className": "pupil", "cx": cxb, "cy": cy, "rx": prx, "ry": pry, "fill": "black"}),React.createElement("ellipse",{"className": "shine", "cx": scxb, "cy": scy, "rx": srx, "ry": sry, "stroke": "white"}));
});
shapes.dev.face = (function face(){
return sablono.interpreter.interpret.call(null,(function (){var cx = (400);
var cy = (200);
var width = (150);
var height = (200);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),cy,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"rx","rx",1627208482),(width / (2)),new cljs.core.Keyword(null,"ry","ry",-334598563),(height / (2))], null);
})());
});

var ufv___27428 = schema.utils.use_fn_validation;
var output_schema27410_27429 = schema.core.Any;
var input_schema27411_27430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker27412_27431 = schema.core.checker.call(null,input_schema27411_27430);
var output_checker27413_27432 = schema.core.checker.call(null,output_schema27410_27429);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function app(G__27414,G__27415){
var validate__17001__auto__ = ufv___27428.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___27433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27414,G__27415], null);
var temp__4406__auto___27434 = input_checker27412_27431.call(null,args__17002__auto___27433);
if(cljs.core.truth_(temp__4406__auto___27434)){
var error__17003__auto___27435 = temp__4406__auto___27434;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___27435)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___27435,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___27433,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27411_27430,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__27414;
var owner = G__27415;
while(true){
if(typeof shapes.dev.t27422 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t27422 = (function (input_checker27412,owner,data,G__27415,output_checker27413,input_schema27411,validate__17001__auto__,output_schema27410,G__27414,app,ufv__,meta27423){
this.input_checker27412 = input_checker27412;
this.owner = owner;
this.data = data;
this.G__27415 = G__27415;
this.output_checker27413 = output_checker27413;
this.input_schema27411 = input_schema27411;
this.validate__17001__auto__ = validate__17001__auto__;
this.output_schema27410 = output_schema27410;
this.G__27414 = G__27414;
this.app = app;
this.ufv__ = ufv__;
this.meta27423 = meta27423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t27422.prototype.om$core$IDisplayName$ = true;

shapes.dev.t27422.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

shapes.dev.t27422.prototype.om$core$IRenderState$ = true;

shapes.dev.t27422.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (_,p__27425){
var self__ = this;
var map__27426 = p__27425;
var map__27426__$1 = ((cljs.core.seq_QMARK_.call(null,map__27426))?cljs.core.apply.call(null,cljs.core.hash_map,map__27426):map__27426);
var measurements = cljs.core.get.call(null,map__27426__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__27426,map__27426__$1,measurements,validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"shapes","shapes",1897594879),"hi");
});})(___$1,map__27426,map__27426__$1,measurements,validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
}),sablono.interpreter.interpret.call(null,(function (){var map__27427 = measurements;
var map__27427__$1 = ((cljs.core.seq_QMARK_.call(null,map__27427))?cljs.core.apply.call(null,cljs.core.hash_map,map__27427):map__27427);
var height = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ry = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var y = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__27427__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements))], null);
})())));
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

shapes.dev.t27422.prototype.om$core$IInitState$ = true;

shapes.dev.t27422.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null)], null);
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

shapes.dev.t27422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (_27424){
var self__ = this;
var _27424__$1 = this;
return self__.meta27423;
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

shapes.dev.t27422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (_27424,meta27423__$1){
var self__ = this;
var _27424__$1 = this;
return (new shapes.dev.t27422(self__.input_checker27412,self__.owner,self__.data,self__.G__27415,self__.output_checker27413,self__.input_schema27411,self__.validate__17001__auto__,self__.output_schema27410,self__.G__27414,self__.app,self__.ufv__,meta27423__$1));
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

shapes.dev.t27422.cljs$lang$type = true;

shapes.dev.t27422.cljs$lang$ctorStr = "shapes.dev/t27422";

shapes.dev.t27422.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t27422");
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

shapes.dev.__GT_t27422 = ((function (validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432){
return (function __GT_t27422(input_checker27412__$1,owner__$1,data__$1,G__27415__$1,output_checker27413__$1,input_schema27411__$1,validate__17001__auto____$1,output_schema27410__$1,G__27414__$1,app__$1,ufv____$1,meta27423){
return (new shapes.dev.t27422(input_checker27412__$1,owner__$1,data__$1,G__27415__$1,output_checker27413__$1,input_schema27411__$1,validate__17001__auto____$1,output_schema27410__$1,G__27414__$1,app__$1,ufv____$1,meta27423));
});})(validate__17001__auto__,ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

}

return (new shapes.dev.t27422(input_checker27412_27431,owner,data,G__27415,output_checker27413_27432,input_schema27411_27430,validate__17001__auto__,output_schema27410_27429,G__27414,app,ufv___27428,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___27436 = output_checker27413_27432.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___27436)){
var error__17003__auto___27437 = temp__4406__auto___27436;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___27437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___27437,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27410_27429,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___27428,output_schema27410_27429,input_schema27411_27430,input_checker27412_27431,output_checker27413_27432))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema27410_27429,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27411_27430], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m27409){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m27409);
});
__GT_app = function(cursor__18789__auto__,m27409){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m27409);
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