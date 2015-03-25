// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.dev');
goog.require('cljs.core');
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
var G__47805__i = 0, G__47805__a = new Array(arguments.length -  0);
while (G__47805__i < G__47805__a.length) {G__47805__a[G__47805__i] = arguments[G__47805__i + 0]; ++G__47805__i;}
  content = new cljs.core.IndexedSeq(G__47805__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__47806){
var content = cljs.core.seq(arglist__47806);
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
shapes.dev.println.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"a","a",-2123407586),a,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"k","k",-2146297393),k], null));

var max_offset = (k + shapes.dev.sqrt.call(null,(shapes.dev.square.call(null,b) * ((1) - (shapes.dev.square.call(null,(x - h)) / shapes.dev.square.call(null,a))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(- max_offset),new cljs.core.Keyword(null,"max","max",61366548),max_offset], null);
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, development!"], null));
}
shapes.dev.pupils = (function pupils(p__47807,dev_QMARK_){
var map__47809 = p__47807;
var map__47809__$1 = ((cljs.core.seq_QMARK_.call(null,map__47809))?cljs.core.apply.call(null,cljs.core.hash_map,map__47809):map__47809);
var measures = map__47809__$1;
var eye_ry = cljs.core.get.call(null,map__47809__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_rx = cljs.core.get.call(null,map__47809__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_cy = cljs.core.get.call(null,map__47809__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__47809__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__47809__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var r_max = (function (){var x__14768__auto__ = (function (){var x__14768__auto__ = eye_rx;
var y__14769__auto__ = eye_ry;
return ((x__14768__auto__ < y__14769__auto__) ? x__14768__auto__ : y__14769__auto__);
})();
var y__14769__auto__ = ((function (){var x__14761__auto__ = eye_rx;
var y__14762__auto__ = eye_ry;
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})() - ((function (){var x__14761__auto__ = eye_rx;
var y__14762__auto__ = eye_ry;
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})() / (3)));
return ((x__14768__auto__ < y__14769__auto__) ? x__14768__auto__ : y__14769__auto__);
})();
var r_min = (5);
var pupil_r = (cljs.core.truth_(dev_QMARK_)?((r_min + r_max) / (2)):cljs.core.rand_nth.call(null,cljs.core.range.call(null,r_min,r_max,0.1)));
var pupil_c_measures = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(eye_rx - pupil_r),new cljs.core.Keyword(null,"ry","ry",-334598563),(eye_ry - pupil_r)], null);
var pupil_cx_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (eye_rx - pupil_r)),(eye_rx - pupil_r),0.1));
var pupil_cxa = (cljs.core.truth_(dev_QMARK_)?eye_cxa:(eye_cxa + pupil_cx_offset));
var pupil_cxb = (cljs.core.truth_(dev_QMARK_)?eye_cxb:(eye_cxb + pupil_cx_offset));
var pupil_cy_limits = shapes.dev.ys_within_ellipse.call(null,pupil_cx_offset,new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(pupil_c_measures));
var pupil_cy = (cljs.core.truth_(dev_QMARK_)?eye_cy:((((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))) && ((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))))?shapes.dev.println.call(null,"Got 0 0: ","original args:",measures,"passed to pupil-cy-limits: ",pupil_cx_offset,pupil_c_measures):(eye_cy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),0.1)))
));
var highlight_r = (cljs.core.truth_(dev_QMARK_)?(pupil_r / 3.75):(pupil_r / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(3),(5),0.1))));
var highlight_cxa = ((pupil_cxa + pupil_r) - ((2) * highlight_r));
var highlight_cxb = ((pupil_cxb + pupil_r) - ((2) * highlight_r));
var highlight_cy = ((pupil_cy - pupil_r) + ((2) * highlight_r));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),pupil_r,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),pupil_cxa,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),pupil_cxb,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),pupil_cy,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),highlight_r,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),highlight_cxa,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),highlight_cxb,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),highlight_cy], null);
});
shapes.dev.eyes = (function eyes(p__47810,dev_QMARK_){
var map__47812 = p__47810;
var map__47812__$1 = ((cljs.core.seq_QMARK_.call(null,map__47812))?cljs.core.apply.call(null,cljs.core.hash_map,map__47812):map__47812);
var measures = map__47812__$1;
var head_ry = cljs.core.get.call(null,map__47812__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__47812__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_height = cljs.core.get.call(null,map__47812__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__47812__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_cy = cljs.core.get.call(null,map__47812__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__47812__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?(head_rx / 2.5):(head_rx / cljs.core.rand_nth.call(null,cljs.core.range.call(null,1.8,(4),0.1))));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var eye_cy_offset = (head_height / (10));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?head_cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,(head_cy - eye_cy_offset),(head_cy + eye_cy_offset),0.1)));
var rx_max = (head_cx - eye_cxa);
var rx_min = (head_width / (15));
var eye_rx = (cljs.core.truth_(dev_QMARK_)?(rx_min + ((rx_max - rx_min) / (8))):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var eye_to_chin = ((head_cy + head_ry) - eye_cy);
var ry_max = (eye_to_chin - (head_height / (6)));
var ry_min = (head_height / (20));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?cljs.core.rand_nth.call(null,cljs.core.range.call(null,ry_min,ry_max,0.1)):cljs.core.rand_nth.call(null,cljs.core.range.call(null,ry_min,ry_max,0.1)));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),eye_cxa,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),eye_cxb,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),eye_cy,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),eye_rx,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119),eye_ry], null));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__47813){
var map__47815 = p__47813;
var map__47815__$1 = ((cljs.core.seq_QMARK_.call(null,map__47815))?cljs.core.apply.call(null,cljs.core.hash_map,map__47815):map__47815);
var eye_ry = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var highlight_cxb = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662));
var eye_cxb = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var pupil_cy = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var highlight_cxa = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206));
var highlight_r = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851));
var eye_cxa = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pupil_cxb = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403));
var eye_rx = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var pupil_cxa = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686));
var highlight_cy = cljs.core.get.call(null,map__47815__$1,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"className": "eye", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("circle",{"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"}),React.createElement("ellipse",{"className": "eye", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("circle",{"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "strokeAlpha": "0.5", "fill": "black"}));
});
shapes.dev.nose = (function nose(p__47816,dev_QMARK_){
var map__47818 = p__47816;
var map__47818__$1 = ((cljs.core.seq_QMARK_.call(null,map__47818))?cljs.core.apply.call(null,cljs.core.hash_map,map__47818):map__47818);
var measures = map__47818__$1;
var eye_cy = cljs.core.get.call(null,map__47818__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__47818__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__47818__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var head_cy = cljs.core.get.call(null,map__47818__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__47818__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var nose_x = head_cx;
return cljs.core.merge.call(null,measures);
});
shapes.dev.head = (function head(p__47819,dev_QMARK_){
var map__47821 = p__47819;
var map__47821__$1 = ((cljs.core.seq_QMARK_.call(null,map__47821))?cljs.core.apply.call(null,cljs.core.hash_map,map__47821):map__47821);
var height = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__47821__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),cx,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),cy,new cljs.core.Keyword(null,"head-width","head-width",-652130664),width,new cljs.core.Keyword(null,"head-height","head-height",1646756657),height,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),(width / (2)),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),(height / (2))], null);
});
shapes.dev.basic_measurements = (function basic_measurements(dev_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(400),new cljs.core.Keyword(null,"cy","cy",755331060),(150),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(dev_QMARK_)?(150):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(100),(225),0.1))),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(dev_QMARK_)?(200):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(150),(250),0.1)))], null);
});
/**
* @param {...*} var_args
*/
shapes.dev.face = (function() { 
var face__delegate = function (dev_QMARK_,p__47822){
var map__47824 = p__47822;
var map__47824__$1 = ((cljs.core.seq_QMARK_.call(null,map__47824))?cljs.core.apply.call(null,cljs.core.hash_map,map__47824):map__47824);
var proportional_QMARK_ = cljs.core.get.call(null,map__47824__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
} else {
return shapes.dev.nose.call(null,shapes.dev.eyes.call(null,shapes.dev.head.call(null,shapes.dev.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
}
};
var face = function (dev_QMARK_,var_args){
var p__47822 = null;
if (arguments.length > 1) {
var G__47825__i = 0, G__47825__a = new Array(arguments.length -  1);
while (G__47825__i < G__47825__a.length) {G__47825__a[G__47825__i] = arguments[G__47825__i + 1]; ++G__47825__i;}
  p__47822 = new cljs.core.IndexedSeq(G__47825__a,0);
} 
return face__delegate.call(this,dev_QMARK_,p__47822);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__47826){
var dev_QMARK_ = cljs.core.first(arglist__47826);
var p__47822 = cljs.core.rest(arglist__47826);
return face__delegate(dev_QMARK_,p__47822);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;

var ufv___47846 = schema.utils.use_fn_validation;
var output_schema47828_47847 = schema.core.Any;
var input_schema47829_47848 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker47830_47849 = schema.core.checker.call(null,input_schema47829_47848);
var output_checker47831_47850 = schema.core.checker.call(null,output_schema47828_47847);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function app(G__47832,G__47833){
var validate__17001__auto__ = ufv___47846.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___47851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47832,G__47833], null);
var temp__4406__auto___47852 = input_checker47830_47849.call(null,args__17002__auto___47851);
if(cljs.core.truth_(temp__4406__auto___47852)){
var error__17003__auto___47853 = temp__4406__auto___47852;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___47853)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___47853,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___47851,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47829_47848,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__47832;
var owner = G__47833;
while(true){
if(typeof shapes.dev.t47840 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t47840 = (function (owner,data,output_schema47828,input_schema47829,G__47832,G__47833,validate__17001__auto__,output_checker47831,input_checker47830,app,ufv__,meta47841){
this.owner = owner;
this.data = data;
this.output_schema47828 = output_schema47828;
this.input_schema47829 = input_schema47829;
this.G__47832 = G__47832;
this.G__47833 = G__47833;
this.validate__17001__auto__ = validate__17001__auto__;
this.output_checker47831 = output_checker47831;
this.input_checker47830 = input_checker47830;
this.app = app;
this.ufv__ = ufv__;
this.meta47841 = meta47841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t47840.prototype.om$core$IDisplayName$ = true;

shapes.dev.t47840.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

shapes.dev.t47840.prototype.om$core$IRenderState$ = true;

shapes.dev.t47840.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (_,p__47843){
var self__ = this;
var map__47844 = p__47843;
var map__47844__$1 = ((cljs.core.seq_QMARK_.call(null,map__47844))?cljs.core.apply.call(null,cljs.core.hash_map,map__47844):map__47844);
var measurements = cljs.core.get.call(null,map__47844__$1,new cljs.core.Keyword(null,"measurements","measurements",82224007));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("h1",{"style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},(cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__47844,map__47844__$1,measurements,validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
});})(___$1,map__47844,map__47844__$1,measurements,validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
}),React.createElement("rect",{"className": "dev-mode-on", "x": (10), "y": (0), "width": (100), "height": (50), "fill": "green", "onClick": ((function (___$1,map__47844,map__47844__$1,measurements,validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
});})(___$1,map__47844,map__47844__$1,measurements,validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
}),React.createElement("rect",{"className": "dev-mode-off", "x": (10), "y": (60), "width": (100), "height": (50), "fill": "red", "onClick": ((function (___$1,map__47844,map__47844__$1,measurements,validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
});})(___$1,map__47844,map__47844__$1,measurements,validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
}),sablono.interpreter.interpret.call(null,(function (){var map__47845 = measurements;
var map__47845__$1 = ((cljs.core.seq_QMARK_.call(null,map__47845))?cljs.core.apply.call(null,cljs.core.hash_map,map__47845):map__47845);
var head_height = cljs.core.get.call(null,map__47845__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__47845__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_ry = cljs.core.get.call(null,map__47845__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__47845__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__47845__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__47845__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),head_cx,new cljs.core.Keyword(null,"cy","cy",755331060),head_cy,new cljs.core.Keyword(null,"rx","rx",1627208482),head_rx,new cljs.core.Keyword(null,"ry","ry",-334598563),head_ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,measurements,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data)))], null);
})())));
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

shapes.dev.t47840.prototype.om$core$IInitState$ = true;

shapes.dev.t47840.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false], null);
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

shapes.dev.t47840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (_47842){
var self__ = this;
var _47842__$1 = this;
return self__.meta47841;
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

shapes.dev.t47840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (_47842,meta47841__$1){
var self__ = this;
var _47842__$1 = this;
return (new shapes.dev.t47840(self__.owner,self__.data,self__.output_schema47828,self__.input_schema47829,self__.G__47832,self__.G__47833,self__.validate__17001__auto__,self__.output_checker47831,self__.input_checker47830,self__.app,self__.ufv__,meta47841__$1));
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

shapes.dev.t47840.cljs$lang$type = true;

shapes.dev.t47840.cljs$lang$ctorStr = "shapes.dev/t47840";

shapes.dev.t47840.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t47840");
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

shapes.dev.__GT_t47840 = ((function (validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850){
return (function __GT_t47840(owner__$1,data__$1,output_schema47828__$1,input_schema47829__$1,G__47832__$1,G__47833__$1,validate__17001__auto____$1,output_checker47831__$1,input_checker47830__$1,app__$1,ufv____$1,meta47841){
return (new shapes.dev.t47840(owner__$1,data__$1,output_schema47828__$1,input_schema47829__$1,G__47832__$1,G__47833__$1,validate__17001__auto____$1,output_checker47831__$1,input_checker47830__$1,app__$1,ufv____$1,meta47841));
});})(validate__17001__auto__,ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

}

return (new shapes.dev.t47840(owner,data,output_schema47828_47847,input_schema47829_47848,G__47832,G__47833,validate__17001__auto__,output_checker47831_47850,input_checker47830_47849,app,ufv___47846,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___47854 = output_checker47831_47850.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___47854)){
var error__17003__auto___47855 = temp__4406__auto___47854;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___47855)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___47855,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47828_47847,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___47846,output_schema47828_47847,input_schema47829_47848,input_checker47830_47849,output_checker47831_47850))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema47828_47847,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47829_47848], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m47827){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m47827);
});
__GT_app = function(cursor__18789__auto__,m47827){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m47827);
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