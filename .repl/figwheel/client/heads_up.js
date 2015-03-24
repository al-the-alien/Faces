// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38298_38306 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38299_38307 = null;
var count__38300_38308 = (0);
var i__38301_38309 = (0);
while(true){
if((i__38301_38309 < count__38300_38308)){
var k_38310 = cljs.core._nth.call(null,chunk__38299_38307,i__38301_38309);
e.setAttribute(cljs.core.name.call(null,k_38310),cljs.core.get.call(null,attrs,k_38310));

var G__38311 = seq__38298_38306;
var G__38312 = chunk__38299_38307;
var G__38313 = count__38300_38308;
var G__38314 = (i__38301_38309 + (1));
seq__38298_38306 = G__38311;
chunk__38299_38307 = G__38312;
count__38300_38308 = G__38313;
i__38301_38309 = G__38314;
continue;
} else {
var temp__4406__auto___38315 = cljs.core.seq.call(null,seq__38298_38306);
if(temp__4406__auto___38315){
var seq__38298_38316__$1 = temp__4406__auto___38315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38298_38316__$1)){
var c__11728__auto___38317 = cljs.core.chunk_first.call(null,seq__38298_38316__$1);
var G__38318 = cljs.core.chunk_rest.call(null,seq__38298_38316__$1);
var G__38319 = c__11728__auto___38317;
var G__38320 = cljs.core.count.call(null,c__11728__auto___38317);
var G__38321 = (0);
seq__38298_38306 = G__38318;
chunk__38299_38307 = G__38319;
count__38300_38308 = G__38320;
i__38301_38309 = G__38321;
continue;
} else {
var k_38322 = cljs.core.first.call(null,seq__38298_38316__$1);
e.setAttribute(cljs.core.name.call(null,k_38322),cljs.core.get.call(null,attrs,k_38322));

var G__38323 = cljs.core.next.call(null,seq__38298_38316__$1);
var G__38324 = null;
var G__38325 = (0);
var G__38326 = (0);
seq__38298_38306 = G__38323;
chunk__38299_38307 = G__38324;
count__38300_38308 = G__38325;
i__38301_38309 = G__38326;
continue;
}
} else {
}
}
break;
}

var seq__38302_38327 = cljs.core.seq.call(null,children);
var chunk__38303_38328 = null;
var count__38304_38329 = (0);
var i__38305_38330 = (0);
while(true){
if((i__38305_38330 < count__38304_38329)){
var ch_38331 = cljs.core._nth.call(null,chunk__38303_38328,i__38305_38330);
e.appendChild(ch_38331);

var G__38332 = seq__38302_38327;
var G__38333 = chunk__38303_38328;
var G__38334 = count__38304_38329;
var G__38335 = (i__38305_38330 + (1));
seq__38302_38327 = G__38332;
chunk__38303_38328 = G__38333;
count__38304_38329 = G__38334;
i__38305_38330 = G__38335;
continue;
} else {
var temp__4406__auto___38336 = cljs.core.seq.call(null,seq__38302_38327);
if(temp__4406__auto___38336){
var seq__38302_38337__$1 = temp__4406__auto___38336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38302_38337__$1)){
var c__11728__auto___38338 = cljs.core.chunk_first.call(null,seq__38302_38337__$1);
var G__38339 = cljs.core.chunk_rest.call(null,seq__38302_38337__$1);
var G__38340 = c__11728__auto___38338;
var G__38341 = cljs.core.count.call(null,c__11728__auto___38338);
var G__38342 = (0);
seq__38302_38327 = G__38339;
chunk__38303_38328 = G__38340;
count__38304_38329 = G__38341;
i__38305_38330 = G__38342;
continue;
} else {
var ch_38343 = cljs.core.first.call(null,seq__38302_38337__$1);
e.appendChild(ch_38343);

var G__38344 = cljs.core.next.call(null,seq__38302_38337__$1);
var G__38345 = null;
var G__38346 = (0);
var G__38347 = (0);
seq__38302_38327 = G__38344;
chunk__38303_38328 = G__38345;
count__38304_38329 = G__38346;
i__38305_38330 = G__38347;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__38348__i = 0, G__38348__a = new Array(arguments.length -  2);
while (G__38348__i < G__38348__a.length) {G__38348__a[G__38348__i] = arguments[G__38348__i + 2]; ++G__38348__i;}
  children = new cljs.core.IndexedSeq(G__38348__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__38349){
var t = cljs.core.first(arglist__38349);
arglist__38349 = cljs.core.next(arglist__38349);
var attrs = cljs.core.first(arglist__38349);
var children = cljs.core.rest(arglist__38349);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__11838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__11838__auto__,prefer_table__11839__auto__,method_cache__11840__auto__,cached_hierarchy__11841__auto__,hierarchy__11842__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__11838__auto__,prefer_table__11839__auto__,method_cache__11840__auto__,cached_hierarchy__11841__auto__,hierarchy__11842__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11842__auto__,method_table__11838__auto__,prefer_table__11839__auto__,method_cache__11840__auto__,cached_hierarchy__11841__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__38350,st_map){
var map__38354 = p__38350;
var map__38354__$1 = ((cljs.core.seq_QMARK_.call(null,map__38354))?cljs.core.apply.call(null,cljs.core.hash_map,map__38354):map__38354);
var container_el = cljs.core.get.call(null,map__38354__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38354,map__38354__$1,container_el){
return (function (p__38355){
var vec__38356 = p__38355;
var k = cljs.core.nth.call(null,vec__38356,(0),null);
var v = cljs.core.nth.call(null,vec__38356,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__38354,map__38354__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__38357,dom_str){
var map__38359 = p__38357;
var map__38359__$1 = ((cljs.core.seq_QMARK_.call(null,map__38359))?cljs.core.apply.call(null,cljs.core.hash_map,map__38359):map__38359);
var c = map__38359__$1;
var content_area_el = cljs.core.get.call(null,map__38359__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__38360){
var map__38362 = p__38360;
var map__38362__$1 = ((cljs.core.seq_QMARK_.call(null,map__38362))?cljs.core.apply.call(null,cljs.core.hash_map,map__38362):map__38362);
var content_area_el = cljs.core.get.call(null,map__38362__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_38404){
var state_val_38405 = (state_38404[(1)]);
if((state_val_38405 === (2))){
var inst_38389 = (state_38404[(7)]);
var inst_38398 = (state_38404[(2)]);
var inst_38399 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_38400 = ["auto"];
var inst_38401 = cljs.core.PersistentHashMap.fromArrays(inst_38399,inst_38400);
var inst_38402 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38389,inst_38401);
var state_38404__$1 = (function (){var statearr_38406 = state_38404;
(statearr_38406[(8)] = inst_38398);

return statearr_38406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38404__$1,inst_38402);
} else {
if((state_val_38405 === (1))){
var inst_38389 = (state_38404[(7)]);
var inst_38389__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38390 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38391 = ["10px","10px","100%","68px","1.0"];
var inst_38392 = cljs.core.PersistentHashMap.fromArrays(inst_38390,inst_38391);
var inst_38393 = cljs.core.merge.call(null,inst_38392,style);
var inst_38394 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38389__$1,inst_38393);
var inst_38395 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38389__$1,msg);
var inst_38396 = cljs.core.async.timeout.call(null,(300));
var state_38404__$1 = (function (){var statearr_38407 = state_38404;
(statearr_38407[(7)] = inst_38389__$1);

(statearr_38407[(9)] = inst_38395);

(statearr_38407[(10)] = inst_38394);

return statearr_38407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(2),inst_38396);
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
var statearr_38411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38411[(0)] = state_machine__25403__auto__);

(statearr_38411[(1)] = (1));

return statearr_38411;
});
var state_machine__25403__auto____1 = (function (state_38404){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38412){if((e38412 instanceof Object)){
var ex__25406__auto__ = e38412;
var statearr_38413_38415 = state_38404;
(statearr_38413_38415[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38416 = state_38404;
state_38404 = G__38416;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38404){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_38414 = f__25459__auto__.call(null);
(statearr_38414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_38414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4404__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__38418 = temp__4404__auto__;
var f = cljs.core.nth.call(null,vec__38418,(0),null);
var ln = cljs.core.nth.call(null,vec__38418,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__38421 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__38421,(0),null);
var file_line = cljs.core.nth.call(null,vec__38421,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__38421,file_name,file_line){
return (function (p1__38419_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__38419_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__38421,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__38423 = figwheel.client.heads_up.ensure_container.call(null);
var map__38423__$1 = ((cljs.core.seq_QMARK_.call(null,map__38423))?cljs.core.apply.call(null,cljs.core.hash_map,map__38423):map__38423);
var content_area_el = cljs.core.get.call(null,map__38423__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_38470){
var state_val_38471 = (state_38470[(1)]);
if((state_val_38471 === (3))){
var inst_38453 = (state_38470[(7)]);
var inst_38467 = (state_38470[(2)]);
var inst_38468 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_38453,"");
var state_38470__$1 = (function (){var statearr_38472 = state_38470;
(statearr_38472[(8)] = inst_38467);

return statearr_38472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38470__$1,inst_38468);
} else {
if((state_val_38471 === (2))){
var inst_38453 = (state_38470[(7)]);
var inst_38460 = (state_38470[(2)]);
var inst_38461 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_38462 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_38463 = cljs.core.PersistentHashMap.fromArrays(inst_38461,inst_38462);
var inst_38464 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38453,inst_38463);
var inst_38465 = cljs.core.async.timeout.call(null,(200));
var state_38470__$1 = (function (){var statearr_38473 = state_38470;
(statearr_38473[(9)] = inst_38460);

(statearr_38473[(10)] = inst_38464);

return statearr_38473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38470__$1,(3),inst_38465);
} else {
if((state_val_38471 === (1))){
var inst_38453 = (state_38470[(7)]);
var inst_38453__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_38454 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_38455 = ["0.0"];
var inst_38456 = cljs.core.PersistentHashMap.fromArrays(inst_38454,inst_38455);
var inst_38457 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_38453__$1,inst_38456);
var inst_38458 = cljs.core.async.timeout.call(null,(300));
var state_38470__$1 = (function (){var statearr_38474 = state_38470;
(statearr_38474[(7)] = inst_38453__$1);

(statearr_38474[(11)] = inst_38457);

return statearr_38474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38470__$1,(2),inst_38458);
} else {
return null;
}
}
}
});})(c__25458__auto__))
;
return ((function (switch__25402__auto__,c__25458__auto__){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_38478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38478[(0)] = state_machine__25403__auto__);

(statearr_38478[(1)] = (1));

return statearr_38478;
});
var state_machine__25403__auto____1 = (function (state_38470){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38479){if((e38479 instanceof Object)){
var ex__25406__auto__ = e38479;
var statearr_38480_38482 = state_38470;
(statearr_38480_38482[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38483 = state_38470;
state_38470 = G__38483;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38470){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_38481 = f__25459__auto__.call(null);
(statearr_38481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_38481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_38515){
var state_val_38516 = (state_38515[(1)]);
if((state_val_38516 === (4))){
var inst_38513 = (state_38515[(2)]);
var state_38515__$1 = state_38515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38515__$1,inst_38513);
} else {
if((state_val_38516 === (3))){
var inst_38510 = (state_38515[(2)]);
var inst_38511 = figwheel.client.heads_up.clear.call(null);
var state_38515__$1 = (function (){var statearr_38517 = state_38515;
(statearr_38517[(7)] = inst_38510);

return statearr_38517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38515__$1,(4),inst_38511);
} else {
if((state_val_38516 === (2))){
var inst_38507 = (state_38515[(2)]);
var inst_38508 = cljs.core.async.timeout.call(null,(400));
var state_38515__$1 = (function (){var statearr_38518 = state_38515;
(statearr_38518[(8)] = inst_38507);

return statearr_38518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38515__$1,(3),inst_38508);
} else {
if((state_val_38516 === (1))){
var inst_38505 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_38515__$1 = state_38515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38515__$1,(2),inst_38505);
} else {
return null;
}
}
}
}
});})(c__25458__auto__))
;
return ((function (switch__25402__auto__,c__25458__auto__){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_38522 = [null,null,null,null,null,null,null,null,null];
(statearr_38522[(0)] = state_machine__25403__auto__);

(statearr_38522[(1)] = (1));

return statearr_38522;
});
var state_machine__25403__auto____1 = (function (state_38515){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_38515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e38523){if((e38523 instanceof Object)){
var ex__25406__auto__ = e38523;
var statearr_38524_38526 = state_38515;
(statearr_38524_38526[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38527 = state_38515;
state_38515 = G__38527;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_38515){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_38515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_38525 = f__25459__auto__.call(null);
(statearr_38525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_38525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";
