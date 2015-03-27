// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$31,(function (p1__12876__12877__auto__){
var G__18698 = p1__12876__12877__auto__;
if(G__18698){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__18698.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__18698.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__18698);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__18698);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18699_SHARP_){
return (cljs.core.val(p1__18699_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__18701 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(1),null);
var p = vec__18701;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$46,cljs.core.constant$keyword$44,k,cljs.core.constant$keyword$45,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

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
var ufv___18711 = schema.utils.use_fn_validation;
var output_schema18702_18712 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema18703_18713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker18704_18714 = schema.core.checker(input_schema18703_18713);
var output_checker18705_18715 = schema.core.checker(output_schema18702_18712);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___18711,output_schema18702_18712,input_schema18703_18713,input_checker18704_18714,output_checker18705_18715){
return (function unwrap_schema_form_key(G__18706){
var validate__12846__auto__ = ufv___18711.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___18716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18706], null);
var temp__4406__auto___18717 = (function (){var G__18709 = args__12847__auto___18716;
return (input_checker18704_18714.cljs$core$IFn$_invoke$arity$1 ? input_checker18704_18714.cljs$core$IFn$_invoke$arity$1(G__18709) : input_checker18704_18714.call(null,G__18709));
})();
if(cljs.core.truth_(temp__4406__auto___18717)){
var error__12848__auto___18718 = temp__4406__auto___18717;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18718], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18718,cljs.core.constant$keyword$18,args__12847__auto___18716,cljs.core.constant$keyword$19,input_schema18703_18713,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var k = G__18706;
while(true){
if(schema.core.specific_key_QMARK_(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___18719 = (function (){var G__18710 = o__12849__auto__;
return (output_checker18705_18715.cljs$core$IFn$_invoke$arity$1 ? output_checker18705_18715.cljs$core$IFn$_invoke$arity$1(G__18710) : output_checker18705_18715.call(null,G__18710));
})();
if(cljs.core.truth_(temp__4406__auto___18719)){
var error__12848__auto___18720 = temp__4406__auto___18719;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18720], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18720,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18702_18712,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18711,output_schema18702_18712,input_schema18703_18713,input_checker18704_18714,output_checker18705_18715))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema18702_18712,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18703_18713], null)));
var ufv___18730 = schema.utils.use_fn_validation;
var output_schema18721_18731 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema18722_18732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker18723_18733 = schema.core.checker(input_schema18722_18732);
var output_checker18724_18734 = schema.core.checker(output_schema18721_18731);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___18730,output_schema18721_18731,input_schema18722_18732,input_checker18723_18733,output_checker18724_18734){
return (function explicit_schema_key_map(G__18725){
var validate__12846__auto__ = ufv___18730.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___18735 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18725], null);
var temp__4406__auto___18736 = (function (){var G__18728 = args__12847__auto___18735;
return (input_checker18723_18733.cljs$core$IFn$_invoke$arity$1 ? input_checker18723_18733.cljs$core$IFn$_invoke$arity$1(G__18728) : input_checker18723_18733.call(null,G__18728));
})();
if(cljs.core.truth_(temp__4406__auto___18736)){
var error__12848__auto___18737 = temp__4406__auto___18736;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18737], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18737,cljs.core.constant$keyword$18,args__12847__auto___18735,cljs.core.constant$keyword$19,input_schema18722_18732,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var s = G__18725;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___18738 = (function (){var G__18729 = o__12849__auto__;
return (output_checker18724_18734.cljs$core$IFn$_invoke$arity$1 ? output_checker18724_18734.cljs$core$IFn$_invoke$arity$1(G__18729) : output_checker18724_18734.call(null,G__18729));
})();
if(cljs.core.truth_(temp__4406__auto___18738)){
var error__12848__auto___18739 = temp__4406__auto___18738;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18739], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18739,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18721_18731,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18730,output_schema18721_18731,input_schema18722_18732,input_checker18723_18733,output_checker18724_18734))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema18721_18731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18722_18732], null)));
var ufv___18749 = schema.utils.use_fn_validation;
var output_schema18740_18750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema18741_18751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker18742_18752 = schema.core.checker(input_schema18741_18751);
var output_checker18743_18753 = schema.core.checker(output_schema18740_18750);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___18749,output_schema18740_18750,input_schema18741_18751,input_checker18742_18752,output_checker18743_18753){
return (function split_schema_keys(G__18744){
var validate__12846__auto__ = ufv___18749.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___18754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18744], null);
var temp__4406__auto___18755 = (function (){var G__18747 = args__12847__auto___18754;
return (input_checker18742_18752.cljs$core$IFn$_invoke$arity$1 ? input_checker18742_18752.cljs$core$IFn$_invoke$arity$1(G__18747) : input_checker18742_18752.call(null,G__18747));
})();
if(cljs.core.truth_(temp__4406__auto___18755)){
var error__12848__auto___18756 = temp__4406__auto___18755;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18756], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18756,cljs.core.constant$keyword$18,args__12847__auto___18754,cljs.core.constant$keyword$19,input_schema18741_18751,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var s = G__18744;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___18757 = (function (){var G__18748 = o__12849__auto__;
return (output_checker18743_18753.cljs$core$IFn$_invoke$arity$1 ? output_checker18743_18753.cljs$core$IFn$_invoke$arity$1(G__18748) : output_checker18743_18753.call(null,G__18748));
})();
if(cljs.core.truth_(temp__4406__auto___18757)){
var error__12848__auto___18758 = temp__4406__auto___18757;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18758], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18758,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18740_18750,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18749,output_schema18740_18750,input_schema18741_18751,input_checker18742_18752,output_checker18743_18753))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema18740_18750,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18741_18751], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__18767){
var vec__18768 = p__18767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18768,(1),null);
var pk = (function (){var G__18769 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__18769) : key_project.call(null,G__18769));
})();
var temp__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__18770 = temp__4404__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18770,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18770,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18771 = ok;
var G__18772 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__18771,G__18772) : key_combine.call(null,G__18771,G__18772));
})(),(function (){var G__18773 = ov;
var G__18774 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__18773,G__18774) : val_combine.call(null,G__18773,G__18774));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__18775__i = 0, G__18775__a = new Array(arguments.length -  3);
while (G__18775__i < G__18775__a.length) {G__18775__a[G__18775__i] = arguments[G__18775__i + 3]; ++G__18775__i;}
  maps = new cljs.core.IndexedSeq(G__18775__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__18776){
var key_project = cljs.core.first(arglist__18776);
arglist__18776 = cljs.core.next(arglist__18776);
var key_combine = cljs.core.first(arglist__18776);
arglist__18776 = cljs.core.next(arglist__18776);
var val_combine = cljs.core.first(arglist__18776);
var maps = cljs.core.rest(arglist__18776);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___18790 = schema.utils.use_fn_validation;
var output_schema18778_18791 = plumbing.fnk.schema.InputSchema;
var input_schema18779_18792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker18780_18793 = schema.core.checker(input_schema18779_18792);
var output_checker18781_18794 = schema.core.checker(output_schema18778_18791);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794){
return (function union_input_schemata(G__18782,G__18783){
var validate__12846__auto__ = ufv___18790.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___18795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18782,G__18783], null);
var temp__4406__auto___18796 = (function (){var G__18788 = args__12847__auto___18795;
return (input_checker18780_18793.cljs$core$IFn$_invoke$arity$1 ? input_checker18780_18793.cljs$core$IFn$_invoke$arity$1(G__18788) : input_checker18780_18793.call(null,G__18788));
})();
if(cljs.core.truth_(temp__4406__auto___18796)){
var error__12848__auto___18797 = temp__4406__auto___18796;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18797], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18797,cljs.core.constant$keyword$18,args__12847__auto___18795,cljs.core.constant$keyword$19,input_schema18779_18792,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var i1 = G__18782;
var i2 = G__18783;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__12846__auto__,ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794){
return (function (p1__18777_SHARP_){
if(schema.core.specific_key_QMARK_(p1__18777_SHARP_)){
return schema.core.explicit_schema_key(p1__18777_SHARP_);
} else {
return cljs.core.constant$keyword$47;
}
});})(validate__12846__auto__,ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794))
,((function (validate__12846__auto__,ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794){
return (function (k1,k2){
if(schema.core.required_key_QMARK_(k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_(k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_(k1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__12846__auto__,ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794))
,((function (validate__12846__auto__,ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_(s1)) && (plumbing.fnk.schema.map_schema_QMARK_(s2))){
return union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__12846__auto__,ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___18798 = (function (){var G__18789 = o__12849__auto__;
return (output_checker18781_18794.cljs$core$IFn$_invoke$arity$1 ? output_checker18781_18794.cljs$core$IFn$_invoke$arity$1(G__18789) : output_checker18781_18794.call(null,G__18789));
})();
if(cljs.core.truth_(temp__4406__auto___18798)){
var error__12848__auto___18799 = temp__4406__auto___18798;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18799], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18799,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18778_18791,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18790,output_schema18778_18791,input_schema18779_18792,input_checker18780_18793,output_checker18781_18794))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema18778_18791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18779_18792], null)));
var ufv___18809 = schema.utils.use_fn_validation;
var output_schema18800_18810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema18801_18811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker18802_18812 = schema.core.checker(input_schema18801_18811);
var output_checker18803_18813 = schema.core.checker(output_schema18800_18810);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___18809,output_schema18800_18810,input_schema18801_18811,input_checker18802_18812,output_checker18803_18813){
return (function required_toplevel_keys(G__18804){
var validate__12846__auto__ = ufv___18809.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___18814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18804], null);
var temp__4406__auto___18815 = (function (){var G__18807 = args__12847__auto___18814;
return (input_checker18802_18812.cljs$core$IFn$_invoke$arity$1 ? input_checker18802_18812.cljs$core$IFn$_invoke$arity$1(G__18807) : input_checker18802_18812.call(null,G__18807));
})();
if(cljs.core.truth_(temp__4406__auto___18815)){
var error__12848__auto___18816 = temp__4406__auto___18815;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18816], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18816,cljs.core.constant$keyword$18,args__12847__auto___18814,cljs.core.constant$keyword$19,input_schema18801_18811,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var input_schema = G__18804;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__12846__auto__,ufv___18809,output_schema18800_18810,input_schema18801_18811,input_checker18802_18812,output_checker18803_18813){
return (function (k){
if(schema.core.required_key_QMARK_(k)){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__12846__auto__,ufv___18809,output_schema18800_18810,input_schema18801_18811,input_checker18802_18812,output_checker18803_18813))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___18817 = (function (){var G__18808 = o__12849__auto__;
return (output_checker18803_18813.cljs$core$IFn$_invoke$arity$1 ? output_checker18803_18813.cljs$core$IFn$_invoke$arity$1(G__18808) : output_checker18803_18813.call(null,G__18808));
})();
if(cljs.core.truth_(temp__4406__auto___18817)){
var error__12848__auto___18818 = temp__4406__auto___18817;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18818], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18818,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18800_18810,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18809,output_schema18800_18810,input_schema18801_18811,input_checker18802_18812,output_checker18803_18813))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema18800_18810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18801_18811], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6646__auto__ = (function iter__18833(s__18834){
return (new cljs.core.LazySeq(null,(function (){
var s__18834__$1 = s__18834;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__18834__$1);
if(temp__4406__auto__){
var s__18834__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18834__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__18834__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__18836 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__18835 = (0);
while(true){
if((i__18835 < size__6645__auto__)){
var vec__18841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__18835);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18841,(1),null);
cljs.core.chunk_append(b__18836,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null));

var G__18843 = (i__18835 + (1));
i__18835 = G__18843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18836),iter__18833(cljs.core.chunk_rest(s__18834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18836),null);
}
} else {
var vec__18842 = cljs.core.first(s__18834__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18842,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema(v)], null),iter__18833(cljs.core.rest(s__18834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(expr);
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
if(!(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.__GT_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6646__auto__ = (function iter__18862(s__18863){
return (new cljs.core.LazySeq(null,(function (){
var s__18863__$1 = s__18863;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__18863__$1);
if(temp__4406__auto__){
var s__18863__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18863__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__18863__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__18865 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__18864 = (0);
while(true){
if((i__18864 < size__6645__auto__)){
var vec__18870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__18864);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__18865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__18872 = (i__18864 + (1));
i__18864 = G__18872;
continue;
} else {
var G__18873 = (i__18864 + (1));
i__18864 = G__18873;
continue;
}
} else {
var G__18874 = (i__18864 + (1));
i__18864 = G__18874;
continue;
}
} else {
var G__18875 = (i__18864 + (1));
i__18864 = G__18875;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18865),iter__18862(cljs.core.chunk_rest(s__18863__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18865),null);
}
} else {
var vec__18871 = cljs.core.first(s__18863__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18871,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18871,(1),null);
if(schema.core.specific_key_QMARK_(k)){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__18862(cljs.core.rest(s__18863__$2)));
} else {
var G__18876 = cljs.core.rest(s__18863__$2);
s__18863__$1 = G__18876;
continue;
}
} else {
var G__18877 = cljs.core.rest(s__18863__$2);
s__18863__$1 = G__18877;
continue;
}
} else {
var G__18878 = cljs.core.rest(s__18863__$2);
s__18863__$1 = G__18878;
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
return iter__6646__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,cljs.core.constant$keyword$49,cljs.core.constant$keyword$48,fails], null));
} else {
return null;
}
});
var ufv___18905 = schema.utils.use_fn_validation;
var output_schema18879_18906 = schema.core.Any;
var input_schema18880_18907 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker18881_18908 = schema.core.checker(input_schema18880_18907);
var output_checker18882_18909 = schema.core.checker(output_schema18879_18906);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___18905,output_schema18879_18906,input_schema18880_18907,input_checker18881_18908,output_checker18882_18909){
return (function compose_schemata(G__18883,G__18884){
var validate__12846__auto__ = true;
if(validate__12846__auto__){
var args__12847__auto___18910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18883,G__18884], null);
var temp__4406__auto___18911 = (function (){var G__18895 = args__12847__auto___18910;
return (input_checker18881_18908.cljs$core$IFn$_invoke$arity$1 ? input_checker18881_18908.cljs$core$IFn$_invoke$arity$1(G__18895) : input_checker18881_18908.call(null,G__18895));
})();
if(cljs.core.truth_(temp__4406__auto___18911)){
var error__12848__auto___18912 = temp__4406__auto___18911;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18912], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18912,cljs.core.constant$keyword$18,args__12847__auto___18910,cljs.core.constant$keyword$19,input_schema18880_18907,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var G__18898 = G__18883;
var vec__18900 = G__18898;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18900,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18900,(1),null);
var G__18899 = G__18884;
var vec__18901 = G__18899;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18901,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18901,(1),null);
var G__18898__$1 = G__18898;
var G__18899__$1 = G__18899;
while(true){
var vec__18902 = G__18898__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(1),null);
var vec__18903 = G__18899__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18903,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18903,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__12846__auto__){
var temp__4406__auto___18913 = (function (){var G__18904 = o__12849__auto__;
return (output_checker18882_18909.cljs$core$IFn$_invoke$arity$1 ? output_checker18882_18909.cljs$core$IFn$_invoke$arity$1(G__18904) : output_checker18882_18909.call(null,G__18904));
})();
if(cljs.core.truth_(temp__4406__auto___18913)){
var error__12848__auto___18914 = temp__4406__auto___18913;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___18914], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___18914,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18879_18906,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___18905,output_schema18879_18906,input_schema18880_18907,input_checker18881_18908,output_checker18882_18909))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema18879_18906,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18880_18907], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___19017 = schema.utils.use_fn_validation;
var output_schema18915_19018 = schema.core.Any;
var input_schema18916_19019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker18917_19020 = schema.core.checker(input_schema18916_19019);
var output_checker18918_19021 = schema.core.checker(output_schema18915_19018);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function split_schema(G__18919,G__18920){
var validate__12846__auto__ = ufv___19017.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___19022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18919,G__18920], null);
var temp__4406__auto___19023 = (function (){var G__18969 = args__12847__auto___19022;
return (input_checker18917_19020.cljs$core$IFn$_invoke$arity$1 ? input_checker18917_19020.cljs$core$IFn$_invoke$arity$1(G__18969) : input_checker18917_19020.call(null,G__18969));
})();
if(cljs.core.truth_(temp__4406__auto___19023)){
var error__12848__auto___19024 = temp__4406__auto___19023;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___19024], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___19024,cljs.core.constant$keyword$18,args__12847__auto___19022,cljs.core.constant$keyword$19,input_schema18916_19019,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var s = G__18919;
var ks = G__18920;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__6646__auto__ = ((function (ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function iter__18970(s__18971){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function (){
var s__18971__$1 = s__18971;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__18971__$1);
if(temp__4406__auto__){
var s__18971__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18971__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__18971__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__18973 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__18972 = (0);
while(true){
if((i__18972 < size__6645__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__18972);
cljs.core.chunk_append(b__18973,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6646__auto__ = ((function (i__18972,in_QMARK_,c__6644__auto__,size__6645__auto__,b__18973,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function iter__18996(s__18997){
return (new cljs.core.LazySeq(null,((function (i__18972,in_QMARK_,c__6644__auto__,size__6645__auto__,b__18973,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function (){
var s__18997__$1 = s__18997;
while(true){
var temp__4406__auto____$1 = cljs.core.seq(s__18997__$1);
if(temp__4406__auto____$1){
var s__18997__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18997__$2)){
var c__6644__auto____$1 = cljs.core.chunk_first(s__18997__$2);
var size__6645__auto____$1 = cljs.core.count(c__6644__auto____$1);
var b__18999 = cljs.core.chunk_buffer(size__6645__auto____$1);
if((function (){var i__18998 = (0);
while(true){
if((i__18998 < size__6645__auto____$1)){
var vec__19004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto____$1,i__18998);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__18999,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19025 = (i__18998 + (1));
i__18998 = G__19025;
continue;
} else {
var G__19026 = (i__18998 + (1));
i__18998 = G__19026;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18999),iter__18996(cljs.core.chunk_rest(s__18997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18999),null);
}
} else {
var vec__19005 = cljs.core.first(s__18997__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19005,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__18996(cljs.core.rest(s__18997__$2)));
} else {
var G__19027 = cljs.core.rest(s__18997__$2);
s__18997__$1 = G__19027;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__18972,in_QMARK_,c__6644__auto__,size__6645__auto__,b__18973,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
,null,null));
});})(i__18972,in_QMARK_,c__6644__auto__,size__6645__auto__,b__18973,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
;
return iter__6646__auto__(s);
})()));

var G__19028 = (i__18972 + (1));
i__18972 = G__19028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18973),iter__18970(cljs.core.chunk_rest(s__18971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18973),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__18971__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6646__auto__ = ((function (in_QMARK_,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function iter__19006(s__19007){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021){
return (function (){
var s__19007__$1 = s__19007;
while(true){
var temp__4406__auto____$1 = cljs.core.seq(s__19007__$1);
if(temp__4406__auto____$1){
var s__19007__$2 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19007__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19007__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19009 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19008 = (0);
while(true){
if((i__19008 < size__6645__auto__)){
var vec__19014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19008);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
cljs.core.chunk_append(b__19009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19029 = (i__19008 + (1));
i__19008 = G__19029;
continue;
} else {
var G__19030 = (i__19008 + (1));
i__19008 = G__19030;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19009),iter__19006(cljs.core.chunk_rest(s__19007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19009),null);
}
} else {
var vec__19015 = cljs.core.first(s__19007__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(1),null);
if((schema.core.specific_key_QMARK_(k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k))))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19006(cljs.core.rest(s__19007__$2)));
} else {
var G__19031 = cljs.core.rest(s__19007__$2);
s__19007__$1 = G__19031;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
,null,null));
});})(in_QMARK_,s__18971__$2,temp__4406__auto__,ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
;
return iter__6646__auto__(s);
})()),iter__18970(cljs.core.rest(s__18971__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
,null,null));
});})(ks__$1,validate__12846__auto__,ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
;
return iter__6646__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___19032 = (function (){var G__19016 = o__12849__auto__;
return (output_checker18918_19021.cljs$core$IFn$_invoke$arity$1 ? output_checker18918_19021.cljs$core$IFn$_invoke$arity$1(G__19016) : output_checker18918_19021.call(null,G__19016));
})();
if(cljs.core.truth_(temp__4406__auto___19032)){
var error__12848__auto___19033 = temp__4406__auto___19032;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___19033], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___19033,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema18915_19018,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___19017,output_schema18915_19018,input_schema18916_19019,input_checker18917_19020,output_checker18918_19021))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema18915_19018,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18916_19019], null)));
var ufv___19068 = schema.utils.use_fn_validation;
var output_schema19034_19069 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema19035_19070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker19036_19071 = schema.core.checker(input_schema19035_19070);
var output_checker19037_19072 = schema.core.checker(output_schema19034_19069);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___19068,output_schema19034_19069,input_schema19035_19070,input_checker19036_19071,output_checker19037_19072){
return (function sequence_schemata(G__19038,G__19039){
var validate__12846__auto__ = ufv___19068.get_cell();
if(cljs.core.truth_(validate__12846__auto__)){
var args__12847__auto___19073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19038,G__19039], null);
var temp__4406__auto___19074 = (function (){var G__19054 = args__12847__auto___19073;
return (input_checker19036_19071.cljs$core$IFn$_invoke$arity$1 ? input_checker19036_19071.cljs$core$IFn$_invoke$arity$1(G__19054) : input_checker19036_19071.call(null,G__19054));
})();
if(cljs.core.truth_(temp__4406__auto___19074)){
var error__12848__auto___19075 = temp__4406__auto___19074;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___19075], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___19075,cljs.core.constant$keyword$18,args__12847__auto___19073,cljs.core.constant$keyword$19,input_schema19035_19070,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

var o__12849__auto__ = (function (){var G__19058 = G__19038;
var vec__19060 = G__19058;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060,(1),null);
var G__19059 = G__19039;
var vec__19061 = G__19059;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(0),null);
var vec__19062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19061,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19062,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19062,(1),null);
var G__19058__$1 = G__19058;
var G__19059__$1 = G__19059;
while(true){
var vec__19063 = G__19058__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19063,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19063,(1),null);
var vec__19064 = G__19059__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(0),null);
var vec__19065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__19066 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19066,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19066,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__12846__auto__)){
var temp__4406__auto___19076 = (function (){var G__19067 = o__12849__auto__;
return (output_checker19037_19072.cljs$core$IFn$_invoke$arity$1 ? output_checker19037_19072.cljs$core$IFn$_invoke$arity$1(G__19067) : output_checker19037_19072.call(null,G__19067));
})();
if(cljs.core.truth_(temp__4406__auto___19076)){
var error__12848__auto___19077 = temp__4406__auto___19076;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__12848__auto___19077], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error__12848__auto___19077,cljs.core.constant$keyword$18,o__12849__auto__,cljs.core.constant$keyword$19,output_schema19034_19069,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}
} else {
}

return o__12849__auto__;
});})(ufv___19068,output_schema19034_19069,input_schema19035_19070,input_checker19036_19071,output_checker19037_19072))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema19034_19069,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19035_19070], null)));
