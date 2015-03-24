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
var G__26980__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__26980 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__26981__i = 0, G__26981__a = new Array(arguments.length -  5);
while (G__26981__i < G__26981__a.length) {G__26981__a[G__26981__i] = arguments[G__26981__i + 5]; ++G__26981__i;}
  xs = new cljs.core.IndexedSeq(G__26981__a,0);
} 
return G__26980__delegate.call(this,m,k,f,x1,x2,xs);};
G__26980.cljs$lang$maxFixedArity = 5;
G__26980.cljs$lang$applyTo = (function (arglist__26982){
var m = cljs.core.first(arglist__26982);
arglist__26982 = cljs.core.next(arglist__26982);
var k = cljs.core.first(arglist__26982);
arglist__26982 = cljs.core.next(arglist__26982);
var f = cljs.core.first(arglist__26982);
arglist__26982 = cljs.core.next(arglist__26982);
var x1 = cljs.core.first(arglist__26982);
arglist__26982 = cljs.core.next(arglist__26982);
var x2 = cljs.core.first(arglist__26982);
var xs = cljs.core.rest(arglist__26982);
return G__26980__delegate(m,k,f,x1,x2,xs);
});
G__26980.cljs$core$IFn$_invoke$arity$variadic = G__26980__delegate;
return G__26980;
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
var G__26983 = null;
if (arguments.length > 5) {
var G__26984__i = 0, G__26984__a = new Array(arguments.length -  5);
while (G__26984__i < G__26984__a.length) {G__26984__a[G__26984__i] = arguments[G__26984__i + 5]; ++G__26984__i;}
G__26983 = new cljs.core.IndexedSeq(G__26984__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__26983);
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
var m_atom__18731__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__26993_26999 = cljs.core.seq.call(null,m);
var chunk__26994_27000 = null;
var count__26995_27001 = (0);
var i__26996_27002 = (0);
while(true){
if((i__26996_27002 < count__26995_27001)){
var vec__26997_27003 = cljs.core._nth.call(null,chunk__26994_27000,i__26996_27002);
var k_27004 = cljs.core.nth.call(null,vec__26997_27003,(0),null);
var v_27005 = cljs.core.nth.call(null,vec__26997_27003,(1),null);
var m26992_27006 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m26992_27006,k_27004,f.call(null,v_27005)));

var G__27007 = seq__26993_26999;
var G__27008 = chunk__26994_27000;
var G__27009 = count__26995_27001;
var G__27010 = (i__26996_27002 + (1));
seq__26993_26999 = G__27007;
chunk__26994_27000 = G__27008;
count__26995_27001 = G__27009;
i__26996_27002 = G__27010;
continue;
} else {
var temp__4406__auto___27011 = cljs.core.seq.call(null,seq__26993_26999);
if(temp__4406__auto___27011){
var seq__26993_27012__$1 = temp__4406__auto___27011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26993_27012__$1)){
var c__15231__auto___27013 = cljs.core.chunk_first.call(null,seq__26993_27012__$1);
var G__27014 = cljs.core.chunk_rest.call(null,seq__26993_27012__$1);
var G__27015 = c__15231__auto___27013;
var G__27016 = cljs.core.count.call(null,c__15231__auto___27013);
var G__27017 = (0);
seq__26993_26999 = G__27014;
chunk__26994_27000 = G__27015;
count__26995_27001 = G__27016;
i__26996_27002 = G__27017;
continue;
} else {
var vec__26998_27018 = cljs.core.first.call(null,seq__26993_27012__$1);
var k_27019 = cljs.core.nth.call(null,vec__26998_27018,(0),null);
var v_27020 = cljs.core.nth.call(null,vec__26998_27018,(1),null);
var m26992_27021 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m26992_27021,k_27019,f.call(null,v_27020)));

var G__27022 = cljs.core.next.call(null,seq__26993_27012__$1);
var G__27023 = null;
var G__27024 = (0);
var G__27025 = (0);
seq__26993_26999 = G__27022;
chunk__26994_27000 = G__27023;
count__26995_27001 = G__27024;
i__26996_27002 = G__27025;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18731__auto__));

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
var m_atom__18731__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27034_27040 = cljs.core.seq.call(null,m);
var chunk__27035_27041 = null;
var count__27036_27042 = (0);
var i__27037_27043 = (0);
while(true){
if((i__27037_27043 < count__27036_27042)){
var vec__27038_27044 = cljs.core._nth.call(null,chunk__27035_27041,i__27037_27043);
var k_27045 = cljs.core.nth.call(null,vec__27038_27044,(0),null);
var v_27046 = cljs.core.nth.call(null,vec__27038_27044,(1),null);
var m27033_27047 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27033_27047,f.call(null,k_27045),v_27046));

var G__27048 = seq__27034_27040;
var G__27049 = chunk__27035_27041;
var G__27050 = count__27036_27042;
var G__27051 = (i__27037_27043 + (1));
seq__27034_27040 = G__27048;
chunk__27035_27041 = G__27049;
count__27036_27042 = G__27050;
i__27037_27043 = G__27051;
continue;
} else {
var temp__4406__auto___27052 = cljs.core.seq.call(null,seq__27034_27040);
if(temp__4406__auto___27052){
var seq__27034_27053__$1 = temp__4406__auto___27052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27034_27053__$1)){
var c__15231__auto___27054 = cljs.core.chunk_first.call(null,seq__27034_27053__$1);
var G__27055 = cljs.core.chunk_rest.call(null,seq__27034_27053__$1);
var G__27056 = c__15231__auto___27054;
var G__27057 = cljs.core.count.call(null,c__15231__auto___27054);
var G__27058 = (0);
seq__27034_27040 = G__27055;
chunk__27035_27041 = G__27056;
count__27036_27042 = G__27057;
i__27037_27043 = G__27058;
continue;
} else {
var vec__27039_27059 = cljs.core.first.call(null,seq__27034_27053__$1);
var k_27060 = cljs.core.nth.call(null,vec__27039_27059,(0),null);
var v_27061 = cljs.core.nth.call(null,vec__27039_27059,(1),null);
var m27033_27062 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27033_27062,f.call(null,k_27060),v_27061));

var G__27063 = cljs.core.next.call(null,seq__27034_27053__$1);
var G__27064 = null;
var G__27065 = (0);
var G__27066 = (0);
seq__27034_27040 = G__27063;
chunk__27035_27041 = G__27064;
count__27036_27042 = G__27065;
i__27037_27043 = G__27066;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18731__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__18731__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27073_27077 = cljs.core.seq.call(null,ks);
var chunk__27074_27078 = null;
var count__27075_27079 = (0);
var i__27076_27080 = (0);
while(true){
if((i__27076_27080 < count__27075_27079)){
var k_27081 = cljs.core._nth.call(null,chunk__27074_27078,i__27076_27080);
var m27072_27082 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27072_27082,k_27081,f.call(null,k_27081)));

var G__27083 = seq__27073_27077;
var G__27084 = chunk__27074_27078;
var G__27085 = count__27075_27079;
var G__27086 = (i__27076_27080 + (1));
seq__27073_27077 = G__27083;
chunk__27074_27078 = G__27084;
count__27075_27079 = G__27085;
i__27076_27080 = G__27086;
continue;
} else {
var temp__4406__auto___27087 = cljs.core.seq.call(null,seq__27073_27077);
if(temp__4406__auto___27087){
var seq__27073_27088__$1 = temp__4406__auto___27087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27073_27088__$1)){
var c__15231__auto___27089 = cljs.core.chunk_first.call(null,seq__27073_27088__$1);
var G__27090 = cljs.core.chunk_rest.call(null,seq__27073_27088__$1);
var G__27091 = c__15231__auto___27089;
var G__27092 = cljs.core.count.call(null,c__15231__auto___27089);
var G__27093 = (0);
seq__27073_27077 = G__27090;
chunk__27074_27078 = G__27091;
count__27075_27079 = G__27092;
i__27076_27080 = G__27093;
continue;
} else {
var k_27094 = cljs.core.first.call(null,seq__27073_27088__$1);
var m27072_27095 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27072_27095,k_27094,f.call(null,k_27094)));

var G__27096 = cljs.core.next.call(null,seq__27073_27088__$1);
var G__27097 = null;
var G__27098 = (0);
var G__27099 = (0);
seq__27073_27077 = G__27096;
chunk__27074_27078 = G__27097;
count__27075_27079 = G__27098;
i__27076_27080 = G__27099;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18731__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__18731__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27106_27110 = cljs.core.seq.call(null,vs);
var chunk__27107_27111 = null;
var count__27108_27112 = (0);
var i__27109_27113 = (0);
while(true){
if((i__27109_27113 < count__27108_27112)){
var v_27114 = cljs.core._nth.call(null,chunk__27107_27111,i__27109_27113);
var m27105_27115 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27105_27115,f.call(null,v_27114),v_27114));

var G__27116 = seq__27106_27110;
var G__27117 = chunk__27107_27111;
var G__27118 = count__27108_27112;
var G__27119 = (i__27109_27113 + (1));
seq__27106_27110 = G__27116;
chunk__27107_27111 = G__27117;
count__27108_27112 = G__27118;
i__27109_27113 = G__27119;
continue;
} else {
var temp__4406__auto___27120 = cljs.core.seq.call(null,seq__27106_27110);
if(temp__4406__auto___27120){
var seq__27106_27121__$1 = temp__4406__auto___27120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27106_27121__$1)){
var c__15231__auto___27122 = cljs.core.chunk_first.call(null,seq__27106_27121__$1);
var G__27123 = cljs.core.chunk_rest.call(null,seq__27106_27121__$1);
var G__27124 = c__15231__auto___27122;
var G__27125 = cljs.core.count.call(null,c__15231__auto___27122);
var G__27126 = (0);
seq__27106_27110 = G__27123;
chunk__27107_27111 = G__27124;
count__27108_27112 = G__27125;
i__27109_27113 = G__27126;
continue;
} else {
var v_27127 = cljs.core.first.call(null,seq__27106_27121__$1);
var m27105_27128 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27105_27128,f.call(null,v_27127),v_27127));

var G__27129 = cljs.core.next.call(null,seq__27106_27121__$1);
var G__27130 = null;
var G__27131 = (0);
var G__27132 = (0);
seq__27106_27110 = G__27129;
chunk__27107_27111 = G__27130;
count__27108_27112 = G__27131;
i__27109_27113 = G__27132;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18731__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__27133){
var vec__27135 = p__27133;
var k = cljs.core.nth.call(null,vec__27135,(0),null);
var ks = cljs.core.nthnext.call(null,vec__27135,(1));
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
var m_atom__18731__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__27144_27150 = cljs.core.seq.call(null,x);
var chunk__27145_27151 = null;
var count__27146_27152 = (0);
var i__27147_27153 = (0);
while(true){
if((i__27147_27153 < count__27146_27152)){
var vec__27148_27154 = cljs.core._nth.call(null,chunk__27145_27151,i__27147_27153);
var k_27155 = cljs.core.nth.call(null,vec__27148_27154,(0),null);
var v_27156 = cljs.core.nth.call(null,vec__27148_27154,(1),null);
var m27143_27157 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27143_27157,((typeof k_27155 === 'string')?cljs.core.keyword.call(null,k_27155):k_27155),keywordize_map.call(null,v_27156)));

var G__27158 = seq__27144_27150;
var G__27159 = chunk__27145_27151;
var G__27160 = count__27146_27152;
var G__27161 = (i__27147_27153 + (1));
seq__27144_27150 = G__27158;
chunk__27145_27151 = G__27159;
count__27146_27152 = G__27160;
i__27147_27153 = G__27161;
continue;
} else {
var temp__4406__auto___27162 = cljs.core.seq.call(null,seq__27144_27150);
if(temp__4406__auto___27162){
var seq__27144_27163__$1 = temp__4406__auto___27162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27144_27163__$1)){
var c__15231__auto___27164 = cljs.core.chunk_first.call(null,seq__27144_27163__$1);
var G__27165 = cljs.core.chunk_rest.call(null,seq__27144_27163__$1);
var G__27166 = c__15231__auto___27164;
var G__27167 = cljs.core.count.call(null,c__15231__auto___27164);
var G__27168 = (0);
seq__27144_27150 = G__27165;
chunk__27145_27151 = G__27166;
count__27146_27152 = G__27167;
i__27147_27153 = G__27168;
continue;
} else {
var vec__27149_27169 = cljs.core.first.call(null,seq__27144_27163__$1);
var k_27170 = cljs.core.nth.call(null,vec__27149_27169,(0),null);
var v_27171 = cljs.core.nth.call(null,vec__27149_27169,(1),null);
var m27143_27172 = cljs.core.deref.call(null,m_atom__18731__auto__);
cljs.core.reset_BANG_.call(null,m_atom__18731__auto__,cljs.core.assoc_BANG_.call(null,m27143_27172,((typeof k_27170 === 'string')?cljs.core.keyword.call(null,k_27170):k_27170),keywordize_map.call(null,v_27171)));

var G__27173 = cljs.core.next.call(null,seq__27144_27163__$1);
var G__27174 = null;
var G__27175 = (0);
var G__27176 = (0);
seq__27144_27150 = G__27173;
chunk__27145_27151 = G__27174;
count__27146_27152 = G__27175;
i__27147_27153 = G__27176;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__18731__auto__));
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
var pair__18800__auto__ = temp__4404__auto__;
return cljs.core.val.call(null,pair__18800__auto__);
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
var G__27177 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__27178 = cljs.core.next.call(null,ks);
m = G__27177;
ks = G__27178;
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
})(),(function (){var iter__15200__auto__ = (function iter__27187(s__27188){
return (new cljs.core.LazySeq(null,(function (){
var s__27188__$1 = s__27188;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__27188__$1);
if(temp__4406__auto__){
var s__27188__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27188__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__27188__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__27190 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__27189 = (0);
while(true){
if((i__27189 < size__15199__auto__)){
var vec__27193 = cljs.core._nth.call(null,c__15198__auto__,i__27189);
var k = cljs.core.nth.call(null,vec__27193,(0),null);
var v = cljs.core.nth.call(null,vec__27193,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__27190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27195 = (i__27189 + (1));
i__27189 = G__27195;
continue;
} else {
var G__27196 = (i__27189 + (1));
i__27189 = G__27196;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27190),iter__27187.call(null,cljs.core.chunk_rest.call(null,s__27188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27190),null);
}
} else {
var vec__27194 = cljs.core.first.call(null,s__27188__$2);
var k = cljs.core.nth.call(null,vec__27194,(0),null);
var v = cljs.core.nth.call(null,vec__27194,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__27187.call(null,cljs.core.rest.call(null,s__27188__$2)));
} else {
var G__27197 = cljs.core.rest.call(null,s__27188__$2);
s__27188__$1 = G__27197;
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
var G__27198__i = 0, G__27198__a = new Array(arguments.length -  1);
while (G__27198__i < G__27198__a.length) {G__27198__a[G__27198__i] = arguments[G__27198__i + 1]; ++G__27198__i;}
  kvs = new cljs.core.IndexedSeq(G__27198__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__27199){
var m = cljs.core.first(arglist__27199);
var kvs = cljs.core.rest(arglist__27199);
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
var G__27200__i = 0, G__27200__a = new Array(arguments.length -  3);
while (G__27200__i < G__27200__a.length) {G__27200__a[G__27200__i] = arguments[G__27200__i + 3]; ++G__27200__i;}
  args = new cljs.core.IndexedSeq(G__27200__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__27201){
var m = cljs.core.first(arglist__27201);
arglist__27201 = cljs.core.next(arglist__27201);
var key_seq = cljs.core.first(arglist__27201);
arglist__27201 = cljs.core.next(arglist__27201);
var f = cljs.core.first(arglist__27201);
var args = cljs.core.rest(arglist__27201);
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
return (function iter__27206(s__27207){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__27207__$1 = s__27207;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__27207__$1);
if(temp__4406__auto__){
var s__27207__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27207__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__27207__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__27209 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__27208 = (0);
while(true){
if((i__27208 < size__15199__auto__)){
var x = cljs.core._nth.call(null,c__15198__auto__,i__27208);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__27209,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__27210 = (i__27208 + (1));
i__27208 = G__27210;
continue;
} else {
var G__27211 = (i__27208 + (1));
i__27208 = G__27211;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27209),iter__27206.call(null,cljs.core.chunk_rest.call(null,s__27207__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27209),null);
}
} else {
var x = cljs.core.first.call(null,s__27207__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__27206.call(null,cljs.core.rest.call(null,s__27207__$2)));
} else {
var G__27212 = cljs.core.rest.call(null,s__27207__$2);
s__27207__$1 = G__27212;
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
var G__27213__i = 0, G__27213__a = new Array(arguments.length -  0);
while (G__27213__i < G__27213__a.length) {G__27213__a[G__27213__i] = arguments[G__27213__i + 0]; ++G__27213__i;}
  colls = new cljs.core.IndexedSeq(G__27213__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__27214){
var colls = cljs.core.seq(arglist__27214);
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
var G__27215__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__27216 = conj_when.call(null,coll,x);
var G__27217 = cljs.core.first.call(null,xs);
var G__27218 = cljs.core.next.call(null,xs);
coll = G__27216;
x = G__27217;
xs = G__27218;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__27215 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__27219__i = 0, G__27219__a = new Array(arguments.length -  2);
while (G__27219__i < G__27219__a.length) {G__27219__a[G__27219__i] = arguments[G__27219__i + 2]; ++G__27219__i;}
  xs = new cljs.core.IndexedSeq(G__27219__a,0);
} 
return G__27215__delegate.call(this,coll,x,xs);};
G__27215.cljs$lang$maxFixedArity = 2;
G__27215.cljs$lang$applyTo = (function (arglist__27220){
var coll = cljs.core.first(arglist__27220);
arglist__27220 = cljs.core.next(arglist__27220);
var x = cljs.core.first(arglist__27220);
var xs = cljs.core.rest(arglist__27220);
return G__27215__delegate(coll,x,xs);
});
G__27215.cljs$core$IFn$_invoke$arity$variadic = G__27215__delegate;
return G__27215;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__27221 = null;
if (arguments.length > 2) {
var G__27222__i = 0, G__27222__a = new Array(arguments.length -  2);
while (G__27222__i < G__27222__a.length) {G__27222__a[G__27222__i] = arguments[G__27222__i + 2]; ++G__27222__i;}
G__27221 = new cljs.core.IndexedSeq(G__27222__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__27221);
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
var G__27224__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__27223_SHARP_){
return cljs.core.apply.call(null,f,p1__27223_SHARP_,args);
}));
};
var G__27224 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__27225__i = 0, G__27225__a = new Array(arguments.length -  2);
while (G__27225__i < G__27225__a.length) {G__27225__a[G__27225__i] = arguments[G__27225__i + 2]; ++G__27225__i;}
  args = new cljs.core.IndexedSeq(G__27225__a,0);
} 
return G__27224__delegate.call(this,a,f,args);};
G__27224.cljs$lang$maxFixedArity = 2;
G__27224.cljs$lang$applyTo = (function (arglist__27226){
var a = cljs.core.first(arglist__27226);
arglist__27226 = cljs.core.next(arglist__27226);
var f = cljs.core.first(arglist__27226);
var args = cljs.core.rest(arglist__27226);
return G__27224__delegate(a,f,args);
});
G__27224.cljs$core$IFn$_invoke$arity$variadic = G__27224__delegate;
return G__27224;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__27227 = null;
if (arguments.length > 2) {
var G__27228__i = 0, G__27228__a = new Array(arguments.length -  2);
while (G__27228__i < G__27228__a.length) {G__27228__a[G__27228__i] = arguments[G__27228__i + 2]; ++G__27228__i;}
G__27227 = new cljs.core.IndexedSeq(G__27228__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__27227);
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
var G__27229__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__27229 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__27230__i = 0, G__27230__a = new Array(arguments.length -  2);
while (G__27230__i < G__27230__a.length) {G__27230__a[G__27230__i] = arguments[G__27230__i + 2]; ++G__27230__i;}
  args = new cljs.core.IndexedSeq(G__27230__a,0);
} 
return G__27229__delegate.call(this,f,arg,args);};
G__27229.cljs$lang$maxFixedArity = 2;
G__27229.cljs$lang$applyTo = (function (arglist__27231){
var f = cljs.core.first(arglist__27231);
arglist__27231 = cljs.core.next(arglist__27231);
var arg = cljs.core.first(arglist__27231);
var args = cljs.core.rest(arglist__27231);
return G__27229__delegate(f,arg,args);
});
G__27229.cljs$core$IFn$_invoke$arity$variadic = G__27229__delegate;
return G__27229;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__27232 = null;
if (arguments.length > 2) {
var G__27233__i = 0, G__27233__a = new Array(arguments.length -  2);
while (G__27233__i < G__27233__a.length) {G__27233__a[G__27233__i] = arguments[G__27233__i + 2]; ++G__27233__i;}
G__27232 = new cljs.core.IndexedSeq(G__27233__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__27232);
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