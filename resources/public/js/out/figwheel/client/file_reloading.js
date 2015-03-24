// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__36047_SHARP_,p2__36048_SHARP_){
var and__14432__auto__ = p1__36047_SHARP_;
if(cljs.core.truth_(and__14432__auto__)){
return p2__36048_SHARP_;
} else {
return and__14432__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__14444__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__14444__auto__){
return or__14444__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__36050_SHARP_,p2__36049_SHARP_){
return [cljs.core.str(p2__36049_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__14444__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__14444__auto__){
return or__14444__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__14444__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15343__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15345__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15345__auto__,method_table__15341__auto__,prefer_table__15342__auto__,method_cache__15343__auto__,cached_hierarchy__15344__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36051){
var map__36052 = p__36051;
var map__36052__$1 = ((cljs.core.seq_QMARK_.call(null,map__36052))?cljs.core.apply.call(null,cljs.core.hash_map,map__36052):map__36052);
var file = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__36053){
var map__36054 = p__36053;
var map__36054__$1 = ((cljs.core.seq_QMARK_.call(null,map__36054))?cljs.core.apply.call(null,cljs.core.hash_map,map__36054):map__36054);
var namespace = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15343__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15345__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15345__auto__,method_table__15341__auto__,prefer_table__15342__auto__,method_cache__15343__auto__,cached_hierarchy__15344__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e36055){if((e36055 instanceof Error)){
var e = e36055;
return false;
} else {
throw e36055;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__36056,callback){
var map__36058 = p__36056;
var map__36058__$1 = ((cljs.core.seq_QMARK_.call(null,map__36058))?cljs.core.apply.call(null,cljs.core.hash_map,map__36058):map__36058);
var file_msg = map__36058__$1;
var request_url = cljs.core.get.call(null,map__36058__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36058,map__36058__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36058,map__36058__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__36059){
var map__36061 = p__36059;
var map__36061__$1 = ((cljs.core.seq_QMARK_.call(null,map__36061))?cljs.core.apply.call(null,cljs.core.hash_map,map__36061):map__36061);
var file_msg = map__36061__$1;
var meta_data = cljs.core.get.call(null,map__36061__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__36061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__14444__auto__ = meta_data;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__14432__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__14432__auto__){
var or__14444__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__14444__auto____$1)){
return or__14444__auto____$1;
} else {
var and__14432__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__14432__auto____$1){
var or__14444__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__14444__auto____$2){
return or__14444__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__14432__auto____$1;
}
}
}
} else {
return and__14432__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__36062,callback){
var map__36064 = p__36062;
var map__36064__$1 = ((cljs.core.seq_QMARK_.call(null,map__36064))?cljs.core.apply.call(null,cljs.core.hash_map,map__36064):map__36064);
var file_msg = map__36064__$1;
var namespace = cljs.core.get.call(null,map__36064__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__36064__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22243__auto___36151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___36151,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___36151,out){
return (function (state_36133){
var state_val_36134 = (state_36133[(1)]);
if((state_val_36134 === (7))){
var inst_36117 = (state_36133[(7)]);
var inst_36123 = (state_36133[(2)]);
var inst_36124 = cljs.core.async.put_BANG_.call(null,out,inst_36123);
var inst_36113 = inst_36117;
var state_36133__$1 = (function (){var statearr_36135 = state_36133;
(statearr_36135[(8)] = inst_36113);

(statearr_36135[(9)] = inst_36124);

return statearr_36135;
})();
var statearr_36136_36152 = state_36133__$1;
(statearr_36136_36152[(2)] = null);

(statearr_36136_36152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (6))){
var inst_36129 = (state_36133[(2)]);
var state_36133__$1 = state_36133;
var statearr_36137_36153 = state_36133__$1;
(statearr_36137_36153[(2)] = inst_36129);

(statearr_36137_36153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (5))){
var inst_36127 = cljs.core.async.close_BANG_.call(null,out);
var state_36133__$1 = state_36133;
var statearr_36138_36154 = state_36133__$1;
(statearr_36138_36154[(2)] = inst_36127);

(statearr_36138_36154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (4))){
var inst_36116 = (state_36133[(10)]);
var inst_36121 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36116);
var state_36133__$1 = state_36133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36133__$1,(7),inst_36121);
} else {
if((state_val_36134 === (3))){
var inst_36131 = (state_36133[(2)]);
var state_36133__$1 = state_36133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36133__$1,inst_36131);
} else {
if((state_val_36134 === (2))){
var inst_36113 = (state_36133[(8)]);
var inst_36116 = (state_36133[(10)]);
var inst_36116__$1 = cljs.core.nth.call(null,inst_36113,(0),null);
var inst_36117 = cljs.core.nthnext.call(null,inst_36113,(1));
var inst_36118 = (inst_36116__$1 == null);
var inst_36119 = cljs.core.not.call(null,inst_36118);
var state_36133__$1 = (function (){var statearr_36139 = state_36133;
(statearr_36139[(7)] = inst_36117);

(statearr_36139[(10)] = inst_36116__$1);

return statearr_36139;
})();
if(inst_36119){
var statearr_36140_36155 = state_36133__$1;
(statearr_36140_36155[(1)] = (4));

} else {
var statearr_36141_36156 = state_36133__$1;
(statearr_36141_36156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36134 === (1))){
var inst_36111 = cljs.core.nth.call(null,files,(0),null);
var inst_36112 = cljs.core.nthnext.call(null,files,(1));
var inst_36113 = files;
var state_36133__$1 = (function (){var statearr_36142 = state_36133;
(statearr_36142[(11)] = inst_36112);

(statearr_36142[(8)] = inst_36113);

(statearr_36142[(12)] = inst_36111);

return statearr_36142;
})();
var statearr_36143_36157 = state_36133__$1;
(statearr_36143_36157[(2)] = null);

(statearr_36143_36157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22243__auto___36151,out))
;
return ((function (switch__22187__auto__,c__22243__auto___36151,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_36147 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36147[(0)] = state_machine__22188__auto__);

(statearr_36147[(1)] = (1));

return statearr_36147;
});
var state_machine__22188__auto____1 = (function (state_36133){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_36133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e36148){if((e36148 instanceof Object)){
var ex__22191__auto__ = e36148;
var statearr_36149_36158 = state_36133;
(statearr_36149_36158[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36159 = state_36133;
state_36133 = G__36159;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_36133){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_36133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___36151,out))
})();
var state__22245__auto__ = (function (){var statearr_36150 = f__22244__auto__.call(null);
(statearr_36150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___36151);

return statearr_36150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___36151,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__36160,p__36161){
var map__36164 = p__36160;
var map__36164__$1 = ((cljs.core.seq_QMARK_.call(null,map__36164))?cljs.core.apply.call(null,cljs.core.hash_map,map__36164):map__36164);
var opts = map__36164__$1;
var url_rewriter = cljs.core.get.call(null,map__36164__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__36165 = p__36161;
var map__36165__$1 = ((cljs.core.seq_QMARK_.call(null,map__36165))?cljs.core.apply.call(null,cljs.core.hash_map,map__36165):map__36165);
var file_msg = map__36165__$1;
var file = cljs.core.get.call(null,map__36165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__36166){
var map__36169 = p__36166;
var map__36169__$1 = ((cljs.core.seq_QMARK_.call(null,map__36169))?cljs.core.apply.call(null,cljs.core.hash_map,map__36169):map__36169);
var file = cljs.core.get.call(null,map__36169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__36169__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__14432__auto__ = eval_body__$1;
if(cljs.core.truth_(and__14432__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__14432__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e36170){var e = e36170;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__36175,p__36176){
var map__36377 = p__36175;
var map__36377__$1 = ((cljs.core.seq_QMARK_.call(null,map__36377))?cljs.core.apply.call(null,cljs.core.hash_map,map__36377):map__36377);
var opts = map__36377__$1;
var load_unchanged_files = cljs.core.get.call(null,map__36377__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__36377__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__36377__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__36378 = p__36176;
var map__36378__$1 = ((cljs.core.seq_QMARK_.call(null,map__36378))?cljs.core.apply.call(null,cljs.core.hash_map,map__36378):map__36378);
var msg = map__36378__$1;
var files = cljs.core.get.call(null,map__36378__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (state_36502){
var state_val_36503 = (state_36502[(1)]);
if((state_val_36503 === (7))){
var inst_36390 = (state_36502[(7)]);
var inst_36392 = (state_36502[(8)]);
var inst_36389 = (state_36502[(9)]);
var inst_36391 = (state_36502[(10)]);
var inst_36397 = cljs.core._nth.call(null,inst_36390,inst_36392);
var inst_36398 = figwheel.client.file_reloading.eval_body.call(null,inst_36397);
var inst_36399 = (inst_36392 + (1));
var tmp36504 = inst_36390;
var tmp36505 = inst_36389;
var tmp36506 = inst_36391;
var inst_36389__$1 = tmp36505;
var inst_36390__$1 = tmp36504;
var inst_36391__$1 = tmp36506;
var inst_36392__$1 = inst_36399;
var state_36502__$1 = (function (){var statearr_36507 = state_36502;
(statearr_36507[(7)] = inst_36390__$1);

(statearr_36507[(11)] = inst_36398);

(statearr_36507[(8)] = inst_36392__$1);

(statearr_36507[(9)] = inst_36389__$1);

(statearr_36507[(10)] = inst_36391__$1);

return statearr_36507;
})();
var statearr_36508_36577 = state_36502__$1;
(statearr_36508_36577[(2)] = null);

(statearr_36508_36577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (20))){
var inst_36438 = (state_36502[(12)]);
var inst_36439 = (state_36502[(13)]);
var inst_36434 = (state_36502[(14)]);
var inst_36441 = (state_36502[(15)]);
var inst_36435 = (state_36502[(16)]);
var inst_36444 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36446 = (function (){var files_not_loaded = inst_36441;
var res = inst_36439;
var res_SINGLEQUOTE_ = inst_36438;
var files_SINGLEQUOTE_ = inst_36435;
var all_files = inst_36434;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36439,inst_36434,inst_36441,inst_36435,inst_36444,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (p__36445){
var map__36509 = p__36445;
var map__36509__$1 = ((cljs.core.seq_QMARK_.call(null,map__36509))?cljs.core.apply.call(null,cljs.core.hash_map,map__36509):map__36509);
var file = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36439,inst_36434,inst_36441,inst_36435,inst_36444,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36447 = cljs.core.map.call(null,inst_36446,inst_36439);
var inst_36448 = cljs.core.pr_str.call(null,inst_36447);
var inst_36449 = figwheel.client.utils.log.call(null,inst_36448);
var inst_36450 = (function (){var files_not_loaded = inst_36441;
var res = inst_36439;
var res_SINGLEQUOTE_ = inst_36438;
var files_SINGLEQUOTE_ = inst_36435;
var all_files = inst_36434;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36439,inst_36434,inst_36441,inst_36435,inst_36444,inst_36446,inst_36447,inst_36448,inst_36449,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36439,inst_36434,inst_36441,inst_36435,inst_36444,inst_36446,inst_36447,inst_36448,inst_36449,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36451 = setTimeout(inst_36450,(10));
var state_36502__$1 = (function (){var statearr_36510 = state_36502;
(statearr_36510[(17)] = inst_36444);

(statearr_36510[(18)] = inst_36449);

return statearr_36510;
})();
var statearr_36511_36578 = state_36502__$1;
(statearr_36511_36578[(2)] = inst_36451);

(statearr_36511_36578[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (27))){
var inst_36461 = (state_36502[(19)]);
var state_36502__$1 = state_36502;
var statearr_36512_36579 = state_36502__$1;
(statearr_36512_36579[(2)] = inst_36461);

(statearr_36512_36579[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (1))){
var inst_36381 = (state_36502[(20)]);
var inst_36379 = before_jsload.call(null,files);
var inst_36380 = (function (){return ((function (inst_36381,inst_36379,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (p1__36171_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36171_SHARP_);
});
;})(inst_36381,inst_36379,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36381__$1 = cljs.core.filter.call(null,inst_36380,files);
var inst_36382 = cljs.core.not_empty.call(null,inst_36381__$1);
var state_36502__$1 = (function (){var statearr_36513 = state_36502;
(statearr_36513[(20)] = inst_36381__$1);

(statearr_36513[(21)] = inst_36379);

return statearr_36513;
})();
if(cljs.core.truth_(inst_36382)){
var statearr_36514_36580 = state_36502__$1;
(statearr_36514_36580[(1)] = (2));

} else {
var statearr_36515_36581 = state_36502__$1;
(statearr_36515_36581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (24))){
var state_36502__$1 = state_36502;
var statearr_36516_36582 = state_36502__$1;
(statearr_36516_36582[(2)] = null);

(statearr_36516_36582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (4))){
var inst_36426 = (state_36502[(2)]);
var inst_36427 = (function (){return ((function (inst_36426,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (p1__36172_SHARP_){
var and__14432__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36172_SHARP_);
if(cljs.core.truth_(and__14432__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36172_SHARP_));
} else {
return and__14432__auto__;
}
});
;})(inst_36426,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36428 = cljs.core.filter.call(null,inst_36427,files);
var state_36502__$1 = (function (){var statearr_36517 = state_36502;
(statearr_36517[(22)] = inst_36426);

(statearr_36517[(23)] = inst_36428);

return statearr_36517;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_36518_36583 = state_36502__$1;
(statearr_36518_36583[(1)] = (16));

} else {
var statearr_36519_36584 = state_36502__$1;
(statearr_36519_36584[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (15))){
var inst_36416 = (state_36502[(2)]);
var state_36502__$1 = state_36502;
var statearr_36520_36585 = state_36502__$1;
(statearr_36520_36585[(2)] = inst_36416);

(statearr_36520_36585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (21))){
var state_36502__$1 = state_36502;
var statearr_36521_36586 = state_36502__$1;
(statearr_36521_36586[(2)] = null);

(statearr_36521_36586[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (31))){
var inst_36469 = (state_36502[(24)]);
var inst_36479 = (state_36502[(2)]);
var inst_36480 = cljs.core.not_empty.call(null,inst_36469);
var state_36502__$1 = (function (){var statearr_36522 = state_36502;
(statearr_36522[(25)] = inst_36479);

return statearr_36522;
})();
if(cljs.core.truth_(inst_36480)){
var statearr_36523_36587 = state_36502__$1;
(statearr_36523_36587[(1)] = (32));

} else {
var statearr_36524_36588 = state_36502__$1;
(statearr_36524_36588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (32))){
var inst_36469 = (state_36502[(24)]);
var inst_36482 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36469);
var inst_36483 = cljs.core.pr_str.call(null,inst_36482);
var inst_36484 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_36483)].join('');
var inst_36485 = figwheel.client.utils.log.call(null,inst_36484);
var state_36502__$1 = state_36502;
var statearr_36525_36589 = state_36502__$1;
(statearr_36525_36589[(2)] = inst_36485);

(statearr_36525_36589[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (33))){
var state_36502__$1 = state_36502;
var statearr_36526_36590 = state_36502__$1;
(statearr_36526_36590[(2)] = null);

(statearr_36526_36590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (13))){
var inst_36402 = (state_36502[(26)]);
var inst_36406 = cljs.core.chunk_first.call(null,inst_36402);
var inst_36407 = cljs.core.chunk_rest.call(null,inst_36402);
var inst_36408 = cljs.core.count.call(null,inst_36406);
var inst_36389 = inst_36407;
var inst_36390 = inst_36406;
var inst_36391 = inst_36408;
var inst_36392 = (0);
var state_36502__$1 = (function (){var statearr_36527 = state_36502;
(statearr_36527[(7)] = inst_36390);

(statearr_36527[(8)] = inst_36392);

(statearr_36527[(9)] = inst_36389);

(statearr_36527[(10)] = inst_36391);

return statearr_36527;
})();
var statearr_36528_36591 = state_36502__$1;
(statearr_36528_36591[(2)] = null);

(statearr_36528_36591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (22))){
var inst_36441 = (state_36502[(15)]);
var inst_36454 = (state_36502[(2)]);
var inst_36455 = cljs.core.not_empty.call(null,inst_36441);
var state_36502__$1 = (function (){var statearr_36529 = state_36502;
(statearr_36529[(27)] = inst_36454);

return statearr_36529;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36530_36592 = state_36502__$1;
(statearr_36530_36592[(1)] = (23));

} else {
var statearr_36531_36593 = state_36502__$1;
(statearr_36531_36593[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (36))){
var state_36502__$1 = state_36502;
var statearr_36532_36594 = state_36502__$1;
(statearr_36532_36594[(2)] = null);

(statearr_36532_36594[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (29))){
var inst_36470 = (state_36502[(28)]);
var inst_36473 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36470);
var inst_36474 = cljs.core.pr_str.call(null,inst_36473);
var inst_36475 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36474)].join('');
var inst_36476 = figwheel.client.utils.log.call(null,inst_36475);
var state_36502__$1 = state_36502;
var statearr_36533_36595 = state_36502__$1;
(statearr_36533_36595[(2)] = inst_36476);

(statearr_36533_36595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (6))){
var inst_36423 = (state_36502[(2)]);
var state_36502__$1 = state_36502;
var statearr_36534_36596 = state_36502__$1;
(statearr_36534_36596[(2)] = inst_36423);

(statearr_36534_36596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (28))){
var inst_36470 = (state_36502[(28)]);
var inst_36467 = (state_36502[(2)]);
var inst_36468 = cljs.core.get.call(null,inst_36467,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36469 = cljs.core.get.call(null,inst_36467,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_36470__$1 = cljs.core.get.call(null,inst_36467,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36471 = cljs.core.not_empty.call(null,inst_36470__$1);
var state_36502__$1 = (function (){var statearr_36535 = state_36502;
(statearr_36535[(29)] = inst_36468);

(statearr_36535[(28)] = inst_36470__$1);

(statearr_36535[(24)] = inst_36469);

return statearr_36535;
})();
if(cljs.core.truth_(inst_36471)){
var statearr_36536_36597 = state_36502__$1;
(statearr_36536_36597[(1)] = (29));

} else {
var statearr_36537_36598 = state_36502__$1;
(statearr_36537_36598[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (25))){
var inst_36500 = (state_36502[(2)]);
var state_36502__$1 = state_36502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36502__$1,inst_36500);
} else {
if((state_val_36503 === (34))){
var inst_36468 = (state_36502[(29)]);
var inst_36488 = (state_36502[(2)]);
var inst_36489 = cljs.core.not_empty.call(null,inst_36468);
var state_36502__$1 = (function (){var statearr_36538 = state_36502;
(statearr_36538[(30)] = inst_36488);

return statearr_36538;
})();
if(cljs.core.truth_(inst_36489)){
var statearr_36539_36599 = state_36502__$1;
(statearr_36539_36599[(1)] = (35));

} else {
var statearr_36540_36600 = state_36502__$1;
(statearr_36540_36600[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (17))){
var inst_36428 = (state_36502[(23)]);
var state_36502__$1 = state_36502;
var statearr_36541_36601 = state_36502__$1;
(statearr_36541_36601[(2)] = inst_36428);

(statearr_36541_36601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (3))){
var state_36502__$1 = state_36502;
var statearr_36542_36602 = state_36502__$1;
(statearr_36542_36602[(2)] = null);

(statearr_36542_36602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (12))){
var inst_36419 = (state_36502[(2)]);
var state_36502__$1 = state_36502;
var statearr_36543_36603 = state_36502__$1;
(statearr_36543_36603[(2)] = inst_36419);

(statearr_36543_36603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (2))){
var inst_36381 = (state_36502[(20)]);
var inst_36388 = cljs.core.seq.call(null,inst_36381);
var inst_36389 = inst_36388;
var inst_36390 = null;
var inst_36391 = (0);
var inst_36392 = (0);
var state_36502__$1 = (function (){var statearr_36544 = state_36502;
(statearr_36544[(7)] = inst_36390);

(statearr_36544[(8)] = inst_36392);

(statearr_36544[(9)] = inst_36389);

(statearr_36544[(10)] = inst_36391);

return statearr_36544;
})();
var statearr_36545_36604 = state_36502__$1;
(statearr_36545_36604[(2)] = null);

(statearr_36545_36604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (23))){
var inst_36438 = (state_36502[(12)]);
var inst_36461 = (state_36502[(19)]);
var inst_36439 = (state_36502[(13)]);
var inst_36434 = (state_36502[(14)]);
var inst_36441 = (state_36502[(15)]);
var inst_36435 = (state_36502[(16)]);
var inst_36457 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36460 = (function (){var files_not_loaded = inst_36441;
var res = inst_36439;
var res_SINGLEQUOTE_ = inst_36438;
var files_SINGLEQUOTE_ = inst_36435;
var all_files = inst_36434;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36461,inst_36439,inst_36434,inst_36441,inst_36435,inst_36457,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (p__36459){
var map__36546 = p__36459;
var map__36546__$1 = ((cljs.core.seq_QMARK_.call(null,map__36546))?cljs.core.apply.call(null,cljs.core.hash_map,map__36546):map__36546);
var meta_data = cljs.core.get.call(null,map__36546__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36461,inst_36439,inst_36434,inst_36441,inst_36435,inst_36457,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36461__$1 = cljs.core.group_by.call(null,inst_36460,inst_36441);
var inst_36462 = cljs.core.seq_QMARK_.call(null,inst_36461__$1);
var state_36502__$1 = (function (){var statearr_36547 = state_36502;
(statearr_36547[(19)] = inst_36461__$1);

(statearr_36547[(31)] = inst_36457);

return statearr_36547;
})();
if(inst_36462){
var statearr_36548_36605 = state_36502__$1;
(statearr_36548_36605[(1)] = (26));

} else {
var statearr_36549_36606 = state_36502__$1;
(statearr_36549_36606[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (35))){
var inst_36468 = (state_36502[(29)]);
var inst_36491 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36468);
var inst_36492 = cljs.core.pr_str.call(null,inst_36491);
var inst_36493 = [cljs.core.str("not required: "),cljs.core.str(inst_36492)].join('');
var inst_36494 = figwheel.client.utils.log.call(null,inst_36493);
var state_36502__$1 = state_36502;
var statearr_36550_36607 = state_36502__$1;
(statearr_36550_36607[(2)] = inst_36494);

(statearr_36550_36607[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (19))){
var inst_36438 = (state_36502[(12)]);
var inst_36439 = (state_36502[(13)]);
var inst_36434 = (state_36502[(14)]);
var inst_36435 = (state_36502[(16)]);
var inst_36438__$1 = (state_36502[(2)]);
var inst_36439__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36438__$1);
var inst_36440 = (function (){var res = inst_36439__$1;
var res_SINGLEQUOTE_ = inst_36438__$1;
var files_SINGLEQUOTE_ = inst_36435;
var all_files = inst_36434;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36439,inst_36434,inst_36435,inst_36438__$1,inst_36439__$1,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (p1__36174_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36174_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36438,inst_36439,inst_36434,inst_36435,inst_36438__$1,inst_36439__$1,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36441 = cljs.core.filter.call(null,inst_36440,inst_36438__$1);
var inst_36442 = cljs.core.not_empty.call(null,inst_36439__$1);
var state_36502__$1 = (function (){var statearr_36551 = state_36502;
(statearr_36551[(12)] = inst_36438__$1);

(statearr_36551[(13)] = inst_36439__$1);

(statearr_36551[(15)] = inst_36441);

return statearr_36551;
})();
if(cljs.core.truth_(inst_36442)){
var statearr_36552_36608 = state_36502__$1;
(statearr_36552_36608[(1)] = (20));

} else {
var statearr_36553_36609 = state_36502__$1;
(statearr_36553_36609[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (11))){
var state_36502__$1 = state_36502;
var statearr_36554_36610 = state_36502__$1;
(statearr_36554_36610[(2)] = null);

(statearr_36554_36610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (9))){
var inst_36421 = (state_36502[(2)]);
var state_36502__$1 = state_36502;
var statearr_36555_36611 = state_36502__$1;
(statearr_36555_36611[(2)] = inst_36421);

(statearr_36555_36611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (5))){
var inst_36392 = (state_36502[(8)]);
var inst_36391 = (state_36502[(10)]);
var inst_36394 = (inst_36392 < inst_36391);
var inst_36395 = inst_36394;
var state_36502__$1 = state_36502;
if(cljs.core.truth_(inst_36395)){
var statearr_36556_36612 = state_36502__$1;
(statearr_36556_36612[(1)] = (7));

} else {
var statearr_36557_36613 = state_36502__$1;
(statearr_36557_36613[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (14))){
var inst_36402 = (state_36502[(26)]);
var inst_36411 = cljs.core.first.call(null,inst_36402);
var inst_36412 = figwheel.client.file_reloading.eval_body.call(null,inst_36411);
var inst_36413 = cljs.core.next.call(null,inst_36402);
var inst_36389 = inst_36413;
var inst_36390 = null;
var inst_36391 = (0);
var inst_36392 = (0);
var state_36502__$1 = (function (){var statearr_36558 = state_36502;
(statearr_36558[(32)] = inst_36412);

(statearr_36558[(7)] = inst_36390);

(statearr_36558[(8)] = inst_36392);

(statearr_36558[(9)] = inst_36389);

(statearr_36558[(10)] = inst_36391);

return statearr_36558;
})();
var statearr_36559_36614 = state_36502__$1;
(statearr_36559_36614[(2)] = null);

(statearr_36559_36614[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (26))){
var inst_36461 = (state_36502[(19)]);
var inst_36464 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36461);
var state_36502__$1 = state_36502;
var statearr_36560_36615 = state_36502__$1;
(statearr_36560_36615[(2)] = inst_36464);

(statearr_36560_36615[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (16))){
var inst_36428 = (state_36502[(23)]);
var inst_36430 = (function (){var all_files = inst_36428;
return ((function (all_files,inst_36428,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function (p1__36173_SHARP_){
return cljs.core.update_in.call(null,p1__36173_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_36428,state_val_36503,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var inst_36431 = cljs.core.map.call(null,inst_36430,inst_36428);
var state_36502__$1 = state_36502;
var statearr_36561_36616 = state_36502__$1;
(statearr_36561_36616[(2)] = inst_36431);

(statearr_36561_36616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (30))){
var state_36502__$1 = state_36502;
var statearr_36562_36617 = state_36502__$1;
(statearr_36562_36617[(2)] = null);

(statearr_36562_36617[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (10))){
var inst_36402 = (state_36502[(26)]);
var inst_36404 = cljs.core.chunked_seq_QMARK_.call(null,inst_36402);
var state_36502__$1 = state_36502;
if(inst_36404){
var statearr_36563_36618 = state_36502__$1;
(statearr_36563_36618[(1)] = (13));

} else {
var statearr_36564_36619 = state_36502__$1;
(statearr_36564_36619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (18))){
var inst_36434 = (state_36502[(14)]);
var inst_36435 = (state_36502[(16)]);
var inst_36434__$1 = (state_36502[(2)]);
var inst_36435__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_36434__$1);
var inst_36436 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36435__$1);
var state_36502__$1 = (function (){var statearr_36565 = state_36502;
(statearr_36565[(14)] = inst_36434__$1);

(statearr_36565[(16)] = inst_36435__$1);

return statearr_36565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36502__$1,(19),inst_36436);
} else {
if((state_val_36503 === (37))){
var inst_36497 = (state_36502[(2)]);
var state_36502__$1 = state_36502;
var statearr_36566_36620 = state_36502__$1;
(statearr_36566_36620[(2)] = inst_36497);

(statearr_36566_36620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36503 === (8))){
var inst_36389 = (state_36502[(9)]);
var inst_36402 = (state_36502[(26)]);
var inst_36402__$1 = cljs.core.seq.call(null,inst_36389);
var state_36502__$1 = (function (){var statearr_36567 = state_36502;
(statearr_36567[(26)] = inst_36402__$1);

return statearr_36567;
})();
if(inst_36402__$1){
var statearr_36568_36621 = state_36502__$1;
(statearr_36568_36621[(1)] = (10));

} else {
var statearr_36569_36622 = state_36502__$1;
(statearr_36569_36622[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
;
return ((function (switch__22187__auto__,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_36573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36573[(0)] = state_machine__22188__auto__);

(statearr_36573[(1)] = (1));

return statearr_36573;
});
var state_machine__22188__auto____1 = (function (state_36502){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_36502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e36574){if((e36574 instanceof Object)){
var ex__22191__auto__ = e36574;
var statearr_36575_36623 = state_36502;
(statearr_36575_36623[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36624 = state_36502;
state_36502 = G__36624;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_36502){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_36502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
})();
var state__22245__auto__ = (function (){var statearr_36576 = f__22244__auto__.call(null);
(statearr_36576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__,map__36377,map__36377__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36378,map__36378__$1,msg,files))
);

return c__22243__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__36627,link){
var map__36629 = p__36627;
var map__36629__$1 = ((cljs.core.seq_QMARK_.call(null,map__36629))?cljs.core.apply.call(null,cljs.core.hash_map,map__36629):map__36629);
var file = cljs.core.get.call(null,map__36629__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4406__auto__ = link.href;
if(cljs.core.truth_(temp__4406__auto__)){
var link_href = temp__4406__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4406__auto__,map__36629,map__36629__$1,file){
return (function (p1__36625_SHARP_,p2__36626_SHARP_){
if(cljs.core._EQ_.call(null,p1__36625_SHARP_,p2__36626_SHARP_)){
return p1__36625_SHARP_;
} else {
return false;
}
});})(link_href,temp__4406__auto__,map__36629,map__36629__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4406__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36633){
var map__36634 = p__36633;
var map__36634__$1 = ((cljs.core.seq_QMARK_.call(null,map__36634))?cljs.core.apply.call(null,cljs.core.hash_map,map__36634):map__36634);
var current_url_length = cljs.core.get.call(null,map__36634__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__36634__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36630_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36630_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4406__auto__)){
var res = temp__4406__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__36635){
var map__36637 = p__36635;
var map__36637__$1 = ((cljs.core.seq_QMARK_.call(null,map__36637))?cljs.core.apply.call(null,cljs.core.hash_map,map__36637):map__36637);
var f_data = map__36637__$1;
var request_url = cljs.core.get.call(null,map__36637__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__36637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4404__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4404__auto__)){
var link = temp__4404__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__14444__auto__ = request_url;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__36638,files_msg){
var map__36660 = p__36638;
var map__36660__$1 = ((cljs.core.seq_QMARK_.call(null,map__36660))?cljs.core.apply.call(null,cljs.core.hash_map,map__36660):map__36660);
var opts = map__36660__$1;
var on_cssload = cljs.core.get.call(null,map__36660__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36661_36681 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36662_36682 = null;
var count__36663_36683 = (0);
var i__36664_36684 = (0);
while(true){
if((i__36664_36684 < count__36663_36683)){
var f_36685 = cljs.core._nth.call(null,chunk__36662_36682,i__36664_36684);
figwheel.client.file_reloading.reload_css_file.call(null,f_36685);

var G__36686 = seq__36661_36681;
var G__36687 = chunk__36662_36682;
var G__36688 = count__36663_36683;
var G__36689 = (i__36664_36684 + (1));
seq__36661_36681 = G__36686;
chunk__36662_36682 = G__36687;
count__36663_36683 = G__36688;
i__36664_36684 = G__36689;
continue;
} else {
var temp__4406__auto___36690 = cljs.core.seq.call(null,seq__36661_36681);
if(temp__4406__auto___36690){
var seq__36661_36691__$1 = temp__4406__auto___36690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36661_36691__$1)){
var c__15231__auto___36692 = cljs.core.chunk_first.call(null,seq__36661_36691__$1);
var G__36693 = cljs.core.chunk_rest.call(null,seq__36661_36691__$1);
var G__36694 = c__15231__auto___36692;
var G__36695 = cljs.core.count.call(null,c__15231__auto___36692);
var G__36696 = (0);
seq__36661_36681 = G__36693;
chunk__36662_36682 = G__36694;
count__36663_36683 = G__36695;
i__36664_36684 = G__36696;
continue;
} else {
var f_36697 = cljs.core.first.call(null,seq__36661_36691__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36697);

var G__36698 = cljs.core.next.call(null,seq__36661_36691__$1);
var G__36699 = null;
var G__36700 = (0);
var G__36701 = (0);
seq__36661_36681 = G__36698;
chunk__36662_36682 = G__36699;
count__36663_36683 = G__36700;
i__36664_36684 = G__36701;
continue;
}
} else {
}
}
break;
}

var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__,map__36660,map__36660__$1,opts,on_cssload){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__,map__36660,map__36660__$1,opts,on_cssload){
return (function (state_36671){
var state_val_36672 = (state_36671[(1)]);
if((state_val_36672 === (2))){
var inst_36667 = (state_36671[(2)]);
var inst_36668 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36669 = on_cssload.call(null,inst_36668);
var state_36671__$1 = (function (){var statearr_36673 = state_36671;
(statearr_36673[(7)] = inst_36667);

return statearr_36673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36671__$1,inst_36669);
} else {
if((state_val_36672 === (1))){
var inst_36665 = cljs.core.async.timeout.call(null,(100));
var state_36671__$1 = state_36671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36671__$1,(2),inst_36665);
} else {
return null;
}
}
});})(c__22243__auto__,map__36660,map__36660__$1,opts,on_cssload))
;
return ((function (switch__22187__auto__,c__22243__auto__,map__36660,map__36660__$1,opts,on_cssload){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_36677 = [null,null,null,null,null,null,null,null];
(statearr_36677[(0)] = state_machine__22188__auto__);

(statearr_36677[(1)] = (1));

return statearr_36677;
});
var state_machine__22188__auto____1 = (function (state_36671){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_36671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e36678){if((e36678 instanceof Object)){
var ex__22191__auto__ = e36678;
var statearr_36679_36702 = state_36671;
(statearr_36679_36702[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36703 = state_36671;
state_36671 = G__36703;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_36671){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_36671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__,map__36660,map__36660__$1,opts,on_cssload))
})();
var state__22245__auto__ = (function (){var statearr_36680 = f__22244__auto__.call(null);
(statearr_36680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_36680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__,map__36660,map__36660__$1,opts,on_cssload))
);

return c__22243__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map