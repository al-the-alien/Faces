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
var G__36645__i = 0, G__36645__a = new Array(arguments.length -  0);
while (G__36645__i < G__36645__a.length) {G__36645__a[G__36645__i] = arguments[G__36645__i + 0]; ++G__36645__i;}
  content = new cljs.core.IndexedSeq(G__36645__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__36646){
var content = cljs.core.seq(arglist__36646);
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
shapes.dev.pupils = (function pupils(p__36647,dev_QMARK_){
var map__36649 = p__36647;
var map__36649__$1 = ((cljs.core.seq_QMARK_.call(null,map__36649))?cljs.core.apply.call(null,cljs.core.hash_map,map__36649):map__36649);
var eye_ry = cljs.core.get.call(null,map__36649__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_rx = cljs.core.get.call(null,map__36649__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_cy = cljs.core.get.call(null,map__36649__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__36649__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__36649__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pr = (cljs.core.truth_(dev_QMARK_)?(((eye_rx + eye_ry) / (2)) / (3)):(((eye_rx + eye_ry) / (2)) / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(5),0.1))));
var pc_measures = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(eye_rx - pr),new cljs.core.Keyword(null,"ry","ry",-334598563),(eye_ry - pr)], null);
var pcx_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (eye_rx - pr)),(eye_rx - pr),0.1));
var pcxa = (cljs.core.truth_(dev_QMARK_)?eye_cxa:(eye_cxa + pcx_offset));
var pcxb = (cljs.core.truth_(dev_QMARK_)?eye_cxb:(eye_cxb + pcx_offset));
var pcy_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (eye_ry - pr)),(eye_ry - pr),0.1));
var pcy_limits = shapes.dev.ys_within_ellipse.call(null,pcx_offset,new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(pc_measures),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(pc_measures),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(pc_measures),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(pc_measures));
var pcy = (cljs.core.truth_(dev_QMARK_)?eye_cy:(eye_cy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pcy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$2(pcy_limits,0.1)))));
var sr = (cljs.core.truth_(dev_QMARK_)?(pr / 3.75):(pr / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(3),(5),0.1))));
var scxa = ((pcxa + pr) - ((2) * sr));
var scxb = ((pcxb + pr) - ((2) * sr));
var scy = ((pcy - pr) + ((2) * sr));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pr","pr",-583594500),pr,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792),pcxa,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351),pcxb,new cljs.core.Keyword(null,"pcy","pcy",-1228409588),pcy,new cljs.core.Keyword(null,"sr","sr",-2009815970),sr,new cljs.core.Keyword(null,"scxa","scxa",-1980316782),scxa,new cljs.core.Keyword(null,"scxb","scxb",-1613143470),scxb,new cljs.core.Keyword(null,"scy","scy",2144350732),scy], null);
});
shapes.dev.eyes = (function eyes(p__36650,dev_QMARK_){
var map__36652 = p__36650;
var map__36652__$1 = ((cljs.core.seq_QMARK_.call(null,map__36652))?cljs.core.apply.call(null,cljs.core.hash_map,map__36652):map__36652);
var measures = map__36652__$1;
var head_rx = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_height = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_cy = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?(head_rx / 2.5):(head_rx / (cljs.core.rand.call(null) + (2))));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var eye_cy_offset = (head_height / (20));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?head_cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,(head_cy - eye_cy_offset),(head_cy + eye_cy_offset))));
var rx_max = ((head_cx - eye_cxa) - (head_width / (40)));
var rx_min = (rx_max - (head_width / (20)));
var eye_rx = (cljs.core.truth_(dev_QMARK_)?(rx_min + ((rx_max - rx_min) / (8))):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?(head_height / (9)):(head_height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(6),(11),0.1))));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),eye_cxa,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),eye_cxb,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),eye_cy,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),eye_rx,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119),eye_ry], null));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__36653){
var map__36655 = p__36653;
var map__36655__$1 = ((cljs.core.seq_QMARK_.call(null,map__36655))?cljs.core.apply.call(null,cljs.core.hash_map,map__36655):map__36655);
var pr = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"pr","pr",-583594500));
var sr = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"sr","sr",-2009815970));
var eye_ry = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_cxb = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pcxa = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792));
var scy = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"scy","scy",2144350732));
var pcy = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"pcy","pcy",-1228409588));
var pcxb = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351));
var scxb = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"scxb","scxb",-1613143470));
var scxa = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"scxa","scxa",-1980316782));
var eye_cxa = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var eye_rx = cljs.core.get.call(null,map__36655__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"className": "eye", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("circle",{"className": "pupil", "cx": pcxa, "cy": pcy, "r": pr, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxa, "cy": scy, "r": sr, "stroke": "transparent"}),React.createElement("ellipse",{"className": "eye", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("circle",{"className": "pupil", "cx": pcxb, "cy": pcy, "r": pr, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "shine", "cx": scxb, "cy": scy, "r": sr, "stroke": "transparent"}));
});
shapes.dev.nose = (function nose(dev_QMARK_){
return null;
});
shapes.dev.face = (function face(dev_QMARK_){
var cx = (400);
var cy = (150);
var width = (cljs.core.truth_(dev_QMARK_)?(150):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(100),(200),0.1)));
var height = (cljs.core.truth_(dev_QMARK_)?(200):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(150),(200),0.1)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),cx,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),cy,new cljs.core.Keyword(null,"head-width","head-width",-652130664),width,new cljs.core.Keyword(null,"head-height","head-height",1646756657),height,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),(width / (2)),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),(height / (2))], null);
});

var ufv___36675 = schema.utils.use_fn_validation;
var output_schema36657_36676 = schema.core.Any;
var input_schema36658_36677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker36659_36678 = schema.core.checker.call(null,input_schema36658_36677);
var output_checker36660_36679 = schema.core.checker.call(null,output_schema36657_36676);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function app(G__36661,G__36662){
var validate__17001__auto__ = ufv___36675.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___36680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36661,G__36662], null);
var temp__4406__auto___36681 = input_checker36659_36678.call(null,args__17002__auto___36680);
if(cljs.core.truth_(temp__4406__auto___36681)){
var error__17003__auto___36682 = temp__4406__auto___36681;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___36682)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___36682,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___36680,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36658_36677,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__36661;
var owner = G__36662;
while(true){
if(typeof shapes.dev.t36669 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t36669 = (function (input_schema36658,output_schema36657,owner,data,output_checker36660,G__36661,G__36662,validate__17001__auto__,input_checker36659,app,ufv__,meta36670){
this.input_schema36658 = input_schema36658;
this.output_schema36657 = output_schema36657;
this.owner = owner;
this.data = data;
this.output_checker36660 = output_checker36660;
this.G__36661 = G__36661;
this.G__36662 = G__36662;
this.validate__17001__auto__ = validate__17001__auto__;
this.input_checker36659 = input_checker36659;
this.app = app;
this.ufv__ = ufv__;
this.meta36670 = meta36670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t36669.prototype.om$core$IDisplayName$ = true;

shapes.dev.t36669.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

shapes.dev.t36669.prototype.om$core$IRenderState$ = true;

shapes.dev.t36669.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (_,p__36672){
var self__ = this;
var map__36673 = p__36672;
var map__36673__$1 = ((cljs.core.seq_QMARK_.call(null,map__36673))?cljs.core.apply.call(null,cljs.core.hash_map,map__36673):map__36673);
var measurements = cljs.core.get.call(null,map__36673__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("h1",{"style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},(cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__36673,map__36673__$1,measurements,validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1,map__36673,map__36673__$1,measurements,validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
}),React.createElement("rect",{"className": "dev-mode-on", "x": (10), "y": (0), "width": (100), "height": (50), "fill": "green", "onClick": ((function (___$1,map__36673,map__36673__$1,measurements,validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1,map__36673,map__36673__$1,measurements,validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
}),React.createElement("rect",{"className": "dev-mode-off", "x": (10), "y": (60), "width": (100), "height": (50), "fill": "red", "onClick": ((function (___$1,map__36673,map__36673__$1,measurements,validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
});})(___$1,map__36673,map__36673__$1,measurements,validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
}),sablono.interpreter.interpret.call(null,(function (){var map__36674 = measurements;
var map__36674__$1 = ((cljs.core.seq_QMARK_.call(null,map__36674))?cljs.core.apply.call(null,cljs.core.hash_map,map__36674):map__36674);
var head_height = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_ry = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),head_cx,new cljs.core.Keyword(null,"cy","cy",755331060),head_cy,new cljs.core.Keyword(null,"rx","rx",1627208482),head_rx,new cljs.core.Keyword(null,"ry","ry",-334598563),head_ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data)))], null);
})())));
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

shapes.dev.t36669.prototype.om$core$IInitState$ = true;

shapes.dev.t36669.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))], null);
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

shapes.dev.t36669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (_36671){
var self__ = this;
var _36671__$1 = this;
return self__.meta36670;
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

shapes.dev.t36669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (_36671,meta36670__$1){
var self__ = this;
var _36671__$1 = this;
return (new shapes.dev.t36669(self__.input_schema36658,self__.output_schema36657,self__.owner,self__.data,self__.output_checker36660,self__.G__36661,self__.G__36662,self__.validate__17001__auto__,self__.input_checker36659,self__.app,self__.ufv__,meta36670__$1));
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

shapes.dev.t36669.cljs$lang$type = true;

shapes.dev.t36669.cljs$lang$ctorStr = "shapes.dev/t36669";

shapes.dev.t36669.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t36669");
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

shapes.dev.__GT_t36669 = ((function (validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679){
return (function __GT_t36669(input_schema36658__$1,output_schema36657__$1,owner__$1,data__$1,output_checker36660__$1,G__36661__$1,G__36662__$1,validate__17001__auto____$1,input_checker36659__$1,app__$1,ufv____$1,meta36670){
return (new shapes.dev.t36669(input_schema36658__$1,output_schema36657__$1,owner__$1,data__$1,output_checker36660__$1,G__36661__$1,G__36662__$1,validate__17001__auto____$1,input_checker36659__$1,app__$1,ufv____$1,meta36670));
});})(validate__17001__auto__,ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

}

return (new shapes.dev.t36669(input_schema36658_36677,output_schema36657_36676,owner,data,output_checker36660_36679,G__36661,G__36662,validate__17001__auto__,input_checker36659_36678,app,ufv___36675,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___36683 = output_checker36660_36679.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___36683)){
var error__17003__auto___36684 = temp__4406__auto___36683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___36684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___36684,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36657_36676,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___36675,output_schema36657_36676,input_schema36658_36677,input_checker36659_36678,output_checker36660_36679))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema36657_36676,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36658_36677], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m36656){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m36656);
});
__GT_app = function(cursor__18789__auto__,m36656){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m36656);
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