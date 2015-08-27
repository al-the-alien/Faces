// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17667__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17667__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31263_31271 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31264_31272 = null;
var count__31265_31273 = (0);
var i__31266_31274 = (0);
while(true){
if((i__31266_31274 < count__31265_31273)){
var k_31275 = cljs.core._nth.call(null,chunk__31264_31272,i__31266_31274);
e.setAttribute(cljs.core.name.call(null,k_31275),cljs.core.get.call(null,attrs,k_31275));

var G__31276 = seq__31263_31271;
var G__31277 = chunk__31264_31272;
var G__31278 = count__31265_31273;
var G__31279 = (i__31266_31274 + (1));
seq__31263_31271 = G__31276;
chunk__31264_31272 = G__31277;
count__31265_31273 = G__31278;
i__31266_31274 = G__31279;
continue;
} else {
var temp__4425__auto___31280 = cljs.core.seq.call(null,seq__31263_31271);
if(temp__4425__auto___31280){
var seq__31263_31281__$1 = temp__4425__auto___31280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31263_31281__$1)){
var c__17412__auto___31282 = cljs.core.chunk_first.call(null,seq__31263_31281__$1);
var G__31283 = cljs.core.chunk_rest.call(null,seq__31263_31281__$1);
var G__31284 = c__17412__auto___31282;
var G__31285 = cljs.core.count.call(null,c__17412__auto___31282);
var G__31286 = (0);
seq__31263_31271 = G__31283;
chunk__31264_31272 = G__31284;
count__31265_31273 = G__31285;
i__31266_31274 = G__31286;
continue;
} else {
var k_31287 = cljs.core.first.call(null,seq__31263_31281__$1);
e.setAttribute(cljs.core.name.call(null,k_31287),cljs.core.get.call(null,attrs,k_31287));

var G__31288 = cljs.core.next.call(null,seq__31263_31281__$1);
var G__31289 = null;
var G__31290 = (0);
var G__31291 = (0);
seq__31263_31271 = G__31288;
chunk__31264_31272 = G__31289;
count__31265_31273 = G__31290;
i__31266_31274 = G__31291;
continue;
}
} else {
}
}
break;
}

var seq__31267_31292 = cljs.core.seq.call(null,children);
var chunk__31268_31293 = null;
var count__31269_31294 = (0);
var i__31270_31295 = (0);
while(true){
if((i__31270_31295 < count__31269_31294)){
var ch_31296 = cljs.core._nth.call(null,chunk__31268_31293,i__31270_31295);
e.appendChild(ch_31296);

var G__31297 = seq__31267_31292;
var G__31298 = chunk__31268_31293;
var G__31299 = count__31269_31294;
var G__31300 = (i__31270_31295 + (1));
seq__31267_31292 = G__31297;
chunk__31268_31293 = G__31298;
count__31269_31294 = G__31299;
i__31270_31295 = G__31300;
continue;
} else {
var temp__4425__auto___31301 = cljs.core.seq.call(null,seq__31267_31292);
if(temp__4425__auto___31301){
var seq__31267_31302__$1 = temp__4425__auto___31301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31267_31302__$1)){
var c__17412__auto___31303 = cljs.core.chunk_first.call(null,seq__31267_31302__$1);
var G__31304 = cljs.core.chunk_rest.call(null,seq__31267_31302__$1);
var G__31305 = c__17412__auto___31303;
var G__31306 = cljs.core.count.call(null,c__17412__auto___31303);
var G__31307 = (0);
seq__31267_31292 = G__31304;
chunk__31268_31293 = G__31305;
count__31269_31294 = G__31306;
i__31270_31295 = G__31307;
continue;
} else {
var ch_31308 = cljs.core.first.call(null,seq__31267_31302__$1);
e.appendChild(ch_31308);

var G__31309 = cljs.core.next.call(null,seq__31267_31302__$1);
var G__31310 = null;
var G__31311 = (0);
var G__31312 = (0);
seq__31267_31292 = G__31309;
chunk__31268_31293 = G__31310;
count__31269_31294 = G__31311;
i__31270_31295 = G__31312;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31260){
var G__31261 = cljs.core.first.call(null,seq31260);
var seq31260__$1 = cljs.core.next.call(null,seq31260);
var G__31262 = cljs.core.first.call(null,seq31260__$1);
var seq31260__$2 = cljs.core.next.call(null,seq31260__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31261,G__31262,seq31260__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17522__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17523__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17526__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17522__auto__,prefer_table__17523__auto__,method_cache__17524__auto__,cached_hierarchy__17525__auto__,hierarchy__17526__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17522__auto__,prefer_table__17523__auto__,method_cache__17524__auto__,cached_hierarchy__17525__auto__,hierarchy__17526__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17526__auto__,method_table__17522__auto__,prefer_table__17523__auto__,method_cache__17524__auto__,cached_hierarchy__17525__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_31313 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31313.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31313.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31313.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31313);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31314,st_map){
var map__31318 = p__31314;
var map__31318__$1 = ((cljs.core.seq_QMARK_.call(null,map__31318))?cljs.core.apply.call(null,cljs.core.hash_map,map__31318):map__31318);
var container_el = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31318,map__31318__$1,container_el){
return (function (p__31319){
var vec__31320 = p__31319;
var k = cljs.core.nth.call(null,vec__31320,(0),null);
var v = cljs.core.nth.call(null,vec__31320,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31318,map__31318__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31321,dom_str){
var map__31323 = p__31321;
var map__31323__$1 = ((cljs.core.seq_QMARK_.call(null,map__31323))?cljs.core.apply.call(null,cljs.core.hash_map,map__31323):map__31323);
var c = map__31323__$1;
var content_area_el = cljs.core.get.call(null,map__31323__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31324){
var map__31326 = p__31324;
var map__31326__$1 = ((cljs.core.seq_QMARK_.call(null,map__31326))?cljs.core.apply.call(null,cljs.core.hash_map,map__31326):map__31326);
var content_area_el = cljs.core.get.call(null,map__31326__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_31368){
var state_val_31369 = (state_31368[(1)]);
if((state_val_31369 === (1))){
var inst_31353 = (state_31368[(7)]);
var inst_31353__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31354 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31355 = ["10px","10px","100%","68px","1.0"];
var inst_31356 = cljs.core.PersistentHashMap.fromArrays(inst_31354,inst_31355);
var inst_31357 = cljs.core.merge.call(null,inst_31356,style);
var inst_31358 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31353__$1,inst_31357);
var inst_31359 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31353__$1,msg);
var inst_31360 = cljs.core.async.timeout.call(null,(300));
var state_31368__$1 = (function (){var statearr_31370 = state_31368;
(statearr_31370[(7)] = inst_31353__$1);

(statearr_31370[(8)] = inst_31359);

(statearr_31370[(9)] = inst_31358);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31368__$1,(2),inst_31360);
} else {
if((state_val_31369 === (2))){
var inst_31353 = (state_31368[(7)]);
var inst_31362 = (state_31368[(2)]);
var inst_31363 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31364 = ["auto"];
var inst_31365 = cljs.core.PersistentHashMap.fromArrays(inst_31363,inst_31364);
var inst_31366 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31353,inst_31365);
var state_31368__$1 = (function (){var statearr_31371 = state_31368;
(statearr_31371[(10)] = inst_31362);

return statearr_31371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31368__$1,inst_31366);
} else {
return null;
}
}
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto____0 = (function (){
var statearr_31375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31375[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto__);

(statearr_31375[(1)] = (1));

return statearr_31375;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto____1 = (function (state_31368){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_31368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e31376){if((e31376 instanceof Object)){
var ex__24276__auto__ = e31376;
var statearr_31377_31379 = state_31368;
(statearr_31377_31379[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31380 = state_31368;
state_31368 = G__31380;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto__ = function(state_31368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto____1.call(this,state_31368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_31378 = f__24335__auto__.call(null);
(statearr_31378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_31378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31382 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__31382,(0),null);
var ln = cljs.core.nth.call(null,vec__31382,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__31385 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__31385,(0),null);
var file_line = cljs.core.nth.call(null,vec__31385,(1),null);
var file_column = cljs.core.nth.call(null,vec__31385,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31385,file_name,file_line,file_column){
return (function (p1__31383_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__31383_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__31385,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16627__auto__ = file_line;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
var and__16615__auto__ = cause;
if(cljs.core.truth_(and__16615__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16615__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__31387 = figwheel.client.heads_up.ensure_container.call(null);
var map__31387__$1 = ((cljs.core.seq_QMARK_.call(null,map__31387))?cljs.core.apply.call(null,cljs.core.hash_map,map__31387):map__31387);
var content_area_el = cljs.core.get.call(null,map__31387__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (1))){
var inst_31417 = (state_31434[(7)]);
var inst_31417__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31418 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31419 = ["0.0"];
var inst_31420 = cljs.core.PersistentHashMap.fromArrays(inst_31418,inst_31419);
var inst_31421 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31417__$1,inst_31420);
var inst_31422 = cljs.core.async.timeout.call(null,(300));
var state_31434__$1 = (function (){var statearr_31436 = state_31434;
(statearr_31436[(7)] = inst_31417__$1);

(statearr_31436[(8)] = inst_31421);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(2),inst_31422);
} else {
if((state_val_31435 === (2))){
var inst_31417 = (state_31434[(7)]);
var inst_31424 = (state_31434[(2)]);
var inst_31425 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31426 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31427 = cljs.core.PersistentHashMap.fromArrays(inst_31425,inst_31426);
var inst_31428 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31417,inst_31427);
var inst_31429 = cljs.core.async.timeout.call(null,(200));
var state_31434__$1 = (function (){var statearr_31437 = state_31434;
(statearr_31437[(9)] = inst_31424);

(statearr_31437[(10)] = inst_31428);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31434__$1,(3),inst_31429);
} else {
if((state_val_31435 === (3))){
var inst_31417 = (state_31434[(7)]);
var inst_31431 = (state_31434[(2)]);
var inst_31432 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31417,"");
var state_31434__$1 = (function (){var statearr_31438 = state_31434;
(statearr_31438[(11)] = inst_31431);

return statearr_31438;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31434__$1,inst_31432);
} else {
return null;
}
}
}
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24273__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24273__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = figwheel$client$heads_up$clear_$_state_machine__24273__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var figwheel$client$heads_up$clear_$_state_machine__24273__auto____1 = (function (state_31434){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_31434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e31443){if((e31443 instanceof Object)){
var ex__24276__auto__ = e31443;
var statearr_31444_31446 = state_31434;
(statearr_31444_31446[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31447 = state_31434;
state_31434 = G__31447;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24273__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24273__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24273__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24273__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_31445 = f__24335__auto__.call(null);
(statearr_31445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_31479){
var state_val_31480 = (state_31479[(1)]);
if((state_val_31480 === (1))){
var inst_31469 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31479__$1,(2),inst_31469);
} else {
if((state_val_31480 === (2))){
var inst_31471 = (state_31479[(2)]);
var inst_31472 = cljs.core.async.timeout.call(null,(400));
var state_31479__$1 = (function (){var statearr_31481 = state_31479;
(statearr_31481[(7)] = inst_31471);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31479__$1,(3),inst_31472);
} else {
if((state_val_31480 === (3))){
var inst_31474 = (state_31479[(2)]);
var inst_31475 = figwheel.client.heads_up.clear.call(null);
var state_31479__$1 = (function (){var statearr_31482 = state_31479;
(statearr_31482[(8)] = inst_31474);

return statearr_31482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31479__$1,(4),inst_31475);
} else {
if((state_val_31480 === (4))){
var inst_31477 = (state_31479[(2)]);
var state_31479__$1 = state_31479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31479__$1,inst_31477);
} else {
return null;
}
}
}
}
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto____0 = (function (){
var statearr_31486 = [null,null,null,null,null,null,null,null,null];
(statearr_31486[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto__);

(statearr_31486[(1)] = (1));

return statearr_31486;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto____1 = (function (state_31479){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_31479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e31487){if((e31487 instanceof Object)){
var ex__24276__auto__ = e31487;
var statearr_31488_31490 = state_31479;
(statearr_31488_31490[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31491 = state_31479;
state_31479 = G__31491;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto__ = function(state_31479){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto____1.call(this,state_31479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_31489 = f__24335__auto__.call(null);
(statearr_31489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map