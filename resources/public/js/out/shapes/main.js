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

var ufv___10995 = schema.utils.use_fn_validation;
var output_schema10979_10996 = schema.core.Any;
var input_schema10980_10997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker10981_10998 = schema.core.checker.call(null,input_schema10980_10997);
var output_checker10982_10999 = schema.core.checker.call(null,output_schema10979_10996);
/**
* Inputs: [data owner]
*/
shapes.main.app = ((function (ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function app(G__10983,G__10984){
var validate__7745__auto__ = ufv___10995.get_cell();
if(cljs.core.truth_(validate__7745__auto__)){
var args__7746__auto___11000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10983,G__10984], null);
var temp__4406__auto___11001 = input_checker10981_10998.call(null,args__7746__auto___11000);
if(cljs.core.truth_(temp__4406__auto___11001)){
var error__7747__auto___11002 = temp__4406__auto___11001;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__7747__auto___11002)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11002,new cljs.core.Keyword(null,"value","value",305978217),args__7746__auto___11000,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10980_10997,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__7748__auto__ = (function (){var data = G__10983;
var owner = G__10984;
while(true){
if(typeof shapes.main.t10990 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.main.t10990 = (function (G__10984,owner,data,output_schema10979,G__10983,output_checker10982,validate__7745__auto__,app,ufv__,input_schema10980,input_checker10981,meta10991){
this.G__10984 = G__10984;
this.owner = owner;
this.data = data;
this.output_schema10979 = output_schema10979;
this.G__10983 = G__10983;
this.output_checker10982 = output_checker10982;
this.validate__7745__auto__ = validate__7745__auto__;
this.app = app;
this.ufv__ = ufv__;
this.input_schema10980 = input_schema10980;
this.input_checker10981 = input_checker10981;
this.meta10991 = meta10991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.main.t10990.prototype.om$core$IDisplayName$ = true;

shapes.main.t10990.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

shapes.main.t10990.prototype.om$core$IRender$ = true;

shapes.main.t10990.prototype.om$core$IRender$render$arity$1 = ((function (validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("g",{"id": "canvas", "fontFamily": "Verdana", "style": {"userSelect": "none", "MsUserSelect": "none", "MozUserSelect": "none", "WebkitUserSelect": "none", "cursor": "default"}},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "white"}),sablono.interpreter.interpret.call(null,shapes.main.interface$.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(window.innerHeight / (10))], null))),sablono.interpreter.interpret.call(null,shapes.core.draw_face.call(null,new cljs.core.Keyword(null,"measurements","measurements",82224007).cljs$core$IFn$_invoke$arity$1(self__.data))))));
});})(validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

shapes.main.t10990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function (_10992){
var self__ = this;
var _10992__$1 = this;
return self__.meta10991;
});})(validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

shapes.main.t10990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function (_10992,meta10991__$1){
var self__ = this;
var _10992__$1 = this;
return (new shapes.main.t10990(self__.G__10984,self__.owner,self__.data,self__.output_schema10979,self__.G__10983,self__.output_checker10982,self__.validate__7745__auto__,self__.app,self__.ufv__,self__.input_schema10980,self__.input_checker10981,meta10991__$1));
});})(validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

shapes.main.t10990.cljs$lang$type = true;

shapes.main.t10990.cljs$lang$ctorStr = "shapes.main/t10990";

shapes.main.t10990.cljs$lang$ctorPrWriter = ((function (validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function (this__6493__auto__,writer__6494__auto__,opt__6495__auto__){
return cljs.core._write.call(null,writer__6494__auto__,"shapes.main/t10990");
});})(validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

shapes.main.__GT_t10990 = ((function (validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999){
return (function __GT_t10990(G__10984__$1,owner__$1,data__$1,output_schema10979__$1,G__10983__$1,output_checker10982__$1,validate__7745__auto____$1,app__$1,ufv____$1,input_schema10980__$1,input_checker10981__$1,meta10991){
return (new shapes.main.t10990(G__10984__$1,owner__$1,data__$1,output_schema10979__$1,G__10983__$1,output_checker10982__$1,validate__7745__auto____$1,app__$1,ufv____$1,input_schema10980__$1,input_checker10981__$1,meta10991));
});})(validate__7745__auto__,ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

}

return (new shapes.main.t10990(G__10984,owner,data,output_schema10979_10996,G__10983,output_checker10982_10999,validate__7745__auto__,app,ufv___10995,input_schema10980_10997,input_checker10981_10998,null));
break;
}
})();
if(cljs.core.truth_(validate__7745__auto__)){
var temp__4406__auto___11003 = output_checker10982_10999.call(null,o__7748__auto__);
if(cljs.core.truth_(temp__4406__auto___11003)){
var error__7747__auto___11004 = temp__4406__auto___11003;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__7747__auto___11004)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__7747__auto___11004,new cljs.core.Keyword(null,"value","value",305978217),o__7748__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10979_10996,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__7748__auto__;
});})(ufv___10995,output_schema10979_10996,input_schema10980_10997,input_checker10981_10998,output_checker10982_10999))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.main.app),schema.core.make_fn_schema.call(null,output_schema10979_10996,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10980_10997], null)));

shapes.main.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__10251__auto__){
return om.core.build.call(null,shapes.main.app,cursor__10251__auto__);
});
var __GT_app__2 = (function (cursor__10251__auto__,m10978){
return om.core.build.call(null,shapes.main.app,cursor__10251__auto__,m10978);
});
__GT_app = function(cursor__10251__auto__,m10978){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__10251__auto__);
case 2:
return __GT_app__2.call(this,cursor__10251__auto__,m10978);
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