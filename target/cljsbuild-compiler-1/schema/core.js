// Compiled by ClojureScript 0.0-2816 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('clojure.string');

schema.core.Schema = (function (){var obj19140 = {};
return obj19140;
})();

schema.core.walker = (function walker(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (schema.core.walker[(function (){var G__19144 = x__6534__auto__;
return goog.typeOf(G__19144);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (schema.core.walker["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.walker",this$);
}
}
})().call(null,this$);
}
});

schema.core.explain = (function explain(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (schema.core.explain[(function (){var G__19148 = x__6534__auto__;
return goog.typeOf(G__19148);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (schema.core.explain["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
})().call(null,this$);
}
});

/**
* The function to call within 'walker' implementations to create walkers for subschemas.
* Can be dynamically bound (using start-walker below) to create different walking behaviors.
* 
* For the curious, implemented using dynamic binding rather than making walker take a
* subschema-walker as an argument because some behaviors (e.g. recursive schema walkers)
* seem to require mind-bending things like fixed-point combinators that way, but are
* simple this way.
*/
schema.core.subschema_walker = (function subschema_walker(s){
throw (new Error([cljs.core.str("Walking is unsupported outside of start-walker; "),cljs.core.str("all composite schemas must eagerly bind subschema-walkers "),cljs.core.str("outside the returned walker.")].join('')));
});
/**
* The entry point for creating walkers.  Binds the provided walker to subschema-walker,
* then calls it on the provided schema.  For simple validation, pass walker as sub-walker.
* More sophisticated behavior (coercion, etc), can be achieved by passing a sub-walker
* that wraps walker with additional behavior.
*/
schema.core.start_walker = (function start_walker(sub_walker,schema__$1){
var subschema_walker19150 = schema.core.subschema_walker;
schema.core.subschema_walker = sub_walker;

try{return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1));
}finally {schema.core.subschema_walker = subschema_walker19150;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.core.start_walker(schema.utils.memoize_id(schema.core.walker),schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){
var temp__4406__auto___19151 = schema.core.check(schema__$1,value);
if(cljs.core.truth_(temp__4406__auto___19151)){
var error_19152 = temp__4406__auto___19151;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_19152], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$17,error_19152,cljs.core.constant$keyword$18,value,cljs.core.constant$keyword$19,schema__$1,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4404__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4404__auto__)){
var more_schema = temp__4404__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(more_schema) : schema.core.subschema_walker.call(null,more_schema));
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__5890__auto__ = ((((x == null)) || (cljs.core.not((function (){var or__5890__auto__ = (this$ === x.constructor);
if(or__5890__auto__){
return or__5890__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error(schema.utils.__GT_ValidationError(this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var G__19153 = x;
return (class_walker.cljs$core$IFn$_invoke$arity$1 ? class_walker.cljs$core$IFn$_invoke$arity$1(G__19153) : class_walker.call(null,G__19153));
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4404__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4404__auto__)){
var more_schema = temp__4404__auto__;
return schema.core.explain(more_schema);
} else {
return this$;
}
}));

/**
* @constructor
* @param {*} _
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19155,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19157 = (((k19155 instanceof cljs.core.Keyword))?k19155.fqn:null);
switch (G__19157) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19155,else__6496__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.AnythingSchema{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19154){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19158 = cljs.core.keyword_identical_QMARK_;
var expr__19159 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19161 = cljs.core.constant$keyword$22;
var G__19162 = expr__19159;
return (pred__19158.cljs$core$IFn$_invoke$arity$2 ? pred__19158.cljs$core$IFn$_invoke$arity$2(G__19161,G__19162) : pred__19158.call(null,G__19161,G__19162));
})())){
return (new schema.core.AnythingSchema(G__19154,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19154),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19154){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__19154,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.identity;
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__19156){
return (new schema.core.AnythingSchema(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__19156),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19156,cljs.core.constant$keyword$22),null));
});

/**
* Any value, including nil.
*/
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
* @param {*} v
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19165,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19167 = (((k19165 instanceof cljs.core.Keyword))?k19165.fqn:null);
switch (G__19167) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19165,else__6496__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.EqSchema{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19164){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19168 = cljs.core.keyword_identical_QMARK_;
var expr__19169 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19171 = cljs.core.constant$keyword$23;
var G__19172 = expr__19169;
return (pred__19168.cljs$core$IFn$_invoke$arity$2 ? pred__19168.cljs$core$IFn$_invoke$arity$2(G__19171,G__19172) : pred__19168.call(null,G__19171,G__19172));
})())){
return (new schema.core.EqSchema(G__19164,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19164),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$23,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19164){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__19164,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function __GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__19166){
return (new schema.core.EqSchema(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(G__19166),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19166,cljs.core.constant$keyword$23),null));
});

/**
* A value that must be (= v).
*/
schema.core.eq = (function eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
* @param {*} h
* @param {*} parent
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19175,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19177 = (((k19175 instanceof cljs.core.Keyword))?k19175.fqn:null);
switch (G__19177) {
case "parent":
return self__.parent;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19175,else__6496__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Isa{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$24,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19174){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19178 = cljs.core.keyword_identical_QMARK_;
var expr__19179 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19181 = cljs.core.constant$keyword$24;
var G__19182 = expr__19179;
return (pred__19178.cljs$core$IFn$_invoke$arity$2 ? pred__19178.cljs$core$IFn$_invoke$arity$2(G__19181,G__19182) : pred__19178.call(null,G__19181,G__19182));
})())){
return (new schema.core.Isa(G__19174,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19183 = cljs.core.constant$keyword$25;
var G__19184 = expr__19179;
return (pred__19178.cljs$core$IFn$_invoke$arity$2 ? pred__19178.cljs$core$IFn$_invoke$arity$2(G__19183,G__19184) : pred__19178.call(null,G__19183,G__19184));
})())){
return (new schema.core.Isa(self__.h,G__19174,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19174),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$24,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$25,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19174){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__19174,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__5890__auto__ = (function (){var and__5878__auto__ = self__.h;
if(cljs.core.truth_(and__5878__auto__)){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,child,self__.parent);
} else {
return and__5878__auto__;
}
})();
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function __GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function map__GT_Isa(G__19176){
return (new schema.core.Isa(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(G__19176),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(G__19176),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19176,cljs.core.constant$keyword$24,cljs.core.array_seq([cljs.core.constant$keyword$25], 0)),null));
});

/**
* A value that must be a child of parent.
*/
schema.core.isa = (function() {
var isa = null;
var isa__1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});
var isa__2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});
isa = function(h,parent){
switch(arguments.length){
case 1:
return isa__1.call(this,h);
case 2:
return isa__2.call(this,h,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa.cljs$core$IFn$_invoke$arity$1 = isa__1;
isa.cljs$core$IFn$_invoke$arity$2 = isa__2;
return isa;
})()
;

/**
* @constructor
* @param {*} vs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19187,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19189 = (((k19187 instanceof cljs.core.Keyword))?k19187.fqn:null);
switch (G__19189) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19187,else__6496__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.EnumSchema{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$26,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19186){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19190 = cljs.core.keyword_identical_QMARK_;
var expr__19191 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19193 = cljs.core.constant$keyword$26;
var G__19194 = expr__19191;
return (pred__19190.cljs$core$IFn$_invoke$arity$2 ? pred__19190.cljs$core$IFn$_invoke$arity$2(G__19193,G__19194) : pred__19190.call(null,G__19193,G__19194));
})())){
return (new schema.core.EnumSchema(G__19186,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19186),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$26,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19186){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__19186,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_(self__.vs,x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__19188){
return (new schema.core.EnumSchema(cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(G__19188),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19188,cljs.core.constant$keyword$26),null));
});

/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
};
var enum$ = function (var_args){
var vs = null;
if (arguments.length > 0) {
var G__19196__i = 0, G__19196__a = new Array(arguments.length -  0);
while (G__19196__i < G__19196__a.length) {G__19196__a[G__19196__i] = arguments[G__19196__i + 0]; ++G__19196__i;}
  vs = new cljs.core.IndexedSeq(G__19196__a,0);
} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__19197){
var vs = cljs.core.seq(arglist__19197);
return enum$__delegate(vs);
});
enum$.cljs$core$IFn$_invoke$arity$variadic = enum$__delegate;
return enum$;
})()
;

/**
* @constructor
* @param {*} p_QMARK_
* @param {*} pred_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19199,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19201 = (((k19199 instanceof cljs.core.Keyword))?k19199.fqn:null);
switch (G__19201) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19199,else__6496__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Predicate{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$27,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19198){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19202 = cljs.core.keyword_identical_QMARK_;
var expr__19203 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19205 = cljs.core.constant$keyword$27;
var G__19206 = expr__19203;
return (pred__19202.cljs$core$IFn$_invoke$arity$2 ? pred__19202.cljs$core$IFn$_invoke$arity$2(G__19205,G__19206) : pred__19202.call(null,G__19205,G__19206));
})())){
return (new schema.core.Predicate(G__19198,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19207 = cljs.core.constant$keyword$28;
var G__19208 = expr__19203;
return (pred__19202.cljs$core$IFn$_invoke$arity$2 ? pred__19202.cljs$core$IFn$_invoke$arity$2(G__19207,G__19208) : pred__19202.call(null,G__19207,G__19208));
})())){
return (new schema.core.Predicate(self__.p_QMARK_,G__19198,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19198),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$27,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$28,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19198){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__19198,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4404__auto__ = (function (){try{if(cljs.core.truth_((function (){var G__19210 = x;
return (self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19210) : self__.p_QMARK_.call(null,G__19210));
})())){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e19209){if((e19209 instanceof Object)){
var e = e19209;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e19209;

}
}})();
if(cljs.core.truth_(temp__4404__auto__)){
var reason = temp__4404__auto__;
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4404__auto__,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),self__.pred_name);
});})(reason,temp__4404__auto__,this$__$1))
,null)),reason));
} else {
return x;
}
});
;})(this$__$1))
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function map__GT_Predicate(G__19200){
return (new schema.core.Predicate(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(G__19200),cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(G__19200),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19200,cljs.core.constant$keyword$27,cljs.core.array_seq([cljs.core.constant$keyword$28], 0)),null));
});

/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){
return pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});
pred = function(p_QMARK_,pred_name){
switch(arguments.length){
case 1:
return pred__1.call(this,p_QMARK_);
case 2:
return pred__2.call(this,p_QMARK_,pred_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pred.cljs$core$IFn$_invoke$arity$1 = pred__1;
pred.cljs$core$IFn$_invoke$arity$2 = pred__2;
return pred;
})()
;
schema.core.protocol_name = (function protocol_name(protocol){
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
* @param {*} p
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19215,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19217 = (((k19215 instanceof cljs.core.Keyword))?k19215.fqn:null);
switch (G__19217) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19215,else__6496__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Protocol{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$30,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$30,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19214){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19218 = cljs.core.keyword_identical_QMARK_;
var expr__19219 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19221 = cljs.core.constant$keyword$30;
var G__19222 = expr__19219;
return (pred__19218.cljs$core$IFn$_invoke$arity$2 ? pred__19218.cljs$core$IFn$_invoke$arity$2(G__19221,G__19222) : pred__19218.call(null,G__19221,G__19222));
})())){
return (new schema.core.Protocol(G__19214,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19214),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$30,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19214){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__19214,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function __GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function map__GT_Protocol(G__19216){
return (new schema.core.Protocol(cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(G__19216),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19216,cljs.core.constant$keyword$30),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not(cljs.core.re_find(this$__$1,x))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),schema.core.explain(this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
,null)),null));
} else {
return x;

}
}
});
;})(this$__$1))
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
* Boolean true or false
*/
schema.core.Bool = Boolean;
/**
* Any number
*/
schema.core.Num = Number;
/**
* Any integral number
*/
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
/**
* A regular expression
*/
schema.core.Regex = RegExp;
/**
* The local representation of #inst ...
*/
schema.core.Inst = Date;
/**
* The local representation of #uuid ...
*/
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19225,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19227 = (((k19225 instanceof cljs.core.Keyword))?k19225.fqn:null);
switch (G__19227) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19225,else__6496__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Maybe{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$19,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19224){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19228 = cljs.core.keyword_identical_QMARK_;
var expr__19229 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19231 = cljs.core.constant$keyword$19;
var G__19232 = expr__19229;
return (pred__19228.cljs$core$IFn$_invoke$arity$2 ? pred__19228.cljs$core$IFn$_invoke$arity$2(G__19231,G__19232) : pred__19228.call(null,G__19231,G__19232));
})())){
return (new schema.core.Maybe(G__19224,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19224),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19224){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__19224,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
var G__19233 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__19233) : sub_walker.call(null,G__19233));
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function map__GT_Maybe(G__19226){
return (new schema.core.Maybe(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__19226),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19226,cljs.core.constant$keyword$19),null));
});

/**
* A value that must either be nil or satisfy schema
*/
schema.core.maybe = (function maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
* @param {*} schema
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19236,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19238 = (((k19236 instanceof cljs.core.Keyword))?k19236.fqn:null);
switch (G__19238) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19236,else__6496__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.NamedSchema{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$32,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19235){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19239 = cljs.core.keyword_identical_QMARK_;
var expr__19240 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19242 = cljs.core.constant$keyword$19;
var G__19243 = expr__19240;
return (pred__19239.cljs$core$IFn$_invoke$arity$2 ? pred__19239.cljs$core$IFn$_invoke$arity$2(G__19242,G__19243) : pred__19239.call(null,G__19242,G__19243));
})())){
return (new schema.core.NamedSchema(G__19235,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19244 = cljs.core.constant$keyword$32;
var G__19245 = expr__19240;
return (pred__19239.cljs$core$IFn$_invoke$arity$2 ? pred__19239.cljs$core$IFn$_invoke$arity$2(G__19244,G__19245) : pred__19239.call(null,G__19244,G__19245));
})())){
return (new schema.core.NamedSchema(self__.schema,G__19235,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19235),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19235){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__19235,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name(self__.name,(function (){var G__19246 = x;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__19246) : sub_walker.call(null,G__19246));
})());
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__19237){
return (new schema.core.NamedSchema(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__19237),cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(G__19237),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19237,cljs.core.constant$keyword$19,cljs.core.array_seq([cljs.core.constant$keyword$32], 0)),null));
});

/**
* A value that must satisfy schema, and has a name for documentation purposes.
*/
schema.core.named = (function named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19249,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19251 = (((k19249 instanceof cljs.core.Keyword))?k19249.fqn:null);
switch (G__19251) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19249,else__6496__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Either{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19248){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19252 = cljs.core.keyword_identical_QMARK_;
var expr__19253 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19255 = cljs.core.constant$keyword$33;
var G__19256 = expr__19253;
return (pred__19252.cljs$core$IFn$_invoke$arity$2 ? pred__19252.cljs$core$IFn$_invoke$arity$2(G__19255,G__19256) : pred__19252.call(null,G__19255,G__19256));
})())){
return (new schema.core.Either(G__19248,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19248),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19248){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__19248,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq(sub_walkers);
while(true){
if(cljs.core.not(sub_walkers__$1)){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first(sub_walkers__$1).call(null,x);
if(!(schema.utils.error_QMARK_(res))){
return res;
} else {
var G__19258 = cljs.core.next(sub_walkers__$1);
sub_walkers__$1 = G__19258;
continue;
}
}
break;
}
});
;})(sub_walkers,this$__$1))
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function __GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function map__GT_Either(G__19250){
return (new schema.core.Either(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__19250),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19250,cljs.core.constant$keyword$33),null));
});

/**
* A value that must satisfy at least one schema in schemas.
* @param {...*} var_args
*/
schema.core.either = (function() { 
var either__delegate = function (schemas){
return (new schema.core.Either(schemas,null,null,null));
};
var either = function (var_args){
var schemas = null;
if (arguments.length > 0) {
var G__19259__i = 0, G__19259__a = new Array(arguments.length -  0);
while (G__19259__i < G__19259__a.length) {G__19259__a[G__19259__i] = arguments[G__19259__i + 0]; ++G__19259__i;}
  schemas = new cljs.core.IndexedSeq(G__19259__a,0);
} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__19260){
var schemas = cljs.core.seq(arglist__19260);
return either__delegate(schemas);
});
either.cljs$core$IFn$_invoke$arity$variadic = either__delegate;
return either;
})()
;

/**
* @constructor
* @param {*} schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19262,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19264 = (((k19262 instanceof cljs.core.Keyword))?k19262.fqn:null);
switch (G__19264) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19262,else__6496__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Both{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$33,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19261){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19265 = cljs.core.keyword_identical_QMARK_;
var expr__19266 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19268 = cljs.core.constant$keyword$33;
var G__19269 = expr__19266;
return (pred__19265.cljs$core$IFn$_invoke$arity$2 ? pred__19265.cljs$core$IFn$_invoke$arity$2(G__19268,G__19269) : pred__19265.call(null,G__19268,G__19269));
})())){
return (new schema.core.Both(G__19261,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19261),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$33,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19261){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__19261,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(schema.utils.error_QMARK_(x__$1)){
return x__$1;
} else {
var G__19270 = x__$1;
return (sub_walker.cljs$core$IFn$_invoke$arity$1 ? sub_walker.cljs$core$IFn$_invoke$arity$1(G__19270) : sub_walker.call(null,G__19270));
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function __GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function map__GT_Both(G__19263){
return (new schema.core.Both(cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(G__19263),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19263,cljs.core.constant$keyword$33),null));
});

/**
* A value that must satisfy every schema in schemas.
* @param {...*} var_args
*/
schema.core.both = (function() { 
var both__delegate = function (schemas){
return (new schema.core.Both(schemas,null,null,null));
};
var both = function (var_args){
var schemas = null;
if (arguments.length > 0) {
var G__19272__i = 0, G__19272__a = new Array(arguments.length -  0);
while (G__19272__i < G__19272__a.length) {G__19272__a[G__19272__i] = arguments[G__19272__i + 0]; ++G__19272__i;}
  schemas = new cljs.core.IndexedSeq(G__19272__a,0);
} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__19273){
var schemas = cljs.core.seq(arglist__19273);
return both__delegate(schemas);
});
both.cljs$core$IFn$_invoke$arity$variadic = both__delegate;
return both;
})()
;

/**
* @constructor
* @param {*} preds_and_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19275,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19277 = (((k19275 instanceof cljs.core.Keyword))?k19275.fqn:null);
switch (G__19277) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19275,else__6496__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19274){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19278 = cljs.core.keyword_identical_QMARK_;
var expr__19279 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19281 = cljs.core.constant$keyword$34;
var G__19282 = expr__19279;
return (pred__19278.cljs$core$IFn$_invoke$arity$2 ? pred__19278.cljs$core$IFn$_invoke$arity$2(G__19281,G__19282) : pred__19278.call(null,G__19281,G__19282));
})())){
return (new schema.core.ConditionalSchema(G__19274,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19274),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$34,self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19274){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__19274,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__19283){
var vec__19284 = p__19283;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19284,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19284,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema__$1) : schema.core.subschema_walker.call(null,schema__$1))], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4404__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (preds_and_walkers,this$__$1){
return (function (p__19285){
var vec__19286 = p__19285;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19286,(0),null);
var G__19287 = x;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__19287) : pred.call(null,G__19287));
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4404__auto__)){
var vec__19288 = temp__4404__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(1),null);
var G__19289 = x;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__19289) : match.call(null,G__19289));
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (temp__4404__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4404__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__19290){
var vec__19291 = p__19290;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__19276){
return (new schema.core.ConditionalSchema(cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(G__19276),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19276,cljs.core.constant$keyword$34),null));
});

/**
* Define a conditional schema.  Takes args like cond,
* (conditional pred1 schema1 pred2 schema2 ...),
* and checks the first schema where pred is true on the value.
* Unlike cond, throws if the value does not match any condition.
* :else may be used as a final condition in the place of (constantly true).
* More efficient than either, since only one schema must be checked.
* @param {...*} var_args
*/
schema.core.conditional = (function() { 
var conditional__delegate = function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && (cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args; got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__6646__auto__ = (function iter__19303(s__19304){
return (new cljs.core.LazySeq(null,(function (){
var s__19304__$1 = s__19304;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19304__$1);
if(temp__4406__auto__){
var s__19304__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19304__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19304__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19306 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19305 = (0);
while(true){
if((i__19305 < size__6645__auto__)){
var vec__19311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19305);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19311,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19311,(1),null);
cljs.core.chunk_append(b__19306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null));

var G__19313 = (i__19305 + (1));
i__19305 = G__19313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19306),iter__19303(cljs.core.chunk_rest(s__19304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19306),null);
}
} else {
var vec__19312 = cljs.core.first(s__19304__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19312,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19312,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.constant$keyword$6))?cljs.core.constantly(true):pred),schema__$1], null),iter__19303(cljs.core.rest(s__19304__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),null,null,null));
};
var conditional = function (var_args){
var preds_and_schemas = null;
if (arguments.length > 0) {
var G__19314__i = 0, G__19314__a = new Array(arguments.length -  0);
while (G__19314__i < G__19314__a.length) {G__19314__a[G__19314__i] = arguments[G__19314__i + 0]; ++G__19314__i;}
  preds_and_schemas = new cljs.core.IndexedSeq(G__19314__a,0);
} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__19315){
var preds_and_schemas = cljs.core.seq(arglist__19315);
return conditional__delegate(preds_and_schemas);
});
conditional.cljs$core$IFn$_invoke$arity$variadic = conditional__delegate;
return conditional;
})()
;
/**
* if the predicate returns truthy, use the if-schema, otherwise use the else-schema
*/
schema.core.if$ = (function if$(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = cljs.core.constant$keyword$35;

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19317,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19319 = (((k19317 instanceof cljs.core.Keyword))?k19317.fqn:null);
switch (G__19319) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19317,else__6496__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.RequiredKey{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19316){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19320 = cljs.core.keyword_identical_QMARK_;
var expr__19321 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19323 = cljs.core.constant$keyword$36;
var G__19324 = expr__19321;
return (pred__19320.cljs$core$IFn$_invoke$arity$2 ? pred__19320.cljs$core$IFn$_invoke$arity$2(G__19323,G__19324) : pred__19320.call(null,G__19323,G__19324));
})())){
return (new schema.core.RequiredKey(G__19316,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19316),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19316){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__19316,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__19318){
return (new schema.core.RequiredKey(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__19318),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19318,cljs.core.constant$keyword$36),null));
});

/**
* A required key in a map
*/
schema.core.required_key = (function required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
* @param {*} k
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19327,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19329 = (((k19327 instanceof cljs.core.Keyword))?k19327.fqn:null);
switch (G__19329) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19327,else__6496__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.OptionalKey{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$36,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19326){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19330 = cljs.core.keyword_identical_QMARK_;
var expr__19331 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19333 = cljs.core.constant$keyword$36;
var G__19334 = expr__19331;
return (pred__19330.cljs$core$IFn$_invoke$arity$2 ? pred__19330.cljs$core$IFn$_invoke$arity$2(G__19333,G__19334) : pred__19330.call(null,G__19333,G__19334));
})())){
return (new schema.core.OptionalKey(G__19326,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19326),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$36,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19326){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__19326,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__19328){
return (new schema.core.OptionalKey(cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(G__19328),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19328,cljs.core.constant$keyword$36),null));
});

/**
* An optional key in a map
*/
schema.core.optional_key = (function optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(schema.core.optional_key_QMARK_(ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){
return (schema.core.required_key_QMARK_(ks)) || (schema.core.optional_key_QMARK_(ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){
if(schema.core.specific_key_QMARK_(kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),((schema.core.required_key_QMARK_(kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_(kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain(kspec);
}
});

/**
* @constructor
* @param {*} kspec
* @param {*} val_schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.MapEntry = (function (kspec,val_schema,__meta,__extmap,__hash){
this.kspec = kspec;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19337,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19339 = (((k19337 instanceof cljs.core.Keyword))?k19337.fqn:null);
switch (G__19339) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19337,else__6496__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.MapEntry{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$37,null,cljs.core.constant$keyword$38,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19336){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19340 = cljs.core.keyword_identical_QMARK_;
var expr__19341 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19343 = cljs.core.constant$keyword$37;
var G__19344 = expr__19341;
return (pred__19340.cljs$core$IFn$_invoke$arity$2 ? pred__19340.cljs$core$IFn$_invoke$arity$2(G__19343,G__19344) : pred__19340.call(null,G__19343,G__19344));
})())){
return (new schema.core.MapEntry(G__19336,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19345 = cljs.core.constant$keyword$38;
var G__19346 = expr__19341;
return (pred__19340.cljs$core$IFn$_invoke$arity$2 ? pred__19340.cljs$core$IFn$_invoke$arity$2(G__19345,G__19346) : pred__19340.call(null,G__19345,G__19346));
})())){
return (new schema.core.MapEntry(self__.kspec,G__19336,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19336),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19336){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__19336,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.val_schema) : schema.core.subschema_walker.call(null,self__.val_schema));
if(schema.core.specific_key_QMARK_(self__.kspec)){
var optional_QMARK_ = schema.core.optional_key_QMARK_(self__.kspec);
var k = schema.core.explicit_schema_key(self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(optional_QMARK_){
return null;
} else {
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__19347 = x;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19347,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19347,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))], 0)))].join('')));
}

var vres = (function (){var G__19348 = xv;
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__19348) : val_walker.call(null,G__19348));
})();
var temp__4404__auto__ = schema.utils.error_val(vres);
if(cljs.core.truth_(temp__4404__auto__)){
var ve = temp__4404__auto__;
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.kspec) : schema.core.subschema_walker.call(null,self__.kspec));
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x)))){
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = (function (){var G__19349 = cljs.core.key(x);
return (key_walker.cljs$core$IFn$_invoke$arity$1 ? key_walker.cljs$core$IFn$_invoke$arity$1(G__19349) : key_walker.call(null,G__19349));
})();
var out_ke = schema.utils.error_val(out_k);
var out_v = (function (){var G__19350 = cljs.core.val(x);
return (val_walker.cljs$core$IFn$_invoke$arity$1 ? val_walker.cljs$core$IFn$_invoke$arity$1(G__19350) : val_walker.call(null,G__19350));
})();
var out_ve = schema.utils.error_val(out_v);
if(cljs.core.truth_((function (){var or__5890__auto__ = out_ke;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5890__auto__ = out_ke;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.key(x);
}
})(),(function (){var or__5890__auto__ = out_ve;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null);
}
})()], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_k,out_v], null);
}
}
});
;})(key_walker,val_walker,this$__$1))
}
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain_kspec(self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__19338){
return (new schema.core.MapEntry(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__19338),cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__19338),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19338,cljs.core.constant$keyword$37,cljs.core.array_seq([cljs.core.constant$keyword$38], 0)),null));
});

schema.core.map_entry = (function map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.preserve_map_type = (function preserve_map_type(original,walker_result){
if((schema.utils.record_QMARK_(original)) && (!(schema.utils.error_QMARK_(walker_result)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema(map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema))) : schema.core.subschema_walker.call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(map_schema,extra_keys_schema)))):null);
var explicit_schema = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6646__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__19377(s__19378){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__19378__$1 = s__19378;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19378__$1);
if(temp__4406__auto__){
var s__19378__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19378__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19378__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19380 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19379 = (0);
while(true){
if((i__19379 < size__6645__auto__)){
var vec__19385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19379);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19385,(1),null);
cljs.core.chunk_append(b__19380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null));

var G__19401 = (i__19379 + (1));
i__19379 = G__19401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19380),iter__19377(cljs.core.chunk_rest(s__19378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19380),null);
}
} else {
var vec__19386 = cljs.core.first(s__19378__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19386,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19386,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.map_entry(k,v)) : schema.core.subschema_walker.call(null,schema.core.map_entry(k,v)))], null),iter__19377(cljs.core.rest(s__19378__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema,extra_walker,explicit_schema))
,null,null));
});})(extra_keys_schema,extra_walker,explicit_schema))
;
return iter__6646__auto__(explicit_schema);
})());
var err_conj = schema.utils.result_builder(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(explicit_schema),cljs.core.count(explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__19352_SHARP_){
return (cljs.core.count(p1__19352_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(explicit_schema))))))], 0))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_(x))){
return schema.utils.error(schema.utils.__GT_ValidationError(map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type(x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq(explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not(explicit_walkers__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
var G__19387 = out__$1;
var G__19388 = (function (){var G__19389 = e;
return (extra_walker.cljs$core$IFn$_invoke$arity$1 ? extra_walker.cljs$core$IFn$_invoke$arity$1(G__19389) : extra_walker.call(null,G__19389));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19387,G__19388) : err_conj.call(null,G__19387,G__19388));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__19390){
var vec__19391 = p__19390;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19391,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19391,(1),null);
var G__19392 = out__$1;
var G__19393 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19392,G__19393) : err_conj.call(null,G__19392,G__19393));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__19394){
var vec__19395 = p__19394;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19395,(1),null);
var G__19396 = k;
return (ok_key.cljs$core$IFn$_invoke$arity$1 ? ok_key.cljs$core$IFn$_invoke$arity$1(G__19396) : ok_key.call(null,G__19396));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__19397 = cljs.core.first(explicit_walkers__$1);
var wk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19397,(0),null);
var wv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19397,(1),null);
var G__19402 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ok_key,wk);
var G__19403 = cljs.core.next(explicit_walkers__$1);
var G__19404 = (function (){var G__19398 = out;
var G__19399 = (function (){var G__19400 = (function (){var or__5890__auto__ = cljs.core.find(x,wk);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})();
return (wv.cljs$core$IFn$_invoke$arity$1 ? wv.cljs$core$IFn$_invoke$arity$1(G__19400) : wv.call(null,G__19400));
})();
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19398,G__19399) : err_conj.call(null,G__19398,G__19399));
})();
ok_key = G__19402;
explicit_walkers__$1 = G__19403;
out = G__19404;
continue;
}
break;
}
})());
}
});
;})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
});
schema.core.map_explain = (function map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__6646__auto__ = (function iter__19415(s__19416){
return (new cljs.core.LazySeq(null,(function (){
var s__19416__$1 = s__19416;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19416__$1);
if(temp__4406__auto__){
var s__19416__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19416__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19416__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19418 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19417 = (0);
while(true){
if((i__19417 < size__6645__auto__)){
var vec__19423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19417);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19423,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19423,(1),null);
cljs.core.chunk_append(b__19418,cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))));

var G__19425 = (i__19417 + (1));
i__19417 = G__19425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19418),iter__19415(cljs.core.chunk_rest(s__19416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19418),null);
}
} else {
var vec__19424 = cljs.core.first(s__19416__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19424,(1),null);
return cljs.core.cons(cljs.core.vec(cljs.core.next(schema.core.map_entry(k,v).schema$core$Schema$explain$arity$1(null))),iter__19415(cljs.core.rest(s__19416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6646__auto__(this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

var sub_walker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(cljs.core.first(this$__$1)) : schema.core.subschema_walker.call(null,cljs.core.first(this$__$1)));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__5890__auto__ = ((cljs.core.set_QMARK_(x))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var vec__19426 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sub_walker,x));
var good = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426,(0),null);
var bad = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426,(1),null);
if(cljs.core.seq(bad)){
return schema.utils.error(cljs.core.set(bad));
} else {
return cljs.core.set(good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});

/**
* @constructor
* @param {*} schema
* @param {*} optional_QMARK_
* @param {*} name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19428,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19430 = (((k19428 instanceof cljs.core.Keyword))?k19428.fqn:null);
switch (G__19430) {
case "name":
return self__.name;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19428,else__6496__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.One{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$32,null,cljs.core.constant$keyword$39,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19427){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19431 = cljs.core.keyword_identical_QMARK_;
var expr__19432 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19434 = cljs.core.constant$keyword$19;
var G__19435 = expr__19432;
return (pred__19431.cljs$core$IFn$_invoke$arity$2 ? pred__19431.cljs$core$IFn$_invoke$arity$2(G__19434,G__19435) : pred__19431.call(null,G__19434,G__19435));
})())){
return (new schema.core.One(G__19427,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19436 = cljs.core.constant$keyword$39;
var G__19437 = expr__19432;
return (pred__19431.cljs$core$IFn$_invoke$arity$2 ? pred__19431.cljs$core$IFn$_invoke$arity$2(G__19436,G__19437) : pred__19431.call(null,G__19436,G__19437));
})())){
return (new schema.core.One(self__.schema,G__19427,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19438 = cljs.core.constant$keyword$32;
var G__19439 = expr__19432;
return (pred__19431.cljs$core$IFn$_invoke$arity$2 ? pred__19431.cljs$core$IFn$_invoke$arity$2(G__19438,G__19439) : pred__19431.call(null,G__19438,G__19439));
})())){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__19427,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19427),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$32,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19427){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__19427,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/One");
});

schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function map__GT_One(G__19429){
return (new schema.core.One(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__19429),cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__19429),cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(G__19429),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19429,cljs.core.constant$keyword$19,cljs.core.array_seq([cljs.core.constant$keyword$39,cljs.core.constant$keyword$32], 0)),null));
});

/**
* A single required element of a sequence (not repeated, the implicit default)
*/
schema.core.one = (function one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
* A single optional element of a sequence (not repeated, the implicit default)
*/
schema.core.optional = (function optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function parse_sequence_schema(s){

var vec__19446 = cljs.core.split_with((function (p1__19441_SHARP_){
return ((p1__19441_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(p1__19441_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19446,(1),null);
var vec__19447 = cljs.core.split_with(((function (vec__19446,required,more){
return (function (p1__19442_SHARP_){
var and__5878__auto__ = (p1__19442_SHARP_ instanceof schema.core.One);
if(and__5878__auto__){
return cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(p1__19442_SHARP_);
} else {
return and__5878__auto__;
}
});})(vec__19446,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19447,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19447,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__19446,required,more,vec__19447,optional,more__$1){
return (function (p1__19443_SHARP_){
return !((p1__19443_SHARP_ instanceof schema.core.One));
});})(vec__19446,required,more,vec__19447,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Sequence schema %s does not match [one* optional* rest-schema?]",cljs.core.array_seq([s], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__19448 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19448,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19448,(1),null);
var single_walkers = cljs.core.vec((function (){var iter__6646__auto__ = ((function (vec__19448,singles,multi,this$__$1){
return (function iter__19449(s__19450){
return (new cljs.core.LazySeq(null,((function (vec__19448,singles,multi,this$__$1){
return (function (){
var s__19450__$1 = s__19450;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19450__$1);
if(temp__4406__auto__){
var s__19450__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19450__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19450__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19452 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19451 = (0);
while(true){
if((i__19451 < size__6645__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19451);
cljs.core.chunk_append(b__19452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null));

var G__19480 = (i__19451 + (1));
i__19451 = G__19480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19452),iter__19449(cljs.core.chunk_rest(s__19450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19452),null);
}
} else {
var s = cljs.core.first(s__19450__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(s.schema) : schema.core.subschema_walker.call(null,s.schema))], null),iter__19449(cljs.core.rest(s__19450__$2)));
}
} else {
return null;
}
break;
}
});})(vec__19448,singles,multi,this$__$1))
,null,null));
});})(vec__19448,singles,multi,this$__$1))
;
return iter__6646__auto__(singles);
})());
var multi_walker = (cljs.core.truth_(multi)?(schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(multi) : schema.core.subschema_walker.call(null,multi)):null);
var err_conj = schema.utils.result_builder(((function (vec__19448,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null));
});})(vec__19448,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__5890__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_(x)))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4404__auto__ = cljs.core.first(single_walkers__$1);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__19455 = temp__4404__auto__;
var first_single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19455,(0),null);
var single_walker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19455,(1),null);
if(cljs.core.empty_QMARK_(x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
var G__19456 = out;
var G__19457 = schema.utils.error(schema.utils.__GT_ValidationError(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__19456,vec__19455,first_single,single_walker,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__6646__auto__ = ((function (single_walkers__$1,x__$1,out,G__19456,vec__19455,first_single,single_walker,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__19458(s__19459){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,G__19456,vec__19455,first_single,single_walker,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__19459__$1 = s__19459;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19459__$1);
if(temp__4406__auto__){
var s__19459__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19459__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19459__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19461 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19460 = (0);
while(true){
if((i__19460 < size__6645__auto__)){
var vec__19466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19460);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19466,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
cljs.core.chunk_append(b__19461,single.name);

var G__19481 = (i__19460 + (1));
i__19460 = G__19481;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19461),iter__19458(cljs.core.chunk_rest(s__19459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19461),null);
}
} else {
var vec__19467 = cljs.core.first(s__19459__$2);
var single = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(0),null);
if(cljs.core.not(single.optional_QMARK_)){
return cljs.core.cons(single.name,iter__19458(cljs.core.rest(s__19459__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,G__19456,vec__19455,first_single,single_walker,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,G__19456,vec__19455,first_single,single_walker,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__6646__auto__(single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,G__19456,vec__19455,first_single,single_walker,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19456,G__19457) : err_conj.call(null,G__19456,G__19457));
}
} else {
var G__19482 = cljs.core.next(single_walkers__$1);
var G__19483 = cljs.core.rest(x__$1);
var G__19484 = (function (){var G__19468 = out;
var G__19469 = schema.utils.wrap_error_name(first_single.name,(function (){var G__19470 = cljs.core.first(x__$1);
return (single_walker.cljs$core$IFn$_invoke$arity$1 ? single_walker.cljs$core$IFn$_invoke$arity$1(G__19470) : single_walker.call(null,G__19470));
})());
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19468,G__19469) : err_conj.call(null,G__19468,G__19469));
})();
single_walkers__$1 = G__19482;
x__$1 = G__19483;
out = G__19484;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(err_conj,out,cljs.core.map.cljs$core$IFn$_invoke$arity$2(multi_walker,x__$1));
} else {
if(cljs.core.seq(x__$1)){
var G__19471 = out;
var G__19472 = schema.utils.error(schema.utils.__GT_ValidationError(null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,G__19471,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,G__19471,temp__4404__auto__,or__5890__auto__,vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null));
return (err_conj.cljs$core$IFn$_invoke$arity$2 ? err_conj.cljs$core$IFn$_invoke$arity$2(G__19471,G__19472) : err_conj.call(null,G__19471,G__19472));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__19448,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__19473 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19473,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19473,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__6646__auto__ = ((function (vec__19473,singles,multi,this$__$1){
return (function iter__19474(s__19475){
return (new cljs.core.LazySeq(null,((function (vec__19473,singles,multi,this$__$1){
return (function (){
var s__19475__$1 = s__19475;
while(true){
var temp__4406__auto__ = cljs.core.seq(s__19475__$1);
if(temp__4406__auto__){
var s__19475__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19475__$2)){
var c__6644__auto__ = cljs.core.chunk_first(s__19475__$2);
var size__6645__auto__ = cljs.core.count(c__6644__auto__);
var b__19477 = cljs.core.chunk_buffer(size__6645__auto__);
if((function (){var i__19476 = (0);
while(true){
if((i__19476 < size__6645__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6644__auto__,i__19476);
cljs.core.chunk_append(b__19477,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__19485 = (i__19476 + (1));
i__19476 = G__19485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19477),iter__19474(cljs.core.chunk_rest(s__19475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19477),null);
}
} else {
var s = cljs.core.first(s__19475__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__19474(cljs.core.rest(s__19475__$2)));
}
} else {
return null;
}
break;
}
});})(vec__19473,singles,multi,this$__$1))
,null,null));
});})(vec__19473,singles,multi,this$__$1))
;
return iter__6646__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
* @param {*} klass
* @param {*} schema
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19487,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19489 = (((k19487 instanceof cljs.core.Keyword))?k19487.fqn:null);
switch (G__19489) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19487,else__6496__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.Record{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$40,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19486){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19490 = cljs.core.keyword_identical_QMARK_;
var expr__19491 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19493 = cljs.core.constant$keyword$40;
var G__19494 = expr__19491;
return (pred__19490.cljs$core$IFn$_invoke$arity$2 ? pred__19490.cljs$core$IFn$_invoke$arity$2(G__19493,G__19494) : pred__19490.call(null,G__19493,G__19494));
})())){
return (new schema.core.Record(G__19486,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19495 = cljs.core.constant$keyword$19;
var G__19496 = expr__19491;
return (pred__19490.cljs$core$IFn$_invoke$arity$2 ? pred__19490.cljs$core$IFn$_invoke$arity$2(G__19495,G__19496) : pred__19490.call(null,G__19495,G__19496));
})())){
return (new schema.core.Record(self__.klass,G__19486,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19486),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$40,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19486){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__19486,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(self__.schema) : schema.core.subschema_walker.call(null,self__.schema));
var pred_checker = (function (){var temp__4406__auto__ = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4406__auto__)){
var evf = temp__4406__auto__;
return (schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1 ? schema.core.subschema_walker.cljs$core$IFn$_invoke$arity$1(schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)) : schema.core.subschema_walker.call(null,schema.core.pred.cljs$core$IFn$_invoke$arity$1(evf)));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__5890__auto__ = (((r instanceof self__.klass))?null:schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var res = (function (){var G__19497 = r;
return (map_checker.cljs$core$IFn$_invoke$arity$1 ? map_checker.cljs$core$IFn$_invoke$arity$1(G__19497) : map_checker.call(null,G__19497));
})();
if(schema.utils.error_QMARK_(res)){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?(function (){var G__19498 = r;
return (pred_checker.cljs$core$IFn$_invoke$arity$1 ? pred_checker.cljs$core$IFn$_invoke$arity$1(G__19498) : pred_checker.call(null,G__19498));
})():null);
if(schema.utils.error_QMARK_(pred_res)){
return pred_res;
} else {
return res;
}
}
}
});
;})(map_checker,pred_checker,this$__$1))
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function map__GT_Record(G__19488){
return (new schema.core.Record(cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(G__19488),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__19488),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19488,cljs.core.constant$keyword$40,cljs.core.array_seq([cljs.core.constant$keyword$19], 0)),null));
});

/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){
var vec__19503 = cljs.core.split_with((function (p1__19500_SHARP_){
return (p1__19500_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19503,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19503,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19503,required,more){
return (function (p1__19501_SHARP_){
return schema.core.explain(p1__19501_SHARP_.schema);
});})(vec__19503,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
* @param {*} output_schema
* @param {*} input_schemas
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6493__auto__,k__6494__auto__){
var self__ = this;
var this__6493__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6493__auto____$1,k__6494__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6495__auto__,k19505,else__6496__auto__){
var self__ = this;
var this__6495__auto____$1 = this;
var G__19507 = (((k19505 instanceof cljs.core.Keyword))?k19505.fqn:null);
switch (G__19507) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19505,else__6496__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6507__auto__,writer__6508__auto__,opts__6509__auto__){
var self__ = this;
var this__6507__auto____$1 = this;
var pr_pair__6510__auto__ = ((function (this__6507__auto____$1){
return (function (keyval__6511__auto__){
return cljs.core.pr_sequential_writer(writer__6508__auto__,cljs.core.pr_writer,""," ","",opts__6509__auto__,keyval__6511__auto__);
});})(this__6507__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6508__auto__,pr_pair__6510__auto__,"#schema.core.FnSchema{",", ","}",opts__6509__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6491__auto__){
var self__ = this;
var this__6491__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6487__auto__){
var self__ = this;
var this__6487__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6497__auto__){
var self__ = this;
var this__6497__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6488__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6489__auto__,other__6490__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6502__auto__,k__6503__auto__){
var self__ = this;
var this__6502__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$43,null], null), null),k__6503__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6502__auto____$1),self__.__meta),k__6503__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6503__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6500__auto__,k__6501__auto__,G__19504){
var self__ = this;
var this__6500__auto____$1 = this;
var pred__19508 = cljs.core.keyword_identical_QMARK_;
var expr__19509 = k__6501__auto__;
if(cljs.core.truth_((function (){var G__19511 = cljs.core.constant$keyword$42;
var G__19512 = expr__19509;
return (pred__19508.cljs$core$IFn$_invoke$arity$2 ? pred__19508.cljs$core$IFn$_invoke$arity$2(G__19511,G__19512) : pred__19508.call(null,G__19511,G__19512));
})())){
return (new schema.core.FnSchema(G__19504,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19513 = cljs.core.constant$keyword$43;
var G__19514 = expr__19509;
return (pred__19508.cljs$core$IFn$_invoke$arity$2 ? pred__19508.cljs$core$IFn$_invoke$arity$2(G__19513,G__19514) : pred__19508.call(null,G__19513,G__19514));
})())){
return (new schema.core.FnSchema(self__.output_schema,G__19504,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6501__auto__,G__19504),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6505__auto__){
var self__ = this;
var this__6505__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6492__auto__,G__19504){
var self__ = this;
var this__6492__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__19504,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6498__auto__,entry__6499__auto__){
var self__ = this;
var this__6498__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6499__auto__)){
return cljs.core._assoc(this__6498__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6499__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6498__auto____$1,entry__6499__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_(x)){
return x;
} else {
return schema.utils.error(schema.utils.__GT_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__6527__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__6527__auto__,writer__6528__auto__){
return cljs.core._write(writer__6528__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__19506){
return (new schema.core.FnSchema(cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__19506),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__19506),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19506,cljs.core.constant$keyword$42,cljs.core.array_seq([cljs.core.constant$keyword$43], 0)),null));
});

schema.core.arity = (function arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
* A function outputting a value in output schema, whose argument vector must match one of
* input-schemas, each of which should be a sequence schema.
* Currently function schemas are purely descriptive; they validate against any function,
* regardless of actual input and output types.
*/
schema.core.make_fn_schema = (function make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){

return cljs.core.with_meta(schema__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){

return cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
* Get the current global schema validation setting.
*/
schema.core.fn_validation_QMARK_ = (function fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
* Globally turn on schema validation for all s/fn and s/defn instances.
*/
schema.core.set_fn_validation_BANG_ = (function set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
* Attach the schema to fn f at runtime, extractable by fn-schema.
*/
schema.core.schematize_fn = (function schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.constant$keyword$19,schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__5890__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var m__12768__auto__ = cljs.core.meta(f);
var k__12769__auto__ = cljs.core.constant$keyword$19;
var temp__4404__auto__ = cljs.core.find(m__12768__auto__,k__12769__auto__);
if(cljs.core.truth_(temp__4404__auto__)){
var pair__12770__auto__ = temp__4404__auto__;
return cljs.core.val(pair__12770__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__12769__auto__,m__12768__auto__], 0))));
}
}
});
