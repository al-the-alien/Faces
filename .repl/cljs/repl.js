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
var seq__38534_38538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38535_38539 = null;
var count__38536_38540 = (0);
var i__38537_38541 = (0);
while(true){
if((i__38537_38541 < count__38536_38540)){
var f_38542 = cljs.core._nth.call(null,chunk__38535_38539,i__38537_38541);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_38542);

var G__38543 = seq__38534_38538;
var G__38544 = chunk__38535_38539;
var G__38545 = count__38536_38540;
var G__38546 = (i__38537_38541 + (1));
seq__38534_38538 = G__38543;
chunk__38535_38539 = G__38544;
count__38536_38540 = G__38545;
i__38537_38541 = G__38546;
continue;
} else {
var temp__4406__auto___38547 = cljs.core.seq.call(null,seq__38534_38538);
if(temp__4406__auto___38547){
var seq__38534_38548__$1 = temp__4406__auto___38547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38534_38548__$1)){
var c__11728__auto___38549 = cljs.core.chunk_first.call(null,seq__38534_38548__$1);
var G__38550 = cljs.core.chunk_rest.call(null,seq__38534_38548__$1);
var G__38551 = c__11728__auto___38549;
var G__38552 = cljs.core.count.call(null,c__11728__auto___38549);
var G__38553 = (0);
seq__38534_38538 = G__38550;
chunk__38535_38539 = G__38551;
count__38536_38540 = G__38552;
i__38537_38541 = G__38553;
continue;
} else {
var f_38554 = cljs.core.first.call(null,seq__38534_38548__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_38554);

var G__38555 = cljs.core.next.call(null,seq__38534_38548__$1);
var G__38556 = null;
var G__38557 = (0);
var G__38558 = (0);
seq__38534_38538 = G__38555;
chunk__38535_38539 = G__38556;
count__38536_38540 = G__38557;
i__38537_38541 = G__38558;
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
