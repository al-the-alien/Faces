// Compiled by ClojureScript 0.0-3308 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 */
plumbing.core.update = (function plumbing$core$update(){
var G__29192 = arguments.length;
switch (G__29192) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__17678__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq29185){
var G__29186 = cljs.core.first.call(null,seq29185);
var seq29185__$1 = cljs.core.next.call(null,seq29185);
var G__29187 = cljs.core.first.call(null,seq29185__$1);
var seq29185__$2 = cljs.core.next.call(null,seq29185__$1);
var G__29188 = cljs.core.first.call(null,seq29185__$2);
var seq29185__$3 = cljs.core.next.call(null,seq29185__$2);
var G__29189 = cljs.core.first.call(null,seq29185__$3);
var seq29185__$4 = cljs.core.next.call(null,seq29185__$3);
var G__29190 = cljs.core.first.call(null,seq29185__$4);
var seq29185__$5 = cljs.core.next.call(null,seq29185__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__29186,G__29187,G__29188,G__29189,G__29190,seq29185__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
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
var m_atom__20489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29202_29208 = cljs.core.seq.call(null,m);
var chunk__29203_29209 = null;
var count__29204_29210 = (0);
var i__29205_29211 = (0);
while(true){
if((i__29205_29211 < count__29204_29210)){
var vec__29206_29212 = cljs.core._nth.call(null,chunk__29203_29209,i__29205_29211);
var k_29213 = cljs.core.nth.call(null,vec__29206_29212,(0),null);
var v_29214 = cljs.core.nth.call(null,vec__29206_29212,(1),null);
var m29201_29215 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29201_29215,k_29213,f.call(null,v_29214)));

var G__29216 = seq__29202_29208;
var G__29217 = chunk__29203_29209;
var G__29218 = count__29204_29210;
var G__29219 = (i__29205_29211 + (1));
seq__29202_29208 = G__29216;
chunk__29203_29209 = G__29217;
count__29204_29210 = G__29218;
i__29205_29211 = G__29219;
continue;
} else {
var temp__4425__auto___29220 = cljs.core.seq.call(null,seq__29202_29208);
if(temp__4425__auto___29220){
var seq__29202_29221__$1 = temp__4425__auto___29220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29202_29221__$1)){
var c__17412__auto___29222 = cljs.core.chunk_first.call(null,seq__29202_29221__$1);
var G__29223 = cljs.core.chunk_rest.call(null,seq__29202_29221__$1);
var G__29224 = c__17412__auto___29222;
var G__29225 = cljs.core.count.call(null,c__17412__auto___29222);
var G__29226 = (0);
seq__29202_29208 = G__29223;
chunk__29203_29209 = G__29224;
count__29204_29210 = G__29225;
i__29205_29211 = G__29226;
continue;
} else {
var vec__29207_29227 = cljs.core.first.call(null,seq__29202_29221__$1);
var k_29228 = cljs.core.nth.call(null,vec__29207_29227,(0),null);
var v_29229 = cljs.core.nth.call(null,vec__29207_29227,(1),null);
var m29201_29230 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29201_29230,k_29228,f.call(null,v_29229)));

var G__29231 = cljs.core.next.call(null,seq__29202_29221__$1);
var G__29232 = null;
var G__29233 = (0);
var G__29234 = (0);
seq__29202_29208 = G__29231;
chunk__29203_29209 = G__29232;
count__29204_29210 = G__29233;
i__29205_29211 = G__29234;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20489__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__20489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29243_29249 = cljs.core.seq.call(null,m);
var chunk__29244_29250 = null;
var count__29245_29251 = (0);
var i__29246_29252 = (0);
while(true){
if((i__29246_29252 < count__29245_29251)){
var vec__29247_29253 = cljs.core._nth.call(null,chunk__29244_29250,i__29246_29252);
var k_29254 = cljs.core.nth.call(null,vec__29247_29253,(0),null);
var v_29255 = cljs.core.nth.call(null,vec__29247_29253,(1),null);
var m29242_29256 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29242_29256,f.call(null,k_29254),v_29255));

var G__29257 = seq__29243_29249;
var G__29258 = chunk__29244_29250;
var G__29259 = count__29245_29251;
var G__29260 = (i__29246_29252 + (1));
seq__29243_29249 = G__29257;
chunk__29244_29250 = G__29258;
count__29245_29251 = G__29259;
i__29246_29252 = G__29260;
continue;
} else {
var temp__4425__auto___29261 = cljs.core.seq.call(null,seq__29243_29249);
if(temp__4425__auto___29261){
var seq__29243_29262__$1 = temp__4425__auto___29261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29243_29262__$1)){
var c__17412__auto___29263 = cljs.core.chunk_first.call(null,seq__29243_29262__$1);
var G__29264 = cljs.core.chunk_rest.call(null,seq__29243_29262__$1);
var G__29265 = c__17412__auto___29263;
var G__29266 = cljs.core.count.call(null,c__17412__auto___29263);
var G__29267 = (0);
seq__29243_29249 = G__29264;
chunk__29244_29250 = G__29265;
count__29245_29251 = G__29266;
i__29246_29252 = G__29267;
continue;
} else {
var vec__29248_29268 = cljs.core.first.call(null,seq__29243_29262__$1);
var k_29269 = cljs.core.nth.call(null,vec__29248_29268,(0),null);
var v_29270 = cljs.core.nth.call(null,vec__29248_29268,(1),null);
var m29242_29271 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29242_29271,f.call(null,k_29269),v_29270));

var G__29272 = cljs.core.next.call(null,seq__29243_29262__$1);
var G__29273 = null;
var G__29274 = (0);
var G__29275 = (0);
seq__29243_29249 = G__29272;
chunk__29244_29250 = G__29273;
count__29245_29251 = G__29274;
i__29246_29252 = G__29275;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20489__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__20489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29282_29286 = cljs.core.seq.call(null,ks);
var chunk__29283_29287 = null;
var count__29284_29288 = (0);
var i__29285_29289 = (0);
while(true){
if((i__29285_29289 < count__29284_29288)){
var k_29290 = cljs.core._nth.call(null,chunk__29283_29287,i__29285_29289);
var m29281_29291 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29281_29291,k_29290,f.call(null,k_29290)));

var G__29292 = seq__29282_29286;
var G__29293 = chunk__29283_29287;
var G__29294 = count__29284_29288;
var G__29295 = (i__29285_29289 + (1));
seq__29282_29286 = G__29292;
chunk__29283_29287 = G__29293;
count__29284_29288 = G__29294;
i__29285_29289 = G__29295;
continue;
} else {
var temp__4425__auto___29296 = cljs.core.seq.call(null,seq__29282_29286);
if(temp__4425__auto___29296){
var seq__29282_29297__$1 = temp__4425__auto___29296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29282_29297__$1)){
var c__17412__auto___29298 = cljs.core.chunk_first.call(null,seq__29282_29297__$1);
var G__29299 = cljs.core.chunk_rest.call(null,seq__29282_29297__$1);
var G__29300 = c__17412__auto___29298;
var G__29301 = cljs.core.count.call(null,c__17412__auto___29298);
var G__29302 = (0);
seq__29282_29286 = G__29299;
chunk__29283_29287 = G__29300;
count__29284_29288 = G__29301;
i__29285_29289 = G__29302;
continue;
} else {
var k_29303 = cljs.core.first.call(null,seq__29282_29297__$1);
var m29281_29304 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29281_29304,k_29303,f.call(null,k_29303)));

var G__29305 = cljs.core.next.call(null,seq__29282_29297__$1);
var G__29306 = null;
var G__29307 = (0);
var G__29308 = (0);
seq__29282_29286 = G__29305;
chunk__29283_29287 = G__29306;
count__29284_29288 = G__29307;
i__29285_29289 = G__29308;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20489__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__20489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29315_29319 = cljs.core.seq.call(null,vs);
var chunk__29316_29320 = null;
var count__29317_29321 = (0);
var i__29318_29322 = (0);
while(true){
if((i__29318_29322 < count__29317_29321)){
var v_29323 = cljs.core._nth.call(null,chunk__29316_29320,i__29318_29322);
var m29314_29324 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29314_29324,f.call(null,v_29323),v_29323));

var G__29325 = seq__29315_29319;
var G__29326 = chunk__29316_29320;
var G__29327 = count__29317_29321;
var G__29328 = (i__29318_29322 + (1));
seq__29315_29319 = G__29325;
chunk__29316_29320 = G__29326;
count__29317_29321 = G__29327;
i__29318_29322 = G__29328;
continue;
} else {
var temp__4425__auto___29329 = cljs.core.seq.call(null,seq__29315_29319);
if(temp__4425__auto___29329){
var seq__29315_29330__$1 = temp__4425__auto___29329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29315_29330__$1)){
var c__17412__auto___29331 = cljs.core.chunk_first.call(null,seq__29315_29330__$1);
var G__29332 = cljs.core.chunk_rest.call(null,seq__29315_29330__$1);
var G__29333 = c__17412__auto___29331;
var G__29334 = cljs.core.count.call(null,c__17412__auto___29331);
var G__29335 = (0);
seq__29315_29319 = G__29332;
chunk__29316_29320 = G__29333;
count__29317_29321 = G__29334;
i__29318_29322 = G__29335;
continue;
} else {
var v_29336 = cljs.core.first.call(null,seq__29315_29330__$1);
var m29314_29337 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29314_29337,f.call(null,v_29336),v_29336));

var G__29338 = cljs.core.next.call(null,seq__29315_29330__$1);
var G__29339 = null;
var G__29340 = (0);
var G__29341 = (0);
seq__29315_29319 = G__29338;
chunk__29316_29320 = G__29339;
count__29317_29321 = G__29340;
i__29318_29322 = G__29341;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20489__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__29342){
var vec__29344 = p__29342;
var k = cljs.core.nth.call(null,vec__29344,(0),null);
var ks = cljs.core.nthnext.call(null,vec__29344,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__16615__auto__ = ks;
if(cljs.core.truth_(and__16615__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__16615__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
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
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__20489__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__29353_29359 = cljs.core.seq.call(null,x);
var chunk__29354_29360 = null;
var count__29355_29361 = (0);
var i__29356_29362 = (0);
while(true){
if((i__29356_29362 < count__29355_29361)){
var vec__29357_29363 = cljs.core._nth.call(null,chunk__29354_29360,i__29356_29362);
var k_29364 = cljs.core.nth.call(null,vec__29357_29363,(0),null);
var v_29365 = cljs.core.nth.call(null,vec__29357_29363,(1),null);
var m29352_29366 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29352_29366,((typeof k_29364 === 'string')?cljs.core.keyword.call(null,k_29364):k_29364),plumbing$core$keywordize_map.call(null,v_29365)));

var G__29367 = seq__29353_29359;
var G__29368 = chunk__29354_29360;
var G__29369 = count__29355_29361;
var G__29370 = (i__29356_29362 + (1));
seq__29353_29359 = G__29367;
chunk__29354_29360 = G__29368;
count__29355_29361 = G__29369;
i__29356_29362 = G__29370;
continue;
} else {
var temp__4425__auto___29371 = cljs.core.seq.call(null,seq__29353_29359);
if(temp__4425__auto___29371){
var seq__29353_29372__$1 = temp__4425__auto___29371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29353_29372__$1)){
var c__17412__auto___29373 = cljs.core.chunk_first.call(null,seq__29353_29372__$1);
var G__29374 = cljs.core.chunk_rest.call(null,seq__29353_29372__$1);
var G__29375 = c__17412__auto___29373;
var G__29376 = cljs.core.count.call(null,c__17412__auto___29373);
var G__29377 = (0);
seq__29353_29359 = G__29374;
chunk__29354_29360 = G__29375;
count__29355_29361 = G__29376;
i__29356_29362 = G__29377;
continue;
} else {
var vec__29358_29378 = cljs.core.first.call(null,seq__29353_29372__$1);
var k_29379 = cljs.core.nth.call(null,vec__29358_29378,(0),null);
var v_29380 = cljs.core.nth.call(null,vec__29358_29378,(1),null);
var m29352_29381 = cljs.core.deref.call(null,m_atom__20489__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20489__auto__,cljs.core.assoc_BANG_.call(null,m29352_29381,((typeof k_29379 === 'string')?cljs.core.keyword.call(null,k_29379):k_29379),plumbing$core$keywordize_map.call(null,v_29380)));

var G__29382 = cljs.core.next.call(null,seq__29353_29372__$1);
var G__29383 = null;
var G__29384 = (0);
var G__29385 = (0);
seq__29353_29359 = G__29382;
chunk__29354_29360 = G__29383;
count__29355_29361 = G__29384;
i__29356_29362 = G__29385;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20489__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__20558__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__20558__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__29386 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__29387 = cljs.core.next.call(null,ks);
m = G__29386;
ks = G__29387;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__16627__auto__ = m;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__17381__auto__ = (function plumbing$core$iter__29390(s__29391){
return (new cljs.core.LazySeq(null,(function (){
var s__29391__$1 = s__29391;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29391__$1);
if(temp__4425__auto__){
var s__29391__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29391__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__29391__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__29393 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__29392 = (0);
while(true){
if((i__29392 < size__17380__auto__)){
var vec__29396 = cljs.core._nth.call(null,c__17379__auto__,i__29392);
var k = cljs.core.nth.call(null,vec__29396,(0),null);
var v = cljs.core.nth.call(null,vec__29396,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__29393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__29398 = (i__29392 + (1));
i__29392 = G__29398;
continue;
} else {
var G__29399 = (i__29392 + (1));
i__29392 = G__29399;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29393),plumbing$core$iter__29390.call(null,cljs.core.chunk_rest.call(null,s__29391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29393),null);
}
} else {
var vec__29397 = cljs.core.first.call(null,s__29391__$2);
var k = cljs.core.nth.call(null,vec__29397,(0),null);
var v = cljs.core.nth.call(null,vec__29397,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__29390.call(null,cljs.core.rest.call(null,s__29391__$2)));
} else {
var G__29400 = cljs.core.rest.call(null,s__29391__$2);
s__29391__$1 = G__29400;
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
return iter__17381__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq29388){
var G__29389 = cljs.core.first.call(null,seq29388);
var seq29388__$1 = cljs.core.next.call(null,seq29388);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__29389,seq29388__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__17667__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17667__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq29401){
var G__29402 = cljs.core.first.call(null,seq29401);
var seq29401__$1 = cljs.core.next.call(null,seq29401);
var G__29403 = cljs.core.first.call(null,seq29401__$1);
var seq29401__$2 = cljs.core.next.call(null,seq29401__$1);
var G__29404 = cljs.core.first.call(null,seq29401__$2);
var seq29401__$3 = cljs.core.next.call(null,seq29401__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__29402,G__29403,G__29404,seq29401__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
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
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var G__29406 = arguments.length;
switch (G__29406) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
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
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
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
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__17381__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__29412(s__29413){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__29413__$1 = s__29413;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29413__$1);
if(temp__4425__auto__){
var s__29413__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29413__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__29413__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__29415 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__29414 = (0);
while(true){
if((i__29414 < size__17380__auto__)){
var x = cljs.core._nth.call(null,c__17379__auto__,i__29414);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__29415,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__29416 = (i__29414 + (1));
i__29414 = G__29416;
continue;
} else {
var G__29417 = (i__29414 + (1));
i__29414 = G__29417;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29415),plumbing$core$distinct_by_$_iter__29412.call(null,cljs.core.chunk_rest.call(null,s__29413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29415),null);
}
} else {
var x = cljs.core.first.call(null,s__29413__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__29412.call(null,cljs.core.rest.call(null,s__29413__$2)));
} else {
var G__29418 = cljs.core.rest.call(null,s__29413__$2);
s__29413__$1 = G__29418;
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
return iter__17381__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__17667__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__17667__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq29419){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29419));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var G__29424 = arguments.length;
switch (G__29424) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__29426 = plumbing.core.conj_when.call(null,coll,x);
var G__29427 = cljs.core.first.call(null,xs);
var G__29428 = cljs.core.next.call(null,xs);
coll = G__29426;
x = G__29427;
xs = G__29428;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq29420){
var G__29421 = cljs.core.first.call(null,seq29420);
var seq29420__$1 = cljs.core.next.call(null,seq29420);
var G__29422 = cljs.core.first.call(null,seq29420__$1);
var seq29420__$2 = cljs.core.next.call(null,seq29420__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__29421,G__29422,seq29420__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
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
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var G__29434 = arguments.length;
switch (G__29434) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__29429_SHARP_){
return cljs.core.apply.call(null,f,p1__29429_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq29430){
var G__29431 = cljs.core.first.call(null,seq29430);
var seq29430__$1 = cljs.core.next.call(null,seq29430);
var G__29432 = cljs.core.first.call(null,seq29430__$1);
var seq29430__$2 = cljs.core.next.call(null,seq29430__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29431,G__29432,seq29430__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var G__29440 = arguments.length;
switch (G__29440) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17678__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17678__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq29436){
var G__29437 = cljs.core.first.call(null,seq29436);
var seq29436__$1 = cljs.core.next.call(null,seq29436);
var G__29438 = cljs.core.first.call(null,seq29436__$1);
var seq29436__$2 = cljs.core.next.call(null,seq29436__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__29437,G__29438,seq29436__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map