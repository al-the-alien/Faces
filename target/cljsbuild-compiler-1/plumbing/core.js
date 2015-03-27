// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$50;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19565) : f.call(null,G__19565));
})());
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19567 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19566,G__19567) : f.call(null,G__19566,G__19567));
})());
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__19568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__19569 = x1;
var G__19570 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19568,G__19569,G__19570) : f.call(null,G__19568,G__19569,G__19570));
})());
});
var update__6 = (function() { 
var G__19571__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
};
var G__19571 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__19572__i = 0, G__19572__a = new Array(arguments.length -  5);
while (G__19572__i < G__19572__a.length) {G__19572__a[G__19572__i] = arguments[G__19572__i + 5]; ++G__19572__i;}
  xs = new cljs.core.IndexedSeq(G__19572__a,0);
} 
return G__19571__delegate.call(this,m,k,f,x1,x2,xs);};
G__19571.cljs$lang$maxFixedArity = 5;
G__19571.cljs$lang$applyTo = (function (arglist__19573){
var m = cljs.core.first(arglist__19573);
arglist__19573 = cljs.core.next(arglist__19573);
var k = cljs.core.first(arglist__19573);
arglist__19573 = cljs.core.next(arglist__19573);
var f = cljs.core.first(arglist__19573);
arglist__19573 = cljs.core.next(arglist__19573);
var x1 = cljs.core.first(arglist__19573);
arglist__19573 = cljs.core.next(arglist__19573);
var x2 = cljs.core.first(arglist__19573);
var xs = cljs.core.rest(arglist__19573);
return G__19571__delegate(m,k,f,x1,x2,xs);
});
G__19571.cljs$core$IFn$_invoke$arity$variadic = G__19571__delegate;
return G__19571;
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
var G__19574 = null;
if (arguments.length > 5) {
var G__19575__i = 0, G__19575__a = new Array(arguments.length -  5);
while (G__19575__i < G__19575__a.length) {G__19575__a[G__19575__i] = arguments[G__19575__i + 5]; ++G__19575__i;}
G__19574 = new cljs.core.IndexedSeq(G__19575__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__19574);
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
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__19595 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19595) : f.call(null,G__19595));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__19596 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19596) : f.call(null,G__19596));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14979__auto__ = (function (){var G__19598 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19598) : cljs.core.atom.call(null,G__19598));
})();
var seq__19599_19614 = cljs.core.seq(m);
var chunk__19600_19615 = null;
var count__19601_19616 = (0);
var i__19602_19617 = (0);
while(true){
if((i__19602_19617 < count__19601_19616)){
var vec__19603_19618 = chunk__19600_19615.cljs$core$IIndexed$_nth$arity$2(null,i__19602_19617);
var k_19619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19603_19618,(0),null);
var v_19620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19603_19618,(1),null);
var m19597_19621 = (function (){var G__19604 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19604) : cljs.core.deref.call(null,G__19604));
})();
var G__19605_19622 = m_atom__14979__auto__;
var G__19606_19623 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19597_19621,k_19619,(function (){var G__19607 = v_19620;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19607) : f.call(null,G__19607));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19605_19622,G__19606_19623) : cljs.core.reset_BANG_.call(null,G__19605_19622,G__19606_19623));

var G__19624 = seq__19599_19614;
var G__19625 = chunk__19600_19615;
var G__19626 = count__19601_19616;
var G__19627 = (i__19602_19617 + (1));
seq__19599_19614 = G__19624;
chunk__19600_19615 = G__19625;
count__19601_19616 = G__19626;
i__19602_19617 = G__19627;
continue;
} else {
var temp__4406__auto___19628 = cljs.core.seq(seq__19599_19614);
if(temp__4406__auto___19628){
var seq__19599_19629__$1 = temp__4406__auto___19628;
if(cljs.core.chunked_seq_QMARK_(seq__19599_19629__$1)){
var c__6677__auto___19630 = cljs.core.chunk_first(seq__19599_19629__$1);
var G__19631 = cljs.core.chunk_rest(seq__19599_19629__$1);
var G__19632 = c__6677__auto___19630;
var G__19633 = cljs.core.count(c__6677__auto___19630);
var G__19634 = (0);
seq__19599_19614 = G__19631;
chunk__19600_19615 = G__19632;
count__19601_19616 = G__19633;
i__19602_19617 = G__19634;
continue;
} else {
var vec__19608_19635 = cljs.core.first(seq__19599_19629__$1);
var k_19636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19608_19635,(0),null);
var v_19637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19608_19635,(1),null);
var m19597_19638 = (function (){var G__19609 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19609) : cljs.core.deref.call(null,G__19609));
})();
var G__19610_19639 = m_atom__14979__auto__;
var G__19611_19640 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19597_19638,k_19636,(function (){var G__19612 = v_19637;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19612) : f.call(null,G__19612));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19610_19639,G__19611_19640) : cljs.core.reset_BANG_.call(null,G__19610_19639,G__19611_19640));

var G__19641 = cljs.core.next(seq__19599_19629__$1);
var G__19642 = null;
var G__19643 = (0);
var G__19644 = (0);
seq__19599_19614 = G__19641;
chunk__19600_19615 = G__19642;
count__19601_19616 = G__19643;
i__19602_19617 = G__19644;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__19613 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19613) : cljs.core.deref.call(null,G__19613));
})());

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__19663 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19663) : f.call(null,G__19663));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__14979__auto__ = (function (){var G__19665 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19665) : cljs.core.atom.call(null,G__19665));
})();
var seq__19666_19681 = cljs.core.seq(m);
var chunk__19667_19682 = null;
var count__19668_19683 = (0);
var i__19669_19684 = (0);
while(true){
if((i__19669_19684 < count__19668_19683)){
var vec__19670_19685 = chunk__19667_19682.cljs$core$IIndexed$_nth$arity$2(null,i__19669_19684);
var k_19686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19670_19685,(0),null);
var v_19687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19670_19685,(1),null);
var m19664_19688 = (function (){var G__19671 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19671) : cljs.core.deref.call(null,G__19671));
})();
var G__19672_19689 = m_atom__14979__auto__;
var G__19673_19690 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19664_19688,(function (){var G__19674 = k_19686;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19674) : f.call(null,G__19674));
})(),v_19687);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19672_19689,G__19673_19690) : cljs.core.reset_BANG_.call(null,G__19672_19689,G__19673_19690));

var G__19691 = seq__19666_19681;
var G__19692 = chunk__19667_19682;
var G__19693 = count__19668_19683;
var G__19694 = (i__19669_19684 + (1));
seq__19666_19681 = G__19691;
chunk__19667_19682 = G__19692;
count__19668_19683 = G__19693;
i__19669_19684 = G__19694;
continue;
} else {
var temp__4406__auto___19695 = cljs.core.seq(seq__19666_19681);
if(temp__4406__auto___19695){
var seq__19666_19696__$1 = temp__4406__auto___19695;
if(cljs.core.chunked_seq_QMARK_(seq__19666_19696__$1)){
var c__6677__auto___19697 = cljs.core.chunk_first(seq__19666_19696__$1);
var G__19698 = cljs.core.chunk_rest(seq__19666_19696__$1);
var G__19699 = c__6677__auto___19697;
var G__19700 = cljs.core.count(c__6677__auto___19697);
var G__19701 = (0);
seq__19666_19681 = G__19698;
chunk__19667_19682 = G__19699;
count__19668_19683 = G__19700;
i__19669_19684 = G__19701;
continue;
} else {
var vec__19675_19702 = cljs.core.first(seq__19666_19696__$1);
var k_19703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19675_19702,(0),null);
var v_19704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19675_19702,(1),null);
var m19664_19705 = (function (){var G__19676 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19676) : cljs.core.deref.call(null,G__19676));
})();
var G__19677_19706 = m_atom__14979__auto__;
var G__19678_19707 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19664_19705,(function (){var G__19679 = k_19703;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19679) : f.call(null,G__19679));
})(),v_19704);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19677_19706,G__19678_19707) : cljs.core.reset_BANG_.call(null,G__19677_19706,G__19678_19707));

var G__19708 = cljs.core.next(seq__19666_19696__$1);
var G__19709 = null;
var G__19710 = (0);
var G__19711 = (0);
seq__19666_19681 = G__19708;
chunk__19667_19682 = G__19709;
count__19668_19683 = G__19710;
i__19669_19684 = G__19711;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__19680 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19680) : cljs.core.deref.call(null,G__19680));
})());
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__14979__auto__ = (function (){var G__19728 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19728) : cljs.core.atom.call(null,G__19728));
})();
var seq__19729_19742 = cljs.core.seq(ks);
var chunk__19730_19743 = null;
var count__19731_19744 = (0);
var i__19732_19745 = (0);
while(true){
if((i__19732_19745 < count__19731_19744)){
var k_19746 = chunk__19730_19743.cljs$core$IIndexed$_nth$arity$2(null,i__19732_19745);
var m19727_19747 = (function (){var G__19733 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19733) : cljs.core.deref.call(null,G__19733));
})();
var G__19734_19748 = m_atom__14979__auto__;
var G__19735_19749 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19727_19747,k_19746,(function (){var G__19736 = k_19746;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19736) : f.call(null,G__19736));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19734_19748,G__19735_19749) : cljs.core.reset_BANG_.call(null,G__19734_19748,G__19735_19749));

var G__19750 = seq__19729_19742;
var G__19751 = chunk__19730_19743;
var G__19752 = count__19731_19744;
var G__19753 = (i__19732_19745 + (1));
seq__19729_19742 = G__19750;
chunk__19730_19743 = G__19751;
count__19731_19744 = G__19752;
i__19732_19745 = G__19753;
continue;
} else {
var temp__4406__auto___19754 = cljs.core.seq(seq__19729_19742);
if(temp__4406__auto___19754){
var seq__19729_19755__$1 = temp__4406__auto___19754;
if(cljs.core.chunked_seq_QMARK_(seq__19729_19755__$1)){
var c__6677__auto___19756 = cljs.core.chunk_first(seq__19729_19755__$1);
var G__19757 = cljs.core.chunk_rest(seq__19729_19755__$1);
var G__19758 = c__6677__auto___19756;
var G__19759 = cljs.core.count(c__6677__auto___19756);
var G__19760 = (0);
seq__19729_19742 = G__19757;
chunk__19730_19743 = G__19758;
count__19731_19744 = G__19759;
i__19732_19745 = G__19760;
continue;
} else {
var k_19761 = cljs.core.first(seq__19729_19755__$1);
var m19727_19762 = (function (){var G__19737 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19737) : cljs.core.deref.call(null,G__19737));
})();
var G__19738_19763 = m_atom__14979__auto__;
var G__19739_19764 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19727_19762,k_19761,(function (){var G__19740 = k_19761;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19740) : f.call(null,G__19740));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19738_19763,G__19739_19764) : cljs.core.reset_BANG_.call(null,G__19738_19763,G__19739_19764));

var G__19765 = cljs.core.next(seq__19729_19755__$1);
var G__19766 = null;
var G__19767 = (0);
var G__19768 = (0);
seq__19729_19742 = G__19765;
chunk__19730_19743 = G__19766;
count__19731_19744 = G__19767;
i__19732_19745 = G__19768;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__19741 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19741) : cljs.core.deref.call(null,G__19741));
})());
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__14979__auto__ = (function (){var G__19785 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19785) : cljs.core.atom.call(null,G__19785));
})();
var seq__19786_19799 = cljs.core.seq(vs);
var chunk__19787_19800 = null;
var count__19788_19801 = (0);
var i__19789_19802 = (0);
while(true){
if((i__19789_19802 < count__19788_19801)){
var v_19803 = chunk__19787_19800.cljs$core$IIndexed$_nth$arity$2(null,i__19789_19802);
var m19784_19804 = (function (){var G__19790 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19790) : cljs.core.deref.call(null,G__19790));
})();
var G__19791_19805 = m_atom__14979__auto__;
var G__19792_19806 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19784_19804,(function (){var G__19793 = v_19803;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19793) : f.call(null,G__19793));
})(),v_19803);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19791_19805,G__19792_19806) : cljs.core.reset_BANG_.call(null,G__19791_19805,G__19792_19806));

var G__19807 = seq__19786_19799;
var G__19808 = chunk__19787_19800;
var G__19809 = count__19788_19801;
var G__19810 = (i__19789_19802 + (1));
seq__19786_19799 = G__19807;
chunk__19787_19800 = G__19808;
count__19788_19801 = G__19809;
i__19789_19802 = G__19810;
continue;
} else {
var temp__4406__auto___19811 = cljs.core.seq(seq__19786_19799);
if(temp__4406__auto___19811){
var seq__19786_19812__$1 = temp__4406__auto___19811;
if(cljs.core.chunked_seq_QMARK_(seq__19786_19812__$1)){
var c__6677__auto___19813 = cljs.core.chunk_first(seq__19786_19812__$1);
var G__19814 = cljs.core.chunk_rest(seq__19786_19812__$1);
var G__19815 = c__6677__auto___19813;
var G__19816 = cljs.core.count(c__6677__auto___19813);
var G__19817 = (0);
seq__19786_19799 = G__19814;
chunk__19787_19800 = G__19815;
count__19788_19801 = G__19816;
i__19789_19802 = G__19817;
continue;
} else {
var v_19818 = cljs.core.first(seq__19786_19812__$1);
var m19784_19819 = (function (){var G__19794 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19794) : cljs.core.deref.call(null,G__19794));
})();
var G__19795_19820 = m_atom__14979__auto__;
var G__19796_19821 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19784_19819,(function (){var G__19797 = v_19818;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19797) : f.call(null,G__19797));
})(),v_19818);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19795_19820,G__19796_19821) : cljs.core.reset_BANG_.call(null,G__19795_19820,G__19796_19821));

var G__19822 = cljs.core.next(seq__19786_19812__$1);
var G__19823 = null;
var G__19824 = (0);
var G__19825 = (0);
seq__19786_19799 = G__19822;
chunk__19787_19800 = G__19823;
count__19788_19801 = G__19824;
i__19789_19802 = G__19825;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__19798 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19798) : cljs.core.deref.call(null,G__19798));
})());
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__19826){
var vec__19832 = p__19826;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832,(0),null);
var ks = cljs.core.nthnext(vec__19832,(1));
if(cljs.core.truth_(m)){
var temp__4404__auto__ = (function (){var and__5878__auto__ = ks;
if(and__5878__auto__){
return dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__5878__auto__;
}
})();
if(cljs.core.truth_(temp__4404__auto__)){
var res = temp__4404__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
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
if(cljs.core.map_QMARK_(x)){
var m_atom__14979__auto__ = (function (){var G__19851 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19851) : cljs.core.atom.call(null,G__19851));
})();
var seq__19852_19865 = cljs.core.seq(x);
var chunk__19853_19866 = null;
var count__19854_19867 = (0);
var i__19855_19868 = (0);
while(true){
if((i__19855_19868 < count__19854_19867)){
var vec__19856_19869 = chunk__19853_19866.cljs$core$IIndexed$_nth$arity$2(null,i__19855_19868);
var k_19870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19856_19869,(0),null);
var v_19871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19856_19869,(1),null);
var m19850_19872 = (function (){var G__19857 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19857) : cljs.core.deref.call(null,G__19857));
})();
var G__19858_19873 = m_atom__14979__auto__;
var G__19859_19874 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19850_19872,((typeof k_19870 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_19870):k_19870),keywordize_map(v_19871));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19858_19873,G__19859_19874) : cljs.core.reset_BANG_.call(null,G__19858_19873,G__19859_19874));

var G__19875 = seq__19852_19865;
var G__19876 = chunk__19853_19866;
var G__19877 = count__19854_19867;
var G__19878 = (i__19855_19868 + (1));
seq__19852_19865 = G__19875;
chunk__19853_19866 = G__19876;
count__19854_19867 = G__19877;
i__19855_19868 = G__19878;
continue;
} else {
var temp__4406__auto___19879 = cljs.core.seq(seq__19852_19865);
if(temp__4406__auto___19879){
var seq__19852_19880__$1 = temp__4406__auto___19879;
if(cljs.core.chunked_seq_QMARK_(seq__19852_19880__$1)){
var c__6677__auto___19881 = cljs.core.chunk_first(seq__19852_19880__$1);
var G__19882 = cljs.core.chunk_rest(seq__19852_19880__$1);
var G__19883 = c__6677__auto___19881;
var G__19884 = cljs.core.count(c__6677__auto___19881);
var G__19885 = (0);
seq__19852_19865 = G__19882;
chunk__19853_19866 = G__19883;
count__19854_19867 = G__19884;
i__19855_19868 = G__19885;
continue;
} else {
var vec__19860_19886 = cljs.core.first(seq__19852_19880__$1);
var k_19887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19860_19886,(0),null);
var v_19888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19860_19886,(1),null);
var m19850_19889 = (function (){var G__19861 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19861) : cljs.core.deref.call(null,G__19861));
})();
var G__19862_19890 = m_atom__14979__auto__;
var G__19863_19891 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m19850_19889,((typeof k_19887 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_19887):k_19887),keywordize_map(v_19888));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19862_19890,G__19863_19891) : cljs.core.reset_BANG_.call(null,G__19862_19890,G__19863_19891));

var G__19892 = cljs.core.next(seq__19852_19880__$1);
var G__19893 = null;
var G__19894 = (0);
var G__19895 = (0);
seq__19852_19865 = G__19892;
chunk__19853_19866 = G__19893;
count__19854_19867 = G__19894;
i__19855_19868 = G__19895;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__19864 = m_atom__14979__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19864) : cljs.core.deref.call(null,G__19864));
})());
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keywordize_map,x);
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
var temp__4404__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4404__auto__)){
var pair__15048__auto__ = temp__4404__auto__;
return cljs.core.val(pair__15048__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__19896 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__19897 = cljs.core.next(ks);
m = G__19896;
ks = G__19897;
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
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5890__auto__ = m;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__6646__auto__ = (function iter__19908(s__19909){
return (new cljs.core.LazySeq(null,(function (){
var s__19909__$1 = s__19909;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19909__$1);
if(temp__4406__auto__){
var s__19909__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19909__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19909__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19911 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19910 = (0);
while(true){
if((i__19910 < size__6645__auto__)){
var vec__19916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19910);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19916,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19916,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__19911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19918 = (i__19910 + (1));
i__19910 = G__19918;
continue;
} else {
var G__19919 = (i__19910 + (1));
i__19910 = G__19919;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19911),iter__19908(cljs.core.chunk_rest(s__19909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19911),null);
}
} else {
var vec__19917 = cljs.core.first(s__19909__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19917,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19908(cljs.core.rest(s__19909__$2)));
} else {
var G__19920 = cljs.core.rest(s__19909__$2);
s__19909__$1 = G__19920;
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
return iter__6646__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19921__i = 0, G__19921__a = new Array(arguments.length -  1);
while (G__19921__i < G__19921__a.length) {G__19921__a[G__19921__i] = arguments[G__19921__i + 1]; ++G__19921__i;}
  kvs = new cljs.core.IndexedSeq(G__19921__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__19922){
var m = cljs.core.first(arglist__19922);
var kvs = cljs.core.rest(arglist__19922);
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
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__19923__i = 0, G__19923__a = new Array(arguments.length -  3);
while (G__19923__i < G__19923__a.length) {G__19923__a[G__19923__i] = arguments[G__19923__i + 3]; ++G__19923__i;}
  args = new cljs.core.IndexedSeq(G__19923__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__19924){
var m = cljs.core.first(arglist__19924);
arglist__19924 = cljs.core.next(arglist__19924);
var key_seq = cljs.core.first(arglist__19924);
arglist__19924 = cljs.core.next(arglist__19924);
var f = cljs.core.first(arglist__19924);
var args = cljs.core.rest(arglist__19924);
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
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__19927 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19927) : key_fn.call(null,G__19927));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__19928 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__19928) : map_fn.call(null,G__19928));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4406__auto__ = cljs.core.next(s);
if(temp__4406__auto__){
var n = temp__4406__auto__;
return aconcat(n);
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
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return unchunk(cljs.core.rest(s));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
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
var temp__4406__auto__ = cljs.core.seq(xs);
if(temp__4406__auto__){
var xs__$1 = temp__4406__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__19932 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19932) : f.call(null,G__19932));
})())){
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
var s = (function (){var G__19948 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19948) : cljs.core.atom.call(null,G__19948));
})();
var iter__6646__auto__ = ((function (s){
return (function iter__19949(s__19950){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__19950__$1 = s__19950;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19950__$1);
if(temp__4406__auto__){
var s__19950__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19950__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19950__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19952 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19951 = (0);
while(true){
if((i__19951 < size__6645__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19951);
var id = (function (){var G__19959 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19959) : f.call(null,G__19959));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__19960 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19960) : cljs.core.deref.call(null,G__19960));
})(),id))){
cljs.core.chunk_append(b__19952,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__19963 = (i__19951 + (1));
i__19951 = G__19963;
continue;
} else {
var G__19964 = (i__19951 + (1));
i__19951 = G__19964;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19952),iter__19949(cljs.core.chunk_rest(s__19950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19952),null);
}
} else {
var x = cljs.core.first(s__19950__$2);
var id = (function (){var G__19961 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19961) : f.call(null,G__19961));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__19962 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19962) : cljs.core.deref.call(null,G__19962));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,iter__19949(cljs.core.rest(s__19950__$2)));
} else {
var G__19965 = cljs.core.rest(s__19950__$2);
s__19950__$1 = G__19965;
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
return iter__6646__auto__(xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__19968__i = 0, G__19968__a = new Array(arguments.length -  0);
while (G__19968__i < G__19968__a.length) {G__19968__a[G__19968__i] = arguments[G__19968__i + 0]; ++G__19968__i;}
  colls = new cljs.core.IndexedSeq(G__19968__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__19969){
var colls = cljs.core.seq(arglist__19969);
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
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__19974__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__19975 = conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__19976 = cljs.core.first(xs);
var G__19977 = cljs.core.next(xs);
coll = G__19975;
x = G__19976;
xs = G__19977;
continue;
} else {
return conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
};
var G__19974 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__19978__i = 0, G__19978__a = new Array(arguments.length -  2);
while (G__19978__i < G__19978__a.length) {G__19978__a[G__19978__i] = arguments[G__19978__i + 2]; ++G__19978__i;}
  xs = new cljs.core.IndexedSeq(G__19978__a,0);
} 
return G__19974__delegate.call(this,coll,x,xs);};
G__19974.cljs$lang$maxFixedArity = 2;
G__19974.cljs$lang$applyTo = (function (arglist__19979){
var coll = cljs.core.first(arglist__19979);
arglist__19979 = cljs.core.next(arglist__19979);
var x = cljs.core.first(arglist__19979);
var xs = cljs.core.rest(arglist__19979);
return G__19974__delegate(coll,x,xs);
});
G__19974.cljs$core$IFn$_invoke$arity$variadic = G__19974__delegate;
return G__19974;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__19980 = null;
if (arguments.length > 2) {
var G__19981__i = 0, G__19981__a = new Array(arguments.length -  2);
while (G__19981__i < G__19981__a.length) {G__19981__a[G__19981__i] = arguments[G__19981__i + 2]; ++G__19981__i;}
G__19980 = new cljs.core.IndexedSeq(G__19981__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__19980);
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
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = (function (){var G__19987 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19987) : cljs.core.deref.call(null,G__19987));
})();
var new_val = (function (){var G__19988 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19988) : f.call(null,G__19988));
})();
if(cljs.core.compare_and_set_BANG_(a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__19989__delegate = function (a,f,args){
return swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__19982_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__19982_SHARP_,args);
}));
};
var G__19989 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__19990__i = 0, G__19990__a = new Array(arguments.length -  2);
while (G__19990__i < G__19990__a.length) {G__19990__a[G__19990__i] = arguments[G__19990__i + 2]; ++G__19990__i;}
  args = new cljs.core.IndexedSeq(G__19990__a,0);
} 
return G__19989__delegate.call(this,a,f,args);};
G__19989.cljs$lang$maxFixedArity = 2;
G__19989.cljs$lang$applyTo = (function (arglist__19991){
var a = cljs.core.first(arglist__19991);
arglist__19991 = cljs.core.next(arglist__19991);
var f = cljs.core.first(arglist__19991);
var args = cljs.core.rest(arglist__19991);
return G__19989__delegate(a,f,args);
});
G__19989.cljs$core$IFn$_invoke$arity$variadic = G__19989__delegate;
return G__19989;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__19992 = null;
if (arguments.length > 2) {
var G__19993__i = 0, G__19993__a = new Array(arguments.length -  2);
while (G__19993__i < G__19993__a.length) {G__19993__a[G__19993__i] = arguments[G__19993__i + 2]; ++G__19993__i;}
G__19992 = new cljs.core.IndexedSeq(G__19993__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__19992);
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
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__19994__delegate = function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
};
var G__19994 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__19995__i = 0, G__19995__a = new Array(arguments.length -  2);
while (G__19995__i < G__19995__a.length) {G__19995__a[G__19995__i] = arguments[G__19995__i + 2]; ++G__19995__i;}
  args = new cljs.core.IndexedSeq(G__19995__a,0);
} 
return G__19994__delegate.call(this,f,arg,args);};
G__19994.cljs$lang$maxFixedArity = 2;
G__19994.cljs$lang$applyTo = (function (arglist__19996){
var f = cljs.core.first(arglist__19996);
arglist__19996 = cljs.core.next(arglist__19996);
var arg = cljs.core.first(arglist__19996);
var args = cljs.core.rest(arglist__19996);
return G__19994__delegate(f,arg,args);
});
G__19994.cljs$core$IFn$_invoke$arity$variadic = G__19994__delegate;
return G__19994;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__19997 = null;
if (arguments.length > 2) {
var G__19998__i = 0, G__19998__a = new Array(arguments.length -  2);
while (G__19998__i < G__19998__a.length) {G__19998__a[G__19998__i] = arguments[G__19998__i + 2]; ++G__19998__i;}
G__19997 = new cljs.core.IndexedSeq(G__19998__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__19997);
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
