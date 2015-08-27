// Compiled by ClojureScript 0.0-3308 {}
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
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30499__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30500__i = 0, G__30500__a = new Array(arguments.length -  0);
while (G__30500__i < G__30500__a.length) {G__30500__a[G__30500__i] = arguments[G__30500__i + 0]; ++G__30500__i;}
  args = new cljs.core.IndexedSeq(G__30500__a,0);
} 
return G__30499__delegate.call(this,args);};
G__30499.cljs$lang$maxFixedArity = 0;
G__30499.cljs$lang$applyTo = (function (arglist__30501){
var args = cljs.core.seq(arglist__30501);
return G__30499__delegate(args);
});
G__30499.cljs$core$IFn$_invoke$arity$variadic = G__30499__delegate;
return G__30499;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30502){
var map__30504 = p__30502;
var map__30504__$1 = ((cljs.core.seq_QMARK_.call(null,map__30504))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);
var message = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16627__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16615__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16615__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16615__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24334__auto___30633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___30633,ch){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___30633,ch){
return (function (state_30607){
var state_val_30608 = (state_30607[(1)]);
if((state_val_30608 === (7))){
var inst_30603 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30609_30634 = state_30607__$1;
(statearr_30609_30634[(2)] = inst_30603);

(statearr_30609_30634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (1))){
var state_30607__$1 = state_30607;
var statearr_30610_30635 = state_30607__$1;
(statearr_30610_30635[(2)] = null);

(statearr_30610_30635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (4))){
var inst_30571 = (state_30607[(7)]);
var inst_30571__$1 = (state_30607[(2)]);
var state_30607__$1 = (function (){var statearr_30611 = state_30607;
(statearr_30611[(7)] = inst_30571__$1);

return statearr_30611;
})();
if(cljs.core.truth_(inst_30571__$1)){
var statearr_30612_30636 = state_30607__$1;
(statearr_30612_30636[(1)] = (5));

} else {
var statearr_30613_30637 = state_30607__$1;
(statearr_30613_30637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (13))){
var state_30607__$1 = state_30607;
var statearr_30614_30638 = state_30607__$1;
(statearr_30614_30638[(2)] = null);

(statearr_30614_30638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (6))){
var state_30607__$1 = state_30607;
var statearr_30615_30639 = state_30607__$1;
(statearr_30615_30639[(2)] = null);

(statearr_30615_30639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (3))){
var inst_30605 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30607__$1,inst_30605);
} else {
if((state_val_30608 === (12))){
var inst_30578 = (state_30607[(8)]);
var inst_30591 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30578);
var inst_30592 = cljs.core.first.call(null,inst_30591);
var inst_30593 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30592);
var inst_30594 = console.warn("Figwheel: Not loading code with warnings - ",inst_30593);
var state_30607__$1 = state_30607;
var statearr_30616_30640 = state_30607__$1;
(statearr_30616_30640[(2)] = inst_30594);

(statearr_30616_30640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (2))){
var state_30607__$1 = state_30607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30607__$1,(4),ch);
} else {
if((state_val_30608 === (11))){
var inst_30587 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30617_30641 = state_30607__$1;
(statearr_30617_30641[(2)] = inst_30587);

(statearr_30617_30641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (9))){
var inst_30577 = (state_30607[(9)]);
var inst_30589 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30577,opts);
var state_30607__$1 = state_30607;
if(cljs.core.truth_(inst_30589)){
var statearr_30618_30642 = state_30607__$1;
(statearr_30618_30642[(1)] = (12));

} else {
var statearr_30619_30643 = state_30607__$1;
(statearr_30619_30643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (5))){
var inst_30577 = (state_30607[(9)]);
var inst_30571 = (state_30607[(7)]);
var inst_30573 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30574 = (new cljs.core.PersistentArrayMap(null,2,inst_30573,null));
var inst_30575 = (new cljs.core.PersistentHashSet(null,inst_30574,null));
var inst_30576 = figwheel.client.focus_msgs.call(null,inst_30575,inst_30571);
var inst_30577__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30576);
var inst_30578 = cljs.core.first.call(null,inst_30576);
var inst_30579 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30577__$1,opts);
var state_30607__$1 = (function (){var statearr_30620 = state_30607;
(statearr_30620[(9)] = inst_30577__$1);

(statearr_30620[(8)] = inst_30578);

return statearr_30620;
})();
if(cljs.core.truth_(inst_30579)){
var statearr_30621_30644 = state_30607__$1;
(statearr_30621_30644[(1)] = (8));

} else {
var statearr_30622_30645 = state_30607__$1;
(statearr_30622_30645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (14))){
var inst_30597 = (state_30607[(2)]);
var state_30607__$1 = state_30607;
var statearr_30623_30646 = state_30607__$1;
(statearr_30623_30646[(2)] = inst_30597);

(statearr_30623_30646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (10))){
var inst_30599 = (state_30607[(2)]);
var state_30607__$1 = (function (){var statearr_30624 = state_30607;
(statearr_30624[(10)] = inst_30599);

return statearr_30624;
})();
var statearr_30625_30647 = state_30607__$1;
(statearr_30625_30647[(2)] = null);

(statearr_30625_30647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30608 === (8))){
var inst_30578 = (state_30607[(8)]);
var inst_30581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30582 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30578);
var inst_30583 = cljs.core.async.timeout.call(null,(1000));
var inst_30584 = [inst_30582,inst_30583];
var inst_30585 = (new cljs.core.PersistentVector(null,2,(5),inst_30581,inst_30584,null));
var state_30607__$1 = state_30607;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30607__$1,(11),inst_30585);
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
});})(c__24334__auto___30633,ch))
;
return ((function (switch__24272__auto__,c__24334__auto___30633,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24273__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24273__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30629[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24273__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24273__auto____1 = (function (state_30607){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_30607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e30630){if((e30630 instanceof Object)){
var ex__24276__auto__ = e30630;
var statearr_30631_30648 = state_30607;
(statearr_30631_30648[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30649 = state_30607;
state_30607 = G__30649;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24273__auto__ = function(state_30607){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24273__auto____1.call(this,state_30607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24273__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24273__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___30633,ch))
})();
var state__24336__auto__ = (function (){var statearr_30632 = f__24335__auto__.call(null);
(statearr_30632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___30633);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___30633,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30650_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30650_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30657 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30657){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30656 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30655,_STAR_print_newline_STAR_30656,base_path_30657){
return (function() { 
var G__30658__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30659__i = 0, G__30659__a = new Array(arguments.length -  0);
while (G__30659__i < G__30659__a.length) {G__30659__a[G__30659__i] = arguments[G__30659__i + 0]; ++G__30659__i;}
  args = new cljs.core.IndexedSeq(G__30659__a,0);
} 
return G__30658__delegate.call(this,args);};
G__30658.cljs$lang$maxFixedArity = 0;
G__30658.cljs$lang$applyTo = (function (arglist__30660){
var args = cljs.core.seq(arglist__30660);
return G__30658__delegate(args);
});
G__30658.cljs$core$IFn$_invoke$arity$variadic = G__30658__delegate;
return G__30658;
})()
;})(_STAR_print_fn_STAR_30655,_STAR_print_newline_STAR_30656,base_path_30657))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30656;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30655;
}}catch (e30654){if((e30654 instanceof Error)){
var e = e30654;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30657], null));
} else {
var e = e30654;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30657))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30661){
var map__30666 = p__30661;
var map__30666__$1 = ((cljs.core.seq_QMARK_.call(null,map__30666))?cljs.core.apply.call(null,cljs.core.hash_map,map__30666):map__30666);
var opts = map__30666__$1;
var build_id = cljs.core.get.call(null,map__30666__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30666,map__30666__$1,opts,build_id){
return (function (p__30667){
var vec__30668 = p__30667;
var map__30669 = cljs.core.nth.call(null,vec__30668,(0),null);
var map__30669__$1 = ((cljs.core.seq_QMARK_.call(null,map__30669))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var msg = map__30669__$1;
var msg_name = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30668,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30668,map__30669,map__30669__$1,msg,msg_name,_,map__30666,map__30666__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30668,map__30669,map__30669__$1,msg,msg_name,_,map__30666,map__30666__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30666,map__30666__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30673){
var vec__30674 = p__30673;
var map__30675 = cljs.core.nth.call(null,vec__30674,(0),null);
var map__30675__$1 = ((cljs.core.seq_QMARK_.call(null,map__30675))?cljs.core.apply.call(null,cljs.core.hash_map,map__30675):map__30675);
var msg = map__30675__$1;
var msg_name = cljs.core.get.call(null,map__30675__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30674,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30676){
var map__30684 = p__30676;
var map__30684__$1 = ((cljs.core.seq_QMARK_.call(null,map__30684))?cljs.core.apply.call(null,cljs.core.hash_map,map__30684):map__30684);
var on_compile_warning = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30684,map__30684__$1,on_compile_warning,on_compile_fail){
return (function (p__30685){
var vec__30686 = p__30685;
var map__30687 = cljs.core.nth.call(null,vec__30686,(0),null);
var map__30687__$1 = ((cljs.core.seq_QMARK_.call(null,map__30687))?cljs.core.apply.call(null,cljs.core.hash_map,map__30687):map__30687);
var msg = map__30687__$1;
var msg_name = cljs.core.get.call(null,map__30687__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30686,(1));
var pred__30688 = cljs.core._EQ_;
var expr__30689 = msg_name;
if(cljs.core.truth_(pred__30688.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30689))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30688.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30689))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30684,map__30684__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__,msg_hist,msg_names,msg){
return (function (state_30890){
var state_val_30891 = (state_30890[(1)]);
if((state_val_30891 === (7))){
var inst_30824 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30892_30933 = state_30890__$1;
(statearr_30892_30933[(2)] = inst_30824);

(statearr_30892_30933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (20))){
var inst_30852 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30852)){
var statearr_30893_30934 = state_30890__$1;
(statearr_30893_30934[(1)] = (22));

} else {
var statearr_30894_30935 = state_30890__$1;
(statearr_30894_30935[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (27))){
var inst_30864 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30865 = figwheel.client.heads_up.display_warning.call(null,inst_30864);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(30),inst_30865);
} else {
if((state_val_30891 === (1))){
var inst_30812 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30812)){
var statearr_30895_30936 = state_30890__$1;
(statearr_30895_30936[(1)] = (2));

} else {
var statearr_30896_30937 = state_30890__$1;
(statearr_30896_30937[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (24))){
var inst_30880 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30897_30938 = state_30890__$1;
(statearr_30897_30938[(2)] = inst_30880);

(statearr_30897_30938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (4))){
var inst_30888 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30890__$1,inst_30888);
} else {
if((state_val_30891 === (15))){
var inst_30840 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30841 = figwheel.client.format_messages.call(null,inst_30840);
var inst_30842 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30843 = figwheel.client.heads_up.display_error.call(null,inst_30841,inst_30842);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(18),inst_30843);
} else {
if((state_val_30891 === (21))){
var inst_30882 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30898_30939 = state_30890__$1;
(statearr_30898_30939[(2)] = inst_30882);

(statearr_30898_30939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (31))){
var inst_30871 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(34),inst_30871);
} else {
if((state_val_30891 === (32))){
var state_30890__$1 = state_30890;
var statearr_30899_30940 = state_30890__$1;
(statearr_30899_30940[(2)] = null);

(statearr_30899_30940[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (33))){
var inst_30876 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30900_30941 = state_30890__$1;
(statearr_30900_30941[(2)] = inst_30876);

(statearr_30900_30941[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (13))){
var inst_30830 = (state_30890[(2)]);
var inst_30831 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30832 = figwheel.client.format_messages.call(null,inst_30831);
var inst_30833 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30834 = figwheel.client.heads_up.display_error.call(null,inst_30832,inst_30833);
var state_30890__$1 = (function (){var statearr_30901 = state_30890;
(statearr_30901[(7)] = inst_30830);

return statearr_30901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(14),inst_30834);
} else {
if((state_val_30891 === (22))){
var inst_30854 = figwheel.client.heads_up.clear.call(null);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(25),inst_30854);
} else {
if((state_val_30891 === (29))){
var inst_30878 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30902_30942 = state_30890__$1;
(statearr_30902_30942[(2)] = inst_30878);

(statearr_30902_30942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (6))){
var inst_30820 = figwheel.client.heads_up.clear.call(null);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(9),inst_30820);
} else {
if((state_val_30891 === (28))){
var inst_30869 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30869)){
var statearr_30903_30943 = state_30890__$1;
(statearr_30903_30943[(1)] = (31));

} else {
var statearr_30904_30944 = state_30890__$1;
(statearr_30904_30944[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (25))){
var inst_30856 = (state_30890[(2)]);
var inst_30857 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30858 = figwheel.client.heads_up.display_warning.call(null,inst_30857);
var state_30890__$1 = (function (){var statearr_30905 = state_30890;
(statearr_30905[(8)] = inst_30856);

return statearr_30905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(26),inst_30858);
} else {
if((state_val_30891 === (34))){
var inst_30873 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30906_30945 = state_30890__$1;
(statearr_30906_30945[(2)] = inst_30873);

(statearr_30906_30945[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (17))){
var inst_30884 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30907_30946 = state_30890__$1;
(statearr_30907_30946[(2)] = inst_30884);

(statearr_30907_30946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (3))){
var inst_30826 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30826)){
var statearr_30908_30947 = state_30890__$1;
(statearr_30908_30947[(1)] = (10));

} else {
var statearr_30909_30948 = state_30890__$1;
(statearr_30909_30948[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (12))){
var inst_30886 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30910_30949 = state_30890__$1;
(statearr_30910_30949[(2)] = inst_30886);

(statearr_30910_30949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (2))){
var inst_30814 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30814)){
var statearr_30911_30950 = state_30890__$1;
(statearr_30911_30950[(1)] = (5));

} else {
var statearr_30912_30951 = state_30890__$1;
(statearr_30912_30951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (23))){
var inst_30862 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30862)){
var statearr_30913_30952 = state_30890__$1;
(statearr_30913_30952[(1)] = (27));

} else {
var statearr_30914_30953 = state_30890__$1;
(statearr_30914_30953[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (19))){
var inst_30849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30850 = figwheel.client.heads_up.append_message.call(null,inst_30849);
var state_30890__$1 = state_30890;
var statearr_30915_30954 = state_30890__$1;
(statearr_30915_30954[(2)] = inst_30850);

(statearr_30915_30954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (11))){
var inst_30838 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30838)){
var statearr_30916_30955 = state_30890__$1;
(statearr_30916_30955[(1)] = (15));

} else {
var statearr_30917_30956 = state_30890__$1;
(statearr_30917_30956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (9))){
var inst_30822 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30918_30957 = state_30890__$1;
(statearr_30918_30957[(2)] = inst_30822);

(statearr_30918_30957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (5))){
var inst_30816 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(8),inst_30816);
} else {
if((state_val_30891 === (14))){
var inst_30836 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30919_30958 = state_30890__$1;
(statearr_30919_30958[(2)] = inst_30836);

(statearr_30919_30958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (26))){
var inst_30860 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30920_30959 = state_30890__$1;
(statearr_30920_30959[(2)] = inst_30860);

(statearr_30920_30959[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (16))){
var inst_30847 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30890__$1 = state_30890;
if(cljs.core.truth_(inst_30847)){
var statearr_30921_30960 = state_30890__$1;
(statearr_30921_30960[(1)] = (19));

} else {
var statearr_30922_30961 = state_30890__$1;
(statearr_30922_30961[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (30))){
var inst_30867 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30923_30962 = state_30890__$1;
(statearr_30923_30962[(2)] = inst_30867);

(statearr_30923_30962[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (10))){
var inst_30828 = figwheel.client.heads_up.clear.call(null);
var state_30890__$1 = state_30890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30890__$1,(13),inst_30828);
} else {
if((state_val_30891 === (18))){
var inst_30845 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30924_30963 = state_30890__$1;
(statearr_30924_30963[(2)] = inst_30845);

(statearr_30924_30963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30891 === (8))){
var inst_30818 = (state_30890[(2)]);
var state_30890__$1 = state_30890;
var statearr_30925_30964 = state_30890__$1;
(statearr_30925_30964[(2)] = inst_30818);

(statearr_30925_30964[(1)] = (7));


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
});})(c__24334__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24272__auto__,c__24334__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto____0 = (function (){
var statearr_30929 = [null,null,null,null,null,null,null,null,null];
(statearr_30929[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto__);

(statearr_30929[(1)] = (1));

return statearr_30929;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto____1 = (function (state_30890){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_30890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e30930){if((e30930 instanceof Object)){
var ex__24276__auto__ = e30930;
var statearr_30931_30965 = state_30890;
(statearr_30931_30965[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30966 = state_30890;
state_30890 = G__30966;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto__ = function(state_30890){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto____1.call(this,state_30890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__,msg_hist,msg_names,msg))
})();
var state__24336__auto__ = (function (){var statearr_30932 = f__24335__auto__.call(null);
(statearr_30932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_30932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__,msg_hist,msg_names,msg))
);

return c__24334__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24334__auto___31029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___31029,ch){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___31029,ch){
return (function (state_31012){
var state_val_31013 = (state_31012[(1)]);
if((state_val_31013 === (1))){
var state_31012__$1 = state_31012;
var statearr_31014_31030 = state_31012__$1;
(statearr_31014_31030[(2)] = null);

(statearr_31014_31030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (2))){
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(4),ch);
} else {
if((state_val_31013 === (3))){
var inst_31010 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31012__$1,inst_31010);
} else {
if((state_val_31013 === (4))){
var inst_31000 = (state_31012[(7)]);
var inst_31000__$1 = (state_31012[(2)]);
var state_31012__$1 = (function (){var statearr_31015 = state_31012;
(statearr_31015[(7)] = inst_31000__$1);

return statearr_31015;
})();
if(cljs.core.truth_(inst_31000__$1)){
var statearr_31016_31031 = state_31012__$1;
(statearr_31016_31031[(1)] = (5));

} else {
var statearr_31017_31032 = state_31012__$1;
(statearr_31017_31032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (5))){
var inst_31000 = (state_31012[(7)]);
var inst_31002 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31000);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(8),inst_31002);
} else {
if((state_val_31013 === (6))){
var state_31012__$1 = state_31012;
var statearr_31018_31033 = state_31012__$1;
(statearr_31018_31033[(2)] = null);

(statearr_31018_31033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (7))){
var inst_31008 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31019_31034 = state_31012__$1;
(statearr_31019_31034[(2)] = inst_31008);

(statearr_31019_31034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (8))){
var inst_31004 = (state_31012[(2)]);
var state_31012__$1 = (function (){var statearr_31020 = state_31012;
(statearr_31020[(8)] = inst_31004);

return statearr_31020;
})();
var statearr_31021_31035 = state_31012__$1;
(statearr_31021_31035[(2)] = null);

(statearr_31021_31035[(1)] = (2));


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
});})(c__24334__auto___31029,ch))
;
return ((function (switch__24272__auto__,c__24334__auto___31029,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24273__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24273__auto____0 = (function (){
var statearr_31025 = [null,null,null,null,null,null,null,null,null];
(statearr_31025[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24273__auto__);

(statearr_31025[(1)] = (1));

return statearr_31025;
});
var figwheel$client$heads_up_plugin_$_state_machine__24273__auto____1 = (function (state_31012){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_31012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e31026){if((e31026 instanceof Object)){
var ex__24276__auto__ = e31026;
var statearr_31027_31036 = state_31012;
(statearr_31027_31036[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_31012;
state_31012 = G__31037;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24273__auto__ = function(state_31012){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24273__auto____1.call(this,state_31012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24273__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24273__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___31029,ch))
})();
var state__24336__auto__ = (function (){var statearr_31028 = f__24335__auto__.call(null);
(statearr_31028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___31029);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___31029,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_31058){
var state_val_31059 = (state_31058[(1)]);
if((state_val_31059 === (1))){
var inst_31053 = cljs.core.async.timeout.call(null,(3000));
var state_31058__$1 = state_31058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31058__$1,(2),inst_31053);
} else {
if((state_val_31059 === (2))){
var inst_31055 = (state_31058[(2)]);
var inst_31056 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31058__$1 = (function (){var statearr_31060 = state_31058;
(statearr_31060[(7)] = inst_31055);

return statearr_31060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31058__$1,inst_31056);
} else {
return null;
}
}
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24273__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24273__auto____0 = (function (){
var statearr_31064 = [null,null,null,null,null,null,null,null];
(statearr_31064[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24273__auto__);

(statearr_31064[(1)] = (1));

return statearr_31064;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24273__auto____1 = (function (state_31058){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_31058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e31065){if((e31065 instanceof Object)){
var ex__24276__auto__ = e31065;
var statearr_31066_31068 = state_31058;
(statearr_31066_31068[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31069 = state_31058;
state_31058 = G__31069;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24273__auto__ = function(state_31058){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24273__auto____1.call(this,state_31058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24273__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24273__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_31067 = f__24335__auto__.call(null);
(statearr_31067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_31067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31070){
var map__31076 = p__31070;
var map__31076__$1 = ((cljs.core.seq_QMARK_.call(null,map__31076))?cljs.core.apply.call(null,cljs.core.hash_map,map__31076):map__31076);
var ed = map__31076__$1;
var formatted_exception = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31076__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31077_31081 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31078_31082 = null;
var count__31079_31083 = (0);
var i__31080_31084 = (0);
while(true){
if((i__31080_31084 < count__31079_31083)){
var msg_31085 = cljs.core._nth.call(null,chunk__31078_31082,i__31080_31084);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31085);

var G__31086 = seq__31077_31081;
var G__31087 = chunk__31078_31082;
var G__31088 = count__31079_31083;
var G__31089 = (i__31080_31084 + (1));
seq__31077_31081 = G__31086;
chunk__31078_31082 = G__31087;
count__31079_31083 = G__31088;
i__31080_31084 = G__31089;
continue;
} else {
var temp__4425__auto___31090 = cljs.core.seq.call(null,seq__31077_31081);
if(temp__4425__auto___31090){
var seq__31077_31091__$1 = temp__4425__auto___31090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31077_31091__$1)){
var c__17412__auto___31092 = cljs.core.chunk_first.call(null,seq__31077_31091__$1);
var G__31093 = cljs.core.chunk_rest.call(null,seq__31077_31091__$1);
var G__31094 = c__17412__auto___31092;
var G__31095 = cljs.core.count.call(null,c__17412__auto___31092);
var G__31096 = (0);
seq__31077_31081 = G__31093;
chunk__31078_31082 = G__31094;
count__31079_31083 = G__31095;
i__31080_31084 = G__31096;
continue;
} else {
var msg_31097 = cljs.core.first.call(null,seq__31077_31091__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31097);

var G__31098 = cljs.core.next.call(null,seq__31077_31091__$1);
var G__31099 = null;
var G__31100 = (0);
var G__31101 = (0);
seq__31077_31081 = G__31098;
chunk__31078_31082 = G__31099;
count__31079_31083 = G__31100;
i__31080_31084 = G__31101;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31102){
var map__31104 = p__31102;
var map__31104__$1 = ((cljs.core.seq_QMARK_.call(null,map__31104))?cljs.core.apply.call(null,cljs.core.hash_map,map__31104):map__31104);
var w = map__31104__$1;
var message = cljs.core.get.call(null,map__31104__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16615__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16615__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16615__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31111 = cljs.core.seq.call(null,plugins);
var chunk__31112 = null;
var count__31113 = (0);
var i__31114 = (0);
while(true){
if((i__31114 < count__31113)){
var vec__31115 = cljs.core._nth.call(null,chunk__31112,i__31114);
var k = cljs.core.nth.call(null,vec__31115,(0),null);
var plugin = cljs.core.nth.call(null,vec__31115,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31117 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31111,chunk__31112,count__31113,i__31114,pl_31117,vec__31115,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31117.call(null,msg_hist);
});})(seq__31111,chunk__31112,count__31113,i__31114,pl_31117,vec__31115,k,plugin))
);
} else {
}

var G__31118 = seq__31111;
var G__31119 = chunk__31112;
var G__31120 = count__31113;
var G__31121 = (i__31114 + (1));
seq__31111 = G__31118;
chunk__31112 = G__31119;
count__31113 = G__31120;
i__31114 = G__31121;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31111);
if(temp__4425__auto__){
var seq__31111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31111__$1)){
var c__17412__auto__ = cljs.core.chunk_first.call(null,seq__31111__$1);
var G__31122 = cljs.core.chunk_rest.call(null,seq__31111__$1);
var G__31123 = c__17412__auto__;
var G__31124 = cljs.core.count.call(null,c__17412__auto__);
var G__31125 = (0);
seq__31111 = G__31122;
chunk__31112 = G__31123;
count__31113 = G__31124;
i__31114 = G__31125;
continue;
} else {
var vec__31116 = cljs.core.first.call(null,seq__31111__$1);
var k = cljs.core.nth.call(null,vec__31116,(0),null);
var plugin = cljs.core.nth.call(null,vec__31116,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31126 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31111,chunk__31112,count__31113,i__31114,pl_31126,vec__31116,k,plugin,seq__31111__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31126.call(null,msg_hist);
});})(seq__31111,chunk__31112,count__31113,i__31114,pl_31126,vec__31116,k,plugin,seq__31111__$1,temp__4425__auto__))
);
} else {
}

var G__31127 = cljs.core.next.call(null,seq__31111__$1);
var G__31128 = null;
var G__31129 = (0);
var G__31130 = (0);
seq__31111 = G__31127;
chunk__31112 = G__31128;
count__31113 = G__31129;
i__31114 = G__31130;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__31132 = arguments.length;
switch (G__31132) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
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
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17667__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17667__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31135){
var map__31136 = p__31135;
var map__31136__$1 = ((cljs.core.seq_QMARK_.call(null,map__31136))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);
var opts = map__31136__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31134){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31134));
});

//# sourceMappingURL=client.js.map