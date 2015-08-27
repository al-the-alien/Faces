// Compiled by ClojureScript 0.0-3308 {}
goog.provide('shapes.dev');
goog.require('cljs.core');
goog.require('shapes.main');
goog.require('shapes.core');
goog.require('shapes.proportional');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('dommy.core');
shapes.dev.println = (function shapes$dev$println(){
var argseq__17667__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return shapes.dev.println.cljs$core$IFn$_invoke$arity$variadic(argseq__17667__auto__);
});

shapes.dev.println.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,content));
});

shapes.dev.println.cljs$lang$maxFixedArity = (0);

shapes.dev.println.cljs$lang$applyTo = (function (seq27889){
return shapes.dev.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27889));
});
shapes.dev.development_measurements = (function shapes$dev$development_measurements(avg_QMARK_){
var w = window.innerWidth;
var h = window.innerHeight;
var m = (function (){var x__16946__auto__ = w;
var y__16947__auto__ = h;
return ((x__16946__auto__ < y__16947__auto__) ? x__16946__auto__ : y__16947__auto__);
})();
var max_dimension = (function (){var x__16939__auto__ = (75);
var y__16940__auto__ = (m - (m / (5)));
return ((x__16939__auto__ > y__16940__auto__) ? x__16939__auto__ : y__16940__auto__);
})();
var min_dimension = (function (){var x__16939__auto__ = (75);
var y__16940__auto__ = (m / (2));
return ((x__16939__auto__ > y__16940__auto__) ? x__16939__auto__ : y__16940__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((w / (2)) + (50)),new cljs.core.Keyword(null,"cy","cy",755331060),(h / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension))], null);
});
shapes.dev.face = (function shapes$dev$face(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return shapes.dev.face.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

shapes.dev.face.cljs$core$IFn$_invoke$arity$variadic = (function (avg_QMARK_,p__27892){
var map__27893 = p__27892;
var map__27893__$1 = ((cljs.core.seq_QMARK_.call(null,map__27893))?cljs.core.apply.call(null,cljs.core.hash_map,map__27893):map__27893);
var proportional_QMARK_ = cljs.core.get.call(null,map__27893__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
} else {
return shapes.core.mouth.call(null,shapes.core.nose.call(null,shapes.core.eyes.call(null,shapes.core.head.call(null,shapes.dev.development_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
}
});

shapes.dev.face.cljs$lang$maxFixedArity = (1);

shapes.dev.face.cljs$lang$applyTo = (function (seq27890){
var G__27891 = cljs.core.first.call(null,seq27890);
var seq27890__$1 = cljs.core.next.call(null,seq27890);
return shapes.dev.face.cljs$core$IFn$_invoke$arity$variadic(G__27891,seq27890__$1);
});
shapes.dev.section_face = (function shapes$dev$section_face(p__27894){
var map__27896 = p__27894;
var map__27896__$1 = ((cljs.core.seq_QMARK_.call(null,map__27896))?cljs.core.apply.call(null,cljs.core.hash_map,map__27896):map__27896);
var horizontal_a = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
var horizontal_b = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_c = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var vertical_a = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var vertical_b = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var head_cx = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var head_cy = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_rx = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_ry = cljs.core.get.call(null,map__27896__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
return React.createElement("g",{"id": "sections", "stroke": "lightgrey"},React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_a, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_a}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_b, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_b}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_c, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_c}),React.createElement("line",{"x1": vertical_a, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_a, "y2": ((head_cy + head_ry) + (5))}),React.createElement("line",{"x1": vertical_b, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_b, "y2": ((head_cy + head_ry) + (5))}));
});
shapes.dev.avg_mode = (function shapes$dev$avg_mode(data){
return React.createElement("g",{"id": "dev-mode", "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (80), "y": (50)},"Average Mode"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"x": (25), "y": (60), "width": (100), "height": (50), "fill": "darkseagreen", "stroke": (cljs.core.truth_((function (){var and__16615__auto__ = new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__16615__auto__;
}
})())?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"avg?","avg?",265252797),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
}
}), "className": "on-button"}),React.createElement("text",{"x": ((25) + (50)), "y": ((60) + (30)), "style": {"pointerEvents": "none"}},"On")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"x": (25), "y": (115), "width": (100), "height": (50), "fill": "indianred", "stroke": (cljs.core.truth_((function (){var or__16627__auto__ = new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data);
}
})())?"transparent":"black"), "strokeWidth": (3), "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"avg?","avg?",265252797),false);
}
}), "className": "off-button"}),React.createElement("text",{"x": ((25) + (50)), "y": ((115) + (30)), "style": {"pointerEvents": "none"}},"Off")));
});
shapes.dev.pause_mode = (function shapes$dev$pause_mode(data){
return React.createElement("g",{"id": "pause-mode"},React.createElement("text",{"x": (80), "y": (200)},"Face Generation"),React.createElement("g",{"id": "pause-mode-off"},React.createElement("rect",{"x": (5), "y": (210), "width": (150), "height": (50), "fill": "darkseagreen", "stroke": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data)))?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false);
}), "className": "on-button"}),React.createElement("text",{"x": ((30) + (50)), "y": ((210) + (30)), "style": {"pointerEvents": "none"}},"Enabled")),React.createElement("g",{"id": "pause-mode-on"},React.createElement("rect",{"x": (5), "y": (265), "width": (150), "height": (50), "fill": "indianred", "stroke": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),true);
}), "className": "off-button"}),React.createElement("text",{"x": ((30) + (50)), "y": ((265) + (30)), "style": {"pointerEvents": "none"}},"Disabled")));
});
shapes.dev.section_controls = (function shapes$dev$section_controls(data){
return React.createElement("g",{"id": "sections-toggle"},React.createElement("rect",{"x": (5), "y": (335), "width": (150), "height": (50), "fill": "steelblue", "onClick": (function (){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"sections?","sections?",-879376311),cljs.core.not);
}), "className": "toggle-button"}),React.createElement("text",{"x": ((30) + (50)), "y": ((30) + (335)), "style": {"pointerEvents": "none"}},"Toggle sections"));
});
shapes.dev.draw_color_scale = (function shapes$dev$draw_color_scale(color_scale){
return cljs.core.into_array.call(null,(function (){var iter__17381__auto__ = (function shapes$dev$draw_color_scale_$_iter__27913(s__27914){
return (new cljs.core.LazySeq(null,(function (){
var s__27914__$1 = s__27914;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27914__$1);
if(temp__4425__auto__){
var s__27914__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27914__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__27914__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__27916 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__27915 = (0);
while(true){
if((i__27915 < size__17380__auto__)){
var vec__27919 = cljs.core._nth.call(null,c__17379__auto__,i__27915);
var i = cljs.core.nth.call(null,vec__27919,(0),null);
var color = cljs.core.nth.call(null,vec__27919,(1),null);
var w = window.innerWidth;
cljs.core.chunk_append.call(null,b__27916,React.createElement("g",{"textAnchor": "start", "className": "color"},React.createElement("rect",{"x": ((w - (45)) - (10)), "y": (i * (45)), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((w - (45)) - (10)), "y": ((i * (45)) + (40)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__27921 = (i__27915 + (1));
i__27915 = G__27921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27916),shapes$dev$draw_color_scale_$_iter__27913.call(null,cljs.core.chunk_rest.call(null,s__27914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27916),null);
}
} else {
var vec__27920 = cljs.core.first.call(null,s__27914__$2);
var i = cljs.core.nth.call(null,vec__27920,(0),null);
var color = cljs.core.nth.call(null,vec__27920,(1),null);
var w = window.innerWidth;
return cljs.core.cons.call(null,React.createElement("g",{"textAnchor": "start", "className": "color"},React.createElement("rect",{"x": ((w - (45)) - (10)), "y": (i * (45)), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((w - (45)) - (10)), "y": ((i * (45)) + (40)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),shapes$dev$draw_color_scale_$_iter__27913.call(null,cljs.core.rest.call(null,s__27914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,color_scale));
})());
});
shapes.dev.dev_interface = (function shapes$dev$dev_interface(data){
return React.createElement("g",{"id": "dev-interface"},React.createElement("text",{"id": "instructions", "x": (window.innerWidth / (2)), "y": (25), "textAnchor": "middle", "stroke": "black", "fontSize": (20)},"Click anywhere on the background to generate a new face"),React.createElement("g",{"id": "controls", "textAnchor": "middle"},sablono.interpreter.interpret.call(null,shapes.dev.avg_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.section_controls.call(null,data))));
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}

var ufv___27937 = schema.utils.use_fn_validation;
var output_schema27923_27938 = schema.core.Any;
var input_schema27924_27939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker27925_27940 = schema.core.checker.call(null,input_schema27924_27939);
var output_checker27926_27941 = schema.core.checker.call(null,output_schema27923_27938);
/**
 * Inputs: [data owner]
 */
shapes.dev.app = ((function (ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function shapes$dev$app(G__27927,G__27928){
var validate__18554__auto__ = ufv___27937.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___27942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27927,G__27928], null);
var temp__4425__auto___27943 = input_checker27925_27940.call(null,args__18555__auto___27942);
if(cljs.core.truth_(temp__4425__auto___27943)){
var error__18556__auto___27944 = temp__4425__auto___27943;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__18556__auto___27944)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27924_27939,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___27942,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___27944], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var data = G__27927;
var owner = G__27928;
while(true){
if(typeof shapes.dev.t27932 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t27932 = (function (G__27927,owner,data,input_checker27925,G__27928,output_checker27926,input_schema27924,validate__18554__auto__,app,ufv__,output_schema27923,meta27933){
this.G__27927 = G__27927;
this.owner = owner;
this.data = data;
this.input_checker27925 = input_checker27925;
this.G__27928 = G__27928;
this.output_checker27926 = output_checker27926;
this.input_schema27924 = input_schema27924;
this.validate__18554__auto__ = validate__18554__auto__;
this.app = app;
this.ufv__ = ufv__;
this.output_schema27923 = output_schema27923;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shapes.dev.t27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (_27934,meta27933__$1){
var self__ = this;
var _27934__$1 = this;
return (new shapes.dev.t27932(self__.G__27927,self__.owner,self__.data,self__.input_checker27925,self__.G__27928,self__.output_checker27926,self__.input_schema27924,self__.validate__18554__auto__,self__.app,self__.ufv__,self__.output_schema27923,meta27933__$1));
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

shapes.dev.t27932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (_27934){
var self__ = this;
var _27934__$1 = this;
return self__.meta27933;
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

shapes.dev.t27932.prototype.om$core$IDisplayName$ = true;

shapes.dev.t27932.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

shapes.dev.t27932.prototype.om$core$IRender$ = true;

shapes.dev.t27932.prototype.om$core$IRender$render$arity$1 = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_interface.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))),sablono.interpreter.interpret.call(null,shapes.dev.draw_color_scale.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","lightgrey","darkgrey","grey","dimgrey","black"], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null)))));
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

shapes.dev.t27932.getBasis = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__27927","G__27927",-1914061407,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-checker27925","input-checker27925",-892793622,null),new cljs.core.Symbol(null,"G__27928","G__27928",-1767402997,null),new cljs.core.Symbol(null,"output-checker27926","output-checker27926",-1441946933,null),new cljs.core.Symbol(null,"input-schema27924","input-schema27924",-1551209491,null),new cljs.core.Symbol(null,"validate__18554__auto__","validate__18554__auto__",202572828,null),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"output-schema27923","output-schema27923",804474239,null),new cljs.core.Symbol(null,"meta27933","meta27933",-1463087288,null)], null);
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

shapes.dev.t27932.cljs$lang$type = true;

shapes.dev.t27932.cljs$lang$ctorStr = "shapes.dev/t27932";

shapes.dev.t27932.cljs$lang$ctorPrWriter = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"shapes.dev/t27932");
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

shapes.dev.__GT_t27932 = ((function (validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941){
return (function shapes$dev$app_$___GT_t27932(G__27927__$1,owner__$1,data__$1,input_checker27925__$1,G__27928__$1,output_checker27926__$1,input_schema27924__$1,validate__18554__auto____$1,app__$1,ufv____$1,output_schema27923__$1,meta27933){
return (new shapes.dev.t27932(G__27927__$1,owner__$1,data__$1,input_checker27925__$1,G__27928__$1,output_checker27926__$1,input_schema27924__$1,validate__18554__auto____$1,app__$1,ufv____$1,output_schema27923__$1,meta27933));
});})(validate__18554__auto__,ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

}

return (new shapes.dev.t27932(G__27927,owner,data,input_checker27925_27940,G__27928,output_checker27926_27941,input_schema27924_27939,validate__18554__auto__,shapes$dev$app,ufv___27937,output_schema27923_27938,null));
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___27945 = output_checker27926_27941.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___27945)){
var error__18556__auto___27946 = temp__4425__auto___27945;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__18556__auto___27946)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27923_27938,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___27946], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___27937,output_schema27923_27938,input_schema27924_27939,input_checker27925_27940,output_checker27926_27941))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema27923_27938,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27924_27939], null)));

shapes.dev.__GT_app = (function shapes$dev$__GT_app(){
var G__27936 = arguments.length;
switch (G__27936) {
case 1:
return shapes.dev.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shapes.dev.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

shapes.dev.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23210__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__23210__auto__);
});

shapes.dev.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23210__auto__,m27922){
return om.core.build.call(null,shapes.dev.app,cursor__23210__auto__,m27922);
});

shapes.dev.__GT_app.cljs$lang$maxFixedArity = 2;
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));
om.core.root.call(null,shapes.dev.app,shapes.dev.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=dev.js.map