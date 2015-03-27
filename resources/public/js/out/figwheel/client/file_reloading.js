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
return cljs.core.reduce.call(null,(function (p1__33045_SHARP_,p2__33046_SHARP_){
var and__14432__auto__ = p1__33045_SHARP_;
if(cljs.core.truth_(and__14432__auto__)){
return p2__33046_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__33048_SHARP_,p2__33047_SHARP_){
return [cljs.core.str(p2__33047_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33049){
var map__33050 = p__33049;
var map__33050__$1 = ((cljs.core.seq_QMARK_.call(null,map__33050))?cljs.core.apply.call(null,cljs.core.hash_map,map__33050):map__33050);
var file = cljs.core.get.call(null,map__33050__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__33051){
var map__33052 = p__33051;
var map__33052__$1 = ((cljs.core.seq_QMARK_.call(null,map__33052))?cljs.core.apply.call(null,cljs.core.hash_map,map__33052):map__33052);
var namespace = cljs.core.get.call(null,map__33052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e33053){if((e33053 instanceof Error)){
var e = e33053;
return false;
} else {
throw e33053;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__33054,callback){
var map__33056 = p__33054;
var map__33056__$1 = ((cljs.core.seq_QMARK_.call(null,map__33056))?cljs.core.apply.call(null,cljs.core.hash_map,map__33056):map__33056);
var file_msg = map__33056__$1;
var request_url = cljs.core.get.call(null,map__33056__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33056,map__33056__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33056,map__33056__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__33057){
var map__33059 = p__33057;
var map__33059__$1 = ((cljs.core.seq_QMARK_.call(null,map__33059))?cljs.core.apply.call(null,cljs.core.hash_map,map__33059):map__33059);
var file_msg = map__33059__$1;
var meta_data = cljs.core.get.call(null,map__33059__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__33059__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__33060,callback){
var map__33062 = p__33060;
var map__33062__$1 = ((cljs.core.seq_QMARK_.call(null,map__33062))?cljs.core.apply.call(null,cljs.core.hash_map,map__33062):map__33062);
var file_msg = map__33062__$1;
var namespace = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__33062__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__20396__auto___33149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___33149,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___33149,out){
return (function (state_33131){
var state_val_33132 = (state_33131[(1)]);
if((state_val_33132 === (7))){
var inst_33115 = (state_33131[(7)]);
var inst_33121 = (state_33131[(2)]);
var inst_33122 = cljs.core.async.put_BANG_.call(null,out,inst_33121);
var inst_33111 = inst_33115;
var state_33131__$1 = (function (){var statearr_33133 = state_33131;
(statearr_33133[(8)] = inst_33111);

(statearr_33133[(9)] = inst_33122);

return statearr_33133;
})();
var statearr_33134_33150 = state_33131__$1;
(statearr_33134_33150[(2)] = null);

(statearr_33134_33150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33132 === (6))){
var inst_33127 = (state_33131[(2)]);
var state_33131__$1 = state_33131;
var statearr_33135_33151 = state_33131__$1;
(statearr_33135_33151[(2)] = inst_33127);

(statearr_33135_33151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33132 === (5))){
var inst_33125 = cljs.core.async.close_BANG_.call(null,out);
var state_33131__$1 = state_33131;
var statearr_33136_33152 = state_33131__$1;
(statearr_33136_33152[(2)] = inst_33125);

(statearr_33136_33152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33132 === (4))){
var inst_33114 = (state_33131[(10)]);
var inst_33119 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33114);
var state_33131__$1 = state_33131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33131__$1,(7),inst_33119);
} else {
if((state_val_33132 === (3))){
var inst_33129 = (state_33131[(2)]);
var state_33131__$1 = state_33131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33131__$1,inst_33129);
} else {
if((state_val_33132 === (2))){
var inst_33114 = (state_33131[(10)]);
var inst_33111 = (state_33131[(8)]);
var inst_33114__$1 = cljs.core.nth.call(null,inst_33111,(0),null);
var inst_33115 = cljs.core.nthnext.call(null,inst_33111,(1));
var inst_33116 = (inst_33114__$1 == null);
var inst_33117 = cljs.core.not.call(null,inst_33116);
var state_33131__$1 = (function (){var statearr_33137 = state_33131;
(statearr_33137[(10)] = inst_33114__$1);

(statearr_33137[(7)] = inst_33115);

return statearr_33137;
})();
if(inst_33117){
var statearr_33138_33153 = state_33131__$1;
(statearr_33138_33153[(1)] = (4));

} else {
var statearr_33139_33154 = state_33131__$1;
(statearr_33139_33154[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33132 === (1))){
var inst_33109 = cljs.core.nth.call(null,files,(0),null);
var inst_33110 = cljs.core.nthnext.call(null,files,(1));
var inst_33111 = files;
var state_33131__$1 = (function (){var statearr_33140 = state_33131;
(statearr_33140[(11)] = inst_33109);

(statearr_33140[(8)] = inst_33111);

(statearr_33140[(12)] = inst_33110);

return statearr_33140;
})();
var statearr_33141_33155 = state_33131__$1;
(statearr_33141_33155[(2)] = null);

(statearr_33141_33155[(1)] = (2));


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
});})(c__20396__auto___33149,out))
;
return ((function (switch__20381__auto__,c__20396__auto___33149,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_33145 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33145[(0)] = state_machine__20382__auto__);

(statearr_33145[(1)] = (1));

return statearr_33145;
});
var state_machine__20382__auto____1 = (function (state_33131){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_33131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e33146){if((e33146 instanceof Object)){
var ex__20385__auto__ = e33146;
var statearr_33147_33156 = state_33131;
(statearr_33147_33156[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_33131;
state_33131 = G__33157;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_33131){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_33131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___33149,out))
})();
var state__20398__auto__ = (function (){var statearr_33148 = f__20397__auto__.call(null);
(statearr_33148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___33149);

return statearr_33148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___33149,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__33158,p__33159){
var map__33162 = p__33158;
var map__33162__$1 = ((cljs.core.seq_QMARK_.call(null,map__33162))?cljs.core.apply.call(null,cljs.core.hash_map,map__33162):map__33162);
var opts = map__33162__$1;
var url_rewriter = cljs.core.get.call(null,map__33162__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__33163 = p__33159;
var map__33163__$1 = ((cljs.core.seq_QMARK_.call(null,map__33163))?cljs.core.apply.call(null,cljs.core.hash_map,map__33163):map__33163);
var file_msg = map__33163__$1;
var file = cljs.core.get.call(null,map__33163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__33164){
var map__33167 = p__33164;
var map__33167__$1 = ((cljs.core.seq_QMARK_.call(null,map__33167))?cljs.core.apply.call(null,cljs.core.hash_map,map__33167):map__33167);
var file = cljs.core.get.call(null,map__33167__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__33167__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e33168){var e = e33168;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__33173,p__33174){
var map__33375 = p__33173;
var map__33375__$1 = ((cljs.core.seq_QMARK_.call(null,map__33375))?cljs.core.apply.call(null,cljs.core.hash_map,map__33375):map__33375);
var opts = map__33375__$1;
var load_unchanged_files = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__33375__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__33376 = p__33174;
var map__33376__$1 = ((cljs.core.seq_QMARK_.call(null,map__33376))?cljs.core.apply.call(null,cljs.core.hash_map,map__33376):map__33376);
var msg = map__33376__$1;
var files = cljs.core.get.call(null,map__33376__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (state_33500){
var state_val_33501 = (state_33500[(1)]);
if((state_val_33501 === (7))){
var inst_33387 = (state_33500[(7)]);
var inst_33390 = (state_33500[(8)]);
var inst_33388 = (state_33500[(9)]);
var inst_33389 = (state_33500[(10)]);
var inst_33395 = cljs.core._nth.call(null,inst_33388,inst_33390);
var inst_33396 = figwheel.client.file_reloading.eval_body.call(null,inst_33395);
var inst_33397 = (inst_33390 + (1));
var tmp33502 = inst_33387;
var tmp33503 = inst_33388;
var tmp33504 = inst_33389;
var inst_33387__$1 = tmp33502;
var inst_33388__$1 = tmp33503;
var inst_33389__$1 = tmp33504;
var inst_33390__$1 = inst_33397;
var state_33500__$1 = (function (){var statearr_33505 = state_33500;
(statearr_33505[(11)] = inst_33396);

(statearr_33505[(7)] = inst_33387__$1);

(statearr_33505[(8)] = inst_33390__$1);

(statearr_33505[(9)] = inst_33388__$1);

(statearr_33505[(10)] = inst_33389__$1);

return statearr_33505;
})();
var statearr_33506_33575 = state_33500__$1;
(statearr_33506_33575[(2)] = null);

(statearr_33506_33575[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (20))){
var inst_33436 = (state_33500[(12)]);
var inst_33433 = (state_33500[(13)]);
var inst_33432 = (state_33500[(14)]);
var inst_33439 = (state_33500[(15)]);
var inst_33437 = (state_33500[(16)]);
var inst_33442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33444 = (function (){var files_not_loaded = inst_33439;
var res = inst_33437;
var res_SINGLEQUOTE_ = inst_33436;
var files_SINGLEQUOTE_ = inst_33433;
var all_files = inst_33432;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33432,inst_33439,inst_33437,inst_33442,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (p__33443){
var map__33507 = p__33443;
var map__33507__$1 = ((cljs.core.seq_QMARK_.call(null,map__33507))?cljs.core.apply.call(null,cljs.core.hash_map,map__33507):map__33507);
var file = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__33507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33432,inst_33439,inst_33437,inst_33442,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33445 = cljs.core.map.call(null,inst_33444,inst_33437);
var inst_33446 = cljs.core.pr_str.call(null,inst_33445);
var inst_33447 = figwheel.client.utils.log.call(null,inst_33446);
var inst_33448 = (function (){var files_not_loaded = inst_33439;
var res = inst_33437;
var res_SINGLEQUOTE_ = inst_33436;
var files_SINGLEQUOTE_ = inst_33433;
var all_files = inst_33432;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33432,inst_33439,inst_33437,inst_33442,inst_33444,inst_33445,inst_33446,inst_33447,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33432,inst_33439,inst_33437,inst_33442,inst_33444,inst_33445,inst_33446,inst_33447,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33449 = setTimeout(inst_33448,(10));
var state_33500__$1 = (function (){var statearr_33508 = state_33500;
(statearr_33508[(17)] = inst_33442);

(statearr_33508[(18)] = inst_33447);

return statearr_33508;
})();
var statearr_33509_33576 = state_33500__$1;
(statearr_33509_33576[(2)] = inst_33449);

(statearr_33509_33576[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (27))){
var inst_33459 = (state_33500[(19)]);
var state_33500__$1 = state_33500;
var statearr_33510_33577 = state_33500__$1;
(statearr_33510_33577[(2)] = inst_33459);

(statearr_33510_33577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (1))){
var inst_33379 = (state_33500[(20)]);
var inst_33377 = before_jsload.call(null,files);
var inst_33378 = (function (){return ((function (inst_33379,inst_33377,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (p1__33169_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33169_SHARP_);
});
;})(inst_33379,inst_33377,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33379__$1 = cljs.core.filter.call(null,inst_33378,files);
var inst_33380 = cljs.core.not_empty.call(null,inst_33379__$1);
var state_33500__$1 = (function (){var statearr_33511 = state_33500;
(statearr_33511[(21)] = inst_33377);

(statearr_33511[(20)] = inst_33379__$1);

return statearr_33511;
})();
if(cljs.core.truth_(inst_33380)){
var statearr_33512_33578 = state_33500__$1;
(statearr_33512_33578[(1)] = (2));

} else {
var statearr_33513_33579 = state_33500__$1;
(statearr_33513_33579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (24))){
var state_33500__$1 = state_33500;
var statearr_33514_33580 = state_33500__$1;
(statearr_33514_33580[(2)] = null);

(statearr_33514_33580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (4))){
var inst_33424 = (state_33500[(2)]);
var inst_33425 = (function (){return ((function (inst_33424,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (p1__33170_SHARP_){
var and__14432__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33170_SHARP_);
if(cljs.core.truth_(and__14432__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33170_SHARP_));
} else {
return and__14432__auto__;
}
});
;})(inst_33424,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33426 = cljs.core.filter.call(null,inst_33425,files);
var state_33500__$1 = (function (){var statearr_33515 = state_33500;
(statearr_33515[(22)] = inst_33426);

(statearr_33515[(23)] = inst_33424);

return statearr_33515;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_33516_33581 = state_33500__$1;
(statearr_33516_33581[(1)] = (16));

} else {
var statearr_33517_33582 = state_33500__$1;
(statearr_33517_33582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (15))){
var inst_33414 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33518_33583 = state_33500__$1;
(statearr_33518_33583[(2)] = inst_33414);

(statearr_33518_33583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (21))){
var state_33500__$1 = state_33500;
var statearr_33519_33584 = state_33500__$1;
(statearr_33519_33584[(2)] = null);

(statearr_33519_33584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (31))){
var inst_33467 = (state_33500[(24)]);
var inst_33477 = (state_33500[(2)]);
var inst_33478 = cljs.core.not_empty.call(null,inst_33467);
var state_33500__$1 = (function (){var statearr_33520 = state_33500;
(statearr_33520[(25)] = inst_33477);

return statearr_33520;
})();
if(cljs.core.truth_(inst_33478)){
var statearr_33521_33585 = state_33500__$1;
(statearr_33521_33585[(1)] = (32));

} else {
var statearr_33522_33586 = state_33500__$1;
(statearr_33522_33586[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (32))){
var inst_33467 = (state_33500[(24)]);
var inst_33480 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33467);
var inst_33481 = cljs.core.pr_str.call(null,inst_33480);
var inst_33482 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_33481)].join('');
var inst_33483 = figwheel.client.utils.log.call(null,inst_33482);
var state_33500__$1 = state_33500;
var statearr_33523_33587 = state_33500__$1;
(statearr_33523_33587[(2)] = inst_33483);

(statearr_33523_33587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (33))){
var state_33500__$1 = state_33500;
var statearr_33524_33588 = state_33500__$1;
(statearr_33524_33588[(2)] = null);

(statearr_33524_33588[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (13))){
var inst_33400 = (state_33500[(26)]);
var inst_33404 = cljs.core.chunk_first.call(null,inst_33400);
var inst_33405 = cljs.core.chunk_rest.call(null,inst_33400);
var inst_33406 = cljs.core.count.call(null,inst_33404);
var inst_33387 = inst_33405;
var inst_33388 = inst_33404;
var inst_33389 = inst_33406;
var inst_33390 = (0);
var state_33500__$1 = (function (){var statearr_33525 = state_33500;
(statearr_33525[(7)] = inst_33387);

(statearr_33525[(8)] = inst_33390);

(statearr_33525[(9)] = inst_33388);

(statearr_33525[(10)] = inst_33389);

return statearr_33525;
})();
var statearr_33526_33589 = state_33500__$1;
(statearr_33526_33589[(2)] = null);

(statearr_33526_33589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (22))){
var inst_33439 = (state_33500[(15)]);
var inst_33452 = (state_33500[(2)]);
var inst_33453 = cljs.core.not_empty.call(null,inst_33439);
var state_33500__$1 = (function (){var statearr_33527 = state_33500;
(statearr_33527[(27)] = inst_33452);

return statearr_33527;
})();
if(cljs.core.truth_(inst_33453)){
var statearr_33528_33590 = state_33500__$1;
(statearr_33528_33590[(1)] = (23));

} else {
var statearr_33529_33591 = state_33500__$1;
(statearr_33529_33591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (36))){
var state_33500__$1 = state_33500;
var statearr_33530_33592 = state_33500__$1;
(statearr_33530_33592[(2)] = null);

(statearr_33530_33592[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (29))){
var inst_33468 = (state_33500[(28)]);
var inst_33471 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33468);
var inst_33472 = cljs.core.pr_str.call(null,inst_33471);
var inst_33473 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_33472)].join('');
var inst_33474 = figwheel.client.utils.log.call(null,inst_33473);
var state_33500__$1 = state_33500;
var statearr_33531_33593 = state_33500__$1;
(statearr_33531_33593[(2)] = inst_33474);

(statearr_33531_33593[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (6))){
var inst_33421 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33532_33594 = state_33500__$1;
(statearr_33532_33594[(2)] = inst_33421);

(statearr_33532_33594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (28))){
var inst_33468 = (state_33500[(28)]);
var inst_33465 = (state_33500[(2)]);
var inst_33466 = cljs.core.get.call(null,inst_33465,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33467 = cljs.core.get.call(null,inst_33465,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_33468__$1 = cljs.core.get.call(null,inst_33465,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33469 = cljs.core.not_empty.call(null,inst_33468__$1);
var state_33500__$1 = (function (){var statearr_33533 = state_33500;
(statearr_33533[(28)] = inst_33468__$1);

(statearr_33533[(29)] = inst_33466);

(statearr_33533[(24)] = inst_33467);

return statearr_33533;
})();
if(cljs.core.truth_(inst_33469)){
var statearr_33534_33595 = state_33500__$1;
(statearr_33534_33595[(1)] = (29));

} else {
var statearr_33535_33596 = state_33500__$1;
(statearr_33535_33596[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (25))){
var inst_33498 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33500__$1,inst_33498);
} else {
if((state_val_33501 === (34))){
var inst_33466 = (state_33500[(29)]);
var inst_33486 = (state_33500[(2)]);
var inst_33487 = cljs.core.not_empty.call(null,inst_33466);
var state_33500__$1 = (function (){var statearr_33536 = state_33500;
(statearr_33536[(30)] = inst_33486);

return statearr_33536;
})();
if(cljs.core.truth_(inst_33487)){
var statearr_33537_33597 = state_33500__$1;
(statearr_33537_33597[(1)] = (35));

} else {
var statearr_33538_33598 = state_33500__$1;
(statearr_33538_33598[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (17))){
var inst_33426 = (state_33500[(22)]);
var state_33500__$1 = state_33500;
var statearr_33539_33599 = state_33500__$1;
(statearr_33539_33599[(2)] = inst_33426);

(statearr_33539_33599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (3))){
var state_33500__$1 = state_33500;
var statearr_33540_33600 = state_33500__$1;
(statearr_33540_33600[(2)] = null);

(statearr_33540_33600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (12))){
var inst_33417 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33541_33601 = state_33500__$1;
(statearr_33541_33601[(2)] = inst_33417);

(statearr_33541_33601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (2))){
var inst_33379 = (state_33500[(20)]);
var inst_33386 = cljs.core.seq.call(null,inst_33379);
var inst_33387 = inst_33386;
var inst_33388 = null;
var inst_33389 = (0);
var inst_33390 = (0);
var state_33500__$1 = (function (){var statearr_33542 = state_33500;
(statearr_33542[(7)] = inst_33387);

(statearr_33542[(8)] = inst_33390);

(statearr_33542[(9)] = inst_33388);

(statearr_33542[(10)] = inst_33389);

return statearr_33542;
})();
var statearr_33543_33602 = state_33500__$1;
(statearr_33543_33602[(2)] = null);

(statearr_33543_33602[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (23))){
var inst_33436 = (state_33500[(12)]);
var inst_33433 = (state_33500[(13)]);
var inst_33459 = (state_33500[(19)]);
var inst_33432 = (state_33500[(14)]);
var inst_33439 = (state_33500[(15)]);
var inst_33437 = (state_33500[(16)]);
var inst_33455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33458 = (function (){var files_not_loaded = inst_33439;
var res = inst_33437;
var res_SINGLEQUOTE_ = inst_33436;
var files_SINGLEQUOTE_ = inst_33433;
var all_files = inst_33432;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33459,inst_33432,inst_33439,inst_33437,inst_33455,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (p__33457){
var map__33544 = p__33457;
var map__33544__$1 = ((cljs.core.seq_QMARK_.call(null,map__33544))?cljs.core.apply.call(null,cljs.core.hash_map,map__33544):map__33544);
var meta_data = cljs.core.get.call(null,map__33544__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33459,inst_33432,inst_33439,inst_33437,inst_33455,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33459__$1 = cljs.core.group_by.call(null,inst_33458,inst_33439);
var inst_33460 = cljs.core.seq_QMARK_.call(null,inst_33459__$1);
var state_33500__$1 = (function (){var statearr_33545 = state_33500;
(statearr_33545[(31)] = inst_33455);

(statearr_33545[(19)] = inst_33459__$1);

return statearr_33545;
})();
if(inst_33460){
var statearr_33546_33603 = state_33500__$1;
(statearr_33546_33603[(1)] = (26));

} else {
var statearr_33547_33604 = state_33500__$1;
(statearr_33547_33604[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (35))){
var inst_33466 = (state_33500[(29)]);
var inst_33489 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33466);
var inst_33490 = cljs.core.pr_str.call(null,inst_33489);
var inst_33491 = [cljs.core.str("not required: "),cljs.core.str(inst_33490)].join('');
var inst_33492 = figwheel.client.utils.log.call(null,inst_33491);
var state_33500__$1 = state_33500;
var statearr_33548_33605 = state_33500__$1;
(statearr_33548_33605[(2)] = inst_33492);

(statearr_33548_33605[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (19))){
var inst_33436 = (state_33500[(12)]);
var inst_33433 = (state_33500[(13)]);
var inst_33432 = (state_33500[(14)]);
var inst_33437 = (state_33500[(16)]);
var inst_33436__$1 = (state_33500[(2)]);
var inst_33437__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33436__$1);
var inst_33438 = (function (){var res = inst_33437__$1;
var res_SINGLEQUOTE_ = inst_33436__$1;
var files_SINGLEQUOTE_ = inst_33433;
var all_files = inst_33432;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33432,inst_33437,inst_33436__$1,inst_33437__$1,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (p1__33172_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33172_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_33436,inst_33433,inst_33432,inst_33437,inst_33436__$1,inst_33437__$1,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33439 = cljs.core.filter.call(null,inst_33438,inst_33436__$1);
var inst_33440 = cljs.core.not_empty.call(null,inst_33437__$1);
var state_33500__$1 = (function (){var statearr_33549 = state_33500;
(statearr_33549[(12)] = inst_33436__$1);

(statearr_33549[(15)] = inst_33439);

(statearr_33549[(16)] = inst_33437__$1);

return statearr_33549;
})();
if(cljs.core.truth_(inst_33440)){
var statearr_33550_33606 = state_33500__$1;
(statearr_33550_33606[(1)] = (20));

} else {
var statearr_33551_33607 = state_33500__$1;
(statearr_33551_33607[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (11))){
var state_33500__$1 = state_33500;
var statearr_33552_33608 = state_33500__$1;
(statearr_33552_33608[(2)] = null);

(statearr_33552_33608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (9))){
var inst_33419 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33553_33609 = state_33500__$1;
(statearr_33553_33609[(2)] = inst_33419);

(statearr_33553_33609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (5))){
var inst_33390 = (state_33500[(8)]);
var inst_33389 = (state_33500[(10)]);
var inst_33392 = (inst_33390 < inst_33389);
var inst_33393 = inst_33392;
var state_33500__$1 = state_33500;
if(cljs.core.truth_(inst_33393)){
var statearr_33554_33610 = state_33500__$1;
(statearr_33554_33610[(1)] = (7));

} else {
var statearr_33555_33611 = state_33500__$1;
(statearr_33555_33611[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (14))){
var inst_33400 = (state_33500[(26)]);
var inst_33409 = cljs.core.first.call(null,inst_33400);
var inst_33410 = figwheel.client.file_reloading.eval_body.call(null,inst_33409);
var inst_33411 = cljs.core.next.call(null,inst_33400);
var inst_33387 = inst_33411;
var inst_33388 = null;
var inst_33389 = (0);
var inst_33390 = (0);
var state_33500__$1 = (function (){var statearr_33556 = state_33500;
(statearr_33556[(32)] = inst_33410);

(statearr_33556[(7)] = inst_33387);

(statearr_33556[(8)] = inst_33390);

(statearr_33556[(9)] = inst_33388);

(statearr_33556[(10)] = inst_33389);

return statearr_33556;
})();
var statearr_33557_33612 = state_33500__$1;
(statearr_33557_33612[(2)] = null);

(statearr_33557_33612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (26))){
var inst_33459 = (state_33500[(19)]);
var inst_33462 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33459);
var state_33500__$1 = state_33500;
var statearr_33558_33613 = state_33500__$1;
(statearr_33558_33613[(2)] = inst_33462);

(statearr_33558_33613[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (16))){
var inst_33426 = (state_33500[(22)]);
var inst_33428 = (function (){var all_files = inst_33426;
return ((function (all_files,inst_33426,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function (p1__33171_SHARP_){
return cljs.core.update_in.call(null,p1__33171_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_33426,state_val_33501,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var inst_33429 = cljs.core.map.call(null,inst_33428,inst_33426);
var state_33500__$1 = state_33500;
var statearr_33559_33614 = state_33500__$1;
(statearr_33559_33614[(2)] = inst_33429);

(statearr_33559_33614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (30))){
var state_33500__$1 = state_33500;
var statearr_33560_33615 = state_33500__$1;
(statearr_33560_33615[(2)] = null);

(statearr_33560_33615[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (10))){
var inst_33400 = (state_33500[(26)]);
var inst_33402 = cljs.core.chunked_seq_QMARK_.call(null,inst_33400);
var state_33500__$1 = state_33500;
if(inst_33402){
var statearr_33561_33616 = state_33500__$1;
(statearr_33561_33616[(1)] = (13));

} else {
var statearr_33562_33617 = state_33500__$1;
(statearr_33562_33617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (18))){
var inst_33433 = (state_33500[(13)]);
var inst_33432 = (state_33500[(14)]);
var inst_33432__$1 = (state_33500[(2)]);
var inst_33433__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_33432__$1);
var inst_33434 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33433__$1);
var state_33500__$1 = (function (){var statearr_33563 = state_33500;
(statearr_33563[(13)] = inst_33433__$1);

(statearr_33563[(14)] = inst_33432__$1);

return statearr_33563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33500__$1,(19),inst_33434);
} else {
if((state_val_33501 === (37))){
var inst_33495 = (state_33500[(2)]);
var state_33500__$1 = state_33500;
var statearr_33564_33618 = state_33500__$1;
(statearr_33564_33618[(2)] = inst_33495);

(statearr_33564_33618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33501 === (8))){
var inst_33400 = (state_33500[(26)]);
var inst_33387 = (state_33500[(7)]);
var inst_33400__$1 = cljs.core.seq.call(null,inst_33387);
var state_33500__$1 = (function (){var statearr_33565 = state_33500;
(statearr_33565[(26)] = inst_33400__$1);

return statearr_33565;
})();
if(inst_33400__$1){
var statearr_33566_33619 = state_33500__$1;
(statearr_33566_33619[(1)] = (10));

} else {
var statearr_33567_33620 = state_33500__$1;
(statearr_33567_33620[(1)] = (11));

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
});})(c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
;
return ((function (switch__20381__auto__,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_33571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33571[(0)] = state_machine__20382__auto__);

(statearr_33571[(1)] = (1));

return statearr_33571;
});
var state_machine__20382__auto____1 = (function (state_33500){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_33500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e33572){if((e33572 instanceof Object)){
var ex__20385__auto__ = e33572;
var statearr_33573_33621 = state_33500;
(statearr_33573_33621[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33622 = state_33500;
state_33500 = G__33622;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_33500){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_33500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
})();
var state__20398__auto__ = (function (){var statearr_33574 = f__20397__auto__.call(null);
(statearr_33574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_33574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__,map__33375,map__33375__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__33376,map__33376__$1,msg,files))
);

return c__20396__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__33625,link){
var map__33627 = p__33625;
var map__33627__$1 = ((cljs.core.seq_QMARK_.call(null,map__33627))?cljs.core.apply.call(null,cljs.core.hash_map,map__33627):map__33627);
var file = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4406__auto__ = link.href;
if(cljs.core.truth_(temp__4406__auto__)){
var link_href = temp__4406__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4406__auto__,map__33627,map__33627__$1,file){
return (function (p1__33623_SHARP_,p2__33624_SHARP_){
if(cljs.core._EQ_.call(null,p1__33623_SHARP_,p2__33624_SHARP_)){
return p1__33623_SHARP_;
} else {
return false;
}
});})(link_href,temp__4406__auto__,map__33627,map__33627__$1,file))
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
var temp__4406__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33631){
var map__33632 = p__33631;
var map__33632__$1 = ((cljs.core.seq_QMARK_.call(null,map__33632))?cljs.core.apply.call(null,cljs.core.hash_map,map__33632):map__33632);
var current_url_length = cljs.core.get.call(null,map__33632__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__33632__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33628_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33628_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__33633){
var map__33635 = p__33633;
var map__33635__$1 = ((cljs.core.seq_QMARK_.call(null,map__33635))?cljs.core.apply.call(null,cljs.core.hash_map,map__33635):map__33635);
var f_data = map__33635__$1;
var request_url = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__33636,files_msg){
var map__33658 = p__33636;
var map__33658__$1 = ((cljs.core.seq_QMARK_.call(null,map__33658))?cljs.core.apply.call(null,cljs.core.hash_map,map__33658):map__33658);
var opts = map__33658__$1;
var on_cssload = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__33659_33679 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__33660_33680 = null;
var count__33661_33681 = (0);
var i__33662_33682 = (0);
while(true){
if((i__33662_33682 < count__33661_33681)){
var f_33683 = cljs.core._nth.call(null,chunk__33660_33680,i__33662_33682);
figwheel.client.file_reloading.reload_css_file.call(null,f_33683);

var G__33684 = seq__33659_33679;
var G__33685 = chunk__33660_33680;
var G__33686 = count__33661_33681;
var G__33687 = (i__33662_33682 + (1));
seq__33659_33679 = G__33684;
chunk__33660_33680 = G__33685;
count__33661_33681 = G__33686;
i__33662_33682 = G__33687;
continue;
} else {
var temp__4406__auto___33688 = cljs.core.seq.call(null,seq__33659_33679);
if(temp__4406__auto___33688){
var seq__33659_33689__$1 = temp__4406__auto___33688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33659_33689__$1)){
var c__15231__auto___33690 = cljs.core.chunk_first.call(null,seq__33659_33689__$1);
var G__33691 = cljs.core.chunk_rest.call(null,seq__33659_33689__$1);
var G__33692 = c__15231__auto___33690;
var G__33693 = cljs.core.count.call(null,c__15231__auto___33690);
var G__33694 = (0);
seq__33659_33679 = G__33691;
chunk__33660_33680 = G__33692;
count__33661_33681 = G__33693;
i__33662_33682 = G__33694;
continue;
} else {
var f_33695 = cljs.core.first.call(null,seq__33659_33689__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33695);

var G__33696 = cljs.core.next.call(null,seq__33659_33689__$1);
var G__33697 = null;
var G__33698 = (0);
var G__33699 = (0);
seq__33659_33679 = G__33696;
chunk__33660_33680 = G__33697;
count__33661_33681 = G__33698;
i__33662_33682 = G__33699;
continue;
}
} else {
}
}
break;
}

var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__,map__33658,map__33658__$1,opts,on_cssload){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__,map__33658,map__33658__$1,opts,on_cssload){
return (function (state_33669){
var state_val_33670 = (state_33669[(1)]);
if((state_val_33670 === (2))){
var inst_33665 = (state_33669[(2)]);
var inst_33666 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_33667 = on_cssload.call(null,inst_33666);
var state_33669__$1 = (function (){var statearr_33671 = state_33669;
(statearr_33671[(7)] = inst_33665);

return statearr_33671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33669__$1,inst_33667);
} else {
if((state_val_33670 === (1))){
var inst_33663 = cljs.core.async.timeout.call(null,(100));
var state_33669__$1 = state_33669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33669__$1,(2),inst_33663);
} else {
return null;
}
}
});})(c__20396__auto__,map__33658,map__33658__$1,opts,on_cssload))
;
return ((function (switch__20381__auto__,c__20396__auto__,map__33658,map__33658__$1,opts,on_cssload){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_33675 = [null,null,null,null,null,null,null,null];
(statearr_33675[(0)] = state_machine__20382__auto__);

(statearr_33675[(1)] = (1));

return statearr_33675;
});
var state_machine__20382__auto____1 = (function (state_33669){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_33669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e33676){if((e33676 instanceof Object)){
var ex__20385__auto__ = e33676;
var statearr_33677_33700 = state_33669;
(statearr_33677_33700[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33701 = state_33669;
state_33669 = G__33701;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_33669){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_33669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__,map__33658,map__33658__$1,opts,on_cssload))
})();
var state__20398__auto__ = (function (){var statearr_33678 = f__20397__auto__.call(null);
(statearr_33678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_33678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__,map__33658,map__33658__$1,opts,on_cssload))
);

return c__20396__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map