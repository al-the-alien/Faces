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
var G__108831__i = 0, G__108831__a = new Array(arguments.length -  0);
while (G__108831__i < G__108831__a.length) {G__108831__a[G__108831__i] = arguments[G__108831__i + 0]; ++G__108831__i;}
  content = new cljs.core.IndexedSeq(G__108831__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__108832){
var content = cljs.core.seq(arglist__108832);
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
var G__108833__i = 0, G__108833__a = new Array(arguments.length -  0);
while (G__108833__i < G__108833__a.length) {G__108833__a[G__108833__i] = arguments[G__108833__i + 0]; ++G__108833__i;}
  xs = new cljs.core.IndexedSeq(G__108833__a,0);
} 
return avg__delegate.call(this,xs);};
avg.cljs$lang$maxFixedArity = 0;
avg.cljs$lang$applyTo = (function (arglist__108834){
var xs = cljs.core.seq(arglist__108834);
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
shapes.dev.pupils = (function pupils(p__108835,dev_QMARK_){
var map__108837 = p__108835;
var map__108837__$1 = ((cljs.core.seq_QMARK_.call(null,map__108837))?cljs.core.apply.call(null,cljs.core.hash_map,map__108837):map__108837);
var measures = map__108837__$1;
var eye_ry = cljs.core.get.call(null,map__108837__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_rx = cljs.core.get.call(null,map__108837__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_cy = cljs.core.get.call(null,map__108837__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__108837__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__108837__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
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
var pupil_cy = (cljs.core.truth_(dev_QMARK_)?eye_cy:((((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))) && ((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))))?eye_cy:(eye_cy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),0.1)))
));
var highlight_r = (cljs.core.truth_(dev_QMARK_)?(pupil_r / shapes.dev.avg.call(null,(2),(6))):(pupil_r / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(6),0.1))));
var highlight_offset = shapes.dev.xy_on_circle.call(null,(pupil_r - highlight_r));
var highlight_cxa = (pupil_cxa + highlight_offset);
var highlight_cxb = (pupil_cxb + highlight_offset);
var highlight_cy = (pupil_cy - highlight_offset);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),pupil_r,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),pupil_cxa,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),pupil_cxb,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),pupil_cy,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),highlight_r,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),highlight_cxa,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),highlight_cxb,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),highlight_cy], null);
});
shapes.dev.eyes = (function eyes(p__108838,dev_QMARK_){
var map__108840 = p__108838;
var map__108840__$1 = ((cljs.core.seq_QMARK_.call(null,map__108840))?cljs.core.apply.call(null,cljs.core.hash_map,map__108840):map__108840);
var measures = map__108840__$1;
var head_ry = cljs.core.get.call(null,map__108840__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__108840__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_height = cljs.core.get.call(null,map__108840__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__108840__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_cy = cljs.core.get.call(null,map__108840__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__108840__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var max_cx_off = ((head_rx / (3)) * (2));
var min_cx_off = (head_rx / (6));
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,max_cx_off,min_cx_off):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cx_off,max_cx_off,0.1)));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var min_cy = (head_cy - (0.4 * head_ry));
var max_cy = (head_cy + (head_height / (6)));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_cy,max_cy):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cy,max_cy,0.1)));
var rx_max = (head_cx - eye_cxa);
var rx_min = (head_width / (15));
var eye_rx = rx_max;
var eye_to_chin = ((head_cy + head_ry) - eye_cy);
var ry_max = (eye_to_chin - (head_height / (6)));
var ry_min = (head_height / (20));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,ry_max,ry_min):cljs.core.rand_nth.call(null,cljs.core.range.call(null,ry_min,ry_max,0.1)));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),eye_cxa,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),eye_cxb,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),eye_cy,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),eye_rx,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119),eye_ry,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994),eye_cy,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929),eye_cxa,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011),eye_cxb], null));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__108841){
var map__108843 = p__108841;
var map__108843__$1 = ((cljs.core.seq_QMARK_.call(null,map__108843))?cljs.core.apply.call(null,cljs.core.hash_map,map__108843):map__108843);
var eye_ry = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var highlight_cxb = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662));
var eye_cxb = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var pupil_cy = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var highlight_cxa = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206));
var highlight_r = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851));
var eye_cxa = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pupil_cxb = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403));
var eye_rx = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var pupil_cxa = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686));
var highlight_cy = cljs.core.get.call(null,map__108843__$1,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681));
return React.createElement("g",{"className": "eyes"},React.createElement("defs",null,React.createElement("clippath",{"id": "eye-a"},React.createElement("ellipse",{"cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry})),React.createElement("clippath",{"id": "eye-b"},React.createElement("ellipse",{"cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}))),React.createElement("ellipse",{"className": "eye", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-a", "style": {"clipPath": "url(#eye-a)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})),React.createElement("ellipse",{"className": "eye", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-b", "style": {"clipPath": "url(#eye-b)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "strokeAlpha": "0.5", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})));
});
shapes.dev.nose = (function nose(p__108844,dev_QMARK_){
var map__108846 = p__108844;
var map__108846__$1 = ((cljs.core.seq_QMARK_.call(null,map__108846))?cljs.core.apply.call(null,cljs.core.hash_map,map__108846):map__108846);
var measures = map__108846__$1;
var head_rx = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var mouth_y = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"mouth-y","mouth-y",1691079390));
var eye_ry = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_cxb = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var head_ry = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var eye_cy = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var head_cx = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var pupil_cy = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var head_cy = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_height = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var eye_cxa = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var eye_rx = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var head_width = cljs.core.get.call(null,map__108846__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var nose_cx = head_cx;
var max_rx = (head_rx / (6));
var min_rx = (head_rx / (20));
var nose_rx = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,max_rx,min_rx):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_rx,max_rx,0.1)));
var max_ry = nose_rx;
var min_ry = (head_ry / (20));
var nose_ry = shapes.dev.avg.call(null,min_ry,max_ry)
;
var min_cy = (((eye_cy + eye_ry) + nose_ry) + (1));
var max_cy = (function (){var x__14761__auto__ = (min_cy + (1));
var y__14762__auto__ = ((head_cy + head_ry) - ((head_height / (10)) + nose_ry));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
var nose_cy = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_cy,max_cy):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cy,max_cy,0.1)));
var nose_clip_x = (nose_cx - ((2) * nose_rx));
var nose_clip_width = ((4) * nose_rx);
var nose_clip_y = ((nose_cy - nose_ry) + (nose_ry / (2)));
var nose_clip_height = (nose_clip_y + ((3) * nose_ry));
return cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nose-cx","nose-cx",-829610592),new cljs.core.Keyword(null,"nose-rx","nose-rx",-663834303),new cljs.core.Keyword(null,"nose-clip-y","nose-clip-y",1507747585),new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138),new cljs.core.Keyword(null,"nose-clip-width","nose-clip-width",1579765635),new cljs.core.Keyword(null,"nose-ry","nose-ry",-556167034),new cljs.core.Keyword(null,"nose-clip-x","nose-clip-x",-3213839),new cljs.core.Keyword(null,"nose-clip-height","nose-clip-height",-1703773324),new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673)],[nose_cx,nose_rx,nose_clip_y,nose_cy,nose_clip_width,nose_ry,nose_clip_x,nose_clip_height,(nose_cy + nose_ry)]));
});
shapes.dev.draw_nose = (function draw_nose(p__108847){
var map__108849 = p__108847;
var map__108849__$1 = ((cljs.core.seq_QMARK_.call(null,map__108849))?cljs.core.apply.call(null,cljs.core.hash_map,map__108849):map__108849);
var nose_clip_height = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-clip-height","nose-clip-height",-1703773324));
var nose_clip_width = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-clip-width","nose-clip-width",1579765635));
var nose_clip_y = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-clip-y","nose-clip-y",1507747585));
var nose_clip_x = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-clip-x","nose-clip-x",-3213839));
var nose_ry = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-ry","nose-ry",-556167034));
var nose_rx = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-rx","nose-rx",-663834303));
var nose_cy = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var nose_cx = cljs.core.get.call(null,map__108849__$1,new cljs.core.Keyword(null,"nose-cx","nose-cx",-829610592));
return React.createElement("g",{"className": "nose"},React.createElement("defs",null,React.createElement("clippath",{"id": "nose-bridge"},React.createElement("rect",{"x": nose_clip_x, "y": nose_clip_y, "width": nose_clip_x, "height": nose_clip_y}))),React.createElement("ellipse",{"cx": nose_cx, "cy": nose_cy, "rx": nose_rx, "ry": nose_ry, "style": {"clipPath": "url(#nose-bridge)"}}));
});
shapes.dev.mouth = (function mouth(p__108850,dev_QMARK_){
var map__108852 = p__108850;
var map__108852__$1 = ((cljs.core.seq_QMARK_.call(null,map__108852))?cljs.core.apply.call(null,cljs.core.hash_map,map__108852):map__108852);
var measures = map__108852__$1;
var head_rx = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var eye_ry = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var nose_cy = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var eye_cxb = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var head_ry = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var eye_cy = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var head_cx = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var head_cy = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_height = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var eye_cxa = cljs.core.get.call(null,map__108852__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var mouth_cx = head_cx;
var mouth_ry = (head_height / (20));
var min_cy = (((head_cy + head_ry) - (head_height / (20))) - mouth_ry);
var max_cy = (head_cy - head_ry);
var mouth_cy = min_cy;
var mouth_rx = (head_rx - (head_rx / (20)));
var lower_face_top = (eye_cy + eye_ry);
var lower_face_bottom = (head_cy + head_ry);
var lower_face = (lower_face_top - lower_face_bottom);
var min_ry = (head_ry - mouth_cy);
var max_ry = (head_ry - (head_ry / (4)));
var mouth_clip_x = eye_cxa;
var mouth_clip_width = (eye_cxb - eye_cxa);
var mouth_clip_y = (mouth_cy + (mouth_ry / (2)));
var mouth_clip_height = head_height;
return cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"mouth-cx","mouth-cx",-1408973953),mouth_cx,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686),mouth_cy,new cljs.core.Keyword(null,"mouth-rx","mouth-rx",-1864884005),mouth_rx,new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801),mouth_ry,new cljs.core.Keyword(null,"mouth-clip-x","mouth-clip-x",-1176852240),mouth_clip_x,new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516),mouth_clip_y,new cljs.core.Keyword(null,"mouth-clip-width","mouth-clip-width",1861991800),mouth_clip_width,new cljs.core.Keyword(null,"mouth-clip-height","mouth-clip-height",1513269617),mouth_clip_height], null));
});
shapes.dev.draw_mouth = (function draw_mouth(p__108853){
var map__108855 = p__108853;
var map__108855__$1 = ((cljs.core.seq_QMARK_.call(null,map__108855))?cljs.core.apply.call(null,cljs.core.hash_map,map__108855):map__108855);
var mouth_clip_height = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-clip-height","mouth-clip-height",1513269617));
var mouth_clip_width = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-clip-width","mouth-clip-width",1861991800));
var mouth_clip_y = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516));
var mouth_clip_x = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-clip-x","mouth-clip-x",-1176852240));
var mouth_ry = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801));
var mouth_rx = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-rx","mouth-rx",-1864884005));
var mouth_cy = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686));
var mouth_cx = cljs.core.get.call(null,map__108855__$1,new cljs.core.Keyword(null,"mouth-cx","mouth-cx",-1408973953));
return React.createElement("g",{"className": "mouth"},React.createElement("defs",null,React.createElement("clippath",{"id": "mouth-clip"},React.createElement("rect",{"x": mouth_clip_x, "y": mouth_clip_y, "width": mouth_clip_width, "height": mouth_clip_height}))),React.createElement("ellipse",{"className": "mouth", "cx": mouth_cx, "cy": mouth_cy, "rx": mouth_rx, "ry": mouth_ry, "fill": "transparent", "style": {"clipPath": "url(#mouth-clip)"}}));
});
shapes.dev.head = (function head(p__108856,dev_QMARK_){
var map__108858 = p__108856;
var map__108858__$1 = ((cljs.core.seq_QMARK_.call(null,map__108858))?cljs.core.apply.call(null,cljs.core.hash_map,map__108858):map__108858);
var height = cljs.core.get.call(null,map__108858__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__108858__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__108858__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__108858__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
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
var face__delegate = function (dev_QMARK_,p__108859){
var map__108861 = p__108859;
var map__108861__$1 = ((cljs.core.seq_QMARK_.call(null,map__108861))?cljs.core.apply.call(null,cljs.core.hash_map,map__108861):map__108861);
var proportional_QMARK_ = cljs.core.get.call(null,map__108861__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
} else {
return shapes.dev.nose.call(null,shapes.dev.mouth.call(null,shapes.dev.eyes.call(null,shapes.dev.head.call(null,shapes.dev.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
}
};
var face = function (dev_QMARK_,var_args){
var p__108859 = null;
if (arguments.length > 1) {
var G__108862__i = 0, G__108862__a = new Array(arguments.length -  1);
while (G__108862__i < G__108862__a.length) {G__108862__a[G__108862__i] = arguments[G__108862__i + 1]; ++G__108862__i;}
  p__108859 = new cljs.core.IndexedSeq(G__108862__a,0);
} 
return face__delegate.call(this,dev_QMARK_,p__108859);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__108863){
var dev_QMARK_ = cljs.core.first(arglist__108863);
var p__108859 = cljs.core.rest(arglist__108863);
return face__delegate(dev_QMARK_,p__108859);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
shapes.dev.section_face = (function section_face(p__108864){
var map__108866 = p__108864;
var map__108866__$1 = ((cljs.core.seq_QMARK_.call(null,map__108866))?cljs.core.apply.call(null,cljs.core.hash_map,map__108866):map__108866);
var head_ry = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var vertical_b = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_b = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_a = cljs.core.get.call(null,map__108866__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
return React.createElement("g",{"id": "sections", "stroke": "lightgrey"},React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_a, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_a}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_b, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_b}),React.createElement("line",{"x1": vertical_a, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_a, "y2": ((head_cy + head_ry) + (5))}),React.createElement("line",{"x1": vertical_b, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_b, "y2": ((head_cy + head_ry) + (5))}));
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}
shapes.dev.dev_mode = (function dev_mode(data){
return React.createElement("g",{"id": "dev-mode", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}, "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (75), "y": (20), "textAnchor": "middle"},"Dev Mode Controls"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (25), "y": (35), "width": (100), "height": (50), "fill": "darkseagreen", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((35) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"On")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"className": "off-button", "x": (25), "y": (95), "width": (100), "height": (50), "fill": "indianred", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),false);
}
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((95) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Off")));
});
shapes.dev.pause_mode = (function pause_mode(data){
return React.createElement("g",{"id": "dev-mode", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("text",{"x": (75), "y": (195), "textAnchor": "middle"},"Control Changes"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (0), "y": (210), "width": (150), "height": (50), "fill": "darkseagreen", "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((210) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Resume changes")),React.createElement("g",{"id": "dev-mode-off"},React.createElement("rect",{"className": "off-button", "x": (0), "y": (270), "width": (150), "height": (50), "fill": "indianred", "onClick": (function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"paused?","paused?",-135058553),true);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((270) + (30)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Pause changes")));
});
shapes.dev.section_controls = (function section_controls(data){
return React.createElement("g",{"id": "sections-control", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("g",{"id": "sections-toggle"},React.createElement("rect",{"className": "toggle-button", "x": (0), "y": (400), "width": (150), "height": (50), "fill": "steelblue", "onClick": (function (){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"sections?","sections?",-879376311),cljs.core.not);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((30) + (400)), "textAnchor": "middle", "style": {"pointerEvents": "none"}},"Toggle sections")));
});

var ufv___108906 = schema.utils.use_fn_validation;
var output_schema108876_108907 = schema.core.Any;
var input_schema108877_108908 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker108878_108909 = schema.core.checker.call(null,input_schema108877_108908);
var output_checker108879_108910 = schema.core.checker.call(null,output_schema108876_108907);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function app(G__108880,G__108881){
var validate__17001__auto__ = ufv___108906.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___108911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__108880,G__108881], null);
var temp__4406__auto___108912 = input_checker108878_108909.call(null,args__17002__auto___108911);
if(cljs.core.truth_(temp__4406__auto___108912)){
var error__17003__auto___108913 = temp__4406__auto___108912;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___108913)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___108913,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___108911,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema108877_108908,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__108880;
var owner = G__108881;
while(true){
if(typeof shapes.dev.t108894 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t108894 = (function (input_schema108877,owner,data,input_checker108878,output_checker108879,validate__17001__auto__,G__108881,G__108880,app,ufv__,output_schema108876,meta108895){
this.input_schema108877 = input_schema108877;
this.owner = owner;
this.data = data;
this.input_checker108878 = input_checker108878;
this.output_checker108879 = output_checker108879;
this.validate__17001__auto__ = validate__17001__auto__;
this.G__108881 = G__108881;
this.G__108880 = G__108880;
this.app = app;
this.ufv__ = ufv__;
this.output_schema108876 = output_schema108876;
this.meta108895 = meta108895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t108894.prototype.om$core$IDisplayName$ = true;

shapes.dev.t108894.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

shapes.dev.t108894.prototype.om$core$IRender$ = true;

shapes.dev.t108894.prototype.om$core$IRender$render$arity$1 = ((function (validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("h1",{"display": "inline-block", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none", "maxHeight": (window.innerHeight / (8))}},sablono.interpreter.interpret.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))?"\t:\tChanges Paused":null))].join(''))),React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": (window.innerHeight - (window.innerHeight / (10))), "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
}),sablono.interpreter.interpret.call(null,shapes.dev.dev_mode.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.dev.section_controls.call(null,self__.data)),sablono.interpreter.interpret.call(null,(function (){var map__108897 = new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data);
var map__108897__$1 = ((cljs.core.seq_QMARK_.call(null,map__108897))?cljs.core.apply.call(null,cljs.core.hash_map,map__108897):map__108897);
var head_height = cljs.core.get.call(null,map__108897__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__108897__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_ry = cljs.core.get.call(null,map__108897__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__108897__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__108897__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__108897__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),head_cx,new cljs.core.Keyword(null,"cy","cy",755331060),head_cy,new cljs.core.Keyword(null,"rx","rx",1627208482),head_rx,new cljs.core.Keyword(null,"ry","ry",-334598563),head_ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),shapes.dev.draw_eyes.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)),shapes.dev.draw_nose.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)),shapes.dev.draw_mouth.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))], null);
})()),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (___$1,validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function iter__108898(s__108899){
return (new cljs.core.LazySeq(null,((function (___$1,validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (){
var s__108899__$1 = s__108899;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__108899__$1);
if(temp__4406__auto__){
var s__108899__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__108899__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__108899__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__108901 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__108900 = (0);
while(true){
if((i__108900 < size__15199__auto__)){
var vec__108904 = cljs.core._nth.call(null,c__15198__auto__,i__108900);
var i = cljs.core.nth.call(null,vec__108904,(0),null);
var color = cljs.core.nth.call(null,vec__108904,(1),null);
cljs.core.chunk_append.call(null,b__108901,React.createElement("g",{"className": "color"},React.createElement("rect",{"x": (i * (50)), "y": (340), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": (i * (50)), "y": ((340) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__108914 = (i__108900 + (1));
i__108900 = G__108914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__108901),iter__108898.call(null,cljs.core.chunk_rest.call(null,s__108899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__108901),null);
}
} else {
var vec__108905 = cljs.core.first.call(null,s__108899__$2);
var i = cljs.core.nth.call(null,vec__108905,(0),null);
var color = cljs.core.nth.call(null,vec__108905,(1),null);
return cljs.core.cons.call(null,React.createElement("g",{"className": "color"},React.createElement("rect",{"x": (i * (50)), "y": (340), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": (i * (50)), "y": ((340) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__108898.call(null,cljs.core.rest.call(null,s__108899__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
,null,null));
});})(___$1,validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;
return iter__15200__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,shapes.dev.color_scale));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null))));
});})(validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

shapes.dev.t108894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (_108896){
var self__ = this;
var _108896__$1 = this;
return self__.meta108895;
});})(validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

shapes.dev.t108894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (_108896,meta108895__$1){
var self__ = this;
var _108896__$1 = this;
return (new shapes.dev.t108894(self__.input_schema108877,self__.owner,self__.data,self__.input_checker108878,self__.output_checker108879,self__.validate__17001__auto__,self__.G__108881,self__.G__108880,self__.app,self__.ufv__,self__.output_schema108876,meta108895__$1));
});})(validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

shapes.dev.t108894.cljs$lang$type = true;

shapes.dev.t108894.cljs$lang$ctorStr = "shapes.dev/t108894";

shapes.dev.t108894.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t108894");
});})(validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

shapes.dev.__GT_t108894 = ((function (validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910){
return (function __GT_t108894(input_schema108877__$1,owner__$1,data__$1,input_checker108878__$1,output_checker108879__$1,validate__17001__auto____$1,G__108881__$1,G__108880__$1,app__$1,ufv____$1,output_schema108876__$1,meta108895){
return (new shapes.dev.t108894(input_schema108877__$1,owner__$1,data__$1,input_checker108878__$1,output_checker108879__$1,validate__17001__auto____$1,G__108881__$1,G__108880__$1,app__$1,ufv____$1,output_schema108876__$1,meta108895));
});})(validate__17001__auto__,ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

}

return (new shapes.dev.t108894(input_schema108877_108908,owner,data,input_checker108878_108909,output_checker108879_108910,validate__17001__auto__,G__108881,G__108880,app,ufv___108906,output_schema108876_108907,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___108915 = output_checker108879_108910.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___108915)){
var error__17003__auto___108916 = temp__4406__auto___108915;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___108916)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___108916,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema108876_108907,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___108906,output_schema108876_108907,input_schema108877_108908,input_checker108878_108909,output_checker108879_108910))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema108876_108907,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema108877_108908], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m108875){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m108875);
});
__GT_app = function(cursor__18789__auto__,m108875){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m108875);
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