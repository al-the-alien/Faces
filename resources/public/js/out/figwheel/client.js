// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32145__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32146__i = 0, G__32146__a = new Array(arguments.length -  0);
while (G__32146__i < G__32146__a.length) {G__32146__a[G__32146__i] = arguments[G__32146__i + 0]; ++G__32146__i;}
  args = new cljs.core.IndexedSeq(G__32146__a,0);
} 
return G__32145__delegate.call(this,args);};
G__32145.cljs$lang$maxFixedArity = 0;
G__32145.cljs$lang$applyTo = (function (arglist__32147){
var args = cljs.core.seq(arglist__32147);
return G__32145__delegate(args);
});
G__32145.cljs$core$IFn$_invoke$arity$variadic = G__32145__delegate;
return G__32145;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__32148){
var map__32150 = p__32148;
var map__32150__$1 = ((cljs.core.seq_QMARK_.call(null,map__32150))?cljs.core.apply.call(null,cljs.core.hash_map,map__32150):map__32150);
var class$ = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__32150__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__14444__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__14432__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__14432__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__14432__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20396__auto___32279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___32279,ch){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___32279,ch){
return (function (state_32253){
var state_val_32254 = (state_32253[(1)]);
if((state_val_32254 === (7))){
var inst_32249 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32255_32280 = state_32253__$1;
(statearr_32255_32280[(2)] = inst_32249);

(statearr_32255_32280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (1))){
var state_32253__$1 = state_32253;
var statearr_32256_32281 = state_32253__$1;
(statearr_32256_32281[(2)] = null);

(statearr_32256_32281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (4))){
var inst_32217 = (state_32253[(7)]);
var inst_32217__$1 = (state_32253[(2)]);
var state_32253__$1 = (function (){var statearr_32257 = state_32253;
(statearr_32257[(7)] = inst_32217__$1);

return statearr_32257;
})();
if(cljs.core.truth_(inst_32217__$1)){
var statearr_32258_32282 = state_32253__$1;
(statearr_32258_32282[(1)] = (5));

} else {
var statearr_32259_32283 = state_32253__$1;
(statearr_32259_32283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (13))){
var state_32253__$1 = state_32253;
var statearr_32260_32284 = state_32253__$1;
(statearr_32260_32284[(2)] = null);

(statearr_32260_32284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (6))){
var state_32253__$1 = state_32253;
var statearr_32261_32285 = state_32253__$1;
(statearr_32261_32285[(2)] = null);

(statearr_32261_32285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (3))){
var inst_32251 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32253__$1,inst_32251);
} else {
if((state_val_32254 === (12))){
var inst_32224 = (state_32253[(8)]);
var inst_32237 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32224);
var inst_32238 = cljs.core.first.call(null,inst_32237);
var inst_32239 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32238);
var inst_32240 = console.warn("Figwheel: Not loading code with warnings - ",inst_32239);
var state_32253__$1 = state_32253;
var statearr_32262_32286 = state_32253__$1;
(statearr_32262_32286[(2)] = inst_32240);

(statearr_32262_32286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (2))){
var state_32253__$1 = state_32253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32253__$1,(4),ch);
} else {
if((state_val_32254 === (11))){
var inst_32233 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32263_32287 = state_32253__$1;
(statearr_32263_32287[(2)] = inst_32233);

(statearr_32263_32287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (9))){
var inst_32223 = (state_32253[(9)]);
var inst_32235 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32223,opts);
var state_32253__$1 = state_32253;
if(inst_32235){
var statearr_32264_32288 = state_32253__$1;
(statearr_32264_32288[(1)] = (12));

} else {
var statearr_32265_32289 = state_32253__$1;
(statearr_32265_32289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (5))){
var inst_32217 = (state_32253[(7)]);
var inst_32223 = (state_32253[(9)]);
var inst_32219 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32220 = (new cljs.core.PersistentArrayMap(null,2,inst_32219,null));
var inst_32221 = (new cljs.core.PersistentHashSet(null,inst_32220,null));
var inst_32222 = figwheel.client.focus_msgs.call(null,inst_32221,inst_32217);
var inst_32223__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32222);
var inst_32224 = cljs.core.first.call(null,inst_32222);
var inst_32225 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32223__$1,opts);
var state_32253__$1 = (function (){var statearr_32266 = state_32253;
(statearr_32266[(8)] = inst_32224);

(statearr_32266[(9)] = inst_32223__$1);

return statearr_32266;
})();
if(cljs.core.truth_(inst_32225)){
var statearr_32267_32290 = state_32253__$1;
(statearr_32267_32290[(1)] = (8));

} else {
var statearr_32268_32291 = state_32253__$1;
(statearr_32268_32291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (14))){
var inst_32243 = (state_32253[(2)]);
var state_32253__$1 = state_32253;
var statearr_32269_32292 = state_32253__$1;
(statearr_32269_32292[(2)] = inst_32243);

(statearr_32269_32292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (10))){
var inst_32245 = (state_32253[(2)]);
var state_32253__$1 = (function (){var statearr_32270 = state_32253;
(statearr_32270[(10)] = inst_32245);

return statearr_32270;
})();
var statearr_32271_32293 = state_32253__$1;
(statearr_32271_32293[(2)] = null);

(statearr_32271_32293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (8))){
var inst_32224 = (state_32253[(8)]);
var inst_32227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32228 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32224);
var inst_32229 = cljs.core.async.timeout.call(null,(1000));
var inst_32230 = [inst_32228,inst_32229];
var inst_32231 = (new cljs.core.PersistentVector(null,2,(5),inst_32227,inst_32230,null));
var state_32253__$1 = state_32253;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32253__$1,(11),inst_32231);
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
});})(c__20396__auto___32279,ch))
;
return ((function (switch__20381__auto__,c__20396__auto___32279,ch){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = state_machine__20382__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var state_machine__20382__auto____1 = (function (state_32253){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32276){if((e32276 instanceof Object)){
var ex__20385__auto__ = e32276;
var statearr_32277_32294 = state_32253;
(statearr_32277_32294[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32295 = state_32253;
state_32253 = G__32295;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32253){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___32279,ch))
})();
var state__20398__auto__ = (function (){var statearr_32278 = f__20397__auto__.call(null);
(statearr_32278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___32279);

return statearr_32278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___32279,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__32296_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32296_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32301 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32302 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32301,_STAR_print_newline_STAR_32302){
return (function() { 
var G__32303__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32304__i = 0, G__32304__a = new Array(arguments.length -  0);
while (G__32304__i < G__32304__a.length) {G__32304__a[G__32304__i] = arguments[G__32304__i + 0]; ++G__32304__i;}
  args = new cljs.core.IndexedSeq(G__32304__a,0);
} 
return G__32303__delegate.call(this,args);};
G__32303.cljs$lang$maxFixedArity = 0;
G__32303.cljs$lang$applyTo = (function (arglist__32305){
var args = cljs.core.seq(arglist__32305);
return G__32303__delegate(args);
});
G__32303.cljs$core$IFn$_invoke$arity$variadic = G__32303__delegate;
return G__32303;
})()
;})(_STAR_print_fn_STAR_32301,_STAR_print_newline_STAR_32302))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32302;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32301;
}}catch (e32300){if((e32300 instanceof Error)){
var e = e32300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e32300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__32306){
var map__32311 = p__32306;
var map__32311__$1 = ((cljs.core.seq_QMARK_.call(null,map__32311))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);
var opts = map__32311__$1;
var build_id = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32311,map__32311__$1,opts,build_id){
return (function (p__32312){
var vec__32313 = p__32312;
var map__32314 = cljs.core.nth.call(null,vec__32313,(0),null);
var map__32314__$1 = ((cljs.core.seq_QMARK_.call(null,map__32314))?cljs.core.apply.call(null,cljs.core.hash_map,map__32314):map__32314);
var msg = map__32314__$1;
var msg_name = cljs.core.get.call(null,map__32314__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32313,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32313,map__32314,map__32314__$1,msg,msg_name,_,map__32311,map__32311__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32313,map__32314,map__32314__$1,msg,msg_name,_,map__32311,map__32311__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32311,map__32311__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__32318){
var vec__32319 = p__32318;
var map__32320 = cljs.core.nth.call(null,vec__32319,(0),null);
var map__32320__$1 = ((cljs.core.seq_QMARK_.call(null,map__32320))?cljs.core.apply.call(null,cljs.core.hash_map,map__32320):map__32320);
var msg = map__32320__$1;
var msg_name = cljs.core.get.call(null,map__32320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32319,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__32321){
var map__32329 = p__32321;
var map__32329__$1 = ((cljs.core.seq_QMARK_.call(null,map__32329))?cljs.core.apply.call(null,cljs.core.hash_map,map__32329):map__32329);
var on_compile_fail = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__32329,map__32329__$1,on_compile_fail,on_compile_warning){
return (function (p__32330){
var vec__32331 = p__32330;
var map__32332 = cljs.core.nth.call(null,vec__32331,(0),null);
var map__32332__$1 = ((cljs.core.seq_QMARK_.call(null,map__32332))?cljs.core.apply.call(null,cljs.core.hash_map,map__32332):map__32332);
var msg = map__32332__$1;
var msg_name = cljs.core.get.call(null,map__32332__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32331,(1));
var pred__32333 = cljs.core._EQ_;
var expr__32334 = msg_name;
if(cljs.core.truth_(pred__32333.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32334))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32333.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32334))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32329,map__32329__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__,msg_hist,msg_names,msg){
return (function (state_32511){
var state_val_32512 = (state_32511[(1)]);
if((state_val_32512 === (7))){
var inst_32460 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32511__$1 = state_32511;
if(inst_32460){
var statearr_32513_32550 = state_32511__$1;
(statearr_32513_32550[(1)] = (11));

} else {
var statearr_32514_32551 = state_32511__$1;
(statearr_32514_32551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (20))){
var inst_32501 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32515_32552 = state_32511__$1;
(statearr_32515_32552[(2)] = inst_32501);

(statearr_32515_32552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (27))){
var inst_32492 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(30),inst_32492);
} else {
if((state_val_32512 === (1))){
var inst_32443 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32511__$1 = state_32511;
if(cljs.core.truth_(inst_32443)){
var statearr_32516_32553 = state_32511__$1;
(statearr_32516_32553[(1)] = (2));

} else {
var statearr_32517_32554 = state_32511__$1;
(statearr_32517_32554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (24))){
var inst_32490 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32511__$1 = state_32511;
if(inst_32490){
var statearr_32518_32555 = state_32511__$1;
(statearr_32518_32555[(1)] = (27));

} else {
var statearr_32519_32556 = state_32511__$1;
(statearr_32519_32556[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (4))){
var inst_32509 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32511__$1,inst_32509);
} else {
if((state_val_32512 === (15))){
var inst_32470 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32471 = figwheel.client.heads_up.append_message.call(null,inst_32470);
var state_32511__$1 = state_32511;
var statearr_32520_32557 = state_32511__$1;
(statearr_32520_32557[(2)] = inst_32471);

(statearr_32520_32557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (21))){
var inst_32477 = (state_32511[(2)]);
var inst_32478 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32479 = figwheel.client.heads_up.display_warning.call(null,inst_32478);
var state_32511__$1 = (function (){var statearr_32521 = state_32511;
(statearr_32521[(7)] = inst_32477);

return statearr_32521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(22),inst_32479);
} else {
if((state_val_32512 === (13))){
var inst_32505 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32522_32558 = state_32511__$1;
(statearr_32522_32558[(2)] = inst_32505);

(statearr_32522_32558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (22))){
var inst_32481 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32523_32559 = state_32511__$1;
(statearr_32523_32559[(2)] = inst_32481);

(statearr_32523_32559[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (29))){
var inst_32497 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32524_32560 = state_32511__$1;
(statearr_32524_32560[(2)] = inst_32497);

(statearr_32524_32560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (6))){
var inst_32451 = figwheel.client.heads_up.clear.call(null);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(9),inst_32451);
} else {
if((state_val_32512 === (28))){
var state_32511__$1 = state_32511;
var statearr_32525_32561 = state_32511__$1;
(statearr_32525_32561[(2)] = null);

(statearr_32525_32561[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (25))){
var inst_32499 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32526_32562 = state_32511__$1;
(statearr_32526_32562[(2)] = inst_32499);

(statearr_32526_32562[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (17))){
var inst_32503 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32527_32563 = state_32511__$1;
(statearr_32527_32563[(2)] = inst_32503);

(statearr_32527_32563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (3))){
var inst_32449 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32511__$1 = state_32511;
if(inst_32449){
var statearr_32528_32564 = state_32511__$1;
(statearr_32528_32564[(1)] = (6));

} else {
var statearr_32529_32565 = state_32511__$1;
(statearr_32529_32565[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (12))){
var inst_32468 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32511__$1 = state_32511;
if(inst_32468){
var statearr_32530_32566 = state_32511__$1;
(statearr_32530_32566[(1)] = (15));

} else {
var statearr_32531_32567 = state_32511__$1;
(statearr_32531_32567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (2))){
var inst_32445 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(5),inst_32445);
} else {
if((state_val_32512 === (23))){
var inst_32485 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32486 = figwheel.client.heads_up.display_warning.call(null,inst_32485);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(26),inst_32486);
} else {
if((state_val_32512 === (19))){
var inst_32483 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32511__$1 = state_32511;
if(inst_32483){
var statearr_32532_32568 = state_32511__$1;
(statearr_32532_32568[(1)] = (23));

} else {
var statearr_32533_32569 = state_32511__$1;
(statearr_32533_32569[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (11))){
var inst_32462 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32463 = figwheel.client.format_messages.call(null,inst_32462);
var inst_32464 = figwheel.client.heads_up.display_error.call(null,inst_32463);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(14),inst_32464);
} else {
if((state_val_32512 === (9))){
var inst_32453 = (state_32511[(2)]);
var inst_32454 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32455 = figwheel.client.format_messages.call(null,inst_32454);
var inst_32456 = figwheel.client.heads_up.display_error.call(null,inst_32455);
var state_32511__$1 = (function (){var statearr_32534 = state_32511;
(statearr_32534[(8)] = inst_32453);

return statearr_32534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(10),inst_32456);
} else {
if((state_val_32512 === (5))){
var inst_32447 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32535_32570 = state_32511__$1;
(statearr_32535_32570[(2)] = inst_32447);

(statearr_32535_32570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (14))){
var inst_32466 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32536_32571 = state_32511__$1;
(statearr_32536_32571[(2)] = inst_32466);

(statearr_32536_32571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (26))){
var inst_32488 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32537_32572 = state_32511__$1;
(statearr_32537_32572[(2)] = inst_32488);

(statearr_32537_32572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (16))){
var inst_32473 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32511__$1 = state_32511;
if(inst_32473){
var statearr_32538_32573 = state_32511__$1;
(statearr_32538_32573[(1)] = (18));

} else {
var statearr_32539_32574 = state_32511__$1;
(statearr_32539_32574[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (30))){
var inst_32494 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32540_32575 = state_32511__$1;
(statearr_32540_32575[(2)] = inst_32494);

(statearr_32540_32575[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (10))){
var inst_32458 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32541_32576 = state_32511__$1;
(statearr_32541_32576[(2)] = inst_32458);

(statearr_32541_32576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32512 === (18))){
var inst_32475 = figwheel.client.heads_up.clear.call(null);
var state_32511__$1 = state_32511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32511__$1,(21),inst_32475);
} else {
if((state_val_32512 === (8))){
var inst_32507 = (state_32511[(2)]);
var state_32511__$1 = state_32511;
var statearr_32542_32577 = state_32511__$1;
(statearr_32542_32577[(2)] = inst_32507);

(statearr_32542_32577[(1)] = (4));


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
});})(c__20396__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20381__auto__,c__20396__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_32546 = [null,null,null,null,null,null,null,null,null];
(statearr_32546[(0)] = state_machine__20382__auto__);

(statearr_32546[(1)] = (1));

return statearr_32546;
});
var state_machine__20382__auto____1 = (function (state_32511){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32547){if((e32547 instanceof Object)){
var ex__20385__auto__ = e32547;
var statearr_32548_32578 = state_32511;
(statearr_32548_32578[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32579 = state_32511;
state_32511 = G__32579;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32511){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__,msg_hist,msg_names,msg))
})();
var state__20398__auto__ = (function (){var statearr_32549 = f__20397__auto__.call(null);
(statearr_32549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__,msg_hist,msg_names,msg))
);

return c__20396__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20396__auto___32642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___32642,ch){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___32642,ch){
return (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (8))){
var inst_32617 = (state_32625[(2)]);
var state_32625__$1 = (function (){var statearr_32627 = state_32625;
(statearr_32627[(7)] = inst_32617);

return statearr_32627;
})();
var statearr_32628_32643 = state_32625__$1;
(statearr_32628_32643[(2)] = null);

(statearr_32628_32643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (7))){
var inst_32621 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32629_32644 = state_32625__$1;
(statearr_32629_32644[(2)] = inst_32621);

(statearr_32629_32644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (6))){
var state_32625__$1 = state_32625;
var statearr_32630_32645 = state_32625__$1;
(statearr_32630_32645[(2)] = null);

(statearr_32630_32645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (5))){
var inst_32613 = (state_32625[(8)]);
var inst_32615 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32613);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32625__$1,(8),inst_32615);
} else {
if((state_val_32626 === (4))){
var inst_32613 = (state_32625[(8)]);
var inst_32613__$1 = (state_32625[(2)]);
var state_32625__$1 = (function (){var statearr_32631 = state_32625;
(statearr_32631[(8)] = inst_32613__$1);

return statearr_32631;
})();
if(cljs.core.truth_(inst_32613__$1)){
var statearr_32632_32646 = state_32625__$1;
(statearr_32632_32646[(1)] = (5));

} else {
var statearr_32633_32647 = state_32625__$1;
(statearr_32633_32647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (3))){
var inst_32623 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32625__$1,inst_32623);
} else {
if((state_val_32626 === (2))){
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32625__$1,(4),ch);
} else {
if((state_val_32626 === (1))){
var state_32625__$1 = state_32625;
var statearr_32634_32648 = state_32625__$1;
(statearr_32634_32648[(2)] = null);

(statearr_32634_32648[(1)] = (2));


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
});})(c__20396__auto___32642,ch))
;
return ((function (switch__20381__auto__,c__20396__auto___32642,ch){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_32638 = [null,null,null,null,null,null,null,null,null];
(statearr_32638[(0)] = state_machine__20382__auto__);

(statearr_32638[(1)] = (1));

return statearr_32638;
});
var state_machine__20382__auto____1 = (function (state_32625){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32639){if((e32639 instanceof Object)){
var ex__20385__auto__ = e32639;
var statearr_32640_32649 = state_32625;
(statearr_32640_32649[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32650 = state_32625;
state_32625 = G__32650;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___32642,ch))
})();
var state__20398__auto__ = (function (){var statearr_32641 = f__20397__auto__.call(null);
(statearr_32641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___32642);

return statearr_32641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___32642,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_32671){
var state_val_32672 = (state_32671[(1)]);
if((state_val_32672 === (2))){
var inst_32668 = (state_32671[(2)]);
var inst_32669 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32671__$1 = (function (){var statearr_32673 = state_32671;
(statearr_32673[(7)] = inst_32668);

return statearr_32673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32671__$1,inst_32669);
} else {
if((state_val_32672 === (1))){
var inst_32666 = cljs.core.async.timeout.call(null,(3000));
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32671__$1,(2),inst_32666);
} else {
return null;
}
}
});})(c__20396__auto__))
;
return ((function (switch__20381__auto__,c__20396__auto__){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_32677 = [null,null,null,null,null,null,null,null];
(statearr_32677[(0)] = state_machine__20382__auto__);

(statearr_32677[(1)] = (1));

return statearr_32677;
});
var state_machine__20382__auto____1 = (function (state_32671){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32678){if((e32678 instanceof Object)){
var ex__20385__auto__ = e32678;
var statearr_32679_32681 = state_32671;
(statearr_32679_32681[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32671;
state_32671 = G__32682;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32671){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_32680 = f__20397__auto__.call(null);
(statearr_32680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_32680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__14432__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__14432__auto__)){
return ("CustomEvent" in window);
} else {
return and__14432__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj32686 = {"detail":url};
return obj32686;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__32687){
var map__32693 = p__32687;
var map__32693__$1 = ((cljs.core.seq_QMARK_.call(null,map__32693))?cljs.core.apply.call(null,cljs.core.hash_map,map__32693):map__32693);
var ed = map__32693__$1;
var exception_data = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__32693__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32694_32698 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32695_32699 = null;
var count__32696_32700 = (0);
var i__32697_32701 = (0);
while(true){
if((i__32697_32701 < count__32696_32700)){
var msg_32702 = cljs.core._nth.call(null,chunk__32695_32699,i__32697_32701);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32702);

var G__32703 = seq__32694_32698;
var G__32704 = chunk__32695_32699;
var G__32705 = count__32696_32700;
var G__32706 = (i__32697_32701 + (1));
seq__32694_32698 = G__32703;
chunk__32695_32699 = G__32704;
count__32696_32700 = G__32705;
i__32697_32701 = G__32706;
continue;
} else {
var temp__4406__auto___32707 = cljs.core.seq.call(null,seq__32694_32698);
if(temp__4406__auto___32707){
var seq__32694_32708__$1 = temp__4406__auto___32707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32694_32708__$1)){
var c__15231__auto___32709 = cljs.core.chunk_first.call(null,seq__32694_32708__$1);
var G__32710 = cljs.core.chunk_rest.call(null,seq__32694_32708__$1);
var G__32711 = c__15231__auto___32709;
var G__32712 = cljs.core.count.call(null,c__15231__auto___32709);
var G__32713 = (0);
seq__32694_32698 = G__32710;
chunk__32695_32699 = G__32711;
count__32696_32700 = G__32712;
i__32697_32701 = G__32713;
continue;
} else {
var msg_32714 = cljs.core.first.call(null,seq__32694_32708__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32714);

var G__32715 = cljs.core.next.call(null,seq__32694_32708__$1);
var G__32716 = null;
var G__32717 = (0);
var G__32718 = (0);
seq__32694_32698 = G__32715;
chunk__32695_32699 = G__32716;
count__32696_32700 = G__32717;
i__32697_32701 = G__32718;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__32719){
var map__32721 = p__32719;
var map__32721__$1 = ((cljs.core.seq_QMARK_.call(null,map__32721))?cljs.core.apply.call(null,cljs.core.hash_map,map__32721):map__32721);
var w = map__32721__$1;
var message = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__14432__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__14432__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__14432__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__32728 = cljs.core.seq.call(null,plugins);
var chunk__32729 = null;
var count__32730 = (0);
var i__32731 = (0);
while(true){
if((i__32731 < count__32730)){
var vec__32732 = cljs.core._nth.call(null,chunk__32729,i__32731);
var k = cljs.core.nth.call(null,vec__32732,(0),null);
var plugin = cljs.core.nth.call(null,vec__32732,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32728,chunk__32729,count__32730,i__32731,pl_32734,vec__32732,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32734.call(null,msg_hist);
});})(seq__32728,chunk__32729,count__32730,i__32731,pl_32734,vec__32732,k,plugin))
);
} else {
}

var G__32735 = seq__32728;
var G__32736 = chunk__32729;
var G__32737 = count__32730;
var G__32738 = (i__32731 + (1));
seq__32728 = G__32735;
chunk__32729 = G__32736;
count__32730 = G__32737;
i__32731 = G__32738;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__32728);
if(temp__4406__auto__){
var seq__32728__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32728__$1)){
var c__15231__auto__ = cljs.core.chunk_first.call(null,seq__32728__$1);
var G__32739 = cljs.core.chunk_rest.call(null,seq__32728__$1);
var G__32740 = c__15231__auto__;
var G__32741 = cljs.core.count.call(null,c__15231__auto__);
var G__32742 = (0);
seq__32728 = G__32739;
chunk__32729 = G__32740;
count__32730 = G__32741;
i__32731 = G__32742;
continue;
} else {
var vec__32733 = cljs.core.first.call(null,seq__32728__$1);
var k = cljs.core.nth.call(null,vec__32733,(0),null);
var plugin = cljs.core.nth.call(null,vec__32733,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32743 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32728,chunk__32729,count__32730,i__32731,pl_32743,vec__32733,k,plugin,seq__32728__$1,temp__4406__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32743.call(null,msg_hist);
});})(seq__32728,chunk__32729,count__32730,i__32731,pl_32743,vec__32733,k,plugin,seq__32728__$1,temp__4406__auto__))
);
} else {
}

var G__32744 = cljs.core.next.call(null,seq__32728__$1);
var G__32745 = null;
var G__32746 = (0);
var G__32747 = (0);
seq__32728 = G__32744;
chunk__32729 = G__32745;
count__32730 = G__32746;
i__32731 = G__32747;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__32748){
var map__32750 = p__32748;
var map__32750__$1 = ((cljs.core.seq_QMARK_.call(null,map__32750))?cljs.core.apply.call(null,cljs.core.hash_map,map__32750):map__32750);
var opts = map__32750__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__32748 = null;
if (arguments.length > 0) {
var G__32751__i = 0, G__32751__a = new Array(arguments.length -  0);
while (G__32751__i < G__32751__a.length) {G__32751__a[G__32751__i] = arguments[G__32751__i + 0]; ++G__32751__i;}
  p__32748 = new cljs.core.IndexedSeq(G__32751__a,0);
} 
return watch_and_reload__delegate.call(this,p__32748);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__32752){
var p__32748 = cljs.core.seq(arglist__32752);
return watch_and_reload__delegate(p__32748);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map