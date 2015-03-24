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
if(typeof cljs.core.async.t36709 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36709 = (function (f,fn_handler,meta36710){
this.f = f;
this.fn_handler = fn_handler;
this.meta36710 = meta36710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36709.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36711){
var self__ = this;
var _36711__$1 = this;
return self__.meta36710;
});

cljs.core.async.t36709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36711,meta36710__$1){
var self__ = this;
var _36711__$1 = this;
return (new cljs.core.async.t36709(self__.f,self__.fn_handler,meta36710__$1));
});

cljs.core.async.t36709.cljs$lang$type = true;

cljs.core.async.t36709.cljs$lang$ctorStr = "cljs.core.async/t36709";

cljs.core.async.t36709.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36709");
});

cljs.core.async.__GT_t36709 = (function __GT_t36709(f__$1,fn_handler__$1,meta36710){
return (new cljs.core.async.t36709(f__$1,fn_handler__$1,meta36710));
});

}

return (new cljs.core.async.t36709(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36713 = buff;
if(G__36713){
var bit__15125__auto__ = null;
if(cljs.core.truth_((function (){var or__14444__auto__ = bit__15125__auto__;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return G__36713.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36713.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36713);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36713);
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
var val_36714 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36714);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36714,ret){
return (function (){
return fn1.call(null,val_36714);
});})(val_36714,ret))
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
var n__15331__auto___36715 = n;
var x_36716 = (0);
while(true){
if((x_36716 < n__15331__auto___36715)){
(a[x_36716] = (0));

var G__36717 = (x_36716 + (1));
x_36716 = G__36717;
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

var G__36718 = (i + (1));
i = G__36718;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36722 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36722 = (function (flag,alt_flag,meta36723){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36723 = meta36723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36724){
var self__ = this;
var _36724__$1 = this;
return self__.meta36723;
});})(flag))
;

cljs.core.async.t36722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36724,meta36723__$1){
var self__ = this;
var _36724__$1 = this;
return (new cljs.core.async.t36722(self__.flag,self__.alt_flag,meta36723__$1));
});})(flag))
;

cljs.core.async.t36722.cljs$lang$type = true;

cljs.core.async.t36722.cljs$lang$ctorStr = "cljs.core.async/t36722";

cljs.core.async.t36722.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36722");
});})(flag))
;

cljs.core.async.__GT_t36722 = ((function (flag){
return (function __GT_t36722(flag__$1,alt_flag__$1,meta36723){
return (new cljs.core.async.t36722(flag__$1,alt_flag__$1,meta36723));
});})(flag))
;

}

return (new cljs.core.async.t36722(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t36728 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36728 = (function (cb,flag,alt_handler,meta36729){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36729 = meta36729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36728.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36728.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36728.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36730){
var self__ = this;
var _36730__$1 = this;
return self__.meta36729;
});

cljs.core.async.t36728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36730,meta36729__$1){
var self__ = this;
var _36730__$1 = this;
return (new cljs.core.async.t36728(self__.cb,self__.flag,self__.alt_handler,meta36729__$1));
});

cljs.core.async.t36728.cljs$lang$type = true;

cljs.core.async.t36728.cljs$lang$ctorStr = "cljs.core.async/t36728";

cljs.core.async.t36728.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t36728");
});

cljs.core.async.__GT_t36728 = (function __GT_t36728(cb__$1,flag__$1,alt_handler__$1,meta36729){
return (new cljs.core.async.t36728(cb__$1,flag__$1,alt_handler__$1,meta36729));
});

}

return (new cljs.core.async.t36728(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36731_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36731_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36732_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36732_SHARP_,port], null));
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
var G__36733 = (i + (1));
i = G__36733;
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
var alts_BANG___delegate = function (ports,p__36734){
var map__36736 = p__36734;
var map__36736__$1 = ((cljs.core.seq_QMARK_.call(null,map__36736))?cljs.core.apply.call(null,cljs.core.hash_map,map__36736):map__36736);
var opts = map__36736__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__36734 = null;
if (arguments.length > 1) {
var G__36737__i = 0, G__36737__a = new Array(arguments.length -  1);
while (G__36737__i < G__36737__a.length) {G__36737__a[G__36737__i] = arguments[G__36737__i + 1]; ++G__36737__i;}
  p__36734 = new cljs.core.IndexedSeq(G__36737__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__36734);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__36738){
var ports = cljs.core.first(arglist__36738);
var p__36734 = cljs.core.rest(arglist__36738);
return alts_BANG___delegate(ports,p__36734);
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
var c__22243__auto___36833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___36833){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___36833){
return (function (state_36809){
var state_val_36810 = (state_36809[(1)]);
if((state_val_36810 === (7))){
var inst_36805 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36811_36834 = state_36809__$1;
(statearr_36811_36834[(2)] = inst_36805);

(statearr_36811_36834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (1))){
var state_36809__$1 = state_36809;
var statearr_36812_36835 = state_36809__$1;
(statearr_36812_36835[(2)] = null);

(statearr_36812_36835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (4))){
var inst_36788 = (state_36809[(7)]);
var inst_36788__$1 = (state_36809[(2)]);
var inst_36789 = (inst_36788__$1 == null);
var state_36809__$1 = (function (){var statearr_36813 = state_36809;
(statearr_36813[(7)] = inst_36788__$1);

return statearr_36813;
})();
if(cljs.core.truth_(inst_36789)){
var statearr_36814_36836 = state_36809__$1;
(statearr_36814_36836[(1)] = (5));

} else {
var statearr_36815_36837 = state_36809__$1;
(statearr_36815_36837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (13))){
var state_36809__$1 = state_36809;
var statearr_36816_36838 = state_36809__$1;
(statearr_36816_36838[(2)] = null);

(statearr_36816_36838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (6))){
var inst_36788 = (state_36809[(7)]);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36809__$1,(11),to,inst_36788);
} else {
if((state_val_36810 === (3))){
var inst_36807 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36809__$1,inst_36807);
} else {
if((state_val_36810 === (12))){
var state_36809__$1 = state_36809;
var statearr_36817_36839 = state_36809__$1;
(statearr_36817_36839[(2)] = null);

(statearr_36817_36839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (2))){
var state_36809__$1 = state_36809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36809__$1,(4),from);
} else {
if((state_val_36810 === (11))){
var inst_36798 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
if(cljs.core.truth_(inst_36798)){
var statearr_36818_36840 = state_36809__$1;
(statearr_36818_36840[(1)] = (12));

} else {
var statearr_36819_36841 = state_36809__$1;
(statearr_36819_36841[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (9))){
var state_36809__$1 = state_36809;
var statearr_36820_36842 = state_36809__$1;
(statearr_36820_36842[(2)] = null);

(statearr_36820_36842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (5))){
var state_36809__$1 = state_36809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36821_36843 = state_36809__$1;
(statearr_36821_36843[(1)] = (8));

} else {
var statearr_36822_36844 = state_36809__$1;
(statearr_36822_36844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (14))){
var inst_36803 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36823_36845 = state_36809__$1;
(statearr_36823_36845[(2)] = inst_36803);

(statearr_36823_36845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (10))){
var inst_36795 = (state_36809[(2)]);
var state_36809__$1 = state_36809;
var statearr_36824_36846 = state_36809__$1;
(statearr_36824_36846[(2)] = inst_36795);

(statearr_36824_36846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36810 === (8))){
var inst_36792 = cljs.core.async.close_BANG_.call(null,to);
var state_36809__$1 = state_36809;
var statearr_36825_36847 = state_36809__$1;
(statearr_36825_36847[(2)] = inst_36792);

(statearr_36825_36847[(1)] = (10));


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
});})(c__22243__auto___36833))
;
return ((function (switch__22187__auto__,c__22243__auto___36833){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_36829 = [null,null,null,null,null,null,null,null];
(statearr_36829[(0)] = state_machine__22188__auto__);

(statearr_36829[(1)] = (1));

return statearr_36829;
});
var state_machine__22188__auto____1 = (function (state_36809){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_36809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e36830){if((e36830 instanceof Object)){
var ex__22191__auto__ = e36830;
var statearr_36831_36848 = state_36809;
(statearr_36831_36848[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36849 = state_36809;
state_36809 = G__36849;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_36809){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_36809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___36833))
})();
var state__22245__auto__ = (function (){var statearr_36832 = f__22244__auto__.call(null);
(statearr_36832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___36833);

return statearr_36832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___36833))
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
return (function (p__37033){
var vec__37034 = p__37033;
var v = cljs.core.nth.call(null,vec__37034,(0),null);
var p = cljs.core.nth.call(null,vec__37034,(1),null);
var job = vec__37034;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22243__auto___37216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___37216,res,vec__37034,v,p,job,jobs,results){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___37216,res,vec__37034,v,p,job,jobs,results){
return (function (state_37039){
var state_val_37040 = (state_37039[(1)]);
if((state_val_37040 === (2))){
var inst_37036 = (state_37039[(2)]);
var inst_37037 = cljs.core.async.close_BANG_.call(null,res);
var state_37039__$1 = (function (){var statearr_37041 = state_37039;
(statearr_37041[(7)] = inst_37036);

return statearr_37041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37039__$1,inst_37037);
} else {
if((state_val_37040 === (1))){
var state_37039__$1 = state_37039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37039__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22243__auto___37216,res,vec__37034,v,p,job,jobs,results))
;
return ((function (switch__22187__auto__,c__22243__auto___37216,res,vec__37034,v,p,job,jobs,results){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37045 = [null,null,null,null,null,null,null,null];
(statearr_37045[(0)] = state_machine__22188__auto__);

(statearr_37045[(1)] = (1));

return statearr_37045;
});
var state_machine__22188__auto____1 = (function (state_37039){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37046){if((e37046 instanceof Object)){
var ex__22191__auto__ = e37046;
var statearr_37047_37217 = state_37039;
(statearr_37047_37217[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37218 = state_37039;
state_37039 = G__37218;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37039){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___37216,res,vec__37034,v,p,job,jobs,results))
})();
var state__22245__auto__ = (function (){var statearr_37048 = f__22244__auto__.call(null);
(statearr_37048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___37216);

return statearr_37048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___37216,res,vec__37034,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37049){
var vec__37050 = p__37049;
var v = cljs.core.nth.call(null,vec__37050,(0),null);
var p = cljs.core.nth.call(null,vec__37050,(1),null);
var job = vec__37050;
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
var n__15331__auto___37219 = n;
var __37220 = (0);
while(true){
if((__37220 < n__15331__auto___37219)){
var G__37051_37221 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37051_37221) {
case "async":
var c__22243__auto___37223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37220,c__22243__auto___37223,G__37051_37221,n__15331__auto___37219,jobs,results,process,async){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (__37220,c__22243__auto___37223,G__37051_37221,n__15331__auto___37219,jobs,results,process,async){
return (function (state_37064){
var state_val_37065 = (state_37064[(1)]);
if((state_val_37065 === (7))){
var inst_37060 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
var statearr_37066_37224 = state_37064__$1;
(statearr_37066_37224[(2)] = inst_37060);

(statearr_37066_37224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (6))){
var state_37064__$1 = state_37064;
var statearr_37067_37225 = state_37064__$1;
(statearr_37067_37225[(2)] = null);

(statearr_37067_37225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (5))){
var state_37064__$1 = state_37064;
var statearr_37068_37226 = state_37064__$1;
(statearr_37068_37226[(2)] = null);

(statearr_37068_37226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (4))){
var inst_37054 = (state_37064[(2)]);
var inst_37055 = async.call(null,inst_37054);
var state_37064__$1 = state_37064;
if(cljs.core.truth_(inst_37055)){
var statearr_37069_37227 = state_37064__$1;
(statearr_37069_37227[(1)] = (5));

} else {
var statearr_37070_37228 = state_37064__$1;
(statearr_37070_37228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37065 === (3))){
var inst_37062 = (state_37064[(2)]);
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37064__$1,inst_37062);
} else {
if((state_val_37065 === (2))){
var state_37064__$1 = state_37064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37064__$1,(4),jobs);
} else {
if((state_val_37065 === (1))){
var state_37064__$1 = state_37064;
var statearr_37071_37229 = state_37064__$1;
(statearr_37071_37229[(2)] = null);

(statearr_37071_37229[(1)] = (2));


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
});})(__37220,c__22243__auto___37223,G__37051_37221,n__15331__auto___37219,jobs,results,process,async))
;
return ((function (__37220,switch__22187__auto__,c__22243__auto___37223,G__37051_37221,n__15331__auto___37219,jobs,results,process,async){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37075 = [null,null,null,null,null,null,null];
(statearr_37075[(0)] = state_machine__22188__auto__);

(statearr_37075[(1)] = (1));

return statearr_37075;
});
var state_machine__22188__auto____1 = (function (state_37064){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37076){if((e37076 instanceof Object)){
var ex__22191__auto__ = e37076;
var statearr_37077_37230 = state_37064;
(statearr_37077_37230[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37231 = state_37064;
state_37064 = G__37231;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37064){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(__37220,switch__22187__auto__,c__22243__auto___37223,G__37051_37221,n__15331__auto___37219,jobs,results,process,async))
})();
var state__22245__auto__ = (function (){var statearr_37078 = f__22244__auto__.call(null);
(statearr_37078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___37223);

return statearr_37078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(__37220,c__22243__auto___37223,G__37051_37221,n__15331__auto___37219,jobs,results,process,async))
);


break;
case "compute":
var c__22243__auto___37232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37220,c__22243__auto___37232,G__37051_37221,n__15331__auto___37219,jobs,results,process,async){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (__37220,c__22243__auto___37232,G__37051_37221,n__15331__auto___37219,jobs,results,process,async){
return (function (state_37091){
var state_val_37092 = (state_37091[(1)]);
if((state_val_37092 === (7))){
var inst_37087 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37093_37233 = state_37091__$1;
(statearr_37093_37233[(2)] = inst_37087);

(statearr_37093_37233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (6))){
var state_37091__$1 = state_37091;
var statearr_37094_37234 = state_37091__$1;
(statearr_37094_37234[(2)] = null);

(statearr_37094_37234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (5))){
var state_37091__$1 = state_37091;
var statearr_37095_37235 = state_37091__$1;
(statearr_37095_37235[(2)] = null);

(statearr_37095_37235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (4))){
var inst_37081 = (state_37091[(2)]);
var inst_37082 = process.call(null,inst_37081);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37082)){
var statearr_37096_37236 = state_37091__$1;
(statearr_37096_37236[(1)] = (5));

} else {
var statearr_37097_37237 = state_37091__$1;
(statearr_37097_37237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (3))){
var inst_37089 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37091__$1,inst_37089);
} else {
if((state_val_37092 === (2))){
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(4),jobs);
} else {
if((state_val_37092 === (1))){
var state_37091__$1 = state_37091;
var statearr_37098_37238 = state_37091__$1;
(statearr_37098_37238[(2)] = null);

(statearr_37098_37238[(1)] = (2));


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
});})(__37220,c__22243__auto___37232,G__37051_37221,n__15331__auto___37219,jobs,results,process,async))
;
return ((function (__37220,switch__22187__auto__,c__22243__auto___37232,G__37051_37221,n__15331__auto___37219,jobs,results,process,async){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37102 = [null,null,null,null,null,null,null];
(statearr_37102[(0)] = state_machine__22188__auto__);

(statearr_37102[(1)] = (1));

return statearr_37102;
});
var state_machine__22188__auto____1 = (function (state_37091){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37103){if((e37103 instanceof Object)){
var ex__22191__auto__ = e37103;
var statearr_37104_37239 = state_37091;
(statearr_37104_37239[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37240 = state_37091;
state_37091 = G__37240;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37091){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(__37220,switch__22187__auto__,c__22243__auto___37232,G__37051_37221,n__15331__auto___37219,jobs,results,process,async))
})();
var state__22245__auto__ = (function (){var statearr_37105 = f__22244__auto__.call(null);
(statearr_37105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___37232);

return statearr_37105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(__37220,c__22243__auto___37232,G__37051_37221,n__15331__auto___37219,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37241 = (__37220 + (1));
__37220 = G__37241;
continue;
} else {
}
break;
}

var c__22243__auto___37242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___37242,jobs,results,process,async){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___37242,jobs,results,process,async){
return (function (state_37127){
var state_val_37128 = (state_37127[(1)]);
if((state_val_37128 === (9))){
var inst_37120 = (state_37127[(2)]);
var state_37127__$1 = (function (){var statearr_37129 = state_37127;
(statearr_37129[(7)] = inst_37120);

return statearr_37129;
})();
var statearr_37130_37243 = state_37127__$1;
(statearr_37130_37243[(2)] = null);

(statearr_37130_37243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (8))){
var inst_37113 = (state_37127[(8)]);
var inst_37118 = (state_37127[(2)]);
var state_37127__$1 = (function (){var statearr_37131 = state_37127;
(statearr_37131[(9)] = inst_37118);

return statearr_37131;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37127__$1,(9),results,inst_37113);
} else {
if((state_val_37128 === (7))){
var inst_37123 = (state_37127[(2)]);
var state_37127__$1 = state_37127;
var statearr_37132_37244 = state_37127__$1;
(statearr_37132_37244[(2)] = inst_37123);

(statearr_37132_37244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (6))){
var inst_37113 = (state_37127[(8)]);
var inst_37108 = (state_37127[(10)]);
var inst_37113__$1 = cljs.core.async.chan.call(null,(1));
var inst_37114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37115 = [inst_37108,inst_37113__$1];
var inst_37116 = (new cljs.core.PersistentVector(null,2,(5),inst_37114,inst_37115,null));
var state_37127__$1 = (function (){var statearr_37133 = state_37127;
(statearr_37133[(8)] = inst_37113__$1);

return statearr_37133;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37127__$1,(8),jobs,inst_37116);
} else {
if((state_val_37128 === (5))){
var inst_37111 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37127__$1 = state_37127;
var statearr_37134_37245 = state_37127__$1;
(statearr_37134_37245[(2)] = inst_37111);

(statearr_37134_37245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (4))){
var inst_37108 = (state_37127[(10)]);
var inst_37108__$1 = (state_37127[(2)]);
var inst_37109 = (inst_37108__$1 == null);
var state_37127__$1 = (function (){var statearr_37135 = state_37127;
(statearr_37135[(10)] = inst_37108__$1);

return statearr_37135;
})();
if(cljs.core.truth_(inst_37109)){
var statearr_37136_37246 = state_37127__$1;
(statearr_37136_37246[(1)] = (5));

} else {
var statearr_37137_37247 = state_37127__$1;
(statearr_37137_37247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37128 === (3))){
var inst_37125 = (state_37127[(2)]);
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37127__$1,inst_37125);
} else {
if((state_val_37128 === (2))){
var state_37127__$1 = state_37127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37127__$1,(4),from);
} else {
if((state_val_37128 === (1))){
var state_37127__$1 = state_37127;
var statearr_37138_37248 = state_37127__$1;
(statearr_37138_37248[(2)] = null);

(statearr_37138_37248[(1)] = (2));


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
});})(c__22243__auto___37242,jobs,results,process,async))
;
return ((function (switch__22187__auto__,c__22243__auto___37242,jobs,results,process,async){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37142[(0)] = state_machine__22188__auto__);

(statearr_37142[(1)] = (1));

return statearr_37142;
});
var state_machine__22188__auto____1 = (function (state_37127){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37143){if((e37143 instanceof Object)){
var ex__22191__auto__ = e37143;
var statearr_37144_37249 = state_37127;
(statearr_37144_37249[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37250 = state_37127;
state_37127 = G__37250;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37127){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___37242,jobs,results,process,async))
})();
var state__22245__auto__ = (function (){var statearr_37145 = f__22244__auto__.call(null);
(statearr_37145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___37242);

return statearr_37145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___37242,jobs,results,process,async))
);


var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__,jobs,results,process,async){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__,jobs,results,process,async){
return (function (state_37183){
var state_val_37184 = (state_37183[(1)]);
if((state_val_37184 === (7))){
var inst_37179 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37185_37251 = state_37183__$1;
(statearr_37185_37251[(2)] = inst_37179);

(statearr_37185_37251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (20))){
var state_37183__$1 = state_37183;
var statearr_37186_37252 = state_37183__$1;
(statearr_37186_37252[(2)] = null);

(statearr_37186_37252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (1))){
var state_37183__$1 = state_37183;
var statearr_37187_37253 = state_37183__$1;
(statearr_37187_37253[(2)] = null);

(statearr_37187_37253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (4))){
var inst_37148 = (state_37183[(7)]);
var inst_37148__$1 = (state_37183[(2)]);
var inst_37149 = (inst_37148__$1 == null);
var state_37183__$1 = (function (){var statearr_37188 = state_37183;
(statearr_37188[(7)] = inst_37148__$1);

return statearr_37188;
})();
if(cljs.core.truth_(inst_37149)){
var statearr_37189_37254 = state_37183__$1;
(statearr_37189_37254[(1)] = (5));

} else {
var statearr_37190_37255 = state_37183__$1;
(statearr_37190_37255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (15))){
var inst_37161 = (state_37183[(8)]);
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37183__$1,(18),to,inst_37161);
} else {
if((state_val_37184 === (21))){
var inst_37174 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37191_37256 = state_37183__$1;
(statearr_37191_37256[(2)] = inst_37174);

(statearr_37191_37256[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (13))){
var inst_37176 = (state_37183[(2)]);
var state_37183__$1 = (function (){var statearr_37192 = state_37183;
(statearr_37192[(9)] = inst_37176);

return statearr_37192;
})();
var statearr_37193_37257 = state_37183__$1;
(statearr_37193_37257[(2)] = null);

(statearr_37193_37257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (6))){
var inst_37148 = (state_37183[(7)]);
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37183__$1,(11),inst_37148);
} else {
if((state_val_37184 === (17))){
var inst_37169 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
if(cljs.core.truth_(inst_37169)){
var statearr_37194_37258 = state_37183__$1;
(statearr_37194_37258[(1)] = (19));

} else {
var statearr_37195_37259 = state_37183__$1;
(statearr_37195_37259[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (3))){
var inst_37181 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37183__$1,inst_37181);
} else {
if((state_val_37184 === (12))){
var inst_37158 = (state_37183[(10)]);
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37183__$1,(14),inst_37158);
} else {
if((state_val_37184 === (2))){
var state_37183__$1 = state_37183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37183__$1,(4),results);
} else {
if((state_val_37184 === (19))){
var state_37183__$1 = state_37183;
var statearr_37196_37260 = state_37183__$1;
(statearr_37196_37260[(2)] = null);

(statearr_37196_37260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (11))){
var inst_37158 = (state_37183[(2)]);
var state_37183__$1 = (function (){var statearr_37197 = state_37183;
(statearr_37197[(10)] = inst_37158);

return statearr_37197;
})();
var statearr_37198_37261 = state_37183__$1;
(statearr_37198_37261[(2)] = null);

(statearr_37198_37261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (9))){
var state_37183__$1 = state_37183;
var statearr_37199_37262 = state_37183__$1;
(statearr_37199_37262[(2)] = null);

(statearr_37199_37262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (5))){
var state_37183__$1 = state_37183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37200_37263 = state_37183__$1;
(statearr_37200_37263[(1)] = (8));

} else {
var statearr_37201_37264 = state_37183__$1;
(statearr_37201_37264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (14))){
var inst_37163 = (state_37183[(11)]);
var inst_37161 = (state_37183[(8)]);
var inst_37161__$1 = (state_37183[(2)]);
var inst_37162 = (inst_37161__$1 == null);
var inst_37163__$1 = cljs.core.not.call(null,inst_37162);
var state_37183__$1 = (function (){var statearr_37202 = state_37183;
(statearr_37202[(11)] = inst_37163__$1);

(statearr_37202[(8)] = inst_37161__$1);

return statearr_37202;
})();
if(inst_37163__$1){
var statearr_37203_37265 = state_37183__$1;
(statearr_37203_37265[(1)] = (15));

} else {
var statearr_37204_37266 = state_37183__$1;
(statearr_37204_37266[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (16))){
var inst_37163 = (state_37183[(11)]);
var state_37183__$1 = state_37183;
var statearr_37205_37267 = state_37183__$1;
(statearr_37205_37267[(2)] = inst_37163);

(statearr_37205_37267[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (10))){
var inst_37155 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37206_37268 = state_37183__$1;
(statearr_37206_37268[(2)] = inst_37155);

(statearr_37206_37268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (18))){
var inst_37166 = (state_37183[(2)]);
var state_37183__$1 = state_37183;
var statearr_37207_37269 = state_37183__$1;
(statearr_37207_37269[(2)] = inst_37166);

(statearr_37207_37269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37184 === (8))){
var inst_37152 = cljs.core.async.close_BANG_.call(null,to);
var state_37183__$1 = state_37183;
var statearr_37208_37270 = state_37183__$1;
(statearr_37208_37270[(2)] = inst_37152);

(statearr_37208_37270[(1)] = (10));


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
});})(c__22243__auto__,jobs,results,process,async))
;
return ((function (switch__22187__auto__,c__22243__auto__,jobs,results,process,async){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37212[(0)] = state_machine__22188__auto__);

(statearr_37212[(1)] = (1));

return statearr_37212;
});
var state_machine__22188__auto____1 = (function (state_37183){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37213){if((e37213 instanceof Object)){
var ex__22191__auto__ = e37213;
var statearr_37214_37271 = state_37183;
(statearr_37214_37271[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37272 = state_37183;
state_37183 = G__37272;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37183){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__,jobs,results,process,async))
})();
var state__22245__auto__ = (function (){var statearr_37215 = f__22244__auto__.call(null);
(statearr_37215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_37215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__,jobs,results,process,async))
);

return c__22243__auto__;
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
var c__22243__auto___37373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___37373,tc,fc){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___37373,tc,fc){
return (function (state_37348){
var state_val_37349 = (state_37348[(1)]);
if((state_val_37349 === (7))){
var inst_37344 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
var statearr_37350_37374 = state_37348__$1;
(statearr_37350_37374[(2)] = inst_37344);

(statearr_37350_37374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (1))){
var state_37348__$1 = state_37348;
var statearr_37351_37375 = state_37348__$1;
(statearr_37351_37375[(2)] = null);

(statearr_37351_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (4))){
var inst_37325 = (state_37348[(7)]);
var inst_37325__$1 = (state_37348[(2)]);
var inst_37326 = (inst_37325__$1 == null);
var state_37348__$1 = (function (){var statearr_37352 = state_37348;
(statearr_37352[(7)] = inst_37325__$1);

return statearr_37352;
})();
if(cljs.core.truth_(inst_37326)){
var statearr_37353_37376 = state_37348__$1;
(statearr_37353_37376[(1)] = (5));

} else {
var statearr_37354_37377 = state_37348__$1;
(statearr_37354_37377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (13))){
var state_37348__$1 = state_37348;
var statearr_37355_37378 = state_37348__$1;
(statearr_37355_37378[(2)] = null);

(statearr_37355_37378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (6))){
var inst_37325 = (state_37348[(7)]);
var inst_37331 = p.call(null,inst_37325);
var state_37348__$1 = state_37348;
if(cljs.core.truth_(inst_37331)){
var statearr_37356_37379 = state_37348__$1;
(statearr_37356_37379[(1)] = (9));

} else {
var statearr_37357_37380 = state_37348__$1;
(statearr_37357_37380[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (3))){
var inst_37346 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37348__$1,inst_37346);
} else {
if((state_val_37349 === (12))){
var state_37348__$1 = state_37348;
var statearr_37358_37381 = state_37348__$1;
(statearr_37358_37381[(2)] = null);

(statearr_37358_37381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (2))){
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37348__$1,(4),ch);
} else {
if((state_val_37349 === (11))){
var inst_37325 = (state_37348[(7)]);
var inst_37335 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37348__$1,(8),inst_37335,inst_37325);
} else {
if((state_val_37349 === (9))){
var state_37348__$1 = state_37348;
var statearr_37359_37382 = state_37348__$1;
(statearr_37359_37382[(2)] = tc);

(statearr_37359_37382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (5))){
var inst_37328 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37329 = cljs.core.async.close_BANG_.call(null,fc);
var state_37348__$1 = (function (){var statearr_37360 = state_37348;
(statearr_37360[(8)] = inst_37328);

return statearr_37360;
})();
var statearr_37361_37383 = state_37348__$1;
(statearr_37361_37383[(2)] = inst_37329);

(statearr_37361_37383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (14))){
var inst_37342 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
var statearr_37362_37384 = state_37348__$1;
(statearr_37362_37384[(2)] = inst_37342);

(statearr_37362_37384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (10))){
var state_37348__$1 = state_37348;
var statearr_37363_37385 = state_37348__$1;
(statearr_37363_37385[(2)] = fc);

(statearr_37363_37385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37349 === (8))){
var inst_37337 = (state_37348[(2)]);
var state_37348__$1 = state_37348;
if(cljs.core.truth_(inst_37337)){
var statearr_37364_37386 = state_37348__$1;
(statearr_37364_37386[(1)] = (12));

} else {
var statearr_37365_37387 = state_37348__$1;
(statearr_37365_37387[(1)] = (13));

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
});})(c__22243__auto___37373,tc,fc))
;
return ((function (switch__22187__auto__,c__22243__auto___37373,tc,fc){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37369 = [null,null,null,null,null,null,null,null,null];
(statearr_37369[(0)] = state_machine__22188__auto__);

(statearr_37369[(1)] = (1));

return statearr_37369;
});
var state_machine__22188__auto____1 = (function (state_37348){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37370){if((e37370 instanceof Object)){
var ex__22191__auto__ = e37370;
var statearr_37371_37388 = state_37348;
(statearr_37371_37388[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37389 = state_37348;
state_37348 = G__37389;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37348){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___37373,tc,fc))
})();
var state__22245__auto__ = (function (){var statearr_37372 = f__22244__auto__.call(null);
(statearr_37372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___37373);

return statearr_37372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___37373,tc,fc))
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
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_37436){
var state_val_37437 = (state_37436[(1)]);
if((state_val_37437 === (7))){
var inst_37432 = (state_37436[(2)]);
var state_37436__$1 = state_37436;
var statearr_37438_37454 = state_37436__$1;
(statearr_37438_37454[(2)] = inst_37432);

(statearr_37438_37454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (6))){
var inst_37422 = (state_37436[(7)]);
var inst_37425 = (state_37436[(8)]);
var inst_37429 = f.call(null,inst_37422,inst_37425);
var inst_37422__$1 = inst_37429;
var state_37436__$1 = (function (){var statearr_37439 = state_37436;
(statearr_37439[(7)] = inst_37422__$1);

return statearr_37439;
})();
var statearr_37440_37455 = state_37436__$1;
(statearr_37440_37455[(2)] = null);

(statearr_37440_37455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (5))){
var inst_37422 = (state_37436[(7)]);
var state_37436__$1 = state_37436;
var statearr_37441_37456 = state_37436__$1;
(statearr_37441_37456[(2)] = inst_37422);

(statearr_37441_37456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (4))){
var inst_37425 = (state_37436[(8)]);
var inst_37425__$1 = (state_37436[(2)]);
var inst_37426 = (inst_37425__$1 == null);
var state_37436__$1 = (function (){var statearr_37442 = state_37436;
(statearr_37442[(8)] = inst_37425__$1);

return statearr_37442;
})();
if(cljs.core.truth_(inst_37426)){
var statearr_37443_37457 = state_37436__$1;
(statearr_37443_37457[(1)] = (5));

} else {
var statearr_37444_37458 = state_37436__$1;
(statearr_37444_37458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37437 === (3))){
var inst_37434 = (state_37436[(2)]);
var state_37436__$1 = state_37436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37436__$1,inst_37434);
} else {
if((state_val_37437 === (2))){
var state_37436__$1 = state_37436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37436__$1,(4),ch);
} else {
if((state_val_37437 === (1))){
var inst_37422 = init;
var state_37436__$1 = (function (){var statearr_37445 = state_37436;
(statearr_37445[(7)] = inst_37422);

return statearr_37445;
})();
var statearr_37446_37459 = state_37436__$1;
(statearr_37446_37459[(2)] = null);

(statearr_37446_37459[(1)] = (2));


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
});})(c__22243__auto__))
;
return ((function (switch__22187__auto__,c__22243__auto__){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37450 = [null,null,null,null,null,null,null,null,null];
(statearr_37450[(0)] = state_machine__22188__auto__);

(statearr_37450[(1)] = (1));

return statearr_37450;
});
var state_machine__22188__auto____1 = (function (state_37436){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37451){if((e37451 instanceof Object)){
var ex__22191__auto__ = e37451;
var statearr_37452_37460 = state_37436;
(statearr_37452_37460[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37461 = state_37436;
state_37436 = G__37461;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37436){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_37453 = f__22244__auto__.call(null);
(statearr_37453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_37453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
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
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_37535){
var state_val_37536 = (state_37535[(1)]);
if((state_val_37536 === (7))){
var inst_37517 = (state_37535[(2)]);
var state_37535__$1 = state_37535;
var statearr_37537_37560 = state_37535__$1;
(statearr_37537_37560[(2)] = inst_37517);

(statearr_37537_37560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (1))){
var inst_37511 = cljs.core.seq.call(null,coll);
var inst_37512 = inst_37511;
var state_37535__$1 = (function (){var statearr_37538 = state_37535;
(statearr_37538[(7)] = inst_37512);

return statearr_37538;
})();
var statearr_37539_37561 = state_37535__$1;
(statearr_37539_37561[(2)] = null);

(statearr_37539_37561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (4))){
var inst_37512 = (state_37535[(7)]);
var inst_37515 = cljs.core.first.call(null,inst_37512);
var state_37535__$1 = state_37535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37535__$1,(7),ch,inst_37515);
} else {
if((state_val_37536 === (13))){
var inst_37529 = (state_37535[(2)]);
var state_37535__$1 = state_37535;
var statearr_37540_37562 = state_37535__$1;
(statearr_37540_37562[(2)] = inst_37529);

(statearr_37540_37562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (6))){
var inst_37520 = (state_37535[(2)]);
var state_37535__$1 = state_37535;
if(cljs.core.truth_(inst_37520)){
var statearr_37541_37563 = state_37535__$1;
(statearr_37541_37563[(1)] = (8));

} else {
var statearr_37542_37564 = state_37535__$1;
(statearr_37542_37564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (3))){
var inst_37533 = (state_37535[(2)]);
var state_37535__$1 = state_37535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37535__$1,inst_37533);
} else {
if((state_val_37536 === (12))){
var state_37535__$1 = state_37535;
var statearr_37543_37565 = state_37535__$1;
(statearr_37543_37565[(2)] = null);

(statearr_37543_37565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (2))){
var inst_37512 = (state_37535[(7)]);
var state_37535__$1 = state_37535;
if(cljs.core.truth_(inst_37512)){
var statearr_37544_37566 = state_37535__$1;
(statearr_37544_37566[(1)] = (4));

} else {
var statearr_37545_37567 = state_37535__$1;
(statearr_37545_37567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (11))){
var inst_37526 = cljs.core.async.close_BANG_.call(null,ch);
var state_37535__$1 = state_37535;
var statearr_37546_37568 = state_37535__$1;
(statearr_37546_37568[(2)] = inst_37526);

(statearr_37546_37568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (9))){
var state_37535__$1 = state_37535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37547_37569 = state_37535__$1;
(statearr_37547_37569[(1)] = (11));

} else {
var statearr_37548_37570 = state_37535__$1;
(statearr_37548_37570[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (5))){
var inst_37512 = (state_37535[(7)]);
var state_37535__$1 = state_37535;
var statearr_37549_37571 = state_37535__$1;
(statearr_37549_37571[(2)] = inst_37512);

(statearr_37549_37571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (10))){
var inst_37531 = (state_37535[(2)]);
var state_37535__$1 = state_37535;
var statearr_37550_37572 = state_37535__$1;
(statearr_37550_37572[(2)] = inst_37531);

(statearr_37550_37572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37536 === (8))){
var inst_37512 = (state_37535[(7)]);
var inst_37522 = cljs.core.next.call(null,inst_37512);
var inst_37512__$1 = inst_37522;
var state_37535__$1 = (function (){var statearr_37551 = state_37535;
(statearr_37551[(7)] = inst_37512__$1);

return statearr_37551;
})();
var statearr_37552_37573 = state_37535__$1;
(statearr_37552_37573[(2)] = null);

(statearr_37552_37573[(1)] = (2));


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
});})(c__22243__auto__))
;
return ((function (switch__22187__auto__,c__22243__auto__){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_37556 = [null,null,null,null,null,null,null,null];
(statearr_37556[(0)] = state_machine__22188__auto__);

(statearr_37556[(1)] = (1));

return statearr_37556;
});
var state_machine__22188__auto____1 = (function (state_37535){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e37557){if((e37557 instanceof Object)){
var ex__22191__auto__ = e37557;
var statearr_37558_37574 = state_37535;
(statearr_37558_37574[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37575 = state_37535;
state_37535 = G__37575;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37535){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_37559 = f__22244__auto__.call(null);
(statearr_37559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_37559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
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

cljs.core.async.Mux = (function (){var obj37577 = {};
return obj37577;
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


cljs.core.async.Mult = (function (){var obj37579 = {};
return obj37579;
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
if(typeof cljs.core.async.t37801 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37801 = (function (cs,ch,mult,meta37802){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37802 = meta37802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37801.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t37801.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t37801.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t37801.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t37801.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t37801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37803){
var self__ = this;
var _37803__$1 = this;
return self__.meta37802;
});})(cs))
;

cljs.core.async.t37801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37803,meta37802__$1){
var self__ = this;
var _37803__$1 = this;
return (new cljs.core.async.t37801(self__.cs,self__.ch,self__.mult,meta37802__$1));
});})(cs))
;

cljs.core.async.t37801.cljs$lang$type = true;

cljs.core.async.t37801.cljs$lang$ctorStr = "cljs.core.async/t37801";

cljs.core.async.t37801.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t37801");
});})(cs))
;

cljs.core.async.__GT_t37801 = ((function (cs){
return (function __GT_t37801(cs__$1,ch__$1,mult__$1,meta37802){
return (new cljs.core.async.t37801(cs__$1,ch__$1,mult__$1,meta37802));
});})(cs))
;

}

return (new cljs.core.async.t37801(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22243__auto___38022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___38022,cs,m,dchan,dctr,done){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___38022,cs,m,dchan,dctr,done){
return (function (state_37934){
var state_val_37935 = (state_37934[(1)]);
if((state_val_37935 === (7))){
var inst_37930 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37936_38023 = state_37934__$1;
(statearr_37936_38023[(2)] = inst_37930);

(statearr_37936_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (20))){
var inst_37835 = (state_37934[(7)]);
var inst_37845 = cljs.core.first.call(null,inst_37835);
var inst_37846 = cljs.core.nth.call(null,inst_37845,(0),null);
var inst_37847 = cljs.core.nth.call(null,inst_37845,(1),null);
var state_37934__$1 = (function (){var statearr_37937 = state_37934;
(statearr_37937[(8)] = inst_37846);

return statearr_37937;
})();
if(cljs.core.truth_(inst_37847)){
var statearr_37938_38024 = state_37934__$1;
(statearr_37938_38024[(1)] = (22));

} else {
var statearr_37939_38025 = state_37934__$1;
(statearr_37939_38025[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (27))){
var inst_37882 = (state_37934[(9)]);
var inst_37877 = (state_37934[(10)]);
var inst_37806 = (state_37934[(11)]);
var inst_37875 = (state_37934[(12)]);
var inst_37882__$1 = cljs.core._nth.call(null,inst_37875,inst_37877);
var inst_37883 = cljs.core.async.put_BANG_.call(null,inst_37882__$1,inst_37806,done);
var state_37934__$1 = (function (){var statearr_37940 = state_37934;
(statearr_37940[(9)] = inst_37882__$1);

return statearr_37940;
})();
if(cljs.core.truth_(inst_37883)){
var statearr_37941_38026 = state_37934__$1;
(statearr_37941_38026[(1)] = (30));

} else {
var statearr_37942_38027 = state_37934__$1;
(statearr_37942_38027[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (1))){
var state_37934__$1 = state_37934;
var statearr_37943_38028 = state_37934__$1;
(statearr_37943_38028[(2)] = null);

(statearr_37943_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (24))){
var inst_37835 = (state_37934[(7)]);
var inst_37852 = (state_37934[(2)]);
var inst_37853 = cljs.core.next.call(null,inst_37835);
var inst_37815 = inst_37853;
var inst_37816 = null;
var inst_37817 = (0);
var inst_37818 = (0);
var state_37934__$1 = (function (){var statearr_37944 = state_37934;
(statearr_37944[(13)] = inst_37817);

(statearr_37944[(14)] = inst_37816);

(statearr_37944[(15)] = inst_37815);

(statearr_37944[(16)] = inst_37818);

(statearr_37944[(17)] = inst_37852);

return statearr_37944;
})();
var statearr_37945_38029 = state_37934__$1;
(statearr_37945_38029[(2)] = null);

(statearr_37945_38029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (39))){
var state_37934__$1 = state_37934;
var statearr_37949_38030 = state_37934__$1;
(statearr_37949_38030[(2)] = null);

(statearr_37949_38030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (4))){
var inst_37806 = (state_37934[(11)]);
var inst_37806__$1 = (state_37934[(2)]);
var inst_37807 = (inst_37806__$1 == null);
var state_37934__$1 = (function (){var statearr_37950 = state_37934;
(statearr_37950[(11)] = inst_37806__$1);

return statearr_37950;
})();
if(cljs.core.truth_(inst_37807)){
var statearr_37951_38031 = state_37934__$1;
(statearr_37951_38031[(1)] = (5));

} else {
var statearr_37952_38032 = state_37934__$1;
(statearr_37952_38032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (15))){
var inst_37817 = (state_37934[(13)]);
var inst_37816 = (state_37934[(14)]);
var inst_37815 = (state_37934[(15)]);
var inst_37818 = (state_37934[(16)]);
var inst_37831 = (state_37934[(2)]);
var inst_37832 = (inst_37818 + (1));
var tmp37946 = inst_37817;
var tmp37947 = inst_37816;
var tmp37948 = inst_37815;
var inst_37815__$1 = tmp37948;
var inst_37816__$1 = tmp37947;
var inst_37817__$1 = tmp37946;
var inst_37818__$1 = inst_37832;
var state_37934__$1 = (function (){var statearr_37953 = state_37934;
(statearr_37953[(13)] = inst_37817__$1);

(statearr_37953[(14)] = inst_37816__$1);

(statearr_37953[(15)] = inst_37815__$1);

(statearr_37953[(16)] = inst_37818__$1);

(statearr_37953[(18)] = inst_37831);

return statearr_37953;
})();
var statearr_37954_38033 = state_37934__$1;
(statearr_37954_38033[(2)] = null);

(statearr_37954_38033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (21))){
var inst_37856 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37958_38034 = state_37934__$1;
(statearr_37958_38034[(2)] = inst_37856);

(statearr_37958_38034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (31))){
var inst_37882 = (state_37934[(9)]);
var inst_37886 = done.call(null,null);
var inst_37887 = cljs.core.async.untap_STAR_.call(null,m,inst_37882);
var state_37934__$1 = (function (){var statearr_37959 = state_37934;
(statearr_37959[(19)] = inst_37886);

return statearr_37959;
})();
var statearr_37960_38035 = state_37934__$1;
(statearr_37960_38035[(2)] = inst_37887);

(statearr_37960_38035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (32))){
var inst_37874 = (state_37934[(20)]);
var inst_37877 = (state_37934[(10)]);
var inst_37876 = (state_37934[(21)]);
var inst_37875 = (state_37934[(12)]);
var inst_37889 = (state_37934[(2)]);
var inst_37890 = (inst_37877 + (1));
var tmp37955 = inst_37874;
var tmp37956 = inst_37876;
var tmp37957 = inst_37875;
var inst_37874__$1 = tmp37955;
var inst_37875__$1 = tmp37957;
var inst_37876__$1 = tmp37956;
var inst_37877__$1 = inst_37890;
var state_37934__$1 = (function (){var statearr_37961 = state_37934;
(statearr_37961[(20)] = inst_37874__$1);

(statearr_37961[(22)] = inst_37889);

(statearr_37961[(10)] = inst_37877__$1);

(statearr_37961[(21)] = inst_37876__$1);

(statearr_37961[(12)] = inst_37875__$1);

return statearr_37961;
})();
var statearr_37962_38036 = state_37934__$1;
(statearr_37962_38036[(2)] = null);

(statearr_37962_38036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (40))){
var inst_37902 = (state_37934[(23)]);
var inst_37906 = done.call(null,null);
var inst_37907 = cljs.core.async.untap_STAR_.call(null,m,inst_37902);
var state_37934__$1 = (function (){var statearr_37963 = state_37934;
(statearr_37963[(24)] = inst_37906);

return statearr_37963;
})();
var statearr_37964_38037 = state_37934__$1;
(statearr_37964_38037[(2)] = inst_37907);

(statearr_37964_38037[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (33))){
var inst_37893 = (state_37934[(25)]);
var inst_37895 = cljs.core.chunked_seq_QMARK_.call(null,inst_37893);
var state_37934__$1 = state_37934;
if(inst_37895){
var statearr_37965_38038 = state_37934__$1;
(statearr_37965_38038[(1)] = (36));

} else {
var statearr_37966_38039 = state_37934__$1;
(statearr_37966_38039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (13))){
var inst_37825 = (state_37934[(26)]);
var inst_37828 = cljs.core.async.close_BANG_.call(null,inst_37825);
var state_37934__$1 = state_37934;
var statearr_37967_38040 = state_37934__$1;
(statearr_37967_38040[(2)] = inst_37828);

(statearr_37967_38040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (22))){
var inst_37846 = (state_37934[(8)]);
var inst_37849 = cljs.core.async.close_BANG_.call(null,inst_37846);
var state_37934__$1 = state_37934;
var statearr_37968_38041 = state_37934__$1;
(statearr_37968_38041[(2)] = inst_37849);

(statearr_37968_38041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (36))){
var inst_37893 = (state_37934[(25)]);
var inst_37897 = cljs.core.chunk_first.call(null,inst_37893);
var inst_37898 = cljs.core.chunk_rest.call(null,inst_37893);
var inst_37899 = cljs.core.count.call(null,inst_37897);
var inst_37874 = inst_37898;
var inst_37875 = inst_37897;
var inst_37876 = inst_37899;
var inst_37877 = (0);
var state_37934__$1 = (function (){var statearr_37969 = state_37934;
(statearr_37969[(20)] = inst_37874);

(statearr_37969[(10)] = inst_37877);

(statearr_37969[(21)] = inst_37876);

(statearr_37969[(12)] = inst_37875);

return statearr_37969;
})();
var statearr_37970_38042 = state_37934__$1;
(statearr_37970_38042[(2)] = null);

(statearr_37970_38042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (41))){
var inst_37893 = (state_37934[(25)]);
var inst_37909 = (state_37934[(2)]);
var inst_37910 = cljs.core.next.call(null,inst_37893);
var inst_37874 = inst_37910;
var inst_37875 = null;
var inst_37876 = (0);
var inst_37877 = (0);
var state_37934__$1 = (function (){var statearr_37971 = state_37934;
(statearr_37971[(27)] = inst_37909);

(statearr_37971[(20)] = inst_37874);

(statearr_37971[(10)] = inst_37877);

(statearr_37971[(21)] = inst_37876);

(statearr_37971[(12)] = inst_37875);

return statearr_37971;
})();
var statearr_37972_38043 = state_37934__$1;
(statearr_37972_38043[(2)] = null);

(statearr_37972_38043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (43))){
var state_37934__$1 = state_37934;
var statearr_37973_38044 = state_37934__$1;
(statearr_37973_38044[(2)] = null);

(statearr_37973_38044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (29))){
var inst_37918 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37974_38045 = state_37934__$1;
(statearr_37974_38045[(2)] = inst_37918);

(statearr_37974_38045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (44))){
var inst_37927 = (state_37934[(2)]);
var state_37934__$1 = (function (){var statearr_37975 = state_37934;
(statearr_37975[(28)] = inst_37927);

return statearr_37975;
})();
var statearr_37976_38046 = state_37934__$1;
(statearr_37976_38046[(2)] = null);

(statearr_37976_38046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (6))){
var inst_37866 = (state_37934[(29)]);
var inst_37865 = cljs.core.deref.call(null,cs);
var inst_37866__$1 = cljs.core.keys.call(null,inst_37865);
var inst_37867 = cljs.core.count.call(null,inst_37866__$1);
var inst_37868 = cljs.core.reset_BANG_.call(null,dctr,inst_37867);
var inst_37873 = cljs.core.seq.call(null,inst_37866__$1);
var inst_37874 = inst_37873;
var inst_37875 = null;
var inst_37876 = (0);
var inst_37877 = (0);
var state_37934__$1 = (function (){var statearr_37977 = state_37934;
(statearr_37977[(20)] = inst_37874);

(statearr_37977[(10)] = inst_37877);

(statearr_37977[(29)] = inst_37866__$1);

(statearr_37977[(21)] = inst_37876);

(statearr_37977[(30)] = inst_37868);

(statearr_37977[(12)] = inst_37875);

return statearr_37977;
})();
var statearr_37978_38047 = state_37934__$1;
(statearr_37978_38047[(2)] = null);

(statearr_37978_38047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (28))){
var inst_37874 = (state_37934[(20)]);
var inst_37893 = (state_37934[(25)]);
var inst_37893__$1 = cljs.core.seq.call(null,inst_37874);
var state_37934__$1 = (function (){var statearr_37979 = state_37934;
(statearr_37979[(25)] = inst_37893__$1);

return statearr_37979;
})();
if(inst_37893__$1){
var statearr_37980_38048 = state_37934__$1;
(statearr_37980_38048[(1)] = (33));

} else {
var statearr_37981_38049 = state_37934__$1;
(statearr_37981_38049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (25))){
var inst_37877 = (state_37934[(10)]);
var inst_37876 = (state_37934[(21)]);
var inst_37879 = (inst_37877 < inst_37876);
var inst_37880 = inst_37879;
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37880)){
var statearr_37982_38050 = state_37934__$1;
(statearr_37982_38050[(1)] = (27));

} else {
var statearr_37983_38051 = state_37934__$1;
(statearr_37983_38051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (34))){
var state_37934__$1 = state_37934;
var statearr_37984_38052 = state_37934__$1;
(statearr_37984_38052[(2)] = null);

(statearr_37984_38052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (17))){
var state_37934__$1 = state_37934;
var statearr_37985_38053 = state_37934__$1;
(statearr_37985_38053[(2)] = null);

(statearr_37985_38053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (3))){
var inst_37932 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37934__$1,inst_37932);
} else {
if((state_val_37935 === (12))){
var inst_37861 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37986_38054 = state_37934__$1;
(statearr_37986_38054[(2)] = inst_37861);

(statearr_37986_38054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (2))){
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(4),ch);
} else {
if((state_val_37935 === (23))){
var state_37934__$1 = state_37934;
var statearr_37987_38055 = state_37934__$1;
(statearr_37987_38055[(2)] = null);

(statearr_37987_38055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (35))){
var inst_37916 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37988_38056 = state_37934__$1;
(statearr_37988_38056[(2)] = inst_37916);

(statearr_37988_38056[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (19))){
var inst_37835 = (state_37934[(7)]);
var inst_37839 = cljs.core.chunk_first.call(null,inst_37835);
var inst_37840 = cljs.core.chunk_rest.call(null,inst_37835);
var inst_37841 = cljs.core.count.call(null,inst_37839);
var inst_37815 = inst_37840;
var inst_37816 = inst_37839;
var inst_37817 = inst_37841;
var inst_37818 = (0);
var state_37934__$1 = (function (){var statearr_37989 = state_37934;
(statearr_37989[(13)] = inst_37817);

(statearr_37989[(14)] = inst_37816);

(statearr_37989[(15)] = inst_37815);

(statearr_37989[(16)] = inst_37818);

return statearr_37989;
})();
var statearr_37990_38057 = state_37934__$1;
(statearr_37990_38057[(2)] = null);

(statearr_37990_38057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (11))){
var inst_37835 = (state_37934[(7)]);
var inst_37815 = (state_37934[(15)]);
var inst_37835__$1 = cljs.core.seq.call(null,inst_37815);
var state_37934__$1 = (function (){var statearr_37991 = state_37934;
(statearr_37991[(7)] = inst_37835__$1);

return statearr_37991;
})();
if(inst_37835__$1){
var statearr_37992_38058 = state_37934__$1;
(statearr_37992_38058[(1)] = (16));

} else {
var statearr_37993_38059 = state_37934__$1;
(statearr_37993_38059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (9))){
var inst_37863 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37994_38060 = state_37934__$1;
(statearr_37994_38060[(2)] = inst_37863);

(statearr_37994_38060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (5))){
var inst_37813 = cljs.core.deref.call(null,cs);
var inst_37814 = cljs.core.seq.call(null,inst_37813);
var inst_37815 = inst_37814;
var inst_37816 = null;
var inst_37817 = (0);
var inst_37818 = (0);
var state_37934__$1 = (function (){var statearr_37995 = state_37934;
(statearr_37995[(13)] = inst_37817);

(statearr_37995[(14)] = inst_37816);

(statearr_37995[(15)] = inst_37815);

(statearr_37995[(16)] = inst_37818);

return statearr_37995;
})();
var statearr_37996_38061 = state_37934__$1;
(statearr_37996_38061[(2)] = null);

(statearr_37996_38061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (14))){
var state_37934__$1 = state_37934;
var statearr_37997_38062 = state_37934__$1;
(statearr_37997_38062[(2)] = null);

(statearr_37997_38062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (45))){
var inst_37924 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_37998_38063 = state_37934__$1;
(statearr_37998_38063[(2)] = inst_37924);

(statearr_37998_38063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (26))){
var inst_37866 = (state_37934[(29)]);
var inst_37920 = (state_37934[(2)]);
var inst_37921 = cljs.core.seq.call(null,inst_37866);
var state_37934__$1 = (function (){var statearr_37999 = state_37934;
(statearr_37999[(31)] = inst_37920);

return statearr_37999;
})();
if(inst_37921){
var statearr_38000_38064 = state_37934__$1;
(statearr_38000_38064[(1)] = (42));

} else {
var statearr_38001_38065 = state_37934__$1;
(statearr_38001_38065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (16))){
var inst_37835 = (state_37934[(7)]);
var inst_37837 = cljs.core.chunked_seq_QMARK_.call(null,inst_37835);
var state_37934__$1 = state_37934;
if(inst_37837){
var statearr_38002_38066 = state_37934__$1;
(statearr_38002_38066[(1)] = (19));

} else {
var statearr_38003_38067 = state_37934__$1;
(statearr_38003_38067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (38))){
var inst_37913 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_38004_38068 = state_37934__$1;
(statearr_38004_38068[(2)] = inst_37913);

(statearr_38004_38068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (30))){
var state_37934__$1 = state_37934;
var statearr_38005_38069 = state_37934__$1;
(statearr_38005_38069[(2)] = null);

(statearr_38005_38069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (10))){
var inst_37816 = (state_37934[(14)]);
var inst_37818 = (state_37934[(16)]);
var inst_37824 = cljs.core._nth.call(null,inst_37816,inst_37818);
var inst_37825 = cljs.core.nth.call(null,inst_37824,(0),null);
var inst_37826 = cljs.core.nth.call(null,inst_37824,(1),null);
var state_37934__$1 = (function (){var statearr_38006 = state_37934;
(statearr_38006[(26)] = inst_37825);

return statearr_38006;
})();
if(cljs.core.truth_(inst_37826)){
var statearr_38007_38070 = state_37934__$1;
(statearr_38007_38070[(1)] = (13));

} else {
var statearr_38008_38071 = state_37934__$1;
(statearr_38008_38071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (18))){
var inst_37859 = (state_37934[(2)]);
var state_37934__$1 = state_37934;
var statearr_38009_38072 = state_37934__$1;
(statearr_38009_38072[(2)] = inst_37859);

(statearr_38009_38072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (42))){
var state_37934__$1 = state_37934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37934__$1,(45),dchan);
} else {
if((state_val_37935 === (37))){
var inst_37902 = (state_37934[(23)]);
var inst_37893 = (state_37934[(25)]);
var inst_37806 = (state_37934[(11)]);
var inst_37902__$1 = cljs.core.first.call(null,inst_37893);
var inst_37903 = cljs.core.async.put_BANG_.call(null,inst_37902__$1,inst_37806,done);
var state_37934__$1 = (function (){var statearr_38010 = state_37934;
(statearr_38010[(23)] = inst_37902__$1);

return statearr_38010;
})();
if(cljs.core.truth_(inst_37903)){
var statearr_38011_38073 = state_37934__$1;
(statearr_38011_38073[(1)] = (39));

} else {
var statearr_38012_38074 = state_37934__$1;
(statearr_38012_38074[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37935 === (8))){
var inst_37817 = (state_37934[(13)]);
var inst_37818 = (state_37934[(16)]);
var inst_37820 = (inst_37818 < inst_37817);
var inst_37821 = inst_37820;
var state_37934__$1 = state_37934;
if(cljs.core.truth_(inst_37821)){
var statearr_38013_38075 = state_37934__$1;
(statearr_38013_38075[(1)] = (10));

} else {
var statearr_38014_38076 = state_37934__$1;
(statearr_38014_38076[(1)] = (11));

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
});})(c__22243__auto___38022,cs,m,dchan,dctr,done))
;
return ((function (switch__22187__auto__,c__22243__auto___38022,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_38018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38018[(0)] = state_machine__22188__auto__);

(statearr_38018[(1)] = (1));

return statearr_38018;
});
var state_machine__22188__auto____1 = (function (state_37934){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_37934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e38019){if((e38019 instanceof Object)){
var ex__22191__auto__ = e38019;
var statearr_38020_38077 = state_37934;
(statearr_38020_38077[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38078 = state_37934;
state_37934 = G__38078;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_37934){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_37934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___38022,cs,m,dchan,dctr,done))
})();
var state__22245__auto__ = (function (){var statearr_38021 = f__22244__auto__.call(null);
(statearr_38021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___38022);

return statearr_38021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___38022,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj38080 = {};
return obj38080;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__38081){
var map__38086 = p__38081;
var map__38086__$1 = ((cljs.core.seq_QMARK_.call(null,map__38086))?cljs.core.apply.call(null,cljs.core.hash_map,map__38086):map__38086);
var opts = map__38086__$1;
var statearr_38087_38090 = state;
(statearr_38087_38090[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4406__auto__ = cljs.core.async.do_alts.call(null,((function (map__38086,map__38086__$1,opts){
return (function (val){
var statearr_38088_38091 = state;
(statearr_38088_38091[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38086,map__38086__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4406__auto__)){
var cb = temp__4406__auto__;
var statearr_38089_38092 = state;
(statearr_38089_38092[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__38081 = null;
if (arguments.length > 3) {
var G__38093__i = 0, G__38093__a = new Array(arguments.length -  3);
while (G__38093__i < G__38093__a.length) {G__38093__a[G__38093__i] = arguments[G__38093__i + 3]; ++G__38093__i;}
  p__38081 = new cljs.core.IndexedSeq(G__38093__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__38081);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__38094){
var state = cljs.core.first(arglist__38094);
arglist__38094 = cljs.core.next(arglist__38094);
var cont_block = cljs.core.first(arglist__38094);
arglist__38094 = cljs.core.next(arglist__38094);
var ports = cljs.core.first(arglist__38094);
var p__38081 = cljs.core.rest(arglist__38094);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__38081);
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
if(typeof cljs.core.async.t38214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38214 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38215){
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
this.meta38215 = meta38215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38214.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t38214.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t38214.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38216){
var self__ = this;
var _38216__$1 = this;
return self__.meta38215;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38216,meta38215__$1){
var self__ = this;
var _38216__$1 = this;
return (new cljs.core.async.t38214(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38215__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38214.cljs$lang$type = true;

cljs.core.async.t38214.cljs$lang$ctorStr = "cljs.core.async/t38214";

cljs.core.async.t38214.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t38214");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t38214 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38214(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38215){
return (new cljs.core.async.t38214(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38215));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t38214(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22243__auto___38333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___38333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___38333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38286){
var state_val_38287 = (state_38286[(1)]);
if((state_val_38287 === (7))){
var inst_38230 = (state_38286[(7)]);
var inst_38235 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38230);
var state_38286__$1 = state_38286;
var statearr_38288_38334 = state_38286__$1;
(statearr_38288_38334[(2)] = inst_38235);

(statearr_38288_38334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (20))){
var inst_38245 = (state_38286[(8)]);
var state_38286__$1 = state_38286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38286__$1,(23),out,inst_38245);
} else {
if((state_val_38287 === (1))){
var inst_38220 = (state_38286[(9)]);
var inst_38220__$1 = calc_state.call(null);
var inst_38221 = cljs.core.seq_QMARK_.call(null,inst_38220__$1);
var state_38286__$1 = (function (){var statearr_38289 = state_38286;
(statearr_38289[(9)] = inst_38220__$1);

return statearr_38289;
})();
if(inst_38221){
var statearr_38290_38335 = state_38286__$1;
(statearr_38290_38335[(1)] = (2));

} else {
var statearr_38291_38336 = state_38286__$1;
(statearr_38291_38336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (24))){
var inst_38238 = (state_38286[(10)]);
var inst_38230 = inst_38238;
var state_38286__$1 = (function (){var statearr_38292 = state_38286;
(statearr_38292[(7)] = inst_38230);

return statearr_38292;
})();
var statearr_38293_38337 = state_38286__$1;
(statearr_38293_38337[(2)] = null);

(statearr_38293_38337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (4))){
var inst_38220 = (state_38286[(9)]);
var inst_38226 = (state_38286[(2)]);
var inst_38227 = cljs.core.get.call(null,inst_38226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38228 = cljs.core.get.call(null,inst_38226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38229 = cljs.core.get.call(null,inst_38226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38230 = inst_38220;
var state_38286__$1 = (function (){var statearr_38294 = state_38286;
(statearr_38294[(11)] = inst_38228);

(statearr_38294[(12)] = inst_38227);

(statearr_38294[(13)] = inst_38229);

(statearr_38294[(7)] = inst_38230);

return statearr_38294;
})();
var statearr_38295_38338 = state_38286__$1;
(statearr_38295_38338[(2)] = null);

(statearr_38295_38338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (15))){
var state_38286__$1 = state_38286;
var statearr_38296_38339 = state_38286__$1;
(statearr_38296_38339[(2)] = null);

(statearr_38296_38339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (21))){
var inst_38238 = (state_38286[(10)]);
var inst_38230 = inst_38238;
var state_38286__$1 = (function (){var statearr_38297 = state_38286;
(statearr_38297[(7)] = inst_38230);

return statearr_38297;
})();
var statearr_38298_38340 = state_38286__$1;
(statearr_38298_38340[(2)] = null);

(statearr_38298_38340[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (13))){
var inst_38282 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
var statearr_38299_38341 = state_38286__$1;
(statearr_38299_38341[(2)] = inst_38282);

(statearr_38299_38341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (22))){
var inst_38280 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
var statearr_38300_38342 = state_38286__$1;
(statearr_38300_38342[(2)] = inst_38280);

(statearr_38300_38342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (6))){
var inst_38284 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38286__$1,inst_38284);
} else {
if((state_val_38287 === (25))){
var state_38286__$1 = state_38286;
var statearr_38301_38343 = state_38286__$1;
(statearr_38301_38343[(2)] = null);

(statearr_38301_38343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (17))){
var inst_38260 = (state_38286[(14)]);
var state_38286__$1 = state_38286;
var statearr_38302_38344 = state_38286__$1;
(statearr_38302_38344[(2)] = inst_38260);

(statearr_38302_38344[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (3))){
var inst_38220 = (state_38286[(9)]);
var state_38286__$1 = state_38286;
var statearr_38303_38345 = state_38286__$1;
(statearr_38303_38345[(2)] = inst_38220);

(statearr_38303_38345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (12))){
var inst_38260 = (state_38286[(14)]);
var inst_38241 = (state_38286[(15)]);
var inst_38246 = (state_38286[(16)]);
var inst_38260__$1 = inst_38241.call(null,inst_38246);
var state_38286__$1 = (function (){var statearr_38304 = state_38286;
(statearr_38304[(14)] = inst_38260__$1);

return statearr_38304;
})();
if(cljs.core.truth_(inst_38260__$1)){
var statearr_38305_38346 = state_38286__$1;
(statearr_38305_38346[(1)] = (17));

} else {
var statearr_38306_38347 = state_38286__$1;
(statearr_38306_38347[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (2))){
var inst_38220 = (state_38286[(9)]);
var inst_38223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38220);
var state_38286__$1 = state_38286;
var statearr_38307_38348 = state_38286__$1;
(statearr_38307_38348[(2)] = inst_38223);

(statearr_38307_38348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (23))){
var inst_38271 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
if(cljs.core.truth_(inst_38271)){
var statearr_38308_38349 = state_38286__$1;
(statearr_38308_38349[(1)] = (24));

} else {
var statearr_38309_38350 = state_38286__$1;
(statearr_38309_38350[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (19))){
var inst_38268 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
if(cljs.core.truth_(inst_38268)){
var statearr_38310_38351 = state_38286__$1;
(statearr_38310_38351[(1)] = (20));

} else {
var statearr_38311_38352 = state_38286__$1;
(statearr_38311_38352[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (11))){
var inst_38245 = (state_38286[(8)]);
var inst_38251 = (inst_38245 == null);
var state_38286__$1 = state_38286;
if(cljs.core.truth_(inst_38251)){
var statearr_38312_38353 = state_38286__$1;
(statearr_38312_38353[(1)] = (14));

} else {
var statearr_38313_38354 = state_38286__$1;
(statearr_38313_38354[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (9))){
var inst_38238 = (state_38286[(10)]);
var inst_38238__$1 = (state_38286[(2)]);
var inst_38239 = cljs.core.get.call(null,inst_38238__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38240 = cljs.core.get.call(null,inst_38238__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38241 = cljs.core.get.call(null,inst_38238__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_38286__$1 = (function (){var statearr_38314 = state_38286;
(statearr_38314[(10)] = inst_38238__$1);

(statearr_38314[(17)] = inst_38240);

(statearr_38314[(15)] = inst_38241);

return statearr_38314;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38286__$1,(10),inst_38239);
} else {
if((state_val_38287 === (5))){
var inst_38230 = (state_38286[(7)]);
var inst_38233 = cljs.core.seq_QMARK_.call(null,inst_38230);
var state_38286__$1 = state_38286;
if(inst_38233){
var statearr_38315_38355 = state_38286__$1;
(statearr_38315_38355[(1)] = (7));

} else {
var statearr_38316_38356 = state_38286__$1;
(statearr_38316_38356[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (14))){
var inst_38246 = (state_38286[(16)]);
var inst_38253 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38246);
var state_38286__$1 = state_38286;
var statearr_38317_38357 = state_38286__$1;
(statearr_38317_38357[(2)] = inst_38253);

(statearr_38317_38357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (26))){
var inst_38276 = (state_38286[(2)]);
var state_38286__$1 = state_38286;
var statearr_38318_38358 = state_38286__$1;
(statearr_38318_38358[(2)] = inst_38276);

(statearr_38318_38358[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (16))){
var inst_38256 = (state_38286[(2)]);
var inst_38257 = calc_state.call(null);
var inst_38230 = inst_38257;
var state_38286__$1 = (function (){var statearr_38319 = state_38286;
(statearr_38319[(18)] = inst_38256);

(statearr_38319[(7)] = inst_38230);

return statearr_38319;
})();
var statearr_38320_38359 = state_38286__$1;
(statearr_38320_38359[(2)] = null);

(statearr_38320_38359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (10))){
var inst_38245 = (state_38286[(8)]);
var inst_38246 = (state_38286[(16)]);
var inst_38244 = (state_38286[(2)]);
var inst_38245__$1 = cljs.core.nth.call(null,inst_38244,(0),null);
var inst_38246__$1 = cljs.core.nth.call(null,inst_38244,(1),null);
var inst_38247 = (inst_38245__$1 == null);
var inst_38248 = cljs.core._EQ_.call(null,inst_38246__$1,change);
var inst_38249 = (inst_38247) || (inst_38248);
var state_38286__$1 = (function (){var statearr_38321 = state_38286;
(statearr_38321[(8)] = inst_38245__$1);

(statearr_38321[(16)] = inst_38246__$1);

return statearr_38321;
})();
if(cljs.core.truth_(inst_38249)){
var statearr_38322_38360 = state_38286__$1;
(statearr_38322_38360[(1)] = (11));

} else {
var statearr_38323_38361 = state_38286__$1;
(statearr_38323_38361[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (18))){
var inst_38240 = (state_38286[(17)]);
var inst_38241 = (state_38286[(15)]);
var inst_38246 = (state_38286[(16)]);
var inst_38263 = cljs.core.empty_QMARK_.call(null,inst_38241);
var inst_38264 = inst_38240.call(null,inst_38246);
var inst_38265 = cljs.core.not.call(null,inst_38264);
var inst_38266 = (inst_38263) && (inst_38265);
var state_38286__$1 = state_38286;
var statearr_38324_38362 = state_38286__$1;
(statearr_38324_38362[(2)] = inst_38266);

(statearr_38324_38362[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38287 === (8))){
var inst_38230 = (state_38286[(7)]);
var state_38286__$1 = state_38286;
var statearr_38325_38363 = state_38286__$1;
(statearr_38325_38363[(2)] = inst_38230);

(statearr_38325_38363[(1)] = (9));


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
});})(c__22243__auto___38333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22187__auto__,c__22243__auto___38333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_38329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38329[(0)] = state_machine__22188__auto__);

(statearr_38329[(1)] = (1));

return statearr_38329;
});
var state_machine__22188__auto____1 = (function (state_38286){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_38286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e38330){if((e38330 instanceof Object)){
var ex__22191__auto__ = e38330;
var statearr_38331_38364 = state_38286;
(statearr_38331_38364[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38365 = state_38286;
state_38286 = G__38365;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_38286){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_38286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___38333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22245__auto__ = (function (){var statearr_38332 = f__22244__auto__.call(null);
(statearr_38332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___38333);

return statearr_38332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___38333,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj38367 = {};
return obj38367;
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
return (function (p1__38368_SHARP_){
if(cljs.core.truth_(p1__38368_SHARP_.call(null,topic))){
return p1__38368_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38368_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14444__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t38491 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38491 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38492){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38492 = meta38492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38491.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t38491.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t38491.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t38491.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t38491.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t38491.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t38491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38493){
var self__ = this;
var _38493__$1 = this;
return self__.meta38492;
});})(mults,ensure_mult))
;

cljs.core.async.t38491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38493,meta38492__$1){
var self__ = this;
var _38493__$1 = this;
return (new cljs.core.async.t38491(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38492__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t38491.cljs$lang$type = true;

cljs.core.async.t38491.cljs$lang$ctorStr = "cljs.core.async/t38491";

cljs.core.async.t38491.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t38491");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t38491 = ((function (mults,ensure_mult){
return (function __GT_t38491(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38492){
return (new cljs.core.async.t38491(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38492));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t38491(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22243__auto___38613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___38613,mults,ensure_mult,p){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___38613,mults,ensure_mult,p){
return (function (state_38565){
var state_val_38566 = (state_38565[(1)]);
if((state_val_38566 === (7))){
var inst_38561 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38567_38614 = state_38565__$1;
(statearr_38567_38614[(2)] = inst_38561);

(statearr_38567_38614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (20))){
var state_38565__$1 = state_38565;
var statearr_38568_38615 = state_38565__$1;
(statearr_38568_38615[(2)] = null);

(statearr_38568_38615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (1))){
var state_38565__$1 = state_38565;
var statearr_38569_38616 = state_38565__$1;
(statearr_38569_38616[(2)] = null);

(statearr_38569_38616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (24))){
var inst_38544 = (state_38565[(7)]);
var inst_38553 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38544);
var state_38565__$1 = state_38565;
var statearr_38570_38617 = state_38565__$1;
(statearr_38570_38617[(2)] = inst_38553);

(statearr_38570_38617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (4))){
var inst_38496 = (state_38565[(8)]);
var inst_38496__$1 = (state_38565[(2)]);
var inst_38497 = (inst_38496__$1 == null);
var state_38565__$1 = (function (){var statearr_38571 = state_38565;
(statearr_38571[(8)] = inst_38496__$1);

return statearr_38571;
})();
if(cljs.core.truth_(inst_38497)){
var statearr_38572_38618 = state_38565__$1;
(statearr_38572_38618[(1)] = (5));

} else {
var statearr_38573_38619 = state_38565__$1;
(statearr_38573_38619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (15))){
var inst_38538 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38574_38620 = state_38565__$1;
(statearr_38574_38620[(2)] = inst_38538);

(statearr_38574_38620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (21))){
var inst_38558 = (state_38565[(2)]);
var state_38565__$1 = (function (){var statearr_38575 = state_38565;
(statearr_38575[(9)] = inst_38558);

return statearr_38575;
})();
var statearr_38576_38621 = state_38565__$1;
(statearr_38576_38621[(2)] = null);

(statearr_38576_38621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (13))){
var inst_38520 = (state_38565[(10)]);
var inst_38522 = cljs.core.chunked_seq_QMARK_.call(null,inst_38520);
var state_38565__$1 = state_38565;
if(inst_38522){
var statearr_38577_38622 = state_38565__$1;
(statearr_38577_38622[(1)] = (16));

} else {
var statearr_38578_38623 = state_38565__$1;
(statearr_38578_38623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (22))){
var inst_38550 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
if(cljs.core.truth_(inst_38550)){
var statearr_38579_38624 = state_38565__$1;
(statearr_38579_38624[(1)] = (23));

} else {
var statearr_38580_38625 = state_38565__$1;
(statearr_38580_38625[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (6))){
var inst_38546 = (state_38565[(11)]);
var inst_38496 = (state_38565[(8)]);
var inst_38544 = (state_38565[(7)]);
var inst_38544__$1 = topic_fn.call(null,inst_38496);
var inst_38545 = cljs.core.deref.call(null,mults);
var inst_38546__$1 = cljs.core.get.call(null,inst_38545,inst_38544__$1);
var state_38565__$1 = (function (){var statearr_38581 = state_38565;
(statearr_38581[(11)] = inst_38546__$1);

(statearr_38581[(7)] = inst_38544__$1);

return statearr_38581;
})();
if(cljs.core.truth_(inst_38546__$1)){
var statearr_38582_38626 = state_38565__$1;
(statearr_38582_38626[(1)] = (19));

} else {
var statearr_38583_38627 = state_38565__$1;
(statearr_38583_38627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (25))){
var inst_38555 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38584_38628 = state_38565__$1;
(statearr_38584_38628[(2)] = inst_38555);

(statearr_38584_38628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (17))){
var inst_38520 = (state_38565[(10)]);
var inst_38529 = cljs.core.first.call(null,inst_38520);
var inst_38530 = cljs.core.async.muxch_STAR_.call(null,inst_38529);
var inst_38531 = cljs.core.async.close_BANG_.call(null,inst_38530);
var inst_38532 = cljs.core.next.call(null,inst_38520);
var inst_38506 = inst_38532;
var inst_38507 = null;
var inst_38508 = (0);
var inst_38509 = (0);
var state_38565__$1 = (function (){var statearr_38585 = state_38565;
(statearr_38585[(12)] = inst_38506);

(statearr_38585[(13)] = inst_38507);

(statearr_38585[(14)] = inst_38531);

(statearr_38585[(15)] = inst_38509);

(statearr_38585[(16)] = inst_38508);

return statearr_38585;
})();
var statearr_38586_38629 = state_38565__$1;
(statearr_38586_38629[(2)] = null);

(statearr_38586_38629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (3))){
var inst_38563 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38565__$1,inst_38563);
} else {
if((state_val_38566 === (12))){
var inst_38540 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38587_38630 = state_38565__$1;
(statearr_38587_38630[(2)] = inst_38540);

(statearr_38587_38630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (2))){
var state_38565__$1 = state_38565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38565__$1,(4),ch);
} else {
if((state_val_38566 === (23))){
var state_38565__$1 = state_38565;
var statearr_38588_38631 = state_38565__$1;
(statearr_38588_38631[(2)] = null);

(statearr_38588_38631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (19))){
var inst_38546 = (state_38565[(11)]);
var inst_38496 = (state_38565[(8)]);
var inst_38548 = cljs.core.async.muxch_STAR_.call(null,inst_38546);
var state_38565__$1 = state_38565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38565__$1,(22),inst_38548,inst_38496);
} else {
if((state_val_38566 === (11))){
var inst_38520 = (state_38565[(10)]);
var inst_38506 = (state_38565[(12)]);
var inst_38520__$1 = cljs.core.seq.call(null,inst_38506);
var state_38565__$1 = (function (){var statearr_38589 = state_38565;
(statearr_38589[(10)] = inst_38520__$1);

return statearr_38589;
})();
if(inst_38520__$1){
var statearr_38590_38632 = state_38565__$1;
(statearr_38590_38632[(1)] = (13));

} else {
var statearr_38591_38633 = state_38565__$1;
(statearr_38591_38633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (9))){
var inst_38542 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38592_38634 = state_38565__$1;
(statearr_38592_38634[(2)] = inst_38542);

(statearr_38592_38634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (5))){
var inst_38503 = cljs.core.deref.call(null,mults);
var inst_38504 = cljs.core.vals.call(null,inst_38503);
var inst_38505 = cljs.core.seq.call(null,inst_38504);
var inst_38506 = inst_38505;
var inst_38507 = null;
var inst_38508 = (0);
var inst_38509 = (0);
var state_38565__$1 = (function (){var statearr_38593 = state_38565;
(statearr_38593[(12)] = inst_38506);

(statearr_38593[(13)] = inst_38507);

(statearr_38593[(15)] = inst_38509);

(statearr_38593[(16)] = inst_38508);

return statearr_38593;
})();
var statearr_38594_38635 = state_38565__$1;
(statearr_38594_38635[(2)] = null);

(statearr_38594_38635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (14))){
var state_38565__$1 = state_38565;
var statearr_38598_38636 = state_38565__$1;
(statearr_38598_38636[(2)] = null);

(statearr_38598_38636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (16))){
var inst_38520 = (state_38565[(10)]);
var inst_38524 = cljs.core.chunk_first.call(null,inst_38520);
var inst_38525 = cljs.core.chunk_rest.call(null,inst_38520);
var inst_38526 = cljs.core.count.call(null,inst_38524);
var inst_38506 = inst_38525;
var inst_38507 = inst_38524;
var inst_38508 = inst_38526;
var inst_38509 = (0);
var state_38565__$1 = (function (){var statearr_38599 = state_38565;
(statearr_38599[(12)] = inst_38506);

(statearr_38599[(13)] = inst_38507);

(statearr_38599[(15)] = inst_38509);

(statearr_38599[(16)] = inst_38508);

return statearr_38599;
})();
var statearr_38600_38637 = state_38565__$1;
(statearr_38600_38637[(2)] = null);

(statearr_38600_38637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (10))){
var inst_38506 = (state_38565[(12)]);
var inst_38507 = (state_38565[(13)]);
var inst_38509 = (state_38565[(15)]);
var inst_38508 = (state_38565[(16)]);
var inst_38514 = cljs.core._nth.call(null,inst_38507,inst_38509);
var inst_38515 = cljs.core.async.muxch_STAR_.call(null,inst_38514);
var inst_38516 = cljs.core.async.close_BANG_.call(null,inst_38515);
var inst_38517 = (inst_38509 + (1));
var tmp38595 = inst_38506;
var tmp38596 = inst_38507;
var tmp38597 = inst_38508;
var inst_38506__$1 = tmp38595;
var inst_38507__$1 = tmp38596;
var inst_38508__$1 = tmp38597;
var inst_38509__$1 = inst_38517;
var state_38565__$1 = (function (){var statearr_38601 = state_38565;
(statearr_38601[(12)] = inst_38506__$1);

(statearr_38601[(13)] = inst_38507__$1);

(statearr_38601[(15)] = inst_38509__$1);

(statearr_38601[(16)] = inst_38508__$1);

(statearr_38601[(17)] = inst_38516);

return statearr_38601;
})();
var statearr_38602_38638 = state_38565__$1;
(statearr_38602_38638[(2)] = null);

(statearr_38602_38638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (18))){
var inst_38535 = (state_38565[(2)]);
var state_38565__$1 = state_38565;
var statearr_38603_38639 = state_38565__$1;
(statearr_38603_38639[(2)] = inst_38535);

(statearr_38603_38639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38566 === (8))){
var inst_38509 = (state_38565[(15)]);
var inst_38508 = (state_38565[(16)]);
var inst_38511 = (inst_38509 < inst_38508);
var inst_38512 = inst_38511;
var state_38565__$1 = state_38565;
if(cljs.core.truth_(inst_38512)){
var statearr_38604_38640 = state_38565__$1;
(statearr_38604_38640[(1)] = (10));

} else {
var statearr_38605_38641 = state_38565__$1;
(statearr_38605_38641[(1)] = (11));

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
});})(c__22243__auto___38613,mults,ensure_mult,p))
;
return ((function (switch__22187__auto__,c__22243__auto___38613,mults,ensure_mult,p){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_38609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38609[(0)] = state_machine__22188__auto__);

(statearr_38609[(1)] = (1));

return statearr_38609;
});
var state_machine__22188__auto____1 = (function (state_38565){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_38565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e38610){if((e38610 instanceof Object)){
var ex__22191__auto__ = e38610;
var statearr_38611_38642 = state_38565;
(statearr_38611_38642[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38643 = state_38565;
state_38565 = G__38643;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_38565){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_38565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___38613,mults,ensure_mult,p))
})();
var state__22245__auto__ = (function (){var statearr_38612 = f__22244__auto__.call(null);
(statearr_38612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___38613);

return statearr_38612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___38613,mults,ensure_mult,p))
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
var c__22243__auto___38780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___38780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___38780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38750){
var state_val_38751 = (state_38750[(1)]);
if((state_val_38751 === (7))){
var state_38750__$1 = state_38750;
var statearr_38752_38781 = state_38750__$1;
(statearr_38752_38781[(2)] = null);

(statearr_38752_38781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (1))){
var state_38750__$1 = state_38750;
var statearr_38753_38782 = state_38750__$1;
(statearr_38753_38782[(2)] = null);

(statearr_38753_38782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (4))){
var inst_38714 = (state_38750[(7)]);
var inst_38716 = (inst_38714 < cnt);
var state_38750__$1 = state_38750;
if(cljs.core.truth_(inst_38716)){
var statearr_38754_38783 = state_38750__$1;
(statearr_38754_38783[(1)] = (6));

} else {
var statearr_38755_38784 = state_38750__$1;
(statearr_38755_38784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (15))){
var inst_38746 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
var statearr_38756_38785 = state_38750__$1;
(statearr_38756_38785[(2)] = inst_38746);

(statearr_38756_38785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (13))){
var inst_38739 = cljs.core.async.close_BANG_.call(null,out);
var state_38750__$1 = state_38750;
var statearr_38757_38786 = state_38750__$1;
(statearr_38757_38786[(2)] = inst_38739);

(statearr_38757_38786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (6))){
var state_38750__$1 = state_38750;
var statearr_38758_38787 = state_38750__$1;
(statearr_38758_38787[(2)] = null);

(statearr_38758_38787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (3))){
var inst_38748 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38750__$1,inst_38748);
} else {
if((state_val_38751 === (12))){
var inst_38736 = (state_38750[(8)]);
var inst_38736__$1 = (state_38750[(2)]);
var inst_38737 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38736__$1);
var state_38750__$1 = (function (){var statearr_38759 = state_38750;
(statearr_38759[(8)] = inst_38736__$1);

return statearr_38759;
})();
if(cljs.core.truth_(inst_38737)){
var statearr_38760_38788 = state_38750__$1;
(statearr_38760_38788[(1)] = (13));

} else {
var statearr_38761_38789 = state_38750__$1;
(statearr_38761_38789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (2))){
var inst_38713 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38714 = (0);
var state_38750__$1 = (function (){var statearr_38762 = state_38750;
(statearr_38762[(7)] = inst_38714);

(statearr_38762[(9)] = inst_38713);

return statearr_38762;
})();
var statearr_38763_38790 = state_38750__$1;
(statearr_38763_38790[(2)] = null);

(statearr_38763_38790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (11))){
var inst_38714 = (state_38750[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38750,(10),Object,null,(9));
var inst_38723 = chs__$1.call(null,inst_38714);
var inst_38724 = done.call(null,inst_38714);
var inst_38725 = cljs.core.async.take_BANG_.call(null,inst_38723,inst_38724);
var state_38750__$1 = state_38750;
var statearr_38764_38791 = state_38750__$1;
(statearr_38764_38791[(2)] = inst_38725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (9))){
var inst_38714 = (state_38750[(7)]);
var inst_38727 = (state_38750[(2)]);
var inst_38728 = (inst_38714 + (1));
var inst_38714__$1 = inst_38728;
var state_38750__$1 = (function (){var statearr_38765 = state_38750;
(statearr_38765[(10)] = inst_38727);

(statearr_38765[(7)] = inst_38714__$1);

return statearr_38765;
})();
var statearr_38766_38792 = state_38750__$1;
(statearr_38766_38792[(2)] = null);

(statearr_38766_38792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (5))){
var inst_38734 = (state_38750[(2)]);
var state_38750__$1 = (function (){var statearr_38767 = state_38750;
(statearr_38767[(11)] = inst_38734);

return statearr_38767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38750__$1,(12),dchan);
} else {
if((state_val_38751 === (14))){
var inst_38736 = (state_38750[(8)]);
var inst_38741 = cljs.core.apply.call(null,f,inst_38736);
var state_38750__$1 = state_38750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38750__$1,(16),out,inst_38741);
} else {
if((state_val_38751 === (16))){
var inst_38743 = (state_38750[(2)]);
var state_38750__$1 = (function (){var statearr_38768 = state_38750;
(statearr_38768[(12)] = inst_38743);

return statearr_38768;
})();
var statearr_38769_38793 = state_38750__$1;
(statearr_38769_38793[(2)] = null);

(statearr_38769_38793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (10))){
var inst_38718 = (state_38750[(2)]);
var inst_38719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38750__$1 = (function (){var statearr_38770 = state_38750;
(statearr_38770[(13)] = inst_38718);

return statearr_38770;
})();
var statearr_38771_38794 = state_38750__$1;
(statearr_38771_38794[(2)] = inst_38719);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (8))){
var inst_38732 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
var statearr_38772_38795 = state_38750__$1;
(statearr_38772_38795[(2)] = inst_38732);

(statearr_38772_38795[(1)] = (5));


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
});})(c__22243__auto___38780,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22187__auto__,c__22243__auto___38780,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_38776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38776[(0)] = state_machine__22188__auto__);

(statearr_38776[(1)] = (1));

return statearr_38776;
});
var state_machine__22188__auto____1 = (function (state_38750){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_38750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e38777){if((e38777 instanceof Object)){
var ex__22191__auto__ = e38777;
var statearr_38778_38796 = state_38750;
(statearr_38778_38796[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38797 = state_38750;
state_38750 = G__38797;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_38750){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_38750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___38780,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22245__auto__ = (function (){var statearr_38779 = f__22244__auto__.call(null);
(statearr_38779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___38780);

return statearr_38779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___38780,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__22243__auto___38905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___38905,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___38905,out){
return (function (state_38881){
var state_val_38882 = (state_38881[(1)]);
if((state_val_38882 === (7))){
var inst_38861 = (state_38881[(7)]);
var inst_38860 = (state_38881[(8)]);
var inst_38860__$1 = (state_38881[(2)]);
var inst_38861__$1 = cljs.core.nth.call(null,inst_38860__$1,(0),null);
var inst_38862 = cljs.core.nth.call(null,inst_38860__$1,(1),null);
var inst_38863 = (inst_38861__$1 == null);
var state_38881__$1 = (function (){var statearr_38883 = state_38881;
(statearr_38883[(7)] = inst_38861__$1);

(statearr_38883[(8)] = inst_38860__$1);

(statearr_38883[(9)] = inst_38862);

return statearr_38883;
})();
if(cljs.core.truth_(inst_38863)){
var statearr_38884_38906 = state_38881__$1;
(statearr_38884_38906[(1)] = (8));

} else {
var statearr_38885_38907 = state_38881__$1;
(statearr_38885_38907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (1))){
var inst_38852 = cljs.core.vec.call(null,chs);
var inst_38853 = inst_38852;
var state_38881__$1 = (function (){var statearr_38886 = state_38881;
(statearr_38886[(10)] = inst_38853);

return statearr_38886;
})();
var statearr_38887_38908 = state_38881__$1;
(statearr_38887_38908[(2)] = null);

(statearr_38887_38908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (4))){
var inst_38853 = (state_38881[(10)]);
var state_38881__$1 = state_38881;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38881__$1,(7),inst_38853);
} else {
if((state_val_38882 === (6))){
var inst_38877 = (state_38881[(2)]);
var state_38881__$1 = state_38881;
var statearr_38888_38909 = state_38881__$1;
(statearr_38888_38909[(2)] = inst_38877);

(statearr_38888_38909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (3))){
var inst_38879 = (state_38881[(2)]);
var state_38881__$1 = state_38881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38881__$1,inst_38879);
} else {
if((state_val_38882 === (2))){
var inst_38853 = (state_38881[(10)]);
var inst_38855 = cljs.core.count.call(null,inst_38853);
var inst_38856 = (inst_38855 > (0));
var state_38881__$1 = state_38881;
if(cljs.core.truth_(inst_38856)){
var statearr_38890_38910 = state_38881__$1;
(statearr_38890_38910[(1)] = (4));

} else {
var statearr_38891_38911 = state_38881__$1;
(statearr_38891_38911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (11))){
var inst_38853 = (state_38881[(10)]);
var inst_38870 = (state_38881[(2)]);
var tmp38889 = inst_38853;
var inst_38853__$1 = tmp38889;
var state_38881__$1 = (function (){var statearr_38892 = state_38881;
(statearr_38892[(11)] = inst_38870);

(statearr_38892[(10)] = inst_38853__$1);

return statearr_38892;
})();
var statearr_38893_38912 = state_38881__$1;
(statearr_38893_38912[(2)] = null);

(statearr_38893_38912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (9))){
var inst_38861 = (state_38881[(7)]);
var state_38881__$1 = state_38881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38881__$1,(11),out,inst_38861);
} else {
if((state_val_38882 === (5))){
var inst_38875 = cljs.core.async.close_BANG_.call(null,out);
var state_38881__$1 = state_38881;
var statearr_38894_38913 = state_38881__$1;
(statearr_38894_38913[(2)] = inst_38875);

(statearr_38894_38913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (10))){
var inst_38873 = (state_38881[(2)]);
var state_38881__$1 = state_38881;
var statearr_38895_38914 = state_38881__$1;
(statearr_38895_38914[(2)] = inst_38873);

(statearr_38895_38914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38882 === (8))){
var inst_38861 = (state_38881[(7)]);
var inst_38860 = (state_38881[(8)]);
var inst_38862 = (state_38881[(9)]);
var inst_38853 = (state_38881[(10)]);
var inst_38865 = (function (){var c = inst_38862;
var v = inst_38861;
var vec__38858 = inst_38860;
var cs = inst_38853;
return ((function (c,v,vec__38858,cs,inst_38861,inst_38860,inst_38862,inst_38853,state_val_38882,c__22243__auto___38905,out){
return (function (p1__38798_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38798_SHARP_);
});
;})(c,v,vec__38858,cs,inst_38861,inst_38860,inst_38862,inst_38853,state_val_38882,c__22243__auto___38905,out))
})();
var inst_38866 = cljs.core.filterv.call(null,inst_38865,inst_38853);
var inst_38853__$1 = inst_38866;
var state_38881__$1 = (function (){var statearr_38896 = state_38881;
(statearr_38896[(10)] = inst_38853__$1);

return statearr_38896;
})();
var statearr_38897_38915 = state_38881__$1;
(statearr_38897_38915[(2)] = null);

(statearr_38897_38915[(1)] = (2));


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
});})(c__22243__auto___38905,out))
;
return ((function (switch__22187__auto__,c__22243__auto___38905,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_38901 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38901[(0)] = state_machine__22188__auto__);

(statearr_38901[(1)] = (1));

return statearr_38901;
});
var state_machine__22188__auto____1 = (function (state_38881){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_38881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e38902){if((e38902 instanceof Object)){
var ex__22191__auto__ = e38902;
var statearr_38903_38916 = state_38881;
(statearr_38903_38916[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38917 = state_38881;
state_38881 = G__38917;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_38881){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_38881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___38905,out))
})();
var state__22245__auto__ = (function (){var statearr_38904 = f__22244__auto__.call(null);
(statearr_38904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___38905);

return statearr_38904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___38905,out))
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
var c__22243__auto___39010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___39010,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___39010,out){
return (function (state_38987){
var state_val_38988 = (state_38987[(1)]);
if((state_val_38988 === (7))){
var inst_38969 = (state_38987[(7)]);
var inst_38969__$1 = (state_38987[(2)]);
var inst_38970 = (inst_38969__$1 == null);
var inst_38971 = cljs.core.not.call(null,inst_38970);
var state_38987__$1 = (function (){var statearr_38989 = state_38987;
(statearr_38989[(7)] = inst_38969__$1);

return statearr_38989;
})();
if(inst_38971){
var statearr_38990_39011 = state_38987__$1;
(statearr_38990_39011[(1)] = (8));

} else {
var statearr_38991_39012 = state_38987__$1;
(statearr_38991_39012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (1))){
var inst_38964 = (0);
var state_38987__$1 = (function (){var statearr_38992 = state_38987;
(statearr_38992[(8)] = inst_38964);

return statearr_38992;
})();
var statearr_38993_39013 = state_38987__$1;
(statearr_38993_39013[(2)] = null);

(statearr_38993_39013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (4))){
var state_38987__$1 = state_38987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38987__$1,(7),ch);
} else {
if((state_val_38988 === (6))){
var inst_38982 = (state_38987[(2)]);
var state_38987__$1 = state_38987;
var statearr_38994_39014 = state_38987__$1;
(statearr_38994_39014[(2)] = inst_38982);

(statearr_38994_39014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (3))){
var inst_38984 = (state_38987[(2)]);
var inst_38985 = cljs.core.async.close_BANG_.call(null,out);
var state_38987__$1 = (function (){var statearr_38995 = state_38987;
(statearr_38995[(9)] = inst_38984);

return statearr_38995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38987__$1,inst_38985);
} else {
if((state_val_38988 === (2))){
var inst_38964 = (state_38987[(8)]);
var inst_38966 = (inst_38964 < n);
var state_38987__$1 = state_38987;
if(cljs.core.truth_(inst_38966)){
var statearr_38996_39015 = state_38987__$1;
(statearr_38996_39015[(1)] = (4));

} else {
var statearr_38997_39016 = state_38987__$1;
(statearr_38997_39016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (11))){
var inst_38964 = (state_38987[(8)]);
var inst_38974 = (state_38987[(2)]);
var inst_38975 = (inst_38964 + (1));
var inst_38964__$1 = inst_38975;
var state_38987__$1 = (function (){var statearr_38998 = state_38987;
(statearr_38998[(10)] = inst_38974);

(statearr_38998[(8)] = inst_38964__$1);

return statearr_38998;
})();
var statearr_38999_39017 = state_38987__$1;
(statearr_38999_39017[(2)] = null);

(statearr_38999_39017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (9))){
var state_38987__$1 = state_38987;
var statearr_39000_39018 = state_38987__$1;
(statearr_39000_39018[(2)] = null);

(statearr_39000_39018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (5))){
var state_38987__$1 = state_38987;
var statearr_39001_39019 = state_38987__$1;
(statearr_39001_39019[(2)] = null);

(statearr_39001_39019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (10))){
var inst_38979 = (state_38987[(2)]);
var state_38987__$1 = state_38987;
var statearr_39002_39020 = state_38987__$1;
(statearr_39002_39020[(2)] = inst_38979);

(statearr_39002_39020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38988 === (8))){
var inst_38969 = (state_38987[(7)]);
var state_38987__$1 = state_38987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38987__$1,(11),out,inst_38969);
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
});})(c__22243__auto___39010,out))
;
return ((function (switch__22187__auto__,c__22243__auto___39010,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_39006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39006[(0)] = state_machine__22188__auto__);

(statearr_39006[(1)] = (1));

return statearr_39006;
});
var state_machine__22188__auto____1 = (function (state_38987){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_38987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e39007){if((e39007 instanceof Object)){
var ex__22191__auto__ = e39007;
var statearr_39008_39021 = state_38987;
(statearr_39008_39021[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_38987;
state_38987 = G__39022;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_38987){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_38987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___39010,out))
})();
var state__22245__auto__ = (function (){var statearr_39009 = f__22244__auto__.call(null);
(statearr_39009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___39010);

return statearr_39009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___39010,out))
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
if(typeof cljs.core.async.t39030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39030 = (function (ch,f,map_LT_,meta39031){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39031 = meta39031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t39033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39033 = (function (fn1,_,meta39031,map_LT_,f,ch,meta39034){
this.fn1 = fn1;
this._ = _;
this.meta39031 = meta39031;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39034 = meta39034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t39033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39023_SHARP_){
return f1.call(null,(((p1__39023_SHARP_ == null))?null:self__.f.call(null,p1__39023_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t39033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39035){
var self__ = this;
var _39035__$1 = this;
return self__.meta39034;
});})(___$1))
;

cljs.core.async.t39033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39035,meta39034__$1){
var self__ = this;
var _39035__$1 = this;
return (new cljs.core.async.t39033(self__.fn1,self__._,self__.meta39031,self__.map_LT_,self__.f,self__.ch,meta39034__$1));
});})(___$1))
;

cljs.core.async.t39033.cljs$lang$type = true;

cljs.core.async.t39033.cljs$lang$ctorStr = "cljs.core.async/t39033";

cljs.core.async.t39033.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t39033");
});})(___$1))
;

cljs.core.async.__GT_t39033 = ((function (___$1){
return (function __GT_t39033(fn1__$1,___$2,meta39031__$1,map_LT___$1,f__$1,ch__$1,meta39034){
return (new cljs.core.async.t39033(fn1__$1,___$2,meta39031__$1,map_LT___$1,f__$1,ch__$1,meta39034));
});})(___$1))
;

}

return (new cljs.core.async.t39033(fn1,___$1,self__.meta39031,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t39030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39032){
var self__ = this;
var _39032__$1 = this;
return self__.meta39031;
});

cljs.core.async.t39030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39032,meta39031__$1){
var self__ = this;
var _39032__$1 = this;
return (new cljs.core.async.t39030(self__.ch,self__.f,self__.map_LT_,meta39031__$1));
});

cljs.core.async.t39030.cljs$lang$type = true;

cljs.core.async.t39030.cljs$lang$ctorStr = "cljs.core.async/t39030";

cljs.core.async.t39030.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t39030");
});

cljs.core.async.__GT_t39030 = (function __GT_t39030(ch__$1,f__$1,map_LT___$1,meta39031){
return (new cljs.core.async.t39030(ch__$1,f__$1,map_LT___$1,meta39031));
});

}

return (new cljs.core.async.t39030(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t39039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39039 = (function (ch,f,map_GT_,meta39040){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta39040 = meta39040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t39039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t39039.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39041){
var self__ = this;
var _39041__$1 = this;
return self__.meta39040;
});

cljs.core.async.t39039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39041,meta39040__$1){
var self__ = this;
var _39041__$1 = this;
return (new cljs.core.async.t39039(self__.ch,self__.f,self__.map_GT_,meta39040__$1));
});

cljs.core.async.t39039.cljs$lang$type = true;

cljs.core.async.t39039.cljs$lang$ctorStr = "cljs.core.async/t39039";

cljs.core.async.t39039.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t39039");
});

cljs.core.async.__GT_t39039 = (function __GT_t39039(ch__$1,f__$1,map_GT___$1,meta39040){
return (new cljs.core.async.t39039(ch__$1,f__$1,map_GT___$1,meta39040));
});

}

return (new cljs.core.async.t39039(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t39045 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39045 = (function (ch,p,filter_GT_,meta39046){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta39046 = meta39046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t39045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39047){
var self__ = this;
var _39047__$1 = this;
return self__.meta39046;
});

cljs.core.async.t39045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39047,meta39046__$1){
var self__ = this;
var _39047__$1 = this;
return (new cljs.core.async.t39045(self__.ch,self__.p,self__.filter_GT_,meta39046__$1));
});

cljs.core.async.t39045.cljs$lang$type = true;

cljs.core.async.t39045.cljs$lang$ctorStr = "cljs.core.async/t39045";

cljs.core.async.t39045.cljs$lang$ctorPrWriter = (function (this__15031__auto__,writer__15032__auto__,opt__15033__auto__){
return cljs.core._write.call(null,writer__15032__auto__,"cljs.core.async/t39045");
});

cljs.core.async.__GT_t39045 = (function __GT_t39045(ch__$1,p__$1,filter_GT___$1,meta39046){
return (new cljs.core.async.t39045(ch__$1,p__$1,filter_GT___$1,meta39046));
});

}

return (new cljs.core.async.t39045(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22243__auto___39130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___39130,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___39130,out){
return (function (state_39109){
var state_val_39110 = (state_39109[(1)]);
if((state_val_39110 === (7))){
var inst_39105 = (state_39109[(2)]);
var state_39109__$1 = state_39109;
var statearr_39111_39131 = state_39109__$1;
(statearr_39111_39131[(2)] = inst_39105);

(statearr_39111_39131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (1))){
var state_39109__$1 = state_39109;
var statearr_39112_39132 = state_39109__$1;
(statearr_39112_39132[(2)] = null);

(statearr_39112_39132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (4))){
var inst_39091 = (state_39109[(7)]);
var inst_39091__$1 = (state_39109[(2)]);
var inst_39092 = (inst_39091__$1 == null);
var state_39109__$1 = (function (){var statearr_39113 = state_39109;
(statearr_39113[(7)] = inst_39091__$1);

return statearr_39113;
})();
if(cljs.core.truth_(inst_39092)){
var statearr_39114_39133 = state_39109__$1;
(statearr_39114_39133[(1)] = (5));

} else {
var statearr_39115_39134 = state_39109__$1;
(statearr_39115_39134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (6))){
var inst_39091 = (state_39109[(7)]);
var inst_39096 = p.call(null,inst_39091);
var state_39109__$1 = state_39109;
if(cljs.core.truth_(inst_39096)){
var statearr_39116_39135 = state_39109__$1;
(statearr_39116_39135[(1)] = (8));

} else {
var statearr_39117_39136 = state_39109__$1;
(statearr_39117_39136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (3))){
var inst_39107 = (state_39109[(2)]);
var state_39109__$1 = state_39109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39109__$1,inst_39107);
} else {
if((state_val_39110 === (2))){
var state_39109__$1 = state_39109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39109__$1,(4),ch);
} else {
if((state_val_39110 === (11))){
var inst_39099 = (state_39109[(2)]);
var state_39109__$1 = state_39109;
var statearr_39118_39137 = state_39109__$1;
(statearr_39118_39137[(2)] = inst_39099);

(statearr_39118_39137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (9))){
var state_39109__$1 = state_39109;
var statearr_39119_39138 = state_39109__$1;
(statearr_39119_39138[(2)] = null);

(statearr_39119_39138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (5))){
var inst_39094 = cljs.core.async.close_BANG_.call(null,out);
var state_39109__$1 = state_39109;
var statearr_39120_39139 = state_39109__$1;
(statearr_39120_39139[(2)] = inst_39094);

(statearr_39120_39139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (10))){
var inst_39102 = (state_39109[(2)]);
var state_39109__$1 = (function (){var statearr_39121 = state_39109;
(statearr_39121[(8)] = inst_39102);

return statearr_39121;
})();
var statearr_39122_39140 = state_39109__$1;
(statearr_39122_39140[(2)] = null);

(statearr_39122_39140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39110 === (8))){
var inst_39091 = (state_39109[(7)]);
var state_39109__$1 = state_39109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39109__$1,(11),out,inst_39091);
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
});})(c__22243__auto___39130,out))
;
return ((function (switch__22187__auto__,c__22243__auto___39130,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_39126 = [null,null,null,null,null,null,null,null,null];
(statearr_39126[(0)] = state_machine__22188__auto__);

(statearr_39126[(1)] = (1));

return statearr_39126;
});
var state_machine__22188__auto____1 = (function (state_39109){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_39109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e39127){if((e39127 instanceof Object)){
var ex__22191__auto__ = e39127;
var statearr_39128_39141 = state_39109;
(statearr_39128_39141[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39142 = state_39109;
state_39109 = G__39142;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_39109){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_39109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___39130,out))
})();
var state__22245__auto__ = (function (){var statearr_39129 = f__22244__auto__.call(null);
(statearr_39129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___39130);

return statearr_39129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___39130,out))
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
var c__22243__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto__){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto__){
return (function (state_39308){
var state_val_39309 = (state_39308[(1)]);
if((state_val_39309 === (7))){
var inst_39304 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39310_39351 = state_39308__$1;
(statearr_39310_39351[(2)] = inst_39304);

(statearr_39310_39351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (20))){
var inst_39274 = (state_39308[(7)]);
var inst_39285 = (state_39308[(2)]);
var inst_39286 = cljs.core.next.call(null,inst_39274);
var inst_39260 = inst_39286;
var inst_39261 = null;
var inst_39262 = (0);
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39311 = state_39308;
(statearr_39311[(8)] = inst_39260);

(statearr_39311[(9)] = inst_39285);

(statearr_39311[(10)] = inst_39263);

(statearr_39311[(11)] = inst_39262);

(statearr_39311[(12)] = inst_39261);

return statearr_39311;
})();
var statearr_39312_39352 = state_39308__$1;
(statearr_39312_39352[(2)] = null);

(statearr_39312_39352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (1))){
var state_39308__$1 = state_39308;
var statearr_39313_39353 = state_39308__$1;
(statearr_39313_39353[(2)] = null);

(statearr_39313_39353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (4))){
var inst_39249 = (state_39308[(13)]);
var inst_39249__$1 = (state_39308[(2)]);
var inst_39250 = (inst_39249__$1 == null);
var state_39308__$1 = (function (){var statearr_39314 = state_39308;
(statearr_39314[(13)] = inst_39249__$1);

return statearr_39314;
})();
if(cljs.core.truth_(inst_39250)){
var statearr_39315_39354 = state_39308__$1;
(statearr_39315_39354[(1)] = (5));

} else {
var statearr_39316_39355 = state_39308__$1;
(statearr_39316_39355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (15))){
var state_39308__$1 = state_39308;
var statearr_39320_39356 = state_39308__$1;
(statearr_39320_39356[(2)] = null);

(statearr_39320_39356[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (21))){
var state_39308__$1 = state_39308;
var statearr_39321_39357 = state_39308__$1;
(statearr_39321_39357[(2)] = null);

(statearr_39321_39357[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (13))){
var inst_39260 = (state_39308[(8)]);
var inst_39263 = (state_39308[(10)]);
var inst_39262 = (state_39308[(11)]);
var inst_39261 = (state_39308[(12)]);
var inst_39270 = (state_39308[(2)]);
var inst_39271 = (inst_39263 + (1));
var tmp39317 = inst_39260;
var tmp39318 = inst_39262;
var tmp39319 = inst_39261;
var inst_39260__$1 = tmp39317;
var inst_39261__$1 = tmp39319;
var inst_39262__$1 = tmp39318;
var inst_39263__$1 = inst_39271;
var state_39308__$1 = (function (){var statearr_39322 = state_39308;
(statearr_39322[(8)] = inst_39260__$1);

(statearr_39322[(14)] = inst_39270);

(statearr_39322[(10)] = inst_39263__$1);

(statearr_39322[(11)] = inst_39262__$1);

(statearr_39322[(12)] = inst_39261__$1);

return statearr_39322;
})();
var statearr_39323_39358 = state_39308__$1;
(statearr_39323_39358[(2)] = null);

(statearr_39323_39358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (22))){
var state_39308__$1 = state_39308;
var statearr_39324_39359 = state_39308__$1;
(statearr_39324_39359[(2)] = null);

(statearr_39324_39359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (6))){
var inst_39249 = (state_39308[(13)]);
var inst_39258 = f.call(null,inst_39249);
var inst_39259 = cljs.core.seq.call(null,inst_39258);
var inst_39260 = inst_39259;
var inst_39261 = null;
var inst_39262 = (0);
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39325 = state_39308;
(statearr_39325[(8)] = inst_39260);

(statearr_39325[(10)] = inst_39263);

(statearr_39325[(11)] = inst_39262);

(statearr_39325[(12)] = inst_39261);

return statearr_39325;
})();
var statearr_39326_39360 = state_39308__$1;
(statearr_39326_39360[(2)] = null);

(statearr_39326_39360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (17))){
var inst_39274 = (state_39308[(7)]);
var inst_39278 = cljs.core.chunk_first.call(null,inst_39274);
var inst_39279 = cljs.core.chunk_rest.call(null,inst_39274);
var inst_39280 = cljs.core.count.call(null,inst_39278);
var inst_39260 = inst_39279;
var inst_39261 = inst_39278;
var inst_39262 = inst_39280;
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39327 = state_39308;
(statearr_39327[(8)] = inst_39260);

(statearr_39327[(10)] = inst_39263);

(statearr_39327[(11)] = inst_39262);

(statearr_39327[(12)] = inst_39261);

return statearr_39327;
})();
var statearr_39328_39361 = state_39308__$1;
(statearr_39328_39361[(2)] = null);

(statearr_39328_39361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (3))){
var inst_39306 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39308__$1,inst_39306);
} else {
if((state_val_39309 === (12))){
var inst_39294 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39329_39362 = state_39308__$1;
(statearr_39329_39362[(2)] = inst_39294);

(statearr_39329_39362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (2))){
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39308__$1,(4),in$);
} else {
if((state_val_39309 === (23))){
var inst_39302 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39330_39363 = state_39308__$1;
(statearr_39330_39363[(2)] = inst_39302);

(statearr_39330_39363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (19))){
var inst_39289 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39331_39364 = state_39308__$1;
(statearr_39331_39364[(2)] = inst_39289);

(statearr_39331_39364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (11))){
var inst_39260 = (state_39308[(8)]);
var inst_39274 = (state_39308[(7)]);
var inst_39274__$1 = cljs.core.seq.call(null,inst_39260);
var state_39308__$1 = (function (){var statearr_39332 = state_39308;
(statearr_39332[(7)] = inst_39274__$1);

return statearr_39332;
})();
if(inst_39274__$1){
var statearr_39333_39365 = state_39308__$1;
(statearr_39333_39365[(1)] = (14));

} else {
var statearr_39334_39366 = state_39308__$1;
(statearr_39334_39366[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (9))){
var inst_39296 = (state_39308[(2)]);
var inst_39297 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39308__$1 = (function (){var statearr_39335 = state_39308;
(statearr_39335[(15)] = inst_39296);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39297)){
var statearr_39336_39367 = state_39308__$1;
(statearr_39336_39367[(1)] = (21));

} else {
var statearr_39337_39368 = state_39308__$1;
(statearr_39337_39368[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (5))){
var inst_39252 = cljs.core.async.close_BANG_.call(null,out);
var state_39308__$1 = state_39308;
var statearr_39338_39369 = state_39308__$1;
(statearr_39338_39369[(2)] = inst_39252);

(statearr_39338_39369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (14))){
var inst_39274 = (state_39308[(7)]);
var inst_39276 = cljs.core.chunked_seq_QMARK_.call(null,inst_39274);
var state_39308__$1 = state_39308;
if(inst_39276){
var statearr_39339_39370 = state_39308__$1;
(statearr_39339_39370[(1)] = (17));

} else {
var statearr_39340_39371 = state_39308__$1;
(statearr_39340_39371[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (16))){
var inst_39292 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39341_39372 = state_39308__$1;
(statearr_39341_39372[(2)] = inst_39292);

(statearr_39341_39372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (10))){
var inst_39263 = (state_39308[(10)]);
var inst_39261 = (state_39308[(12)]);
var inst_39268 = cljs.core._nth.call(null,inst_39261,inst_39263);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39308__$1,(13),out,inst_39268);
} else {
if((state_val_39309 === (18))){
var inst_39274 = (state_39308[(7)]);
var inst_39283 = cljs.core.first.call(null,inst_39274);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39308__$1,(20),out,inst_39283);
} else {
if((state_val_39309 === (8))){
var inst_39263 = (state_39308[(10)]);
var inst_39262 = (state_39308[(11)]);
var inst_39265 = (inst_39263 < inst_39262);
var inst_39266 = inst_39265;
var state_39308__$1 = state_39308;
if(cljs.core.truth_(inst_39266)){
var statearr_39342_39373 = state_39308__$1;
(statearr_39342_39373[(1)] = (10));

} else {
var statearr_39343_39374 = state_39308__$1;
(statearr_39343_39374[(1)] = (11));

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
});})(c__22243__auto__))
;
return ((function (switch__22187__auto__,c__22243__auto__){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_39347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39347[(0)] = state_machine__22188__auto__);

(statearr_39347[(1)] = (1));

return statearr_39347;
});
var state_machine__22188__auto____1 = (function (state_39308){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_39308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e39348){if((e39348 instanceof Object)){
var ex__22191__auto__ = e39348;
var statearr_39349_39375 = state_39308;
(statearr_39349_39375[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39376 = state_39308;
state_39308 = G__39376;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_39308){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_39308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto__))
})();
var state__22245__auto__ = (function (){var statearr_39350 = f__22244__auto__.call(null);
(statearr_39350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto__);

return statearr_39350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto__))
);

return c__22243__auto__;
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
var c__22243__auto___39473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___39473,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___39473,out){
return (function (state_39448){
var state_val_39449 = (state_39448[(1)]);
if((state_val_39449 === (7))){
var inst_39443 = (state_39448[(2)]);
var state_39448__$1 = state_39448;
var statearr_39450_39474 = state_39448__$1;
(statearr_39450_39474[(2)] = inst_39443);

(statearr_39450_39474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (1))){
var inst_39425 = null;
var state_39448__$1 = (function (){var statearr_39451 = state_39448;
(statearr_39451[(7)] = inst_39425);

return statearr_39451;
})();
var statearr_39452_39475 = state_39448__$1;
(statearr_39452_39475[(2)] = null);

(statearr_39452_39475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (4))){
var inst_39428 = (state_39448[(8)]);
var inst_39428__$1 = (state_39448[(2)]);
var inst_39429 = (inst_39428__$1 == null);
var inst_39430 = cljs.core.not.call(null,inst_39429);
var state_39448__$1 = (function (){var statearr_39453 = state_39448;
(statearr_39453[(8)] = inst_39428__$1);

return statearr_39453;
})();
if(inst_39430){
var statearr_39454_39476 = state_39448__$1;
(statearr_39454_39476[(1)] = (5));

} else {
var statearr_39455_39477 = state_39448__$1;
(statearr_39455_39477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (6))){
var state_39448__$1 = state_39448;
var statearr_39456_39478 = state_39448__$1;
(statearr_39456_39478[(2)] = null);

(statearr_39456_39478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (3))){
var inst_39445 = (state_39448[(2)]);
var inst_39446 = cljs.core.async.close_BANG_.call(null,out);
var state_39448__$1 = (function (){var statearr_39457 = state_39448;
(statearr_39457[(9)] = inst_39445);

return statearr_39457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39448__$1,inst_39446);
} else {
if((state_val_39449 === (2))){
var state_39448__$1 = state_39448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39448__$1,(4),ch);
} else {
if((state_val_39449 === (11))){
var inst_39428 = (state_39448[(8)]);
var inst_39437 = (state_39448[(2)]);
var inst_39425 = inst_39428;
var state_39448__$1 = (function (){var statearr_39458 = state_39448;
(statearr_39458[(10)] = inst_39437);

(statearr_39458[(7)] = inst_39425);

return statearr_39458;
})();
var statearr_39459_39479 = state_39448__$1;
(statearr_39459_39479[(2)] = null);

(statearr_39459_39479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (9))){
var inst_39428 = (state_39448[(8)]);
var state_39448__$1 = state_39448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39448__$1,(11),out,inst_39428);
} else {
if((state_val_39449 === (5))){
var inst_39428 = (state_39448[(8)]);
var inst_39425 = (state_39448[(7)]);
var inst_39432 = cljs.core._EQ_.call(null,inst_39428,inst_39425);
var state_39448__$1 = state_39448;
if(inst_39432){
var statearr_39461_39480 = state_39448__$1;
(statearr_39461_39480[(1)] = (8));

} else {
var statearr_39462_39481 = state_39448__$1;
(statearr_39462_39481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (10))){
var inst_39440 = (state_39448[(2)]);
var state_39448__$1 = state_39448;
var statearr_39463_39482 = state_39448__$1;
(statearr_39463_39482[(2)] = inst_39440);

(statearr_39463_39482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39449 === (8))){
var inst_39425 = (state_39448[(7)]);
var tmp39460 = inst_39425;
var inst_39425__$1 = tmp39460;
var state_39448__$1 = (function (){var statearr_39464 = state_39448;
(statearr_39464[(7)] = inst_39425__$1);

return statearr_39464;
})();
var statearr_39465_39483 = state_39448__$1;
(statearr_39465_39483[(2)] = null);

(statearr_39465_39483[(1)] = (2));


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
});})(c__22243__auto___39473,out))
;
return ((function (switch__22187__auto__,c__22243__auto___39473,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_39469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39469[(0)] = state_machine__22188__auto__);

(statearr_39469[(1)] = (1));

return statearr_39469;
});
var state_machine__22188__auto____1 = (function (state_39448){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_39448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e39470){if((e39470 instanceof Object)){
var ex__22191__auto__ = e39470;
var statearr_39471_39484 = state_39448;
(statearr_39471_39484[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39485 = state_39448;
state_39448 = G__39485;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_39448){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_39448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___39473,out))
})();
var state__22245__auto__ = (function (){var statearr_39472 = f__22244__auto__.call(null);
(statearr_39472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___39473);

return statearr_39472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___39473,out))
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
var c__22243__auto___39620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___39620,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___39620,out){
return (function (state_39590){
var state_val_39591 = (state_39590[(1)]);
if((state_val_39591 === (7))){
var inst_39586 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
var statearr_39592_39621 = state_39590__$1;
(statearr_39592_39621[(2)] = inst_39586);

(statearr_39592_39621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (1))){
var inst_39553 = (new Array(n));
var inst_39554 = inst_39553;
var inst_39555 = (0);
var state_39590__$1 = (function (){var statearr_39593 = state_39590;
(statearr_39593[(7)] = inst_39555);

(statearr_39593[(8)] = inst_39554);

return statearr_39593;
})();
var statearr_39594_39622 = state_39590__$1;
(statearr_39594_39622[(2)] = null);

(statearr_39594_39622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (4))){
var inst_39558 = (state_39590[(9)]);
var inst_39558__$1 = (state_39590[(2)]);
var inst_39559 = (inst_39558__$1 == null);
var inst_39560 = cljs.core.not.call(null,inst_39559);
var state_39590__$1 = (function (){var statearr_39595 = state_39590;
(statearr_39595[(9)] = inst_39558__$1);

return statearr_39595;
})();
if(inst_39560){
var statearr_39596_39623 = state_39590__$1;
(statearr_39596_39623[(1)] = (5));

} else {
var statearr_39597_39624 = state_39590__$1;
(statearr_39597_39624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (15))){
var inst_39580 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
var statearr_39598_39625 = state_39590__$1;
(statearr_39598_39625[(2)] = inst_39580);

(statearr_39598_39625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (13))){
var state_39590__$1 = state_39590;
var statearr_39599_39626 = state_39590__$1;
(statearr_39599_39626[(2)] = null);

(statearr_39599_39626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (6))){
var inst_39555 = (state_39590[(7)]);
var inst_39576 = (inst_39555 > (0));
var state_39590__$1 = state_39590;
if(cljs.core.truth_(inst_39576)){
var statearr_39600_39627 = state_39590__$1;
(statearr_39600_39627[(1)] = (12));

} else {
var statearr_39601_39628 = state_39590__$1;
(statearr_39601_39628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (3))){
var inst_39588 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39590__$1,inst_39588);
} else {
if((state_val_39591 === (12))){
var inst_39554 = (state_39590[(8)]);
var inst_39578 = cljs.core.vec.call(null,inst_39554);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39590__$1,(15),out,inst_39578);
} else {
if((state_val_39591 === (2))){
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39590__$1,(4),ch);
} else {
if((state_val_39591 === (11))){
var inst_39570 = (state_39590[(2)]);
var inst_39571 = (new Array(n));
var inst_39554 = inst_39571;
var inst_39555 = (0);
var state_39590__$1 = (function (){var statearr_39602 = state_39590;
(statearr_39602[(7)] = inst_39555);

(statearr_39602[(10)] = inst_39570);

(statearr_39602[(8)] = inst_39554);

return statearr_39602;
})();
var statearr_39603_39629 = state_39590__$1;
(statearr_39603_39629[(2)] = null);

(statearr_39603_39629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (9))){
var inst_39554 = (state_39590[(8)]);
var inst_39568 = cljs.core.vec.call(null,inst_39554);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39590__$1,(11),out,inst_39568);
} else {
if((state_val_39591 === (5))){
var inst_39563 = (state_39590[(11)]);
var inst_39555 = (state_39590[(7)]);
var inst_39554 = (state_39590[(8)]);
var inst_39558 = (state_39590[(9)]);
var inst_39562 = (inst_39554[inst_39555] = inst_39558);
var inst_39563__$1 = (inst_39555 + (1));
var inst_39564 = (inst_39563__$1 < n);
var state_39590__$1 = (function (){var statearr_39604 = state_39590;
(statearr_39604[(11)] = inst_39563__$1);

(statearr_39604[(12)] = inst_39562);

return statearr_39604;
})();
if(cljs.core.truth_(inst_39564)){
var statearr_39605_39630 = state_39590__$1;
(statearr_39605_39630[(1)] = (8));

} else {
var statearr_39606_39631 = state_39590__$1;
(statearr_39606_39631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (14))){
var inst_39583 = (state_39590[(2)]);
var inst_39584 = cljs.core.async.close_BANG_.call(null,out);
var state_39590__$1 = (function (){var statearr_39608 = state_39590;
(statearr_39608[(13)] = inst_39583);

return statearr_39608;
})();
var statearr_39609_39632 = state_39590__$1;
(statearr_39609_39632[(2)] = inst_39584);

(statearr_39609_39632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (10))){
var inst_39574 = (state_39590[(2)]);
var state_39590__$1 = state_39590;
var statearr_39610_39633 = state_39590__$1;
(statearr_39610_39633[(2)] = inst_39574);

(statearr_39610_39633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39591 === (8))){
var inst_39563 = (state_39590[(11)]);
var inst_39554 = (state_39590[(8)]);
var tmp39607 = inst_39554;
var inst_39554__$1 = tmp39607;
var inst_39555 = inst_39563;
var state_39590__$1 = (function (){var statearr_39611 = state_39590;
(statearr_39611[(7)] = inst_39555);

(statearr_39611[(8)] = inst_39554__$1);

return statearr_39611;
})();
var statearr_39612_39634 = state_39590__$1;
(statearr_39612_39634[(2)] = null);

(statearr_39612_39634[(1)] = (2));


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
});})(c__22243__auto___39620,out))
;
return ((function (switch__22187__auto__,c__22243__auto___39620,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_39616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39616[(0)] = state_machine__22188__auto__);

(statearr_39616[(1)] = (1));

return statearr_39616;
});
var state_machine__22188__auto____1 = (function (state_39590){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_39590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e39617){if((e39617 instanceof Object)){
var ex__22191__auto__ = e39617;
var statearr_39618_39635 = state_39590;
(statearr_39618_39635[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39636 = state_39590;
state_39590 = G__39636;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_39590){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_39590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___39620,out))
})();
var state__22245__auto__ = (function (){var statearr_39619 = f__22244__auto__.call(null);
(statearr_39619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___39620);

return statearr_39619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___39620,out))
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
var c__22243__auto___39779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22243__auto___39779,out){
return (function (){
var f__22244__auto__ = (function (){var switch__22187__auto__ = ((function (c__22243__auto___39779,out){
return (function (state_39749){
var state_val_39750 = (state_39749[(1)]);
if((state_val_39750 === (7))){
var inst_39745 = (state_39749[(2)]);
var state_39749__$1 = state_39749;
var statearr_39751_39780 = state_39749__$1;
(statearr_39751_39780[(2)] = inst_39745);

(statearr_39751_39780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (1))){
var inst_39708 = [];
var inst_39709 = inst_39708;
var inst_39710 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39749__$1 = (function (){var statearr_39752 = state_39749;
(statearr_39752[(7)] = inst_39709);

(statearr_39752[(8)] = inst_39710);

return statearr_39752;
})();
var statearr_39753_39781 = state_39749__$1;
(statearr_39753_39781[(2)] = null);

(statearr_39753_39781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (4))){
var inst_39713 = (state_39749[(9)]);
var inst_39713__$1 = (state_39749[(2)]);
var inst_39714 = (inst_39713__$1 == null);
var inst_39715 = cljs.core.not.call(null,inst_39714);
var state_39749__$1 = (function (){var statearr_39754 = state_39749;
(statearr_39754[(9)] = inst_39713__$1);

return statearr_39754;
})();
if(inst_39715){
var statearr_39755_39782 = state_39749__$1;
(statearr_39755_39782[(1)] = (5));

} else {
var statearr_39756_39783 = state_39749__$1;
(statearr_39756_39783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (15))){
var inst_39739 = (state_39749[(2)]);
var state_39749__$1 = state_39749;
var statearr_39757_39784 = state_39749__$1;
(statearr_39757_39784[(2)] = inst_39739);

(statearr_39757_39784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (13))){
var state_39749__$1 = state_39749;
var statearr_39758_39785 = state_39749__$1;
(statearr_39758_39785[(2)] = null);

(statearr_39758_39785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (6))){
var inst_39709 = (state_39749[(7)]);
var inst_39734 = inst_39709.length;
var inst_39735 = (inst_39734 > (0));
var state_39749__$1 = state_39749;
if(cljs.core.truth_(inst_39735)){
var statearr_39759_39786 = state_39749__$1;
(statearr_39759_39786[(1)] = (12));

} else {
var statearr_39760_39787 = state_39749__$1;
(statearr_39760_39787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (3))){
var inst_39747 = (state_39749[(2)]);
var state_39749__$1 = state_39749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39749__$1,inst_39747);
} else {
if((state_val_39750 === (12))){
var inst_39709 = (state_39749[(7)]);
var inst_39737 = cljs.core.vec.call(null,inst_39709);
var state_39749__$1 = state_39749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39749__$1,(15),out,inst_39737);
} else {
if((state_val_39750 === (2))){
var state_39749__$1 = state_39749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39749__$1,(4),ch);
} else {
if((state_val_39750 === (11))){
var inst_39713 = (state_39749[(9)]);
var inst_39717 = (state_39749[(10)]);
var inst_39727 = (state_39749[(2)]);
var inst_39728 = [];
var inst_39729 = inst_39728.push(inst_39713);
var inst_39709 = inst_39728;
var inst_39710 = inst_39717;
var state_39749__$1 = (function (){var statearr_39761 = state_39749;
(statearr_39761[(11)] = inst_39727);

(statearr_39761[(7)] = inst_39709);

(statearr_39761[(8)] = inst_39710);

(statearr_39761[(12)] = inst_39729);

return statearr_39761;
})();
var statearr_39762_39788 = state_39749__$1;
(statearr_39762_39788[(2)] = null);

(statearr_39762_39788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (9))){
var inst_39709 = (state_39749[(7)]);
var inst_39725 = cljs.core.vec.call(null,inst_39709);
var state_39749__$1 = state_39749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39749__$1,(11),out,inst_39725);
} else {
if((state_val_39750 === (5))){
var inst_39713 = (state_39749[(9)]);
var inst_39710 = (state_39749[(8)]);
var inst_39717 = (state_39749[(10)]);
var inst_39717__$1 = f.call(null,inst_39713);
var inst_39718 = cljs.core._EQ_.call(null,inst_39717__$1,inst_39710);
var inst_39719 = cljs.core.keyword_identical_QMARK_.call(null,inst_39710,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39720 = (inst_39718) || (inst_39719);
var state_39749__$1 = (function (){var statearr_39763 = state_39749;
(statearr_39763[(10)] = inst_39717__$1);

return statearr_39763;
})();
if(cljs.core.truth_(inst_39720)){
var statearr_39764_39789 = state_39749__$1;
(statearr_39764_39789[(1)] = (8));

} else {
var statearr_39765_39790 = state_39749__$1;
(statearr_39765_39790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (14))){
var inst_39742 = (state_39749[(2)]);
var inst_39743 = cljs.core.async.close_BANG_.call(null,out);
var state_39749__$1 = (function (){var statearr_39767 = state_39749;
(statearr_39767[(13)] = inst_39742);

return statearr_39767;
})();
var statearr_39768_39791 = state_39749__$1;
(statearr_39768_39791[(2)] = inst_39743);

(statearr_39768_39791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (10))){
var inst_39732 = (state_39749[(2)]);
var state_39749__$1 = state_39749;
var statearr_39769_39792 = state_39749__$1;
(statearr_39769_39792[(2)] = inst_39732);

(statearr_39769_39792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39750 === (8))){
var inst_39713 = (state_39749[(9)]);
var inst_39709 = (state_39749[(7)]);
var inst_39717 = (state_39749[(10)]);
var inst_39722 = inst_39709.push(inst_39713);
var tmp39766 = inst_39709;
var inst_39709__$1 = tmp39766;
var inst_39710 = inst_39717;
var state_39749__$1 = (function (){var statearr_39770 = state_39749;
(statearr_39770[(14)] = inst_39722);

(statearr_39770[(7)] = inst_39709__$1);

(statearr_39770[(8)] = inst_39710);

return statearr_39770;
})();
var statearr_39771_39793 = state_39749__$1;
(statearr_39771_39793[(2)] = null);

(statearr_39771_39793[(1)] = (2));


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
});})(c__22243__auto___39779,out))
;
return ((function (switch__22187__auto__,c__22243__auto___39779,out){
return (function() {
var state_machine__22188__auto__ = null;
var state_machine__22188__auto____0 = (function (){
var statearr_39775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39775[(0)] = state_machine__22188__auto__);

(statearr_39775[(1)] = (1));

return statearr_39775;
});
var state_machine__22188__auto____1 = (function (state_39749){
while(true){
var ret_value__22189__auto__ = (function (){try{while(true){
var result__22190__auto__ = switch__22187__auto__.call(null,state_39749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22190__auto__;
}
break;
}
}catch (e39776){if((e39776 instanceof Object)){
var ex__22191__auto__ = e39776;
var statearr_39777_39794 = state_39749;
(statearr_39777_39794[(5)] = ex__22191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39795 = state_39749;
state_39749 = G__39795;
continue;
} else {
return ret_value__22189__auto__;
}
break;
}
});
state_machine__22188__auto__ = function(state_39749){
switch(arguments.length){
case 0:
return state_machine__22188__auto____0.call(this);
case 1:
return state_machine__22188__auto____1.call(this,state_39749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22188__auto____0;
state_machine__22188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22188__auto____1;
return state_machine__22188__auto__;
})()
;})(switch__22187__auto__,c__22243__auto___39779,out))
})();
var state__22245__auto__ = (function (){var statearr_39778 = f__22244__auto__.call(null);
(statearr_39778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22243__auto___39779);

return statearr_39778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22245__auto__);
});})(c__22243__auto___39779,out))
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