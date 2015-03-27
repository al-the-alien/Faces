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
if(typeof cljs.core.async.t33707 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33707 = (function (f,fn_handler,meta33708){
this.f = f;
this.fn_handler = fn_handler;
this.meta33708 = meta33708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33707.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t33707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t33707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33709){
var self__ = this;
var _33709__$1 = this;
return self__.meta33708;
});

cljs.core.async.t33707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33709,meta33708__$1){
var self__ = this;
var _33709__$1 = this;
return (new cljs.core.async.t33707(self__.f,self__.fn_handler,meta33708__$1));
});

cljs.core.async.t33707.cljs$lang$type = true;

cljs.core.async.t33707.cljs$lang$ctorStr = "cljs.core.async/t33707";

cljs.core.async.t33707.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t33707");
});

cljs.core.async.__GT_t33707 = (function __GT_t33707(f__$1,fn_handler__$1,meta33708){
return (new cljs.core.async.t33707(f__$1,fn_handler__$1,meta33708));
});

}

return (new cljs.core.async.t33707(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33711 = buff;
if(G__33711){
var bit__15125__auto__ = null;
if(cljs.core.truth_((function (){var or__14444__auto__ = bit__15125__auto__;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return G__33711.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__33711.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33711);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33711);
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
var val_33712 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33712);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33712,ret){
return (function (){
return fn1.call(null,val_33712);
});})(val_33712,ret))
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
var n__15331__auto___33713 = n;
var x_33714 = (0);
while(true){
if((x_33714 < n__15331__auto___33713)){
(a[x_33714] = (0));

var G__33715 = (x_33714 + (1));
x_33714 = G__33715;
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

var G__33716 = (i + (1));
i = G__33716;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t33720 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33720 = (function (flag,alt_flag,meta33721){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33721 = meta33721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33720.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t33720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t33720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33722){
var self__ = this;
var _33722__$1 = this;
return self__.meta33721;
});})(flag))
;

cljs.core.async.t33720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33722,meta33721__$1){
var self__ = this;
var _33722__$1 = this;
return (new cljs.core.async.t33720(self__.flag,self__.alt_flag,meta33721__$1));
});})(flag))
;

cljs.core.async.t33720.cljs$lang$type = true;

cljs.core.async.t33720.cljs$lang$ctorStr = "cljs.core.async/t33720";

cljs.core.async.t33720.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t33720");
});})(flag))
;

cljs.core.async.__GT_t33720 = ((function (flag){
return (function __GT_t33720(flag__$1,alt_flag__$1,meta33721){
return (new cljs.core.async.t33720(flag__$1,alt_flag__$1,meta33721));
});})(flag))
;

}

return (new cljs.core.async.t33720(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t33726 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33726 = (function (cb,flag,alt_handler,meta33727){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33727 = meta33727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33726.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t33726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t33726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33728){
var self__ = this;
var _33728__$1 = this;
return self__.meta33727;
});

cljs.core.async.t33726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33728,meta33727__$1){
var self__ = this;
var _33728__$1 = this;
return (new cljs.core.async.t33726(self__.cb,self__.flag,self__.alt_handler,meta33727__$1));
});

cljs.core.async.t33726.cljs$lang$type = true;

cljs.core.async.t33726.cljs$lang$ctorStr = "cljs.core.async/t33726";

cljs.core.async.t33726.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t33726");
});

cljs.core.async.__GT_t33726 = (function __GT_t33726(cb__$1,flag__$1,alt_handler__$1,meta33727){
return (new cljs.core.async.t33726(cb__$1,flag__$1,alt_handler__$1,meta33727));
});

}

return (new cljs.core.async.t33726(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33729_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33729_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33730_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33730_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14444__auto__ = wport;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33731 = (i + (1));
i = G__33731;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14444__auto__ = ret;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4406__auto__ = (function (){var and__14432__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__14432__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__14432__auto__;
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
var alts_BANG___delegate = function (ports,p__33732){
var map__33734 = p__33732;
var map__33734__$1 = ((cljs.core.seq_QMARK_.call(null,map__33734))?cljs.core.apply.call(null,cljs.core.hash_map,map__33734):map__33734);
var opts = map__33734__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__33732 = null;
if (arguments.length > 1) {
var G__33735__i = 0, G__33735__a = new Array(arguments.length -  1);
while (G__33735__i < G__33735__a.length) {G__33735__a[G__33735__i] = arguments[G__33735__i + 1]; ++G__33735__i;}
  p__33732 = new cljs.core.IndexedSeq(G__33735__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__33732);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33736){
var ports = cljs.core.first(arglist__33736);
var p__33732 = cljs.core.rest(arglist__33736);
return alts_BANG___delegate(ports,p__33732);
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
var c__20396__auto___33831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___33831){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___33831){
return (function (state_33807){
var state_val_33808 = (state_33807[(1)]);
if((state_val_33808 === (7))){
var inst_33803 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
var statearr_33809_33832 = state_33807__$1;
(statearr_33809_33832[(2)] = inst_33803);

(statearr_33809_33832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (1))){
var state_33807__$1 = state_33807;
var statearr_33810_33833 = state_33807__$1;
(statearr_33810_33833[(2)] = null);

(statearr_33810_33833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (4))){
var inst_33786 = (state_33807[(7)]);
var inst_33786__$1 = (state_33807[(2)]);
var inst_33787 = (inst_33786__$1 == null);
var state_33807__$1 = (function (){var statearr_33811 = state_33807;
(statearr_33811[(7)] = inst_33786__$1);

return statearr_33811;
})();
if(cljs.core.truth_(inst_33787)){
var statearr_33812_33834 = state_33807__$1;
(statearr_33812_33834[(1)] = (5));

} else {
var statearr_33813_33835 = state_33807__$1;
(statearr_33813_33835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (13))){
var state_33807__$1 = state_33807;
var statearr_33814_33836 = state_33807__$1;
(statearr_33814_33836[(2)] = null);

(statearr_33814_33836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (6))){
var inst_33786 = (state_33807[(7)]);
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33807__$1,(11),to,inst_33786);
} else {
if((state_val_33808 === (3))){
var inst_33805 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33807__$1,inst_33805);
} else {
if((state_val_33808 === (12))){
var state_33807__$1 = state_33807;
var statearr_33815_33837 = state_33807__$1;
(statearr_33815_33837[(2)] = null);

(statearr_33815_33837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (2))){
var state_33807__$1 = state_33807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33807__$1,(4),from);
} else {
if((state_val_33808 === (11))){
var inst_33796 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
if(cljs.core.truth_(inst_33796)){
var statearr_33816_33838 = state_33807__$1;
(statearr_33816_33838[(1)] = (12));

} else {
var statearr_33817_33839 = state_33807__$1;
(statearr_33817_33839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (9))){
var state_33807__$1 = state_33807;
var statearr_33818_33840 = state_33807__$1;
(statearr_33818_33840[(2)] = null);

(statearr_33818_33840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (5))){
var state_33807__$1 = state_33807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33819_33841 = state_33807__$1;
(statearr_33819_33841[(1)] = (8));

} else {
var statearr_33820_33842 = state_33807__$1;
(statearr_33820_33842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (14))){
var inst_33801 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
var statearr_33821_33843 = state_33807__$1;
(statearr_33821_33843[(2)] = inst_33801);

(statearr_33821_33843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (10))){
var inst_33793 = (state_33807[(2)]);
var state_33807__$1 = state_33807;
var statearr_33822_33844 = state_33807__$1;
(statearr_33822_33844[(2)] = inst_33793);

(statearr_33822_33844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33808 === (8))){
var inst_33790 = cljs.core.async.close_BANG_.call(null,to);
var state_33807__$1 = state_33807;
var statearr_33823_33845 = state_33807__$1;
(statearr_33823_33845[(2)] = inst_33790);

(statearr_33823_33845[(1)] = (10));


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
});})(c__20396__auto___33831))
;
return ((function (switch__20381__auto__,c__20396__auto___33831){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_33827 = [null,null,null,null,null,null,null,null];
(statearr_33827[(0)] = state_machine__20382__auto__);

(statearr_33827[(1)] = (1));

return statearr_33827;
});
var state_machine__20382__auto____1 = (function (state_33807){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_33807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e33828){if((e33828 instanceof Object)){
var ex__20385__auto__ = e33828;
var statearr_33829_33846 = state_33807;
(statearr_33829_33846[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33847 = state_33807;
state_33807 = G__33847;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_33807){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_33807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___33831))
})();
var state__20398__auto__ = (function (){var statearr_33830 = f__20397__auto__.call(null);
(statearr_33830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___33831);

return statearr_33830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___33831))
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
return (function (p__34031){
var vec__34032 = p__34031;
var v = cljs.core.nth.call(null,vec__34032,(0),null);
var p = cljs.core.nth.call(null,vec__34032,(1),null);
var job = vec__34032;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20396__auto___34214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___34214,res,vec__34032,v,p,job,jobs,results){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___34214,res,vec__34032,v,p,job,jobs,results){
return (function (state_34037){
var state_val_34038 = (state_34037[(1)]);
if((state_val_34038 === (2))){
var inst_34034 = (state_34037[(2)]);
var inst_34035 = cljs.core.async.close_BANG_.call(null,res);
var state_34037__$1 = (function (){var statearr_34039 = state_34037;
(statearr_34039[(7)] = inst_34034);

return statearr_34039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34037__$1,inst_34035);
} else {
if((state_val_34038 === (1))){
var state_34037__$1 = state_34037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34037__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20396__auto___34214,res,vec__34032,v,p,job,jobs,results))
;
return ((function (switch__20381__auto__,c__20396__auto___34214,res,vec__34032,v,p,job,jobs,results){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = state_machine__20382__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var state_machine__20382__auto____1 = (function (state_34037){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34044){if((e34044 instanceof Object)){
var ex__20385__auto__ = e34044;
var statearr_34045_34215 = state_34037;
(statearr_34045_34215[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34216 = state_34037;
state_34037 = G__34216;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34037){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___34214,res,vec__34032,v,p,job,jobs,results))
})();
var state__20398__auto__ = (function (){var statearr_34046 = f__20397__auto__.call(null);
(statearr_34046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___34214);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___34214,res,vec__34032,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34047){
var vec__34048 = p__34047;
var v = cljs.core.nth.call(null,vec__34048,(0),null);
var p = cljs.core.nth.call(null,vec__34048,(1),null);
var job = vec__34048;
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
var n__15331__auto___34217 = n;
var __34218 = (0);
while(true){
if((__34218 < n__15331__auto___34217)){
var G__34049_34219 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34049_34219) {
case "async":
var c__20396__auto___34221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34218,c__20396__auto___34221,G__34049_34219,n__15331__auto___34217,jobs,results,process,async){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (__34218,c__20396__auto___34221,G__34049_34219,n__15331__auto___34217,jobs,results,process,async){
return (function (state_34062){
var state_val_34063 = (state_34062[(1)]);
if((state_val_34063 === (7))){
var inst_34058 = (state_34062[(2)]);
var state_34062__$1 = state_34062;
var statearr_34064_34222 = state_34062__$1;
(statearr_34064_34222[(2)] = inst_34058);

(statearr_34064_34222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (6))){
var state_34062__$1 = state_34062;
var statearr_34065_34223 = state_34062__$1;
(statearr_34065_34223[(2)] = null);

(statearr_34065_34223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (5))){
var state_34062__$1 = state_34062;
var statearr_34066_34224 = state_34062__$1;
(statearr_34066_34224[(2)] = null);

(statearr_34066_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (4))){
var inst_34052 = (state_34062[(2)]);
var inst_34053 = async.call(null,inst_34052);
var state_34062__$1 = state_34062;
if(cljs.core.truth_(inst_34053)){
var statearr_34067_34225 = state_34062__$1;
(statearr_34067_34225[(1)] = (5));

} else {
var statearr_34068_34226 = state_34062__$1;
(statearr_34068_34226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34063 === (3))){
var inst_34060 = (state_34062[(2)]);
var state_34062__$1 = state_34062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34062__$1,inst_34060);
} else {
if((state_val_34063 === (2))){
var state_34062__$1 = state_34062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34062__$1,(4),jobs);
} else {
if((state_val_34063 === (1))){
var state_34062__$1 = state_34062;
var statearr_34069_34227 = state_34062__$1;
(statearr_34069_34227[(2)] = null);

(statearr_34069_34227[(1)] = (2));


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
});})(__34218,c__20396__auto___34221,G__34049_34219,n__15331__auto___34217,jobs,results,process,async))
;
return ((function (__34218,switch__20381__auto__,c__20396__auto___34221,G__34049_34219,n__15331__auto___34217,jobs,results,process,async){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34073 = [null,null,null,null,null,null,null];
(statearr_34073[(0)] = state_machine__20382__auto__);

(statearr_34073[(1)] = (1));

return statearr_34073;
});
var state_machine__20382__auto____1 = (function (state_34062){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34074){if((e34074 instanceof Object)){
var ex__20385__auto__ = e34074;
var statearr_34075_34228 = state_34062;
(statearr_34075_34228[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34229 = state_34062;
state_34062 = G__34229;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34062){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(__34218,switch__20381__auto__,c__20396__auto___34221,G__34049_34219,n__15331__auto___34217,jobs,results,process,async))
})();
var state__20398__auto__ = (function (){var statearr_34076 = f__20397__auto__.call(null);
(statearr_34076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___34221);

return statearr_34076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(__34218,c__20396__auto___34221,G__34049_34219,n__15331__auto___34217,jobs,results,process,async))
);


break;
case "compute":
var c__20396__auto___34230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34218,c__20396__auto___34230,G__34049_34219,n__15331__auto___34217,jobs,results,process,async){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (__34218,c__20396__auto___34230,G__34049_34219,n__15331__auto___34217,jobs,results,process,async){
return (function (state_34089){
var state_val_34090 = (state_34089[(1)]);
if((state_val_34090 === (7))){
var inst_34085 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34091_34231 = state_34089__$1;
(statearr_34091_34231[(2)] = inst_34085);

(statearr_34091_34231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (6))){
var state_34089__$1 = state_34089;
var statearr_34092_34232 = state_34089__$1;
(statearr_34092_34232[(2)] = null);

(statearr_34092_34232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (5))){
var state_34089__$1 = state_34089;
var statearr_34093_34233 = state_34089__$1;
(statearr_34093_34233[(2)] = null);

(statearr_34093_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (4))){
var inst_34079 = (state_34089[(2)]);
var inst_34080 = process.call(null,inst_34079);
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34080)){
var statearr_34094_34234 = state_34089__$1;
(statearr_34094_34234[(1)] = (5));

} else {
var statearr_34095_34235 = state_34089__$1;
(statearr_34095_34235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (3))){
var inst_34087 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34089__$1,inst_34087);
} else {
if((state_val_34090 === (2))){
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34089__$1,(4),jobs);
} else {
if((state_val_34090 === (1))){
var state_34089__$1 = state_34089;
var statearr_34096_34236 = state_34089__$1;
(statearr_34096_34236[(2)] = null);

(statearr_34096_34236[(1)] = (2));


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
});})(__34218,c__20396__auto___34230,G__34049_34219,n__15331__auto___34217,jobs,results,process,async))
;
return ((function (__34218,switch__20381__auto__,c__20396__auto___34230,G__34049_34219,n__15331__auto___34217,jobs,results,process,async){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34100 = [null,null,null,null,null,null,null];
(statearr_34100[(0)] = state_machine__20382__auto__);

(statearr_34100[(1)] = (1));

return statearr_34100;
});
var state_machine__20382__auto____1 = (function (state_34089){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34101){if((e34101 instanceof Object)){
var ex__20385__auto__ = e34101;
var statearr_34102_34237 = state_34089;
(statearr_34102_34237[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34238 = state_34089;
state_34089 = G__34238;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34089){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(__34218,switch__20381__auto__,c__20396__auto___34230,G__34049_34219,n__15331__auto___34217,jobs,results,process,async))
})();
var state__20398__auto__ = (function (){var statearr_34103 = f__20397__auto__.call(null);
(statearr_34103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___34230);

return statearr_34103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(__34218,c__20396__auto___34230,G__34049_34219,n__15331__auto___34217,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34239 = (__34218 + (1));
__34218 = G__34239;
continue;
} else {
}
break;
}

var c__20396__auto___34240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___34240,jobs,results,process,async){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___34240,jobs,results,process,async){
return (function (state_34125){
var state_val_34126 = (state_34125[(1)]);
if((state_val_34126 === (9))){
var inst_34118 = (state_34125[(2)]);
var state_34125__$1 = (function (){var statearr_34127 = state_34125;
(statearr_34127[(7)] = inst_34118);

return statearr_34127;
})();
var statearr_34128_34241 = state_34125__$1;
(statearr_34128_34241[(2)] = null);

(statearr_34128_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (8))){
var inst_34111 = (state_34125[(8)]);
var inst_34116 = (state_34125[(2)]);
var state_34125__$1 = (function (){var statearr_34129 = state_34125;
(statearr_34129[(9)] = inst_34116);

return statearr_34129;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34125__$1,(9),results,inst_34111);
} else {
if((state_val_34126 === (7))){
var inst_34121 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34130_34242 = state_34125__$1;
(statearr_34130_34242[(2)] = inst_34121);

(statearr_34130_34242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (6))){
var inst_34111 = (state_34125[(8)]);
var inst_34106 = (state_34125[(10)]);
var inst_34111__$1 = cljs.core.async.chan.call(null,(1));
var inst_34112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34113 = [inst_34106,inst_34111__$1];
var inst_34114 = (new cljs.core.PersistentVector(null,2,(5),inst_34112,inst_34113,null));
var state_34125__$1 = (function (){var statearr_34131 = state_34125;
(statearr_34131[(8)] = inst_34111__$1);

return statearr_34131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34125__$1,(8),jobs,inst_34114);
} else {
if((state_val_34126 === (5))){
var inst_34109 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34125__$1 = state_34125;
var statearr_34132_34243 = state_34125__$1;
(statearr_34132_34243[(2)] = inst_34109);

(statearr_34132_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (4))){
var inst_34106 = (state_34125[(10)]);
var inst_34106__$1 = (state_34125[(2)]);
var inst_34107 = (inst_34106__$1 == null);
var state_34125__$1 = (function (){var statearr_34133 = state_34125;
(statearr_34133[(10)] = inst_34106__$1);

return statearr_34133;
})();
if(cljs.core.truth_(inst_34107)){
var statearr_34134_34244 = state_34125__$1;
(statearr_34134_34244[(1)] = (5));

} else {
var statearr_34135_34245 = state_34125__$1;
(statearr_34135_34245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (3))){
var inst_34123 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34125__$1,inst_34123);
} else {
if((state_val_34126 === (2))){
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34125__$1,(4),from);
} else {
if((state_val_34126 === (1))){
var state_34125__$1 = state_34125;
var statearr_34136_34246 = state_34125__$1;
(statearr_34136_34246[(2)] = null);

(statearr_34136_34246[(1)] = (2));


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
});})(c__20396__auto___34240,jobs,results,process,async))
;
return ((function (switch__20381__auto__,c__20396__auto___34240,jobs,results,process,async){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34140 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34140[(0)] = state_machine__20382__auto__);

(statearr_34140[(1)] = (1));

return statearr_34140;
});
var state_machine__20382__auto____1 = (function (state_34125){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34141){if((e34141 instanceof Object)){
var ex__20385__auto__ = e34141;
var statearr_34142_34247 = state_34125;
(statearr_34142_34247[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34248 = state_34125;
state_34125 = G__34248;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___34240,jobs,results,process,async))
})();
var state__20398__auto__ = (function (){var statearr_34143 = f__20397__auto__.call(null);
(statearr_34143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___34240);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___34240,jobs,results,process,async))
);


var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__,jobs,results,process,async){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__,jobs,results,process,async){
return (function (state_34181){
var state_val_34182 = (state_34181[(1)]);
if((state_val_34182 === (7))){
var inst_34177 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34183_34249 = state_34181__$1;
(statearr_34183_34249[(2)] = inst_34177);

(statearr_34183_34249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (20))){
var state_34181__$1 = state_34181;
var statearr_34184_34250 = state_34181__$1;
(statearr_34184_34250[(2)] = null);

(statearr_34184_34250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (1))){
var state_34181__$1 = state_34181;
var statearr_34185_34251 = state_34181__$1;
(statearr_34185_34251[(2)] = null);

(statearr_34185_34251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (4))){
var inst_34146 = (state_34181[(7)]);
var inst_34146__$1 = (state_34181[(2)]);
var inst_34147 = (inst_34146__$1 == null);
var state_34181__$1 = (function (){var statearr_34186 = state_34181;
(statearr_34186[(7)] = inst_34146__$1);

return statearr_34186;
})();
if(cljs.core.truth_(inst_34147)){
var statearr_34187_34252 = state_34181__$1;
(statearr_34187_34252[(1)] = (5));

} else {
var statearr_34188_34253 = state_34181__$1;
(statearr_34188_34253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (15))){
var inst_34159 = (state_34181[(8)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34181__$1,(18),to,inst_34159);
} else {
if((state_val_34182 === (21))){
var inst_34172 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34189_34254 = state_34181__$1;
(statearr_34189_34254[(2)] = inst_34172);

(statearr_34189_34254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (13))){
var inst_34174 = (state_34181[(2)]);
var state_34181__$1 = (function (){var statearr_34190 = state_34181;
(statearr_34190[(9)] = inst_34174);

return statearr_34190;
})();
var statearr_34191_34255 = state_34181__$1;
(statearr_34191_34255[(2)] = null);

(statearr_34191_34255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (6))){
var inst_34146 = (state_34181[(7)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34181__$1,(11),inst_34146);
} else {
if((state_val_34182 === (17))){
var inst_34167 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
if(cljs.core.truth_(inst_34167)){
var statearr_34192_34256 = state_34181__$1;
(statearr_34192_34256[(1)] = (19));

} else {
var statearr_34193_34257 = state_34181__$1;
(statearr_34193_34257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (3))){
var inst_34179 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34181__$1,inst_34179);
} else {
if((state_val_34182 === (12))){
var inst_34156 = (state_34181[(10)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34181__$1,(14),inst_34156);
} else {
if((state_val_34182 === (2))){
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34181__$1,(4),results);
} else {
if((state_val_34182 === (19))){
var state_34181__$1 = state_34181;
var statearr_34194_34258 = state_34181__$1;
(statearr_34194_34258[(2)] = null);

(statearr_34194_34258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (11))){
var inst_34156 = (state_34181[(2)]);
var state_34181__$1 = (function (){var statearr_34195 = state_34181;
(statearr_34195[(10)] = inst_34156);

return statearr_34195;
})();
var statearr_34196_34259 = state_34181__$1;
(statearr_34196_34259[(2)] = null);

(statearr_34196_34259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (9))){
var state_34181__$1 = state_34181;
var statearr_34197_34260 = state_34181__$1;
(statearr_34197_34260[(2)] = null);

(statearr_34197_34260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (5))){
var state_34181__$1 = state_34181;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34198_34261 = state_34181__$1;
(statearr_34198_34261[(1)] = (8));

} else {
var statearr_34199_34262 = state_34181__$1;
(statearr_34199_34262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (14))){
var inst_34161 = (state_34181[(11)]);
var inst_34159 = (state_34181[(8)]);
var inst_34159__$1 = (state_34181[(2)]);
var inst_34160 = (inst_34159__$1 == null);
var inst_34161__$1 = cljs.core.not.call(null,inst_34160);
var state_34181__$1 = (function (){var statearr_34200 = state_34181;
(statearr_34200[(11)] = inst_34161__$1);

(statearr_34200[(8)] = inst_34159__$1);

return statearr_34200;
})();
if(inst_34161__$1){
var statearr_34201_34263 = state_34181__$1;
(statearr_34201_34263[(1)] = (15));

} else {
var statearr_34202_34264 = state_34181__$1;
(statearr_34202_34264[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (16))){
var inst_34161 = (state_34181[(11)]);
var state_34181__$1 = state_34181;
var statearr_34203_34265 = state_34181__$1;
(statearr_34203_34265[(2)] = inst_34161);

(statearr_34203_34265[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (10))){
var inst_34153 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34204_34266 = state_34181__$1;
(statearr_34204_34266[(2)] = inst_34153);

(statearr_34204_34266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (18))){
var inst_34164 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34205_34267 = state_34181__$1;
(statearr_34205_34267[(2)] = inst_34164);

(statearr_34205_34267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (8))){
var inst_34150 = cljs.core.async.close_BANG_.call(null,to);
var state_34181__$1 = state_34181;
var statearr_34206_34268 = state_34181__$1;
(statearr_34206_34268[(2)] = inst_34150);

(statearr_34206_34268[(1)] = (10));


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
});})(c__20396__auto__,jobs,results,process,async))
;
return ((function (switch__20381__auto__,c__20396__auto__,jobs,results,process,async){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34210[(0)] = state_machine__20382__auto__);

(statearr_34210[(1)] = (1));

return statearr_34210;
});
var state_machine__20382__auto____1 = (function (state_34181){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34211){if((e34211 instanceof Object)){
var ex__20385__auto__ = e34211;
var statearr_34212_34269 = state_34181;
(statearr_34212_34269[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34270 = state_34181;
state_34181 = G__34270;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34181){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__,jobs,results,process,async))
})();
var state__20398__auto__ = (function (){var statearr_34213 = f__20397__auto__.call(null);
(statearr_34213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_34213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__,jobs,results,process,async))
);

return c__20396__auto__;
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
var c__20396__auto___34371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___34371,tc,fc){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___34371,tc,fc){
return (function (state_34346){
var state_val_34347 = (state_34346[(1)]);
if((state_val_34347 === (7))){
var inst_34342 = (state_34346[(2)]);
var state_34346__$1 = state_34346;
var statearr_34348_34372 = state_34346__$1;
(statearr_34348_34372[(2)] = inst_34342);

(statearr_34348_34372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (1))){
var state_34346__$1 = state_34346;
var statearr_34349_34373 = state_34346__$1;
(statearr_34349_34373[(2)] = null);

(statearr_34349_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (4))){
var inst_34323 = (state_34346[(7)]);
var inst_34323__$1 = (state_34346[(2)]);
var inst_34324 = (inst_34323__$1 == null);
var state_34346__$1 = (function (){var statearr_34350 = state_34346;
(statearr_34350[(7)] = inst_34323__$1);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34324)){
var statearr_34351_34374 = state_34346__$1;
(statearr_34351_34374[(1)] = (5));

} else {
var statearr_34352_34375 = state_34346__$1;
(statearr_34352_34375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (13))){
var state_34346__$1 = state_34346;
var statearr_34353_34376 = state_34346__$1;
(statearr_34353_34376[(2)] = null);

(statearr_34353_34376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (6))){
var inst_34323 = (state_34346[(7)]);
var inst_34329 = p.call(null,inst_34323);
var state_34346__$1 = state_34346;
if(cljs.core.truth_(inst_34329)){
var statearr_34354_34377 = state_34346__$1;
(statearr_34354_34377[(1)] = (9));

} else {
var statearr_34355_34378 = state_34346__$1;
(statearr_34355_34378[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (3))){
var inst_34344 = (state_34346[(2)]);
var state_34346__$1 = state_34346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34346__$1,inst_34344);
} else {
if((state_val_34347 === (12))){
var state_34346__$1 = state_34346;
var statearr_34356_34379 = state_34346__$1;
(statearr_34356_34379[(2)] = null);

(statearr_34356_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (2))){
var state_34346__$1 = state_34346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34346__$1,(4),ch);
} else {
if((state_val_34347 === (11))){
var inst_34323 = (state_34346[(7)]);
var inst_34333 = (state_34346[(2)]);
var state_34346__$1 = state_34346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34346__$1,(8),inst_34333,inst_34323);
} else {
if((state_val_34347 === (9))){
var state_34346__$1 = state_34346;
var statearr_34357_34380 = state_34346__$1;
(statearr_34357_34380[(2)] = tc);

(statearr_34357_34380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (5))){
var inst_34326 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34327 = cljs.core.async.close_BANG_.call(null,fc);
var state_34346__$1 = (function (){var statearr_34358 = state_34346;
(statearr_34358[(8)] = inst_34326);

return statearr_34358;
})();
var statearr_34359_34381 = state_34346__$1;
(statearr_34359_34381[(2)] = inst_34327);

(statearr_34359_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (14))){
var inst_34340 = (state_34346[(2)]);
var state_34346__$1 = state_34346;
var statearr_34360_34382 = state_34346__$1;
(statearr_34360_34382[(2)] = inst_34340);

(statearr_34360_34382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (10))){
var state_34346__$1 = state_34346;
var statearr_34361_34383 = state_34346__$1;
(statearr_34361_34383[(2)] = fc);

(statearr_34361_34383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34347 === (8))){
var inst_34335 = (state_34346[(2)]);
var state_34346__$1 = state_34346;
if(cljs.core.truth_(inst_34335)){
var statearr_34362_34384 = state_34346__$1;
(statearr_34362_34384[(1)] = (12));

} else {
var statearr_34363_34385 = state_34346__$1;
(statearr_34363_34385[(1)] = (13));

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
});})(c__20396__auto___34371,tc,fc))
;
return ((function (switch__20381__auto__,c__20396__auto___34371,tc,fc){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34367 = [null,null,null,null,null,null,null,null,null];
(statearr_34367[(0)] = state_machine__20382__auto__);

(statearr_34367[(1)] = (1));

return statearr_34367;
});
var state_machine__20382__auto____1 = (function (state_34346){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34368){if((e34368 instanceof Object)){
var ex__20385__auto__ = e34368;
var statearr_34369_34386 = state_34346;
(statearr_34369_34386[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_34346;
state_34346 = G__34387;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34346){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___34371,tc,fc))
})();
var state__20398__auto__ = (function (){var statearr_34370 = f__20397__auto__.call(null);
(statearr_34370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___34371);

return statearr_34370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___34371,tc,fc))
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
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_34434){
var state_val_34435 = (state_34434[(1)]);
if((state_val_34435 === (7))){
var inst_34430 = (state_34434[(2)]);
var state_34434__$1 = state_34434;
var statearr_34436_34452 = state_34434__$1;
(statearr_34436_34452[(2)] = inst_34430);

(statearr_34436_34452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34435 === (6))){
var inst_34420 = (state_34434[(7)]);
var inst_34423 = (state_34434[(8)]);
var inst_34427 = f.call(null,inst_34420,inst_34423);
var inst_34420__$1 = inst_34427;
var state_34434__$1 = (function (){var statearr_34437 = state_34434;
(statearr_34437[(7)] = inst_34420__$1);

return statearr_34437;
})();
var statearr_34438_34453 = state_34434__$1;
(statearr_34438_34453[(2)] = null);

(statearr_34438_34453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34435 === (5))){
var inst_34420 = (state_34434[(7)]);
var state_34434__$1 = state_34434;
var statearr_34439_34454 = state_34434__$1;
(statearr_34439_34454[(2)] = inst_34420);

(statearr_34439_34454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34435 === (4))){
var inst_34423 = (state_34434[(8)]);
var inst_34423__$1 = (state_34434[(2)]);
var inst_34424 = (inst_34423__$1 == null);
var state_34434__$1 = (function (){var statearr_34440 = state_34434;
(statearr_34440[(8)] = inst_34423__$1);

return statearr_34440;
})();
if(cljs.core.truth_(inst_34424)){
var statearr_34441_34455 = state_34434__$1;
(statearr_34441_34455[(1)] = (5));

} else {
var statearr_34442_34456 = state_34434__$1;
(statearr_34442_34456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34435 === (3))){
var inst_34432 = (state_34434[(2)]);
var state_34434__$1 = state_34434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34434__$1,inst_34432);
} else {
if((state_val_34435 === (2))){
var state_34434__$1 = state_34434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34434__$1,(4),ch);
} else {
if((state_val_34435 === (1))){
var inst_34420 = init;
var state_34434__$1 = (function (){var statearr_34443 = state_34434;
(statearr_34443[(7)] = inst_34420);

return statearr_34443;
})();
var statearr_34444_34457 = state_34434__$1;
(statearr_34444_34457[(2)] = null);

(statearr_34444_34457[(1)] = (2));


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
});})(c__20396__auto__))
;
return ((function (switch__20381__auto__,c__20396__auto__){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34448 = [null,null,null,null,null,null,null,null,null];
(statearr_34448[(0)] = state_machine__20382__auto__);

(statearr_34448[(1)] = (1));

return statearr_34448;
});
var state_machine__20382__auto____1 = (function (state_34434){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34449){if((e34449 instanceof Object)){
var ex__20385__auto__ = e34449;
var statearr_34450_34458 = state_34434;
(statearr_34450_34458[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34459 = state_34434;
state_34434 = G__34459;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34434){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_34451 = f__20397__auto__.call(null);
(statearr_34451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
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
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_34533){
var state_val_34534 = (state_34533[(1)]);
if((state_val_34534 === (7))){
var inst_34515 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
var statearr_34535_34558 = state_34533__$1;
(statearr_34535_34558[(2)] = inst_34515);

(statearr_34535_34558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (1))){
var inst_34509 = cljs.core.seq.call(null,coll);
var inst_34510 = inst_34509;
var state_34533__$1 = (function (){var statearr_34536 = state_34533;
(statearr_34536[(7)] = inst_34510);

return statearr_34536;
})();
var statearr_34537_34559 = state_34533__$1;
(statearr_34537_34559[(2)] = null);

(statearr_34537_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (4))){
var inst_34510 = (state_34533[(7)]);
var inst_34513 = cljs.core.first.call(null,inst_34510);
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34533__$1,(7),ch,inst_34513);
} else {
if((state_val_34534 === (13))){
var inst_34527 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
var statearr_34538_34560 = state_34533__$1;
(statearr_34538_34560[(2)] = inst_34527);

(statearr_34538_34560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (6))){
var inst_34518 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
if(cljs.core.truth_(inst_34518)){
var statearr_34539_34561 = state_34533__$1;
(statearr_34539_34561[(1)] = (8));

} else {
var statearr_34540_34562 = state_34533__$1;
(statearr_34540_34562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (3))){
var inst_34531 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34533__$1,inst_34531);
} else {
if((state_val_34534 === (12))){
var state_34533__$1 = state_34533;
var statearr_34541_34563 = state_34533__$1;
(statearr_34541_34563[(2)] = null);

(statearr_34541_34563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (2))){
var inst_34510 = (state_34533[(7)]);
var state_34533__$1 = state_34533;
if(cljs.core.truth_(inst_34510)){
var statearr_34542_34564 = state_34533__$1;
(statearr_34542_34564[(1)] = (4));

} else {
var statearr_34543_34565 = state_34533__$1;
(statearr_34543_34565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (11))){
var inst_34524 = cljs.core.async.close_BANG_.call(null,ch);
var state_34533__$1 = state_34533;
var statearr_34544_34566 = state_34533__$1;
(statearr_34544_34566[(2)] = inst_34524);

(statearr_34544_34566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (9))){
var state_34533__$1 = state_34533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34545_34567 = state_34533__$1;
(statearr_34545_34567[(1)] = (11));

} else {
var statearr_34546_34568 = state_34533__$1;
(statearr_34546_34568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (5))){
var inst_34510 = (state_34533[(7)]);
var state_34533__$1 = state_34533;
var statearr_34547_34569 = state_34533__$1;
(statearr_34547_34569[(2)] = inst_34510);

(statearr_34547_34569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (10))){
var inst_34529 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
var statearr_34548_34570 = state_34533__$1;
(statearr_34548_34570[(2)] = inst_34529);

(statearr_34548_34570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (8))){
var inst_34510 = (state_34533[(7)]);
var inst_34520 = cljs.core.next.call(null,inst_34510);
var inst_34510__$1 = inst_34520;
var state_34533__$1 = (function (){var statearr_34549 = state_34533;
(statearr_34549[(7)] = inst_34510__$1);

return statearr_34549;
})();
var statearr_34550_34571 = state_34533__$1;
(statearr_34550_34571[(2)] = null);

(statearr_34550_34571[(1)] = (2));


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
});})(c__20396__auto__))
;
return ((function (switch__20381__auto__,c__20396__auto__){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = state_machine__20382__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var state_machine__20382__auto____1 = (function (state_34533){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e34555){if((e34555 instanceof Object)){
var ex__20385__auto__ = e34555;
var statearr_34556_34572 = state_34533;
(statearr_34556_34572[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34573 = state_34533;
state_34533 = G__34573;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34533){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_34557 = f__20397__auto__.call(null);
(statearr_34557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
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

cljs.core.async.Mux = (function (){var obj34575 = {};
return obj34575;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__14432__auto__ = _;
if(and__14432__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__14432__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15088__auto__ = (((_ == null))?null:_);
return (function (){var or__14444__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj34577 = {};
return obj34577;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
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
if(typeof cljs.core.async.t34799 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34799 = (function (cs,ch,mult,meta34800){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34800 = meta34800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34799.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34799.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34799.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34799.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t34799.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34801){
var self__ = this;
var _34801__$1 = this;
return self__.meta34800;
});})(cs))
;

cljs.core.async.t34799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34801,meta34800__$1){
var self__ = this;
var _34801__$1 = this;
return (new cljs.core.async.t34799(self__.cs,self__.ch,self__.mult,meta34800__$1));
});})(cs))
;

cljs.core.async.t34799.cljs$lang$type = true;

cljs.core.async.t34799.cljs$lang$ctorStr = "cljs.core.async/t34799";

cljs.core.async.t34799.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t34799");
});})(cs))
;

cljs.core.async.__GT_t34799 = ((function (cs){
return (function __GT_t34799(cs__$1,ch__$1,mult__$1,meta34800){
return (new cljs.core.async.t34799(cs__$1,ch__$1,mult__$1,meta34800));
});})(cs))
;

}

return (new cljs.core.async.t34799(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20396__auto___35020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___35020,cs,m,dchan,dctr,done){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___35020,cs,m,dchan,dctr,done){
return (function (state_34932){
var state_val_34933 = (state_34932[(1)]);
if((state_val_34933 === (7))){
var inst_34928 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34934_35021 = state_34932__$1;
(statearr_34934_35021[(2)] = inst_34928);

(statearr_34934_35021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (20))){
var inst_34833 = (state_34932[(7)]);
var inst_34843 = cljs.core.first.call(null,inst_34833);
var inst_34844 = cljs.core.nth.call(null,inst_34843,(0),null);
var inst_34845 = cljs.core.nth.call(null,inst_34843,(1),null);
var state_34932__$1 = (function (){var statearr_34935 = state_34932;
(statearr_34935[(8)] = inst_34844);

return statearr_34935;
})();
if(cljs.core.truth_(inst_34845)){
var statearr_34936_35022 = state_34932__$1;
(statearr_34936_35022[(1)] = (22));

} else {
var statearr_34937_35023 = state_34932__$1;
(statearr_34937_35023[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (27))){
var inst_34873 = (state_34932[(9)]);
var inst_34875 = (state_34932[(10)]);
var inst_34804 = (state_34932[(11)]);
var inst_34880 = (state_34932[(12)]);
var inst_34880__$1 = cljs.core._nth.call(null,inst_34873,inst_34875);
var inst_34881 = cljs.core.async.put_BANG_.call(null,inst_34880__$1,inst_34804,done);
var state_34932__$1 = (function (){var statearr_34938 = state_34932;
(statearr_34938[(12)] = inst_34880__$1);

return statearr_34938;
})();
if(cljs.core.truth_(inst_34881)){
var statearr_34939_35024 = state_34932__$1;
(statearr_34939_35024[(1)] = (30));

} else {
var statearr_34940_35025 = state_34932__$1;
(statearr_34940_35025[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (1))){
var state_34932__$1 = state_34932;
var statearr_34941_35026 = state_34932__$1;
(statearr_34941_35026[(2)] = null);

(statearr_34941_35026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (24))){
var inst_34833 = (state_34932[(7)]);
var inst_34850 = (state_34932[(2)]);
var inst_34851 = cljs.core.next.call(null,inst_34833);
var inst_34813 = inst_34851;
var inst_34814 = null;
var inst_34815 = (0);
var inst_34816 = (0);
var state_34932__$1 = (function (){var statearr_34942 = state_34932;
(statearr_34942[(13)] = inst_34813);

(statearr_34942[(14)] = inst_34816);

(statearr_34942[(15)] = inst_34850);

(statearr_34942[(16)] = inst_34814);

(statearr_34942[(17)] = inst_34815);

return statearr_34942;
})();
var statearr_34943_35027 = state_34932__$1;
(statearr_34943_35027[(2)] = null);

(statearr_34943_35027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (39))){
var state_34932__$1 = state_34932;
var statearr_34947_35028 = state_34932__$1;
(statearr_34947_35028[(2)] = null);

(statearr_34947_35028[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (4))){
var inst_34804 = (state_34932[(11)]);
var inst_34804__$1 = (state_34932[(2)]);
var inst_34805 = (inst_34804__$1 == null);
var state_34932__$1 = (function (){var statearr_34948 = state_34932;
(statearr_34948[(11)] = inst_34804__$1);

return statearr_34948;
})();
if(cljs.core.truth_(inst_34805)){
var statearr_34949_35029 = state_34932__$1;
(statearr_34949_35029[(1)] = (5));

} else {
var statearr_34950_35030 = state_34932__$1;
(statearr_34950_35030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (15))){
var inst_34813 = (state_34932[(13)]);
var inst_34816 = (state_34932[(14)]);
var inst_34814 = (state_34932[(16)]);
var inst_34815 = (state_34932[(17)]);
var inst_34829 = (state_34932[(2)]);
var inst_34830 = (inst_34816 + (1));
var tmp34944 = inst_34813;
var tmp34945 = inst_34814;
var tmp34946 = inst_34815;
var inst_34813__$1 = tmp34944;
var inst_34814__$1 = tmp34945;
var inst_34815__$1 = tmp34946;
var inst_34816__$1 = inst_34830;
var state_34932__$1 = (function (){var statearr_34951 = state_34932;
(statearr_34951[(18)] = inst_34829);

(statearr_34951[(13)] = inst_34813__$1);

(statearr_34951[(14)] = inst_34816__$1);

(statearr_34951[(16)] = inst_34814__$1);

(statearr_34951[(17)] = inst_34815__$1);

return statearr_34951;
})();
var statearr_34952_35031 = state_34932__$1;
(statearr_34952_35031[(2)] = null);

(statearr_34952_35031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (21))){
var inst_34854 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34956_35032 = state_34932__$1;
(statearr_34956_35032[(2)] = inst_34854);

(statearr_34956_35032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (31))){
var inst_34880 = (state_34932[(12)]);
var inst_34884 = done.call(null,null);
var inst_34885 = cljs.core.async.untap_STAR_.call(null,m,inst_34880);
var state_34932__$1 = (function (){var statearr_34957 = state_34932;
(statearr_34957[(19)] = inst_34884);

return statearr_34957;
})();
var statearr_34958_35033 = state_34932__$1;
(statearr_34958_35033[(2)] = inst_34885);

(statearr_34958_35033[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (32))){
var inst_34873 = (state_34932[(9)]);
var inst_34872 = (state_34932[(20)]);
var inst_34875 = (state_34932[(10)]);
var inst_34874 = (state_34932[(21)]);
var inst_34887 = (state_34932[(2)]);
var inst_34888 = (inst_34875 + (1));
var tmp34953 = inst_34873;
var tmp34954 = inst_34872;
var tmp34955 = inst_34874;
var inst_34872__$1 = tmp34954;
var inst_34873__$1 = tmp34953;
var inst_34874__$1 = tmp34955;
var inst_34875__$1 = inst_34888;
var state_34932__$1 = (function (){var statearr_34959 = state_34932;
(statearr_34959[(9)] = inst_34873__$1);

(statearr_34959[(20)] = inst_34872__$1);

(statearr_34959[(10)] = inst_34875__$1);

(statearr_34959[(21)] = inst_34874__$1);

(statearr_34959[(22)] = inst_34887);

return statearr_34959;
})();
var statearr_34960_35034 = state_34932__$1;
(statearr_34960_35034[(2)] = null);

(statearr_34960_35034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (40))){
var inst_34900 = (state_34932[(23)]);
var inst_34904 = done.call(null,null);
var inst_34905 = cljs.core.async.untap_STAR_.call(null,m,inst_34900);
var state_34932__$1 = (function (){var statearr_34961 = state_34932;
(statearr_34961[(24)] = inst_34904);

return statearr_34961;
})();
var statearr_34962_35035 = state_34932__$1;
(statearr_34962_35035[(2)] = inst_34905);

(statearr_34962_35035[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (33))){
var inst_34891 = (state_34932[(25)]);
var inst_34893 = cljs.core.chunked_seq_QMARK_.call(null,inst_34891);
var state_34932__$1 = state_34932;
if(inst_34893){
var statearr_34963_35036 = state_34932__$1;
(statearr_34963_35036[(1)] = (36));

} else {
var statearr_34964_35037 = state_34932__$1;
(statearr_34964_35037[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (13))){
var inst_34823 = (state_34932[(26)]);
var inst_34826 = cljs.core.async.close_BANG_.call(null,inst_34823);
var state_34932__$1 = state_34932;
var statearr_34965_35038 = state_34932__$1;
(statearr_34965_35038[(2)] = inst_34826);

(statearr_34965_35038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (22))){
var inst_34844 = (state_34932[(8)]);
var inst_34847 = cljs.core.async.close_BANG_.call(null,inst_34844);
var state_34932__$1 = state_34932;
var statearr_34966_35039 = state_34932__$1;
(statearr_34966_35039[(2)] = inst_34847);

(statearr_34966_35039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (36))){
var inst_34891 = (state_34932[(25)]);
var inst_34895 = cljs.core.chunk_first.call(null,inst_34891);
var inst_34896 = cljs.core.chunk_rest.call(null,inst_34891);
var inst_34897 = cljs.core.count.call(null,inst_34895);
var inst_34872 = inst_34896;
var inst_34873 = inst_34895;
var inst_34874 = inst_34897;
var inst_34875 = (0);
var state_34932__$1 = (function (){var statearr_34967 = state_34932;
(statearr_34967[(9)] = inst_34873);

(statearr_34967[(20)] = inst_34872);

(statearr_34967[(10)] = inst_34875);

(statearr_34967[(21)] = inst_34874);

return statearr_34967;
})();
var statearr_34968_35040 = state_34932__$1;
(statearr_34968_35040[(2)] = null);

(statearr_34968_35040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (41))){
var inst_34891 = (state_34932[(25)]);
var inst_34907 = (state_34932[(2)]);
var inst_34908 = cljs.core.next.call(null,inst_34891);
var inst_34872 = inst_34908;
var inst_34873 = null;
var inst_34874 = (0);
var inst_34875 = (0);
var state_34932__$1 = (function (){var statearr_34969 = state_34932;
(statearr_34969[(9)] = inst_34873);

(statearr_34969[(20)] = inst_34872);

(statearr_34969[(10)] = inst_34875);

(statearr_34969[(21)] = inst_34874);

(statearr_34969[(27)] = inst_34907);

return statearr_34969;
})();
var statearr_34970_35041 = state_34932__$1;
(statearr_34970_35041[(2)] = null);

(statearr_34970_35041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (43))){
var state_34932__$1 = state_34932;
var statearr_34971_35042 = state_34932__$1;
(statearr_34971_35042[(2)] = null);

(statearr_34971_35042[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (29))){
var inst_34916 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34972_35043 = state_34932__$1;
(statearr_34972_35043[(2)] = inst_34916);

(statearr_34972_35043[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (44))){
var inst_34925 = (state_34932[(2)]);
var state_34932__$1 = (function (){var statearr_34973 = state_34932;
(statearr_34973[(28)] = inst_34925);

return statearr_34973;
})();
var statearr_34974_35044 = state_34932__$1;
(statearr_34974_35044[(2)] = null);

(statearr_34974_35044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (6))){
var inst_34864 = (state_34932[(29)]);
var inst_34863 = cljs.core.deref.call(null,cs);
var inst_34864__$1 = cljs.core.keys.call(null,inst_34863);
var inst_34865 = cljs.core.count.call(null,inst_34864__$1);
var inst_34866 = cljs.core.reset_BANG_.call(null,dctr,inst_34865);
var inst_34871 = cljs.core.seq.call(null,inst_34864__$1);
var inst_34872 = inst_34871;
var inst_34873 = null;
var inst_34874 = (0);
var inst_34875 = (0);
var state_34932__$1 = (function (){var statearr_34975 = state_34932;
(statearr_34975[(9)] = inst_34873);

(statearr_34975[(30)] = inst_34866);

(statearr_34975[(20)] = inst_34872);

(statearr_34975[(10)] = inst_34875);

(statearr_34975[(29)] = inst_34864__$1);

(statearr_34975[(21)] = inst_34874);

return statearr_34975;
})();
var statearr_34976_35045 = state_34932__$1;
(statearr_34976_35045[(2)] = null);

(statearr_34976_35045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (28))){
var inst_34891 = (state_34932[(25)]);
var inst_34872 = (state_34932[(20)]);
var inst_34891__$1 = cljs.core.seq.call(null,inst_34872);
var state_34932__$1 = (function (){var statearr_34977 = state_34932;
(statearr_34977[(25)] = inst_34891__$1);

return statearr_34977;
})();
if(inst_34891__$1){
var statearr_34978_35046 = state_34932__$1;
(statearr_34978_35046[(1)] = (33));

} else {
var statearr_34979_35047 = state_34932__$1;
(statearr_34979_35047[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (25))){
var inst_34875 = (state_34932[(10)]);
var inst_34874 = (state_34932[(21)]);
var inst_34877 = (inst_34875 < inst_34874);
var inst_34878 = inst_34877;
var state_34932__$1 = state_34932;
if(cljs.core.truth_(inst_34878)){
var statearr_34980_35048 = state_34932__$1;
(statearr_34980_35048[(1)] = (27));

} else {
var statearr_34981_35049 = state_34932__$1;
(statearr_34981_35049[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (34))){
var state_34932__$1 = state_34932;
var statearr_34982_35050 = state_34932__$1;
(statearr_34982_35050[(2)] = null);

(statearr_34982_35050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (17))){
var state_34932__$1 = state_34932;
var statearr_34983_35051 = state_34932__$1;
(statearr_34983_35051[(2)] = null);

(statearr_34983_35051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (3))){
var inst_34930 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34932__$1,inst_34930);
} else {
if((state_val_34933 === (12))){
var inst_34859 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34984_35052 = state_34932__$1;
(statearr_34984_35052[(2)] = inst_34859);

(statearr_34984_35052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (2))){
var state_34932__$1 = state_34932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34932__$1,(4),ch);
} else {
if((state_val_34933 === (23))){
var state_34932__$1 = state_34932;
var statearr_34985_35053 = state_34932__$1;
(statearr_34985_35053[(2)] = null);

(statearr_34985_35053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (35))){
var inst_34914 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34986_35054 = state_34932__$1;
(statearr_34986_35054[(2)] = inst_34914);

(statearr_34986_35054[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (19))){
var inst_34833 = (state_34932[(7)]);
var inst_34837 = cljs.core.chunk_first.call(null,inst_34833);
var inst_34838 = cljs.core.chunk_rest.call(null,inst_34833);
var inst_34839 = cljs.core.count.call(null,inst_34837);
var inst_34813 = inst_34838;
var inst_34814 = inst_34837;
var inst_34815 = inst_34839;
var inst_34816 = (0);
var state_34932__$1 = (function (){var statearr_34987 = state_34932;
(statearr_34987[(13)] = inst_34813);

(statearr_34987[(14)] = inst_34816);

(statearr_34987[(16)] = inst_34814);

(statearr_34987[(17)] = inst_34815);

return statearr_34987;
})();
var statearr_34988_35055 = state_34932__$1;
(statearr_34988_35055[(2)] = null);

(statearr_34988_35055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (11))){
var inst_34833 = (state_34932[(7)]);
var inst_34813 = (state_34932[(13)]);
var inst_34833__$1 = cljs.core.seq.call(null,inst_34813);
var state_34932__$1 = (function (){var statearr_34989 = state_34932;
(statearr_34989[(7)] = inst_34833__$1);

return statearr_34989;
})();
if(inst_34833__$1){
var statearr_34990_35056 = state_34932__$1;
(statearr_34990_35056[(1)] = (16));

} else {
var statearr_34991_35057 = state_34932__$1;
(statearr_34991_35057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (9))){
var inst_34861 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34992_35058 = state_34932__$1;
(statearr_34992_35058[(2)] = inst_34861);

(statearr_34992_35058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (5))){
var inst_34811 = cljs.core.deref.call(null,cs);
var inst_34812 = cljs.core.seq.call(null,inst_34811);
var inst_34813 = inst_34812;
var inst_34814 = null;
var inst_34815 = (0);
var inst_34816 = (0);
var state_34932__$1 = (function (){var statearr_34993 = state_34932;
(statearr_34993[(13)] = inst_34813);

(statearr_34993[(14)] = inst_34816);

(statearr_34993[(16)] = inst_34814);

(statearr_34993[(17)] = inst_34815);

return statearr_34993;
})();
var statearr_34994_35059 = state_34932__$1;
(statearr_34994_35059[(2)] = null);

(statearr_34994_35059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (14))){
var state_34932__$1 = state_34932;
var statearr_34995_35060 = state_34932__$1;
(statearr_34995_35060[(2)] = null);

(statearr_34995_35060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (45))){
var inst_34922 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34996_35061 = state_34932__$1;
(statearr_34996_35061[(2)] = inst_34922);

(statearr_34996_35061[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (26))){
var inst_34864 = (state_34932[(29)]);
var inst_34918 = (state_34932[(2)]);
var inst_34919 = cljs.core.seq.call(null,inst_34864);
var state_34932__$1 = (function (){var statearr_34997 = state_34932;
(statearr_34997[(31)] = inst_34918);

return statearr_34997;
})();
if(inst_34919){
var statearr_34998_35062 = state_34932__$1;
(statearr_34998_35062[(1)] = (42));

} else {
var statearr_34999_35063 = state_34932__$1;
(statearr_34999_35063[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (16))){
var inst_34833 = (state_34932[(7)]);
var inst_34835 = cljs.core.chunked_seq_QMARK_.call(null,inst_34833);
var state_34932__$1 = state_34932;
if(inst_34835){
var statearr_35000_35064 = state_34932__$1;
(statearr_35000_35064[(1)] = (19));

} else {
var statearr_35001_35065 = state_34932__$1;
(statearr_35001_35065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (38))){
var inst_34911 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_35002_35066 = state_34932__$1;
(statearr_35002_35066[(2)] = inst_34911);

(statearr_35002_35066[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (30))){
var state_34932__$1 = state_34932;
var statearr_35003_35067 = state_34932__$1;
(statearr_35003_35067[(2)] = null);

(statearr_35003_35067[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (10))){
var inst_34816 = (state_34932[(14)]);
var inst_34814 = (state_34932[(16)]);
var inst_34822 = cljs.core._nth.call(null,inst_34814,inst_34816);
var inst_34823 = cljs.core.nth.call(null,inst_34822,(0),null);
var inst_34824 = cljs.core.nth.call(null,inst_34822,(1),null);
var state_34932__$1 = (function (){var statearr_35004 = state_34932;
(statearr_35004[(26)] = inst_34823);

return statearr_35004;
})();
if(cljs.core.truth_(inst_34824)){
var statearr_35005_35068 = state_34932__$1;
(statearr_35005_35068[(1)] = (13));

} else {
var statearr_35006_35069 = state_34932__$1;
(statearr_35006_35069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (18))){
var inst_34857 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_35007_35070 = state_34932__$1;
(statearr_35007_35070[(2)] = inst_34857);

(statearr_35007_35070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (42))){
var state_34932__$1 = state_34932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34932__$1,(45),dchan);
} else {
if((state_val_34933 === (37))){
var inst_34891 = (state_34932[(25)]);
var inst_34900 = (state_34932[(23)]);
var inst_34804 = (state_34932[(11)]);
var inst_34900__$1 = cljs.core.first.call(null,inst_34891);
var inst_34901 = cljs.core.async.put_BANG_.call(null,inst_34900__$1,inst_34804,done);
var state_34932__$1 = (function (){var statearr_35008 = state_34932;
(statearr_35008[(23)] = inst_34900__$1);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34901)){
var statearr_35009_35071 = state_34932__$1;
(statearr_35009_35071[(1)] = (39));

} else {
var statearr_35010_35072 = state_34932__$1;
(statearr_35010_35072[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (8))){
var inst_34816 = (state_34932[(14)]);
var inst_34815 = (state_34932[(17)]);
var inst_34818 = (inst_34816 < inst_34815);
var inst_34819 = inst_34818;
var state_34932__$1 = state_34932;
if(cljs.core.truth_(inst_34819)){
var statearr_35011_35073 = state_34932__$1;
(statearr_35011_35073[(1)] = (10));

} else {
var statearr_35012_35074 = state_34932__$1;
(statearr_35012_35074[(1)] = (11));

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
});})(c__20396__auto___35020,cs,m,dchan,dctr,done))
;
return ((function (switch__20381__auto__,c__20396__auto___35020,cs,m,dchan,dctr,done){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_35016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35016[(0)] = state_machine__20382__auto__);

(statearr_35016[(1)] = (1));

return statearr_35016;
});
var state_machine__20382__auto____1 = (function (state_34932){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_34932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e35017){if((e35017 instanceof Object)){
var ex__20385__auto__ = e35017;
var statearr_35018_35075 = state_34932;
(statearr_35018_35075[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35076 = state_34932;
state_34932 = G__35076;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_34932){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_34932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___35020,cs,m,dchan,dctr,done))
})();
var state__20398__auto__ = (function (){var statearr_35019 = f__20397__auto__.call(null);
(statearr_35019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___35020);

return statearr_35019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___35020,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj35078 = {};
return obj35078;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__14432__auto__ = m;
if(and__14432__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__14432__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15088__auto__ = (((m == null))?null:m);
return (function (){var or__14444__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__35079){
var map__35084 = p__35079;
var map__35084__$1 = ((cljs.core.seq_QMARK_.call(null,map__35084))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);
var opts = map__35084__$1;
var statearr_35085_35088 = state;
(statearr_35085_35088[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__35084,map__35084__$1,opts){
return (function (val){
var statearr_35086_35089 = state;
(statearr_35086_35089[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35084,map__35084__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_35087_35090 = state;
(statearr_35087_35090[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__35079 = null;
if (arguments.length > 3) {
var G__35091__i = 0, G__35091__a = new Array(arguments.length -  3);
while (G__35091__i < G__35091__a.length) {G__35091__a[G__35091__i] = arguments[G__35091__i + 3]; ++G__35091__i;}
  p__35079 = new cljs.core.IndexedSeq(G__35091__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__35079);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__35092){
var state = cljs.core.first(arglist__35092);
arglist__35092 = cljs.core.next(arglist__35092);
var cont_block = cljs.core.first(arglist__35092);
arglist__35092 = cljs.core.next(arglist__35092);
var ports = cljs.core.first(arglist__35092);
var p__35079 = cljs.core.rest(arglist__35092);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__35079);
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
if(typeof cljs.core.async.t35212 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35212 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35213){
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
this.meta35213 = meta35213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35212.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t35212.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t35212.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35214){
var self__ = this;
var _35214__$1 = this;
return self__.meta35213;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35214,meta35213__$1){
var self__ = this;
var _35214__$1 = this;
return (new cljs.core.async.t35212(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35213__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t35212.cljs$lang$type = true;

cljs.core.async.t35212.cljs$lang$ctorStr = "cljs.core.async/t35212";

cljs.core.async.t35212.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t35212");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t35212 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35212(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35213){
return (new cljs.core.async.t35212(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35213));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t35212(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20396__auto___35331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___35331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___35331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35284){
var state_val_35285 = (state_35284[(1)]);
if((state_val_35285 === (7))){
var inst_35228 = (state_35284[(7)]);
var inst_35233 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35228);
var state_35284__$1 = state_35284;
var statearr_35286_35332 = state_35284__$1;
(statearr_35286_35332[(2)] = inst_35233);

(statearr_35286_35332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (20))){
var inst_35243 = (state_35284[(8)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35284__$1,(23),out,inst_35243);
} else {
if((state_val_35285 === (1))){
var inst_35218 = (state_35284[(9)]);
var inst_35218__$1 = calc_state.call(null);
var inst_35219 = cljs.core.seq_QMARK_.call(null,inst_35218__$1);
var state_35284__$1 = (function (){var statearr_35287 = state_35284;
(statearr_35287[(9)] = inst_35218__$1);

return statearr_35287;
})();
if(inst_35219){
var statearr_35288_35333 = state_35284__$1;
(statearr_35288_35333[(1)] = (2));

} else {
var statearr_35289_35334 = state_35284__$1;
(statearr_35289_35334[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (24))){
var inst_35236 = (state_35284[(10)]);
var inst_35228 = inst_35236;
var state_35284__$1 = (function (){var statearr_35290 = state_35284;
(statearr_35290[(7)] = inst_35228);

return statearr_35290;
})();
var statearr_35291_35335 = state_35284__$1;
(statearr_35291_35335[(2)] = null);

(statearr_35291_35335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (4))){
var inst_35218 = (state_35284[(9)]);
var inst_35224 = (state_35284[(2)]);
var inst_35225 = cljs.core.get.call(null,inst_35224,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35226 = cljs.core.get.call(null,inst_35224,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35227 = cljs.core.get.call(null,inst_35224,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35228 = inst_35218;
var state_35284__$1 = (function (){var statearr_35292 = state_35284;
(statearr_35292[(11)] = inst_35227);

(statearr_35292[(12)] = inst_35225);

(statearr_35292[(13)] = inst_35226);

(statearr_35292[(7)] = inst_35228);

return statearr_35292;
})();
var statearr_35293_35336 = state_35284__$1;
(statearr_35293_35336[(2)] = null);

(statearr_35293_35336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (15))){
var state_35284__$1 = state_35284;
var statearr_35294_35337 = state_35284__$1;
(statearr_35294_35337[(2)] = null);

(statearr_35294_35337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (21))){
var inst_35236 = (state_35284[(10)]);
var inst_35228 = inst_35236;
var state_35284__$1 = (function (){var statearr_35295 = state_35284;
(statearr_35295[(7)] = inst_35228);

return statearr_35295;
})();
var statearr_35296_35338 = state_35284__$1;
(statearr_35296_35338[(2)] = null);

(statearr_35296_35338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (13))){
var inst_35280 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35297_35339 = state_35284__$1;
(statearr_35297_35339[(2)] = inst_35280);

(statearr_35297_35339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (22))){
var inst_35278 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35298_35340 = state_35284__$1;
(statearr_35298_35340[(2)] = inst_35278);

(statearr_35298_35340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (6))){
var inst_35282 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35284__$1,inst_35282);
} else {
if((state_val_35285 === (25))){
var state_35284__$1 = state_35284;
var statearr_35299_35341 = state_35284__$1;
(statearr_35299_35341[(2)] = null);

(statearr_35299_35341[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (17))){
var inst_35258 = (state_35284[(14)]);
var state_35284__$1 = state_35284;
var statearr_35300_35342 = state_35284__$1;
(statearr_35300_35342[(2)] = inst_35258);

(statearr_35300_35342[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (3))){
var inst_35218 = (state_35284[(9)]);
var state_35284__$1 = state_35284;
var statearr_35301_35343 = state_35284__$1;
(statearr_35301_35343[(2)] = inst_35218);

(statearr_35301_35343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (12))){
var inst_35239 = (state_35284[(15)]);
var inst_35258 = (state_35284[(14)]);
var inst_35244 = (state_35284[(16)]);
var inst_35258__$1 = inst_35239.call(null,inst_35244);
var state_35284__$1 = (function (){var statearr_35302 = state_35284;
(statearr_35302[(14)] = inst_35258__$1);

return statearr_35302;
})();
if(cljs.core.truth_(inst_35258__$1)){
var statearr_35303_35344 = state_35284__$1;
(statearr_35303_35344[(1)] = (17));

} else {
var statearr_35304_35345 = state_35284__$1;
(statearr_35304_35345[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (2))){
var inst_35218 = (state_35284[(9)]);
var inst_35221 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35218);
var state_35284__$1 = state_35284;
var statearr_35305_35346 = state_35284__$1;
(statearr_35305_35346[(2)] = inst_35221);

(statearr_35305_35346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (23))){
var inst_35269 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35269)){
var statearr_35306_35347 = state_35284__$1;
(statearr_35306_35347[(1)] = (24));

} else {
var statearr_35307_35348 = state_35284__$1;
(statearr_35307_35348[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (19))){
var inst_35266 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35266)){
var statearr_35308_35349 = state_35284__$1;
(statearr_35308_35349[(1)] = (20));

} else {
var statearr_35309_35350 = state_35284__$1;
(statearr_35309_35350[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (11))){
var inst_35243 = (state_35284[(8)]);
var inst_35249 = (inst_35243 == null);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35249)){
var statearr_35310_35351 = state_35284__$1;
(statearr_35310_35351[(1)] = (14));

} else {
var statearr_35311_35352 = state_35284__$1;
(statearr_35311_35352[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (9))){
var inst_35236 = (state_35284[(10)]);
var inst_35236__$1 = (state_35284[(2)]);
var inst_35237 = cljs.core.get.call(null,inst_35236__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35238 = cljs.core.get.call(null,inst_35236__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35239 = cljs.core.get.call(null,inst_35236__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_35284__$1 = (function (){var statearr_35312 = state_35284;
(statearr_35312[(15)] = inst_35239);

(statearr_35312[(17)] = inst_35238);

(statearr_35312[(10)] = inst_35236__$1);

return statearr_35312;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35284__$1,(10),inst_35237);
} else {
if((state_val_35285 === (5))){
var inst_35228 = (state_35284[(7)]);
var inst_35231 = cljs.core.seq_QMARK_.call(null,inst_35228);
var state_35284__$1 = state_35284;
if(inst_35231){
var statearr_35313_35353 = state_35284__$1;
(statearr_35313_35353[(1)] = (7));

} else {
var statearr_35314_35354 = state_35284__$1;
(statearr_35314_35354[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (14))){
var inst_35244 = (state_35284[(16)]);
var inst_35251 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35244);
var state_35284__$1 = state_35284;
var statearr_35315_35355 = state_35284__$1;
(statearr_35315_35355[(2)] = inst_35251);

(statearr_35315_35355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (26))){
var inst_35274 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35316_35356 = state_35284__$1;
(statearr_35316_35356[(2)] = inst_35274);

(statearr_35316_35356[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (16))){
var inst_35254 = (state_35284[(2)]);
var inst_35255 = calc_state.call(null);
var inst_35228 = inst_35255;
var state_35284__$1 = (function (){var statearr_35317 = state_35284;
(statearr_35317[(18)] = inst_35254);

(statearr_35317[(7)] = inst_35228);

return statearr_35317;
})();
var statearr_35318_35357 = state_35284__$1;
(statearr_35318_35357[(2)] = null);

(statearr_35318_35357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (10))){
var inst_35243 = (state_35284[(8)]);
var inst_35244 = (state_35284[(16)]);
var inst_35242 = (state_35284[(2)]);
var inst_35243__$1 = cljs.core.nth.call(null,inst_35242,(0),null);
var inst_35244__$1 = cljs.core.nth.call(null,inst_35242,(1),null);
var inst_35245 = (inst_35243__$1 == null);
var inst_35246 = cljs.core._EQ_.call(null,inst_35244__$1,change);
var inst_35247 = (inst_35245) || (inst_35246);
var state_35284__$1 = (function (){var statearr_35319 = state_35284;
(statearr_35319[(8)] = inst_35243__$1);

(statearr_35319[(16)] = inst_35244__$1);

return statearr_35319;
})();
if(cljs.core.truth_(inst_35247)){
var statearr_35320_35358 = state_35284__$1;
(statearr_35320_35358[(1)] = (11));

} else {
var statearr_35321_35359 = state_35284__$1;
(statearr_35321_35359[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (18))){
var inst_35239 = (state_35284[(15)]);
var inst_35238 = (state_35284[(17)]);
var inst_35244 = (state_35284[(16)]);
var inst_35261 = cljs.core.empty_QMARK_.call(null,inst_35239);
var inst_35262 = inst_35238.call(null,inst_35244);
var inst_35263 = cljs.core.not.call(null,inst_35262);
var inst_35264 = (inst_35261) && (inst_35263);
var state_35284__$1 = state_35284;
var statearr_35322_35360 = state_35284__$1;
(statearr_35322_35360[(2)] = inst_35264);

(statearr_35322_35360[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (8))){
var inst_35228 = (state_35284[(7)]);
var state_35284__$1 = state_35284;
var statearr_35323_35361 = state_35284__$1;
(statearr_35323_35361[(2)] = inst_35228);

(statearr_35323_35361[(1)] = (9));


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
});})(c__20396__auto___35331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20381__auto__,c__20396__auto___35331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_35327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35327[(0)] = state_machine__20382__auto__);

(statearr_35327[(1)] = (1));

return statearr_35327;
});
var state_machine__20382__auto____1 = (function (state_35284){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_35284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e35328){if((e35328 instanceof Object)){
var ex__20385__auto__ = e35328;
var statearr_35329_35362 = state_35284;
(statearr_35329_35362[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35363 = state_35284;
state_35284 = G__35363;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_35284){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_35284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___35331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20398__auto__ = (function (){var statearr_35330 = f__20397__auto__.call(null);
(statearr_35330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___35331);

return statearr_35330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___35331,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj35365 = {};
return obj35365;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__14432__auto__ = p;
if(and__14432__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__14432__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15088__auto__ = (((p == null))?null:p);
return (function (){var or__14444__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__14432__auto__ = p;
if(and__14432__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__14432__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15088__auto__ = (((p == null))?null:p);
return (function (){var or__14444__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
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
if((function (){var and__14432__auto__ = p;
if(and__14432__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__14432__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15088__auto__ = (((p == null))?null:p);
return (function (){var or__14444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__14432__auto__ = p;
if(and__14432__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__14432__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15088__auto__ = (((p == null))?null:p);
return (function (){var or__14444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15088__auto__)]);
if(or__14444__auto__){
return or__14444__auto__;
} else {
var or__14444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__14444__auto____$1){
return or__14444__auto____$1;
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
var or__14444__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14444__auto__,mults){
return (function (p1__35366_SHARP_){
if(cljs.core.truth_(p1__35366_SHARP_.call(null,topic))){
return p1__35366_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35366_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14444__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t35489 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35489 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35490){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35490 = meta35490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35489.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t35489.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t35489.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t35489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t35489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t35489.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t35489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t35489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35491){
var self__ = this;
var _35491__$1 = this;
return self__.meta35490;
});})(mults,ensure_mult))
;

cljs.core.async.t35489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35491,meta35490__$1){
var self__ = this;
var _35491__$1 = this;
return (new cljs.core.async.t35489(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35490__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t35489.cljs$lang$type = true;

cljs.core.async.t35489.cljs$lang$ctorStr = "cljs.core.async/t35489";

cljs.core.async.t35489.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t35489");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t35489 = ((function (mults,ensure_mult){
return (function __GT_t35489(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35490){
return (new cljs.core.async.t35489(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35490));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t35489(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20396__auto___35611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___35611,mults,ensure_mult,p){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___35611,mults,ensure_mult,p){
return (function (state_35563){
var state_val_35564 = (state_35563[(1)]);
if((state_val_35564 === (7))){
var inst_35559 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35565_35612 = state_35563__$1;
(statearr_35565_35612[(2)] = inst_35559);

(statearr_35565_35612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (20))){
var state_35563__$1 = state_35563;
var statearr_35566_35613 = state_35563__$1;
(statearr_35566_35613[(2)] = null);

(statearr_35566_35613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (1))){
var state_35563__$1 = state_35563;
var statearr_35567_35614 = state_35563__$1;
(statearr_35567_35614[(2)] = null);

(statearr_35567_35614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (24))){
var inst_35542 = (state_35563[(7)]);
var inst_35551 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35542);
var state_35563__$1 = state_35563;
var statearr_35568_35615 = state_35563__$1;
(statearr_35568_35615[(2)] = inst_35551);

(statearr_35568_35615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (4))){
var inst_35494 = (state_35563[(8)]);
var inst_35494__$1 = (state_35563[(2)]);
var inst_35495 = (inst_35494__$1 == null);
var state_35563__$1 = (function (){var statearr_35569 = state_35563;
(statearr_35569[(8)] = inst_35494__$1);

return statearr_35569;
})();
if(cljs.core.truth_(inst_35495)){
var statearr_35570_35616 = state_35563__$1;
(statearr_35570_35616[(1)] = (5));

} else {
var statearr_35571_35617 = state_35563__$1;
(statearr_35571_35617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (15))){
var inst_35536 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35572_35618 = state_35563__$1;
(statearr_35572_35618[(2)] = inst_35536);

(statearr_35572_35618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (21))){
var inst_35556 = (state_35563[(2)]);
var state_35563__$1 = (function (){var statearr_35573 = state_35563;
(statearr_35573[(9)] = inst_35556);

return statearr_35573;
})();
var statearr_35574_35619 = state_35563__$1;
(statearr_35574_35619[(2)] = null);

(statearr_35574_35619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (13))){
var inst_35518 = (state_35563[(10)]);
var inst_35520 = cljs.core.chunked_seq_QMARK_.call(null,inst_35518);
var state_35563__$1 = state_35563;
if(inst_35520){
var statearr_35575_35620 = state_35563__$1;
(statearr_35575_35620[(1)] = (16));

} else {
var statearr_35576_35621 = state_35563__$1;
(statearr_35576_35621[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (22))){
var inst_35548 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
if(cljs.core.truth_(inst_35548)){
var statearr_35577_35622 = state_35563__$1;
(statearr_35577_35622[(1)] = (23));

} else {
var statearr_35578_35623 = state_35563__$1;
(statearr_35578_35623[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (6))){
var inst_35542 = (state_35563[(7)]);
var inst_35544 = (state_35563[(11)]);
var inst_35494 = (state_35563[(8)]);
var inst_35542__$1 = topic_fn.call(null,inst_35494);
var inst_35543 = cljs.core.deref.call(null,mults);
var inst_35544__$1 = cljs.core.get.call(null,inst_35543,inst_35542__$1);
var state_35563__$1 = (function (){var statearr_35579 = state_35563;
(statearr_35579[(7)] = inst_35542__$1);

(statearr_35579[(11)] = inst_35544__$1);

return statearr_35579;
})();
if(cljs.core.truth_(inst_35544__$1)){
var statearr_35580_35624 = state_35563__$1;
(statearr_35580_35624[(1)] = (19));

} else {
var statearr_35581_35625 = state_35563__$1;
(statearr_35581_35625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (25))){
var inst_35553 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35582_35626 = state_35563__$1;
(statearr_35582_35626[(2)] = inst_35553);

(statearr_35582_35626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (17))){
var inst_35518 = (state_35563[(10)]);
var inst_35527 = cljs.core.first.call(null,inst_35518);
var inst_35528 = cljs.core.async.muxch_STAR_.call(null,inst_35527);
var inst_35529 = cljs.core.async.close_BANG_.call(null,inst_35528);
var inst_35530 = cljs.core.next.call(null,inst_35518);
var inst_35504 = inst_35530;
var inst_35505 = null;
var inst_35506 = (0);
var inst_35507 = (0);
var state_35563__$1 = (function (){var statearr_35583 = state_35563;
(statearr_35583[(12)] = inst_35507);

(statearr_35583[(13)] = inst_35506);

(statearr_35583[(14)] = inst_35504);

(statearr_35583[(15)] = inst_35529);

(statearr_35583[(16)] = inst_35505);

return statearr_35583;
})();
var statearr_35584_35627 = state_35563__$1;
(statearr_35584_35627[(2)] = null);

(statearr_35584_35627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (3))){
var inst_35561 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35563__$1,inst_35561);
} else {
if((state_val_35564 === (12))){
var inst_35538 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35585_35628 = state_35563__$1;
(statearr_35585_35628[(2)] = inst_35538);

(statearr_35585_35628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (2))){
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35563__$1,(4),ch);
} else {
if((state_val_35564 === (23))){
var state_35563__$1 = state_35563;
var statearr_35586_35629 = state_35563__$1;
(statearr_35586_35629[(2)] = null);

(statearr_35586_35629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (19))){
var inst_35544 = (state_35563[(11)]);
var inst_35494 = (state_35563[(8)]);
var inst_35546 = cljs.core.async.muxch_STAR_.call(null,inst_35544);
var state_35563__$1 = state_35563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35563__$1,(22),inst_35546,inst_35494);
} else {
if((state_val_35564 === (11))){
var inst_35504 = (state_35563[(14)]);
var inst_35518 = (state_35563[(10)]);
var inst_35518__$1 = cljs.core.seq.call(null,inst_35504);
var state_35563__$1 = (function (){var statearr_35587 = state_35563;
(statearr_35587[(10)] = inst_35518__$1);

return statearr_35587;
})();
if(inst_35518__$1){
var statearr_35588_35630 = state_35563__$1;
(statearr_35588_35630[(1)] = (13));

} else {
var statearr_35589_35631 = state_35563__$1;
(statearr_35589_35631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (9))){
var inst_35540 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35590_35632 = state_35563__$1;
(statearr_35590_35632[(2)] = inst_35540);

(statearr_35590_35632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (5))){
var inst_35501 = cljs.core.deref.call(null,mults);
var inst_35502 = cljs.core.vals.call(null,inst_35501);
var inst_35503 = cljs.core.seq.call(null,inst_35502);
var inst_35504 = inst_35503;
var inst_35505 = null;
var inst_35506 = (0);
var inst_35507 = (0);
var state_35563__$1 = (function (){var statearr_35591 = state_35563;
(statearr_35591[(12)] = inst_35507);

(statearr_35591[(13)] = inst_35506);

(statearr_35591[(14)] = inst_35504);

(statearr_35591[(16)] = inst_35505);

return statearr_35591;
})();
var statearr_35592_35633 = state_35563__$1;
(statearr_35592_35633[(2)] = null);

(statearr_35592_35633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (14))){
var state_35563__$1 = state_35563;
var statearr_35596_35634 = state_35563__$1;
(statearr_35596_35634[(2)] = null);

(statearr_35596_35634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (16))){
var inst_35518 = (state_35563[(10)]);
var inst_35522 = cljs.core.chunk_first.call(null,inst_35518);
var inst_35523 = cljs.core.chunk_rest.call(null,inst_35518);
var inst_35524 = cljs.core.count.call(null,inst_35522);
var inst_35504 = inst_35523;
var inst_35505 = inst_35522;
var inst_35506 = inst_35524;
var inst_35507 = (0);
var state_35563__$1 = (function (){var statearr_35597 = state_35563;
(statearr_35597[(12)] = inst_35507);

(statearr_35597[(13)] = inst_35506);

(statearr_35597[(14)] = inst_35504);

(statearr_35597[(16)] = inst_35505);

return statearr_35597;
})();
var statearr_35598_35635 = state_35563__$1;
(statearr_35598_35635[(2)] = null);

(statearr_35598_35635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (10))){
var inst_35507 = (state_35563[(12)]);
var inst_35506 = (state_35563[(13)]);
var inst_35504 = (state_35563[(14)]);
var inst_35505 = (state_35563[(16)]);
var inst_35512 = cljs.core._nth.call(null,inst_35505,inst_35507);
var inst_35513 = cljs.core.async.muxch_STAR_.call(null,inst_35512);
var inst_35514 = cljs.core.async.close_BANG_.call(null,inst_35513);
var inst_35515 = (inst_35507 + (1));
var tmp35593 = inst_35506;
var tmp35594 = inst_35504;
var tmp35595 = inst_35505;
var inst_35504__$1 = tmp35594;
var inst_35505__$1 = tmp35595;
var inst_35506__$1 = tmp35593;
var inst_35507__$1 = inst_35515;
var state_35563__$1 = (function (){var statearr_35599 = state_35563;
(statearr_35599[(17)] = inst_35514);

(statearr_35599[(12)] = inst_35507__$1);

(statearr_35599[(13)] = inst_35506__$1);

(statearr_35599[(14)] = inst_35504__$1);

(statearr_35599[(16)] = inst_35505__$1);

return statearr_35599;
})();
var statearr_35600_35636 = state_35563__$1;
(statearr_35600_35636[(2)] = null);

(statearr_35600_35636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (18))){
var inst_35533 = (state_35563[(2)]);
var state_35563__$1 = state_35563;
var statearr_35601_35637 = state_35563__$1;
(statearr_35601_35637[(2)] = inst_35533);

(statearr_35601_35637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35564 === (8))){
var inst_35507 = (state_35563[(12)]);
var inst_35506 = (state_35563[(13)]);
var inst_35509 = (inst_35507 < inst_35506);
var inst_35510 = inst_35509;
var state_35563__$1 = state_35563;
if(cljs.core.truth_(inst_35510)){
var statearr_35602_35638 = state_35563__$1;
(statearr_35602_35638[(1)] = (10));

} else {
var statearr_35603_35639 = state_35563__$1;
(statearr_35603_35639[(1)] = (11));

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
});})(c__20396__auto___35611,mults,ensure_mult,p))
;
return ((function (switch__20381__auto__,c__20396__auto___35611,mults,ensure_mult,p){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_35607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35607[(0)] = state_machine__20382__auto__);

(statearr_35607[(1)] = (1));

return statearr_35607;
});
var state_machine__20382__auto____1 = (function (state_35563){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_35563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e35608){if((e35608 instanceof Object)){
var ex__20385__auto__ = e35608;
var statearr_35609_35640 = state_35563;
(statearr_35609_35640[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35641 = state_35563;
state_35563 = G__35641;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_35563){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_35563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___35611,mults,ensure_mult,p))
})();
var state__20398__auto__ = (function (){var statearr_35610 = f__20397__auto__.call(null);
(statearr_35610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___35611);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___35611,mults,ensure_mult,p))
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
var c__20396__auto___35778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___35778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___35778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35748){
var state_val_35749 = (state_35748[(1)]);
if((state_val_35749 === (7))){
var state_35748__$1 = state_35748;
var statearr_35750_35779 = state_35748__$1;
(statearr_35750_35779[(2)] = null);

(statearr_35750_35779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (1))){
var state_35748__$1 = state_35748;
var statearr_35751_35780 = state_35748__$1;
(statearr_35751_35780[(2)] = null);

(statearr_35751_35780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (4))){
var inst_35712 = (state_35748[(7)]);
var inst_35714 = (inst_35712 < cnt);
var state_35748__$1 = state_35748;
if(cljs.core.truth_(inst_35714)){
var statearr_35752_35781 = state_35748__$1;
(statearr_35752_35781[(1)] = (6));

} else {
var statearr_35753_35782 = state_35748__$1;
(statearr_35753_35782[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (15))){
var inst_35744 = (state_35748[(2)]);
var state_35748__$1 = state_35748;
var statearr_35754_35783 = state_35748__$1;
(statearr_35754_35783[(2)] = inst_35744);

(statearr_35754_35783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (13))){
var inst_35737 = cljs.core.async.close_BANG_.call(null,out);
var state_35748__$1 = state_35748;
var statearr_35755_35784 = state_35748__$1;
(statearr_35755_35784[(2)] = inst_35737);

(statearr_35755_35784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (6))){
var state_35748__$1 = state_35748;
var statearr_35756_35785 = state_35748__$1;
(statearr_35756_35785[(2)] = null);

(statearr_35756_35785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (3))){
var inst_35746 = (state_35748[(2)]);
var state_35748__$1 = state_35748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35748__$1,inst_35746);
} else {
if((state_val_35749 === (12))){
var inst_35734 = (state_35748[(8)]);
var inst_35734__$1 = (state_35748[(2)]);
var inst_35735 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35734__$1);
var state_35748__$1 = (function (){var statearr_35757 = state_35748;
(statearr_35757[(8)] = inst_35734__$1);

return statearr_35757;
})();
if(cljs.core.truth_(inst_35735)){
var statearr_35758_35786 = state_35748__$1;
(statearr_35758_35786[(1)] = (13));

} else {
var statearr_35759_35787 = state_35748__$1;
(statearr_35759_35787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (2))){
var inst_35711 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35712 = (0);
var state_35748__$1 = (function (){var statearr_35760 = state_35748;
(statearr_35760[(9)] = inst_35711);

(statearr_35760[(7)] = inst_35712);

return statearr_35760;
})();
var statearr_35761_35788 = state_35748__$1;
(statearr_35761_35788[(2)] = null);

(statearr_35761_35788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (11))){
var inst_35712 = (state_35748[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35748,(10),Object,null,(9));
var inst_35721 = chs__$1.call(null,inst_35712);
var inst_35722 = done.call(null,inst_35712);
var inst_35723 = cljs.core.async.take_BANG_.call(null,inst_35721,inst_35722);
var state_35748__$1 = state_35748;
var statearr_35762_35789 = state_35748__$1;
(statearr_35762_35789[(2)] = inst_35723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (9))){
var inst_35712 = (state_35748[(7)]);
var inst_35725 = (state_35748[(2)]);
var inst_35726 = (inst_35712 + (1));
var inst_35712__$1 = inst_35726;
var state_35748__$1 = (function (){var statearr_35763 = state_35748;
(statearr_35763[(10)] = inst_35725);

(statearr_35763[(7)] = inst_35712__$1);

return statearr_35763;
})();
var statearr_35764_35790 = state_35748__$1;
(statearr_35764_35790[(2)] = null);

(statearr_35764_35790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (5))){
var inst_35732 = (state_35748[(2)]);
var state_35748__$1 = (function (){var statearr_35765 = state_35748;
(statearr_35765[(11)] = inst_35732);

return statearr_35765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35748__$1,(12),dchan);
} else {
if((state_val_35749 === (14))){
var inst_35734 = (state_35748[(8)]);
var inst_35739 = cljs.core.apply.call(null,f,inst_35734);
var state_35748__$1 = state_35748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35748__$1,(16),out,inst_35739);
} else {
if((state_val_35749 === (16))){
var inst_35741 = (state_35748[(2)]);
var state_35748__$1 = (function (){var statearr_35766 = state_35748;
(statearr_35766[(12)] = inst_35741);

return statearr_35766;
})();
var statearr_35767_35791 = state_35748__$1;
(statearr_35767_35791[(2)] = null);

(statearr_35767_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (10))){
var inst_35716 = (state_35748[(2)]);
var inst_35717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35748__$1 = (function (){var statearr_35768 = state_35748;
(statearr_35768[(13)] = inst_35716);

return statearr_35768;
})();
var statearr_35769_35792 = state_35748__$1;
(statearr_35769_35792[(2)] = inst_35717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35749 === (8))){
var inst_35730 = (state_35748[(2)]);
var state_35748__$1 = state_35748;
var statearr_35770_35793 = state_35748__$1;
(statearr_35770_35793[(2)] = inst_35730);

(statearr_35770_35793[(1)] = (5));


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
});})(c__20396__auto___35778,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20381__auto__,c__20396__auto___35778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_35774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35774[(0)] = state_machine__20382__auto__);

(statearr_35774[(1)] = (1));

return statearr_35774;
});
var state_machine__20382__auto____1 = (function (state_35748){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_35748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e35775){if((e35775 instanceof Object)){
var ex__20385__auto__ = e35775;
var statearr_35776_35794 = state_35748;
(statearr_35776_35794[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35795 = state_35748;
state_35748 = G__35795;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_35748){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_35748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___35778,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20398__auto__ = (function (){var statearr_35777 = f__20397__auto__.call(null);
(statearr_35777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___35778);

return statearr_35777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___35778,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__20396__auto___35903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___35903,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___35903,out){
return (function (state_35879){
var state_val_35880 = (state_35879[(1)]);
if((state_val_35880 === (7))){
var inst_35858 = (state_35879[(7)]);
var inst_35859 = (state_35879[(8)]);
var inst_35858__$1 = (state_35879[(2)]);
var inst_35859__$1 = cljs.core.nth.call(null,inst_35858__$1,(0),null);
var inst_35860 = cljs.core.nth.call(null,inst_35858__$1,(1),null);
var inst_35861 = (inst_35859__$1 == null);
var state_35879__$1 = (function (){var statearr_35881 = state_35879;
(statearr_35881[(9)] = inst_35860);

(statearr_35881[(7)] = inst_35858__$1);

(statearr_35881[(8)] = inst_35859__$1);

return statearr_35881;
})();
if(cljs.core.truth_(inst_35861)){
var statearr_35882_35904 = state_35879__$1;
(statearr_35882_35904[(1)] = (8));

} else {
var statearr_35883_35905 = state_35879__$1;
(statearr_35883_35905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (1))){
var inst_35850 = cljs.core.vec.call(null,chs);
var inst_35851 = inst_35850;
var state_35879__$1 = (function (){var statearr_35884 = state_35879;
(statearr_35884[(10)] = inst_35851);

return statearr_35884;
})();
var statearr_35885_35906 = state_35879__$1;
(statearr_35885_35906[(2)] = null);

(statearr_35885_35906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (4))){
var inst_35851 = (state_35879[(10)]);
var state_35879__$1 = state_35879;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35879__$1,(7),inst_35851);
} else {
if((state_val_35880 === (6))){
var inst_35875 = (state_35879[(2)]);
var state_35879__$1 = state_35879;
var statearr_35886_35907 = state_35879__$1;
(statearr_35886_35907[(2)] = inst_35875);

(statearr_35886_35907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (3))){
var inst_35877 = (state_35879[(2)]);
var state_35879__$1 = state_35879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35879__$1,inst_35877);
} else {
if((state_val_35880 === (2))){
var inst_35851 = (state_35879[(10)]);
var inst_35853 = cljs.core.count.call(null,inst_35851);
var inst_35854 = (inst_35853 > (0));
var state_35879__$1 = state_35879;
if(cljs.core.truth_(inst_35854)){
var statearr_35888_35908 = state_35879__$1;
(statearr_35888_35908[(1)] = (4));

} else {
var statearr_35889_35909 = state_35879__$1;
(statearr_35889_35909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (11))){
var inst_35851 = (state_35879[(10)]);
var inst_35868 = (state_35879[(2)]);
var tmp35887 = inst_35851;
var inst_35851__$1 = tmp35887;
var state_35879__$1 = (function (){var statearr_35890 = state_35879;
(statearr_35890[(10)] = inst_35851__$1);

(statearr_35890[(11)] = inst_35868);

return statearr_35890;
})();
var statearr_35891_35910 = state_35879__$1;
(statearr_35891_35910[(2)] = null);

(statearr_35891_35910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (9))){
var inst_35859 = (state_35879[(8)]);
var state_35879__$1 = state_35879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35879__$1,(11),out,inst_35859);
} else {
if((state_val_35880 === (5))){
var inst_35873 = cljs.core.async.close_BANG_.call(null,out);
var state_35879__$1 = state_35879;
var statearr_35892_35911 = state_35879__$1;
(statearr_35892_35911[(2)] = inst_35873);

(statearr_35892_35911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (10))){
var inst_35871 = (state_35879[(2)]);
var state_35879__$1 = state_35879;
var statearr_35893_35912 = state_35879__$1;
(statearr_35893_35912[(2)] = inst_35871);

(statearr_35893_35912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35880 === (8))){
var inst_35851 = (state_35879[(10)]);
var inst_35860 = (state_35879[(9)]);
var inst_35858 = (state_35879[(7)]);
var inst_35859 = (state_35879[(8)]);
var inst_35863 = (function (){var c = inst_35860;
var v = inst_35859;
var vec__35856 = inst_35858;
var cs = inst_35851;
return ((function (c,v,vec__35856,cs,inst_35851,inst_35860,inst_35858,inst_35859,state_val_35880,c__20396__auto___35903,out){
return (function (p1__35796_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35796_SHARP_);
});
;})(c,v,vec__35856,cs,inst_35851,inst_35860,inst_35858,inst_35859,state_val_35880,c__20396__auto___35903,out))
})();
var inst_35864 = cljs.core.filterv.call(null,inst_35863,inst_35851);
var inst_35851__$1 = inst_35864;
var state_35879__$1 = (function (){var statearr_35894 = state_35879;
(statearr_35894[(10)] = inst_35851__$1);

return statearr_35894;
})();
var statearr_35895_35913 = state_35879__$1;
(statearr_35895_35913[(2)] = null);

(statearr_35895_35913[(1)] = (2));


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
});})(c__20396__auto___35903,out))
;
return ((function (switch__20381__auto__,c__20396__auto___35903,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_35899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35899[(0)] = state_machine__20382__auto__);

(statearr_35899[(1)] = (1));

return statearr_35899;
});
var state_machine__20382__auto____1 = (function (state_35879){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_35879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e35900){if((e35900 instanceof Object)){
var ex__20385__auto__ = e35900;
var statearr_35901_35914 = state_35879;
(statearr_35901_35914[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35915 = state_35879;
state_35879 = G__35915;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_35879){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_35879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___35903,out))
})();
var state__20398__auto__ = (function (){var statearr_35902 = f__20397__auto__.call(null);
(statearr_35902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___35903);

return statearr_35902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___35903,out))
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
var c__20396__auto___36008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___36008,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___36008,out){
return (function (state_35985){
var state_val_35986 = (state_35985[(1)]);
if((state_val_35986 === (7))){
var inst_35967 = (state_35985[(7)]);
var inst_35967__$1 = (state_35985[(2)]);
var inst_35968 = (inst_35967__$1 == null);
var inst_35969 = cljs.core.not.call(null,inst_35968);
var state_35985__$1 = (function (){var statearr_35987 = state_35985;
(statearr_35987[(7)] = inst_35967__$1);

return statearr_35987;
})();
if(inst_35969){
var statearr_35988_36009 = state_35985__$1;
(statearr_35988_36009[(1)] = (8));

} else {
var statearr_35989_36010 = state_35985__$1;
(statearr_35989_36010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (1))){
var inst_35962 = (0);
var state_35985__$1 = (function (){var statearr_35990 = state_35985;
(statearr_35990[(8)] = inst_35962);

return statearr_35990;
})();
var statearr_35991_36011 = state_35985__$1;
(statearr_35991_36011[(2)] = null);

(statearr_35991_36011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (4))){
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35985__$1,(7),ch);
} else {
if((state_val_35986 === (6))){
var inst_35980 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_35992_36012 = state_35985__$1;
(statearr_35992_36012[(2)] = inst_35980);

(statearr_35992_36012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (3))){
var inst_35982 = (state_35985[(2)]);
var inst_35983 = cljs.core.async.close_BANG_.call(null,out);
var state_35985__$1 = (function (){var statearr_35993 = state_35985;
(statearr_35993[(9)] = inst_35982);

return statearr_35993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35985__$1,inst_35983);
} else {
if((state_val_35986 === (2))){
var inst_35962 = (state_35985[(8)]);
var inst_35964 = (inst_35962 < n);
var state_35985__$1 = state_35985;
if(cljs.core.truth_(inst_35964)){
var statearr_35994_36013 = state_35985__$1;
(statearr_35994_36013[(1)] = (4));

} else {
var statearr_35995_36014 = state_35985__$1;
(statearr_35995_36014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (11))){
var inst_35962 = (state_35985[(8)]);
var inst_35972 = (state_35985[(2)]);
var inst_35973 = (inst_35962 + (1));
var inst_35962__$1 = inst_35973;
var state_35985__$1 = (function (){var statearr_35996 = state_35985;
(statearr_35996[(10)] = inst_35972);

(statearr_35996[(8)] = inst_35962__$1);

return statearr_35996;
})();
var statearr_35997_36015 = state_35985__$1;
(statearr_35997_36015[(2)] = null);

(statearr_35997_36015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (9))){
var state_35985__$1 = state_35985;
var statearr_35998_36016 = state_35985__$1;
(statearr_35998_36016[(2)] = null);

(statearr_35998_36016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (5))){
var state_35985__$1 = state_35985;
var statearr_35999_36017 = state_35985__$1;
(statearr_35999_36017[(2)] = null);

(statearr_35999_36017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (10))){
var inst_35977 = (state_35985[(2)]);
var state_35985__$1 = state_35985;
var statearr_36000_36018 = state_35985__$1;
(statearr_36000_36018[(2)] = inst_35977);

(statearr_36000_36018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35986 === (8))){
var inst_35967 = (state_35985[(7)]);
var state_35985__$1 = state_35985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35985__$1,(11),out,inst_35967);
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
});})(c__20396__auto___36008,out))
;
return ((function (switch__20381__auto__,c__20396__auto___36008,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_36004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36004[(0)] = state_machine__20382__auto__);

(statearr_36004[(1)] = (1));

return statearr_36004;
});
var state_machine__20382__auto____1 = (function (state_35985){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_35985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e36005){if((e36005 instanceof Object)){
var ex__20385__auto__ = e36005;
var statearr_36006_36019 = state_35985;
(statearr_36006_36019[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36020 = state_35985;
state_35985 = G__36020;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_35985){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_35985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___36008,out))
})();
var state__20398__auto__ = (function (){var statearr_36007 = f__20397__auto__.call(null);
(statearr_36007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___36008);

return statearr_36007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___36008,out))
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
if(typeof cljs.core.async.t36028 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36028 = (function (ch,f,map_LT_,meta36029){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta36029 = meta36029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t36031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36031 = (function (fn1,_,meta36029,map_LT_,f,ch,meta36032){
this.fn1 = fn1;
this._ = _;
this.meta36029 = meta36029;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36032 = meta36032;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36031.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t36031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36021_SHARP_){
return f1.call(null,(((p1__36021_SHARP_ == null))?null:self__.f.call(null,p1__36021_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t36031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36033){
var self__ = this;
var _36033__$1 = this;
return self__.meta36032;
});})(___$1))
;

cljs.core.async.t36031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36033,meta36032__$1){
var self__ = this;
var _36033__$1 = this;
return (new cljs.core.async.t36031(self__.fn1,self__._,self__.meta36029,self__.map_LT_,self__.f,self__.ch,meta36032__$1));
});})(___$1))
;

cljs.core.async.t36031.cljs$lang$type = true;

cljs.core.async.t36031.cljs$lang$ctorStr = "cljs.core.async/t36031";

cljs.core.async.t36031.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36031");
});})(___$1))
;

cljs.core.async.__GT_t36031 = ((function (___$1){
return (function __GT_t36031(fn1__$1,___$2,meta36029__$1,map_LT___$1,f__$1,ch__$1,meta36032){
return (new cljs.core.async.t36031(fn1__$1,___$2,meta36029__$1,map_LT___$1,f__$1,ch__$1,meta36032));
});})(___$1))
;

}

return (new cljs.core.async.t36031(fn1,___$1,self__.meta36029,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14432__auto__ = ret;
if(cljs.core.truth_(and__14432__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__14432__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36028.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t36028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36030){
var self__ = this;
var _36030__$1 = this;
return self__.meta36029;
});

cljs.core.async.t36028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36030,meta36029__$1){
var self__ = this;
var _36030__$1 = this;
return (new cljs.core.async.t36028(self__.ch,self__.f,self__.map_LT_,meta36029__$1));
});

cljs.core.async.t36028.cljs$lang$type = true;

cljs.core.async.t36028.cljs$lang$ctorStr = "cljs.core.async/t36028";

cljs.core.async.t36028.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36028");
});

cljs.core.async.__GT_t36028 = (function __GT_t36028(ch__$1,f__$1,map_LT___$1,meta36029){
return (new cljs.core.async.t36028(ch__$1,f__$1,map_LT___$1,meta36029));
});

}

return (new cljs.core.async.t36028(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t36037 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36037 = (function (ch,f,map_GT_,meta36038){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta36038 = meta36038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36037.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36037.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t36037.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36037.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t36037.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36037.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36039){
var self__ = this;
var _36039__$1 = this;
return self__.meta36038;
});

cljs.core.async.t36037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36039,meta36038__$1){
var self__ = this;
var _36039__$1 = this;
return (new cljs.core.async.t36037(self__.ch,self__.f,self__.map_GT_,meta36038__$1));
});

cljs.core.async.t36037.cljs$lang$type = true;

cljs.core.async.t36037.cljs$lang$ctorStr = "cljs.core.async/t36037";

cljs.core.async.t36037.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36037");
});

cljs.core.async.__GT_t36037 = (function __GT_t36037(ch__$1,f__$1,map_GT___$1,meta36038){
return (new cljs.core.async.t36037(ch__$1,f__$1,map_GT___$1,meta36038));
});

}

return (new cljs.core.async.t36037(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t36043 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36043 = (function (ch,p,filter_GT_,meta36044){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta36044 = meta36044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t36043.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t36043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36045){
var self__ = this;
var _36045__$1 = this;
return self__.meta36044;
});

cljs.core.async.t36043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36045,meta36044__$1){
var self__ = this;
var _36045__$1 = this;
return (new cljs.core.async.t36043(self__.ch,self__.p,self__.filter_GT_,meta36044__$1));
});

cljs.core.async.t36043.cljs$lang$type = true;

cljs.core.async.t36043.cljs$lang$ctorStr = "cljs.core.async/t36043";

cljs.core.async.t36043.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36043");
});

cljs.core.async.__GT_t36043 = (function __GT_t36043(ch__$1,p__$1,filter_GT___$1,meta36044){
return (new cljs.core.async.t36043(ch__$1,p__$1,filter_GT___$1,meta36044));
});

}

return (new cljs.core.async.t36043(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20396__auto___36128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___36128,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___36128,out){
return (function (state_36107){
var state_val_36108 = (state_36107[(1)]);
if((state_val_36108 === (7))){
var inst_36103 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36109_36129 = state_36107__$1;
(statearr_36109_36129[(2)] = inst_36103);

(statearr_36109_36129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (1))){
var state_36107__$1 = state_36107;
var statearr_36110_36130 = state_36107__$1;
(statearr_36110_36130[(2)] = null);

(statearr_36110_36130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (4))){
var inst_36089 = (state_36107[(7)]);
var inst_36089__$1 = (state_36107[(2)]);
var inst_36090 = (inst_36089__$1 == null);
var state_36107__$1 = (function (){var statearr_36111 = state_36107;
(statearr_36111[(7)] = inst_36089__$1);

return statearr_36111;
})();
if(cljs.core.truth_(inst_36090)){
var statearr_36112_36131 = state_36107__$1;
(statearr_36112_36131[(1)] = (5));

} else {
var statearr_36113_36132 = state_36107__$1;
(statearr_36113_36132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (6))){
var inst_36089 = (state_36107[(7)]);
var inst_36094 = p.call(null,inst_36089);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36094)){
var statearr_36114_36133 = state_36107__$1;
(statearr_36114_36133[(1)] = (8));

} else {
var statearr_36115_36134 = state_36107__$1;
(statearr_36115_36134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (3))){
var inst_36105 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36107__$1,inst_36105);
} else {
if((state_val_36108 === (2))){
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(4),ch);
} else {
if((state_val_36108 === (11))){
var inst_36097 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36116_36135 = state_36107__$1;
(statearr_36116_36135[(2)] = inst_36097);

(statearr_36116_36135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (9))){
var state_36107__$1 = state_36107;
var statearr_36117_36136 = state_36107__$1;
(statearr_36117_36136[(2)] = null);

(statearr_36117_36136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (5))){
var inst_36092 = cljs.core.async.close_BANG_.call(null,out);
var state_36107__$1 = state_36107;
var statearr_36118_36137 = state_36107__$1;
(statearr_36118_36137[(2)] = inst_36092);

(statearr_36118_36137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (10))){
var inst_36100 = (state_36107[(2)]);
var state_36107__$1 = (function (){var statearr_36119 = state_36107;
(statearr_36119[(8)] = inst_36100);

return statearr_36119;
})();
var statearr_36120_36138 = state_36107__$1;
(statearr_36120_36138[(2)] = null);

(statearr_36120_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (8))){
var inst_36089 = (state_36107[(7)]);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36107__$1,(11),out,inst_36089);
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
});})(c__20396__auto___36128,out))
;
return ((function (switch__20381__auto__,c__20396__auto___36128,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_36124 = [null,null,null,null,null,null,null,null,null];
(statearr_36124[(0)] = state_machine__20382__auto__);

(statearr_36124[(1)] = (1));

return statearr_36124;
});
var state_machine__20382__auto____1 = (function (state_36107){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_36107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e36125){if((e36125 instanceof Object)){
var ex__20385__auto__ = e36125;
var statearr_36126_36139 = state_36107;
(statearr_36126_36139[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36140 = state_36107;
state_36107 = G__36140;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_36107){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_36107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___36128,out))
})();
var state__20398__auto__ = (function (){var statearr_36127 = f__20397__auto__.call(null);
(statearr_36127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___36128);

return statearr_36127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___36128,out))
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
var c__20396__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto__){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto__){
return (function (state_36306){
var state_val_36307 = (state_36306[(1)]);
if((state_val_36307 === (7))){
var inst_36302 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36308_36349 = state_36306__$1;
(statearr_36308_36349[(2)] = inst_36302);

(statearr_36308_36349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (20))){
var inst_36272 = (state_36306[(7)]);
var inst_36283 = (state_36306[(2)]);
var inst_36284 = cljs.core.next.call(null,inst_36272);
var inst_36258 = inst_36284;
var inst_36259 = null;
var inst_36260 = (0);
var inst_36261 = (0);
var state_36306__$1 = (function (){var statearr_36309 = state_36306;
(statearr_36309[(8)] = inst_36261);

(statearr_36309[(9)] = inst_36260);

(statearr_36309[(10)] = inst_36258);

(statearr_36309[(11)] = inst_36283);

(statearr_36309[(12)] = inst_36259);

return statearr_36309;
})();
var statearr_36310_36350 = state_36306__$1;
(statearr_36310_36350[(2)] = null);

(statearr_36310_36350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (1))){
var state_36306__$1 = state_36306;
var statearr_36311_36351 = state_36306__$1;
(statearr_36311_36351[(2)] = null);

(statearr_36311_36351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (4))){
var inst_36247 = (state_36306[(13)]);
var inst_36247__$1 = (state_36306[(2)]);
var inst_36248 = (inst_36247__$1 == null);
var state_36306__$1 = (function (){var statearr_36312 = state_36306;
(statearr_36312[(13)] = inst_36247__$1);

return statearr_36312;
})();
if(cljs.core.truth_(inst_36248)){
var statearr_36313_36352 = state_36306__$1;
(statearr_36313_36352[(1)] = (5));

} else {
var statearr_36314_36353 = state_36306__$1;
(statearr_36314_36353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (15))){
var state_36306__$1 = state_36306;
var statearr_36318_36354 = state_36306__$1;
(statearr_36318_36354[(2)] = null);

(statearr_36318_36354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (21))){
var state_36306__$1 = state_36306;
var statearr_36319_36355 = state_36306__$1;
(statearr_36319_36355[(2)] = null);

(statearr_36319_36355[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (13))){
var inst_36261 = (state_36306[(8)]);
var inst_36260 = (state_36306[(9)]);
var inst_36258 = (state_36306[(10)]);
var inst_36259 = (state_36306[(12)]);
var inst_36268 = (state_36306[(2)]);
var inst_36269 = (inst_36261 + (1));
var tmp36315 = inst_36260;
var tmp36316 = inst_36258;
var tmp36317 = inst_36259;
var inst_36258__$1 = tmp36316;
var inst_36259__$1 = tmp36317;
var inst_36260__$1 = tmp36315;
var inst_36261__$1 = inst_36269;
var state_36306__$1 = (function (){var statearr_36320 = state_36306;
(statearr_36320[(8)] = inst_36261__$1);

(statearr_36320[(14)] = inst_36268);

(statearr_36320[(9)] = inst_36260__$1);

(statearr_36320[(10)] = inst_36258__$1);

(statearr_36320[(12)] = inst_36259__$1);

return statearr_36320;
})();
var statearr_36321_36356 = state_36306__$1;
(statearr_36321_36356[(2)] = null);

(statearr_36321_36356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (22))){
var state_36306__$1 = state_36306;
var statearr_36322_36357 = state_36306__$1;
(statearr_36322_36357[(2)] = null);

(statearr_36322_36357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (6))){
var inst_36247 = (state_36306[(13)]);
var inst_36256 = f.call(null,inst_36247);
var inst_36257 = cljs.core.seq.call(null,inst_36256);
var inst_36258 = inst_36257;
var inst_36259 = null;
var inst_36260 = (0);
var inst_36261 = (0);
var state_36306__$1 = (function (){var statearr_36323 = state_36306;
(statearr_36323[(8)] = inst_36261);

(statearr_36323[(9)] = inst_36260);

(statearr_36323[(10)] = inst_36258);

(statearr_36323[(12)] = inst_36259);

return statearr_36323;
})();
var statearr_36324_36358 = state_36306__$1;
(statearr_36324_36358[(2)] = null);

(statearr_36324_36358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (17))){
var inst_36272 = (state_36306[(7)]);
var inst_36276 = cljs.core.chunk_first.call(null,inst_36272);
var inst_36277 = cljs.core.chunk_rest.call(null,inst_36272);
var inst_36278 = cljs.core.count.call(null,inst_36276);
var inst_36258 = inst_36277;
var inst_36259 = inst_36276;
var inst_36260 = inst_36278;
var inst_36261 = (0);
var state_36306__$1 = (function (){var statearr_36325 = state_36306;
(statearr_36325[(8)] = inst_36261);

(statearr_36325[(9)] = inst_36260);

(statearr_36325[(10)] = inst_36258);

(statearr_36325[(12)] = inst_36259);

return statearr_36325;
})();
var statearr_36326_36359 = state_36306__$1;
(statearr_36326_36359[(2)] = null);

(statearr_36326_36359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (3))){
var inst_36304 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36306__$1,inst_36304);
} else {
if((state_val_36307 === (12))){
var inst_36292 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36327_36360 = state_36306__$1;
(statearr_36327_36360[(2)] = inst_36292);

(statearr_36327_36360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (2))){
var state_36306__$1 = state_36306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36306__$1,(4),in$);
} else {
if((state_val_36307 === (23))){
var inst_36300 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36328_36361 = state_36306__$1;
(statearr_36328_36361[(2)] = inst_36300);

(statearr_36328_36361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (19))){
var inst_36287 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36329_36362 = state_36306__$1;
(statearr_36329_36362[(2)] = inst_36287);

(statearr_36329_36362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (11))){
var inst_36258 = (state_36306[(10)]);
var inst_36272 = (state_36306[(7)]);
var inst_36272__$1 = cljs.core.seq.call(null,inst_36258);
var state_36306__$1 = (function (){var statearr_36330 = state_36306;
(statearr_36330[(7)] = inst_36272__$1);

return statearr_36330;
})();
if(inst_36272__$1){
var statearr_36331_36363 = state_36306__$1;
(statearr_36331_36363[(1)] = (14));

} else {
var statearr_36332_36364 = state_36306__$1;
(statearr_36332_36364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (9))){
var inst_36294 = (state_36306[(2)]);
var inst_36295 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36306__$1 = (function (){var statearr_36333 = state_36306;
(statearr_36333[(15)] = inst_36294);

return statearr_36333;
})();
if(cljs.core.truth_(inst_36295)){
var statearr_36334_36365 = state_36306__$1;
(statearr_36334_36365[(1)] = (21));

} else {
var statearr_36335_36366 = state_36306__$1;
(statearr_36335_36366[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (5))){
var inst_36250 = cljs.core.async.close_BANG_.call(null,out);
var state_36306__$1 = state_36306;
var statearr_36336_36367 = state_36306__$1;
(statearr_36336_36367[(2)] = inst_36250);

(statearr_36336_36367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (14))){
var inst_36272 = (state_36306[(7)]);
var inst_36274 = cljs.core.chunked_seq_QMARK_.call(null,inst_36272);
var state_36306__$1 = state_36306;
if(inst_36274){
var statearr_36337_36368 = state_36306__$1;
(statearr_36337_36368[(1)] = (17));

} else {
var statearr_36338_36369 = state_36306__$1;
(statearr_36338_36369[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (16))){
var inst_36290 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36339_36370 = state_36306__$1;
(statearr_36339_36370[(2)] = inst_36290);

(statearr_36339_36370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (10))){
var inst_36261 = (state_36306[(8)]);
var inst_36259 = (state_36306[(12)]);
var inst_36266 = cljs.core._nth.call(null,inst_36259,inst_36261);
var state_36306__$1 = state_36306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36306__$1,(13),out,inst_36266);
} else {
if((state_val_36307 === (18))){
var inst_36272 = (state_36306[(7)]);
var inst_36281 = cljs.core.first.call(null,inst_36272);
var state_36306__$1 = state_36306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36306__$1,(20),out,inst_36281);
} else {
if((state_val_36307 === (8))){
var inst_36261 = (state_36306[(8)]);
var inst_36260 = (state_36306[(9)]);
var inst_36263 = (inst_36261 < inst_36260);
var inst_36264 = inst_36263;
var state_36306__$1 = state_36306;
if(cljs.core.truth_(inst_36264)){
var statearr_36340_36371 = state_36306__$1;
(statearr_36340_36371[(1)] = (10));

} else {
var statearr_36341_36372 = state_36306__$1;
(statearr_36341_36372[(1)] = (11));

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
});})(c__20396__auto__))
;
return ((function (switch__20381__auto__,c__20396__auto__){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_36345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36345[(0)] = state_machine__20382__auto__);

(statearr_36345[(1)] = (1));

return statearr_36345;
});
var state_machine__20382__auto____1 = (function (state_36306){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_36306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e36346){if((e36346 instanceof Object)){
var ex__20385__auto__ = e36346;
var statearr_36347_36373 = state_36306;
(statearr_36347_36373[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_36306;
state_36306 = G__36374;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_36306){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_36306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto__))
})();
var state__20398__auto__ = (function (){var statearr_36348 = f__20397__auto__.call(null);
(statearr_36348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto__);

return statearr_36348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto__))
);

return c__20396__auto__;
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
var c__20396__auto___36471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___36471,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___36471,out){
return (function (state_36446){
var state_val_36447 = (state_36446[(1)]);
if((state_val_36447 === (7))){
var inst_36441 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36448_36472 = state_36446__$1;
(statearr_36448_36472[(2)] = inst_36441);

(statearr_36448_36472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (1))){
var inst_36423 = null;
var state_36446__$1 = (function (){var statearr_36449 = state_36446;
(statearr_36449[(7)] = inst_36423);

return statearr_36449;
})();
var statearr_36450_36473 = state_36446__$1;
(statearr_36450_36473[(2)] = null);

(statearr_36450_36473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (4))){
var inst_36426 = (state_36446[(8)]);
var inst_36426__$1 = (state_36446[(2)]);
var inst_36427 = (inst_36426__$1 == null);
var inst_36428 = cljs.core.not.call(null,inst_36427);
var state_36446__$1 = (function (){var statearr_36451 = state_36446;
(statearr_36451[(8)] = inst_36426__$1);

return statearr_36451;
})();
if(inst_36428){
var statearr_36452_36474 = state_36446__$1;
(statearr_36452_36474[(1)] = (5));

} else {
var statearr_36453_36475 = state_36446__$1;
(statearr_36453_36475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (6))){
var state_36446__$1 = state_36446;
var statearr_36454_36476 = state_36446__$1;
(statearr_36454_36476[(2)] = null);

(statearr_36454_36476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (3))){
var inst_36443 = (state_36446[(2)]);
var inst_36444 = cljs.core.async.close_BANG_.call(null,out);
var state_36446__$1 = (function (){var statearr_36455 = state_36446;
(statearr_36455[(9)] = inst_36443);

return statearr_36455;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36446__$1,inst_36444);
} else {
if((state_val_36447 === (2))){
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36446__$1,(4),ch);
} else {
if((state_val_36447 === (11))){
var inst_36426 = (state_36446[(8)]);
var inst_36435 = (state_36446[(2)]);
var inst_36423 = inst_36426;
var state_36446__$1 = (function (){var statearr_36456 = state_36446;
(statearr_36456[(7)] = inst_36423);

(statearr_36456[(10)] = inst_36435);

return statearr_36456;
})();
var statearr_36457_36477 = state_36446__$1;
(statearr_36457_36477[(2)] = null);

(statearr_36457_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (9))){
var inst_36426 = (state_36446[(8)]);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36446__$1,(11),out,inst_36426);
} else {
if((state_val_36447 === (5))){
var inst_36426 = (state_36446[(8)]);
var inst_36423 = (state_36446[(7)]);
var inst_36430 = cljs.core._EQ_.call(null,inst_36426,inst_36423);
var state_36446__$1 = state_36446;
if(inst_36430){
var statearr_36459_36478 = state_36446__$1;
(statearr_36459_36478[(1)] = (8));

} else {
var statearr_36460_36479 = state_36446__$1;
(statearr_36460_36479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (10))){
var inst_36438 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36461_36480 = state_36446__$1;
(statearr_36461_36480[(2)] = inst_36438);

(statearr_36461_36480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (8))){
var inst_36423 = (state_36446[(7)]);
var tmp36458 = inst_36423;
var inst_36423__$1 = tmp36458;
var state_36446__$1 = (function (){var statearr_36462 = state_36446;
(statearr_36462[(7)] = inst_36423__$1);

return statearr_36462;
})();
var statearr_36463_36481 = state_36446__$1;
(statearr_36463_36481[(2)] = null);

(statearr_36463_36481[(1)] = (2));


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
});})(c__20396__auto___36471,out))
;
return ((function (switch__20381__auto__,c__20396__auto___36471,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_36467 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36467[(0)] = state_machine__20382__auto__);

(statearr_36467[(1)] = (1));

return statearr_36467;
});
var state_machine__20382__auto____1 = (function (state_36446){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_36446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e36468){if((e36468 instanceof Object)){
var ex__20385__auto__ = e36468;
var statearr_36469_36482 = state_36446;
(statearr_36469_36482[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36483 = state_36446;
state_36446 = G__36483;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_36446){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_36446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___36471,out))
})();
var state__20398__auto__ = (function (){var statearr_36470 = f__20397__auto__.call(null);
(statearr_36470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___36471);

return statearr_36470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___36471,out))
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
var c__20396__auto___36618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___36618,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___36618,out){
return (function (state_36588){
var state_val_36589 = (state_36588[(1)]);
if((state_val_36589 === (7))){
var inst_36584 = (state_36588[(2)]);
var state_36588__$1 = state_36588;
var statearr_36590_36619 = state_36588__$1;
(statearr_36590_36619[(2)] = inst_36584);

(statearr_36590_36619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (1))){
var inst_36551 = (new Array(n));
var inst_36552 = inst_36551;
var inst_36553 = (0);
var state_36588__$1 = (function (){var statearr_36591 = state_36588;
(statearr_36591[(7)] = inst_36552);

(statearr_36591[(8)] = inst_36553);

return statearr_36591;
})();
var statearr_36592_36620 = state_36588__$1;
(statearr_36592_36620[(2)] = null);

(statearr_36592_36620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (4))){
var inst_36556 = (state_36588[(9)]);
var inst_36556__$1 = (state_36588[(2)]);
var inst_36557 = (inst_36556__$1 == null);
var inst_36558 = cljs.core.not.call(null,inst_36557);
var state_36588__$1 = (function (){var statearr_36593 = state_36588;
(statearr_36593[(9)] = inst_36556__$1);

return statearr_36593;
})();
if(inst_36558){
var statearr_36594_36621 = state_36588__$1;
(statearr_36594_36621[(1)] = (5));

} else {
var statearr_36595_36622 = state_36588__$1;
(statearr_36595_36622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (15))){
var inst_36578 = (state_36588[(2)]);
var state_36588__$1 = state_36588;
var statearr_36596_36623 = state_36588__$1;
(statearr_36596_36623[(2)] = inst_36578);

(statearr_36596_36623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (13))){
var state_36588__$1 = state_36588;
var statearr_36597_36624 = state_36588__$1;
(statearr_36597_36624[(2)] = null);

(statearr_36597_36624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (6))){
var inst_36553 = (state_36588[(8)]);
var inst_36574 = (inst_36553 > (0));
var state_36588__$1 = state_36588;
if(cljs.core.truth_(inst_36574)){
var statearr_36598_36625 = state_36588__$1;
(statearr_36598_36625[(1)] = (12));

} else {
var statearr_36599_36626 = state_36588__$1;
(statearr_36599_36626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (3))){
var inst_36586 = (state_36588[(2)]);
var state_36588__$1 = state_36588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36588__$1,inst_36586);
} else {
if((state_val_36589 === (12))){
var inst_36552 = (state_36588[(7)]);
var inst_36576 = cljs.core.vec.call(null,inst_36552);
var state_36588__$1 = state_36588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36588__$1,(15),out,inst_36576);
} else {
if((state_val_36589 === (2))){
var state_36588__$1 = state_36588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36588__$1,(4),ch);
} else {
if((state_val_36589 === (11))){
var inst_36568 = (state_36588[(2)]);
var inst_36569 = (new Array(n));
var inst_36552 = inst_36569;
var inst_36553 = (0);
var state_36588__$1 = (function (){var statearr_36600 = state_36588;
(statearr_36600[(7)] = inst_36552);

(statearr_36600[(8)] = inst_36553);

(statearr_36600[(10)] = inst_36568);

return statearr_36600;
})();
var statearr_36601_36627 = state_36588__$1;
(statearr_36601_36627[(2)] = null);

(statearr_36601_36627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (9))){
var inst_36552 = (state_36588[(7)]);
var inst_36566 = cljs.core.vec.call(null,inst_36552);
var state_36588__$1 = state_36588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36588__$1,(11),out,inst_36566);
} else {
if((state_val_36589 === (5))){
var inst_36552 = (state_36588[(7)]);
var inst_36561 = (state_36588[(11)]);
var inst_36553 = (state_36588[(8)]);
var inst_36556 = (state_36588[(9)]);
var inst_36560 = (inst_36552[inst_36553] = inst_36556);
var inst_36561__$1 = (inst_36553 + (1));
var inst_36562 = (inst_36561__$1 < n);
var state_36588__$1 = (function (){var statearr_36602 = state_36588;
(statearr_36602[(11)] = inst_36561__$1);

(statearr_36602[(12)] = inst_36560);

return statearr_36602;
})();
if(cljs.core.truth_(inst_36562)){
var statearr_36603_36628 = state_36588__$1;
(statearr_36603_36628[(1)] = (8));

} else {
var statearr_36604_36629 = state_36588__$1;
(statearr_36604_36629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (14))){
var inst_36581 = (state_36588[(2)]);
var inst_36582 = cljs.core.async.close_BANG_.call(null,out);
var state_36588__$1 = (function (){var statearr_36606 = state_36588;
(statearr_36606[(13)] = inst_36581);

return statearr_36606;
})();
var statearr_36607_36630 = state_36588__$1;
(statearr_36607_36630[(2)] = inst_36582);

(statearr_36607_36630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (10))){
var inst_36572 = (state_36588[(2)]);
var state_36588__$1 = state_36588;
var statearr_36608_36631 = state_36588__$1;
(statearr_36608_36631[(2)] = inst_36572);

(statearr_36608_36631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36589 === (8))){
var inst_36552 = (state_36588[(7)]);
var inst_36561 = (state_36588[(11)]);
var tmp36605 = inst_36552;
var inst_36552__$1 = tmp36605;
var inst_36553 = inst_36561;
var state_36588__$1 = (function (){var statearr_36609 = state_36588;
(statearr_36609[(7)] = inst_36552__$1);

(statearr_36609[(8)] = inst_36553);

return statearr_36609;
})();
var statearr_36610_36632 = state_36588__$1;
(statearr_36610_36632[(2)] = null);

(statearr_36610_36632[(1)] = (2));


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
});})(c__20396__auto___36618,out))
;
return ((function (switch__20381__auto__,c__20396__auto___36618,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_36614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36614[(0)] = state_machine__20382__auto__);

(statearr_36614[(1)] = (1));

return statearr_36614;
});
var state_machine__20382__auto____1 = (function (state_36588){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_36588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e36615){if((e36615 instanceof Object)){
var ex__20385__auto__ = e36615;
var statearr_36616_36633 = state_36588;
(statearr_36616_36633[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36634 = state_36588;
state_36588 = G__36634;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_36588){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_36588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___36618,out))
})();
var state__20398__auto__ = (function (){var statearr_36617 = f__20397__auto__.call(null);
(statearr_36617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___36618);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___36618,out))
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
var c__20396__auto___36777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20396__auto___36777,out){
return (function (){
var f__20397__auto__ = (function (){var switch__20381__auto__ = ((function (c__20396__auto___36777,out){
return (function (state_36747){
var state_val_36748 = (state_36747[(1)]);
if((state_val_36748 === (7))){
var inst_36743 = (state_36747[(2)]);
var state_36747__$1 = state_36747;
var statearr_36749_36778 = state_36747__$1;
(statearr_36749_36778[(2)] = inst_36743);

(statearr_36749_36778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (1))){
var inst_36706 = [];
var inst_36707 = inst_36706;
var inst_36708 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36747__$1 = (function (){var statearr_36750 = state_36747;
(statearr_36750[(7)] = inst_36708);

(statearr_36750[(8)] = inst_36707);

return statearr_36750;
})();
var statearr_36751_36779 = state_36747__$1;
(statearr_36751_36779[(2)] = null);

(statearr_36751_36779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (4))){
var inst_36711 = (state_36747[(9)]);
var inst_36711__$1 = (state_36747[(2)]);
var inst_36712 = (inst_36711__$1 == null);
var inst_36713 = cljs.core.not.call(null,inst_36712);
var state_36747__$1 = (function (){var statearr_36752 = state_36747;
(statearr_36752[(9)] = inst_36711__$1);

return statearr_36752;
})();
if(inst_36713){
var statearr_36753_36780 = state_36747__$1;
(statearr_36753_36780[(1)] = (5));

} else {
var statearr_36754_36781 = state_36747__$1;
(statearr_36754_36781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (15))){
var inst_36737 = (state_36747[(2)]);
var state_36747__$1 = state_36747;
var statearr_36755_36782 = state_36747__$1;
(statearr_36755_36782[(2)] = inst_36737);

(statearr_36755_36782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (13))){
var state_36747__$1 = state_36747;
var statearr_36756_36783 = state_36747__$1;
(statearr_36756_36783[(2)] = null);

(statearr_36756_36783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (6))){
var inst_36707 = (state_36747[(8)]);
var inst_36732 = inst_36707.length;
var inst_36733 = (inst_36732 > (0));
var state_36747__$1 = state_36747;
if(cljs.core.truth_(inst_36733)){
var statearr_36757_36784 = state_36747__$1;
(statearr_36757_36784[(1)] = (12));

} else {
var statearr_36758_36785 = state_36747__$1;
(statearr_36758_36785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (3))){
var inst_36745 = (state_36747[(2)]);
var state_36747__$1 = state_36747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36747__$1,inst_36745);
} else {
if((state_val_36748 === (12))){
var inst_36707 = (state_36747[(8)]);
var inst_36735 = cljs.core.vec.call(null,inst_36707);
var state_36747__$1 = state_36747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36747__$1,(15),out,inst_36735);
} else {
if((state_val_36748 === (2))){
var state_36747__$1 = state_36747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36747__$1,(4),ch);
} else {
if((state_val_36748 === (11))){
var inst_36711 = (state_36747[(9)]);
var inst_36715 = (state_36747[(10)]);
var inst_36725 = (state_36747[(2)]);
var inst_36726 = [];
var inst_36727 = inst_36726.push(inst_36711);
var inst_36707 = inst_36726;
var inst_36708 = inst_36715;
var state_36747__$1 = (function (){var statearr_36759 = state_36747;
(statearr_36759[(11)] = inst_36727);

(statearr_36759[(12)] = inst_36725);

(statearr_36759[(7)] = inst_36708);

(statearr_36759[(8)] = inst_36707);

return statearr_36759;
})();
var statearr_36760_36786 = state_36747__$1;
(statearr_36760_36786[(2)] = null);

(statearr_36760_36786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (9))){
var inst_36707 = (state_36747[(8)]);
var inst_36723 = cljs.core.vec.call(null,inst_36707);
var state_36747__$1 = state_36747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36747__$1,(11),out,inst_36723);
} else {
if((state_val_36748 === (5))){
var inst_36708 = (state_36747[(7)]);
var inst_36711 = (state_36747[(9)]);
var inst_36715 = (state_36747[(10)]);
var inst_36715__$1 = f.call(null,inst_36711);
var inst_36716 = cljs.core._EQ_.call(null,inst_36715__$1,inst_36708);
var inst_36717 = cljs.core.keyword_identical_QMARK_.call(null,inst_36708,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36718 = (inst_36716) || (inst_36717);
var state_36747__$1 = (function (){var statearr_36761 = state_36747;
(statearr_36761[(10)] = inst_36715__$1);

return statearr_36761;
})();
if(cljs.core.truth_(inst_36718)){
var statearr_36762_36787 = state_36747__$1;
(statearr_36762_36787[(1)] = (8));

} else {
var statearr_36763_36788 = state_36747__$1;
(statearr_36763_36788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (14))){
var inst_36740 = (state_36747[(2)]);
var inst_36741 = cljs.core.async.close_BANG_.call(null,out);
var state_36747__$1 = (function (){var statearr_36765 = state_36747;
(statearr_36765[(13)] = inst_36740);

return statearr_36765;
})();
var statearr_36766_36789 = state_36747__$1;
(statearr_36766_36789[(2)] = inst_36741);

(statearr_36766_36789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (10))){
var inst_36730 = (state_36747[(2)]);
var state_36747__$1 = state_36747;
var statearr_36767_36790 = state_36747__$1;
(statearr_36767_36790[(2)] = inst_36730);

(statearr_36767_36790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36748 === (8))){
var inst_36707 = (state_36747[(8)]);
var inst_36711 = (state_36747[(9)]);
var inst_36715 = (state_36747[(10)]);
var inst_36720 = inst_36707.push(inst_36711);
var tmp36764 = inst_36707;
var inst_36707__$1 = tmp36764;
var inst_36708 = inst_36715;
var state_36747__$1 = (function (){var statearr_36768 = state_36747;
(statearr_36768[(14)] = inst_36720);

(statearr_36768[(7)] = inst_36708);

(statearr_36768[(8)] = inst_36707__$1);

return statearr_36768;
})();
var statearr_36769_36791 = state_36747__$1;
(statearr_36769_36791[(2)] = null);

(statearr_36769_36791[(1)] = (2));


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
});})(c__20396__auto___36777,out))
;
return ((function (switch__20381__auto__,c__20396__auto___36777,out){
return (function() {
var state_machine__20382__auto__ = null;
var state_machine__20382__auto____0 = (function (){
var statearr_36773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36773[(0)] = state_machine__20382__auto__);

(statearr_36773[(1)] = (1));

return statearr_36773;
});
var state_machine__20382__auto____1 = (function (state_36747){
while(true){
var ret_value__20383__auto__ = (function (){try{while(true){
var result__20384__auto__ = switch__20381__auto__.call(null,state_36747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20384__auto__;
}
break;
}
}catch (e36774){if((e36774 instanceof Object)){
var ex__20385__auto__ = e36774;
var statearr_36775_36792 = state_36747;
(statearr_36775_36792[(5)] = ex__20385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36793 = state_36747;
state_36747 = G__36793;
continue;
} else {
return ret_value__20383__auto__;
}
break;
}
});
state_machine__20382__auto__ = function(state_36747){
switch(arguments.length){
case 0:
return state_machine__20382__auto____0.call(this);
case 1:
return state_machine__20382__auto____1.call(this,state_36747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20382__auto____0;
state_machine__20382__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20382__auto____1;
return state_machine__20382__auto__;
})()
;})(switch__20381__auto__,c__20396__auto___36777,out))
})();
var state__20398__auto__ = (function (){var statearr_36776 = f__20397__auto__.call(null);
(statearr_36776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20396__auto___36777);

return statearr_36776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20398__auto__);
});})(c__20396__auto___36777,out))
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

//# sourceMappingURL=async.js.map