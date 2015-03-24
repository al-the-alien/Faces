// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t39235 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39235 = (function (f,fn_handler,meta39236){
this.f = f;
this.fn_handler = fn_handler;
this.meta39236 = meta39236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39235.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t39235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t39235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39237){
var self__ = this;
var _39237__$1 = this;
return self__.meta39236;
});

cljs.core.async.t39235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39237,meta39236__$1){
var self__ = this;
var _39237__$1 = this;
return (new cljs.core.async.t39235(self__.f,self__.fn_handler,meta39236__$1));
});

cljs.core.async.t39235.cljs$lang$type = true;

cljs.core.async.t39235.cljs$lang$ctorStr = "cljs.core.async/t39235";

cljs.core.async.t39235.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t39235");
});

cljs.core.async.__GT_t39235 = (function __GT_t39235(f__$1,fn_handler__$1,meta39236){
return (new cljs.core.async.t39235(f__$1,fn_handler__$1,meta39236));
});

}

return (new cljs.core.async.t39235(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__39239 = buff;
if(G__39239){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__39239.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__39239.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__39239);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__39239);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39240 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39240);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39240,ret){
return (function (){
return fn1.call(null,val_39240);
});})(val_39240,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4404__auto__)){
var ret = temp__4404__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4404__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4404__auto__)){
var retb = temp__4404__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4404__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4404__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__11828__auto___39241 = n;
var x_39242 = (0);
while(true){
if((x_39242 < n__11828__auto___39241)){
(a[x_39242] = (0));

var G__39243 = (x_39242 + (1));
x_39242 = G__39243;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39244 = (i + (1));
i = G__39244;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t39248 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39248 = (function (flag,alt_flag,meta39249){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta39249 = meta39249;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39248.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t39248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t39248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39250){
var self__ = this;
var _39250__$1 = this;
return self__.meta39249;
});})(flag))
;

cljs.core.async.t39248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39250,meta39249__$1){
var self__ = this;
var _39250__$1 = this;
return (new cljs.core.async.t39248(self__.flag,self__.alt_flag,meta39249__$1));
});})(flag))
;

cljs.core.async.t39248.cljs$lang$type = true;

cljs.core.async.t39248.cljs$lang$ctorStr = "cljs.core.async/t39248";

cljs.core.async.t39248.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t39248");
});})(flag))
;

cljs.core.async.__GT_t39248 = ((function (flag){
return (function __GT_t39248(flag__$1,alt_flag__$1,meta39249){
return (new cljs.core.async.t39248(flag__$1,alt_flag__$1,meta39249));
});})(flag))
;

}

return (new cljs.core.async.t39248(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t39254 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39254 = (function (cb,flag,alt_handler,meta39255){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta39255 = meta39255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39254.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t39254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t39254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39256){
var self__ = this;
var _39256__$1 = this;
return self__.meta39255;
});

cljs.core.async.t39254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39256,meta39255__$1){
var self__ = this;
var _39256__$1 = this;
return (new cljs.core.async.t39254(self__.cb,self__.flag,self__.alt_handler,meta39255__$1));
});

cljs.core.async.t39254.cljs$lang$type = true;

cljs.core.async.t39254.cljs$lang$ctorStr = "cljs.core.async/t39254";

cljs.core.async.t39254.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t39254");
});

cljs.core.async.__GT_t39254 = (function __GT_t39254(cb__$1,flag__$1,alt_handler__$1,meta39255){
return (new cljs.core.async.t39254(cb__$1,flag__$1,alt_handler__$1,meta39255));
});

}

return (new cljs.core.async.t39254(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39257_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39257_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39258_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39258_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10941__auto__ = wport;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39259 = (i + (1));
i = G__39259;
continue;
}
} else {
return null;
}
break;
}
})();
var or__10941__auto__ = ret;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__10929__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__10929__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__10929__auto__;
}
})();
if(cljs.core.truth_(temp__4406__auto__)){
var got = temp__4406__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__39260){
var map__39262 = p__39260;
var map__39262__$1 = ((cljs.core.seq_QMARK_.call(null,map__39262))?cljs.core.apply.call(null,cljs.core.hash_map,map__39262):map__39262);
var opts = map__39262__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__39260 = null;
if (arguments.length > 1) {
var G__39263__i = 0, G__39263__a = new Array(arguments.length -  1);
while (G__39263__i < G__39263__a.length) {G__39263__a[G__39263__i] = arguments[G__39263__i + 1]; ++G__39263__i;}
  p__39260 = new cljs.core.IndexedSeq(G__39263__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__39260);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__39264){
var ports = cljs.core.first(arglist__39264);
var p__39260 = cljs.core.rest(arglist__39264);
return alts_BANG___delegate(ports,p__39260);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__25458__auto___39359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___39359){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___39359){
return (function (state_39335){
var state_val_39336 = (state_39335[(1)]);
if((state_val_39336 === (7))){
var inst_39331 = (state_39335[(2)]);
var state_39335__$1 = state_39335;
var statearr_39337_39360 = state_39335__$1;
(statearr_39337_39360[(2)] = inst_39331);

(statearr_39337_39360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (1))){
var state_39335__$1 = state_39335;
var statearr_39338_39361 = state_39335__$1;
(statearr_39338_39361[(2)] = null);

(statearr_39338_39361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (4))){
var inst_39314 = (state_39335[(7)]);
var inst_39314__$1 = (state_39335[(2)]);
var inst_39315 = (inst_39314__$1 == null);
var state_39335__$1 = (function (){var statearr_39339 = state_39335;
(statearr_39339[(7)] = inst_39314__$1);

return statearr_39339;
})();
if(cljs.core.truth_(inst_39315)){
var statearr_39340_39362 = state_39335__$1;
(statearr_39340_39362[(1)] = (5));

} else {
var statearr_39341_39363 = state_39335__$1;
(statearr_39341_39363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (13))){
var state_39335__$1 = state_39335;
var statearr_39342_39364 = state_39335__$1;
(statearr_39342_39364[(2)] = null);

(statearr_39342_39364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (6))){
var inst_39314 = (state_39335[(7)]);
var state_39335__$1 = state_39335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39335__$1,(11),to,inst_39314);
} else {
if((state_val_39336 === (3))){
var inst_39333 = (state_39335[(2)]);
var state_39335__$1 = state_39335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39335__$1,inst_39333);
} else {
if((state_val_39336 === (12))){
var state_39335__$1 = state_39335;
var statearr_39343_39365 = state_39335__$1;
(statearr_39343_39365[(2)] = null);

(statearr_39343_39365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (2))){
var state_39335__$1 = state_39335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39335__$1,(4),from);
} else {
if((state_val_39336 === (11))){
var inst_39324 = (state_39335[(2)]);
var state_39335__$1 = state_39335;
if(cljs.core.truth_(inst_39324)){
var statearr_39344_39366 = state_39335__$1;
(statearr_39344_39366[(1)] = (12));

} else {
var statearr_39345_39367 = state_39335__$1;
(statearr_39345_39367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (9))){
var state_39335__$1 = state_39335;
var statearr_39346_39368 = state_39335__$1;
(statearr_39346_39368[(2)] = null);

(statearr_39346_39368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (5))){
var state_39335__$1 = state_39335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39347_39369 = state_39335__$1;
(statearr_39347_39369[(1)] = (8));

} else {
var statearr_39348_39370 = state_39335__$1;
(statearr_39348_39370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (14))){
var inst_39329 = (state_39335[(2)]);
var state_39335__$1 = state_39335;
var statearr_39349_39371 = state_39335__$1;
(statearr_39349_39371[(2)] = inst_39329);

(statearr_39349_39371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (10))){
var inst_39321 = (state_39335[(2)]);
var state_39335__$1 = state_39335;
var statearr_39350_39372 = state_39335__$1;
(statearr_39350_39372[(2)] = inst_39321);

(statearr_39350_39372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39336 === (8))){
var inst_39318 = cljs.core.async.close_BANG_.call(null,to);
var state_39335__$1 = state_39335;
var statearr_39351_39373 = state_39335__$1;
(statearr_39351_39373[(2)] = inst_39318);

(statearr_39351_39373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___39359))
;
return ((function (switch__25402__auto__,c__25458__auto___39359){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39355 = [null,null,null,null,null,null,null,null];
(statearr_39355[(0)] = state_machine__25403__auto__);

(statearr_39355[(1)] = (1));

return statearr_39355;
});
var state_machine__25403__auto____1 = (function (state_39335){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39356){if((e39356 instanceof Object)){
var ex__25406__auto__ = e39356;
var statearr_39357_39374 = state_39335;
(statearr_39357_39374[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39375 = state_39335;
state_39335 = G__39375;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39335){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___39359))
})();
var state__25460__auto__ = (function (){var statearr_39358 = f__25459__auto__.call(null);
(statearr_39358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___39359);

return statearr_39358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___39359))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39559){
var vec__39560 = p__39559;
var v = cljs.core.nth.call(null,vec__39560,(0),null);
var p = cljs.core.nth.call(null,vec__39560,(1),null);
var job = vec__39560;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25458__auto___39742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___39742,res,vec__39560,v,p,job,jobs,results){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___39742,res,vec__39560,v,p,job,jobs,results){
return (function (state_39565){
var state_val_39566 = (state_39565[(1)]);
if((state_val_39566 === (2))){
var inst_39562 = (state_39565[(2)]);
var inst_39563 = cljs.core.async.close_BANG_.call(null,res);
var state_39565__$1 = (function (){var statearr_39567 = state_39565;
(statearr_39567[(7)] = inst_39562);

return statearr_39567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39565__$1,inst_39563);
} else {
if((state_val_39566 === (1))){
var state_39565__$1 = state_39565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39565__$1,(2),res,v);
} else {
return null;
}
}
});})(c__25458__auto___39742,res,vec__39560,v,p,job,jobs,results))
;
return ((function (switch__25402__auto__,c__25458__auto___39742,res,vec__39560,v,p,job,jobs,results){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39571 = [null,null,null,null,null,null,null,null];
(statearr_39571[(0)] = state_machine__25403__auto__);

(statearr_39571[(1)] = (1));

return statearr_39571;
});
var state_machine__25403__auto____1 = (function (state_39565){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39572){if((e39572 instanceof Object)){
var ex__25406__auto__ = e39572;
var statearr_39573_39743 = state_39565;
(statearr_39573_39743[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39744 = state_39565;
state_39565 = G__39744;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39565){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___39742,res,vec__39560,v,p,job,jobs,results))
})();
var state__25460__auto__ = (function (){var statearr_39574 = f__25459__auto__.call(null);
(statearr_39574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___39742);

return statearr_39574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___39742,res,vec__39560,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39575){
var vec__39576 = p__39575;
var v = cljs.core.nth.call(null,vec__39576,(0),null);
var p = cljs.core.nth.call(null,vec__39576,(1),null);
var job = vec__39576;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__11828__auto___39745 = n;
var __39746 = (0);
while(true){
if((__39746 < n__11828__auto___39745)){
var G__39577_39747 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39577_39747) {
case "async":
var c__25458__auto___39749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39746,c__25458__auto___39749,G__39577_39747,n__11828__auto___39745,jobs,results,process,async){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (__39746,c__25458__auto___39749,G__39577_39747,n__11828__auto___39745,jobs,results,process,async){
return (function (state_39590){
var state_val_39591 = (state_39590[(1)]);
if((state_val_39591 === (7))){
var inst_39586 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
var statearr_39592_39750 = state_39590__$1;
(statearr_39592_39750[(2)] = inst_39586);

(statearr_39592_39750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (6))){
var state_39590__$1 = state_39590;
var statearr_39593_39751 = state_39590__$1;
(statearr_39593_39751[(2)] = null);

(statearr_39593_39751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (5))){
var state_39590__$1 = state_39590;
var statearr_39594_39752 = state_39590__$1;
(statearr_39594_39752[(2)] = null);

(statearr_39594_39752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (4))){
var inst_39580 = (state_39590[(2)]);
var inst_39581 = async.call(null,inst_39580);
var state_39590__$1 = state_39590;
if(cljs.core.truth_(inst_39581)){
var statearr_39595_39753 = state_39590__$1;
(statearr_39595_39753[(1)] = (5));

} else {
var statearr_39596_39754 = state_39590__$1;
(statearr_39596_39754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (3))){
var inst_39588 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39590__$1,inst_39588);
} else {
if((state_val_39591 === (2))){
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39590__$1,(4),jobs);
} else {
if((state_val_39591 === (1))){
var state_39590__$1 = state_39590;
var statearr_39597_39755 = state_39590__$1;
(statearr_39597_39755[(2)] = null);

(statearr_39597_39755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39746,c__25458__auto___39749,G__39577_39747,n__11828__auto___39745,jobs,results,process,async))
;
return ((function (__39746,switch__25402__auto__,c__25458__auto___39749,G__39577_39747,n__11828__auto___39745,jobs,results,process,async){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39601 = [null,null,null,null,null,null,null];
(statearr_39601[(0)] = state_machine__25403__auto__);

(statearr_39601[(1)] = (1));

return statearr_39601;
});
var state_machine__25403__auto____1 = (function (state_39590){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39602){if((e39602 instanceof Object)){
var ex__25406__auto__ = e39602;
var statearr_39603_39756 = state_39590;
(statearr_39603_39756[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39757 = state_39590;
state_39590 = G__39757;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39590){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(__39746,switch__25402__auto__,c__25458__auto___39749,G__39577_39747,n__11828__auto___39745,jobs,results,process,async))
})();
var state__25460__auto__ = (function (){var statearr_39604 = f__25459__auto__.call(null);
(statearr_39604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___39749);

return statearr_39604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(__39746,c__25458__auto___39749,G__39577_39747,n__11828__auto___39745,jobs,results,process,async))
);


break;
case "compute":
var c__25458__auto___39758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39746,c__25458__auto___39758,G__39577_39747,n__11828__auto___39745,jobs,results,process,async){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (__39746,c__25458__auto___39758,G__39577_39747,n__11828__auto___39745,jobs,results,process,async){
return (function (state_39617){
var state_val_39618 = (state_39617[(1)]);
if((state_val_39618 === (7))){
var inst_39613 = (state_39617[(2)]);
var state_39617__$1 = state_39617;
var statearr_39619_39759 = state_39617__$1;
(statearr_39619_39759[(2)] = inst_39613);

(statearr_39619_39759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39618 === (6))){
var state_39617__$1 = state_39617;
var statearr_39620_39760 = state_39617__$1;
(statearr_39620_39760[(2)] = null);

(statearr_39620_39760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39618 === (5))){
var state_39617__$1 = state_39617;
var statearr_39621_39761 = state_39617__$1;
(statearr_39621_39761[(2)] = null);

(statearr_39621_39761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39618 === (4))){
var inst_39607 = (state_39617[(2)]);
var inst_39608 = process.call(null,inst_39607);
var state_39617__$1 = state_39617;
if(cljs.core.truth_(inst_39608)){
var statearr_39622_39762 = state_39617__$1;
(statearr_39622_39762[(1)] = (5));

} else {
var statearr_39623_39763 = state_39617__$1;
(statearr_39623_39763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39618 === (3))){
var inst_39615 = (state_39617[(2)]);
var state_39617__$1 = state_39617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39617__$1,inst_39615);
} else {
if((state_val_39618 === (2))){
var state_39617__$1 = state_39617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39617__$1,(4),jobs);
} else {
if((state_val_39618 === (1))){
var state_39617__$1 = state_39617;
var statearr_39624_39764 = state_39617__$1;
(statearr_39624_39764[(2)] = null);

(statearr_39624_39764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39746,c__25458__auto___39758,G__39577_39747,n__11828__auto___39745,jobs,results,process,async))
;
return ((function (__39746,switch__25402__auto__,c__25458__auto___39758,G__39577_39747,n__11828__auto___39745,jobs,results,process,async){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39628 = [null,null,null,null,null,null,null];
(statearr_39628[(0)] = state_machine__25403__auto__);

(statearr_39628[(1)] = (1));

return statearr_39628;
});
var state_machine__25403__auto____1 = (function (state_39617){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39629){if((e39629 instanceof Object)){
var ex__25406__auto__ = e39629;
var statearr_39630_39765 = state_39617;
(statearr_39630_39765[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39766 = state_39617;
state_39617 = G__39766;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39617){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(__39746,switch__25402__auto__,c__25458__auto___39758,G__39577_39747,n__11828__auto___39745,jobs,results,process,async))
})();
var state__25460__auto__ = (function (){var statearr_39631 = f__25459__auto__.call(null);
(statearr_39631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___39758);

return statearr_39631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(__39746,c__25458__auto___39758,G__39577_39747,n__11828__auto___39745,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39767 = (__39746 + (1));
__39746 = G__39767;
continue;
} else {
}
break;
}

var c__25458__auto___39768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___39768,jobs,results,process,async){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___39768,jobs,results,process,async){
return (function (state_39653){
var state_val_39654 = (state_39653[(1)]);
if((state_val_39654 === (9))){
var inst_39646 = (state_39653[(2)]);
var state_39653__$1 = (function (){var statearr_39655 = state_39653;
(statearr_39655[(7)] = inst_39646);

return statearr_39655;
})();
var statearr_39656_39769 = state_39653__$1;
(statearr_39656_39769[(2)] = null);

(statearr_39656_39769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (8))){
var inst_39639 = (state_39653[(8)]);
var inst_39644 = (state_39653[(2)]);
var state_39653__$1 = (function (){var statearr_39657 = state_39653;
(statearr_39657[(9)] = inst_39644);

return statearr_39657;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39653__$1,(9),results,inst_39639);
} else {
if((state_val_39654 === (7))){
var inst_39649 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
var statearr_39658_39770 = state_39653__$1;
(statearr_39658_39770[(2)] = inst_39649);

(statearr_39658_39770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (6))){
var inst_39639 = (state_39653[(8)]);
var inst_39634 = (state_39653[(10)]);
var inst_39639__$1 = cljs.core.async.chan.call(null,(1));
var inst_39640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39641 = [inst_39634,inst_39639__$1];
var inst_39642 = (new cljs.core.PersistentVector(null,2,(5),inst_39640,inst_39641,null));
var state_39653__$1 = (function (){var statearr_39659 = state_39653;
(statearr_39659[(8)] = inst_39639__$1);

return statearr_39659;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39653__$1,(8),jobs,inst_39642);
} else {
if((state_val_39654 === (5))){
var inst_39637 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39653__$1 = state_39653;
var statearr_39660_39771 = state_39653__$1;
(statearr_39660_39771[(2)] = inst_39637);

(statearr_39660_39771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (4))){
var inst_39634 = (state_39653[(10)]);
var inst_39634__$1 = (state_39653[(2)]);
var inst_39635 = (inst_39634__$1 == null);
var state_39653__$1 = (function (){var statearr_39661 = state_39653;
(statearr_39661[(10)] = inst_39634__$1);

return statearr_39661;
})();
if(cljs.core.truth_(inst_39635)){
var statearr_39662_39772 = state_39653__$1;
(statearr_39662_39772[(1)] = (5));

} else {
var statearr_39663_39773 = state_39653__$1;
(statearr_39663_39773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39654 === (3))){
var inst_39651 = (state_39653[(2)]);
var state_39653__$1 = state_39653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39653__$1,inst_39651);
} else {
if((state_val_39654 === (2))){
var state_39653__$1 = state_39653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39653__$1,(4),from);
} else {
if((state_val_39654 === (1))){
var state_39653__$1 = state_39653;
var statearr_39664_39774 = state_39653__$1;
(statearr_39664_39774[(2)] = null);

(statearr_39664_39774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___39768,jobs,results,process,async))
;
return ((function (switch__25402__auto__,c__25458__auto___39768,jobs,results,process,async){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39668[(0)] = state_machine__25403__auto__);

(statearr_39668[(1)] = (1));

return statearr_39668;
});
var state_machine__25403__auto____1 = (function (state_39653){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39669){if((e39669 instanceof Object)){
var ex__25406__auto__ = e39669;
var statearr_39670_39775 = state_39653;
(statearr_39670_39775[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39776 = state_39653;
state_39653 = G__39776;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39653){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___39768,jobs,results,process,async))
})();
var state__25460__auto__ = (function (){var statearr_39671 = f__25459__auto__.call(null);
(statearr_39671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___39768);

return statearr_39671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___39768,jobs,results,process,async))
);


var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__,jobs,results,process,async){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__,jobs,results,process,async){
return (function (state_39709){
var state_val_39710 = (state_39709[(1)]);
if((state_val_39710 === (7))){
var inst_39705 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
var statearr_39711_39777 = state_39709__$1;
(statearr_39711_39777[(2)] = inst_39705);

(statearr_39711_39777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (20))){
var state_39709__$1 = state_39709;
var statearr_39712_39778 = state_39709__$1;
(statearr_39712_39778[(2)] = null);

(statearr_39712_39778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (1))){
var state_39709__$1 = state_39709;
var statearr_39713_39779 = state_39709__$1;
(statearr_39713_39779[(2)] = null);

(statearr_39713_39779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (4))){
var inst_39674 = (state_39709[(7)]);
var inst_39674__$1 = (state_39709[(2)]);
var inst_39675 = (inst_39674__$1 == null);
var state_39709__$1 = (function (){var statearr_39714 = state_39709;
(statearr_39714[(7)] = inst_39674__$1);

return statearr_39714;
})();
if(cljs.core.truth_(inst_39675)){
var statearr_39715_39780 = state_39709__$1;
(statearr_39715_39780[(1)] = (5));

} else {
var statearr_39716_39781 = state_39709__$1;
(statearr_39716_39781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (15))){
var inst_39687 = (state_39709[(8)]);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39709__$1,(18),to,inst_39687);
} else {
if((state_val_39710 === (21))){
var inst_39700 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
var statearr_39717_39782 = state_39709__$1;
(statearr_39717_39782[(2)] = inst_39700);

(statearr_39717_39782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (13))){
var inst_39702 = (state_39709[(2)]);
var state_39709__$1 = (function (){var statearr_39718 = state_39709;
(statearr_39718[(9)] = inst_39702);

return statearr_39718;
})();
var statearr_39719_39783 = state_39709__$1;
(statearr_39719_39783[(2)] = null);

(statearr_39719_39783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (6))){
var inst_39674 = (state_39709[(7)]);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39709__$1,(11),inst_39674);
} else {
if((state_val_39710 === (17))){
var inst_39695 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
if(cljs.core.truth_(inst_39695)){
var statearr_39720_39784 = state_39709__$1;
(statearr_39720_39784[(1)] = (19));

} else {
var statearr_39721_39785 = state_39709__$1;
(statearr_39721_39785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (3))){
var inst_39707 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39709__$1,inst_39707);
} else {
if((state_val_39710 === (12))){
var inst_39684 = (state_39709[(10)]);
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39709__$1,(14),inst_39684);
} else {
if((state_val_39710 === (2))){
var state_39709__$1 = state_39709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39709__$1,(4),results);
} else {
if((state_val_39710 === (19))){
var state_39709__$1 = state_39709;
var statearr_39722_39786 = state_39709__$1;
(statearr_39722_39786[(2)] = null);

(statearr_39722_39786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (11))){
var inst_39684 = (state_39709[(2)]);
var state_39709__$1 = (function (){var statearr_39723 = state_39709;
(statearr_39723[(10)] = inst_39684);

return statearr_39723;
})();
var statearr_39724_39787 = state_39709__$1;
(statearr_39724_39787[(2)] = null);

(statearr_39724_39787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (9))){
var state_39709__$1 = state_39709;
var statearr_39725_39788 = state_39709__$1;
(statearr_39725_39788[(2)] = null);

(statearr_39725_39788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (5))){
var state_39709__$1 = state_39709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39726_39789 = state_39709__$1;
(statearr_39726_39789[(1)] = (8));

} else {
var statearr_39727_39790 = state_39709__$1;
(statearr_39727_39790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (14))){
var inst_39687 = (state_39709[(8)]);
var inst_39689 = (state_39709[(11)]);
var inst_39687__$1 = (state_39709[(2)]);
var inst_39688 = (inst_39687__$1 == null);
var inst_39689__$1 = cljs.core.not.call(null,inst_39688);
var state_39709__$1 = (function (){var statearr_39728 = state_39709;
(statearr_39728[(8)] = inst_39687__$1);

(statearr_39728[(11)] = inst_39689__$1);

return statearr_39728;
})();
if(inst_39689__$1){
var statearr_39729_39791 = state_39709__$1;
(statearr_39729_39791[(1)] = (15));

} else {
var statearr_39730_39792 = state_39709__$1;
(statearr_39730_39792[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (16))){
var inst_39689 = (state_39709[(11)]);
var state_39709__$1 = state_39709;
var statearr_39731_39793 = state_39709__$1;
(statearr_39731_39793[(2)] = inst_39689);

(statearr_39731_39793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (10))){
var inst_39681 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
var statearr_39732_39794 = state_39709__$1;
(statearr_39732_39794[(2)] = inst_39681);

(statearr_39732_39794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (18))){
var inst_39692 = (state_39709[(2)]);
var state_39709__$1 = state_39709;
var statearr_39733_39795 = state_39709__$1;
(statearr_39733_39795[(2)] = inst_39692);

(statearr_39733_39795[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39710 === (8))){
var inst_39678 = cljs.core.async.close_BANG_.call(null,to);
var state_39709__$1 = state_39709;
var statearr_39734_39796 = state_39709__$1;
(statearr_39734_39796[(2)] = inst_39678);

(statearr_39734_39796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto__,jobs,results,process,async))
;
return ((function (switch__25402__auto__,c__25458__auto__,jobs,results,process,async){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39738 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39738[(0)] = state_machine__25403__auto__);

(statearr_39738[(1)] = (1));

return statearr_39738;
});
var state_machine__25403__auto____1 = (function (state_39709){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39739){if((e39739 instanceof Object)){
var ex__25406__auto__ = e39739;
var statearr_39740_39797 = state_39709;
(statearr_39740_39797[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39798 = state_39709;
state_39709 = G__39798;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39709){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__,jobs,results,process,async))
})();
var state__25460__auto__ = (function (){var statearr_39741 = f__25459__auto__.call(null);
(statearr_39741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_39741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__,jobs,results,process,async))
);

return c__25458__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25458__auto___39899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___39899,tc,fc){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___39899,tc,fc){
return (function (state_39874){
var state_val_39875 = (state_39874[(1)]);
if((state_val_39875 === (7))){
var inst_39870 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39876_39900 = state_39874__$1;
(statearr_39876_39900[(2)] = inst_39870);

(statearr_39876_39900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (1))){
var state_39874__$1 = state_39874;
var statearr_39877_39901 = state_39874__$1;
(statearr_39877_39901[(2)] = null);

(statearr_39877_39901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (4))){
var inst_39851 = (state_39874[(7)]);
var inst_39851__$1 = (state_39874[(2)]);
var inst_39852 = (inst_39851__$1 == null);
var state_39874__$1 = (function (){var statearr_39878 = state_39874;
(statearr_39878[(7)] = inst_39851__$1);

return statearr_39878;
})();
if(cljs.core.truth_(inst_39852)){
var statearr_39879_39902 = state_39874__$1;
(statearr_39879_39902[(1)] = (5));

} else {
var statearr_39880_39903 = state_39874__$1;
(statearr_39880_39903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (13))){
var state_39874__$1 = state_39874;
var statearr_39881_39904 = state_39874__$1;
(statearr_39881_39904[(2)] = null);

(statearr_39881_39904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (6))){
var inst_39851 = (state_39874[(7)]);
var inst_39857 = p.call(null,inst_39851);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39857)){
var statearr_39882_39905 = state_39874__$1;
(statearr_39882_39905[(1)] = (9));

} else {
var statearr_39883_39906 = state_39874__$1;
(statearr_39883_39906[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (3))){
var inst_39872 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39874__$1,inst_39872);
} else {
if((state_val_39875 === (12))){
var state_39874__$1 = state_39874;
var statearr_39884_39907 = state_39874__$1;
(statearr_39884_39907[(2)] = null);

(statearr_39884_39907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (2))){
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39874__$1,(4),ch);
} else {
if((state_val_39875 === (11))){
var inst_39851 = (state_39874[(7)]);
var inst_39861 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39874__$1,(8),inst_39861,inst_39851);
} else {
if((state_val_39875 === (9))){
var state_39874__$1 = state_39874;
var statearr_39885_39908 = state_39874__$1;
(statearr_39885_39908[(2)] = tc);

(statearr_39885_39908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (5))){
var inst_39854 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39855 = cljs.core.async.close_BANG_.call(null,fc);
var state_39874__$1 = (function (){var statearr_39886 = state_39874;
(statearr_39886[(8)] = inst_39854);

return statearr_39886;
})();
var statearr_39887_39909 = state_39874__$1;
(statearr_39887_39909[(2)] = inst_39855);

(statearr_39887_39909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (14))){
var inst_39868 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39888_39910 = state_39874__$1;
(statearr_39888_39910[(2)] = inst_39868);

(statearr_39888_39910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (10))){
var state_39874__$1 = state_39874;
var statearr_39889_39911 = state_39874__$1;
(statearr_39889_39911[(2)] = fc);

(statearr_39889_39911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (8))){
var inst_39863 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39863)){
var statearr_39890_39912 = state_39874__$1;
(statearr_39890_39912[(1)] = (12));

} else {
var statearr_39891_39913 = state_39874__$1;
(statearr_39891_39913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___39899,tc,fc))
;
return ((function (switch__25402__auto__,c__25458__auto___39899,tc,fc){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39895 = [null,null,null,null,null,null,null,null,null];
(statearr_39895[(0)] = state_machine__25403__auto__);

(statearr_39895[(1)] = (1));

return statearr_39895;
});
var state_machine__25403__auto____1 = (function (state_39874){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39896){if((e39896 instanceof Object)){
var ex__25406__auto__ = e39896;
var statearr_39897_39914 = state_39874;
(statearr_39897_39914[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39915 = state_39874;
state_39874 = G__39915;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39874){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___39899,tc,fc))
})();
var state__25460__auto__ = (function (){var statearr_39898 = f__25459__auto__.call(null);
(statearr_39898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___39899);

return statearr_39898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___39899,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_39962){
var state_val_39963 = (state_39962[(1)]);
if((state_val_39963 === (7))){
var inst_39958 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_39964_39980 = state_39962__$1;
(statearr_39964_39980[(2)] = inst_39958);

(statearr_39964_39980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (6))){
var inst_39951 = (state_39962[(7)]);
var inst_39948 = (state_39962[(8)]);
var inst_39955 = f.call(null,inst_39948,inst_39951);
var inst_39948__$1 = inst_39955;
var state_39962__$1 = (function (){var statearr_39965 = state_39962;
(statearr_39965[(8)] = inst_39948__$1);

return statearr_39965;
})();
var statearr_39966_39981 = state_39962__$1;
(statearr_39966_39981[(2)] = null);

(statearr_39966_39981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (5))){
var inst_39948 = (state_39962[(8)]);
var state_39962__$1 = state_39962;
var statearr_39967_39982 = state_39962__$1;
(statearr_39967_39982[(2)] = inst_39948);

(statearr_39967_39982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (4))){
var inst_39951 = (state_39962[(7)]);
var inst_39951__$1 = (state_39962[(2)]);
var inst_39952 = (inst_39951__$1 == null);
var state_39962__$1 = (function (){var statearr_39968 = state_39962;
(statearr_39968[(7)] = inst_39951__$1);

return statearr_39968;
})();
if(cljs.core.truth_(inst_39952)){
var statearr_39969_39983 = state_39962__$1;
(statearr_39969_39983[(1)] = (5));

} else {
var statearr_39970_39984 = state_39962__$1;
(statearr_39970_39984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (3))){
var inst_39960 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39962__$1,inst_39960);
} else {
if((state_val_39963 === (2))){
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39962__$1,(4),ch);
} else {
if((state_val_39963 === (1))){
var inst_39948 = init;
var state_39962__$1 = (function (){var statearr_39971 = state_39962;
(statearr_39971[(8)] = inst_39948);

return statearr_39971;
})();
var statearr_39972_39985 = state_39962__$1;
(statearr_39972_39985[(2)] = null);

(statearr_39972_39985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25458__auto__))
;
return ((function (switch__25402__auto__,c__25458__auto__){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_39976 = [null,null,null,null,null,null,null,null,null];
(statearr_39976[(0)] = state_machine__25403__auto__);

(statearr_39976[(1)] = (1));

return statearr_39976;
});
var state_machine__25403__auto____1 = (function (state_39962){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_39962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e39977){if((e39977 instanceof Object)){
var ex__25406__auto__ = e39977;
var statearr_39978_39986 = state_39962;
(statearr_39978_39986[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39987 = state_39962;
state_39962 = G__39987;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_39962){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_39962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_39979 = f__25459__auto__.call(null);
(statearr_39979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_39979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_40061){
var state_val_40062 = (state_40061[(1)]);
if((state_val_40062 === (7))){
var inst_40043 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
var statearr_40063_40086 = state_40061__$1;
(statearr_40063_40086[(2)] = inst_40043);

(statearr_40063_40086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (1))){
var inst_40037 = cljs.core.seq.call(null,coll);
var inst_40038 = inst_40037;
var state_40061__$1 = (function (){var statearr_40064 = state_40061;
(statearr_40064[(7)] = inst_40038);

return statearr_40064;
})();
var statearr_40065_40087 = state_40061__$1;
(statearr_40065_40087[(2)] = null);

(statearr_40065_40087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (4))){
var inst_40038 = (state_40061[(7)]);
var inst_40041 = cljs.core.first.call(null,inst_40038);
var state_40061__$1 = state_40061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40061__$1,(7),ch,inst_40041);
} else {
if((state_val_40062 === (13))){
var inst_40055 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
var statearr_40066_40088 = state_40061__$1;
(statearr_40066_40088[(2)] = inst_40055);

(statearr_40066_40088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (6))){
var inst_40046 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
if(cljs.core.truth_(inst_40046)){
var statearr_40067_40089 = state_40061__$1;
(statearr_40067_40089[(1)] = (8));

} else {
var statearr_40068_40090 = state_40061__$1;
(statearr_40068_40090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (3))){
var inst_40059 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40061__$1,inst_40059);
} else {
if((state_val_40062 === (12))){
var state_40061__$1 = state_40061;
var statearr_40069_40091 = state_40061__$1;
(statearr_40069_40091[(2)] = null);

(statearr_40069_40091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (2))){
var inst_40038 = (state_40061[(7)]);
var state_40061__$1 = state_40061;
if(cljs.core.truth_(inst_40038)){
var statearr_40070_40092 = state_40061__$1;
(statearr_40070_40092[(1)] = (4));

} else {
var statearr_40071_40093 = state_40061__$1;
(statearr_40071_40093[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (11))){
var inst_40052 = cljs.core.async.close_BANG_.call(null,ch);
var state_40061__$1 = state_40061;
var statearr_40072_40094 = state_40061__$1;
(statearr_40072_40094[(2)] = inst_40052);

(statearr_40072_40094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (9))){
var state_40061__$1 = state_40061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40073_40095 = state_40061__$1;
(statearr_40073_40095[(1)] = (11));

} else {
var statearr_40074_40096 = state_40061__$1;
(statearr_40074_40096[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (5))){
var inst_40038 = (state_40061[(7)]);
var state_40061__$1 = state_40061;
var statearr_40075_40097 = state_40061__$1;
(statearr_40075_40097[(2)] = inst_40038);

(statearr_40075_40097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (10))){
var inst_40057 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
var statearr_40076_40098 = state_40061__$1;
(statearr_40076_40098[(2)] = inst_40057);

(statearr_40076_40098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (8))){
var inst_40038 = (state_40061[(7)]);
var inst_40048 = cljs.core.next.call(null,inst_40038);
var inst_40038__$1 = inst_40048;
var state_40061__$1 = (function (){var statearr_40077 = state_40061;
(statearr_40077[(7)] = inst_40038__$1);

return statearr_40077;
})();
var statearr_40078_40099 = state_40061__$1;
(statearr_40078_40099[(2)] = null);

(statearr_40078_40099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto__))
;
return ((function (switch__25402__auto__,c__25458__auto__){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_40082 = [null,null,null,null,null,null,null,null];
(statearr_40082[(0)] = state_machine__25403__auto__);

(statearr_40082[(1)] = (1));

return statearr_40082;
});
var state_machine__25403__auto____1 = (function (state_40061){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_40061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e40083){if((e40083 instanceof Object)){
var ex__25406__auto__ = e40083;
var statearr_40084_40100 = state_40061;
(statearr_40084_40100[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40101 = state_40061;
state_40061 = G__40101;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_40061){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_40061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_40085 = f__25459__auto__.call(null);
(statearr_40085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_40085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj40103 = {};
return obj40103;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__10929__auto__ = _;
if(and__10929__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__10929__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__11585__auto__ = (((_ == null))?null:_);
return (function (){var or__10941__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj40105 = {};
return obj40105;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t40327 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40327 = (function (cs,ch,mult,meta40328){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta40328 = meta40328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40327.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t40327.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t40327.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t40327.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t40327.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t40327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t40327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40329){
var self__ = this;
var _40329__$1 = this;
return self__.meta40328;
});})(cs))
;

cljs.core.async.t40327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40329,meta40328__$1){
var self__ = this;
var _40329__$1 = this;
return (new cljs.core.async.t40327(self__.cs,self__.ch,self__.mult,meta40328__$1));
});})(cs))
;

cljs.core.async.t40327.cljs$lang$type = true;

cljs.core.async.t40327.cljs$lang$ctorStr = "cljs.core.async/t40327";

cljs.core.async.t40327.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t40327");
});})(cs))
;

cljs.core.async.__GT_t40327 = ((function (cs){
return (function __GT_t40327(cs__$1,ch__$1,mult__$1,meta40328){
return (new cljs.core.async.t40327(cs__$1,ch__$1,mult__$1,meta40328));
});})(cs))
;

}

return (new cljs.core.async.t40327(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25458__auto___40548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___40548,cs,m,dchan,dctr,done){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___40548,cs,m,dchan,dctr,done){
return (function (state_40460){
var state_val_40461 = (state_40460[(1)]);
if((state_val_40461 === (7))){
var inst_40456 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40462_40549 = state_40460__$1;
(statearr_40462_40549[(2)] = inst_40456);

(statearr_40462_40549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (20))){
var inst_40361 = (state_40460[(7)]);
var inst_40371 = cljs.core.first.call(null,inst_40361);
var inst_40372 = cljs.core.nth.call(null,inst_40371,(0),null);
var inst_40373 = cljs.core.nth.call(null,inst_40371,(1),null);
var state_40460__$1 = (function (){var statearr_40463 = state_40460;
(statearr_40463[(8)] = inst_40372);

return statearr_40463;
})();
if(cljs.core.truth_(inst_40373)){
var statearr_40464_40550 = state_40460__$1;
(statearr_40464_40550[(1)] = (22));

} else {
var statearr_40465_40551 = state_40460__$1;
(statearr_40465_40551[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (27))){
var inst_40401 = (state_40460[(9)]);
var inst_40332 = (state_40460[(10)]);
var inst_40408 = (state_40460[(11)]);
var inst_40403 = (state_40460[(12)]);
var inst_40408__$1 = cljs.core._nth.call(null,inst_40401,inst_40403);
var inst_40409 = cljs.core.async.put_BANG_.call(null,inst_40408__$1,inst_40332,done);
var state_40460__$1 = (function (){var statearr_40466 = state_40460;
(statearr_40466[(11)] = inst_40408__$1);

return statearr_40466;
})();
if(cljs.core.truth_(inst_40409)){
var statearr_40467_40552 = state_40460__$1;
(statearr_40467_40552[(1)] = (30));

} else {
var statearr_40468_40553 = state_40460__$1;
(statearr_40468_40553[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (1))){
var state_40460__$1 = state_40460;
var statearr_40469_40554 = state_40460__$1;
(statearr_40469_40554[(2)] = null);

(statearr_40469_40554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (24))){
var inst_40361 = (state_40460[(7)]);
var inst_40378 = (state_40460[(2)]);
var inst_40379 = cljs.core.next.call(null,inst_40361);
var inst_40341 = inst_40379;
var inst_40342 = null;
var inst_40343 = (0);
var inst_40344 = (0);
var state_40460__$1 = (function (){var statearr_40470 = state_40460;
(statearr_40470[(13)] = inst_40341);

(statearr_40470[(14)] = inst_40378);

(statearr_40470[(15)] = inst_40343);

(statearr_40470[(16)] = inst_40344);

(statearr_40470[(17)] = inst_40342);

return statearr_40470;
})();
var statearr_40471_40555 = state_40460__$1;
(statearr_40471_40555[(2)] = null);

(statearr_40471_40555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (39))){
var state_40460__$1 = state_40460;
var statearr_40475_40556 = state_40460__$1;
(statearr_40475_40556[(2)] = null);

(statearr_40475_40556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (4))){
var inst_40332 = (state_40460[(10)]);
var inst_40332__$1 = (state_40460[(2)]);
var inst_40333 = (inst_40332__$1 == null);
var state_40460__$1 = (function (){var statearr_40476 = state_40460;
(statearr_40476[(10)] = inst_40332__$1);

return statearr_40476;
})();
if(cljs.core.truth_(inst_40333)){
var statearr_40477_40557 = state_40460__$1;
(statearr_40477_40557[(1)] = (5));

} else {
var statearr_40478_40558 = state_40460__$1;
(statearr_40478_40558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (15))){
var inst_40341 = (state_40460[(13)]);
var inst_40343 = (state_40460[(15)]);
var inst_40344 = (state_40460[(16)]);
var inst_40342 = (state_40460[(17)]);
var inst_40357 = (state_40460[(2)]);
var inst_40358 = (inst_40344 + (1));
var tmp40472 = inst_40341;
var tmp40473 = inst_40343;
var tmp40474 = inst_40342;
var inst_40341__$1 = tmp40472;
var inst_40342__$1 = tmp40474;
var inst_40343__$1 = tmp40473;
var inst_40344__$1 = inst_40358;
var state_40460__$1 = (function (){var statearr_40479 = state_40460;
(statearr_40479[(13)] = inst_40341__$1);

(statearr_40479[(18)] = inst_40357);

(statearr_40479[(15)] = inst_40343__$1);

(statearr_40479[(16)] = inst_40344__$1);

(statearr_40479[(17)] = inst_40342__$1);

return statearr_40479;
})();
var statearr_40480_40559 = state_40460__$1;
(statearr_40480_40559[(2)] = null);

(statearr_40480_40559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (21))){
var inst_40382 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40484_40560 = state_40460__$1;
(statearr_40484_40560[(2)] = inst_40382);

(statearr_40484_40560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (31))){
var inst_40408 = (state_40460[(11)]);
var inst_40412 = done.call(null,null);
var inst_40413 = cljs.core.async.untap_STAR_.call(null,m,inst_40408);
var state_40460__$1 = (function (){var statearr_40485 = state_40460;
(statearr_40485[(19)] = inst_40412);

return statearr_40485;
})();
var statearr_40486_40561 = state_40460__$1;
(statearr_40486_40561[(2)] = inst_40413);

(statearr_40486_40561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (32))){
var inst_40402 = (state_40460[(20)]);
var inst_40401 = (state_40460[(9)]);
var inst_40400 = (state_40460[(21)]);
var inst_40403 = (state_40460[(12)]);
var inst_40415 = (state_40460[(2)]);
var inst_40416 = (inst_40403 + (1));
var tmp40481 = inst_40402;
var tmp40482 = inst_40401;
var tmp40483 = inst_40400;
var inst_40400__$1 = tmp40483;
var inst_40401__$1 = tmp40482;
var inst_40402__$1 = tmp40481;
var inst_40403__$1 = inst_40416;
var state_40460__$1 = (function (){var statearr_40487 = state_40460;
(statearr_40487[(20)] = inst_40402__$1);

(statearr_40487[(9)] = inst_40401__$1);

(statearr_40487[(22)] = inst_40415);

(statearr_40487[(21)] = inst_40400__$1);

(statearr_40487[(12)] = inst_40403__$1);

return statearr_40487;
})();
var statearr_40488_40562 = state_40460__$1;
(statearr_40488_40562[(2)] = null);

(statearr_40488_40562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (40))){
var inst_40428 = (state_40460[(23)]);
var inst_40432 = done.call(null,null);
var inst_40433 = cljs.core.async.untap_STAR_.call(null,m,inst_40428);
var state_40460__$1 = (function (){var statearr_40489 = state_40460;
(statearr_40489[(24)] = inst_40432);

return statearr_40489;
})();
var statearr_40490_40563 = state_40460__$1;
(statearr_40490_40563[(2)] = inst_40433);

(statearr_40490_40563[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (33))){
var inst_40419 = (state_40460[(25)]);
var inst_40421 = cljs.core.chunked_seq_QMARK_.call(null,inst_40419);
var state_40460__$1 = state_40460;
if(inst_40421){
var statearr_40491_40564 = state_40460__$1;
(statearr_40491_40564[(1)] = (36));

} else {
var statearr_40492_40565 = state_40460__$1;
(statearr_40492_40565[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (13))){
var inst_40351 = (state_40460[(26)]);
var inst_40354 = cljs.core.async.close_BANG_.call(null,inst_40351);
var state_40460__$1 = state_40460;
var statearr_40493_40566 = state_40460__$1;
(statearr_40493_40566[(2)] = inst_40354);

(statearr_40493_40566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (22))){
var inst_40372 = (state_40460[(8)]);
var inst_40375 = cljs.core.async.close_BANG_.call(null,inst_40372);
var state_40460__$1 = state_40460;
var statearr_40494_40567 = state_40460__$1;
(statearr_40494_40567[(2)] = inst_40375);

(statearr_40494_40567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (36))){
var inst_40419 = (state_40460[(25)]);
var inst_40423 = cljs.core.chunk_first.call(null,inst_40419);
var inst_40424 = cljs.core.chunk_rest.call(null,inst_40419);
var inst_40425 = cljs.core.count.call(null,inst_40423);
var inst_40400 = inst_40424;
var inst_40401 = inst_40423;
var inst_40402 = inst_40425;
var inst_40403 = (0);
var state_40460__$1 = (function (){var statearr_40495 = state_40460;
(statearr_40495[(20)] = inst_40402);

(statearr_40495[(9)] = inst_40401);

(statearr_40495[(21)] = inst_40400);

(statearr_40495[(12)] = inst_40403);

return statearr_40495;
})();
var statearr_40496_40568 = state_40460__$1;
(statearr_40496_40568[(2)] = null);

(statearr_40496_40568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (41))){
var inst_40419 = (state_40460[(25)]);
var inst_40435 = (state_40460[(2)]);
var inst_40436 = cljs.core.next.call(null,inst_40419);
var inst_40400 = inst_40436;
var inst_40401 = null;
var inst_40402 = (0);
var inst_40403 = (0);
var state_40460__$1 = (function (){var statearr_40497 = state_40460;
(statearr_40497[(20)] = inst_40402);

(statearr_40497[(9)] = inst_40401);

(statearr_40497[(21)] = inst_40400);

(statearr_40497[(27)] = inst_40435);

(statearr_40497[(12)] = inst_40403);

return statearr_40497;
})();
var statearr_40498_40569 = state_40460__$1;
(statearr_40498_40569[(2)] = null);

(statearr_40498_40569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (43))){
var state_40460__$1 = state_40460;
var statearr_40499_40570 = state_40460__$1;
(statearr_40499_40570[(2)] = null);

(statearr_40499_40570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (29))){
var inst_40444 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40500_40571 = state_40460__$1;
(statearr_40500_40571[(2)] = inst_40444);

(statearr_40500_40571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (44))){
var inst_40453 = (state_40460[(2)]);
var state_40460__$1 = (function (){var statearr_40501 = state_40460;
(statearr_40501[(28)] = inst_40453);

return statearr_40501;
})();
var statearr_40502_40572 = state_40460__$1;
(statearr_40502_40572[(2)] = null);

(statearr_40502_40572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (6))){
var inst_40392 = (state_40460[(29)]);
var inst_40391 = cljs.core.deref.call(null,cs);
var inst_40392__$1 = cljs.core.keys.call(null,inst_40391);
var inst_40393 = cljs.core.count.call(null,inst_40392__$1);
var inst_40394 = cljs.core.reset_BANG_.call(null,dctr,inst_40393);
var inst_40399 = cljs.core.seq.call(null,inst_40392__$1);
var inst_40400 = inst_40399;
var inst_40401 = null;
var inst_40402 = (0);
var inst_40403 = (0);
var state_40460__$1 = (function (){var statearr_40503 = state_40460;
(statearr_40503[(20)] = inst_40402);

(statearr_40503[(29)] = inst_40392__$1);

(statearr_40503[(9)] = inst_40401);

(statearr_40503[(30)] = inst_40394);

(statearr_40503[(21)] = inst_40400);

(statearr_40503[(12)] = inst_40403);

return statearr_40503;
})();
var statearr_40504_40573 = state_40460__$1;
(statearr_40504_40573[(2)] = null);

(statearr_40504_40573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (28))){
var inst_40419 = (state_40460[(25)]);
var inst_40400 = (state_40460[(21)]);
var inst_40419__$1 = cljs.core.seq.call(null,inst_40400);
var state_40460__$1 = (function (){var statearr_40505 = state_40460;
(statearr_40505[(25)] = inst_40419__$1);

return statearr_40505;
})();
if(inst_40419__$1){
var statearr_40506_40574 = state_40460__$1;
(statearr_40506_40574[(1)] = (33));

} else {
var statearr_40507_40575 = state_40460__$1;
(statearr_40507_40575[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (25))){
var inst_40402 = (state_40460[(20)]);
var inst_40403 = (state_40460[(12)]);
var inst_40405 = (inst_40403 < inst_40402);
var inst_40406 = inst_40405;
var state_40460__$1 = state_40460;
if(cljs.core.truth_(inst_40406)){
var statearr_40508_40576 = state_40460__$1;
(statearr_40508_40576[(1)] = (27));

} else {
var statearr_40509_40577 = state_40460__$1;
(statearr_40509_40577[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (34))){
var state_40460__$1 = state_40460;
var statearr_40510_40578 = state_40460__$1;
(statearr_40510_40578[(2)] = null);

(statearr_40510_40578[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (17))){
var state_40460__$1 = state_40460;
var statearr_40511_40579 = state_40460__$1;
(statearr_40511_40579[(2)] = null);

(statearr_40511_40579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (3))){
var inst_40458 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40460__$1,inst_40458);
} else {
if((state_val_40461 === (12))){
var inst_40387 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40512_40580 = state_40460__$1;
(statearr_40512_40580[(2)] = inst_40387);

(statearr_40512_40580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (2))){
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40460__$1,(4),ch);
} else {
if((state_val_40461 === (23))){
var state_40460__$1 = state_40460;
var statearr_40513_40581 = state_40460__$1;
(statearr_40513_40581[(2)] = null);

(statearr_40513_40581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (35))){
var inst_40442 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40514_40582 = state_40460__$1;
(statearr_40514_40582[(2)] = inst_40442);

(statearr_40514_40582[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (19))){
var inst_40361 = (state_40460[(7)]);
var inst_40365 = cljs.core.chunk_first.call(null,inst_40361);
var inst_40366 = cljs.core.chunk_rest.call(null,inst_40361);
var inst_40367 = cljs.core.count.call(null,inst_40365);
var inst_40341 = inst_40366;
var inst_40342 = inst_40365;
var inst_40343 = inst_40367;
var inst_40344 = (0);
var state_40460__$1 = (function (){var statearr_40515 = state_40460;
(statearr_40515[(13)] = inst_40341);

(statearr_40515[(15)] = inst_40343);

(statearr_40515[(16)] = inst_40344);

(statearr_40515[(17)] = inst_40342);

return statearr_40515;
})();
var statearr_40516_40583 = state_40460__$1;
(statearr_40516_40583[(2)] = null);

(statearr_40516_40583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (11))){
var inst_40341 = (state_40460[(13)]);
var inst_40361 = (state_40460[(7)]);
var inst_40361__$1 = cljs.core.seq.call(null,inst_40341);
var state_40460__$1 = (function (){var statearr_40517 = state_40460;
(statearr_40517[(7)] = inst_40361__$1);

return statearr_40517;
})();
if(inst_40361__$1){
var statearr_40518_40584 = state_40460__$1;
(statearr_40518_40584[(1)] = (16));

} else {
var statearr_40519_40585 = state_40460__$1;
(statearr_40519_40585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (9))){
var inst_40389 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40520_40586 = state_40460__$1;
(statearr_40520_40586[(2)] = inst_40389);

(statearr_40520_40586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (5))){
var inst_40339 = cljs.core.deref.call(null,cs);
var inst_40340 = cljs.core.seq.call(null,inst_40339);
var inst_40341 = inst_40340;
var inst_40342 = null;
var inst_40343 = (0);
var inst_40344 = (0);
var state_40460__$1 = (function (){var statearr_40521 = state_40460;
(statearr_40521[(13)] = inst_40341);

(statearr_40521[(15)] = inst_40343);

(statearr_40521[(16)] = inst_40344);

(statearr_40521[(17)] = inst_40342);

return statearr_40521;
})();
var statearr_40522_40587 = state_40460__$1;
(statearr_40522_40587[(2)] = null);

(statearr_40522_40587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (14))){
var state_40460__$1 = state_40460;
var statearr_40523_40588 = state_40460__$1;
(statearr_40523_40588[(2)] = null);

(statearr_40523_40588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (45))){
var inst_40450 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40524_40589 = state_40460__$1;
(statearr_40524_40589[(2)] = inst_40450);

(statearr_40524_40589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (26))){
var inst_40392 = (state_40460[(29)]);
var inst_40446 = (state_40460[(2)]);
var inst_40447 = cljs.core.seq.call(null,inst_40392);
var state_40460__$1 = (function (){var statearr_40525 = state_40460;
(statearr_40525[(31)] = inst_40446);

return statearr_40525;
})();
if(inst_40447){
var statearr_40526_40590 = state_40460__$1;
(statearr_40526_40590[(1)] = (42));

} else {
var statearr_40527_40591 = state_40460__$1;
(statearr_40527_40591[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (16))){
var inst_40361 = (state_40460[(7)]);
var inst_40363 = cljs.core.chunked_seq_QMARK_.call(null,inst_40361);
var state_40460__$1 = state_40460;
if(inst_40363){
var statearr_40528_40592 = state_40460__$1;
(statearr_40528_40592[(1)] = (19));

} else {
var statearr_40529_40593 = state_40460__$1;
(statearr_40529_40593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (38))){
var inst_40439 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40530_40594 = state_40460__$1;
(statearr_40530_40594[(2)] = inst_40439);

(statearr_40530_40594[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (30))){
var state_40460__$1 = state_40460;
var statearr_40531_40595 = state_40460__$1;
(statearr_40531_40595[(2)] = null);

(statearr_40531_40595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (10))){
var inst_40344 = (state_40460[(16)]);
var inst_40342 = (state_40460[(17)]);
var inst_40350 = cljs.core._nth.call(null,inst_40342,inst_40344);
var inst_40351 = cljs.core.nth.call(null,inst_40350,(0),null);
var inst_40352 = cljs.core.nth.call(null,inst_40350,(1),null);
var state_40460__$1 = (function (){var statearr_40532 = state_40460;
(statearr_40532[(26)] = inst_40351);

return statearr_40532;
})();
if(cljs.core.truth_(inst_40352)){
var statearr_40533_40596 = state_40460__$1;
(statearr_40533_40596[(1)] = (13));

} else {
var statearr_40534_40597 = state_40460__$1;
(statearr_40534_40597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (18))){
var inst_40385 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40535_40598 = state_40460__$1;
(statearr_40535_40598[(2)] = inst_40385);

(statearr_40535_40598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (42))){
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40460__$1,(45),dchan);
} else {
if((state_val_40461 === (37))){
var inst_40428 = (state_40460[(23)]);
var inst_40419 = (state_40460[(25)]);
var inst_40332 = (state_40460[(10)]);
var inst_40428__$1 = cljs.core.first.call(null,inst_40419);
var inst_40429 = cljs.core.async.put_BANG_.call(null,inst_40428__$1,inst_40332,done);
var state_40460__$1 = (function (){var statearr_40536 = state_40460;
(statearr_40536[(23)] = inst_40428__$1);

return statearr_40536;
})();
if(cljs.core.truth_(inst_40429)){
var statearr_40537_40599 = state_40460__$1;
(statearr_40537_40599[(1)] = (39));

} else {
var statearr_40538_40600 = state_40460__$1;
(statearr_40538_40600[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (8))){
var inst_40343 = (state_40460[(15)]);
var inst_40344 = (state_40460[(16)]);
var inst_40346 = (inst_40344 < inst_40343);
var inst_40347 = inst_40346;
var state_40460__$1 = state_40460;
if(cljs.core.truth_(inst_40347)){
var statearr_40539_40601 = state_40460__$1;
(statearr_40539_40601[(1)] = (10));

} else {
var statearr_40540_40602 = state_40460__$1;
(statearr_40540_40602[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___40548,cs,m,dchan,dctr,done))
;
return ((function (switch__25402__auto__,c__25458__auto___40548,cs,m,dchan,dctr,done){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_40544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40544[(0)] = state_machine__25403__auto__);

(statearr_40544[(1)] = (1));

return statearr_40544;
});
var state_machine__25403__auto____1 = (function (state_40460){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_40460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e40545){if((e40545 instanceof Object)){
var ex__25406__auto__ = e40545;
var statearr_40546_40603 = state_40460;
(statearr_40546_40603[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40604 = state_40460;
state_40460 = G__40604;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_40460){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_40460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___40548,cs,m,dchan,dctr,done))
})();
var state__25460__auto__ = (function (){var statearr_40547 = f__25459__auto__.call(null);
(statearr_40547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___40548);

return statearr_40547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___40548,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj40606 = {};
return obj40606;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__10929__auto__ = m;
if(and__10929__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__11585__auto__ = (((m == null))?null:m);
return (function (){var or__10941__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__40607){
var map__40612 = p__40607;
var map__40612__$1 = ((cljs.core.seq_QMARK_.call(null,map__40612))?cljs.core.apply.call(null,cljs.core.hash_map,map__40612):map__40612);
var opts = map__40612__$1;
var statearr_40613_40616 = state;
(statearr_40613_40616[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__40612,map__40612__$1,opts){
return (function (val){
var statearr_40614_40617 = state;
(statearr_40614_40617[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40612,map__40612__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_40615_40618 = state;
(statearr_40615_40618[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__40607 = null;
if (arguments.length > 3) {
var G__40619__i = 0, G__40619__a = new Array(arguments.length -  3);
while (G__40619__i < G__40619__a.length) {G__40619__a[G__40619__i] = arguments[G__40619__i + 3]; ++G__40619__i;}
  p__40607 = new cljs.core.IndexedSeq(G__40619__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__40607);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__40620){
var state = cljs.core.first(arglist__40620);
arglist__40620 = cljs.core.next(arglist__40620);
var cont_block = cljs.core.first(arglist__40620);
arglist__40620 = cljs.core.next(arglist__40620);
var ports = cljs.core.first(arglist__40620);
var p__40607 = cljs.core.rest(arglist__40620);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__40607);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t40740 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40740 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40741){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40741 = meta40741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40740.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t40740.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t40740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40742){
var self__ = this;
var _40742__$1 = this;
return self__.meta40741;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40742,meta40741__$1){
var self__ = this;
var _40742__$1 = this;
return (new cljs.core.async.t40740(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40741__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t40740.cljs$lang$type = true;

cljs.core.async.t40740.cljs$lang$ctorStr = "cljs.core.async/t40740";

cljs.core.async.t40740.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t40740");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t40740 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t40740(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40741){
return (new cljs.core.async.t40740(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40741));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t40740(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25458__auto___40859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___40859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___40859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40812){
var state_val_40813 = (state_40812[(1)]);
if((state_val_40813 === (7))){
var inst_40756 = (state_40812[(7)]);
var inst_40761 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40756);
var state_40812__$1 = state_40812;
var statearr_40814_40860 = state_40812__$1;
(statearr_40814_40860[(2)] = inst_40761);

(statearr_40814_40860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (20))){
var inst_40771 = (state_40812[(8)]);
var state_40812__$1 = state_40812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40812__$1,(23),out,inst_40771);
} else {
if((state_val_40813 === (1))){
var inst_40746 = (state_40812[(9)]);
var inst_40746__$1 = calc_state.call(null);
var inst_40747 = cljs.core.seq_QMARK_.call(null,inst_40746__$1);
var state_40812__$1 = (function (){var statearr_40815 = state_40812;
(statearr_40815[(9)] = inst_40746__$1);

return statearr_40815;
})();
if(inst_40747){
var statearr_40816_40861 = state_40812__$1;
(statearr_40816_40861[(1)] = (2));

} else {
var statearr_40817_40862 = state_40812__$1;
(statearr_40817_40862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (24))){
var inst_40764 = (state_40812[(10)]);
var inst_40756 = inst_40764;
var state_40812__$1 = (function (){var statearr_40818 = state_40812;
(statearr_40818[(7)] = inst_40756);

return statearr_40818;
})();
var statearr_40819_40863 = state_40812__$1;
(statearr_40819_40863[(2)] = null);

(statearr_40819_40863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (4))){
var inst_40746 = (state_40812[(9)]);
var inst_40752 = (state_40812[(2)]);
var inst_40753 = cljs.core.get.call(null,inst_40752,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40754 = cljs.core.get.call(null,inst_40752,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40755 = cljs.core.get.call(null,inst_40752,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40756 = inst_40746;
var state_40812__$1 = (function (){var statearr_40820 = state_40812;
(statearr_40820[(7)] = inst_40756);

(statearr_40820[(11)] = inst_40753);

(statearr_40820[(12)] = inst_40755);

(statearr_40820[(13)] = inst_40754);

return statearr_40820;
})();
var statearr_40821_40864 = state_40812__$1;
(statearr_40821_40864[(2)] = null);

(statearr_40821_40864[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (15))){
var state_40812__$1 = state_40812;
var statearr_40822_40865 = state_40812__$1;
(statearr_40822_40865[(2)] = null);

(statearr_40822_40865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (21))){
var inst_40764 = (state_40812[(10)]);
var inst_40756 = inst_40764;
var state_40812__$1 = (function (){var statearr_40823 = state_40812;
(statearr_40823[(7)] = inst_40756);

return statearr_40823;
})();
var statearr_40824_40866 = state_40812__$1;
(statearr_40824_40866[(2)] = null);

(statearr_40824_40866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (13))){
var inst_40808 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
var statearr_40825_40867 = state_40812__$1;
(statearr_40825_40867[(2)] = inst_40808);

(statearr_40825_40867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (22))){
var inst_40806 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
var statearr_40826_40868 = state_40812__$1;
(statearr_40826_40868[(2)] = inst_40806);

(statearr_40826_40868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (6))){
var inst_40810 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40812__$1,inst_40810);
} else {
if((state_val_40813 === (25))){
var state_40812__$1 = state_40812;
var statearr_40827_40869 = state_40812__$1;
(statearr_40827_40869[(2)] = null);

(statearr_40827_40869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (17))){
var inst_40786 = (state_40812[(14)]);
var state_40812__$1 = state_40812;
var statearr_40828_40870 = state_40812__$1;
(statearr_40828_40870[(2)] = inst_40786);

(statearr_40828_40870[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (3))){
var inst_40746 = (state_40812[(9)]);
var state_40812__$1 = state_40812;
var statearr_40829_40871 = state_40812__$1;
(statearr_40829_40871[(2)] = inst_40746);

(statearr_40829_40871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (12))){
var inst_40786 = (state_40812[(14)]);
var inst_40772 = (state_40812[(15)]);
var inst_40767 = (state_40812[(16)]);
var inst_40786__$1 = inst_40767.call(null,inst_40772);
var state_40812__$1 = (function (){var statearr_40830 = state_40812;
(statearr_40830[(14)] = inst_40786__$1);

return statearr_40830;
})();
if(cljs.core.truth_(inst_40786__$1)){
var statearr_40831_40872 = state_40812__$1;
(statearr_40831_40872[(1)] = (17));

} else {
var statearr_40832_40873 = state_40812__$1;
(statearr_40832_40873[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (2))){
var inst_40746 = (state_40812[(9)]);
var inst_40749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40746);
var state_40812__$1 = state_40812;
var statearr_40833_40874 = state_40812__$1;
(statearr_40833_40874[(2)] = inst_40749);

(statearr_40833_40874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (23))){
var inst_40797 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
if(cljs.core.truth_(inst_40797)){
var statearr_40834_40875 = state_40812__$1;
(statearr_40834_40875[(1)] = (24));

} else {
var statearr_40835_40876 = state_40812__$1;
(statearr_40835_40876[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (19))){
var inst_40794 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
if(cljs.core.truth_(inst_40794)){
var statearr_40836_40877 = state_40812__$1;
(statearr_40836_40877[(1)] = (20));

} else {
var statearr_40837_40878 = state_40812__$1;
(statearr_40837_40878[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (11))){
var inst_40771 = (state_40812[(8)]);
var inst_40777 = (inst_40771 == null);
var state_40812__$1 = state_40812;
if(cljs.core.truth_(inst_40777)){
var statearr_40838_40879 = state_40812__$1;
(statearr_40838_40879[(1)] = (14));

} else {
var statearr_40839_40880 = state_40812__$1;
(statearr_40839_40880[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (9))){
var inst_40764 = (state_40812[(10)]);
var inst_40764__$1 = (state_40812[(2)]);
var inst_40765 = cljs.core.get.call(null,inst_40764__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40766 = cljs.core.get.call(null,inst_40764__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40767 = cljs.core.get.call(null,inst_40764__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_40812__$1 = (function (){var statearr_40840 = state_40812;
(statearr_40840[(17)] = inst_40766);

(statearr_40840[(10)] = inst_40764__$1);

(statearr_40840[(16)] = inst_40767);

return statearr_40840;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40812__$1,(10),inst_40765);
} else {
if((state_val_40813 === (5))){
var inst_40756 = (state_40812[(7)]);
var inst_40759 = cljs.core.seq_QMARK_.call(null,inst_40756);
var state_40812__$1 = state_40812;
if(inst_40759){
var statearr_40841_40881 = state_40812__$1;
(statearr_40841_40881[(1)] = (7));

} else {
var statearr_40842_40882 = state_40812__$1;
(statearr_40842_40882[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (14))){
var inst_40772 = (state_40812[(15)]);
var inst_40779 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40772);
var state_40812__$1 = state_40812;
var statearr_40843_40883 = state_40812__$1;
(statearr_40843_40883[(2)] = inst_40779);

(statearr_40843_40883[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (26))){
var inst_40802 = (state_40812[(2)]);
var state_40812__$1 = state_40812;
var statearr_40844_40884 = state_40812__$1;
(statearr_40844_40884[(2)] = inst_40802);

(statearr_40844_40884[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (16))){
var inst_40782 = (state_40812[(2)]);
var inst_40783 = calc_state.call(null);
var inst_40756 = inst_40783;
var state_40812__$1 = (function (){var statearr_40845 = state_40812;
(statearr_40845[(7)] = inst_40756);

(statearr_40845[(18)] = inst_40782);

return statearr_40845;
})();
var statearr_40846_40885 = state_40812__$1;
(statearr_40846_40885[(2)] = null);

(statearr_40846_40885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (10))){
var inst_40771 = (state_40812[(8)]);
var inst_40772 = (state_40812[(15)]);
var inst_40770 = (state_40812[(2)]);
var inst_40771__$1 = cljs.core.nth.call(null,inst_40770,(0),null);
var inst_40772__$1 = cljs.core.nth.call(null,inst_40770,(1),null);
var inst_40773 = (inst_40771__$1 == null);
var inst_40774 = cljs.core._EQ_.call(null,inst_40772__$1,change);
var inst_40775 = (inst_40773) || (inst_40774);
var state_40812__$1 = (function (){var statearr_40847 = state_40812;
(statearr_40847[(8)] = inst_40771__$1);

(statearr_40847[(15)] = inst_40772__$1);

return statearr_40847;
})();
if(cljs.core.truth_(inst_40775)){
var statearr_40848_40886 = state_40812__$1;
(statearr_40848_40886[(1)] = (11));

} else {
var statearr_40849_40887 = state_40812__$1;
(statearr_40849_40887[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (18))){
var inst_40766 = (state_40812[(17)]);
var inst_40772 = (state_40812[(15)]);
var inst_40767 = (state_40812[(16)]);
var inst_40789 = cljs.core.empty_QMARK_.call(null,inst_40767);
var inst_40790 = inst_40766.call(null,inst_40772);
var inst_40791 = cljs.core.not.call(null,inst_40790);
var inst_40792 = (inst_40789) && (inst_40791);
var state_40812__$1 = state_40812;
var statearr_40850_40888 = state_40812__$1;
(statearr_40850_40888[(2)] = inst_40792);

(statearr_40850_40888[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40813 === (8))){
var inst_40756 = (state_40812[(7)]);
var state_40812__$1 = state_40812;
var statearr_40851_40889 = state_40812__$1;
(statearr_40851_40889[(2)] = inst_40756);

(statearr_40851_40889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___40859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25402__auto__,c__25458__auto___40859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_40855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40855[(0)] = state_machine__25403__auto__);

(statearr_40855[(1)] = (1));

return statearr_40855;
});
var state_machine__25403__auto____1 = (function (state_40812){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_40812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e40856){if((e40856 instanceof Object)){
var ex__25406__auto__ = e40856;
var statearr_40857_40890 = state_40812;
(statearr_40857_40890[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40891 = state_40812;
state_40812 = G__40891;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_40812){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_40812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___40859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25460__auto__ = (function (){var statearr_40858 = f__25459__auto__.call(null);
(statearr_40858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___40859);

return statearr_40858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___40859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj40893 = {};
return obj40893;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__10929__auto__ = p;
if(and__10929__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__10929__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__11585__auto__ = (((p == null))?null:p);
return (function (){var or__10941__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__10929__auto__ = p;
if(and__10929__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__10929__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__11585__auto__ = (((p == null))?null:p);
return (function (){var or__10941__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__10929__auto__ = p;
if(and__10929__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__10929__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__11585__auto__ = (((p == null))?null:p);
return (function (){var or__10941__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__10929__auto__ = p;
if(and__10929__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__11585__auto__ = (((p == null))?null:p);
return (function (){var or__10941__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__10941__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10941__auto__,mults){
return (function (p1__40894_SHARP_){
if(cljs.core.truth_(p1__40894_SHARP_.call(null,topic))){
return p1__40894_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40894_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10941__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t41017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41017 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta41018){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta41018 = meta41018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41017.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t41017.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t41017.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4406__auto__)){
var m = temp__4406__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t41017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t41017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t41017.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t41017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41019){
var self__ = this;
var _41019__$1 = this;
return self__.meta41018;
});})(mults,ensure_mult))
;

cljs.core.async.t41017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41019,meta41018__$1){
var self__ = this;
var _41019__$1 = this;
return (new cljs.core.async.t41017(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta41018__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t41017.cljs$lang$type = true;

cljs.core.async.t41017.cljs$lang$ctorStr = "cljs.core.async/t41017";

cljs.core.async.t41017.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t41017");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t41017 = ((function (mults,ensure_mult){
return (function __GT_t41017(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41018){
return (new cljs.core.async.t41017(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta41018));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t41017(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25458__auto___41139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___41139,mults,ensure_mult,p){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___41139,mults,ensure_mult,p){
return (function (state_41091){
var state_val_41092 = (state_41091[(1)]);
if((state_val_41092 === (7))){
var inst_41087 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
var statearr_41093_41140 = state_41091__$1;
(statearr_41093_41140[(2)] = inst_41087);

(statearr_41093_41140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (20))){
var state_41091__$1 = state_41091;
var statearr_41094_41141 = state_41091__$1;
(statearr_41094_41141[(2)] = null);

(statearr_41094_41141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (1))){
var state_41091__$1 = state_41091;
var statearr_41095_41142 = state_41091__$1;
(statearr_41095_41142[(2)] = null);

(statearr_41095_41142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (24))){
var inst_41070 = (state_41091[(7)]);
var inst_41079 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41070);
var state_41091__$1 = state_41091;
var statearr_41096_41143 = state_41091__$1;
(statearr_41096_41143[(2)] = inst_41079);

(statearr_41096_41143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (4))){
var inst_41022 = (state_41091[(8)]);
var inst_41022__$1 = (state_41091[(2)]);
var inst_41023 = (inst_41022__$1 == null);
var state_41091__$1 = (function (){var statearr_41097 = state_41091;
(statearr_41097[(8)] = inst_41022__$1);

return statearr_41097;
})();
if(cljs.core.truth_(inst_41023)){
var statearr_41098_41144 = state_41091__$1;
(statearr_41098_41144[(1)] = (5));

} else {
var statearr_41099_41145 = state_41091__$1;
(statearr_41099_41145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (15))){
var inst_41064 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
var statearr_41100_41146 = state_41091__$1;
(statearr_41100_41146[(2)] = inst_41064);

(statearr_41100_41146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (21))){
var inst_41084 = (state_41091[(2)]);
var state_41091__$1 = (function (){var statearr_41101 = state_41091;
(statearr_41101[(9)] = inst_41084);

return statearr_41101;
})();
var statearr_41102_41147 = state_41091__$1;
(statearr_41102_41147[(2)] = null);

(statearr_41102_41147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (13))){
var inst_41046 = (state_41091[(10)]);
var inst_41048 = cljs.core.chunked_seq_QMARK_.call(null,inst_41046);
var state_41091__$1 = state_41091;
if(inst_41048){
var statearr_41103_41148 = state_41091__$1;
(statearr_41103_41148[(1)] = (16));

} else {
var statearr_41104_41149 = state_41091__$1;
(statearr_41104_41149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (22))){
var inst_41076 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
if(cljs.core.truth_(inst_41076)){
var statearr_41105_41150 = state_41091__$1;
(statearr_41105_41150[(1)] = (23));

} else {
var statearr_41106_41151 = state_41091__$1;
(statearr_41106_41151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (6))){
var inst_41070 = (state_41091[(7)]);
var inst_41072 = (state_41091[(11)]);
var inst_41022 = (state_41091[(8)]);
var inst_41070__$1 = topic_fn.call(null,inst_41022);
var inst_41071 = cljs.core.deref.call(null,mults);
var inst_41072__$1 = cljs.core.get.call(null,inst_41071,inst_41070__$1);
var state_41091__$1 = (function (){var statearr_41107 = state_41091;
(statearr_41107[(7)] = inst_41070__$1);

(statearr_41107[(11)] = inst_41072__$1);

return statearr_41107;
})();
if(cljs.core.truth_(inst_41072__$1)){
var statearr_41108_41152 = state_41091__$1;
(statearr_41108_41152[(1)] = (19));

} else {
var statearr_41109_41153 = state_41091__$1;
(statearr_41109_41153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (25))){
var inst_41081 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
var statearr_41110_41154 = state_41091__$1;
(statearr_41110_41154[(2)] = inst_41081);

(statearr_41110_41154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (17))){
var inst_41046 = (state_41091[(10)]);
var inst_41055 = cljs.core.first.call(null,inst_41046);
var inst_41056 = cljs.core.async.muxch_STAR_.call(null,inst_41055);
var inst_41057 = cljs.core.async.close_BANG_.call(null,inst_41056);
var inst_41058 = cljs.core.next.call(null,inst_41046);
var inst_41032 = inst_41058;
var inst_41033 = null;
var inst_41034 = (0);
var inst_41035 = (0);
var state_41091__$1 = (function (){var statearr_41111 = state_41091;
(statearr_41111[(12)] = inst_41057);

(statearr_41111[(13)] = inst_41035);

(statearr_41111[(14)] = inst_41033);

(statearr_41111[(15)] = inst_41032);

(statearr_41111[(16)] = inst_41034);

return statearr_41111;
})();
var statearr_41112_41155 = state_41091__$1;
(statearr_41112_41155[(2)] = null);

(statearr_41112_41155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (3))){
var inst_41089 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41091__$1,inst_41089);
} else {
if((state_val_41092 === (12))){
var inst_41066 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
var statearr_41113_41156 = state_41091__$1;
(statearr_41113_41156[(2)] = inst_41066);

(statearr_41113_41156[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (2))){
var state_41091__$1 = state_41091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41091__$1,(4),ch);
} else {
if((state_val_41092 === (23))){
var state_41091__$1 = state_41091;
var statearr_41114_41157 = state_41091__$1;
(statearr_41114_41157[(2)] = null);

(statearr_41114_41157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (19))){
var inst_41072 = (state_41091[(11)]);
var inst_41022 = (state_41091[(8)]);
var inst_41074 = cljs.core.async.muxch_STAR_.call(null,inst_41072);
var state_41091__$1 = state_41091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41091__$1,(22),inst_41074,inst_41022);
} else {
if((state_val_41092 === (11))){
var inst_41032 = (state_41091[(15)]);
var inst_41046 = (state_41091[(10)]);
var inst_41046__$1 = cljs.core.seq.call(null,inst_41032);
var state_41091__$1 = (function (){var statearr_41115 = state_41091;
(statearr_41115[(10)] = inst_41046__$1);

return statearr_41115;
})();
if(inst_41046__$1){
var statearr_41116_41158 = state_41091__$1;
(statearr_41116_41158[(1)] = (13));

} else {
var statearr_41117_41159 = state_41091__$1;
(statearr_41117_41159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (9))){
var inst_41068 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
var statearr_41118_41160 = state_41091__$1;
(statearr_41118_41160[(2)] = inst_41068);

(statearr_41118_41160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (5))){
var inst_41029 = cljs.core.deref.call(null,mults);
var inst_41030 = cljs.core.vals.call(null,inst_41029);
var inst_41031 = cljs.core.seq.call(null,inst_41030);
var inst_41032 = inst_41031;
var inst_41033 = null;
var inst_41034 = (0);
var inst_41035 = (0);
var state_41091__$1 = (function (){var statearr_41119 = state_41091;
(statearr_41119[(13)] = inst_41035);

(statearr_41119[(14)] = inst_41033);

(statearr_41119[(15)] = inst_41032);

(statearr_41119[(16)] = inst_41034);

return statearr_41119;
})();
var statearr_41120_41161 = state_41091__$1;
(statearr_41120_41161[(2)] = null);

(statearr_41120_41161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (14))){
var state_41091__$1 = state_41091;
var statearr_41124_41162 = state_41091__$1;
(statearr_41124_41162[(2)] = null);

(statearr_41124_41162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (16))){
var inst_41046 = (state_41091[(10)]);
var inst_41050 = cljs.core.chunk_first.call(null,inst_41046);
var inst_41051 = cljs.core.chunk_rest.call(null,inst_41046);
var inst_41052 = cljs.core.count.call(null,inst_41050);
var inst_41032 = inst_41051;
var inst_41033 = inst_41050;
var inst_41034 = inst_41052;
var inst_41035 = (0);
var state_41091__$1 = (function (){var statearr_41125 = state_41091;
(statearr_41125[(13)] = inst_41035);

(statearr_41125[(14)] = inst_41033);

(statearr_41125[(15)] = inst_41032);

(statearr_41125[(16)] = inst_41034);

return statearr_41125;
})();
var statearr_41126_41163 = state_41091__$1;
(statearr_41126_41163[(2)] = null);

(statearr_41126_41163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (10))){
var inst_41035 = (state_41091[(13)]);
var inst_41033 = (state_41091[(14)]);
var inst_41032 = (state_41091[(15)]);
var inst_41034 = (state_41091[(16)]);
var inst_41040 = cljs.core._nth.call(null,inst_41033,inst_41035);
var inst_41041 = cljs.core.async.muxch_STAR_.call(null,inst_41040);
var inst_41042 = cljs.core.async.close_BANG_.call(null,inst_41041);
var inst_41043 = (inst_41035 + (1));
var tmp41121 = inst_41033;
var tmp41122 = inst_41032;
var tmp41123 = inst_41034;
var inst_41032__$1 = tmp41122;
var inst_41033__$1 = tmp41121;
var inst_41034__$1 = tmp41123;
var inst_41035__$1 = inst_41043;
var state_41091__$1 = (function (){var statearr_41127 = state_41091;
(statearr_41127[(17)] = inst_41042);

(statearr_41127[(13)] = inst_41035__$1);

(statearr_41127[(14)] = inst_41033__$1);

(statearr_41127[(15)] = inst_41032__$1);

(statearr_41127[(16)] = inst_41034__$1);

return statearr_41127;
})();
var statearr_41128_41164 = state_41091__$1;
(statearr_41128_41164[(2)] = null);

(statearr_41128_41164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (18))){
var inst_41061 = (state_41091[(2)]);
var state_41091__$1 = state_41091;
var statearr_41129_41165 = state_41091__$1;
(statearr_41129_41165[(2)] = inst_41061);

(statearr_41129_41165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41092 === (8))){
var inst_41035 = (state_41091[(13)]);
var inst_41034 = (state_41091[(16)]);
var inst_41037 = (inst_41035 < inst_41034);
var inst_41038 = inst_41037;
var state_41091__$1 = state_41091;
if(cljs.core.truth_(inst_41038)){
var statearr_41130_41166 = state_41091__$1;
(statearr_41130_41166[(1)] = (10));

} else {
var statearr_41131_41167 = state_41091__$1;
(statearr_41131_41167[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___41139,mults,ensure_mult,p))
;
return ((function (switch__25402__auto__,c__25458__auto___41139,mults,ensure_mult,p){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41135[(0)] = state_machine__25403__auto__);

(statearr_41135[(1)] = (1));

return statearr_41135;
});
var state_machine__25403__auto____1 = (function (state_41091){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41136){if((e41136 instanceof Object)){
var ex__25406__auto__ = e41136;
var statearr_41137_41168 = state_41091;
(statearr_41137_41168[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41169 = state_41091;
state_41091 = G__41169;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41091){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___41139,mults,ensure_mult,p))
})();
var state__25460__auto__ = (function (){var statearr_41138 = f__25459__auto__.call(null);
(statearr_41138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___41139);

return statearr_41138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___41139,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25458__auto___41306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___41306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___41306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41276){
var state_val_41277 = (state_41276[(1)]);
if((state_val_41277 === (7))){
var state_41276__$1 = state_41276;
var statearr_41278_41307 = state_41276__$1;
(statearr_41278_41307[(2)] = null);

(statearr_41278_41307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (1))){
var state_41276__$1 = state_41276;
var statearr_41279_41308 = state_41276__$1;
(statearr_41279_41308[(2)] = null);

(statearr_41279_41308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (4))){
var inst_41240 = (state_41276[(7)]);
var inst_41242 = (inst_41240 < cnt);
var state_41276__$1 = state_41276;
if(cljs.core.truth_(inst_41242)){
var statearr_41280_41309 = state_41276__$1;
(statearr_41280_41309[(1)] = (6));

} else {
var statearr_41281_41310 = state_41276__$1;
(statearr_41281_41310[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (15))){
var inst_41272 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41282_41311 = state_41276__$1;
(statearr_41282_41311[(2)] = inst_41272);

(statearr_41282_41311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (13))){
var inst_41265 = cljs.core.async.close_BANG_.call(null,out);
var state_41276__$1 = state_41276;
var statearr_41283_41312 = state_41276__$1;
(statearr_41283_41312[(2)] = inst_41265);

(statearr_41283_41312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (6))){
var state_41276__$1 = state_41276;
var statearr_41284_41313 = state_41276__$1;
(statearr_41284_41313[(2)] = null);

(statearr_41284_41313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (3))){
var inst_41274 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41276__$1,inst_41274);
} else {
if((state_val_41277 === (12))){
var inst_41262 = (state_41276[(8)]);
var inst_41262__$1 = (state_41276[(2)]);
var inst_41263 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41262__$1);
var state_41276__$1 = (function (){var statearr_41285 = state_41276;
(statearr_41285[(8)] = inst_41262__$1);

return statearr_41285;
})();
if(cljs.core.truth_(inst_41263)){
var statearr_41286_41314 = state_41276__$1;
(statearr_41286_41314[(1)] = (13));

} else {
var statearr_41287_41315 = state_41276__$1;
(statearr_41287_41315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (2))){
var inst_41239 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41240 = (0);
var state_41276__$1 = (function (){var statearr_41288 = state_41276;
(statearr_41288[(9)] = inst_41239);

(statearr_41288[(7)] = inst_41240);

return statearr_41288;
})();
var statearr_41289_41316 = state_41276__$1;
(statearr_41289_41316[(2)] = null);

(statearr_41289_41316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (11))){
var inst_41240 = (state_41276[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41276,(10),Object,null,(9));
var inst_41249 = chs__$1.call(null,inst_41240);
var inst_41250 = done.call(null,inst_41240);
var inst_41251 = cljs.core.async.take_BANG_.call(null,inst_41249,inst_41250);
var state_41276__$1 = state_41276;
var statearr_41290_41317 = state_41276__$1;
(statearr_41290_41317[(2)] = inst_41251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (9))){
var inst_41240 = (state_41276[(7)]);
var inst_41253 = (state_41276[(2)]);
var inst_41254 = (inst_41240 + (1));
var inst_41240__$1 = inst_41254;
var state_41276__$1 = (function (){var statearr_41291 = state_41276;
(statearr_41291[(7)] = inst_41240__$1);

(statearr_41291[(10)] = inst_41253);

return statearr_41291;
})();
var statearr_41292_41318 = state_41276__$1;
(statearr_41292_41318[(2)] = null);

(statearr_41292_41318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (5))){
var inst_41260 = (state_41276[(2)]);
var state_41276__$1 = (function (){var statearr_41293 = state_41276;
(statearr_41293[(11)] = inst_41260);

return statearr_41293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41276__$1,(12),dchan);
} else {
if((state_val_41277 === (14))){
var inst_41262 = (state_41276[(8)]);
var inst_41267 = cljs.core.apply.call(null,f,inst_41262);
var state_41276__$1 = state_41276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41276__$1,(16),out,inst_41267);
} else {
if((state_val_41277 === (16))){
var inst_41269 = (state_41276[(2)]);
var state_41276__$1 = (function (){var statearr_41294 = state_41276;
(statearr_41294[(12)] = inst_41269);

return statearr_41294;
})();
var statearr_41295_41319 = state_41276__$1;
(statearr_41295_41319[(2)] = null);

(statearr_41295_41319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (10))){
var inst_41244 = (state_41276[(2)]);
var inst_41245 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41276__$1 = (function (){var statearr_41296 = state_41276;
(statearr_41296[(13)] = inst_41244);

return statearr_41296;
})();
var statearr_41297_41320 = state_41276__$1;
(statearr_41297_41320[(2)] = inst_41245);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41277 === (8))){
var inst_41258 = (state_41276[(2)]);
var state_41276__$1 = state_41276;
var statearr_41298_41321 = state_41276__$1;
(statearr_41298_41321[(2)] = inst_41258);

(statearr_41298_41321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___41306,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25402__auto__,c__25458__auto___41306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41302[(0)] = state_machine__25403__auto__);

(statearr_41302[(1)] = (1));

return statearr_41302;
});
var state_machine__25403__auto____1 = (function (state_41276){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41303){if((e41303 instanceof Object)){
var ex__25406__auto__ = e41303;
var statearr_41304_41322 = state_41276;
(statearr_41304_41322[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41323 = state_41276;
state_41276 = G__41323;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41276){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___41306,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25460__auto__ = (function (){var statearr_41305 = f__25459__auto__.call(null);
(statearr_41305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___41306);

return statearr_41305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___41306,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25458__auto___41431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___41431,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___41431,out){
return (function (state_41407){
var state_val_41408 = (state_41407[(1)]);
if((state_val_41408 === (7))){
var inst_41387 = (state_41407[(7)]);
var inst_41386 = (state_41407[(8)]);
var inst_41386__$1 = (state_41407[(2)]);
var inst_41387__$1 = cljs.core.nth.call(null,inst_41386__$1,(0),null);
var inst_41388 = cljs.core.nth.call(null,inst_41386__$1,(1),null);
var inst_41389 = (inst_41387__$1 == null);
var state_41407__$1 = (function (){var statearr_41409 = state_41407;
(statearr_41409[(7)] = inst_41387__$1);

(statearr_41409[(8)] = inst_41386__$1);

(statearr_41409[(9)] = inst_41388);

return statearr_41409;
})();
if(cljs.core.truth_(inst_41389)){
var statearr_41410_41432 = state_41407__$1;
(statearr_41410_41432[(1)] = (8));

} else {
var statearr_41411_41433 = state_41407__$1;
(statearr_41411_41433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (1))){
var inst_41378 = cljs.core.vec.call(null,chs);
var inst_41379 = inst_41378;
var state_41407__$1 = (function (){var statearr_41412 = state_41407;
(statearr_41412[(10)] = inst_41379);

return statearr_41412;
})();
var statearr_41413_41434 = state_41407__$1;
(statearr_41413_41434[(2)] = null);

(statearr_41413_41434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (4))){
var inst_41379 = (state_41407[(10)]);
var state_41407__$1 = state_41407;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41407__$1,(7),inst_41379);
} else {
if((state_val_41408 === (6))){
var inst_41403 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41414_41435 = state_41407__$1;
(statearr_41414_41435[(2)] = inst_41403);

(statearr_41414_41435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (3))){
var inst_41405 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41407__$1,inst_41405);
} else {
if((state_val_41408 === (2))){
var inst_41379 = (state_41407[(10)]);
var inst_41381 = cljs.core.count.call(null,inst_41379);
var inst_41382 = (inst_41381 > (0));
var state_41407__$1 = state_41407;
if(cljs.core.truth_(inst_41382)){
var statearr_41416_41436 = state_41407__$1;
(statearr_41416_41436[(1)] = (4));

} else {
var statearr_41417_41437 = state_41407__$1;
(statearr_41417_41437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (11))){
var inst_41379 = (state_41407[(10)]);
var inst_41396 = (state_41407[(2)]);
var tmp41415 = inst_41379;
var inst_41379__$1 = tmp41415;
var state_41407__$1 = (function (){var statearr_41418 = state_41407;
(statearr_41418[(10)] = inst_41379__$1);

(statearr_41418[(11)] = inst_41396);

return statearr_41418;
})();
var statearr_41419_41438 = state_41407__$1;
(statearr_41419_41438[(2)] = null);

(statearr_41419_41438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (9))){
var inst_41387 = (state_41407[(7)]);
var state_41407__$1 = state_41407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41407__$1,(11),out,inst_41387);
} else {
if((state_val_41408 === (5))){
var inst_41401 = cljs.core.async.close_BANG_.call(null,out);
var state_41407__$1 = state_41407;
var statearr_41420_41439 = state_41407__$1;
(statearr_41420_41439[(2)] = inst_41401);

(statearr_41420_41439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (10))){
var inst_41399 = (state_41407[(2)]);
var state_41407__$1 = state_41407;
var statearr_41421_41440 = state_41407__$1;
(statearr_41421_41440[(2)] = inst_41399);

(statearr_41421_41440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41408 === (8))){
var inst_41379 = (state_41407[(10)]);
var inst_41387 = (state_41407[(7)]);
var inst_41386 = (state_41407[(8)]);
var inst_41388 = (state_41407[(9)]);
var inst_41391 = (function (){var c = inst_41388;
var v = inst_41387;
var vec__41384 = inst_41386;
var cs = inst_41379;
return ((function (c,v,vec__41384,cs,inst_41379,inst_41387,inst_41386,inst_41388,state_val_41408,c__25458__auto___41431,out){
return (function (p1__41324_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41324_SHARP_);
});
;})(c,v,vec__41384,cs,inst_41379,inst_41387,inst_41386,inst_41388,state_val_41408,c__25458__auto___41431,out))
})();
var inst_41392 = cljs.core.filterv.call(null,inst_41391,inst_41379);
var inst_41379__$1 = inst_41392;
var state_41407__$1 = (function (){var statearr_41422 = state_41407;
(statearr_41422[(10)] = inst_41379__$1);

return statearr_41422;
})();
var statearr_41423_41441 = state_41407__$1;
(statearr_41423_41441[(2)] = null);

(statearr_41423_41441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___41431,out))
;
return ((function (switch__25402__auto__,c__25458__auto___41431,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41427 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41427[(0)] = state_machine__25403__auto__);

(statearr_41427[(1)] = (1));

return statearr_41427;
});
var state_machine__25403__auto____1 = (function (state_41407){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41428){if((e41428 instanceof Object)){
var ex__25406__auto__ = e41428;
var statearr_41429_41442 = state_41407;
(statearr_41429_41442[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41443 = state_41407;
state_41407 = G__41443;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41407){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___41431,out))
})();
var state__25460__auto__ = (function (){var statearr_41430 = f__25459__auto__.call(null);
(statearr_41430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___41431);

return statearr_41430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___41431,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25458__auto___41536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___41536,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___41536,out){
return (function (state_41513){
var state_val_41514 = (state_41513[(1)]);
if((state_val_41514 === (7))){
var inst_41495 = (state_41513[(7)]);
var inst_41495__$1 = (state_41513[(2)]);
var inst_41496 = (inst_41495__$1 == null);
var inst_41497 = cljs.core.not.call(null,inst_41496);
var state_41513__$1 = (function (){var statearr_41515 = state_41513;
(statearr_41515[(7)] = inst_41495__$1);

return statearr_41515;
})();
if(inst_41497){
var statearr_41516_41537 = state_41513__$1;
(statearr_41516_41537[(1)] = (8));

} else {
var statearr_41517_41538 = state_41513__$1;
(statearr_41517_41538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (1))){
var inst_41490 = (0);
var state_41513__$1 = (function (){var statearr_41518 = state_41513;
(statearr_41518[(8)] = inst_41490);

return statearr_41518;
})();
var statearr_41519_41539 = state_41513__$1;
(statearr_41519_41539[(2)] = null);

(statearr_41519_41539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (4))){
var state_41513__$1 = state_41513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41513__$1,(7),ch);
} else {
if((state_val_41514 === (6))){
var inst_41508 = (state_41513[(2)]);
var state_41513__$1 = state_41513;
var statearr_41520_41540 = state_41513__$1;
(statearr_41520_41540[(2)] = inst_41508);

(statearr_41520_41540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (3))){
var inst_41510 = (state_41513[(2)]);
var inst_41511 = cljs.core.async.close_BANG_.call(null,out);
var state_41513__$1 = (function (){var statearr_41521 = state_41513;
(statearr_41521[(9)] = inst_41510);

return statearr_41521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41513__$1,inst_41511);
} else {
if((state_val_41514 === (2))){
var inst_41490 = (state_41513[(8)]);
var inst_41492 = (inst_41490 < n);
var state_41513__$1 = state_41513;
if(cljs.core.truth_(inst_41492)){
var statearr_41522_41541 = state_41513__$1;
(statearr_41522_41541[(1)] = (4));

} else {
var statearr_41523_41542 = state_41513__$1;
(statearr_41523_41542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (11))){
var inst_41490 = (state_41513[(8)]);
var inst_41500 = (state_41513[(2)]);
var inst_41501 = (inst_41490 + (1));
var inst_41490__$1 = inst_41501;
var state_41513__$1 = (function (){var statearr_41524 = state_41513;
(statearr_41524[(10)] = inst_41500);

(statearr_41524[(8)] = inst_41490__$1);

return statearr_41524;
})();
var statearr_41525_41543 = state_41513__$1;
(statearr_41525_41543[(2)] = null);

(statearr_41525_41543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (9))){
var state_41513__$1 = state_41513;
var statearr_41526_41544 = state_41513__$1;
(statearr_41526_41544[(2)] = null);

(statearr_41526_41544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (5))){
var state_41513__$1 = state_41513;
var statearr_41527_41545 = state_41513__$1;
(statearr_41527_41545[(2)] = null);

(statearr_41527_41545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (10))){
var inst_41505 = (state_41513[(2)]);
var state_41513__$1 = state_41513;
var statearr_41528_41546 = state_41513__$1;
(statearr_41528_41546[(2)] = inst_41505);

(statearr_41528_41546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41514 === (8))){
var inst_41495 = (state_41513[(7)]);
var state_41513__$1 = state_41513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41513__$1,(11),out,inst_41495);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___41536,out))
;
return ((function (switch__25402__auto__,c__25458__auto___41536,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41532[(0)] = state_machine__25403__auto__);

(statearr_41532[(1)] = (1));

return statearr_41532;
});
var state_machine__25403__auto____1 = (function (state_41513){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41533){if((e41533 instanceof Object)){
var ex__25406__auto__ = e41533;
var statearr_41534_41547 = state_41513;
(statearr_41534_41547[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41548 = state_41513;
state_41513 = G__41548;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41513){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___41536,out))
})();
var state__25460__auto__ = (function (){var statearr_41535 = f__25459__auto__.call(null);
(statearr_41535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___41536);

return statearr_41535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___41536,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t41556 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41556 = (function (ch,f,map_LT_,meta41557){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41557 = meta41557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t41559 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41559 = (function (fn1,_,meta41557,map_LT_,f,ch,meta41560){
this.fn1 = fn1;
this._ = _;
this.meta41557 = meta41557;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41560 = meta41560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41559.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t41559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t41559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41549_SHARP_){
return f1.call(null,(((p1__41549_SHARP_ == null))?null:self__.f.call(null,p1__41549_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t41559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41561){
var self__ = this;
var _41561__$1 = this;
return self__.meta41560;
});})(___$1))
;

cljs.core.async.t41559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41561,meta41560__$1){
var self__ = this;
var _41561__$1 = this;
return (new cljs.core.async.t41559(self__.fn1,self__._,self__.meta41557,self__.map_LT_,self__.f,self__.ch,meta41560__$1));
});})(___$1))
;

cljs.core.async.t41559.cljs$lang$type = true;

cljs.core.async.t41559.cljs$lang$ctorStr = "cljs.core.async/t41559";

cljs.core.async.t41559.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t41559");
});})(___$1))
;

cljs.core.async.__GT_t41559 = ((function (___$1){
return (function __GT_t41559(fn1__$1,___$2,meta41557__$1,map_LT___$1,f__$1,ch__$1,meta41560){
return (new cljs.core.async.t41559(fn1__$1,___$2,meta41557__$1,map_LT___$1,f__$1,ch__$1,meta41560));
});})(___$1))
;

}

return (new cljs.core.async.t41559(fn1,___$1,self__.meta41557,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__10929__auto__ = ret;
if(cljs.core.truth_(and__10929__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__10929__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t41556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t41556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41558){
var self__ = this;
var _41558__$1 = this;
return self__.meta41557;
});

cljs.core.async.t41556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41558,meta41557__$1){
var self__ = this;
var _41558__$1 = this;
return (new cljs.core.async.t41556(self__.ch,self__.f,self__.map_LT_,meta41557__$1));
});

cljs.core.async.t41556.cljs$lang$type = true;

cljs.core.async.t41556.cljs$lang$ctorStr = "cljs.core.async/t41556";

cljs.core.async.t41556.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t41556");
});

cljs.core.async.__GT_t41556 = (function __GT_t41556(ch__$1,f__$1,map_LT___$1,meta41557){
return (new cljs.core.async.t41556(ch__$1,f__$1,map_LT___$1,meta41557));
});

}

return (new cljs.core.async.t41556(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t41565 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41565 = (function (ch,f,map_GT_,meta41566){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41566 = meta41566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t41565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t41565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t41565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t41565.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t41565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t41565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41567){
var self__ = this;
var _41567__$1 = this;
return self__.meta41566;
});

cljs.core.async.t41565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41567,meta41566__$1){
var self__ = this;
var _41567__$1 = this;
return (new cljs.core.async.t41565(self__.ch,self__.f,self__.map_GT_,meta41566__$1));
});

cljs.core.async.t41565.cljs$lang$type = true;

cljs.core.async.t41565.cljs$lang$ctorStr = "cljs.core.async/t41565";

cljs.core.async.t41565.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t41565");
});

cljs.core.async.__GT_t41565 = (function __GT_t41565(ch__$1,f__$1,map_GT___$1,meta41566){
return (new cljs.core.async.t41565(ch__$1,f__$1,map_GT___$1,meta41566));
});

}

return (new cljs.core.async.t41565(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t41571 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41571 = (function (ch,p,filter_GT_,meta41572){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41572 = meta41572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t41571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t41571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41573){
var self__ = this;
var _41573__$1 = this;
return self__.meta41572;
});

cljs.core.async.t41571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41573,meta41572__$1){
var self__ = this;
var _41573__$1 = this;
return (new cljs.core.async.t41571(self__.ch,self__.p,self__.filter_GT_,meta41572__$1));
});

cljs.core.async.t41571.cljs$lang$type = true;

cljs.core.async.t41571.cljs$lang$ctorStr = "cljs.core.async/t41571";

cljs.core.async.t41571.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"cljs.core.async/t41571");
});

cljs.core.async.__GT_t41571 = (function __GT_t41571(ch__$1,p__$1,filter_GT___$1,meta41572){
return (new cljs.core.async.t41571(ch__$1,p__$1,filter_GT___$1,meta41572));
});

}

return (new cljs.core.async.t41571(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25458__auto___41656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___41656,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___41656,out){
return (function (state_41635){
var state_val_41636 = (state_41635[(1)]);
if((state_val_41636 === (7))){
var inst_41631 = (state_41635[(2)]);
var state_41635__$1 = state_41635;
var statearr_41637_41657 = state_41635__$1;
(statearr_41637_41657[(2)] = inst_41631);

(statearr_41637_41657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (1))){
var state_41635__$1 = state_41635;
var statearr_41638_41658 = state_41635__$1;
(statearr_41638_41658[(2)] = null);

(statearr_41638_41658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (4))){
var inst_41617 = (state_41635[(7)]);
var inst_41617__$1 = (state_41635[(2)]);
var inst_41618 = (inst_41617__$1 == null);
var state_41635__$1 = (function (){var statearr_41639 = state_41635;
(statearr_41639[(7)] = inst_41617__$1);

return statearr_41639;
})();
if(cljs.core.truth_(inst_41618)){
var statearr_41640_41659 = state_41635__$1;
(statearr_41640_41659[(1)] = (5));

} else {
var statearr_41641_41660 = state_41635__$1;
(statearr_41641_41660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (6))){
var inst_41617 = (state_41635[(7)]);
var inst_41622 = p.call(null,inst_41617);
var state_41635__$1 = state_41635;
if(cljs.core.truth_(inst_41622)){
var statearr_41642_41661 = state_41635__$1;
(statearr_41642_41661[(1)] = (8));

} else {
var statearr_41643_41662 = state_41635__$1;
(statearr_41643_41662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (3))){
var inst_41633 = (state_41635[(2)]);
var state_41635__$1 = state_41635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41635__$1,inst_41633);
} else {
if((state_val_41636 === (2))){
var state_41635__$1 = state_41635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41635__$1,(4),ch);
} else {
if((state_val_41636 === (11))){
var inst_41625 = (state_41635[(2)]);
var state_41635__$1 = state_41635;
var statearr_41644_41663 = state_41635__$1;
(statearr_41644_41663[(2)] = inst_41625);

(statearr_41644_41663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (9))){
var state_41635__$1 = state_41635;
var statearr_41645_41664 = state_41635__$1;
(statearr_41645_41664[(2)] = null);

(statearr_41645_41664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (5))){
var inst_41620 = cljs.core.async.close_BANG_.call(null,out);
var state_41635__$1 = state_41635;
var statearr_41646_41665 = state_41635__$1;
(statearr_41646_41665[(2)] = inst_41620);

(statearr_41646_41665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (10))){
var inst_41628 = (state_41635[(2)]);
var state_41635__$1 = (function (){var statearr_41647 = state_41635;
(statearr_41647[(8)] = inst_41628);

return statearr_41647;
})();
var statearr_41648_41666 = state_41635__$1;
(statearr_41648_41666[(2)] = null);

(statearr_41648_41666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (8))){
var inst_41617 = (state_41635[(7)]);
var state_41635__$1 = state_41635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41635__$1,(11),out,inst_41617);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___41656,out))
;
return ((function (switch__25402__auto__,c__25458__auto___41656,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41652 = [null,null,null,null,null,null,null,null,null];
(statearr_41652[(0)] = state_machine__25403__auto__);

(statearr_41652[(1)] = (1));

return statearr_41652;
});
var state_machine__25403__auto____1 = (function (state_41635){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41653){if((e41653 instanceof Object)){
var ex__25406__auto__ = e41653;
var statearr_41654_41667 = state_41635;
(statearr_41654_41667[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41668 = state_41635;
state_41635 = G__41668;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41635){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___41656,out))
})();
var state__25460__auto__ = (function (){var statearr_41655 = f__25459__auto__.call(null);
(statearr_41655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___41656);

return statearr_41655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___41656,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__25458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto__){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto__){
return (function (state_41834){
var state_val_41835 = (state_41834[(1)]);
if((state_val_41835 === (7))){
var inst_41830 = (state_41834[(2)]);
var state_41834__$1 = state_41834;
var statearr_41836_41877 = state_41834__$1;
(statearr_41836_41877[(2)] = inst_41830);

(statearr_41836_41877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (20))){
var inst_41800 = (state_41834[(7)]);
var inst_41811 = (state_41834[(2)]);
var inst_41812 = cljs.core.next.call(null,inst_41800);
var inst_41786 = inst_41812;
var inst_41787 = null;
var inst_41788 = (0);
var inst_41789 = (0);
var state_41834__$1 = (function (){var statearr_41837 = state_41834;
(statearr_41837[(8)] = inst_41811);

(statearr_41837[(9)] = inst_41787);

(statearr_41837[(10)] = inst_41786);

(statearr_41837[(11)] = inst_41788);

(statearr_41837[(12)] = inst_41789);

return statearr_41837;
})();
var statearr_41838_41878 = state_41834__$1;
(statearr_41838_41878[(2)] = null);

(statearr_41838_41878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (1))){
var state_41834__$1 = state_41834;
var statearr_41839_41879 = state_41834__$1;
(statearr_41839_41879[(2)] = null);

(statearr_41839_41879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (4))){
var inst_41775 = (state_41834[(13)]);
var inst_41775__$1 = (state_41834[(2)]);
var inst_41776 = (inst_41775__$1 == null);
var state_41834__$1 = (function (){var statearr_41840 = state_41834;
(statearr_41840[(13)] = inst_41775__$1);

return statearr_41840;
})();
if(cljs.core.truth_(inst_41776)){
var statearr_41841_41880 = state_41834__$1;
(statearr_41841_41880[(1)] = (5));

} else {
var statearr_41842_41881 = state_41834__$1;
(statearr_41842_41881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (15))){
var state_41834__$1 = state_41834;
var statearr_41846_41882 = state_41834__$1;
(statearr_41846_41882[(2)] = null);

(statearr_41846_41882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (21))){
var state_41834__$1 = state_41834;
var statearr_41847_41883 = state_41834__$1;
(statearr_41847_41883[(2)] = null);

(statearr_41847_41883[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (13))){
var inst_41787 = (state_41834[(9)]);
var inst_41786 = (state_41834[(10)]);
var inst_41788 = (state_41834[(11)]);
var inst_41789 = (state_41834[(12)]);
var inst_41796 = (state_41834[(2)]);
var inst_41797 = (inst_41789 + (1));
var tmp41843 = inst_41787;
var tmp41844 = inst_41786;
var tmp41845 = inst_41788;
var inst_41786__$1 = tmp41844;
var inst_41787__$1 = tmp41843;
var inst_41788__$1 = tmp41845;
var inst_41789__$1 = inst_41797;
var state_41834__$1 = (function (){var statearr_41848 = state_41834;
(statearr_41848[(9)] = inst_41787__$1);

(statearr_41848[(10)] = inst_41786__$1);

(statearr_41848[(11)] = inst_41788__$1);

(statearr_41848[(12)] = inst_41789__$1);

(statearr_41848[(14)] = inst_41796);

return statearr_41848;
})();
var statearr_41849_41884 = state_41834__$1;
(statearr_41849_41884[(2)] = null);

(statearr_41849_41884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (22))){
var state_41834__$1 = state_41834;
var statearr_41850_41885 = state_41834__$1;
(statearr_41850_41885[(2)] = null);

(statearr_41850_41885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (6))){
var inst_41775 = (state_41834[(13)]);
var inst_41784 = f.call(null,inst_41775);
var inst_41785 = cljs.core.seq.call(null,inst_41784);
var inst_41786 = inst_41785;
var inst_41787 = null;
var inst_41788 = (0);
var inst_41789 = (0);
var state_41834__$1 = (function (){var statearr_41851 = state_41834;
(statearr_41851[(9)] = inst_41787);

(statearr_41851[(10)] = inst_41786);

(statearr_41851[(11)] = inst_41788);

(statearr_41851[(12)] = inst_41789);

return statearr_41851;
})();
var statearr_41852_41886 = state_41834__$1;
(statearr_41852_41886[(2)] = null);

(statearr_41852_41886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (17))){
var inst_41800 = (state_41834[(7)]);
var inst_41804 = cljs.core.chunk_first.call(null,inst_41800);
var inst_41805 = cljs.core.chunk_rest.call(null,inst_41800);
var inst_41806 = cljs.core.count.call(null,inst_41804);
var inst_41786 = inst_41805;
var inst_41787 = inst_41804;
var inst_41788 = inst_41806;
var inst_41789 = (0);
var state_41834__$1 = (function (){var statearr_41853 = state_41834;
(statearr_41853[(9)] = inst_41787);

(statearr_41853[(10)] = inst_41786);

(statearr_41853[(11)] = inst_41788);

(statearr_41853[(12)] = inst_41789);

return statearr_41853;
})();
var statearr_41854_41887 = state_41834__$1;
(statearr_41854_41887[(2)] = null);

(statearr_41854_41887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (3))){
var inst_41832 = (state_41834[(2)]);
var state_41834__$1 = state_41834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41834__$1,inst_41832);
} else {
if((state_val_41835 === (12))){
var inst_41820 = (state_41834[(2)]);
var state_41834__$1 = state_41834;
var statearr_41855_41888 = state_41834__$1;
(statearr_41855_41888[(2)] = inst_41820);

(statearr_41855_41888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (2))){
var state_41834__$1 = state_41834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41834__$1,(4),in$);
} else {
if((state_val_41835 === (23))){
var inst_41828 = (state_41834[(2)]);
var state_41834__$1 = state_41834;
var statearr_41856_41889 = state_41834__$1;
(statearr_41856_41889[(2)] = inst_41828);

(statearr_41856_41889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (19))){
var inst_41815 = (state_41834[(2)]);
var state_41834__$1 = state_41834;
var statearr_41857_41890 = state_41834__$1;
(statearr_41857_41890[(2)] = inst_41815);

(statearr_41857_41890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (11))){
var inst_41786 = (state_41834[(10)]);
var inst_41800 = (state_41834[(7)]);
var inst_41800__$1 = cljs.core.seq.call(null,inst_41786);
var state_41834__$1 = (function (){var statearr_41858 = state_41834;
(statearr_41858[(7)] = inst_41800__$1);

return statearr_41858;
})();
if(inst_41800__$1){
var statearr_41859_41891 = state_41834__$1;
(statearr_41859_41891[(1)] = (14));

} else {
var statearr_41860_41892 = state_41834__$1;
(statearr_41860_41892[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (9))){
var inst_41822 = (state_41834[(2)]);
var inst_41823 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41834__$1 = (function (){var statearr_41861 = state_41834;
(statearr_41861[(15)] = inst_41822);

return statearr_41861;
})();
if(cljs.core.truth_(inst_41823)){
var statearr_41862_41893 = state_41834__$1;
(statearr_41862_41893[(1)] = (21));

} else {
var statearr_41863_41894 = state_41834__$1;
(statearr_41863_41894[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (5))){
var inst_41778 = cljs.core.async.close_BANG_.call(null,out);
var state_41834__$1 = state_41834;
var statearr_41864_41895 = state_41834__$1;
(statearr_41864_41895[(2)] = inst_41778);

(statearr_41864_41895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (14))){
var inst_41800 = (state_41834[(7)]);
var inst_41802 = cljs.core.chunked_seq_QMARK_.call(null,inst_41800);
var state_41834__$1 = state_41834;
if(inst_41802){
var statearr_41865_41896 = state_41834__$1;
(statearr_41865_41896[(1)] = (17));

} else {
var statearr_41866_41897 = state_41834__$1;
(statearr_41866_41897[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (16))){
var inst_41818 = (state_41834[(2)]);
var state_41834__$1 = state_41834;
var statearr_41867_41898 = state_41834__$1;
(statearr_41867_41898[(2)] = inst_41818);

(statearr_41867_41898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41835 === (10))){
var inst_41787 = (state_41834[(9)]);
var inst_41789 = (state_41834[(12)]);
var inst_41794 = cljs.core._nth.call(null,inst_41787,inst_41789);
var state_41834__$1 = state_41834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41834__$1,(13),out,inst_41794);
} else {
if((state_val_41835 === (18))){
var inst_41800 = (state_41834[(7)]);
var inst_41809 = cljs.core.first.call(null,inst_41800);
var state_41834__$1 = state_41834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41834__$1,(20),out,inst_41809);
} else {
if((state_val_41835 === (8))){
var inst_41788 = (state_41834[(11)]);
var inst_41789 = (state_41834[(12)]);
var inst_41791 = (inst_41789 < inst_41788);
var inst_41792 = inst_41791;
var state_41834__$1 = state_41834;
if(cljs.core.truth_(inst_41792)){
var statearr_41868_41899 = state_41834__$1;
(statearr_41868_41899[(1)] = (10));

} else {
var statearr_41869_41900 = state_41834__$1;
(statearr_41869_41900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto__))
;
return ((function (switch__25402__auto__,c__25458__auto__){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41873[(0)] = state_machine__25403__auto__);

(statearr_41873[(1)] = (1));

return statearr_41873;
});
var state_machine__25403__auto____1 = (function (state_41834){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41874){if((e41874 instanceof Object)){
var ex__25406__auto__ = e41874;
var statearr_41875_41901 = state_41834;
(statearr_41875_41901[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41902 = state_41834;
state_41834 = G__41902;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41834){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto__))
})();
var state__25460__auto__ = (function (){var statearr_41876 = f__25459__auto__.call(null);
(statearr_41876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto__);

return statearr_41876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto__))
);

return c__25458__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25458__auto___41999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___41999,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___41999,out){
return (function (state_41974){
var state_val_41975 = (state_41974[(1)]);
if((state_val_41975 === (7))){
var inst_41969 = (state_41974[(2)]);
var state_41974__$1 = state_41974;
var statearr_41976_42000 = state_41974__$1;
(statearr_41976_42000[(2)] = inst_41969);

(statearr_41976_42000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (1))){
var inst_41951 = null;
var state_41974__$1 = (function (){var statearr_41977 = state_41974;
(statearr_41977[(7)] = inst_41951);

return statearr_41977;
})();
var statearr_41978_42001 = state_41974__$1;
(statearr_41978_42001[(2)] = null);

(statearr_41978_42001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (4))){
var inst_41954 = (state_41974[(8)]);
var inst_41954__$1 = (state_41974[(2)]);
var inst_41955 = (inst_41954__$1 == null);
var inst_41956 = cljs.core.not.call(null,inst_41955);
var state_41974__$1 = (function (){var statearr_41979 = state_41974;
(statearr_41979[(8)] = inst_41954__$1);

return statearr_41979;
})();
if(inst_41956){
var statearr_41980_42002 = state_41974__$1;
(statearr_41980_42002[(1)] = (5));

} else {
var statearr_41981_42003 = state_41974__$1;
(statearr_41981_42003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (6))){
var state_41974__$1 = state_41974;
var statearr_41982_42004 = state_41974__$1;
(statearr_41982_42004[(2)] = null);

(statearr_41982_42004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (3))){
var inst_41971 = (state_41974[(2)]);
var inst_41972 = cljs.core.async.close_BANG_.call(null,out);
var state_41974__$1 = (function (){var statearr_41983 = state_41974;
(statearr_41983[(9)] = inst_41971);

return statearr_41983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41974__$1,inst_41972);
} else {
if((state_val_41975 === (2))){
var state_41974__$1 = state_41974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41974__$1,(4),ch);
} else {
if((state_val_41975 === (11))){
var inst_41954 = (state_41974[(8)]);
var inst_41963 = (state_41974[(2)]);
var inst_41951 = inst_41954;
var state_41974__$1 = (function (){var statearr_41984 = state_41974;
(statearr_41984[(7)] = inst_41951);

(statearr_41984[(10)] = inst_41963);

return statearr_41984;
})();
var statearr_41985_42005 = state_41974__$1;
(statearr_41985_42005[(2)] = null);

(statearr_41985_42005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (9))){
var inst_41954 = (state_41974[(8)]);
var state_41974__$1 = state_41974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41974__$1,(11),out,inst_41954);
} else {
if((state_val_41975 === (5))){
var inst_41951 = (state_41974[(7)]);
var inst_41954 = (state_41974[(8)]);
var inst_41958 = cljs.core._EQ_.call(null,inst_41954,inst_41951);
var state_41974__$1 = state_41974;
if(inst_41958){
var statearr_41987_42006 = state_41974__$1;
(statearr_41987_42006[(1)] = (8));

} else {
var statearr_41988_42007 = state_41974__$1;
(statearr_41988_42007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (10))){
var inst_41966 = (state_41974[(2)]);
var state_41974__$1 = state_41974;
var statearr_41989_42008 = state_41974__$1;
(statearr_41989_42008[(2)] = inst_41966);

(statearr_41989_42008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (8))){
var inst_41951 = (state_41974[(7)]);
var tmp41986 = inst_41951;
var inst_41951__$1 = tmp41986;
var state_41974__$1 = (function (){var statearr_41990 = state_41974;
(statearr_41990[(7)] = inst_41951__$1);

return statearr_41990;
})();
var statearr_41991_42009 = state_41974__$1;
(statearr_41991_42009[(2)] = null);

(statearr_41991_42009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___41999,out))
;
return ((function (switch__25402__auto__,c__25458__auto___41999,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_41995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41995[(0)] = state_machine__25403__auto__);

(statearr_41995[(1)] = (1));

return statearr_41995;
});
var state_machine__25403__auto____1 = (function (state_41974){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_41974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e41996){if((e41996 instanceof Object)){
var ex__25406__auto__ = e41996;
var statearr_41997_42010 = state_41974;
(statearr_41997_42010[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42011 = state_41974;
state_41974 = G__42011;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_41974){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_41974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___41999,out))
})();
var state__25460__auto__ = (function (){var statearr_41998 = f__25459__auto__.call(null);
(statearr_41998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___41999);

return statearr_41998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___41999,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25458__auto___42146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___42146,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___42146,out){
return (function (state_42116){
var state_val_42117 = (state_42116[(1)]);
if((state_val_42117 === (7))){
var inst_42112 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42118_42147 = state_42116__$1;
(statearr_42118_42147[(2)] = inst_42112);

(statearr_42118_42147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (1))){
var inst_42079 = (new Array(n));
var inst_42080 = inst_42079;
var inst_42081 = (0);
var state_42116__$1 = (function (){var statearr_42119 = state_42116;
(statearr_42119[(7)] = inst_42080);

(statearr_42119[(8)] = inst_42081);

return statearr_42119;
})();
var statearr_42120_42148 = state_42116__$1;
(statearr_42120_42148[(2)] = null);

(statearr_42120_42148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (4))){
var inst_42084 = (state_42116[(9)]);
var inst_42084__$1 = (state_42116[(2)]);
var inst_42085 = (inst_42084__$1 == null);
var inst_42086 = cljs.core.not.call(null,inst_42085);
var state_42116__$1 = (function (){var statearr_42121 = state_42116;
(statearr_42121[(9)] = inst_42084__$1);

return statearr_42121;
})();
if(inst_42086){
var statearr_42122_42149 = state_42116__$1;
(statearr_42122_42149[(1)] = (5));

} else {
var statearr_42123_42150 = state_42116__$1;
(statearr_42123_42150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (15))){
var inst_42106 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42124_42151 = state_42116__$1;
(statearr_42124_42151[(2)] = inst_42106);

(statearr_42124_42151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (13))){
var state_42116__$1 = state_42116;
var statearr_42125_42152 = state_42116__$1;
(statearr_42125_42152[(2)] = null);

(statearr_42125_42152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (6))){
var inst_42081 = (state_42116[(8)]);
var inst_42102 = (inst_42081 > (0));
var state_42116__$1 = state_42116;
if(cljs.core.truth_(inst_42102)){
var statearr_42126_42153 = state_42116__$1;
(statearr_42126_42153[(1)] = (12));

} else {
var statearr_42127_42154 = state_42116__$1;
(statearr_42127_42154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (3))){
var inst_42114 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42116__$1,inst_42114);
} else {
if((state_val_42117 === (12))){
var inst_42080 = (state_42116[(7)]);
var inst_42104 = cljs.core.vec.call(null,inst_42080);
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42116__$1,(15),out,inst_42104);
} else {
if((state_val_42117 === (2))){
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42116__$1,(4),ch);
} else {
if((state_val_42117 === (11))){
var inst_42096 = (state_42116[(2)]);
var inst_42097 = (new Array(n));
var inst_42080 = inst_42097;
var inst_42081 = (0);
var state_42116__$1 = (function (){var statearr_42128 = state_42116;
(statearr_42128[(7)] = inst_42080);

(statearr_42128[(8)] = inst_42081);

(statearr_42128[(10)] = inst_42096);

return statearr_42128;
})();
var statearr_42129_42155 = state_42116__$1;
(statearr_42129_42155[(2)] = null);

(statearr_42129_42155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (9))){
var inst_42080 = (state_42116[(7)]);
var inst_42094 = cljs.core.vec.call(null,inst_42080);
var state_42116__$1 = state_42116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42116__$1,(11),out,inst_42094);
} else {
if((state_val_42117 === (5))){
var inst_42080 = (state_42116[(7)]);
var inst_42089 = (state_42116[(11)]);
var inst_42084 = (state_42116[(9)]);
var inst_42081 = (state_42116[(8)]);
var inst_42088 = (inst_42080[inst_42081] = inst_42084);
var inst_42089__$1 = (inst_42081 + (1));
var inst_42090 = (inst_42089__$1 < n);
var state_42116__$1 = (function (){var statearr_42130 = state_42116;
(statearr_42130[(11)] = inst_42089__$1);

(statearr_42130[(12)] = inst_42088);

return statearr_42130;
})();
if(cljs.core.truth_(inst_42090)){
var statearr_42131_42156 = state_42116__$1;
(statearr_42131_42156[(1)] = (8));

} else {
var statearr_42132_42157 = state_42116__$1;
(statearr_42132_42157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (14))){
var inst_42109 = (state_42116[(2)]);
var inst_42110 = cljs.core.async.close_BANG_.call(null,out);
var state_42116__$1 = (function (){var statearr_42134 = state_42116;
(statearr_42134[(13)] = inst_42109);

return statearr_42134;
})();
var statearr_42135_42158 = state_42116__$1;
(statearr_42135_42158[(2)] = inst_42110);

(statearr_42135_42158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (10))){
var inst_42100 = (state_42116[(2)]);
var state_42116__$1 = state_42116;
var statearr_42136_42159 = state_42116__$1;
(statearr_42136_42159[(2)] = inst_42100);

(statearr_42136_42159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42117 === (8))){
var inst_42080 = (state_42116[(7)]);
var inst_42089 = (state_42116[(11)]);
var tmp42133 = inst_42080;
var inst_42080__$1 = tmp42133;
var inst_42081 = inst_42089;
var state_42116__$1 = (function (){var statearr_42137 = state_42116;
(statearr_42137[(7)] = inst_42080__$1);

(statearr_42137[(8)] = inst_42081);

return statearr_42137;
})();
var statearr_42138_42160 = state_42116__$1;
(statearr_42138_42160[(2)] = null);

(statearr_42138_42160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___42146,out))
;
return ((function (switch__25402__auto__,c__25458__auto___42146,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_42142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42142[(0)] = state_machine__25403__auto__);

(statearr_42142[(1)] = (1));

return statearr_42142;
});
var state_machine__25403__auto____1 = (function (state_42116){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_42116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e42143){if((e42143 instanceof Object)){
var ex__25406__auto__ = e42143;
var statearr_42144_42161 = state_42116;
(statearr_42144_42161[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42162 = state_42116;
state_42116 = G__42162;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_42116){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_42116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___42146,out))
})();
var state__25460__auto__ = (function (){var statearr_42145 = f__25459__auto__.call(null);
(statearr_42145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___42146);

return statearr_42145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___42146,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25458__auto___42305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25458__auto___42305,out){
return (function (){
var f__25459__auto__ = (function (){var switch__25402__auto__ = ((function (c__25458__auto___42305,out){
return (function (state_42275){
var state_val_42276 = (state_42275[(1)]);
if((state_val_42276 === (7))){
var inst_42271 = (state_42275[(2)]);
var state_42275__$1 = state_42275;
var statearr_42277_42306 = state_42275__$1;
(statearr_42277_42306[(2)] = inst_42271);

(statearr_42277_42306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (1))){
var inst_42234 = [];
var inst_42235 = inst_42234;
var inst_42236 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42275__$1 = (function (){var statearr_42278 = state_42275;
(statearr_42278[(7)] = inst_42235);

(statearr_42278[(8)] = inst_42236);

return statearr_42278;
})();
var statearr_42279_42307 = state_42275__$1;
(statearr_42279_42307[(2)] = null);

(statearr_42279_42307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (4))){
var inst_42239 = (state_42275[(9)]);
var inst_42239__$1 = (state_42275[(2)]);
var inst_42240 = (inst_42239__$1 == null);
var inst_42241 = cljs.core.not.call(null,inst_42240);
var state_42275__$1 = (function (){var statearr_42280 = state_42275;
(statearr_42280[(9)] = inst_42239__$1);

return statearr_42280;
})();
if(inst_42241){
var statearr_42281_42308 = state_42275__$1;
(statearr_42281_42308[(1)] = (5));

} else {
var statearr_42282_42309 = state_42275__$1;
(statearr_42282_42309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (15))){
var inst_42265 = (state_42275[(2)]);
var state_42275__$1 = state_42275;
var statearr_42283_42310 = state_42275__$1;
(statearr_42283_42310[(2)] = inst_42265);

(statearr_42283_42310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (13))){
var state_42275__$1 = state_42275;
var statearr_42284_42311 = state_42275__$1;
(statearr_42284_42311[(2)] = null);

(statearr_42284_42311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (6))){
var inst_42235 = (state_42275[(7)]);
var inst_42260 = inst_42235.length;
var inst_42261 = (inst_42260 > (0));
var state_42275__$1 = state_42275;
if(cljs.core.truth_(inst_42261)){
var statearr_42285_42312 = state_42275__$1;
(statearr_42285_42312[(1)] = (12));

} else {
var statearr_42286_42313 = state_42275__$1;
(statearr_42286_42313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (3))){
var inst_42273 = (state_42275[(2)]);
var state_42275__$1 = state_42275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42275__$1,inst_42273);
} else {
if((state_val_42276 === (12))){
var inst_42235 = (state_42275[(7)]);
var inst_42263 = cljs.core.vec.call(null,inst_42235);
var state_42275__$1 = state_42275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42275__$1,(15),out,inst_42263);
} else {
if((state_val_42276 === (2))){
var state_42275__$1 = state_42275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42275__$1,(4),ch);
} else {
if((state_val_42276 === (11))){
var inst_42239 = (state_42275[(9)]);
var inst_42243 = (state_42275[(10)]);
var inst_42253 = (state_42275[(2)]);
var inst_42254 = [];
var inst_42255 = inst_42254.push(inst_42239);
var inst_42235 = inst_42254;
var inst_42236 = inst_42243;
var state_42275__$1 = (function (){var statearr_42287 = state_42275;
(statearr_42287[(11)] = inst_42253);

(statearr_42287[(7)] = inst_42235);

(statearr_42287[(8)] = inst_42236);

(statearr_42287[(12)] = inst_42255);

return statearr_42287;
})();
var statearr_42288_42314 = state_42275__$1;
(statearr_42288_42314[(2)] = null);

(statearr_42288_42314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (9))){
var inst_42235 = (state_42275[(7)]);
var inst_42251 = cljs.core.vec.call(null,inst_42235);
var state_42275__$1 = state_42275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42275__$1,(11),out,inst_42251);
} else {
if((state_val_42276 === (5))){
var inst_42239 = (state_42275[(9)]);
var inst_42243 = (state_42275[(10)]);
var inst_42236 = (state_42275[(8)]);
var inst_42243__$1 = f.call(null,inst_42239);
var inst_42244 = cljs.core._EQ_.call(null,inst_42243__$1,inst_42236);
var inst_42245 = cljs.core.keyword_identical_QMARK_.call(null,inst_42236,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42246 = (inst_42244) || (inst_42245);
var state_42275__$1 = (function (){var statearr_42289 = state_42275;
(statearr_42289[(10)] = inst_42243__$1);

return statearr_42289;
})();
if(cljs.core.truth_(inst_42246)){
var statearr_42290_42315 = state_42275__$1;
(statearr_42290_42315[(1)] = (8));

} else {
var statearr_42291_42316 = state_42275__$1;
(statearr_42291_42316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (14))){
var inst_42268 = (state_42275[(2)]);
var inst_42269 = cljs.core.async.close_BANG_.call(null,out);
var state_42275__$1 = (function (){var statearr_42293 = state_42275;
(statearr_42293[(13)] = inst_42268);

return statearr_42293;
})();
var statearr_42294_42317 = state_42275__$1;
(statearr_42294_42317[(2)] = inst_42269);

(statearr_42294_42317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (10))){
var inst_42258 = (state_42275[(2)]);
var state_42275__$1 = state_42275;
var statearr_42295_42318 = state_42275__$1;
(statearr_42295_42318[(2)] = inst_42258);

(statearr_42295_42318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42276 === (8))){
var inst_42239 = (state_42275[(9)]);
var inst_42235 = (state_42275[(7)]);
var inst_42243 = (state_42275[(10)]);
var inst_42248 = inst_42235.push(inst_42239);
var tmp42292 = inst_42235;
var inst_42235__$1 = tmp42292;
var inst_42236 = inst_42243;
var state_42275__$1 = (function (){var statearr_42296 = state_42275;
(statearr_42296[(14)] = inst_42248);

(statearr_42296[(7)] = inst_42235__$1);

(statearr_42296[(8)] = inst_42236);

return statearr_42296;
})();
var statearr_42297_42319 = state_42275__$1;
(statearr_42297_42319[(2)] = null);

(statearr_42297_42319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25458__auto___42305,out))
;
return ((function (switch__25402__auto__,c__25458__auto___42305,out){
return (function() {
var state_machine__25403__auto__ = null;
var state_machine__25403__auto____0 = (function (){
var statearr_42301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42301[(0)] = state_machine__25403__auto__);

(statearr_42301[(1)] = (1));

return statearr_42301;
});
var state_machine__25403__auto____1 = (function (state_42275){
while(true){
var ret_value__25404__auto__ = (function (){try{while(true){
var result__25405__auto__ = switch__25402__auto__.call(null,state_42275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25405__auto__;
}
break;
}
}catch (e42302){if((e42302 instanceof Object)){
var ex__25406__auto__ = e42302;
var statearr_42303_42320 = state_42275;
(statearr_42303_42320[(5)] = ex__25406__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25404__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42321 = state_42275;
state_42275 = G__42321;
continue;
} else {
return ret_value__25404__auto__;
}
break;
}
});
state_machine__25403__auto__ = function(state_42275){
switch(arguments.length){
case 0:
return state_machine__25403__auto____0.call(this);
case 1:
return state_machine__25403__auto____1.call(this,state_42275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__25403__auto____0;
state_machine__25403__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__25403__auto____1;
return state_machine__25403__auto__;
})()
;})(switch__25402__auto__,c__25458__auto___42305,out))
})();
var state__25460__auto__ = (function (){var statearr_42304 = f__25459__auto__.call(null);
(statearr_42304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25458__auto___42305);

return statearr_42304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25460__auto__);
});})(c__25458__auto___42305,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
