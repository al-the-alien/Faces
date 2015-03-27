// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.proportional');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('om_tools.core');
goog.require('sablono.core');
goog.require('om.core');
/**
* @param {...*} var_args
*/
shapes.proportional.println = (function() { 
var println__delegate = function (content){
var G__18615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,content);
return console.log(G__18615);
};
var println = function (var_args){
var content = null;
if (arguments.length > 0) {
var G__18616__i = 0, G__18616__a = new Array(arguments.length -  0);
while (G__18616__i < G__18616__a.length) {G__18616__a[G__18616__i] = arguments[G__18616__i + 0]; ++G__18616__i;}
  content = new cljs.core.IndexedSeq(G__18616__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__18617){
var content = cljs.core.seq(arglist__18617);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
shapes.proportional.square = (function square(x){
return (x * x);
});
shapes.proportional.sqrt = (function sqrt(x){
var G__18619 = x;
return (Math.sqrt.cljs$core$IFn$_invoke$arity$1 ? Math.sqrt.cljs$core$IFn$_invoke$arity$1(G__18619) : Math.sqrt.call(null,G__18619));
});
shapes.proportional.ys_within_ellipse = (function ys_within_ellipse(x,a,b,h,k){
var max_offset = (k + shapes.proportional.sqrt((shapes.proportional.square(b) * ((1) - (shapes.proportional.square((x - h)) / shapes.proportional.square(a))))));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,(- max_offset),cljs.core.constant$keyword$136,max_offset], null);
});
if(typeof shapes.proportional.app_state !== 'undefined'){
} else {
shapes.proportional.app_state = (function (){var G__18620 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,"Hello, development!"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18620) : cljs.core.atom.call(null,G__18620));
})();
}
shapes.proportional.pupils = (function pupils(p__18621,dev_QMARK_){
var map__18623 = p__18621;
var map__18623__$1 = ((cljs.core.seq_QMARK_(map__18623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18623):map__18623);
var eye_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623__$1,cljs.core.constant$keyword$138);
var eye_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623__$1,cljs.core.constant$keyword$139);
var eye_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623__$1,cljs.core.constant$keyword$140);
var eye_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623__$1,cljs.core.constant$keyword$141);
var eye_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18623__$1,cljs.core.constant$keyword$142);
var pupil_r = (cljs.core.truth_(dev_QMARK_)?(((eye_rx + eye_ry) / (2)) / (3)):(((eye_rx + eye_ry) / (2)) / cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((2),(5),0.1))));
var pupil_c_measures = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,(0),cljs.core.constant$keyword$144,(0),cljs.core.constant$keyword$145,(eye_rx - pupil_r),cljs.core.constant$keyword$146,(eye_ry - pupil_r)], null);
var pupil_cx_offset = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((- (eye_rx - pupil_r)),(eye_rx - pupil_r),0.1));
var pupil_cxa = (cljs.core.truth_(dev_QMARK_)?eye_cxa:(eye_cxa + pupil_cx_offset));
var pupil_cxb = (cljs.core.truth_(dev_QMARK_)?eye_cxb:(eye_cxb + pupil_cx_offset));
var pupil_cy_offset = cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((- (eye_ry - pupil_r)),(eye_ry - pupil_r),0.1));
var pupil_cy_limits = shapes.proportional.ys_within_ellipse(pupil_cx_offset,cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(pupil_c_measures),cljs.core.constant$keyword$146.cljs$core$IFn$_invoke$arity$1(pupil_c_measures),cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(pupil_c_measures),cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(pupil_c_measures));
var pupil_cy = (cljs.core.truth_(dev_QMARK_)?eye_cy:(eye_cy + cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$135.cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$2(pupil_cy_limits,0.1)))));
var highlight_r = (cljs.core.truth_(dev_QMARK_)?(pupil_r / 3.75):(pupil_r / cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((3),(5),0.1))));
var highlight_cxa = ((pupil_cxa + pupil_r) - ((2) * highlight_r));
var highlight_cxb = ((pupil_cxb + pupil_r) - ((2) * highlight_r));
var highlight_cy = ((pupil_cy - pupil_r) + ((2) * highlight_r));
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$147,pupil_r,cljs.core.constant$keyword$148,pupil_cxa,cljs.core.constant$keyword$149,pupil_cxb,cljs.core.constant$keyword$150,pupil_cy,cljs.core.constant$keyword$151,highlight_r,cljs.core.constant$keyword$152,highlight_cxa,cljs.core.constant$keyword$153,highlight_cxb,cljs.core.constant$keyword$154,highlight_cy], null);
});
shapes.proportional.eyes = (function eyes(p__18624,dev_QMARK_){
var map__18626 = p__18624;
var map__18626__$1 = ((cljs.core.seq_QMARK_(map__18626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18626):map__18626);
var measures = map__18626__$1;
var head_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,cljs.core.constant$keyword$155);
var head_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,cljs.core.constant$keyword$156);
var head_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,cljs.core.constant$keyword$157);
var head_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,cljs.core.constant$keyword$158);
var head_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18626__$1,cljs.core.constant$keyword$159);
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?(head_rx / 2.5):(head_rx / (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() + (2))));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var eye_cy_offset = (head_height / (20));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?head_cy:cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((head_cy - eye_cy_offset),(head_cy + eye_cy_offset),0.1)));
var rx_max = ((head_cx - eye_cxa) - (head_width / (40)));
var rx_min = (rx_max - (head_width / (20)));
var eye_rx = (cljs.core.truth_(dev_QMARK_)?(rx_min + ((rx_max - rx_min) / (8))):cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3(rx_min,rx_max,0.1)));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?(head_height / (9)):(head_height / cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((6),(11),0.1))));
var eye_map = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([measures,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$142,eye_cxa,cljs.core.constant$keyword$141,eye_cxb,cljs.core.constant$keyword$140,eye_cy,cljs.core.constant$keyword$139,eye_rx,cljs.core.constant$keyword$138,eye_ry], null)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eye_map,shapes.proportional.pupils(eye_map,dev_QMARK_)], 0));
});
shapes.proportional.draw_eyes = (function draw_eyes(p__18627){
var map__18649 = p__18627;
var map__18649__$1 = ((cljs.core.seq_QMARK_(map__18649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18649):map__18649);
var eye_ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$138);
var highlight_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$153);
var eye_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$141);
var eye_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$140);
var pupil_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$147);
var pupil_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$150);
var highlight_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$152);
var highlight_r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$151);
var eye_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$142);
var pupil_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$149);
var eye_rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$139);
var pupil_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$148);
var highlight_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18649__$1,cljs.core.constant$keyword$154);
var G__18650 = "g";
var G__18651 = {"className": "eyes"};
var G__18652 = (function (){var G__18658 = "ellipse";
var G__18659 = {"className": "eye", "cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)};
return React.createElement(G__18658,G__18659);
})();
var G__18653 = (function (){var G__18660 = "circle";
var G__18661 = {"className": "pupil", "cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"};
return React.createElement(G__18660,G__18661);
})();
var G__18654 = (function (){var G__18662 = "circle";
var G__18663 = {"className": "shine", "cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"};
return React.createElement(G__18662,G__18663);
})();
var G__18655 = (function (){var G__18664 = "ellipse";
var G__18665 = {"className": "eye", "cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2)};
return React.createElement(G__18664,G__18665);
})();
var G__18656 = (function (){var G__18666 = "circle";
var G__18667 = {"className": "pupil", "cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black"};
return React.createElement(G__18666,G__18667);
})();
var G__18657 = (function (){var G__18668 = "circle";
var G__18669 = {"className": "shine", "cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent"};
return React.createElement(G__18668,G__18669);
})();
return React.createElement(G__18650,G__18651,G__18652,G__18653,G__18654,G__18655,G__18656,G__18657);
});
shapes.proportional.nose = (function nose(p__18670,dev_QMARK_){
var map__18672 = p__18670;
var map__18672__$1 = ((cljs.core.seq_QMARK_(map__18672))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18672):map__18672);
var measures = map__18672__$1;
var eye_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,cljs.core.constant$keyword$140);
var eye_cxb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,cljs.core.constant$keyword$141);
var eye_cxa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,cljs.core.constant$keyword$142);
var head_cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,cljs.core.constant$keyword$158);
var head_cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,cljs.core.constant$keyword$159);
var nose_x = head_cx;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([measures], 0));
});
shapes.proportional.head = (function head(p__18673,dev_QMARK_){
var map__18675 = p__18673;
var map__18675__$1 = ((cljs.core.seq_QMARK_(map__18675))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18675):map__18675);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.constant$keyword$130);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.constant$keyword$129);
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.constant$keyword$144);
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,cljs.core.constant$keyword$143);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$159,cx,cljs.core.constant$keyword$158,cy,cljs.core.constant$keyword$157,width,cljs.core.constant$keyword$156,height,cljs.core.constant$keyword$155,(width / (2)),cljs.core.constant$keyword$160,(height / (2))], null);
});
shapes.proportional.basic_measurements = (function basic_measurements(dev_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$143,(400),cljs.core.constant$keyword$144,(150),cljs.core.constant$keyword$129,(cljs.core.truth_(dev_QMARK_)?(150):cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((100),(200),0.1))),cljs.core.constant$keyword$130,(cljs.core.truth_(dev_QMARK_)?(200):cljs.core.rand_nth(cljs.core.range.cljs$core$IFn$_invoke$arity$3((150),(200),0.1)))], null);
});
