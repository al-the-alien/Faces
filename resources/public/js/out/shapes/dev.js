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
var G__171280__i = 0, G__171280__a = new Array(arguments.length -  0);
while (G__171280__i < G__171280__a.length) {G__171280__a[G__171280__i] = arguments[G__171280__i + 0]; ++G__171280__i;}
  content = new cljs.core.IndexedSeq(G__171280__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__171281){
var content = cljs.core.seq(arglist__171281);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
shapes.dev.section_face = (function section_face(p__171282){
var map__171284 = p__171282;
var map__171284__$1 = ((cljs.core.seq_QMARK_.call(null,map__171284))?cljs.core.apply.call(null,cljs.core.hash_map,map__171284):map__171284);
var head_ry = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var vertical_b = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_c = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var horizontal_b = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_a = cljs.core.get.call(null,map__171284__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
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
return cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = (function iter__171301(s__171302){
return (new cljs.core.LazySeq(null,(function (){
var s__171302__$1 = s__171302;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__171302__$1);
if(temp__4406__auto__){
var s__171302__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__171302__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__171302__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__171304 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__171303 = (0);
while(true){
if((i__171303 < size__15199__auto__)){
var vec__171307 = cljs.core._nth.call(null,c__15198__auto__,i__171303);
var i = cljs.core.nth.call(null,vec__171307,(0),null);
var color = cljs.core.nth.call(null,vec__171307,(1),null);
cljs.core.chunk_append.call(null,b__171304,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (410), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((410) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__171309 = (i__171303 + (1));
i__171303 = G__171309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__171304),iter__171301.call(null,cljs.core.chunk_rest.call(null,s__171302__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__171304),null);
}
} else {
var vec__171308 = cljs.core.first.call(null,s__171302__$2);
var i = cljs.core.nth.call(null,vec__171308,(0),null);
var color = cljs.core.nth.call(null,vec__171308,(1),null);
return cljs.core.cons.call(null,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (410), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((410) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__171301.call(null,cljs.core.rest.call(null,s__171302__$2)));
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

var ufv___171323 = schema.utils.use_fn_validation;
var output_schema171311_171324 = schema.core.Any;
var input_schema171312_171325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker171313_171326 = schema.core.checker.call(null,input_schema171312_171325);
var output_checker171314_171327 = schema.core.checker.call(null,output_schema171311_171324);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function app(G__171315,G__171316){
var validate__17001__auto__ = ufv___171323.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___171328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__171315,G__171316], null);
var temp__4406__auto___171329 = input_checker171313_171326.call(null,args__17002__auto___171328);
if(cljs.core.truth_(temp__4406__auto___171329)){
var error__17003__auto___171330 = temp__4406__auto___171329;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___171330)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___171330,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___171328,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema171312_171325,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__171315;
var owner = G__171316;
while(true){
if(typeof shapes.dev.t171320 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t171320 = (function (owner,data,G__171315,validate__17001__auto__,output_schema171311,input_schema171312,G__171316,input_checker171313,app,output_checker171314,ufv__,meta171321){
this.owner = owner;
this.data = data;
this.G__171315 = G__171315;
this.validate__17001__auto__ = validate__17001__auto__;
this.output_schema171311 = output_schema171311;
this.input_schema171312 = input_schema171312;
this.G__171316 = G__171316;
this.input_checker171313 = input_checker171313;
this.app = app;
this.output_checker171314 = output_checker171314;
this.ufv__ = ufv__;
this.meta171321 = meta171321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t171320.prototype.om$core$IDisplayName$ = true;

shapes.dev.t171320.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

shapes.dev.t171320.prototype.om$core$IRender$ = true;

shapes.dev.t171320.prototype.om$core$IRender$render$arity$1 = ((function (validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_interface.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null)))));
});})(validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

shapes.dev.t171320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function (_171322){
var self__ = this;
var _171322__$1 = this;
return self__.meta171321;
});})(validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

shapes.dev.t171320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function (_171322,meta171321__$1){
var self__ = this;
var _171322__$1 = this;
return (new shapes.dev.t171320(self__.owner,self__.data,self__.G__171315,self__.validate__17001__auto__,self__.output_schema171311,self__.input_schema171312,self__.G__171316,self__.input_checker171313,self__.app,self__.output_checker171314,self__.ufv__,meta171321__$1));
});})(validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

shapes.dev.t171320.cljs$lang$type = true;

shapes.dev.t171320.cljs$lang$ctorStr = "shapes.dev/t171320";

shapes.dev.t171320.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t171320");
});})(validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

shapes.dev.__GT_t171320 = ((function (validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327){
return (function __GT_t171320(owner__$1,data__$1,G__171315__$1,validate__17001__auto____$1,output_schema171311__$1,input_schema171312__$1,G__171316__$1,input_checker171313__$1,app__$1,output_checker171314__$1,ufv____$1,meta171321){
return (new shapes.dev.t171320(owner__$1,data__$1,G__171315__$1,validate__17001__auto____$1,output_schema171311__$1,input_schema171312__$1,G__171316__$1,input_checker171313__$1,app__$1,output_checker171314__$1,ufv____$1,meta171321));
});})(validate__17001__auto__,ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

}

return (new shapes.dev.t171320(owner,data,G__171315,validate__17001__auto__,output_schema171311_171324,input_schema171312_171325,G__171316,input_checker171313_171326,app,output_checker171314_171327,ufv___171323,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___171331 = output_checker171314_171327.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___171331)){
var error__17003__auto___171332 = temp__4406__auto___171331;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___171332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___171332,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema171311_171324,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___171323,output_schema171311_171324,input_schema171312_171325,input_checker171313_171326,output_checker171314_171327))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema171311_171324,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema171312_171325], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m171310){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m171310);
});
__GT_app = function(cursor__18789__auto__,m171310){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m171310);
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