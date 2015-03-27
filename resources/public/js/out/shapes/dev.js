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
var G__166590__i = 0, G__166590__a = new Array(arguments.length -  0);
while (G__166590__i < G__166590__a.length) {G__166590__a[G__166590__i] = arguments[G__166590__i + 0]; ++G__166590__i;}
  content = new cljs.core.IndexedSeq(G__166590__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__166591){
var content = cljs.core.seq(arglist__166591);
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
shapes.dev.abs = (function abs(x){
return Math.abs.call(null,x);
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
var G__166592__i = 0, G__166592__a = new Array(arguments.length -  0);
while (G__166592__i < G__166592__a.length) {G__166592__a[G__166592__i] = arguments[G__166592__i + 0]; ++G__166592__i;}
  xs = new cljs.core.IndexedSeq(G__166592__a,0);
} 
return avg__delegate.call(this,xs);};
avg.cljs$lang$maxFixedArity = 0;
avg.cljs$lang$applyTo = (function (arglist__166593){
var xs = cljs.core.seq(arglist__166593);
return avg__delegate(xs);
});
avg.cljs$core$IFn$_invoke$arity$variadic = avg__delegate;
return avg;
})()
;
shapes.dev.x_on_ellipse = (function x_on_ellipse(y,cy,a,b){
return (a * shapes.dev.sqrt.call(null,shapes.dev.abs.call(null,((1) - shapes.dev.square.call(null,((cy - y) / b))))));
});
shapes.dev._x_on_ellipse = (function _x_on_ellipse(y,a,b,h,k){
return (h + (a * shapes.dev.sqrt.call(null,shapes.dev.abs.call(null,((1) - shapes.dev.square.call(null,((y - k) / b)))))));
});
shapes.dev.y_on_ellipse = (function y_on_ellipse(x,cx,a,b){
return (b * shapes.dev.sqrt.call(null,shapes.dev.abs.call(null,((1) - shapes.dev.square.call(null,((cx - x) / a))))));
});
shapes.dev.ys_within_ellipse = (function ys_within_ellipse(x,cx,a,b){
var max_y = shapes.dev.y_on_ellipse.call(null,x,cx,a,b);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(- max_y),new cljs.core.Keyword(null,"max","max",61366548),max_y], null);
});
shapes.dev.xy_on_circle = (function xy_on_circle(pupil_r){
return shapes.dev.sqrt.call(null,(shapes.dev.square.call(null,pupil_r) / (2)));
});
shapes.dev.pupils = (function pupils(p__166594,dev_QMARK_){
var map__166596 = p__166594;
var map__166596__$1 = ((cljs.core.seq_QMARK_.call(null,map__166596))?cljs.core.apply.call(null,cljs.core.hash_map,map__166596):map__166596);
var measures = map__166596__$1;
var eye_ry = cljs.core.get.call(null,map__166596__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_rx = cljs.core.get.call(null,map__166596__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_cy = cljs.core.get.call(null,map__166596__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_cxb = cljs.core.get.call(null,map__166596__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cxa = cljs.core.get.call(null,map__166596__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
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
var pupil_cy_limits = shapes.dev.ys_within_ellipse.call(null,pupil_cx_offset,(0),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(pupil_c_measures));
var pupil_cy = (cljs.core.truth_(dev_QMARK_)?eye_cy:((((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))) && ((new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) === (0))))?eye_cy:(eye_cy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),0.1)))
));
var highlight_r = (cljs.core.truth_(dev_QMARK_)?(pupil_r / shapes.dev.avg.call(null,(2),(6))):(pupil_r / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(6),0.1))));
var highlight_offset = shapes.dev.xy_on_circle.call(null,(pupil_r - highlight_r));
var highlight_cxa = (pupil_cxa + highlight_offset);
var highlight_cxb = (pupil_cxb + highlight_offset);
var highlight_cy = (pupil_cy - highlight_offset);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),pupil_r,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),pupil_cxa,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),pupil_cxb,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),pupil_cy,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),highlight_r,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),highlight_cxa,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),highlight_cxb,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),highlight_cy], null);
});
shapes.dev.eyes = (function eyes(p__166597,dev_QMARK_){
var map__166599 = p__166597;
var map__166599__$1 = ((cljs.core.seq_QMARK_.call(null,map__166599))?cljs.core.apply.call(null,cljs.core.hash_map,map__166599):map__166599);
var measures = map__166599__$1;
var head_ry = cljs.core.get.call(null,map__166599__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__166599__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_height = cljs.core.get.call(null,map__166599__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__166599__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_cy = cljs.core.get.call(null,map__166599__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__166599__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var max_cx_off = ((head_rx / (3)) * (2));
var min_cx_off = (head_rx / (6));
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,max_cx_off,min_cx_off):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cx_off,max_cx_off,0.1)));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var min_cy = (head_cy - (0.4 * head_ry));
var max_cy = (head_cy + (head_height / (6)));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_cy,max_cy):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cy,max_cy,0.1)));
var x_intersect = (head_cx - shapes.dev.x_on_ellipse.call(null,eye_cy,head_cy,head_rx,head_ry));
var x_intersect_off = (eye_cxa - x_intersect);
var rx_max = (function (){var x__14768__auto__ = (head_cx - eye_cxa);
var y__14769__auto__ = (x_intersect_off + (x_intersect_off / (4)));
return ((x__14768__auto__ < y__14769__auto__) ? x__14768__auto__ : y__14769__auto__);
})();
var rx_min = (head_width / (15));
var eye_rx = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,rx_max,rx_min):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var horizontal_a = eye_cy;
var head_top = (head_cy - head_ry);
var head_bottom = (head_cy + head_ry);
var above_a = (eye_cy - head_top);
var below_a = (head_bottom - eye_cy);
var y_max = (horizontal_a + (below_a / (2)));
var ry_max = (y_max - eye_cy);
var ry_min = (head_height / (20));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,ry_max,ry_min):cljs.core.rand_nth.call(null,cljs.core.range.call(null,ry_min,ry_max,0.1)));
var eye_map = cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929),new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994),new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673),new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011),new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119)],[eye_cxb,eye_cy,eye_cxa,horizontal_a,eye_cxa,eye_rx,(eye_cy + eye_ry),eye_cxb,eye_ry]));
return cljs.core.merge.call(null,eye_map,shapes.dev.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.dev.draw_eyes = (function draw_eyes(p__166600){
var map__166602 = p__166600;
var map__166602__$1 = ((cljs.core.seq_QMARK_.call(null,map__166602))?cljs.core.apply.call(null,cljs.core.hash_map,map__166602):map__166602);
var eye_ry = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var highlight_cxb = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662));
var eye_cxb = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var pupil_cy = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var highlight_cxa = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206));
var highlight_r = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851));
var eye_cxa = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pupil_cxb = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403));
var eye_rx = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var pupil_cxa = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686));
var highlight_cy = cljs.core.get.call(null,map__166602__$1,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681));
return React.createElement("g",{"className": "eyes"},React.createElement("defs",null,React.createElement("clippath",{"id": "eye-a"},React.createElement("ellipse",{"cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry})),React.createElement("clippath",{"id": "eye-b"},React.createElement("ellipse",{"cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}))),React.createElement("ellipse",{"className": "eye", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-a", "style": {"clipPath": "url(#eye-a)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})),React.createElement("ellipse",{"className": "eye", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)}),React.createElement("g",{"id": "inner-eye-b", "style": {"clipPath": "url(#eye-b)"}},React.createElement("circle",{"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "strokeAlpha": "0.5", "fill": "black"}),React.createElement("circle",{"className": "highlight", "cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"})));
});
shapes.dev.nose = (function nose(p__166603,dev_QMARK_){
var map__166605 = p__166603;
var map__166605__$1 = ((cljs.core.seq_QMARK_.call(null,map__166605))?cljs.core.apply.call(null,cljs.core.hash_map,map__166605):map__166605);
var measures = map__166605__$1;
var horizontal_b = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var vertical_b = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var head_rx = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var mouth_y = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"mouth-y","mouth-y",1691079390));
var eye_ry = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var eye_cxb = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var head_ry = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var eye_cy = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var head_cx = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var pupil_cy = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var vertical_a = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_a = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
var head_cy = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_height = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var eye_cxa = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var eye_rx = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var head_width = cljs.core.get.call(null,map__166605__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var nose_cx = head_cx;
var a_to_b = (vertical_b - vertical_a);
var max_rx = (a_to_b / (4));
var min_rx = (a_to_b / (12));
var nose_rx = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,max_rx,min_rx):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_rx,max_rx,0.1)));
var max_ry = nose_rx;
var min_ry = (head_ry / (20));
var nose_ry = shapes.dev.avg.call(null,min_ry,max_ry)
;
var min_cy = (horizontal_b + (1.5 * nose_ry));
var below_b = ((head_cy + head_ry) - horizontal_b);
var max_cy = (((head_cy + head_ry) - (below_b / (2))) - nose_ry);
var nose_cy = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_cy,max_cy):(((max_cy < min_cy))?max_cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cy,max_cy,0.1))
));
var min_bridge = nose_rx;
var max_bridge = (nose_rx + (nose_rx / 1.5));
var clip_bridge = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_bridge,max_bridge):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_bridge,max_bridge,0.05)));
var clip_width = ((4) * nose_rx);
var clip_height = ((4) * nose_ry);
var clip_x_a = ((head_cx - (clip_bridge / (2))) - clip_width);
var clip_x_b = (head_cx + (clip_bridge / (2)));
var clip_y_ab = (nose_cy - (clip_height / (2)));
var clip_x_c = (nose_cx - ((2) * nose_rx));
var clip_y_c = ((nose_cy + (1)) - shapes.dev.y_on_ellipse.call(null,(nose_cx + (clip_bridge / (2))),nose_cx,nose_rx,nose_ry));
var shadow_clip_y = (clip_y_c + (1));
return cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nose-cx","nose-cx",-829610592),new cljs.core.Keyword(null,"nose-rx","nose-rx",-663834303),new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138),new cljs.core.Keyword(null,"nose-shadow-clip-y","nose-shadow-clip-y",-1293866494),new cljs.core.Keyword(null,"nose-clip-width","nose-clip-width",1579765635),new cljs.core.Keyword(null,"nose-ry","nose-ry",-556167034),new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703),new cljs.core.Keyword(null,"a-to-b","a-to-b",504354032),new cljs.core.Keyword(null,"nose-clip-yab","nose-clip-yab",1476607987),new cljs.core.Keyword(null,"nose-clip-height","nose-clip-height",-1703773324),new cljs.core.Keyword(null,"nose-clip-xc","nose-clip-xc",-1863115051),new cljs.core.Keyword(null,"nose-clip-xb","nose-clip-xb",434604823),new cljs.core.Keyword(null,"nose-clip-yc","nose-clip-yc",-340569830),new cljs.core.Keyword(null,"nose-clip-xa","nose-clip-xa",-1415311041)],[nose_cx,nose_rx,nose_cy,shadow_clip_y,clip_width,nose_ry,((nose_cy + nose_ry) + (6)),a_to_b,clip_y_ab,clip_height,clip_x_c,clip_x_b,clip_y_c,clip_x_a]));
});
shapes.dev.draw_nose = (function draw_nose(p__166606){
var map__166608 = p__166606;
var map__166608__$1 = ((cljs.core.seq_QMARK_.call(null,map__166608))?cljs.core.apply.call(null,cljs.core.hash_map,map__166608):map__166608);
var nose_clip_yc = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-yc","nose-clip-yc",-340569830));
var nose_clip_xa = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-xa","nose-clip-xa",-1415311041));
var nose_cx = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-cx","nose-cx",-829610592));
var nose_rx = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-rx","nose-rx",-663834303));
var nose_shadow_clip_y = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-shadow-clip-y","nose-shadow-clip-y",-1293866494));
var nose_cy = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var nose_clip_width = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-width","nose-clip-width",1579765635));
var nose_ry = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-ry","nose-ry",-556167034));
var nose_clip_yab = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-yab","nose-clip-yab",1476607987));
var nose_clip_height = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-height","nose-clip-height",-1703773324));
var nose_clip_xc = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-xc","nose-clip-xc",-1863115051));
var nose_clip_xb = cljs.core.get.call(null,map__166608__$1,new cljs.core.Keyword(null,"nose-clip-xb","nose-clip-xb",434604823));
return React.createElement("g",{"className": "nose"},React.createElement("defs",null,React.createElement("clippath",{"id": "nose-bridge"},React.createElement("rect",{"x": nose_clip_xa, "y": nose_clip_yab, "width": nose_clip_width, "height": nose_clip_height}),React.createElement("rect",{"x": nose_clip_xb, "y": nose_clip_yab, "width": nose_clip_width, "height": nose_clip_height}),React.createElement("rect",{"x": nose_clip_xc, "y": nose_clip_yc, "width": nose_clip_width, "height": nose_clip_height})),React.createElement("clippath",{"id": "nose-shadow"},React.createElement("rect",{"x": nose_clip_xc, "y": nose_shadow_clip_y, "width": nose_clip_width, "height": ((3) * nose_clip_height)}))),React.createElement("ellipse",{"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (6)), "rx": nose_rx, "ry": nose_ry, "fill": "grey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}}),React.createElement("ellipse",{"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (4)), "rx": nose_rx, "ry": nose_ry, "fill": "darkgrey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}}),React.createElement("ellipse",{"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (2)), "rx": nose_rx, "ry": nose_ry, "fill": "lightgrey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}}),React.createElement("ellipse",{"cx": nose_cx, "cy": nose_cy, "rx": nose_rx, "ry": nose_ry, "fill": "white", "stroke": "transparent", "style": {"clipPath": "url(#nose-bridge)"}}));
});
shapes.dev.mouth = (function mouth(p__166609,dev_QMARK_){
var map__166611 = p__166609;
var map__166611__$1 = ((cljs.core.seq_QMARK_.call(null,map__166611))?cljs.core.apply.call(null,cljs.core.hash_map,map__166611):map__166611);
var measures = map__166611__$1;
var head_rx = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var eye_ry = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var nose_cy = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"nose-cy","nose-cy",1639299138));
var eye_cxb = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var head_ry = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var eye_cy = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var head_cx = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var horizontal_c = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var vertical_a = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var head_cy = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var a_to_b = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"a-to-b","a-to-b",504354032));
var head_height = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var eye_cxa = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var head_width = cljs.core.get.call(null,map__166611__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var mouth_cx = head_cx;
var below_c = ((head_cy + head_ry) - horizontal_c);
var min_ry = (head_ry - ((5) * (below_c / (6))));
var max_ry = (head_ry - (below_c / (4)));
var mouth_ry = min_ry;
var min_cy = (((head_cy + head_ry) - mouth_ry) - ((3) * (below_c / (4))));
var max_cy = (((head_cy + head_ry) - mouth_ry) - (below_c / (4)));
var mouth_cy = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_cy,max_cy):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_cy,max_cy,0.1)));
var max_rx = (1.5 * a_to_b);
var min_rx = a_to_b;
var mouth_rx = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_rx,max_rx):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_rx,max_rx,0.1)));
var min_clip_y = (function (){var x__14761__auto__ = (horizontal_c + (1));
var y__14762__auto__ = (mouth_cy + (mouth_ry / (2)));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
var max_clip_y = (function (){var x__14761__auto__ = (horizontal_c + (1));
var y__14762__auto__ = (mouth_cy + ((9) * (mouth_ry / (10))));
return ((x__14761__auto__ > y__14762__auto__) ? x__14761__auto__ : y__14762__auto__);
})();
var mouth_clip_y = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_clip_y,max_clip_y):((cljs.core._EQ_.call(null,min_clip_y,max_clip_y))?max_clip_y:cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_clip_y,max_clip_y,0.1))
));
var max_x_off = (shapes.dev.x_on_ellipse.call(null,(mouth_cy + mouth_ry),head_cy,head_rx,head_ry) - (a_to_b / (6)));
var min_x_off = (a_to_b / (6));
var clip_x_off = (cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_x_off,max_x_off):(((max_x_off < min_x_off))?max_x_off:cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_x_off,max_x_off,0.1))
));
var mouth_clip_x = (head_cx - clip_x_off);
var mouth_clip_width = ((2) * clip_x_off);
var mouth_clip_height = head_ry;
return cljs.core.merge.call(null,measures,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686),new cljs.core.Keyword(null,"below-c","below-c",-1689698386),new cljs.core.Keyword(null,"mouth-clip-x","mouth-clip-x",-1176852240),new cljs.core.Keyword(null,"mouth-clip-height","mouth-clip-height",1513269617),new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516),new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801),new cljs.core.Keyword(null,"mouth-clip-width","mouth-clip-width",1861991800),new cljs.core.Keyword(null,"mouth-rx","mouth-rx",-1864884005),new cljs.core.Keyword(null,"mouth-cx","mouth-cx",-1408973953)],[mouth_cy,below_c,mouth_clip_x,mouth_clip_height,mouth_clip_y,mouth_ry,mouth_clip_width,mouth_rx,mouth_cx]));
});
shapes.dev.draw_mouth = (function draw_mouth(p__166612){
var map__166614 = p__166612;
var map__166614__$1 = ((cljs.core.seq_QMARK_.call(null,map__166614))?cljs.core.apply.call(null,cljs.core.hash_map,map__166614):map__166614);
var measures = map__166614__$1;
var mouth_rx = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-rx","mouth-rx",-1864884005));
var head_rx = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var mouth_cx = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-cx","mouth-cx",-1408973953));
var test_height = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"test-height","test-height",-1286786848));
var head_ry = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var mouth_cy = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686));
var head_cx = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var horizontal_c = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var below_c = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"below-c","below-c",-1689698386));
var head_cy = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var mouth_clip_x = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-clip-x","mouth-clip-x",-1176852240));
var mouth_clip_height = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-clip-height","mouth-clip-height",1513269617));
var mouth_clip_y = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516));
var mouth_ry = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801));
var mouth_clip_width = cljs.core.get.call(null,map__166614__$1,new cljs.core.Keyword(null,"mouth-clip-width","mouth-clip-width",1861991800));
return React.createElement("g",{"className": "mouth"},React.createElement("defs",null,React.createElement("clippath",{"id": "mouth-clip"},React.createElement("rect",{"x": mouth_clip_x, "y": mouth_clip_y, "width": mouth_clip_width, "height": mouth_clip_height}))),React.createElement("ellipse",{"className": "mouth", "cx": mouth_cx, "cy": mouth_cy, "rx": mouth_rx, "ry": mouth_ry, "fill": "transparent", "style": {"clipPath": "url(#mouth-clip)"}}));
});
shapes.dev.head = (function head(p__166615,dev_QMARK_){
var map__166617 = p__166615;
var map__166617__$1 = ((cljs.core.seq_QMARK_.call(null,map__166617))?cljs.core.apply.call(null,cljs.core.hash_map,map__166617):map__166617);
var height = cljs.core.get.call(null,map__166617__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__166617__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var cy = cljs.core.get.call(null,map__166617__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx = cljs.core.get.call(null,map__166617__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),cx,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),cy,new cljs.core.Keyword(null,"head-width","head-width",-652130664),width,new cljs.core.Keyword(null,"head-height","head-height",1646756657),height,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),(width / (2)),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),(height / (2))], null);
});
shapes.dev.basic_measurements = (function basic_measurements(dev_QMARK_){
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),((w / (2)) + (50)),new cljs.core.Keyword(null,"cy","cy",755331060),(h / (2)),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_dimension,max_dimension):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_dimension,max_dimension,0.1))),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(dev_QMARK_)?shapes.dev.avg.call(null,min_dimension,max_dimension):cljs.core.rand_nth.call(null,cljs.core.range.call(null,min_dimension,max_dimension,0.1)))], null);
});
/**
* @param {...*} var_args
*/
shapes.dev.face = (function() { 
var face__delegate = function (dev_QMARK_,p__166618){
var map__166620 = p__166618;
var map__166620__$1 = ((cljs.core.seq_QMARK_.call(null,map__166620))?cljs.core.apply.call(null,cljs.core.hash_map,map__166620):map__166620);
var proportional_QMARK_ = cljs.core.get.call(null,map__166620__$1,new cljs.core.Keyword(null,"proportional?","proportional?",644090690));
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose.call(null,shapes.proportional.eyes.call(null,shapes.proportional.head.call(null,shapes.proportional.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
} else {
return shapes.dev.mouth.call(null,shapes.dev.nose.call(null,shapes.dev.eyes.call(null,shapes.dev.head.call(null,shapes.dev.basic_measurements.call(null,dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_),dev_QMARK_);
}
};
var face = function (dev_QMARK_,var_args){
var p__166618 = null;
if (arguments.length > 1) {
var G__166621__i = 0, G__166621__a = new Array(arguments.length -  1);
while (G__166621__i < G__166621__a.length) {G__166621__a[G__166621__i] = arguments[G__166621__i + 1]; ++G__166621__i;}
  p__166618 = new cljs.core.IndexedSeq(G__166621__a,0);
} 
return face__delegate.call(this,dev_QMARK_,p__166618);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__166622){
var dev_QMARK_ = cljs.core.first(arglist__166622);
var p__166618 = cljs.core.rest(arglist__166622);
return face__delegate(dev_QMARK_,p__166618);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
shapes.dev.section_face = (function section_face(p__166623){
var map__166625 = p__166623;
var map__166625__$1 = ((cljs.core.seq_QMARK_.call(null,map__166625))?cljs.core.apply.call(null,cljs.core.hash_map,map__166625):map__166625);
var head_ry = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var vertical_b = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"vertical-b","vertical-b",-117595011));
var vertical_a = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"vertical-a","vertical-a",464885929));
var horizontal_c = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"horizontal-c","horizontal-c",-427119703));
var horizontal_b = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"horizontal-b","horizontal-b",602159673));
var horizontal_a = cljs.core.get.call(null,map__166625__$1,new cljs.core.Keyword(null,"horizontal-a","horizontal-a",398345994));
return React.createElement("g",{"id": "sections", "stroke": "lightgrey"},React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_a, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_a}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_b, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_b}),React.createElement("line",{"x1": ((head_cx - head_rx) - (5)), "y1": horizontal_c, "x2": ((head_cx + head_rx) + (5)), "y2": horizontal_c}),React.createElement("line",{"x1": vertical_a, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_a, "y2": ((head_cy + head_ry) + (5))}),React.createElement("line",{"x1": vertical_b, "y1": ((head_cy - head_ry) - (5)), "x2": vertical_b, "y2": ((head_cy + head_ry) + (5))}));
});
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,false,new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false)], null));
}
shapes.dev.dev_mode = (function dev_mode(data){
return React.createElement("g",{"id": "dev-mode", "fillOpacity": (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))?0.5:(1))},React.createElement("text",{"x": (75), "y": (50)},"Dev Mode Controls"),React.createElement("g",{"id": "dev-mode-on"},React.createElement("rect",{"className": "on-button", "x": (25), "y": (60), "width": (100), "height": (50), "fill": "darkseagreen", "onClick": (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(data))){
return null;
} else {
om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"dev?","dev?",-613971064),true);

return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)),new cljs.core.Keyword(null,"proportional?","proportional?",644090690),false));
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
return React.createElement("g",{"id": "sections-toggle"},React.createElement("rect",{"className": "toggle-button", "x": (0), "y": (400), "width": (150), "height": (50), "fill": "steelblue", "onClick": (function (){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"sections?","sections?",-879376311),cljs.core.not);
})}),React.createElement("text",{"x": ((25) + (50)), "y": ((30) + (400)), "style": {"pointerEvents": "none"}},"Toggle sections"));
});

var ufv___166667 = schema.utils.use_fn_validation;
var output_schema166635_166668 = schema.core.Any;
var input_schema166636_166669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker166637_166670 = schema.core.checker.call(null,input_schema166636_166669);
var output_checker166638_166671 = schema.core.checker.call(null,output_schema166635_166668);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function app(G__166639,G__166640){
var validate__17001__auto__ = ufv___166667.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___166672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__166639,G__166640], null);
var temp__4406__auto___166673 = input_checker166637_166670.call(null,args__17002__auto___166672);
if(cljs.core.truth_(temp__4406__auto___166673)){
var error__17003__auto___166674 = temp__4406__auto___166673;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___166674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___166674,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___166672,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema166636_166669,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__166639;
var owner = G__166640;
while(true){
if(typeof shapes.dev.t166654 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t166654 = (function (owner,data,output_checker166638,input_checker166637,validate__17001__auto__,input_schema166636,output_schema166635,G__166639,G__166640,app,ufv__,meta166655){
this.owner = owner;
this.data = data;
this.output_checker166638 = output_checker166638;
this.input_checker166637 = input_checker166637;
this.validate__17001__auto__ = validate__17001__auto__;
this.input_schema166636 = input_schema166636;
this.output_schema166635 = output_schema166635;
this.G__166639 = G__166639;
this.G__166640 = G__166640;
this.app = app;
this.ufv__ = ufv__;
this.meta166655 = meta166655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t166654.prototype.om$core$IDisplayName$ = true;

shapes.dev.t166654.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

shapes.dev.t166654.prototype.om$core$IRender$ = true;

shapes.dev.t166654.prototype.om$core$IRender$render$arity$1 = ((function (validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.dev.face.call(null,new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
}),React.createElement("text",{"id": "dev-info", "x": (0), "y": (25), "stroke": "black", "fontSize": (20)},sablono.interpreter.interpret.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"dev?","dev?",-613971064).cljs$core$IFn$_invoke$arity$1(self__.data))?"Dev mode on":"Dev mode off")),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))?"\t:\tChanges Paused":null))].join(''))),React.createElement("g",{"id": "controls", "textAnchor": "middle"},sablono.interpreter.interpret.call(null,shapes.dev.dev_mode.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.dev.pause_mode.call(null,self__.data)),sablono.interpreter.interpret.call(null,shapes.dev.section_controls.call(null,self__.data))),sablono.interpreter.interpret.call(null,(function (){var map__166657 = new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data);
var map__166657__$1 = ((cljs.core.seq_QMARK_.call(null,map__166657))?cljs.core.apply.call(null,cljs.core.hash_map,map__166657):map__166657);
var head_height = cljs.core.get.call(null,map__166657__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_width = cljs.core.get.call(null,map__166657__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_ry = cljs.core.get.call(null,map__166657__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__166657__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cy = cljs.core.get.call(null,map__166657__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_cx = cljs.core.get.call(null,map__166657__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.face","g.face",-415585948),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),head_cx,new cljs.core.Keyword(null,"cy","cy",755331060),head_cy,new cljs.core.Keyword(null,"rx","rx",1627208482),head_rx,new cljs.core.Keyword(null,"ry","ry",-334598563),head_ry,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"grey",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),shapes.dev.draw_eyes.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)),shapes.dev.draw_nose.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)),shapes.dev.draw_mouth.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))], null);
})()),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (___$1,validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function iter__166658(s__166659){
return (new cljs.core.LazySeq(null,((function (___$1,validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (){
var s__166659__$1 = s__166659;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__166659__$1);
if(temp__4406__auto__){
var s__166659__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__166659__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__166659__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__166661 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__166660 = (0);
while(true){
if((i__166660 < size__15199__auto__)){
var vec__166664 = cljs.core._nth.call(null,c__15198__auto__,i__166660);
var i = cljs.core.nth.call(null,vec__166664,(0),null);
var color = cljs.core.nth.call(null,vec__166664,(1),null);
cljs.core.chunk_append.call(null,b__166661,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (335), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((335) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))));

var G__166675 = (i__166660 + (1));
i__166660 = G__166675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__166661),iter__166658.call(null,cljs.core.chunk_rest.call(null,s__166659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__166661),null);
}
} else {
var vec__166665 = cljs.core.first.call(null,s__166659__$2);
var i = cljs.core.nth.call(null,vec__166665,(0),null);
var color = cljs.core.nth.call(null,vec__166665,(1),null);
return cljs.core.cons.call(null,React.createElement("g",{"className": "color", "textAnchor": "middle"},React.createElement("rect",{"x": (i * (50)), "y": (335), "width": (45), "height": (30), "stroke": "black", "fill": color}),React.createElement("text",{"x": ((25) + (i * (50))), "y": ((335) + (45)), "stroke": "black", "fontFamily": "Verdana", "fontSize": (10)},sablono.interpreter.interpret.call(null,color))),iter__166658.call(null,cljs.core.rest.call(null,s__166659__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
,null,null));
});})(___$1,validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;
return iter__15200__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,shapes.dev.color_scale));
})()),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sections?","sections?",-879376311).cljs$core$IFn$_invoke$arity$1(self__.data))?shapes.dev.section_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data)):null)),sablono.interpreter.interpret.call(null,(function (){var map__166666 = new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data);
var map__166666__$1 = ((cljs.core.seq_QMARK_.call(null,map__166666))?cljs.core.apply.call(null,cljs.core.hash_map,map__166666):map__166666);
var mouth_ry = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"mouth-ry","mouth-ry",-1000769801));
var mouth_cy = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"mouth-cy","mouth-cy",2005931686));
var head_cy = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_ry = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644));
var head_rx = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var head_cx = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var mouth_clip_y = cljs.core.get.call(null,map__166666__$1,new cljs.core.Keyword(null,"mouth-clip-y","mouth-clip-y",-1725633516));
var x_offset = shapes.dev.x_on_ellipse.call(null,(head_cy - (mouth_cy + mouth_ry)),(0),head_rx,head_ry);
return null;
})()))));
});})(validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

shapes.dev.t166654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (_166656){
var self__ = this;
var _166656__$1 = this;
return self__.meta166655;
});})(validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

shapes.dev.t166654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (_166656,meta166655__$1){
var self__ = this;
var _166656__$1 = this;
return (new shapes.dev.t166654(self__.owner,self__.data,self__.output_checker166638,self__.input_checker166637,self__.validate__17001__auto__,self__.input_schema166636,self__.output_schema166635,self__.G__166639,self__.G__166640,self__.app,self__.ufv__,meta166655__$1));
});})(validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

shapes.dev.t166654.cljs$lang$type = true;

shapes.dev.t166654.cljs$lang$ctorStr = "shapes.dev/t166654";

shapes.dev.t166654.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t166654");
});})(validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

shapes.dev.__GT_t166654 = ((function (validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671){
return (function __GT_t166654(owner__$1,data__$1,output_checker166638__$1,input_checker166637__$1,validate__17001__auto____$1,input_schema166636__$1,output_schema166635__$1,G__166639__$1,G__166640__$1,app__$1,ufv____$1,meta166655){
return (new shapes.dev.t166654(owner__$1,data__$1,output_checker166638__$1,input_checker166637__$1,validate__17001__auto____$1,input_schema166636__$1,output_schema166635__$1,G__166639__$1,G__166640__$1,app__$1,ufv____$1,meta166655));
});})(validate__17001__auto__,ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

}

return (new shapes.dev.t166654(owner,data,output_checker166638_166671,input_checker166637_166670,validate__17001__auto__,input_schema166636_166669,output_schema166635_166668,G__166639,G__166640,app,ufv___166667,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___166676 = output_checker166638_166671.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___166676)){
var error__17003__auto___166677 = temp__4406__auto___166676;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___166677)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___166677,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema166635_166668,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___166667,output_schema166635_166668,input_schema166636_166669,input_checker166637_166670,output_checker166638_166671))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema166635_166668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema166636_166669], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m166634){
return om.core.build.call(null,shapes.dev.app,cursor__18789__auto__,m166634);
});
__GT_app = function(cursor__18789__auto__,m166634){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m166634);
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