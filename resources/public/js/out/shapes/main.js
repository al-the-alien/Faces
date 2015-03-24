// Compiled by ClojureScript 0.0-2816 {}
goog.provide('shapes.main');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('om_tools.core');
goog.require('sablono.core');
goog.require('om.core');
if(typeof shapes.main.app_state !== 'undefined'){
} else {
shapes.main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, production!"], null));
}

var ufv___21185 = schema.utils.use_fn_validation;
var output_schema21171_21186 = schema.core.Any;
var input_schema21172_21187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker21173_21188 = schema.core.checker.call(null,input_schema21172_21187);
var output_checker21174_21189 = schema.core.checker.call(null,output_schema21171_21186);
/**
* Inputs: [data owner]
*/
shapes.main.app = ((function (ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function app(G__21175,G__21176){
var validate__16797__auto__ = ufv___21185.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___21190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__21175,G__21176], null);
var temp__4406__auto___21191 = input_checker21173_21188.call(null,args__16798__auto___21190);
if(cljs.core.truth_(temp__4406__auto___21191)){
var error__16799__auto___21192 = temp__4406__auto___21191;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16799__auto___21192)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___21192,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___21190,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema21172_21187,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var data = G__21175;
var owner = G__21176;
while(true){
if(typeof shapes.main.t21181 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.main.t21181 = (function (owner,data,validate__16797__auto__,output_schema21171,output_checker21174,G__21175,input_schema21172,input_checker21173,G__21176,app,ufv__,meta21182){
this.owner = owner;
this.data = data;
this.validate__16797__auto__ = validate__16797__auto__;
this.output_schema21171 = output_schema21171;
this.output_checker21174 = output_checker21174;
this.G__21175 = G__21175;
this.input_schema21172 = input_schema21172;
this.input_checker21173 = input_checker21173;
this.G__21176 = G__21176;
this.app = app;
this.ufv__ = ufv__;
this.meta21182 = meta21182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.main.t21181.prototype.om$core$IDisplayName$ = true;

shapes.main.t21181.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

shapes.main.t21181.prototype.om$core$IRender$ = true;

shapes.main.t21181.prototype.om$core$IRender$render$arity$1 = ((function (validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function (_){
var self__ = this;
var ___$1 = this;
var attrs21184 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs21184))?sablono.interpreter.attributes.call(null,attrs21184):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21184))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21184)], null))));
});})(validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

shapes.main.t21181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function (_21183){
var self__ = this;
var _21183__$1 = this;
return self__.meta21182;
});})(validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

shapes.main.t21181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function (_21183,meta21182__$1){
var self__ = this;
var _21183__$1 = this;
return (new shapes.main.t21181(self__.owner,self__.data,self__.validate__16797__auto__,self__.output_schema21171,self__.output_checker21174,self__.G__21175,self__.input_schema21172,self__.input_checker21173,self__.G__21176,self__.app,self__.ufv__,meta21182__$1));
});})(validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

shapes.main.t21181.cljs$lang$type = true;

shapes.main.t21181.cljs$lang$ctorStr = "shapes.main/t21181";

shapes.main.t21181.cljs$lang$ctorPrWriter = ((function (validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.main/t21181");
});})(validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

shapes.main.__GT_t21181 = ((function (validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189){
return (function __GT_t21181(owner__$1,data__$1,validate__16797__auto____$1,output_schema21171__$1,output_checker21174__$1,G__21175__$1,input_schema21172__$1,input_checker21173__$1,G__21176__$1,app__$1,ufv____$1,meta21182){
return (new shapes.main.t21181(owner__$1,data__$1,validate__16797__auto____$1,output_schema21171__$1,output_checker21174__$1,G__21175__$1,input_schema21172__$1,input_checker21173__$1,G__21176__$1,app__$1,ufv____$1,meta21182));
});})(validate__16797__auto__,ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

}

return (new shapes.main.t21181(owner,data,validate__16797__auto__,output_schema21171_21186,output_checker21174_21189,G__21175,input_schema21172_21187,input_checker21173_21188,G__21176,app,ufv___21185,null));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___21193 = output_checker21174_21189.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___21193)){
var error__16799__auto___21194 = temp__4406__auto___21193;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16799__auto___21194)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___21194,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema21171_21186,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___21185,output_schema21171_21186,input_schema21172_21187,input_checker21173_21188,output_checker21174_21189))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.main.app),schema.core.make_fn_schema.call(null,output_schema21171_21186,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema21172_21187], null)));

shapes.main.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__21115__auto__){
return om.core.build.call(null,shapes.main.app,cursor__21115__auto__);
});
var __GT_app__2 = (function (cursor__21115__auto__,m21170){
return om.core.build.call(null,shapes.main.app,cursor__21115__auto__,m21170);
});
__GT_app = function(cursor__21115__auto__,m21170){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__21115__auto__);
case 2:
return __GT_app__2.call(this,cursor__21115__auto__,m21170);
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