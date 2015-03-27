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

var ufv___188112 = schema.utils.use_fn_validation;
var output_schema188100_188113 = schema.core.Any;
var input_schema188101_188114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker188102_188115 = schema.core.checker.call(null,input_schema188101_188114);
var output_checker188103_188116 = schema.core.checker.call(null,output_schema188100_188113);
/**
* Inputs: [data owner]
*/
shapes.main.app = ((function (ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function app(G__188104,G__188105){
var validate__17001__auto__ = ufv___188112.get_cell();
if(cljs.core.truth_(validate__17001__auto__)){
var args__17002__auto___188117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__188104,G__188105], null);
var temp__4406__auto___188118 = input_checker188102_188115.call(null,args__17002__auto___188117);
if(cljs.core.truth_(temp__4406__auto___188118)){
var error__17003__auto___188119 = temp__4406__auto___188118;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___188119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___188119,new cljs.core.Keyword(null,"value","value",305978217),args__17002__auto___188117,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema188101_188114,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__17004__auto__ = (function (){var data = G__188104;
var owner = G__188105;
while(true){
if(typeof shapes.main.t188109 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.main.t188109 = (function (output_checker188103,output_schema188100,owner,data,G__188105,G__188104,input_schema188101,validate__17001__auto__,input_checker188102,app,ufv__,meta188110){
this.output_checker188103 = output_checker188103;
this.output_schema188100 = output_schema188100;
this.owner = owner;
this.data = data;
this.G__188105 = G__188105;
this.G__188104 = G__188104;
this.input_schema188101 = input_schema188101;
this.validate__17001__auto__ = validate__17001__auto__;
this.input_checker188102 = input_checker188102;
this.app = app;
this.ufv__ = ufv__;
this.meta188110 = meta188110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.main.t188109.prototype.om$core$IDisplayName$ = true;

shapes.main.t188109.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

shapes.main.t188109.prototype.om$core$IRender$ = true;

shapes.main.t188109.prototype.om$core$IRender$render$arity$1 = ((function (validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white", "onClick": ((function (___$1,validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(self__.data))){
return null;
} else {
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))));
}
});})(___$1,validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
}),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))))));
});})(validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

shapes.main.t188109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function (_188111){
var self__ = this;
var _188111__$1 = this;
return self__.meta188110;
});})(validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

shapes.main.t188109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function (_188111,meta188110__$1){
var self__ = this;
var _188111__$1 = this;
return (new shapes.main.t188109(self__.output_checker188103,self__.output_schema188100,self__.owner,self__.data,self__.G__188105,self__.G__188104,self__.input_schema188101,self__.validate__17001__auto__,self__.input_checker188102,self__.app,self__.ufv__,meta188110__$1));
});})(validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

shapes.main.t188109.cljs$lang$type = true;

shapes.main.t188109.cljs$lang$ctorStr = "shapes.main/t188109";

shapes.main.t188109.cljs$lang$ctorPrWriter = ((function (validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.main/t188109");
});})(validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

shapes.main.__GT_t188109 = ((function (validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116){
return (function __GT_t188109(output_checker188103__$1,output_schema188100__$1,owner__$1,data__$1,G__188105__$1,G__188104__$1,input_schema188101__$1,validate__17001__auto____$1,input_checker188102__$1,app__$1,ufv____$1,meta188110){
return (new shapes.main.t188109(output_checker188103__$1,output_schema188100__$1,owner__$1,data__$1,G__188105__$1,G__188104__$1,input_schema188101__$1,validate__17001__auto____$1,input_checker188102__$1,app__$1,ufv____$1,meta188110));
});})(validate__17001__auto__,ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

}

return (new shapes.main.t188109(output_checker188103_188116,output_schema188100_188113,owner,data,G__188105,G__188104,input_schema188101_188114,validate__17001__auto__,input_checker188102_188115,app,ufv___188112,null));
break;
}
})();
if(cljs.core.truth_(validate__17001__auto__)){
var temp__4406__auto___188120 = output_checker188103_188116.call(null,o__17004__auto__);
if(cljs.core.truth_(temp__4406__auto___188120)){
var error__17003__auto___188121 = temp__4406__auto___188120;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__17003__auto___188121)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__17003__auto___188121,new cljs.core.Keyword(null,"value","value",305978217),o__17004__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema188100_188113,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__17004__auto__;
});})(ufv___188112,output_schema188100_188113,input_schema188101_188114,input_checker188102_188115,output_checker188103_188116))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.main.app),schema.core.make_fn_schema.call(null,output_schema188100_188113,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema188101_188114], null)));

shapes.main.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18789__auto__){
return om.core.build.call(null,shapes.main.app,cursor__18789__auto__);
});
var __GT_app__2 = (function (cursor__18789__auto__,m188099){
return om.core.build.call(null,shapes.main.app,cursor__18789__auto__,m188099);
});
__GT_app = function(cursor__18789__auto__,m188099){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18789__auto__);
case 2:
return __GT_app__2.call(this,cursor__18789__auto__,m188099);
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