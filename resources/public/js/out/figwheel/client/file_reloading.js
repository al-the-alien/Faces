// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31575_SHARP_,p2__31576_SHARP_){
var and__16615__auto__ = p1__31575_SHARP_;
if(cljs.core.truth_(and__16615__auto__)){
return p2__31576_SHARP_;
} else {
return and__16615__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16627__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16627__auto__){
return or__16627__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
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
if(cljs.core.truth_((function (){var or__16627__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16627__auto__){
return or__16627__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16627__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
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
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17526__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17526__auto__,method_table__17522__auto__,prefer_table__17523__auto__,method_cache__17524__auto__,cached_hierarchy__17525__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31577){
var map__31578 = p__31577;
var map__31578__$1 = ((cljs.core.seq_QMARK_.call(null,map__31578))?cljs.core.apply.call(null,cljs.core.hash_map,map__31578):map__31578);
var file = cljs.core.get.call(null,map__31578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31579){
var map__31580 = p__31579;
var map__31580__$1 = ((cljs.core.seq_QMARK_.call(null,map__31580))?cljs.core.apply.call(null,cljs.core.hash_map,map__31580):map__31580);
var namespace = cljs.core.get.call(null,map__31580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17526__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17526__auto__,method_table__17522__auto__,prefer_table__17523__auto__,method_cache__17524__auto__,cached_hierarchy__17525__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31581){if((e31581 instanceof Error)){
var e = e31581;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31581;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__31583 = arguments.length;
switch (G__31583) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31585,callback){
var map__31587 = p__31585;
var map__31587__$1 = ((cljs.core.seq_QMARK_.call(null,map__31587))?cljs.core.apply.call(null,cljs.core.hash_map,map__31587):map__31587);
var file_msg = map__31587__$1;
var request_url = cljs.core.get.call(null,map__31587__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31587,map__31587__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31587,map__31587__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31588){
var map__31590 = p__31588;
var map__31590__$1 = ((cljs.core.seq_QMARK_.call(null,map__31590))?cljs.core.apply.call(null,cljs.core.hash_map,map__31590):map__31590);
var file_msg = map__31590__$1;
var namespace = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__31590__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16627__auto__ = meta_data;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16615__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16615__auto__){
var or__16627__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16627__auto____$1)){
return or__16627__auto____$1;
} else {
var and__16615__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16615__auto____$1){
var or__16627__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16627__auto____$2){
return or__16627__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16615__auto____$1;
}
}
}
} else {
return and__16615__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31591,callback){
var map__31593 = p__31591;
var map__31593__$1 = ((cljs.core.seq_QMARK_.call(null,map__31593))?cljs.core.apply.call(null,cljs.core.hash_map,map__31593):map__31593);
var file_msg = map__31593__$1;
var request_url = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
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
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24334__auto___31680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___31680,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___31680,out){
return (function (state_31662){
var state_val_31663 = (state_31662[(1)]);
if((state_val_31663 === (1))){
var inst_31640 = cljs.core.nth.call(null,files,(0),null);
var inst_31641 = cljs.core.nthnext.call(null,files,(1));
var inst_31642 = files;
var state_31662__$1 = (function (){var statearr_31664 = state_31662;
(statearr_31664[(7)] = inst_31641);

(statearr_31664[(8)] = inst_31642);

(statearr_31664[(9)] = inst_31640);

return statearr_31664;
})();
var statearr_31665_31681 = state_31662__$1;
(statearr_31665_31681[(2)] = null);

(statearr_31665_31681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (2))){
var inst_31645 = (state_31662[(10)]);
var inst_31642 = (state_31662[(8)]);
var inst_31645__$1 = cljs.core.nth.call(null,inst_31642,(0),null);
var inst_31646 = cljs.core.nthnext.call(null,inst_31642,(1));
var inst_31647 = (inst_31645__$1 == null);
var inst_31648 = cljs.core.not.call(null,inst_31647);
var state_31662__$1 = (function (){var statearr_31666 = state_31662;
(statearr_31666[(10)] = inst_31645__$1);

(statearr_31666[(11)] = inst_31646);

return statearr_31666;
})();
if(inst_31648){
var statearr_31667_31682 = state_31662__$1;
(statearr_31667_31682[(1)] = (4));

} else {
var statearr_31668_31683 = state_31662__$1;
(statearr_31668_31683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (3))){
var inst_31660 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31662__$1,inst_31660);
} else {
if((state_val_31663 === (4))){
var inst_31645 = (state_31662[(10)]);
var inst_31650 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31645);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31662__$1,(7),inst_31650);
} else {
if((state_val_31663 === (5))){
var inst_31656 = cljs.core.async.close_BANG_.call(null,out);
var state_31662__$1 = state_31662;
var statearr_31669_31684 = state_31662__$1;
(statearr_31669_31684[(2)] = inst_31656);

(statearr_31669_31684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (6))){
var inst_31658 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31670_31685 = state_31662__$1;
(statearr_31670_31685[(2)] = inst_31658);

(statearr_31670_31685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (7))){
var inst_31646 = (state_31662[(11)]);
var inst_31652 = (state_31662[(2)]);
var inst_31653 = cljs.core.async.put_BANG_.call(null,out,inst_31652);
var inst_31642 = inst_31646;
var state_31662__$1 = (function (){var statearr_31671 = state_31662;
(statearr_31671[(8)] = inst_31642);

(statearr_31671[(12)] = inst_31653);

return statearr_31671;
})();
var statearr_31672_31686 = state_31662__$1;
(statearr_31672_31686[(2)] = null);

(statearr_31672_31686[(1)] = (2));


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
});})(c__24334__auto___31680,out))
;
return ((function (switch__24272__auto__,c__24334__auto___31680,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto____0 = (function (){
var statearr_31676 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31676[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto__);

(statearr_31676[(1)] = (1));

return statearr_31676;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto____1 = (function (state_31662){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_31662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object)){
var ex__24276__auto__ = e31677;
var statearr_31678_31687 = state_31662;
(statearr_31678_31687[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31688 = state_31662;
state_31662 = G__31688;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto__ = function(state_31662){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto____1.call(this,state_31662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___31680,out))
})();
var state__24336__auto__ = (function (){var statearr_31679 = f__24335__auto__.call(null);
(statearr_31679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___31680);

return statearr_31679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___31680,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31689,p__31690){
var map__31693 = p__31689;
var map__31693__$1 = ((cljs.core.seq_QMARK_.call(null,map__31693))?cljs.core.apply.call(null,cljs.core.hash_map,map__31693):map__31693);
var opts = map__31693__$1;
var url_rewriter = cljs.core.get.call(null,map__31693__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31694 = p__31690;
var map__31694__$1 = ((cljs.core.seq_QMARK_.call(null,map__31694))?cljs.core.apply.call(null,cljs.core.hash_map,map__31694):map__31694);
var file_msg = map__31694__$1;
var file = cljs.core.get.call(null,map__31694__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31695,opts){
var map__31698 = p__31695;
var map__31698__$1 = ((cljs.core.seq_QMARK_.call(null,map__31698))?cljs.core.apply.call(null,cljs.core.hash_map,map__31698):map__31698);
var eval_body__$1 = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16615__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16615__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16615__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31699){var e = e31699;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31704,p__31705){
var map__31907 = p__31704;
var map__31907__$1 = ((cljs.core.seq_QMARK_.call(null,map__31907))?cljs.core.apply.call(null,cljs.core.hash_map,map__31907):map__31907);
var opts = map__31907__$1;
var before_jsload = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__31907__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__31908 = p__31705;
var map__31908__$1 = ((cljs.core.seq_QMARK_.call(null,map__31908))?cljs.core.apply.call(null,cljs.core.hash_map,map__31908):map__31908);
var msg = map__31908__$1;
var files = cljs.core.get.call(null,map__31908__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (state_32033){
var state_val_32034 = (state_32033[(1)]);
if((state_val_32034 === (7))){
var inst_31923 = (state_32033[(7)]);
var inst_31921 = (state_32033[(8)]);
var inst_31922 = (state_32033[(9)]);
var inst_31920 = (state_32033[(10)]);
var inst_31928 = cljs.core._nth.call(null,inst_31921,inst_31923);
var inst_31929 = figwheel.client.file_reloading.eval_body.call(null,inst_31928,opts);
var inst_31930 = (inst_31923 + (1));
var tmp32035 = inst_31921;
var tmp32036 = inst_31922;
var tmp32037 = inst_31920;
var inst_31920__$1 = tmp32037;
var inst_31921__$1 = tmp32035;
var inst_31922__$1 = tmp32036;
var inst_31923__$1 = inst_31930;
var state_32033__$1 = (function (){var statearr_32038 = state_32033;
(statearr_32038[(7)] = inst_31923__$1);

(statearr_32038[(11)] = inst_31929);

(statearr_32038[(8)] = inst_31921__$1);

(statearr_32038[(9)] = inst_31922__$1);

(statearr_32038[(10)] = inst_31920__$1);

return statearr_32038;
})();
var statearr_32039_32108 = state_32033__$1;
(statearr_32039_32108[(2)] = null);

(statearr_32039_32108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (20))){
var inst_31966 = (state_32033[(12)]);
var inst_31969 = (state_32033[(13)]);
var inst_31965 = (state_32033[(14)]);
var inst_31970 = (state_32033[(15)]);
var inst_31972 = (state_32033[(16)]);
var inst_31975 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31977 = (function (){var all_files = inst_31965;
var files_SINGLEQUOTE_ = inst_31966;
var res_SINGLEQUOTE_ = inst_31969;
var res = inst_31970;
var files_not_loaded = inst_31972;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31966,inst_31969,inst_31965,inst_31970,inst_31972,inst_31975,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (p__31976){
var map__32040 = p__31976;
var map__32040__$1 = ((cljs.core.seq_QMARK_.call(null,map__32040))?cljs.core.apply.call(null,cljs.core.hash_map,map__32040):map__32040);
var namespace = cljs.core.get.call(null,map__32040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32040__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31966,inst_31969,inst_31965,inst_31970,inst_31972,inst_31975,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31978 = cljs.core.map.call(null,inst_31977,inst_31970);
var inst_31979 = cljs.core.pr_str.call(null,inst_31978);
var inst_31980 = figwheel.client.utils.log.call(null,inst_31979);
var inst_31981 = (function (){var all_files = inst_31965;
var files_SINGLEQUOTE_ = inst_31966;
var res_SINGLEQUOTE_ = inst_31969;
var res = inst_31970;
var files_not_loaded = inst_31972;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31966,inst_31969,inst_31965,inst_31970,inst_31972,inst_31975,inst_31977,inst_31978,inst_31979,inst_31980,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31966,inst_31969,inst_31965,inst_31970,inst_31972,inst_31975,inst_31977,inst_31978,inst_31979,inst_31980,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31982 = setTimeout(inst_31981,(10));
var state_32033__$1 = (function (){var statearr_32041 = state_32033;
(statearr_32041[(17)] = inst_31975);

(statearr_32041[(18)] = inst_31980);

return statearr_32041;
})();
var statearr_32042_32109 = state_32033__$1;
(statearr_32042_32109[(2)] = inst_31982);

(statearr_32042_32109[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (27))){
var inst_31992 = (state_32033[(19)]);
var state_32033__$1 = state_32033;
var statearr_32043_32110 = state_32033__$1;
(statearr_32043_32110[(2)] = inst_31992);

(statearr_32043_32110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (1))){
var inst_31912 = (state_32033[(20)]);
var inst_31909 = before_jsload.call(null,files);
var inst_31910 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31911 = (function (){return ((function (inst_31912,inst_31909,inst_31910,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (p1__31700_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31700_SHARP_);
});
;})(inst_31912,inst_31909,inst_31910,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31912__$1 = cljs.core.filter.call(null,inst_31911,files);
var inst_31913 = cljs.core.not_empty.call(null,inst_31912__$1);
var state_32033__$1 = (function (){var statearr_32044 = state_32033;
(statearr_32044[(21)] = inst_31910);

(statearr_32044[(20)] = inst_31912__$1);

(statearr_32044[(22)] = inst_31909);

return statearr_32044;
})();
if(cljs.core.truth_(inst_31913)){
var statearr_32045_32111 = state_32033__$1;
(statearr_32045_32111[(1)] = (2));

} else {
var statearr_32046_32112 = state_32033__$1;
(statearr_32046_32112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (24))){
var state_32033__$1 = state_32033;
var statearr_32047_32113 = state_32033__$1;
(statearr_32047_32113[(2)] = null);

(statearr_32047_32113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (4))){
var inst_31957 = (state_32033[(2)]);
var inst_31958 = (function (){return ((function (inst_31957,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (p1__31701_SHARP_){
var and__16615__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31701_SHARP_);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31701_SHARP_));
} else {
return and__16615__auto__;
}
});
;})(inst_31957,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31959 = cljs.core.filter.call(null,inst_31958,files);
var state_32033__$1 = (function (){var statearr_32048 = state_32033;
(statearr_32048[(23)] = inst_31957);

(statearr_32048[(24)] = inst_31959);

return statearr_32048;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32049_32114 = state_32033__$1;
(statearr_32049_32114[(1)] = (16));

} else {
var statearr_32050_32115 = state_32033__$1;
(statearr_32050_32115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (15))){
var inst_31947 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32051_32116 = state_32033__$1;
(statearr_32051_32116[(2)] = inst_31947);

(statearr_32051_32116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (21))){
var state_32033__$1 = state_32033;
var statearr_32052_32117 = state_32033__$1;
(statearr_32052_32117[(2)] = null);

(statearr_32052_32117[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (31))){
var inst_32000 = (state_32033[(25)]);
var inst_32010 = (state_32033[(2)]);
var inst_32011 = cljs.core.not_empty.call(null,inst_32000);
var state_32033__$1 = (function (){var statearr_32053 = state_32033;
(statearr_32053[(26)] = inst_32010);

return statearr_32053;
})();
if(cljs.core.truth_(inst_32011)){
var statearr_32054_32118 = state_32033__$1;
(statearr_32054_32118[(1)] = (32));

} else {
var statearr_32055_32119 = state_32033__$1;
(statearr_32055_32119[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (32))){
var inst_32000 = (state_32033[(25)]);
var inst_32013 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32000);
var inst_32014 = cljs.core.pr_str.call(null,inst_32013);
var inst_32015 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32014)].join('');
var inst_32016 = figwheel.client.utils.log.call(null,inst_32015);
var state_32033__$1 = state_32033;
var statearr_32056_32120 = state_32033__$1;
(statearr_32056_32120[(2)] = inst_32016);

(statearr_32056_32120[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (33))){
var state_32033__$1 = state_32033;
var statearr_32057_32121 = state_32033__$1;
(statearr_32057_32121[(2)] = null);

(statearr_32057_32121[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (13))){
var inst_31933 = (state_32033[(27)]);
var inst_31937 = cljs.core.chunk_first.call(null,inst_31933);
var inst_31938 = cljs.core.chunk_rest.call(null,inst_31933);
var inst_31939 = cljs.core.count.call(null,inst_31937);
var inst_31920 = inst_31938;
var inst_31921 = inst_31937;
var inst_31922 = inst_31939;
var inst_31923 = (0);
var state_32033__$1 = (function (){var statearr_32058 = state_32033;
(statearr_32058[(7)] = inst_31923);

(statearr_32058[(8)] = inst_31921);

(statearr_32058[(9)] = inst_31922);

(statearr_32058[(10)] = inst_31920);

return statearr_32058;
})();
var statearr_32059_32122 = state_32033__$1;
(statearr_32059_32122[(2)] = null);

(statearr_32059_32122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (22))){
var inst_31972 = (state_32033[(16)]);
var inst_31985 = (state_32033[(2)]);
var inst_31986 = cljs.core.not_empty.call(null,inst_31972);
var state_32033__$1 = (function (){var statearr_32060 = state_32033;
(statearr_32060[(28)] = inst_31985);

return statearr_32060;
})();
if(cljs.core.truth_(inst_31986)){
var statearr_32061_32123 = state_32033__$1;
(statearr_32061_32123[(1)] = (23));

} else {
var statearr_32062_32124 = state_32033__$1;
(statearr_32062_32124[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (36))){
var state_32033__$1 = state_32033;
var statearr_32063_32125 = state_32033__$1;
(statearr_32063_32125[(2)] = null);

(statearr_32063_32125[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (29))){
var inst_31999 = (state_32033[(29)]);
var inst_32004 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31999);
var inst_32005 = cljs.core.pr_str.call(null,inst_32004);
var inst_32006 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32005)].join('');
var inst_32007 = figwheel.client.utils.log.call(null,inst_32006);
var state_32033__$1 = state_32033;
var statearr_32064_32126 = state_32033__$1;
(statearr_32064_32126[(2)] = inst_32007);

(statearr_32064_32126[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (6))){
var inst_31954 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32065_32127 = state_32033__$1;
(statearr_32065_32127[(2)] = inst_31954);

(statearr_32065_32127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (28))){
var inst_31999 = (state_32033[(29)]);
var inst_31998 = (state_32033[(2)]);
var inst_31999__$1 = cljs.core.get.call(null,inst_31998,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32000 = cljs.core.get.call(null,inst_31998,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32001 = cljs.core.get.call(null,inst_31998,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32002 = cljs.core.not_empty.call(null,inst_31999__$1);
var state_32033__$1 = (function (){var statearr_32066 = state_32033;
(statearr_32066[(25)] = inst_32000);

(statearr_32066[(29)] = inst_31999__$1);

(statearr_32066[(30)] = inst_32001);

return statearr_32066;
})();
if(cljs.core.truth_(inst_32002)){
var statearr_32067_32128 = state_32033__$1;
(statearr_32067_32128[(1)] = (29));

} else {
var statearr_32068_32129 = state_32033__$1;
(statearr_32068_32129[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (25))){
var inst_32031 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32033__$1,inst_32031);
} else {
if((state_val_32034 === (34))){
var inst_32001 = (state_32033[(30)]);
var inst_32019 = (state_32033[(2)]);
var inst_32020 = cljs.core.not_empty.call(null,inst_32001);
var state_32033__$1 = (function (){var statearr_32069 = state_32033;
(statearr_32069[(31)] = inst_32019);

return statearr_32069;
})();
if(cljs.core.truth_(inst_32020)){
var statearr_32070_32130 = state_32033__$1;
(statearr_32070_32130[(1)] = (35));

} else {
var statearr_32071_32131 = state_32033__$1;
(statearr_32071_32131[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (17))){
var inst_31959 = (state_32033[(24)]);
var state_32033__$1 = state_32033;
var statearr_32072_32132 = state_32033__$1;
(statearr_32072_32132[(2)] = inst_31959);

(statearr_32072_32132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (3))){
var state_32033__$1 = state_32033;
var statearr_32073_32133 = state_32033__$1;
(statearr_32073_32133[(2)] = null);

(statearr_32073_32133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (12))){
var inst_31950 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32074_32134 = state_32033__$1;
(statearr_32074_32134[(2)] = inst_31950);

(statearr_32074_32134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (2))){
var inst_31912 = (state_32033[(20)]);
var inst_31919 = cljs.core.seq.call(null,inst_31912);
var inst_31920 = inst_31919;
var inst_31921 = null;
var inst_31922 = (0);
var inst_31923 = (0);
var state_32033__$1 = (function (){var statearr_32075 = state_32033;
(statearr_32075[(7)] = inst_31923);

(statearr_32075[(8)] = inst_31921);

(statearr_32075[(9)] = inst_31922);

(statearr_32075[(10)] = inst_31920);

return statearr_32075;
})();
var statearr_32076_32135 = state_32033__$1;
(statearr_32076_32135[(2)] = null);

(statearr_32076_32135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (23))){
var inst_31966 = (state_32033[(12)]);
var inst_31969 = (state_32033[(13)]);
var inst_31965 = (state_32033[(14)]);
var inst_31992 = (state_32033[(19)]);
var inst_31970 = (state_32033[(15)]);
var inst_31972 = (state_32033[(16)]);
var inst_31988 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31991 = (function (){var all_files = inst_31965;
var files_SINGLEQUOTE_ = inst_31966;
var res_SINGLEQUOTE_ = inst_31969;
var res = inst_31970;
var files_not_loaded = inst_31972;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31966,inst_31969,inst_31965,inst_31992,inst_31970,inst_31972,inst_31988,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (p__31990){
var map__32077 = p__31990;
var map__32077__$1 = ((cljs.core.seq_QMARK_.call(null,map__32077))?cljs.core.apply.call(null,cljs.core.hash_map,map__32077):map__32077);
var meta_data = cljs.core.get.call(null,map__32077__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31966,inst_31969,inst_31965,inst_31992,inst_31970,inst_31972,inst_31988,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31992__$1 = cljs.core.group_by.call(null,inst_31991,inst_31972);
var inst_31993 = cljs.core.seq_QMARK_.call(null,inst_31992__$1);
var state_32033__$1 = (function (){var statearr_32078 = state_32033;
(statearr_32078[(32)] = inst_31988);

(statearr_32078[(19)] = inst_31992__$1);

return statearr_32078;
})();
if(inst_31993){
var statearr_32079_32136 = state_32033__$1;
(statearr_32079_32136[(1)] = (26));

} else {
var statearr_32080_32137 = state_32033__$1;
(statearr_32080_32137[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (35))){
var inst_32001 = (state_32033[(30)]);
var inst_32022 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32001);
var inst_32023 = cljs.core.pr_str.call(null,inst_32022);
var inst_32024 = [cljs.core.str("not required: "),cljs.core.str(inst_32023)].join('');
var inst_32025 = figwheel.client.utils.log.call(null,inst_32024);
var state_32033__$1 = state_32033;
var statearr_32081_32138 = state_32033__$1;
(statearr_32081_32138[(2)] = inst_32025);

(statearr_32081_32138[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (19))){
var inst_31966 = (state_32033[(12)]);
var inst_31969 = (state_32033[(13)]);
var inst_31965 = (state_32033[(14)]);
var inst_31970 = (state_32033[(15)]);
var inst_31969__$1 = (state_32033[(2)]);
var inst_31970__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31969__$1);
var inst_31971 = (function (){var all_files = inst_31965;
var files_SINGLEQUOTE_ = inst_31966;
var res_SINGLEQUOTE_ = inst_31969__$1;
var res = inst_31970__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_31966,inst_31969,inst_31965,inst_31970,inst_31969__$1,inst_31970__$1,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (p1__31703_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31703_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_31966,inst_31969,inst_31965,inst_31970,inst_31969__$1,inst_31970__$1,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31972 = cljs.core.filter.call(null,inst_31971,inst_31969__$1);
var inst_31973 = cljs.core.not_empty.call(null,inst_31970__$1);
var state_32033__$1 = (function (){var statearr_32082 = state_32033;
(statearr_32082[(13)] = inst_31969__$1);

(statearr_32082[(15)] = inst_31970__$1);

(statearr_32082[(16)] = inst_31972);

return statearr_32082;
})();
if(cljs.core.truth_(inst_31973)){
var statearr_32083_32139 = state_32033__$1;
(statearr_32083_32139[(1)] = (20));

} else {
var statearr_32084_32140 = state_32033__$1;
(statearr_32084_32140[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (11))){
var state_32033__$1 = state_32033;
var statearr_32085_32141 = state_32033__$1;
(statearr_32085_32141[(2)] = null);

(statearr_32085_32141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (9))){
var inst_31952 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32086_32142 = state_32033__$1;
(statearr_32086_32142[(2)] = inst_31952);

(statearr_32086_32142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (5))){
var inst_31923 = (state_32033[(7)]);
var inst_31922 = (state_32033[(9)]);
var inst_31925 = (inst_31923 < inst_31922);
var inst_31926 = inst_31925;
var state_32033__$1 = state_32033;
if(cljs.core.truth_(inst_31926)){
var statearr_32087_32143 = state_32033__$1;
(statearr_32087_32143[(1)] = (7));

} else {
var statearr_32088_32144 = state_32033__$1;
(statearr_32088_32144[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (14))){
var inst_31933 = (state_32033[(27)]);
var inst_31942 = cljs.core.first.call(null,inst_31933);
var inst_31943 = figwheel.client.file_reloading.eval_body.call(null,inst_31942,opts);
var inst_31944 = cljs.core.next.call(null,inst_31933);
var inst_31920 = inst_31944;
var inst_31921 = null;
var inst_31922 = (0);
var inst_31923 = (0);
var state_32033__$1 = (function (){var statearr_32089 = state_32033;
(statearr_32089[(7)] = inst_31923);

(statearr_32089[(8)] = inst_31921);

(statearr_32089[(33)] = inst_31943);

(statearr_32089[(9)] = inst_31922);

(statearr_32089[(10)] = inst_31920);

return statearr_32089;
})();
var statearr_32090_32145 = state_32033__$1;
(statearr_32090_32145[(2)] = null);

(statearr_32090_32145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (26))){
var inst_31992 = (state_32033[(19)]);
var inst_31995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31992);
var state_32033__$1 = state_32033;
var statearr_32091_32146 = state_32033__$1;
(statearr_32091_32146[(2)] = inst_31995);

(statearr_32091_32146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (16))){
var inst_31959 = (state_32033[(24)]);
var inst_31961 = (function (){var all_files = inst_31959;
return ((function (all_files,inst_31959,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function (p1__31702_SHARP_){
return cljs.core.update_in.call(null,p1__31702_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31959,state_val_32034,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var inst_31962 = cljs.core.map.call(null,inst_31961,inst_31959);
var state_32033__$1 = state_32033;
var statearr_32092_32147 = state_32033__$1;
(statearr_32092_32147[(2)] = inst_31962);

(statearr_32092_32147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (30))){
var state_32033__$1 = state_32033;
var statearr_32093_32148 = state_32033__$1;
(statearr_32093_32148[(2)] = null);

(statearr_32093_32148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (10))){
var inst_31933 = (state_32033[(27)]);
var inst_31935 = cljs.core.chunked_seq_QMARK_.call(null,inst_31933);
var state_32033__$1 = state_32033;
if(inst_31935){
var statearr_32094_32149 = state_32033__$1;
(statearr_32094_32149[(1)] = (13));

} else {
var statearr_32095_32150 = state_32033__$1;
(statearr_32095_32150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (18))){
var inst_31966 = (state_32033[(12)]);
var inst_31965 = (state_32033[(14)]);
var inst_31965__$1 = (state_32033[(2)]);
var inst_31966__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31965__$1);
var inst_31967 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31966__$1);
var state_32033__$1 = (function (){var statearr_32096 = state_32033;
(statearr_32096[(12)] = inst_31966__$1);

(statearr_32096[(14)] = inst_31965__$1);

return statearr_32096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32033__$1,(19),inst_31967);
} else {
if((state_val_32034 === (37))){
var inst_32028 = (state_32033[(2)]);
var state_32033__$1 = state_32033;
var statearr_32097_32151 = state_32033__$1;
(statearr_32097_32151[(2)] = inst_32028);

(statearr_32097_32151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32034 === (8))){
var inst_31933 = (state_32033[(27)]);
var inst_31920 = (state_32033[(10)]);
var inst_31933__$1 = cljs.core.seq.call(null,inst_31920);
var state_32033__$1 = (function (){var statearr_32098 = state_32033;
(statearr_32098[(27)] = inst_31933__$1);

return statearr_32098;
})();
if(inst_31933__$1){
var statearr_32099_32152 = state_32033__$1;
(statearr_32099_32152[(1)] = (10));

} else {
var statearr_32100_32153 = state_32033__$1;
(statearr_32100_32153[(1)] = (11));

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
});})(c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
;
return ((function (switch__24272__auto__,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto____0 = (function (){
var statearr_32104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32104[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto__);

(statearr_32104[(1)] = (1));

return statearr_32104;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto____1 = (function (state_32033){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32105){if((e32105 instanceof Object)){
var ex__24276__auto__ = e32105;
var statearr_32106_32154 = state_32033;
(statearr_32106_32154[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32155 = state_32033;
state_32033 = G__32155;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto__ = function(state_32033){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto____1.call(this,state_32033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
})();
var state__24336__auto__ = (function (){var statearr_32107 = f__24335__auto__.call(null);
(statearr_32107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_32107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__,map__31907,map__31907__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31908,map__31908__$1,msg,files))
);

return c__24334__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32158,link){
var map__32160 = p__32158;
var map__32160__$1 = ((cljs.core.seq_QMARK_.call(null,map__32160))?cljs.core.apply.call(null,cljs.core.hash_map,map__32160):map__32160);
var file = cljs.core.get.call(null,map__32160__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32160,map__32160__$1,file){
return (function (p1__32156_SHARP_,p2__32157_SHARP_){
if(cljs.core._EQ_.call(null,p1__32156_SHARP_,p2__32157_SHARP_)){
return p1__32156_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32160,map__32160__$1,file))
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
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32164){
var map__32165 = p__32164;
var map__32165__$1 = ((cljs.core.seq_QMARK_.call(null,map__32165))?cljs.core.apply.call(null,cljs.core.hash_map,map__32165):map__32165);
var match_length = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32165__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32161_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32161_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__32167 = arguments.length;
switch (G__32167) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
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

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32169){
var map__32171 = p__32169;
var map__32171__$1 = ((cljs.core.seq_QMARK_.call(null,map__32171))?cljs.core.apply.call(null,cljs.core.hash_map,map__32171):map__32171);
var f_data = map__32171__$1;
var file = cljs.core.get.call(null,map__32171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__32171__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16627__auto__ = request_url;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32172,files_msg){
var map__32194 = p__32172;
var map__32194__$1 = ((cljs.core.seq_QMARK_.call(null,map__32194))?cljs.core.apply.call(null,cljs.core.hash_map,map__32194):map__32194);
var opts = map__32194__$1;
var on_cssload = cljs.core.get.call(null,map__32194__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32195_32215 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32196_32216 = null;
var count__32197_32217 = (0);
var i__32198_32218 = (0);
while(true){
if((i__32198_32218 < count__32197_32217)){
var f_32219 = cljs.core._nth.call(null,chunk__32196_32216,i__32198_32218);
figwheel.client.file_reloading.reload_css_file.call(null,f_32219);

var G__32220 = seq__32195_32215;
var G__32221 = chunk__32196_32216;
var G__32222 = count__32197_32217;
var G__32223 = (i__32198_32218 + (1));
seq__32195_32215 = G__32220;
chunk__32196_32216 = G__32221;
count__32197_32217 = G__32222;
i__32198_32218 = G__32223;
continue;
} else {
var temp__4425__auto___32224 = cljs.core.seq.call(null,seq__32195_32215);
if(temp__4425__auto___32224){
var seq__32195_32225__$1 = temp__4425__auto___32224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32195_32225__$1)){
var c__17412__auto___32226 = cljs.core.chunk_first.call(null,seq__32195_32225__$1);
var G__32227 = cljs.core.chunk_rest.call(null,seq__32195_32225__$1);
var G__32228 = c__17412__auto___32226;
var G__32229 = cljs.core.count.call(null,c__17412__auto___32226);
var G__32230 = (0);
seq__32195_32215 = G__32227;
chunk__32196_32216 = G__32228;
count__32197_32217 = G__32229;
i__32198_32218 = G__32230;
continue;
} else {
var f_32231 = cljs.core.first.call(null,seq__32195_32225__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32231);

var G__32232 = cljs.core.next.call(null,seq__32195_32225__$1);
var G__32233 = null;
var G__32234 = (0);
var G__32235 = (0);
seq__32195_32215 = G__32232;
chunk__32196_32216 = G__32233;
count__32197_32217 = G__32234;
i__32198_32218 = G__32235;
continue;
}
} else {
}
}
break;
}

var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__,map__32194,map__32194__$1,opts,on_cssload){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__,map__32194,map__32194__$1,opts,on_cssload){
return (function (state_32205){
var state_val_32206 = (state_32205[(1)]);
if((state_val_32206 === (1))){
var inst_32199 = cljs.core.async.timeout.call(null,(100));
var state_32205__$1 = state_32205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32205__$1,(2),inst_32199);
} else {
if((state_val_32206 === (2))){
var inst_32201 = (state_32205[(2)]);
var inst_32202 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32203 = on_cssload.call(null,inst_32202);
var state_32205__$1 = (function (){var statearr_32207 = state_32205;
(statearr_32207[(7)] = inst_32201);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32205__$1,inst_32203);
} else {
return null;
}
}
});})(c__24334__auto__,map__32194,map__32194__$1,opts,on_cssload))
;
return ((function (switch__24272__auto__,c__24334__auto__,map__32194,map__32194__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto____0 = (function (){
var statearr_32211 = [null,null,null,null,null,null,null,null];
(statearr_32211[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto__);

(statearr_32211[(1)] = (1));

return statearr_32211;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto____1 = (function (state_32205){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32212){if((e32212 instanceof Object)){
var ex__24276__auto__ = e32212;
var statearr_32213_32236 = state_32205;
(statearr_32213_32236[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32237 = state_32205;
state_32205 = G__32237;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto__ = function(state_32205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto____1.call(this,state_32205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__,map__32194,map__32194__$1,opts,on_cssload))
})();
var state__24336__auto__ = (function (){var statearr_32214 = f__24335__auto__.call(null);
(statearr_32214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_32214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__,map__32194,map__32194__$1,opts,on_cssload))
);

return c__24334__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map