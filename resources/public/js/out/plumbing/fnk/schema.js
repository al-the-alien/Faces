// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__16947__16948__auto__){
var G__23359 = p1__16947__16948__auto__;
if(G__23359){
var bit__15125__auto__ = null;
if(cljs.core.truth_((function (){var or__14444__auto__ = bit__15125__auto__;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return G__23359.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__23359.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23359);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__23359);
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
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__23360_SHARP_){
return (cljs.core.val.call(null,p1__23360_SHARP_) > (1));
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

var vec__23362 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__23362,(0),null);
var v = cljs.core.nth.call(null,vec__23362,(1),null);
var p = vec__23362;
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
var ufv___23368 = schema.utils.use_fn_validation;
var output_schema23363_23369 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema23364_23370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker23365_23371 = schema.core.checker.call(null,input_schema23364_23370);
var output_checker23366_23372 = schema.core.checker.call(null,output_schema23363_23369);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___23368,output_schema23363_23369,input_schema23364_23370,input_checker23365_23371,output_checker23366_23372){
return (function unwrap_schema_form_key(G__23367){
var validate__16917__auto__ = ufv___23368.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23367], null);
var temp__4406__auto___23374 = input_checker23365_23371.call(null,args__16918__auto___23373);
if(cljs.core.truth_(temp__4406__auto___23374)){
var error__16919__auto___23375 = temp__4406__auto___23374;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16919__auto___23375)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23375,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23373,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23364_23370,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var k = G__23367;
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
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23376 = output_checker23366_23372.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23376)){
var error__16919__auto___23377 = temp__4406__auto___23376;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__16919__auto___23377)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23377,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23363_23369,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23368,output_schema23363_23369,input_schema23364_23370,input_checker23365_23371,output_checker23366_23372))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema23363_23369,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23364_23370], null)));
var ufv___23383 = schema.utils.use_fn_validation;
var output_schema23378_23384 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema23379_23385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23380_23386 = schema.core.checker.call(null,input_schema23379_23385);
var output_checker23381_23387 = schema.core.checker.call(null,output_schema23378_23384);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___23383,output_schema23378_23384,input_schema23379_23385,input_checker23380_23386,output_checker23381_23387){
return (function explicit_schema_key_map(G__23382){
var validate__16917__auto__ = ufv___23383.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23382], null);
var temp__4406__auto___23389 = input_checker23380_23386.call(null,args__16918__auto___23388);
if(cljs.core.truth_(temp__4406__auto___23389)){
var error__16919__auto___23390 = temp__4406__auto___23389;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16919__auto___23390)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23390,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23388,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23379_23385,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var s = G__23382;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23391 = output_checker23381_23387.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23391)){
var error__16919__auto___23392 = temp__4406__auto___23391;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__16919__auto___23392)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23392,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23378_23384,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23383,output_schema23378_23384,input_schema23379_23385,input_checker23380_23386,output_checker23381_23387))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema23378_23384,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23379_23385], null)));
var ufv___23398 = schema.utils.use_fn_validation;
var output_schema23393_23399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema23394_23400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23395_23401 = schema.core.checker.call(null,input_schema23394_23400);
var output_checker23396_23402 = schema.core.checker.call(null,output_schema23393_23399);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23398,output_schema23393_23399,input_schema23394_23400,input_checker23395_23401,output_checker23396_23402){
return (function split_schema_keys(G__23397){
var validate__16917__auto__ = ufv___23398.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23403 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23397], null);
var temp__4406__auto___23404 = input_checker23395_23401.call(null,args__16918__auto___23403);
if(cljs.core.truth_(temp__4406__auto___23404)){
var error__16919__auto___23405 = temp__4406__auto___23404;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16919__auto___23405)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23405,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23403,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23394_23400,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var s = G__23397;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23406 = output_checker23396_23402.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23406)){
var error__16919__auto___23407 = temp__4406__auto___23406;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__16919__auto___23407)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23407,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23393_23399,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23398,output_schema23393_23399,input_schema23394_23400,input_checker23395_23401,output_checker23396_23402))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema23393_23399,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23394_23400], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23411){
var vec__23412 = p__23411;
var k = cljs.core.nth.call(null,vec__23412,(0),null);
var v = cljs.core.nth.call(null,vec__23412,(1),null);
var pk = key_project.call(null,k);
var temp__4404__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__23413 = temp__4404__auto__;
var ok = cljs.core.nth.call(null,vec__23413,(0),null);
var ov = cljs.core.nth.call(null,vec__23413,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__23414__i = 0, G__23414__a = new Array(arguments.length -  3);
while (G__23414__i < G__23414__a.length) {G__23414__a[G__23414__i] = arguments[G__23414__i + 3]; ++G__23414__i;}
  maps = new cljs.core.IndexedSeq(G__23414__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__23415){
var key_project = cljs.core.first(arglist__23415);
arglist__23415 = cljs.core.next(arglist__23415);
var key_combine = cljs.core.first(arglist__23415);
arglist__23415 = cljs.core.next(arglist__23415);
var val_combine = cljs.core.first(arglist__23415);
var maps = cljs.core.rest(arglist__23415);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23423 = schema.utils.use_fn_validation;
var output_schema23417_23424 = plumbing.fnk.schema.InputSchema;
var input_schema23418_23425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker23419_23426 = schema.core.checker.call(null,input_schema23418_23425);
var output_checker23420_23427 = schema.core.checker.call(null,output_schema23417_23424);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427){
return (function union_input_schemata(G__23421,G__23422){
var validate__16917__auto__ = ufv___23423.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23421,G__23422], null);
var temp__4406__auto___23429 = input_checker23419_23426.call(null,args__16918__auto___23428);
if(cljs.core.truth_(temp__4406__auto___23429)){
var error__16919__auto___23430 = temp__4406__auto___23429;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16919__auto___23430)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23430,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23428,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23418_23425,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var i1 = G__23421;
var i2 = G__23422;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__16917__auto__,ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427){
return (function (p1__23416_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__23416_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__23416_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__16917__auto__,ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427))
,((function (validate__16917__auto__,ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427){
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
});})(validate__16917__auto__,ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427))
,((function (validate__16917__auto__,ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__16917__auto__,ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23431 = output_checker23420_23427.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23431)){
var error__16919__auto___23432 = temp__4406__auto___23431;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__16919__auto___23432)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23432,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23417_23424,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23423,output_schema23417_23424,input_schema23418_23425,input_checker23419_23426,output_checker23420_23427))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23417_23424,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23418_23425], null)));
var ufv___23438 = schema.utils.use_fn_validation;
var output_schema23433_23439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema23434_23440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker23435_23441 = schema.core.checker.call(null,input_schema23434_23440);
var output_checker23436_23442 = schema.core.checker.call(null,output_schema23433_23439);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23438,output_schema23433_23439,input_schema23434_23440,input_checker23435_23441,output_checker23436_23442){
return (function required_toplevel_keys(G__23437){
var validate__16917__auto__ = ufv___23438.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23437], null);
var temp__4406__auto___23444 = input_checker23435_23441.call(null,args__16918__auto___23443);
if(cljs.core.truth_(temp__4406__auto___23444)){
var error__16919__auto___23445 = temp__4406__auto___23444;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16919__auto___23445)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23445,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23443,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23434_23440,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var input_schema = G__23437;
while(true){
return cljs.core.keep.call(null,((function (validate__16917__auto__,ufv___23438,output_schema23433_23439,input_schema23434_23440,input_checker23435_23441,output_checker23436_23442){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__16917__auto__,ufv___23438,output_schema23433_23439,input_schema23434_23440,input_checker23435_23441,output_checker23436_23442))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23446 = output_checker23436_23442.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23446)){
var error__16919__auto___23447 = temp__4406__auto___23446;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__16919__auto___23447)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23447,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23433_23439,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23438,output_schema23433_23439,input_schema23434_23440,input_checker23435_23441,output_checker23436_23442))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23433_23439,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23434_23440], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = (function iter__23456(s__23457){
return (new cljs.core.LazySeq(null,(function (){
var s__23457__$1 = s__23457;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__23457__$1);
if(temp__4406__auto__){
var s__23457__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23457__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__23457__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__23459 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__23458 = (0);
while(true){
if((i__23458 < size__15199__auto__)){
var vec__23462 = cljs.core._nth.call(null,c__15198__auto__,i__23458);
var k = cljs.core.nth.call(null,vec__23462,(0),null);
var v = cljs.core.nth.call(null,vec__23462,(1),null);
cljs.core.chunk_append.call(null,b__23459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__23464 = (i__23458 + (1));
i__23458 = G__23464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23459),iter__23456.call(null,cljs.core.chunk_rest.call(null,s__23457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23459),null);
}
} else {
var vec__23463 = cljs.core.first.call(null,s__23457__$2);
var k = cljs.core.nth.call(null,vec__23463,(0),null);
var v = cljs.core.nth.call(null,vec__23463,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__23456.call(null,cljs.core.rest.call(null,s__23457__$2)));
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
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = (function iter__23473(s__23474){
return (new cljs.core.LazySeq(null,(function (){
var s__23474__$1 = s__23474;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__23474__$1);
if(temp__4406__auto__){
var s__23474__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23474__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__23474__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__23476 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__23475 = (0);
while(true){
if((i__23475 < size__15199__auto__)){
var vec__23479 = cljs.core._nth.call(null,c__15198__auto__,i__23475);
var k = cljs.core.nth.call(null,vec__23479,(0),null);
var v = cljs.core.nth.call(null,vec__23479,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__23476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__23481 = (i__23475 + (1));
i__23475 = G__23481;
continue;
} else {
var G__23482 = (i__23475 + (1));
i__23475 = G__23482;
continue;
}
} else {
var G__23483 = (i__23475 + (1));
i__23475 = G__23483;
continue;
}
} else {
var G__23484 = (i__23475 + (1));
i__23475 = G__23484;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23476),iter__23473.call(null,cljs.core.chunk_rest.call(null,s__23474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23476),null);
}
} else {
var vec__23480 = cljs.core.first.call(null,s__23474__$2);
var k = cljs.core.nth.call(null,vec__23480,(0),null);
var v = cljs.core.nth.call(null,vec__23480,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23473.call(null,cljs.core.rest.call(null,s__23474__$2)));
} else {
var G__23485 = cljs.core.rest.call(null,s__23474__$2);
s__23474__$1 = G__23485;
continue;
}
} else {
var G__23486 = cljs.core.rest.call(null,s__23474__$2);
s__23474__$1 = G__23486;
continue;
}
} else {
var G__23487 = cljs.core.rest.call(null,s__23474__$2);
s__23474__$1 = G__23487;
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
var ufv___23510 = schema.utils.use_fn_validation;
var output_schema23488_23511 = schema.core.Any;
var input_schema23489_23512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23490_23513 = schema.core.checker.call(null,input_schema23489_23512);
var output_checker23491_23514 = schema.core.checker.call(null,output_schema23488_23511);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23510,output_schema23488_23511,input_schema23489_23512,input_checker23490_23513,output_checker23491_23514){
return (function compose_schemata(G__23492,G__23493){
var validate__16917__auto__ = true;
if(validate__16917__auto__){
var args__16918__auto___23515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23492,G__23493], null);
var temp__4406__auto___23516 = input_checker23490_23513.call(null,args__16918__auto___23515);
if(cljs.core.truth_(temp__4406__auto___23516)){
var error__16919__auto___23517 = temp__4406__auto___23516;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16919__auto___23517)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23517,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23515,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23489_23512,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var G__23504 = G__23492;
var vec__23506 = G__23504;
var i2 = cljs.core.nth.call(null,vec__23506,(0),null);
var o2 = cljs.core.nth.call(null,vec__23506,(1),null);
var G__23505 = G__23493;
var vec__23507 = G__23505;
var i1 = cljs.core.nth.call(null,vec__23507,(0),null);
var o1 = cljs.core.nth.call(null,vec__23507,(1),null);
var G__23504__$1 = G__23504;
var G__23505__$1 = G__23505;
while(true){
var vec__23508 = G__23504__$1;
var i2__$1 = cljs.core.nth.call(null,vec__23508,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23508,(1),null);
var vec__23509 = G__23505__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23509,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23509,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__16917__auto__){
var temp__4406__auto___23518 = output_checker23491_23514.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23518)){
var error__16919__auto___23519 = temp__4406__auto___23518;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__16919__auto___23519)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23519,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23488_23511,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23510,output_schema23488_23511,input_schema23489_23512,input_checker23490_23513,output_checker23491_23514))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23488_23511,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23489_23512], null)));
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
var ufv___23598 = schema.utils.use_fn_validation;
var output_schema23520_23599 = schema.core.Any;
var input_schema23521_23600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker23522_23601 = schema.core.checker.call(null,input_schema23521_23600);
var output_checker23523_23602 = schema.core.checker.call(null,output_schema23520_23599);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function split_schema(G__23524,G__23525){
var validate__16917__auto__ = ufv___23598.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23524,G__23525], null);
var temp__4406__auto___23604 = input_checker23522_23601.call(null,args__16918__auto___23603);
if(cljs.core.truth_(temp__4406__auto___23604)){
var error__16919__auto___23605 = temp__4406__auto___23604;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16919__auto___23605)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23605,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23603,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23521_23600,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var s = G__23524;
var ks = G__23525;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__15200__auto__ = ((function (ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function iter__23562(s__23563){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function (){
var s__23563__$1 = s__23563;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__23563__$1);
if(temp__4406__auto__){
var s__23563__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23563__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__23563__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__23565 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__23564 = (0);
while(true){
if((i__23564 < size__15199__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__15198__auto__,i__23564);
cljs.core.chunk_append.call(null,b__23565,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = ((function (i__23564,in_QMARK_,c__15198__auto__,size__15199__auto__,b__23565,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function iter__23582(s__23583){
return (new cljs.core.LazySeq(null,((function (i__23564,in_QMARK_,c__15198__auto__,size__15199__auto__,b__23565,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function (){
var s__23583__$1 = s__23583;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__23583__$1);
if(temp__4406__auto____$1){
var s__23583__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23583__$2)){
var c__15198__auto____$1 = cljs.core.chunk_first.call(null,s__23583__$2);
var size__15199__auto____$1 = cljs.core.count.call(null,c__15198__auto____$1);
var b__23585 = cljs.core.chunk_buffer.call(null,size__15199__auto____$1);
if((function (){var i__23584 = (0);
while(true){
if((i__23584 < size__15199__auto____$1)){
var vec__23588 = cljs.core._nth.call(null,c__15198__auto____$1,i__23584);
var k = cljs.core.nth.call(null,vec__23588,(0),null);
var v = cljs.core.nth.call(null,vec__23588,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__23585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23606 = (i__23584 + (1));
i__23584 = G__23606;
continue;
} else {
var G__23607 = (i__23584 + (1));
i__23584 = G__23607;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23585),iter__23582.call(null,cljs.core.chunk_rest.call(null,s__23583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23585),null);
}
} else {
var vec__23589 = cljs.core.first.call(null,s__23583__$2);
var k = cljs.core.nth.call(null,vec__23589,(0),null);
var v = cljs.core.nth.call(null,vec__23589,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23582.call(null,cljs.core.rest.call(null,s__23583__$2)));
} else {
var G__23608 = cljs.core.rest.call(null,s__23583__$2);
s__23583__$1 = G__23608;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__23564,in_QMARK_,c__15198__auto__,size__15199__auto__,b__23565,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
,null,null));
});})(i__23564,in_QMARK_,c__15198__auto__,size__15199__auto__,b__23565,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
;
return iter__15200__auto__.call(null,s);
})()));

var G__23609 = (i__23564 + (1));
i__23564 = G__23609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23565),iter__23562.call(null,cljs.core.chunk_rest.call(null,s__23563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23565),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__23563__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = ((function (in_QMARK_,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function iter__23590(s__23591){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602){
return (function (){
var s__23591__$1 = s__23591;
while(true){
var temp__4406__auto____$1 = cljs.core.seq.call(null,s__23591__$1);
if(temp__4406__auto____$1){
var s__23591__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23591__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__23591__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__23593 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__23592 = (0);
while(true){
if((i__23592 < size__15199__auto__)){
var vec__23596 = cljs.core._nth.call(null,c__15198__auto__,i__23592);
var k = cljs.core.nth.call(null,vec__23596,(0),null);
var v = cljs.core.nth.call(null,vec__23596,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__23593,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23610 = (i__23592 + (1));
i__23592 = G__23610;
continue;
} else {
var G__23611 = (i__23592 + (1));
i__23592 = G__23611;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23593),iter__23590.call(null,cljs.core.chunk_rest.call(null,s__23591__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23593),null);
}
} else {
var vec__23597 = cljs.core.first.call(null,s__23591__$2);
var k = cljs.core.nth.call(null,vec__23597,(0),null);
var v = cljs.core.nth.call(null,vec__23597,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23590.call(null,cljs.core.rest.call(null,s__23591__$2)));
} else {
var G__23612 = cljs.core.rest.call(null,s__23591__$2);
s__23591__$1 = G__23612;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
,null,null));
});})(in_QMARK_,s__23563__$2,temp__4406__auto__,ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
;
return iter__15200__auto__.call(null,s);
})()),iter__23562.call(null,cljs.core.rest.call(null,s__23563__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
,null,null));
});})(ks__$1,validate__16917__auto__,ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
;
return iter__15200__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23613 = output_checker23523_23602.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23613)){
var error__16919__auto___23614 = temp__4406__auto___23613;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__16919__auto___23614)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23614,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23520_23599,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23598,output_schema23520_23599,input_schema23521_23600,input_checker23522_23601,output_checker23523_23602))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23520_23599,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23521_23600], null)));
var ufv___23645 = schema.utils.use_fn_validation;
var output_schema23615_23646 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema23616_23647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23617_23648 = schema.core.checker.call(null,input_schema23616_23647);
var output_checker23618_23649 = schema.core.checker.call(null,output_schema23615_23646);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23645,output_schema23615_23646,input_schema23616_23647,input_checker23617_23648,output_checker23618_23649){
return (function sequence_schemata(G__23619,G__23620){
var validate__16917__auto__ = ufv___23645.get_cell();
if(cljs.core.truth_(validate__16917__auto__)){
var args__16918__auto___23650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23619,G__23620], null);
var temp__4406__auto___23651 = input_checker23617_23648.call(null,args__16918__auto___23650);
if(cljs.core.truth_(temp__4406__auto___23651)){
var error__16919__auto___23652 = temp__4406__auto___23651;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16919__auto___23652)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23652,new cljs.core.Keyword(null,"value","value",305978217),args__16918__auto___23650,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23616_23647,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__16920__auto__ = (function (){var G__23636 = G__23619;
var vec__23638 = G__23636;
var i1 = cljs.core.nth.call(null,vec__23638,(0),null);
var o1 = cljs.core.nth.call(null,vec__23638,(1),null);
var G__23637 = G__23620;
var vec__23639 = G__23637;
var k = cljs.core.nth.call(null,vec__23639,(0),null);
var vec__23640 = cljs.core.nth.call(null,vec__23639,(1),null);
var i2 = cljs.core.nth.call(null,vec__23640,(0),null);
var o2 = cljs.core.nth.call(null,vec__23640,(1),null);
var G__23636__$1 = G__23636;
var G__23637__$1 = G__23637;
while(true){
var vec__23641 = G__23636__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23641,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23641,(1),null);
var vec__23642 = G__23637__$1;
var k__$1 = cljs.core.nth.call(null,vec__23642,(0),null);
var vec__23643 = cljs.core.nth.call(null,vec__23642,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__23643,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23643,(1),null);
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

var vec__23644 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__23644,(0),null);
var unused = cljs.core.nth.call(null,vec__23644,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__16917__auto__)){
var temp__4406__auto___23653 = output_checker23618_23649.call(null,o__16920__auto__);
if(cljs.core.truth_(temp__4406__auto___23653)){
var error__16919__auto___23654 = temp__4406__auto___23653;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__16919__auto___23654)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__16919__auto___23654,new cljs.core.Keyword(null,"value","value",305978217),o__16920__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23615_23646,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__16920__auto__;
});})(ufv___23645,output_schema23615_23646,input_schema23616_23647,input_checker23617_23648,output_checker23618_23649))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23615_23646,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23616_23647], null)));

//# sourceMappingURL=schema.js.map