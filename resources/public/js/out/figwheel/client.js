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
var G__35147__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35148__i = 0, G__35148__a = new Array(arguments.length -  0);
while (G__35148__i < G__35148__a.length) {G__35148__a[G__35148__i] = arguments[G__35148__i + 0]; ++G__35148__i;}
  args = new cljs.core.IndexedSeq(G__35148__a,0);
} 
return G__35147__delegate.call(this,args);};
G__35147.cljs$lang$maxFixedArity = 0;
G__35147.cljs$lang$applyTo = (function (arglist__35149){
var args = cljs.core.seq(arglist__35149);
return G__35147__delegate(args);
});
G__35147.cljs$core$IFn$_invoke$arity$variadic = G__35147__delegate;
return G__35147;
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
figwheel.client.error_msg_format = (function error_msg_format(p__35150){
var map__35152 = p__35150;
var map__35152__$1 = ((cljs.core.seq_QMARK_.call(null,map__35152))?cljs.core.apply.call(null,cljs.core.hash_map,map__35152):map__35152);
var class$ = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__22243__auto___35281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___35281,ch){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___35281,ch){
return (function (state_35255){
var state_val_35256 = (state_35255[(1)]);
if((state_val_35256 === (7))){
var inst_35251 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35257_35282 = state_35255__$1;
(statearr_35257_35282[(2)] = inst_35251);

(statearr_35257_35282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (1))){
var state_35255__$1 = state_35255;
var statearr_35258_35283 = state_35255__$1;
(statearr_35258_35283[(2)] = null);

(statearr_35258_35283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (4))){
var inst_35219 = (state_35255[(7)]);
var inst_35219__$1 = (state_35255[(2)]);
var state_35255__$1 = (function (){var statearr_35259 = state_35255;
(statearr_35259[(7)] = inst_35219__$1);

return statearr_35259;
})();
if(cljs.core.truth_(inst_35219__$1)){
var statearr_35260_35284 = state_35255__$1;
(statearr_35260_35284[(1)] = (5));

} else {
var statearr_35261_35285 = state_35255__$1;
(statearr_35261_35285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (13))){
var state_35255__$1 = state_35255;
var statearr_35262_35286 = state_35255__$1;
(statearr_35262_35286[(2)] = null);

(statearr_35262_35286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (6))){
var state_35255__$1 = state_35255;
var statearr_35263_35287 = state_35255__$1;
(statearr_35263_35287[(2)] = null);

(statearr_35263_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (3))){
var inst_35253 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35255__$1,inst_35253);
} else {
if((state_val_35256 === (12))){
var inst_35226 = (state_35255[(8)]);
var inst_35239 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35226);
var inst_35240 = cljs.core.first.call(null,inst_35239);
var inst_35241 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35240);
var inst_35242 = console.warn("Figwheel: Not loading code with warnings - ",inst_35241);
var state_35255__$1 = state_35255;
var statearr_35264_35288 = state_35255__$1;
(statearr_35264_35288[(2)] = inst_35242);

(statearr_35264_35288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (2))){
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(4),ch);
} else {
if((state_val_35256 === (11))){
var inst_35235 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35265_35289 = state_35255__$1;
(statearr_35265_35289[(2)] = inst_35235);

(statearr_35265_35289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (9))){
var inst_35225 = (state_35255[(9)]);
var inst_35237 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35225,opts);
var state_35255__$1 = state_35255;
if(inst_35237){
var statearr_35266_35290 = state_35255__$1;
(statearr_35266_35290[(1)] = (12));

} else {
var statearr_35267_35291 = state_35255__$1;
(statearr_35267_35291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (5))){
var inst_35219 = (state_35255[(7)]);
var inst_35225 = (state_35255[(9)]);
var inst_35221 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35222 = (new cljs.core.PersistentArrayMap(null,2,inst_35221,null));
var inst_35223 = (new cljs.core.PersistentHashSet(null,inst_35222,null));
var inst_35224 = figwheel.client.focus_msgs.call(null,inst_35223,inst_35219);
var inst_35225__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35224);
var inst_35226 = cljs.core.first.call(null,inst_35224);
var inst_35227 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35225__$1,opts);
var state_35255__$1 = (function (){var statearr_35268 = state_35255;
(statearr_35268[(9)] = inst_35225__$1);

(statearr_35268[(8)] = inst_35226);

return statearr_35268;
})();
if(cljs.core.truth_(inst_35227)){
var statearr_35269_35292 = state_35255__$1;
(statearr_35269_35292[(1)] = (8));

} else {
var statearr_35270_35293 = state_35255__$1;
(statearr_35270_35293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (14))){
var inst_35245 = (state_35255[(2)]);
var state_35255__$1 = state_35255;
var statearr_35271_35294 = state_35255__$1;
(statearr_35271_35294[(2)] = inst_35245);

(statearr_35271_35294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (10))){
var inst_35247 = (state_35255[(2)]);
var state_35255__$1 = (function (){var statearr_35272 = state_35255;
(statearr_35272[(10)] = inst_35247);

return statearr_35272;
})();
var statearr_35273_35295 = state_35255__$1;
(statearr_35273_35295[(2)] = null);

(statearr_35273_35295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35256 === (8))){
var inst_35226 = (state_35255[(8)]);
var inst_35229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35230 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35226);
var inst_35231 = cljs.core.async.timeout.call(null,(1000));
var inst_35232 = [inst_35230,inst_35231];
var inst_35233 = (new cljs.core.PersistentVector(null,2,(5),inst_35229,inst_35232,null));
var state_35255__$1 = state_35255;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35255__$1,(11),inst_35233);
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
});})(c__22243__auto___35281,ch))
;
return ((function (switch__22187__auto__,c__22243__auto___35281,ch){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_35277 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35277[(0)] = state_machine__22188__auto__);

(statearr_35277[(1)] = (1));

return statearr_35277;
});
var state_machine__22188__auto____1 = (function (state_35255){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35278){if((e35278 instanceof Object)){
var ex__22191__auto__ = e35278;
var statearr_35279_35296 = state_35255;
(statearr_35279_35296[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35297 = state_35255;
state_35255 = G__35297;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35255){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___35281,ch))
})();
var state__22245__auto__ = (function (){var statearr_35280 = f__22244__auto__.call(null);
(statearr_35280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___35281);

return statearr_35280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___35281,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__35298_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35298_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_35303 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_35304 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_35303,_STAR_print_newline_STAR_35304){
return (function() { 
var G__35305__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35306__i = 0, G__35306__a = new Array(arguments.length -  0);
while (G__35306__i < G__35306__a.length) {G__35306__a[G__35306__i] = arguments[G__35306__i + 0]; ++G__35306__i;}
  args = new cljs.core.IndexedSeq(G__35306__a,0);
} 
return G__35305__delegate.call(this,args);};
G__35305.cljs$lang$maxFixedArity = 0;
G__35305.cljs$lang$applyTo = (function (arglist__35307){
var args = cljs.core.seq(arglist__35307);
return G__35305__delegate(args);
});
G__35305.cljs$core$IFn$_invoke$arity$variadic = G__35305__delegate;
return G__35305;
})()
;})(_STAR_print_fn_STAR_35303,_STAR_print_newline_STAR_35304))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35304;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35303;
}}catch (e35302){if((e35302 instanceof Error)){
var e = e35302;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e35302;
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
figwheel.client.repl_plugin = (function repl_plugin(p__35308){
var map__35313 = p__35308;
var map__35313__$1 = ((cljs.core.seq_QMARK_.call(null,map__35313))?cljs.core.apply.call(null,cljs.core.hash_map,map__35313):map__35313);
var opts = map__35313__$1;
var build_id = cljs.core.get.call(null,map__35313__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35313,map__35313__$1,opts,build_id){
return (function (p__35314){
var vec__35315 = p__35314;
var map__35316 = cljs.core.nth.call(null,vec__35315,(0),null);
var map__35316__$1 = ((cljs.core.seq_QMARK_.call(null,map__35316))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var msg = map__35316__$1;
var msg_name = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35315,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__35315,map__35316,map__35316__$1,msg,msg_name,_,map__35313,map__35313__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35315,map__35316,map__35316__$1,msg,msg_name,_,map__35313,map__35313__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35313,map__35313__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__35320){
var vec__35321 = p__35320;
var map__35322 = cljs.core.nth.call(null,vec__35321,(0),null);
var map__35322__$1 = ((cljs.core.seq_QMARK_.call(null,map__35322))?cljs.core.apply.call(null,cljs.core.hash_map,map__35322):map__35322);
var msg = map__35322__$1;
var msg_name = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35321,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__35323){
var map__35331 = p__35323;
var map__35331__$1 = ((cljs.core.seq_QMARK_.call(null,map__35331))?cljs.core.apply.call(null,cljs.core.hash_map,map__35331):map__35331);
var on_compile_fail = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__35331__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__35331,map__35331__$1,on_compile_fail,on_compile_warning){
return (function (p__35332){
var vec__35333 = p__35332;
var map__35334 = cljs.core.nth.call(null,vec__35333,(0),null);
var map__35334__$1 = ((cljs.core.seq_QMARK_.call(null,map__35334))?cljs.core.apply.call(null,cljs.core.hash_map,map__35334):map__35334);
var msg = map__35334__$1;
var msg_name = cljs.core.get.call(null,map__35334__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35333,(1));
var pred__35335 = cljs.core._EQ_;
var expr__35336 = msg_name;
if(cljs.core.truth_(pred__35335.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35336))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35335.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35336))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35331,map__35331__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__,msg_hist,msg_names,msg){
return (function (state_35513){
var state_val_35514 = (state_35513[(1)]);
if((state_val_35514 === (7))){
var inst_35462 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35513__$1 = state_35513;
if(inst_35462){
var statearr_35515_35552 = state_35513__$1;
(statearr_35515_35552[(1)] = (11));

} else {
var statearr_35516_35553 = state_35513__$1;
(statearr_35516_35553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (20))){
var inst_35503 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35517_35554 = state_35513__$1;
(statearr_35517_35554[(2)] = inst_35503);

(statearr_35517_35554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (27))){
var inst_35494 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(30),inst_35494);
} else {
if((state_val_35514 === (1))){
var inst_35445 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35513__$1 = state_35513;
if(cljs.core.truth_(inst_35445)){
var statearr_35518_35555 = state_35513__$1;
(statearr_35518_35555[(1)] = (2));

} else {
var statearr_35519_35556 = state_35513__$1;
(statearr_35519_35556[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (24))){
var inst_35492 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35513__$1 = state_35513;
if(inst_35492){
var statearr_35520_35557 = state_35513__$1;
(statearr_35520_35557[(1)] = (27));

} else {
var statearr_35521_35558 = state_35513__$1;
(statearr_35521_35558[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (4))){
var inst_35511 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35513__$1,inst_35511);
} else {
if((state_val_35514 === (15))){
var inst_35472 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35473 = figwheel.client.heads_up.append_message.call(null,inst_35472);
var state_35513__$1 = state_35513;
var statearr_35522_35559 = state_35513__$1;
(statearr_35522_35559[(2)] = inst_35473);

(statearr_35522_35559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (21))){
var inst_35479 = (state_35513[(2)]);
var inst_35480 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35481 = figwheel.client.heads_up.display_warning.call(null,inst_35480);
var state_35513__$1 = (function (){var statearr_35523 = state_35513;
(statearr_35523[(7)] = inst_35479);

return statearr_35523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(22),inst_35481);
} else {
if((state_val_35514 === (13))){
var inst_35507 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35524_35560 = state_35513__$1;
(statearr_35524_35560[(2)] = inst_35507);

(statearr_35524_35560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (22))){
var inst_35483 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35525_35561 = state_35513__$1;
(statearr_35525_35561[(2)] = inst_35483);

(statearr_35525_35561[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (29))){
var inst_35499 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35526_35562 = state_35513__$1;
(statearr_35526_35562[(2)] = inst_35499);

(statearr_35526_35562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (6))){
var inst_35453 = figwheel.client.heads_up.clear.call(null);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(9),inst_35453);
} else {
if((state_val_35514 === (28))){
var state_35513__$1 = state_35513;
var statearr_35527_35563 = state_35513__$1;
(statearr_35527_35563[(2)] = null);

(statearr_35527_35563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (25))){
var inst_35501 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35528_35564 = state_35513__$1;
(statearr_35528_35564[(2)] = inst_35501);

(statearr_35528_35564[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (17))){
var inst_35505 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35529_35565 = state_35513__$1;
(statearr_35529_35565[(2)] = inst_35505);

(statearr_35529_35565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (3))){
var inst_35451 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35513__$1 = state_35513;
if(inst_35451){
var statearr_35530_35566 = state_35513__$1;
(statearr_35530_35566[(1)] = (6));

} else {
var statearr_35531_35567 = state_35513__$1;
(statearr_35531_35567[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (12))){
var inst_35470 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35513__$1 = state_35513;
if(inst_35470){
var statearr_35532_35568 = state_35513__$1;
(statearr_35532_35568[(1)] = (15));

} else {
var statearr_35533_35569 = state_35513__$1;
(statearr_35533_35569[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (2))){
var inst_35447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(5),inst_35447);
} else {
if((state_val_35514 === (23))){
var inst_35487 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35488 = figwheel.client.heads_up.display_warning.call(null,inst_35487);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(26),inst_35488);
} else {
if((state_val_35514 === (19))){
var inst_35485 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35513__$1 = state_35513;
if(inst_35485){
var statearr_35534_35570 = state_35513__$1;
(statearr_35534_35570[(1)] = (23));

} else {
var statearr_35535_35571 = state_35513__$1;
(statearr_35535_35571[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (11))){
var inst_35464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35465 = figwheel.client.format_messages.call(null,inst_35464);
var inst_35466 = figwheel.client.heads_up.display_error.call(null,inst_35465);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(14),inst_35466);
} else {
if((state_val_35514 === (9))){
var inst_35455 = (state_35513[(2)]);
var inst_35456 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35457 = figwheel.client.format_messages.call(null,inst_35456);
var inst_35458 = figwheel.client.heads_up.display_error.call(null,inst_35457);
var state_35513__$1 = (function (){var statearr_35536 = state_35513;
(statearr_35536[(8)] = inst_35455);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(10),inst_35458);
} else {
if((state_val_35514 === (5))){
var inst_35449 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35537_35572 = state_35513__$1;
(statearr_35537_35572[(2)] = inst_35449);

(statearr_35537_35572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (14))){
var inst_35468 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35538_35573 = state_35513__$1;
(statearr_35538_35573[(2)] = inst_35468);

(statearr_35538_35573[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (26))){
var inst_35490 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35539_35574 = state_35513__$1;
(statearr_35539_35574[(2)] = inst_35490);

(statearr_35539_35574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (16))){
var inst_35475 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35513__$1 = state_35513;
if(inst_35475){
var statearr_35540_35575 = state_35513__$1;
(statearr_35540_35575[(1)] = (18));

} else {
var statearr_35541_35576 = state_35513__$1;
(statearr_35541_35576[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (30))){
var inst_35496 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35542_35577 = state_35513__$1;
(statearr_35542_35577[(2)] = inst_35496);

(statearr_35542_35577[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (10))){
var inst_35460 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35543_35578 = state_35513__$1;
(statearr_35543_35578[(2)] = inst_35460);

(statearr_35543_35578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (18))){
var inst_35477 = figwheel.client.heads_up.clear.call(null);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(21),inst_35477);
} else {
if((state_val_35514 === (8))){
var inst_35509 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35544_35579 = state_35513__$1;
(statearr_35544_35579[(2)] = inst_35509);

(statearr_35544_35579[(1)] = (4));


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
});})(c__22243__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22187__auto__,c__22243__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_35548 = [null,null,null,null,null,null,null,null,null];
(statearr_35548[(0)] = state_machine__22188__auto__);

(statearr_35548[(1)] = (1));

return statearr_35548;
});
var state_machine__22188__auto____1 = (function (state_35513){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35549){if((e35549 instanceof Object)){
var ex__22191__auto__ = e35549;
var statearr_35550_35580 = state_35513;
(statearr_35550_35580[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35581 = state_35513;
state_35513 = G__35581;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35513){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__,msg_hist,msg_names,msg))
})();
var state__22245__auto__ = (function (){var statearr_35551 = f__22244__auto__.call(null);
(statearr_35551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_35551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__,msg_hist,msg_names,msg))
);

return c__22243__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22243__auto___35644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___35644,ch){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___35644,ch){
return (function (state_35627){
var state_val_35628 = (state_35627[(1)]);
if((state_val_35628 === (8))){
var inst_35619 = (state_35627[(2)]);
var state_35627__$1 = (function (){var statearr_35629 = state_35627;
(statearr_35629[(7)] = inst_35619);

return statearr_35629;
})();
var statearr_35630_35645 = state_35627__$1;
(statearr_35630_35645[(2)] = null);

(statearr_35630_35645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35628 === (7))){
var inst_35623 = (state_35627[(2)]);
var state_35627__$1 = state_35627;
var statearr_35631_35646 = state_35627__$1;
(statearr_35631_35646[(2)] = inst_35623);

(statearr_35631_35646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35628 === (6))){
var state_35627__$1 = state_35627;
var statearr_35632_35647 = state_35627__$1;
(statearr_35632_35647[(2)] = null);

(statearr_35632_35647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35628 === (5))){
var inst_35615 = (state_35627[(8)]);
var inst_35617 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35615);
var state_35627__$1 = state_35627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35627__$1,(8),inst_35617);
} else {
if((state_val_35628 === (4))){
var inst_35615 = (state_35627[(8)]);
var inst_35615__$1 = (state_35627[(2)]);
var state_35627__$1 = (function (){var statearr_35633 = state_35627;
(statearr_35633[(8)] = inst_35615__$1);

return statearr_35633;
})();
if(cljs.core.truth_(inst_35615__$1)){
var statearr_35634_35648 = state_35627__$1;
(statearr_35634_35648[(1)] = (5));

} else {
var statearr_35635_35649 = state_35627__$1;
(statearr_35635_35649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35628 === (3))){
var inst_35625 = (state_35627[(2)]);
var state_35627__$1 = state_35627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35627__$1,inst_35625);
} else {
if((state_val_35628 === (2))){
var state_35627__$1 = state_35627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35627__$1,(4),ch);
} else {
if((state_val_35628 === (1))){
var state_35627__$1 = state_35627;
var statearr_35636_35650 = state_35627__$1;
(statearr_35636_35650[(2)] = null);

(statearr_35636_35650[(1)] = (2));


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
});})(c__22243__auto___35644,ch))
;
return ((function (switch__22187__auto__,c__22243__auto___35644,ch){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_35640 = [null,null,null,null,null,null,null,null,null];
(statearr_35640[(0)] = state_machine__22188__auto__);

(statearr_35640[(1)] = (1));

return statearr_35640;
});
var state_machine__22188__auto____1 = (function (state_35627){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35641){if((e35641 instanceof Object)){
var ex__22191__auto__ = e35641;
var statearr_35642_35651 = state_35627;
(statearr_35642_35651[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35652 = state_35627;
state_35627 = G__35652;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35627){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___35644,ch))
})();
var state__22245__auto__ = (function (){var statearr_35643 = f__22244__auto__.call(null);
(statearr_35643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___35644);

return statearr_35643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___35644,ch))
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
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (2))){
var inst_35670 = (state_35673[(2)]);
var inst_35671 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35673__$1 = (function (){var statearr_35675 = state_35673;
(statearr_35675[(7)] = inst_35670);

return statearr_35675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35673__$1,inst_35671);
} else {
if((state_val_35674 === (1))){
var inst_35668 = cljs.core.async.timeout.call(null,(3000));
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35673__$1,(2),inst_35668);
} else {
return null;
}
}
});})(c__22243__auto__))
;
return ((function (switch__22187__auto__,c__22243__auto__){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_35679 = [null,null,null,null,null,null,null,null];
(statearr_35679[(0)] = state_machine__22188__auto__);

(statearr_35679[(1)] = (1));

return statearr_35679;
});
var state_machine__22188__auto____1 = (function (state_35673){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35680){if((e35680 instanceof Object)){
var ex__22191__auto__ = e35680;
var statearr_35681_35683 = state_35673;
(statearr_35681_35683[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35684 = state_35673;
state_35673 = G__35684;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35673){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_35682 = f__22244__auto__.call(null);
(statearr_35682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_35682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj35688 = {"detail":url};
return obj35688;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__35689){
var map__35695 = p__35689;
var map__35695__$1 = ((cljs.core.seq_QMARK_.call(null,map__35695))?cljs.core.apply.call(null,cljs.core.hash_map,map__35695):map__35695);
var ed = map__35695__$1;
var exception_data = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35696_35700 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35697_35701 = null;
var count__35698_35702 = (0);
var i__35699_35703 = (0);
while(true){
if((i__35699_35703 < count__35698_35702)){
var msg_35704 = cljs.core._nth.call(null,chunk__35697_35701,i__35699_35703);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35704);

var G__35705 = seq__35696_35700;
var G__35706 = chunk__35697_35701;
var G__35707 = count__35698_35702;
var G__35708 = (i__35699_35703 + (1));
seq__35696_35700 = G__35705;
chunk__35697_35701 = G__35706;
count__35698_35702 = G__35707;
i__35699_35703 = G__35708;
continue;
} else {
var temp__4406__auto___35709 = cljs.core.seq.call(null,seq__35696_35700);
if(temp__4406__auto___35709){
var seq__35696_35710__$1 = temp__4406__auto___35709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35696_35710__$1)){
var c__15231__auto___35711 = cljs.core.chunk_first.call(null,seq__35696_35710__$1);
var G__35712 = cljs.core.chunk_rest.call(null,seq__35696_35710__$1);
var G__35713 = c__15231__auto___35711;
var G__35714 = cljs.core.count.call(null,c__15231__auto___35711);
var G__35715 = (0);
seq__35696_35700 = G__35712;
chunk__35697_35701 = G__35713;
count__35698_35702 = G__35714;
i__35699_35703 = G__35715;
continue;
} else {
var msg_35716 = cljs.core.first.call(null,seq__35696_35710__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35716);

var G__35717 = cljs.core.next.call(null,seq__35696_35710__$1);
var G__35718 = null;
var G__35719 = (0);
var G__35720 = (0);
seq__35696_35700 = G__35717;
chunk__35697_35701 = G__35718;
count__35698_35702 = G__35719;
i__35699_35703 = G__35720;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__35721){
var map__35723 = p__35721;
var map__35723__$1 = ((cljs.core.seq_QMARK_.call(null,map__35723))?cljs.core.apply.call(null,cljs.core.hash_map,map__35723):map__35723);
var w = map__35723__$1;
var message = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__35730 = cljs.core.seq.call(null,plugins);
var chunk__35731 = null;
var count__35732 = (0);
var i__35733 = (0);
while(true){
if((i__35733 < count__35732)){
var vec__35734 = cljs.core._nth.call(null,chunk__35731,i__35733);
var k = cljs.core.nth.call(null,vec__35734,(0),null);
var plugin = cljs.core.nth.call(null,vec__35734,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35736 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35730,chunk__35731,count__35732,i__35733,pl_35736,vec__35734,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35736.call(null,msg_hist);
});})(seq__35730,chunk__35731,count__35732,i__35733,pl_35736,vec__35734,k,plugin))
);
} else {
}

var G__35737 = seq__35730;
var G__35738 = chunk__35731;
var G__35739 = count__35732;
var G__35740 = (i__35733 + (1));
seq__35730 = G__35737;
chunk__35731 = G__35738;
count__35732 = G__35739;
i__35733 = G__35740;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__35730);
if(temp__4406__auto__){
var seq__35730__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35730__$1)){
var c__15231__auto__ = cljs.core.chunk_first.call(null,seq__35730__$1);
var G__35741 = cljs.core.chunk_rest.call(null,seq__35730__$1);
var G__35742 = c__15231__auto__;
var G__35743 = cljs.core.count.call(null,c__15231__auto__);
var G__35744 = (0);
seq__35730 = G__35741;
chunk__35731 = G__35742;
count__35732 = G__35743;
i__35733 = G__35744;
continue;
} else {
var vec__35735 = cljs.core.first.call(null,seq__35730__$1);
var k = cljs.core.nth.call(null,vec__35735,(0),null);
var plugin = cljs.core.nth.call(null,vec__35735,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35745 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35730,chunk__35731,count__35732,i__35733,pl_35745,vec__35735,k,plugin,seq__35730__$1,temp__4406__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35745.call(null,msg_hist);
});})(seq__35730,chunk__35731,count__35732,i__35733,pl_35745,vec__35735,k,plugin,seq__35730__$1,temp__4406__auto__))
);
} else {
}

var G__35746 = cljs.core.next.call(null,seq__35730__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35730 = G__35746;
chunk__35731 = G__35747;
count__35732 = G__35748;
i__35733 = G__35749;
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
var watch_and_reload__delegate = function (p__35750){
var map__35752 = p__35750;
var map__35752__$1 = ((cljs.core.seq_QMARK_.call(null,map__35752))?cljs.core.apply.call(null,cljs.core.hash_map,map__35752):map__35752);
var opts = map__35752__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__35750 = null;
if (arguments.length > 0) {
var G__35753__i = 0, G__35753__a = new Array(arguments.length -  0);
while (G__35753__i < G__35753__a.length) {G__35753__a[G__35753__i] = arguments[G__35753__i + 0]; ++G__35753__i;}
  p__35750 = new cljs.core.IndexedSeq(G__35753__a,0);
} 
return watch_and_reload__delegate.call(this,p__35750);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__35754){
var p__35750 = cljs.core.seq(arglist__35754);
return watch_and_reload__delegate(p__35750);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map