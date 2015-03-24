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
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__10941__auto__ = m;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__11697__auto__ = (function iter__36379(s__36380){
return (new cljs.core.LazySeq(null,(function (){
var s__36380__$1 = s__36380;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__36380__$1);
if(temp__4406__auto__){
var s__36380__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36380__$2)){
var c__11695__auto__ = cljs.core.chunk_first.call(null,s__36380__$2);
var size__11696__auto__ = cljs.core.count.call(null,c__11695__auto__);
var b__36382 = cljs.core.chunk_buffer.call(null,size__11696__auto__);
if((function (){var i__36381 = (0);
while(true){
if((i__36381 < size__11696__auto__)){
var vec__36385 = cljs.core._nth.call(null,c__11695__auto__,i__36381);
var k = cljs.core.nth.call(null,vec__36385,(0),null);
var v = cljs.core.nth.call(null,vec__36385,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__36382,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__36387 = (i__36381 + (1));
i__36381 = G__36387;
continue;
} else {
var G__36388 = (i__36381 + (1));
i__36381 = G__36388;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36382),iter__36379.call(null,cljs.core.chunk_rest.call(null,s__36380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36382),null);
}
} else {
var vec__36386 = cljs.core.first.call(null,s__36380__$2);
var k = cljs.core.nth.call(null,vec__36386,(0),null);
var v = cljs.core.nth.call(null,vec__36386,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__36379.call(null,cljs.core.rest.call(null,s__36380__$2)));
} else {
var G__36389 = cljs.core.rest.call(null,s__36380__$2);
s__36380__$1 = G__36389;
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
return iter__11697__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__36390__i = 0, G__36390__a = new Array(arguments.length -  1);
while (G__36390__i < G__36390__a.length) {G__36390__a[G__36390__i] = arguments[G__36390__i + 1]; ++G__36390__i;}
  kvs = new cljs.core.IndexedSeq(G__36390__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__36391){
var m = cljs.core.first(arglist__36391);
var kvs = cljs.core.rest(arglist__36391);
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
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;
if (arguments.length > 1) {
var G__36392__i = 0, G__36392__a = new Array(arguments.length -  1);
while (G__36392__i < G__36392__a.length) {G__36392__a[G__36392__i] = arguments[G__36392__i + 1]; ++G__36392__i;}
  args = new cljs.core.IndexedSeq(G__36392__a,0);
} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__36393){
var fmt = cljs.core.first(arglist__36393);
var args = cljs.core.rest(arglist__36393);
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
var t = schema.utils.type_of.call(null,value);
if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
* Identity version of memoize, because many schemas are records, and records
* don't cache their hash codes (at least in Clojure 1.5.1).
* Not thread safe, and doesn't cache falsey values.
*/
schema.utils.memoize_id = (function memoize_id(f){
return cljs.core.memoize.call(null,f);
});
schema.utils.record_QMARK_ = (function record_QMARK_(x){
var G__36395 = x;
if(G__36395){
var bit__11622__auto__ = (G__36395.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__11622__auto__) || (G__36395.cljs$core$IRecord$)){
return true;
} else {
if((!G__36395.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__36395);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__36395);
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
return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function validation_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__10941__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
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
return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function named_error_explain(err){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
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
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11544__auto__,k__11545__auto__){
var self__ = this;
var this__11544__auto____$1 = this;
return cljs.core._lookup.call(null,this__11544__auto____$1,k__11545__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11546__auto__,k36397,else__11547__auto__){
var self__ = this;
var this__11546__auto____$1 = this;
var G__36399 = (((k36397 instanceof cljs.core.Keyword))?k36397.fqn:null);
switch (G__36399) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36397,else__11547__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11558__auto__,writer__11559__auto__,opts__11560__auto__){
var self__ = this;
var this__11558__auto____$1 = this;
var pr_pair__11561__auto__ = ((function (this__11558__auto____$1){
return (function (keyval__11562__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11559__auto__,cljs.core.pr_writer,""," ","",opts__11560__auto__,keyval__11562__auto__);
});})(this__11558__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__11559__auto__,pr_pair__11561__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__11560__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11542__auto__){
var self__ = this;
var this__11542__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11538__auto__){
var self__ = this;
var this__11538__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11548__auto__){
var self__ = this;
var this__11548__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11539__auto__){
var self__ = this;
var this__11539__auto____$1 = this;
var h__11362__auto__ = self__.__hash;
if(!((h__11362__auto__ == null))){
return h__11362__auto__;
} else {
var h__11362__auto____$1 = cljs.core.hash_imap.call(null,this__11539__auto____$1);
self__.__hash = h__11362__auto____$1;

return h__11362__auto____$1;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__11540__auto__,other__11541__auto__){
var self__ = this;
var this__11540__auto____$1 = this;
if(cljs.core.truth_((function (){var and__10929__auto__ = other__11541__auto__;
if(cljs.core.truth_(and__10929__auto__)){
return ((this__11540__auto____$1.constructor === other__11541__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__11540__auto____$1,other__11541__auto__));
} else {
return and__10929__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11553__auto__,k__11554__auto__){
var self__ = this;
var this__11553__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__11554__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11553__auto____$1),self__.__meta),k__11554__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11554__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11551__auto__,k__11552__auto__,G__36396){
var self__ = this;
var this__11551__auto____$1 = this;
var pred__36400 = cljs.core.keyword_identical_QMARK_;
var expr__36401 = k__11552__auto__;
if(cljs.core.truth_(pred__36400.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__36401))){
return (new schema.utils.ErrorContainer(G__36396,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11552__auto__,G__36396),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11556__auto__){
var self__ = this;
var this__11556__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11543__auto__,G__36396){
var self__ = this;
var this__11543__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__36396,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11549__auto__,entry__11550__auto__){
var self__ = this;
var this__11549__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11550__auto__)){
return cljs.core._assoc.call(null,this__11549__auto____$1,cljs.core._nth.call(null,entry__11550__auto__,(0)),cljs.core._nth.call(null,entry__11550__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11549__auto____$1,entry__11550__auto__);
}
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__11578__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__11578__auto__,writer__11579__auto__){
return cljs.core._write.call(null,writer__11579__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__36398){
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__36398),null,cljs.core.dissoc.call(null,G__36398,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-555367584,null)))].join('')));
}

return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){
if(schema.utils.error_QMARK_.call(null,x)){
return x.error;
} else {
return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){
var temp__4404__auto__ = schema.utils.error_val.call(null,maybe_error);
if(cljs.core.truth_(temp__4404__auto__)){
var e = temp__4404__auto__;
return schema.utils.error.call(null,schema.utils.__GT_NamedError.call(null,name,e));
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
var temp__4404__auto__ = schema.utils.error_val.call(null,e);
if(cljs.core.truth_(temp__4404__auto__)){
var err = temp__4404__auto__;
return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__10941__auto__ = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return lift_to_error.call(null,m);
}
})(),err));
} else {
var temp__4404__auto____$1 = schema.utils.error_val.call(null,m);
if(cljs.core.truth_(temp__4404__auto____$1)){
var merr = temp__4404__auto____$1;
return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else {
return cljs.core.conj.call(null,m,e);
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

schema.utils.PSimpleCell = (function (){var obj36405 = {};
return obj36405;
})();

schema.utils.get_cell = (function get_cell(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (schema.utils.get_cell[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (schema.utils.get_cell["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function set_cell(this$,x){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (schema.utils.set_cell[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (schema.utils.set_cell["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
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

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"schema.utils/SimpleVCell");
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
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);
