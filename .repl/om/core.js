// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj36409 = {};
return obj36409;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.display_name[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.display_name["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj36411 = {};
return obj36411;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.init_state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.init_state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj36413 = {};
return obj36413;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.should_update[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.should_update["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj36415 = {};
return obj36415;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.will_mount[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.will_mount["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj36417 = {};
return obj36417;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.did_mount[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.did_mount["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj36419 = {};
return obj36419;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.will_unmount[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.will_unmount["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj36421 = {};
return obj36421;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.will_update[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.will_update["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj36423 = {};
return obj36423;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.did_update[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.did_update["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj36425 = {};
return obj36425;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.will_receive_props[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.will_receive_props["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj36427 = {};
return obj36427;
})();

om.core.render = (function render(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.render[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.render["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj36429 = {};
return obj36429;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.render_props[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.render_props["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj36431 = {};
return obj36431;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core.render_state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core.render_state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj36433 = {};
return obj36433;
})();


om.core.IOmSwap = (function (){var obj36435 = {};
return obj36435;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj36437 = {};
return obj36437;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj36439 = {};
return obj36439;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_render_state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_render_state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_render_state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_render_state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj36441 = {};
return obj36441;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj36443 = {};
return obj36443;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_queue[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_queue["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj36445 = {};
return obj36445;
})();

om.core._value = (function _value(x){
if((function (){var and__10929__auto__ = x;
if(and__10929__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__10929__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__11585__auto__ = (((x == null))?null:x);
return (function (){var or__10941__auto__ = (om.core._value[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._value["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj36447 = {};
return obj36447;
})();

om.core._path = (function _path(cursor){
if((function (){var and__10929__auto__ = cursor;
if(and__10929__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__10929__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__11585__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10941__auto__ = (om.core._path[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._path["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__10929__auto__ = cursor;
if(and__10929__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__10929__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__11585__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10941__auto__ = (om.core._state[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._state["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj36449 = {};
return obj36449;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__10929__auto__ = value;
if(and__10929__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__10929__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__11585__auto__ = (((value == null))?null:value);
return (function (){var or__10941__auto__ = (om.core._to_cursor[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._to_cursor["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__10929__auto__ = value;
if(and__10929__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__10929__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__11585__auto__ = (((value == null))?null:value);
return (function (){var or__10941__auto__ = (om.core._to_cursor[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._to_cursor["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj36451 = {};
return obj36451;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__10929__auto__ = cursor;
if(and__10929__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__10929__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__11585__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10941__auto__ = (om.core._derive[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._derive["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj36453 = {};
return obj36453;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__10929__auto__ = cursor;
if(and__10929__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__10929__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__11585__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10941__auto__ = (om.core._transact_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj36455 = {};
return obj36455;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__10929__auto__ = x;
if(and__10929__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__10929__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__11585__auto__ = (((x == null))?null:x);
return (function (){var or__10941__auto__ = (om.core._listen_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__10929__auto__ = x;
if(and__10929__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__11585__auto__ = (((x == null))?null:x);
return (function (){var or__10941__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__10929__auto__ = x;
if(and__10929__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__10929__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__11585__auto__ = (((x == null))?null:x);
return (function (){var or__10941__auto__ = (om.core._notify_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj36457 = {};
return obj36457;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_property[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_property["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj36459 = {};
return obj36459;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__10929__auto__ = cursor;
if(and__10929__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__10929__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__11585__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__10941__auto__ = (om.core._root_key[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._root_key["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj36461 = {};
return obj36461;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._adapt[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._adapt["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj36463 = {};
return obj36463;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__10929__auto__ = this$;
if(and__10929__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__10929__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__11585__auto__ = (((this$ == null))?null:this$);
return (function (){var or__10941__auto__ = (om.core._get_deps[goog.typeOf(x__11585__auto__)]);
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (om.core._get_deps["_"]);
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__36465 = state;
if(G__36465){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36465.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__36465.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__36465);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__36465);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__36467 = x;
if(G__36467){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36467.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__36467.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__36467);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__36467);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__36469 = (x.props["__om_cursor"]);
var G__36469__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__36469,korks__$1):G__36469);
return G__36469__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4406__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4406__auto__)){
var pending_state = temp__4406__auto__;
var G__36471 = state;
(G__36471["__om_prev_state"] = (state["__om_state"]));

(G__36471["__om_state"] = pending_state);

(G__36471["__om_pending_state"] = null);

return G__36471;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__10941__auto__ = props;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return owner.props;
}
})();
var temp__4406__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4406__auto__)){
var props_state = temp__4406__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__10941__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__36473 = c;
if(G__36473){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36473.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__36473.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__36473);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__36473);
}
})()){
var state_36494 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__10941__auto__ = (state_36494["__om_prev_state"]);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return (state_36494["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__36474 = c;
if(G__36474){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36474.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__36474.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__36474);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__36474);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4406__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4406__auto__){
var refs = temp__4406__auto__;
var seq__36475 = cljs.core.seq.call(null,refs);
var chunk__36476 = null;
var count__36477 = (0);
var i__36478 = (0);
while(true){
if((i__36478 < count__36477)){
var ref = cljs.core._nth.call(null,chunk__36476,i__36478);
om.core.unobserve.call(null,this$,ref);

var G__36495 = seq__36475;
var G__36496 = chunk__36476;
var G__36497 = count__36477;
var G__36498 = (i__36478 + (1));
seq__36475 = G__36495;
chunk__36476 = G__36496;
count__36477 = G__36497;
i__36478 = G__36498;
continue;
} else {
var temp__4406__auto____$1 = cljs.core.seq.call(null,seq__36475);
if(temp__4406__auto____$1){
var seq__36475__$1 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36475__$1)){
var c__11728__auto__ = cljs.core.chunk_first.call(null,seq__36475__$1);
var G__36499 = cljs.core.chunk_rest.call(null,seq__36475__$1);
var G__36500 = c__11728__auto__;
var G__36501 = cljs.core.count.call(null,c__11728__auto__);
var G__36502 = (0);
seq__36475 = G__36499;
chunk__36476 = G__36500;
count__36477 = G__36501;
i__36478 = G__36502;
continue;
} else {
var ref = cljs.core.first.call(null,seq__36475__$1);
om.core.unobserve.call(null,this$,ref);

var G__36503 = cljs.core.next.call(null,seq__36475__$1);
var G__36504 = null;
var G__36505 = (0);
var G__36506 = (0);
seq__36475 = G__36503;
chunk__36476 = G__36504;
count__36477 = G__36505;
i__36478 = G__36506;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__36479 = c;
if(G__36479){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36479.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__36479.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__36479);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__36479);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__36480 = c;
if(G__36480){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36480.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__36480.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__36480);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__36480);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__10929__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__10929__auto__){
return cljs.core.some.call(null,((function (and__10929__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__36472_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__36472_SHARP_);
});})(and__10929__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__10929__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_36481 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_36482 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_36483 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_36484 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_36485 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__36486 = c;
if(G__36486){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36486.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__36486.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__36486);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__36486);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__36487 = c;
if(G__36487){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36487.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__36487.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__36487);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__36487);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__36488 = c;
if(G__36488){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36488.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__36488.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__36488);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__36488);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_36485;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_36484;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_36483;

om.core._STAR_state_STAR_ = _STAR_state_STAR_36482;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_36481;
}}),(function (next_props,next_state){
var this$ = this;
var c_36507 = om.core.children.call(null,this$);
if((function (){var G__36489 = c_36507;
if(G__36489){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36489.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__36489.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__36489);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__36489);
}
})()){
var state_36508 = this$.state;
om.core.will_update.call(null,c_36507,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__10941__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__36490 = c;
if(G__36490){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36490.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__36490.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__36490);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__36490);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__10941__auto__ = id;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__36491 = c;
if(G__36491){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36491.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__36491.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__36491);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__36491);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__36492 = c;
if(G__36492){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36492.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__36492.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__36492);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__36492);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_36509 = om.core.children.call(null,this$);
if((function (){var G__36493 = c_36509;
if(G__36493){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36493.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__36493.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__36493);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__36493);
}
})()){
om.core.will_mount.call(null,c_36509);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x36511 = obj;
x36511.om$core$IGetState$ = true;

x36511.om$core$IGetState$_get_state$arity$1 = ((function (x36511){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__10941__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return (state["__om_state"]);
}
});})(x36511))
;

x36511.om$core$IGetState$_get_state$arity$2 = ((function (x36511){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x36511))
;

x36511.om$core$IGetRenderState$ = true;

x36511.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x36511){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x36511))
;

x36511.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x36511){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x36511))
;

x36511.om$core$ISetState$ = true;

x36511.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x36511){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__10929__auto__ = !((app_state == null));
if(and__10929__auto__){
return render;
} else {
return and__10929__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x36511))
;

x36511.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x36511){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__10929__auto__ = !((app_state == null));
if(and__10929__auto__){
return render;
} else {
return and__10929__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x36511))
;

return x36511;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__10941__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__10941__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__36512 = c;
if(G__36512){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36512.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__36512.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__36512);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__36512);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_36521 = om.core.children.call(null,this$);
if((function (){var G__36513 = c_36521;
if(G__36513){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36513.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__36513.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__36513);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__36513);
}
})()){
om.core.will_mount.call(null,c_36521);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__36514 = c;
if(G__36514){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36514.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__36514.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__36514);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__36514);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4406__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4406__auto__){
var refs = temp__4406__auto__;
var seq__36515 = cljs.core.seq.call(null,refs);
var chunk__36516 = null;
var count__36517 = (0);
var i__36518 = (0);
while(true){
if((i__36518 < count__36517)){
var ref = cljs.core._nth.call(null,chunk__36516,i__36518);
om.core.unobserve.call(null,this$,ref);

var G__36522 = seq__36515;
var G__36523 = chunk__36516;
var G__36524 = count__36517;
var G__36525 = (i__36518 + (1));
seq__36515 = G__36522;
chunk__36516 = G__36523;
count__36517 = G__36524;
i__36518 = G__36525;
continue;
} else {
var temp__4406__auto____$1 = cljs.core.seq.call(null,seq__36515);
if(temp__4406__auto____$1){
var seq__36515__$1 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36515__$1)){
var c__11728__auto__ = cljs.core.chunk_first.call(null,seq__36515__$1);
var G__36526 = cljs.core.chunk_rest.call(null,seq__36515__$1);
var G__36527 = c__11728__auto__;
var G__36528 = cljs.core.count.call(null,c__11728__auto__);
var G__36529 = (0);
seq__36515 = G__36526;
chunk__36516 = G__36527;
count__36517 = G__36528;
i__36518 = G__36529;
continue;
} else {
var ref = cljs.core.first.call(null,seq__36515__$1);
om.core.unobserve.call(null,this$,ref);

var G__36530 = cljs.core.next.call(null,seq__36515__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__36515 = G__36530;
chunk__36516 = G__36531;
count__36517 = G__36532;
i__36518 = G__36533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_36534 = this$.props;
var c_36535 = om.core.children.call(null,this$);
if((function (){var G__36519 = c_36535;
if(G__36519){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36519.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__36519.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__36519);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__36519);
}
})()){
var state_36536 = this$.state;
om.core.will_update.call(null,c_36535,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__36520 = c;
if(G__36520){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36520.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__36520.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__36520);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__36520);
}
})()){
var state_36537 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__10941__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x36539 = cljs.core.clj__GT_js.call(null,methods$);
x36539.om$core$IGetState$ = true;

x36539.om$core$IGetState$_get_state$arity$1 = ((function (x36539){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__10941__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x36539))
;

x36539.om$core$IGetState$_get_state$arity$2 = ((function (x36539){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x36539))
;

x36539.om$core$IGetRenderState$ = true;

x36539.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x36539){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x36539))
;

x36539.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x36539){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x36539))
;

x36539.om$core$ISetState$ = true;

x36539.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x36539){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__10929__auto__ = !((gstate == null));
if(and__10929__auto__){
return render;
} else {
return and__10929__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x36539))
;

x36539.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x36539){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x36539))
;

return x36539;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__36541 = x;
if(G__36541){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36541.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__36541.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__36541);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__36541);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__36543){
var vec__36544 = p__36543;
var k = cljs.core.nth.call(null,vec__36544,(0),null);
var v = cljs.core.nth.call(null,vec__36544,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__36545 = null;
var G__36545__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__36545__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__36545 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__36545__2.call(this,self__,k);
case 3:
return G__36545__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36545.cljs$core$IFn$_invoke$arity$2 = G__36545__2;
G__36545.cljs$core$IFn$_invoke$arity$3 = G__36545__3;
return G__36545;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args36542){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36542)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__36547 = null;
var G__36547__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__36547__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__36547 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__36547__2.call(this,self__,k);
case 3:
return G__36547__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36547.cljs$core$IFn$_invoke$arity$2 = G__36547__2;
G__36547.cljs$core$IFn$_invoke$arity$3 = G__36547__3;
return G__36547;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args36546){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36546)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__11528__auto__,writer__11529__auto__,opt__11530__auto__){
return cljs.core._write.call(null,writer__11529__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x36549 = cljs.core.clone.call(null,val);
x36549.cljs$core$IEquiv$ = true;

x36549.cljs$core$IEquiv$_equiv$arity$2 = ((function (x36549){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x36549))
;

x36549.om$core$ITransact$ = true;

x36549.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36549){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x36549))
;

x36549.om$core$ICursor$ = true;

x36549.om$core$ICursor$_path$arity$1 = ((function (x36549){
return (function (_){
var ___$1 = this;
return path;
});})(x36549))
;

x36549.om$core$ICursor$_state$arity$1 = ((function (x36549){
return (function (_){
var ___$1 = this;
return state;
});})(x36549))
;

x36549.cljs$core$IDeref$ = true;

x36549.cljs$core$IDeref$_deref$arity$1 = ((function (x36549){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x36549))
;

return x36549;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__36552 = val;
if(G__36552){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36552.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__36552.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__36552);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__36552);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__36553 = val;
if(G__36553){
var bit__11622__auto__ = (G__36553.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__11622__auto__) || (G__36553.cljs$core$ICloneable$)){
return true;
} else {
if((!G__36553.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__36553);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__36553);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__36555 = atom;
if(G__36555){
var bit__11622__auto__ = (G__36555.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__11622__auto__) || (G__36555.cljs$core$IDeref$)){
return true;
} else {
if((!G__36555.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__36555);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__36555);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x36557 = cljs.core.clone.call(null,x);
x36557.om$core$ITransact$ = true;

x36557.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36557){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x36557))
;

x36557.om$core$ICursorDerive$ = true;

x36557.om$core$ICursorDerive$_derive$arity$4 = ((function (x36557){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x36557))
;

x36557.om$core$IAdapt$ = true;

x36557.om$core$IAdapt$_adapt$arity$2 = ((function (x36557){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x36557))
;

x36557.cljs$core$ICloneable$ = true;

x36557.cljs$core$ICloneable$_clone$arity$1 = ((function (x36557){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x36557))
;

return x36557;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__36564 = cursor;
if(G__36564){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36564.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__36564.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__36564);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__36564);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x36565 = cljs.core.clone.call(null,cursor);
x36565.om$core$ITransact$ = true;

x36565.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x36565,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x36565,path,storage))
;

x36565.om$core$IOmRef$ = true;

x36565.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x36565,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x36565,path,storage))
;

x36565.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x36565,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x36565,path,storage))
;

x36565.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x36565,path,storage){
return (function (_){
var ___$1 = this;
var seq__36566 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__36567 = null;
var count__36568 = (0);
var i__36569 = (0);
while(true){
if((i__36569 < count__36568)){
var c = cljs.core._nth.call(null,chunk__36567,i__36569);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__36570 = seq__36566;
var G__36571 = chunk__36567;
var G__36572 = count__36568;
var G__36573 = (i__36569 + (1));
seq__36566 = G__36570;
chunk__36567 = G__36571;
count__36568 = G__36572;
i__36569 = G__36573;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__36566);
if(temp__4406__auto__){
var seq__36566__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36566__$1)){
var c__11728__auto__ = cljs.core.chunk_first.call(null,seq__36566__$1);
var G__36574 = cljs.core.chunk_rest.call(null,seq__36566__$1);
var G__36575 = c__11728__auto__;
var G__36576 = cljs.core.count.call(null,c__11728__auto__);
var G__36577 = (0);
seq__36566 = G__36574;
chunk__36567 = G__36575;
count__36568 = G__36576;
i__36569 = G__36577;
continue;
} else {
var c = cljs.core.first.call(null,seq__36566__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__36578 = cljs.core.next.call(null,seq__36566__$1);
var G__36579 = null;
var G__36580 = (0);
var G__36581 = (0);
seq__36566 = G__36578;
chunk__36567 = G__36579;
count__36568 = G__36580;
i__36569 = G__36581;
continue;
}
} else {
return null;
}
}
break;
}
});})(x36565,path,storage))
;

x36565.om$core$IOmRef$_get_deps$arity$1 = ((function (x36565,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x36565,path,storage))
;

x36565.om$core$ICursorDerive$ = true;

x36565.om$core$ICursorDerive$_derive$arity$4 = ((function (x36565,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x36565,path,storage))
;

return x36565;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__10941__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__10941__auto__ = state.om$render$T;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__36586_36590 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__36587_36591 = null;
var count__36588_36592 = (0);
var i__36589_36593 = (0);
while(true){
if((i__36589_36593 < count__36588_36592)){
var f_36594 = cljs.core._nth.call(null,chunk__36587_36591,i__36589_36593);
f_36594.call(null);

var G__36595 = seq__36586_36590;
var G__36596 = chunk__36587_36591;
var G__36597 = count__36588_36592;
var G__36598 = (i__36589_36593 + (1));
seq__36586_36590 = G__36595;
chunk__36587_36591 = G__36596;
count__36588_36592 = G__36597;
i__36589_36593 = G__36598;
continue;
} else {
var temp__4406__auto___36599 = cljs.core.seq.call(null,seq__36586_36590);
if(temp__4406__auto___36599){
var seq__36586_36600__$1 = temp__4406__auto___36599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36586_36600__$1)){
var c__11728__auto___36601 = cljs.core.chunk_first.call(null,seq__36586_36600__$1);
var G__36602 = cljs.core.chunk_rest.call(null,seq__36586_36600__$1);
var G__36603 = c__11728__auto___36601;
var G__36604 = cljs.core.count.call(null,c__11728__auto___36601);
var G__36605 = (0);
seq__36586_36590 = G__36602;
chunk__36587_36591 = G__36603;
count__36588_36592 = G__36604;
i__36589_36593 = G__36605;
continue;
} else {
var f_36606 = cljs.core.first.call(null,seq__36586_36600__$1);
f_36606.call(null);

var G__36607 = cljs.core.next.call(null,seq__36586_36600__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__36586_36590 = G__36607;
chunk__36587_36591 = G__36608;
count__36588_36592 = G__36609;
i__36589_36593 = G__36610;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__10941__auto__ = (function (){var G__36617 = x;
if(G__36617){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36617.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__36617.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__36617);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__36617);
}
})();
if(or__10941__auto__){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = (function (){var G__36619 = x;
if(G__36619){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto____$1 = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto____$1)){
return or__10941__auto____$1;
} else {
return G__36619.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__36619.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__36619);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__36619);
}
})();
if(or__10941__auto____$1){
return or__10941__auto____$1;
} else {
var G__36620 = x;
if(G__36620){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto____$2 = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto____$2)){
return or__10941__auto____$2;
} else {
return G__36620.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__36620.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__36620);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__36620);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__10941__auto__ = descriptor;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
var or__10941__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__10941__auto____$1)){
return or__10941__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__36622 = m;
var map__36622__$1 = ((cljs.core.seq_QMARK_.call(null,map__36622))?cljs.core.apply.call(null,cljs.core.hash_map,map__36622):map__36622);
var opts = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__36622__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4404__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4404__auto__)){
var i = temp__4404__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__10941__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__36622,map__36622__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__36622,map__36622__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__36622,map__36622__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__36622,map__36622__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__10941__auto__ = rkey;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__36631 = state;
if(G__36631){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36631.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__36631.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__36631);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__36631);
}
})()){
} else {
var properties_36639 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_36640 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_36641 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x36632_36642 = state;
x36632_36642.om$core$IRenderQueue$ = true;

x36632_36642.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_36641);
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_36641),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_36641,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_36641,cljs.core.empty);
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$INotify$ = true;

x36632_36642.om$core$INotify$_listen_BANG_$arity$3 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_36640,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_36640,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$INotify$_notify_BANG_$arity$3 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__36633_36643 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_36640));
var chunk__36634_36644 = null;
var count__36635_36645 = (0);
var i__36636_36646 = (0);
while(true){
if((i__36636_36646 < count__36635_36645)){
var vec__36637_36647 = cljs.core._nth.call(null,chunk__36634_36644,i__36636_36646);
var __36648 = cljs.core.nth.call(null,vec__36637_36647,(0),null);
var f_36649 = cljs.core.nth.call(null,vec__36637_36647,(1),null);
f_36649.call(null,tx_data,root_cursor);

var G__36650 = seq__36633_36643;
var G__36651 = chunk__36634_36644;
var G__36652 = count__36635_36645;
var G__36653 = (i__36636_36646 + (1));
seq__36633_36643 = G__36650;
chunk__36634_36644 = G__36651;
count__36635_36645 = G__36652;
i__36636_36646 = G__36653;
continue;
} else {
var temp__4406__auto___36654 = cljs.core.seq.call(null,seq__36633_36643);
if(temp__4406__auto___36654){
var seq__36633_36655__$1 = temp__4406__auto___36654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36633_36655__$1)){
var c__11728__auto___36656 = cljs.core.chunk_first.call(null,seq__36633_36655__$1);
var G__36657 = cljs.core.chunk_rest.call(null,seq__36633_36655__$1);
var G__36658 = c__11728__auto___36656;
var G__36659 = cljs.core.count.call(null,c__11728__auto___36656);
var G__36660 = (0);
seq__36633_36643 = G__36657;
chunk__36634_36644 = G__36658;
count__36635_36645 = G__36659;
i__36636_36646 = G__36660;
continue;
} else {
var vec__36638_36661 = cljs.core.first.call(null,seq__36633_36655__$1);
var __36662 = cljs.core.nth.call(null,vec__36638_36661,(0),null);
var f_36663 = cljs.core.nth.call(null,vec__36638_36661,(1),null);
f_36663.call(null,tx_data,root_cursor);

var G__36664 = cljs.core.next.call(null,seq__36633_36655__$1);
var G__36665 = null;
var G__36666 = (0);
var G__36667 = (0);
seq__36633_36643 = G__36664;
chunk__36634_36644 = G__36665;
count__36635_36645 = G__36666;
i__36636_36646 = G__36667;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$IRootProperties$ = true;

x36632_36642.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_36639,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_36639,cljs.core.dissoc,id,k);
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_36639,cljs.core.dissoc,id);
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

x36632_36642.om$core$IRootProperties$_get_property$arity$3 = ((function (x36632_36642,properties_36639,listeners_36640,render_queue_36641){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_36639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x36632_36642,properties_36639,listeners_36640,render_queue_36641))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x36669 = cljs.core.clone.call(null,cursor);
x36669.om$core$IRootKey$ = true;

x36669.om$core$IRootKey$_root_key$arity$1 = ((function (x36669){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x36669))
;

x36669.om$core$IAdapt$ = true;

x36669.om$core$IAdapt$_adapt$arity$2 = ((function (x36669){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x36669))
;

x36669.cljs$core$ICloneable$ = true;

x36669.cljs$core$ICloneable$_clone$arity$1 = ((function (x36669){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x36669))
;

return x36669;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__36670){
var map__36733 = p__36670;
var map__36733__$1 = ((cljs.core.seq_QMARK_.call(null,map__36733))?cljs.core.apply.call(null,cljs.core.hash_map,map__36733):map__36733);
var options = map__36733__$1;
var raf = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__36733__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__36795 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__36795,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__36795,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__36734 = value;
if(G__36734){
var bit__11622__auto__ = (G__36734.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__11622__auto__) || (G__36734.cljs$core$IAtom$)){
return true;
} else {
if((!G__36734.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__36734);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__36734);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__10941__auto__ = adapt;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_36796 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_36765 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_36766 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_36767 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_36768 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_36768;

om.core._STAR_state_STAR_ = _STAR_state_STAR_36767;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_36766;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_36765;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_36796);
} else {
}
}

var queue_36797 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_36797)){
} else {
var seq__36769_36798 = cljs.core.seq.call(null,queue_36797);
var chunk__36770_36799 = null;
var count__36771_36800 = (0);
var i__36772_36801 = (0);
while(true){
if((i__36772_36801 < count__36771_36800)){
var c_36802 = cljs.core._nth.call(null,chunk__36770_36799,i__36772_36801);
if(cljs.core.truth_(c_36802.isMounted())){
var temp__4406__auto___36803 = (c_36802.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4406__auto___36803)){
var next_props_36804 = temp__4406__auto___36803;
(c_36802.props["__om_cursor"] = next_props_36804);

(c_36802.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__10941__auto__ = !((function (){var G__36774 = om.core.children.call(null,c_36802);
if(G__36774){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36774.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__36774.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36774);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36774);
}
})());
if(or__10941__auto__){
return or__10941__auto__;
} else {
return c_36802.shouldComponentUpdate(c_36802.props,c_36802.state);
}
})())){
c_36802.forceUpdate();
} else {
}
} else {
}

var G__36805 = seq__36769_36798;
var G__36806 = chunk__36770_36799;
var G__36807 = count__36771_36800;
var G__36808 = (i__36772_36801 + (1));
seq__36769_36798 = G__36805;
chunk__36770_36799 = G__36806;
count__36771_36800 = G__36807;
i__36772_36801 = G__36808;
continue;
} else {
var temp__4406__auto___36809 = cljs.core.seq.call(null,seq__36769_36798);
if(temp__4406__auto___36809){
var seq__36769_36810__$1 = temp__4406__auto___36809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36769_36810__$1)){
var c__11728__auto___36811 = cljs.core.chunk_first.call(null,seq__36769_36810__$1);
var G__36812 = cljs.core.chunk_rest.call(null,seq__36769_36810__$1);
var G__36813 = c__11728__auto___36811;
var G__36814 = cljs.core.count.call(null,c__11728__auto___36811);
var G__36815 = (0);
seq__36769_36798 = G__36812;
chunk__36770_36799 = G__36813;
count__36771_36800 = G__36814;
i__36772_36801 = G__36815;
continue;
} else {
var c_36816 = cljs.core.first.call(null,seq__36769_36810__$1);
if(cljs.core.truth_(c_36816.isMounted())){
var temp__4406__auto___36817__$1 = (c_36816.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4406__auto___36817__$1)){
var next_props_36818 = temp__4406__auto___36817__$1;
(c_36816.props["__om_cursor"] = next_props_36818);

(c_36816.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__10941__auto__ = !((function (){var G__36776 = om.core.children.call(null,c_36816);
if(G__36776){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36776.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__36776.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36776);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__36776);
}
})());
if(or__10941__auto__){
return or__10941__auto__;
} else {
return c_36816.shouldComponentUpdate(c_36816.props,c_36816.state);
}
})())){
c_36816.forceUpdate();
} else {
}
} else {
}

var G__36819 = cljs.core.next.call(null,seq__36769_36810__$1);
var G__36820 = null;
var G__36821 = (0);
var G__36822 = (0);
seq__36769_36798 = G__36819;
chunk__36770_36799 = G__36820;
count__36771_36800 = G__36821;
i__36772_36801 = G__36822;
continue;
}
} else {
}
}
break;
}
}

var _refs_36823 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_36823)){
} else {
var seq__36777_36824 = cljs.core.seq.call(null,_refs_36823);
var chunk__36778_36825 = null;
var count__36779_36826 = (0);
var i__36780_36827 = (0);
while(true){
if((i__36780_36827 < count__36779_36826)){
var vec__36781_36828 = cljs.core._nth.call(null,chunk__36778_36825,i__36780_36827);
var path_36829__$1 = cljs.core.nth.call(null,vec__36781_36828,(0),null);
var cs_36830 = cljs.core.nth.call(null,vec__36781_36828,(1),null);
var cs_36831__$1 = cljs.core.deref.call(null,cs_36830);
var seq__36782_36832 = cljs.core.seq.call(null,cs_36831__$1);
var chunk__36783_36833 = null;
var count__36784_36834 = (0);
var i__36785_36835 = (0);
while(true){
if((i__36785_36835 < count__36784_36834)){
var vec__36786_36836 = cljs.core._nth.call(null,chunk__36783_36833,i__36785_36835);
var id_36837 = cljs.core.nth.call(null,vec__36786_36836,(0),null);
var c_36838 = cljs.core.nth.call(null,vec__36786_36836,(1),null);
if(cljs.core.truth_(c_36838.shouldComponentUpdate(c_36838.props,c_36838.state))){
c_36838.forceUpdate();
} else {
}

var G__36839 = seq__36782_36832;
var G__36840 = chunk__36783_36833;
var G__36841 = count__36784_36834;
var G__36842 = (i__36785_36835 + (1));
seq__36782_36832 = G__36839;
chunk__36783_36833 = G__36840;
count__36784_36834 = G__36841;
i__36785_36835 = G__36842;
continue;
} else {
var temp__4406__auto___36843 = cljs.core.seq.call(null,seq__36782_36832);
if(temp__4406__auto___36843){
var seq__36782_36844__$1 = temp__4406__auto___36843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36782_36844__$1)){
var c__11728__auto___36845 = cljs.core.chunk_first.call(null,seq__36782_36844__$1);
var G__36846 = cljs.core.chunk_rest.call(null,seq__36782_36844__$1);
var G__36847 = c__11728__auto___36845;
var G__36848 = cljs.core.count.call(null,c__11728__auto___36845);
var G__36849 = (0);
seq__36782_36832 = G__36846;
chunk__36783_36833 = G__36847;
count__36784_36834 = G__36848;
i__36785_36835 = G__36849;
continue;
} else {
var vec__36787_36850 = cljs.core.first.call(null,seq__36782_36844__$1);
var id_36851 = cljs.core.nth.call(null,vec__36787_36850,(0),null);
var c_36852 = cljs.core.nth.call(null,vec__36787_36850,(1),null);
if(cljs.core.truth_(c_36852.shouldComponentUpdate(c_36852.props,c_36852.state))){
c_36852.forceUpdate();
} else {
}

var G__36853 = cljs.core.next.call(null,seq__36782_36844__$1);
var G__36854 = null;
var G__36855 = (0);
var G__36856 = (0);
seq__36782_36832 = G__36853;
chunk__36783_36833 = G__36854;
count__36784_36834 = G__36855;
i__36785_36835 = G__36856;
continue;
}
} else {
}
}
break;
}

var G__36857 = seq__36777_36824;
var G__36858 = chunk__36778_36825;
var G__36859 = count__36779_36826;
var G__36860 = (i__36780_36827 + (1));
seq__36777_36824 = G__36857;
chunk__36778_36825 = G__36858;
count__36779_36826 = G__36859;
i__36780_36827 = G__36860;
continue;
} else {
var temp__4406__auto___36861 = cljs.core.seq.call(null,seq__36777_36824);
if(temp__4406__auto___36861){
var seq__36777_36862__$1 = temp__4406__auto___36861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36777_36862__$1)){
var c__11728__auto___36863 = cljs.core.chunk_first.call(null,seq__36777_36862__$1);
var G__36864 = cljs.core.chunk_rest.call(null,seq__36777_36862__$1);
var G__36865 = c__11728__auto___36863;
var G__36866 = cljs.core.count.call(null,c__11728__auto___36863);
var G__36867 = (0);
seq__36777_36824 = G__36864;
chunk__36778_36825 = G__36865;
count__36779_36826 = G__36866;
i__36780_36827 = G__36867;
continue;
} else {
var vec__36788_36868 = cljs.core.first.call(null,seq__36777_36862__$1);
var path_36869__$1 = cljs.core.nth.call(null,vec__36788_36868,(0),null);
var cs_36870 = cljs.core.nth.call(null,vec__36788_36868,(1),null);
var cs_36871__$1 = cljs.core.deref.call(null,cs_36870);
var seq__36789_36872 = cljs.core.seq.call(null,cs_36871__$1);
var chunk__36790_36873 = null;
var count__36791_36874 = (0);
var i__36792_36875 = (0);
while(true){
if((i__36792_36875 < count__36791_36874)){
var vec__36793_36876 = cljs.core._nth.call(null,chunk__36790_36873,i__36792_36875);
var id_36877 = cljs.core.nth.call(null,vec__36793_36876,(0),null);
var c_36878 = cljs.core.nth.call(null,vec__36793_36876,(1),null);
if(cljs.core.truth_(c_36878.shouldComponentUpdate(c_36878.props,c_36878.state))){
c_36878.forceUpdate();
} else {
}

var G__36879 = seq__36789_36872;
var G__36880 = chunk__36790_36873;
var G__36881 = count__36791_36874;
var G__36882 = (i__36792_36875 + (1));
seq__36789_36872 = G__36879;
chunk__36790_36873 = G__36880;
count__36791_36874 = G__36881;
i__36792_36875 = G__36882;
continue;
} else {
var temp__4406__auto___36883__$1 = cljs.core.seq.call(null,seq__36789_36872);
if(temp__4406__auto___36883__$1){
var seq__36789_36884__$1 = temp__4406__auto___36883__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36789_36884__$1)){
var c__11728__auto___36885 = cljs.core.chunk_first.call(null,seq__36789_36884__$1);
var G__36886 = cljs.core.chunk_rest.call(null,seq__36789_36884__$1);
var G__36887 = c__11728__auto___36885;
var G__36888 = cljs.core.count.call(null,c__11728__auto___36885);
var G__36889 = (0);
seq__36789_36872 = G__36886;
chunk__36790_36873 = G__36887;
count__36791_36874 = G__36888;
i__36792_36875 = G__36889;
continue;
} else {
var vec__36794_36890 = cljs.core.first.call(null,seq__36789_36884__$1);
var id_36891 = cljs.core.nth.call(null,vec__36794_36890,(0),null);
var c_36892 = cljs.core.nth.call(null,vec__36794_36890,(1),null);
if(cljs.core.truth_(c_36892.shouldComponentUpdate(c_36892.props,c_36892.state))){
c_36892.forceUpdate();
} else {
}

var G__36893 = cljs.core.next.call(null,seq__36789_36884__$1);
var G__36894 = null;
var G__36895 = (0);
var G__36896 = (0);
seq__36789_36872 = G__36893;
chunk__36790_36873 = G__36894;
count__36791_36874 = G__36895;
i__36792_36875 = G__36896;
continue;
}
} else {
}
}
break;
}

var G__36897 = cljs.core.next.call(null,seq__36777_36862__$1);
var G__36898 = null;
var G__36899 = (0);
var G__36900 = (0);
seq__36777_36824 = G__36897;
chunk__36778_36825 = G__36898;
count__36779_36826 = G__36899;
i__36780_36827 = G__36900;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__36733,map__36733__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4406__auto__)){
var f = temp__4406__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__36902 = x;
if(G__36902){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36902.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__36902.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__36902);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__36902);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__36904 = cursor;
if(G__36904){
var bit__11622__auto__ = null;
if(cljs.core.truth_((function (){var or__10941__auto__ = bit__11622__auto__;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
} else {
return G__36904.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__36904.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__36904);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__36904);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4406__auto__ = owner.refs;
if(cljs.core.truth_(temp__4406__auto__)){
var refs = temp__4406__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
