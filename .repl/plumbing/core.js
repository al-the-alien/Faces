// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__37417__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__37417 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__37418__i = 0, G__37418__a = new Array(arguments.length -  5);
while (G__37418__i < G__37418__a.length) {G__37418__a[G__37418__i] = arguments[G__37418__i + 5]; ++G__37418__i;}
  xs = new cljs.core.IndexedSeq(G__37418__a,0);
} 
return G__37417__delegate.call(this,m,k,f,x1,x2,xs);};
G__37417.cljs$lang$maxFixedArity = 5;
G__37417.cljs$lang$applyTo = (function (arglist__37419){
var m = cljs.core.first(arglist__37419);
arglist__37419 = cljs.core.next(arglist__37419);
var k = cljs.core.first(arglist__37419);
arglist__37419 = cljs.core.next(arglist__37419);
var f = cljs.core.first(arglist__37419);
arglist__37419 = cljs.core.next(arglist__37419);
var x1 = cljs.core.first(arglist__37419);
arglist__37419 = cljs.core.next(arglist__37419);
var x2 = cljs.core.first(arglist__37419);
var xs = cljs.core.rest(arglist__37419);
return G__37417__delegate(m,k,f,x1,x2,xs);
});
G__37417.cljs$core$IFn$_invoke$arity$variadic = G__37417__delegate;
return G__37417;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
var G__37420 = null;
if (arguments.length > 5) {
var G__37421__i = 0, G__37421__a = new Array(arguments.length -  5);
while (G__37421__i < G__37421__a.length) {G__37421__a[G__37421__i] = arguments[G__37421__i + 5]; ++G__37421__i;}
G__37420 = new cljs.core.IndexedSeq(G__37421__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__37420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__21717__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__37430_37436 = cljs.core.seq.call(null,m);
var chunk__37431_37437 = null;
var count__37432_37438 = (0);
var i__37433_37439 = (0);
while(true){
if((i__37433_37439 < count__37432_37438)){
var vec__37434_37440 = cljs.core._nth.call(null,chunk__37431_37437,i__37433_37439);
var k_37441 = cljs.core.nth.call(null,vec__37434_37440,(0),null);
var v_37442 = cljs.core.nth.call(null,vec__37434_37440,(1),null);
var m37429_37443 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37429_37443,k_37441,f.call(null,v_37442)));

var G__37444 = seq__37430_37436;
var G__37445 = chunk__37431_37437;
var G__37446 = count__37432_37438;
var G__37447 = (i__37433_37439 + (1));
seq__37430_37436 = G__37444;
chunk__37431_37437 = G__37445;
count__37432_37438 = G__37446;
i__37433_37439 = G__37447;
continue;
} else {
var temp__4406__auto___37448 = cljs.core.seq.call(null,seq__37430_37436);
if(temp__4406__auto___37448){
var seq__37430_37449__$1 = temp__4406__auto___37448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37430_37449__$1)){
var c__11728__auto___37450 = cljs.core.chunk_first.call(null,seq__37430_37449__$1);
var G__37451 = cljs.core.chunk_rest.call(null,seq__37430_37449__$1);
var G__37452 = c__11728__auto___37450;
var G__37453 = cljs.core.count.call(null,c__11728__auto___37450);
var G__37454 = (0);
seq__37430_37436 = G__37451;
chunk__37431_37437 = G__37452;
count__37432_37438 = G__37453;
i__37433_37439 = G__37454;
continue;
} else {
var vec__37435_37455 = cljs.core.first.call(null,seq__37430_37449__$1);
var k_37456 = cljs.core.nth.call(null,vec__37435_37455,(0),null);
var v_37457 = cljs.core.nth.call(null,vec__37435_37455,(1),null);
var m37429_37458 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37429_37458,k_37456,f.call(null,v_37457)));

var G__37459 = cljs.core.next.call(null,seq__37430_37449__$1);
var G__37460 = null;
var G__37461 = (0);
var G__37462 = (0);
seq__37430_37436 = G__37459;
chunk__37431_37437 = G__37460;
count__37432_37438 = G__37461;
i__37433_37439 = G__37462;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21717__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__21717__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__37471_37477 = cljs.core.seq.call(null,m);
var chunk__37472_37478 = null;
var count__37473_37479 = (0);
var i__37474_37480 = (0);
while(true){
if((i__37474_37480 < count__37473_37479)){
var vec__37475_37481 = cljs.core._nth.call(null,chunk__37472_37478,i__37474_37480);
var k_37482 = cljs.core.nth.call(null,vec__37475_37481,(0),null);
var v_37483 = cljs.core.nth.call(null,vec__37475_37481,(1),null);
var m37470_37484 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37470_37484,f.call(null,k_37482),v_37483));

var G__37485 = seq__37471_37477;
var G__37486 = chunk__37472_37478;
var G__37487 = count__37473_37479;
var G__37488 = (i__37474_37480 + (1));
seq__37471_37477 = G__37485;
chunk__37472_37478 = G__37486;
count__37473_37479 = G__37487;
i__37474_37480 = G__37488;
continue;
} else {
var temp__4406__auto___37489 = cljs.core.seq.call(null,seq__37471_37477);
if(temp__4406__auto___37489){
var seq__37471_37490__$1 = temp__4406__auto___37489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37471_37490__$1)){
var c__11728__auto___37491 = cljs.core.chunk_first.call(null,seq__37471_37490__$1);
var G__37492 = cljs.core.chunk_rest.call(null,seq__37471_37490__$1);
var G__37493 = c__11728__auto___37491;
var G__37494 = cljs.core.count.call(null,c__11728__auto___37491);
var G__37495 = (0);
seq__37471_37477 = G__37492;
chunk__37472_37478 = G__37493;
count__37473_37479 = G__37494;
i__37474_37480 = G__37495;
continue;
} else {
var vec__37476_37496 = cljs.core.first.call(null,seq__37471_37490__$1);
var k_37497 = cljs.core.nth.call(null,vec__37476_37496,(0),null);
var v_37498 = cljs.core.nth.call(null,vec__37476_37496,(1),null);
var m37470_37499 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37470_37499,f.call(null,k_37497),v_37498));

var G__37500 = cljs.core.next.call(null,seq__37471_37490__$1);
var G__37501 = null;
var G__37502 = (0);
var G__37503 = (0);
seq__37471_37477 = G__37500;
chunk__37472_37478 = G__37501;
count__37473_37479 = G__37502;
i__37474_37480 = G__37503;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21717__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__21717__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__37510_37514 = cljs.core.seq.call(null,ks);
var chunk__37511_37515 = null;
var count__37512_37516 = (0);
var i__37513_37517 = (0);
while(true){
if((i__37513_37517 < count__37512_37516)){
var k_37518 = cljs.core._nth.call(null,chunk__37511_37515,i__37513_37517);
var m37509_37519 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37509_37519,k_37518,f.call(null,k_37518)));

var G__37520 = seq__37510_37514;
var G__37521 = chunk__37511_37515;
var G__37522 = count__37512_37516;
var G__37523 = (i__37513_37517 + (1));
seq__37510_37514 = G__37520;
chunk__37511_37515 = G__37521;
count__37512_37516 = G__37522;
i__37513_37517 = G__37523;
continue;
} else {
var temp__4406__auto___37524 = cljs.core.seq.call(null,seq__37510_37514);
if(temp__4406__auto___37524){
var seq__37510_37525__$1 = temp__4406__auto___37524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37510_37525__$1)){
var c__11728__auto___37526 = cljs.core.chunk_first.call(null,seq__37510_37525__$1);
var G__37527 = cljs.core.chunk_rest.call(null,seq__37510_37525__$1);
var G__37528 = c__11728__auto___37526;
var G__37529 = cljs.core.count.call(null,c__11728__auto___37526);
var G__37530 = (0);
seq__37510_37514 = G__37527;
chunk__37511_37515 = G__37528;
count__37512_37516 = G__37529;
i__37513_37517 = G__37530;
continue;
} else {
var k_37531 = cljs.core.first.call(null,seq__37510_37525__$1);
var m37509_37532 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37509_37532,k_37531,f.call(null,k_37531)));

var G__37533 = cljs.core.next.call(null,seq__37510_37525__$1);
var G__37534 = null;
var G__37535 = (0);
var G__37536 = (0);
seq__37510_37514 = G__37533;
chunk__37511_37515 = G__37534;
count__37512_37516 = G__37535;
i__37513_37517 = G__37536;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21717__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__21717__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__37543_37547 = cljs.core.seq.call(null,vs);
var chunk__37544_37548 = null;
var count__37545_37549 = (0);
var i__37546_37550 = (0);
while(true){
if((i__37546_37550 < count__37545_37549)){
var v_37551 = cljs.core._nth.call(null,chunk__37544_37548,i__37546_37550);
var m37542_37552 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37542_37552,f.call(null,v_37551),v_37551));

var G__37553 = seq__37543_37547;
var G__37554 = chunk__37544_37548;
var G__37555 = count__37545_37549;
var G__37556 = (i__37546_37550 + (1));
seq__37543_37547 = G__37553;
chunk__37544_37548 = G__37554;
count__37545_37549 = G__37555;
i__37546_37550 = G__37556;
continue;
} else {
var temp__4406__auto___37557 = cljs.core.seq.call(null,seq__37543_37547);
if(temp__4406__auto___37557){
var seq__37543_37558__$1 = temp__4406__auto___37557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37543_37558__$1)){
var c__11728__auto___37559 = cljs.core.chunk_first.call(null,seq__37543_37558__$1);
var G__37560 = cljs.core.chunk_rest.call(null,seq__37543_37558__$1);
var G__37561 = c__11728__auto___37559;
var G__37562 = cljs.core.count.call(null,c__11728__auto___37559);
var G__37563 = (0);
seq__37543_37547 = G__37560;
chunk__37544_37548 = G__37561;
count__37545_37549 = G__37562;
i__37546_37550 = G__37563;
continue;
} else {
var v_37564 = cljs.core.first.call(null,seq__37543_37558__$1);
var m37542_37565 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37542_37565,f.call(null,v_37564),v_37564));

var G__37566 = cljs.core.next.call(null,seq__37543_37558__$1);
var G__37567 = null;
var G__37568 = (0);
var G__37569 = (0);
seq__37543_37547 = G__37566;
chunk__37544_37548 = G__37567;
count__37545_37549 = G__37568;
i__37546_37550 = G__37569;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21717__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__37570){
var vec__37572 = p__37570;
var k = cljs.core.nth.call(null,vec__37572,(0),null);
var ks = cljs.core.nthnext.call(null,vec__37572,(1));
if(cljs.core.truth_(m)){
var temp__4404__auto__ = (function (){var and__10929__auto__ = ks;
if(and__10929__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__10929__auto__;
}
})();
if(cljs.core.truth_(temp__4404__auto__)){
var res = temp__4404__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__21717__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__37581_37587 = cljs.core.seq.call(null,x);
var chunk__37582_37588 = null;
var count__37583_37589 = (0);
var i__37584_37590 = (0);
while(true){
if((i__37584_37590 < count__37583_37589)){
var vec__37585_37591 = cljs.core._nth.call(null,chunk__37582_37588,i__37584_37590);
var k_37592 = cljs.core.nth.call(null,vec__37585_37591,(0),null);
var v_37593 = cljs.core.nth.call(null,vec__37585_37591,(1),null);
var m37580_37594 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37580_37594,((typeof k_37592 === 'string')?cljs.core.keyword.call(null,k_37592):k_37592),keywordize_map.call(null,v_37593)));

var G__37595 = seq__37581_37587;
var G__37596 = chunk__37582_37588;
var G__37597 = count__37583_37589;
var G__37598 = (i__37584_37590 + (1));
seq__37581_37587 = G__37595;
chunk__37582_37588 = G__37596;
count__37583_37589 = G__37597;
i__37584_37590 = G__37598;
continue;
} else {
var temp__4406__auto___37599 = cljs.core.seq.call(null,seq__37581_37587);
if(temp__4406__auto___37599){
var seq__37581_37600__$1 = temp__4406__auto___37599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37581_37600__$1)){
var c__11728__auto___37601 = cljs.core.chunk_first.call(null,seq__37581_37600__$1);
var G__37602 = cljs.core.chunk_rest.call(null,seq__37581_37600__$1);
var G__37603 = c__11728__auto___37601;
var G__37604 = cljs.core.count.call(null,c__11728__auto___37601);
var G__37605 = (0);
seq__37581_37587 = G__37602;
chunk__37582_37588 = G__37603;
count__37583_37589 = G__37604;
i__37584_37590 = G__37605;
continue;
} else {
var vec__37586_37606 = cljs.core.first.call(null,seq__37581_37600__$1);
var k_37607 = cljs.core.nth.call(null,vec__37586_37606,(0),null);
var v_37608 = cljs.core.nth.call(null,vec__37586_37606,(1),null);
var m37580_37609 = cljs.core.deref.call(null,m_atom__21717__auto__);
cljs.core.reset_BANG_.call(null,m_atom__21717__auto__,cljs.core.assoc_BANG_.call(null,m37580_37609,((typeof k_37607 === 'string')?cljs.core.keyword.call(null,k_37607):k_37607),keywordize_map.call(null,v_37608)));

var G__37610 = cljs.core.next.call(null,seq__37581_37600__$1);
var G__37611 = null;
var G__37612 = (0);
var G__37613 = (0);
seq__37581_37587 = G__37610;
chunk__37582_37588 = G__37611;
count__37583_37589 = G__37612;
i__37584_37590 = G__37613;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__21717__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4404__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4404__auto__)){
var pair__21786__auto__ = temp__4404__auto__;
return cljs.core.val.call(null,pair__21786__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__37614 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__37615 = cljs.core.next.call(null,ks);
m = G__37614;
ks = G__37615;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__10941__auto__ = m;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__11697__auto__ = (function iter__37624(s__37625){
return (new cljs.core.LazySeq(null,(function (){
var s__37625__$1 = s__37625;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__37625__$1);
if(temp__4406__auto__){
var s__37625__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37625__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__37625__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__37627 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__37626 = (0);
while(true){
if((i__37626 < size__11696__auto__)){
var vec__37630 = cljs.core._nth.call(null,c__11695__auto__,i__37626);
var k = cljs.core.nth.call(null,vec__37630,(0),null);
var v = cljs.core.nth.call(null,vec__37630,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__37627,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__37632 = (i__37626 + (1));
i__37626 = G__37632;
continue;
} else {
var G__37633 = (i__37626 + (1));
i__37626 = G__37633;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37627),iter__37624.call(null,cljs.core.chunk_rest.call(null,s__37625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37627),null);
}
} else {
var vec__37631 = cljs.core.first.call(null,s__37625__$2);
var k = cljs.core.nth.call(null,vec__37631,(0),null);
var v = cljs.core.nth.call(null,vec__37631,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__37624.call(null,cljs.core.rest.call(null,s__37625__$2)));
} else {
var G__37634 = cljs.core.rest.call(null,s__37625__$2);
s__37625__$1 = G__37634;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__37635__i = 0, G__37635__a = new Array(arguments.length -  1);
while (G__37635__i < G__37635__a.length) {G__37635__a[G__37635__i] = arguments[G__37635__i + 1]; ++G__37635__i;}
  kvs = new cljs.core.IndexedSeq(G__37635__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__37636){
var m = cljs.core.first(arglist__37636);
var kvs = cljs.core.rest(arglist__37636);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__37637__i = 0, G__37637__a = new Array(arguments.length -  3);
while (G__37637__i < G__37637__a.length) {G__37637__a[G__37637__i] = arguments[G__37637__i + 3]; ++G__37637__i;}
  args = new cljs.core.IndexedSeq(G__37637__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__37638){
var m = cljs.core.first(arglist__37638);
arglist__37638 = cljs.core.next(arglist__37638);
var key_seq = cljs.core.first(arglist__37638);
arglist__37638 = cljs.core.next(arglist__37638);
var f = cljs.core.first(arglist__37638);
var args = cljs.core.rest(arglist__37638);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4406__auto__ = cljs.core.next.call(null,s);
if(temp__4406__auto__){
var n = temp__4406__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4406__auto__ = cljs.core.seq.call(null,xs);
if(temp__4406__auto__){
var xs__$1 = temp__4406__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__11697__auto__ = ((function (s){
return (function iter__37643(s__37644){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__37644__$1 = s__37644;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__37644__$1);
if(temp__4406__auto__){
var s__37644__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37644__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__37644__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__37646 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__37645 = (0);
while(true){
if((i__37645 < size__11696__auto__)){
var x = cljs.core._nth.call(null,c__11695__auto__,i__37645);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__37646,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__37647 = (i__37645 + (1));
i__37645 = G__37647;
continue;
} else {
var G__37648 = (i__37645 + (1));
i__37645 = G__37648;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37646),iter__37643.call(null,cljs.core.chunk_rest.call(null,s__37644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37646),null);
}
} else {
var x = cljs.core.first.call(null,s__37644__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__37643.call(null,cljs.core.rest.call(null,s__37644__$2)));
} else {
var G__37649 = cljs.core.rest.call(null,s__37644__$2);
s__37644__$1 = G__37649;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__11697__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__37650__i = 0, G__37650__a = new Array(arguments.length -  0);
while (G__37650__i < G__37650__a.length) {G__37650__a[G__37650__i] = arguments[G__37650__i + 0]; ++G__37650__i;}
  colls = new cljs.core.IndexedSeq(G__37650__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__37651){
var colls = cljs.core.seq(arglist__37651);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__37652__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__37653 = conj_when.call(null,coll,x);
var G__37654 = cljs.core.first.call(null,xs);
var G__37655 = cljs.core.next.call(null,xs);
coll = G__37653;
x = G__37654;
xs = G__37655;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__37652 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__37656__i = 0, G__37656__a = new Array(arguments.length -  2);
while (G__37656__i < G__37656__a.length) {G__37656__a[G__37656__i] = arguments[G__37656__i + 2]; ++G__37656__i;}
  xs = new cljs.core.IndexedSeq(G__37656__a,0);
} 
return G__37652__delegate.call(this,coll,x,xs);};
G__37652.cljs$lang$maxFixedArity = 2;
G__37652.cljs$lang$applyTo = (function (arglist__37657){
var coll = cljs.core.first(arglist__37657);
arglist__37657 = cljs.core.next(arglist__37657);
var x = cljs.core.first(arglist__37657);
var xs = cljs.core.rest(arglist__37657);
return G__37652__delegate(coll,x,xs);
});
G__37652.cljs$core$IFn$_invoke$arity$variadic = G__37652__delegate;
return G__37652;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__37658 = null;
if (arguments.length > 2) {
var G__37659__i = 0, G__37659__a = new Array(arguments.length -  2);
while (G__37659__i < G__37659__a.length) {G__37659__a[G__37659__i] = arguments[G__37659__i + 2]; ++G__37659__i;}
G__37658 = new cljs.core.IndexedSeq(G__37659__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__37658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__37661__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__37660_SHARP_){
return cljs.core.apply.call(null,f,p1__37660_SHARP_,args);
}));
};
var G__37661 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__37662__i = 0, G__37662__a = new Array(arguments.length -  2);
while (G__37662__i < G__37662__a.length) {G__37662__a[G__37662__i] = arguments[G__37662__i + 2]; ++G__37662__i;}
  args = new cljs.core.IndexedSeq(G__37662__a,0);
} 
return G__37661__delegate.call(this,a,f,args);};
G__37661.cljs$lang$maxFixedArity = 2;
G__37661.cljs$lang$applyTo = (function (arglist__37663){
var a = cljs.core.first(arglist__37663);
arglist__37663 = cljs.core.next(arglist__37663);
var f = cljs.core.first(arglist__37663);
var args = cljs.core.rest(arglist__37663);
return G__37661__delegate(a,f,args);
});
G__37661.cljs$core$IFn$_invoke$arity$variadic = G__37661__delegate;
return G__37661;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__37664 = null;
if (arguments.length > 2) {
var G__37665__i = 0, G__37665__a = new Array(arguments.length -  2);
while (G__37665__i < G__37665__a.length) {G__37665__a[G__37665__i] = arguments[G__37665__i + 2]; ++G__37665__i;}
G__37664 = new cljs.core.IndexedSeq(G__37665__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__37664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__37666__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__37666 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__37667__i = 0, G__37667__a = new Array(arguments.length -  2);
while (G__37667__i < G__37667__a.length) {G__37667__a[G__37667__i] = arguments[G__37667__i + 2]; ++G__37667__i;}
  args = new cljs.core.IndexedSeq(G__37667__a,0);
} 
return G__37666__delegate.call(this,f,arg,args);};
G__37666.cljs$lang$maxFixedArity = 2;
G__37666.cljs$lang$applyTo = (function (arglist__37668){
var f = cljs.core.first(arglist__37668);
arglist__37668 = cljs.core.next(arglist__37668);
var arg = cljs.core.first(arglist__37668);
var args = cljs.core.rest(arglist__37668);
return G__37666__delegate(f,arg,args);
});
G__37666.cljs$core$IFn$_invoke$arity$variadic = G__37666__delegate;
return G__37666;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__37669 = null;
if (arguments.length > 2) {
var G__37670__i = 0, G__37670__a = new Array(arguments.length -  2);
while (G__37670__i < G__37670__a.length) {G__37670__a[G__37670__i] = arguments[G__37670__i + 2]; ++G__37670__i;}
G__37669 = new cljs.core.IndexedSeq(G__37670__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__37669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;
