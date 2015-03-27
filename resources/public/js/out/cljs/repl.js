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
var seq__33006_33010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33007_33011 = null;
var count__33008_33012 = (0);
var i__33009_33013 = (0);
while(true){
if((i__33009_33013 < count__33008_33012)){
var f_33014 = cljs.core._nth.call(null,chunk__33007_33011,i__33009_33013);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_33014);

var G__33015 = seq__33006_33010;
var G__33016 = chunk__33007_33011;
var G__33017 = count__33008_33012;
var G__33018 = (i__33009_33013 + (1));
seq__33006_33010 = G__33015;
chunk__33007_33011 = G__33016;
count__33008_33012 = G__33017;
i__33009_33013 = G__33018;
continue;
} else {
var temp__4406__auto___33019 = cljs.core.seq.call(null,seq__33006_33010);
if(temp__4406__auto___33019){
var seq__33006_33020__$1 = temp__4406__auto___33019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33006_33020__$1)){
var c__15231__auto___33021 = cljs.core.chunk_first.call(null,seq__33006_33020__$1);
var G__33022 = cljs.core.chunk_rest.call(null,seq__33006_33020__$1);
var G__33023 = c__15231__auto___33021;
var G__33024 = cljs.core.count.call(null,c__15231__auto___33021);
var G__33025 = (0);
seq__33006_33010 = G__33022;
chunk__33007_33011 = G__33023;
count__33008_33012 = G__33024;
i__33009_33013 = G__33025;
continue;
} else {
var f_33026 = cljs.core.first.call(null,seq__33006_33020__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_33026);

var G__33027 = cljs.core.next.call(null,seq__33006_33020__$1);
var G__33028 = null;
var G__33029 = (0);
var G__33030 = (0);
seq__33006_33010 = G__33027;
chunk__33007_33011 = G__33028;
count__33008_33012 = G__33029;
i__33009_33013 = G__33030;
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