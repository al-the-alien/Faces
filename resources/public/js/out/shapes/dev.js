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
shapes.dev.color_scale = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","lightgrey","darkgrey","grey","dimgrey","black"], null);
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
var G__82922__i = 0, G__82922__a = new Array(arguments.length -  0);
while (G__82922__i < G__82922__a.length) {G__82922__a[G__82922__i] = arguments[G__82922__i + 0]; ++G__82922__i;}
  content = new cljs.core.IndexedSeq(G__82922__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__82923){
var content = cljs.core.seq(arglist__82923);
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
/**
* @param {...*} var_args
*/
shapes.dev.avg = (function() { 
var avg__delegate = function (xs){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,xs) / cljs.core.count.call(null,xs));
};
var avg = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__82924__i = 0, G__82924__a = new Array(arguments.length -  0);
while (G__82924__i < G__82924__a.length) {G__82924__a[G__82924__i] = arguments[G__82924__i + 0]; ++G__82924__i;}
  xs = new cljs.core.IndexedSeq(G__82924__a,0);
} 
return avg__delegate.call(this,xs);};
avg.cljs$lang$maxFixedArity = 0;
avg.cljs$lang$applyTo = (function (arglist__82925){
var xs = cljs.core.seq(arglist__82925);
return avg__delegate(xs);
});
avg.cljs$core$IFn$_invoke$arity$variadic = avg__delegate;
return avg;
})()
;
shapes.dev.ys_within_ellipse = (function ys_within_ellipse(x,a,b,h,k){
var max_offset = (k + shapes.dev.sqrt.call(null,(shapes.dev.square.call(null,b) * ((1) - (shapes.dev.square.call(null,(x - h)) / shapes.dev.square.call(null,a))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(- max_offset),new cljs.core.Keyword(null,"max","max",61366548),max_offset], null);
});
shapes.dev.xy_on_circle = (function xy_on_circle(pupil_r){
return shapes.dev.sqrt.call(null,(shapes.dev.square.call(null,pupil_r) / (2)));
});
shapes.dev.pupils = (function pupils(p__82926,dev_QMARK_){
var map__82928 = p__82926;
var map__82928__$1 = ((cljs.core.seq_QMARK_.call(null,map__82928))?cljs.core.apply.call(null,cljs.core.hash_map,map__82928):map__82928);
var measures = map__82928__$1;
var eye_ry = cljs.core.get.call(null,map__82928__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_rx = cljs.core.get.call(null,map__82928__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_cy = cljs.core.get.call(null,map__82928__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__82928__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__82928__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
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
var pupil_cy = (cljs.core.truth_(dev_QMARK_)?eye_cy:((((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))) && ((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))))?(function (){
shapes.dev.println.call(null,"Got 0 0: ","original args:",measures,"passed to pupil-cy-limits: ",pupil_cx_offset,pupil_c_measures);

return eye_cy;
})()
:(eye_cy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),0.1)))
));
var highlight_r = (cljs.core.truth_(dev_QMARK_)?(pupil_r / shapes.dev.avg.call(null,(2),(6))):(pupil_r / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(6),0.1))));
var highlight_offset = shapes.dev.xy_on_circle.call(null,(pupil_r - highlight_r));
var highlight_cxa = (pupil_cxa + highlight_offset);
var highlight_cxb = (pupil_cxb + highlight_offset);
var highlight_cy = (pupil_cy - highlight_offset);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),pupil_r,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),pupil_cxa,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),pupil_cxb,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),pupil_cy,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),highlight_r,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),highlight_cxa,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),highlight_cxb,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),highlight_cy], null);
});
shapes.dev.eyes = (function eyes(p__82929,dev_QMARK_){
var map__82931 = p__82929;
var map__82931__$1 = ((cljs.core.seq_QMARK_.call(null,map__82931))?cljs.core.apply.call(null,cljs.core.hash_map,map__82931):map__82931);
var measures = map__82931__$1;
var head_ry = cljs.core.get.call(null,map__82931__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__82931__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_height = cljs.core.get.call(null,map__82931__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__82931__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_cy = cljs.core.get.call(null,map__82931__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__82931__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?(head_rx / 2.5):(head_rx / cljs.core.rand_nth.call(null,cljs.core.range.call(null,1.8,(4),0.1))));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var eye_cy_offset = (head_height / (10));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?head_cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,(head_cy - eye_cy_offset),(head_cy + eye_cy_offset),0.1)));
var rx_max = (head_cx - eye_cxa);
var rx_min = (head_width / (15));
var eye_rx = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,rx_max,rx_min):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var eye_to_chin = ((head_cy + head_ry) - eye_cy);
var ry_max = (eye_to_chin - (head_height / (6)));
var ry_min = (head_height / (20));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,ry_max,ry_min):cljs.core.rand_nth.call(null,cljs.core.range.call(null,ry_min,ry_max,0.1)));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),eye_cxa,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),eye_cxb,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),eye_cy,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),eye_rx,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119),eye_ry], null));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__82932){
var map__82934 = p__82932;
var map__82934__$1 = ((cljs.core.seq_QMARK_.call(null,map__82934))?cljs.core.apply.call(null,cljs.core.hash_map,map__82934):map__82934);
var eye_ry = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var highlight_cxb = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662));
var eye_cxb = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var pupil_cy = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var highlight_cxa = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206));
var highlight_r = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851));
var eye_cxa = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pupil_cxb = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403));
var eye_rx = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var pupil_cxa = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686));
var highlight_cy = cljs.core.get.call(null,map__82934__$1,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681));
return React.createElement("g",{"className": "eyes"},React.createElement("defs",null,React.createElement("clippath",{"id": "eye-a"},React.createElement("ellipse",{"cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry})),React.createElement("clippath",{"id": "eye-b"},React.createElement("ellipse",{"cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}))),React.createElement("ellipse",{"className": "eye", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-a", "style": {"clipPath": "url(#eye-a)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})),React.createElement("ellipse",{"className": "eye", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-b", "style": {"clipPath": "url(#eye-b)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "strokeAlpha": "0.5", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})));
});
shapes.dev.nose = (function nose(p__82935,dev_QMARK_){
var map__82937 = p__82935;
var map__82937__$1 = ((cljs.core.seq_QMARK_.call(null,map__82937))?cljs.core.apply.call(null,cljs.core.hash_map,map__82937):map__82937);
var measures = map__82937__$1;
var head_rx = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var mouth_y = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"mouth-y","mouth-y",1691079390));
var eye_ry = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_cxb = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var head_ry = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var eye_cy = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var head_cx = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var pupil_cy = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var head_cy = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_height = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var eye_cxa = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var eye_rx = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var head_width = cljs.core.get.call(null,map__82937__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var x_max_off = (head_rx / (8));
var x_min_off = (head_rx / (20));
var x_offset = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,x_max_off,x_min_off):cljs.core.rand_nth.call(null,cljs.core.range.call(null,x_min_off,x_max_off,0.1)));
var nose_x1 = (head_cx - x_offset);
var nose_x2 = (head_cx + x_offset);
var min_y = ((eye_cy + eye_ry) + (1));
var max_y = (mouth_y - (head_height / (15)));
var nose_y = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_y,max_y):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_y,max_y,0.1)));
var xc_max = (x_offset * (2));
var xc_min = x_offset;
var xc_offset = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,xc_min,xc_max):cljs.core.rand_nth.call(null,cljs.core.range.call(null,xc_min,xc_max,0.1)));
var nose_cx1 = (nose_x1 - xc_offset);
var nose_cx2 = (nose_x2 + xc_offset);
var min_cy = (head_height / (20));
var max_cy = (head_height / (10));
var nose_cy = (nose_y + (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_cy,max_cy):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cy,max_cy,0.1))));
return cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"nose-x1","nose-x1",-999546938),nose_x1,new cljs.core.Keyword(null,"nose-x2","nose-x2",1328787371),nose_x2,new cljs.core.Keyword(null,"nose-y","nose-y",-400547678),nose_y,new cljs.core.Keyword(null,"nose-cx1","nose-cx1",667146003),nose_cx1,new cljs.core.Keyword(null,"nose-cx2","nose-cx2",-1557681838),nose_cx2,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138),nose_cy], null));
});
shapes.dev.draw_nose = (function draw_nose(p__82938){
var map__82940 = p__82938;
var map__82940__$1 = ((cljs.core.seq_QMARK_.call(null,map__82940))?cljs.core.apply.call(null,cljs.core.hash_map,map__82940):map__82940);
var nose_cy = cljs.core.get.call(null,map__82940__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var nose_cx2 = cljs.core.get.call(null,map__82940__$1,new cljs.core.Keyword(null,"nose-cx2","nose-cx2",-1557681838));
var nose_cx1 = cljs.core.get.call(null,map__82940__$1,new cljs.core.Keyword(null,"nose-cx1","nose-cx1",667146003));
var nose_y = cljs.core.get.call(null,map__82940__$1,new cljs.core.Keyword(null,"nose-y","nose-y",-400547678));
var nose_x2 = cljs.core.get.call(null,map__82940__$1,new cljs.core.Keyword(null,"nose-x2","nose-x2",1328787371));
var nose_x1 = cljs.core.get.call(null,map__82940__$1,new cljs.core.Keyword(null,"nose-x1","nose-x1",-999546938));
return React.createElement("g",{"className": "nose"},React.createElement("path",{"className": "shadow", "d": [cljs.core.str("M "),cljs.core.str(nose_x1),cljs.core.str(" "),cljs.core.str((nose_y + (1))),cljs.core.str(" "),cljs.core.str(cljs.core.reduce.call(null,((function (map__82940,map__82940__$1,nose_cy,nose_cx2,nose_cx1,nose_y,nose_x2,nose_x1){
return (function (acc,s){
return [cljs.core.str(acc),cljs.core.str(" "),cljs.core.str(s)].join('');
});})(map__82940,map__82940__$1,nose_cy,nose_cx2,nose_cx1,nose_y,nose_x2,nose_x1))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",nose_cx1,(nose_cy + (3)),nose_cx2,(nose_cy + (3)),nose_x2,(nose_y + (1))], null)))].join(''), "stroke": "grey", "fill": "transparent"}),React.createElement("path",{"d": [cljs.core.str("M "),cljs.core.str(nose_x1),cljs.core.str(" "),cljs.core.str(nose_y),cljs.core.str(" "),cljs.core.str(cljs.core.reduce.call(null,((function (map__82940,map__82940__$1,nose_cy,nose_cx2,nose_cx1,nose_y,nose_x2,nose_x1){
return (function (acc,s){
return [cljs.core.str(acc),cljs.core.str(" "),cljs.core.str(s)].join('');
});})(map__82940,map__82940__$1,nose_cy,nose_cx2,nose_cx1,nose_y,nose_x2,nose_x1))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",nose_cx1,nose_cy,nose_cx2,nose_cy,nose_x2,nose_y], null)))].join(''), "stroke": "darkgrey", "fill": "white"}),React.createElement("path",{"className": "highlight", "d": [cljs.core.str("M "),cljs.core.str((nose_x1 + (1))),cljs.core.str(" "),cljs.core.str(nose_y),cljs.core.str(" "),cljs.core.str(cljs.core.reduce.call(null,((function (map__82940,map__82940__$1,nose_cy,nose_cx2,nose_cx1,nose_y,nose_x2,nose_x1){
return (function (acc,s){
return [cljs.core.str(acc),cljs.core.str(" "),cljs.core.str(s)].join('');
});})(map__82940,map__82940__$1,nose_cy,nose_cx2,nose_cx1,nose_y,nose_x2,nose_x1))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",nose_cx1,(nose_cy - (3)),nose_cx2,(nose_cy - (3)),nose_x2,nose_y], null)))].join(''), "stroke": "lightgrey", "fill": "white"}));
});
shapes.dev.mouth = (function mouth(p__82941,dev_QMARK_){
var map__82943 = p__82941;
var map__82943__$1 = ((cljs.core.seq_QMARK_.call(null,map__82943))?cljs.core.apply.call(null,cljs.core.hash_map,map__82943):map__82943);
var measures = map__82943__$1;
var nose_cy = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var eye_cxa = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var head_ry = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var head_height = cljs.core.get.call(null,map__82943__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var x_offset = ((head_cx - eye_cxa) / 1.5);
var mouth_x1 = (head_cx - x_offset);
var mouth_x2 = (head_cx + x_offset);
var max_y = ((head_cy + head_ry) - (head_height / (20)));
var mouth_y = ((head_cy + head_ry) - (head_height / (10)));
var mouth_cx1 = (mouth_x1 + (10));
var mouth_cx2 = (mouth_x2 - (10));
var mouth_cy = (mouth_y + (10));
return cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"mouth-x1","mouth-x1",-805478680),mouth_x1,new cljs.core.Keyword(null,"mouth-x2","mouth-x2",-412720501),mouth_x2,new cljs.core.Keyword(null,"mouth-y","mouth-y",1691079390),mouth_y,new cljs.core.Keyword(null,"mouth-cx1","mouth-cx1",1420685724),mouth_cx1,new cljs.core.Keyword(null,"mouth-cx2","mouth-cx2",-1685882207),mouth_cx2,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686),mouth_cy], null));
});
shapes.dev.draw_mouth = (function draw_mouth(p__82944){
var map__82946 = p__82944;
var map__82946__$1 = ((cljs.core.seq_QMARK_.call(null,map__82946))?cljs.core.apply.call(null,cljs.core.hash_map,map__82946):map__82946);
var mouth_cy = cljs.core.get.call(null,map__82946__$1,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686));
var mouth_cx2 = cljs.core.get.call(null,map__82946__$1,new cljs.core.Keyword(null,"mouth-cx2","mouth-cx2",-1685882207));
var mouth_cx1 = cljs.core.get.call(null,map__82946__$1,new cljs.core.Keyword(null,"mouth-cx1","mouth-cx1",1420685724));
var mouth_y = cljs.core.get.call(null,map__82946__$1,new cljs.core.Keyword(null,"mouth-y","mouth-y",1691079390));
var mouth_x2 = cljs.core.get.call(null,map__82946__$1,new cljs.core.Keyword(null,"mouth-x2","mouth-x2",-412720501));
var mouth_x1 = cljs.core.get.call(null,map__82946__$1,new cljs.core.Keyword(null,"mouth-x1","mouth-x1",-805478680));
return React.createElement("path",{"d": cljs.core.reduce.call(null,((function (map__82946,map__82946__$1,mouth_cy,mouth_cx2,mouth_cx1,mouth_y,mouth_x2,mouth_x1){
return (function (acc,s){
return [cljs.core.str(acc),cljs.core.str(" "),cljs.core.str(s)].join('');
});})(map__82946,map__82946__$1,mouth_cy,mouth_cx2,mouth_cx1,mouth_y,mouth_x2,mouth_x1))
,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",mouth_x1,mouth_y,"C",mouth_cx1,mouth_cy,mouth_cx2,mouth_cy,mouth_x2,mouth_y], null)), "stroke": "dimgrey", "fill": "transparent"});
});
shapes.dev.head = (function head(p__82947,dev_QMARK_){
var map__82949 = p__82947;
var map__82949__$1 = ((cljs.core.seq_QMARK_.call(null,map__82949))?cljs.core.apply.call(null,cljs.core.hash_map,map__82949):map__82949);
var height = cljs.core.get.call(null,map__82949__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__82949__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__82949__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__82949__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),cx,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),cy,new cljs.core.Keyword(null,"head-width","head-width",-652130664),width,new cljs.core.Keyword(null,"head-height","head-height",1646756657),height,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),(width / (2)),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),(height / (2))], null);
});
shapes.dev.basic_measurements = (function basic_measurements(dev_QMARK_){
var w = window.innerWidth;
var h = (window.innerHeight - (window.innerHeight / (10)));
var m = (function (){var x__14768__auto__ = w;
var y__14769__auto__ = h;
return ((x__14768__auto__ < y__14769__auto__) ? x__14768__auto__ : y__14769__auto__);
})();
var max_dimension = (function (){var x__14761__auto__ = (75);
var y__14762__auto__ = (m - (m / (10)));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
var min_dimension = (function (){var x__14761__auto__ = (75);
var y__14762__auto__ = (m / (2));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((w / (2)) + (50)),new cljs.core.Keyword(null,"cy","cy",755331060),((h / (2)) - (15)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_dimension,max_dimension):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_dimension,max_dimension,0.1))),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_dimension,max_dimension):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_dimension,max_dimension,0.1)))], null);
});
/**
* @param {...*} var_args
*/
shapes.dev.face = (function() { 
var face__delegate = function (dev_QMARK_,p__82950){
var map__82952 = p__82950;
var map__82952__$1 = ((cljs.core.seq_QMARK_.call(null,map__82952))?cljs.core.apply.call(null,cljs.core.hash_map,map__82952):map__82952);
var proportional_QMARK_ = cljs.core.get.call(null,map__82952__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
} else {
return shapes.dev.nose.call(null,shapes.dev.mouth.call(null,shapes.dev.eyes.call(null,shapes.dev.head.call(null,shapes.dev.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
}
};
var face = function (dev_QMARK_,var_args){
var p__82950 = null;
if (arguments.length > 1) {
var G__82953__i = 0, G__82953__a = new Array(arguments.length -  1);
while (G__82953__i < G__82953__a.length) {G__82953__a[G__82953__i] = arguments[G__82953__i + 1]; ++G__82953__i;}
  p__82950 = new cljs.core.IndexedSeq(G__82953__a,0);
} 
return face__delegate.call(this,dev_QMARK_,p__82950);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__82954){
var dev_QMARK_ = cljs.core.first(arglist__82954);
var p__82950 = cljs.core.rest(arglist__82954);
return face__delegate(dev_QMARK_,p__82950);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}
shapes.dev.dev_mode = (function dev_mode(data){
return React.createElement("g",{"id": "dev-mode", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}, "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (75), "y": (20), "textAnchor": "middle"},"Dev Mode Controls"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"x": (25), "y": (35), "width": (100), "height": (50), "fill": "green", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((35) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"On")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"x": (25), "y": (95), "width": (100), "height": (50), "fill": "red", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((95) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Off")));
});
shapes.dev.pause_mode = (function pause_mode(data){
return React.createElement("g",{"id": "dev-mode", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("text",{"x": (75), "y": (195), "textAnchor": "middle"},"Control Changes"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"x": (0), "y": (210), "width": (150), "height": (50), "fill": "green", "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((210) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Resume changes")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"x": (0), "y": (270), "width": (150), "height": (50), "fill": "red", "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),true);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((270) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Pause changes")));
});

var ufv___82994 = schema.utils.use_fn_validation;
var output_schema82964_82995 = schema.core.Any;
var input_schema82965_82996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker82966_82997 = schema.core.checker.call(null,input_schema82965_82996);
var output_checker82967_82998 = schema.core.checker.call(null,output_schema82964_82995);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function app(G__82968,G__82969){
var validate__17001__auto__ = ufv___82994.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___82999 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__82968,G__82969], null);
var temp__4406__auto___83000 = input_checker82966_82997.call(null,args__17002__auto___82999);
if(cljs.core.truth_(temp__4406__auto___83000)){
var error__17003__auto___83001 = temp__4406__auto___83000;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___83001)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___83001,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___82999,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema82965_82996,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__82968;
var owner = G__82969;
while(true){
if(typeof shapes.dev.t82982 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t82982 = (function (owner,data,G__82968,output_schema82964,validate__17001__auto__,input_schema82965,output_checker82967,input_checker82966,app,ufv__,G__82969,meta82983){
this.owner = owner;
this.data = data;
this.G__82968 = G__82968;
this.output_schema82964 = output_schema82964;
this.validate__17001__auto__ = validate__17001__auto__;
this.input_schema82965 = input_schema82965;
this.output_checker82967 = output_checker82967;
this.input_checker82966 = input_checker82966;
this.app = app;
this.ufv__ = ufv__;
this.G__82969 = G__82969;
this.meta82983 = meta82983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t82982.prototype.om$core$IDisplayName$ = true;

shapes.dev.t82982.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

shapes.dev.t82982.prototype.om$core$IRender$ = true;

shapes.dev.t82982.prototype.om$core$IRender$render$arity$1 = ((function (validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("h1",{"display": "inline-block", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none", "maxHeight": (window.innerHeight / (8))}},sablono.interpreter.interpret.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))?"\t:\tChanges Paused":null))].join(''))),React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": (window.innerHeight - (window.innerHeight / (10))), "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_mode.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,self__.data)),sablono.interpreter.interpret.call(null,(function (){var map__82985 = new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data);
var map__82985__$1 = ((cljs.core.seq_QMARK_.call(null,map__82985))?cljs.core.apply.call(null,cljs.core.hash_map,map__82985):map__82985);
var head_height = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_ry = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__82985__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),head_cx,new cljs.core.Keyword(null,"cy","cy",755331060),head_cy,new cljs.core.Keyword(null,"rx","rx",1627208482),head_rx,new cljs.core.Keyword(null,"ry","ry",-334598563),head_ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"dimgrey",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),shapes.dev.draw_eyes.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)),shapes.dev.draw_nose.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)),shapes.dev.draw_mouth.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))], null);
})()),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (___$1,validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function iter__82986(s__82987){
return (new cljs.core.LazySeq(null,((function (___$1,validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (){
var s__82987__$1 = s__82987;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__82987__$1);
if(temp__4406__auto__){
var s__82987__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__82987__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__82987__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__82989 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__82988 = (0);
while(true){
if((i__82988 < size__15199__auto__)){
var vec__82992 = cljs.core._nth.call(null,c__15198__auto__,i__82988);
var i = cljs.core.nth.call(null,vec__82992,(0),null);
var color = cljs.core.nth.call(null,vec__82992,(1),null);
cljs.core.chunk_append.call(null,b__82989,React.createElement("g",{"className": "color"},React.createElement("rect",{"x": (i * (50)), "y": (340), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": (i * (50)), "y": ((340) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__83002 = (i__82988 + (1));
i__82988 = G__83002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82989),iter__82986.call(null,cljs.core.chunk_rest.call(null,s__82987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__82989),null);
}
} else {
var vec__82993 = cljs.core.first.call(null,s__82987__$2);
var i = cljs.core.nth.call(null,vec__82993,(0),null);
var color = cljs.core.nth.call(null,vec__82993,(1),null);
return cljs.core.cons.call(null,React.createElement("g",{"className": "color"},React.createElement("rect",{"x": (i * (50)), "y": (340), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": (i * (50)), "y": ((340) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__82986.call(null,cljs.core.rest.call(null,s__82987__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
,null,null));
});})(___$1,validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;
return iter__15200__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,shapes.dev.color_scale));
})())));
});})(validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

shapes.dev.t82982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (_82984){
var self__ = this;
var _82984__$1 = this;
return self__.meta82983;
});})(validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

shapes.dev.t82982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (_82984,meta82983__$1){
var self__ = this;
var _82984__$1 = this;
return (new shapes.dev.t82982(self__.owner,self__.data,self__.G__82968,self__.output_schema82964,self__.validate__17001__auto__,self__.input_schema82965,self__.output_checker82967,self__.input_checker82966,self__.app,self__.ufv__,self__.G__82969,meta82983__$1));
});})(validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

shapes.dev.t82982.cljs$lang$type = true;

shapes.dev.t82982.cljs$lang$ctorStr = "shapes.dev/t82982";

shapes.dev.t82982.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t82982");
});})(validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

shapes.dev.__GT_t82982 = ((function (validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998){
return (function __GT_t82982(owner__$1,data__$1,G__82968__$1,output_schema82964__$1,validate__17001__auto____$1,input_schema82965__$1,output_checker82967__$1,input_checker82966__$1,app__$1,ufv____$1,G__82969__$1,meta82983){
return (new shapes.dev.t82982(owner__$1,data__$1,G__82968__$1,output_schema82964__$1,validate__17001__auto____$1,input_schema82965__$1,output_checker82967__$1,input_checker82966__$1,app__$1,ufv____$1,G__82969__$1,meta82983));
});})(validate__17001__auto__,ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

}

return (new shapes.dev.t82982(owner,data,G__82968,output_schema82964_82995,validate__17001__auto__,input_schema82965_82996,output_checker82967_82998,input_checker82966_82997,app,ufv___82994,G__82969,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___83003 = output_checker82967_82998.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___83003)){
var error__17003__auto___83004 = temp__4406__auto___83003;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___83004)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___83004,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema82964_82995,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___82994,output_schema82964_82995,input_schema82965_82996,input_checker82966_82997,output_checker82967_82998))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema82964_82995,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema82965_82996], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m82963){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m82963);
});
__GT_app = function(cursor__18789__auto__,m82963){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m82963);
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
shapes.dev.log = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[427.9891397849463,422.2258064516129,77.95,140.41,11.3,(400),176.70796311478782,383.53752688172045,2.825,(150),155.9,377.7741935483871,12.886666666666667,422.33913978494627,377.8875268817204,171.0579631147878,137.8,68.9,47.69500000000001])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[420.72907704042717,413.7105263157895,(109),160.5,12.5,(400),171.20768246309586,393.3080244088482,2.717391304347826,(150),(218),386.2894736842105,12.746666666666668,413.6638596491228,386.24280701754384,164.14246507179152,104.2,52.1,(24)])], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[434.470488006617,433.51612903225805,114.4,132.32,(15),(400),86.11881321592682,367.4382299421009,3.8461538461538463,(150),228.8,366.48387096774195,25.153333333333336,427.1627956989247,360.1305376344086,78.81112090823451,207.8,103.9,75.64]),new cljs.core.Keyword(null,"dev?","dev?",-613971064),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[437.0368421052632,434.7368421052632,123.6,147.18,8.1,(400),109.38395498118638,367.56315789473683,2.25,(150),247.2,365.2631578947368,10.5,433.43684210526317,363.9631578947368,105.78395498118638,(132),(66),58.06]),new cljs.core.Keyword(null,"paused?","paused?",-135058553),false,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[541.488997284937,535.7820512820513,238.2,239.26000000000002,19.3,(485),112.20185950713908,439.92489472083446,8.391304347826088,250.5,476.4,434.21794871794873,27.20666666666667,533.7753846153846,432.21128205128207,104.4882468375867,396.1,198.05,152.52]),new cljs.core.Keyword(null,"dev?","dev?",-613971064),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[555.488401878442,543.195652173913,191.6,232.08,20.8,(485),253.77114386069417,439.097097530616,4.622222222222223,250.5,383.2,426.80434782608694,22.546666666666667,544.0489855072464,427.6576811594203,242.33172748949846,267.7,133.85,48.66]),new cljs.core.Keyword(null,"dev?","dev?",-613971064),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[568.8747792522709,559.4761904761905,183.45,274.91,21.5,(485),341.4773586216767,419.92239829988984,6.71875,250.5,366.9,410.5238095238095,25.153333333333336,558.4228571428572,409.4704761904762,331.025436512263,312.8,156.4,97.14500000000001]),new cljs.core.Keyword(null,"dev?","dev?",-613971064),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[622.5849306357745,567.125,201.4,244.12,34.5,(485),244.10291102514523,458.33493063577447,12.777777777777777,250.5,402.8,402.875,76.1,607.225,442.975,228.74298038937079,328.5,164.25,34.94])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),new cljs.core.Keyword(null,"head-height","head-height",1646756657),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),new cljs.core.Keyword(null,"head-width","head-width",-652130664),new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[575.7300341936431,557.984375,176.75,253.15,44.5,(485),213.40163364971625,429.7612841936431,11.710526315789474,250.5,353.5,412.015625,51.64,552.544375,406.575625,190.21597445607313,467.1,233.55,109.575])], null)], null);

//# sourceMappingURL=dev.js.map