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
var seq__35772_35780 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35773_35781 = null;
var count__35774_35782 = (0);
var i__35775_35783 = (0);
while(true){
if((i__35775_35783 < count__35774_35782)){
var k_35784 = cljs.core._nth.call(null,chunk__35773_35781,i__35775_35783);
e.setAttribute(cljs.core.name.call(null,k_35784),cljs.core.get.call(null,attrs,k_35784));

var G__35785 = seq__35772_35780;
var G__35786 = chunk__35773_35781;
var G__35787 = count__35774_35782;
var G__35788 = (i__35775_35783 + (1));
seq__35772_35780 = G__35785;
chunk__35773_35781 = G__35786;
count__35774_35782 = G__35787;
i__35775_35783 = G__35788;
continue;
} else {
var temp__4406__auto___35789 = cljs.core.seq.call(null,seq__35772_35780);
if(temp__4406__auto___35789){
var seq__35772_35790__$1 = temp__4406__auto___35789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35772_35790__$1)){
var c__15231__auto___35791 = cljs.core.chunk_first.call(null,seq__35772_35790__$1);
var G__35792 = cljs.core.chunk_rest.call(null,seq__35772_35790__$1);
var G__35793 = c__15231__auto___35791;
var G__35794 = cljs.core.count.call(null,c__15231__auto___35791);
var G__35795 = (0);
seq__35772_35780 = G__35792;
chunk__35773_35781 = G__35793;
count__35774_35782 = G__35794;
i__35775_35783 = G__35795;
continue;
} else {
var k_35796 = cljs.core.first.call(null,seq__35772_35790__$1);
e.setAttribute(cljs.core.name.call(null,k_35796),cljs.core.get.call(null,attrs,k_35796));

var G__35797 = cljs.core.next.call(null,seq__35772_35790__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35772_35780 = G__35797;
chunk__35773_35781 = G__35798;
count__35774_35782 = G__35799;
i__35775_35783 = G__35800;
continue;
}
} else {
}
}
break;
}

var seq__35776_35801 = cljs.core.seq.call(null,children);
var chunk__35777_35802 = null;
var count__35778_35803 = (0);
var i__35779_35804 = (0);
while(true){
if((i__35779_35804 < count__35778_35803)){
var ch_35805 = cljs.core._nth.call(null,chunk__35777_35802,i__35779_35804);
e.appendChild(ch_35805);

var G__35806 = seq__35776_35801;
var G__35807 = chunk__35777_35802;
var G__35808 = count__35778_35803;
var G__35809 = (i__35779_35804 + (1));
seq__35776_35801 = G__35806;
chunk__35777_35802 = G__35807;
count__35778_35803 = G__35808;
i__35779_35804 = G__35809;
continue;
} else {
var temp__4406__auto___35810 = cljs.core.seq.call(null,seq__35776_35801);
if(temp__4406__auto___35810){
var seq__35776_35811__$1 = temp__4406__auto___35810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35776_35811__$1)){
var c__15231__auto___35812 = cljs.core.chunk_first.call(null,seq__35776_35811__$1);
var G__35813 = cljs.core.chunk_rest.call(null,seq__35776_35811__$1);
var G__35814 = c__15231__auto___35812;
var G__35815 = cljs.core.count.call(null,c__15231__auto___35812);
var G__35816 = (0);
seq__35776_35801 = G__35813;
chunk__35777_35802 = G__35814;
count__35778_35803 = G__35815;
i__35779_35804 = G__35816;
continue;
} else {
var ch_35817 = cljs.core.first.call(null,seq__35776_35811__$1);
e.appendChild(ch_35817);

var G__35818 = cljs.core.next.call(null,seq__35776_35811__$1);
var G__35819 = null;
var G__35820 = (0);
var G__35821 = (0);
seq__35776_35801 = G__35818;
chunk__35777_35802 = G__35819;
count__35778_35803 = G__35820;
i__35779_35804 = G__35821;
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
var G__35822__i = 0, G__35822__a = new Array(arguments.length -  2);
while (G__35822__i < G__35822__a.length) {G__35822__a[G__35822__i] = arguments[G__35822__i + 2]; ++G__35822__i;}
  children = new cljs.core.IndexedSeq(G__35822__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__35823){
var t = cljs.core.first(arglist__35823);
arglist__35823 = cljs.core.next(arglist__35823);
var attrs = cljs.core.first(arglist__35823);
var children = cljs.core.rest(arglist__35823);
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__35824,st_map){
var map__35828 = p__35824;
var map__35828__$1 = ((cljs.core.seq_QMARK_.call(null,map__35828))?cljs.core.apply.call(null,cljs.core.hash_map,map__35828):map__35828);
var container_el = cljs.core.get.call(null,map__35828__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__35828,map__35828__$1,container_el){
return (function (p__35829){
var vec__35830 = p__35829;
var k = cljs.core.nth.call(null,vec__35830,(0),null);
var v = cljs.core.nth.call(null,vec__35830,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__35828,map__35828__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__35831,dom_str){
var map__35833 = p__35831;
var map__35833__$1 = ((cljs.core.seq_QMARK_.call(null,map__35833))?cljs.core.apply.call(null,cljs.core.hash_map,map__35833):map__35833);
var c = map__35833__$1;
var content_area_el = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__35834){
var map__35836 = p__35834;
var map__35836__$1 = ((cljs.core.seq_QMARK_.call(null,map__35836))?cljs.core.apply.call(null,cljs.core.hash_map,map__35836):map__35836);
var content_area_el = cljs.core.get.call(null,map__35836__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_35878){
var state_val_35879 = (state_35878[(1)]);
if((state_val_35879 === (2))){
var inst_35863 = (state_35878[(7)]);
var inst_35872 = (state_35878[(2)]);
var inst_35873 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35874 = ["auto"];
var inst_35875 = cljs.core.PersistentHashMap.fromArrays(inst_35873,inst_35874);
var inst_35876 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35863,inst_35875);
var state_35878__$1 = (function (){var statearr_35880 = state_35878;
(statearr_35880[(8)] = inst_35872);

return statearr_35880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35878__$1,inst_35876);
} else {
if((state_val_35879 === (1))){
var inst_35863 = (state_35878[(7)]);
var inst_35863__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35864 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35865 = ["10px","10px","100%","68px","1.0"];
var inst_35866 = cljs.core.PersistentHashMap.fromArrays(inst_35864,inst_35865);
var inst_35867 = cljs.core.merge.call(null,inst_35866,style);
var inst_35868 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35863__$1,inst_35867);
var inst_35869 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35863__$1,msg);
var inst_35870 = cljs.core.async.timeout.call(null,(300));
var state_35878__$1 = (function (){var statearr_35881 = state_35878;
(statearr_35881[(9)] = inst_35869);

(statearr_35881[(7)] = inst_35863__$1);

(statearr_35881[(10)] = inst_35868);

return statearr_35881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35878__$1,(2),inst_35870);
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
var statearr_35885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35885[(0)] = state_machine__22188__auto__);

(statearr_35885[(1)] = (1));

return statearr_35885;
});
var state_machine__22188__auto____1 = (function (state_35878){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35886){if((e35886 instanceof Object)){
var ex__22191__auto__ = e35886;
var statearr_35887_35889 = state_35878;
(statearr_35887_35889[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35890 = state_35878;
state_35878 = G__35890;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35878){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_35888 = f__22244__auto__.call(null);
(statearr_35888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_35888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
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
var vec__35892 = temp__4404__auto__;
var f = cljs.core.nth.call(null,vec__35892,(0),null);
var ln = cljs.core.nth.call(null,vec__35892,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__35895 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__35895,(0),null);
var file_line = cljs.core.nth.call(null,vec__35895,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35895,file_name,file_line){
return (function (p1__35893_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35893_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35895,file_name,file_line))
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
var map__35897 = figwheel.client.heads_up.ensure_container.call(null);
var map__35897__$1 = ((cljs.core.seq_QMARK_.call(null,map__35897))?cljs.core.apply.call(null,cljs.core.hash_map,map__35897):map__35897);
var content_area_el = cljs.core.get.call(null,map__35897__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_35944){
var state_val_35945 = (state_35944[(1)]);
if((state_val_35945 === (3))){
var inst_35927 = (state_35944[(7)]);
var inst_35941 = (state_35944[(2)]);
var inst_35942 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35927,"");
var state_35944__$1 = (function (){var statearr_35946 = state_35944;
(statearr_35946[(8)] = inst_35941);

return statearr_35946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35944__$1,inst_35942);
} else {
if((state_val_35945 === (2))){
var inst_35927 = (state_35944[(7)]);
var inst_35934 = (state_35944[(2)]);
var inst_35935 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35936 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35937 = cljs.core.PersistentHashMap.fromArrays(inst_35935,inst_35936);
var inst_35938 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35927,inst_35937);
var inst_35939 = cljs.core.async.timeout.call(null,(200));
var state_35944__$1 = (function (){var statearr_35947 = state_35944;
(statearr_35947[(9)] = inst_35938);

(statearr_35947[(10)] = inst_35934);

return statearr_35947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35944__$1,(3),inst_35939);
} else {
if((state_val_35945 === (1))){
var inst_35927 = (state_35944[(7)]);
var inst_35927__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35928 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35929 = ["0.0"];
var inst_35930 = cljs.core.PersistentHashMap.fromArrays(inst_35928,inst_35929);
var inst_35931 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35927__$1,inst_35930);
var inst_35932 = cljs.core.async.timeout.call(null,(300));
var state_35944__$1 = (function (){var statearr_35948 = state_35944;
(statearr_35948[(11)] = inst_35931);

(statearr_35948[(7)] = inst_35927__$1);

return statearr_35948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35944__$1,(2),inst_35932);
} else {
return null;
}
}
}
});})(c__22243__auto__))
;
return ((function (switch__22187__auto__,c__22243__auto__){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_35952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35952[(0)] = state_machine__22188__auto__);

(statearr_35952[(1)] = (1));

return statearr_35952;
});
var state_machine__22188__auto____1 = (function (state_35944){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35953){if((e35953 instanceof Object)){
var ex__22191__auto__ = e35953;
var statearr_35954_35956 = state_35944;
(statearr_35954_35956[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35957 = state_35944;
state_35944 = G__35957;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35944){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_35955 = f__22244__auto__.call(null);
(statearr_35955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_35955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_35989){
var state_val_35990 = (state_35989[(1)]);
if((state_val_35990 === (4))){
var inst_35987 = (state_35989[(2)]);
var state_35989__$1 = state_35989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35989__$1,inst_35987);
} else {
if((state_val_35990 === (3))){
var inst_35984 = (state_35989[(2)]);
var inst_35985 = figwheel.client.heads_up.clear.call(null);
var state_35989__$1 = (function (){var statearr_35991 = state_35989;
(statearr_35991[(7)] = inst_35984);

return statearr_35991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35989__$1,(4),inst_35985);
} else {
if((state_val_35990 === (2))){
var inst_35981 = (state_35989[(2)]);
var inst_35982 = cljs.core.async.timeout.call(null,(400));
var state_35989__$1 = (function (){var statearr_35992 = state_35989;
(statearr_35992[(8)] = inst_35981);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35989__$1,(3),inst_35982);
} else {
if((state_val_35990 === (1))){
var inst_35979 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35989__$1 = state_35989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35989__$1,(2),inst_35979);
} else {
return null;
}
}
}
}
});})(c__22243__auto__))
;
return ((function (switch__22187__auto__,c__22243__auto__){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_35996 = [null,null,null,null,null,null,null,null,null];
(statearr_35996[(0)] = state_machine__22188__auto__);

(statearr_35996[(1)] = (1));

return statearr_35996;
});
var state_machine__22188__auto____1 = (function (state_35989){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_35989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e35997){if((e35997 instanceof Object)){
var ex__22191__auto__ = e35997;
var statearr_35998_36000 = state_35989;
(statearr_35998_36000[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36001 = state_35989;
state_35989 = G__36001;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_35989){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_35989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_35999 = f__22244__auto__.call(null);
(statearr_35999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_35999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map