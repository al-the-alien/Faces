// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.core');
goog.require('cljs.core');
goog.require('shapes.proportional');
goog.require('om_tools.core');
goog.require('sablono.core');
goog.require('om.core');
shapes.core.square = (function square(x){
return (x * x);
});
shapes.core.sqrt = (function sqrt(x){
var G__18867 = x;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__18867) : Math.sqrt.call(null,G__18867));
});
shapes.core.abs = (function abs(x){
var G__18869 = x;
return (Math.abs.cljs$core$IFn$_invoke$arity$1 ? Math.abs.cljs$core$IFn$_invoke$arity$1(G__18869) : Math.abs.call(null,G__18869));
});
/**
* @param {...*} var_args
*/
shapes.core.avg = (function() { 
var avg__delegate = function (xs){
return (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs) / cljs.core.count(xs));
};
var avg = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__18870__i = 0, G__18870__a = new Array(arguments.length -  0);
while (G__18870__i < G__18870__a.length) {G__18870__a[G__18870__i] = arguments[G__18870__i + 0]; ++G__18870__i;}
  xs = new cljs.core.IndexedSeq(G__18870__a,0);
} 
return avg__delegate.call(this,xs);};
avg.cljs$lang$maxFixedArity = 0;
avg.cljs$lang$applyTo = (function (arglist__18871){
var xs = cljs.core.seq(arglist__18871);
return avg__delegate(xs);
});
avg.cljs$core$IFn$_invoke$arity$variadic = avg__delegate;
return avg;
})()
;
shapes.core.rand_float = (function() {
var rand_float = null;
var rand_float__2 = (function (min_x,max_x){
return rand_float.cljs$core$IFn$_invoke$arity$3(min_x,max_x,0.1);
});
var rand_float__3 = (function (min_x,max_x,step){
return cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3(min_x,max_x,step));
});
rand_float = function(min_x,max_x,step){
switch(arguments.length){
case 2:
return rand_float__2.call(this,min_x,max_x);
case 3:
return rand_float__3.call(this,min_x,max_x,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand_float.cljs$core$IFn$_invoke$arity$2 = rand_float__2;
rand_float.cljs$core$IFn$_invoke$arity$3 = rand_float__3;
return rand_float;
})()
;
shapes.core.x_on_ellipse = (function x_on_ellipse(y,cy,a,b){
return (a * shapes.core.sqrt(shapes.core.abs(((1) - shapes.core.square(((cy - y) / b))))));
});
shapes.core.y_on_ellipse = (function y_on_ellipse(x,cx,a,b){
return (b * shapes.core.sqrt(shapes.core.abs(((1) - shapes.core.square(((cx - x) / a))))));
});
shapes.core.ys_within_ellipse = (function ys_within_ellipse(x,cx,a,b){
var max_y = shapes.core.y_on_ellipse(x,cx,a,b);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(- max_y),cljs.core.constant$keyword$136,max_y], null);
});
/**
* Takes the radius of a circle with origin (0, 0).
* Returns a number w, where (w, w) is on the circumference of the circle.
*/
shapes.core.xy_on_pupil = (function xy_on_pupil(pupil_r){
return shapes.core.sqrt((shapes.core.square(pupil_r) / (2)));
});
shapes.core.pupils = (function pupils(p__18875,avg_QMARK_){
var map__18877 = p__18875;
var map__18877__$1 = ((cljs.core.seq_QMARK_(map__18877))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18877):map__18877);
var measures = map__18877__$1;
var eye_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18877__$1,cljs.core.constant$keyword$138);
var eye_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18877__$1,cljs.core.constant$keyword$139);
var eye_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18877__$1,cljs.core.constant$keyword$140);
var eye_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18877__$1,cljs.core.constant$keyword$141);
var eye_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18877__$1,cljs.core.constant$keyword$142);
var r_max = (function (){var x__6214__auto__ = (function (){var x__6214__auto__ = eye_rx;
var y__6215__auto__ = eye_ry;
return ((x__6214__auto__ < y__6215__auto__) ? x__6214__auto__ : y__6215__auto__);
})();
var y__6215__auto__ = ((function (){var x__6207__auto__ = eye_rx;
var y__6208__auto__ = eye_ry;
return ((x__6207__auto__ > y__6208__auto__) ? x__6207__auto__ : y__6208__auto__);
})() - ((function (){var x__6207__auto__ = eye_rx;
var y__6208__auto__ = eye_ry;
return ((x__6207__auto__ > y__6208__auto__) ? x__6207__auto__ : y__6208__auto__);
})() / (3)));
return ((x__6214__auto__ < y__6215__auto__) ? x__6214__auto__ : y__6215__auto__);
})();
var r_min = (5);
var pupil_r = (cljs.core.truth_(avg_QMARK_)?((r_min + r_max) / (2)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(r_min,r_max));
var pupil_c_measures = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,(0),cljs.core.constant$keyword$144,(0),cljs.core.constant$keyword$145,(eye_rx - pupil_r),cljs.core.constant$keyword$146,(eye_ry - pupil_r)], null);
var pupil_cx_offset = shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2((- (eye_rx - pupil_r)),(eye_rx - pupil_r));
var pupil_cxa = (cljs.core.truth_(avg_QMARK_)?eye_cxa:(eye_cxa + pupil_cx_offset));
var pupil_cxb = (cljs.core.truth_(avg_QMARK_)?eye_cxb:(eye_cxb + pupil_cx_offset));
var pupil_cy_limits = shapes.core.ys_within_ellipse(pupil_cx_offset,(0),cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(pupil_c_measures),cljs.core.constant$keyword$146.cljs$core$IFn$_invoke$arity$1(pupil_c_measures));
var pupil_cy = (cljs.core.truth_(avg_QMARK_)?eye_cy:(((cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(pupil_cy_limits) <= cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(pupil_cy_limits)))?(eye_cy + cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(pupil_cy_limits)):(eye_cy + shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(pupil_cy_limits)))
));
var highlight_r = (cljs.core.truth_(avg_QMARK_)?(pupil_r / shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(2),(6)], 0))):(pupil_r / shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2((2),(6))));
var highlight_offset = shapes.core.xy_on_pupil((pupil_r - highlight_r));
var highlight_cxa = (pupil_cxa + highlight_offset);
var highlight_cxb = (pupil_cxb + highlight_offset);
var highlight_cy = (pupil_cy - highlight_offset);
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$147,pupil_r,cljs.core.constant$keyword$148,pupil_cxa,cljs.core.constant$keyword$149,pupil_cxb,cljs.core.constant$keyword$150,pupil_cy,cljs.core.constant$keyword$151,highlight_r,cljs.core.constant$keyword$152,highlight_cxa,cljs.core.constant$keyword$153,highlight_cxb,cljs.core.constant$keyword$154,highlight_cy], null);
});
shapes.core.eyes = (function eyes(p__18878,avg_QMARK_){
var map__18880 = p__18878;
var map__18880__$1 = ((cljs.core.seq_QMARK_(map__18880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18880):map__18880);
var measures = map__18880__$1;
var head_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,cljs.core.constant$keyword$160);
var head_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,cljs.core.constant$keyword$155);
var head_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,cljs.core.constant$keyword$156);
var head_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,cljs.core.constant$keyword$157);
var head_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,cljs.core.constant$keyword$158);
var head_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18880__$1,cljs.core.constant$keyword$159);
var max_cx_off = ((head_rx / (3)) * (2));
var min_cx_off = (head_rx / (6));
var eye_cx_offset = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([max_cx_off,min_cx_off], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_cx_off,max_cx_off));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var min_cy = (head_cy - (0.4 * head_ry));
var max_cy = (head_cy + (head_height / (6)));
var eye_cy = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_cy,max_cy], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_cy,max_cy));
var x_intersect = (head_cx - shapes.core.x_on_ellipse(eye_cy,head_cy,head_rx,head_ry));
var x_intersect_off = (eye_cxa - x_intersect);
var rx_max = (function (){var x__6214__auto__ = (head_cx - eye_cxa);
var y__6215__auto__ = (x_intersect_off + (x_intersect_off / (4)));
return ((x__6214__auto__ < y__6215__auto__) ? x__6214__auto__ : y__6215__auto__);
})();
var rx_min = (head_width / (15));
var eye_rx = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rx_max,rx_min], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(rx_min,rx_max));
var horizontal_a = eye_cy;
var head_top = (head_cy - head_ry);
var head_bottom = (head_cy + head_ry);
var above_a = (eye_cy - head_top);
var below_a = (head_bottom - eye_cy);
var y_max = (horizontal_a + (below_a / (2)));
var ry_max = (y_max - eye_cy);
var ry_min = (head_height / (20));
var eye_ry = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ry_max,ry_min], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(ry_min,ry_max));
var eye_map = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([measures,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$141,cljs.core.constant$keyword$140,cljs.core.constant$keyword$161,cljs.core.constant$keyword$162,cljs.core.constant$keyword$142,cljs.core.constant$keyword$139,cljs.core.constant$keyword$163,cljs.core.constant$keyword$164,cljs.core.constant$keyword$138],[eye_cxb,eye_cy,eye_cxa,horizontal_a,eye_cxa,eye_rx,(eye_cy + eye_ry),eye_cxb,eye_ry])], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eye_map,shapes.core.pupils(eye_map,avg_QMARK_)], 0));
});
shapes.core.draw_eyes = (function draw_eyes(p__18881){
var map__18924 = p__18881;
var map__18924__$1 = ((cljs.core.seq_QMARK_(map__18924))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18924):map__18924);
var eye_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$138);
var highlight_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$153);
var eye_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$141);
var eye_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$140);
var pupil_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$147);
var pupil_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$150);
var highlight_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$152);
var highlight_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$151);
var eye_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$142);
var pupil_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$149);
var eye_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$139);
var pupil_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$148);
var highlight_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,cljs.core.constant$keyword$154);
var G__18925 = "g";
var G__18926 = {"id": "eyes"};
var G__18927 = (function (){var G__18932 = "defs";
var G__18933 = null;
var G__18934 = (function (){var G__18936 = "clippath";
var G__18937 = {"id": "eye-a"};
var G__18938 = (function (){var G__18939 = "ellipse";
var G__18940 = {"cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry};
return React.createElement(G__18939,G__18940);
})();
return React.createElement(G__18936,G__18937,G__18938);
})();
var G__18935 = (function (){var G__18941 = "clippath";
var G__18942 = {"id": "eye-b"};
var G__18943 = (function (){var G__18944 = "ellipse";
var G__18945 = {"cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)};
return React.createElement(G__18944,G__18945);
})();
return React.createElement(G__18941,G__18942,G__18943);
})();
return React.createElement(G__18932,G__18933,G__18934,G__18935);
})();
var G__18928 = (function (){var G__18946 = "ellipse";
var G__18947 = {"id": "eye-a", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)};
return React.createElement(G__18946,G__18947);
})();
var G__18929 = (function (){var G__18948 = "g";
var G__18949 = {"id": "inner-eye-a", "style": {"clipPath": "url(#eye-a)"}};
var G__18950 = (function (){var G__18952 = "circle";
var G__18953 = {"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"};
return React.createElement(G__18952,G__18953);
})();
var G__18951 = (function (){var G__18954 = "circle";
var G__18955 = {"className": "highlight", "cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"};
return React.createElement(G__18954,G__18955);
})();
return React.createElement(G__18948,G__18949,G__18950,G__18951);
})();
var G__18930 = (function (){var G__18956 = "ellipse";
var G__18957 = {"id": "eye-b", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)};
return React.createElement(G__18956,G__18957);
})();
var G__18931 = (function (){var G__18958 = "g";
var G__18959 = {"id": "inner-eye-b", "style": {"clipPath": "url(#eye-b)"}};
var G__18960 = (function (){var G__18962 = "circle";
var G__18963 = {"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "strokeAlpha": "0.5", "fill": "black"};
return React.createElement(G__18962,G__18963);
})();
var G__18961 = (function (){var G__18964 = "circle";
var G__18965 = {"className": "highlight", "cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"};
return React.createElement(G__18964,G__18965);
})();
return React.createElement(G__18958,G__18959,G__18960,G__18961);
})();
return React.createElement(G__18925,G__18926,G__18927,G__18928,G__18929,G__18930,G__18931);
});
shapes.core.nose = (function nose(p__18966,avg_QMARK_){
var map__18968 = p__18966;
var map__18968__$1 = ((cljs.core.seq_QMARK_(map__18968))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18968):map__18968);
var measures = map__18968__$1;
var vertical_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18968__$1,cljs.core.constant$keyword$164);
var vertical_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18968__$1,cljs.core.constant$keyword$161);
var horizontal_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18968__$1,cljs.core.constant$keyword$163);
var head_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18968__$1,cljs.core.constant$keyword$160);
var head_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18968__$1,cljs.core.constant$keyword$158);
var head_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18968__$1,cljs.core.constant$keyword$159);
var nose_cx = head_cx;
var a_to_b = (vertical_b - vertical_a);
var max_rx = (a_to_b / (4));
var min_rx = (a_to_b / (12));
var nose_rx = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([max_rx,min_rx], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_rx,max_rx));
var max_ry = nose_rx;
var min_ry = (head_ry / (20));
var nose_ry = shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_ry,max_ry], 0))
;
var min_cy = (horizontal_b + (1.5 * nose_ry));
var below_b = ((head_cy + head_ry) - horizontal_b);
var max_cy = (((head_cy + head_ry) - (below_b / (2))) - nose_ry);
var nose_cy = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_cy,max_cy], 0)):(((max_cy < min_cy))?max_cy:shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_cy,max_cy)
));
var min_bridge = nose_rx;
var max_bridge = (nose_rx + (nose_rx / 1.5));
var clip_bridge = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_bridge,max_bridge], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$3(min_bridge,max_bridge,0.05));
var clip_width = ((4) * nose_rx);
var clip_height = ((4) * nose_ry);
var clip_x_a = ((head_cx - (clip_bridge / (2))) - clip_width);
var clip_x_b = (head_cx + (clip_bridge / (2)));
var clip_y_ab = (nose_cy - (clip_height / (2)));
var clip_x_c = (nose_cx - ((2) * nose_rx));
var clip_y_c = ((nose_cy + (1)) - shapes.core.y_on_ellipse((nose_cx + (clip_bridge / (2))),nose_cx,nose_rx,nose_ry));
var shadow_clip_y = (clip_y_c + (1));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([measures,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$166,cljs.core.constant$keyword$167,cljs.core.constant$keyword$168,cljs.core.constant$keyword$169,cljs.core.constant$keyword$170,cljs.core.constant$keyword$171,cljs.core.constant$keyword$172,cljs.core.constant$keyword$173,cljs.core.constant$keyword$174,cljs.core.constant$keyword$175,cljs.core.constant$keyword$176,cljs.core.constant$keyword$177,cljs.core.constant$keyword$178,cljs.core.constant$keyword$179],[nose_cx,nose_rx,nose_cy,shadow_clip_y,clip_width,nose_ry,((nose_cy + nose_ry) + (6)),a_to_b,clip_y_ab,clip_height,clip_x_c,clip_x_b,clip_y_c,clip_x_a])], 0));
});
shapes.core.draw_nose = (function draw_nose(p__18969){
var map__19006 = p__18969;
var map__19006__$1 = ((cljs.core.seq_QMARK_(map__19006))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19006):map__19006);
var nose_clip_yc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$178);
var nose_clip_xa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$179);
var nose_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$166);
var nose_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$167);
var nose_shadow_clip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$169);
var nose_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$168);
var nose_clip_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$170);
var nose_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$171);
var nose_clip_yab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$174);
var nose_clip_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$175);
var nose_clip_xc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$176);
var nose_clip_xb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.constant$keyword$177);
var G__19007 = "g";
var G__19008 = {"id": "nose"};
var G__19009 = (function (){var G__19014 = "defs";
var G__19015 = null;
var G__19016 = (function (){var G__19018 = "clippath";
var G__19019 = {"id": "nose-bridge"};
var G__19020 = (function (){var G__19023 = "rect";
var G__19024 = {"x": nose_clip_xa, "y": nose_clip_yab, "width": nose_clip_width, "height": nose_clip_height};
return React.createElement(G__19023,G__19024);
})();
var G__19021 = (function (){var G__19025 = "rect";
var G__19026 = {"x": nose_clip_xb, "y": nose_clip_yab, "width": nose_clip_width, "height": nose_clip_height};
return React.createElement(G__19025,G__19026);
})();
var G__19022 = (function (){var G__19027 = "rect";
var G__19028 = {"x": nose_clip_xc, "y": nose_clip_yc, "width": nose_clip_width, "height": nose_clip_height};
return React.createElement(G__19027,G__19028);
})();
return React.createElement(G__19018,G__19019,G__19020,G__19021,G__19022);
})();
var G__19017 = (function (){var G__19029 = "clippath";
var G__19030 = {"id": "nose-shadow"};
var G__19031 = (function (){var G__19032 = "rect";
var G__19033 = {"x": nose_clip_xc, "y": nose_shadow_clip_y, "width": nose_clip_width, "height": ((3) * nose_clip_height)};
return React.createElement(G__19032,G__19033);
})();
return React.createElement(G__19029,G__19030,G__19031);
})();
return React.createElement(G__19014,G__19015,G__19016,G__19017);
})();
var G__19010 = (function (){var G__19034 = "ellipse";
var G__19035 = {"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (6)), "rx": nose_rx, "ry": nose_ry, "fill": "grey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}};
return React.createElement(G__19034,G__19035);
})();
var G__19011 = (function (){var G__19036 = "ellipse";
var G__19037 = {"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (4)), "rx": nose_rx, "ry": nose_ry, "fill": "darkgrey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}};
return React.createElement(G__19036,G__19037);
})();
var G__19012 = (function (){var G__19038 = "ellipse";
var G__19039 = {"className": "shadow", "cx": nose_cx, "cy": (nose_cy + (2)), "rx": nose_rx, "ry": nose_ry, "fill": "lightgrey", "stroke": "transparent", "style": {"clipPath": "url(#nose-shadow)"}};
return React.createElement(G__19038,G__19039);
})();
var G__19013 = (function (){var G__19040 = "ellipse";
var G__19041 = {"cx": nose_cx, "cy": nose_cy, "rx": nose_rx, "ry": nose_ry, "fill": "white", "stroke": "transparent", "style": {"clipPath": "url(#nose-bridge)"}};
return React.createElement(G__19040,G__19041);
})();
return React.createElement(G__19007,G__19008,G__19009,G__19010,G__19011,G__19012,G__19013);
});
shapes.core.mouth = (function mouth(p__19042,avg_QMARK_){
var map__19044 = p__19042;
var map__19044__$1 = ((cljs.core.seq_QMARK_(map__19044))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19044):map__19044);
var measures = map__19044__$1;
var a_to_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.constant$keyword$173);
var horizontal_c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.constant$keyword$172);
var head_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.constant$keyword$160);
var head_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.constant$keyword$155);
var head_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.constant$keyword$158);
var head_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,cljs.core.constant$keyword$159);
var mouth_cx = head_cx;
var below_c = ((head_cy + head_ry) - horizontal_c);
var min_ry = (head_ry - ((5) * (below_c / (6))));
var max_ry = (head_ry - (below_c / (4)));
var mouth_ry = min_ry;
var min_cy = (((head_cy + head_ry) - mouth_ry) - ((3) * (below_c / (4))));
var max_cy = (((head_cy + head_ry) - mouth_ry) - (below_c / (4)));
var mouth_cy = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_cy,max_cy], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_cy,max_cy));
var max_rx = (1.5 * a_to_b);
var min_rx = a_to_b;
var mouth_rx = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_rx,max_rx], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_rx,max_rx));
var min_clip_y = (function (){var x__6207__auto__ = (horizontal_c + (1));
var y__6208__auto__ = (mouth_cy + (mouth_ry / (2)));
return ((x__6207__auto__ > y__6208__auto__) ? x__6207__auto__ : y__6208__auto__);
})();
var max_clip_y = (function (){var x__6207__auto__ = (horizontal_c + (1));
var y__6208__auto__ = (mouth_cy + ((9) * (mouth_ry / (10))));
return ((x__6207__auto__ > y__6208__auto__) ? x__6207__auto__ : y__6208__auto__);
})();
var mouth_clip_y = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_clip_y,max_clip_y], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min_clip_y,max_clip_y))?max_clip_y:shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_clip_y,max_clip_y)
));
var max_x_off = (shapes.core.x_on_ellipse((mouth_cy + mouth_ry),head_cy,head_rx,head_ry) - (a_to_b / (6)));
var min_x_off = (a_to_b / (6));
var clip_x_off = (cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_x_off,max_x_off], 0)):(((max_x_off < min_x_off))?max_x_off:shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_x_off,max_x_off)
));
var mouth_clip_x = (head_cx - clip_x_off);
var mouth_clip_width = ((2) * clip_x_off);
var mouth_clip_height = head_ry;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([measures,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$180,cljs.core.constant$keyword$181,cljs.core.constant$keyword$182,cljs.core.constant$keyword$183,cljs.core.constant$keyword$184,cljs.core.constant$keyword$185,cljs.core.constant$keyword$186,cljs.core.constant$keyword$187,cljs.core.constant$keyword$188],[mouth_cy,below_c,mouth_clip_x,mouth_clip_height,mouth_clip_y,mouth_ry,mouth_clip_width,mouth_rx,mouth_cx])], 0));
});
shapes.core.draw_mouth = (function draw_mouth(p__19045){
var map__19061 = p__19045;
var map__19061__$1 = ((cljs.core.seq_QMARK_(map__19061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19061):map__19061);
var measures = map__19061__$1;
var mouth_clip_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$183);
var mouth_clip_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$186);
var mouth_clip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$184);
var mouth_clip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$182);
var mouth_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$185);
var mouth_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$187);
var mouth_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$180);
var mouth_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,cljs.core.constant$keyword$188);
var G__19062 = "g";
var G__19063 = {"className": "mouth"};
var G__19064 = (function (){var G__19066 = "defs";
var G__19067 = null;
var G__19068 = (function (){var G__19069 = "clippath";
var G__19070 = {"id": "mouth-clip"};
var G__19071 = (function (){var G__19072 = "rect";
var G__19073 = {"x": mouth_clip_x, "y": mouth_clip_y, "width": mouth_clip_width, "height": mouth_clip_height};
return React.createElement(G__19072,G__19073);
})();
return React.createElement(G__19069,G__19070,G__19071);
})();
return React.createElement(G__19066,G__19067,G__19068);
})();
var G__19065 = (function (){var G__19074 = "ellipse";
var G__19075 = {"className": "mouth", "cx": mouth_cx, "cy": mouth_cy, "rx": mouth_rx, "ry": mouth_ry, "fill": "transparent", "style": {"clipPath": "url(#mouth-clip)"}};
return React.createElement(G__19074,G__19075);
})();
return React.createElement(G__19062,G__19063,G__19064,G__19065);
});
shapes.core.head = (function head(p__19076,avg_QMARK_){
var map__19078 = p__19076;
var map__19078__$1 = ((cljs.core.seq_QMARK_(map__19078))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19078):map__19078);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,cljs.core.constant$keyword$130);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,cljs.core.constant$keyword$129);
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,cljs.core.constant$keyword$144);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,cljs.core.constant$keyword$143);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$159,cx,cljs.core.constant$keyword$158,cy,cljs.core.constant$keyword$157,width,cljs.core.constant$keyword$156,height,cljs.core.constant$keyword$155,(width / (2)),cljs.core.constant$keyword$160,(height / (2))], null);
});
shapes.core.basic_measurements = (function basic_measurements(avg_QMARK_){
var w = window.innerWidth;
var h = window.innerHeight;
var m = (function (){var x__6214__auto__ = w;
var y__6215__auto__ = h;
return ((x__6214__auto__ < y__6215__auto__) ? x__6214__auto__ : y__6215__auto__);
})();
var max_dimension = (function (){var x__6207__auto__ = (75);
var y__6208__auto__ = (m - (m / (5)));
return ((x__6207__auto__ > y__6208__auto__) ? x__6207__auto__ : y__6208__auto__);
})();
var min_dimension = (function (){var x__6207__auto__ = (75);
var y__6208__auto__ = (m / (2));
return ((x__6207__auto__ > y__6208__auto__) ? x__6207__auto__ : y__6208__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,(w / (2)),cljs.core.constant$keyword$144,(h / (2)),cljs.core.constant$keyword$129,max_dimension,cljs.core.constant$keyword$130,(cljs.core.truth_(avg_QMARK_)?shapes.core.avg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([min_dimension,max_dimension], 0)):shapes.core.rand_float.cljs$core$IFn$_invoke$arity$2(min_dimension,max_dimension))], null);
});
/**
* @param {...*} var_args
*/
shapes.core.face = (function() { 
var face__delegate = function (avg_QMARK_,p__19079){
var map__19081 = p__19079;
var map__19081__$1 = ((cljs.core.seq_QMARK_(map__19081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19081):map__19081);
var proportional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.constant$keyword$189);
if(cljs.core.truth_(proportional_QMARK_)){
return shapes.proportional.nose(shapes.proportional.eyes(shapes.proportional.head(shapes.proportional.basic_measurements(avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
} else {
return shapes.core.mouth(shapes.core.nose(shapes.core.eyes(shapes.core.head(shapes.core.basic_measurements(avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_),avg_QMARK_);
}
};
var face = function (avg_QMARK_,var_args){
var p__19079 = null;
if (arguments.length > 1) {
var G__19082__i = 0, G__19082__a = new Array(arguments.length -  1);
while (G__19082__i < G__19082__a.length) {G__19082__a[G__19082__i] = arguments[G__19082__i + 1]; ++G__19082__i;}
  p__19079 = new cljs.core.IndexedSeq(G__19082__a,0);
} 
return face__delegate.call(this,avg_QMARK_,p__19079);};
face.cljs$lang$maxFixedArity = 1;
face.cljs$lang$applyTo = (function (arglist__19083){
var avg_QMARK_ = cljs.core.first(arglist__19083);
var p__19079 = cljs.core.rest(arglist__19083);
return face__delegate(avg_QMARK_,p__19079);
});
face.cljs$core$IFn$_invoke$arity$variadic = face__delegate;
return face;
})()
;
shapes.core.draw_face = (function draw_face(p__19084){
var map__19094 = p__19084;
var map__19094__$1 = ((cljs.core.seq_QMARK_(map__19094))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19094):map__19094);
var measures = map__19094__$1;
var head_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$160);
var head_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$155);
var head_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$158);
var head_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,cljs.core.constant$keyword$159);
var G__19095 = "g";
var G__19096 = {"className": "face", "fill": "white", "stroke": "grey", "strokeWidth": (3)};
var G__19097 = (function (){var G__19101 = "ellipse";
var G__19102 = {"cx": head_cx, "cy": head_cy, "rx": head_rx, "ry": head_ry};
return React.createElement(G__19101,G__19102);
})();
var G__19098 = sablono.interpreter.interpret(shapes.core.draw_eyes(measures));
var G__19099 = sablono.interpreter.interpret(shapes.core.draw_nose(measures));
var G__19100 = sablono.interpreter.interpret(shapes.core.draw_mouth(measures));
return React.createElement(G__19095,G__19096,G__19097,G__19098,G__19099,G__19100);
});
