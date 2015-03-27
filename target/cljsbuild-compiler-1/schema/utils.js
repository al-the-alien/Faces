// Compiled by ClojureScript 0.0-2816 {}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
/**
* Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
* schema need not depend on plumbing.
* @param {...*} var_args
*/
schema.utils.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5890__auto__ = m;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__6646__auto__ = (function iter__19090(s__19091){
return (new cljs.core.LazySeq(null,(function (){
var s__19091__$1 = s__19091;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19091__$1);
if(temp__4406__auto__){
var s__19091__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19091__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19091__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19093 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19092 = (0);
while(true){
if((i__19092 < size__6645__auto__)){
var vec__19098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19092);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19098,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__19093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__19100 = (i__19092 + (1));
i__19092 = G__19100;
continue;
} else {
var G__19101 = (i__19092 + (1));
i__19092 = G__19101;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19093),iter__19090(cljs.core.chunk_rest(s__19091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19093),null);
}
} else {
var vec__19099 = cljs.core.first(s__19091__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19099,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19099,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__19090(cljs.core.rest(s__19091__$2)));
} else {
var G__19102 = cljs.core.rest(s__19091__$2);
s__19091__$1 = G__19102;
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
return iter__6646__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__19103__i = 0, G__19103__a = new Array(arguments.length -  1);
while (G__19103__i < G__19103__a.length) {G__19103__a[G__19103__i] = arguments[G__19103__i + 1]; ++G__19103__i;}
  kvs = new cljs.core.IndexedSeq(G__19103__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__19104){
var m = cljs.core.first(arglist__19104);
var kvs = cljs.core.rest(arglist__19104);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
schema.utils.type_of = (function type_of(x){
return typeof x;
});
/**
* What class can we associate the fn schema with? In Clojure use the class of the fn; in
* cljs just use the fn itself.
*/
schema.utils.fn_schema_bearer = (function fn_schema_bearer(f){
return f;
});
/**
* @param {...*} var_args
*/
schema.utils.format_STAR_ = (function() { 
var format_STAR___delegate = function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__19105__i = 0, G__19105__a = new Array(arguments.length -  1);
while (G__19105__i < G__19105__a.length) {G__19105__a[G__19105__i] = arguments[G__19105__i + 1]; ++G__19105__i;}
  args = new cljs.core.IndexedSeq(G__19105__a,0);
} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__19106){
var fmt = cljs.core.first(arglist__19106);
var args = cljs.core.rest(arglist__19106);
return format_STAR___delegate(fmt,args);
});
format_STAR_.cljs$core$IFn$_invoke$arity$variadic = format_STAR___delegate;
return format_STAR_;
})()
;
/**
* Provide a descriptive short name for a value.
*/
schema.utils.value_name = (function value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
* Identity version of memoize, because many schemas are records, and records
* don't cache their hash codes (at least in Clojure 1.5.1).
* Not thread safe, and doesn't cache falsey values.
*/
schema.utils.memoize_id = (function memoize_id(f){
return cljs.core.memoize(f);
});
schema.utils.record_QMARK_ = (function record_QMARK_(x){
var G__19108 = x;
if(G__19108){
var bit__6571__auto__ = (G__19108.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__6571__auto__) || (G__19108.cljs$core$IRecord$)){
return true;
} else {
if((!G__19108.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__19108);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__19108);
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__19109 = this$__$1;
return (schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(G__19109) : schema.utils.validation_error_explain.call(null,G__19109));
})(),writer,opts);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__6477__auto__,writer__6478__auto__,opt__6479__auto__){
return cljs.core._write(writer__6478__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__19111 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19111) : cljs.core.deref.call(null,G__19111));
})()),(function (){var or__5890__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__19112 = this$__$1;
return (schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(G__19112) : schema.utils.named_error_explain.call(null,G__19112));
})(),writer,opts);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__6477__auto__,writer__6478__auto__,opt__6479__auto__){
return cljs.core._write(writer__6478__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19114,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19116 = (((k19114 instanceof cljs.core.Keyword))?k19114.fqn:null);
switch (G__19116) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19114,else__6496__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
var self__ = this;
var this__6488__auto____$1 = this;
var h__6311__auto__ = self__.__hash;
if(!((h__6311__auto__ == null))){
return h__6311__auto__;
} else {
var h__6311__auto____$1 = cljs.core.hash_imap(this__6488__auto____$1);
self__.__hash = h__6311__auto____$1;

return h__6311__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
var self__ = this;
var this__6489__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5878__auto__ = other__6490__auto__;
if(cljs.core.truth_(and__5878__auto__)){
return ((this__6489__auto____$1.constructor === other__6490__auto__.constructor)) && (cljs.core.equiv_map(this__6489__auto____$1,other__6490__auto__));
} else {
return and__5878__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19113){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19117 = cljs.core.keyword_identical_QMARK_;
var expr__19118 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19120 = cljs.core.constant$keyword$17;
var G__19121 = expr__19118;
return (pred__19117.cljs$core$IFn$_invoke$arity$2 ? pred__19117.cljs$core$IFn$_invoke$arity$2(G__19120,G__19121) : pred__19117.call(null,G__19120,G__19121));
})())){
return (new schema.utils.ErrorContainer(G__19113,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19113),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$17,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19113){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__19113,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__19115){
return (new schema.utils.ErrorContainer(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(G__19115),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19115,cljs.core.constant$keyword$17),null));
});

/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"x","x",-555367584,null)], 0)))].join('')));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){
if(schema.utils.error_QMARK_(x)){
return x.error;
} else {
return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){
var temp__4404__auto__ = schema.utils.error_val(maybe_error);
if(cljs.core.truth_(temp__4404__auto__)){
var e = temp__4404__auto__;
return schema.utils.error(schema.utils.__GT_NamedError(name,e));
} else {
return maybe_error;
}
});
/**
* Build up a result by conjing values, producing an error if at least one
* sub-value returns an error.
*/
schema.utils.result_builder = (function result_builder(lift_to_error){
return (function conjer(m,e){
var temp__4404__auto__ = schema.utils.error_val(e);
if(cljs.core.truth_(temp__4404__auto__)){
var err = temp__4404__auto__;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5890__auto__ = schema.utils.error_val(m);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var G__19126 = m;
return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(G__19126) : lift_to_error.call(null,G__19126));
}
})(),err));
} else {
var temp__4404__auto____$1 = schema.utils.error_val(m);
if(cljs.core.truth_(temp__4404__auto____$1)){
var merr = temp__4404__auto____$1;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merr,null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function class_schema(klass){
return (klass["schema$utils$schema"]);
});

schema.utils.PSimpleCell = (function (){var obj19128 = {};
return obj19128;
})();

schema.utils.get_cell = (function get_cell(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (schema.utils.get_cell[(function (){var G__19132 = x__6534__auto__;
return goog.typeOf(G__19132);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (schema.utils.get_cell["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function set_cell(this$,x){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (schema.utils.set_cell[(function (){var G__19136 = x__6534__auto__;
return goog.typeOf(G__19136);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (schema.utils.set_cell["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});


/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__6477__auto__,writer__6478__auto__,opt__6479__auto__){
return cljs.core._write(writer__6478__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function __GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
* Turn on run-time function validation for functions compiled when
* *compile-function-validation* was true -- has no effect for functions compiled
* when it is false.
*/
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
