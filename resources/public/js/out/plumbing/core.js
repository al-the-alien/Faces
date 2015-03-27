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
var G__23978__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23978 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__23979__i = 0, G__23979__a = new Array(arguments.length -  5);
while (G__23979__i < G__23979__a.length) {G__23979__a[G__23979__i] = arguments[G__23979__i + 5]; ++G__23979__i;}
  xs = new cljs.core.IndexedSeq(G__23979__a,0);
} 
return G__23978__delegate.call(this,m,k,f,x1,x2,xs);};
G__23978.cljs$lang$maxFixedArity = 5;
G__23978.cljs$lang$applyTo = (function (arglist__23980){
var m = cljs.core.first(arglist__23980);
arglist__23980 = cljs.core.next(arglist__23980);
var k = cljs.core.first(arglist__23980);
arglist__23980 = cljs.core.next(arglist__23980);
var f = cljs.core.first(arglist__23980);
arglist__23980 = cljs.core.next(arglist__23980);
var x1 = cljs.core.first(arglist__23980);
arglist__23980 = cljs.core.next(arglist__23980);
var x2 = cljs.core.first(arglist__23980);
var xs = cljs.core.rest(arglist__23980);
return G__23978__delegate(m,k,f,x1,x2,xs);
});
G__23978.cljs$core$IFn$_invoke$arity$variadic = G__23978__delegate;
return G__23978;
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
var G__23981 = null;
if (arguments.length > 5) {
var G__23982__i = 0, G__23982__a = new Array(arguments.length -  5);
while (G__23982__i < G__23982__a.length) {G__23982__a[G__23982__i] = arguments[G__23982__i + 5]; ++G__23982__i;}
G__23981 = new cljs.core.IndexedSeq(G__23982__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__23981);
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
var m_atom__18418__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23991_23997 = cljs.core.seq.call(null,m);
var chunk__23992_23998 = null;
var count__23993_23999 = (0);
var i__23994_24000 = (0);
while(true){
if((i__23994_24000 < count__23993_23999)){
var vec__23995_24001 = cljs.core._nth.call(null,chunk__23992_23998,i__23994_24000);
var k_24002 = cljs.core.nth.call(null,vec__23995_24001,(0),null);
var v_24003 = cljs.core.nth.call(null,vec__23995_24001,(1),null);
var m23990_24004 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m23990_24004,k_24002,f.call(null,v_24003)));

var G__24005 = seq__23991_23997;
var G__24006 = chunk__23992_23998;
var G__24007 = count__23993_23999;
var G__24008 = (i__23994_24000 + (1));
seq__23991_23997 = G__24005;
chunk__23992_23998 = G__24006;
count__23993_23999 = G__24007;
i__23994_24000 = G__24008;
continue;
} else {
var temp__4406__auto___24009 = cljs.core.seq.call(null,seq__23991_23997);
if(temp__4406__auto___24009){
var seq__23991_24010__$1 = temp__4406__auto___24009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23991_24010__$1)){
var c__15231__auto___24011 = cljs.core.chunk_first.call(null,seq__23991_24010__$1);
var G__24012 = cljs.core.chunk_rest.call(null,seq__23991_24010__$1);
var G__24013 = c__15231__auto___24011;
var G__24014 = cljs.core.count.call(null,c__15231__auto___24011);
var G__24015 = (0);
seq__23991_23997 = G__24012;
chunk__23992_23998 = G__24013;
count__23993_23999 = G__24014;
i__23994_24000 = G__24015;
continue;
} else {
var vec__23996_24016 = cljs.core.first.call(null,seq__23991_24010__$1);
var k_24017 = cljs.core.nth.call(null,vec__23996_24016,(0),null);
var v_24018 = cljs.core.nth.call(null,vec__23996_24016,(1),null);
var m23990_24019 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m23990_24019,k_24017,f.call(null,v_24018)));

var G__24020 = cljs.core.next.call(null,seq__23991_24010__$1);
var G__24021 = null;
var G__24022 = (0);
var G__24023 = (0);
seq__23991_23997 = G__24020;
chunk__23992_23998 = G__24021;
count__23993_23999 = G__24022;
i__23994_24000 = G__24023;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18418__auto__));

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
var m_atom__18418__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__24032_24038 = cljs.core.seq.call(null,m);
var chunk__24033_24039 = null;
var count__24034_24040 = (0);
var i__24035_24041 = (0);
while(true){
if((i__24035_24041 < count__24034_24040)){
var vec__24036_24042 = cljs.core._nth.call(null,chunk__24033_24039,i__24035_24041);
var k_24043 = cljs.core.nth.call(null,vec__24036_24042,(0),null);
var v_24044 = cljs.core.nth.call(null,vec__24036_24042,(1),null);
var m24031_24045 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24031_24045,f.call(null,k_24043),v_24044));

var G__24046 = seq__24032_24038;
var G__24047 = chunk__24033_24039;
var G__24048 = count__24034_24040;
var G__24049 = (i__24035_24041 + (1));
seq__24032_24038 = G__24046;
chunk__24033_24039 = G__24047;
count__24034_24040 = G__24048;
i__24035_24041 = G__24049;
continue;
} else {
var temp__4406__auto___24050 = cljs.core.seq.call(null,seq__24032_24038);
if(temp__4406__auto___24050){
var seq__24032_24051__$1 = temp__4406__auto___24050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24032_24051__$1)){
var c__15231__auto___24052 = cljs.core.chunk_first.call(null,seq__24032_24051__$1);
var G__24053 = cljs.core.chunk_rest.call(null,seq__24032_24051__$1);
var G__24054 = c__15231__auto___24052;
var G__24055 = cljs.core.count.call(null,c__15231__auto___24052);
var G__24056 = (0);
seq__24032_24038 = G__24053;
chunk__24033_24039 = G__24054;
count__24034_24040 = G__24055;
i__24035_24041 = G__24056;
continue;
} else {
var vec__24037_24057 = cljs.core.first.call(null,seq__24032_24051__$1);
var k_24058 = cljs.core.nth.call(null,vec__24037_24057,(0),null);
var v_24059 = cljs.core.nth.call(null,vec__24037_24057,(1),null);
var m24031_24060 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24031_24060,f.call(null,k_24058),v_24059));

var G__24061 = cljs.core.next.call(null,seq__24032_24051__$1);
var G__24062 = null;
var G__24063 = (0);
var G__24064 = (0);
seq__24032_24038 = G__24061;
chunk__24033_24039 = G__24062;
count__24034_24040 = G__24063;
i__24035_24041 = G__24064;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18418__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__18418__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__24071_24075 = cljs.core.seq.call(null,ks);
var chunk__24072_24076 = null;
var count__24073_24077 = (0);
var i__24074_24078 = (0);
while(true){
if((i__24074_24078 < count__24073_24077)){
var k_24079 = cljs.core._nth.call(null,chunk__24072_24076,i__24074_24078);
var m24070_24080 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24070_24080,k_24079,f.call(null,k_24079)));

var G__24081 = seq__24071_24075;
var G__24082 = chunk__24072_24076;
var G__24083 = count__24073_24077;
var G__24084 = (i__24074_24078 + (1));
seq__24071_24075 = G__24081;
chunk__24072_24076 = G__24082;
count__24073_24077 = G__24083;
i__24074_24078 = G__24084;
continue;
} else {
var temp__4406__auto___24085 = cljs.core.seq.call(null,seq__24071_24075);
if(temp__4406__auto___24085){
var seq__24071_24086__$1 = temp__4406__auto___24085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24071_24086__$1)){
var c__15231__auto___24087 = cljs.core.chunk_first.call(null,seq__24071_24086__$1);
var G__24088 = cljs.core.chunk_rest.call(null,seq__24071_24086__$1);
var G__24089 = c__15231__auto___24087;
var G__24090 = cljs.core.count.call(null,c__15231__auto___24087);
var G__24091 = (0);
seq__24071_24075 = G__24088;
chunk__24072_24076 = G__24089;
count__24073_24077 = G__24090;
i__24074_24078 = G__24091;
continue;
} else {
var k_24092 = cljs.core.first.call(null,seq__24071_24086__$1);
var m24070_24093 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24070_24093,k_24092,f.call(null,k_24092)));

var G__24094 = cljs.core.next.call(null,seq__24071_24086__$1);
var G__24095 = null;
var G__24096 = (0);
var G__24097 = (0);
seq__24071_24075 = G__24094;
chunk__24072_24076 = G__24095;
count__24073_24077 = G__24096;
i__24074_24078 = G__24097;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18418__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__18418__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__24104_24108 = cljs.core.seq.call(null,vs);
var chunk__24105_24109 = null;
var count__24106_24110 = (0);
var i__24107_24111 = (0);
while(true){
if((i__24107_24111 < count__24106_24110)){
var v_24112 = cljs.core._nth.call(null,chunk__24105_24109,i__24107_24111);
var m24103_24113 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24103_24113,f.call(null,v_24112),v_24112));

var G__24114 = seq__24104_24108;
var G__24115 = chunk__24105_24109;
var G__24116 = count__24106_24110;
var G__24117 = (i__24107_24111 + (1));
seq__24104_24108 = G__24114;
chunk__24105_24109 = G__24115;
count__24106_24110 = G__24116;
i__24107_24111 = G__24117;
continue;
} else {
var temp__4406__auto___24118 = cljs.core.seq.call(null,seq__24104_24108);
if(temp__4406__auto___24118){
var seq__24104_24119__$1 = temp__4406__auto___24118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24104_24119__$1)){
var c__15231__auto___24120 = cljs.core.chunk_first.call(null,seq__24104_24119__$1);
var G__24121 = cljs.core.chunk_rest.call(null,seq__24104_24119__$1);
var G__24122 = c__15231__auto___24120;
var G__24123 = cljs.core.count.call(null,c__15231__auto___24120);
var G__24124 = (0);
seq__24104_24108 = G__24121;
chunk__24105_24109 = G__24122;
count__24106_24110 = G__24123;
i__24107_24111 = G__24124;
continue;
} else {
var v_24125 = cljs.core.first.call(null,seq__24104_24119__$1);
var m24103_24126 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24103_24126,f.call(null,v_24125),v_24125));

var G__24127 = cljs.core.next.call(null,seq__24104_24119__$1);
var G__24128 = null;
var G__24129 = (0);
var G__24130 = (0);
seq__24104_24108 = G__24127;
chunk__24105_24109 = G__24128;
count__24106_24110 = G__24129;
i__24107_24111 = G__24130;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18418__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__24131){
var vec__24133 = p__24131;
var k = cljs.core.nth.call(null,vec__24133,(0),null);
var ks = cljs.core.nthnext.call(null,vec__24133,(1));
if(cljs.core.truth_(m)){
var temp__4404__auto__ = (function (){var and__14432__auto__ = ks;
if(and__14432__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__14432__auto__;
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
var m_atom__18418__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__24142_24148 = cljs.core.seq.call(null,x);
var chunk__24143_24149 = null;
var count__24144_24150 = (0);
var i__24145_24151 = (0);
while(true){
if((i__24145_24151 < count__24144_24150)){
var vec__24146_24152 = cljs.core._nth.call(null,chunk__24143_24149,i__24145_24151);
var k_24153 = cljs.core.nth.call(null,vec__24146_24152,(0),null);
var v_24154 = cljs.core.nth.call(null,vec__24146_24152,(1),null);
var m24141_24155 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24141_24155,((typeof k_24153 === 'string')?cljs.core.keyword.call(null,k_24153):k_24153),keywordize_map.call(null,v_24154)));

var G__24156 = seq__24142_24148;
var G__24157 = chunk__24143_24149;
var G__24158 = count__24144_24150;
var G__24159 = (i__24145_24151 + (1));
seq__24142_24148 = G__24156;
chunk__24143_24149 = G__24157;
count__24144_24150 = G__24158;
i__24145_24151 = G__24159;
continue;
} else {
var temp__4406__auto___24160 = cljs.core.seq.call(null,seq__24142_24148);
if(temp__4406__auto___24160){
var seq__24142_24161__$1 = temp__4406__auto___24160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24142_24161__$1)){
var c__15231__auto___24162 = cljs.core.chunk_first.call(null,seq__24142_24161__$1);
var G__24163 = cljs.core.chunk_rest.call(null,seq__24142_24161__$1);
var G__24164 = c__15231__auto___24162;
var G__24165 = cljs.core.count.call(null,c__15231__auto___24162);
var G__24166 = (0);
seq__24142_24148 = G__24163;
chunk__24143_24149 = G__24164;
count__24144_24150 = G__24165;
i__24145_24151 = G__24166;
continue;
} else {
var vec__24147_24167 = cljs.core.first.call(null,seq__24142_24161__$1);
var k_24168 = cljs.core.nth.call(null,vec__24147_24167,(0),null);
var v_24169 = cljs.core.nth.call(null,vec__24147_24167,(1),null);
var m24141_24170 = cljs.core.deref.call(null,m_atom__18418__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18418__auto__,cljs.core.assoc_BANG_.call(null,m24141_24170,((typeof k_24168 === 'string')?cljs.core.keyword.call(null,k_24168):k_24168),keywordize_map.call(null,v_24169)));

var G__24171 = cljs.core.next.call(null,seq__24142_24161__$1);
var G__24172 = null;
var G__24173 = (0);
var G__24174 = (0);
seq__24142_24148 = G__24171;
chunk__24143_24149 = G__24172;
count__24144_24150 = G__24173;
i__24145_24151 = G__24174;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18418__auto__));
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
var pair__18487__auto__ = temp__4404__auto__;
return cljs.core.val.call(null,pair__18487__auto__);
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
var G__24175 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__24176 = cljs.core.next.call(null,ks);
m = G__24175;
ks = G__24176;
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

return cljs.core.into.call(null,(function (){var or__14444__auto__ = m;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__15200__auto__ = (function iter__24185(s__24186){
return (new cljs.core.LazySeq(null,(function (){
var s__24186__$1 = s__24186;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__24186__$1);
if(temp__4406__auto__){
var s__24186__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24186__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__24186__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__24188 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__24187 = (0);
while(true){
if((i__24187 < size__15199__auto__)){
var vec__24191 = cljs.core._nth.call(null,c__15198__auto__,i__24187);
var k = cljs.core.nth.call(null,vec__24191,(0),null);
var v = cljs.core.nth.call(null,vec__24191,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__24188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__24193 = (i__24187 + (1));
i__24187 = G__24193;
continue;
} else {
var G__24194 = (i__24187 + (1));
i__24187 = G__24194;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24188),iter__24185.call(null,cljs.core.chunk_rest.call(null,s__24186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24188),null);
}
} else {
var vec__24192 = cljs.core.first.call(null,s__24186__$2);
var k = cljs.core.nth.call(null,vec__24192,(0),null);
var v = cljs.core.nth.call(null,vec__24192,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__24185.call(null,cljs.core.rest.call(null,s__24186__$2)));
} else {
var G__24195 = cljs.core.rest.call(null,s__24186__$2);
s__24186__$1 = G__24195;
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
return iter__15200__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__24196__i = 0, G__24196__a = new Array(arguments.length -  1);
while (G__24196__i < G__24196__a.length) {G__24196__a[G__24196__i] = arguments[G__24196__i + 1]; ++G__24196__i;}
  kvs = new cljs.core.IndexedSeq(G__24196__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__24197){
var m = cljs.core.first(arglist__24197);
var kvs = cljs.core.rest(arglist__24197);
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
var G__24198__i = 0, G__24198__a = new Array(arguments.length -  3);
while (G__24198__i < G__24198__a.length) {G__24198__a[G__24198__i] = arguments[G__24198__i + 3]; ++G__24198__i;}
  args = new cljs.core.IndexedSeq(G__24198__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__24199){
var m = cljs.core.first(arglist__24199);
arglist__24199 = cljs.core.next(arglist__24199);
var key_seq = cljs.core.first(arglist__24199);
arglist__24199 = cljs.core.next(arglist__24199);
var f = cljs.core.first(arglist__24199);
var args = cljs.core.rest(arglist__24199);
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
var iter__15200__auto__ = ((function (s){
return (function iter__24204(s__24205){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__24205__$1 = s__24205;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__24205__$1);
if(temp__4406__auto__){
var s__24205__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24205__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__24205__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__24207 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__24206 = (0);
while(true){
if((i__24206 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__24206);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__24207,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__24208 = (i__24206 + (1));
i__24206 = G__24208;
continue;
} else {
var G__24209 = (i__24206 + (1));
i__24206 = G__24209;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24207),iter__24204.call(null,cljs.core.chunk_rest.call(null,s__24205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24207),null);
}
} else {
var x = cljs.core.first.call(null,s__24205__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__24204.call(null,cljs.core.rest.call(null,s__24205__$2)));
} else {
var G__24210 = cljs.core.rest.call(null,s__24205__$2);
s__24205__$1 = G__24210;
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
return iter__15200__auto__.call(null,xs);
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
var G__24211__i = 0, G__24211__a = new Array(arguments.length -  0);
while (G__24211__i < G__24211__a.length) {G__24211__a[G__24211__i] = arguments[G__24211__i + 0]; ++G__24211__i;}
  colls = new cljs.core.IndexedSeq(G__24211__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__24212){
var colls = cljs.core.seq(arglist__24212);
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
var G__24213__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__24214 = conj_when.call(null,coll,x);
var G__24215 = cljs.core.first.call(null,xs);
var G__24216 = cljs.core.next.call(null,xs);
coll = G__24214;
x = G__24215;
xs = G__24216;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__24213 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__24217__i = 0, G__24217__a = new Array(arguments.length -  2);
while (G__24217__i < G__24217__a.length) {G__24217__a[G__24217__i] = arguments[G__24217__i + 2]; ++G__24217__i;}
  xs = new cljs.core.IndexedSeq(G__24217__a,0);
} 
return G__24213__delegate.call(this,coll,x,xs);};
G__24213.cljs$lang$maxFixedArity = 2;
G__24213.cljs$lang$applyTo = (function (arglist__24218){
var coll = cljs.core.first(arglist__24218);
arglist__24218 = cljs.core.next(arglist__24218);
var x = cljs.core.first(arglist__24218);
var xs = cljs.core.rest(arglist__24218);
return G__24213__delegate(coll,x,xs);
});
G__24213.cljs$core$IFn$_invoke$arity$variadic = G__24213__delegate;
return G__24213;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__24219 = null;
if (arguments.length > 2) {
var G__24220__i = 0, G__24220__a = new Array(arguments.length -  2);
while (G__24220__i < G__24220__a.length) {G__24220__a[G__24220__i] = arguments[G__24220__i + 2]; ++G__24220__i;}
G__24219 = new cljs.core.IndexedSeq(G__24220__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__24219);
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
var G__24222__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__24221_SHARP_){
return cljs.core.apply.call(null,f,p1__24221_SHARP_,args);
}));
};
var G__24222 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__24223__i = 0, G__24223__a = new Array(arguments.length -  2);
while (G__24223__i < G__24223__a.length) {G__24223__a[G__24223__i] = arguments[G__24223__i + 2]; ++G__24223__i;}
  args = new cljs.core.IndexedSeq(G__24223__a,0);
} 
return G__24222__delegate.call(this,a,f,args);};
G__24222.cljs$lang$maxFixedArity = 2;
G__24222.cljs$lang$applyTo = (function (arglist__24224){
var a = cljs.core.first(arglist__24224);
arglist__24224 = cljs.core.next(arglist__24224);
var f = cljs.core.first(arglist__24224);
var args = cljs.core.rest(arglist__24224);
return G__24222__delegate(a,f,args);
});
G__24222.cljs$core$IFn$_invoke$arity$variadic = G__24222__delegate;
return G__24222;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__24225 = null;
if (arguments.length > 2) {
var G__24226__i = 0, G__24226__a = new Array(arguments.length -  2);
while (G__24226__i < G__24226__a.length) {G__24226__a[G__24226__i] = arguments[G__24226__i + 2]; ++G__24226__i;}
G__24225 = new cljs.core.IndexedSeq(G__24226__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__24225);
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
var G__24227__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__24227 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__24228__i = 0, G__24228__a = new Array(arguments.length -  2);
while (G__24228__i < G__24228__a.length) {G__24228__a[G__24228__i] = arguments[G__24228__i + 2]; ++G__24228__i;}
  args = new cljs.core.IndexedSeq(G__24228__a,0);
} 
return G__24227__delegate.call(this,f,arg,args);};
G__24227.cljs$lang$maxFixedArity = 2;
G__24227.cljs$lang$applyTo = (function (arglist__24229){
var f = cljs.core.first(arglist__24229);
arglist__24229 = cljs.core.next(arglist__24229);
var arg = cljs.core.first(arglist__24229);
var args = cljs.core.rest(arglist__24229);
return G__24227__delegate(f,arg,args);
});
G__24227.cljs$core$IFn$_invoke$arity$variadic = G__24227__delegate;
return G__24227;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__24230 = null;
if (arguments.length > 2) {
var G__24231__i = 0, G__24231__a = new Array(arguments.length -  2);
while (G__24231__i < G__24231__a.length) {G__24231__a[G__24231__i] = arguments[G__24231__i + 2]; ++G__24231__i;}
G__24230 = new cljs.core.IndexedSeq(G__24231__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__24230);
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

//# sourceMappingURL=core.js.map