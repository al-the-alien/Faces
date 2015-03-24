// Compiled by ClojureScript 0.0-2816 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('clojure.string');

schema.core.Schema = (function (){var obj26697 = {};
return obj26697;
})();

schema.core.walker = (function walker(this$){
if((function (){var and__14432__auto__ = this$;
if(and__14432__auto__){
return this$.schema$core$Schema$walker$arity$1;
} else {
return and__14432__auto__;
}
})()){
return this$.schema$core$Schema$walker$arity$1(this$);
} else {
var x__15088__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14444__auto__ = (schema.core.walker[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (schema.core.walker["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Schema.walker",this$);
}
}
})().call(null,this$);
}
});

schema.core.explain = (function explain(this$){
if((function (){var and__14432__auto__ = this$;
if(and__14432__auto__){
return this$.schema$core$Schema$explain$arity$1;
} else {
return and__14432__auto__;
}
})()){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__15088__auto__ = (((this$ == null))?null:this$);
return (function (){var or__14444__auto__ = (schema.core.explain[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (schema.core.explain["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
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
var subschema_walker26699 = schema.core.subschema_walker;
schema.core.subschema_walker = sub_walker;

try{return schema.core.subschema_walker.call(null,schema__$1);
}finally {schema.core.subschema_walker = subschema_walker26699;
}});
/**
* Compile an efficient checker for schema, which returns nil for valid values and
* error descriptions otherwise.
*/
schema.core.checker = (function checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.core.start_walker.call(null,schema.utils.memoize_id.call(null,schema.core.walker),schema__$1));
});
/**
* Return nil if x matches schema; otherwise, returns a value that looks like the
* 'bad' parts of x with ValidationErrors at the leaves describing the failures.
*/
schema.core.check = (function check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
* Throw an exception if value does not satisfy schema; otherwise, return value.
*/
schema.core.validate = (function validate(schema__$1,value){
var temp__4406__auto___26700 = schema.core.check.call(null,schema__$1,value);
if(cljs.core.truth_(temp__4406__auto___26700)){
var error_26701 = temp__4406__auto___26700;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_26701)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error_26701,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}

return value;
});
(schema.core.Schema["function"] = true);

(schema.core.walker["function"] = (function (this$){
var class_walker = (function (){var temp__4404__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4404__auto__)){
var more_schema = temp__4404__auto__;
return schema.core.subschema_walker.call(null,more_schema);
} else {
return cljs.core.identity;
}
})();
return ((function (class_walker){
return (function (x){
var or__14444__auto__ = ((((x == null)) || (cljs.core.not.call(null,(function (){var or__14444__auto__ = (this$ === x.constructor);
if(or__14444__auto__){
return or__14444__auto__;
} else {
return x instanceof this$;
}
})())))?schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$,x,(new cljs.core.Delay(((function (class_walker){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),this$),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(class_walker))
,null)),null)):null);
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return class_walker.call(null,x);
}
});
;})(class_walker))
}));

(schema.core.explain["function"] = (function (this$){
var temp__4404__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4404__auto__)){
var more_schema = temp__4404__auto__;
return schema.core.explain.call(null,more_schema);
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
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26703,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26705 = (((k26703 instanceof cljs.core.Keyword))?k26703.fqn:null);
switch (G__26705) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26703,else__15050__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.AnythingSchema{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26702){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26706 = cljs.core.keyword_identical_QMARK_;
var expr__26707 = k__15055__auto__;
if(cljs.core.truth_(pred__26706.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__26707))){
return (new schema.core.AnythingSchema(G__26702,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26702),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26702){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__26702,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
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

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function __GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function map__GT_AnythingSchema(G__26704){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__26704),null,cljs.core.dissoc.call(null,G__26704,new cljs.core.Keyword(null,"_","_",1453416199)),null));
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
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26711,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26713 = (((k26711 instanceof cljs.core.Keyword))?k26711.fqn:null);
switch (G__26713) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26711,else__15050__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.EqSchema{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26710){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26714 = cljs.core.keyword_identical_QMARK_;
var expr__26715 = k__15055__auto__;
if(cljs.core.truth_(pred__26714.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__26715))){
return (new schema.core.EqSchema(G__26710,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26710),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26710){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__26710,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core._EQ_.call(null,self__.v,x)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function __GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function map__GT_EqSchema(G__26712){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__26712),null,cljs.core.dissoc.call(null,G__26712,new cljs.core.Keyword(null,"v","v",21465059)),null));
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
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26719,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26721 = (((k26719 instanceof cljs.core.Keyword))?k26719.fqn:null);
switch (G__26721) {
case "parent":
return self__.parent;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26719,else__15050__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Isa{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26718){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26722 = cljs.core.keyword_identical_QMARK_;
var expr__26723 = k__15055__auto__;
if(cljs.core.truth_(pred__26722.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__26723))){
return (new schema.core.Isa(G__26718,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26722.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__26723))){
return (new schema.core.Isa(self__.h,G__26718,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26718),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26718){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__26718,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (child){
if(cljs.core.truth_((function (){var or__14444__auto__ = (function (){var and__14432__auto__ = self__.h;
if(cljs.core.truth_(and__14432__auto__)){
return cljs.core.isa_QMARK_.call(null,self__.h,child,self__.parent);
} else {
return and__14432__auto__;
}
})();
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.isa_QMARK_.call(null,child,self__.parent);
}
})())){
return child;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,child,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),child),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function __GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function map__GT_Isa(G__26720){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__26720),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__26720),null,cljs.core.dissoc.call(null,G__26720,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
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
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26727,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26729 = (((k26727 instanceof cljs.core.Keyword))?k26727.fqn:null);
switch (G__26729) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26727,else__15050__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.EnumSchema{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26726){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26730 = cljs.core.keyword_identical_QMARK_;
var expr__26731 = k__15055__auto__;
if(cljs.core.truth_(pred__26730.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__26731))){
return (new schema.core.EnumSchema(G__26726,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26726),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26726){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__26726,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.contains_QMARK_.call(null,self__.vs,x)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.vs);
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function __GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function map__GT_EnumSchema(G__26728){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__26728),null,cljs.core.dissoc.call(null,G__26728,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
* A value that must be = to some element of vs.
* @param {...*} var_args
*/
schema.core.enum$ = (function() { 
var enum$__delegate = function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
};
var enum$ = function (var_args){
var vs = null;
if (arguments.length > 0) {
var G__26734__i = 0, G__26734__a = new Array(arguments.length -  0);
while (G__26734__i < G__26734__a.length) {G__26734__a[G__26734__i] = arguments[G__26734__i + 0]; ++G__26734__i;}
  vs = new cljs.core.IndexedSeq(G__26734__a,0);
} 
return enum$__delegate.call(this,vs);};
enum$.cljs$lang$maxFixedArity = 0;
enum$.cljs$lang$applyTo = (function (arglist__26735){
var vs = cljs.core.seq(arglist__26735);
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
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26737,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26739 = (((k26737 instanceof cljs.core.Keyword))?k26737.fqn:null);
switch (G__26739) {
case "pred-name":
return self__.pred_name;

break;
case "p?":
return self__.p_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26737,else__15050__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Predicate{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26736){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26740 = cljs.core.keyword_identical_QMARK_;
var expr__26741 = k__15055__auto__;
if(cljs.core.truth_(pred__26740.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__26741))){
return (new schema.core.Predicate(G__26736,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26740.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__26741))){
return (new schema.core.Predicate(self__.p_QMARK_,G__26736,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26736),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26736){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__26736,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var temp__4404__auto__ = (function (){try{if(cljs.core.truth_(self__.p_QMARK_.call(null,x))){
return null;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
}catch (e26743){if((e26743 instanceof Object)){
var e = e26743;
return new cljs.core.Symbol(null,"throws?","throws?",789734533,null);
} else {
throw e26743;

}
}})();
if(cljs.core.truth_(temp__4404__auto__)){
var reason = temp__4404__auto__;
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (reason,temp__4404__auto__,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),self__.pred_name);
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
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function __GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function map__GT_Predicate(G__26738){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__26738),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__26738),null,cljs.core.dissoc.call(null,G__26738,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
* A value for which p? returns true (and does not throw).
* Optional pred-name can be passed for nicer validation errors.
*/
schema.core.pred = (function() {
var pred = null;
var pred__1 = (function (p_QMARK_){
return pred.call(null,p_QMARK_,p_QMARK_);
});
var pred__2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
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
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
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
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26746,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26748 = (((k26746 instanceof cljs.core.Keyword))?k26746.fqn:null);
switch (G__26748) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26746,else__15050__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Protocol{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26745){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26749 = cljs.core.keyword_identical_QMARK_;
var expr__26750 = k__15055__auto__;
if(cljs.core.truth_(pred__26749.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__26750))){
return (new schema.core.Protocol(G__26745,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26745),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26745){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__26745,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,x))){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function __GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function map__GT_Protocol(G__26747){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__26747),null,cljs.core.dissoc.call(null,G__26747,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(!(typeof x === 'string')){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
,null)),null));
} else {
if(cljs.core.not.call(null,cljs.core.re_find.call(null,this$__$1,x))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
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
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
* Satisfied only by String.
* Is (pred string?) and not js/String in cljs because of keywords.
*/
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
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
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null));
/**
* A keyword
*/
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null));
/**
* A symbol
*/
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null));
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
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26754,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26756 = (((k26754 instanceof cljs.core.Keyword))?k26754.fqn:null);
switch (G__26756) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26754,else__15050__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Maybe{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26753){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26757 = cljs.core.keyword_identical_QMARK_;
var expr__26758 = k__15055__auto__;
if(cljs.core.truth_(pred__26757.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__26758))){
return (new schema.core.Maybe(G__26753,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26753),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26753){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__26753,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = schema.core.subschema_walker.call(null,self__.schema);
return ((function (sub_walker,this$__$1){
return (function (x){
if((x == null)){
return null;
} else {
return sub_walker.call(null,x);
}
});
;})(sub_walker,this$__$1))
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function __GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function map__GT_Maybe(G__26755){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__26755),null,cljs.core.dissoc.call(null,G__26755,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
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
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26762,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26764 = (((k26762 instanceof cljs.core.Keyword))?k26762.fqn:null);
switch (G__26764) {
case "name":
return self__.name;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26762,else__15050__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.NamedSchema{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26761){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26765 = cljs.core.keyword_identical_QMARK_;
var expr__26766 = k__15055__auto__;
if(cljs.core.truth_(pred__26765.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__26766))){
return (new schema.core.NamedSchema(G__26761,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26765.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__26766))){
return (new schema.core.NamedSchema(self__.schema,G__26761,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26761),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26761){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__26761,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walker = schema.core.subschema_walker.call(null,self__.schema);
return ((function (sub_walker,this$__$1){
return (function (x){
return schema.utils.wrap_error_name.call(null,self__.name,sub_walker.call(null,x));
});
;})(sub_walker,this$__$1))
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function __GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function map__GT_NamedSchema(G__26763){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__26763),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__26763),null,cljs.core.dissoc.call(null,G__26763,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
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
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26770,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26772 = (((k26770 instanceof cljs.core.Keyword))?k26770.fqn:null);
switch (G__26772) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26770,else__15050__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Either{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26769){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26773 = cljs.core.keyword_identical_QMARK_;
var expr__26774 = k__15055__auto__;
if(cljs.core.truth_(pred__26773.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__26774))){
return (new schema.core.Either(G__26769,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26769),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26769){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__26769,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
var sub_walkers__$1 = cljs.core.seq.call(null,sub_walkers);
while(true){
if(cljs.core.not.call(null,sub_walkers__$1)){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (sub_walkers__$1,sub_walkers,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"check","check",-1428126865,null))),new cljs.core.Symbol(null,"some","some",-310548046,null));
});})(sub_walkers__$1,sub_walkers,this$__$1))
,null)),null));
} else {
var res = cljs.core.first.call(null,sub_walkers__$1).call(null,x);
if(!(schema.utils.error_QMARK_.call(null,res))){
return res;
} else {
var G__26777 = cljs.core.next.call(null,sub_walkers__$1);
sub_walkers__$1 = G__26777;
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
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function __GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function map__GT_Either(G__26771){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__26771),null,cljs.core.dissoc.call(null,G__26771,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
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
var G__26778__i = 0, G__26778__a = new Array(arguments.length -  0);
while (G__26778__i < G__26778__a.length) {G__26778__a[G__26778__i] = arguments[G__26778__i + 0]; ++G__26778__i;}
  schemas = new cljs.core.IndexedSeq(G__26778__a,0);
} 
return either__delegate.call(this,schemas);};
either.cljs$lang$maxFixedArity = 0;
either.cljs$lang$applyTo = (function (arglist__26779){
var schemas = cljs.core.seq(arglist__26779);
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
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26781,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26783 = (((k26781 instanceof cljs.core.Keyword))?k26781.fqn:null);
switch (G__26783) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26781,else__15050__auto__);

}
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Both{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26780){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26784 = cljs.core.keyword_identical_QMARK_;
var expr__26785 = k__15055__auto__;
if(cljs.core.truth_(pred__26784.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__26785))){
return (new schema.core.Both(G__26780,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26780),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26780){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__26780,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sub_walkers = cljs.core.mapv.call(null,schema.core.subschema_walker,self__.schemas);
return ((function (sub_walkers,this$__$1){
return (function (x){
return cljs.core.reduce.call(null,((function (sub_walkers,this$__$1){
return (function (x__$1,sub_walker){
if(schema.utils.error_QMARK_.call(null,x__$1)){
return x__$1;
} else {
return sub_walker.call(null,x__$1);
}
});})(sub_walkers,this$__$1))
,x,sub_walkers);
});
;})(sub_walkers,this$__$1))
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function __GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function map__GT_Both(G__26782){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__26782),null,cljs.core.dissoc.call(null,G__26782,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
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
var G__26788__i = 0, G__26788__a = new Array(arguments.length -  0);
while (G__26788__i < G__26788__a.length) {G__26788__a[G__26788__i] = arguments[G__26788__i + 0]; ++G__26788__i;}
  schemas = new cljs.core.IndexedSeq(G__26788__a,0);
} 
return both__delegate.call(this,schemas);};
both.cljs$lang$maxFixedArity = 0;
both.cljs$lang$applyTo = (function (arglist__26789){
var schemas = cljs.core.seq(arglist__26789);
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
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26791,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26793 = (((k26791 instanceof cljs.core.Keyword))?k26791.fqn:null);
switch (G__26793) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26791,else__15050__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26790){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26794 = cljs.core.keyword_identical_QMARK_;
var expr__26795 = k__15055__auto__;
if(cljs.core.truth_(pred__26794.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__26795))){
return (new schema.core.ConditionalSchema(G__26790,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26790),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26790){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__26790,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var preds_and_walkers = cljs.core.mapv.call(null,((function (this$__$1){
return (function (p__26797){
var vec__26798 = p__26797;
var pred = cljs.core.nth.call(null,vec__26798,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__26798,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.subschema_walker.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas);
return ((function (preds_and_walkers,this$__$1){
return (function (x){
var temp__4404__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (preds_and_walkers,this$__$1){
return (function (p__26799){
var vec__26800 = p__26799;
var pred = cljs.core.nth.call(null,vec__26800,(0),null);
return pred.call(null,x);
});})(preds_and_walkers,this$__$1))
,preds_and_walkers));
if(cljs.core.truth_(temp__4404__auto__)){
var vec__26801 = temp__4404__auto__;
var _ = cljs.core.nth.call(null,vec__26801,(0),null);
var match = cljs.core.nth.call(null,vec__26801,(1),null);
return match.call(null,x);
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (temp__4404__auto__,preds_and_walkers,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"matches-some-condition?","matches-some-condition?",2097370044,null));
});})(temp__4404__auto__,preds_and_walkers,this$__$1))
,null)),null));
}
});
;})(preds_and_walkers,this$__$1))
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__26802){
var vec__26803 = p__26802;
var pred = cljs.core.nth.call(null,vec__26803,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__26803,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred,schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas));
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function __GT_ConditionalSchema(preds_and_schemas){
return (new schema.core.ConditionalSchema(preds_and_schemas,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function map__GT_ConditionalSchema(G__26792){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__26792),null,cljs.core.dissoc.call(null,G__26792,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355)),null));
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
if((cljs.core.seq.call(null,preds_and_schemas)) && (cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args; got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__15200__auto__ = (function iter__26813(s__26814){
return (new cljs.core.LazySeq(null,(function (){
var s__26814__$1 = s__26814;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26814__$1);
if(temp__4406__auto__){
var s__26814__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26814__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26814__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26816 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26815 = (0);
while(true){
if((i__26815 < size__15199__auto__)){
var vec__26819 = cljs.core._nth.call(null,c__15198__auto__,i__26815);
var pred = cljs.core.nth.call(null,vec__26819,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__26819,(1),null);
cljs.core.chunk_append.call(null,b__26816,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__26821 = (i__26815 + (1));
i__26815 = G__26821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26816),iter__26813.call(null,cljs.core.chunk_rest.call(null,s__26814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26816),null);
}
} else {
var vec__26820 = cljs.core.first.call(null,s__26814__$2);
var pred = cljs.core.nth.call(null,vec__26820,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__26820,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),iter__26813.call(null,cljs.core.rest.call(null,s__26814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),null,null,null));
};
var conditional = function (var_args){
var preds_and_schemas = null;
if (arguments.length > 0) {
var G__26822__i = 0, G__26822__a = new Array(arguments.length -  0);
while (G__26822__i < G__26822__a.length) {G__26822__a[G__26822__i] = arguments[G__26822__i + 0]; ++G__26822__i;}
  preds_and_schemas = new cljs.core.IndexedSeq(G__26822__a,0);
} 
return conditional__delegate.call(this,preds_and_schemas);};
conditional.cljs$lang$maxFixedArity = 0;
conditional.cljs$lang$applyTo = (function (arglist__26823){
var preds_and_schemas = cljs.core.seq(arglist__26823);
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
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
/**
* A sentinel value representing missing portions of the input data.
*/
schema.core._PLUS_missing_PLUS_ = new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325);

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
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26825,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26827 = (((k26825 instanceof cljs.core.Keyword))?k26825.fqn:null);
switch (G__26827) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26825,else__15050__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.RequiredKey{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26824){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26828 = cljs.core.keyword_identical_QMARK_;
var expr__26829 = k__15055__auto__;
if(cljs.core.truth_(pred__26828.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__26829))){
return (new schema.core.RequiredKey(G__26824,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26824),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26824){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__26824,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function __GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function map__GT_RequiredKey(G__26826){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__26826),null,cljs.core.dissoc.call(null,G__26826,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
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
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26833,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26835 = (((k26833 instanceof cljs.core.Keyword))?k26833.fqn:null);
switch (G__26835) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26833,else__15050__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.OptionalKey{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26832){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26836 = cljs.core.keyword_identical_QMARK_;
var expr__26837 = k__15055__auto__;
if(cljs.core.truth_(pred__26836.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__26837))){
return (new schema.core.OptionalKey(G__26832,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26832),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26832){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__26832,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function __GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function map__GT_OptionalKey(G__26834){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__26834),null,cljs.core.dissoc.call(null,G__26834,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
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
if(schema.core.optional_key_QMARK_.call(null,ks)){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function specific_key_QMARK_(ks){
return (schema.core.required_key_QMARK_.call(null,ks)) || (schema.core.optional_key_QMARK_.call(null,ks));
});
schema.core.explain_kspec = (function explain_kspec(kspec){
if(schema.core.specific_key_QMARK_.call(null,kspec)){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),((schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):((schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain.call(null,kspec);
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
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26841,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26843 = (((k26841 instanceof cljs.core.Keyword))?k26841.fqn:null);
switch (G__26843) {
case "val-schema":
return self__.val_schema;

break;
case "kspec":
return self__.kspec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26841,else__15050__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.MapEntry{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kspec","kspec",-1151232248),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26840){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26844 = cljs.core.keyword_identical_QMARK_;
var expr__26845 = k__15055__auto__;
if(cljs.core.truth_(pred__26844.call(null,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),expr__26845))){
return (new schema.core.MapEntry(G__26840,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26844.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__26845))){
return (new schema.core.MapEntry(self__.kspec,G__26840,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26840),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kspec","kspec",-1151232248),self__.kspec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26840){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.MapEntry(self__.kspec,self__.val_schema,G__26840,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var val_walker = schema.core.subschema_walker.call(null,self__.val_schema);
if(schema.core.specific_key_QMARK_.call(null,self__.kspec)){
var optional_QMARK_ = schema.core.optional_key_QMARK_.call(null,self__.kspec);
var k = schema.core.explicit_schema_key.call(null,self__.kspec);
return ((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (x){
if((schema.core._PLUS_missing_PLUS_ === x)){
if(optional_QMARK_){
return null;
} else {
return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null));
}
} else {
if(!(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x)))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (optional_QMARK_,k,val_walker,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(optional_QMARK_,k,val_walker,this$__$1))
,null)),null));
} else {
var vec__26847 = x;
var xk = cljs.core.nth.call(null,vec__26847,(0),null);
var xv = cljs.core.nth.call(null,vec__26847,(1),null);
if(cljs.core._EQ_.call(null,xk,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"xk","xk",741114825,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))].join('')));
}

var vres = val_walker.call(null,xv);
var temp__4404__auto__ = schema.utils.error_val.call(null,vres);
if(cljs.core.truth_(temp__4404__auto__)){
var ve = temp__4404__auto__;
return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,ve], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xk,vres], null);
}

}
}
});
;})(optional_QMARK_,k,val_walker,this$__$1))
} else {
var key_walker = schema.core.subschema_walker.call(null,self__.kspec);
return ((function (key_walker,val_walker,this$__$1){
return (function (x){
if(!(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,x)))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (key_walker,val_walker,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"count","count",-514511684,null))),(2)),cljs.core._EQ_);
});})(key_walker,val_walker,this$__$1))
,null)),null));
} else {
var out_k = key_walker.call(null,cljs.core.key.call(null,x));
var out_ke = schema.utils.error_val.call(null,out_k);
var out_v = val_walker.call(null,cljs.core.val.call(null,x));
var out_ve = schema.utils.error_val.call(null,out_v);
if(cljs.core.truth_((function (){var or__14444__auto__ = out_ke;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return out_ve;
}
})())){
return schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__14444__auto__ = out_ke;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.key.call(null,x);
}
})(),(function (){var or__14444__auto__ = out_ve;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
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
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain_kspec.call(null,self__.kspec)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function __GT_MapEntry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function map__GT_MapEntry(G__26842){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"kspec","kspec",-1151232248).cljs$core$IFn$_invoke$arity$1(G__26842),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__26842),null,cljs.core.dissoc.call(null,G__26842,new cljs.core.Keyword(null,"kspec","kspec",-1151232248),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function map_entry(kspec,val_schema){
return (new schema.core.MapEntry(kspec,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.preserve_map_type = (function preserve_map_type(original,walker_result){
if((schema.utils.record_QMARK_.call(null,original)) && (!(schema.utils.error_QMARK_.call(null,walker_result)))){
return cljs.core.into.call(null,original,walker_result);
} else {
return walker_result;
}
});
schema.core.map_walker = (function map_walker(map_schema){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,map_schema);
var extra_walker = (cljs.core.truth_(extra_keys_schema)?schema.core.subschema_walker.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,map_schema,extra_keys_schema))):null);
var explicit_schema = cljs.core.dissoc.call(null,map_schema,extra_keys_schema);
var explicit_walkers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = ((function (extra_keys_schema,extra_walker,explicit_schema){
return (function iter__26863(s__26864){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema,extra_walker,explicit_schema){
return (function (){
var s__26864__$1 = s__26864;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26864__$1);
if(temp__4406__auto__){
var s__26864__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26864__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26864__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26866 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26865 = (0);
while(true){
if((i__26865 < size__15199__auto__)){
var vec__26869 = cljs.core._nth.call(null,c__15198__auto__,i__26865);
var k = cljs.core.nth.call(null,vec__26869,(0),null);
var v = cljs.core.nth.call(null,vec__26869,(1),null);
cljs.core.chunk_append.call(null,b__26866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null));

var G__26876 = (i__26865 + (1));
i__26865 = G__26876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26866),iter__26863.call(null,cljs.core.chunk_rest.call(null,s__26864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26866),null);
}
} else {
var vec__26870 = cljs.core.first.call(null,s__26864__$2);
var k = cljs.core.nth.call(null,vec__26870,(0),null);
var v = cljs.core.nth.call(null,vec__26870,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.subschema_walker.call(null,schema.core.map_entry.call(null,k,v))], null),iter__26863.call(null,cljs.core.rest.call(null,s__26864__$2)));
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
return iter__15200__auto__.call(null,explicit_schema);
})());
var err_conj = schema.utils.result_builder.call(null,cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,explicit_schema),cljs.core.count.call(null,explicit_walkers))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p1__26849_SHARP_){
return (cljs.core.count.call(null,p1__26849_SHARP_) > (1));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,explicit_schema)))))))));
}

return ((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (x){
if(!(cljs.core.map_QMARK_.call(null,x))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,map_schema,x,(new cljs.core.Delay(((function (extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
});})(extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,null)),null));
} else {
return schema.core.preserve_map_type.call(null,x,(function (){var ok_key = cljs.core.PersistentHashSet.EMPTY;
var explicit_walkers__$1 = cljs.core.seq.call(null,explicit_walkers);
var out = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,explicit_walkers__$1)){
return cljs.core.reduce.call(null,(cljs.core.truth_(extra_walker)?((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,e){
return err_conj.call(null,out__$1,extra_walker.call(null,e));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
:((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (out__$1,p__26871){
var vec__26872 = p__26871;
var k = cljs.core.nth.call(null,vec__26872,(0),null);
var _ = cljs.core.nth.call(null,vec__26872,(1),null);
return err_conj.call(null,out__$1,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null)));
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
),out,cljs.core.remove.call(null,((function (ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj){
return (function (p__26873){
var vec__26874 = p__26873;
var k = cljs.core.nth.call(null,vec__26874,(0),null);
var v = cljs.core.nth.call(null,vec__26874,(1),null);
return ok_key.call(null,k);
});})(ok_key,explicit_walkers__$1,out,extra_keys_schema,extra_walker,explicit_schema,explicit_walkers,err_conj))
,x));
} else {
var vec__26875 = cljs.core.first.call(null,explicit_walkers__$1);
var wk = cljs.core.nth.call(null,vec__26875,(0),null);
var wv = cljs.core.nth.call(null,vec__26875,(1),null);
var G__26877 = cljs.core.conj.call(null,ok_key,wk);
var G__26878 = cljs.core.next.call(null,explicit_walkers__$1);
var G__26879 = err_conj.call(null,out,wv.call(null,(function (){var or__14444__auto__ = cljs.core.find.call(null,x,wk);
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return schema.core._PLUS_missing_PLUS_;
}
})()));
ok_key = G__26877;
explicit_walkers__$1 = G__26878;
out = G__26879;
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15200__auto__ = (function iter__26888(s__26889){
return (new cljs.core.LazySeq(null,(function (){
var s__26889__$1 = s__26889;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26889__$1);
if(temp__4406__auto__){
var s__26889__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26889__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26889__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26891 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26890 = (0);
while(true){
if((i__26890 < size__15199__auto__)){
var vec__26894 = cljs.core._nth.call(null,c__15198__auto__,i__26890);
var k = cljs.core.nth.call(null,vec__26894,(0),null);
var v = cljs.core.nth.call(null,vec__26894,(1),null);
cljs.core.chunk_append.call(null,b__26891,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))));

var G__26896 = (i__26890 + (1));
i__26890 = G__26896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26891),iter__26888.call(null,cljs.core.chunk_rest.call(null,s__26889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26891),null);
}
} else {
var vec__26895 = cljs.core.first.call(null,s__26889__$2);
var k = cljs.core.nth.call(null,vec__26895,(0),null);
var v = cljs.core.nth.call(null,vec__26895,(1),null);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.next.call(null,schema.core.explain.call(null,schema.core.map_entry.call(null,k,v)))),iter__26888.call(null,cljs.core.rest.call(null,s__26889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__15200__auto__.call(null,this$);
})());
});
cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_walker.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

var sub_walker = schema.core.subschema_walker.call(null,cljs.core.first.call(null,this$__$1));
return ((function (sub_walker,this$__$1){
return (function (x){
var or__14444__auto__ = ((cljs.core.set_QMARK_.call(null,x))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (sub_walker,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(sub_walker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
var vec__26897 = cljs.core.juxt.call(null,cljs.core.remove,cljs.core.keep).call(null,schema.utils.error_val,cljs.core.map.call(null,sub_walker,x));
var good = cljs.core.nth.call(null,vec__26897,(0),null);
var bad = cljs.core.nth.call(null,vec__26897,(1),null);
if(cljs.core.seq.call(null,bad)){
return schema.utils.error.call(null,cljs.core.set.call(null,bad));
} else {
return cljs.core.set.call(null,good);
}
}
});
;})(sub_walker,this$__$1))
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
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
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26899,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26901 = (((k26899 instanceof cljs.core.Keyword))?k26899.fqn:null);
switch (G__26901) {
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
return cljs.core.get.call(null,self__.__extmap,k26899,else__15050__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.One{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26898){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26902 = cljs.core.keyword_identical_QMARK_;
var expr__26903 = k__15055__auto__;
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__26903))){
return (new schema.core.One(G__26898,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__26903))){
return (new schema.core.One(self__.schema,G__26898,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26902.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__26903))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__26898,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26898),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26898){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__26898,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/One");
});

schema.core.__GT_One = (function __GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function map__GT_One(G__26900){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__26900),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__26900),null,cljs.core.dissoc.call(null,G__26900,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
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

var vec__26911 = cljs.core.split_with.call(null,(function (p1__26906_SHARP_){
return ((p1__26906_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__26906_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__26911,(0),null);
var more = cljs.core.nth.call(null,vec__26911,(1),null);
var vec__26912 = cljs.core.split_with.call(null,((function (vec__26911,required,more){
return (function (p1__26907_SHARP_){
var and__14432__auto__ = (p1__26907_SHARP_ instanceof schema.core.One);
if(and__14432__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__26907_SHARP_);
} else {
return and__14432__auto__;
}
});})(vec__26911,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__26912,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__26912,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__26911,required,more,vec__26912,optional,more__$1){
return (function (p1__26908_SHARP_){
return !((p1__26908_SHARP_ instanceof schema.core.One));
});})(vec__26911,required,more,vec__26912,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var this$__$1 = this;
var vec__26913 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__26913,(0),null);
var multi = cljs.core.nth.call(null,vec__26913,(1),null);
var single_walkers = cljs.core.vec.call(null,(function (){var iter__15200__auto__ = ((function (vec__26913,singles,multi,this$__$1){
return (function iter__26914(s__26915){
return (new cljs.core.LazySeq(null,((function (vec__26913,singles,multi,this$__$1){
return (function (){
var s__26915__$1 = s__26915;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26915__$1);
if(temp__4406__auto__){
var s__26915__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26915__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26915__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26917 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26916 = (0);
while(true){
if((i__26916 < size__15199__auto__)){
var s = cljs.core._nth.call(null,c__15198__auto__,i__26916);
cljs.core.chunk_append.call(null,b__26917,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null));

var G__26932 = (i__26916 + (1));
i__26916 = G__26932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26917),iter__26914.call(null,cljs.core.chunk_rest.call(null,s__26915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26917),null);
}
} else {
var s = cljs.core.first.call(null,s__26915__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,schema.core.subschema_walker.call(null,s.schema)], null),iter__26914.call(null,cljs.core.rest.call(null,s__26915__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26913,singles,multi,this$__$1))
,null,null));
});})(vec__26913,singles,multi,this$__$1))
;
return iter__15200__auto__.call(null,singles);
})());
var multi_walker = (cljs.core.truth_(multi)?schema.core.subschema_walker.call(null,multi):null);
var err_conj = schema.utils.result_builder.call(null,((function (vec__26913,singles,multi,single_walkers,multi_walker,this$__$1){
return (function (m){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,m),null));
});})(vec__26913,singles,multi,single_walkers,multi_walker,this$__$1))
);
return ((function (vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (x){
var or__14444__auto__ = ((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
var single_walkers__$1 = single_walkers;
var x__$1 = x;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4404__auto__ = cljs.core.first.call(null,single_walkers__$1);
if(cljs.core.truth_(temp__4404__auto__)){
var vec__26918 = temp__4404__auto__;
var first_single = cljs.core.nth.call(null,vec__26918,(0),null);
var single_walker = cljs.core.nth.call(null,vec__26918,(1),null);
if(cljs.core.empty_QMARK_.call(null,x__$1)){
if(cljs.core.truth_(first_single.optional_QMARK_)){
return out;
} else {
return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first,single_walkers__$1)),null,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,vec__26918,first_single,single_walker,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"present?","present?",-1810613791,null),(function (){var iter__15200__auto__ = ((function (single_walkers__$1,x__$1,out,vec__26918,first_single,single_walker,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function iter__26919(s__26920){
return (new cljs.core.LazySeq(null,((function (single_walkers__$1,x__$1,out,vec__26918,first_single,single_walker,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
var s__26920__$1 = s__26920;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26920__$1);
if(temp__4406__auto__){
var s__26920__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26920__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26920__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26922 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26921 = (0);
while(true){
if((i__26921 < size__15199__auto__)){
var vec__26925 = cljs.core._nth.call(null,c__15198__auto__,i__26921);
var single = cljs.core.nth.call(null,vec__26925,(0),null);
if(cljs.core.not.call(null,single.optional_QMARK_)){
cljs.core.chunk_append.call(null,b__26922,single.name);

var G__26933 = (i__26921 + (1));
i__26921 = G__26933;
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26922),iter__26919.call(null,cljs.core.chunk_rest.call(null,s__26920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26922),null);
}
} else {
var vec__26926 = cljs.core.first.call(null,s__26920__$2);
var single = cljs.core.nth.call(null,vec__26926,(0),null);
if(cljs.core.not.call(null,single.optional_QMARK_)){
return cljs.core.cons.call(null,single.name,iter__26919.call(null,cljs.core.rest.call(null,s__26920__$2)));
} else {
return null;
}
}
} else {
return null;
}
break;
}
});})(single_walkers__$1,x__$1,out,vec__26918,first_single,single_walker,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null,null));
});})(single_walkers__$1,x__$1,out,vec__26918,first_single,single_walker,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
;
return iter__15200__auto__.call(null,single_walkers__$1);
})());
});})(single_walkers__$1,x__$1,out,vec__26918,first_single,single_walker,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
}
} else {
var G__26934 = cljs.core.next.call(null,single_walkers__$1);
var G__26935 = cljs.core.rest.call(null,x__$1);
var G__26936 = err_conj.call(null,out,schema.utils.wrap_error_name.call(null,first_single.name,single_walker.call(null,cljs.core.first.call(null,x__$1))));
single_walkers__$1 = G__26934;
x__$1 = G__26935;
out = G__26936;
continue;
}
} else {
if(cljs.core.truth_(multi)){
return cljs.core.reduce.call(null,err_conj,out,cljs.core.map.call(null,multi_walker,x__$1));
} else {
if(cljs.core.seq.call(null,x__$1)){
return err_conj.call(null,out,schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,null,x__$1,(new cljs.core.Delay(((function (single_walkers__$1,x__$1,out,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,x__$1)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(single_walkers__$1,x__$1,out,temp__4404__auto__,or__14444__auto__,vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
,null)),null)));
} else {
return out;

}
}
}
break;
}
}
});
;})(vec__26913,singles,multi,single_walkers,multi_walker,err_conj,this$__$1))
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__26927 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__26927,(0),null);
var multi = cljs.core.nth.call(null,vec__26927,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__15200__auto__ = ((function (vec__26927,singles,multi,this$__$1){
return (function iter__26928(s__26929){
return (new cljs.core.LazySeq(null,((function (vec__26927,singles,multi,this$__$1){
return (function (){
var s__26929__$1 = s__26929;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__26929__$1);
if(temp__4406__auto__){
var s__26929__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26929__$2)){
var c__15198__auto__ = cljs.core.chunk_first.call(null,s__26929__$2);
var size__15199__auto__ = cljs.core.count.call(null,c__15198__auto__);
var b__26931 = cljs.core.chunk_buffer.call(null,size__15199__auto__);
if((function (){var i__26930 = (0);
while(true){
if((i__26930 < size__15199__auto__)){
var s = cljs.core._nth.call(null,c__15198__auto__,i__26930);
cljs.core.chunk_append.call(null,b__26931,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__26937 = (i__26930 + (1));
i__26930 = G__26937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26931),iter__26928.call(null,cljs.core.chunk_rest.call(null,s__26929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26931),null);
}
} else {
var s = cljs.core.first.call(null,s__26929__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),iter__26928.call(null,cljs.core.rest.call(null,s__26929__$2)));
}
} else {
return null;
}
break;
}
});})(vec__26927,singles,multi,this$__$1))
,null,null));
});})(vec__26927,singles,multi,this$__$1))
;
return iter__15200__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
* A schema for a pair of schemas and their names
*/
schema.core.pair = (function pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
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
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26939,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26941 = (((k26939 instanceof cljs.core.Keyword))?k26939.fqn:null);
switch (G__26941) {
case "schema":
return self__.schema;

break;
case "klass":
return self__.klass;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26939,else__15050__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.Record{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26938){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26942 = cljs.core.keyword_identical_QMARK_;
var expr__26943 = k__15055__auto__;
if(cljs.core.truth_(pred__26942.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__26943))){
return (new schema.core.Record(G__26938,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26942.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__26943))){
return (new schema.core.Record(self__.klass,G__26938,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26938),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26938){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__26938,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map_checker = schema.core.subschema_walker.call(null,self__.schema);
var pred_checker = (function (){var temp__4406__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4406__auto__)){
var evf = temp__4406__auto__;
return schema.core.subschema_walker.call(null,schema.core.pred.call(null,evf));
} else {
return null;
}
})();
return ((function (map_checker,pred_checker,this$__$1){
return (function (r){
var or__14444__auto__ = (((r instanceof self__.klass))?null:schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,r,(new cljs.core.Delay(((function (map_checker,pred_checker,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,r)),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(map_checker,pred_checker,this$__$1))
,null)),null)));
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
var res = map_checker.call(null,r);
if(schema.utils.error_QMARK_.call(null,res)){
return res;
} else {
var pred_res = (cljs.core.truth_(pred_checker)?pred_checker.call(null,r):null);
if(schema.utils.error_QMARK_.call(null,pred_res)){
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
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function __GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function map__GT_Record(G__26940){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__26940),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__26940),null,cljs.core.dissoc.call(null,G__26940,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
* A Record instance of type klass, whose elements match map schema 'schema'.
*/
schema.core.record = (function record(klass,schema__$1){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return (new schema.core.Record(klass,schema__$1,null,null,null));
});
schema.core.explain_input_schema = (function explain_input_schema(input_schema){
var vec__26949 = cljs.core.split_with.call(null,(function (p1__26946_SHARP_){
return (p1__26946_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__26949,(0),null);
var more = cljs.core.nth.call(null,vec__26949,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__26949,required,more){
return (function (p1__26947_SHARP_){
return schema.core.explain.call(null,p1__26947_SHARP_.schema);
});})(vec__26949,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
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
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15047__auto__,k__15048__auto__){
var self__ = this;
var this__15047__auto____$1 = this;
return cljs.core._lookup.call(null,this__15047__auto____$1,k__15048__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15049__auto__,k26951,else__15050__auto__){
var self__ = this;
var this__15049__auto____$1 = this;
var G__26953 = (((k26951 instanceof cljs.core.Keyword))?k26951.fqn:null);
switch (G__26953) {
case "input-schemas":
return self__.input_schemas;

break;
case "output-schema":
return self__.output_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26951,else__15050__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15061__auto__,writer__15062__auto__,opts__15063__auto__){
var self__ = this;
var this__15061__auto____$1 = this;
var pr_pair__15064__auto__ = ((function (this__15061__auto____$1){
return (function (keyval__15065__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,cljs.core.pr_writer,""," ","",opts__15063__auto__,keyval__15065__auto__);
});})(this__15061__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15062__auto__,pr_pair__15064__auto__,"#schema.core.FnSchema{",", ","}",opts__15063__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15045__auto__){
var self__ = this;
var this__15045__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15041__auto__){
var self__ = this;
var this__15041__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15051__auto__){
var self__ = this;
var this__15051__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15042__auto__){
var self__ = this;
var this__15042__auto____$1 = this;
var h__14865__auto__ = self__.__hash;
if(!((h__14865__auto__ == null))){
return h__14865__auto__;
} else {
var h__14865__auto____$1 = cljs.core.hash_imap.call(null,this__15042__auto____$1);
self__.__hash = h__14865__auto____$1;

return h__14865__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15043__auto__,other__15044__auto__){
var self__ = this;
var this__15043__auto____$1 = this;
if(cljs.core.truth_((function (){var and__14432__auto__ = other__15044__auto__;
if(cljs.core.truth_(and__14432__auto__)){
return ((this__15043__auto____$1.constructor === other__15044__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15043__auto____$1,other__15044__auto__));
} else {
return and__14432__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15056__auto__,k__15057__auto__){
var self__ = this;
var this__15056__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__15057__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15056__auto____$1),self__.__meta),k__15057__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15057__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15054__auto__,k__15055__auto__,G__26950){
var self__ = this;
var this__15054__auto____$1 = this;
var pred__26954 = cljs.core.keyword_identical_QMARK_;
var expr__26955 = k__15055__auto__;
if(cljs.core.truth_(pred__26954.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__26955))){
return (new schema.core.FnSchema(G__26950,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26954.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__26955))){
return (new schema.core.FnSchema(self__.output_schema,G__26950,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15055__auto__,G__26950),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15059__auto__){
var self__ = this;
var this__15059__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15046__auto__,G__26950){
var self__ = this;
var this__15046__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__26950,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15052__auto__,entry__15053__auto__){
var self__ = this;
var this__15052__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15053__auto__)){
return cljs.core._assoc.call(null,this__15052__auto____$1,cljs.core._nth.call(null,entry__15053__auto__,(0)),cljs.core._nth.call(null,entry__15053__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15052__auto____$1,entry__15053__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$walker$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
if(cljs.core.ifn_QMARK_.call(null,x)){
return x;
} else {
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.utils.value_name.call(null,x)),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
,null)),null));
}
});
;})(this$__$1))
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__15081__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__15081__auto__,writer__15082__auto__){
return cljs.core._write.call(null,writer__15082__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function __GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function map__GT_FnSchema(G__26952){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__26952),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__26952),null,cljs.core.dissoc.call(null,G__26952,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
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
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
schema.core.schema_with_name = (function schema_with_name(schema__$1,name){

return cljs.core.with_meta.call(null,schema__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
});
schema.core.schema_name = (function schema_name(schema__$1){

return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
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
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
* Produce the schema for a function defined with s/fn or s/defn.
*/
schema.core.fn_schema = (function fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__14444__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
var m__16719__auto__ = cljs.core.meta.call(null,f);
var k__16720__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4404__auto__ = cljs.core.find.call(null,m__16719__auto__,k__16720__auto__);
if(cljs.core.truth_(temp__4404__auto__)){
var pair__16721__auto__ = temp__4404__auto__;
return cljs.core.val.call(null,pair__16721__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__16720__auto__,m__16719__auto__)));
}
}
});

//# sourceMappingURL=core.js.map