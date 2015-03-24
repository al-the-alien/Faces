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
var G__54934__i = 0, G__54934__a = new Array(arguments.length -  0);
while (G__54934__i < G__54934__a.length) {G__54934__a[G__54934__i] = arguments[G__54934__i + 0]; ++G__54934__i;}
  content = new cljs.core.IndexedSeq(G__54934__a,0);
} 
return println__delegate.call(this,content);};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__54935){
var content = cljs.core.seq(arglist__54935);
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
shapes.dev.eyes = (function eyes(p__54936){
var map__54938 = p__54936;
var map__54938__$1 = ((cljs.core.seq_QMARK_.call(null,map__54938))?cljs.core.apply.call(null,cljs.core.hash_map,map__54938):map__54938);
var height = cljs.core.get.call(null,map__54938__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__54938__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__54938__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__54938__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = (y - (height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(4),(8)))));
var x_offset = (width / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(3),(6))));
var cx_a = (x - x_offset);
var cx_b = (x + x_offset);
var rx = (width / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(4),(6))));
var ry = (height / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(6))));
var prx = (rx / cljs.core.rand_nth.call(null,cljs.core.range.call(null,1.5,(8))));
var pry = (ry / cljs.core.rand_nth.call(null,cljs.core.range.call(null,(2),(8))));
var pcx_offset = cljs.core.rand_nth.call(null,cljs.core.range.call(null,(prx - rx),(rx - prx)));
var pcxa = (cx_a + pcx_offset);
var pcxb = (cx_b + pcx_offset);
var pcy = cljs.core.rand_nth.call(null,cljs.core.range.call(null,((cy - ry) + pry),((cy + ry) - pry)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"prx","prx",-15032060),new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792),new cljs.core.Keyword(null,"pry","pry",1508120329),new cljs.core.Keyword(null,"cx-a","cx-a",-1345949141),new cljs.core.Keyword(null,"pcy","pcy",-1228409588),new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"cx-b","cx-b",973144117),new cljs.core.Keyword(null,"ry","ry",-334598563)],[rx,prx,pcxa,pry,cx_a,pcy,pcxb,cy,cx_b,ry]);
});
shapes.dev.draw_eyes = (function draw_eyes(p__54939){
var map__54941 = p__54939;
var map__54941__$1 = ((cljs.core.seq_QMARK_.call(null,map__54941))?cljs.core.apply.call(null,cljs.core.hash_map,map__54941):map__54941);
var ry = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
var rx = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var prx = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"prx","prx",-15032060));
var pcxa = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"pcxa","pcxa",-2041028792));
var pry = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"pry","pry",1508120329));
var cx_a = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"cx-a","cx-a",-1345949141));
var pcy = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"pcy","pcy",-1228409588));
var pcxb = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"pcxb","pcxb",-1542026351));
var cy = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var cx_b = cljs.core.get.call(null,map__54941__$1,new cljs.core.Keyword(null,"cx-b","cx-b",973144117));
return React.createElement("g",{"className": "eyes", "stroke": "black", "strokeWidth": (3)},React.createElement("defs",null,React.createElement("clippath",{"id": "pupil-a"},React.createElement("ellipse",{"cx": cx_a, "cy": cy, "rx": rx, "ry": ry})),React.createElement("clippath",{"id": "pupil-b"},React.createElement("ellipse",{"cx": cx_b, "cy": cy, "rx": rx, "ry": ry}))),React.createElement("ellipse",{"cx": cx_a, "cy": cy, "rx": rx, "ry": ry, "fill": "white"}),React.createElement("ellipse",{"className": "pupil", "cx": pcxa, "cy": pcy, "rx": prx, "ry": pry, "fill": "black", "clipPath": "url(#pupil-a)"}),React.createElement("ellipse",{"cx": cx_b, "cy": cy, "rx": rx, "ry": ry, "fill": "white"}),React.createElement("ellipse",{"className": "pupil", "cx": pcxb, "cy": pcy, "rx": prx, "ry": pry, "fill": "black", "clipPath": "url(#pupil-b)"}));
});
shapes.dev.combine = (function combine(owner,p__54943,b){
var map__54945 = p__54943;
var map__54945__$1 = ((cljs.core.seq_QMARK_.call(null,map__54945))?cljs.core.apply.call(null,cljs.core.hash_map,map__54945):map__54945);
var a = map__54945__$1;
var height = cljs.core.get.call(null,map__54945__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__54945__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__54945__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__54945__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"shapes","shapes",1897594879),((function (map__54945,map__54945__$1,a,height,width,y,x){
return (function (p1__54942_SHARP_){
return cljs.core.dissoc.call(null,p1__54942_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b));
});})(map__54945,map__54945__$1,a,height,width,y,x))
);
});
shapes.dev.shape = (function shape(owner,x,y){
var id = cljs.core.gensym.call(null,"shape");
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.rand_nth.call(null,cljs.core.range.call(null,(100),(200))),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core.rand_nth.call(null,cljs.core.range.call(null,(100),(200))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id){
return (function (_){
shapes.dev.println.call(null,"selected: ",id);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected","selected",574897764),id);
});})(id))
], null);
});
shapes.dev.draw_shape = (function draw_shape(p__54946){
var map__54948 = p__54946;
var map__54948__$1 = ((cljs.core.seq_QMARK_.call(null,map__54948))?cljs.core.apply.call(null,cljs.core.hash_map,map__54948):map__54948);
var on_click = cljs.core.get.call(null,map__54948__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var stroke = cljs.core.get.call(null,map__54948__$1,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var height = cljs.core.get.call(null,map__54948__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__54948__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.call(null,map__54948__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__54948__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return React.createElement("rect",{"x": (x - (width / (2))), "y": (y - (height / (2))), "width": width, "height": height, "strokeWidth": (5), "stroke": (function (){var or__14444__auto__ = stroke;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return "black";
}
})(), "fill": "white", "onClick": on_click});
});

var ufv___54970 = schema.utils.use_fn_validation;
var output_schema54950_54971 = schema.core.Any;
var input_schema54951_54972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker54952_54973 = schema.core.checker.call(null,input_schema54951_54972);
var output_checker54953_54974 = schema.core.checker.call(null,output_schema54950_54971);
/**
* Inputs: [data owner]
*/
shapes.dev.app = ((function (ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function app(G__54954,G__54955){
var validate__16797__auto__ = ufv___54970.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___54975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__54954,G__54955], null);
var temp__4406__auto___54976 = input_checker54952_54973.call(null,args__16798__auto___54975);
if(cljs.core.truth_(temp__4406__auto___54976)){
var error__16799__auto___54977 = temp__4406__auto___54976;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16799__auto___54977)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___54977,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___54975,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema54951_54972,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var data = G__54954;
var owner = G__54955;
while(true){
if(typeof shapes.dev.t54963 !== 'undefined'){
} else {

/**
* @constructor
*/
shapes.dev.t54963 = (function (owner,data,validate__16797__auto__,input_schema54951,output_checker54953,G__54954,output_schema54950,G__54955,input_checker54952,app,ufv__,meta54964){
this.owner = owner;
this.data = data;
this.validate__16797__auto__ = validate__16797__auto__;
this.input_schema54951 = input_schema54951;
this.output_checker54953 = output_checker54953;
this.G__54954 = G__54954;
this.output_schema54950 = output_schema54950;
this.G__54955 = G__54955;
this.input_checker54952 = input_checker54952;
this.app = app;
this.ufv__ = ufv__;
this.meta54964 = meta54964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shapes.dev.t54963.prototype.om$core$IDisplayName$ = true;

shapes.dev.t54963.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (_){
var self__ = this;
var ___$1 = this;
return "app";
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

shapes.dev.t54963.prototype.om$core$IRenderState$ = true;

shapes.dev.t54963.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (_,p__54966){
var self__ = this;
var map__54967 = p__54966;
var map__54967__$1 = ((cljs.core.seq_QMARK_.call(null,map__54967))?cljs.core.apply.call(null,cljs.core.hash_map,map__54967):map__54967);
var lils = cljs.core.get.call(null,map__54967__$1,new cljs.core.Keyword(null,"lils","lils",-1227263881));
var shapes__$1 = cljs.core.get.call(null,map__54967__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var selected = cljs.core.get.call(null,map__54967__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var ___$1 = this;
return React.createElement("div",{"className": "container"},React.createElement("svg",{"version": 1.1, "baseProfile": "full", "width": window.innerWidth, "height": window.innerHeight, "xmlns": "http://www.w3.org/2000/svg"},React.createElement("rect",{"id": "background", "x": (0), "y": (0), "width": "100%", "height": "100%", "fill": "transparent", "onClick": ((function (___$1,map__54967,map__54967__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (e){
var new_shape = shapes.dev.shape.call(null,self__.owner,e.clientX,e.clientY);
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape)], null),new_shape);
});})(___$1,map__54967,map__54967__$1,lils,shapes__$1,selected,validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
}),React.createElement("ellipse",{"cx": (400), "cy": (200), "rx": (75), "ry": (100), "stroke": "black", "fill": "white"}),sablono.interpreter.interpret.call(null,shapes.dev.draw_eyes.call(null,shapes.dev.eyes.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null))))));
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

shapes.dev.t54963.prototype.om$core$IInitState$ = true;

shapes.dev.t54963.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lils","lils",-1227263881),cljs.core.PersistentArrayMap.EMPTY], null);
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

shapes.dev.t54963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (_54965){
var self__ = this;
var _54965__$1 = this;
return self__.meta54964;
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

shapes.dev.t54963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (_54965,meta54964__$1){
var self__ = this;
var _54965__$1 = this;
return (new shapes.dev.t54963(self__.owner,self__.data,self__.validate__16797__auto__,self__.input_schema54951,self__.output_checker54953,self__.G__54954,self__.output_schema54950,self__.G__54955,self__.input_checker54952,self__.app,self__.ufv__,meta54964__$1));
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

shapes.dev.t54963.cljs$lang$type = true;

shapes.dev.t54963.cljs$lang$ctorStr = "shapes.dev/t54963";

shapes.dev.t54963.cljs$lang$ctorPrWriter = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"shapes.dev/t54963");
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

shapes.dev.__GT_t54963 = ((function (validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974){
return (function __GT_t54963(owner__$1,data__$1,validate__16797__auto____$1,input_schema54951__$1,output_checker54953__$1,G__54954__$1,output_schema54950__$1,G__54955__$1,input_checker54952__$1,app__$1,ufv____$1,meta54964){
return (new shapes.dev.t54963(owner__$1,data__$1,validate__16797__auto____$1,input_schema54951__$1,output_checker54953__$1,G__54954__$1,output_schema54950__$1,G__54955__$1,input_checker54952__$1,app__$1,ufv____$1,meta54964));
});})(validate__16797__auto__,ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

}

return (new shapes.dev.t54963(owner,data,validate__16797__auto__,input_schema54951_54972,output_checker54953_54974,G__54954,output_schema54950_54971,G__54955,input_checker54952_54973,app,ufv___54970,null));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___54978 = output_checker54953_54974.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___54978)){
var error__16799__auto___54979 = temp__4406__auto___54978;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__16799__auto___54979)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___54979,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema54950_54971,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___54970,output_schema54950_54971,input_schema54951_54972,input_checker54952_54973,output_checker54953_54974))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,shapes.dev.app),schema.core.make_fn_schema.call(null,output_schema54950_54971,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema54951_54972], null)));

shapes.dev.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__21115__auto__){
return om.core.build.call(null,shapes.dev.app,cursor__21115__auto__);
});
var __GT_app__2 = (function (cursor__21115__auto__,m54949){
return om.core.build.call(null,shapes.dev.app,cursor__21115__auto__,m54949);
});
__GT_app = function(cursor__21115__auto__,m54949){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__21115__auto__);
case 2:
return __GT_app__2.call(this,cursor__21115__auto__,m54949);
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