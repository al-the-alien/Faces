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
shapes.main.app_state = (function (){var G__18551 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$190,shapes.core.face.cljs$core$IFn$_invoke$arity$variadic(false,cljs.core.array_seq([cljs.core.constant$keyword$191,false], 0))], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18551) : cljs.core.atom.call(null,G__18551));
})();
}
shapes.main.interface$ = (function interface$(data,new_face){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$194,(window.innerWidth / (2)),cljs.core.constant$keyword$195,(25),cljs.core.constant$keyword$196,"middle",cljs.core.constant$keyword$197,"#222",cljs.core.constant$keyword$198,"#222",cljs.core.constant$keyword$199,(20)], null),"Procedurally Generated Faces"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$201,(function (){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$190,shapes.core.face(cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1((function (){var G__18553 = data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18553) : cljs.core.deref.call(null,G__18553));
})())));
}),cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$202,"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$203,cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$195,cljs.core.constant$keyword$145,cljs.core.constant$keyword$197,cljs.core.constant$keyword$198,cljs.core.constant$keyword$129,cljs.core.constant$keyword$204,cljs.core.constant$keyword$194,cljs.core.constant$keyword$146,cljs.core.constant$keyword$130],[cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(new_face),(10),"#AAA","#DDD",(100),(3),(cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(new_face) - (25)),(10),(50)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$194,(cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(new_face) + (25)),cljs.core.constant$keyword$195,(cljs.core.constant$keyword$195.cljs$core$IFn$_invoke$arity$1(new_face) + (30)),cljs.core.constant$keyword$197,"#333",cljs.core.constant$keyword$198,"#333",cljs.core.constant$keyword$196,"middle"], null),"New face"], null)], null)], null);
});

var ufv___18601 = schema.utils.use_fn_validation;
var output_schema18555_18602 = schema.core.Any;
var input_schema18556_18603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker18557_18604 = schema.core.checker(input_schema18556_18603);
var output_checker18558_18605 = schema.core.checker(output_schema18555_18602);
/**
* Inputs: [data owner]
*/
shapes.main.app = ((function (ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function app(G__18559,G__18560){
var validate__12846__auto__ = ufv___18601.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___18606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18559,G__18560], null);
var temp__4406__auto___18607 = (function (){var G__18581 = args__12847__auto___18606;
return (input_checker18557_18604.cljs$core$IFn$_invoke$arity$1 ? input_checker18557_18604.cljs$core$IFn$_invoke$arity$1(G__18581) : input_checker18557_18604.call(null,G__18581));
})();
if(cljs.core.truth_(temp__4406__auto___18607)){
var error__12848__auto___18608 = temp__4406__auto___18607;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18608], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18608,cljs.core.constant$keyword$18,args__12847__auto___18606,cljs.core.constant$keyword$19,input_schema18556_18603,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var data = G__18559;
var owner = G__18560;
while(true){
if(typeof shapes.main.t18582 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.main.t18582 = (function (G__18559,owner,G__18560,data,validate__12846__auto__,output_schema18555,output_checker18558,input_checker18557,input_schema18556,app,ufv__,meta18583){
this.G__18559 = G__18559;
this.owner = owner;
this.G__18560 = G__18560;
this.data = data;
this.validate__12846__auto__ = validate__12846__auto__;
this.output_schema18555 = output_schema18555;
this.output_checker18558 = output_checker18558;
this.input_checker18557 = input_checker18557;
this.input_schema18556 = input_schema18556;
this.app = app;
this.ufv__ = ufv__;
this.meta18583 = meta18583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.main.t18582.prototype.om$core$IDisplayName$ = true;

shapes.main.t18582.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

shapes.main.t18582.prototype.om$core$IRender$ = true;

shapes.main.t18582.prototype.om$core$IRender$render$arity$1 = ((function (validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18587 = "div";
var G__18588 = {"className": "container"};
var G__18589 = (function (){var G__18590 = "svg";
var G__18591 = {"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"};
var G__18592 = (function (){var G__18593 = "g";
var G__18594 = {"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none", "cursor": "default"}};
var G__18595 = (function (){var G__18598 = "rect";
var G__18599 = {"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white"};
return React.createElement(G__18598,G__18599);
})();
var G__18596 = sablono.interpreter.interpret(shapes.main.interface$(self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,(50),cljs.core.constant$keyword$195,(window.innerHeight / (10))], null)));
var G__18597 = sablono.interpreter.interpret(shapes.core.draw_face(cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(self__.data)));
return React.createElement(G__18593,G__18594,G__18595,G__18596,G__18597);
})();
return React.createElement(G__18590,G__18591,G__18592);
})();
return React.createElement(G__18587,G__18588,G__18589);
});})(validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

shapes.main.t18582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function (_18584){
var self__ = this;
var _18584__$1 = this;
return self__.meta18583;
});})(validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

shapes.main.t18582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function (_18584,meta18583__$1){
var self__ = this;
var _18584__$1 = this;
return (new shapes.main.t18582(self__.G__18559,self__.owner,self__.G__18560,self__.data,self__.validate__12846__auto__,self__.output_schema18555,self__.output_checker18558,self__.input_checker18557,self__.input_schema18556,self__.app,self__.ufv__,meta18583__$1));
});})(validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

shapes.main.t18582.cljs$lang$type = true;

shapes.main.t18582.cljs$lang$ctorStr = "shapes.main/t18582";

shapes.main.t18582.cljs$lang$ctorPrWriter = ((function (validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function (this__6477__auto__,writer__6478__auto__,opt__6479__auto__){
return cljs.core._write(writer__6478__auto__,"shapes.main/t18582");
});})(validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

shapes.main.__GT_t18582 = ((function (validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605){
return (function __GT_t18582(G__18559__$1,owner__$1,G__18560__$1,data__$1,validate__12846__auto____$1,output_schema18555__$1,output_checker18558__$1,input_checker18557__$1,input_schema18556__$1,app__$1,ufv____$1,meta18583){
return (new shapes.main.t18582(G__18559__$1,owner__$1,G__18560__$1,data__$1,validate__12846__auto____$1,output_schema18555__$1,output_checker18558__$1,input_checker18557__$1,input_schema18556__$1,app__$1,ufv____$1,meta18583));
});})(validate__12846__auto__,ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

}

return (new shapes.main.t18582(G__18559,owner,G__18560,data,validate__12846__auto__,output_schema18555_18602,output_checker18558_18605,input_checker18557_18604,input_schema18556_18603,app,ufv___18601,null));
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___18609 = (function (){var G__18600 = o__12849__auto__;
return (output_checker18558_18605.cljs$core$IFn$_invoke$arity$1 ? output_checker18558_18605.cljs$core$IFn$_invoke$arity$1(G__18600) : output_checker18558_18605.call(null,G__18600));
})();
if(cljs.core.truth_(temp__4406__auto___18609)){
var error__12848__auto___18610 = temp__4406__auto___18609;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18610], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18610,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18555_18602,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18601,output_schema18555_18602,input_schema18556_18603,input_checker18557_18604,output_checker18558_18605))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(shapes.main.app),schema.core.make_fn_schema(output_schema18555_18602,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18556_18603], null)));

shapes.main.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__18197__auto__){
return om.core.build.cljs$core$IFn$_invoke$arity$2(shapes.main.app,cursor__18197__auto__);
});
var __GT_app__2 = (function (cursor__18197__auto__,m18554){
return om.core.build.cljs$core$IFn$_invoke$arity$3(shapes.main.app,cursor__18197__auto__,m18554);
});
__GT_app = function(cursor__18197__auto__,m18554){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__18197__auto__);
case 2:
return __GT_app__2.call(this,cursor__18197__auto__,m18554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
om.core.root(shapes.main.app,shapes.main.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,(function (){var G__18611 = "app";
return document.getElementById(G__18611);
})()], null));
