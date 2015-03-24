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
var G__22847__i = 0, G__22847__a = new Array(arguments.length -  0);
while (G__22847__i < G__22847__a.length) {G__22847__a[G__22847__i] = arguments[G__22847__i + 0]; ++G__22847__i;}
  content = new cljs.core.IndexedSeq(G__22847__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__22848){
var content = cljs.core.seq(arglist__22848);
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
shapes.dev.eyes = (function eyes(p__22849){
var map__22851 = p__22849;
var map__22851__$1 = ((cljs.core.seq_QMARK_.call(null,map__22851))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var height = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var x_offset = (width / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(4),(6))));
var rx = x_offset;
var ry = (height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,2.5,(6),0.1)));
var cy = (y - (height / (6)));
var cx_offset = (width / x_offset);
var cx_a = ((x - (width / (4))) - cx_offset);
var cx_b = ((x + (width / (4))) + cx_offset);
var prx = (rx / cljs.core.rand_nth.call(null,cljs.core.range.call(null,1.5,(8))));
var pry = (ry / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(8))));
var pcx_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(prx - rx),(rx - prx)));
var pcxa = (cx_a + pcx_offset);
var pcxb = (cx_b + pcx_offset);
var pcy = cljs.core.rand_nth.call(null,cljs.core.range.call(null,((cy - ry) + pry),((cy + ry) - pry)));
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"prx","prx",-15032060),new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792),new cljs.core.Keyword(null,"pry","pry",1508120329),new cljs.core.Keyword(null,"cx-a","cx-a",-1345949141),new cljs.core.Keyword(null,"pcy","pcy",-1228409588),new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"cx-b","cx-b",973144117),new cljs.core.Keyword(null,"ry","ry",-334598563)],[rx,prx,pcxa,pry,cx_a,pcy,pcxb,cy,cx_b,ry]),(((pcxa < cx_a))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"za","za",1500876307),(2),new cljs.core.Keyword(null,"zb","zb",408536647),(1)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"za","za",1500876307),(1),new cljs.core.Keyword(null,"zb","zb",408536647),(2)], null)));
});
shapes.dev.draw_eyes = (function draw_eyes(p__22852){
var map__22854 = p__22852;
var map__22854__$1 = ((cljs.core.seq_QMARK_.call(null,map__22854))?cljs.core.apply.call(null,cljs.core.hash_map,map__22854):map__22854);
var ry = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var prx = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"prx","prx",-15032060));
var zb = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"zb","zb",408536647));
var pcxa = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792));
var pry = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"pry","pry",1508120329));
var cx_a = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"cx-a","cx-a",-1345949141));
var pcy = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"pcy","pcy",-1228409588));
var pcxb = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351));
var za = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"za","za",1500876307));
var cy = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx_b = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"cx-b","cx-b",973144117));
return React.createElement("g",{"className": "eyes", "stroke": "black", "strokeWidth": (3)},React.createElement("defs",null,React.createElement("clippath",{"id": "pupil-a"},React.createElement("ellipse",{"cx": cx_a, "cy": cy, "rx": rx, "ry": ry})),React.createElement("clippath",{"id": "pupil-b"},React.createElement("ellipse",{"cx": cx_b, "cy": cy, "rx": rx, "ry": ry}))),React.createElement("ellipse",{"cx": cx_a, "cy": cy, "rx": rx, "ry": ry, "fill": "white", "style": {"zIndex": za}}),React.createElement("ellipse",{"className": "pupil", "cx": pcxa, "cy": pcy, "rx": prx, "ry": pry, "fill": "black", "clipPath": "url(#pupil-a)", "style": {"zIndex": za}}),React.createElement("ellipse",{"cx": cx_b, "cy": cy, "rx": rx, "ry": ry, "fill": "white", "style": {"zIndex": zb}}),React.createElement("ellipse",{"className": "pupil", "cx": pcxb, "cy": pcy, "rx": prx, "ry": pry, "fill": "black", "clipPath": "url(#pupil-b)", "style": {"zIndex": zb}}));
});
shapes.dev.face = (function face(){
return sablono.interpreter.interpret.call(null,(function (){var cx = (400);
var cy = (200);
var width = (150);
var height = (200);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),cy,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"rx","rx",1627208482),(width / (2)),new cljs.core.Keyword(null,"ry","ry",-334598563),(height / (2))], null);
})());
});

var ufv___22874 = schema.utils.use_fn_validation;
var output_schema22856_22875 = schema.core.Any;
var input_schema22857_22876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker22858_22877 = schema.core.checker.call(null,input_schema22857_22876);
var output_checker22859_22878 = schema.core.checker.call(null,output_schema22856_22875);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function app(G__22860,G__22861){
var validate__17001__auto__ = ufv___22874.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___22879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22860,G__22861], null);
var temp__4406__auto___22880 = input_checker22858_22877.call(null,args__17002__auto___22879);
if(cljs.core.truth_(temp__4406__auto___22880)){
var error__17003__auto___22881 = temp__4406__auto___22880;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___22881)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___22881,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___22879,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22857_22876,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__22860;
var owner = G__22861;
while(true){
if(typeof shapes.dev.t22868 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t22868 = (function (output_schema22856,owner,input_schema22857,data,G__22860,input_checker22858,validate__17001__auto__,output_checker22859,G__22861,app,ufv__,meta22869){
this.output_schema22856 = output_schema22856;
this.owner = owner;
this.input_schema22857 = input_schema22857;
this.data = data;
this.G__22860 = G__22860;
this.input_checker22858 = input_checker22858;
this.validate__17001__auto__ = validate__17001__auto__;
this.output_checker22859 = output_checker22859;
this.G__22861 = G__22861;
this.app = app;
this.ufv__ = ufv__;
this.meta22869 = meta22869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t22868.prototype.om$core$IDisplayName$ = true;

shapes.dev.t22868.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

shapes.dev.t22868.prototype.om$core$IRenderState$ = true;

shapes.dev.t22868.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (_,p__22871){
var self__ = this;
var map__22872 = p__22871;
var map__22872__$1 = ((cljs.core.seq_QMARK_.call(null,map__22872))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);
var measurements = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__22872,map__22872__$1,measurements,validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"shapes","shapes",1897594879),"hi");
});})(___$1,map__22872,map__22872__$1,measurements,validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
}),sablono.interpreter.interpret.call(null,(function (){var map__22873 = measurements;
var map__22873__$1 = ((cljs.core.seq_QMARK_.call(null,map__22873))?cljs.core.apply.call(null,cljs.core.hash_map,map__22873):map__22873);
var height = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ry = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var y = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements))], null);
})())));
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

shapes.dev.t22868.prototype.om$core$IInitState$ = true;

shapes.dev.t22868.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null)], null);
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

shapes.dev.t22868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (_22870){
var self__ = this;
var _22870__$1 = this;
return self__.meta22869;
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

shapes.dev.t22868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (_22870,meta22869__$1){
var self__ = this;
var _22870__$1 = this;
return (new shapes.dev.t22868(self__.output_schema22856,self__.owner,self__.input_schema22857,self__.data,self__.G__22860,self__.input_checker22858,self__.validate__17001__auto__,self__.output_checker22859,self__.G__22861,self__.app,self__.ufv__,meta22869__$1));
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

shapes.dev.t22868.cljs$lang$type = true;

shapes.dev.t22868.cljs$lang$ctorStr = "shapes.dev/t22868";

shapes.dev.t22868.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t22868");
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

shapes.dev.__GT_t22868 = ((function (validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878){
return (function __GT_t22868(output_schema22856__$1,owner__$1,input_schema22857__$1,data__$1,G__22860__$1,input_checker22858__$1,validate__17001__auto____$1,output_checker22859__$1,G__22861__$1,app__$1,ufv____$1,meta22869){
return (new shapes.dev.t22868(output_schema22856__$1,owner__$1,input_schema22857__$1,data__$1,G__22860__$1,input_checker22858__$1,validate__17001__auto____$1,output_checker22859__$1,G__22861__$1,app__$1,ufv____$1,meta22869));
});})(validate__17001__auto__,ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

}

return (new shapes.dev.t22868(output_schema22856_22875,owner,input_schema22857_22876,data,G__22860,input_checker22858_22877,validate__17001__auto__,output_checker22859_22878,G__22861,app,ufv___22874,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___22882 = output_checker22859_22878.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___22882)){
var error__17003__auto___22883 = temp__4406__auto___22882;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___22883)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___22883,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22856_22875,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___22874,output_schema22856_22875,input_schema22857_22876,input_checker22858_22877,output_checker22859_22878))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema22856_22875,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22857_22876], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m22855){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m22855);
});
__GT_app = function(cursor__18789__auto__,m22855){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m22855);
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