// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t32243 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32243 = (function (fn_handler,f,meta32244){
this.fn_handler = fn_handler;
this.f = f;
this.meta32244 = meta32244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32245,meta32244__$1){
var self__ = this;
var _32245__$1 = this;
return (new cljs.core.async.t32243(self__.fn_handler,self__.f,meta32244__$1));
});

cljs.core.async.t32243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32245){
var self__ = this;
var _32245__$1 = this;
return self__.meta32244;
});

cljs.core.async.t32243.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t32243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t32243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32244","meta32244",240623372,null)], null);
});

cljs.core.async.t32243.cljs$lang$type = true;

cljs.core.async.t32243.cljs$lang$ctorStr = "cljs.core.async/t32243";

cljs.core.async.t32243.cljs$lang$ctorPrWriter = (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t32243");
});

cljs.core.async.__GT_t32243 = (function cljs$core$async$fn_handler_$___GT_t32243(fn_handler__$1,f__$1,meta32244){
return (new cljs.core.async.t32243(fn_handler__$1,f__$1,meta32244));
});

}

return (new cljs.core.async.t32243(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__32247 = buff;
if(G__32247){
var bit__17301__auto__ = null;
if(cljs.core.truth_((function (){var or__16627__auto__ = bit__17301__auto__;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return G__32247.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__32247.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32247);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32247);
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
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__32249 = arguments.length;
switch (G__32249) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
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

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__32252 = arguments.length;
switch (G__32252) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32254 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32254);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32254,ret){
return (function (){
return fn1.call(null,val_32254);
});})(val_32254,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__32256 = arguments.length;
switch (G__32256) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17512__auto___32258 = n;
var x_32259 = (0);
while(true){
if((x_32259 < n__17512__auto___32258)){
(a[x_32259] = (0));

var G__32260 = (x_32259 + (1));
x_32259 = G__32260;
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

var G__32261 = (i + (1));
i = G__32261;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t32265 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32265 = (function (alt_flag,flag,meta32266){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32266 = meta32266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32267,meta32266__$1){
var self__ = this;
var _32267__$1 = this;
return (new cljs.core.async.t32265(self__.alt_flag,self__.flag,meta32266__$1));
});})(flag))
;

cljs.core.async.t32265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32267){
var self__ = this;
var _32267__$1 = this;
return self__.meta32266;
});})(flag))
;

cljs.core.async.t32265.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t32265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t32265.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32266","meta32266",-566675653,null)], null);
});})(flag))
;

cljs.core.async.t32265.cljs$lang$type = true;

cljs.core.async.t32265.cljs$lang$ctorStr = "cljs.core.async/t32265";

cljs.core.async.t32265.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t32265");
});})(flag))
;

cljs.core.async.__GT_t32265 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t32265(alt_flag__$1,flag__$1,meta32266){
return (new cljs.core.async.t32265(alt_flag__$1,flag__$1,meta32266));
});})(flag))
;

}

return (new cljs.core.async.t32265(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t32271 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32271 = (function (alt_handler,flag,cb,meta32272){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32272 = meta32272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32273,meta32272__$1){
var self__ = this;
var _32273__$1 = this;
return (new cljs.core.async.t32271(self__.alt_handler,self__.flag,self__.cb,meta32272__$1));
});

cljs.core.async.t32271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32273){
var self__ = this;
var _32273__$1 = this;
return self__.meta32272;
});

cljs.core.async.t32271.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t32271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t32271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t32271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32272","meta32272",-2024068547,null)], null);
});

cljs.core.async.t32271.cljs$lang$type = true;

cljs.core.async.t32271.cljs$lang$ctorStr = "cljs.core.async/t32271";

cljs.core.async.t32271.cljs$lang$ctorPrWriter = (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t32271");
});

cljs.core.async.__GT_t32271 = (function cljs$core$async$alt_handler_$___GT_t32271(alt_handler__$1,flag__$1,cb__$1,meta32272){
return (new cljs.core.async.t32271(alt_handler__$1,flag__$1,cb__$1,meta32272));
});

}

return (new cljs.core.async.t32271(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__32274_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32274_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32275_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32275_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16627__auto__ = wport;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32276 = (i + (1));
i = G__32276;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16627__auto__ = ret;
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16615__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16615__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16615__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17667__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17667__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32279){
var map__32280 = p__32279;
var map__32280__$1 = ((cljs.core.seq_QMARK_.call(null,map__32280))?cljs.core.apply.call(null,cljs.core.hash_map,map__32280):map__32280);
var opts = map__32280__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32277){
var G__32278 = cljs.core.first.call(null,seq32277);
var seq32277__$1 = cljs.core.next.call(null,seq32277);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32278,seq32277__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__32282 = arguments.length;
switch (G__32282) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24334__auto___32331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___32331){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___32331){
return (function (state_32306){
var state_val_32307 = (state_32306[(1)]);
if((state_val_32307 === (7))){
var inst_32302 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32308_32332 = state_32306__$1;
(statearr_32308_32332[(2)] = inst_32302);

(statearr_32308_32332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (1))){
var state_32306__$1 = state_32306;
var statearr_32309_32333 = state_32306__$1;
(statearr_32309_32333[(2)] = null);

(statearr_32309_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (4))){
var inst_32285 = (state_32306[(7)]);
var inst_32285__$1 = (state_32306[(2)]);
var inst_32286 = (inst_32285__$1 == null);
var state_32306__$1 = (function (){var statearr_32310 = state_32306;
(statearr_32310[(7)] = inst_32285__$1);

return statearr_32310;
})();
if(cljs.core.truth_(inst_32286)){
var statearr_32311_32334 = state_32306__$1;
(statearr_32311_32334[(1)] = (5));

} else {
var statearr_32312_32335 = state_32306__$1;
(statearr_32312_32335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (13))){
var state_32306__$1 = state_32306;
var statearr_32313_32336 = state_32306__$1;
(statearr_32313_32336[(2)] = null);

(statearr_32313_32336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (6))){
var inst_32285 = (state_32306[(7)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32306__$1,(11),to,inst_32285);
} else {
if((state_val_32307 === (3))){
var inst_32304 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32306__$1,inst_32304);
} else {
if((state_val_32307 === (12))){
var state_32306__$1 = state_32306;
var statearr_32314_32337 = state_32306__$1;
(statearr_32314_32337[(2)] = null);

(statearr_32314_32337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (2))){
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32306__$1,(4),from);
} else {
if((state_val_32307 === (11))){
var inst_32295 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32295)){
var statearr_32315_32338 = state_32306__$1;
(statearr_32315_32338[(1)] = (12));

} else {
var statearr_32316_32339 = state_32306__$1;
(statearr_32316_32339[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (9))){
var state_32306__$1 = state_32306;
var statearr_32317_32340 = state_32306__$1;
(statearr_32317_32340[(2)] = null);

(statearr_32317_32340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (5))){
var state_32306__$1 = state_32306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32318_32341 = state_32306__$1;
(statearr_32318_32341[(1)] = (8));

} else {
var statearr_32319_32342 = state_32306__$1;
(statearr_32319_32342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (14))){
var inst_32300 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32320_32343 = state_32306__$1;
(statearr_32320_32343[(2)] = inst_32300);

(statearr_32320_32343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (10))){
var inst_32292 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32321_32344 = state_32306__$1;
(statearr_32321_32344[(2)] = inst_32292);

(statearr_32321_32344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (8))){
var inst_32289 = cljs.core.async.close_BANG_.call(null,to);
var state_32306__$1 = state_32306;
var statearr_32322_32345 = state_32306__$1;
(statearr_32322_32345[(2)] = inst_32289);

(statearr_32322_32345[(1)] = (10));


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
});})(c__24334__auto___32331))
;
return ((function (switch__24272__auto__,c__24334__auto___32331){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_32326 = [null,null,null,null,null,null,null,null];
(statearr_32326[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_32326[(1)] = (1));

return statearr_32326;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_32306){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32327){if((e32327 instanceof Object)){
var ex__24276__auto__ = e32327;
var statearr_32328_32346 = state_32306;
(statearr_32328_32346[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32347 = state_32306;
state_32306 = G__32347;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_32306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_32306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___32331))
})();
var state__24336__auto__ = (function (){var statearr_32329 = f__24335__auto__.call(null);
(statearr_32329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___32331);

return statearr_32329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___32331))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32531){
var vec__32532 = p__32531;
var v = cljs.core.nth.call(null,vec__32532,(0),null);
var p = cljs.core.nth.call(null,vec__32532,(1),null);
var job = vec__32532;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24334__auto___32714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___32714,res,vec__32532,v,p,job,jobs,results){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___32714,res,vec__32532,v,p,job,jobs,results){
return (function (state_32537){
var state_val_32538 = (state_32537[(1)]);
if((state_val_32538 === (1))){
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32537__$1,(2),res,v);
} else {
if((state_val_32538 === (2))){
var inst_32534 = (state_32537[(2)]);
var inst_32535 = cljs.core.async.close_BANG_.call(null,res);
var state_32537__$1 = (function (){var statearr_32539 = state_32537;
(statearr_32539[(7)] = inst_32534);

return statearr_32539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32537__$1,inst_32535);
} else {
return null;
}
}
});})(c__24334__auto___32714,res,vec__32532,v,p,job,jobs,results))
;
return ((function (switch__24272__auto__,c__24334__auto___32714,res,vec__32532,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0 = (function (){
var statearr_32543 = [null,null,null,null,null,null,null,null];
(statearr_32543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__);

(statearr_32543[(1)] = (1));

return statearr_32543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1 = (function (state_32537){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32544){if((e32544 instanceof Object)){
var ex__24276__auto__ = e32544;
var statearr_32545_32715 = state_32537;
(statearr_32545_32715[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32716 = state_32537;
state_32537 = G__32716;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = function(state_32537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1.call(this,state_32537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___32714,res,vec__32532,v,p,job,jobs,results))
})();
var state__24336__auto__ = (function (){var statearr_32546 = f__24335__auto__.call(null);
(statearr_32546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___32714);

return statearr_32546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___32714,res,vec__32532,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32547){
var vec__32548 = p__32547;
var v = cljs.core.nth.call(null,vec__32548,(0),null);
var p = cljs.core.nth.call(null,vec__32548,(1),null);
var job = vec__32548;
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
var n__17512__auto___32717 = n;
var __32718 = (0);
while(true){
if((__32718 < n__17512__auto___32717)){
var G__32549_32719 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32549_32719) {
case "compute":
var c__24334__auto___32721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32718,c__24334__auto___32721,G__32549_32719,n__17512__auto___32717,jobs,results,process,async){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (__32718,c__24334__auto___32721,G__32549_32719,n__17512__auto___32717,jobs,results,process,async){
return (function (state_32562){
var state_val_32563 = (state_32562[(1)]);
if((state_val_32563 === (1))){
var state_32562__$1 = state_32562;
var statearr_32564_32722 = state_32562__$1;
(statearr_32564_32722[(2)] = null);

(statearr_32564_32722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (2))){
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32562__$1,(4),jobs);
} else {
if((state_val_32563 === (3))){
var inst_32560 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32562__$1,inst_32560);
} else {
if((state_val_32563 === (4))){
var inst_32552 = (state_32562[(2)]);
var inst_32553 = process.call(null,inst_32552);
var state_32562__$1 = state_32562;
if(cljs.core.truth_(inst_32553)){
var statearr_32565_32723 = state_32562__$1;
(statearr_32565_32723[(1)] = (5));

} else {
var statearr_32566_32724 = state_32562__$1;
(statearr_32566_32724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (5))){
var state_32562__$1 = state_32562;
var statearr_32567_32725 = state_32562__$1;
(statearr_32567_32725[(2)] = null);

(statearr_32567_32725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (6))){
var state_32562__$1 = state_32562;
var statearr_32568_32726 = state_32562__$1;
(statearr_32568_32726[(2)] = null);

(statearr_32568_32726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (7))){
var inst_32558 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32569_32727 = state_32562__$1;
(statearr_32569_32727[(2)] = inst_32558);

(statearr_32569_32727[(1)] = (3));


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
});})(__32718,c__24334__auto___32721,G__32549_32719,n__17512__auto___32717,jobs,results,process,async))
;
return ((function (__32718,switch__24272__auto__,c__24334__auto___32721,G__32549_32719,n__17512__auto___32717,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0 = (function (){
var statearr_32573 = [null,null,null,null,null,null,null];
(statearr_32573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__);

(statearr_32573[(1)] = (1));

return statearr_32573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1 = (function (state_32562){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32574){if((e32574 instanceof Object)){
var ex__24276__auto__ = e32574;
var statearr_32575_32728 = state_32562;
(statearr_32575_32728[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32729 = state_32562;
state_32562 = G__32729;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = function(state_32562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1.call(this,state_32562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__;
})()
;})(__32718,switch__24272__auto__,c__24334__auto___32721,G__32549_32719,n__17512__auto___32717,jobs,results,process,async))
})();
var state__24336__auto__ = (function (){var statearr_32576 = f__24335__auto__.call(null);
(statearr_32576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___32721);

return statearr_32576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(__32718,c__24334__auto___32721,G__32549_32719,n__17512__auto___32717,jobs,results,process,async))
);


break;
case "async":
var c__24334__auto___32730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32718,c__24334__auto___32730,G__32549_32719,n__17512__auto___32717,jobs,results,process,async){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (__32718,c__24334__auto___32730,G__32549_32719,n__17512__auto___32717,jobs,results,process,async){
return (function (state_32589){
var state_val_32590 = (state_32589[(1)]);
if((state_val_32590 === (1))){
var state_32589__$1 = state_32589;
var statearr_32591_32731 = state_32589__$1;
(statearr_32591_32731[(2)] = null);

(statearr_32591_32731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (2))){
var state_32589__$1 = state_32589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32589__$1,(4),jobs);
} else {
if((state_val_32590 === (3))){
var inst_32587 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32589__$1,inst_32587);
} else {
if((state_val_32590 === (4))){
var inst_32579 = (state_32589[(2)]);
var inst_32580 = async.call(null,inst_32579);
var state_32589__$1 = state_32589;
if(cljs.core.truth_(inst_32580)){
var statearr_32592_32732 = state_32589__$1;
(statearr_32592_32732[(1)] = (5));

} else {
var statearr_32593_32733 = state_32589__$1;
(statearr_32593_32733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (5))){
var state_32589__$1 = state_32589;
var statearr_32594_32734 = state_32589__$1;
(statearr_32594_32734[(2)] = null);

(statearr_32594_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (6))){
var state_32589__$1 = state_32589;
var statearr_32595_32735 = state_32589__$1;
(statearr_32595_32735[(2)] = null);

(statearr_32595_32735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32590 === (7))){
var inst_32585 = (state_32589[(2)]);
var state_32589__$1 = state_32589;
var statearr_32596_32736 = state_32589__$1;
(statearr_32596_32736[(2)] = inst_32585);

(statearr_32596_32736[(1)] = (3));


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
});})(__32718,c__24334__auto___32730,G__32549_32719,n__17512__auto___32717,jobs,results,process,async))
;
return ((function (__32718,switch__24272__auto__,c__24334__auto___32730,G__32549_32719,n__17512__auto___32717,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0 = (function (){
var statearr_32600 = [null,null,null,null,null,null,null];
(statearr_32600[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__);

(statearr_32600[(1)] = (1));

return statearr_32600;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1 = (function (state_32589){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32601){if((e32601 instanceof Object)){
var ex__24276__auto__ = e32601;
var statearr_32602_32737 = state_32589;
(statearr_32602_32737[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32738 = state_32589;
state_32589 = G__32738;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = function(state_32589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1.call(this,state_32589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__;
})()
;})(__32718,switch__24272__auto__,c__24334__auto___32730,G__32549_32719,n__17512__auto___32717,jobs,results,process,async))
})();
var state__24336__auto__ = (function (){var statearr_32603 = f__24335__auto__.call(null);
(statearr_32603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___32730);

return statearr_32603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(__32718,c__24334__auto___32730,G__32549_32719,n__17512__auto___32717,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32739 = (__32718 + (1));
__32718 = G__32739;
continue;
} else {
}
break;
}

var c__24334__auto___32740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___32740,jobs,results,process,async){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___32740,jobs,results,process,async){
return (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (1))){
var state_32625__$1 = state_32625;
var statearr_32627_32741 = state_32625__$1;
(statearr_32627_32741[(2)] = null);

(statearr_32627_32741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (2))){
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32625__$1,(4),from);
} else {
if((state_val_32626 === (3))){
var inst_32623 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32625__$1,inst_32623);
} else {
if((state_val_32626 === (4))){
var inst_32606 = (state_32625[(7)]);
var inst_32606__$1 = (state_32625[(2)]);
var inst_32607 = (inst_32606__$1 == null);
var state_32625__$1 = (function (){var statearr_32628 = state_32625;
(statearr_32628[(7)] = inst_32606__$1);

return statearr_32628;
})();
if(cljs.core.truth_(inst_32607)){
var statearr_32629_32742 = state_32625__$1;
(statearr_32629_32742[(1)] = (5));

} else {
var statearr_32630_32743 = state_32625__$1;
(statearr_32630_32743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (5))){
var inst_32609 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32625__$1 = state_32625;
var statearr_32631_32744 = state_32625__$1;
(statearr_32631_32744[(2)] = inst_32609);

(statearr_32631_32744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (6))){
var inst_32606 = (state_32625[(7)]);
var inst_32611 = (state_32625[(8)]);
var inst_32611__$1 = cljs.core.async.chan.call(null,(1));
var inst_32612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32613 = [inst_32606,inst_32611__$1];
var inst_32614 = (new cljs.core.PersistentVector(null,2,(5),inst_32612,inst_32613,null));
var state_32625__$1 = (function (){var statearr_32632 = state_32625;
(statearr_32632[(8)] = inst_32611__$1);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32625__$1,(8),jobs,inst_32614);
} else {
if((state_val_32626 === (7))){
var inst_32621 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32633_32745 = state_32625__$1;
(statearr_32633_32745[(2)] = inst_32621);

(statearr_32633_32745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (8))){
var inst_32611 = (state_32625[(8)]);
var inst_32616 = (state_32625[(2)]);
var state_32625__$1 = (function (){var statearr_32634 = state_32625;
(statearr_32634[(9)] = inst_32616);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32625__$1,(9),results,inst_32611);
} else {
if((state_val_32626 === (9))){
var inst_32618 = (state_32625[(2)]);
var state_32625__$1 = (function (){var statearr_32635 = state_32625;
(statearr_32635[(10)] = inst_32618);

return statearr_32635;
})();
var statearr_32636_32746 = state_32625__$1;
(statearr_32636_32746[(2)] = null);

(statearr_32636_32746[(1)] = (2));


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
});})(c__24334__auto___32740,jobs,results,process,async))
;
return ((function (switch__24272__auto__,c__24334__auto___32740,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0 = (function (){
var statearr_32640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__);

(statearr_32640[(1)] = (1));

return statearr_32640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1 = (function (state_32625){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32641){if((e32641 instanceof Object)){
var ex__24276__auto__ = e32641;
var statearr_32642_32747 = state_32625;
(statearr_32642_32747[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32748 = state_32625;
state_32625 = G__32748;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___32740,jobs,results,process,async))
})();
var state__24336__auto__ = (function (){var statearr_32643 = f__24335__auto__.call(null);
(statearr_32643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___32740);

return statearr_32643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___32740,jobs,results,process,async))
);


var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__,jobs,results,process,async){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__,jobs,results,process,async){
return (function (state_32681){
var state_val_32682 = (state_32681[(1)]);
if((state_val_32682 === (7))){
var inst_32677 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
var statearr_32683_32749 = state_32681__$1;
(statearr_32683_32749[(2)] = inst_32677);

(statearr_32683_32749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (20))){
var state_32681__$1 = state_32681;
var statearr_32684_32750 = state_32681__$1;
(statearr_32684_32750[(2)] = null);

(statearr_32684_32750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (1))){
var state_32681__$1 = state_32681;
var statearr_32685_32751 = state_32681__$1;
(statearr_32685_32751[(2)] = null);

(statearr_32685_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (4))){
var inst_32646 = (state_32681[(7)]);
var inst_32646__$1 = (state_32681[(2)]);
var inst_32647 = (inst_32646__$1 == null);
var state_32681__$1 = (function (){var statearr_32686 = state_32681;
(statearr_32686[(7)] = inst_32646__$1);

return statearr_32686;
})();
if(cljs.core.truth_(inst_32647)){
var statearr_32687_32752 = state_32681__$1;
(statearr_32687_32752[(1)] = (5));

} else {
var statearr_32688_32753 = state_32681__$1;
(statearr_32688_32753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (15))){
var inst_32659 = (state_32681[(8)]);
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32681__$1,(18),to,inst_32659);
} else {
if((state_val_32682 === (21))){
var inst_32672 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
var statearr_32689_32754 = state_32681__$1;
(statearr_32689_32754[(2)] = inst_32672);

(statearr_32689_32754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (13))){
var inst_32674 = (state_32681[(2)]);
var state_32681__$1 = (function (){var statearr_32690 = state_32681;
(statearr_32690[(9)] = inst_32674);

return statearr_32690;
})();
var statearr_32691_32755 = state_32681__$1;
(statearr_32691_32755[(2)] = null);

(statearr_32691_32755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (6))){
var inst_32646 = (state_32681[(7)]);
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32681__$1,(11),inst_32646);
} else {
if((state_val_32682 === (17))){
var inst_32667 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
if(cljs.core.truth_(inst_32667)){
var statearr_32692_32756 = state_32681__$1;
(statearr_32692_32756[(1)] = (19));

} else {
var statearr_32693_32757 = state_32681__$1;
(statearr_32693_32757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (3))){
var inst_32679 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32681__$1,inst_32679);
} else {
if((state_val_32682 === (12))){
var inst_32656 = (state_32681[(10)]);
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32681__$1,(14),inst_32656);
} else {
if((state_val_32682 === (2))){
var state_32681__$1 = state_32681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32681__$1,(4),results);
} else {
if((state_val_32682 === (19))){
var state_32681__$1 = state_32681;
var statearr_32694_32758 = state_32681__$1;
(statearr_32694_32758[(2)] = null);

(statearr_32694_32758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (11))){
var inst_32656 = (state_32681[(2)]);
var state_32681__$1 = (function (){var statearr_32695 = state_32681;
(statearr_32695[(10)] = inst_32656);

return statearr_32695;
})();
var statearr_32696_32759 = state_32681__$1;
(statearr_32696_32759[(2)] = null);

(statearr_32696_32759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (9))){
var state_32681__$1 = state_32681;
var statearr_32697_32760 = state_32681__$1;
(statearr_32697_32760[(2)] = null);

(statearr_32697_32760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (5))){
var state_32681__$1 = state_32681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32698_32761 = state_32681__$1;
(statearr_32698_32761[(1)] = (8));

} else {
var statearr_32699_32762 = state_32681__$1;
(statearr_32699_32762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (14))){
var inst_32659 = (state_32681[(8)]);
var inst_32661 = (state_32681[(11)]);
var inst_32659__$1 = (state_32681[(2)]);
var inst_32660 = (inst_32659__$1 == null);
var inst_32661__$1 = cljs.core.not.call(null,inst_32660);
var state_32681__$1 = (function (){var statearr_32700 = state_32681;
(statearr_32700[(8)] = inst_32659__$1);

(statearr_32700[(11)] = inst_32661__$1);

return statearr_32700;
})();
if(inst_32661__$1){
var statearr_32701_32763 = state_32681__$1;
(statearr_32701_32763[(1)] = (15));

} else {
var statearr_32702_32764 = state_32681__$1;
(statearr_32702_32764[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (16))){
var inst_32661 = (state_32681[(11)]);
var state_32681__$1 = state_32681;
var statearr_32703_32765 = state_32681__$1;
(statearr_32703_32765[(2)] = inst_32661);

(statearr_32703_32765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (10))){
var inst_32653 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
var statearr_32704_32766 = state_32681__$1;
(statearr_32704_32766[(2)] = inst_32653);

(statearr_32704_32766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (18))){
var inst_32664 = (state_32681[(2)]);
var state_32681__$1 = state_32681;
var statearr_32705_32767 = state_32681__$1;
(statearr_32705_32767[(2)] = inst_32664);

(statearr_32705_32767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32682 === (8))){
var inst_32650 = cljs.core.async.close_BANG_.call(null,to);
var state_32681__$1 = state_32681;
var statearr_32706_32768 = state_32681__$1;
(statearr_32706_32768[(2)] = inst_32650);

(statearr_32706_32768[(1)] = (10));


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
});})(c__24334__auto__,jobs,results,process,async))
;
return ((function (switch__24272__auto__,c__24334__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0 = (function (){
var statearr_32710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__);

(statearr_32710[(1)] = (1));

return statearr_32710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1 = (function (state_32681){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32711){if((e32711 instanceof Object)){
var ex__24276__auto__ = e32711;
var statearr_32712_32769 = state_32681;
(statearr_32712_32769[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32770 = state_32681;
state_32681 = G__32770;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__ = function(state_32681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1.call(this,state_32681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__,jobs,results,process,async))
})();
var state__24336__auto__ = (function (){var statearr_32713 = f__24335__auto__.call(null);
(statearr_32713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__,jobs,results,process,async))
);

return c__24334__auto__;
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
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__32772 = arguments.length;
switch (G__32772) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
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
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__32775 = arguments.length;
switch (G__32775) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
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
cljs.core.async.split = (function cljs$core$async$split(){
var G__32778 = arguments.length;
switch (G__32778) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24334__auto___32830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___32830,tc,fc){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___32830,tc,fc){
return (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32800 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32806_32831 = state_32804__$1;
(statearr_32806_32831[(2)] = inst_32800);

(statearr_32806_32831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var state_32804__$1 = state_32804;
var statearr_32807_32832 = state_32804__$1;
(statearr_32807_32832[(2)] = null);

(statearr_32807_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32781 = (state_32804[(7)]);
var inst_32781__$1 = (state_32804[(2)]);
var inst_32782 = (inst_32781__$1 == null);
var state_32804__$1 = (function (){var statearr_32808 = state_32804;
(statearr_32808[(7)] = inst_32781__$1);

return statearr_32808;
})();
if(cljs.core.truth_(inst_32782)){
var statearr_32809_32833 = state_32804__$1;
(statearr_32809_32833[(1)] = (5));

} else {
var statearr_32810_32834 = state_32804__$1;
(statearr_32810_32834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (13))){
var state_32804__$1 = state_32804;
var statearr_32811_32835 = state_32804__$1;
(statearr_32811_32835[(2)] = null);

(statearr_32811_32835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var inst_32781 = (state_32804[(7)]);
var inst_32787 = p.call(null,inst_32781);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32787)){
var statearr_32812_32836 = state_32804__$1;
(statearr_32812_32836[(1)] = (9));

} else {
var statearr_32813_32837 = state_32804__$1;
(statearr_32813_32837[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (3))){
var inst_32802 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (12))){
var state_32804__$1 = state_32804;
var statearr_32814_32838 = state_32804__$1;
(statearr_32814_32838[(2)] = null);

(statearr_32814_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32804__$1,(4),ch);
} else {
if((state_val_32805 === (11))){
var inst_32781 = (state_32804[(7)]);
var inst_32791 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32804__$1,(8),inst_32791,inst_32781);
} else {
if((state_val_32805 === (9))){
var state_32804__$1 = state_32804;
var statearr_32815_32839 = state_32804__$1;
(statearr_32815_32839[(2)] = tc);

(statearr_32815_32839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (5))){
var inst_32784 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32785 = cljs.core.async.close_BANG_.call(null,fc);
var state_32804__$1 = (function (){var statearr_32816 = state_32804;
(statearr_32816[(8)] = inst_32784);

return statearr_32816;
})();
var statearr_32817_32840 = state_32804__$1;
(statearr_32817_32840[(2)] = inst_32785);

(statearr_32817_32840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (14))){
var inst_32798 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32818_32841 = state_32804__$1;
(statearr_32818_32841[(2)] = inst_32798);

(statearr_32818_32841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var state_32804__$1 = state_32804;
var statearr_32819_32842 = state_32804__$1;
(statearr_32819_32842[(2)] = fc);

(statearr_32819_32842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32793 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
if(cljs.core.truth_(inst_32793)){
var statearr_32820_32843 = state_32804__$1;
(statearr_32820_32843[(1)] = (12));

} else {
var statearr_32821_32844 = state_32804__$1;
(statearr_32821_32844[(1)] = (13));

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
});})(c__24334__auto___32830,tc,fc))
;
return ((function (switch__24272__auto__,c__24334__auto___32830,tc,fc){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_32825 = [null,null,null,null,null,null,null,null,null];
(statearr_32825[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_32825[(1)] = (1));

return statearr_32825;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_32804){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32826){if((e32826 instanceof Object)){
var ex__24276__auto__ = e32826;
var statearr_32827_32845 = state_32804;
(statearr_32827_32845[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32846 = state_32804;
state_32804 = G__32846;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___32830,tc,fc))
})();
var state__24336__auto__ = (function (){var statearr_32828 = f__24335__auto__.call(null);
(statearr_32828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___32830);

return statearr_32828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___32830,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_32893){
var state_val_32894 = (state_32893[(1)]);
if((state_val_32894 === (1))){
var inst_32879 = init;
var state_32893__$1 = (function (){var statearr_32895 = state_32893;
(statearr_32895[(7)] = inst_32879);

return statearr_32895;
})();
var statearr_32896_32911 = state_32893__$1;
(statearr_32896_32911[(2)] = null);

(statearr_32896_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (2))){
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32893__$1,(4),ch);
} else {
if((state_val_32894 === (3))){
var inst_32891 = (state_32893[(2)]);
var state_32893__$1 = state_32893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32893__$1,inst_32891);
} else {
if((state_val_32894 === (4))){
var inst_32882 = (state_32893[(8)]);
var inst_32882__$1 = (state_32893[(2)]);
var inst_32883 = (inst_32882__$1 == null);
var state_32893__$1 = (function (){var statearr_32897 = state_32893;
(statearr_32897[(8)] = inst_32882__$1);

return statearr_32897;
})();
if(cljs.core.truth_(inst_32883)){
var statearr_32898_32912 = state_32893__$1;
(statearr_32898_32912[(1)] = (5));

} else {
var statearr_32899_32913 = state_32893__$1;
(statearr_32899_32913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (5))){
var inst_32879 = (state_32893[(7)]);
var state_32893__$1 = state_32893;
var statearr_32900_32914 = state_32893__$1;
(statearr_32900_32914[(2)] = inst_32879);

(statearr_32900_32914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (6))){
var inst_32882 = (state_32893[(8)]);
var inst_32879 = (state_32893[(7)]);
var inst_32886 = f.call(null,inst_32879,inst_32882);
var inst_32879__$1 = inst_32886;
var state_32893__$1 = (function (){var statearr_32901 = state_32893;
(statearr_32901[(7)] = inst_32879__$1);

return statearr_32901;
})();
var statearr_32902_32915 = state_32893__$1;
(statearr_32902_32915[(2)] = null);

(statearr_32902_32915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32894 === (7))){
var inst_32889 = (state_32893[(2)]);
var state_32893__$1 = state_32893;
var statearr_32903_32916 = state_32893__$1;
(statearr_32903_32916[(2)] = inst_32889);

(statearr_32903_32916[(1)] = (3));


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
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24273__auto____0 = (function (){
var statearr_32907 = [null,null,null,null,null,null,null,null,null];
(statearr_32907[(0)] = cljs$core$async$reduce_$_state_machine__24273__auto__);

(statearr_32907[(1)] = (1));

return statearr_32907;
});
var cljs$core$async$reduce_$_state_machine__24273__auto____1 = (function (state_32893){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32908){if((e32908 instanceof Object)){
var ex__24276__auto__ = e32908;
var statearr_32909_32917 = state_32893;
(statearr_32909_32917[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_32893;
state_32893 = G__32918;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24273__auto__ = function(state_32893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24273__auto____1.call(this,state_32893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24273__auto____0;
cljs$core$async$reduce_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24273__auto____1;
return cljs$core$async$reduce_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_32910 = f__24335__auto__.call(null);
(statearr_32910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_32910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__32920 = arguments.length;
switch (G__32920) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_32945){
var state_val_32946 = (state_32945[(1)]);
if((state_val_32946 === (7))){
var inst_32927 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32947_32971 = state_32945__$1;
(statearr_32947_32971[(2)] = inst_32927);

(statearr_32947_32971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (1))){
var inst_32921 = cljs.core.seq.call(null,coll);
var inst_32922 = inst_32921;
var state_32945__$1 = (function (){var statearr_32948 = state_32945;
(statearr_32948[(7)] = inst_32922);

return statearr_32948;
})();
var statearr_32949_32972 = state_32945__$1;
(statearr_32949_32972[(2)] = null);

(statearr_32949_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (4))){
var inst_32922 = (state_32945[(7)]);
var inst_32925 = cljs.core.first.call(null,inst_32922);
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32945__$1,(7),ch,inst_32925);
} else {
if((state_val_32946 === (13))){
var inst_32939 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32950_32973 = state_32945__$1;
(statearr_32950_32973[(2)] = inst_32939);

(statearr_32950_32973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (6))){
var inst_32930 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32930)){
var statearr_32951_32974 = state_32945__$1;
(statearr_32951_32974[(1)] = (8));

} else {
var statearr_32952_32975 = state_32945__$1;
(statearr_32952_32975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (3))){
var inst_32943 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32945__$1,inst_32943);
} else {
if((state_val_32946 === (12))){
var state_32945__$1 = state_32945;
var statearr_32953_32976 = state_32945__$1;
(statearr_32953_32976[(2)] = null);

(statearr_32953_32976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (2))){
var inst_32922 = (state_32945[(7)]);
var state_32945__$1 = state_32945;
if(cljs.core.truth_(inst_32922)){
var statearr_32954_32977 = state_32945__$1;
(statearr_32954_32977[(1)] = (4));

} else {
var statearr_32955_32978 = state_32945__$1;
(statearr_32955_32978[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (11))){
var inst_32936 = cljs.core.async.close_BANG_.call(null,ch);
var state_32945__$1 = state_32945;
var statearr_32956_32979 = state_32945__$1;
(statearr_32956_32979[(2)] = inst_32936);

(statearr_32956_32979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (9))){
var state_32945__$1 = state_32945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32957_32980 = state_32945__$1;
(statearr_32957_32980[(1)] = (11));

} else {
var statearr_32958_32981 = state_32945__$1;
(statearr_32958_32981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (5))){
var inst_32922 = (state_32945[(7)]);
var state_32945__$1 = state_32945;
var statearr_32959_32982 = state_32945__$1;
(statearr_32959_32982[(2)] = inst_32922);

(statearr_32959_32982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (10))){
var inst_32941 = (state_32945[(2)]);
var state_32945__$1 = state_32945;
var statearr_32960_32983 = state_32945__$1;
(statearr_32960_32983[(2)] = inst_32941);

(statearr_32960_32983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32946 === (8))){
var inst_32922 = (state_32945[(7)]);
var inst_32932 = cljs.core.next.call(null,inst_32922);
var inst_32922__$1 = inst_32932;
var state_32945__$1 = (function (){var statearr_32961 = state_32945;
(statearr_32961[(7)] = inst_32922__$1);

return statearr_32961;
})();
var statearr_32962_32984 = state_32945__$1;
(statearr_32962_32984[(2)] = null);

(statearr_32962_32984[(1)] = (2));


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
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_32966 = [null,null,null,null,null,null,null,null];
(statearr_32966[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_32966[(1)] = (1));

return statearr_32966;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_32945){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_32945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e32967){if((e32967 instanceof Object)){
var ex__24276__auto__ = e32967;
var statearr_32968_32985 = state_32945;
(statearr_32968_32985[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32986 = state_32945;
state_32945 = G__32986;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_32945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_32945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_32969 = f__24335__auto__.call(null);
(statearr_32969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_32969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj32988 = {};
return obj32988;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16615__auto__ = _;
if(and__16615__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16615__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17263__auto__ = (((_ == null))?null:_);
return (function (){var or__16627__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32990 = {};
return obj32990;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
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
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t33212 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33212 = (function (mult,ch,cs,meta33213){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33213 = meta33213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33214,meta33213__$1){
var self__ = this;
var _33214__$1 = this;
return (new cljs.core.async.t33212(self__.mult,self__.ch,self__.cs,meta33213__$1));
});})(cs))
;

cljs.core.async.t33212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33214){
var self__ = this;
var _33214__$1 = this;
return self__.meta33213;
});})(cs))
;

cljs.core.async.t33212.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t33212.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t33212.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t33212.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t33212.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t33212.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33213","meta33213",1469383509,null)], null);
});})(cs))
;

cljs.core.async.t33212.cljs$lang$type = true;

cljs.core.async.t33212.cljs$lang$ctorStr = "cljs.core.async/t33212";

cljs.core.async.t33212.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t33212");
});})(cs))
;

cljs.core.async.__GT_t33212 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t33212(mult__$1,ch__$1,cs__$1,meta33213){
return (new cljs.core.async.t33212(mult__$1,ch__$1,cs__$1,meta33213));
});})(cs))
;

}

return (new cljs.core.async.t33212(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24334__auto___33433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___33433,cs,m,dchan,dctr,done){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___33433,cs,m,dchan,dctr,done){
return (function (state_33345){
var state_val_33346 = (state_33345[(1)]);
if((state_val_33346 === (7))){
var inst_33341 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33347_33434 = state_33345__$1;
(statearr_33347_33434[(2)] = inst_33341);

(statearr_33347_33434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (20))){
var inst_33246 = (state_33345[(7)]);
var inst_33256 = cljs.core.first.call(null,inst_33246);
var inst_33257 = cljs.core.nth.call(null,inst_33256,(0),null);
var inst_33258 = cljs.core.nth.call(null,inst_33256,(1),null);
var state_33345__$1 = (function (){var statearr_33348 = state_33345;
(statearr_33348[(8)] = inst_33257);

return statearr_33348;
})();
if(cljs.core.truth_(inst_33258)){
var statearr_33349_33435 = state_33345__$1;
(statearr_33349_33435[(1)] = (22));

} else {
var statearr_33350_33436 = state_33345__$1;
(statearr_33350_33436[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (27))){
var inst_33288 = (state_33345[(9)]);
var inst_33217 = (state_33345[(10)]);
var inst_33286 = (state_33345[(11)]);
var inst_33293 = (state_33345[(12)]);
var inst_33293__$1 = cljs.core._nth.call(null,inst_33286,inst_33288);
var inst_33294 = cljs.core.async.put_BANG_.call(null,inst_33293__$1,inst_33217,done);
var state_33345__$1 = (function (){var statearr_33351 = state_33345;
(statearr_33351[(12)] = inst_33293__$1);

return statearr_33351;
})();
if(cljs.core.truth_(inst_33294)){
var statearr_33352_33437 = state_33345__$1;
(statearr_33352_33437[(1)] = (30));

} else {
var statearr_33353_33438 = state_33345__$1;
(statearr_33353_33438[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (1))){
var state_33345__$1 = state_33345;
var statearr_33354_33439 = state_33345__$1;
(statearr_33354_33439[(2)] = null);

(statearr_33354_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (24))){
var inst_33246 = (state_33345[(7)]);
var inst_33263 = (state_33345[(2)]);
var inst_33264 = cljs.core.next.call(null,inst_33246);
var inst_33226 = inst_33264;
var inst_33227 = null;
var inst_33228 = (0);
var inst_33229 = (0);
var state_33345__$1 = (function (){var statearr_33355 = state_33345;
(statearr_33355[(13)] = inst_33263);

(statearr_33355[(14)] = inst_33229);

(statearr_33355[(15)] = inst_33227);

(statearr_33355[(16)] = inst_33228);

(statearr_33355[(17)] = inst_33226);

return statearr_33355;
})();
var statearr_33356_33440 = state_33345__$1;
(statearr_33356_33440[(2)] = null);

(statearr_33356_33440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (39))){
var state_33345__$1 = state_33345;
var statearr_33360_33441 = state_33345__$1;
(statearr_33360_33441[(2)] = null);

(statearr_33360_33441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (4))){
var inst_33217 = (state_33345[(10)]);
var inst_33217__$1 = (state_33345[(2)]);
var inst_33218 = (inst_33217__$1 == null);
var state_33345__$1 = (function (){var statearr_33361 = state_33345;
(statearr_33361[(10)] = inst_33217__$1);

return statearr_33361;
})();
if(cljs.core.truth_(inst_33218)){
var statearr_33362_33442 = state_33345__$1;
(statearr_33362_33442[(1)] = (5));

} else {
var statearr_33363_33443 = state_33345__$1;
(statearr_33363_33443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (15))){
var inst_33229 = (state_33345[(14)]);
var inst_33227 = (state_33345[(15)]);
var inst_33228 = (state_33345[(16)]);
var inst_33226 = (state_33345[(17)]);
var inst_33242 = (state_33345[(2)]);
var inst_33243 = (inst_33229 + (1));
var tmp33357 = inst_33227;
var tmp33358 = inst_33228;
var tmp33359 = inst_33226;
var inst_33226__$1 = tmp33359;
var inst_33227__$1 = tmp33357;
var inst_33228__$1 = tmp33358;
var inst_33229__$1 = inst_33243;
var state_33345__$1 = (function (){var statearr_33364 = state_33345;
(statearr_33364[(14)] = inst_33229__$1);

(statearr_33364[(15)] = inst_33227__$1);

(statearr_33364[(16)] = inst_33228__$1);

(statearr_33364[(17)] = inst_33226__$1);

(statearr_33364[(18)] = inst_33242);

return statearr_33364;
})();
var statearr_33365_33444 = state_33345__$1;
(statearr_33365_33444[(2)] = null);

(statearr_33365_33444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (21))){
var inst_33267 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33369_33445 = state_33345__$1;
(statearr_33369_33445[(2)] = inst_33267);

(statearr_33369_33445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (31))){
var inst_33293 = (state_33345[(12)]);
var inst_33297 = done.call(null,null);
var inst_33298 = cljs.core.async.untap_STAR_.call(null,m,inst_33293);
var state_33345__$1 = (function (){var statearr_33370 = state_33345;
(statearr_33370[(19)] = inst_33297);

return statearr_33370;
})();
var statearr_33371_33446 = state_33345__$1;
(statearr_33371_33446[(2)] = inst_33298);

(statearr_33371_33446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (32))){
var inst_33288 = (state_33345[(9)]);
var inst_33287 = (state_33345[(20)]);
var inst_33286 = (state_33345[(11)]);
var inst_33285 = (state_33345[(21)]);
var inst_33300 = (state_33345[(2)]);
var inst_33301 = (inst_33288 + (1));
var tmp33366 = inst_33287;
var tmp33367 = inst_33286;
var tmp33368 = inst_33285;
var inst_33285__$1 = tmp33368;
var inst_33286__$1 = tmp33367;
var inst_33287__$1 = tmp33366;
var inst_33288__$1 = inst_33301;
var state_33345__$1 = (function (){var statearr_33372 = state_33345;
(statearr_33372[(9)] = inst_33288__$1);

(statearr_33372[(20)] = inst_33287__$1);

(statearr_33372[(11)] = inst_33286__$1);

(statearr_33372[(21)] = inst_33285__$1);

(statearr_33372[(22)] = inst_33300);

return statearr_33372;
})();
var statearr_33373_33447 = state_33345__$1;
(statearr_33373_33447[(2)] = null);

(statearr_33373_33447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (40))){
var inst_33313 = (state_33345[(23)]);
var inst_33317 = done.call(null,null);
var inst_33318 = cljs.core.async.untap_STAR_.call(null,m,inst_33313);
var state_33345__$1 = (function (){var statearr_33374 = state_33345;
(statearr_33374[(24)] = inst_33317);

return statearr_33374;
})();
var statearr_33375_33448 = state_33345__$1;
(statearr_33375_33448[(2)] = inst_33318);

(statearr_33375_33448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (33))){
var inst_33304 = (state_33345[(25)]);
var inst_33306 = cljs.core.chunked_seq_QMARK_.call(null,inst_33304);
var state_33345__$1 = state_33345;
if(inst_33306){
var statearr_33376_33449 = state_33345__$1;
(statearr_33376_33449[(1)] = (36));

} else {
var statearr_33377_33450 = state_33345__$1;
(statearr_33377_33450[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (13))){
var inst_33236 = (state_33345[(26)]);
var inst_33239 = cljs.core.async.close_BANG_.call(null,inst_33236);
var state_33345__$1 = state_33345;
var statearr_33378_33451 = state_33345__$1;
(statearr_33378_33451[(2)] = inst_33239);

(statearr_33378_33451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (22))){
var inst_33257 = (state_33345[(8)]);
var inst_33260 = cljs.core.async.close_BANG_.call(null,inst_33257);
var state_33345__$1 = state_33345;
var statearr_33379_33452 = state_33345__$1;
(statearr_33379_33452[(2)] = inst_33260);

(statearr_33379_33452[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (36))){
var inst_33304 = (state_33345[(25)]);
var inst_33308 = cljs.core.chunk_first.call(null,inst_33304);
var inst_33309 = cljs.core.chunk_rest.call(null,inst_33304);
var inst_33310 = cljs.core.count.call(null,inst_33308);
var inst_33285 = inst_33309;
var inst_33286 = inst_33308;
var inst_33287 = inst_33310;
var inst_33288 = (0);
var state_33345__$1 = (function (){var statearr_33380 = state_33345;
(statearr_33380[(9)] = inst_33288);

(statearr_33380[(20)] = inst_33287);

(statearr_33380[(11)] = inst_33286);

(statearr_33380[(21)] = inst_33285);

return statearr_33380;
})();
var statearr_33381_33453 = state_33345__$1;
(statearr_33381_33453[(2)] = null);

(statearr_33381_33453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (41))){
var inst_33304 = (state_33345[(25)]);
var inst_33320 = (state_33345[(2)]);
var inst_33321 = cljs.core.next.call(null,inst_33304);
var inst_33285 = inst_33321;
var inst_33286 = null;
var inst_33287 = (0);
var inst_33288 = (0);
var state_33345__$1 = (function (){var statearr_33382 = state_33345;
(statearr_33382[(9)] = inst_33288);

(statearr_33382[(20)] = inst_33287);

(statearr_33382[(11)] = inst_33286);

(statearr_33382[(27)] = inst_33320);

(statearr_33382[(21)] = inst_33285);

return statearr_33382;
})();
var statearr_33383_33454 = state_33345__$1;
(statearr_33383_33454[(2)] = null);

(statearr_33383_33454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (43))){
var state_33345__$1 = state_33345;
var statearr_33384_33455 = state_33345__$1;
(statearr_33384_33455[(2)] = null);

(statearr_33384_33455[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (29))){
var inst_33329 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33385_33456 = state_33345__$1;
(statearr_33385_33456[(2)] = inst_33329);

(statearr_33385_33456[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (44))){
var inst_33338 = (state_33345[(2)]);
var state_33345__$1 = (function (){var statearr_33386 = state_33345;
(statearr_33386[(28)] = inst_33338);

return statearr_33386;
})();
var statearr_33387_33457 = state_33345__$1;
(statearr_33387_33457[(2)] = null);

(statearr_33387_33457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (6))){
var inst_33277 = (state_33345[(29)]);
var inst_33276 = cljs.core.deref.call(null,cs);
var inst_33277__$1 = cljs.core.keys.call(null,inst_33276);
var inst_33278 = cljs.core.count.call(null,inst_33277__$1);
var inst_33279 = cljs.core.reset_BANG_.call(null,dctr,inst_33278);
var inst_33284 = cljs.core.seq.call(null,inst_33277__$1);
var inst_33285 = inst_33284;
var inst_33286 = null;
var inst_33287 = (0);
var inst_33288 = (0);
var state_33345__$1 = (function (){var statearr_33388 = state_33345;
(statearr_33388[(9)] = inst_33288);

(statearr_33388[(29)] = inst_33277__$1);

(statearr_33388[(20)] = inst_33287);

(statearr_33388[(11)] = inst_33286);

(statearr_33388[(21)] = inst_33285);

(statearr_33388[(30)] = inst_33279);

return statearr_33388;
})();
var statearr_33389_33458 = state_33345__$1;
(statearr_33389_33458[(2)] = null);

(statearr_33389_33458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (28))){
var inst_33285 = (state_33345[(21)]);
var inst_33304 = (state_33345[(25)]);
var inst_33304__$1 = cljs.core.seq.call(null,inst_33285);
var state_33345__$1 = (function (){var statearr_33390 = state_33345;
(statearr_33390[(25)] = inst_33304__$1);

return statearr_33390;
})();
if(inst_33304__$1){
var statearr_33391_33459 = state_33345__$1;
(statearr_33391_33459[(1)] = (33));

} else {
var statearr_33392_33460 = state_33345__$1;
(statearr_33392_33460[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (25))){
var inst_33288 = (state_33345[(9)]);
var inst_33287 = (state_33345[(20)]);
var inst_33290 = (inst_33288 < inst_33287);
var inst_33291 = inst_33290;
var state_33345__$1 = state_33345;
if(cljs.core.truth_(inst_33291)){
var statearr_33393_33461 = state_33345__$1;
(statearr_33393_33461[(1)] = (27));

} else {
var statearr_33394_33462 = state_33345__$1;
(statearr_33394_33462[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (34))){
var state_33345__$1 = state_33345;
var statearr_33395_33463 = state_33345__$1;
(statearr_33395_33463[(2)] = null);

(statearr_33395_33463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (17))){
var state_33345__$1 = state_33345;
var statearr_33396_33464 = state_33345__$1;
(statearr_33396_33464[(2)] = null);

(statearr_33396_33464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (3))){
var inst_33343 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33345__$1,inst_33343);
} else {
if((state_val_33346 === (12))){
var inst_33272 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33397_33465 = state_33345__$1;
(statearr_33397_33465[(2)] = inst_33272);

(statearr_33397_33465[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (2))){
var state_33345__$1 = state_33345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33345__$1,(4),ch);
} else {
if((state_val_33346 === (23))){
var state_33345__$1 = state_33345;
var statearr_33398_33466 = state_33345__$1;
(statearr_33398_33466[(2)] = null);

(statearr_33398_33466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (35))){
var inst_33327 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33399_33467 = state_33345__$1;
(statearr_33399_33467[(2)] = inst_33327);

(statearr_33399_33467[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (19))){
var inst_33246 = (state_33345[(7)]);
var inst_33250 = cljs.core.chunk_first.call(null,inst_33246);
var inst_33251 = cljs.core.chunk_rest.call(null,inst_33246);
var inst_33252 = cljs.core.count.call(null,inst_33250);
var inst_33226 = inst_33251;
var inst_33227 = inst_33250;
var inst_33228 = inst_33252;
var inst_33229 = (0);
var state_33345__$1 = (function (){var statearr_33400 = state_33345;
(statearr_33400[(14)] = inst_33229);

(statearr_33400[(15)] = inst_33227);

(statearr_33400[(16)] = inst_33228);

(statearr_33400[(17)] = inst_33226);

return statearr_33400;
})();
var statearr_33401_33468 = state_33345__$1;
(statearr_33401_33468[(2)] = null);

(statearr_33401_33468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (11))){
var inst_33226 = (state_33345[(17)]);
var inst_33246 = (state_33345[(7)]);
var inst_33246__$1 = cljs.core.seq.call(null,inst_33226);
var state_33345__$1 = (function (){var statearr_33402 = state_33345;
(statearr_33402[(7)] = inst_33246__$1);

return statearr_33402;
})();
if(inst_33246__$1){
var statearr_33403_33469 = state_33345__$1;
(statearr_33403_33469[(1)] = (16));

} else {
var statearr_33404_33470 = state_33345__$1;
(statearr_33404_33470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (9))){
var inst_33274 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33405_33471 = state_33345__$1;
(statearr_33405_33471[(2)] = inst_33274);

(statearr_33405_33471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (5))){
var inst_33224 = cljs.core.deref.call(null,cs);
var inst_33225 = cljs.core.seq.call(null,inst_33224);
var inst_33226 = inst_33225;
var inst_33227 = null;
var inst_33228 = (0);
var inst_33229 = (0);
var state_33345__$1 = (function (){var statearr_33406 = state_33345;
(statearr_33406[(14)] = inst_33229);

(statearr_33406[(15)] = inst_33227);

(statearr_33406[(16)] = inst_33228);

(statearr_33406[(17)] = inst_33226);

return statearr_33406;
})();
var statearr_33407_33472 = state_33345__$1;
(statearr_33407_33472[(2)] = null);

(statearr_33407_33472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (14))){
var state_33345__$1 = state_33345;
var statearr_33408_33473 = state_33345__$1;
(statearr_33408_33473[(2)] = null);

(statearr_33408_33473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (45))){
var inst_33335 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33409_33474 = state_33345__$1;
(statearr_33409_33474[(2)] = inst_33335);

(statearr_33409_33474[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (26))){
var inst_33277 = (state_33345[(29)]);
var inst_33331 = (state_33345[(2)]);
var inst_33332 = cljs.core.seq.call(null,inst_33277);
var state_33345__$1 = (function (){var statearr_33410 = state_33345;
(statearr_33410[(31)] = inst_33331);

return statearr_33410;
})();
if(inst_33332){
var statearr_33411_33475 = state_33345__$1;
(statearr_33411_33475[(1)] = (42));

} else {
var statearr_33412_33476 = state_33345__$1;
(statearr_33412_33476[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (16))){
var inst_33246 = (state_33345[(7)]);
var inst_33248 = cljs.core.chunked_seq_QMARK_.call(null,inst_33246);
var state_33345__$1 = state_33345;
if(inst_33248){
var statearr_33413_33477 = state_33345__$1;
(statearr_33413_33477[(1)] = (19));

} else {
var statearr_33414_33478 = state_33345__$1;
(statearr_33414_33478[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (38))){
var inst_33324 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33415_33479 = state_33345__$1;
(statearr_33415_33479[(2)] = inst_33324);

(statearr_33415_33479[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (30))){
var state_33345__$1 = state_33345;
var statearr_33416_33480 = state_33345__$1;
(statearr_33416_33480[(2)] = null);

(statearr_33416_33480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (10))){
var inst_33229 = (state_33345[(14)]);
var inst_33227 = (state_33345[(15)]);
var inst_33235 = cljs.core._nth.call(null,inst_33227,inst_33229);
var inst_33236 = cljs.core.nth.call(null,inst_33235,(0),null);
var inst_33237 = cljs.core.nth.call(null,inst_33235,(1),null);
var state_33345__$1 = (function (){var statearr_33417 = state_33345;
(statearr_33417[(26)] = inst_33236);

return statearr_33417;
})();
if(cljs.core.truth_(inst_33237)){
var statearr_33418_33481 = state_33345__$1;
(statearr_33418_33481[(1)] = (13));

} else {
var statearr_33419_33482 = state_33345__$1;
(statearr_33419_33482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (18))){
var inst_33270 = (state_33345[(2)]);
var state_33345__$1 = state_33345;
var statearr_33420_33483 = state_33345__$1;
(statearr_33420_33483[(2)] = inst_33270);

(statearr_33420_33483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (42))){
var state_33345__$1 = state_33345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33345__$1,(45),dchan);
} else {
if((state_val_33346 === (37))){
var inst_33313 = (state_33345[(23)]);
var inst_33217 = (state_33345[(10)]);
var inst_33304 = (state_33345[(25)]);
var inst_33313__$1 = cljs.core.first.call(null,inst_33304);
var inst_33314 = cljs.core.async.put_BANG_.call(null,inst_33313__$1,inst_33217,done);
var state_33345__$1 = (function (){var statearr_33421 = state_33345;
(statearr_33421[(23)] = inst_33313__$1);

return statearr_33421;
})();
if(cljs.core.truth_(inst_33314)){
var statearr_33422_33484 = state_33345__$1;
(statearr_33422_33484[(1)] = (39));

} else {
var statearr_33423_33485 = state_33345__$1;
(statearr_33423_33485[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33346 === (8))){
var inst_33229 = (state_33345[(14)]);
var inst_33228 = (state_33345[(16)]);
var inst_33231 = (inst_33229 < inst_33228);
var inst_33232 = inst_33231;
var state_33345__$1 = state_33345;
if(cljs.core.truth_(inst_33232)){
var statearr_33424_33486 = state_33345__$1;
(statearr_33424_33486[(1)] = (10));

} else {
var statearr_33425_33487 = state_33345__$1;
(statearr_33425_33487[(1)] = (11));

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
});})(c__24334__auto___33433,cs,m,dchan,dctr,done))
;
return ((function (switch__24272__auto__,c__24334__auto___33433,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24273__auto__ = null;
var cljs$core$async$mult_$_state_machine__24273__auto____0 = (function (){
var statearr_33429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33429[(0)] = cljs$core$async$mult_$_state_machine__24273__auto__);

(statearr_33429[(1)] = (1));

return statearr_33429;
});
var cljs$core$async$mult_$_state_machine__24273__auto____1 = (function (state_33345){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_33345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e33430){if((e33430 instanceof Object)){
var ex__24276__auto__ = e33430;
var statearr_33431_33488 = state_33345;
(statearr_33431_33488[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33489 = state_33345;
state_33345 = G__33489;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24273__auto__ = function(state_33345){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24273__auto____1.call(this,state_33345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24273__auto____0;
cljs$core$async$mult_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24273__auto____1;
return cljs$core$async$mult_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___33433,cs,m,dchan,dctr,done))
})();
var state__24336__auto__ = (function (){var statearr_33432 = f__24335__auto__.call(null);
(statearr_33432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___33433);

return statearr_33432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___33433,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__33491 = arguments.length;
switch (G__33491) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj33494 = {};
return obj33494;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16615__auto__ = m;
if(and__16615__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16615__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17263__auto__ = (((m == null))?null:m);
return (function (){var or__16627__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17667__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17667__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33499){
var map__33500 = p__33499;
var map__33500__$1 = ((cljs.core.seq_QMARK_.call(null,map__33500))?cljs.core.apply.call(null,cljs.core.hash_map,map__33500):map__33500);
var opts = map__33500__$1;
var statearr_33501_33504 = state;
(statearr_33501_33504[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__33500,map__33500__$1,opts){
return (function (val){
var statearr_33502_33505 = state;
(statearr_33502_33505[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33500,map__33500__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_33503_33506 = state;
(statearr_33503_33506[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33495){
var G__33496 = cljs.core.first.call(null,seq33495);
var seq33495__$1 = cljs.core.next.call(null,seq33495);
var G__33497 = cljs.core.first.call(null,seq33495__$1);
var seq33495__$2 = cljs.core.next.call(null,seq33495__$1);
var G__33498 = cljs.core.first.call(null,seq33495__$2);
var seq33495__$3 = cljs.core.next.call(null,seq33495__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33496,G__33497,G__33498,seq33495__$3);
});
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
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t33626 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33626 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33627){
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
this.meta33627 = meta33627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33628,meta33627__$1){
var self__ = this;
var _33628__$1 = this;
return (new cljs.core.async.t33626(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33627__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33628){
var self__ = this;
var _33628__$1 = this;
return self__.meta33627;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33626.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t33626.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t33626.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33627","meta33627",-534857492,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t33626.cljs$lang$type = true;

cljs.core.async.t33626.cljs$lang$ctorStr = "cljs.core.async/t33626";

cljs.core.async.t33626.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t33626");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t33626 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t33626(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33627){
return (new cljs.core.async.t33626(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33627));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t33626(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24334__auto___33745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___33745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___33745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33698){
var state_val_33699 = (state_33698[(1)]);
if((state_val_33699 === (7))){
var inst_33642 = (state_33698[(7)]);
var inst_33647 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33642);
var state_33698__$1 = state_33698;
var statearr_33700_33746 = state_33698__$1;
(statearr_33700_33746[(2)] = inst_33647);

(statearr_33700_33746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (20))){
var inst_33657 = (state_33698[(8)]);
var state_33698__$1 = state_33698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33698__$1,(23),out,inst_33657);
} else {
if((state_val_33699 === (1))){
var inst_33632 = (state_33698[(9)]);
var inst_33632__$1 = calc_state.call(null);
var inst_33633 = cljs.core.seq_QMARK_.call(null,inst_33632__$1);
var state_33698__$1 = (function (){var statearr_33701 = state_33698;
(statearr_33701[(9)] = inst_33632__$1);

return statearr_33701;
})();
if(inst_33633){
var statearr_33702_33747 = state_33698__$1;
(statearr_33702_33747[(1)] = (2));

} else {
var statearr_33703_33748 = state_33698__$1;
(statearr_33703_33748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (24))){
var inst_33650 = (state_33698[(10)]);
var inst_33642 = inst_33650;
var state_33698__$1 = (function (){var statearr_33704 = state_33698;
(statearr_33704[(7)] = inst_33642);

return statearr_33704;
})();
var statearr_33705_33749 = state_33698__$1;
(statearr_33705_33749[(2)] = null);

(statearr_33705_33749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (4))){
var inst_33632 = (state_33698[(9)]);
var inst_33638 = (state_33698[(2)]);
var inst_33639 = cljs.core.get.call(null,inst_33638,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33640 = cljs.core.get.call(null,inst_33638,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33641 = cljs.core.get.call(null,inst_33638,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33642 = inst_33632;
var state_33698__$1 = (function (){var statearr_33706 = state_33698;
(statearr_33706[(11)] = inst_33641);

(statearr_33706[(12)] = inst_33640);

(statearr_33706[(13)] = inst_33639);

(statearr_33706[(7)] = inst_33642);

return statearr_33706;
})();
var statearr_33707_33750 = state_33698__$1;
(statearr_33707_33750[(2)] = null);

(statearr_33707_33750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (15))){
var state_33698__$1 = state_33698;
var statearr_33708_33751 = state_33698__$1;
(statearr_33708_33751[(2)] = null);

(statearr_33708_33751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (21))){
var inst_33650 = (state_33698[(10)]);
var inst_33642 = inst_33650;
var state_33698__$1 = (function (){var statearr_33709 = state_33698;
(statearr_33709[(7)] = inst_33642);

return statearr_33709;
})();
var statearr_33710_33752 = state_33698__$1;
(statearr_33710_33752[(2)] = null);

(statearr_33710_33752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (13))){
var inst_33694 = (state_33698[(2)]);
var state_33698__$1 = state_33698;
var statearr_33711_33753 = state_33698__$1;
(statearr_33711_33753[(2)] = inst_33694);

(statearr_33711_33753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (22))){
var inst_33692 = (state_33698[(2)]);
var state_33698__$1 = state_33698;
var statearr_33712_33754 = state_33698__$1;
(statearr_33712_33754[(2)] = inst_33692);

(statearr_33712_33754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (6))){
var inst_33696 = (state_33698[(2)]);
var state_33698__$1 = state_33698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33698__$1,inst_33696);
} else {
if((state_val_33699 === (25))){
var state_33698__$1 = state_33698;
var statearr_33713_33755 = state_33698__$1;
(statearr_33713_33755[(2)] = null);

(statearr_33713_33755[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (17))){
var inst_33672 = (state_33698[(14)]);
var state_33698__$1 = state_33698;
var statearr_33714_33756 = state_33698__$1;
(statearr_33714_33756[(2)] = inst_33672);

(statearr_33714_33756[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (3))){
var inst_33632 = (state_33698[(9)]);
var state_33698__$1 = state_33698;
var statearr_33715_33757 = state_33698__$1;
(statearr_33715_33757[(2)] = inst_33632);

(statearr_33715_33757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (12))){
var inst_33658 = (state_33698[(15)]);
var inst_33672 = (state_33698[(14)]);
var inst_33651 = (state_33698[(16)]);
var inst_33672__$1 = inst_33651.call(null,inst_33658);
var state_33698__$1 = (function (){var statearr_33716 = state_33698;
(statearr_33716[(14)] = inst_33672__$1);

return statearr_33716;
})();
if(cljs.core.truth_(inst_33672__$1)){
var statearr_33717_33758 = state_33698__$1;
(statearr_33717_33758[(1)] = (17));

} else {
var statearr_33718_33759 = state_33698__$1;
(statearr_33718_33759[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (2))){
var inst_33632 = (state_33698[(9)]);
var inst_33635 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33632);
var state_33698__$1 = state_33698;
var statearr_33719_33760 = state_33698__$1;
(statearr_33719_33760[(2)] = inst_33635);

(statearr_33719_33760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (23))){
var inst_33683 = (state_33698[(2)]);
var state_33698__$1 = state_33698;
if(cljs.core.truth_(inst_33683)){
var statearr_33720_33761 = state_33698__$1;
(statearr_33720_33761[(1)] = (24));

} else {
var statearr_33721_33762 = state_33698__$1;
(statearr_33721_33762[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (19))){
var inst_33680 = (state_33698[(2)]);
var state_33698__$1 = state_33698;
if(cljs.core.truth_(inst_33680)){
var statearr_33722_33763 = state_33698__$1;
(statearr_33722_33763[(1)] = (20));

} else {
var statearr_33723_33764 = state_33698__$1;
(statearr_33723_33764[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (11))){
var inst_33657 = (state_33698[(8)]);
var inst_33663 = (inst_33657 == null);
var state_33698__$1 = state_33698;
if(cljs.core.truth_(inst_33663)){
var statearr_33724_33765 = state_33698__$1;
(statearr_33724_33765[(1)] = (14));

} else {
var statearr_33725_33766 = state_33698__$1;
(statearr_33725_33766[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (9))){
var inst_33650 = (state_33698[(10)]);
var inst_33650__$1 = (state_33698[(2)]);
var inst_33651 = cljs.core.get.call(null,inst_33650__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33652 = cljs.core.get.call(null,inst_33650__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33653 = cljs.core.get.call(null,inst_33650__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33698__$1 = (function (){var statearr_33726 = state_33698;
(statearr_33726[(17)] = inst_33652);

(statearr_33726[(10)] = inst_33650__$1);

(statearr_33726[(16)] = inst_33651);

return statearr_33726;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33698__$1,(10),inst_33653);
} else {
if((state_val_33699 === (5))){
var inst_33642 = (state_33698[(7)]);
var inst_33645 = cljs.core.seq_QMARK_.call(null,inst_33642);
var state_33698__$1 = state_33698;
if(inst_33645){
var statearr_33727_33767 = state_33698__$1;
(statearr_33727_33767[(1)] = (7));

} else {
var statearr_33728_33768 = state_33698__$1;
(statearr_33728_33768[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (14))){
var inst_33658 = (state_33698[(15)]);
var inst_33665 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33658);
var state_33698__$1 = state_33698;
var statearr_33729_33769 = state_33698__$1;
(statearr_33729_33769[(2)] = inst_33665);

(statearr_33729_33769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (26))){
var inst_33688 = (state_33698[(2)]);
var state_33698__$1 = state_33698;
var statearr_33730_33770 = state_33698__$1;
(statearr_33730_33770[(2)] = inst_33688);

(statearr_33730_33770[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (16))){
var inst_33668 = (state_33698[(2)]);
var inst_33669 = calc_state.call(null);
var inst_33642 = inst_33669;
var state_33698__$1 = (function (){var statearr_33731 = state_33698;
(statearr_33731[(18)] = inst_33668);

(statearr_33731[(7)] = inst_33642);

return statearr_33731;
})();
var statearr_33732_33771 = state_33698__$1;
(statearr_33732_33771[(2)] = null);

(statearr_33732_33771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (10))){
var inst_33658 = (state_33698[(15)]);
var inst_33657 = (state_33698[(8)]);
var inst_33656 = (state_33698[(2)]);
var inst_33657__$1 = cljs.core.nth.call(null,inst_33656,(0),null);
var inst_33658__$1 = cljs.core.nth.call(null,inst_33656,(1),null);
var inst_33659 = (inst_33657__$1 == null);
var inst_33660 = cljs.core._EQ_.call(null,inst_33658__$1,change);
var inst_33661 = (inst_33659) || (inst_33660);
var state_33698__$1 = (function (){var statearr_33733 = state_33698;
(statearr_33733[(15)] = inst_33658__$1);

(statearr_33733[(8)] = inst_33657__$1);

return statearr_33733;
})();
if(cljs.core.truth_(inst_33661)){
var statearr_33734_33772 = state_33698__$1;
(statearr_33734_33772[(1)] = (11));

} else {
var statearr_33735_33773 = state_33698__$1;
(statearr_33735_33773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (18))){
var inst_33658 = (state_33698[(15)]);
var inst_33652 = (state_33698[(17)]);
var inst_33651 = (state_33698[(16)]);
var inst_33675 = cljs.core.empty_QMARK_.call(null,inst_33651);
var inst_33676 = inst_33652.call(null,inst_33658);
var inst_33677 = cljs.core.not.call(null,inst_33676);
var inst_33678 = (inst_33675) && (inst_33677);
var state_33698__$1 = state_33698;
var statearr_33736_33774 = state_33698__$1;
(statearr_33736_33774[(2)] = inst_33678);

(statearr_33736_33774[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33699 === (8))){
var inst_33642 = (state_33698[(7)]);
var state_33698__$1 = state_33698;
var statearr_33737_33775 = state_33698__$1;
(statearr_33737_33775[(2)] = inst_33642);

(statearr_33737_33775[(1)] = (9));


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
});})(c__24334__auto___33745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24272__auto__,c__24334__auto___33745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24273__auto__ = null;
var cljs$core$async$mix_$_state_machine__24273__auto____0 = (function (){
var statearr_33741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33741[(0)] = cljs$core$async$mix_$_state_machine__24273__auto__);

(statearr_33741[(1)] = (1));

return statearr_33741;
});
var cljs$core$async$mix_$_state_machine__24273__auto____1 = (function (state_33698){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_33698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e33742){if((e33742 instanceof Object)){
var ex__24276__auto__ = e33742;
var statearr_33743_33776 = state_33698;
(statearr_33743_33776[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33777 = state_33698;
state_33698 = G__33777;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24273__auto__ = function(state_33698){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24273__auto____1.call(this,state_33698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24273__auto____0;
cljs$core$async$mix_$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24273__auto____1;
return cljs$core$async$mix_$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___33745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24336__auto__ = (function (){var statearr_33744 = f__24335__auto__.call(null);
(statearr_33744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___33745);

return statearr_33744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___33745,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
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
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj33779 = {};
return obj33779;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16615__auto__ = p;
if(and__16615__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16615__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17263__auto__ = (((p == null))?null:p);
return (function (){var or__16627__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16615__auto__ = p;
if(and__16615__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16615__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17263__auto__ = (((p == null))?null:p);
return (function (){var or__16627__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__33781 = arguments.length;
switch (G__33781) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16615__auto__ = p;
if(and__16615__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16615__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17263__auto__ = (((p == null))?null:p);
return (function (){var or__16627__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16615__auto__ = p;
if(and__16615__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16615__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17263__auto__ = (((p == null))?null:p);
return (function (){var or__16627__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17263__auto__)]);
if(or__16627__auto__){
return or__16627__auto__;
} else {
var or__16627__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16627__auto____$1){
return or__16627__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

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
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__33785 = arguments.length;
switch (G__33785) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16627__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16627__auto__)){
return or__16627__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16627__auto__,mults){
return (function (p1__33783_SHARP_){
if(cljs.core.truth_(p1__33783_SHARP_.call(null,topic))){
return p1__33783_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33783_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16627__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33786 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33786 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33787){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33787 = meta33787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33788,meta33787__$1){
var self__ = this;
var _33788__$1 = this;
return (new cljs.core.async.t33786(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33787__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33788){
var self__ = this;
var _33788__$1 = this;
return self__.meta33787;
});})(mults,ensure_mult))
;

cljs.core.async.t33786.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33786.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33786.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33786.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t33786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33786.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33787","meta33787",532653103,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t33786.cljs$lang$type = true;

cljs.core.async.t33786.cljs$lang$ctorStr = "cljs.core.async/t33786";

cljs.core.async.t33786.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t33786");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33786 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t33786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33787){
return (new cljs.core.async.t33786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33787));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33786(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24334__auto___33909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___33909,mults,ensure_mult,p){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___33909,mults,ensure_mult,p){
return (function (state_33860){
var state_val_33861 = (state_33860[(1)]);
if((state_val_33861 === (7))){
var inst_33856 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33862_33910 = state_33860__$1;
(statearr_33862_33910[(2)] = inst_33856);

(statearr_33862_33910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (20))){
var state_33860__$1 = state_33860;
var statearr_33863_33911 = state_33860__$1;
(statearr_33863_33911[(2)] = null);

(statearr_33863_33911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (1))){
var state_33860__$1 = state_33860;
var statearr_33864_33912 = state_33860__$1;
(statearr_33864_33912[(2)] = null);

(statearr_33864_33912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (24))){
var inst_33839 = (state_33860[(7)]);
var inst_33848 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33839);
var state_33860__$1 = state_33860;
var statearr_33865_33913 = state_33860__$1;
(statearr_33865_33913[(2)] = inst_33848);

(statearr_33865_33913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (4))){
var inst_33791 = (state_33860[(8)]);
var inst_33791__$1 = (state_33860[(2)]);
var inst_33792 = (inst_33791__$1 == null);
var state_33860__$1 = (function (){var statearr_33866 = state_33860;
(statearr_33866[(8)] = inst_33791__$1);

return statearr_33866;
})();
if(cljs.core.truth_(inst_33792)){
var statearr_33867_33914 = state_33860__$1;
(statearr_33867_33914[(1)] = (5));

} else {
var statearr_33868_33915 = state_33860__$1;
(statearr_33868_33915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (15))){
var inst_33833 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33869_33916 = state_33860__$1;
(statearr_33869_33916[(2)] = inst_33833);

(statearr_33869_33916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (21))){
var inst_33853 = (state_33860[(2)]);
var state_33860__$1 = (function (){var statearr_33870 = state_33860;
(statearr_33870[(9)] = inst_33853);

return statearr_33870;
})();
var statearr_33871_33917 = state_33860__$1;
(statearr_33871_33917[(2)] = null);

(statearr_33871_33917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (13))){
var inst_33815 = (state_33860[(10)]);
var inst_33817 = cljs.core.chunked_seq_QMARK_.call(null,inst_33815);
var state_33860__$1 = state_33860;
if(inst_33817){
var statearr_33872_33918 = state_33860__$1;
(statearr_33872_33918[(1)] = (16));

} else {
var statearr_33873_33919 = state_33860__$1;
(statearr_33873_33919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (22))){
var inst_33845 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33845)){
var statearr_33874_33920 = state_33860__$1;
(statearr_33874_33920[(1)] = (23));

} else {
var statearr_33875_33921 = state_33860__$1;
(statearr_33875_33921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (6))){
var inst_33839 = (state_33860[(7)]);
var inst_33791 = (state_33860[(8)]);
var inst_33841 = (state_33860[(11)]);
var inst_33839__$1 = topic_fn.call(null,inst_33791);
var inst_33840 = cljs.core.deref.call(null,mults);
var inst_33841__$1 = cljs.core.get.call(null,inst_33840,inst_33839__$1);
var state_33860__$1 = (function (){var statearr_33876 = state_33860;
(statearr_33876[(7)] = inst_33839__$1);

(statearr_33876[(11)] = inst_33841__$1);

return statearr_33876;
})();
if(cljs.core.truth_(inst_33841__$1)){
var statearr_33877_33922 = state_33860__$1;
(statearr_33877_33922[(1)] = (19));

} else {
var statearr_33878_33923 = state_33860__$1;
(statearr_33878_33923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (25))){
var inst_33850 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33879_33924 = state_33860__$1;
(statearr_33879_33924[(2)] = inst_33850);

(statearr_33879_33924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (17))){
var inst_33815 = (state_33860[(10)]);
var inst_33824 = cljs.core.first.call(null,inst_33815);
var inst_33825 = cljs.core.async.muxch_STAR_.call(null,inst_33824);
var inst_33826 = cljs.core.async.close_BANG_.call(null,inst_33825);
var inst_33827 = cljs.core.next.call(null,inst_33815);
var inst_33801 = inst_33827;
var inst_33802 = null;
var inst_33803 = (0);
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33880 = state_33860;
(statearr_33880[(12)] = inst_33826);

(statearr_33880[(13)] = inst_33802);

(statearr_33880[(14)] = inst_33803);

(statearr_33880[(15)] = inst_33804);

(statearr_33880[(16)] = inst_33801);

return statearr_33880;
})();
var statearr_33881_33925 = state_33860__$1;
(statearr_33881_33925[(2)] = null);

(statearr_33881_33925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (3))){
var inst_33858 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33860__$1,inst_33858);
} else {
if((state_val_33861 === (12))){
var inst_33835 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33882_33926 = state_33860__$1;
(statearr_33882_33926[(2)] = inst_33835);

(statearr_33882_33926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (2))){
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33860__$1,(4),ch);
} else {
if((state_val_33861 === (23))){
var state_33860__$1 = state_33860;
var statearr_33883_33927 = state_33860__$1;
(statearr_33883_33927[(2)] = null);

(statearr_33883_33927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (19))){
var inst_33791 = (state_33860[(8)]);
var inst_33841 = (state_33860[(11)]);
var inst_33843 = cljs.core.async.muxch_STAR_.call(null,inst_33841);
var state_33860__$1 = state_33860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33860__$1,(22),inst_33843,inst_33791);
} else {
if((state_val_33861 === (11))){
var inst_33801 = (state_33860[(16)]);
var inst_33815 = (state_33860[(10)]);
var inst_33815__$1 = cljs.core.seq.call(null,inst_33801);
var state_33860__$1 = (function (){var statearr_33884 = state_33860;
(statearr_33884[(10)] = inst_33815__$1);

return statearr_33884;
})();
if(inst_33815__$1){
var statearr_33885_33928 = state_33860__$1;
(statearr_33885_33928[(1)] = (13));

} else {
var statearr_33886_33929 = state_33860__$1;
(statearr_33886_33929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (9))){
var inst_33837 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33887_33930 = state_33860__$1;
(statearr_33887_33930[(2)] = inst_33837);

(statearr_33887_33930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (5))){
var inst_33798 = cljs.core.deref.call(null,mults);
var inst_33799 = cljs.core.vals.call(null,inst_33798);
var inst_33800 = cljs.core.seq.call(null,inst_33799);
var inst_33801 = inst_33800;
var inst_33802 = null;
var inst_33803 = (0);
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33888 = state_33860;
(statearr_33888[(13)] = inst_33802);

(statearr_33888[(14)] = inst_33803);

(statearr_33888[(15)] = inst_33804);

(statearr_33888[(16)] = inst_33801);

return statearr_33888;
})();
var statearr_33889_33931 = state_33860__$1;
(statearr_33889_33931[(2)] = null);

(statearr_33889_33931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (14))){
var state_33860__$1 = state_33860;
var statearr_33893_33932 = state_33860__$1;
(statearr_33893_33932[(2)] = null);

(statearr_33893_33932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (16))){
var inst_33815 = (state_33860[(10)]);
var inst_33819 = cljs.core.chunk_first.call(null,inst_33815);
var inst_33820 = cljs.core.chunk_rest.call(null,inst_33815);
var inst_33821 = cljs.core.count.call(null,inst_33819);
var inst_33801 = inst_33820;
var inst_33802 = inst_33819;
var inst_33803 = inst_33821;
var inst_33804 = (0);
var state_33860__$1 = (function (){var statearr_33894 = state_33860;
(statearr_33894[(13)] = inst_33802);

(statearr_33894[(14)] = inst_33803);

(statearr_33894[(15)] = inst_33804);

(statearr_33894[(16)] = inst_33801);

return statearr_33894;
})();
var statearr_33895_33933 = state_33860__$1;
(statearr_33895_33933[(2)] = null);

(statearr_33895_33933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (10))){
var inst_33802 = (state_33860[(13)]);
var inst_33803 = (state_33860[(14)]);
var inst_33804 = (state_33860[(15)]);
var inst_33801 = (state_33860[(16)]);
var inst_33809 = cljs.core._nth.call(null,inst_33802,inst_33804);
var inst_33810 = cljs.core.async.muxch_STAR_.call(null,inst_33809);
var inst_33811 = cljs.core.async.close_BANG_.call(null,inst_33810);
var inst_33812 = (inst_33804 + (1));
var tmp33890 = inst_33802;
var tmp33891 = inst_33803;
var tmp33892 = inst_33801;
var inst_33801__$1 = tmp33892;
var inst_33802__$1 = tmp33890;
var inst_33803__$1 = tmp33891;
var inst_33804__$1 = inst_33812;
var state_33860__$1 = (function (){var statearr_33896 = state_33860;
(statearr_33896[(17)] = inst_33811);

(statearr_33896[(13)] = inst_33802__$1);

(statearr_33896[(14)] = inst_33803__$1);

(statearr_33896[(15)] = inst_33804__$1);

(statearr_33896[(16)] = inst_33801__$1);

return statearr_33896;
})();
var statearr_33897_33934 = state_33860__$1;
(statearr_33897_33934[(2)] = null);

(statearr_33897_33934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (18))){
var inst_33830 = (state_33860[(2)]);
var state_33860__$1 = state_33860;
var statearr_33898_33935 = state_33860__$1;
(statearr_33898_33935[(2)] = inst_33830);

(statearr_33898_33935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33861 === (8))){
var inst_33803 = (state_33860[(14)]);
var inst_33804 = (state_33860[(15)]);
var inst_33806 = (inst_33804 < inst_33803);
var inst_33807 = inst_33806;
var state_33860__$1 = state_33860;
if(cljs.core.truth_(inst_33807)){
var statearr_33899_33936 = state_33860__$1;
(statearr_33899_33936[(1)] = (10));

} else {
var statearr_33900_33937 = state_33860__$1;
(statearr_33900_33937[(1)] = (11));

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
});})(c__24334__auto___33909,mults,ensure_mult,p))
;
return ((function (switch__24272__auto__,c__24334__auto___33909,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_33904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33904[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_33904[(1)] = (1));

return statearr_33904;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_33860){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_33860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e33905){if((e33905 instanceof Object)){
var ex__24276__auto__ = e33905;
var statearr_33906_33938 = state_33860;
(statearr_33906_33938[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33939 = state_33860;
state_33860 = G__33939;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_33860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_33860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___33909,mults,ensure_mult,p))
})();
var state__24336__auto__ = (function (){var statearr_33907 = f__24335__auto__.call(null);
(statearr_33907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___33909);

return statearr_33907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___33909,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__33941 = arguments.length;
switch (G__33941) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__33944 = arguments.length;
switch (G__33944) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__33947 = arguments.length;
switch (G__33947) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__24334__auto___34017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33986){
var state_val_33987 = (state_33986[(1)]);
if((state_val_33987 === (7))){
var state_33986__$1 = state_33986;
var statearr_33988_34018 = state_33986__$1;
(statearr_33988_34018[(2)] = null);

(statearr_33988_34018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (1))){
var state_33986__$1 = state_33986;
var statearr_33989_34019 = state_33986__$1;
(statearr_33989_34019[(2)] = null);

(statearr_33989_34019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (4))){
var inst_33950 = (state_33986[(7)]);
var inst_33952 = (inst_33950 < cnt);
var state_33986__$1 = state_33986;
if(cljs.core.truth_(inst_33952)){
var statearr_33990_34020 = state_33986__$1;
(statearr_33990_34020[(1)] = (6));

} else {
var statearr_33991_34021 = state_33986__$1;
(statearr_33991_34021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (15))){
var inst_33982 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
var statearr_33992_34022 = state_33986__$1;
(statearr_33992_34022[(2)] = inst_33982);

(statearr_33992_34022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (13))){
var inst_33975 = cljs.core.async.close_BANG_.call(null,out);
var state_33986__$1 = state_33986;
var statearr_33993_34023 = state_33986__$1;
(statearr_33993_34023[(2)] = inst_33975);

(statearr_33993_34023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (6))){
var state_33986__$1 = state_33986;
var statearr_33994_34024 = state_33986__$1;
(statearr_33994_34024[(2)] = null);

(statearr_33994_34024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (3))){
var inst_33984 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33986__$1,inst_33984);
} else {
if((state_val_33987 === (12))){
var inst_33972 = (state_33986[(8)]);
var inst_33972__$1 = (state_33986[(2)]);
var inst_33973 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33972__$1);
var state_33986__$1 = (function (){var statearr_33995 = state_33986;
(statearr_33995[(8)] = inst_33972__$1);

return statearr_33995;
})();
if(cljs.core.truth_(inst_33973)){
var statearr_33996_34025 = state_33986__$1;
(statearr_33996_34025[(1)] = (13));

} else {
var statearr_33997_34026 = state_33986__$1;
(statearr_33997_34026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (2))){
var inst_33949 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33950 = (0);
var state_33986__$1 = (function (){var statearr_33998 = state_33986;
(statearr_33998[(7)] = inst_33950);

(statearr_33998[(9)] = inst_33949);

return statearr_33998;
})();
var statearr_33999_34027 = state_33986__$1;
(statearr_33999_34027[(2)] = null);

(statearr_33999_34027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (11))){
var inst_33950 = (state_33986[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33986,(10),Object,null,(9));
var inst_33959 = chs__$1.call(null,inst_33950);
var inst_33960 = done.call(null,inst_33950);
var inst_33961 = cljs.core.async.take_BANG_.call(null,inst_33959,inst_33960);
var state_33986__$1 = state_33986;
var statearr_34000_34028 = state_33986__$1;
(statearr_34000_34028[(2)] = inst_33961);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (9))){
var inst_33950 = (state_33986[(7)]);
var inst_33963 = (state_33986[(2)]);
var inst_33964 = (inst_33950 + (1));
var inst_33950__$1 = inst_33964;
var state_33986__$1 = (function (){var statearr_34001 = state_33986;
(statearr_34001[(7)] = inst_33950__$1);

(statearr_34001[(10)] = inst_33963);

return statearr_34001;
})();
var statearr_34002_34029 = state_33986__$1;
(statearr_34002_34029[(2)] = null);

(statearr_34002_34029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (5))){
var inst_33970 = (state_33986[(2)]);
var state_33986__$1 = (function (){var statearr_34003 = state_33986;
(statearr_34003[(11)] = inst_33970);

return statearr_34003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33986__$1,(12),dchan);
} else {
if((state_val_33987 === (14))){
var inst_33972 = (state_33986[(8)]);
var inst_33977 = cljs.core.apply.call(null,f,inst_33972);
var state_33986__$1 = state_33986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33986__$1,(16),out,inst_33977);
} else {
if((state_val_33987 === (16))){
var inst_33979 = (state_33986[(2)]);
var state_33986__$1 = (function (){var statearr_34004 = state_33986;
(statearr_34004[(12)] = inst_33979);

return statearr_34004;
})();
var statearr_34005_34030 = state_33986__$1;
(statearr_34005_34030[(2)] = null);

(statearr_34005_34030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (10))){
var inst_33954 = (state_33986[(2)]);
var inst_33955 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33986__$1 = (function (){var statearr_34006 = state_33986;
(statearr_34006[(13)] = inst_33954);

return statearr_34006;
})();
var statearr_34007_34031 = state_33986__$1;
(statearr_34007_34031[(2)] = inst_33955);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33986__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (8))){
var inst_33968 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
var statearr_34008_34032 = state_33986__$1;
(statearr_34008_34032[(2)] = inst_33968);

(statearr_34008_34032[(1)] = (5));


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
});})(c__24334__auto___34017,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24272__auto__,c__24334__auto___34017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34012[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34012[(1)] = (1));

return statearr_34012;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_33986){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_33986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34013){if((e34013 instanceof Object)){
var ex__24276__auto__ = e34013;
var statearr_34014_34033 = state_33986;
(statearr_34014_34033[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34034 = state_33986;
state_33986 = G__34034;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_33986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_33986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34017,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24336__auto__ = (function (){var statearr_34015 = f__24335__auto__.call(null);
(statearr_34015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34017);

return statearr_34015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34017,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__34037 = arguments.length;
switch (G__34037) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24334__auto___34092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34092,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34092,out){
return (function (state_34067){
var state_val_34068 = (state_34067[(1)]);
if((state_val_34068 === (7))){
var inst_34047 = (state_34067[(7)]);
var inst_34046 = (state_34067[(8)]);
var inst_34046__$1 = (state_34067[(2)]);
var inst_34047__$1 = cljs.core.nth.call(null,inst_34046__$1,(0),null);
var inst_34048 = cljs.core.nth.call(null,inst_34046__$1,(1),null);
var inst_34049 = (inst_34047__$1 == null);
var state_34067__$1 = (function (){var statearr_34069 = state_34067;
(statearr_34069[(7)] = inst_34047__$1);

(statearr_34069[(8)] = inst_34046__$1);

(statearr_34069[(9)] = inst_34048);

return statearr_34069;
})();
if(cljs.core.truth_(inst_34049)){
var statearr_34070_34093 = state_34067__$1;
(statearr_34070_34093[(1)] = (8));

} else {
var statearr_34071_34094 = state_34067__$1;
(statearr_34071_34094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (1))){
var inst_34038 = cljs.core.vec.call(null,chs);
var inst_34039 = inst_34038;
var state_34067__$1 = (function (){var statearr_34072 = state_34067;
(statearr_34072[(10)] = inst_34039);

return statearr_34072;
})();
var statearr_34073_34095 = state_34067__$1;
(statearr_34073_34095[(2)] = null);

(statearr_34073_34095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (4))){
var inst_34039 = (state_34067[(10)]);
var state_34067__$1 = state_34067;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34067__$1,(7),inst_34039);
} else {
if((state_val_34068 === (6))){
var inst_34063 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34074_34096 = state_34067__$1;
(statearr_34074_34096[(2)] = inst_34063);

(statearr_34074_34096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (3))){
var inst_34065 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34067__$1,inst_34065);
} else {
if((state_val_34068 === (2))){
var inst_34039 = (state_34067[(10)]);
var inst_34041 = cljs.core.count.call(null,inst_34039);
var inst_34042 = (inst_34041 > (0));
var state_34067__$1 = state_34067;
if(cljs.core.truth_(inst_34042)){
var statearr_34076_34097 = state_34067__$1;
(statearr_34076_34097[(1)] = (4));

} else {
var statearr_34077_34098 = state_34067__$1;
(statearr_34077_34098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (11))){
var inst_34039 = (state_34067[(10)]);
var inst_34056 = (state_34067[(2)]);
var tmp34075 = inst_34039;
var inst_34039__$1 = tmp34075;
var state_34067__$1 = (function (){var statearr_34078 = state_34067;
(statearr_34078[(10)] = inst_34039__$1);

(statearr_34078[(11)] = inst_34056);

return statearr_34078;
})();
var statearr_34079_34099 = state_34067__$1;
(statearr_34079_34099[(2)] = null);

(statearr_34079_34099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (9))){
var inst_34047 = (state_34067[(7)]);
var state_34067__$1 = state_34067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34067__$1,(11),out,inst_34047);
} else {
if((state_val_34068 === (5))){
var inst_34061 = cljs.core.async.close_BANG_.call(null,out);
var state_34067__$1 = state_34067;
var statearr_34080_34100 = state_34067__$1;
(statearr_34080_34100[(2)] = inst_34061);

(statearr_34080_34100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (10))){
var inst_34059 = (state_34067[(2)]);
var state_34067__$1 = state_34067;
var statearr_34081_34101 = state_34067__$1;
(statearr_34081_34101[(2)] = inst_34059);

(statearr_34081_34101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34068 === (8))){
var inst_34039 = (state_34067[(10)]);
var inst_34047 = (state_34067[(7)]);
var inst_34046 = (state_34067[(8)]);
var inst_34048 = (state_34067[(9)]);
var inst_34051 = (function (){var cs = inst_34039;
var vec__34044 = inst_34046;
var v = inst_34047;
var c = inst_34048;
return ((function (cs,vec__34044,v,c,inst_34039,inst_34047,inst_34046,inst_34048,state_val_34068,c__24334__auto___34092,out){
return (function (p1__34035_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34035_SHARP_);
});
;})(cs,vec__34044,v,c,inst_34039,inst_34047,inst_34046,inst_34048,state_val_34068,c__24334__auto___34092,out))
})();
var inst_34052 = cljs.core.filterv.call(null,inst_34051,inst_34039);
var inst_34039__$1 = inst_34052;
var state_34067__$1 = (function (){var statearr_34082 = state_34067;
(statearr_34082[(10)] = inst_34039__$1);

return statearr_34082;
})();
var statearr_34083_34102 = state_34067__$1;
(statearr_34083_34102[(2)] = null);

(statearr_34083_34102[(1)] = (2));


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
});})(c__24334__auto___34092,out))
;
return ((function (switch__24272__auto__,c__24334__auto___34092,out){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34087 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34087[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34087[(1)] = (1));

return statearr_34087;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_34067){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34088){if((e34088 instanceof Object)){
var ex__24276__auto__ = e34088;
var statearr_34089_34103 = state_34067;
(statearr_34089_34103[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34104 = state_34067;
state_34067 = G__34104;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34092,out))
})();
var state__24336__auto__ = (function (){var statearr_34090 = f__24335__auto__.call(null);
(statearr_34090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34092);

return statearr_34090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34092,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__34106 = arguments.length;
switch (G__34106) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24334__auto___34154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34154,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34154,out){
return (function (state_34130){
var state_val_34131 = (state_34130[(1)]);
if((state_val_34131 === (7))){
var inst_34112 = (state_34130[(7)]);
var inst_34112__$1 = (state_34130[(2)]);
var inst_34113 = (inst_34112__$1 == null);
var inst_34114 = cljs.core.not.call(null,inst_34113);
var state_34130__$1 = (function (){var statearr_34132 = state_34130;
(statearr_34132[(7)] = inst_34112__$1);

return statearr_34132;
})();
if(inst_34114){
var statearr_34133_34155 = state_34130__$1;
(statearr_34133_34155[(1)] = (8));

} else {
var statearr_34134_34156 = state_34130__$1;
(statearr_34134_34156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (1))){
var inst_34107 = (0);
var state_34130__$1 = (function (){var statearr_34135 = state_34130;
(statearr_34135[(8)] = inst_34107);

return statearr_34135;
})();
var statearr_34136_34157 = state_34130__$1;
(statearr_34136_34157[(2)] = null);

(statearr_34136_34157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (4))){
var state_34130__$1 = state_34130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34130__$1,(7),ch);
} else {
if((state_val_34131 === (6))){
var inst_34125 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34137_34158 = state_34130__$1;
(statearr_34137_34158[(2)] = inst_34125);

(statearr_34137_34158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (3))){
var inst_34127 = (state_34130[(2)]);
var inst_34128 = cljs.core.async.close_BANG_.call(null,out);
var state_34130__$1 = (function (){var statearr_34138 = state_34130;
(statearr_34138[(9)] = inst_34127);

return statearr_34138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34130__$1,inst_34128);
} else {
if((state_val_34131 === (2))){
var inst_34107 = (state_34130[(8)]);
var inst_34109 = (inst_34107 < n);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34109)){
var statearr_34139_34159 = state_34130__$1;
(statearr_34139_34159[(1)] = (4));

} else {
var statearr_34140_34160 = state_34130__$1;
(statearr_34140_34160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (11))){
var inst_34107 = (state_34130[(8)]);
var inst_34117 = (state_34130[(2)]);
var inst_34118 = (inst_34107 + (1));
var inst_34107__$1 = inst_34118;
var state_34130__$1 = (function (){var statearr_34141 = state_34130;
(statearr_34141[(8)] = inst_34107__$1);

(statearr_34141[(10)] = inst_34117);

return statearr_34141;
})();
var statearr_34142_34161 = state_34130__$1;
(statearr_34142_34161[(2)] = null);

(statearr_34142_34161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (9))){
var state_34130__$1 = state_34130;
var statearr_34143_34162 = state_34130__$1;
(statearr_34143_34162[(2)] = null);

(statearr_34143_34162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (5))){
var state_34130__$1 = state_34130;
var statearr_34144_34163 = state_34130__$1;
(statearr_34144_34163[(2)] = null);

(statearr_34144_34163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (10))){
var inst_34122 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34145_34164 = state_34130__$1;
(statearr_34145_34164[(2)] = inst_34122);

(statearr_34145_34164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (8))){
var inst_34112 = (state_34130[(7)]);
var state_34130__$1 = state_34130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34130__$1,(11),out,inst_34112);
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
});})(c__24334__auto___34154,out))
;
return ((function (switch__24272__auto__,c__24334__auto___34154,out){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34149[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34149[(1)] = (1));

return statearr_34149;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_34130){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34150){if((e34150 instanceof Object)){
var ex__24276__auto__ = e34150;
var statearr_34151_34165 = state_34130;
(statearr_34151_34165[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34166 = state_34130;
state_34130 = G__34166;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_34130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_34130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34154,out))
})();
var state__24336__auto__ = (function (){var statearr_34152 = f__24335__auto__.call(null);
(statearr_34152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34154);

return statearr_34152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34154,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t34174 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34174 = (function (map_LT_,f,ch,meta34175){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34175 = meta34175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34176,meta34175__$1){
var self__ = this;
var _34176__$1 = this;
return (new cljs.core.async.t34174(self__.map_LT_,self__.f,self__.ch,meta34175__$1));
});

cljs.core.async.t34174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34176){
var self__ = this;
var _34176__$1 = this;
return self__.meta34175;
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t34177 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34177 = (function (map_LT_,f,ch,meta34175,_,fn1,meta34178){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34175 = meta34175;
this._ = _;
this.fn1 = fn1;
this.meta34178 = meta34178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34179,meta34178__$1){
var self__ = this;
var _34179__$1 = this;
return (new cljs.core.async.t34177(self__.map_LT_,self__.f,self__.ch,self__.meta34175,self__._,self__.fn1,meta34178__$1));
});})(___$1))
;

cljs.core.async.t34177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34179){
var self__ = this;
var _34179__$1 = this;
return self__.meta34178;
});})(___$1))
;

cljs.core.async.t34177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t34177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t34177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34167_SHARP_){
return f1.call(null,(((p1__34167_SHARP_ == null))?null:self__.f.call(null,p1__34167_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t34177.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34175","meta34175",715540951,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34178","meta34178",-714569336,null)], null);
});})(___$1))
;

cljs.core.async.t34177.cljs$lang$type = true;

cljs.core.async.t34177.cljs$lang$ctorStr = "cljs.core.async/t34177";

cljs.core.async.t34177.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t34177");
});})(___$1))
;

cljs.core.async.__GT_t34177 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t34177(map_LT___$1,f__$1,ch__$1,meta34175__$1,___$2,fn1__$1,meta34178){
return (new cljs.core.async.t34177(map_LT___$1,f__$1,ch__$1,meta34175__$1,___$2,fn1__$1,meta34178));
});})(___$1))
;

}

return (new cljs.core.async.t34177(self__.map_LT_,self__.f,self__.ch,self__.meta34175,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16615__auto__ = ret;
if(cljs.core.truth_(and__16615__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16615__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t34174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34175","meta34175",715540951,null)], null);
});

cljs.core.async.t34174.cljs$lang$type = true;

cljs.core.async.t34174.cljs$lang$ctorStr = "cljs.core.async/t34174";

cljs.core.async.t34174.cljs$lang$ctorPrWriter = (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t34174");
});

cljs.core.async.__GT_t34174 = (function cljs$core$async$map_LT__$___GT_t34174(map_LT___$1,f__$1,ch__$1,meta34175){
return (new cljs.core.async.t34174(map_LT___$1,f__$1,ch__$1,meta34175));
});

}

return (new cljs.core.async.t34174(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t34183 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34183 = (function (map_GT_,f,ch,meta34184){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34184 = meta34184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34185,meta34184__$1){
var self__ = this;
var _34185__$1 = this;
return (new cljs.core.async.t34183(self__.map_GT_,self__.f,self__.ch,meta34184__$1));
});

cljs.core.async.t34183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34185){
var self__ = this;
var _34185__$1 = this;
return self__.meta34184;
});

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34183.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t34183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34184","meta34184",792048585,null)], null);
});

cljs.core.async.t34183.cljs$lang$type = true;

cljs.core.async.t34183.cljs$lang$ctorStr = "cljs.core.async/t34183";

cljs.core.async.t34183.cljs$lang$ctorPrWriter = (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t34183");
});

cljs.core.async.__GT_t34183 = (function cljs$core$async$map_GT__$___GT_t34183(map_GT___$1,f__$1,ch__$1,meta34184){
return (new cljs.core.async.t34183(map_GT___$1,f__$1,ch__$1,meta34184));
});

}

return (new cljs.core.async.t34183(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t34189 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34189 = (function (filter_GT_,p,ch,meta34190){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34190 = meta34190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t34189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34191,meta34190__$1){
var self__ = this;
var _34191__$1 = this;
return (new cljs.core.async.t34189(self__.filter_GT_,self__.p,self__.ch,meta34190__$1));
});

cljs.core.async.t34189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34191){
var self__ = this;
var _34191__$1 = this;
return self__.meta34190;
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t34189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t34189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34190","meta34190",-649768901,null)], null);
});

cljs.core.async.t34189.cljs$lang$type = true;

cljs.core.async.t34189.cljs$lang$ctorStr = "cljs.core.async/t34189";

cljs.core.async.t34189.cljs$lang$ctorPrWriter = (function (this__17206__auto__,writer__17207__auto__,opt__17208__auto__){
return cljs.core._write.call(null,writer__17207__auto__,"cljs.core.async/t34189");
});

cljs.core.async.__GT_t34189 = (function cljs$core$async$filter_GT__$___GT_t34189(filter_GT___$1,p__$1,ch__$1,meta34190){
return (new cljs.core.async.t34189(filter_GT___$1,p__$1,ch__$1,meta34190));
});

}

return (new cljs.core.async.t34189(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__34193 = arguments.length;
switch (G__34193) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24334__auto___34236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34236,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34236,out){
return (function (state_34214){
var state_val_34215 = (state_34214[(1)]);
if((state_val_34215 === (7))){
var inst_34210 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34216_34237 = state_34214__$1;
(statearr_34216_34237[(2)] = inst_34210);

(statearr_34216_34237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (1))){
var state_34214__$1 = state_34214;
var statearr_34217_34238 = state_34214__$1;
(statearr_34217_34238[(2)] = null);

(statearr_34217_34238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (4))){
var inst_34196 = (state_34214[(7)]);
var inst_34196__$1 = (state_34214[(2)]);
var inst_34197 = (inst_34196__$1 == null);
var state_34214__$1 = (function (){var statearr_34218 = state_34214;
(statearr_34218[(7)] = inst_34196__$1);

return statearr_34218;
})();
if(cljs.core.truth_(inst_34197)){
var statearr_34219_34239 = state_34214__$1;
(statearr_34219_34239[(1)] = (5));

} else {
var statearr_34220_34240 = state_34214__$1;
(statearr_34220_34240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (6))){
var inst_34196 = (state_34214[(7)]);
var inst_34201 = p.call(null,inst_34196);
var state_34214__$1 = state_34214;
if(cljs.core.truth_(inst_34201)){
var statearr_34221_34241 = state_34214__$1;
(statearr_34221_34241[(1)] = (8));

} else {
var statearr_34222_34242 = state_34214__$1;
(statearr_34222_34242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (3))){
var inst_34212 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34214__$1,inst_34212);
} else {
if((state_val_34215 === (2))){
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34214__$1,(4),ch);
} else {
if((state_val_34215 === (11))){
var inst_34204 = (state_34214[(2)]);
var state_34214__$1 = state_34214;
var statearr_34223_34243 = state_34214__$1;
(statearr_34223_34243[(2)] = inst_34204);

(statearr_34223_34243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (9))){
var state_34214__$1 = state_34214;
var statearr_34224_34244 = state_34214__$1;
(statearr_34224_34244[(2)] = null);

(statearr_34224_34244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (5))){
var inst_34199 = cljs.core.async.close_BANG_.call(null,out);
var state_34214__$1 = state_34214;
var statearr_34225_34245 = state_34214__$1;
(statearr_34225_34245[(2)] = inst_34199);

(statearr_34225_34245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (10))){
var inst_34207 = (state_34214[(2)]);
var state_34214__$1 = (function (){var statearr_34226 = state_34214;
(statearr_34226[(8)] = inst_34207);

return statearr_34226;
})();
var statearr_34227_34246 = state_34214__$1;
(statearr_34227_34246[(2)] = null);

(statearr_34227_34246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34215 === (8))){
var inst_34196 = (state_34214[(7)]);
var state_34214__$1 = state_34214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34214__$1,(11),out,inst_34196);
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
});})(c__24334__auto___34236,out))
;
return ((function (switch__24272__auto__,c__24334__auto___34236,out){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34231 = [null,null,null,null,null,null,null,null,null];
(statearr_34231[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34231[(1)] = (1));

return statearr_34231;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_34214){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34232){if((e34232 instanceof Object)){
var ex__24276__auto__ = e34232;
var statearr_34233_34247 = state_34214;
(statearr_34233_34247[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34248 = state_34214;
state_34214 = G__34248;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_34214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_34214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34236,out))
})();
var state__24336__auto__ = (function (){var statearr_34234 = f__24335__auto__.call(null);
(statearr_34234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34236);

return statearr_34234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34236,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__34250 = arguments.length;
switch (G__34250) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24334__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto__){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto__){
return (function (state_34417){
var state_val_34418 = (state_34417[(1)]);
if((state_val_34418 === (7))){
var inst_34413 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34419_34460 = state_34417__$1;
(statearr_34419_34460[(2)] = inst_34413);

(statearr_34419_34460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (20))){
var inst_34383 = (state_34417[(7)]);
var inst_34394 = (state_34417[(2)]);
var inst_34395 = cljs.core.next.call(null,inst_34383);
var inst_34369 = inst_34395;
var inst_34370 = null;
var inst_34371 = (0);
var inst_34372 = (0);
var state_34417__$1 = (function (){var statearr_34420 = state_34417;
(statearr_34420[(8)] = inst_34372);

(statearr_34420[(9)] = inst_34394);

(statearr_34420[(10)] = inst_34369);

(statearr_34420[(11)] = inst_34370);

(statearr_34420[(12)] = inst_34371);

return statearr_34420;
})();
var statearr_34421_34461 = state_34417__$1;
(statearr_34421_34461[(2)] = null);

(statearr_34421_34461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (1))){
var state_34417__$1 = state_34417;
var statearr_34422_34462 = state_34417__$1;
(statearr_34422_34462[(2)] = null);

(statearr_34422_34462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (4))){
var inst_34358 = (state_34417[(13)]);
var inst_34358__$1 = (state_34417[(2)]);
var inst_34359 = (inst_34358__$1 == null);
var state_34417__$1 = (function (){var statearr_34423 = state_34417;
(statearr_34423[(13)] = inst_34358__$1);

return statearr_34423;
})();
if(cljs.core.truth_(inst_34359)){
var statearr_34424_34463 = state_34417__$1;
(statearr_34424_34463[(1)] = (5));

} else {
var statearr_34425_34464 = state_34417__$1;
(statearr_34425_34464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (15))){
var state_34417__$1 = state_34417;
var statearr_34429_34465 = state_34417__$1;
(statearr_34429_34465[(2)] = null);

(statearr_34429_34465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (21))){
var state_34417__$1 = state_34417;
var statearr_34430_34466 = state_34417__$1;
(statearr_34430_34466[(2)] = null);

(statearr_34430_34466[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (13))){
var inst_34372 = (state_34417[(8)]);
var inst_34369 = (state_34417[(10)]);
var inst_34370 = (state_34417[(11)]);
var inst_34371 = (state_34417[(12)]);
var inst_34379 = (state_34417[(2)]);
var inst_34380 = (inst_34372 + (1));
var tmp34426 = inst_34369;
var tmp34427 = inst_34370;
var tmp34428 = inst_34371;
var inst_34369__$1 = tmp34426;
var inst_34370__$1 = tmp34427;
var inst_34371__$1 = tmp34428;
var inst_34372__$1 = inst_34380;
var state_34417__$1 = (function (){var statearr_34431 = state_34417;
(statearr_34431[(8)] = inst_34372__$1);

(statearr_34431[(14)] = inst_34379);

(statearr_34431[(10)] = inst_34369__$1);

(statearr_34431[(11)] = inst_34370__$1);

(statearr_34431[(12)] = inst_34371__$1);

return statearr_34431;
})();
var statearr_34432_34467 = state_34417__$1;
(statearr_34432_34467[(2)] = null);

(statearr_34432_34467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (22))){
var state_34417__$1 = state_34417;
var statearr_34433_34468 = state_34417__$1;
(statearr_34433_34468[(2)] = null);

(statearr_34433_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (6))){
var inst_34358 = (state_34417[(13)]);
var inst_34367 = f.call(null,inst_34358);
var inst_34368 = cljs.core.seq.call(null,inst_34367);
var inst_34369 = inst_34368;
var inst_34370 = null;
var inst_34371 = (0);
var inst_34372 = (0);
var state_34417__$1 = (function (){var statearr_34434 = state_34417;
(statearr_34434[(8)] = inst_34372);

(statearr_34434[(10)] = inst_34369);

(statearr_34434[(11)] = inst_34370);

(statearr_34434[(12)] = inst_34371);

return statearr_34434;
})();
var statearr_34435_34469 = state_34417__$1;
(statearr_34435_34469[(2)] = null);

(statearr_34435_34469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (17))){
var inst_34383 = (state_34417[(7)]);
var inst_34387 = cljs.core.chunk_first.call(null,inst_34383);
var inst_34388 = cljs.core.chunk_rest.call(null,inst_34383);
var inst_34389 = cljs.core.count.call(null,inst_34387);
var inst_34369 = inst_34388;
var inst_34370 = inst_34387;
var inst_34371 = inst_34389;
var inst_34372 = (0);
var state_34417__$1 = (function (){var statearr_34436 = state_34417;
(statearr_34436[(8)] = inst_34372);

(statearr_34436[(10)] = inst_34369);

(statearr_34436[(11)] = inst_34370);

(statearr_34436[(12)] = inst_34371);

return statearr_34436;
})();
var statearr_34437_34470 = state_34417__$1;
(statearr_34437_34470[(2)] = null);

(statearr_34437_34470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (3))){
var inst_34415 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34417__$1,inst_34415);
} else {
if((state_val_34418 === (12))){
var inst_34403 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34438_34471 = state_34417__$1;
(statearr_34438_34471[(2)] = inst_34403);

(statearr_34438_34471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (2))){
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34417__$1,(4),in$);
} else {
if((state_val_34418 === (23))){
var inst_34411 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34439_34472 = state_34417__$1;
(statearr_34439_34472[(2)] = inst_34411);

(statearr_34439_34472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (19))){
var inst_34398 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34440_34473 = state_34417__$1;
(statearr_34440_34473[(2)] = inst_34398);

(statearr_34440_34473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (11))){
var inst_34383 = (state_34417[(7)]);
var inst_34369 = (state_34417[(10)]);
var inst_34383__$1 = cljs.core.seq.call(null,inst_34369);
var state_34417__$1 = (function (){var statearr_34441 = state_34417;
(statearr_34441[(7)] = inst_34383__$1);

return statearr_34441;
})();
if(inst_34383__$1){
var statearr_34442_34474 = state_34417__$1;
(statearr_34442_34474[(1)] = (14));

} else {
var statearr_34443_34475 = state_34417__$1;
(statearr_34443_34475[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (9))){
var inst_34405 = (state_34417[(2)]);
var inst_34406 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34417__$1 = (function (){var statearr_34444 = state_34417;
(statearr_34444[(15)] = inst_34405);

return statearr_34444;
})();
if(cljs.core.truth_(inst_34406)){
var statearr_34445_34476 = state_34417__$1;
(statearr_34445_34476[(1)] = (21));

} else {
var statearr_34446_34477 = state_34417__$1;
(statearr_34446_34477[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (5))){
var inst_34361 = cljs.core.async.close_BANG_.call(null,out);
var state_34417__$1 = state_34417;
var statearr_34447_34478 = state_34417__$1;
(statearr_34447_34478[(2)] = inst_34361);

(statearr_34447_34478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (14))){
var inst_34383 = (state_34417[(7)]);
var inst_34385 = cljs.core.chunked_seq_QMARK_.call(null,inst_34383);
var state_34417__$1 = state_34417;
if(inst_34385){
var statearr_34448_34479 = state_34417__$1;
(statearr_34448_34479[(1)] = (17));

} else {
var statearr_34449_34480 = state_34417__$1;
(statearr_34449_34480[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (16))){
var inst_34401 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34450_34481 = state_34417__$1;
(statearr_34450_34481[(2)] = inst_34401);

(statearr_34450_34481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (10))){
var inst_34372 = (state_34417[(8)]);
var inst_34370 = (state_34417[(11)]);
var inst_34377 = cljs.core._nth.call(null,inst_34370,inst_34372);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34417__$1,(13),out,inst_34377);
} else {
if((state_val_34418 === (18))){
var inst_34383 = (state_34417[(7)]);
var inst_34392 = cljs.core.first.call(null,inst_34383);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34417__$1,(20),out,inst_34392);
} else {
if((state_val_34418 === (8))){
var inst_34372 = (state_34417[(8)]);
var inst_34371 = (state_34417[(12)]);
var inst_34374 = (inst_34372 < inst_34371);
var inst_34375 = inst_34374;
var state_34417__$1 = state_34417;
if(cljs.core.truth_(inst_34375)){
var statearr_34451_34482 = state_34417__$1;
(statearr_34451_34482[(1)] = (10));

} else {
var statearr_34452_34483 = state_34417__$1;
(statearr_34452_34483[(1)] = (11));

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
});})(c__24334__auto__))
;
return ((function (switch__24272__auto__,c__24334__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24273__auto____0 = (function (){
var statearr_34456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34456[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24273__auto__);

(statearr_34456[(1)] = (1));

return statearr_34456;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24273__auto____1 = (function (state_34417){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34457){if((e34457 instanceof Object)){
var ex__24276__auto__ = e34457;
var statearr_34458_34484 = state_34417;
(statearr_34458_34484[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34485 = state_34417;
state_34417 = G__34485;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24273__auto__ = function(state_34417){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24273__auto____1.call(this,state_34417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto__))
})();
var state__24336__auto__ = (function (){var statearr_34459 = f__24335__auto__.call(null);
(statearr_34459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto__);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto__))
);

return c__24334__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__34487 = arguments.length;
switch (G__34487) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__34490 = arguments.length;
switch (G__34490) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__34493 = arguments.length;
switch (G__34493) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24334__auto___34543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34543,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34543,out){
return (function (state_34517){
var state_val_34518 = (state_34517[(1)]);
if((state_val_34518 === (7))){
var inst_34512 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34519_34544 = state_34517__$1;
(statearr_34519_34544[(2)] = inst_34512);

(statearr_34519_34544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (1))){
var inst_34494 = null;
var state_34517__$1 = (function (){var statearr_34520 = state_34517;
(statearr_34520[(7)] = inst_34494);

return statearr_34520;
})();
var statearr_34521_34545 = state_34517__$1;
(statearr_34521_34545[(2)] = null);

(statearr_34521_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (4))){
var inst_34497 = (state_34517[(8)]);
var inst_34497__$1 = (state_34517[(2)]);
var inst_34498 = (inst_34497__$1 == null);
var inst_34499 = cljs.core.not.call(null,inst_34498);
var state_34517__$1 = (function (){var statearr_34522 = state_34517;
(statearr_34522[(8)] = inst_34497__$1);

return statearr_34522;
})();
if(inst_34499){
var statearr_34523_34546 = state_34517__$1;
(statearr_34523_34546[(1)] = (5));

} else {
var statearr_34524_34547 = state_34517__$1;
(statearr_34524_34547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (6))){
var state_34517__$1 = state_34517;
var statearr_34525_34548 = state_34517__$1;
(statearr_34525_34548[(2)] = null);

(statearr_34525_34548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (3))){
var inst_34514 = (state_34517[(2)]);
var inst_34515 = cljs.core.async.close_BANG_.call(null,out);
var state_34517__$1 = (function (){var statearr_34526 = state_34517;
(statearr_34526[(9)] = inst_34514);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34517__$1,inst_34515);
} else {
if((state_val_34518 === (2))){
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34517__$1,(4),ch);
} else {
if((state_val_34518 === (11))){
var inst_34497 = (state_34517[(8)]);
var inst_34506 = (state_34517[(2)]);
var inst_34494 = inst_34497;
var state_34517__$1 = (function (){var statearr_34527 = state_34517;
(statearr_34527[(7)] = inst_34494);

(statearr_34527[(10)] = inst_34506);

return statearr_34527;
})();
var statearr_34528_34549 = state_34517__$1;
(statearr_34528_34549[(2)] = null);

(statearr_34528_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (9))){
var inst_34497 = (state_34517[(8)]);
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34517__$1,(11),out,inst_34497);
} else {
if((state_val_34518 === (5))){
var inst_34497 = (state_34517[(8)]);
var inst_34494 = (state_34517[(7)]);
var inst_34501 = cljs.core._EQ_.call(null,inst_34497,inst_34494);
var state_34517__$1 = state_34517;
if(inst_34501){
var statearr_34530_34550 = state_34517__$1;
(statearr_34530_34550[(1)] = (8));

} else {
var statearr_34531_34551 = state_34517__$1;
(statearr_34531_34551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (10))){
var inst_34509 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34532_34552 = state_34517__$1;
(statearr_34532_34552[(2)] = inst_34509);

(statearr_34532_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (8))){
var inst_34494 = (state_34517[(7)]);
var tmp34529 = inst_34494;
var inst_34494__$1 = tmp34529;
var state_34517__$1 = (function (){var statearr_34533 = state_34517;
(statearr_34533[(7)] = inst_34494__$1);

return statearr_34533;
})();
var statearr_34534_34553 = state_34517__$1;
(statearr_34534_34553[(2)] = null);

(statearr_34534_34553[(1)] = (2));


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
});})(c__24334__auto___34543,out))
;
return ((function (switch__24272__auto__,c__24334__auto___34543,out){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34538[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34538[(1)] = (1));

return statearr_34538;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_34517){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34539){if((e34539 instanceof Object)){
var ex__24276__auto__ = e34539;
var statearr_34540_34554 = state_34517;
(statearr_34540_34554[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34555 = state_34517;
state_34517 = G__34555;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_34517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_34517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34543,out))
})();
var state__24336__auto__ = (function (){var statearr_34541 = f__24335__auto__.call(null);
(statearr_34541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34543);

return statearr_34541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34543,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__34557 = arguments.length;
switch (G__34557) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24334__auto___34626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34626,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34626,out){
return (function (state_34595){
var state_val_34596 = (state_34595[(1)]);
if((state_val_34596 === (7))){
var inst_34591 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
var statearr_34597_34627 = state_34595__$1;
(statearr_34597_34627[(2)] = inst_34591);

(statearr_34597_34627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (1))){
var inst_34558 = (new Array(n));
var inst_34559 = inst_34558;
var inst_34560 = (0);
var state_34595__$1 = (function (){var statearr_34598 = state_34595;
(statearr_34598[(7)] = inst_34560);

(statearr_34598[(8)] = inst_34559);

return statearr_34598;
})();
var statearr_34599_34628 = state_34595__$1;
(statearr_34599_34628[(2)] = null);

(statearr_34599_34628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (4))){
var inst_34563 = (state_34595[(9)]);
var inst_34563__$1 = (state_34595[(2)]);
var inst_34564 = (inst_34563__$1 == null);
var inst_34565 = cljs.core.not.call(null,inst_34564);
var state_34595__$1 = (function (){var statearr_34600 = state_34595;
(statearr_34600[(9)] = inst_34563__$1);

return statearr_34600;
})();
if(inst_34565){
var statearr_34601_34629 = state_34595__$1;
(statearr_34601_34629[(1)] = (5));

} else {
var statearr_34602_34630 = state_34595__$1;
(statearr_34602_34630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (15))){
var inst_34585 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
var statearr_34603_34631 = state_34595__$1;
(statearr_34603_34631[(2)] = inst_34585);

(statearr_34603_34631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (13))){
var state_34595__$1 = state_34595;
var statearr_34604_34632 = state_34595__$1;
(statearr_34604_34632[(2)] = null);

(statearr_34604_34632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (6))){
var inst_34560 = (state_34595[(7)]);
var inst_34581 = (inst_34560 > (0));
var state_34595__$1 = state_34595;
if(cljs.core.truth_(inst_34581)){
var statearr_34605_34633 = state_34595__$1;
(statearr_34605_34633[(1)] = (12));

} else {
var statearr_34606_34634 = state_34595__$1;
(statearr_34606_34634[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (3))){
var inst_34593 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34595__$1,inst_34593);
} else {
if((state_val_34596 === (12))){
var inst_34559 = (state_34595[(8)]);
var inst_34583 = cljs.core.vec.call(null,inst_34559);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34595__$1,(15),out,inst_34583);
} else {
if((state_val_34596 === (2))){
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34595__$1,(4),ch);
} else {
if((state_val_34596 === (11))){
var inst_34575 = (state_34595[(2)]);
var inst_34576 = (new Array(n));
var inst_34559 = inst_34576;
var inst_34560 = (0);
var state_34595__$1 = (function (){var statearr_34607 = state_34595;
(statearr_34607[(7)] = inst_34560);

(statearr_34607[(8)] = inst_34559);

(statearr_34607[(10)] = inst_34575);

return statearr_34607;
})();
var statearr_34608_34635 = state_34595__$1;
(statearr_34608_34635[(2)] = null);

(statearr_34608_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (9))){
var inst_34559 = (state_34595[(8)]);
var inst_34573 = cljs.core.vec.call(null,inst_34559);
var state_34595__$1 = state_34595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34595__$1,(11),out,inst_34573);
} else {
if((state_val_34596 === (5))){
var inst_34560 = (state_34595[(7)]);
var inst_34559 = (state_34595[(8)]);
var inst_34568 = (state_34595[(11)]);
var inst_34563 = (state_34595[(9)]);
var inst_34567 = (inst_34559[inst_34560] = inst_34563);
var inst_34568__$1 = (inst_34560 + (1));
var inst_34569 = (inst_34568__$1 < n);
var state_34595__$1 = (function (){var statearr_34609 = state_34595;
(statearr_34609[(12)] = inst_34567);

(statearr_34609[(11)] = inst_34568__$1);

return statearr_34609;
})();
if(cljs.core.truth_(inst_34569)){
var statearr_34610_34636 = state_34595__$1;
(statearr_34610_34636[(1)] = (8));

} else {
var statearr_34611_34637 = state_34595__$1;
(statearr_34611_34637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (14))){
var inst_34588 = (state_34595[(2)]);
var inst_34589 = cljs.core.async.close_BANG_.call(null,out);
var state_34595__$1 = (function (){var statearr_34613 = state_34595;
(statearr_34613[(13)] = inst_34588);

return statearr_34613;
})();
var statearr_34614_34638 = state_34595__$1;
(statearr_34614_34638[(2)] = inst_34589);

(statearr_34614_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (10))){
var inst_34579 = (state_34595[(2)]);
var state_34595__$1 = state_34595;
var statearr_34615_34639 = state_34595__$1;
(statearr_34615_34639[(2)] = inst_34579);

(statearr_34615_34639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34596 === (8))){
var inst_34559 = (state_34595[(8)]);
var inst_34568 = (state_34595[(11)]);
var tmp34612 = inst_34559;
var inst_34559__$1 = tmp34612;
var inst_34560 = inst_34568;
var state_34595__$1 = (function (){var statearr_34616 = state_34595;
(statearr_34616[(7)] = inst_34560);

(statearr_34616[(8)] = inst_34559__$1);

return statearr_34616;
})();
var statearr_34617_34640 = state_34595__$1;
(statearr_34617_34640[(2)] = null);

(statearr_34617_34640[(1)] = (2));


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
});})(c__24334__auto___34626,out))
;
return ((function (switch__24272__auto__,c__24334__auto___34626,out){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34621[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34621[(1)] = (1));

return statearr_34621;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_34595){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34622){if((e34622 instanceof Object)){
var ex__24276__auto__ = e34622;
var statearr_34623_34641 = state_34595;
(statearr_34623_34641[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34642 = state_34595;
state_34595 = G__34642;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_34595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_34595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34626,out))
})();
var state__24336__auto__ = (function (){var statearr_34624 = f__24335__auto__.call(null);
(statearr_34624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34626);

return statearr_34624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34626,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__34644 = arguments.length;
switch (G__34644) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24334__auto___34717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24334__auto___34717,out){
return (function (){
var f__24335__auto__ = (function (){var switch__24272__auto__ = ((function (c__24334__auto___34717,out){
return (function (state_34686){
var state_val_34687 = (state_34686[(1)]);
if((state_val_34687 === (7))){
var inst_34682 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34688_34718 = state_34686__$1;
(statearr_34688_34718[(2)] = inst_34682);

(statearr_34688_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (1))){
var inst_34645 = [];
var inst_34646 = inst_34645;
var inst_34647 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34686__$1 = (function (){var statearr_34689 = state_34686;
(statearr_34689[(7)] = inst_34647);

(statearr_34689[(8)] = inst_34646);

return statearr_34689;
})();
var statearr_34690_34719 = state_34686__$1;
(statearr_34690_34719[(2)] = null);

(statearr_34690_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (4))){
var inst_34650 = (state_34686[(9)]);
var inst_34650__$1 = (state_34686[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var inst_34652 = cljs.core.not.call(null,inst_34651);
var state_34686__$1 = (function (){var statearr_34691 = state_34686;
(statearr_34691[(9)] = inst_34650__$1);

return statearr_34691;
})();
if(inst_34652){
var statearr_34692_34720 = state_34686__$1;
(statearr_34692_34720[(1)] = (5));

} else {
var statearr_34693_34721 = state_34686__$1;
(statearr_34693_34721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (15))){
var inst_34676 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34694_34722 = state_34686__$1;
(statearr_34694_34722[(2)] = inst_34676);

(statearr_34694_34722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (13))){
var state_34686__$1 = state_34686;
var statearr_34695_34723 = state_34686__$1;
(statearr_34695_34723[(2)] = null);

(statearr_34695_34723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (6))){
var inst_34646 = (state_34686[(8)]);
var inst_34671 = inst_34646.length;
var inst_34672 = (inst_34671 > (0));
var state_34686__$1 = state_34686;
if(cljs.core.truth_(inst_34672)){
var statearr_34696_34724 = state_34686__$1;
(statearr_34696_34724[(1)] = (12));

} else {
var statearr_34697_34725 = state_34686__$1;
(statearr_34697_34725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (3))){
var inst_34684 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34686__$1,inst_34684);
} else {
if((state_val_34687 === (12))){
var inst_34646 = (state_34686[(8)]);
var inst_34674 = cljs.core.vec.call(null,inst_34646);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34686__$1,(15),out,inst_34674);
} else {
if((state_val_34687 === (2))){
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34686__$1,(4),ch);
} else {
if((state_val_34687 === (11))){
var inst_34654 = (state_34686[(10)]);
var inst_34650 = (state_34686[(9)]);
var inst_34664 = (state_34686[(2)]);
var inst_34665 = [];
var inst_34666 = inst_34665.push(inst_34650);
var inst_34646 = inst_34665;
var inst_34647 = inst_34654;
var state_34686__$1 = (function (){var statearr_34698 = state_34686;
(statearr_34698[(7)] = inst_34647);

(statearr_34698[(8)] = inst_34646);

(statearr_34698[(11)] = inst_34666);

(statearr_34698[(12)] = inst_34664);

return statearr_34698;
})();
var statearr_34699_34726 = state_34686__$1;
(statearr_34699_34726[(2)] = null);

(statearr_34699_34726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (9))){
var inst_34646 = (state_34686[(8)]);
var inst_34662 = cljs.core.vec.call(null,inst_34646);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34686__$1,(11),out,inst_34662);
} else {
if((state_val_34687 === (5))){
var inst_34647 = (state_34686[(7)]);
var inst_34654 = (state_34686[(10)]);
var inst_34650 = (state_34686[(9)]);
var inst_34654__$1 = f.call(null,inst_34650);
var inst_34655 = cljs.core._EQ_.call(null,inst_34654__$1,inst_34647);
var inst_34656 = cljs.core.keyword_identical_QMARK_.call(null,inst_34647,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34657 = (inst_34655) || (inst_34656);
var state_34686__$1 = (function (){var statearr_34700 = state_34686;
(statearr_34700[(10)] = inst_34654__$1);

return statearr_34700;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34701_34727 = state_34686__$1;
(statearr_34701_34727[(1)] = (8));

} else {
var statearr_34702_34728 = state_34686__$1;
(statearr_34702_34728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (14))){
var inst_34679 = (state_34686[(2)]);
var inst_34680 = cljs.core.async.close_BANG_.call(null,out);
var state_34686__$1 = (function (){var statearr_34704 = state_34686;
(statearr_34704[(13)] = inst_34679);

return statearr_34704;
})();
var statearr_34705_34729 = state_34686__$1;
(statearr_34705_34729[(2)] = inst_34680);

(statearr_34705_34729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (10))){
var inst_34669 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34706_34730 = state_34686__$1;
(statearr_34706_34730[(2)] = inst_34669);

(statearr_34706_34730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (8))){
var inst_34646 = (state_34686[(8)]);
var inst_34654 = (state_34686[(10)]);
var inst_34650 = (state_34686[(9)]);
var inst_34659 = inst_34646.push(inst_34650);
var tmp34703 = inst_34646;
var inst_34646__$1 = tmp34703;
var inst_34647 = inst_34654;
var state_34686__$1 = (function (){var statearr_34707 = state_34686;
(statearr_34707[(14)] = inst_34659);

(statearr_34707[(7)] = inst_34647);

(statearr_34707[(8)] = inst_34646__$1);

return statearr_34707;
})();
var statearr_34708_34731 = state_34686__$1;
(statearr_34708_34731[(2)] = null);

(statearr_34708_34731[(1)] = (2));


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
});})(c__24334__auto___34717,out))
;
return ((function (switch__24272__auto__,c__24334__auto___34717,out){
return (function() {
var cljs$core$async$state_machine__24273__auto__ = null;
var cljs$core$async$state_machine__24273__auto____0 = (function (){
var statearr_34712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34712[(0)] = cljs$core$async$state_machine__24273__auto__);

(statearr_34712[(1)] = (1));

return statearr_34712;
});
var cljs$core$async$state_machine__24273__auto____1 = (function (state_34686){
while(true){
var ret_value__24274__auto__ = (function (){try{while(true){
var result__24275__auto__ = switch__24272__auto__.call(null,state_34686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24275__auto__;
}
break;
}
}catch (e34713){if((e34713 instanceof Object)){
var ex__24276__auto__ = e34713;
var statearr_34714_34732 = state_34686;
(statearr_34714_34732[(5)] = ex__24276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34733 = state_34686;
state_34686 = G__34733;
continue;
} else {
return ret_value__24274__auto__;
}
break;
}
});
cljs$core$async$state_machine__24273__auto__ = function(state_34686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24273__auto____1.call(this,state_34686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24273__auto____0;
cljs$core$async$state_machine__24273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24273__auto____1;
return cljs$core$async$state_machine__24273__auto__;
})()
;})(switch__24272__auto__,c__24334__auto___34717,out))
})();
var state__24336__auto__ = (function (){var statearr_34715 = f__24335__auto__.call(null);
(statearr_34715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24334__auto___34717);

return statearr_34715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24336__auto__);
});})(c__24334__auto___34717,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map