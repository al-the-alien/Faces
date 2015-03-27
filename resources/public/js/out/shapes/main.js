// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.main');
goog.require('cljs.core');
goog.require('shapes.core');
goog.require('dommy.core');
goog.require('om_tools.core');
goog.require('sablono.core');
goog.require('om.core');
if(typeof shapes.main.app_state !== 'undefined'){
} else {
shapes.main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,false,new cljs.core.Keyword(null,"proportional","proportional",-108854946),false)], null));
}
shapes.main.interface$ = (function interface$(data,new_face){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text#header","text#header",1136382258),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#222",new cljs.core.Keyword(null,"fill","fill",883462889),"#222",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null),"Procedurally Generated Faces"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#click-me","g#click-me",1111440157),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_face),(10),"#AAA","#DDD",(100),(3),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_face) - (25)),(10),(50)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_face) + (25)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_face) + (30)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#333",new cljs.core.Keyword(null,"fill","fill",883462889),"#333",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),"New face"], null)], null)], null);
});

var ufv___31321 = schema.utils.use_fn_validation;
var output_schema31305_31322 = schema.core.Any;
var input_schema31306_31323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker31307_31324 = schema.core.checker.call(null,input_schema31306_31323);
var output_checker31308_31325 = schema.core.checker.call(null,output_schema31305_31322);
/**
* Inputs: [data owner]
*/
shapes.main.app = ((function (ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function app(G__31309,G__31310){
var validate__16917__auto__ = ufv___31321.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___31326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31309,G__31310], null);
var temp__4406__auto___31327 = input_checker31307_31324.call(null,args__16918__auto___31326);
if(cljs.core.truth_(temp__4406__auto___31327)){
var error__16919__auto___31328 = temp__4406__auto___31327;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16919__auto___31328)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___31328,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___31326,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema31306_31323,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var data = G__31309;
var owner = G__31310;
while(true){
if(typeof shapes.main.t31316 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.main.t31316 = (function (validate__16917__auto__,owner,data,input_checker31307,G__31310,input_schema31306,G__31309,output_schema31305,app,ufv__,output_checker31308,meta31317){
this.validate__16917__auto__ = validate__16917__auto__;
this.owner = owner;
this.data = data;
this.input_checker31307 = input_checker31307;
this.G__31310 = G__31310;
this.input_schema31306 = input_schema31306;
this.G__31309 = G__31309;
this.output_schema31305 = output_schema31305;
this.app = app;
this.ufv__ = ufv__;
this.output_checker31308 = output_checker31308;
this.meta31317 = meta31317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.main.t31316.prototype.om$core$IDisplayName$ = true;

shapes.main.t31316.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

shapes.main.t31316.prototype.om$core$IRender$ = true;

shapes.main.t31316.prototype.om$core$IRender$render$arity$1 = ((function (validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none", "cursor": "default"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white"}),sablono.interpreter.interpret.call(null,shapes.main.interface$.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(window.innerHeight / (10))], null))),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))))));
});})(validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

shapes.main.t31316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function (_31318){
var self__ = this;
var _31318__$1 = this;
return self__.meta31317;
});})(validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

shapes.main.t31316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function (_31318,meta31317__$1){
var self__ = this;
var _31318__$1 = this;
return (new shapes.main.t31316(self__.validate__16917__auto__,self__.owner,self__.data,self__.input_checker31307,self__.G__31310,self__.input_schema31306,self__.G__31309,self__.output_schema31305,self__.app,self__.ufv__,self__.output_checker31308,meta31317__$1));
});})(validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

shapes.main.t31316.cljs$lang$type = true;

shapes.main.t31316.cljs$lang$ctorStr = "shapes.main/t31316";

shapes.main.t31316.cljs$lang$ctorPrWriter = ((function (validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.main/t31316");
});})(validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

shapes.main.__GT_t31316 = ((function (validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325){
return (function __GT_t31316(validate__16917__auto____$1,owner__$1,data__$1,input_checker31307__$1,G__31310__$1,input_schema31306__$1,G__31309__$1,output_schema31305__$1,app__$1,ufv____$1,output_checker31308__$1,meta31317){
return (new shapes.main.t31316(validate__16917__auto____$1,owner__$1,data__$1,input_checker31307__$1,G__31310__$1,input_schema31306__$1,G__31309__$1,output_schema31305__$1,app__$1,ufv____$1,output_checker31308__$1,meta31317));
});})(validate__16917__auto__,ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

}

return (new shapes.main.t31316(validate__16917__auto__,owner,data,input_checker31307_31324,G__31310,input_schema31306_31323,G__31309,output_schema31305_31322,app,ufv___31321,output_checker31308_31325,null));
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___31329 = output_checker31308_31325.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___31329)){
var error__16919__auto___31330 = temp__4406__auto___31329;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16919__auto___31330)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___31330,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema31305_31322,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___31321,output_schema31305_31322,input_schema31306_31323,input_checker31307_31324,output_checker31308_31325))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.main.app),schema.core.make_fn_schema.call(null,output_schema31305_31322,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31306_31323], null)));

shapes.main.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18705__auto__){
return om.core.build.call(null,shapes.main.app,cursor__18705__auto__);
});
var __GT_app__2 = (function (cursor__18705__auto__,m31304){
return om.core.build.call(null,shapes.main.app,cursor__18705__auto__,m31304);
});
__GT_app = function(cursor__18705__auto__,m31304){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18705__auto__);
case 2:
return __GT_app__2.call(this,cursor__18705__auto__,m31304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
om.core.root.call(null,shapes.main.app,shapes.main.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=main.js.map