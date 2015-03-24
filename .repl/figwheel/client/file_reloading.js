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
return cljs.core.reduce.call(null,(function (p1__38573_SHARP_,p2__38574_SHARP_){
var and__10929__auto__ = p1__38573_SHARP_;
if(cljs.core.truth_(and__10929__auto__)){
return p2__38574_SHARP_;
} else {
return and__10929__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__10941__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__10941__auto__){
return or__10941__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__38576_SHARP_,p2__38575_SHARP_){
return [cljs.core.str(p2__38575_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__10941__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__10941__auto__){
return or__10941__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__10941__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__11838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11842__auto__,method_table__11838__auto__,prefer_table__11839__auto__,method_cache__11840__auto__,cached_hierarchy__11841__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__38577){
var map__38578 = p__38577;
var map__38578__$1 = ((cljs.core.seq_QMARK_.call(null,map__38578))?cljs.core.apply.call(null,cljs.core.hash_map,map__38578):map__38578);
var file = cljs.core.get.call(null,map__38578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__38579){
var map__38580 = p__38579;
var map__38580__$1 = ((cljs.core.seq_QMARK_.call(null,map__38580))?cljs.core.apply.call(null,cljs.core.hash_map,map__38580):map__38580);
var namespace = cljs.core.get.call(null,map__38580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__11838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11842__auto__,method_table__11838__auto__,prefer_table__11839__auto__,method_cache__11840__auto__,cached_hierarchy__11841__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e38581){if((e38581 instanceof Error)){
var e = e38581;
return false;
} else {
throw e38581;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__38582,callback){
var map__38584 = p__38582;
var map__38584__$1 = ((cljs.core.seq_QMARK_.call(null,map__38584))?cljs.core.apply.call(null,cljs.core.hash_map,map__38584):map__38584);
var file_msg = map__38584__$1;
var request_url = cljs.core.get.call(null,map__38584__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__38584,map__38584__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38584,map__38584__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__38585){
var map__38587 = p__38585;
var map__38587__$1 = ((cljs.core.seq_QMARK_.call(null,map__38587))?cljs.core.apply.call(null,cljs.core.hash_map,map__38587):map__38587);
var file_msg = map__38587__$1;
var meta_data = cljs.core.get.call(null,map__38587__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__38587__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__10941__auto__ = meta_data;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__10929__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__10929__auto__){
var or__10941__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__10941__auto____$1)){
return or__10941__auto____$1;
} else {
var and__10929__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__10929__auto____$1){
var or__10941__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__10941__auto____$2){
return or__10941__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__10929__auto____$1;
}
}
}
} else {
return and__10929__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__38588,callback){
var map__38590 = p__38588;
var map__38590__$1 = ((cljs.core.seq_QMARK_.call(null,map__38590))?cljs.core.apply.call(null,cljs.core.hash_map,map__38590):map__38590);
var file_msg = map__38590__$1;
var namespace = cljs.core.get.call(null,map__38590__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__38590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__25458__auto___38677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___38677,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___38677,out){
return (function (state_38659){
var state_val_38660 = (state_38659[(1)]);
if((state_val_38660 === (7))){
var inst_38643 = (state_38659[(7)]);
var inst_38649 = (state_38659[(2)]);
var inst_38650 = cljs.core.async.put_BANG_.call(null,out,inst_38649);
var inst_38639 = inst_38643;
var state_38659__$1 = (function (){var statearr_38661 = state_38659;
(statearr_38661[(8)] = inst_38650);

(statearr_38661[(9)] = inst_38639);

return statearr_38661;
})();
var statearr_38662_38678 = state_38659__$1;
(statearr_38662_38678[(2)] = null);

(statearr_38662_38678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (6))){
var inst_38655 = (state_38659[(2)]);
var state_38659__$1 = state_38659;
var statearr_38663_38679 = state_38659__$1;
(statearr_38663_38679[(2)] = inst_38655);

(statearr_38663_38679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (5))){
var inst_38653 = cljs.core.async.close_BANG_.call(null,out);
var state_38659__$1 = state_38659;
var statearr_38664_38680 = state_38659__$1;
(statearr_38664_38680[(2)] = inst_38653);

(statearr_38664_38680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (4))){
var inst_38642 = (state_38659[(10)]);
var inst_38647 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38642);
var state_38659__$1 = state_38659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38659__$1,(7),inst_38647);
} else {
if((state_val_38660 === (3))){
var inst_38657 = (state_38659[(2)]);
var state_38659__$1 = state_38659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38659__$1,inst_38657);
} else {
if((state_val_38660 === (2))){
var inst_38642 = (state_38659[(10)]);
var inst_38639 = (state_38659[(9)]);
var inst_38642__$1 = cljs.core.nth.call(null,inst_38639,(0),null);
var inst_38643 = cljs.core.nthnext.call(null,inst_38639,(1));
var inst_38644 = (inst_38642__$1 == null);
var inst_38645 = cljs.core.not.call(null,inst_38644);
var state_38659__$1 = (function (){var statearr_38665 = state_38659;
(statearr_38665[(10)] = inst_38642__$1);

(statearr_38665[(7)] = inst_38643);

return statearr_38665;
})();
if(inst_38645){
var statearr_38666_38681 = state_38659__$1;
(statearr_38666_38681[(1)] = (4));

} else {
var statearr_38667_38682 = state_38659__$1;
(statearr_38667_38682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38660 === (1))){
var inst_38637 = cljs.core.nth.call(null,files,(0),null);
var inst_38638 = cljs.core.nthnext.call(null,files,(1));
var inst_38639 = files;
var state_38659__$1 = (function (){var statearr_38668 = state_38659;
(statearr_38668[(11)] = inst_38638);

(statearr_38668[(9)] = inst_38639);

(statearr_38668[(12)] = inst_38637);

return statearr_38668;
})();
var statearr_38669_38683 = state_38659__$1;
(statearr_38669_38683[(2)] = null);

(statearr_38669_38683[(1)] = (2));


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
});})(c__25458__auto___38677,out))
;
return ((function (switch__25402__auto__,c__25458__auto___38677,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_38673 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38673[(0)] = state_machine__25403__auto__);

(statearr_38673[(1)] = (1));

return statearr_38673;
});
var state_machine__25403__auto____1 = (function (state_38659){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38674){if((e38674 instanceof Object)){
var ex__25406__auto__ = e38674;
var statearr_38675_38684 = state_38659;
(statearr_38675_38684[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38685 = state_38659;
state_38659 = G__38685;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38659){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___38677,out))
})();
var state__25460__auto__ = (function (){var statearr_38676 = f__25459__auto__.call(null);
(statearr_38676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___38677);

return statearr_38676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___38677,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__38686,p__38687){
var map__38690 = p__38686;
var map__38690__$1 = ((cljs.core.seq_QMARK_.call(null,map__38690))?cljs.core.apply.call(null,cljs.core.hash_map,map__38690):map__38690);
var opts = map__38690__$1;
var url_rewriter = cljs.core.get.call(null,map__38690__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__38691 = p__38687;
var map__38691__$1 = ((cljs.core.seq_QMARK_.call(null,map__38691))?cljs.core.apply.call(null,cljs.core.hash_map,map__38691):map__38691);
var file_msg = map__38691__$1;
var file = cljs.core.get.call(null,map__38691__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__38692){
var map__38695 = p__38692;
var map__38695__$1 = ((cljs.core.seq_QMARK_.call(null,map__38695))?cljs.core.apply.call(null,cljs.core.hash_map,map__38695):map__38695);
var file = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__10929__auto__ = eval_body__$1;
if(cljs.core.truth_(and__10929__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__10929__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e38696){var e = e38696;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__38701,p__38702){
var map__38903 = p__38701;
var map__38903__$1 = ((cljs.core.seq_QMARK_.call(null,map__38903))?cljs.core.apply.call(null,cljs.core.hash_map,map__38903):map__38903);
var opts = map__38903__$1;
var load_unchanged_files = cljs.core.get.call(null,map__38903__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__38903__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__38903__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__38904 = p__38702;
var map__38904__$1 = ((cljs.core.seq_QMARK_.call(null,map__38904))?cljs.core.apply.call(null,cljs.core.hash_map,map__38904):map__38904);
var msg = map__38904__$1;
var files = cljs.core.get.call(null,map__38904__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (state_39028){
var state_val_39029 = (state_39028[(1)]);
if((state_val_39029 === (7))){
var inst_38918 = (state_39028[(7)]);
var inst_38915 = (state_39028[(8)]);
var inst_38916 = (state_39028[(9)]);
var inst_38917 = (state_39028[(10)]);
var inst_38923 = cljs.core._nth.call(null,inst_38916,inst_38918);
var inst_38924 = figwheel.client.file_reloading.eval_body.call(null,inst_38923);
var inst_38925 = (inst_38918 + (1));
var tmp39030 = inst_38915;
var tmp39031 = inst_38916;
var tmp39032 = inst_38917;
var inst_38915__$1 = tmp39030;
var inst_38916__$1 = tmp39031;
var inst_38917__$1 = tmp39032;
var inst_38918__$1 = inst_38925;
var state_39028__$1 = (function (){var statearr_39033 = state_39028;
(statearr_39033[(7)] = inst_38918__$1);

(statearr_39033[(8)] = inst_38915__$1);

(statearr_39033[(9)] = inst_38916__$1);

(statearr_39033[(10)] = inst_38917__$1);

(statearr_39033[(11)] = inst_38924);

return statearr_39033;
})();
var statearr_39034_39103 = state_39028__$1;
(statearr_39034_39103[(2)] = null);

(statearr_39034_39103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (20))){
var inst_38960 = (state_39028[(12)]);
var inst_38964 = (state_39028[(13)]);
var inst_38961 = (state_39028[(14)]);
var inst_38965 = (state_39028[(15)]);
var inst_38967 = (state_39028[(16)]);
var inst_38970 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38972 = (function (){var files_not_loaded = inst_38967;
var res = inst_38965;
var res_SINGLEQUOTE_ = inst_38964;
var files_SINGLEQUOTE_ = inst_38961;
var all_files = inst_38960;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38965,inst_38967,inst_38970,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (p__38971){
var map__39035 = p__38971;
var map__39035__$1 = ((cljs.core.seq_QMARK_.call(null,map__39035))?cljs.core.apply.call(null,cljs.core.hash_map,map__39035):map__39035);
var file = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__39035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38965,inst_38967,inst_38970,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38973 = cljs.core.map.call(null,inst_38972,inst_38965);
var inst_38974 = cljs.core.pr_str.call(null,inst_38973);
var inst_38975 = figwheel.client.utils.log.call(null,inst_38974);
var inst_38976 = (function (){var files_not_loaded = inst_38967;
var res = inst_38965;
var res_SINGLEQUOTE_ = inst_38964;
var files_SINGLEQUOTE_ = inst_38961;
var all_files = inst_38960;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38965,inst_38967,inst_38970,inst_38972,inst_38973,inst_38974,inst_38975,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38965,inst_38967,inst_38970,inst_38972,inst_38973,inst_38974,inst_38975,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38977 = setTimeout(inst_38976,(10));
var state_39028__$1 = (function (){var statearr_39036 = state_39028;
(statearr_39036[(17)] = inst_38975);

(statearr_39036[(18)] = inst_38970);

return statearr_39036;
})();
var statearr_39037_39104 = state_39028__$1;
(statearr_39037_39104[(2)] = inst_38977);

(statearr_39037_39104[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (27))){
var inst_38987 = (state_39028[(19)]);
var state_39028__$1 = state_39028;
var statearr_39038_39105 = state_39028__$1;
(statearr_39038_39105[(2)] = inst_38987);

(statearr_39038_39105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (1))){
var inst_38907 = (state_39028[(20)]);
var inst_38905 = before_jsload.call(null,files);
var inst_38906 = (function (){return ((function (inst_38907,inst_38905,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (p1__38697_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38697_SHARP_);
});
;})(inst_38907,inst_38905,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38907__$1 = cljs.core.filter.call(null,inst_38906,files);
var inst_38908 = cljs.core.not_empty.call(null,inst_38907__$1);
var state_39028__$1 = (function (){var statearr_39039 = state_39028;
(statearr_39039[(21)] = inst_38905);

(statearr_39039[(20)] = inst_38907__$1);

return statearr_39039;
})();
if(cljs.core.truth_(inst_38908)){
var statearr_39040_39106 = state_39028__$1;
(statearr_39040_39106[(1)] = (2));

} else {
var statearr_39041_39107 = state_39028__$1;
(statearr_39041_39107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (24))){
var state_39028__$1 = state_39028;
var statearr_39042_39108 = state_39028__$1;
(statearr_39042_39108[(2)] = null);

(statearr_39042_39108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (4))){
var inst_38952 = (state_39028[(2)]);
var inst_38953 = (function (){return ((function (inst_38952,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (p1__38698_SHARP_){
var and__10929__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38698_SHARP_);
if(cljs.core.truth_(and__10929__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38698_SHARP_));
} else {
return and__10929__auto__;
}
});
;})(inst_38952,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38954 = cljs.core.filter.call(null,inst_38953,files);
var state_39028__$1 = (function (){var statearr_39043 = state_39028;
(statearr_39043[(22)] = inst_38954);

(statearr_39043[(23)] = inst_38952);

return statearr_39043;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_39044_39109 = state_39028__$1;
(statearr_39044_39109[(1)] = (16));

} else {
var statearr_39045_39110 = state_39028__$1;
(statearr_39045_39110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (15))){
var inst_38942 = (state_39028[(2)]);
var state_39028__$1 = state_39028;
var statearr_39046_39111 = state_39028__$1;
(statearr_39046_39111[(2)] = inst_38942);

(statearr_39046_39111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (21))){
var state_39028__$1 = state_39028;
var statearr_39047_39112 = state_39028__$1;
(statearr_39047_39112[(2)] = null);

(statearr_39047_39112[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (31))){
var inst_38995 = (state_39028[(24)]);
var inst_39005 = (state_39028[(2)]);
var inst_39006 = cljs.core.not_empty.call(null,inst_38995);
var state_39028__$1 = (function (){var statearr_39048 = state_39028;
(statearr_39048[(25)] = inst_39005);

return statearr_39048;
})();
if(cljs.core.truth_(inst_39006)){
var statearr_39049_39113 = state_39028__$1;
(statearr_39049_39113[(1)] = (32));

} else {
var statearr_39050_39114 = state_39028__$1;
(statearr_39050_39114[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (32))){
var inst_38995 = (state_39028[(24)]);
var inst_39008 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38995);
var inst_39009 = cljs.core.pr_str.call(null,inst_39008);
var inst_39010 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_39009)].join('');
var inst_39011 = figwheel.client.utils.log.call(null,inst_39010);
var state_39028__$1 = state_39028;
var statearr_39051_39115 = state_39028__$1;
(statearr_39051_39115[(2)] = inst_39011);

(statearr_39051_39115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (33))){
var state_39028__$1 = state_39028;
var statearr_39052_39116 = state_39028__$1;
(statearr_39052_39116[(2)] = null);

(statearr_39052_39116[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (13))){
var inst_38928 = (state_39028[(26)]);
var inst_38932 = cljs.core.chunk_first.call(null,inst_38928);
var inst_38933 = cljs.core.chunk_rest.call(null,inst_38928);
var inst_38934 = cljs.core.count.call(null,inst_38932);
var inst_38915 = inst_38933;
var inst_38916 = inst_38932;
var inst_38917 = inst_38934;
var inst_38918 = (0);
var state_39028__$1 = (function (){var statearr_39053 = state_39028;
(statearr_39053[(7)] = inst_38918);

(statearr_39053[(8)] = inst_38915);

(statearr_39053[(9)] = inst_38916);

(statearr_39053[(10)] = inst_38917);

return statearr_39053;
})();
var statearr_39054_39117 = state_39028__$1;
(statearr_39054_39117[(2)] = null);

(statearr_39054_39117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (22))){
var inst_38967 = (state_39028[(16)]);
var inst_38980 = (state_39028[(2)]);
var inst_38981 = cljs.core.not_empty.call(null,inst_38967);
var state_39028__$1 = (function (){var statearr_39055 = state_39028;
(statearr_39055[(27)] = inst_38980);

return statearr_39055;
})();
if(cljs.core.truth_(inst_38981)){
var statearr_39056_39118 = state_39028__$1;
(statearr_39056_39118[(1)] = (23));

} else {
var statearr_39057_39119 = state_39028__$1;
(statearr_39057_39119[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (36))){
var state_39028__$1 = state_39028;
var statearr_39058_39120 = state_39028__$1;
(statearr_39058_39120[(2)] = null);

(statearr_39058_39120[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (29))){
var inst_38996 = (state_39028[(28)]);
var inst_38999 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38996);
var inst_39000 = cljs.core.pr_str.call(null,inst_38999);
var inst_39001 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39000)].join('');
var inst_39002 = figwheel.client.utils.log.call(null,inst_39001);
var state_39028__$1 = state_39028;
var statearr_39059_39121 = state_39028__$1;
(statearr_39059_39121[(2)] = inst_39002);

(statearr_39059_39121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (6))){
var inst_38949 = (state_39028[(2)]);
var state_39028__$1 = state_39028;
var statearr_39060_39122 = state_39028__$1;
(statearr_39060_39122[(2)] = inst_38949);

(statearr_39060_39122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (28))){
var inst_38996 = (state_39028[(28)]);
var inst_38993 = (state_39028[(2)]);
var inst_38994 = cljs.core.get.call(null,inst_38993,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38995 = cljs.core.get.call(null,inst_38993,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_38996__$1 = cljs.core.get.call(null,inst_38993,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38997 = cljs.core.not_empty.call(null,inst_38996__$1);
var state_39028__$1 = (function (){var statearr_39061 = state_39028;
(statearr_39061[(28)] = inst_38996__$1);

(statearr_39061[(24)] = inst_38995);

(statearr_39061[(29)] = inst_38994);

return statearr_39061;
})();
if(cljs.core.truth_(inst_38997)){
var statearr_39062_39123 = state_39028__$1;
(statearr_39062_39123[(1)] = (29));

} else {
var statearr_39063_39124 = state_39028__$1;
(statearr_39063_39124[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (25))){
var inst_39026 = (state_39028[(2)]);
var state_39028__$1 = state_39028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39028__$1,inst_39026);
} else {
if((state_val_39029 === (34))){
var inst_38994 = (state_39028[(29)]);
var inst_39014 = (state_39028[(2)]);
var inst_39015 = cljs.core.not_empty.call(null,inst_38994);
var state_39028__$1 = (function (){var statearr_39064 = state_39028;
(statearr_39064[(30)] = inst_39014);

return statearr_39064;
})();
if(cljs.core.truth_(inst_39015)){
var statearr_39065_39125 = state_39028__$1;
(statearr_39065_39125[(1)] = (35));

} else {
var statearr_39066_39126 = state_39028__$1;
(statearr_39066_39126[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (17))){
var inst_38954 = (state_39028[(22)]);
var state_39028__$1 = state_39028;
var statearr_39067_39127 = state_39028__$1;
(statearr_39067_39127[(2)] = inst_38954);

(statearr_39067_39127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (3))){
var state_39028__$1 = state_39028;
var statearr_39068_39128 = state_39028__$1;
(statearr_39068_39128[(2)] = null);

(statearr_39068_39128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (12))){
var inst_38945 = (state_39028[(2)]);
var state_39028__$1 = state_39028;
var statearr_39069_39129 = state_39028__$1;
(statearr_39069_39129[(2)] = inst_38945);

(statearr_39069_39129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (2))){
var inst_38907 = (state_39028[(20)]);
var inst_38914 = cljs.core.seq.call(null,inst_38907);
var inst_38915 = inst_38914;
var inst_38916 = null;
var inst_38917 = (0);
var inst_38918 = (0);
var state_39028__$1 = (function (){var statearr_39070 = state_39028;
(statearr_39070[(7)] = inst_38918);

(statearr_39070[(8)] = inst_38915);

(statearr_39070[(9)] = inst_38916);

(statearr_39070[(10)] = inst_38917);

return statearr_39070;
})();
var statearr_39071_39130 = state_39028__$1;
(statearr_39071_39130[(2)] = null);

(statearr_39071_39130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (23))){
var inst_38960 = (state_39028[(12)]);
var inst_38964 = (state_39028[(13)]);
var inst_38961 = (state_39028[(14)]);
var inst_38987 = (state_39028[(19)]);
var inst_38965 = (state_39028[(15)]);
var inst_38967 = (state_39028[(16)]);
var inst_38983 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38986 = (function (){var files_not_loaded = inst_38967;
var res = inst_38965;
var res_SINGLEQUOTE_ = inst_38964;
var files_SINGLEQUOTE_ = inst_38961;
var all_files = inst_38960;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38987,inst_38965,inst_38967,inst_38983,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (p__38985){
var map__39072 = p__38985;
var map__39072__$1 = ((cljs.core.seq_QMARK_.call(null,map__39072))?cljs.core.apply.call(null,cljs.core.hash_map,map__39072):map__39072);
var meta_data = cljs.core.get.call(null,map__39072__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38987,inst_38965,inst_38967,inst_38983,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38987__$1 = cljs.core.group_by.call(null,inst_38986,inst_38967);
var inst_38988 = cljs.core.seq_QMARK_.call(null,inst_38987__$1);
var state_39028__$1 = (function (){var statearr_39073 = state_39028;
(statearr_39073[(31)] = inst_38983);

(statearr_39073[(19)] = inst_38987__$1);

return statearr_39073;
})();
if(inst_38988){
var statearr_39074_39131 = state_39028__$1;
(statearr_39074_39131[(1)] = (26));

} else {
var statearr_39075_39132 = state_39028__$1;
(statearr_39075_39132[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (35))){
var inst_38994 = (state_39028[(29)]);
var inst_39017 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38994);
var inst_39018 = cljs.core.pr_str.call(null,inst_39017);
var inst_39019 = [cljs.core.str("not required: "),cljs.core.str(inst_39018)].join('');
var inst_39020 = figwheel.client.utils.log.call(null,inst_39019);
var state_39028__$1 = state_39028;
var statearr_39076_39133 = state_39028__$1;
(statearr_39076_39133[(2)] = inst_39020);

(statearr_39076_39133[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (19))){
var inst_38960 = (state_39028[(12)]);
var inst_38964 = (state_39028[(13)]);
var inst_38961 = (state_39028[(14)]);
var inst_38965 = (state_39028[(15)]);
var inst_38964__$1 = (state_39028[(2)]);
var inst_38965__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38964__$1);
var inst_38966 = (function (){var res = inst_38965__$1;
var res_SINGLEQUOTE_ = inst_38964__$1;
var files_SINGLEQUOTE_ = inst_38961;
var all_files = inst_38960;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38965,inst_38964__$1,inst_38965__$1,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (p1__38700_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38700_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_38960,inst_38964,inst_38961,inst_38965,inst_38964__$1,inst_38965__$1,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38967 = cljs.core.filter.call(null,inst_38966,inst_38964__$1);
var inst_38968 = cljs.core.not_empty.call(null,inst_38965__$1);
var state_39028__$1 = (function (){var statearr_39077 = state_39028;
(statearr_39077[(13)] = inst_38964__$1);

(statearr_39077[(15)] = inst_38965__$1);

(statearr_39077[(16)] = inst_38967);

return statearr_39077;
})();
if(cljs.core.truth_(inst_38968)){
var statearr_39078_39134 = state_39028__$1;
(statearr_39078_39134[(1)] = (20));

} else {
var statearr_39079_39135 = state_39028__$1;
(statearr_39079_39135[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (11))){
var state_39028__$1 = state_39028;
var statearr_39080_39136 = state_39028__$1;
(statearr_39080_39136[(2)] = null);

(statearr_39080_39136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (9))){
var inst_38947 = (state_39028[(2)]);
var state_39028__$1 = state_39028;
var statearr_39081_39137 = state_39028__$1;
(statearr_39081_39137[(2)] = inst_38947);

(statearr_39081_39137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (5))){
var inst_38918 = (state_39028[(7)]);
var inst_38917 = (state_39028[(10)]);
var inst_38920 = (inst_38918 < inst_38917);
var inst_38921 = inst_38920;
var state_39028__$1 = state_39028;
if(cljs.core.truth_(inst_38921)){
var statearr_39082_39138 = state_39028__$1;
(statearr_39082_39138[(1)] = (7));

} else {
var statearr_39083_39139 = state_39028__$1;
(statearr_39083_39139[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (14))){
var inst_38928 = (state_39028[(26)]);
var inst_38937 = cljs.core.first.call(null,inst_38928);
var inst_38938 = figwheel.client.file_reloading.eval_body.call(null,inst_38937);
var inst_38939 = cljs.core.next.call(null,inst_38928);
var inst_38915 = inst_38939;
var inst_38916 = null;
var inst_38917 = (0);
var inst_38918 = (0);
var state_39028__$1 = (function (){var statearr_39084 = state_39028;
(statearr_39084[(7)] = inst_38918);

(statearr_39084[(8)] = inst_38915);

(statearr_39084[(9)] = inst_38916);

(statearr_39084[(32)] = inst_38938);

(statearr_39084[(10)] = inst_38917);

return statearr_39084;
})();
var statearr_39085_39140 = state_39028__$1;
(statearr_39085_39140[(2)] = null);

(statearr_39085_39140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (26))){
var inst_38987 = (state_39028[(19)]);
var inst_38990 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38987);
var state_39028__$1 = state_39028;
var statearr_39086_39141 = state_39028__$1;
(statearr_39086_39141[(2)] = inst_38990);

(statearr_39086_39141[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (16))){
var inst_38954 = (state_39028[(22)]);
var inst_38956 = (function (){var all_files = inst_38954;
return ((function (all_files,inst_38954,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function (p1__38699_SHARP_){
return cljs.core.update_in.call(null,p1__38699_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_38954,state_val_39029,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var inst_38957 = cljs.core.map.call(null,inst_38956,inst_38954);
var state_39028__$1 = state_39028;
var statearr_39087_39142 = state_39028__$1;
(statearr_39087_39142[(2)] = inst_38957);

(statearr_39087_39142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (30))){
var state_39028__$1 = state_39028;
var statearr_39088_39143 = state_39028__$1;
(statearr_39088_39143[(2)] = null);

(statearr_39088_39143[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (10))){
var inst_38928 = (state_39028[(26)]);
var inst_38930 = cljs.core.chunked_seq_QMARK_.call(null,inst_38928);
var state_39028__$1 = state_39028;
if(inst_38930){
var statearr_39089_39144 = state_39028__$1;
(statearr_39089_39144[(1)] = (13));

} else {
var statearr_39090_39145 = state_39028__$1;
(statearr_39090_39145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (18))){
var inst_38960 = (state_39028[(12)]);
var inst_38961 = (state_39028[(14)]);
var inst_38960__$1 = (state_39028[(2)]);
var inst_38961__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_38960__$1);
var inst_38962 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38961__$1);
var state_39028__$1 = (function (){var statearr_39091 = state_39028;
(statearr_39091[(12)] = inst_38960__$1);

(statearr_39091[(14)] = inst_38961__$1);

return statearr_39091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39028__$1,(19),inst_38962);
} else {
if((state_val_39029 === (37))){
var inst_39023 = (state_39028[(2)]);
var state_39028__$1 = state_39028;
var statearr_39092_39146 = state_39028__$1;
(statearr_39092_39146[(2)] = inst_39023);

(statearr_39092_39146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39029 === (8))){
var inst_38915 = (state_39028[(8)]);
var inst_38928 = (state_39028[(26)]);
var inst_38928__$1 = cljs.core.seq.call(null,inst_38915);
var state_39028__$1 = (function (){var statearr_39093 = state_39028;
(statearr_39093[(26)] = inst_38928__$1);

return statearr_39093;
})();
if(inst_38928__$1){
var statearr_39094_39147 = state_39028__$1;
(statearr_39094_39147[(1)] = (10));

} else {
var statearr_39095_39148 = state_39028__$1;
(statearr_39095_39148[(1)] = (11));

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
});})(c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
;
return ((function (switch__25402__auto__,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39099[(0)] = state_machine__25403__auto__);

(statearr_39099[(1)] = (1));

return statearr_39099;
});
var state_machine__25403__auto____1 = (function (state_39028){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39100){if((e39100 instanceof Object)){
var ex__25406__auto__ = e39100;
var statearr_39101_39149 = state_39028;
(statearr_39101_39149[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39150 = state_39028;
state_39028 = G__39150;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39028){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
})();
var state__25460__auto__ = (function (){var statearr_39102 = f__25459__auto__.call(null);
(statearr_39102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_39102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__,map__38903,map__38903__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__38904,map__38904__$1,msg,files))
);

return c__25458__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__39153,link){
var map__39155 = p__39153;
var map__39155__$1 = ((cljs.core.seq_QMARK_.call(null,map__39155))?cljs.core.apply.call(null,cljs.core.hash_map,map__39155):map__39155);
var file = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4406__auto__ = link.href;
if(cljs.core.truth_(temp__4406__auto__)){
var link_href = temp__4406__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4406__auto__,map__39155,map__39155__$1,file){
return (function (p1__39151_SHARP_,p2__39152_SHARP_){
if(cljs.core._EQ_.call(null,p1__39151_SHARP_,p2__39152_SHARP_)){
return p1__39151_SHARP_;
} else {
return false;
}
});})(link_href,temp__4406__auto__,map__39155,map__39155__$1,file))
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
var temp__4406__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39159){
var map__39160 = p__39159;
var map__39160__$1 = ((cljs.core.seq_QMARK_.call(null,map__39160))?cljs.core.apply.call(null,cljs.core.hash_map,map__39160):map__39160);
var current_url_length = cljs.core.get.call(null,map__39160__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__39160__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39156_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39156_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__39161){
var map__39163 = p__39161;
var map__39163__$1 = ((cljs.core.seq_QMARK_.call(null,map__39163))?cljs.core.apply.call(null,cljs.core.hash_map,map__39163):map__39163);
var f_data = map__39163__$1;
var request_url = cljs.core.get.call(null,map__39163__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__39163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4404__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4404__auto__)){
var link = temp__4404__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__10941__auto__ = request_url;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__39164,files_msg){
var map__39186 = p__39164;
var map__39186__$1 = ((cljs.core.seq_QMARK_.call(null,map__39186))?cljs.core.apply.call(null,cljs.core.hash_map,map__39186):map__39186);
var opts = map__39186__$1;
var on_cssload = cljs.core.get.call(null,map__39186__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39187_39207 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39188_39208 = null;
var count__39189_39209 = (0);
var i__39190_39210 = (0);
while(true){
if((i__39190_39210 < count__39189_39209)){
var f_39211 = cljs.core._nth.call(null,chunk__39188_39208,i__39190_39210);
figwheel.client.file_reloading.reload_css_file.call(null,f_39211);

var G__39212 = seq__39187_39207;
var G__39213 = chunk__39188_39208;
var G__39214 = count__39189_39209;
var G__39215 = (i__39190_39210 + (1));
seq__39187_39207 = G__39212;
chunk__39188_39208 = G__39213;
count__39189_39209 = G__39214;
i__39190_39210 = G__39215;
continue;
} else {
var temp__4406__auto___39216 = cljs.core.seq.call(null,seq__39187_39207);
if(temp__4406__auto___39216){
var seq__39187_39217__$1 = temp__4406__auto___39216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39187_39217__$1)){
var c__11728__auto___39218 = cljs.core.chunk_first.call(null,seq__39187_39217__$1);
var G__39219 = cljs.core.chunk_rest.call(null,seq__39187_39217__$1);
var G__39220 = c__11728__auto___39218;
var G__39221 = cljs.core.count.call(null,c__11728__auto___39218);
var G__39222 = (0);
seq__39187_39207 = G__39219;
chunk__39188_39208 = G__39220;
count__39189_39209 = G__39221;
i__39190_39210 = G__39222;
continue;
} else {
var f_39223 = cljs.core.first.call(null,seq__39187_39217__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39223);

var G__39224 = cljs.core.next.call(null,seq__39187_39217__$1);
var G__39225 = null;
var G__39226 = (0);
var G__39227 = (0);
seq__39187_39207 = G__39224;
chunk__39188_39208 = G__39225;
count__39189_39209 = G__39226;
i__39190_39210 = G__39227;
continue;
}
} else {
}
}
break;
}

var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__,map__39186,map__39186__$1,opts,on_cssload){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__,map__39186,map__39186__$1,opts,on_cssload){
return (function (state_39197){
var state_val_39198 = (state_39197[(1)]);
if((state_val_39198 === (2))){
var inst_39193 = (state_39197[(2)]);
var inst_39194 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_39195 = on_cssload.call(null,inst_39194);
var state_39197__$1 = (function (){var statearr_39199 = state_39197;
(statearr_39199[(7)] = inst_39193);

return statearr_39199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39197__$1,inst_39195);
} else {
if((state_val_39198 === (1))){
var inst_39191 = cljs.core.async.timeout.call(null,(100));
var state_39197__$1 = state_39197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39197__$1,(2),inst_39191);
} else {
return null;
}
}
});})(c__25458__auto__,map__39186,map__39186__$1,opts,on_cssload))
;
return ((function (switch__25402__auto__,c__25458__auto__,map__39186,map__39186__$1,opts,on_cssload){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39203 = [null,null,null,null,null,null,null,null];
(statearr_39203[(0)] = state_machine__25403__auto__);

(statearr_39203[(1)] = (1));

return statearr_39203;
});
var state_machine__25403__auto____1 = (function (state_39197){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39204){if((e39204 instanceof Object)){
var ex__25406__auto__ = e39204;
var statearr_39205_39228 = state_39197;
(statearr_39205_39228[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39229 = state_39197;
state_39197 = G__39229;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39197){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__,map__39186,map__39186__$1,opts,on_cssload))
})();
var state__25460__auto__ = (function (){var statearr_39206 = f__25459__auto__.call(null);
(statearr_39206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_39206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__,map__39186,map__39186__$1,opts,on_cssload))
);

return c__25458__auto__;
} else {
return null;
}
});
