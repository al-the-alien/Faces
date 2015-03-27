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

om.core.IDisplayName = (function (){var obj19126 = {};
return obj19126;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.display_name[(function (){var G__19130 = x__6534__auto__;
return goog.typeOf(G__19130);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.display_name["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj19132 = {};
return obj19132;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.init_state[(function (){var G__19136 = x__6534__auto__;
return goog.typeOf(G__19136);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.init_state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj19138 = {};
return obj19138;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.should_update[(function (){var G__19142 = x__6534__auto__;
return goog.typeOf(G__19142);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.should_update["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj19144 = {};
return obj19144;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.will_mount[(function (){var G__19148 = x__6534__auto__;
return goog.typeOf(G__19148);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.will_mount["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj19150 = {};
return obj19150;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.did_mount[(function (){var G__19154 = x__6534__auto__;
return goog.typeOf(G__19154);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.did_mount["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj19156 = {};
return obj19156;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.will_unmount[(function (){var G__19160 = x__6534__auto__;
return goog.typeOf(G__19160);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.will_unmount["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj19162 = {};
return obj19162;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.will_update[(function (){var G__19166 = x__6534__auto__;
return goog.typeOf(G__19166);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.will_update["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj19168 = {};
return obj19168;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.did_update[(function (){var G__19172 = x__6534__auto__;
return goog.typeOf(G__19172);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.did_update["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj19174 = {};
return obj19174;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.will_receive_props[(function (){var G__19178 = x__6534__auto__;
return goog.typeOf(G__19178);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.will_receive_props["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj19180 = {};
return obj19180;
})();

om.core.render = (function render(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.render[(function (){var G__19184 = x__6534__auto__;
return goog.typeOf(G__19184);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.render["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj19186 = {};
return obj19186;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.render_props[(function (){var G__19190 = x__6534__auto__;
return goog.typeOf(G__19190);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.render_props["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj19192 = {};
return obj19192;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core.render_state[(function (){var G__19196 = x__6534__auto__;
return goog.typeOf(G__19196);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core.render_state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj19198 = {};
return obj19198;
})();


om.core.IOmSwap = (function (){var obj19200 = {};
return obj19200;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._om_swap_BANG_[(function (){var G__19204 = x__6534__auto__;
return goog.typeOf(G__19204);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj19206 = {};
return obj19206;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_state[(function (){var G__19212 = x__6534__auto__;
return goog.typeOf(G__19212);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_state[(function (){var G__19214 = x__6534__auto__;
return goog.typeOf(G__19214);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
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


om.core.IGetRenderState = (function (){var obj19216 = {};
return obj19216;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_render_state[(function (){var G__19222 = x__6534__auto__;
return goog.typeOf(G__19222);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_render_state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_render_state[(function (){var G__19224 = x__6534__auto__;
return goog.typeOf(G__19224);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_render_state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
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


om.core.ISetState = (function (){var obj19226 = {};
return obj19226;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._set_state_BANG_[(function (){var G__19232 = x__6534__auto__;
return goog.typeOf(G__19232);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._set_state_BANG_[(function (){var G__19234 = x__6534__auto__;
return goog.typeOf(G__19234);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
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


om.core.IRenderQueue = (function (){var obj19236 = {};
return obj19236;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_queue[(function (){var G__19240 = x__6534__auto__;
return goog.typeOf(G__19240);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_queue["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._queue_render_BANG_[(function (){var G__19244 = x__6534__auto__;
return goog.typeOf(G__19244);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._empty_queue_BANG_[(function (){var G__19248 = x__6534__auto__;
return goog.typeOf(G__19248);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj19250 = {};
return obj19250;
})();

om.core._value = (function _value(x){
if((function (){var and__5878__auto__ = x;
if(and__5878__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__5878__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__6534__auto__ = (((x == null))?null:x);
return (function (){var or__5890__auto__ = (om.core._value[(function (){var G__19254 = x__6534__auto__;
return goog.typeOf(G__19254);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._value["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj19256 = {};
return obj19256;
})();

om.core._path = (function _path(cursor){
if((function (){var and__5878__auto__ = cursor;
if(and__5878__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__5878__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__6534__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__5890__auto__ = (om.core._path[(function (){var G__19260 = x__6534__auto__;
return goog.typeOf(G__19260);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._path["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__5878__auto__ = cursor;
if(and__5878__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__5878__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__6534__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__5890__auto__ = (om.core._state[(function (){var G__19264 = x__6534__auto__;
return goog.typeOf(G__19264);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._state["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj19266 = {};
return obj19266;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__5878__auto__ = value;
if(and__5878__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__5878__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__6534__auto__ = (((value == null))?null:value);
return (function (){var or__5890__auto__ = (om.core._to_cursor[(function (){var G__19272 = x__6534__auto__;
return goog.typeOf(G__19272);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._to_cursor["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__5878__auto__ = value;
if(and__5878__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__5878__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__6534__auto__ = (((value == null))?null:value);
return (function (){var or__5890__auto__ = (om.core._to_cursor[(function (){var G__19274 = x__6534__auto__;
return goog.typeOf(G__19274);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._to_cursor["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
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


om.core.ICursorDerive = (function (){var obj19276 = {};
return obj19276;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__5878__auto__ = cursor;
if(and__5878__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__5878__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__6534__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__5890__auto__ = (om.core._derive[(function (){var G__19280 = x__6534__auto__;
return goog.typeOf(G__19280);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._derive["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
var G__19281 = derived;
var G__19282 = state;
var G__19283 = path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__19281,G__19282,G__19283) : om.core.to_cursor.call(null,G__19281,G__19282,G__19283));
}));
om.core.path = (function path(cursor){
return om.core._path(cursor);
});
om.core.value = (function value(cursor){
return om.core._value(cursor);
});
om.core.state = (function state(cursor){
return om.core._state(cursor);
});

om.core.ITransact = (function (){var obj19285 = {};
return obj19285;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__5878__auto__ = cursor;
if(and__5878__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__5878__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__6534__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__5890__auto__ = (om.core._transact_BANG_[(function (){var G__19289 = x__6534__auto__;
return goog.typeOf(G__19289);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj19291 = {};
return obj19291;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__5878__auto__ = x;
if(and__5878__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__5878__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__6534__auto__ = (((x == null))?null:x);
return (function (){var or__5890__auto__ = (om.core._listen_BANG_[(function (){var G__19295 = x__6534__auto__;
return goog.typeOf(G__19295);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__5878__auto__ = x;
if(and__5878__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__5878__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__6534__auto__ = (((x == null))?null:x);
return (function (){var or__5890__auto__ = (om.core._unlisten_BANG_[(function (){var G__19299 = x__6534__auto__;
return goog.typeOf(G__19299);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__5878__auto__ = x;
if(and__5878__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__5878__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__6534__auto__ = (((x == null))?null:x);
return (function (){var or__5890__auto__ = (om.core._notify_BANG_[(function (){var G__19303 = x__6534__auto__;
return goog.typeOf(G__19303);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj19305 = {};
return obj19305;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._set_property_BANG_[(function (){var G__19309 = x__6534__auto__;
return goog.typeOf(G__19309);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._remove_property_BANG_[(function (){var G__19313 = x__6534__auto__;
return goog.typeOf(G__19313);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._remove_properties_BANG_[(function (){var G__19317 = x__6534__auto__;
return goog.typeOf(G__19317);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_property[(function (){var G__19321 = x__6534__auto__;
return goog.typeOf(G__19321);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_property["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj19323 = {};
return obj19323;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__5878__auto__ = cursor;
if(and__5878__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__5878__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__6534__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__5890__auto__ = (om.core._root_key[(function (){var G__19327 = x__6534__auto__;
return goog.typeOf(G__19327);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._root_key["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj19329 = {};
return obj19329;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._adapt[(function (){var G__19333 = x__6534__auto__;
return goog.typeOf(G__19333);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._adapt["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
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
return om.core._adapt(x,other);
});

om.core.IOmRef = (function (){var obj19335 = {};
return obj19335;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._add_dep_BANG_[(function (){var G__19339 = x__6534__auto__;
return goog.typeOf(G__19339);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._remove_dep_BANG_[(function (){var G__19343 = x__6534__auto__;
return goog.typeOf(G__19343);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._refresh_deps_BANG_[(function (){var G__19347 = x__6534__auto__;
return goog.typeOf(G__19347);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__5878__auto__ = this$;
if(and__5878__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__5878__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__6534__auto__ = (((this$ == null))?null:this$);
return (function (){var or__5890__auto__ = (om.core._get_deps[(function (){var G__19351 = x__6534__auto__;
return goog.typeOf(G__19351);
})()]);
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (om.core._get_deps["_"]);
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = (function (){var G__19361 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19361) : cljs.core.deref.call(null,G__19361));
})();
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__19362 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__19362) : om.core.path.call(null,G__19362));
})(),korks);
var ret = (((function (){var G__19363 = state;
if(G__19363){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19363.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__19363.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__19363);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__19363);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$51)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$52,path,cljs.core.constant$keyword$53,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$54,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19364 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19364) : cljs.core.deref.call(null,G__19364));
})(),path),cljs.core.constant$keyword$55,old_state,cljs.core.constant$keyword$56,(function (){var G__19365 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19365) : cljs.core.deref.call(null,G__19365));
})()], null);
if(!((tag == null))){
var G__19366 = cursor;
var G__19367 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$57,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__19366,G__19367) : om.core.notify_STAR_.call(null,G__19366,G__19367));
} else {
var G__19368 = cursor;
var G__19369 = tx_data;
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__19368,G__19369) : om.core.notify_STAR_.call(null,G__19368,G__19369));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__19371 = x;
if(G__19371){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19371.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__19371.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__19371);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__19371);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (function (){var G__19373 = node;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__19373) : c.call(null,G__19373));
})();
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
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__19375 = (x.props["__om_cursor"]);
var G__19375__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__19375,korks__$1):G__19375);
return G__19375__$1;
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
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
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

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
var G__19380 = state;
(G__19380["__om_prev_state"] = (state["__om_state"]));

(G__19380["__om_state"] = pending_state);

(G__19380["__om_pending_state"] = null);

return G__19380;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__5890__auto__ = props;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return owner.props;
}
})();
var temp__4406__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4406__auto__)){
var props_state = temp__4406__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__5890__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

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
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__19385 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19385) : cljs.core.deref.call(null,G__19385));
})(),(function (){var G__19386 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__19386) : om.core.path.call(null,G__19386));
})(),cljs.core.constant$keyword$58);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = (function (){var G__19392 = ref;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__19392) : om.core.path.call(null,G__19392));
})();
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__19393 = ref_state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19393) : cljs.core.deref.call(null,G__19393));
})(),ref_path,cljs.core.constant$keyword$58);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.constant$keyword$58)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(function (){var G__19394 = ref_val_SINGLEQUOTE_;
var G__19395 = ref_state;
var G__19396 = ref_path;
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(G__19394,G__19395,G__19396) : om.core.to_cursor.call(null,G__19394,G__19395,G__19396));
})());
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
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$59,cljs.core.constant$keyword$60,cljs.core.constant$keyword$61,cljs.core.constant$keyword$62,cljs.core.constant$keyword$63,cljs.core.constant$keyword$64,cljs.core.constant$keyword$65,cljs.core.constant$keyword$66,cljs.core.constant$keyword$67,cljs.core.constant$keyword$68,cljs.core.constant$keyword$69],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__19398 = c;
if(G__19398){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19398.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__19398.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__19398);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__19398);
}
})()){
var state_19423 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__5890__auto__ = (state_19423["__om_prev_state"]);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return (state_19423["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__19399 = c;
if(G__19399){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19399.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__19399.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__19399);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__19399);
}
})()){
om.core.will_unmount(c);
} else {
}

var temp__4406__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4406__auto__){
var refs = temp__4406__auto__;
var seq__19400 = cljs.core.seq(refs);
var chunk__19401 = null;
var count__19402 = (0);
var i__19403 = (0);
while(true){
if((i__19403 < count__19402)){
var ref = chunk__19401.cljs$core$IIndexed$_nth$arity$2(null,i__19403);
var G__19404_19424 = this$;
var G__19405_19425 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__19404_19424,G__19405_19425) : om.core.unobserve.call(null,G__19404_19424,G__19405_19425));

var G__19426 = seq__19400;
var G__19427 = chunk__19401;
var G__19428 = count__19402;
var G__19429 = (i__19403 + (1));
seq__19400 = G__19426;
chunk__19401 = G__19427;
count__19402 = G__19428;
i__19403 = G__19429;
continue;
} else {
var temp__4406__auto____$1 = cljs.core.seq(seq__19400);
if(temp__4406__auto____$1){
var seq__19400__$1 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19400__$1)){
var c__6677__auto__ = cljs.core.chunk_first(seq__19400__$1);
var G__19430 = cljs.core.chunk_rest(seq__19400__$1);
var G__19431 = c__6677__auto__;
var G__19432 = cljs.core.count(c__6677__auto__);
var G__19433 = (0);
seq__19400 = G__19430;
chunk__19401 = G__19431;
count__19402 = G__19432;
i__19403 = G__19433;
continue;
} else {
var ref = cljs.core.first(seq__19400__$1);
var G__19406_19434 = this$;
var G__19407_19435 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__19406_19434,G__19407_19435) : om.core.unobserve.call(null,G__19406_19434,G__19407_19435));

var G__19436 = cljs.core.next(seq__19400__$1);
var G__19437 = null;
var G__19438 = (0);
var G__19439 = (0);
seq__19400 = G__19436;
chunk__19401 = G__19437;
count__19402 = G__19438;
i__19403 = G__19439;
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
var c = om.core.children(this$);
if((function (){var G__19408 = c;
if(G__19408){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19408.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__19408.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__19408);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__19408);
}
})()){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if((function (){var G__19409 = c;
if(G__19409){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19409.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__19409.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__19409);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__19409);
}
})()){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_(cursor)) && (om.core.cursor_QMARK_(next_cursor)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5878__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__5878__auto__){
return cljs.core.some(((function (and__5878__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__19397_SHARP_){
return om.core.ref_changed_QMARK_(p1__19397_SHARP_);
});})(and__5878__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__5878__auto__;
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
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_19410 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_19411 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_19412 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_19413 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_19414 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__19415 = c;
if(G__19415){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19415.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__19415.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__19415);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__19415);
}
})()){
return om.core.render(c);
} else {
if((function (){var G__19416 = c;
if(G__19416){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19416.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__19416.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__19416);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__19416);
}
})()){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if((function (){var G__19417 = c;
if(G__19417){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19417.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__19417.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__19417);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__19417);
}
})()){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_19414;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_19413;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_19412;

om.core._STAR_state_STAR_ = _STAR_state_STAR_19411;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_19410;
}}),(function (next_props,next_state){
var this$ = this;
var c_19440 = om.core.children(this$);
if((function (){var G__19418 = c_19440;
if(G__19418){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19418.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__19418.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__19418);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__19418);
}
})()){
var state_19441 = this$.state;
om.core.will_update(c_19440,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__5890__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(((function (){var G__19419 = c;
if(G__19419){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19419.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__19419.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__19419);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__19419);
}
})())?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$70)], 0)), "__om_id": (function (){var or__5890__auto__ = id;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__19420 = c;
if(G__19420){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19420.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__19420.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__19420);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__19420);
}
})()){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__19421 = c;
if(G__19421){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19421.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__19421.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__19421);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__19421);
}
})()){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_19442 = om.core.children(this$);
if((function (){var G__19422 = c_19442;
if(G__19422){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19422.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__19422.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__19422);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__19422);
}
})()){
om.core.will_mount(c_19442);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x19444 = obj;
x19444.om$core$IGetState$ = true;

x19444.om$core$IGetState$_get_state$arity$1 = ((function (x19444){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__5890__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return (state["__om_state"]);
}
});})(x19444))
;

x19444.om$core$IGetState$_get_state$arity$2 = ((function (x19444){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19444))
;

x19444.om$core$IGetRenderState$ = true;

x19444.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x19444){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x19444))
;

x19444.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x19444){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19444))
;

x19444.om$core$ISetState$ = true;

x19444.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x19444){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__5878__auto__ = !((app_state == null));
if(and__5878__auto__){
return render;
} else {
return and__5878__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x19444))
;

x19444.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x19444){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__5878__auto__ = !((app_state == null));
if(and__5878__auto__){
return render;
} else {
return and__5878__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x19444))
;

return x19444;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"id","id",252129435,null)], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19446 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19446) : cljs.core.deref.call(null,G__19446));
})(),spath);
if(cljs.core.truth_(cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.constant$keyword$73,cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.constant$keyword$74,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.constant$keyword$72);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.constant$keyword$66,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__5890__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__5890__auto__ = cljs.core.constant$keyword$70.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$70),(((function (){var G__19447 = c;
if(G__19447){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19447.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__19447.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__19447);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__19447);
}
})())?om.core.init_state(c):null)], 0));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(this$),cljs.core.constant$keyword$74], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.constant$keyword$69,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_19461 = om.core.children(this$);
if((function (){var G__19448 = c_19461;
if(G__19448){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19448.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__19448.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__19448);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__19448);
}
})()){
om.core.will_mount(c_19461);
} else {
}

return om.core.no_local_merge_pending_state(this$);
}),cljs.core.constant$keyword$61,(function (){
var this$ = this;
var c = om.core.children(this$);
if((function (){var G__19449 = c;
if(G__19449){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19449.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__19449.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__19449);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__19449);
}
})()){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4406__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4406__auto__){
var refs = temp__4406__auto__;
var seq__19450 = cljs.core.seq(refs);
var chunk__19451 = null;
var count__19452 = (0);
var i__19453 = (0);
while(true){
if((i__19453 < count__19452)){
var ref = chunk__19451.cljs$core$IIndexed$_nth$arity$2(null,i__19453);
var G__19454_19462 = this$;
var G__19455_19463 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__19454_19462,G__19455_19463) : om.core.unobserve.call(null,G__19454_19462,G__19455_19463));

var G__19464 = seq__19450;
var G__19465 = chunk__19451;
var G__19466 = count__19452;
var G__19467 = (i__19453 + (1));
seq__19450 = G__19464;
chunk__19451 = G__19465;
count__19452 = G__19466;
i__19453 = G__19467;
continue;
} else {
var temp__4406__auto____$1 = cljs.core.seq(seq__19450);
if(temp__4406__auto____$1){
var seq__19450__$1 = temp__4406__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19450__$1)){
var c__6677__auto__ = cljs.core.chunk_first(seq__19450__$1);
var G__19468 = cljs.core.chunk_rest(seq__19450__$1);
var G__19469 = c__6677__auto__;
var G__19470 = cljs.core.count(c__6677__auto__);
var G__19471 = (0);
seq__19450 = G__19468;
chunk__19451 = G__19469;
count__19452 = G__19470;
i__19453 = G__19471;
continue;
} else {
var ref = cljs.core.first(seq__19450__$1);
var G__19456_19472 = this$;
var G__19457_19473 = ref;
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(G__19456_19472,G__19457_19473) : om.core.unobserve.call(null,G__19456_19472,G__19457_19473));

var G__19474 = cljs.core.next(seq__19450__$1);
var G__19475 = null;
var G__19476 = (0);
var G__19477 = (0);
seq__19450 = G__19474;
chunk__19451 = G__19475;
count__19452 = G__19476;
i__19453 = G__19477;
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
}),cljs.core.constant$keyword$65,(function (next_props,next_state){
var this$ = this;
var props_19478 = this$.props;
var c_19479 = om.core.children(this$);
if((function (){var G__19458 = c_19479;
if(G__19458){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19458.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__19458.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__19458);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__19458);
}
})()){
var state_19480 = this$.state;
om.core.will_update(c_19479,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.constant$keyword$59,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19459 = gstate;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19459) : cljs.core.deref.call(null,G__19459));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(this$)], null);
if((function (){var G__19460 = c;
if(G__19460){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19460.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__19460.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__19460);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__19460);
}
})()){
var state_19481 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"isOmComponent": true, "props": prev_props}),(function (){var or__5890__auto__ = cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.constant$keyword$73], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x19485 = cljs.core.clj__GT_js(methods$);
x19485.om$core$IGetState$ = true;

x19485.om$core$IGetState$_get_state$arity$1 = ((function (x19485){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19486 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19486) : cljs.core.deref.call(null,G__19486));
})(),spath);
var or__5890__auto__ = cljs.core.constant$keyword$72.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(states);
}
});})(x19485))
;

x19485.om$core$IGetState$_get_state$arity$2 = ((function (x19485){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19485))
;

x19485.om$core$IGetRenderState$ = true;

x19485.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x19485){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(this$__$1),cljs.core.constant$keyword$74], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19487 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19487) : cljs.core.deref.call(null,G__19487));
})(),spath);
});})(x19485))
;

x19485.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x19485){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x19485))
;

x19485.om$core$ISetState$ = true;

x19485.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x19485){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,om.core.react_id(this$__$1),cljs.core.constant$keyword$72], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__5878__auto__ = !((gstate == null));
if(and__5878__auto__){
return render;
} else {
return and__5878__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x19485))
;

x19485.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x19485){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x19485))
;

return x19485;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__19490 = x;
if(G__19490){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19490.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__19490.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__19490);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__19490);
}
})()){
return !(cljs.core.keyword_identical_QMARK_((function (){var G__19491 = x;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19491) : cljs.core.deref.call(null,G__19491));
})(),cljs.core.constant$keyword$75));
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
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.constant$keyword$58);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.constant$keyword$58))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
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
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
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
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__19493){
var vec__19494 = p__19493;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19494,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19494,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__19496 = null;
var G__19496__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19496__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19496 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19496__2.call(this,self__,k);
case 3:
return G__19496__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19496.cljs$core$IFn$_invoke$arity$2 = G__19496__2;
G__19496.cljs$core$IFn$_invoke$arity$3 = G__19496__3;
return G__19496;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args19492){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19492)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__19495 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19495) : cljs.core.deref.call(null,G__19495));
})(),self__.path,cljs.core.constant$keyword$75);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__6477__auto__,writer__6478__auto__,opt__6479__auto__){
return cljs.core._write(writer__6478__auto__,"om.core/MapCursor");
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
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
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
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
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
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__19499 = null;
var G__19499__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19499__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19499 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19499__2.call(this,self__,k);
case 3:
return G__19499__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19499.cljs$core$IFn$_invoke$arity$2 = G__19499__2;
G__19499.cljs$core$IFn$_invoke$arity$3 = G__19499__3;
return G__19499;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args19497){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19497)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__19498 = self__.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19498) : cljs.core.deref.call(null,G__19498));
})(),self__.path,cljs.core.constant$keyword$75);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__6477__auto__,writer__6478__auto__,opt__6479__auto__){
return cljs.core._write(writer__6478__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x19502 = cljs.core.clone(val);
x19502.cljs$core$IEquiv$ = true;

x19502.cljs$core$IEquiv$_equiv$arity$2 = ((function (x19502){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_(other)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x19502))
;

x19502.om$core$ITransact$ = true;

x19502.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x19502){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x19502))
;

x19502.om$core$ICursor$ = true;

x19502.om$core$ICursor$_path$arity$1 = ((function (x19502){
return (function (_){
var ___$1 = this;
return path;
});})(x19502))
;

x19502.om$core$ICursor$_state$arity$1 = ((function (x19502){
return (function (_){
var ___$1 = this;
return state;
});})(x19502))
;

x19502.cljs$core$IDeref$ = true;

x19502.cljs$core$IDeref$_deref$arity$1 = ((function (x19502){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__19503 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19503) : cljs.core.deref.call(null,G__19503));
})(),path,cljs.core.constant$keyword$75);
});})(x19502))
;

return x19502;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_(val)){
return val;
} else {
if((function (){var G__19512 = val;
if(G__19512){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19512.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__19512.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__19512);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__19512);
}
})()){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__19513 = val;
if(G__19513){
var bit__6571__auto__ = (G__19513.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__6571__auto__) || (G__19513.cljs$core$ICloneable$)){
return true;
} else {
if((!G__19513.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__19513);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__19513);
}
})()){
return om.core.to_cursor_STAR_(val,state,path);
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
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((function (){var G__19515 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19515) : cljs.core.deref.call(null,G__19515));
})(),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__19518 = atom;
if(G__19518){
var bit__6571__auto__ = (G__19518.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__6571__auto__) || (G__19518.cljs$core$IDeref$)){
return true;
} else {
if((!G__19518.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19518);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__19518);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((function (){var G__19519 = atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19519) : cljs.core.deref.call(null,G__19519));
})(),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__19520 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19520) : cljs.core.atom.call(null,G__19520));
})();
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x19529 = cljs.core.clone(x);
x19529.om$core$ITransact$ = true;

x19529.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x19529){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
var G__19530_19533 = cursor__$1;
var G__19531_19534 = korks;
var G__19532_19535 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__19530_19533,G__19531_19534,G__19532_19535) : om.core.commit_BANG_.call(null,G__19530_19533,G__19531_19534,G__19532_19535));

return om.core._refresh_deps_BANG_(parent);
});})(x19529))
;

x19529.om$core$ICursorDerive$ = true;

x19529.om$core$ICursorDerive$_derive$arity$4 = ((function (x19529){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x19529))
;

x19529.om$core$IAdapt$ = true;

x19529.om$core$IAdapt$_adapt$arity$2 = ((function (x19529){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x19529))
;

x19529.cljs$core$ICloneable$ = true;

x19529.cljs$core$ICloneable$_clone$arity$1 = ((function (x19529){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor(cljs.core.clone(x),parent);
});})(x19529))
;

return x19529;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if((function (){var G__19551 = cursor;
if(G__19551){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19551.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__19551.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__19551);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,G__19551);
}
})()){
return cursor;
} else {
var path = (function (){var G__19552 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__19552) : om.core.path.call(null,G__19552));
})();
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__19553 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19553) : cljs.core.atom.call(null,G__19553));
})())),path);
var x19554 = cljs.core.clone(cursor);
x19554.om$core$ITransact$ = true;

x19554.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x19554,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
var G__19555_19566 = cursor__$2;
var G__19556_19567 = korks;
var G__19557_19568 = f;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(G__19555_19566,G__19556_19567,G__19557_19568) : om.core.commit_BANG_.call(null,G__19555_19566,G__19556_19567,G__19557_19568));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x19554,path,storage))
;

x19554.om$core$IOmRef$ = true;

x19554.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x19554,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(function (){var G__19558 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__19558) : om.core.id.call(null,G__19558));
})(),c);
});})(x19554,path,storage))
;

x19554.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x19554,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(function (){var G__19559 = c;
return (om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(G__19559) : om.core.id.call(null,G__19559));
})());
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x19554,path,storage))
;

x19554.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x19554,path,storage){
return (function (_){
var ___$1 = this;
var seq__19560 = cljs.core.seq(cljs.core.vals((function (){var G__19564 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19564) : cljs.core.deref.call(null,G__19564));
})()));
var chunk__19561 = null;
var count__19562 = (0);
var i__19563 = (0);
while(true){
if((i__19563 < count__19562)){
var c = chunk__19561.cljs$core$IIndexed$_nth$arity$2(null,i__19563);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__19569 = seq__19560;
var G__19570 = chunk__19561;
var G__19571 = count__19562;
var G__19572 = (i__19563 + (1));
seq__19560 = G__19569;
chunk__19561 = G__19570;
count__19562 = G__19571;
i__19563 = G__19572;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq(seq__19560);
if(temp__4406__auto__){
var seq__19560__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19560__$1)){
var c__6677__auto__ = cljs.core.chunk_first(seq__19560__$1);
var G__19573 = cljs.core.chunk_rest(seq__19560__$1);
var G__19574 = c__6677__auto__;
var G__19575 = cljs.core.count(c__6677__auto__);
var G__19576 = (0);
seq__19560 = G__19573;
chunk__19561 = G__19574;
count__19562 = G__19575;
i__19563 = G__19576;
continue;
} else {
var c = cljs.core.first(seq__19560__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__19577 = cljs.core.next(seq__19560__$1);
var G__19578 = null;
var G__19579 = (0);
var G__19580 = (0);
seq__19560 = G__19577;
chunk__19561 = G__19578;
count__19562 = G__19579;
i__19563 = G__19580;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19554,path,storage))
;

x19554.om$core$IOmRef$_get_deps$arity$1 = ((function (x19554,path,storage){
return (function (_){
var ___$1 = this;
var G__19565 = storage;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19565) : cljs.core.deref.call(null,G__19565));
});})(x19554,path,storage))
;

x19554.om$core$ICursorDerive$ = true;

x19554.om$core$ICursorDerive$_derive$arity$4 = ((function (x19554,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x19554,path,storage))
;

return x19554;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__5890__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))], 0)))].join('')));
}

if(om.core.cursor_QMARK_(ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__19581 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19581) : cljs.core.atom.call(null,G__19581));
})();
om.core.get_renderT = (function get_renderT(state){
var or__5890__auto__ = state.om$render$T;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
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
return render_all.cljs$core$IFn$_invoke$arity$1(null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__19588_19593 = cljs.core.seq((function (){var G__19592 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19592) : cljs.core.deref.call(null,G__19592));
})());
var chunk__19589_19594 = null;
var count__19590_19595 = (0);
var i__19591_19596 = (0);
while(true){
if((i__19591_19596 < count__19590_19595)){
var f_19597 = chunk__19589_19594.cljs$core$IIndexed$_nth$arity$2(null,i__19591_19596);
(f_19597.cljs$core$IFn$_invoke$arity$0 ? f_19597.cljs$core$IFn$_invoke$arity$0() : f_19597.call(null));

var G__19598 = seq__19588_19593;
var G__19599 = chunk__19589_19594;
var G__19600 = count__19590_19595;
var G__19601 = (i__19591_19596 + (1));
seq__19588_19593 = G__19598;
chunk__19589_19594 = G__19599;
count__19590_19595 = G__19600;
i__19591_19596 = G__19601;
continue;
} else {
var temp__4406__auto___19602 = cljs.core.seq(seq__19588_19593);
if(temp__4406__auto___19602){
var seq__19588_19603__$1 = temp__4406__auto___19602;
if(cljs.core.chunked_seq_QMARK_(seq__19588_19603__$1)){
var c__6677__auto___19604 = cljs.core.chunk_first(seq__19588_19603__$1);
var G__19605 = cljs.core.chunk_rest(seq__19588_19603__$1);
var G__19606 = c__6677__auto___19604;
var G__19607 = cljs.core.count(c__6677__auto___19604);
var G__19608 = (0);
seq__19588_19593 = G__19605;
chunk__19589_19594 = G__19606;
count__19590_19595 = G__19607;
i__19591_19596 = G__19608;
continue;
} else {
var f_19609 = cljs.core.first(seq__19588_19603__$1);
(f_19609.cljs$core$IFn$_invoke$arity$0 ? f_19609.cljs$core$IFn$_invoke$arity$0() : f_19609.call(null));

var G__19610 = cljs.core.next(seq__19588_19603__$1);
var G__19611 = null;
var G__19612 = (0);
var G__19613 = (0);
seq__19588_19593 = G__19610;
chunk__19589_19594 = G__19611;
count__19590_19595 = G__19612;
i__19591_19596 = G__19613;
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
return state.om$render$T = (om.core.get_renderT(state) + (1));
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
om.core.roots = (function (){var G__19614 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19614) : cljs.core.atom.call(null,G__19614));
})();
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__5890__auto__ = (function (){var G__19621 = x;
if(G__19621){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19621.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__19621.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__19621);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__19621);
}
})();
if(or__5890__auto__){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = (function (){var G__19623 = x;
if(G__19623){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto____$1 = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto____$1)){
return or__5890__auto____$1;
} else {
return G__19623.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__19623.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__19623);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,G__19623);
}
})();
if(or__5890__auto____$1){
return or__5890__auto____$1;
} else {
var G__19624 = x;
if(G__19624){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto____$2 = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto____$2)){
return or__5890__auto____$2;
} else {
return G__19624.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__19624.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__19624);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__19624);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.constant$keyword$76,null,cljs.core.constant$keyword$77,null,cljs.core.constant$keyword$78,null,cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$81,null,cljs.core.constant$keyword$82,null,cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$85,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = (function (){var G__19629 = (function (){var G__19630 = (function (){var or__5890__auto__ = descriptor;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
var or__5890__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__5890__auto____$1)){
return or__5890__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
return React.createClass(G__19630);
})();
return React.createFactory(G__19629);
})());
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
return cljs.core.get_method(f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
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
return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(om.core.valid_opts_QMARK_(m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__19648 = {"children": ((function (shared,ctor){
return (function (this$){
var ret = (function (){var G__19649 = cursor;
var G__19650 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19649,G__19650) : f.call(null,G__19649,G__19650));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__19648) : ctor.call(null,G__19648));
} else {
var map__19651 = m;
var map__19651__$1 = ((cljs.core.seq_QMARK_(map__19651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19651):map__19651);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19651__$1,cljs.core.constant$keyword$83);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19651__$1,cljs.core.constant$keyword$80);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19651__$1,cljs.core.constant$keyword$81);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19651__$1,cljs.core.constant$keyword$82);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19651__$1,cljs.core.constant$keyword$44);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$77);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4404__auto__ = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4404__auto__)){
var i = temp__4404__auto__;
var G__19652 = cursor;
var G__19653 = i;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(G__19652,G__19653) : dataf.call(null,G__19652,G__19653));
} else {
var G__19654 = cursor;
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(G__19654) : dataf.call(null,G__19654));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(function (){var G__19655 = cursor_SINGLEQUOTE_;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19655) : key_fn.call(null,G__19655));
})():cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$79)
));
var shared = (function (){var or__5890__auto__ = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.constant$keyword$76.cljs$core$IFn$_invoke$arity$1(m));
var G__19656 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__19651,map__19651__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__19657 = cursor_SINGLEQUOTE_;
var G__19658 = this$;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19657,G__19658) : f.call(null,G__19657,G__19658));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__19651,map__19651__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__19651,map__19651__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (function (){var G__19659 = cursor_SINGLEQUOTE_;
var G__19660 = this$;
var G__19661 = opts;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19659,G__19660,G__19661) : f.call(null,G__19659,G__19660,G__19661));
})();
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__19651,map__19651__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__5890__auto__ = rkey;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__19656) : ctor.call(null,G__19656));

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
return build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (function (){var G__19668 = f;
var G__19669 = x;
var G__19670 = m;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(G__19668,G__19669,G__19670) : om.core._STAR_instrument_STAR_.call(null,G__19668,G__19669,G__19670));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$86)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
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
return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$84,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
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
if((function (){var G__19693 = state;
if(G__19693){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19693.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__19693.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__19693);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__19693);
}
})()){
} else {
var properties_19712 = (function (){var G__19694 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19694) : cljs.core.atom.call(null,G__19694));
})();
var listeners_19713 = (function (){var G__19695 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19695) : cljs.core.atom.call(null,G__19695));
})();
var render_queue_19714 = (function (){var G__19696 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19696) : cljs.core.atom.call(null,G__19696));
})();
var x19697_19715 = state;
x19697_19715.om$core$IRenderQueue$ = true;

x19697_19715.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (this$){
var this$__$1 = this;
var G__19698 = render_queue_19714;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19698) : cljs.core.deref.call(null,G__19698));
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((function (){var G__19699 = render_queue_19714;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19699) : cljs.core.deref.call(null,G__19699));
})(),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_19714,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_19714,cljs.core.empty);
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$INotify$ = true;

x19697_19715.om$core$INotify$_listen_BANG_$arity$3 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_19713,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_19713,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$INotify$_notify_BANG_$arity$3 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__19700_19716 = cljs.core.seq((function (){var G__19704 = listeners_19713;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19704) : cljs.core.deref.call(null,G__19704));
})());
var chunk__19701_19717 = null;
var count__19702_19718 = (0);
var i__19703_19719 = (0);
while(true){
if((i__19703_19719 < count__19702_19718)){
var vec__19705_19720 = chunk__19701_19717.cljs$core$IIndexed$_nth$arity$2(null,i__19703_19719);
var __19721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705_19720,(0),null);
var f_19722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19705_19720,(1),null);
var G__19706_19723 = tx_data;
var G__19707_19724 = root_cursor;
(f_19722.cljs$core$IFn$_invoke$arity$2 ? f_19722.cljs$core$IFn$_invoke$arity$2(G__19706_19723,G__19707_19724) : f_19722.call(null,G__19706_19723,G__19707_19724));

var G__19725 = seq__19700_19716;
var G__19726 = chunk__19701_19717;
var G__19727 = count__19702_19718;
var G__19728 = (i__19703_19719 + (1));
seq__19700_19716 = G__19725;
chunk__19701_19717 = G__19726;
count__19702_19718 = G__19727;
i__19703_19719 = G__19728;
continue;
} else {
var temp__4406__auto___19729 = cljs.core.seq(seq__19700_19716);
if(temp__4406__auto___19729){
var seq__19700_19730__$1 = temp__4406__auto___19729;
if(cljs.core.chunked_seq_QMARK_(seq__19700_19730__$1)){
var c__6677__auto___19731 = cljs.core.chunk_first(seq__19700_19730__$1);
var G__19732 = cljs.core.chunk_rest(seq__19700_19730__$1);
var G__19733 = c__6677__auto___19731;
var G__19734 = cljs.core.count(c__6677__auto___19731);
var G__19735 = (0);
seq__19700_19716 = G__19732;
chunk__19701_19717 = G__19733;
count__19702_19718 = G__19734;
i__19703_19719 = G__19735;
continue;
} else {
var vec__19708_19736 = cljs.core.first(seq__19700_19730__$1);
var __19737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708_19736,(0),null);
var f_19738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708_19736,(1),null);
var G__19709_19739 = tx_data;
var G__19710_19740 = root_cursor;
(f_19738.cljs$core$IFn$_invoke$arity$2 ? f_19738.cljs$core$IFn$_invoke$arity$2(G__19709_19739,G__19710_19740) : f_19738.call(null,G__19709_19739,G__19710_19740));

var G__19741 = cljs.core.next(seq__19700_19730__$1);
var G__19742 = null;
var G__19743 = (0);
var G__19744 = (0);
seq__19700_19716 = G__19741;
chunk__19701_19717 = G__19742;
count__19702_19718 = G__19743;
i__19703_19719 = G__19744;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$IRootProperties$ = true;

x19697_19715.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_19712,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_19712,cljs.core.dissoc,id,k);
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_19712,cljs.core.dissoc,id);
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

x19697_19715.om$core$IRootProperties$_get_property$arity$3 = ((function (x19697_19715,properties_19712,listeners_19713,render_queue_19714){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19711 = properties_19712;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19711) : cljs.core.deref.call(null,G__19711));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x19697_19715,properties_19712,listeners_19713,render_queue_19714))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_(cursor)){
var x19750 = cljs.core.clone(cursor);
x19750.om$core$IRootKey$ = true;

x19750.om$core$IRootKey$_root_key$arity$1 = ((function (x19750){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x19750))
;

x19750.om$core$IAdapt$ = true;

x19750.om$core$IAdapt$_adapt$arity$2 = ((function (x19750){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x19750))
;

x19750.cljs$core$ICloneable$ = true;

x19750.cljs$core$ICloneable$_clone$arity$1 = ((function (x19750){
return (function (this$){
var this$__$1 = this;
return tag_root_key(cljs.core.clone(cursor),root_key);
});})(x19750))
;

return x19750;
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
om.core.root = (function root(f,value,p__19751){
var map__19840 = p__19751;
var map__19840__$1 = ((cljs.core.seq_QMARK_(map__19840))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19840):map__19840);
var options = map__19840__$1;
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$87);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$88);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$76);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$78);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$52);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$89);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,cljs.core.constant$keyword$90);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))], 0)))].join('')));
}

var roots_SINGLEQUOTE__19928 = (function (){var G__19841 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19841) : cljs.core.deref.call(null,G__19841));
})();
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__19928,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__19928,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = (((function (){var G__19842 = value;
if(G__19842){
var bit__6571__auto__ = (G__19842.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__6571__auto__) || (G__19842.cljs$core$IAtom$)){
return true;
} else {
if((!G__19842.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__19842);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__19842);
}
})())?value:(function (){var G__19843 = value;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19843) : cljs.core.atom.call(null,G__19843));
})());
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__5890__auto__ = adapt;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$90,cljs.core.array_seq([cljs.core.constant$keyword$89,cljs.core.constant$keyword$52,cljs.core.constant$keyword$88,cljs.core.constant$keyword$87], 0));
var ret = (function (){var G__19844 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19844) : cljs.core.atom.call(null,G__19844));
})();
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = (function (){var G__19884 = state__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19884) : cljs.core.deref.call(null,G__19884));
})();
var cursor = (function (){var G__19885 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__19885) : adapt__$1.call(null,G__19885));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$91))){
} else {
var c_19929 = om.dom.render((function (){var _STAR_descriptor_STAR_19886 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_19887 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_19888 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_19889 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_19889;

om.core._STAR_state_STAR_ = _STAR_state_STAR_19888;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_19887;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_19886;
}})(),target);
if(((function (){var G__19890 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19890) : cljs.core.deref.call(null,G__19890));
})() == null)){
var G__19891_19930 = ret;
var G__19892_19931 = c_19929;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19891_19930,G__19892_19931) : cljs.core.reset_BANG_.call(null,G__19891_19930,G__19892_19931));
} else {
}
}

var queue_19932 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_19932)){
} else {
var seq__19893_19933 = cljs.core.seq(queue_19932);
var chunk__19894_19934 = null;
var count__19895_19935 = (0);
var i__19896_19936 = (0);
while(true){
if((i__19896_19936 < count__19895_19935)){
var c_19937 = chunk__19894_19934.cljs$core$IIndexed$_nth$arity$2(null,i__19896_19936);
if(cljs.core.truth_(c_19937.isMounted())){
var temp__4406__auto___19938 = (c_19937.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4406__auto___19938)){
var next_props_19939 = temp__4406__auto___19938;
(c_19937.props["__om_cursor"] = next_props_19939);

(c_19937.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__5890__auto__ = !((function (){var G__19898 = om.core.children(c_19937);
if(G__19898){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19898.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__19898.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19898);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19898);
}
})());
if(or__5890__auto__){
return or__5890__auto__;
} else {
return c_19937.shouldComponentUpdate(c_19937.props,c_19937.state);
}
})())){
c_19937.forceUpdate();
} else {
}
} else {
}

var G__19940 = seq__19893_19933;
var G__19941 = chunk__19894_19934;
var G__19942 = count__19895_19935;
var G__19943 = (i__19896_19936 + (1));
seq__19893_19933 = G__19940;
chunk__19894_19934 = G__19941;
count__19895_19935 = G__19942;
i__19896_19936 = G__19943;
continue;
} else {
var temp__4406__auto___19944 = cljs.core.seq(seq__19893_19933);
if(temp__4406__auto___19944){
var seq__19893_19945__$1 = temp__4406__auto___19944;
if(cljs.core.chunked_seq_QMARK_(seq__19893_19945__$1)){
var c__6677__auto___19946 = cljs.core.chunk_first(seq__19893_19945__$1);
var G__19947 = cljs.core.chunk_rest(seq__19893_19945__$1);
var G__19948 = c__6677__auto___19946;
var G__19949 = cljs.core.count(c__6677__auto___19946);
var G__19950 = (0);
seq__19893_19933 = G__19947;
chunk__19894_19934 = G__19948;
count__19895_19935 = G__19949;
i__19896_19936 = G__19950;
continue;
} else {
var c_19951 = cljs.core.first(seq__19893_19945__$1);
if(cljs.core.truth_(c_19951.isMounted())){
var temp__4406__auto___19952__$1 = (c_19951.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4406__auto___19952__$1)){
var next_props_19953 = temp__4406__auto___19952__$1;
(c_19951.props["__om_cursor"] = next_props_19953);

(c_19951.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__5890__auto__ = !((function (){var G__19900 = om.core.children(c_19951);
if(G__19900){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__19900.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__19900.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19900);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__19900);
}
})());
if(or__5890__auto__){
return or__5890__auto__;
} else {
return c_19951.shouldComponentUpdate(c_19951.props,c_19951.state);
}
})())){
c_19951.forceUpdate();
} else {
}
} else {
}

var G__19954 = cljs.core.next(seq__19893_19945__$1);
var G__19955 = null;
var G__19956 = (0);
var G__19957 = (0);
seq__19893_19933 = G__19954;
chunk__19894_19934 = G__19955;
count__19895_19935 = G__19956;
i__19896_19936 = G__19957;
continue;
}
} else {
}
}
break;
}
}

var _refs_19958 = (function (){var G__19901 = om.core._refs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19901) : cljs.core.deref.call(null,G__19901));
})();
if(cljs.core.empty_QMARK_(_refs_19958)){
} else {
var seq__19902_19959 = cljs.core.seq(_refs_19958);
var chunk__19903_19960 = null;
var count__19904_19961 = (0);
var i__19905_19962 = (0);
while(true){
if((i__19905_19962 < count__19904_19961)){
var vec__19906_19963 = chunk__19903_19960.cljs$core$IIndexed$_nth$arity$2(null,i__19905_19962);
var path_19964__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19906_19963,(0),null);
var cs_19965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19906_19963,(1),null);
var cs_19966__$1 = (function (){var G__19907 = cs_19965;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19907) : cljs.core.deref.call(null,G__19907));
})();
var seq__19908_19967 = cljs.core.seq(cs_19966__$1);
var chunk__19909_19968 = null;
var count__19910_19969 = (0);
var i__19911_19970 = (0);
while(true){
if((i__19911_19970 < count__19910_19969)){
var vec__19912_19971 = chunk__19909_19968.cljs$core$IIndexed$_nth$arity$2(null,i__19911_19970);
var id_19972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912_19971,(0),null);
var c_19973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912_19971,(1),null);
if(cljs.core.truth_(c_19973.shouldComponentUpdate(c_19973.props,c_19973.state))){
c_19973.forceUpdate();
} else {
}

var G__19974 = seq__19908_19967;
var G__19975 = chunk__19909_19968;
var G__19976 = count__19910_19969;
var G__19977 = (i__19911_19970 + (1));
seq__19908_19967 = G__19974;
chunk__19909_19968 = G__19975;
count__19910_19969 = G__19976;
i__19911_19970 = G__19977;
continue;
} else {
var temp__4406__auto___19978 = cljs.core.seq(seq__19908_19967);
if(temp__4406__auto___19978){
var seq__19908_19979__$1 = temp__4406__auto___19978;
if(cljs.core.chunked_seq_QMARK_(seq__19908_19979__$1)){
var c__6677__auto___19980 = cljs.core.chunk_first(seq__19908_19979__$1);
var G__19981 = cljs.core.chunk_rest(seq__19908_19979__$1);
var G__19982 = c__6677__auto___19980;
var G__19983 = cljs.core.count(c__6677__auto___19980);
var G__19984 = (0);
seq__19908_19967 = G__19981;
chunk__19909_19968 = G__19982;
count__19910_19969 = G__19983;
i__19911_19970 = G__19984;
continue;
} else {
var vec__19913_19985 = cljs.core.first(seq__19908_19979__$1);
var id_19986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19913_19985,(0),null);
var c_19987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19913_19985,(1),null);
if(cljs.core.truth_(c_19987.shouldComponentUpdate(c_19987.props,c_19987.state))){
c_19987.forceUpdate();
} else {
}

var G__19988 = cljs.core.next(seq__19908_19979__$1);
var G__19989 = null;
var G__19990 = (0);
var G__19991 = (0);
seq__19908_19967 = G__19988;
chunk__19909_19968 = G__19989;
count__19910_19969 = G__19990;
i__19911_19970 = G__19991;
continue;
}
} else {
}
}
break;
}

var G__19992 = seq__19902_19959;
var G__19993 = chunk__19903_19960;
var G__19994 = count__19904_19961;
var G__19995 = (i__19905_19962 + (1));
seq__19902_19959 = G__19992;
chunk__19903_19960 = G__19993;
count__19904_19961 = G__19994;
i__19905_19962 = G__19995;
continue;
} else {
var temp__4406__auto___19996 = cljs.core.seq(seq__19902_19959);
if(temp__4406__auto___19996){
var seq__19902_19997__$1 = temp__4406__auto___19996;
if(cljs.core.chunked_seq_QMARK_(seq__19902_19997__$1)){
var c__6677__auto___19998 = cljs.core.chunk_first(seq__19902_19997__$1);
var G__19999 = cljs.core.chunk_rest(seq__19902_19997__$1);
var G__20000 = c__6677__auto___19998;
var G__20001 = cljs.core.count(c__6677__auto___19998);
var G__20002 = (0);
seq__19902_19959 = G__19999;
chunk__19903_19960 = G__20000;
count__19904_19961 = G__20001;
i__19905_19962 = G__20002;
continue;
} else {
var vec__19914_20003 = cljs.core.first(seq__19902_19997__$1);
var path_20004__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914_20003,(0),null);
var cs_20005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914_20003,(1),null);
var cs_20006__$1 = (function (){var G__19915 = cs_20005;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19915) : cljs.core.deref.call(null,G__19915));
})();
var seq__19916_20007 = cljs.core.seq(cs_20006__$1);
var chunk__19917_20008 = null;
var count__19918_20009 = (0);
var i__19919_20010 = (0);
while(true){
if((i__19919_20010 < count__19918_20009)){
var vec__19920_20011 = chunk__19917_20008.cljs$core$IIndexed$_nth$arity$2(null,i__19919_20010);
var id_20012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920_20011,(0),null);
var c_20013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920_20011,(1),null);
if(cljs.core.truth_(c_20013.shouldComponentUpdate(c_20013.props,c_20013.state))){
c_20013.forceUpdate();
} else {
}

var G__20014 = seq__19916_20007;
var G__20015 = chunk__19917_20008;
var G__20016 = count__19918_20009;
var G__20017 = (i__19919_20010 + (1));
seq__19916_20007 = G__20014;
chunk__19917_20008 = G__20015;
count__19918_20009 = G__20016;
i__19919_20010 = G__20017;
continue;
} else {
var temp__4406__auto___20018__$1 = cljs.core.seq(seq__19916_20007);
if(temp__4406__auto___20018__$1){
var seq__19916_20019__$1 = temp__4406__auto___20018__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19916_20019__$1)){
var c__6677__auto___20020 = cljs.core.chunk_first(seq__19916_20019__$1);
var G__20021 = cljs.core.chunk_rest(seq__19916_20019__$1);
var G__20022 = c__6677__auto___20020;
var G__20023 = cljs.core.count(c__6677__auto___20020);
var G__20024 = (0);
seq__19916_20007 = G__20021;
chunk__19917_20008 = G__20022;
count__19918_20009 = G__20023;
i__19919_20010 = G__20024;
continue;
} else {
var vec__19921_20025 = cljs.core.first(seq__19916_20019__$1);
var id_20026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19921_20025,(0),null);
var c_20027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19921_20025,(1),null);
if(cljs.core.truth_(c_20027.shouldComponentUpdate(c_20027.props,c_20027.state))){
c_20027.forceUpdate();
} else {
}

var G__20028 = cljs.core.next(seq__19916_20019__$1);
var G__20029 = null;
var G__20030 = (0);
var G__20031 = (0);
seq__19916_20007 = G__20028;
chunk__19917_20008 = G__20029;
count__19918_20009 = G__20030;
i__19919_20010 = G__20031;
continue;
}
} else {
}
}
break;
}

var G__20032 = cljs.core.next(seq__19902_19997__$1);
var G__20033 = null;
var G__20034 = (0);
var G__20035 = (0);
seq__19902_19959 = G__20032;
chunk__19903_19960 = G__20033;
count__19904_19961 = G__20034;
i__19905_19962 = G__20035;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$91,true);

var G__19922 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19922) : cljs.core.deref.call(null,G__19922));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.constant$keyword$92))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$91,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.constant$keyword$92,false);

if(cljs.core.contains_QMARK_((function (){var G__19923 = om.core.refresh_set;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19923) : cljs.core.deref.call(null,G__19923));
})(),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__19924 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
var G__19925 = (16);
return setTimeout(G__19924,G__19925);
} else {
if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
var G__19926 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
return requestAnimationFrame(G__19926);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

var G__19927 = target;
return React.unmountComponentAtNode(G__19927);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__19840,map__19840__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf();
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_((function (){var G__20038 = target;
return goog.dom.isElement(G__20038);
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))], 0)))].join('')));
}

var temp__4406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20039 = om.core.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20039) : cljs.core.deref.call(null,G__20039));
})(),target);
if(cljs.core.truth_(temp__4406__auto__)){
var f = temp__4406__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__20041 = x;
if(G__20041){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__20041.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__20041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__20041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,G__20041);
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
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
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
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
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
if(om.core.cursor_QMARK_(cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

var key = (((function (){var G__20052 = cursor;
if(G__20052){
var bit__6571__auto__ = null;
if(cljs.core.truth_((function (){var or__5890__auto__ = bit__6571__auto__;
if(cljs.core.truth_(or__5890__auto__)){
return or__5890__auto__;
} else {
return G__20052.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__20052.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__20052);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRootKey,G__20052);
}
})())?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = (function (){var G__20053 = cursor;
return (om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(G__20053) : om.core.path.call(null,G__20053));
})();
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.constant$keyword$92,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))], 0)))].join('')));
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__20056 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20056) : f.call(null,G__20056));
})());
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__20057 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20057) : f.call(null,G__20057));
})());
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__20060 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20060) : f.call(null,G__20060));
})());
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__20061 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20061) : f.call(null,G__20061));
})());
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
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
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
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
