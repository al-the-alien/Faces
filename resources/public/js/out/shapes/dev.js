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
var G__35130__i = 0, G__35130__a = new Array(arguments.length -  0);
while (G__35130__i < G__35130__a.length) {G__35130__a[G__35130__i] = arguments[G__35130__i + 0]; ++G__35130__i;}
  content = new cljs.core.IndexedSeq(G__35130__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__35131){
var content = cljs.core.seq(arglist__35131);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
shapes.dev.square = (function square(x){
return (x * x);
});
shapes.dev.sqrt = (function sqrt(x){
return Math.sqrt.call(null,x);
});
shapes.dev.ys_within_ellipse = (function ys_within_ellipse(x,a,b,h,k){
var max_offset = (k + shapes.dev.sqrt.call(null,(shapes.dev.square.call(null,b) * ((1) - (shapes.dev.square.call(null,(x - h)) / shapes.dev.square.call(null,a))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(- max_offset),new cljs.core.Keyword(null,"max","max",61366548),max_offset], null);
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, development!"], null));
}
shapes.dev.pupils = (function pupils(p__35132,dev_QMARK_){
var map__35134 = p__35132;
var map__35134__$1 = ((cljs.core.seq_QMARK_.call(null,map__35134))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var ery = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"ery","ery",-2122524745));
var erx = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"erx","erx",-1373349685));
var ecy = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"ecy","ecy",488686007));
var ecxb = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"ecxb","ecxb",-1307296271));
var ecxa = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"ecxa","ecxa",67808068));
var height = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var pr = (cljs.core.truth_(dev_QMARK_)?(((erx + ery) / (2)) / (3)):(((erx + ery) / (2)) / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(5),0.1))));
var pc_measures = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(erx - pr),new cljs.core.Keyword(null,"ry","ry",-334598563),(ery - pr)], null);
var pcx_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (erx - pr)),(erx - pr),0.1));
var pcxa = (cljs.core.truth_(dev_QMARK_)?ecxa:(ecxa + pcx_offset));
var pcxb = (cljs.core.truth_(dev_QMARK_)?ecxb:(ecxb + pcx_offset));
var pcy_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (ery - pr)),(ery - pr),0.1));
var pcy_limits = shapes.dev.ys_within_ellipse.call(null,pcx_offset,new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(pc_measures),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(pc_measures),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(pc_measures),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(pc_measures));
var pcy = (cljs.core.truth_(dev_QMARK_)?ecy:(ecy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pcy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$2(pcy_limits,0.1)))));
var sr = (cljs.core.truth_(dev_QMARK_)?(pr / 3.75):(pr / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(3),(5),0.1))));
var scxa = ((pcxa + pr) - ((2) * sr));
var scxb = ((pcxb + pr) - ((2) * sr));
var scy = ((pcy - pr) + ((2) * sr));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pr","pr",-583594500),pr,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792),pcxa,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351),pcxb,new cljs.core.Keyword(null,"pcy","pcy",-1228409588),pcy,new cljs.core.Keyword(null,"sr","sr",-2009815970),sr,new cljs.core.Keyword(null,"scxa","scxa",-1980316782),scxa,new cljs.core.Keyword(null,"scxb","scxb",-1613143470),scxb,new cljs.core.Keyword(null,"scy","scy",2144350732),scy], null);
});
shapes.dev.eyes = (function eyes(p__35135,dev_QMARK_){
var map__35137 = p__35135;
var map__35137__$1 = ((cljs.core.seq_QMARK_.call(null,map__35137))?cljs.core.apply.call(null,cljs.core.hash_map,map__35137):map__35137);
var measures = map__35137__$1;
var rx = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var height = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var ecx_offset = (cljs.core.truth_(dev_QMARK_)?(rx / 2.5):(rx / (cljs.core.rand.call(null) + (2))));
var ecxa = (cx - ecx_offset);
var ecxb = (cx + ecx_offset);
var ecy_offset = (height / (20));
var ecy = (cljs.core.truth_(dev_QMARK_)?cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,(cy - ecy_offset),(cy + ecy_offset))));
var rx_max = (cx - ecxa);
var rx_min = (rx_max - (width / (20)));
var erx = (cljs.core.truth_(dev_QMARK_)?(rx_min + ((rx_max - rx_min) / (8))):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var ery = (cljs.core.truth_(dev_QMARK_)?(height / (9)):(height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(6),(11),0.1))));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ecxa","ecxa",67808068),ecxa,new cljs.core.Keyword(null,"ecxb","ecxb",-1307296271),ecxb,new cljs.core.Keyword(null,"ecy","ecy",488686007),ecy,new cljs.core.Keyword(null,"erx","erx",-1373349685),erx,new cljs.core.Keyword(null,"ery","ery",-2122524745),ery], null));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__35138){
var map__35140 = p__35138;
var map__35140__$1 = ((cljs.core.seq_QMARK_.call(null,map__35140))?cljs.core.apply.call(null,cljs.core.hash_map,map__35140):map__35140);
var pr = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"pr","pr",-583594500));
var sr = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"sr","sr",-2009815970));
var ecxa = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"ecxa","ecxa",67808068));
var pcxa = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792));
var erx = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"erx","erx",-1373349685));
var scy = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"scy","scy",2144350732));
var pcy = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"pcy","pcy",-1228409588));
var ecxb = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"ecxb","ecxb",-1307296271));
var pcxb = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351));
var scxb = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"scxb","scxb",-1613143470));
var scxa = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"scxa","scxa",-1980316782));
var ery = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"ery","ery",-2122524745));
var ecy = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"ecy","ecy",488686007));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"className": "eye-background", "cx": ecxa, "cy": ecy, "rx": erx, "ry": ery, "strokeWidth": (2)}),React.createElement("circle",{"className": "pupil", "cx": pcxa, "cy": pcy, "r": pr, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxa, "cy": scy, "r": sr, "stroke": "transparent"}),React.createElement("ellipse",{"className": "eye-background", "cx": ecxb, "cy": ecy, "rx": erx, "ry": ery, "strokeWidth": (2)}),React.createElement("circle",{"className": "pupil", "cx": pcxb, "cy": pcy, "r": pr, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxb, "cy": scy, "r": sr, "stroke": "transparent"}));
});
shapes.dev.face = (function face(dev_QMARK_){
var cx = (400);
var cy = (150);
var width = (cljs.core.truth_(dev_QMARK_)?(150):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(100),(200),0.1)));
var height = (cljs.core.truth_(dev_QMARK_)?(200):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(150),(200),0.1)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"rx","rx",1627208482),(width / (2)),new cljs.core.Keyword(null,"ry","ry",-334598563),(height / (2))], null);
});

var ufv___35160 = schema.utils.use_fn_validation;
var output_schema35142_35161 = schema.core.Any;
var input_schema35143_35162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker35144_35163 = schema.core.checker.call(null,input_schema35143_35162);
var output_checker35145_35164 = schema.core.checker.call(null,output_schema35142_35161);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function app(G__35146,G__35147){
var validate__17001__auto__ = ufv___35160.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___35165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35146,G__35147], null);
var temp__4406__auto___35166 = input_checker35144_35163.call(null,args__17002__auto___35165);
if(cljs.core.truth_(temp__4406__auto___35166)){
var error__17003__auto___35167 = temp__4406__auto___35166;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___35167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___35167,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___35165,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35143_35162,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__35146;
var owner = G__35147;
while(true){
if(typeof shapes.dev.t35154 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t35154 = (function (output_checker35145,owner,output_schema35142,data,input_schema35143,input_checker35144,G__35147,validate__17001__auto__,G__35146,app,ufv__,meta35155){
this.output_checker35145 = output_checker35145;
this.owner = owner;
this.output_schema35142 = output_schema35142;
this.data = data;
this.input_schema35143 = input_schema35143;
this.input_checker35144 = input_checker35144;
this.G__35147 = G__35147;
this.validate__17001__auto__ = validate__17001__auto__;
this.G__35146 = G__35146;
this.app = app;
this.ufv__ = ufv__;
this.meta35155 = meta35155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t35154.prototype.om$core$IDisplayName$ = true;

shapes.dev.t35154.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

shapes.dev.t35154.prototype.om$core$IRenderState$ = true;

shapes.dev.t35154.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (_,p__35157){
var self__ = this;
var map__35158 = p__35157;
var map__35158__$1 = ((cljs.core.seq_QMARK_.call(null,map__35158))?cljs.core.apply.call(null,cljs.core.hash_map,map__35158):map__35158);
var measurements = cljs.core.get.call(null,map__35158__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("h1",{"style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},(cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__35158,map__35158__$1,measurements,validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1,map__35158,map__35158__$1,measurements,validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
}),React.createElement("rect",{"className": "dev-mode-on", "x": (10), "y": (0), "width": (100), "height": (50), "fill": "green", "onClick": ((function (___$1,map__35158,map__35158__$1,measurements,validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1,map__35158,map__35158__$1,measurements,validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
}),React.createElement("rect",{"className": "dev-mode-off", "x": (10), "y": (60), "width": (100), "height": (50), "fill": "red", "onClick": ((function (___$1,map__35158,map__35158__$1,measurements,validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
});})(___$1,map__35158,map__35158__$1,measurements,validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
}),sablono.interpreter.interpret.call(null,(function (){var map__35159 = measurements;
var map__35159__$1 = ((cljs.core.seq_QMARK_.call(null,map__35159))?cljs.core.apply.call(null,cljs.core.hash_map,map__35159):map__35159);
var height = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ry = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var cy = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__35159__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data)))], null);
})())));
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

shapes.dev.t35154.prototype.om$core$IInitState$ = true;

shapes.dev.t35154.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))], null);
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

shapes.dev.t35154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (_35156){
var self__ = this;
var _35156__$1 = this;
return self__.meta35155;
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

shapes.dev.t35154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (_35156,meta35155__$1){
var self__ = this;
var _35156__$1 = this;
return (new shapes.dev.t35154(self__.output_checker35145,self__.owner,self__.output_schema35142,self__.data,self__.input_schema35143,self__.input_checker35144,self__.G__35147,self__.validate__17001__auto__,self__.G__35146,self__.app,self__.ufv__,meta35155__$1));
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

shapes.dev.t35154.cljs$lang$type = true;

shapes.dev.t35154.cljs$lang$ctorStr = "shapes.dev/t35154";

shapes.dev.t35154.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t35154");
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

shapes.dev.__GT_t35154 = ((function (validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164){
return (function __GT_t35154(output_checker35145__$1,owner__$1,output_schema35142__$1,data__$1,input_schema35143__$1,input_checker35144__$1,G__35147__$1,validate__17001__auto____$1,G__35146__$1,app__$1,ufv____$1,meta35155){
return (new shapes.dev.t35154(output_checker35145__$1,owner__$1,output_schema35142__$1,data__$1,input_schema35143__$1,input_checker35144__$1,G__35147__$1,validate__17001__auto____$1,G__35146__$1,app__$1,ufv____$1,meta35155));
});})(validate__17001__auto__,ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

}

return (new shapes.dev.t35154(output_checker35145_35164,owner,output_schema35142_35161,data,input_schema35143_35162,input_checker35144_35163,G__35147,validate__17001__auto__,G__35146,app,ufv___35160,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___35168 = output_checker35145_35164.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___35168)){
var error__17003__auto___35169 = temp__4406__auto___35168;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___35169)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___35169,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35142_35161,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___35160,output_schema35142_35161,input_schema35143_35162,input_checker35144_35163,output_checker35145_35164))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema35142_35161,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35143_35162], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m35141){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m35141);
});
__GT_app = function(cursor__18789__auto__,m35141){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m35141);
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