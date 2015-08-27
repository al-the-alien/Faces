// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31506_31518 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31507_31519 = null;
var count__31508_31520 = (0);
var i__31509_31521 = (0);
while(true){
if((i__31509_31521 < count__31508_31520)){
var f_31522 = cljs.core._nth.call(null,chunk__31507_31519,i__31509_31521);
cljs.core.println.call(null,"  ",f_31522);

var G__31523 = seq__31506_31518;
var G__31524 = chunk__31507_31519;
var G__31525 = count__31508_31520;
var G__31526 = (i__31509_31521 + (1));
seq__31506_31518 = G__31523;
chunk__31507_31519 = G__31524;
count__31508_31520 = G__31525;
i__31509_31521 = G__31526;
continue;
} else {
var temp__4425__auto___31527 = cljs.core.seq.call(null,seq__31506_31518);
if(temp__4425__auto___31527){
var seq__31506_31528__$1 = temp__4425__auto___31527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31506_31528__$1)){
var c__17412__auto___31529 = cljs.core.chunk_first.call(null,seq__31506_31528__$1);
var G__31530 = cljs.core.chunk_rest.call(null,seq__31506_31528__$1);
var G__31531 = c__17412__auto___31529;
var G__31532 = cljs.core.count.call(null,c__17412__auto___31529);
var G__31533 = (0);
seq__31506_31518 = G__31530;
chunk__31507_31519 = G__31531;
count__31508_31520 = G__31532;
i__31509_31521 = G__31533;
continue;
} else {
var f_31534 = cljs.core.first.call(null,seq__31506_31528__$1);
cljs.core.println.call(null,"  ",f_31534);

var G__31535 = cljs.core.next.call(null,seq__31506_31528__$1);
var G__31536 = null;
var G__31537 = (0);
var G__31538 = (0);
seq__31506_31518 = G__31535;
chunk__31507_31519 = G__31536;
count__31508_31520 = G__31537;
i__31509_31521 = G__31538;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31539 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16627__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31539);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31539)))?cljs.core.second.call(null,arglists_31539):arglists_31539));
}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31510 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31511 = null;
var count__31512 = (0);
var i__31513 = (0);
while(true){
if((i__31513 < count__31512)){
var vec__31514 = cljs.core._nth.call(null,chunk__31511,i__31513);
var name = cljs.core.nth.call(null,vec__31514,(0),null);
var map__31515 = cljs.core.nth.call(null,vec__31514,(1),null);
var map__31515__$1 = ((cljs.core.seq_QMARK_.call(null,map__31515))?cljs.core.apply.call(null,cljs.core.hash_map,map__31515):map__31515);
var doc = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31540 = seq__31510;
var G__31541 = chunk__31511;
var G__31542 = count__31512;
var G__31543 = (i__31513 + (1));
seq__31510 = G__31540;
chunk__31511 = G__31541;
count__31512 = G__31542;
i__31513 = G__31543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31510);
if(temp__4425__auto__){
var seq__31510__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31510__$1)){
var c__17412__auto__ = cljs.core.chunk_first.call(null,seq__31510__$1);
var G__31544 = cljs.core.chunk_rest.call(null,seq__31510__$1);
var G__31545 = c__17412__auto__;
var G__31546 = cljs.core.count.call(null,c__17412__auto__);
var G__31547 = (0);
seq__31510 = G__31544;
chunk__31511 = G__31545;
count__31512 = G__31546;
i__31513 = G__31547;
continue;
} else {
var vec__31516 = cljs.core.first.call(null,seq__31510__$1);
var name = cljs.core.nth.call(null,vec__31516,(0),null);
var map__31517 = cljs.core.nth.call(null,vec__31516,(1),null);
var map__31517__$1 = ((cljs.core.seq_QMARK_.call(null,map__31517))?cljs.core.apply.call(null,cljs.core.hash_map,map__31517):map__31517);
var doc = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31517__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31548 = cljs.core.next.call(null,seq__31510__$1);
var G__31549 = null;
var G__31550 = (0);
var G__31551 = (0);
seq__31510 = G__31548;
chunk__31511 = G__31549;
count__31512 = G__31550;
i__31513 = G__31551;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map