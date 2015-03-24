// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__16827__16828__auto__){
var G__26361 = p1__16827__16828__auto__;
if(G__26361){
var bit__15125__auto__ = null;
if(cljs.core.truth_((function (){var or__14444__auto__ = bit__15125__auto__;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return G__26361.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__26361.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__26361);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__26361);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__26362_SHARP_){
return (cljs.core.val.call(null,p1__26362_SHARP_) > (1));
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

var vec__26364 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__26364,(0),null);
var v = cljs.core.nth.call(null,vec__26364,(1),null);
var p = vec__26364;
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
var ufv___26370 = schema.utils.use_fn_validation;
var output_schema26365_26371 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema26366_26372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker26367_26373 = schema.core.checker.call(null,input_schema26366_26372);
var output_checker26368_26374 = schema.core.checker.call(null,output_schema26365_26371);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___26370,output_schema26365_26371,input_schema26366_26372,input_checker26367_26373,output_checker26368_26374){
return (function unwrap_schema_form_key(G__26369){
var validate__16797__auto__ = ufv___26370.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26369], null);
var temp__4406__auto___26376 = input_checker26367_26373.call(null,args__16798__auto___26375);
if(cljs.core.truth_(temp__4406__auto___26376)){
var error__16799__auto___26377 = temp__4406__auto___26376;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16799__auto___26377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26377,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26375,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26366_26372,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var k = G__26369;
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
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26378 = output_checker26368_26374.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26378)){
var error__16799__auto___26379 = temp__4406__auto___26378;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16799__auto___26379)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26379,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26365_26371,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26370,output_schema26365_26371,input_schema26366_26372,input_checker26367_26373,output_checker26368_26374))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema26365_26371,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26366_26372], null)));
var ufv___26385 = schema.utils.use_fn_validation;
var output_schema26380_26386 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema26381_26387 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker26382_26388 = schema.core.checker.call(null,input_schema26381_26387);
var output_checker26383_26389 = schema.core.checker.call(null,output_schema26380_26386);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___26385,output_schema26380_26386,input_schema26381_26387,input_checker26382_26388,output_checker26383_26389){
return (function explicit_schema_key_map(G__26384){
var validate__16797__auto__ = ufv___26385.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26390 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26384], null);
var temp__4406__auto___26391 = input_checker26382_26388.call(null,args__16798__auto___26390);
if(cljs.core.truth_(temp__4406__auto___26391)){
var error__16799__auto___26392 = temp__4406__auto___26391;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16799__auto___26392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26392,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26390,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26381_26387,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var s = G__26384;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26393 = output_checker26383_26389.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26393)){
var error__16799__auto___26394 = temp__4406__auto___26393;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16799__auto___26394)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26394,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26380_26386,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26385,output_schema26380_26386,input_schema26381_26387,input_checker26382_26388,output_checker26383_26389))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema26380_26386,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26381_26387], null)));
var ufv___26400 = schema.utils.use_fn_validation;
var output_schema26395_26401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema26396_26402 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker26397_26403 = schema.core.checker.call(null,input_schema26396_26402);
var output_checker26398_26404 = schema.core.checker.call(null,output_schema26395_26401);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___26400,output_schema26395_26401,input_schema26396_26402,input_checker26397_26403,output_checker26398_26404){
return (function split_schema_keys(G__26399){
var validate__16797__auto__ = ufv___26400.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26405 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26399], null);
var temp__4406__auto___26406 = input_checker26397_26403.call(null,args__16798__auto___26405);
if(cljs.core.truth_(temp__4406__auto___26406)){
var error__16799__auto___26407 = temp__4406__auto___26406;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16799__auto___26407)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26407,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26405,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26396_26402,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var s = G__26399;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26408 = output_checker26398_26404.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26408)){
var error__16799__auto___26409 = temp__4406__auto___26408;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16799__auto___26409)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26409,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26395_26401,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26400,output_schema26395_26401,input_schema26396_26402,input_checker26397_26403,output_checker26398_26404))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema26395_26401,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26396_26402], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__26413){
var vec__26414 = p__26413;
var k = cljs.core.nth.call(null,vec__26414,(0),null);
var v = cljs.core.nth.call(null,vec__26414,(1),null);
var pk = key_project.call(null,k);
var temp__4404__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__26415 = temp__4404__auto__;
var ok = cljs.core.nth.call(null,vec__26415,(0),null);
var ov = cljs.core.nth.call(null,vec__26415,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__26416__i = 0, G__26416__a = new Array(arguments.length -  3);
while (G__26416__i < G__26416__a.length) {G__26416__a[G__26416__i] = arguments[G__26416__i + 3]; ++G__26416__i;}
  maps = new cljs.core.IndexedSeq(G__26416__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__26417){
var key_project = cljs.core.first(arglist__26417);
arglist__26417 = cljs.core.next(arglist__26417);
var key_combine = cljs.core.first(arglist__26417);
arglist__26417 = cljs.core.next(arglist__26417);
var val_combine = cljs.core.first(arglist__26417);
var maps = cljs.core.rest(arglist__26417);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___26425 = schema.utils.use_fn_validation;
var output_schema26419_26426 = plumbing.fnk.schema.InputSchema;
var input_schema26420_26427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker26421_26428 = schema.core.checker.call(null,input_schema26420_26427);
var output_checker26422_26429 = schema.core.checker.call(null,output_schema26419_26426);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429){
return (function union_input_schemata(G__26423,G__26424){
var validate__16797__auto__ = ufv___26425.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26423,G__26424], null);
var temp__4406__auto___26431 = input_checker26421_26428.call(null,args__16798__auto___26430);
if(cljs.core.truth_(temp__4406__auto___26431)){
var error__16799__auto___26432 = temp__4406__auto___26431;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16799__auto___26432)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26432,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26430,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26420_26427,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var i1 = G__26423;
var i2 = G__26424;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__16797__auto__,ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429){
return (function (p1__26418_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__26418_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__26418_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__16797__auto__,ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429))
,((function (validate__16797__auto__,ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429){
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
});})(validate__16797__auto__,ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429))
,((function (validate__16797__auto__,ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__16797__auto__,ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26433 = output_checker26422_26429.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26433)){
var error__16799__auto___26434 = temp__4406__auto___26433;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16799__auto___26434)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26434,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26419_26426,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26425,output_schema26419_26426,input_schema26420_26427,input_checker26421_26428,output_checker26422_26429))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema26419_26426,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26420_26427], null)));
var ufv___26440 = schema.utils.use_fn_validation;
var output_schema26435_26441 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema26436_26442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker26437_26443 = schema.core.checker.call(null,input_schema26436_26442);
var output_checker26438_26444 = schema.core.checker.call(null,output_schema26435_26441);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___26440,output_schema26435_26441,input_schema26436_26442,input_checker26437_26443,output_checker26438_26444){
return (function required_toplevel_keys(G__26439){
var validate__16797__auto__ = ufv___26440.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26445 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26439], null);
var temp__4406__auto___26446 = input_checker26437_26443.call(null,args__16798__auto___26445);
if(cljs.core.truth_(temp__4406__auto___26446)){
var error__16799__auto___26447 = temp__4406__auto___26446;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16799__auto___26447)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26447,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26445,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26436_26442,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var input_schema = G__26439;
while(true){
return cljs.core.keep.call(null,((function (validate__16797__auto__,ufv___26440,output_schema26435_26441,input_schema26436_26442,input_checker26437_26443,output_checker26438_26444){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__16797__auto__,ufv___26440,output_schema26435_26441,input_schema26436_26442,input_checker26437_26443,output_checker26438_26444))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26448 = output_checker26438_26444.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26448)){
var error__16799__auto___26449 = temp__4406__auto___26448;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16799__auto___26449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26449,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26435_26441,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26440,output_schema26435_26441,input_schema26436_26442,input_checker26437_26443,output_checker26438_26444))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema26435_26441,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26436_26442], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = (function iter__26458(s__26459){
return (new cljs.core.LazySeq(null,(function (){
var s__26459__$1 = s__26459;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26459__$1);
if(temp__4406__auto__){
var s__26459__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26459__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26459__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26461 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26460 = (0);
while(true){
if((i__26460 < size__15199__auto__)){
var vec__26464 = cljs.core._nth.call(null,c__15198__auto__,i__26460);
var k = cljs.core.nth.call(null,vec__26464,(0),null);
var v = cljs.core.nth.call(null,vec__26464,(1),null);
cljs.core.chunk_append.call(null,b__26461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__26466 = (i__26460 + (1));
i__26460 = G__26466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26461),iter__26458.call(null,cljs.core.chunk_rest.call(null,s__26459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26461),null);
}
} else {
var vec__26465 = cljs.core.first.call(null,s__26459__$2);
var k = cljs.core.nth.call(null,vec__26465,(0),null);
var v = cljs.core.nth.call(null,vec__26465,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__26458.call(null,cljs.core.rest.call(null,s__26459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,expr);
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = (function iter__26475(s__26476){
return (new cljs.core.LazySeq(null,(function (){
var s__26476__$1 = s__26476;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26476__$1);
if(temp__4406__auto__){
var s__26476__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26476__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26476__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26478 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26477 = (0);
while(true){
if((i__26477 < size__15199__auto__)){
var vec__26481 = cljs.core._nth.call(null,c__15198__auto__,i__26477);
var k = cljs.core.nth.call(null,vec__26481,(0),null);
var v = cljs.core.nth.call(null,vec__26481,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__26478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__26483 = (i__26477 + (1));
i__26477 = G__26483;
continue;
} else {
var G__26484 = (i__26477 + (1));
i__26477 = G__26484;
continue;
}
} else {
var G__26485 = (i__26477 + (1));
i__26477 = G__26485;
continue;
}
} else {
var G__26486 = (i__26477 + (1));
i__26477 = G__26486;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26478),iter__26475.call(null,cljs.core.chunk_rest.call(null,s__26476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26478),null);
}
} else {
var vec__26482 = cljs.core.first.call(null,s__26476__$2);
var k = cljs.core.nth.call(null,vec__26482,(0),null);
var v = cljs.core.nth.call(null,vec__26482,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__26475.call(null,cljs.core.rest.call(null,s__26476__$2)));
} else {
var G__26487 = cljs.core.rest.call(null,s__26476__$2);
s__26476__$1 = G__26487;
continue;
}
} else {
var G__26488 = cljs.core.rest.call(null,s__26476__$2);
s__26476__$1 = G__26488;
continue;
}
} else {
var G__26489 = cljs.core.rest.call(null,s__26476__$2);
s__26476__$1 = G__26489;
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
return iter__15200__auto__.call(null,input_schema);
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
var ufv___26512 = schema.utils.use_fn_validation;
var output_schema26490_26513 = schema.core.Any;
var input_schema26491_26514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker26492_26515 = schema.core.checker.call(null,input_schema26491_26514);
var output_checker26493_26516 = schema.core.checker.call(null,output_schema26490_26513);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___26512,output_schema26490_26513,input_schema26491_26514,input_checker26492_26515,output_checker26493_26516){
return (function compose_schemata(G__26494,G__26495){
var validate__16797__auto__ = true;
if(validate__16797__auto__){
var args__16798__auto___26517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26494,G__26495], null);
var temp__4406__auto___26518 = input_checker26492_26515.call(null,args__16798__auto___26517);
if(cljs.core.truth_(temp__4406__auto___26518)){
var error__16799__auto___26519 = temp__4406__auto___26518;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16799__auto___26519)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26519,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26517,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26491_26514,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var G__26506 = G__26494;
var vec__26508 = G__26506;
var i2 = cljs.core.nth.call(null,vec__26508,(0),null);
var o2 = cljs.core.nth.call(null,vec__26508,(1),null);
var G__26507 = G__26495;
var vec__26509 = G__26507;
var i1 = cljs.core.nth.call(null,vec__26509,(0),null);
var o1 = cljs.core.nth.call(null,vec__26509,(1),null);
var G__26506__$1 = G__26506;
var G__26507__$1 = G__26507;
while(true){
var vec__26510 = G__26506__$1;
var i2__$1 = cljs.core.nth.call(null,vec__26510,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__26510,(1),null);
var vec__26511 = G__26507__$1;
var i1__$1 = cljs.core.nth.call(null,vec__26511,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__26511,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__16797__auto__){
var temp__4406__auto___26520 = output_checker26493_26516.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26520)){
var error__16799__auto___26521 = temp__4406__auto___26520;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16799__auto___26521)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26521,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26490_26513,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26512,output_schema26490_26513,input_schema26491_26514,input_checker26492_26515,output_checker26493_26516))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema26490_26513,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26491_26514], null)));
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
var ufv___26600 = schema.utils.use_fn_validation;
var output_schema26522_26601 = schema.core.Any;
var input_schema26523_26602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker26524_26603 = schema.core.checker.call(null,input_schema26523_26602);
var output_checker26525_26604 = schema.core.checker.call(null,output_schema26522_26601);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function split_schema(G__26526,G__26527){
var validate__16797__auto__ = ufv___26600.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26526,G__26527], null);
var temp__4406__auto___26606 = input_checker26524_26603.call(null,args__16798__auto___26605);
if(cljs.core.truth_(temp__4406__auto___26606)){
var error__16799__auto___26607 = temp__4406__auto___26606;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16799__auto___26607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26607,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26605,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26523_26602,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var s = G__26526;
var ks = G__26527;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__15200__auto__ = ((function (ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function iter__26564(s__26565){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function (){
var s__26565__$1 = s__26565;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26565__$1);
if(temp__4406__auto__){
var s__26565__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26565__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26565__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26567 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26566 = (0);
while(true){
if((i__26566 < size__15199__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__15198__auto__,i__26566);
cljs.core.chunk_append.call(null,b__26567,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = ((function (i__26566,in_QMARK_,c__15198__auto__,size__15199__auto__,b__26567,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function iter__26584(s__26585){
return (new cljs.core.LazySeq(null,((function (i__26566,in_QMARK_,c__15198__auto__,size__15199__auto__,b__26567,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function (){
var s__26585__$1 = s__26585;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__26585__$1);
if(temp__4406__auto____$1){
var s__26585__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26585__$2)){
var c__15198__auto____$1 = cljs.core.chunk_first.call(null,s__26585__$2);
var size__15199__auto____$1 = cljs.core.count.call(null,c__15198__auto____$1);
var b__26587 = cljs.core.chunk_buffer.call(null,size__15199__auto____$1);
if((function (){var i__26586 = (0);
while(true){
if((i__26586 < size__15199__auto____$1)){
var vec__26590 = cljs.core._nth.call(null,c__15198__auto____$1,i__26586);
var k = cljs.core.nth.call(null,vec__26590,(0),null);
var v = cljs.core.nth.call(null,vec__26590,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__26587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26608 = (i__26586 + (1));
i__26586 = G__26608;
continue;
} else {
var G__26609 = (i__26586 + (1));
i__26586 = G__26609;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26587),iter__26584.call(null,cljs.core.chunk_rest.call(null,s__26585__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26587),null);
}
} else {
var vec__26591 = cljs.core.first.call(null,s__26585__$2);
var k = cljs.core.nth.call(null,vec__26591,(0),null);
var v = cljs.core.nth.call(null,vec__26591,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__26584.call(null,cljs.core.rest.call(null,s__26585__$2)));
} else {
var G__26610 = cljs.core.rest.call(null,s__26585__$2);
s__26585__$1 = G__26610;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__26566,in_QMARK_,c__15198__auto__,size__15199__auto__,b__26567,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
,null,null));
});})(i__26566,in_QMARK_,c__15198__auto__,size__15199__auto__,b__26567,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
;
return iter__15200__auto__.call(null,s);
})()));

var G__26611 = (i__26566 + (1));
i__26566 = G__26611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26567),iter__26564.call(null,cljs.core.chunk_rest.call(null,s__26565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26567),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__26565__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = ((function (in_QMARK_,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function iter__26592(s__26593){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604){
return (function (){
var s__26593__$1 = s__26593;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__26593__$1);
if(temp__4406__auto____$1){
var s__26593__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26593__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26593__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26595 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26594 = (0);
while(true){
if((i__26594 < size__15199__auto__)){
var vec__26598 = cljs.core._nth.call(null,c__15198__auto__,i__26594);
var k = cljs.core.nth.call(null,vec__26598,(0),null);
var v = cljs.core.nth.call(null,vec__26598,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__26595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__26612 = (i__26594 + (1));
i__26594 = G__26612;
continue;
} else {
var G__26613 = (i__26594 + (1));
i__26594 = G__26613;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26595),iter__26592.call(null,cljs.core.chunk_rest.call(null,s__26593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26595),null);
}
} else {
var vec__26599 = cljs.core.first.call(null,s__26593__$2);
var k = cljs.core.nth.call(null,vec__26599,(0),null);
var v = cljs.core.nth.call(null,vec__26599,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__26592.call(null,cljs.core.rest.call(null,s__26593__$2)));
} else {
var G__26614 = cljs.core.rest.call(null,s__26593__$2);
s__26593__$1 = G__26614;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
,null,null));
});})(in_QMARK_,s__26565__$2,temp__4406__auto__,ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
;
return iter__15200__auto__.call(null,s);
})()),iter__26564.call(null,cljs.core.rest.call(null,s__26565__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
,null,null));
});})(ks__$1,validate__16797__auto__,ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
;
return iter__15200__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26615 = output_checker26525_26604.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26615)){
var error__16799__auto___26616 = temp__4406__auto___26615;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16799__auto___26616)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26616,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26522_26601,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26600,output_schema26522_26601,input_schema26523_26602,input_checker26524_26603,output_checker26525_26604))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema26522_26601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26523_26602], null)));
var ufv___26647 = schema.utils.use_fn_validation;
var output_schema26617_26648 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema26618_26649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker26619_26650 = schema.core.checker.call(null,input_schema26618_26649);
var output_checker26620_26651 = schema.core.checker.call(null,output_schema26617_26648);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___26647,output_schema26617_26648,input_schema26618_26649,input_checker26619_26650,output_checker26620_26651){
return (function sequence_schemata(G__26621,G__26622){
var validate__16797__auto__ = ufv___26647.get_cell();
if(cljs.core.truth_(validate__16797__auto__)){
var args__16798__auto___26652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__26621,G__26622], null);
var temp__4406__auto___26653 = input_checker26619_26650.call(null,args__16798__auto___26652);
if(cljs.core.truth_(temp__4406__auto___26653)){
var error__16799__auto___26654 = temp__4406__auto___26653;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16799__auto___26654)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26654,new cljs.core.Keyword(null,"value","value",305978217),args__16798__auto___26652,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema26618_26649,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16800__auto__ = (function (){var G__26638 = G__26621;
var vec__26640 = G__26638;
var i1 = cljs.core.nth.call(null,vec__26640,(0),null);
var o1 = cljs.core.nth.call(null,vec__26640,(1),null);
var G__26639 = G__26622;
var vec__26641 = G__26639;
var k = cljs.core.nth.call(null,vec__26641,(0),null);
var vec__26642 = cljs.core.nth.call(null,vec__26641,(1),null);
var i2 = cljs.core.nth.call(null,vec__26642,(0),null);
var o2 = cljs.core.nth.call(null,vec__26642,(1),null);
var G__26638__$1 = G__26638;
var G__26639__$1 = G__26639;
while(true){
var vec__26643 = G__26638__$1;
var i1__$1 = cljs.core.nth.call(null,vec__26643,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__26643,(1),null);
var vec__26644 = G__26639__$1;
var k__$1 = cljs.core.nth.call(null,vec__26644,(0),null);
var vec__26645 = cljs.core.nth.call(null,vec__26644,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__26645,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__26645,(1),null);
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

var vec__26646 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__26646,(0),null);
var unused = cljs.core.nth.call(null,vec__26646,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__16797__auto__)){
var temp__4406__auto___26655 = output_checker26620_26651.call(null,o__16800__auto__);
if(cljs.core.truth_(temp__4406__auto___26655)){
var error__16799__auto___26656 = temp__4406__auto___26655;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16799__auto___26656)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16799__auto___26656,new cljs.core.Keyword(null,"value","value",305978217),o__16800__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema26617_26648,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16800__auto__;
});})(ufv___26647,output_schema26617_26648,input_schema26618_26649,input_checker26619_26650,output_checker26620_26651))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema26617_26648,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema26618_26649], null)));

//# sourceMappingURL=schema.js.map