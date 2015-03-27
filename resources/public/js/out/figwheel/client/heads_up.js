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
var seq__32770_32778 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32771_32779 = null;
var count__32772_32780 = (0);
var i__32773_32781 = (0);
while(true){
if((i__32773_32781 < count__32772_32780)){
var k_32782 = cljs.core._nth.call(null,chunk__32771_32779,i__32773_32781);
e.setAttribute(cljs.core.name.call(null,k_32782),cljs.core.get.call(null,attrs,k_32782));

var G__32783 = seq__32770_32778;
var G__32784 = chunk__32771_32779;
var G__32785 = count__32772_32780;
var G__32786 = (i__32773_32781 + (1));
seq__32770_32778 = G__32783;
chunk__32771_32779 = G__32784;
count__32772_32780 = G__32785;
i__32773_32781 = G__32786;
continue;
} else {
var temp__4406__auto___32787 = cljs.core.seq.call(null,seq__32770_32778);
if(temp__4406__auto___32787){
var seq__32770_32788__$1 = temp__4406__auto___32787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32770_32788__$1)){
var c__15231__auto___32789 = cljs.core.chunk_first.call(null,seq__32770_32788__$1);
var G__32790 = cljs.core.chunk_rest.call(null,seq__32770_32788__$1);
var G__32791 = c__15231__auto___32789;
var G__32792 = cljs.core.count.call(null,c__15231__auto___32789);
var G__32793 = (0);
seq__32770_32778 = G__32790;
chunk__32771_32779 = G__32791;
count__32772_32780 = G__32792;
i__32773_32781 = G__32793;
continue;
} else {
var k_32794 = cljs.core.first.call(null,seq__32770_32788__$1);
e.setAttribute(cljs.core.name.call(null,k_32794),cljs.core.get.call(null,attrs,k_32794));

var G__32795 = cljs.core.next.call(null,seq__32770_32788__$1);
var G__32796 = null;
var G__32797 = (0);
var G__32798 = (0);
seq__32770_32778 = G__32795;
chunk__32771_32779 = G__32796;
count__32772_32780 = G__32797;
i__32773_32781 = G__32798;
continue;
}
} else {
}
}
break;
}

var seq__32774_32799 = cljs.core.seq.call(null,children);
var chunk__32775_32800 = null;
var count__32776_32801 = (0);
var i__32777_32802 = (0);
while(true){
if((i__32777_32802 < count__32776_32801)){
var ch_32803 = cljs.core._nth.call(null,chunk__32775_32800,i__32777_32802);
e.appendChild(ch_32803);

var G__32804 = seq__32774_32799;
var G__32805 = chunk__32775_32800;
var G__32806 = count__32776_32801;
var G__32807 = (i__32777_32802 + (1));
seq__32774_32799 = G__32804;
chunk__32775_32800 = G__32805;
count__32776_32801 = G__32806;
i__32777_32802 = G__32807;
continue;
} else {
var temp__4406__auto___32808 = cljs.core.seq.call(null,seq__32774_32799);
if(temp__4406__auto___32808){
var seq__32774_32809__$1 = temp__4406__auto___32808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32774_32809__$1)){
var c__15231__auto___32810 = cljs.core.chunk_first.call(null,seq__32774_32809__$1);
var G__32811 = cljs.core.chunk_rest.call(null,seq__32774_32809__$1);
var G__32812 = c__15231__auto___32810;
var G__32813 = cljs.core.count.call(null,c__15231__auto___32810);
var G__32814 = (0);
seq__32774_32799 = G__32811;
chunk__32775_32800 = G__32812;
count__32776_32801 = G__32813;
i__32777_32802 = G__32814;
continue;
} else {
var ch_32815 = cljs.core.first.call(null,seq__32774_32809__$1);
e.appendChild(ch_32815);

var G__32816 = cljs.core.next.call(null,seq__32774_32809__$1);
var G__32817 = null;
var G__32818 = (0);
var G__32819 = (0);
seq__32774_32799 = G__32816;
chunk__32775_32800 = G__32817;
count__32776_32801 = G__32818;
i__32777_32802 = G__32819;
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
var G__32820__i = 0, G__32820__a = new Array(arguments.length -  2);
while (G__32820__i < G__32820__a.length) {G__32820__a[G__32820__i] = arguments[G__32820__i + 2]; ++G__32820__i;}
  children = new cljs.core.IndexedSeq(G__32820__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__32821){
var t = cljs.core.first(arglist__32821);
arglist__32821 = cljs.core.next(arglist__32821);
var attrs = cljs.core.first(arglist__32821);
var children = cljs.core.rest(arglist__32821);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15343__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15345__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__15341__auto__,prefer_table__15342__auto__,method_cache__15343__auto__,cached_hierarchy__15344__auto__,hierarchy__15345__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__15341__auto__,prefer_table__15342__auto__,method_cache__15343__auto__,cached_hierarchy__15344__auto__,hierarchy__15345__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15345__auto__,method_table__15341__auto__,prefer_table__15342__auto__,method_cache__15343__auto__,cached_hierarchy__15344__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__32822,st_map){
var map__32826 = p__32822;
var map__32826__$1 = ((cljs.core.seq_QMARK_.call(null,map__32826))?cljs.core.apply.call(null,cljs.core.hash_map,map__32826):map__32826);
var container_el = cljs.core.get.call(null,map__32826__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32826,map__32826__$1,container_el){
return (function (p__32827){
var vec__32828 = p__32827;
var k = cljs.core.nth.call(null,vec__32828,(0),null);
var v = cljs.core.nth.call(null,vec__32828,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32826,map__32826__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__32829,dom_str){
var map__32831 = p__32829;
var map__32831__$1 = ((cljs.core.seq_QMARK_.call(null,map__32831))?cljs.core.apply.call(null,cljs.core.hash_map,map__32831):map__32831);
var c = map__32831__$1;
var content_area_el = cljs.core.get.call(null,map__32831__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__32832){
var map__32834 = p__32832;
var map__32834__$1 = ((cljs.core.seq_QMARK_.call(null,map__32834))?cljs.core.apply.call(null,cljs.core.hash_map,map__32834):map__32834);
var content_area_el = cljs.core.get.call(null,map__32834__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_32876){
var state_val_32877 = (state_32876[(1)]);
if((state_val_32877 === (2))){
var inst_32861 = (state_32876[(7)]);
var inst_32870 = (state_32876[(2)]);
var inst_32871 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32872 = ["auto"];
var inst_32873 = cljs.core.PersistentHashMap.fromArrays(inst_32871,inst_32872);
var inst_32874 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32861,inst_32873);
var state_32876__$1 = (function (){var statearr_32878 = state_32876;
(statearr_32878[(8)] = inst_32870);

return statearr_32878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32876__$1,inst_32874);
} else {
if((state_val_32877 === (1))){
var inst_32861 = (state_32876[(7)]);
var inst_32861__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32862 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32863 = ["10px","10px","100%","68px","1.0"];
var inst_32864 = cljs.core.PersistentHashMap.fromArrays(inst_32862,inst_32863);
var inst_32865 = cljs.core.merge.call(null,inst_32864,style);
var inst_32866 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32861__$1,inst_32865);
var inst_32867 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32861__$1,msg);
var inst_32868 = cljs.core.async.timeout.call(null,(300));
var state_32876__$1 = (function (){var statearr_32879 = state_32876;
(statearr_32879[(9)] = inst_32866);

(statearr_32879[(7)] = inst_32861__$1);

(statearr_32879[(10)] = inst_32867);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32876__$1,(2),inst_32868);
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
var statearr_32883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = state_machine__20382__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var state_machine__20382__auto____1 = (function (state_32876){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32884){if((e32884 instanceof Object)){
var ex__20385__auto__ = e32884;
var statearr_32885_32887 = state_32876;
(statearr_32885_32887[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32888 = state_32876;
state_32876 = G__32888;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32876){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_32886 = f__20397__auto__.call(null);
(statearr_32886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_32886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
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
var vec__32890 = temp__4404__auto__;
var f = cljs.core.nth.call(null,vec__32890,(0),null);
var ln = cljs.core.nth.call(null,vec__32890,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__32893 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__32893,(0),null);
var file_line = cljs.core.nth.call(null,vec__32893,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32893,file_name,file_line){
return (function (p1__32891_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32891_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32893,file_name,file_line))
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
var map__32895 = figwheel.client.heads_up.ensure_container.call(null);
var map__32895__$1 = ((cljs.core.seq_QMARK_.call(null,map__32895))?cljs.core.apply.call(null,cljs.core.hash_map,map__32895):map__32895);
var content_area_el = cljs.core.get.call(null,map__32895__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_32942){
var state_val_32943 = (state_32942[(1)]);
if((state_val_32943 === (3))){
var inst_32925 = (state_32942[(7)]);
var inst_32939 = (state_32942[(2)]);
var inst_32940 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32925,"");
var state_32942__$1 = (function (){var statearr_32944 = state_32942;
(statearr_32944[(8)] = inst_32939);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32942__$1,inst_32940);
} else {
if((state_val_32943 === (2))){
var inst_32925 = (state_32942[(7)]);
var inst_32932 = (state_32942[(2)]);
var inst_32933 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32934 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32935 = cljs.core.PersistentHashMap.fromArrays(inst_32933,inst_32934);
var inst_32936 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32925,inst_32935);
var inst_32937 = cljs.core.async.timeout.call(null,(200));
var state_32942__$1 = (function (){var statearr_32945 = state_32942;
(statearr_32945[(9)] = inst_32932);

(statearr_32945[(10)] = inst_32936);

return statearr_32945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32942__$1,(3),inst_32937);
} else {
if((state_val_32943 === (1))){
var inst_32925 = (state_32942[(7)]);
var inst_32925__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32926 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32927 = ["0.0"];
var inst_32928 = cljs.core.PersistentHashMap.fromArrays(inst_32926,inst_32927);
var inst_32929 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32925__$1,inst_32928);
var inst_32930 = cljs.core.async.timeout.call(null,(300));
var state_32942__$1 = (function (){var statearr_32946 = state_32942;
(statearr_32946[(7)] = inst_32925__$1);

(statearr_32946[(11)] = inst_32929);

return statearr_32946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32942__$1,(2),inst_32930);
} else {
return null;
}
}
}
});})(c__20396__auto__))
;
return ((function (switch__20381__auto__,c__20396__auto__){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_32950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32950[(0)] = state_machine__20382__auto__);

(statearr_32950[(1)] = (1));

return statearr_32950;
});
var state_machine__20382__auto____1 = (function (state_32942){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32951){if((e32951 instanceof Object)){
var ex__20385__auto__ = e32951;
var statearr_32952_32954 = state_32942;
(statearr_32952_32954[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32955 = state_32942;
state_32942 = G__32955;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32942){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_32953 = f__20397__auto__.call(null);
(statearr_32953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_32953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_32987){
var state_val_32988 = (state_32987[(1)]);
if((state_val_32988 === (4))){
var inst_32985 = (state_32987[(2)]);
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32987__$1,inst_32985);
} else {
if((state_val_32988 === (3))){
var inst_32982 = (state_32987[(2)]);
var inst_32983 = figwheel.client.heads_up.clear.call(null);
var state_32987__$1 = (function (){var statearr_32989 = state_32987;
(statearr_32989[(7)] = inst_32982);

return statearr_32989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32987__$1,(4),inst_32983);
} else {
if((state_val_32988 === (2))){
var inst_32979 = (state_32987[(2)]);
var inst_32980 = cljs.core.async.timeout.call(null,(400));
var state_32987__$1 = (function (){var statearr_32990 = state_32987;
(statearr_32990[(8)] = inst_32979);

return statearr_32990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32987__$1,(3),inst_32980);
} else {
if((state_val_32988 === (1))){
var inst_32977 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32987__$1,(2),inst_32977);
} else {
return null;
}
}
}
}
});})(c__20396__auto__))
;
return ((function (switch__20381__auto__,c__20396__auto__){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_32994 = [null,null,null,null,null,null,null,null,null];
(statearr_32994[(0)] = state_machine__20382__auto__);

(statearr_32994[(1)] = (1));

return statearr_32994;
});
var state_machine__20382__auto____1 = (function (state_32987){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_32987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e32995){if((e32995 instanceof Object)){
var ex__20385__auto__ = e32995;
var statearr_32996_32998 = state_32987;
(statearr_32996_32998[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32999 = state_32987;
state_32987 = G__32999;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_32987){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_32987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_32997 = f__20397__auto__.call(null);
(statearr_32997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_32997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map