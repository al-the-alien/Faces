// Compiled by ClojureScript 0.0-3308 {}
goog.provide('shapes.proportional');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('dommy.core');
shapes.proportional.println = (function shapes$proportional$println(){
var argseq__17667__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return shapes.proportional.println.cljs$core$IFn$_invoke$arity$variadic(argseq__17667__auto__);
});

shapes.proportional.println.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,content));
});

shapes.proportional.println.cljs$lang$maxFixedArity = (0);

shapes.proportional.println.cljs$lang$applyTo = (function (seq23265){
return shapes.proportional.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23265));
});
shapes.proportional.square = (function shapes$proportional$square(x){
return (x * x);
});
shapes.proportional.sqrt = (function shapes$proportional$sqrt(x){
return Math.sqrt(x);
});
shapes.proportional.ys_within_ellipse = (function shapes$proportional$ys_within_ellipse(x,a,b,h,k){
var max_offset = (k + shapes.proportional.sqrt.call(null,(shapes.proportional.square.call(null,b) * ((1) - (shapes.proportional.square.call(null,(x - h)) / shapes.proportional.square.call(null,a))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(- max_offset),new cljs.core.Keyword(null,"max","max",61366548),max_offset], null);
});
if(typeof shapes.proportional.app_state !== 'undefined'){
} else {
shapes.proportional.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, development!"], null));
}
shapes.proportional.pupils = (function shapes$proportional$pupils(p__23266,dev_QMARK_){
var map__23268 = p__23266;
var map__23268__$1 = ((cljs.core.seq_QMARK_.call(null,map__23268))?cljs.core.apply.call(null,cljs.core.hash_map,map__23268):map__23268);
var eye_cxa = cljs.core.get.call(null,map__23268__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var eye_cxb = cljs.core.get.call(null,map__23268__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__23268__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var eye_rx = cljs.core.get.call(null,map__23268__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var eye_ry = cljs.core.get.call(null,map__23268__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var pupil_r = (cljs.core.truth_(dev_QMARK_)?(((eye_rx + eye_ry) / (2)) / (3)):(((eye_rx + eye_ry) / (2)) / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(5),0.1))));
var pupil_c_measures = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),(eye_rx - pupil_r),new cljs.core.Keyword(null,"ry","ry",-334598563),(eye_ry - pupil_r)], null);
var pupil_cx_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (eye_rx - pupil_r)),(eye_rx - pupil_r),0.1));
var pupil_cxa = (cljs.core.truth_(dev_QMARK_)?eye_cxa:(eye_cxa + pupil_cx_offset));
var pupil_cxb = (cljs.core.truth_(dev_QMARK_)?eye_cxb:(eye_cxb + pupil_cx_offset));
var pupil_cy_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(- (eye_ry - pupil_r)),(eye_ry - pupil_r),0.1));
var pupil_cy_limits = shapes.proportional.ys_within_ellipse.call(null,pupil_cx_offset,new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(pupil_c_measures),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(pupil_c_measures));
var pupil_cy = (cljs.core.truth_(dev_QMARK_)?eye_cy:(eye_cy + cljs.core.rand_nth.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(pupil_cy_limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$2(pupil_cy_limits,0.1)))));
var highlight_r = (cljs.core.truth_(dev_QMARK_)?(pupil_r / 3.75):(pupil_r / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(3),(5),0.1))));
var highlight_cxa = ((pupil_cxa + pupil_r) - ((2) * highlight_r));
var highlight_cxb = ((pupil_cxb + pupil_r) - ((2) * highlight_r));
var highlight_cy = ((pupil_cy - pupil_r) + ((2) * highlight_r));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590),pupil_r,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686),pupil_cxa,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403),pupil_cxb,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865),pupil_cy,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851),highlight_r,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206),highlight_cxa,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662),highlight_cxb,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681),highlight_cy], null);
});
shapes.proportional.eyes = (function shapes$proportional$eyes(p__23269,dev_QMARK_){
var map__23271 = p__23269;
var map__23271__$1 = ((cljs.core.seq_QMARK_.call(null,map__23271))?cljs.core.apply.call(null,cljs.core.hash_map,map__23271):map__23271);
var measures = map__23271__$1;
var head_cx = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var head_cy = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var head_width = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"head-width","head-width",-652130664));
var head_height = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"head-height","head-height",1646756657));
var head_rx = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938));
var eye_cx_offset = (cljs.core.truth_(dev_QMARK_)?(head_rx / 2.5):(head_rx / (cljs.core.rand.call(null) + (2))));
var eye_cxa = (head_cx - eye_cx_offset);
var eye_cxb = (head_cx + eye_cx_offset);
var eye_cy_offset = (head_height / (20));
var eye_cy = (cljs.core.truth_(dev_QMARK_)?head_cy:cljs.core.rand_nth.call(null,cljs.core.range.call(null,(head_cy - eye_cy_offset),(head_cy + eye_cy_offset),0.1)));
var rx_max = ((head_cx - eye_cxa) - (head_width / (40)));
var rx_min = (rx_max - (head_width / (20)));
var eye_rx = (cljs.core.truth_(dev_QMARK_)?(rx_min + ((rx_max - rx_min) / (8))):cljs.core.rand_nth.call(null,cljs.core.range.call(null,rx_min,rx_max,0.1)));
var eye_ry = (cljs.core.truth_(dev_QMARK_)?(head_height / (9)):(head_height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(6),(11),0.1))));
var eye_map = cljs.core.merge.call(null,measures,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486),eye_cxa,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691),eye_cxb,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757),eye_cy,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923),eye_rx,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119),eye_ry], null));
return cljs.core.merge.call(null,eye_map,shapes.proportional.pupils.call(null,eye_map,dev_QMARK_));
});
shapes.proportional.draw_eyes = (function shapes$proportional$draw_eyes(p__23272){
var map__23274 = p__23272;
var map__23274__$1 = ((cljs.core.seq_QMARK_.call(null,map__23274))?cljs.core.apply.call(null,cljs.core.hash_map,map__23274):map__23274);
var eye_ry = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"eye-ry","eye-ry",933465119));
var highlight_cxb = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"highlight-cxb","highlight-cxb",-700161662));
var eye_cxb = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var pupil_r = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"pupil-r","pupil-r",1531003590));
var pupil_cy = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"pupil-cy","pupil-cy",1572369865));
var highlight_cxa = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"highlight-cxa","highlight-cxa",-206081206));
var highlight_r = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"highlight-r","highlight-r",-332764851));
var eye_cxa = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var pupil_cxb = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"pupil-cxb","pupil-cxb",1095720403));
var eye_rx = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"eye-rx","eye-rx",67315923));
var pupil_cxa = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"pupil-cxa","pupil-cxa",264217686));
var highlight_cy = cljs.core.get.call(null,map__23274__$1,new cljs.core.Keyword(null,"highlight-cy","highlight-cy",-186448681));
return React.createElement("g",{"className": "eyes"},React.createElement("ellipse",{"cx": eye_cxa, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2), "className": "eye"}),React.createElement("circle",{"cx": pupil_cxa, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black", "className": "pupil"}),React.createElement("circle",{"cx": highlight_cxa, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent", "className": "shine"}),React.createElement("ellipse",{"cx": eye_cxb, "cy": eye_cy, "rx": eye_rx, "ry": eye_ry, "strokeWidth": (2), "className": "eye"}),React.createElement("circle",{"cx": pupil_cxb, "cy": pupil_cy, "r": pupil_r, "stroke": "transparent", "fill": "black", "className": "pupil"}),React.createElement("circle",{"cx": highlight_cxb, "cy": highlight_cy, "r": highlight_r, "stroke": "transparent", "className": "shine"}));
});
shapes.proportional.nose = (function shapes$proportional$nose(p__23275,dev_QMARK_){
var map__23277 = p__23275;
var map__23277__$1 = ((cljs.core.seq_QMARK_.call(null,map__23277))?cljs.core.apply.call(null,cljs.core.hash_map,map__23277):map__23277);
var measures = map__23277__$1;
var head_cx = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265));
var head_cy = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232));
var eye_cxa = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"eye-cxa","eye-cxa",-1029825486));
var eye_cxb = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"eye-cxb","eye-cxb",1053942691));
var eye_cy = cljs.core.get.call(null,map__23277__$1,new cljs.core.Keyword(null,"eye-cy","eye-cy",650254757));
var nose_x = head_cx;
return cljs.core.merge.call(null,measures);
});
shapes.proportional.head = (function shapes$proportional$head(p__23278,dev_QMARK_){
var map__23280 = p__23278;
var map__23280__$1 = ((cljs.core.seq_QMARK_.call(null,map__23280))?cljs.core.apply.call(null,cljs.core.hash_map,map__23280):map__23280);
var cx = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var width = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__23280__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head-cx","head-cx",-1674502265),cx,new cljs.core.Keyword(null,"head-cy","head-cy",-1378313232),cy,new cljs.core.Keyword(null,"head-width","head-width",-652130664),width,new cljs.core.Keyword(null,"head-height","head-height",1646756657),height,new cljs.core.Keyword(null,"head-rx","head-rx",-1157911938),(width / (2)),new cljs.core.Keyword(null,"head-ry","head-ry",-2093507644),(height / (2))], null);
});
shapes.proportional.basic_measurements = (function shapes$proportional$basic_measurements(dev_QMARK_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(400),new cljs.core.Keyword(null,"cy","cy",755331060),(150),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(dev_QMARK_)?(150):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(100),(200),0.1))),new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(dev_QMARK_)?(200):cljs.core.rand_nth.call(null,cljs.core.range.call(null,(150),(200),0.1)))], null);
});

//# sourceMappingURL=proportional.js.map