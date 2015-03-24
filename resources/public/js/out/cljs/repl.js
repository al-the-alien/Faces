// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4406__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4406__auto__)){
var ns = temp__4406__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36008_36012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36009_36013 = null;
var count__36010_36014 = (0);
var i__36011_36015 = (0);
while(true){
if((i__36011_36015 < count__36010_36014)){
var f_36016 = cljs.core._nth.call(null,chunk__36009_36013,i__36011_36015);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_36016);

var G__36017 = seq__36008_36012;
var G__36018 = chunk__36009_36013;
var G__36019 = count__36010_36014;
var G__36020 = (i__36011_36015 + (1));
seq__36008_36012 = G__36017;
chunk__36009_36013 = G__36018;
count__36010_36014 = G__36019;
i__36011_36015 = G__36020;
continue;
} else {
var temp__4406__auto___36021 = cljs.core.seq.call(null,seq__36008_36012);
if(temp__4406__auto___36021){
var seq__36008_36022__$1 = temp__4406__auto___36021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36008_36022__$1)){
var c__15231__auto___36023 = cljs.core.chunk_first.call(null,seq__36008_36022__$1);
var G__36024 = cljs.core.chunk_rest.call(null,seq__36008_36022__$1);
var G__36025 = c__15231__auto___36023;
var G__36026 = cljs.core.count.call(null,c__15231__auto___36023);
var G__36027 = (0);
seq__36008_36012 = G__36024;
chunk__36009_36013 = G__36025;
count__36010_36014 = G__36026;
i__36011_36015 = G__36027;
continue;
} else {
var f_36028 = cljs.core.first.call(null,seq__36008_36022__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_36028);

var G__36029 = cljs.core.next.call(null,seq__36008_36022__$1);
var G__36030 = null;
var G__36031 = (0);
var G__36032 = (0);
seq__36008_36012 = G__36029;
chunk__36009_36013 = G__36030;
count__36010_36014 = G__36031;
i__36011_36015 = G__36032;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map