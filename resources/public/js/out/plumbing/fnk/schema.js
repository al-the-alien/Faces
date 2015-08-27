// Compiled by ClojureScript 0.0-3308 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__18584__18585__auto__){
var G__28601 = p1__18584__18585__auto__;
if(G__28601){
var bit__17301__auto__ = null;
if(cljs.core.truth_((function (){var or__16627__auto__ = bit__17301__auto__;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return G__28601.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__28601.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__28601);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__28601);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__28602_SHARP_){
return (cljs.core.val.call(null,p1__28602_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__28604 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__28604,(0),null);
var v = cljs.core.nth.call(null,vec__28604,(1),null);
var p = vec__28604;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___28610 = schema.utils.use_fn_validation;
var output_schema28605_28611 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema28606_28612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker28607_28613 = schema.core.checker.call(null,input_schema28606_28612);
var output_checker28608_28614 = schema.core.checker.call(null,output_schema28605_28611);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___28610,output_schema28605_28611,input_schema28606_28612,input_checker28607_28613,output_checker28608_28614){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__28609){
var validate__18554__auto__ = ufv___28610.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28609], null);
var temp__4425__auto___28616 = input_checker28607_28613.call(null,args__18555__auto___28615);
if(cljs.core.truth_(temp__4425__auto___28616)){
var error__18556__auto___28617 = temp__4425__auto___28616;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__18556__auto___28617)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28606_28612,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28615,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28617], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var k = G__28609;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28618 = output_checker28608_28614.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28618)){
var error__18556__auto___28619 = temp__4425__auto___28618;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__18556__auto___28619)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28605_28611,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28619], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28610,output_schema28605_28611,input_schema28606_28612,input_checker28607_28613,output_checker28608_28614))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema28605_28611,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28606_28612], null)));
var ufv___28625 = schema.utils.use_fn_validation;
var output_schema28620_28626 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema28621_28627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker28622_28628 = schema.core.checker.call(null,input_schema28621_28627);
var output_checker28623_28629 = schema.core.checker.call(null,output_schema28620_28626);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___28625,output_schema28620_28626,input_schema28621_28627,input_checker28622_28628,output_checker28623_28629){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__28624){
var validate__18554__auto__ = ufv___28625.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28630 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28624], null);
var temp__4425__auto___28631 = input_checker28622_28628.call(null,args__18555__auto___28630);
if(cljs.core.truth_(temp__4425__auto___28631)){
var error__18556__auto___28632 = temp__4425__auto___28631;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__18556__auto___28632)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28621_28627,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28630,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28632], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var s = G__28624;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28633 = output_checker28623_28629.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28633)){
var error__18556__auto___28634 = temp__4425__auto___28633;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__18556__auto___28634)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28620_28626,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28634], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28625,output_schema28620_28626,input_schema28621_28627,input_checker28622_28628,output_checker28623_28629))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema28620_28626,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28621_28627], null)));
var ufv___28640 = schema.utils.use_fn_validation;
var output_schema28635_28641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema28636_28642 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker28637_28643 = schema.core.checker.call(null,input_schema28636_28642);
var output_checker28638_28644 = schema.core.checker.call(null,output_schema28635_28641);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___28640,output_schema28635_28641,input_schema28636_28642,input_checker28637_28643,output_checker28638_28644){
return (function plumbing$fnk$schema$split_schema_keys(G__28639){
var validate__18554__auto__ = ufv___28640.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28645 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28639], null);
var temp__4425__auto___28646 = input_checker28637_28643.call(null,args__18555__auto___28645);
if(cljs.core.truth_(temp__4425__auto___28646)){
var error__18556__auto___28647 = temp__4425__auto___28646;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__18556__auto___28647)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28636_28642,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28645,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28647], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var s = G__28639;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28648 = output_checker28638_28644.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28648)){
var error__18556__auto___28649 = temp__4425__auto___28648;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__18556__auto___28649)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28635_28641,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28649], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28640,output_schema28635_28641,input_schema28636_28642,input_checker28637_28643,output_checker28638_28644))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema28635_28641,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28636_28642], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__17667__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17667__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__28654){
var vec__28655 = p__28654;
var k = cljs.core.nth.call(null,vec__28655,(0),null);
var v = cljs.core.nth.call(null,vec__28655,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28656 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__28656,(0),null);
var ov = cljs.core.nth.call(null,vec__28656,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq28650){
var G__28651 = cljs.core.first.call(null,seq28650);
var seq28650__$1 = cljs.core.next.call(null,seq28650);
var G__28652 = cljs.core.first.call(null,seq28650__$1);
var seq28650__$2 = cljs.core.next.call(null,seq28650__$1);
var G__28653 = cljs.core.first.call(null,seq28650__$2);
var seq28650__$3 = cljs.core.next.call(null,seq28650__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__28651,G__28652,G__28653,seq28650__$3);
});
var ufv___28664 = schema.utils.use_fn_validation;
var output_schema28658_28665 = plumbing.fnk.schema.InputSchema;
var input_schema28659_28666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker28660_28667 = schema.core.checker.call(null,input_schema28659_28666);
var output_checker28661_28668 = schema.core.checker.call(null,output_schema28658_28665);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668){
return (function plumbing$fnk$schema$union_input_schemata(G__28662,G__28663){
var validate__18554__auto__ = ufv___28664.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28662,G__28663], null);
var temp__4425__auto___28670 = input_checker28660_28667.call(null,args__18555__auto___28669);
if(cljs.core.truth_(temp__4425__auto___28670)){
var error__18556__auto___28671 = temp__4425__auto___28670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__18556__auto___28671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28659_28666,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28669,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28671], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var i1 = G__28662;
var i2 = G__28663;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__18554__auto__,ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668){
return (function (p1__28657_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__28657_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__28657_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__18554__auto__,ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668))
,((function (validate__18554__auto__,ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__18554__auto__,ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668))
,((function (validate__18554__auto__,ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__16615__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__16615__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__16615__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__18554__auto__,ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28672 = output_checker28661_28668.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28672)){
var error__18556__auto___28673 = temp__4425__auto___28672;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__18556__auto___28673)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28658_28665,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28673], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28664,output_schema28658_28665,input_schema28659_28666,input_checker28660_28667,output_checker28661_28668))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema28658_28665,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28659_28666], null)));
var ufv___28679 = schema.utils.use_fn_validation;
var output_schema28674_28680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema28675_28681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker28676_28682 = schema.core.checker.call(null,input_schema28675_28681);
var output_checker28677_28683 = schema.core.checker.call(null,output_schema28674_28680);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___28679,output_schema28674_28680,input_schema28675_28681,input_checker28676_28682,output_checker28677_28683){
return (function plumbing$fnk$schema$required_toplevel_keys(G__28678){
var validate__18554__auto__ = ufv___28679.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28678], null);
var temp__4425__auto___28685 = input_checker28676_28682.call(null,args__18555__auto___28684);
if(cljs.core.truth_(temp__4425__auto___28685)){
var error__18556__auto___28686 = temp__4425__auto___28685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__18556__auto___28686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28675_28681,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28684,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28686], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var input_schema = G__28678;
while(true){
return cljs.core.keep.call(null,((function (validate__18554__auto__,ufv___28679,output_schema28674_28680,input_schema28675_28681,input_checker28676_28682,output_checker28677_28683){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__18554__auto__,ufv___28679,output_schema28674_28680,input_schema28675_28681,input_checker28676_28682,output_checker28677_28683))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28687 = output_checker28677_28683.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28687)){
var error__18556__auto___28688 = temp__4425__auto___28687;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__18556__auto___28688)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28674_28680,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28688], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28679,output_schema28674_28680,input_schema28675_28681,input_checker28676_28682,output_checker28677_28683))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema28674_28680,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28675_28681], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17381__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__28697(s__28698){
return (new cljs.core.LazySeq(null,(function (){
var s__28698__$1 = s__28698;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28698__$1);
if(temp__4425__auto__){
var s__28698__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28698__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__28698__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__28700 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__28699 = (0);
while(true){
if((i__28699 < size__17380__auto__)){
var vec__28703 = cljs.core._nth.call(null,c__17379__auto__,i__28699);
var k = cljs.core.nth.call(null,vec__28703,(0),null);
var v = cljs.core.nth.call(null,vec__28703,(1),null);
cljs.core.chunk_append.call(null,b__28700,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__28705 = (i__28699 + (1));
i__28699 = G__28705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28700),plumbing$fnk$schema$guess_expr_output_schema_$_iter__28697.call(null,cljs.core.chunk_rest.call(null,s__28698__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28700),null);
}
} else {
var vec__28704 = cljs.core.first.call(null,s__28698__$2);
var k = cljs.core.nth.call(null,vec__28704,(0),null);
var v = cljs.core.nth.call(null,vec__28704,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__28697.call(null,cljs.core.rest.call(null,s__28698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17381__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__28714(s__28715){
return (new cljs.core.LazySeq(null,(function (){
var s__28715__$1 = s__28715;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28715__$1);
if(temp__4425__auto__){
var s__28715__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28715__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__28715__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__28717 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__28716 = (0);
while(true){
if((i__28716 < size__17380__auto__)){
var vec__28720 = cljs.core._nth.call(null,c__17379__auto__,i__28716);
var k = cljs.core.nth.call(null,vec__28720,(0),null);
var v = cljs.core.nth.call(null,vec__28720,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__16627__auto__ = required_QMARK_;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__28717,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__28722 = (i__28716 + (1));
i__28716 = G__28722;
continue;
} else {
var G__28723 = (i__28716 + (1));
i__28716 = G__28723;
continue;
}
} else {
var G__28724 = (i__28716 + (1));
i__28716 = G__28724;
continue;
}
} else {
var G__28725 = (i__28716 + (1));
i__28716 = G__28725;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28717),plumbing$fnk$schema$schema_diff_$_iter__28714.call(null,cljs.core.chunk_rest.call(null,s__28715__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28717),null);
}
} else {
var vec__28721 = cljs.core.first.call(null,s__28715__$2);
var k = cljs.core.nth.call(null,vec__28721,(0),null);
var v = cljs.core.nth.call(null,vec__28721,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__16627__auto__ = required_QMARK_;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__28714.call(null,cljs.core.rest.call(null,s__28715__$2)));
} else {
var G__28726 = cljs.core.rest.call(null,s__28715__$2);
s__28715__$1 = G__28726;
continue;
}
} else {
var G__28727 = cljs.core.rest.call(null,s__28715__$2);
s__28715__$1 = G__28727;
continue;
}
} else {
var G__28728 = cljs.core.rest.call(null,s__28715__$2);
s__28715__$1 = G__28728;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17381__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___28751 = schema.utils.use_fn_validation;
var output_schema28729_28752 = schema.core.Any;
var input_schema28730_28753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker28731_28754 = schema.core.checker.call(null,input_schema28730_28753);
var output_checker28732_28755 = schema.core.checker.call(null,output_schema28729_28752);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___28751,output_schema28729_28752,input_schema28730_28753,input_checker28731_28754,output_checker28732_28755){
return (function plumbing$fnk$schema$compose_schemata(G__28733,G__28734){
var validate__18554__auto__ = true;
if(validate__18554__auto__){
var args__18555__auto___28756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28733,G__28734], null);
var temp__4425__auto___28757 = input_checker28731_28754.call(null,args__18555__auto___28756);
if(cljs.core.truth_(temp__4425__auto___28757)){
var error__18556__auto___28758 = temp__4425__auto___28757;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__18556__auto___28758)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28730_28753,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28756,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28758], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var G__28745 = G__28733;
var vec__28747 = G__28745;
var i2 = cljs.core.nth.call(null,vec__28747,(0),null);
var o2 = cljs.core.nth.call(null,vec__28747,(1),null);
var G__28746 = G__28734;
var vec__28748 = G__28746;
var i1 = cljs.core.nth.call(null,vec__28748,(0),null);
var o1 = cljs.core.nth.call(null,vec__28748,(1),null);
var G__28745__$1 = G__28745;
var G__28746__$1 = G__28746;
while(true){
var vec__28749 = G__28745__$1;
var i2__$1 = cljs.core.nth.call(null,vec__28749,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__28749,(1),null);
var vec__28750 = G__28746__$1;
var i1__$1 = cljs.core.nth.call(null,vec__28750,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__28750,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__18554__auto__){
var temp__4425__auto___28759 = output_checker28732_28755.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28759)){
var error__18556__auto___28760 = temp__4425__auto___28759;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__18556__auto___28760)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28729_28752,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28760], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28751,output_schema28729_28752,input_schema28730_28753,input_checker28731_28754,output_checker28732_28755))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema28729_28752,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28730_28753], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___28839 = schema.utils.use_fn_validation;
var output_schema28761_28840 = schema.core.Any;
var input_schema28762_28841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker28763_28842 = schema.core.checker.call(null,input_schema28762_28841);
var output_checker28764_28843 = schema.core.checker.call(null,output_schema28761_28840);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function plumbing$fnk$schema$split_schema(G__28765,G__28766){
var validate__18554__auto__ = ufv___28839.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28844 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28765,G__28766], null);
var temp__4425__auto___28845 = input_checker28763_28842.call(null,args__18555__auto___28844);
if(cljs.core.truth_(temp__4425__auto___28845)){
var error__18556__auto___28846 = temp__4425__auto___28845;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__18556__auto___28846)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28762_28841,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28844,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28846], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var s = G__28765;
var ks = G__28766;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__17381__auto__ = ((function (ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function plumbing$fnk$schema$split_schema_$_iter__28803(s__28804){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function (){
var s__28804__$1 = s__28804;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28804__$1);
if(temp__4425__auto__){
var s__28804__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28804__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__28804__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__28806 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__28805 = (0);
while(true){
if((i__28805 < size__17380__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__17379__auto__,i__28805);
cljs.core.chunk_append.call(null,b__28806,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17381__auto__ = ((function (i__28805,in_QMARK_,c__17379__auto__,size__17380__auto__,b__28806,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function plumbing$fnk$schema$split_schema_$_iter__28803_$_iter__28823(s__28824){
return (new cljs.core.LazySeq(null,((function (i__28805,in_QMARK_,c__17379__auto__,size__17380__auto__,b__28806,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function (){
var s__28824__$1 = s__28824;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__28824__$1);
if(temp__4425__auto____$1){
var s__28824__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28824__$2)){
var c__17379__auto____$1 = cljs.core.chunk_first.call(null,s__28824__$2);
var size__17380__auto____$1 = cljs.core.count.call(null,c__17379__auto____$1);
var b__28826 = cljs.core.chunk_buffer.call(null,size__17380__auto____$1);
if((function (){var i__28825 = (0);
while(true){
if((i__28825 < size__17380__auto____$1)){
var vec__28829 = cljs.core._nth.call(null,c__17379__auto____$1,i__28825);
var k = cljs.core.nth.call(null,vec__28829,(0),null);
var v = cljs.core.nth.call(null,vec__28829,(1),null);
if(cljs.core.truth_((function (){var and__16615__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16615__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__28826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__28847 = (i__28825 + (1));
i__28825 = G__28847;
continue;
} else {
var G__28848 = (i__28825 + (1));
i__28825 = G__28848;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28826),plumbing$fnk$schema$split_schema_$_iter__28803_$_iter__28823.call(null,cljs.core.chunk_rest.call(null,s__28824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28826),null);
}
} else {
var vec__28830 = cljs.core.first.call(null,s__28824__$2);
var k = cljs.core.nth.call(null,vec__28830,(0),null);
var v = cljs.core.nth.call(null,vec__28830,(1),null);
if(cljs.core.truth_((function (){var and__16615__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16615__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__28803_$_iter__28823.call(null,cljs.core.rest.call(null,s__28824__$2)));
} else {
var G__28849 = cljs.core.rest.call(null,s__28824__$2);
s__28824__$1 = G__28849;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__28805,in_QMARK_,c__17379__auto__,size__17380__auto__,b__28806,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
,null,null));
});})(i__28805,in_QMARK_,c__17379__auto__,size__17380__auto__,b__28806,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
;
return iter__17381__auto__.call(null,s);
})()));

var G__28850 = (i__28805 + (1));
i__28805 = G__28850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28806),plumbing$fnk$schema$split_schema_$_iter__28803.call(null,cljs.core.chunk_rest.call(null,s__28804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28806),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__28804__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17381__auto__ = ((function (in_QMARK_,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function plumbing$fnk$schema$split_schema_$_iter__28803_$_iter__28831(s__28832){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843){
return (function (){
var s__28832__$1 = s__28832;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__28832__$1);
if(temp__4425__auto____$1){
var s__28832__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28832__$2)){
var c__17379__auto__ = cljs.core.chunk_first.call(null,s__28832__$2);
var size__17380__auto__ = cljs.core.count.call(null,c__17379__auto__);
var b__28834 = cljs.core.chunk_buffer.call(null,size__17380__auto__);
if((function (){var i__28833 = (0);
while(true){
if((i__28833 < size__17380__auto__)){
var vec__28837 = cljs.core._nth.call(null,c__17379__auto__,i__28833);
var k = cljs.core.nth.call(null,vec__28837,(0),null);
var v = cljs.core.nth.call(null,vec__28837,(1),null);
if(cljs.core.truth_((function (){var and__16615__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16615__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__28834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__28851 = (i__28833 + (1));
i__28833 = G__28851;
continue;
} else {
var G__28852 = (i__28833 + (1));
i__28833 = G__28852;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28834),plumbing$fnk$schema$split_schema_$_iter__28803_$_iter__28831.call(null,cljs.core.chunk_rest.call(null,s__28832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28834),null);
}
} else {
var vec__28838 = cljs.core.first.call(null,s__28832__$2);
var k = cljs.core.nth.call(null,vec__28838,(0),null);
var v = cljs.core.nth.call(null,vec__28838,(1),null);
if(cljs.core.truth_((function (){var and__16615__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16615__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__28803_$_iter__28831.call(null,cljs.core.rest.call(null,s__28832__$2)));
} else {
var G__28853 = cljs.core.rest.call(null,s__28832__$2);
s__28832__$1 = G__28853;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
,null,null));
});})(in_QMARK_,s__28804__$2,temp__4425__auto__,ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
;
return iter__17381__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__28803.call(null,cljs.core.rest.call(null,s__28804__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
,null,null));
});})(ks__$1,validate__18554__auto__,ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
;
return iter__17381__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28854 = output_checker28764_28843.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28854)){
var error__18556__auto___28855 = temp__4425__auto___28854;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__18556__auto___28855)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28761_28840,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28855], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28839,output_schema28761_28840,input_schema28762_28841,input_checker28763_28842,output_checker28764_28843))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema28761_28840,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28762_28841], null)));
var ufv___28886 = schema.utils.use_fn_validation;
var output_schema28856_28887 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema28857_28888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker28858_28889 = schema.core.checker.call(null,input_schema28857_28888);
var output_checker28859_28890 = schema.core.checker.call(null,output_schema28856_28887);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___28886,output_schema28856_28887,input_schema28857_28888,input_checker28858_28889,output_checker28859_28890){
return (function plumbing$fnk$schema$sequence_schemata(G__28860,G__28861){
var validate__18554__auto__ = ufv___28886.get_cell();
if(cljs.core.truth_(validate__18554__auto__)){
var args__18555__auto___28891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28860,G__28861], null);
var temp__4425__auto___28892 = input_checker28858_28889.call(null,args__18555__auto___28891);
if(cljs.core.truth_(temp__4425__auto___28892)){
var error__18556__auto___28893 = temp__4425__auto___28892;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__18556__auto___28893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28857_28888,new cljs.core.Keyword(null,"value","value",305978217),args__18555__auto___28891,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28893], null));
} else {
}
} else {
}

var o__18557__auto__ = (function (){var G__28877 = G__28860;
var vec__28879 = G__28877;
var i1 = cljs.core.nth.call(null,vec__28879,(0),null);
var o1 = cljs.core.nth.call(null,vec__28879,(1),null);
var G__28878 = G__28861;
var vec__28880 = G__28878;
var k = cljs.core.nth.call(null,vec__28880,(0),null);
var vec__28881 = cljs.core.nth.call(null,vec__28880,(1),null);
var i2 = cljs.core.nth.call(null,vec__28881,(0),null);
var o2 = cljs.core.nth.call(null,vec__28881,(1),null);
var G__28877__$1 = G__28877;
var G__28878__$1 = G__28878;
while(true){
var vec__28882 = G__28877__$1;
var i1__$1 = cljs.core.nth.call(null,vec__28882,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__28882,(1),null);
var vec__28883 = G__28878__$1;
var k__$1 = cljs.core.nth.call(null,vec__28883,(0),null);
var vec__28884 = cljs.core.nth.call(null,vec__28883,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__28884,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__28884,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__28885 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__28885,(0),null);
var unused = cljs.core.nth.call(null,vec__28885,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__18554__auto__)){
var temp__4425__auto___28894 = output_checker28859_28890.call(null,o__18557__auto__);
if(cljs.core.truth_(temp__4425__auto___28894)){
var error__18556__auto___28895 = temp__4425__auto___28894;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__18556__auto___28895)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28856_28887,new cljs.core.Keyword(null,"value","value",305978217),o__18557__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18556__auto___28895], null));
} else {
}
} else {
}

return o__18557__auto__;
});})(ufv___28886,output_schema28856_28887,input_schema28857_28888,input_checker28858_28889,output_checker28859_28890))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema28856_28887,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28857_28888], null)));

//# sourceMappingURL=schema.js.map