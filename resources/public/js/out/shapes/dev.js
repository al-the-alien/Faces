// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.dev');
goog.require('cljs.core');
goog.require('shapes.core');
goog.require('shapes.proportional');
goog.require('weasel.repl');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('dommy.core');
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}
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
var G__169766__i = 0, G__169766__a = new Array(arguments.length -  0);
while (G__169766__i < G__169766__a.length) {G__169766__a[G__169766__i] = arguments[G__169766__i + 0]; ++G__169766__i;}
  content = new cljs.core.IndexedSeq(G__169766__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__169767){
var content = cljs.core.seq(arglist__169767);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
shapes.dev.section_face = (function section_face(p__169768){
var map__169770 = p__169768;
var map__169770__$1 = ((cljs.core.seq_QMARK_.call(null,map__169770))?cljs.core.apply.call(null,cljs.core.hash_map,map__169770):map__169770);
var head_ry = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var vertical_b = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_c = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var horizontal_b = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_a = cljs.core.get.call(null,map__169770__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
return React.createElement("g",{"id": "sections", "stroke": "lightgrey"},React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_a, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_a}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_b, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_b}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_c, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_c}),React.createElement("line",{"x1": vertical_a, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_a, "y2": ((head_cy + head_ry) + (5))}),React.createElement("line",{"x1": vertical_b, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_b, "y2": ((head_cy + head_ry) + (5))}));
});
shapes.dev.dev_mode = (function dev_mode(data){
return React.createElement("g",{"id": "dev-mode", "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (75), "y": (50)},"Dev Mode Controls"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (25), "y": (60), "width": (100), "height": (50), "fill": "darkseagreen", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((60) + (30)), "style": {"pointerEvents": "none"}},"On")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"className": "off-button", "x": (25), "y": (115), "width": (100), "height": (50), "fill": "indianred", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((115) + (30)), "style": {"pointerEvents": "none"}},"Off")));
});
shapes.dev.pause_mode = (function pause_mode(data){
return React.createElement("g",{"id": "dev-mode"},React.createElement("text",{"x": (75), "y": (200)},"Control Changes"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (0), "y": (210), "width": (150), "height": (50), "fill": "darkseagreen", "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((210) + (30)), "style": {"pointerEvents": "none"}},"Resume changes")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"className": "off-button", "x": (0), "y": (265), "width": (150), "height": (50), "fill": "indianred", "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),true);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((265) + (30)), "style": {"pointerEvents": "none"}},"Pause changes")));
});
shapes.dev.section_controls = (function section_controls(data){
return React.createElement("g",{"id": "sections-toggle"},React.createElement("rect",{"className": "toggle-button", "x": (0), "y": (335), "width": (150), "height": (50), "fill": "steelblue", "onClick": (function (){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"sections?","sections?",-879376311),cljs.core.not);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((30) + (335)), "style": {"pointerEvents": "none"}},"Toggle sections"));
});
shapes.dev.draw_color_scale = (function draw_color_scale(color_scale){
return cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = (function iter__169787(s__169788){
return (new cljs.core.LazySeq(null,(function (){
var s__169788__$1 = s__169788;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__169788__$1);
if(temp__4406__auto__){
var s__169788__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__169788__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__169788__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__169790 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__169789 = (0);
while(true){
if((i__169789 < size__15199__auto__)){
var vec__169793 = cljs.core._nth.call(null,c__15198__auto__,i__169789);
var i = cljs.core.nth.call(null,vec__169793,(0),null);
var color = cljs.core.nth.call(null,vec__169793,(1),null);
cljs.core.chunk_append.call(null,b__169790,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (410), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((410) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__169795 = (i__169789 + (1));
i__169789 = G__169795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__169790),iter__169787.call(null,cljs.core.chunk_rest.call(null,s__169788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__169790),null);
}
} else {
var vec__169794 = cljs.core.first.call(null,s__169788__$2);
var i = cljs.core.nth.call(null,vec__169794,(0),null);
var color = cljs.core.nth.call(null,vec__169794,(1),null);
return cljs.core.cons.call(null,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (410), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((410) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__169787.call(null,cljs.core.rest.call(null,s__169788__$2)));
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
return React.createElement("g",{"id": "dev-interface"},React.createElement("text",{"id": "dev-info", "x": (0), "y": (25), "stroke": "black", "fontSize": (20)},sablono.interpreter.interpret.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(data))?"Dev mode on":"Dev mode off")),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?"\t:\tChanges Paused":null))].join(''))),React.createElement("g",{"id": "controls", "textAnchor": "middle"},sablono.interpreter.interpret.call(null,shapes.dev.dev_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,data)),sablono.interpreter.interpret.call(null,shapes.dev.section_controls.call(null,data))),sablono.interpreter.interpret.call(null,shapes.dev.draw_color_scale.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","lightgrey","darkgrey","grey","dimgrey","black"], null))));
});

var ufv___169809 = schema.utils.use_fn_validation;
var output_schema169797_169810 = schema.core.Any;
var input_schema169798_169811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker169799_169812 = schema.core.checker.call(null,input_schema169798_169811);
var output_checker169800_169813 = schema.core.checker.call(null,output_schema169797_169810);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function app(G__169801,G__169802){
var validate__17001__auto__ = ufv___169809.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___169814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__169801,G__169802], null);
var temp__4406__auto___169815 = input_checker169799_169812.call(null,args__17002__auto___169814);
if(cljs.core.truth_(temp__4406__auto___169815)){
var error__17003__auto___169816 = temp__4406__auto___169815;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___169816)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___169816,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___169814,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema169798_169811,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__169801;
var owner = G__169802;
while(true){
if(typeof shapes.dev.t169806 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t169806 = (function (input_schema169798,owner,data,output_checker169800,output_schema169797,input_checker169799,validate__17001__auto__,app,G__169801,ufv__,G__169802,meta169807){
this.input_schema169798 = input_schema169798;
this.owner = owner;
this.data = data;
this.output_checker169800 = output_checker169800;
this.output_schema169797 = output_schema169797;
this.input_checker169799 = input_checker169799;
this.validate__17001__auto__ = validate__17001__auto__;
this.app = app;
this.G__169801 = G__169801;
this.ufv__ = ufv__;
this.G__169802 = G__169802;
this.meta169807 = meta169807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t169806.prototype.om$core$IDisplayName$ = true;

shapes.dev.t169806.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

shapes.dev.t169806.prototype.om$core$IRender$ = true;

shapes.dev.t169806.prototype.om$core$IRender$render$arity$1 = ((function (validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_interface.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null)))));
});})(validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

shapes.dev.t169806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function (_169808){
var self__ = this;
var _169808__$1 = this;
return self__.meta169807;
});})(validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

shapes.dev.t169806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function (_169808,meta169807__$1){
var self__ = this;
var _169808__$1 = this;
return (new shapes.dev.t169806(self__.input_schema169798,self__.owner,self__.data,self__.output_checker169800,self__.output_schema169797,self__.input_checker169799,self__.validate__17001__auto__,self__.app,self__.G__169801,self__.ufv__,self__.G__169802,meta169807__$1));
});})(validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

shapes.dev.t169806.cljs$lang$type = true;

shapes.dev.t169806.cljs$lang$ctorStr = "shapes.dev/t169806";

shapes.dev.t169806.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t169806");
});})(validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

shapes.dev.__GT_t169806 = ((function (validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813){
return (function __GT_t169806(input_schema169798__$1,owner__$1,data__$1,output_checker169800__$1,output_schema169797__$1,input_checker169799__$1,validate__17001__auto____$1,app__$1,G__169801__$1,ufv____$1,G__169802__$1,meta169807){
return (new shapes.dev.t169806(input_schema169798__$1,owner__$1,data__$1,output_checker169800__$1,output_schema169797__$1,input_checker169799__$1,validate__17001__auto____$1,app__$1,G__169801__$1,ufv____$1,G__169802__$1,meta169807));
});})(validate__17001__auto__,ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

}

return (new shapes.dev.t169806(input_schema169798_169811,owner,data,output_checker169800_169813,output_schema169797_169810,input_checker169799_169812,validate__17001__auto__,app,G__169801,ufv___169809,G__169802,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___169817 = output_checker169800_169813.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___169817)){
var error__17003__auto___169818 = temp__4406__auto___169817;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___169818)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___169818,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema169797_169810,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___169809,output_schema169797_169810,input_schema169798_169811,input_checker169799_169812,output_checker169800_169813))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema169797_169810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema169798_169811], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m169796){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m169796);
});
__GT_app = function(cursor__18789__auto__,m169796){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m169796);
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
if(typeof shapes.dev.bezier_nose_mouth_overlap !== 'undefined'){
} else {
shapes.dev.bezier_nose_mouth_overlap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouth-cx2","mouth-cx2",-1685882207),new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138),new cljs.core.Keyword(null,"nose-y","nose-y",-400547678),new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"nose-x1","nose-x1",-999546938),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"mouth-x1","mouth-x1",-805478680),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"mouth-x2","mouth-x2",-412720501),new cljs.core.Keyword(null,"nose-x2","nose-x2",1328787371),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"nose-cx2","nose-cx2",-1557681838),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"nose-cx1","nose-cx1",667146003),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"mouth-cx1","mouth-cx1",1420685724),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"mouth-y","mouth-y",1691079390),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[497.5438596491228,361.4,324.995,530.3980681015346,519.5657894736842,182.05,169.49,360.23999999999995,5.2,467.1475,483.5,459.4561403508772,204.69566325039642,458.2664891541661,507.5438596491228,499.8525,2.3636363636363633,204.6,364.1,447.4342105263158,531.405,22.273333333333333,528.3924561403509,435.59499999999997,456.26087719298243,202.69005128921276,274.1,469.4561403508772,137.05,350.23999999999995,63.605000000000004]),new cljs.core.Keyword(null,"paused?","paused?",-135058553),true], null);
}

//# sourceMappingURL=dev.js.map