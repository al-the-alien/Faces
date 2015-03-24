// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.dev');
goog.require('cljs.core');
goog.require('weasel.repl');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('figwheel.client');
goog.require('om.core');
goog.require('dommy.core');
/**
* @param {...*} var_args
*/
shapes.dev.println = (function() { 
var println__delegate = function (content){
return console.log(cljs.core.apply.call(null,cljs.core.pr_str,content));
};
var println = function (var_args){
var content = null;
if (arguments.length > 0) {
var G__50489__i = 0, G__50489__a = new Array(arguments.length -  0);
while (G__50489__i < G__50489__a.length) {G__50489__a[G__50489__i] = arguments[G__50489__i + 0]; ++G__50489__i;}
  content = new cljs.core.IndexedSeq(G__50489__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__50490){
var content = cljs.core.seq(arglist__50490);
return println__delegate(content);
});
println.cljs$core$IFn$_invoke$arity$variadic = println__delegate;
return println;
})()
;
if(typeof shapes.dev.app_state !== 'undefined'){
} else {
shapes.dev.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, development!"], null));
}
shapes.dev.draw_lil = (function draw_lil(owner,p__50491){
var map__50541 = p__50491;
var map__50541__$1 = ((cljs.core.seq_QMARK_.call(null,map__50541))?cljs.core.apply.call(null,cljs.core.hash_map,map__50541):map__50541);
var shape_data = cljs.core.get.call(null,map__50541__$1,new cljs.core.Keyword(null,"shape-data","shape-data",-722449843));
var stroke = cljs.core.get.call(null,map__50541__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
return React.createElement("g",{"stroke": stroke},React.createElement("defs",null,cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (map__50541,map__50541__$1,shape_data,stroke){
return (function iter__50542(s__50543){
return (new cljs.core.LazySeq(null,((function (map__50541,map__50541__$1,shape_data,stroke){
return (function (){
var s__50543__$1 = s__50543;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__50543__$1);
if(temp__4406__auto__){
var s__50543__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50543__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__50543__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__50545 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__50544 = (0);
while(true){
if((i__50544 < size__15199__auto__)){
var map__50564 = cljs.core._nth.call(null,c__15198__auto__,i__50544);
var map__50564__$1 = ((cljs.core.seq_QMARK_.call(null,map__50564))?cljs.core.apply.call(null,cljs.core.hash_map,map__50564):map__50564);
var id = cljs.core.get.call(null,map__50564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__50545,React.createElement("clippath",null,new cljs.core.Keyword(null,"id","id",-1388402092),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,id)),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (i__50544,map__50564,map__50564__$1,id,c__15198__auto__,size__15199__auto__,b__50545,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke){
return (function iter__50565(s__50566){
return (new cljs.core.LazySeq(null,((function (i__50544,map__50564,map__50564__$1,id,c__15198__auto__,size__15199__auto__,b__50545,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke){
return (function (){
var s__50566__$1 = s__50566;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__50566__$1);
if(temp__4406__auto____$1){
var s__50566__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50566__$2)){
var c__15198__auto____$1 = cljs.core.chunk_first.call(null,s__50566__$2);
var size__15199__auto____$1 = cljs.core.count.call(null,c__15198__auto____$1);
var b__50568 = cljs.core.chunk_buffer.call(null,size__15199__auto____$1);
if((function (){var i__50567 = (0);
while(true){
if((i__50567 < size__15199__auto____$1)){
var map__50571 = cljs.core._nth.call(null,c__15198__auto____$1,i__50567);
var map__50571__$1 = ((cljs.core.seq_QMARK_.call(null,map__50571))?cljs.core.apply.call(null,cljs.core.hash_map,map__50571):map__50571);
var clip_shape = map__50571__$1;
var draw_fn = cljs.core.get.call(null,map__50571__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id2 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clip_shape);
if(cljs.core.not_EQ_.call(null,id,id2)){
cljs.core.chunk_append.call(null,b__50568,sablono.interpreter.interpret.call(null,draw_fn.call(null,owner,clip_shape)));

var G__50590 = (i__50567 + (1));
i__50567 = G__50590;
continue;
} else {
var G__50591 = (i__50567 + (1));
i__50567 = G__50591;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50568),iter__50565.call(null,cljs.core.chunk_rest.call(null,s__50566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50568),null);
}
} else {
var map__50572 = cljs.core.first.call(null,s__50566__$2);
var map__50572__$1 = ((cljs.core.seq_QMARK_.call(null,map__50572))?cljs.core.apply.call(null,cljs.core.hash_map,map__50572):map__50572);
var clip_shape = map__50572__$1;
var draw_fn = cljs.core.get.call(null,map__50572__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id2 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clip_shape);
if(cljs.core.not_EQ_.call(null,id,id2)){
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_fn.call(null,owner,clip_shape)),iter__50565.call(null,cljs.core.rest.call(null,s__50566__$2)));
} else {
var G__50592 = cljs.core.rest.call(null,s__50566__$2);
s__50566__$1 = G__50592;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__50544,map__50564,map__50564__$1,id,c__15198__auto__,size__15199__auto__,b__50545,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke))
,null,null));
});})(i__50544,map__50564,map__50564__$1,id,c__15198__auto__,size__15199__auto__,b__50545,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke))
;
return iter__15200__auto__.call(null,shape_data);
})())));

var G__50593 = (i__50544 + (1));
i__50544 = G__50593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50545),iter__50542.call(null,cljs.core.chunk_rest.call(null,s__50543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50545),null);
}
} else {
var map__50573 = cljs.core.first.call(null,s__50543__$2);
var map__50573__$1 = ((cljs.core.seq_QMARK_.call(null,map__50573))?cljs.core.apply.call(null,cljs.core.hash_map,map__50573):map__50573);
var id = cljs.core.get.call(null,map__50573__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,React.createElement("clippath",null,new cljs.core.Keyword(null,"id","id",-1388402092),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,id)),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (map__50573,map__50573__$1,id,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke){
return (function iter__50574(s__50575){
return (new cljs.core.LazySeq(null,((function (map__50573,map__50573__$1,id,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke){
return (function (){
var s__50575__$1 = s__50575;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__50575__$1);
if(temp__4406__auto____$1){
var s__50575__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50575__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__50575__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__50577 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__50576 = (0);
while(true){
if((i__50576 < size__15199__auto__)){
var map__50580 = cljs.core._nth.call(null,c__15198__auto__,i__50576);
var map__50580__$1 = ((cljs.core.seq_QMARK_.call(null,map__50580))?cljs.core.apply.call(null,cljs.core.hash_map,map__50580):map__50580);
var clip_shape = map__50580__$1;
var draw_fn = cljs.core.get.call(null,map__50580__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id2 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clip_shape);
if(cljs.core.not_EQ_.call(null,id,id2)){
cljs.core.chunk_append.call(null,b__50577,sablono.interpreter.interpret.call(null,draw_fn.call(null,owner,clip_shape)));

var G__50594 = (i__50576 + (1));
i__50576 = G__50594;
continue;
} else {
var G__50595 = (i__50576 + (1));
i__50576 = G__50595;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50577),iter__50574.call(null,cljs.core.chunk_rest.call(null,s__50575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50577),null);
}
} else {
var map__50581 = cljs.core.first.call(null,s__50575__$2);
var map__50581__$1 = ((cljs.core.seq_QMARK_.call(null,map__50581))?cljs.core.apply.call(null,cljs.core.hash_map,map__50581):map__50581);
var clip_shape = map__50581__$1;
var draw_fn = cljs.core.get.call(null,map__50581__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id2 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clip_shape);
if(cljs.core.not_EQ_.call(null,id,id2)){
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_fn.call(null,owner,clip_shape)),iter__50574.call(null,cljs.core.rest.call(null,s__50575__$2)));
} else {
var G__50596 = cljs.core.rest.call(null,s__50575__$2);
s__50575__$1 = G__50596;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__50573,map__50573__$1,id,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke))
,null,null));
});})(map__50573,map__50573__$1,id,s__50543__$2,temp__4406__auto__,map__50541,map__50541__$1,shape_data,stroke))
;
return iter__15200__auto__.call(null,shape_data);
})())),iter__50542.call(null,cljs.core.rest.call(null,s__50543__$2)));
}
} else {
return null;
}
break;
}
});})(map__50541,map__50541__$1,shape_data,stroke))
,null,null));
});})(map__50541,map__50541__$1,shape_data,stroke))
;
return iter__15200__auto__.call(null,shape_data);
})())),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (map__50541,map__50541__$1,shape_data,stroke){
return (function iter__50582(s__50583){
return (new cljs.core.LazySeq(null,((function (map__50541,map__50541__$1,shape_data,stroke){
return (function (){
var s__50583__$1 = s__50583;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__50583__$1);
if(temp__4406__auto__){
var s__50583__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50583__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__50583__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__50585 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__50584 = (0);
while(true){
if((i__50584 < size__15199__auto__)){
var map__50588 = cljs.core._nth.call(null,c__15198__auto__,i__50584);
var map__50588__$1 = ((cljs.core.seq_QMARK_.call(null,map__50588))?cljs.core.apply.call(null,cljs.core.hash_map,map__50588):map__50588);
var shape = map__50588__$1;
var draw_fn = cljs.core.get.call(null,map__50588__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id = cljs.core.get.call(null,map__50588__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__50585,sablono.interpreter.interpret.call(null,draw_fn.call(null,owner,shape)));

var G__50597 = (i__50584 + (1));
i__50584 = G__50597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50585),iter__50582.call(null,cljs.core.chunk_rest.call(null,s__50583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50585),null);
}
} else {
var map__50589 = cljs.core.first.call(null,s__50583__$2);
var map__50589__$1 = ((cljs.core.seq_QMARK_.call(null,map__50589))?cljs.core.apply.call(null,cljs.core.hash_map,map__50589):map__50589);
var shape = map__50589__$1;
var draw_fn = cljs.core.get.call(null,map__50589__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id = cljs.core.get.call(null,map__50589__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_fn.call(null,owner,shape)),iter__50582.call(null,cljs.core.rest.call(null,s__50583__$2)));
}
} else {
return null;
}
break;
}
});})(map__50541,map__50541__$1,shape_data,stroke))
,null,null));
});})(map__50541,map__50541__$1,shape_data,stroke))
;
return iter__15200__auto__.call(null,shape_data);
})()));
});
shapes.dev.lilify = (function lilify(owner,p__50600,shape2){
var map__50602 = p__50600;
var map__50602__$1 = ((cljs.core.seq_QMARK_.call(null,map__50602))?cljs.core.apply.call(null,cljs.core.hash_map,map__50602):map__50602);
var shape1 = map__50602__$1;
var height = cljs.core.get.call(null,map__50602__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__50602__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__50602__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__50602__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var xs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(x + width)], null);
var ys = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(y + height)], null);
var new_shape2 = cljs.core.assoc.call(null,shape2,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_nth.call(null,xs),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_nth.call(null,ys));
var new_id = cljs.core.gensym.call(null,"lil");
var lil_shape = ((function (xs,ys,new_shape2,new_id,map__50602,map__50602__$1,shape1,height,width,y,x){
return (function (p1__50598_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,p1__50598_SHARP_,new cljs.core.Keyword(null,"clip-id","clip-id",-107054765),cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50598_SHARP_))),new cljs.core.Keyword(null,"stroke","stroke",1741823555));
});})(xs,ys,new_shape2,new_id,map__50602,map__50602__$1,shape1,height,width,y,x))
;
om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (xs,ys,new_shape2,new_id,lil_shape,map__50602,map__50602__$1,shape1,height,width,y,x){
return (function (p1__50599_SHARP_){
return cljs.core.dissoc.call(null,p1__50599_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape2));
});})(xs,ys,new_shape2,new_id,lil_shape,map__50602,map__50602__$1,shape1,height,width,y,x))
);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lils","lils",-1227263881),new_id,new cljs.core.Keyword(null,"shape-data","shape-data",-722449843)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lil_shape.call(null,shape1),lil_shape.call(null,shape2)], null));
});
shapes.dev.combine = (function combine(owner,shape1,shape2){
if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"lil","lil",1195645587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape1,shape2], null)))){
return shapes.dev.lilify.call(null,owner,shape1,shape2);
} else {
return null;
}
});
shapes.dev.draw_rect = (function draw_rect(owner,p__50603){
var map__50605 = p__50603;
var map__50605__$1 = ((cljs.core.seq_QMARK_.call(null,map__50605))?cljs.core.apply.call(null,cljs.core.hash_map,map__50605):map__50605);
var shape = map__50605__$1;
var clip_id = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"clip-id","clip-id",-107054765));
var stroke = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var height = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__50605__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return React.createElement("rect",{"y": (y - (height / (2))), "stroke": stroke, "fill": "white", "width": width, "onClick": ((function (map__50605,map__50605__$1,shape,clip_id,stroke,height,width,y,x,id){
return (function (_){
shapes.dev.println.call(null,"Hello",id,"!");

var temp__4404__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764));
if(cljs.core.truth_(temp__4404__auto__)){
var selected = temp__4404__auto__;
return shapes.dev.combine.call(null,owner,om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),selected], null)),shape);
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),id);
}
});})(map__50605,map__50605__$1,shape,clip_id,stroke,height,width,y,x,id))
, "clipPath": (cljs.core.truth_(clip_id)?[cljs.core.str("url(#"),cljs.core.str(clip_id),cljs.core.str(")")].join(''):null), "strokeWidth": (3), "x": (x - (width / (2))), "height": height});
});
shapes.dev.rect = (function rect(x,y){
var width = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(50),(100)));
var height = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(50),(100)));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null,"rect"),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),shapes.dev.draw_rect], null);
});
shapes.dev.square = (function square(x,y){
var width = (100);
var height = (100);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null,"square"),new cljs.core.Keyword(null,"x","x",2099068185),(x - (width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (height / (2))),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),shapes.dev.draw_rect], null);
});

var ufv___50663 = schema.utils.use_fn_validation;
var output_schema50607_50664 = schema.core.Any;
var input_schema50608_50665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker50609_50666 = schema.core.checker.call(null,input_schema50608_50665);
var output_checker50610_50667 = schema.core.checker.call(null,output_schema50607_50664);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function app(G__50611,G__50612){
var validate__16797__auto__ = ufv___50663.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___50668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__50611,G__50612], null);
var temp__4406__auto___50669 = input_checker50609_50666.call(null,args__16798__auto___50668);
if(cljs.core.truth_(temp__4406__auto___50669)){
var error__16799__auto___50670 = temp__4406__auto___50669;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16799__auto___50670)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___50670,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___50668,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema50608_50665,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var data = G__50611;
var owner = G__50612;
while(true){
if(typeof shapes.dev.t50638 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t50638 = (function (owner,output_checker50610,data,validate__16797__auto__,output_schema50607,input_schema50608,G__50612,G__50611,input_checker50609,app,ufv__,meta50639){
this.owner = owner;
this.output_checker50610 = output_checker50610;
this.data = data;
this.validate__16797__auto__ = validate__16797__auto__;
this.output_schema50607 = output_schema50607;
this.input_schema50608 = input_schema50608;
this.G__50612 = G__50612;
this.G__50611 = G__50611;
this.input_checker50609 = input_checker50609;
this.app = app;
this.ufv__ = ufv__;
this.meta50639 = meta50639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t50638.prototype.om$core$IDisplayName$ = true;

shapes.dev.t50638.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

shapes.dev.t50638.prototype.om$core$IRenderState$ = true;

shapes.dev.t50638.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (_,p__50641){
var self__ = this;
var map__50642 = p__50641;
var map__50642__$1 = ((cljs.core.seq_QMARK_.call(null,map__50642))?cljs.core.apply.call(null,cljs.core.hash_map,map__50642):map__50642);
var lils = cljs.core.get.call(null,map__50642__$1,new cljs.core.Keyword(null,"lils","lils",-1227263881));
var shapes__$1 = cljs.core.get.call(null,map__50642__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var selected = cljs.core.get.call(null,map__50642__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var ___$1 = this;
return React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"className": "background", "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (e){
var new_rect = shapes.dev.rect.call(null,e.clientX,e.clientY);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),null);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_rect)], null),new_rect);
});})(___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
}),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function iter__50643(s__50644){
return (new cljs.core.LazySeq(null,((function (___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (){
var s__50644__$1 = s__50644;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__50644__$1);
if(temp__4406__auto__){
var s__50644__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50644__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__50644__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__50646 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__50645 = (0);
while(true){
if((i__50645 < size__15199__auto__)){
var vec__50651 = cljs.core._nth.call(null,c__15198__auto__,i__50645);
var id = cljs.core.nth.call(null,vec__50651,(0),null);
var map__50652 = cljs.core.nth.call(null,vec__50651,(1),null);
var map__50652__$1 = ((cljs.core.seq_QMARK_.call(null,map__50652))?cljs.core.apply.call(null,cljs.core.hash_map,map__50652):map__50652);
var shape = map__50652__$1;
var draw_fn = cljs.core.get.call(null,map__50652__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
cljs.core.chunk_append.call(null,b__50646,sablono.interpreter.interpret.call(null,(function (){
if(cljs.core._EQ_.call(null,id,selected)){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"blue");
} else {
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"black");
}

return draw_fn.call(null,self__.owner,shape);
})()
));

var G__50671 = (i__50645 + (1));
i__50645 = G__50671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50646),iter__50643.call(null,cljs.core.chunk_rest.call(null,s__50644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50646),null);
}
} else {
var vec__50653 = cljs.core.first.call(null,s__50644__$2);
var id = cljs.core.nth.call(null,vec__50653,(0),null);
var map__50654 = cljs.core.nth.call(null,vec__50653,(1),null);
var map__50654__$1 = ((cljs.core.seq_QMARK_.call(null,map__50654))?cljs.core.apply.call(null,cljs.core.hash_map,map__50654):map__50654);
var shape = map__50654__$1;
var draw_fn = cljs.core.get.call(null,map__50654__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){
if(cljs.core._EQ_.call(null,id,selected)){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"blue");
} else {
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"black");
}

return draw_fn.call(null,self__.owner,shape);
})()
),iter__50643.call(null,cljs.core.rest.call(null,s__50644__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
,null,null));
});})(___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;
return iter__15200__auto__.call(null,shapes__$1);
})()),cljs.core.into_array.call(null,(function (){var iter__15200__auto__ = ((function (___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function iter__50655(s__50656){
return (new cljs.core.LazySeq(null,((function (___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (){
var s__50656__$1 = s__50656;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__50656__$1);
if(temp__4406__auto__){
var s__50656__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50656__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__50656__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__50658 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__50657 = (0);
while(true){
if((i__50657 < size__15199__auto__)){
var vec__50661 = cljs.core._nth.call(null,c__15198__auto__,i__50657);
var id = cljs.core.nth.call(null,vec__50661,(0),null);
var lil = cljs.core.nth.call(null,vec__50661,(1),null);
cljs.core.chunk_append.call(null,b__50658,sablono.interpreter.interpret.call(null,(function (){
if(cljs.core._EQ_.call(null,id,selected)){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lils","lils",-1227263881),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"blue");
} else {
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lils","lils",-1227263881),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"black");
}

shapes.dev.println.call(null,cljs.core.keys.call(null,lil));

return shapes.dev.draw_lil.call(null,self__.owner,lil);
})()
));

var G__50672 = (i__50657 + (1));
i__50657 = G__50672;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50658),iter__50655.call(null,cljs.core.chunk_rest.call(null,s__50656__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50658),null);
}
} else {
var vec__50662 = cljs.core.first.call(null,s__50656__$2);
var id = cljs.core.nth.call(null,vec__50662,(0),null);
var lil = cljs.core.nth.call(null,vec__50662,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){
if(cljs.core._EQ_.call(null,id,selected)){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lils","lils",-1227263881),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"blue");
} else {
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lils","lils",-1227263881),id,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null),"black");
}

shapes.dev.println.call(null,cljs.core.keys.call(null,lil));

return shapes.dev.draw_lil.call(null,self__.owner,lil);
})()
),iter__50655.call(null,cljs.core.rest.call(null,s__50656__$2)));
}
} else {
return null;
}
break;
}
});})(___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
,null,null));
});})(___$1,map__50642,map__50642__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;
return iter__15200__auto__.call(null,lils);
})()));
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

shapes.dev.t50638.prototype.om$core$IInitState$ = true;

shapes.dev.t50638.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lils","lils",-1227263881),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"selected","selected",574897764),null], null);
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

shapes.dev.t50638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (_50640){
var self__ = this;
var _50640__$1 = this;
return self__.meta50639;
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

shapes.dev.t50638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (_50640,meta50639__$1){
var self__ = this;
var _50640__$1 = this;
return (new shapes.dev.t50638(self__.owner,self__.output_checker50610,self__.data,self__.validate__16797__auto__,self__.output_schema50607,self__.input_schema50608,self__.G__50612,self__.G__50611,self__.input_checker50609,self__.app,self__.ufv__,meta50639__$1));
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

shapes.dev.t50638.cljs$lang$type = true;

shapes.dev.t50638.cljs$lang$ctorStr = "shapes.dev/t50638";

shapes.dev.t50638.cljs$lang$ctorPrWriter = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t50638");
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

shapes.dev.__GT_t50638 = ((function (validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667){
return (function __GT_t50638(owner__$1,output_checker50610__$1,data__$1,validate__16797__auto____$1,output_schema50607__$1,input_schema50608__$1,G__50612__$1,G__50611__$1,input_checker50609__$1,app__$1,ufv____$1,meta50639){
return (new shapes.dev.t50638(owner__$1,output_checker50610__$1,data__$1,validate__16797__auto____$1,output_schema50607__$1,input_schema50608__$1,G__50612__$1,G__50611__$1,input_checker50609__$1,app__$1,ufv____$1,meta50639));
});})(validate__16797__auto__,ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

}

return (new shapes.dev.t50638(owner,output_checker50610_50667,data,validate__16797__auto__,output_schema50607_50664,input_schema50608_50665,G__50612,G__50611,input_checker50609_50666,app,ufv___50663,null));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___50673 = output_checker50610_50667.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___50673)){
var error__16799__auto___50674 = temp__4406__auto___50673;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16799__auto___50674)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___50674,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema50607_50664,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___50663,output_schema50607_50664,input_schema50608_50665,input_checker50609_50666,output_checker50610_50667))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema50607_50664,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema50608_50665], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__21115__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__21115__auto__);
});
var __GT_app__2 = (function (cursor__21115__auto__,m50606){
return om.core.build.call(null,shapes.dev.app,cursor__21115__auto__,m50606);
});
__GT_app = function(cursor__21115__auto__,m50606){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__21115__auto__);
case 2:
return __GT_app__2.call(this,cursor__21115__auto__,m50606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
if(weasel.repl.alive_QMARK_.call(null)){
} else {
weasel.repl.connect.call(null,"ws://localhost:9001");
}
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));
om.core.root.call(null,shapes.dev.app,shapes.dev.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=dev.js.map