// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__19813__19814__auto__){
var G__36073 = p1__19813__19814__auto__;
if(G__36073){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36073.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__36073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__36073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__36073);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__36074_SHARP_){
return (cljs.core.val.call(null,p1__36074_SHARP_) > (1));
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
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__36076 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__36076,(0),null);
var v = cljs.core.nth.call(null,vec__36076,(1),null);
var p = vec__36076;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
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
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___36082 = schema.utils.use_fn_validation;
var output_schema36077_36083 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema36078_36084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker36079_36085 = schema.core.checker.call(null,input_schema36078_36084);
var output_checker36080_36086 = schema.core.checker.call(null,output_schema36077_36083);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___36082,output_schema36077_36083,input_schema36078_36084,input_checker36079_36085,output_checker36080_36086){
return (function unwrap_schema_form_key(G__36081){
var validate__19783__auto__ = ufv___36082.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36081], null);
var temp__4406__auto___36088 = input_checker36079_36085.call(null,args__19784__auto___36087);
if(cljs.core.truth_(temp__4406__auto___36088)){
var error__19785__auto___36089 = temp__4406__auto___36088;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__19785__auto___36089)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36089,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36087,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36078_36084,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var k = G__36081;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
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
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36090 = output_checker36080_36086.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36090)){
var error__19785__auto___36091 = temp__4406__auto___36090;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__19785__auto___36091)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36091,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36077_36083,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36082,output_schema36077_36083,input_schema36078_36084,input_checker36079_36085,output_checker36080_36086))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema36077_36083,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36078_36084], null)));
var ufv___36097 = schema.utils.use_fn_validation;
var output_schema36092_36098 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema36093_36099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker36094_36100 = schema.core.checker.call(null,input_schema36093_36099);
var output_checker36095_36101 = schema.core.checker.call(null,output_schema36092_36098);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___36097,output_schema36092_36098,input_schema36093_36099,input_checker36094_36100,output_checker36095_36101){
return (function explicit_schema_key_map(G__36096){
var validate__19783__auto__ = ufv___36097.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36096], null);
var temp__4406__auto___36103 = input_checker36094_36100.call(null,args__19784__auto___36102);
if(cljs.core.truth_(temp__4406__auto___36103)){
var error__19785__auto___36104 = temp__4406__auto___36103;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__19785__auto___36104)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36104,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36102,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36093_36099,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var s = G__36096;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36105 = output_checker36095_36101.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36105)){
var error__19785__auto___36106 = temp__4406__auto___36105;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__19785__auto___36106)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36106,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36092_36098,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36097,output_schema36092_36098,input_schema36093_36099,input_checker36094_36100,output_checker36095_36101))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema36092_36098,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36093_36099], null)));
var ufv___36112 = schema.utils.use_fn_validation;
var output_schema36107_36113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema36108_36114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker36109_36115 = schema.core.checker.call(null,input_schema36108_36114);
var output_checker36110_36116 = schema.core.checker.call(null,output_schema36107_36113);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___36112,output_schema36107_36113,input_schema36108_36114,input_checker36109_36115,output_checker36110_36116){
return (function split_schema_keys(G__36111){
var validate__19783__auto__ = ufv___36112.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36111], null);
var temp__4406__auto___36118 = input_checker36109_36115.call(null,args__19784__auto___36117);
if(cljs.core.truth_(temp__4406__auto___36118)){
var error__19785__auto___36119 = temp__4406__auto___36118;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__19785__auto___36119)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36119,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36117,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36108_36114,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var s = G__36111;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36120 = output_checker36110_36116.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36120)){
var error__19785__auto___36121 = temp__4406__auto___36120;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__19785__auto___36121)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36121,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36107_36113,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36112,output_schema36107_36113,input_schema36108_36114,input_checker36109_36115,output_checker36110_36116))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema36107_36113,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36108_36114], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__36125){
var vec__36126 = p__36125;
var k = cljs.core.nth.call(null,vec__36126,(0),null);
var v = cljs.core.nth.call(null,vec__36126,(1),null);
var pk = key_project.call(null,k);
var temp__4404__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__36127 = temp__4404__auto__;
var ok = cljs.core.nth.call(null,vec__36127,(0),null);
var ov = cljs.core.nth.call(null,vec__36127,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__36128__i = 0, G__36128__a = new Array(arguments.length -  3);
while (G__36128__i < G__36128__a.length) {G__36128__a[G__36128__i] = arguments[G__36128__i + 3]; ++G__36128__i;}
  maps = new cljs.core.IndexedSeq(G__36128__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__36129){
var key_project = cljs.core.first(arglist__36129);
arglist__36129 = cljs.core.next(arglist__36129);
var key_combine = cljs.core.first(arglist__36129);
arglist__36129 = cljs.core.next(arglist__36129);
var val_combine = cljs.core.first(arglist__36129);
var maps = cljs.core.rest(arglist__36129);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___36137 = schema.utils.use_fn_validation;
var output_schema36131_36138 = plumbing.fnk.schema.InputSchema;
var input_schema36132_36139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker36133_36140 = schema.core.checker.call(null,input_schema36132_36139);
var output_checker36134_36141 = schema.core.checker.call(null,output_schema36131_36138);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141){
return (function union_input_schemata(G__36135,G__36136){
var validate__19783__auto__ = ufv___36137.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36135,G__36136], null);
var temp__4406__auto___36143 = input_checker36133_36140.call(null,args__19784__auto___36142);
if(cljs.core.truth_(temp__4406__auto___36143)){
var error__19785__auto___36144 = temp__4406__auto___36143;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__19785__auto___36144)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36144,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36142,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36132_36139,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var i1 = G__36135;
var i2 = G__36136;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__19783__auto__,ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141){
return (function (p1__36130_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__36130_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__36130_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__19783__auto__,ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141))
,((function (validate__19783__auto__,ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
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
});})(validate__19783__auto__,ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141))
,((function (validate__19783__auto__,ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__19783__auto__,ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36145 = output_checker36134_36141.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36145)){
var error__19785__auto___36146 = temp__4406__auto___36145;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__19785__auto___36146)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36146,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36131_36138,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36137,output_schema36131_36138,input_schema36132_36139,input_checker36133_36140,output_checker36134_36141))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema36131_36138,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36132_36139], null)));
var ufv___36152 = schema.utils.use_fn_validation;
var output_schema36147_36153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema36148_36154 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker36149_36155 = schema.core.checker.call(null,input_schema36148_36154);
var output_checker36150_36156 = schema.core.checker.call(null,output_schema36147_36153);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___36152,output_schema36147_36153,input_schema36148_36154,input_checker36149_36155,output_checker36150_36156){
return (function required_toplevel_keys(G__36151){
var validate__19783__auto__ = ufv___36152.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36151], null);
var temp__4406__auto___36158 = input_checker36149_36155.call(null,args__19784__auto___36157);
if(cljs.core.truth_(temp__4406__auto___36158)){
var error__19785__auto___36159 = temp__4406__auto___36158;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__19785__auto___36159)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36159,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36157,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36148_36154,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var input_schema = G__36151;
while(true){
return cljs.core.keep.call(null,((function (validate__19783__auto__,ufv___36152,output_schema36147_36153,input_schema36148_36154,input_checker36149_36155,output_checker36150_36156){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__19783__auto__,ufv___36152,output_schema36147_36153,input_schema36148_36154,input_checker36149_36155,output_checker36150_36156))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36160 = output_checker36150_36156.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36160)){
var error__19785__auto___36161 = temp__4406__auto___36160;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__19785__auto___36161)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36161,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36147_36153,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36152,output_schema36147_36153,input_schema36148_36154,input_checker36149_36155,output_checker36150_36156))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema36147_36153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36148_36154], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11697__auto__ = (function iter__36170(s__36171){
return (new cljs.core.LazySeq(null,(function (){
var s__36171__$1 = s__36171;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__36171__$1);
if(temp__4406__auto__){
var s__36171__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36171__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__36171__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__36173 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__36172 = (0);
while(true){
if((i__36172 < size__11696__auto__)){
var vec__36176 = cljs.core._nth.call(null,c__11695__auto__,i__36172);
var k = cljs.core.nth.call(null,vec__36176,(0),null);
var v = cljs.core.nth.call(null,vec__36176,(1),null);
cljs.core.chunk_append.call(null,b__36173,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__36178 = (i__36172 + (1));
i__36172 = G__36178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36173),iter__36170.call(null,cljs.core.chunk_rest.call(null,s__36171__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36173),null);
}
} else {
var vec__36177 = cljs.core.first.call(null,s__36171__$2);
var k = cljs.core.nth.call(null,vec__36177,(0),null);
var v = cljs.core.nth.call(null,vec__36177,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__36170.call(null,cljs.core.rest.call(null,s__36171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11697__auto__.call(null,expr);
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
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11697__auto__ = (function iter__36187(s__36188){
return (new cljs.core.LazySeq(null,(function (){
var s__36188__$1 = s__36188;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__36188__$1);
if(temp__4406__auto__){
var s__36188__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36188__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__36188__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__36190 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__36189 = (0);
while(true){
if((i__36189 < size__11696__auto__)){
var vec__36193 = cljs.core._nth.call(null,c__11695__auto__,i__36189);
var k = cljs.core.nth.call(null,vec__36193,(0),null);
var v = cljs.core.nth.call(null,vec__36193,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__36190,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__36195 = (i__36189 + (1));
i__36189 = G__36195;
continue;
} else {
var G__36196 = (i__36189 + (1));
i__36189 = G__36196;
continue;
}
} else {
var G__36197 = (i__36189 + (1));
i__36189 = G__36197;
continue;
}
} else {
var G__36198 = (i__36189 + (1));
i__36189 = G__36198;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36190),iter__36187.call(null,cljs.core.chunk_rest.call(null,s__36188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36190),null);
}
} else {
var vec__36194 = cljs.core.first.call(null,s__36188__$2);
var k = cljs.core.nth.call(null,vec__36194,(0),null);
var v = cljs.core.nth.call(null,vec__36194,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__36187.call(null,cljs.core.rest.call(null,s__36188__$2)));
} else {
var G__36199 = cljs.core.rest.call(null,s__36188__$2);
s__36188__$1 = G__36199;
continue;
}
} else {
var G__36200 = cljs.core.rest.call(null,s__36188__$2);
s__36188__$1 = G__36200;
continue;
}
} else {
var G__36201 = cljs.core.rest.call(null,s__36188__$2);
s__36188__$1 = G__36201;
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
return iter__11697__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___36224 = schema.utils.use_fn_validation;
var output_schema36202_36225 = schema.core.Any;
var input_schema36203_36226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker36204_36227 = schema.core.checker.call(null,input_schema36203_36226);
var output_checker36205_36228 = schema.core.checker.call(null,output_schema36202_36225);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___36224,output_schema36202_36225,input_schema36203_36226,input_checker36204_36227,output_checker36205_36228){
return (function compose_schemata(G__36206,G__36207){
var validate__19783__auto__ = true;
if(validate__19783__auto__){
var args__19784__auto___36229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36206,G__36207], null);
var temp__4406__auto___36230 = input_checker36204_36227.call(null,args__19784__auto___36229);
if(cljs.core.truth_(temp__4406__auto___36230)){
var error__19785__auto___36231 = temp__4406__auto___36230;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__19785__auto___36231)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36231,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36229,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36203_36226,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var G__36218 = G__36206;
var vec__36220 = G__36218;
var i2 = cljs.core.nth.call(null,vec__36220,(0),null);
var o2 = cljs.core.nth.call(null,vec__36220,(1),null);
var G__36219 = G__36207;
var vec__36221 = G__36219;
var i1 = cljs.core.nth.call(null,vec__36221,(0),null);
var o1 = cljs.core.nth.call(null,vec__36221,(1),null);
var G__36218__$1 = G__36218;
var G__36219__$1 = G__36219;
while(true){
var vec__36222 = G__36218__$1;
var i2__$1 = cljs.core.nth.call(null,vec__36222,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__36222,(1),null);
var vec__36223 = G__36219__$1;
var i1__$1 = cljs.core.nth.call(null,vec__36223,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__36223,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__19783__auto__){
var temp__4406__auto___36232 = output_checker36205_36228.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36232)){
var error__19785__auto___36233 = temp__4406__auto___36232;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__19785__auto___36233)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36233,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36202_36225,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36224,output_schema36202_36225,input_schema36203_36226,input_checker36204_36227,output_checker36205_36228))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema36202_36225,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36203_36226], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
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
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___36312 = schema.utils.use_fn_validation;
var output_schema36234_36313 = schema.core.Any;
var input_schema36235_36314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker36236_36315 = schema.core.checker.call(null,input_schema36235_36314);
var output_checker36237_36316 = schema.core.checker.call(null,output_schema36234_36313);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function split_schema(G__36238,G__36239){
var validate__19783__auto__ = ufv___36312.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36317 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36238,G__36239], null);
var temp__4406__auto___36318 = input_checker36236_36315.call(null,args__19784__auto___36317);
if(cljs.core.truth_(temp__4406__auto___36318)){
var error__19785__auto___36319 = temp__4406__auto___36318;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__19785__auto___36319)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36319,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36317,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36235_36314,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var s = G__36238;
var ks = G__36239;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__11697__auto__ = ((function (ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function iter__36276(s__36277){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function (){
var s__36277__$1 = s__36277;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__36277__$1);
if(temp__4406__auto__){
var s__36277__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36277__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__36277__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__36279 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__36278 = (0);
while(true){
if((i__36278 < size__11696__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__11695__auto__,i__36278);
cljs.core.chunk_append.call(null,b__36279,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11697__auto__ = ((function (i__36278,in_QMARK_,c__11695__auto__,size__11696__auto__,b__36279,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function iter__36296(s__36297){
return (new cljs.core.LazySeq(null,((function (i__36278,in_QMARK_,c__11695__auto__,size__11696__auto__,b__36279,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function (){
var s__36297__$1 = s__36297;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__36297__$1);
if(temp__4406__auto____$1){
var s__36297__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36297__$2)){
var c__11695__auto____$1 = cljs.core.chunk_first.call(null,s__36297__$2);
var size__11696__auto____$1 = cljs.core.count.call(null,c__11695__auto____$1);
var b__36299 = cljs.core.chunk_buffer.call(null,size__11696__auto____$1);
if((function (){var i__36298 = (0);
while(true){
if((i__36298 < size__11696__auto____$1)){
var vec__36302 = cljs.core._nth.call(null,c__11695__auto____$1,i__36298);
var k = cljs.core.nth.call(null,vec__36302,(0),null);
var v = cljs.core.nth.call(null,vec__36302,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__36299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__36320 = (i__36298 + (1));
i__36298 = G__36320;
continue;
} else {
var G__36321 = (i__36298 + (1));
i__36298 = G__36321;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36299),iter__36296.call(null,cljs.core.chunk_rest.call(null,s__36297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36299),null);
}
} else {
var vec__36303 = cljs.core.first.call(null,s__36297__$2);
var k = cljs.core.nth.call(null,vec__36303,(0),null);
var v = cljs.core.nth.call(null,vec__36303,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36296.call(null,cljs.core.rest.call(null,s__36297__$2)));
} else {
var G__36322 = cljs.core.rest.call(null,s__36297__$2);
s__36297__$1 = G__36322;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__36278,in_QMARK_,c__11695__auto__,size__11696__auto__,b__36279,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
,null,null));
});})(i__36278,in_QMARK_,c__11695__auto__,size__11696__auto__,b__36279,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
;
return iter__11697__auto__.call(null,s);
})()));

var G__36323 = (i__36278 + (1));
i__36278 = G__36323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36279),iter__36276.call(null,cljs.core.chunk_rest.call(null,s__36277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36279),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__36277__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__11697__auto__ = ((function (in_QMARK_,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function iter__36304(s__36305){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316){
return (function (){
var s__36305__$1 = s__36305;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__36305__$1);
if(temp__4406__auto____$1){
var s__36305__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36305__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__36305__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__36307 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__36306 = (0);
while(true){
if((i__36306 < size__11696__auto__)){
var vec__36310 = cljs.core._nth.call(null,c__11695__auto__,i__36306);
var k = cljs.core.nth.call(null,vec__36310,(0),null);
var v = cljs.core.nth.call(null,vec__36310,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__36307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__36324 = (i__36306 + (1));
i__36306 = G__36324;
continue;
} else {
var G__36325 = (i__36306 + (1));
i__36306 = G__36325;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36307),iter__36304.call(null,cljs.core.chunk_rest.call(null,s__36305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36307),null);
}
} else {
var vec__36311 = cljs.core.first.call(null,s__36305__$2);
var k = cljs.core.nth.call(null,vec__36311,(0),null);
var v = cljs.core.nth.call(null,vec__36311,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36304.call(null,cljs.core.rest.call(null,s__36305__$2)));
} else {
var G__36326 = cljs.core.rest.call(null,s__36305__$2);
s__36305__$1 = G__36326;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
,null,null));
});})(in_QMARK_,s__36277__$2,temp__4406__auto__,ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
;
return iter__11697__auto__.call(null,s);
})()),iter__36276.call(null,cljs.core.rest.call(null,s__36277__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
,null,null));
});})(ks__$1,validate__19783__auto__,ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
;
return iter__11697__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36327 = output_checker36237_36316.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36327)){
var error__19785__auto___36328 = temp__4406__auto___36327;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__19785__auto___36328)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36328,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36234_36313,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36312,output_schema36234_36313,input_schema36235_36314,input_checker36236_36315,output_checker36237_36316))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema36234_36313,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36235_36314], null)));
var ufv___36359 = schema.utils.use_fn_validation;
var output_schema36329_36360 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema36330_36361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker36331_36362 = schema.core.checker.call(null,input_schema36330_36361);
var output_checker36332_36363 = schema.core.checker.call(null,output_schema36329_36360);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___36359,output_schema36329_36360,input_schema36330_36361,input_checker36331_36362,output_checker36332_36363){
return (function sequence_schemata(G__36333,G__36334){
var validate__19783__auto__ = ufv___36359.get_cell();
if(cljs.core.truth_(validate__19783__auto__)){
var args__19784__auto___36364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36333,G__36334], null);
var temp__4406__auto___36365 = input_checker36331_36362.call(null,args__19784__auto___36364);
if(cljs.core.truth_(temp__4406__auto___36365)){
var error__19785__auto___36366 = temp__4406__auto___36365;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__19785__auto___36366)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36366,new cljs.core.Keyword(null,"value","value",305978217),args__19784__auto___36364,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36330_36361,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__19786__auto__ = (function (){var G__36350 = G__36333;
var vec__36352 = G__36350;
var i1 = cljs.core.nth.call(null,vec__36352,(0),null);
var o1 = cljs.core.nth.call(null,vec__36352,(1),null);
var G__36351 = G__36334;
var vec__36353 = G__36351;
var k = cljs.core.nth.call(null,vec__36353,(0),null);
var vec__36354 = cljs.core.nth.call(null,vec__36353,(1),null);
var i2 = cljs.core.nth.call(null,vec__36354,(0),null);
var o2 = cljs.core.nth.call(null,vec__36354,(1),null);
var G__36350__$1 = G__36350;
var G__36351__$1 = G__36351;
while(true){
var vec__36355 = G__36350__$1;
var i1__$1 = cljs.core.nth.call(null,vec__36355,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__36355,(1),null);
var vec__36356 = G__36351__$1;
var k__$1 = cljs.core.nth.call(null,vec__36356,(0),null);
var vec__36357 = cljs.core.nth.call(null,vec__36356,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__36357,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__36357,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__36358 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__36358,(0),null);
var unused = cljs.core.nth.call(null,vec__36358,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__19783__auto__)){
var temp__4406__auto___36367 = output_checker36332_36363.call(null,o__19786__auto__);
if(cljs.core.truth_(temp__4406__auto___36367)){
var error__19785__auto___36368 = temp__4406__auto___36367;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__19785__auto___36368)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__19785__auto___36368,new cljs.core.Keyword(null,"value","value",305978217),o__19786__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36329_36360,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__19786__auto__;
});})(ufv___36359,output_schema36329_36360,input_schema36330_36361,input_checker36331_36362,output_checker36332_36363))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema36329_36360,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36330_36361], null)));
