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
var G__31393__i = 0, G__31393__a = new Array(arguments.length -  0);
while (G__31393__i < G__31393__a.length) {G__31393__a[G__31393__i] = arguments[G__31393__i + 0]; ++G__31393__i;}
  content = new cljs.core.IndexedSeq(G__31393__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__31394){
var content = cljs.core.seq(arglist__31394);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
shapes.dev.development_measurements = (function development_measurements(avg_QMARK_){
var w = window.innerWidth;
var h = window.innerHeight;
var m = (function (){var x__14768__auto__ = w;
var y__14769__auto__ = h;
return ((x__14768__auto__ < y__14769__auto__) ? x__14768__auto__ : y__14769__auto__);
})();
var max_dimension = (function (){var x__14761__auto__ = (75);
var y__14762__auto__ = (m - (m / (5)));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
var min_dimension = (function (){var x__14761__auto__ = (75);
var y__14762__auto__ = (m / (2));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((w / (2)) + (50)),new cljs.core.Keyword(null,"cy","cy",755331060),(h / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension)),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.call(null,min_dimension,max_dimension):shapes.core.rand_float.call(null,min_dimension,max_dimension))], null);
});
/**
* @param {...*} var_args
*/
shapes.dev.face = (function() { 
var face__delegate = function (avg_QMARK_,p__31395){
var map__31397 = p__31395;
var map__31397__$1 = ((cljs.core.seq_QMARK_.call(null,map__31397))?cljs.core.apply.call(null,cljs.core.hash_map,map__31397):map__31397);
var proportional_QMARK_ = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
} else {
return shapes.core.mouth.call(null,shapes.core.nose.call(null,shapes.core.eyes.call(null,shapes.core.head.call(null,shapes.dev.development_measurements.call(null,avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
}
};
var face = function (avg_QMARK_,var_args){
var p__31395 = null;
if (arguments.length > 1) {
var G__31398__i = 0, G__31398__a = new Array(arguments.length -  1);
while (G__31398__i < G__31398__a.length) {G__31398__a[G__31398__i] = arguments[G__31398__i + 1]; ++G__31398__i;}
  p__31395 = new cljs.core.IndexedSeq(G__31398__a,0);
} 
return face__delegate.call(this,avg_QMARK_,p__31395);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__31399){
var avg_QMARK_ = cljs.core.first(arglist__31399);
var p__31395 = cljs.core.rest(arglist__31399);
return face__delegate(avg_QMARK_,p__31395);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
shapes.dev.section_face = (function section_face(p__31400){
var map__31402 = p__31400;
var map__31402__$1 = ((cljs.core.seq_QMARK_.call(null,map__31402))?cljs.core.apply.call(null,cljs.core.hash_map,map__31402):map__31402);
var head_ry = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var vertical_b = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_c = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var horizontal_b = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_a = cljs.core.get.call(null,map__31402__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
return React.createElement("g",{"id": "sections", "stroke": "lightgrey"},React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_a, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_a}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_b, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_b}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_c, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_c}),React.createElement("line",{"x1": vertical_a, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_a, "y2": ((head_cy + head_ry) + (5))}),React.createElement("line",{"x1": vertical_b, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_b, "y2": ((head_cy + head_ry) + (5))}));
});
shapes.dev.avg_mode = (function avg_mode(data){
return React.createElement("g",{"id": "dev-mode", "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (80), "y": (50)},"Average Mode"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (25), "y": (60), "width": (100), "height": (50), "fill": "darkseagreen", "stroke": (cljs.core.truth_((function (){var and__14432__auto__ = new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__14432__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__14432__auto__;
}
})())?"black":"transparent"), "strokeWidth": (3), "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"avg?","avg?",265252797),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((60) + (30)), "style": {"pointerEvents": "none"}},"On")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"className": "off-button", "x": (25), "y": (115), "width": (100), "height": (50), "fill": "indianred", "stroke": (cljs.core.truth_((function (){var or__14444__auto__ = new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
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
return cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = (function iter__31419(s__31420){
return (new cljs.core.LazySeq(null,(function (){
var s__31420__$1 = s__31420;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__31420__$1);
if(temp__4406__auto__){
var s__31420__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31420__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__31420__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__31422 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__31421 = (0);
while(true){
if((i__31421 < size__15199__auto__)){
var vec__31425 = cljs.core._nth.call(null,c__15198__auto__,i__31421);
var i = cljs.core.nth.call(null,vec__31425,(0),null);
var color = cljs.core.nth.call(null,vec__31425,(1),null);
cljs.core.chunk_append.call(null,b__31422,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (410), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((410) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__31427 = (i__31421 + (1));
i__31421 = G__31427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31422),iter__31419.call(null,cljs.core.chunk_rest.call(null,s__31420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31422),null);
}
} else {
var vec__31426 = cljs.core.first.call(null,s__31420__$2);
var i = cljs.core.nth.call(null,vec__31426,(0),null);
var color = cljs.core.nth.call(null,vec__31426,(1),null);
return cljs.core.cons.call(null,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (410), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((410) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__31419.call(null,cljs.core.rest.call(null,s__31420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,color_scale));
})());
});
shapes.dev.dev_interface = (function dev_interface(data){
return React.createElement("g",{"id": "dev-interface"},React.createElement("text",{"id": "instructions", "x": (window.innerWidth / (2)), "y": (25), "textAnchor": "middle", "stroke": "black", "fontSize": (20)},"Click anywhere on the background to generate a new face"),React.createElement("g",{"id": "controls", "textAnchor": "middle"},sablono.interpreter.interpret.call(null,shapes.dev.avg_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.section_controls.call(null,data))));
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}

var ufv___31441 = schema.utils.use_fn_validation;
var output_schema31429_31442 = schema.core.Any;
var input_schema31430_31443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker31431_31444 = schema.core.checker.call(null,input_schema31430_31443);
var output_checker31432_31445 = schema.core.checker.call(null,output_schema31429_31442);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function app(G__31433,G__31434){
var validate__16917__auto__ = ufv___31441.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___31446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31433,G__31434], null);
var temp__4406__auto___31447 = input_checker31431_31444.call(null,args__16918__auto___31446);
if(cljs.core.truth_(temp__4406__auto___31447)){
var error__16919__auto___31448 = temp__4406__auto___31447;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16919__auto___31448)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___31448,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___31446,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31430_31443,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var data = G__31433;
var owner = G__31434;
while(true){
if(typeof shapes.dev.t31438 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t31438 = (function (validate__16917__auto__,input_schema31430,G__31433,owner,data,G__31434,output_schema31429,input_checker31431,output_checker31432,app,ufv__,meta31439){
this.validate__16917__auto__ = validate__16917__auto__;
this.input_schema31430 = input_schema31430;
this.G__31433 = G__31433;
this.owner = owner;
this.data = data;
this.G__31434 = G__31434;
this.output_schema31429 = output_schema31429;
this.input_checker31431 = input_checker31431;
this.output_checker31432 = output_checker31432;
this.app = app;
this.ufv__ = ufv__;
this.meta31439 = meta31439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t31438.prototype.om$core$IDisplayName$ = true;

shapes.dev.t31438.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

shapes.dev.t31438.prototype.om$core$IRender$ = true;

shapes.dev.t31438.prototype.om$core$IRender$render$arity$1 = ((function (validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_interface.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))),sablono.interpreter.interpret.call(null,shapes.dev.draw_color_scale.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","lightgrey","darkgrey","grey","dimgrey","black"], null))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null)))));
});})(validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

shapes.dev.t31438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function (_31440){
var self__ = this;
var _31440__$1 = this;
return self__.meta31439;
});})(validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

shapes.dev.t31438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function (_31440,meta31439__$1){
var self__ = this;
var _31440__$1 = this;
return (new shapes.dev.t31438(self__.validate__16917__auto__,self__.input_schema31430,self__.G__31433,self__.owner,self__.data,self__.G__31434,self__.output_schema31429,self__.input_checker31431,self__.output_checker31432,self__.app,self__.ufv__,meta31439__$1));
});})(validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

shapes.dev.t31438.cljs$lang$type = true;

shapes.dev.t31438.cljs$lang$ctorStr = "shapes.dev/t31438";

shapes.dev.t31438.cljs$lang$ctorPrWriter = ((function (validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t31438");
});})(validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

shapes.dev.__GT_t31438 = ((function (validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445){
return (function __GT_t31438(validate__16917__auto____$1,input_schema31430__$1,G__31433__$1,owner__$1,data__$1,G__31434__$1,output_schema31429__$1,input_checker31431__$1,output_checker31432__$1,app__$1,ufv____$1,meta31439){
return (new shapes.dev.t31438(validate__16917__auto____$1,input_schema31430__$1,G__31433__$1,owner__$1,data__$1,G__31434__$1,output_schema31429__$1,input_checker31431__$1,output_checker31432__$1,app__$1,ufv____$1,meta31439));
});})(validate__16917__auto__,ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

}

return (new shapes.dev.t31438(validate__16917__auto__,input_schema31430_31443,G__31433,owner,data,G__31434,output_schema31429_31442,input_checker31431_31444,output_checker31432_31445,app,ufv___31441,null));
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___31449 = output_checker31432_31445.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___31449)){
var error__16919__auto___31450 = temp__4406__auto___31449;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16919__auto___31450)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___31450,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31429_31442,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___31441,output_schema31429_31442,input_schema31430_31443,input_checker31431_31444,output_checker31432_31445))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema31429_31442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31430_31443], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18705__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18705__auto__);
});
var __GT_app__2 = (function (cursor__18705__auto__,m31428){
return om.core.build.call(null,shapes.dev.app,cursor__18705__auto__,m31428);
});
__GT_app = function(cursor__18705__auto__,m31428){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18705__auto__);
case 2:
return __GT_app__2.call(this,cursor__18705__auto__,m31428);
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