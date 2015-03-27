// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.dev');
goog.require('cljs.core');
goog.require('shapes.main');
goog.require('shapes.core');
goog.require('shapes.proportional');
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
var G__12291__i = 0, G__12291__a = new Array(arguments.length -  0);
while (G__12291__i < G__12291__a.length) {G__12291__a[G__12291__i] = arguments[G__12291__i + 0]; ++G__12291__i;}
  content = new cljs.core.IndexedSeq(G__12291__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__12292){
var content = cljs.core.seq(arglist__12292);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
shapes.dev.development_measurements = (function development_measurements(avg_QMARK_){
var w = window.innerWidth;
var h = window.innerHeight;
var m = (function (){var x__6230__auto__ = w;
var y__6231__auto__ = h;
return ((x__6230__auto__ < y__6231__auto__) ? x__6230__auto__ : y__6231__auto__);
})();
var max_dimension = (function (){var x__6223__auto__ = (75);
var y__6224__auto__ = (m - (m / (5)));
return ((x__6223__auto__ > y__6224__auto__) ? x__6223__auto__ : y__6224__auto__);
})();
var min_dimension = (function (){var x__6223__auto__ = (75);
var y__6224__auto__ = (m / (2));
return ((x__6223__auto__ > y__6224__auto__) ? x__6223__auto__ : y__6224__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((w / (2)) + (50)),new cljs.core.Keyword(null,"cy","cy",755331060),(h / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension))], null);
});
/**
* @param {...*} var_args
*/
shapes.dev.face = (function() { 
var face__delegate = function (avg_QMARK_,p__12293){
var map__12295 = p__12293;
var map__12295__$1 = ((cljs.core.seq_QMARK_.call(null,map__12295))?cljs.core.apply.call(null,cljs.core.hash_map,map__12295):map__12295);
var proportional_QMARK_ = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
} else {
return shapes.core.mouth.call(null,shapes.core.nose.call(null,shapes.core.eyes.call(null,shapes.core.head.call(null,shapes.dev.development_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
}
};
var face = function (avg_QMARK_,var_args){
var p__12293 = null;
if (arguments.length > 1) {
var G__12296__i = 0, G__12296__a = new Array(arguments.length -  1);
while (G__12296__i < G__12296__a.length) {G__12296__a[G__12296__i] = arguments[G__12296__i + 1]; ++G__12296__i;}
  p__12293 = new cljs.core.IndexedSeq(G__12296__a,0);
} 
return face__delegate.call(this,avg_QMARK_,p__12293);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__12297){
var avg_QMARK_ = cljs.core.first(arglist__12297);
var p__12293 = cljs.core.rest(arglist__12297);
return face__delegate(avg_QMARK_,p__12293);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
shapes.dev.section_face = (function section_face(p__12298){
var map__12300 = p__12298;
var map__12300__$1 = ((cljs.core.seq_QMARK_.call(null,map__12300))?cljs.core.apply.call(null,cljs.core.hash_map,map__12300):map__12300);
var head_ry = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var vertical_b = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_c = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var horizontal_b = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_a = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
return React.createElement("g",{"id": "sections", "stroke": "lightgrey"},React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_a, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_a}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_b, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_b}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_c, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_c}),React.createElement("line",{"x1": vertical_a, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_a, "y2": ((head_cy + head_ry) + (5))}),React.createElement("line",{"x1": vertical_b, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_b, "y2": ((head_cy + head_ry) + (5))}));
});
shapes.dev.avg_mode = (function avg_mode(data){
return React.createElement("g",{"id": "dev-mode", "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (80), "y": (50)},"Average Mode"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (25), "y": (60), "width": (100), "height": (50), "fill": "darkseagreen", "stroke": (cljs.core.truth_((function (){var and__5894__auto__ = new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5894__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__5894__auto__;
}
})())?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"avg?","avg?",265252797),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((60) + (30)), "style": {"pointerEvents": "none"}},"On")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"className": "off-button", "x": (25), "y": (115), "width": (100), "height": (50), "fill": "indianred", "stroke": (cljs.core.truth_((function (){var or__5906__auto__ = new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5906__auto__)){
return or__5906__auto__;
} else {
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data);
}
})())?"transparent":"black"), "strokeWidth": (3), "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"avg?","avg?",265252797),false);
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((115) + (30)), "style": {"pointerEvents": "none"}},"Off")));
});
shapes.dev.pause_mode = (function pause_mode(data){
return React.createElement("g",{"id": "pause-mode"},React.createElement("text",{"x": (80), "y": (200)},"Face Generation"),React.createElement("g",{"id": "pause-mode-off"},React.createElement("rect",{"className": "on-button", "x": (5), "y": (210), "width": (150), "height": (50), "fill": "darkseagreen", "stroke": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data)))?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false);
})}),React.createElement("text",{"x": ((30) + (50)), "y": ((210) + (30)), "style": {"pointerEvents": "none"}},"Enabled")),React.createElement("g",{"id": "pause-mode-on"},React.createElement("rect",{"className": "off-button", "x": (5), "y": (265), "width": (150), "height": (50), "fill": "indianred", "stroke": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),true);
})}),React.createElement("text",{"x": ((30) + (50)), "y": ((265) + (30)), "style": {"pointerEvents": "none"}},"Disabled")));
});
shapes.dev.section_controls = (function section_controls(data){
return React.createElement("g",{"id": "sections-toggle"},React.createElement("rect",{"className": "toggle-button", "x": (5), "y": (335), "width": (150), "height": (50), "fill": "steelblue", "onClick": (function (){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"sections?","sections?",-879376311),cljs.core.not);
})}),React.createElement("text",{"x": ((30) + (50)), "y": ((30) + (335)), "style": {"pointerEvents": "none"}},"Toggle sections"));
});
shapes.dev.draw_color_scale = (function draw_color_scale(color_scale){
return cljs.core.into_array.call(null,(function (){var iter__6662__auto__ = (function iter__12317(s__12318){
return (new cljs.core.LazySeq(null,(function (){
var s__12318__$1 = s__12318;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__12318__$1);
if(temp__4406__auto__){
var s__12318__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12318__$2)){
var c__6660__auto__ = cljs.core.chunk_first.call(null,s__12318__$2);
var size__6661__auto__ = cljs.core.count.call(null,c__6660__auto__);
var b__12320 = cljs.core.chunk_buffer.call(null,size__6661__auto__);
if((function (){var i__12319 = (0);
while(true){
if((i__12319 < size__6661__auto__)){
var vec__12323 = cljs.core._nth.call(null,c__6660__auto__,i__12319);
var i = cljs.core.nth.call(null,vec__12323,(0),null);
var color = cljs.core.nth.call(null,vec__12323,(1),null);
var w = window.innerWidth;
cljs.core.chunk_append.call(null,b__12320,React.createElement("g",{"className": "color", "textAnchor": "start"},React.createElement("rect",{"x": ((w - (45)) - (10)), "y": (i * (45)), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((w - (45)) - (10)), "y": ((i * (45)) + (40)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__12325 = (i__12319 + (1));
i__12319 = G__12325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12320),iter__12317.call(null,cljs.core.chunk_rest.call(null,s__12318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12320),null);
}
} else {
var vec__12324 = cljs.core.first.call(null,s__12318__$2);
var i = cljs.core.nth.call(null,vec__12324,(0),null);
var color = cljs.core.nth.call(null,vec__12324,(1),null);
var w = window.innerWidth;
return cljs.core.cons.call(null,React.createElement("g",{"className": "color", "textAnchor": "start"},React.createElement("rect",{"x": ((w - (45)) - (10)), "y": (i * (45)), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((w - (45)) - (10)), "y": ((i * (45)) + (40)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__12317.call(null,cljs.core.rest.call(null,s__12318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6662__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,color_scale));
})());
});
shapes.dev.dev_interface = (function dev_interface(data){
return React.createElement("g",{"id": "dev-interface"},React.createElement("text",{"id": "instructions", "x": (window.innerWidth / (2)), "y": (25), "textAnchor": "middle", "stroke": "black", "fontSize": (20)},"Click anywhere on the background to generate a new face"),React.createElement("g",{"id": "controls", "textAnchor": "middle"},sablono.interpreter.interpret.call(null,shapes.dev.avg_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.section_controls.call(null,data))));
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}

var ufv___12339 = schema.utils.use_fn_validation;
var output_schema12327_12340 = schema.core.Any;
var input_schema12328_12341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker12329_12342 = schema.core.checker.call(null,input_schema12328_12341);
var output_checker12330_12343 = schema.core.checker.call(null,output_schema12327_12340);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function app(G__12331,G__12332){
var validate__7745__auto__ = ufv___12339.get_cell();
if(cljs.core.truth_(validate__7745__auto__)){
var args__7746__auto___12344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__12331,G__12332], null);
var temp__4406__auto___12345 = input_checker12329_12342.call(null,args__7746__auto___12344);
if(cljs.core.truth_(temp__4406__auto___12345)){
var error__7747__auto___12346 = temp__4406__auto___12345;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__7747__auto___12346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___12346,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___12344,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema12328_12341,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7748__auto__ = (function (){var data = G__12331;
var owner = G__12332;
while(true){
if(typeof shapes.dev.t12336 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t12336 = (function (G__12331,owner,data,G__12332,output_schema12327,validate__7745__auto__,input_checker12329,input_schema12328,output_checker12330,app,ufv__,meta12337){
this.G__12331 = G__12331;
this.owner = owner;
this.data = data;
this.G__12332 = G__12332;
this.output_schema12327 = output_schema12327;
this.validate__7745__auto__ = validate__7745__auto__;
this.input_checker12329 = input_checker12329;
this.input_schema12328 = input_schema12328;
this.output_checker12330 = output_checker12330;
this.app = app;
this.ufv__ = ufv__;
this.meta12337 = meta12337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t12336.prototype.om$core$IDisplayName$ = true;

shapes.dev.t12336.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

shapes.dev.t12336.prototype.om$core$IRender$ = true;

shapes.dev.t12336.prototype.om$core$IRender$render$arity$1 = ((function (validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_interface.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))),sablono.interpreter.interpret.call(null,shapes.dev.draw_color_scale.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","lightgrey","darkgrey","grey","dimgrey","black"], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null)))));
});})(validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

shapes.dev.t12336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function (_12338){
var self__ = this;
var _12338__$1 = this;
return self__.meta12337;
});})(validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

shapes.dev.t12336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function (_12338,meta12337__$1){
var self__ = this;
var _12338__$1 = this;
return (new shapes.dev.t12336(self__.G__12331,self__.owner,self__.data,self__.G__12332,self__.output_schema12327,self__.validate__7745__auto__,self__.input_checker12329,self__.input_schema12328,self__.output_checker12330,self__.app,self__.ufv__,meta12337__$1));
});})(validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

shapes.dev.t12336.cljs$lang$type = true;

shapes.dev.t12336.cljs$lang$ctorStr = "shapes.dev/t12336";

shapes.dev.t12336.cljs$lang$ctorPrWriter = ((function (validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function (this__6493__auto__,writer__6494__auto__,opt__6495__auto__){
return cljs.core._write.call(null,writer__6494__auto__,"shapes.dev/t12336");
});})(validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

shapes.dev.__GT_t12336 = ((function (validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343){
return (function __GT_t12336(G__12331__$1,owner__$1,data__$1,G__12332__$1,output_schema12327__$1,validate__7745__auto____$1,input_checker12329__$1,input_schema12328__$1,output_checker12330__$1,app__$1,ufv____$1,meta12337){
return (new shapes.dev.t12336(G__12331__$1,owner__$1,data__$1,G__12332__$1,output_schema12327__$1,validate__7745__auto____$1,input_checker12329__$1,input_schema12328__$1,output_checker12330__$1,app__$1,ufv____$1,meta12337));
});})(validate__7745__auto__,ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

}

return (new shapes.dev.t12336(G__12331,owner,data,G__12332,output_schema12327_12340,validate__7745__auto__,input_checker12329_12342,input_schema12328_12341,output_checker12330_12343,app,ufv___12339,null));
break;
}
})();
if(cljs.core.truth_(validate__7745__auto__)){
var temp__4406__auto___12347 = output_checker12330_12343.call(null,o__7748__auto__);
if(cljs.core.truth_(temp__4406__auto___12347)){
var error__7747__auto___12348 = temp__4406__auto___12347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__7747__auto___12348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___12348,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema12327_12340,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7748__auto__;
});})(ufv___12339,output_schema12327_12340,input_schema12328_12341,input_checker12329_12342,output_checker12330_12343))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema12327_12340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema12328_12341], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__10251__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__10251__auto__);
});
var __GT_app__2 = (function (cursor__10251__auto__,m12326){
return om.core.build.call(null,shapes.dev.app,cursor__10251__auto__,m12326);
});
__GT_app = function(cursor__10251__auto__,m12326){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__10251__auto__);
case 2:
return __GT_app__2.call(this,cursor__10251__auto__,m12326);
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