// Compiled by ClojureScript 0.0-3308 {}
goog.provide('shapes.main');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('dommy.core');
goog.require('shapes.core');
if(typeof shapes.main.app_state !== 'undefined'){
} else {
shapes.main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,false,new cljs.core.Keyword(null,"proportional","proportional",-108854946),false)], null));
}
shapes.main.interface$ = (function shapes$main$interface(data,new_face){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text#header","text#header",1136382258),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#222",new cljs.core.Keyword(null,"fill","fill",883462889),"#222",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null),"Procedurally Generated Faces"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#click-me","g#click-me",1111440157),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"measurements","measurements",82224007),shapes.core.face.call(null,new cljs.core.Keyword(null,"avg?","avg?",265252797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_face),(10),"#AAA","#DDD",(100),(3),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_face) - (25)),(10),(50)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_face) + (25)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_face) + (30)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#333",new cljs.core.Keyword(null,"fill","fill",883462889),"#333",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),"New face"], null)], null)], null);
});

var ufv___23339 = schema.utils.use_fn_validation;
var output_schema23321_23340 = schema.core.Any;
var input_schema23322_23341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker23323_23342 = schema.core.checker.call(null,input_schema23322_23341);
var output_checker23324_23343 = schema.core.checker.call(null,output_schema23321_23340);
/**
 * Inputs: [data owner]
 */
shapes.main.app = ((function (ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function shapes$main$app(G__23325,G__23326){
var validate__18554__auto__ = ufv___23339.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___23344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23325,G__23326], null);
var temp__4425__auto___23345 = input_checker23323_23342.call(null,args__18555__auto___23344);
if(cljs.core.truth_(temp__4425__auto___23345)){
var error__18556__auto___23346 = temp__4425__auto___23345;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__18556__auto___23346)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23322_23341,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___23344,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___23346], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var data = G__23325;
var owner = G__23326;
while(true){
if(typeof shapes.main.t23332 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.main.t23332 = (function (owner,data,input_checker23323,input_schema23322,G__23325,output_checker23324,G__23326,output_schema23321,validate__18554__auto__,app,ufv__,meta23333){
this.owner = owner;
this.data = data;
this.input_checker23323 = input_checker23323;
this.input_schema23322 = input_schema23322;
this.G__23325 = G__23325;
this.output_checker23324 = output_checker23324;
this.G__23326 = G__23326;
this.output_schema23321 = output_schema23321;
this.validate__18554__auto__ = validate__18554__auto__;
this.app = app;
this.ufv__ = ufv__;
this.meta23333 = meta23333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
shapes.main.t23332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function (_23334,meta23333__$1){
var self__ = this;
var _23334__$1 = this;
return (new shapes.main.t23332(self__.owner,self__.data,self__.input_checker23323,self__.input_schema23322,self__.G__23325,self__.output_checker23324,self__.G__23326,self__.output_schema23321,self__.validate__18554__auto__,self__.app,self__.ufv__,meta23333__$1));
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

shapes.main.t23332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function (_23334){
var self__ = this;
var _23334__$1 = this;
return self__.meta23333;
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

shapes.main.t23332.prototype.om$core$IDisplayName$ = true;

shapes.main.t23332.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

shapes.main.t23332.prototype.om$core$IRender$ = true;

shapes.main.t23332.prototype.om$core$IRender$render$arity$1 = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none", "cursor": "default"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white"}),sablono.interpreter.interpret.call(null,shapes.main.interface$.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(window.innerHeight / (10))], null))),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))))));
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

shapes.main.t23332.getBasis = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-checker23323","input-checker23323",1412440970,null),new cljs.core.Symbol(null,"input-schema23322","input-schema23322",-941654645,null),new cljs.core.Symbol(null,"G__23325","G__23325",-1976889073,null),new cljs.core.Symbol(null,"output-checker23324","output-checker23324",-973192968,null),new cljs.core.Symbol(null,"G__23326","G__23326",-419337031,null),new cljs.core.Symbol(null,"output-schema23321","output-schema23321",1551650906,null),new cljs.core.Symbol(null,"validate__18554__auto__","validate__18554__auto__",202572828,null),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta23333","meta23333",-358795642,null)], null);
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

shapes.main.t23332.cljs$lang$type = true;

shapes.main.t23332.cljs$lang$ctorStr = "shapes.main/t23332";

shapes.main.t23332.cljs$lang$ctorPrWriter = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"shapes.main/t23332");
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

shapes.main.__GT_t23332 = ((function (validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343){
return (function shapes$main$app_$___GT_t23332(owner__$1,data__$1,input_checker23323__$1,input_schema23322__$1,G__23325__$1,output_checker23324__$1,G__23326__$1,output_schema23321__$1,validate__18554__auto____$1,app__$1,ufv____$1,meta23333){
return (new shapes.main.t23332(owner__$1,data__$1,input_checker23323__$1,input_schema23322__$1,G__23325__$1,output_checker23324__$1,G__23326__$1,output_schema23321__$1,validate__18554__auto____$1,app__$1,ufv____$1,meta23333));
});})(validate__18554__auto__,ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

}

return (new shapes.main.t23332(owner,data,input_checker23323_23342,input_schema23322_23341,G__23325,output_checker23324_23343,G__23326,output_schema23321_23340,validate__18554__auto__,shapes$main$app,ufv___23339,null));
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___23347 = output_checker23324_23343.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___23347)){
var error__18556__auto___23348 = temp__4425__auto___23347;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__18556__auto___23348)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23321_23340,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___23348], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___23339,output_schema23321_23340,input_schema23322_23341,input_checker23323_23342,output_checker23324_23343))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.main.app),schema.core.make_fn_schema.call(null,output_schema23321_23340,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23322_23341], null)));

shapes.main.__GT_app = (function shapes$main$__GT_app(){
var G__23338 = arguments.length;
switch (G__23338) {
case 1:
return shapes.main.__GT_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shapes.main.__GT_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

shapes.main.__GT_app.cljs$core$IFn$_invoke$arity$1 = (function (cursor__23210__auto__){
return om.core.build.call(null,shapes.main.app,cursor__23210__auto__);
});

shapes.main.__GT_app.cljs$core$IFn$_invoke$arity$2 = (function (cursor__23210__auto__,m23320){
return om.core.build.call(null,shapes.main.app,cursor__23210__auto__,m23320);
});

shapes.main.__GT_app.cljs$lang$maxFixedArity = 2;
om.core.root.call(null,shapes.main.app,shapes.main.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=main.js.map