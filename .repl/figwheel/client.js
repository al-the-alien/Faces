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
var G__37673__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37674__i = 0, G__37674__a = new Array(arguments.length -  0);
while (G__37674__i < G__37674__a.length) {G__37674__a[G__37674__i] = arguments[G__37674__i + 0]; ++G__37674__i;}
  args = new cljs.core.IndexedSeq(G__37674__a,0);
} 
return G__37673__delegate.call(this,args);};
G__37673.cljs$lang$maxFixedArity = 0;
G__37673.cljs$lang$applyTo = (function (arglist__37675){
var args = cljs.core.seq(arglist__37675);
return G__37673__delegate(args);
});
G__37673.cljs$core$IFn$_invoke$arity$variadic = G__37673__delegate;
return G__37673;
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
figwheel.client.error_msg_format = (function error_msg_format(p__37676){
var map__37678 = p__37676;
var map__37678__$1 = ((cljs.core.seq_QMARK_.call(null,map__37678))?cljs.core.apply.call(null,cljs.core.hash_map,map__37678):map__37678);
var class$ = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__10941__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__10929__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__10929__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__10929__auto__;
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
var c__25458__auto___37807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___37807,ch){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___37807,ch){
return (function (state_37781){
var state_val_37782 = (state_37781[(1)]);
if((state_val_37782 === (7))){
var inst_37777 = (state_37781[(2)]);
var state_37781__$1 = state_37781;
var statearr_37783_37808 = state_37781__$1;
(statearr_37783_37808[(2)] = inst_37777);

(statearr_37783_37808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (1))){
var state_37781__$1 = state_37781;
var statearr_37784_37809 = state_37781__$1;
(statearr_37784_37809[(2)] = null);

(statearr_37784_37809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (4))){
var inst_37745 = (state_37781[(7)]);
var inst_37745__$1 = (state_37781[(2)]);
var state_37781__$1 = (function (){var statearr_37785 = state_37781;
(statearr_37785[(7)] = inst_37745__$1);

return statearr_37785;
})();
if(cljs.core.truth_(inst_37745__$1)){
var statearr_37786_37810 = state_37781__$1;
(statearr_37786_37810[(1)] = (5));

} else {
var statearr_37787_37811 = state_37781__$1;
(statearr_37787_37811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (13))){
var state_37781__$1 = state_37781;
var statearr_37788_37812 = state_37781__$1;
(statearr_37788_37812[(2)] = null);

(statearr_37788_37812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (6))){
var state_37781__$1 = state_37781;
var statearr_37789_37813 = state_37781__$1;
(statearr_37789_37813[(2)] = null);

(statearr_37789_37813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (3))){
var inst_37779 = (state_37781[(2)]);
var state_37781__$1 = state_37781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37781__$1,inst_37779);
} else {
if((state_val_37782 === (12))){
var inst_37752 = (state_37781[(8)]);
var inst_37765 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37752);
var inst_37766 = cljs.core.first.call(null,inst_37765);
var inst_37767 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37766);
var inst_37768 = console.warn("Figwheel: Not loading code with warnings - ",inst_37767);
var state_37781__$1 = state_37781;
var statearr_37790_37814 = state_37781__$1;
(statearr_37790_37814[(2)] = inst_37768);

(statearr_37790_37814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (2))){
var state_37781__$1 = state_37781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37781__$1,(4),ch);
} else {
if((state_val_37782 === (11))){
var inst_37761 = (state_37781[(2)]);
var state_37781__$1 = state_37781;
var statearr_37791_37815 = state_37781__$1;
(statearr_37791_37815[(2)] = inst_37761);

(statearr_37791_37815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (9))){
var inst_37751 = (state_37781[(9)]);
var inst_37763 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37751,opts);
var state_37781__$1 = state_37781;
if(inst_37763){
var statearr_37792_37816 = state_37781__$1;
(statearr_37792_37816[(1)] = (12));

} else {
var statearr_37793_37817 = state_37781__$1;
(statearr_37793_37817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (5))){
var inst_37745 = (state_37781[(7)]);
var inst_37751 = (state_37781[(9)]);
var inst_37747 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37748 = (new cljs.core.PersistentArrayMap(null,2,inst_37747,null));
var inst_37749 = (new cljs.core.PersistentHashSet(null,inst_37748,null));
var inst_37750 = figwheel.client.focus_msgs.call(null,inst_37749,inst_37745);
var inst_37751__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37750);
var inst_37752 = cljs.core.first.call(null,inst_37750);
var inst_37753 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37751__$1,opts);
var state_37781__$1 = (function (){var statearr_37794 = state_37781;
(statearr_37794[(8)] = inst_37752);

(statearr_37794[(9)] = inst_37751__$1);

return statearr_37794;
})();
if(cljs.core.truth_(inst_37753)){
var statearr_37795_37818 = state_37781__$1;
(statearr_37795_37818[(1)] = (8));

} else {
var statearr_37796_37819 = state_37781__$1;
(statearr_37796_37819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (14))){
var inst_37771 = (state_37781[(2)]);
var state_37781__$1 = state_37781;
var statearr_37797_37820 = state_37781__$1;
(statearr_37797_37820[(2)] = inst_37771);

(statearr_37797_37820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (10))){
var inst_37773 = (state_37781[(2)]);
var state_37781__$1 = (function (){var statearr_37798 = state_37781;
(statearr_37798[(10)] = inst_37773);

return statearr_37798;
})();
var statearr_37799_37821 = state_37781__$1;
(statearr_37799_37821[(2)] = null);

(statearr_37799_37821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37782 === (8))){
var inst_37752 = (state_37781[(8)]);
var inst_37755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37756 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37752);
var inst_37757 = cljs.core.async.timeout.call(null,(1000));
var inst_37758 = [inst_37756,inst_37757];
var inst_37759 = (new cljs.core.PersistentVector(null,2,(5),inst_37755,inst_37758,null));
var state_37781__$1 = state_37781;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37781__$1,(11),inst_37759);
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
});})(c__25458__auto___37807,ch))
;
return ((function (switch__25402__auto__,c__25458__auto___37807,ch){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_37803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37803[(0)] = state_machine__25403__auto__);

(statearr_37803[(1)] = (1));

return statearr_37803;
});
var state_machine__25403__auto____1 = (function (state_37781){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_37781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e37804){if((e37804 instanceof Object)){
var ex__25406__auto__ = e37804;
var statearr_37805_37822 = state_37781;
(statearr_37805_37822[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37823 = state_37781;
state_37781 = G__37823;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_37781){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_37781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___37807,ch))
})();
var state__25460__auto__ = (function (){var statearr_37806 = f__25459__auto__.call(null);
(statearr_37806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___37807);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___37807,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__37824_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37824_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_37829 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_37830 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_37829,_STAR_print_newline_STAR_37830){
return (function() { 
var G__37831__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__37831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37832__i = 0, G__37832__a = new Array(arguments.length -  0);
while (G__37832__i < G__37832__a.length) {G__37832__a[G__37832__i] = arguments[G__37832__i + 0]; ++G__37832__i;}
  args = new cljs.core.IndexedSeq(G__37832__a,0);
} 
return G__37831__delegate.call(this,args);};
G__37831.cljs$lang$maxFixedArity = 0;
G__37831.cljs$lang$applyTo = (function (arglist__37833){
var args = cljs.core.seq(arglist__37833);
return G__37831__delegate(args);
});
G__37831.cljs$core$IFn$_invoke$arity$variadic = G__37831__delegate;
return G__37831;
})()
;})(_STAR_print_fn_STAR_37829,_STAR_print_newline_STAR_37830))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37830;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37829;
}}catch (e37828){if((e37828 instanceof Error)){
var e = e37828;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e37828;
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
figwheel.client.repl_plugin = (function repl_plugin(p__37834){
var map__37839 = p__37834;
var map__37839__$1 = ((cljs.core.seq_QMARK_.call(null,map__37839))?cljs.core.apply.call(null,cljs.core.hash_map,map__37839):map__37839);
var opts = map__37839__$1;
var build_id = cljs.core.get.call(null,map__37839__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37839,map__37839__$1,opts,build_id){
return (function (p__37840){
var vec__37841 = p__37840;
var map__37842 = cljs.core.nth.call(null,vec__37841,(0),null);
var map__37842__$1 = ((cljs.core.seq_QMARK_.call(null,map__37842))?cljs.core.apply.call(null,cljs.core.hash_map,map__37842):map__37842);
var msg = map__37842__$1;
var msg_name = cljs.core.get.call(null,map__37842__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37841,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__37841,map__37842,map__37842__$1,msg,msg_name,_,map__37839,map__37839__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37841,map__37842,map__37842__$1,msg,msg_name,_,map__37839,map__37839__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37839,map__37839__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__37846){
var vec__37847 = p__37846;
var map__37848 = cljs.core.nth.call(null,vec__37847,(0),null);
var map__37848__$1 = ((cljs.core.seq_QMARK_.call(null,map__37848))?cljs.core.apply.call(null,cljs.core.hash_map,map__37848):map__37848);
var msg = map__37848__$1;
var msg_name = cljs.core.get.call(null,map__37848__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37847,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__37849){
var map__37857 = p__37849;
var map__37857__$1 = ((cljs.core.seq_QMARK_.call(null,map__37857))?cljs.core.apply.call(null,cljs.core.hash_map,map__37857):map__37857);
var on_compile_fail = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__37857,map__37857__$1,on_compile_fail,on_compile_warning){
return (function (p__37858){
var vec__37859 = p__37858;
var map__37860 = cljs.core.nth.call(null,vec__37859,(0),null);
var map__37860__$1 = ((cljs.core.seq_QMARK_.call(null,map__37860))?cljs.core.apply.call(null,cljs.core.hash_map,map__37860):map__37860);
var msg = map__37860__$1;
var msg_name = cljs.core.get.call(null,map__37860__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__37859,(1));
var pred__37861 = cljs.core._EQ_;
var expr__37862 = msg_name;
if(cljs.core.truth_(pred__37861.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37862))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37861.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37862))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37857,map__37857__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__,msg_hist,msg_names,msg){
return (function (state_38039){
var state_val_38040 = (state_38039[(1)]);
if((state_val_38040 === (7))){
var inst_37988 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38039__$1 = state_38039;
if(inst_37988){
var statearr_38041_38078 = state_38039__$1;
(statearr_38041_38078[(1)] = (11));

} else {
var statearr_38042_38079 = state_38039__$1;
(statearr_38042_38079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (20))){
var inst_38029 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38043_38080 = state_38039__$1;
(statearr_38043_38080[(2)] = inst_38029);

(statearr_38043_38080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (27))){
var inst_38020 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(30),inst_38020);
} else {
if((state_val_38040 === (1))){
var inst_37971 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38039__$1 = state_38039;
if(cljs.core.truth_(inst_37971)){
var statearr_38044_38081 = state_38039__$1;
(statearr_38044_38081[(1)] = (2));

} else {
var statearr_38045_38082 = state_38039__$1;
(statearr_38045_38082[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (24))){
var inst_38018 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38039__$1 = state_38039;
if(inst_38018){
var statearr_38046_38083 = state_38039__$1;
(statearr_38046_38083[(1)] = (27));

} else {
var statearr_38047_38084 = state_38039__$1;
(statearr_38047_38084[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (4))){
var inst_38037 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38039__$1,inst_38037);
} else {
if((state_val_38040 === (15))){
var inst_37998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37999 = figwheel.client.heads_up.append_message.call(null,inst_37998);
var state_38039__$1 = state_38039;
var statearr_38048_38085 = state_38039__$1;
(statearr_38048_38085[(2)] = inst_37999);

(statearr_38048_38085[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (21))){
var inst_38005 = (state_38039[(2)]);
var inst_38006 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38007 = figwheel.client.heads_up.display_warning.call(null,inst_38006);
var state_38039__$1 = (function (){var statearr_38049 = state_38039;
(statearr_38049[(7)] = inst_38005);

return statearr_38049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(22),inst_38007);
} else {
if((state_val_38040 === (13))){
var inst_38033 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38050_38086 = state_38039__$1;
(statearr_38050_38086[(2)] = inst_38033);

(statearr_38050_38086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (22))){
var inst_38009 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38051_38087 = state_38039__$1;
(statearr_38051_38087[(2)] = inst_38009);

(statearr_38051_38087[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (29))){
var inst_38025 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38052_38088 = state_38039__$1;
(statearr_38052_38088[(2)] = inst_38025);

(statearr_38052_38088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (6))){
var inst_37979 = figwheel.client.heads_up.clear.call(null);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(9),inst_37979);
} else {
if((state_val_38040 === (28))){
var state_38039__$1 = state_38039;
var statearr_38053_38089 = state_38039__$1;
(statearr_38053_38089[(2)] = null);

(statearr_38053_38089[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (25))){
var inst_38027 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38054_38090 = state_38039__$1;
(statearr_38054_38090[(2)] = inst_38027);

(statearr_38054_38090[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (17))){
var inst_38031 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38055_38091 = state_38039__$1;
(statearr_38055_38091[(2)] = inst_38031);

(statearr_38055_38091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (3))){
var inst_37977 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38039__$1 = state_38039;
if(inst_37977){
var statearr_38056_38092 = state_38039__$1;
(statearr_38056_38092[(1)] = (6));

} else {
var statearr_38057_38093 = state_38039__$1;
(statearr_38057_38093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (12))){
var inst_37996 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38039__$1 = state_38039;
if(inst_37996){
var statearr_38058_38094 = state_38039__$1;
(statearr_38058_38094[(1)] = (15));

} else {
var statearr_38059_38095 = state_38039__$1;
(statearr_38059_38095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (2))){
var inst_37973 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(5),inst_37973);
} else {
if((state_val_38040 === (23))){
var inst_38013 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38014 = figwheel.client.heads_up.display_warning.call(null,inst_38013);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(26),inst_38014);
} else {
if((state_val_38040 === (19))){
var inst_38011 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38039__$1 = state_38039;
if(inst_38011){
var statearr_38060_38096 = state_38039__$1;
(statearr_38060_38096[(1)] = (23));

} else {
var statearr_38061_38097 = state_38039__$1;
(statearr_38061_38097[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (11))){
var inst_37990 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37991 = figwheel.client.format_messages.call(null,inst_37990);
var inst_37992 = figwheel.client.heads_up.display_error.call(null,inst_37991);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(14),inst_37992);
} else {
if((state_val_38040 === (9))){
var inst_37981 = (state_38039[(2)]);
var inst_37982 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37983 = figwheel.client.format_messages.call(null,inst_37982);
var inst_37984 = figwheel.client.heads_up.display_error.call(null,inst_37983);
var state_38039__$1 = (function (){var statearr_38062 = state_38039;
(statearr_38062[(8)] = inst_37981);

return statearr_38062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(10),inst_37984);
} else {
if((state_val_38040 === (5))){
var inst_37975 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38063_38098 = state_38039__$1;
(statearr_38063_38098[(2)] = inst_37975);

(statearr_38063_38098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (14))){
var inst_37994 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38064_38099 = state_38039__$1;
(statearr_38064_38099[(2)] = inst_37994);

(statearr_38064_38099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (26))){
var inst_38016 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38065_38100 = state_38039__$1;
(statearr_38065_38100[(2)] = inst_38016);

(statearr_38065_38100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (16))){
var inst_38001 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38039__$1 = state_38039;
if(inst_38001){
var statearr_38066_38101 = state_38039__$1;
(statearr_38066_38101[(1)] = (18));

} else {
var statearr_38067_38102 = state_38039__$1;
(statearr_38067_38102[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (30))){
var inst_38022 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38068_38103 = state_38039__$1;
(statearr_38068_38103[(2)] = inst_38022);

(statearr_38068_38103[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (10))){
var inst_37986 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38069_38104 = state_38039__$1;
(statearr_38069_38104[(2)] = inst_37986);

(statearr_38069_38104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (18))){
var inst_38003 = figwheel.client.heads_up.clear.call(null);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(21),inst_38003);
} else {
if((state_val_38040 === (8))){
var inst_38035 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38070_38105 = state_38039__$1;
(statearr_38070_38105[(2)] = inst_38035);

(statearr_38070_38105[(1)] = (4));


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
});})(c__25458__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25402__auto__,c__25458__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_38074 = [null,null,null,null,null,null,null,null,null];
(statearr_38074[(0)] = state_machine__25403__auto__);

(statearr_38074[(1)] = (1));

return statearr_38074;
});
var state_machine__25403__auto____1 = (function (state_38039){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38075){if((e38075 instanceof Object)){
var ex__25406__auto__ = e38075;
var statearr_38076_38106 = state_38039;
(statearr_38076_38106[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38107 = state_38039;
state_38039 = G__38107;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38039){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__,msg_hist,msg_names,msg))
})();
var state__25460__auto__ = (function (){var statearr_38077 = f__25459__auto__.call(null);
(statearr_38077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_38077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__,msg_hist,msg_names,msg))
);

return c__25458__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25458__auto___38170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___38170,ch){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___38170,ch){
return (function (state_38153){
var state_val_38154 = (state_38153[(1)]);
if((state_val_38154 === (8))){
var inst_38145 = (state_38153[(2)]);
var state_38153__$1 = (function (){var statearr_38155 = state_38153;
(statearr_38155[(7)] = inst_38145);

return statearr_38155;
})();
var statearr_38156_38171 = state_38153__$1;
(statearr_38156_38171[(2)] = null);

(statearr_38156_38171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38154 === (7))){
var inst_38149 = (state_38153[(2)]);
var state_38153__$1 = state_38153;
var statearr_38157_38172 = state_38153__$1;
(statearr_38157_38172[(2)] = inst_38149);

(statearr_38157_38172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38154 === (6))){
var state_38153__$1 = state_38153;
var statearr_38158_38173 = state_38153__$1;
(statearr_38158_38173[(2)] = null);

(statearr_38158_38173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38154 === (5))){
var inst_38141 = (state_38153[(8)]);
var inst_38143 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38141);
var state_38153__$1 = state_38153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38153__$1,(8),inst_38143);
} else {
if((state_val_38154 === (4))){
var inst_38141 = (state_38153[(8)]);
var inst_38141__$1 = (state_38153[(2)]);
var state_38153__$1 = (function (){var statearr_38159 = state_38153;
(statearr_38159[(8)] = inst_38141__$1);

return statearr_38159;
})();
if(cljs.core.truth_(inst_38141__$1)){
var statearr_38160_38174 = state_38153__$1;
(statearr_38160_38174[(1)] = (5));

} else {
var statearr_38161_38175 = state_38153__$1;
(statearr_38161_38175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38154 === (3))){
var inst_38151 = (state_38153[(2)]);
var state_38153__$1 = state_38153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38153__$1,inst_38151);
} else {
if((state_val_38154 === (2))){
var state_38153__$1 = state_38153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38153__$1,(4),ch);
} else {
if((state_val_38154 === (1))){
var state_38153__$1 = state_38153;
var statearr_38162_38176 = state_38153__$1;
(statearr_38162_38176[(2)] = null);

(statearr_38162_38176[(1)] = (2));


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
});})(c__25458__auto___38170,ch))
;
return ((function (switch__25402__auto__,c__25458__auto___38170,ch){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_38166 = [null,null,null,null,null,null,null,null,null];
(statearr_38166[(0)] = state_machine__25403__auto__);

(statearr_38166[(1)] = (1));

return statearr_38166;
});
var state_machine__25403__auto____1 = (function (state_38153){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38167){if((e38167 instanceof Object)){
var ex__25406__auto__ = e38167;
var statearr_38168_38177 = state_38153;
(statearr_38168_38177[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38178 = state_38153;
state_38153 = G__38178;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38153){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___38170,ch))
})();
var state__25460__auto__ = (function (){var statearr_38169 = f__25459__auto__.call(null);
(statearr_38169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___38170);

return statearr_38169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___38170,ch))
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
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_38199){
var state_val_38200 = (state_38199[(1)]);
if((state_val_38200 === (2))){
var inst_38196 = (state_38199[(2)]);
var inst_38197 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38199__$1 = (function (){var statearr_38201 = state_38199;
(statearr_38201[(7)] = inst_38196);

return statearr_38201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38199__$1,inst_38197);
} else {
if((state_val_38200 === (1))){
var inst_38194 = cljs.core.async.timeout.call(null,(3000));
var state_38199__$1 = state_38199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38199__$1,(2),inst_38194);
} else {
return null;
}
}
});})(c__25458__auto__))
;
return ((function (switch__25402__auto__,c__25458__auto__){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_38205 = [null,null,null,null,null,null,null,null];
(statearr_38205[(0)] = state_machine__25403__auto__);

(statearr_38205[(1)] = (1));

return statearr_38205;
});
var state_machine__25403__auto____1 = (function (state_38199){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38206){if((e38206 instanceof Object)){
var ex__25406__auto__ = e38206;
var statearr_38207_38209 = state_38199;
(statearr_38207_38209[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_38199;
state_38199 = G__38210;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38199){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_38208 = f__25459__auto__.call(null);
(statearr_38208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_38208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__10929__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__10929__auto__)){
return ("CustomEvent" in window);
} else {
return and__10929__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj38214 = {"detail":url};
return obj38214;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__38215){
var map__38221 = p__38215;
var map__38221__$1 = ((cljs.core.seq_QMARK_.call(null,map__38221))?cljs.core.apply.call(null,cljs.core.hash_map,map__38221):map__38221);
var ed = map__38221__$1;
var exception_data = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__38221__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38222_38226 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38223_38227 = null;
var count__38224_38228 = (0);
var i__38225_38229 = (0);
while(true){
if((i__38225_38229 < count__38224_38228)){
var msg_38230 = cljs.core._nth.call(null,chunk__38223_38227,i__38225_38229);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38230);

var G__38231 = seq__38222_38226;
var G__38232 = chunk__38223_38227;
var G__38233 = count__38224_38228;
var G__38234 = (i__38225_38229 + (1));
seq__38222_38226 = G__38231;
chunk__38223_38227 = G__38232;
count__38224_38228 = G__38233;
i__38225_38229 = G__38234;
continue;
} else {
var temp__4406__auto___38235 = cljs.core.seq.call(null,seq__38222_38226);
if(temp__4406__auto___38235){
var seq__38222_38236__$1 = temp__4406__auto___38235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38222_38236__$1)){
var c__11728__auto___38237 = cljs.core.chunk_first.call(null,seq__38222_38236__$1);
var G__38238 = cljs.core.chunk_rest.call(null,seq__38222_38236__$1);
var G__38239 = c__11728__auto___38237;
var G__38240 = cljs.core.count.call(null,c__11728__auto___38237);
var G__38241 = (0);
seq__38222_38226 = G__38238;
chunk__38223_38227 = G__38239;
count__38224_38228 = G__38240;
i__38225_38229 = G__38241;
continue;
} else {
var msg_38242 = cljs.core.first.call(null,seq__38222_38236__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38242);

var G__38243 = cljs.core.next.call(null,seq__38222_38236__$1);
var G__38244 = null;
var G__38245 = (0);
var G__38246 = (0);
seq__38222_38226 = G__38243;
chunk__38223_38227 = G__38244;
count__38224_38228 = G__38245;
i__38225_38229 = G__38246;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__38247){
var map__38249 = p__38247;
var map__38249__$1 = ((cljs.core.seq_QMARK_.call(null,map__38249))?cljs.core.apply.call(null,cljs.core.hash_map,map__38249):map__38249);
var w = map__38249__$1;
var message = cljs.core.get.call(null,map__38249__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__10929__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__10929__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__10929__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__38256 = cljs.core.seq.call(null,plugins);
var chunk__38257 = null;
var count__38258 = (0);
var i__38259 = (0);
while(true){
if((i__38259 < count__38258)){
var vec__38260 = cljs.core._nth.call(null,chunk__38257,i__38259);
var k = cljs.core.nth.call(null,vec__38260,(0),null);
var plugin = cljs.core.nth.call(null,vec__38260,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38262 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38256,chunk__38257,count__38258,i__38259,pl_38262,vec__38260,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38262.call(null,msg_hist);
});})(seq__38256,chunk__38257,count__38258,i__38259,pl_38262,vec__38260,k,plugin))
);
} else {
}

var G__38263 = seq__38256;
var G__38264 = chunk__38257;
var G__38265 = count__38258;
var G__38266 = (i__38259 + (1));
seq__38256 = G__38263;
chunk__38257 = G__38264;
count__38258 = G__38265;
i__38259 = G__38266;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__38256);
if(temp__4406__auto__){
var seq__38256__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38256__$1)){
var c__11728__auto__ = cljs.core.chunk_first.call(null,seq__38256__$1);
var G__38267 = cljs.core.chunk_rest.call(null,seq__38256__$1);
var G__38268 = c__11728__auto__;
var G__38269 = cljs.core.count.call(null,c__11728__auto__);
var G__38270 = (0);
seq__38256 = G__38267;
chunk__38257 = G__38268;
count__38258 = G__38269;
i__38259 = G__38270;
continue;
} else {
var vec__38261 = cljs.core.first.call(null,seq__38256__$1);
var k = cljs.core.nth.call(null,vec__38261,(0),null);
var plugin = cljs.core.nth.call(null,vec__38261,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38271 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38256,chunk__38257,count__38258,i__38259,pl_38271,vec__38261,k,plugin,seq__38256__$1,temp__4406__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38271.call(null,msg_hist);
});})(seq__38256,chunk__38257,count__38258,i__38259,pl_38271,vec__38261,k,plugin,seq__38256__$1,temp__4406__auto__))
);
} else {
}

var G__38272 = cljs.core.next.call(null,seq__38256__$1);
var G__38273 = null;
var G__38274 = (0);
var G__38275 = (0);
seq__38256 = G__38272;
chunk__38257 = G__38273;
count__38258 = G__38274;
i__38259 = G__38275;
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
var watch_and_reload__delegate = function (p__38276){
var map__38278 = p__38276;
var map__38278__$1 = ((cljs.core.seq_QMARK_.call(null,map__38278))?cljs.core.apply.call(null,cljs.core.hash_map,map__38278):map__38278);
var opts = map__38278__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__38276 = null;
if (arguments.length > 0) {
var G__38279__i = 0, G__38279__a = new Array(arguments.length -  0);
while (G__38279__i < G__38279__a.length) {G__38279__a[G__38279__i] = arguments[G__38279__i + 0]; ++G__38279__i;}
  p__38276 = new cljs.core.IndexedSeq(G__38279__a,0);
} 
return watch_and_reload__delegate.call(this,p__38276);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__38280){
var p__38276 = cljs.core.seq(arglist__38280);
return watch_and_reload__delegate(p__38276);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
