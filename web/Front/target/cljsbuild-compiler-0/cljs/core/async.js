// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13533 = [];
var len__7484__auto___13539 = arguments.length;
var i__7485__auto___13540 = (0);
while(true){
if((i__7485__auto___13540 < len__7484__auto___13539)){
args13533.push((arguments[i__7485__auto___13540]));

var G__13541 = (i__7485__auto___13540 + (1));
i__7485__auto___13540 = G__13541;
continue;
} else {
}
break;
}

var G__13535 = args13533.length;
switch (G__13535) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13533.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13536 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13536 = (function (f,blockable,meta13537){
this.f = f;
this.blockable = blockable;
this.meta13537 = meta13537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13538,meta13537__$1){
var self__ = this;
var _13538__$1 = this;
return (new cljs.core.async.t_cljs$core$async13536(self__.f,self__.blockable,meta13537__$1));
});

cljs.core.async.t_cljs$core$async13536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13538){
var self__ = this;
var _13538__$1 = this;
return self__.meta13537;
});

cljs.core.async.t_cljs$core$async13536.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13536.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13537","meta13537",1086108527,null)], null);
});

cljs.core.async.t_cljs$core$async13536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13536";

cljs.core.async.t_cljs$core$async13536.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async13536");
});

cljs.core.async.__GT_t_cljs$core$async13536 = (function cljs$core$async$__GT_t_cljs$core$async13536(f__$1,blockable__$1,meta13537){
return (new cljs.core.async.t_cljs$core$async13536(f__$1,blockable__$1,meta13537));
});

}

return (new cljs.core.async.t_cljs$core$async13536(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13545 = [];
var len__7484__auto___13548 = arguments.length;
var i__7485__auto___13549 = (0);
while(true){
if((i__7485__auto___13549 < len__7484__auto___13548)){
args13545.push((arguments[i__7485__auto___13549]));

var G__13550 = (i__7485__auto___13549 + (1));
i__7485__auto___13549 = G__13550;
continue;
} else {
}
break;
}

var G__13547 = args13545.length;
switch (G__13547) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13545.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13552 = [];
var len__7484__auto___13555 = arguments.length;
var i__7485__auto___13556 = (0);
while(true){
if((i__7485__auto___13556 < len__7484__auto___13555)){
args13552.push((arguments[i__7485__auto___13556]));

var G__13557 = (i__7485__auto___13556 + (1));
i__7485__auto___13556 = G__13557;
continue;
} else {
}
break;
}

var G__13554 = args13552.length;
switch (G__13554) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13552.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13559 = [];
var len__7484__auto___13562 = arguments.length;
var i__7485__auto___13563 = (0);
while(true){
if((i__7485__auto___13563 < len__7484__auto___13562)){
args13559.push((arguments[i__7485__auto___13563]));

var G__13564 = (i__7485__auto___13563 + (1));
i__7485__auto___13563 = G__13564;
continue;
} else {
}
break;
}

var G__13561 = args13559.length;
switch (G__13561) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13559.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13566 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13566);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13566,ret){
return (function (){
return fn1.call(null,val_13566);
});})(val_13566,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13567 = [];
var len__7484__auto___13570 = arguments.length;
var i__7485__auto___13571 = (0);
while(true){
if((i__7485__auto___13571 < len__7484__auto___13570)){
args13567.push((arguments[i__7485__auto___13571]));

var G__13572 = (i__7485__auto___13571 + (1));
i__7485__auto___13571 = G__13572;
continue;
} else {
}
break;
}

var G__13569 = args13567.length;
switch (G__13569) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13567.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__7324__auto___13574 = n;
var x_13575 = (0);
while(true){
if((x_13575 < n__7324__auto___13574)){
(a[x_13575] = (0));

var G__13576 = (x_13575 + (1));
x_13575 = G__13576;
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

var G__13577 = (i + (1));
i = G__13577;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13581 = (function (alt_flag,flag,meta13582){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13582 = meta13582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13583,meta13582__$1){
var self__ = this;
var _13583__$1 = this;
return (new cljs.core.async.t_cljs$core$async13581(self__.alt_flag,self__.flag,meta13582__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13583){
var self__ = this;
var _13583__$1 = this;
return self__.meta13582;
});})(flag))
;

cljs.core.async.t_cljs$core$async13581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13581.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13582","meta13582",704265639,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13581";

cljs.core.async.t_cljs$core$async13581.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async13581");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13581 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13581(alt_flag__$1,flag__$1,meta13582){
return (new cljs.core.async.t_cljs$core$async13581(alt_flag__$1,flag__$1,meta13582));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13581(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13587 = (function (alt_handler,flag,cb,meta13588){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13588 = meta13588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13589,meta13588__$1){
var self__ = this;
var _13589__$1 = this;
return (new cljs.core.async.t_cljs$core$async13587(self__.alt_handler,self__.flag,self__.cb,meta13588__$1));
});

cljs.core.async.t_cljs$core$async13587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13589){
var self__ = this;
var _13589__$1 = this;
return self__.meta13588;
});

cljs.core.async.t_cljs$core$async13587.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13588","meta13588",-1254324466,null)], null);
});

cljs.core.async.t_cljs$core$async13587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13587";

cljs.core.async.t_cljs$core$async13587.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async13587");
});

cljs.core.async.__GT_t_cljs$core$async13587 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13587(alt_handler__$1,flag__$1,cb__$1,meta13588){
return (new cljs.core.async.t_cljs$core$async13587(alt_handler__$1,flag__$1,cb__$1,meta13588));
});

}

return (new cljs.core.async.t_cljs$core$async13587(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13590_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13590_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13591_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6409__auto__ = wport;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13592 = (i + (1));
i = G__13592;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6409__auto__ = ret;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6397__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13598 = arguments.length;
var i__7485__auto___13599 = (0);
while(true){
if((i__7485__auto___13599 < len__7484__auto___13598)){
args__7491__auto__.push((arguments[i__7485__auto___13599]));

var G__13600 = (i__7485__auto___13599 + (1));
i__7485__auto___13599 = G__13600;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13595){
var map__13596 = p__13595;
var map__13596__$1 = ((((!((map__13596 == null)))?((((map__13596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13596):map__13596);
var opts = map__13596__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13593){
var G__13594 = cljs.core.first.call(null,seq13593);
var seq13593__$1 = cljs.core.next.call(null,seq13593);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13594,seq13593__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13601 = [];
var len__7484__auto___13651 = arguments.length;
var i__7485__auto___13652 = (0);
while(true){
if((i__7485__auto___13652 < len__7484__auto___13651)){
args13601.push((arguments[i__7485__auto___13652]));

var G__13653 = (i__7485__auto___13652 + (1));
i__7485__auto___13652 = G__13653;
continue;
} else {
}
break;
}

var G__13603 = args13601.length;
switch (G__13603) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13601.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13488__auto___13655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___13655){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___13655){
return (function (state_13627){
var state_val_13628 = (state_13627[(1)]);
if((state_val_13628 === (7))){
var inst_13623 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
var statearr_13629_13656 = state_13627__$1;
(statearr_13629_13656[(2)] = inst_13623);

(statearr_13629_13656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (1))){
var state_13627__$1 = state_13627;
var statearr_13630_13657 = state_13627__$1;
(statearr_13630_13657[(2)] = null);

(statearr_13630_13657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (4))){
var inst_13606 = (state_13627[(7)]);
var inst_13606__$1 = (state_13627[(2)]);
var inst_13607 = (inst_13606__$1 == null);
var state_13627__$1 = (function (){var statearr_13631 = state_13627;
(statearr_13631[(7)] = inst_13606__$1);

return statearr_13631;
})();
if(cljs.core.truth_(inst_13607)){
var statearr_13632_13658 = state_13627__$1;
(statearr_13632_13658[(1)] = (5));

} else {
var statearr_13633_13659 = state_13627__$1;
(statearr_13633_13659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (13))){
var state_13627__$1 = state_13627;
var statearr_13634_13660 = state_13627__$1;
(statearr_13634_13660[(2)] = null);

(statearr_13634_13660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (6))){
var inst_13606 = (state_13627[(7)]);
var state_13627__$1 = state_13627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13627__$1,(11),to,inst_13606);
} else {
if((state_val_13628 === (3))){
var inst_13625 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13627__$1,inst_13625);
} else {
if((state_val_13628 === (12))){
var state_13627__$1 = state_13627;
var statearr_13635_13661 = state_13627__$1;
(statearr_13635_13661[(2)] = null);

(statearr_13635_13661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (2))){
var state_13627__$1 = state_13627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13627__$1,(4),from);
} else {
if((state_val_13628 === (11))){
var inst_13616 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
if(cljs.core.truth_(inst_13616)){
var statearr_13636_13662 = state_13627__$1;
(statearr_13636_13662[(1)] = (12));

} else {
var statearr_13637_13663 = state_13627__$1;
(statearr_13637_13663[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (9))){
var state_13627__$1 = state_13627;
var statearr_13638_13664 = state_13627__$1;
(statearr_13638_13664[(2)] = null);

(statearr_13638_13664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (5))){
var state_13627__$1 = state_13627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13639_13665 = state_13627__$1;
(statearr_13639_13665[(1)] = (8));

} else {
var statearr_13640_13666 = state_13627__$1;
(statearr_13640_13666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (14))){
var inst_13621 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
var statearr_13641_13667 = state_13627__$1;
(statearr_13641_13667[(2)] = inst_13621);

(statearr_13641_13667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (10))){
var inst_13613 = (state_13627[(2)]);
var state_13627__$1 = state_13627;
var statearr_13642_13668 = state_13627__$1;
(statearr_13642_13668[(2)] = inst_13613);

(statearr_13642_13668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13628 === (8))){
var inst_13610 = cljs.core.async.close_BANG_.call(null,to);
var state_13627__$1 = state_13627;
var statearr_13643_13669 = state_13627__$1;
(statearr_13643_13669[(2)] = inst_13610);

(statearr_13643_13669[(1)] = (10));


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
});})(c__13488__auto___13655))
;
return ((function (switch__13376__auto__,c__13488__auto___13655){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_13647 = [null,null,null,null,null,null,null,null];
(statearr_13647[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_13647[(1)] = (1));

return statearr_13647;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_13627){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_13627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e13648){if((e13648 instanceof Object)){
var ex__13380__auto__ = e13648;
var statearr_13649_13670 = state_13627;
(statearr_13649_13670[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13671 = state_13627;
state_13627 = G__13671;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_13627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_13627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___13655))
})();
var state__13490__auto__ = (function (){var statearr_13650 = f__13489__auto__.call(null);
(statearr_13650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___13655);

return statearr_13650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___13655))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13859){
var vec__13860 = p__13859;
var v = cljs.core.nth.call(null,vec__13860,(0),null);
var p = cljs.core.nth.call(null,vec__13860,(1),null);
var job = vec__13860;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13488__auto___14046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___14046,res,vec__13860,v,p,job,jobs,results){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___14046,res,vec__13860,v,p,job,jobs,results){
return (function (state_13867){
var state_val_13868 = (state_13867[(1)]);
if((state_val_13868 === (1))){
var state_13867__$1 = state_13867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13867__$1,(2),res,v);
} else {
if((state_val_13868 === (2))){
var inst_13864 = (state_13867[(2)]);
var inst_13865 = cljs.core.async.close_BANG_.call(null,res);
var state_13867__$1 = (function (){var statearr_13869 = state_13867;
(statearr_13869[(7)] = inst_13864);

return statearr_13869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13867__$1,inst_13865);
} else {
return null;
}
}
});})(c__13488__auto___14046,res,vec__13860,v,p,job,jobs,results))
;
return ((function (switch__13376__auto__,c__13488__auto___14046,res,vec__13860,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0 = (function (){
var statearr_13873 = [null,null,null,null,null,null,null,null];
(statearr_13873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__);

(statearr_13873[(1)] = (1));

return statearr_13873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1 = (function (state_13867){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_13867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e13874){if((e13874 instanceof Object)){
var ex__13380__auto__ = e13874;
var statearr_13875_14047 = state_13867;
(statearr_13875_14047[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14048 = state_13867;
state_13867 = G__14048;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = function(state_13867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1.call(this,state_13867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___14046,res,vec__13860,v,p,job,jobs,results))
})();
var state__13490__auto__ = (function (){var statearr_13876 = f__13489__auto__.call(null);
(statearr_13876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___14046);

return statearr_13876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___14046,res,vec__13860,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13877){
var vec__13878 = p__13877;
var v = cljs.core.nth.call(null,vec__13878,(0),null);
var p = cljs.core.nth.call(null,vec__13878,(1),null);
var job = vec__13878;
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
var n__7324__auto___14049 = n;
var __14050 = (0);
while(true){
if((__14050 < n__7324__auto___14049)){
var G__13881_14051 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13881_14051) {
case "compute":
var c__13488__auto___14053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14050,c__13488__auto___14053,G__13881_14051,n__7324__auto___14049,jobs,results,process,async){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (__14050,c__13488__auto___14053,G__13881_14051,n__7324__auto___14049,jobs,results,process,async){
return (function (state_13894){
var state_val_13895 = (state_13894[(1)]);
if((state_val_13895 === (1))){
var state_13894__$1 = state_13894;
var statearr_13896_14054 = state_13894__$1;
(statearr_13896_14054[(2)] = null);

(statearr_13896_14054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (2))){
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13894__$1,(4),jobs);
} else {
if((state_val_13895 === (3))){
var inst_13892 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13894__$1,inst_13892);
} else {
if((state_val_13895 === (4))){
var inst_13884 = (state_13894[(2)]);
var inst_13885 = process.call(null,inst_13884);
var state_13894__$1 = state_13894;
if(cljs.core.truth_(inst_13885)){
var statearr_13897_14055 = state_13894__$1;
(statearr_13897_14055[(1)] = (5));

} else {
var statearr_13898_14056 = state_13894__$1;
(statearr_13898_14056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (5))){
var state_13894__$1 = state_13894;
var statearr_13899_14057 = state_13894__$1;
(statearr_13899_14057[(2)] = null);

(statearr_13899_14057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (6))){
var state_13894__$1 = state_13894;
var statearr_13900_14058 = state_13894__$1;
(statearr_13900_14058[(2)] = null);

(statearr_13900_14058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13895 === (7))){
var inst_13890 = (state_13894[(2)]);
var state_13894__$1 = state_13894;
var statearr_13901_14059 = state_13894__$1;
(statearr_13901_14059[(2)] = inst_13890);

(statearr_13901_14059[(1)] = (3));


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
});})(__14050,c__13488__auto___14053,G__13881_14051,n__7324__auto___14049,jobs,results,process,async))
;
return ((function (__14050,switch__13376__auto__,c__13488__auto___14053,G__13881_14051,n__7324__auto___14049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0 = (function (){
var statearr_13905 = [null,null,null,null,null,null,null];
(statearr_13905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__);

(statearr_13905[(1)] = (1));

return statearr_13905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1 = (function (state_13894){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_13894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e13906){if((e13906 instanceof Object)){
var ex__13380__auto__ = e13906;
var statearr_13907_14060 = state_13894;
(statearr_13907_14060[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14061 = state_13894;
state_13894 = G__14061;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = function(state_13894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1.call(this,state_13894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__;
})()
;})(__14050,switch__13376__auto__,c__13488__auto___14053,G__13881_14051,n__7324__auto___14049,jobs,results,process,async))
})();
var state__13490__auto__ = (function (){var statearr_13908 = f__13489__auto__.call(null);
(statearr_13908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___14053);

return statearr_13908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(__14050,c__13488__auto___14053,G__13881_14051,n__7324__auto___14049,jobs,results,process,async))
);


break;
case "async":
var c__13488__auto___14062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14050,c__13488__auto___14062,G__13881_14051,n__7324__auto___14049,jobs,results,process,async){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (__14050,c__13488__auto___14062,G__13881_14051,n__7324__auto___14049,jobs,results,process,async){
return (function (state_13921){
var state_val_13922 = (state_13921[(1)]);
if((state_val_13922 === (1))){
var state_13921__$1 = state_13921;
var statearr_13923_14063 = state_13921__$1;
(statearr_13923_14063[(2)] = null);

(statearr_13923_14063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (2))){
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13921__$1,(4),jobs);
} else {
if((state_val_13922 === (3))){
var inst_13919 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13921__$1,inst_13919);
} else {
if((state_val_13922 === (4))){
var inst_13911 = (state_13921[(2)]);
var inst_13912 = async.call(null,inst_13911);
var state_13921__$1 = state_13921;
if(cljs.core.truth_(inst_13912)){
var statearr_13924_14064 = state_13921__$1;
(statearr_13924_14064[(1)] = (5));

} else {
var statearr_13925_14065 = state_13921__$1;
(statearr_13925_14065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (5))){
var state_13921__$1 = state_13921;
var statearr_13926_14066 = state_13921__$1;
(statearr_13926_14066[(2)] = null);

(statearr_13926_14066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (6))){
var state_13921__$1 = state_13921;
var statearr_13927_14067 = state_13921__$1;
(statearr_13927_14067[(2)] = null);

(statearr_13927_14067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (7))){
var inst_13917 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13928_14068 = state_13921__$1;
(statearr_13928_14068[(2)] = inst_13917);

(statearr_13928_14068[(1)] = (3));


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
});})(__14050,c__13488__auto___14062,G__13881_14051,n__7324__auto___14049,jobs,results,process,async))
;
return ((function (__14050,switch__13376__auto__,c__13488__auto___14062,G__13881_14051,n__7324__auto___14049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0 = (function (){
var statearr_13932 = [null,null,null,null,null,null,null];
(statearr_13932[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__);

(statearr_13932[(1)] = (1));

return statearr_13932;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1 = (function (state_13921){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_13921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e13933){if((e13933 instanceof Object)){
var ex__13380__auto__ = e13933;
var statearr_13934_14069 = state_13921;
(statearr_13934_14069[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14070 = state_13921;
state_13921 = G__14070;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = function(state_13921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1.call(this,state_13921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__;
})()
;})(__14050,switch__13376__auto__,c__13488__auto___14062,G__13881_14051,n__7324__auto___14049,jobs,results,process,async))
})();
var state__13490__auto__ = (function (){var statearr_13935 = f__13489__auto__.call(null);
(statearr_13935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___14062);

return statearr_13935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(__14050,c__13488__auto___14062,G__13881_14051,n__7324__auto___14049,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14071 = (__14050 + (1));
__14050 = G__14071;
continue;
} else {
}
break;
}

var c__13488__auto___14072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___14072,jobs,results,process,async){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___14072,jobs,results,process,async){
return (function (state_13957){
var state_val_13958 = (state_13957[(1)]);
if((state_val_13958 === (1))){
var state_13957__$1 = state_13957;
var statearr_13959_14073 = state_13957__$1;
(statearr_13959_14073[(2)] = null);

(statearr_13959_14073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (2))){
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13957__$1,(4),from);
} else {
if((state_val_13958 === (3))){
var inst_13955 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13957__$1,inst_13955);
} else {
if((state_val_13958 === (4))){
var inst_13938 = (state_13957[(7)]);
var inst_13938__$1 = (state_13957[(2)]);
var inst_13939 = (inst_13938__$1 == null);
var state_13957__$1 = (function (){var statearr_13960 = state_13957;
(statearr_13960[(7)] = inst_13938__$1);

return statearr_13960;
})();
if(cljs.core.truth_(inst_13939)){
var statearr_13961_14074 = state_13957__$1;
(statearr_13961_14074[(1)] = (5));

} else {
var statearr_13962_14075 = state_13957__$1;
(statearr_13962_14075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (5))){
var inst_13941 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13957__$1 = state_13957;
var statearr_13963_14076 = state_13957__$1;
(statearr_13963_14076[(2)] = inst_13941);

(statearr_13963_14076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (6))){
var inst_13938 = (state_13957[(7)]);
var inst_13943 = (state_13957[(8)]);
var inst_13943__$1 = cljs.core.async.chan.call(null,(1));
var inst_13944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13945 = [inst_13938,inst_13943__$1];
var inst_13946 = (new cljs.core.PersistentVector(null,2,(5),inst_13944,inst_13945,null));
var state_13957__$1 = (function (){var statearr_13964 = state_13957;
(statearr_13964[(8)] = inst_13943__$1);

return statearr_13964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13957__$1,(8),jobs,inst_13946);
} else {
if((state_val_13958 === (7))){
var inst_13953 = (state_13957[(2)]);
var state_13957__$1 = state_13957;
var statearr_13965_14077 = state_13957__$1;
(statearr_13965_14077[(2)] = inst_13953);

(statearr_13965_14077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13958 === (8))){
var inst_13943 = (state_13957[(8)]);
var inst_13948 = (state_13957[(2)]);
var state_13957__$1 = (function (){var statearr_13966 = state_13957;
(statearr_13966[(9)] = inst_13948);

return statearr_13966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13957__$1,(9),results,inst_13943);
} else {
if((state_val_13958 === (9))){
var inst_13950 = (state_13957[(2)]);
var state_13957__$1 = (function (){var statearr_13967 = state_13957;
(statearr_13967[(10)] = inst_13950);

return statearr_13967;
})();
var statearr_13968_14078 = state_13957__$1;
(statearr_13968_14078[(2)] = null);

(statearr_13968_14078[(1)] = (2));


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
});})(c__13488__auto___14072,jobs,results,process,async))
;
return ((function (switch__13376__auto__,c__13488__auto___14072,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0 = (function (){
var statearr_13972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__);

(statearr_13972[(1)] = (1));

return statearr_13972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1 = (function (state_13957){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_13957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e13973){if((e13973 instanceof Object)){
var ex__13380__auto__ = e13973;
var statearr_13974_14079 = state_13957;
(statearr_13974_14079[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14080 = state_13957;
state_13957 = G__14080;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = function(state_13957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1.call(this,state_13957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___14072,jobs,results,process,async))
})();
var state__13490__auto__ = (function (){var statearr_13975 = f__13489__auto__.call(null);
(statearr_13975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___14072);

return statearr_13975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___14072,jobs,results,process,async))
);


var c__13488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto__,jobs,results,process,async){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto__,jobs,results,process,async){
return (function (state_14013){
var state_val_14014 = (state_14013[(1)]);
if((state_val_14014 === (7))){
var inst_14009 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14015_14081 = state_14013__$1;
(statearr_14015_14081[(2)] = inst_14009);

(statearr_14015_14081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (20))){
var state_14013__$1 = state_14013;
var statearr_14016_14082 = state_14013__$1;
(statearr_14016_14082[(2)] = null);

(statearr_14016_14082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (1))){
var state_14013__$1 = state_14013;
var statearr_14017_14083 = state_14013__$1;
(statearr_14017_14083[(2)] = null);

(statearr_14017_14083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (4))){
var inst_13978 = (state_14013[(7)]);
var inst_13978__$1 = (state_14013[(2)]);
var inst_13979 = (inst_13978__$1 == null);
var state_14013__$1 = (function (){var statearr_14018 = state_14013;
(statearr_14018[(7)] = inst_13978__$1);

return statearr_14018;
})();
if(cljs.core.truth_(inst_13979)){
var statearr_14019_14084 = state_14013__$1;
(statearr_14019_14084[(1)] = (5));

} else {
var statearr_14020_14085 = state_14013__$1;
(statearr_14020_14085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (15))){
var inst_13991 = (state_14013[(8)]);
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14013__$1,(18),to,inst_13991);
} else {
if((state_val_14014 === (21))){
var inst_14004 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14021_14086 = state_14013__$1;
(statearr_14021_14086[(2)] = inst_14004);

(statearr_14021_14086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (13))){
var inst_14006 = (state_14013[(2)]);
var state_14013__$1 = (function (){var statearr_14022 = state_14013;
(statearr_14022[(9)] = inst_14006);

return statearr_14022;
})();
var statearr_14023_14087 = state_14013__$1;
(statearr_14023_14087[(2)] = null);

(statearr_14023_14087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (6))){
var inst_13978 = (state_14013[(7)]);
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14013__$1,(11),inst_13978);
} else {
if((state_val_14014 === (17))){
var inst_13999 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
if(cljs.core.truth_(inst_13999)){
var statearr_14024_14088 = state_14013__$1;
(statearr_14024_14088[(1)] = (19));

} else {
var statearr_14025_14089 = state_14013__$1;
(statearr_14025_14089[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (3))){
var inst_14011 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14013__$1,inst_14011);
} else {
if((state_val_14014 === (12))){
var inst_13988 = (state_14013[(10)]);
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14013__$1,(14),inst_13988);
} else {
if((state_val_14014 === (2))){
var state_14013__$1 = state_14013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14013__$1,(4),results);
} else {
if((state_val_14014 === (19))){
var state_14013__$1 = state_14013;
var statearr_14026_14090 = state_14013__$1;
(statearr_14026_14090[(2)] = null);

(statearr_14026_14090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (11))){
var inst_13988 = (state_14013[(2)]);
var state_14013__$1 = (function (){var statearr_14027 = state_14013;
(statearr_14027[(10)] = inst_13988);

return statearr_14027;
})();
var statearr_14028_14091 = state_14013__$1;
(statearr_14028_14091[(2)] = null);

(statearr_14028_14091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (9))){
var state_14013__$1 = state_14013;
var statearr_14029_14092 = state_14013__$1;
(statearr_14029_14092[(2)] = null);

(statearr_14029_14092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (5))){
var state_14013__$1 = state_14013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14030_14093 = state_14013__$1;
(statearr_14030_14093[(1)] = (8));

} else {
var statearr_14031_14094 = state_14013__$1;
(statearr_14031_14094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (14))){
var inst_13993 = (state_14013[(11)]);
var inst_13991 = (state_14013[(8)]);
var inst_13991__$1 = (state_14013[(2)]);
var inst_13992 = (inst_13991__$1 == null);
var inst_13993__$1 = cljs.core.not.call(null,inst_13992);
var state_14013__$1 = (function (){var statearr_14032 = state_14013;
(statearr_14032[(11)] = inst_13993__$1);

(statearr_14032[(8)] = inst_13991__$1);

return statearr_14032;
})();
if(inst_13993__$1){
var statearr_14033_14095 = state_14013__$1;
(statearr_14033_14095[(1)] = (15));

} else {
var statearr_14034_14096 = state_14013__$1;
(statearr_14034_14096[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (16))){
var inst_13993 = (state_14013[(11)]);
var state_14013__$1 = state_14013;
var statearr_14035_14097 = state_14013__$1;
(statearr_14035_14097[(2)] = inst_13993);

(statearr_14035_14097[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (10))){
var inst_13985 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14036_14098 = state_14013__$1;
(statearr_14036_14098[(2)] = inst_13985);

(statearr_14036_14098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (18))){
var inst_13996 = (state_14013[(2)]);
var state_14013__$1 = state_14013;
var statearr_14037_14099 = state_14013__$1;
(statearr_14037_14099[(2)] = inst_13996);

(statearr_14037_14099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14014 === (8))){
var inst_13982 = cljs.core.async.close_BANG_.call(null,to);
var state_14013__$1 = state_14013;
var statearr_14038_14100 = state_14013__$1;
(statearr_14038_14100[(2)] = inst_13982);

(statearr_14038_14100[(1)] = (10));


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
});})(c__13488__auto__,jobs,results,process,async))
;
return ((function (switch__13376__auto__,c__13488__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0 = (function (){
var statearr_14042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__);

(statearr_14042[(1)] = (1));

return statearr_14042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1 = (function (state_14013){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_14013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e14043){if((e14043 instanceof Object)){
var ex__13380__auto__ = e14043;
var statearr_14044_14101 = state_14013;
(statearr_14044_14101[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14102 = state_14013;
state_14013 = G__14102;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__ = function(state_14013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1.call(this,state_14013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13377__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto__,jobs,results,process,async))
})();
var state__13490__auto__ = (function (){var statearr_14045 = f__13489__auto__.call(null);
(statearr_14045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto__);

return statearr_14045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto__,jobs,results,process,async))
);

return c__13488__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14103 = [];
var len__7484__auto___14106 = arguments.length;
var i__7485__auto___14107 = (0);
while(true){
if((i__7485__auto___14107 < len__7484__auto___14106)){
args14103.push((arguments[i__7485__auto___14107]));

var G__14108 = (i__7485__auto___14107 + (1));
i__7485__auto___14107 = G__14108;
continue;
} else {
}
break;
}

var G__14105 = args14103.length;
switch (G__14105) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14103.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14110 = [];
var len__7484__auto___14113 = arguments.length;
var i__7485__auto___14114 = (0);
while(true){
if((i__7485__auto___14114 < len__7484__auto___14113)){
args14110.push((arguments[i__7485__auto___14114]));

var G__14115 = (i__7485__auto___14114 + (1));
i__7485__auto___14114 = G__14115;
continue;
} else {
}
break;
}

var G__14112 = args14110.length;
switch (G__14112) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14110.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14117 = [];
var len__7484__auto___14170 = arguments.length;
var i__7485__auto___14171 = (0);
while(true){
if((i__7485__auto___14171 < len__7484__auto___14170)){
args14117.push((arguments[i__7485__auto___14171]));

var G__14172 = (i__7485__auto___14171 + (1));
i__7485__auto___14171 = G__14172;
continue;
} else {
}
break;
}

var G__14119 = args14117.length;
switch (G__14119) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14117.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13488__auto___14174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___14174,tc,fc){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___14174,tc,fc){
return (function (state_14145){
var state_val_14146 = (state_14145[(1)]);
if((state_val_14146 === (7))){
var inst_14141 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14147_14175 = state_14145__$1;
(statearr_14147_14175[(2)] = inst_14141);

(statearr_14147_14175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (1))){
var state_14145__$1 = state_14145;
var statearr_14148_14176 = state_14145__$1;
(statearr_14148_14176[(2)] = null);

(statearr_14148_14176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (4))){
var inst_14122 = (state_14145[(7)]);
var inst_14122__$1 = (state_14145[(2)]);
var inst_14123 = (inst_14122__$1 == null);
var state_14145__$1 = (function (){var statearr_14149 = state_14145;
(statearr_14149[(7)] = inst_14122__$1);

return statearr_14149;
})();
if(cljs.core.truth_(inst_14123)){
var statearr_14150_14177 = state_14145__$1;
(statearr_14150_14177[(1)] = (5));

} else {
var statearr_14151_14178 = state_14145__$1;
(statearr_14151_14178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (13))){
var state_14145__$1 = state_14145;
var statearr_14152_14179 = state_14145__$1;
(statearr_14152_14179[(2)] = null);

(statearr_14152_14179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (6))){
var inst_14122 = (state_14145[(7)]);
var inst_14128 = p.call(null,inst_14122);
var state_14145__$1 = state_14145;
if(cljs.core.truth_(inst_14128)){
var statearr_14153_14180 = state_14145__$1;
(statearr_14153_14180[(1)] = (9));

} else {
var statearr_14154_14181 = state_14145__$1;
(statearr_14154_14181[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (3))){
var inst_14143 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14145__$1,inst_14143);
} else {
if((state_val_14146 === (12))){
var state_14145__$1 = state_14145;
var statearr_14155_14182 = state_14145__$1;
(statearr_14155_14182[(2)] = null);

(statearr_14155_14182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (2))){
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14145__$1,(4),ch);
} else {
if((state_val_14146 === (11))){
var inst_14122 = (state_14145[(7)]);
var inst_14132 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14145__$1,(8),inst_14132,inst_14122);
} else {
if((state_val_14146 === (9))){
var state_14145__$1 = state_14145;
var statearr_14156_14183 = state_14145__$1;
(statearr_14156_14183[(2)] = tc);

(statearr_14156_14183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (5))){
var inst_14125 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14126 = cljs.core.async.close_BANG_.call(null,fc);
var state_14145__$1 = (function (){var statearr_14157 = state_14145;
(statearr_14157[(8)] = inst_14125);

return statearr_14157;
})();
var statearr_14158_14184 = state_14145__$1;
(statearr_14158_14184[(2)] = inst_14126);

(statearr_14158_14184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (14))){
var inst_14139 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
var statearr_14159_14185 = state_14145__$1;
(statearr_14159_14185[(2)] = inst_14139);

(statearr_14159_14185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (10))){
var state_14145__$1 = state_14145;
var statearr_14160_14186 = state_14145__$1;
(statearr_14160_14186[(2)] = fc);

(statearr_14160_14186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14146 === (8))){
var inst_14134 = (state_14145[(2)]);
var state_14145__$1 = state_14145;
if(cljs.core.truth_(inst_14134)){
var statearr_14161_14187 = state_14145__$1;
(statearr_14161_14187[(1)] = (12));

} else {
var statearr_14162_14188 = state_14145__$1;
(statearr_14162_14188[(1)] = (13));

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
});})(c__13488__auto___14174,tc,fc))
;
return ((function (switch__13376__auto__,c__13488__auto___14174,tc,fc){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_14166 = [null,null,null,null,null,null,null,null,null];
(statearr_14166[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_14166[(1)] = (1));

return statearr_14166;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_14145){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_14145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e14167){if((e14167 instanceof Object)){
var ex__13380__auto__ = e14167;
var statearr_14168_14189 = state_14145;
(statearr_14168_14189[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14190 = state_14145;
state_14145 = G__14190;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_14145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_14145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___14174,tc,fc))
})();
var state__13490__auto__ = (function (){var statearr_14169 = f__13489__auto__.call(null);
(statearr_14169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___14174);

return statearr_14169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___14174,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto__){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto__){
return (function (state_14254){
var state_val_14255 = (state_14254[(1)]);
if((state_val_14255 === (7))){
var inst_14250 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
var statearr_14256_14277 = state_14254__$1;
(statearr_14256_14277[(2)] = inst_14250);

(statearr_14256_14277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (1))){
var inst_14234 = init;
var state_14254__$1 = (function (){var statearr_14257 = state_14254;
(statearr_14257[(7)] = inst_14234);

return statearr_14257;
})();
var statearr_14258_14278 = state_14254__$1;
(statearr_14258_14278[(2)] = null);

(statearr_14258_14278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (4))){
var inst_14237 = (state_14254[(8)]);
var inst_14237__$1 = (state_14254[(2)]);
var inst_14238 = (inst_14237__$1 == null);
var state_14254__$1 = (function (){var statearr_14259 = state_14254;
(statearr_14259[(8)] = inst_14237__$1);

return statearr_14259;
})();
if(cljs.core.truth_(inst_14238)){
var statearr_14260_14279 = state_14254__$1;
(statearr_14260_14279[(1)] = (5));

} else {
var statearr_14261_14280 = state_14254__$1;
(statearr_14261_14280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (6))){
var inst_14237 = (state_14254[(8)]);
var inst_14241 = (state_14254[(9)]);
var inst_14234 = (state_14254[(7)]);
var inst_14241__$1 = f.call(null,inst_14234,inst_14237);
var inst_14242 = cljs.core.reduced_QMARK_.call(null,inst_14241__$1);
var state_14254__$1 = (function (){var statearr_14262 = state_14254;
(statearr_14262[(9)] = inst_14241__$1);

return statearr_14262;
})();
if(inst_14242){
var statearr_14263_14281 = state_14254__$1;
(statearr_14263_14281[(1)] = (8));

} else {
var statearr_14264_14282 = state_14254__$1;
(statearr_14264_14282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (3))){
var inst_14252 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14254__$1,inst_14252);
} else {
if((state_val_14255 === (2))){
var state_14254__$1 = state_14254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14254__$1,(4),ch);
} else {
if((state_val_14255 === (9))){
var inst_14241 = (state_14254[(9)]);
var inst_14234 = inst_14241;
var state_14254__$1 = (function (){var statearr_14265 = state_14254;
(statearr_14265[(7)] = inst_14234);

return statearr_14265;
})();
var statearr_14266_14283 = state_14254__$1;
(statearr_14266_14283[(2)] = null);

(statearr_14266_14283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (5))){
var inst_14234 = (state_14254[(7)]);
var state_14254__$1 = state_14254;
var statearr_14267_14284 = state_14254__$1;
(statearr_14267_14284[(2)] = inst_14234);

(statearr_14267_14284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (10))){
var inst_14248 = (state_14254[(2)]);
var state_14254__$1 = state_14254;
var statearr_14268_14285 = state_14254__$1;
(statearr_14268_14285[(2)] = inst_14248);

(statearr_14268_14285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14255 === (8))){
var inst_14241 = (state_14254[(9)]);
var inst_14244 = cljs.core.deref.call(null,inst_14241);
var state_14254__$1 = state_14254;
var statearr_14269_14286 = state_14254__$1;
(statearr_14269_14286[(2)] = inst_14244);

(statearr_14269_14286[(1)] = (10));


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
});})(c__13488__auto__))
;
return ((function (switch__13376__auto__,c__13488__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13377__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13377__auto____0 = (function (){
var statearr_14273 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14273[(0)] = cljs$core$async$reduce_$_state_machine__13377__auto__);

(statearr_14273[(1)] = (1));

return statearr_14273;
});
var cljs$core$async$reduce_$_state_machine__13377__auto____1 = (function (state_14254){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_14254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e14274){if((e14274 instanceof Object)){
var ex__13380__auto__ = e14274;
var statearr_14275_14287 = state_14254;
(statearr_14275_14287[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14288 = state_14254;
state_14254 = G__14288;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13377__auto__ = function(state_14254){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13377__auto____1.call(this,state_14254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13377__auto____0;
cljs$core$async$reduce_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13377__auto____1;
return cljs$core$async$reduce_$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto__))
})();
var state__13490__auto__ = (function (){var statearr_14276 = f__13489__auto__.call(null);
(statearr_14276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto__);

return statearr_14276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto__))
);

return c__13488__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14289 = [];
var len__7484__auto___14341 = arguments.length;
var i__7485__auto___14342 = (0);
while(true){
if((i__7485__auto___14342 < len__7484__auto___14341)){
args14289.push((arguments[i__7485__auto___14342]));

var G__14343 = (i__7485__auto___14342 + (1));
i__7485__auto___14342 = G__14343;
continue;
} else {
}
break;
}

var G__14291 = args14289.length;
switch (G__14291) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14289.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto__){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto__){
return (function (state_14316){
var state_val_14317 = (state_14316[(1)]);
if((state_val_14317 === (7))){
var inst_14298 = (state_14316[(2)]);
var state_14316__$1 = state_14316;
var statearr_14318_14345 = state_14316__$1;
(statearr_14318_14345[(2)] = inst_14298);

(statearr_14318_14345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (1))){
var inst_14292 = cljs.core.seq.call(null,coll);
var inst_14293 = inst_14292;
var state_14316__$1 = (function (){var statearr_14319 = state_14316;
(statearr_14319[(7)] = inst_14293);

return statearr_14319;
})();
var statearr_14320_14346 = state_14316__$1;
(statearr_14320_14346[(2)] = null);

(statearr_14320_14346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (4))){
var inst_14293 = (state_14316[(7)]);
var inst_14296 = cljs.core.first.call(null,inst_14293);
var state_14316__$1 = state_14316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14316__$1,(7),ch,inst_14296);
} else {
if((state_val_14317 === (13))){
var inst_14310 = (state_14316[(2)]);
var state_14316__$1 = state_14316;
var statearr_14321_14347 = state_14316__$1;
(statearr_14321_14347[(2)] = inst_14310);

(statearr_14321_14347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (6))){
var inst_14301 = (state_14316[(2)]);
var state_14316__$1 = state_14316;
if(cljs.core.truth_(inst_14301)){
var statearr_14322_14348 = state_14316__$1;
(statearr_14322_14348[(1)] = (8));

} else {
var statearr_14323_14349 = state_14316__$1;
(statearr_14323_14349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (3))){
var inst_14314 = (state_14316[(2)]);
var state_14316__$1 = state_14316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14316__$1,inst_14314);
} else {
if((state_val_14317 === (12))){
var state_14316__$1 = state_14316;
var statearr_14324_14350 = state_14316__$1;
(statearr_14324_14350[(2)] = null);

(statearr_14324_14350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (2))){
var inst_14293 = (state_14316[(7)]);
var state_14316__$1 = state_14316;
if(cljs.core.truth_(inst_14293)){
var statearr_14325_14351 = state_14316__$1;
(statearr_14325_14351[(1)] = (4));

} else {
var statearr_14326_14352 = state_14316__$1;
(statearr_14326_14352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (11))){
var inst_14307 = cljs.core.async.close_BANG_.call(null,ch);
var state_14316__$1 = state_14316;
var statearr_14327_14353 = state_14316__$1;
(statearr_14327_14353[(2)] = inst_14307);

(statearr_14327_14353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (9))){
var state_14316__$1 = state_14316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14328_14354 = state_14316__$1;
(statearr_14328_14354[(1)] = (11));

} else {
var statearr_14329_14355 = state_14316__$1;
(statearr_14329_14355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (5))){
var inst_14293 = (state_14316[(7)]);
var state_14316__$1 = state_14316;
var statearr_14330_14356 = state_14316__$1;
(statearr_14330_14356[(2)] = inst_14293);

(statearr_14330_14356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (10))){
var inst_14312 = (state_14316[(2)]);
var state_14316__$1 = state_14316;
var statearr_14331_14357 = state_14316__$1;
(statearr_14331_14357[(2)] = inst_14312);

(statearr_14331_14357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14317 === (8))){
var inst_14293 = (state_14316[(7)]);
var inst_14303 = cljs.core.next.call(null,inst_14293);
var inst_14293__$1 = inst_14303;
var state_14316__$1 = (function (){var statearr_14332 = state_14316;
(statearr_14332[(7)] = inst_14293__$1);

return statearr_14332;
})();
var statearr_14333_14358 = state_14316__$1;
(statearr_14333_14358[(2)] = null);

(statearr_14333_14358[(1)] = (2));


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
});})(c__13488__auto__))
;
return ((function (switch__13376__auto__,c__13488__auto__){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_14337 = [null,null,null,null,null,null,null,null];
(statearr_14337[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_14337[(1)] = (1));

return statearr_14337;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_14316){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_14316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e14338){if((e14338 instanceof Object)){
var ex__13380__auto__ = e14338;
var statearr_14339_14359 = state_14316;
(statearr_14339_14359[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14360 = state_14316;
state_14316 = G__14360;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_14316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_14316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto__))
})();
var state__13490__auto__ = (function (){var statearr_14340 = f__13489__auto__.call(null);
(statearr_14340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto__);

return statearr_14340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto__))
);

return c__13488__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7073__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m);
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14586 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14586 = (function (mult,ch,cs,meta14587){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14587 = meta14587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14588,meta14587__$1){
var self__ = this;
var _14588__$1 = this;
return (new cljs.core.async.t_cljs$core$async14586(self__.mult,self__.ch,self__.cs,meta14587__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14588){
var self__ = this;
var _14588__$1 = this;
return self__.meta14587;
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14587","meta14587",-1249326873,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14586.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14586";

cljs.core.async.t_cljs$core$async14586.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async14586");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14586 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14586(mult__$1,ch__$1,cs__$1,meta14587){
return (new cljs.core.async.t_cljs$core$async14586(mult__$1,ch__$1,cs__$1,meta14587));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14586(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13488__auto___14811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___14811,cs,m,dchan,dctr,done){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___14811,cs,m,dchan,dctr,done){
return (function (state_14723){
var state_val_14724 = (state_14723[(1)]);
if((state_val_14724 === (7))){
var inst_14719 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14725_14812 = state_14723__$1;
(statearr_14725_14812[(2)] = inst_14719);

(statearr_14725_14812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (20))){
var inst_14622 = (state_14723[(7)]);
var inst_14634 = cljs.core.first.call(null,inst_14622);
var inst_14635 = cljs.core.nth.call(null,inst_14634,(0),null);
var inst_14636 = cljs.core.nth.call(null,inst_14634,(1),null);
var state_14723__$1 = (function (){var statearr_14726 = state_14723;
(statearr_14726[(8)] = inst_14635);

return statearr_14726;
})();
if(cljs.core.truth_(inst_14636)){
var statearr_14727_14813 = state_14723__$1;
(statearr_14727_14813[(1)] = (22));

} else {
var statearr_14728_14814 = state_14723__$1;
(statearr_14728_14814[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (27))){
var inst_14666 = (state_14723[(9)]);
var inst_14664 = (state_14723[(10)]);
var inst_14591 = (state_14723[(11)]);
var inst_14671 = (state_14723[(12)]);
var inst_14671__$1 = cljs.core._nth.call(null,inst_14664,inst_14666);
var inst_14672 = cljs.core.async.put_BANG_.call(null,inst_14671__$1,inst_14591,done);
var state_14723__$1 = (function (){var statearr_14729 = state_14723;
(statearr_14729[(12)] = inst_14671__$1);

return statearr_14729;
})();
if(cljs.core.truth_(inst_14672)){
var statearr_14730_14815 = state_14723__$1;
(statearr_14730_14815[(1)] = (30));

} else {
var statearr_14731_14816 = state_14723__$1;
(statearr_14731_14816[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (1))){
var state_14723__$1 = state_14723;
var statearr_14732_14817 = state_14723__$1;
(statearr_14732_14817[(2)] = null);

(statearr_14732_14817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (24))){
var inst_14622 = (state_14723[(7)]);
var inst_14641 = (state_14723[(2)]);
var inst_14642 = cljs.core.next.call(null,inst_14622);
var inst_14600 = inst_14642;
var inst_14601 = null;
var inst_14602 = (0);
var inst_14603 = (0);
var state_14723__$1 = (function (){var statearr_14733 = state_14723;
(statearr_14733[(13)] = inst_14601);

(statearr_14733[(14)] = inst_14603);

(statearr_14733[(15)] = inst_14602);

(statearr_14733[(16)] = inst_14641);

(statearr_14733[(17)] = inst_14600);

return statearr_14733;
})();
var statearr_14734_14818 = state_14723__$1;
(statearr_14734_14818[(2)] = null);

(statearr_14734_14818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (39))){
var state_14723__$1 = state_14723;
var statearr_14738_14819 = state_14723__$1;
(statearr_14738_14819[(2)] = null);

(statearr_14738_14819[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (4))){
var inst_14591 = (state_14723[(11)]);
var inst_14591__$1 = (state_14723[(2)]);
var inst_14592 = (inst_14591__$1 == null);
var state_14723__$1 = (function (){var statearr_14739 = state_14723;
(statearr_14739[(11)] = inst_14591__$1);

return statearr_14739;
})();
if(cljs.core.truth_(inst_14592)){
var statearr_14740_14820 = state_14723__$1;
(statearr_14740_14820[(1)] = (5));

} else {
var statearr_14741_14821 = state_14723__$1;
(statearr_14741_14821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (15))){
var inst_14601 = (state_14723[(13)]);
var inst_14603 = (state_14723[(14)]);
var inst_14602 = (state_14723[(15)]);
var inst_14600 = (state_14723[(17)]);
var inst_14618 = (state_14723[(2)]);
var inst_14619 = (inst_14603 + (1));
var tmp14735 = inst_14601;
var tmp14736 = inst_14602;
var tmp14737 = inst_14600;
var inst_14600__$1 = tmp14737;
var inst_14601__$1 = tmp14735;
var inst_14602__$1 = tmp14736;
var inst_14603__$1 = inst_14619;
var state_14723__$1 = (function (){var statearr_14742 = state_14723;
(statearr_14742[(13)] = inst_14601__$1);

(statearr_14742[(18)] = inst_14618);

(statearr_14742[(14)] = inst_14603__$1);

(statearr_14742[(15)] = inst_14602__$1);

(statearr_14742[(17)] = inst_14600__$1);

return statearr_14742;
})();
var statearr_14743_14822 = state_14723__$1;
(statearr_14743_14822[(2)] = null);

(statearr_14743_14822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (21))){
var inst_14645 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14747_14823 = state_14723__$1;
(statearr_14747_14823[(2)] = inst_14645);

(statearr_14747_14823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (31))){
var inst_14671 = (state_14723[(12)]);
var inst_14675 = done.call(null,null);
var inst_14676 = cljs.core.async.untap_STAR_.call(null,m,inst_14671);
var state_14723__$1 = (function (){var statearr_14748 = state_14723;
(statearr_14748[(19)] = inst_14675);

return statearr_14748;
})();
var statearr_14749_14824 = state_14723__$1;
(statearr_14749_14824[(2)] = inst_14676);

(statearr_14749_14824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (32))){
var inst_14666 = (state_14723[(9)]);
var inst_14663 = (state_14723[(20)]);
var inst_14664 = (state_14723[(10)]);
var inst_14665 = (state_14723[(21)]);
var inst_14678 = (state_14723[(2)]);
var inst_14679 = (inst_14666 + (1));
var tmp14744 = inst_14663;
var tmp14745 = inst_14664;
var tmp14746 = inst_14665;
var inst_14663__$1 = tmp14744;
var inst_14664__$1 = tmp14745;
var inst_14665__$1 = tmp14746;
var inst_14666__$1 = inst_14679;
var state_14723__$1 = (function (){var statearr_14750 = state_14723;
(statearr_14750[(9)] = inst_14666__$1);

(statearr_14750[(22)] = inst_14678);

(statearr_14750[(20)] = inst_14663__$1);

(statearr_14750[(10)] = inst_14664__$1);

(statearr_14750[(21)] = inst_14665__$1);

return statearr_14750;
})();
var statearr_14751_14825 = state_14723__$1;
(statearr_14751_14825[(2)] = null);

(statearr_14751_14825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (40))){
var inst_14691 = (state_14723[(23)]);
var inst_14695 = done.call(null,null);
var inst_14696 = cljs.core.async.untap_STAR_.call(null,m,inst_14691);
var state_14723__$1 = (function (){var statearr_14752 = state_14723;
(statearr_14752[(24)] = inst_14695);

return statearr_14752;
})();
var statearr_14753_14826 = state_14723__$1;
(statearr_14753_14826[(2)] = inst_14696);

(statearr_14753_14826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (33))){
var inst_14682 = (state_14723[(25)]);
var inst_14684 = cljs.core.chunked_seq_QMARK_.call(null,inst_14682);
var state_14723__$1 = state_14723;
if(inst_14684){
var statearr_14754_14827 = state_14723__$1;
(statearr_14754_14827[(1)] = (36));

} else {
var statearr_14755_14828 = state_14723__$1;
(statearr_14755_14828[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (13))){
var inst_14612 = (state_14723[(26)]);
var inst_14615 = cljs.core.async.close_BANG_.call(null,inst_14612);
var state_14723__$1 = state_14723;
var statearr_14756_14829 = state_14723__$1;
(statearr_14756_14829[(2)] = inst_14615);

(statearr_14756_14829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (22))){
var inst_14635 = (state_14723[(8)]);
var inst_14638 = cljs.core.async.close_BANG_.call(null,inst_14635);
var state_14723__$1 = state_14723;
var statearr_14757_14830 = state_14723__$1;
(statearr_14757_14830[(2)] = inst_14638);

(statearr_14757_14830[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (36))){
var inst_14682 = (state_14723[(25)]);
var inst_14686 = cljs.core.chunk_first.call(null,inst_14682);
var inst_14687 = cljs.core.chunk_rest.call(null,inst_14682);
var inst_14688 = cljs.core.count.call(null,inst_14686);
var inst_14663 = inst_14687;
var inst_14664 = inst_14686;
var inst_14665 = inst_14688;
var inst_14666 = (0);
var state_14723__$1 = (function (){var statearr_14758 = state_14723;
(statearr_14758[(9)] = inst_14666);

(statearr_14758[(20)] = inst_14663);

(statearr_14758[(10)] = inst_14664);

(statearr_14758[(21)] = inst_14665);

return statearr_14758;
})();
var statearr_14759_14831 = state_14723__$1;
(statearr_14759_14831[(2)] = null);

(statearr_14759_14831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (41))){
var inst_14682 = (state_14723[(25)]);
var inst_14698 = (state_14723[(2)]);
var inst_14699 = cljs.core.next.call(null,inst_14682);
var inst_14663 = inst_14699;
var inst_14664 = null;
var inst_14665 = (0);
var inst_14666 = (0);
var state_14723__$1 = (function (){var statearr_14760 = state_14723;
(statearr_14760[(9)] = inst_14666);

(statearr_14760[(20)] = inst_14663);

(statearr_14760[(27)] = inst_14698);

(statearr_14760[(10)] = inst_14664);

(statearr_14760[(21)] = inst_14665);

return statearr_14760;
})();
var statearr_14761_14832 = state_14723__$1;
(statearr_14761_14832[(2)] = null);

(statearr_14761_14832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (43))){
var state_14723__$1 = state_14723;
var statearr_14762_14833 = state_14723__$1;
(statearr_14762_14833[(2)] = null);

(statearr_14762_14833[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (29))){
var inst_14707 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14763_14834 = state_14723__$1;
(statearr_14763_14834[(2)] = inst_14707);

(statearr_14763_14834[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (44))){
var inst_14716 = (state_14723[(2)]);
var state_14723__$1 = (function (){var statearr_14764 = state_14723;
(statearr_14764[(28)] = inst_14716);

return statearr_14764;
})();
var statearr_14765_14835 = state_14723__$1;
(statearr_14765_14835[(2)] = null);

(statearr_14765_14835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (6))){
var inst_14655 = (state_14723[(29)]);
var inst_14654 = cljs.core.deref.call(null,cs);
var inst_14655__$1 = cljs.core.keys.call(null,inst_14654);
var inst_14656 = cljs.core.count.call(null,inst_14655__$1);
var inst_14657 = cljs.core.reset_BANG_.call(null,dctr,inst_14656);
var inst_14662 = cljs.core.seq.call(null,inst_14655__$1);
var inst_14663 = inst_14662;
var inst_14664 = null;
var inst_14665 = (0);
var inst_14666 = (0);
var state_14723__$1 = (function (){var statearr_14766 = state_14723;
(statearr_14766[(9)] = inst_14666);

(statearr_14766[(20)] = inst_14663);

(statearr_14766[(30)] = inst_14657);

(statearr_14766[(10)] = inst_14664);

(statearr_14766[(29)] = inst_14655__$1);

(statearr_14766[(21)] = inst_14665);

return statearr_14766;
})();
var statearr_14767_14836 = state_14723__$1;
(statearr_14767_14836[(2)] = null);

(statearr_14767_14836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (28))){
var inst_14663 = (state_14723[(20)]);
var inst_14682 = (state_14723[(25)]);
var inst_14682__$1 = cljs.core.seq.call(null,inst_14663);
var state_14723__$1 = (function (){var statearr_14768 = state_14723;
(statearr_14768[(25)] = inst_14682__$1);

return statearr_14768;
})();
if(inst_14682__$1){
var statearr_14769_14837 = state_14723__$1;
(statearr_14769_14837[(1)] = (33));

} else {
var statearr_14770_14838 = state_14723__$1;
(statearr_14770_14838[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (25))){
var inst_14666 = (state_14723[(9)]);
var inst_14665 = (state_14723[(21)]);
var inst_14668 = (inst_14666 < inst_14665);
var inst_14669 = inst_14668;
var state_14723__$1 = state_14723;
if(cljs.core.truth_(inst_14669)){
var statearr_14771_14839 = state_14723__$1;
(statearr_14771_14839[(1)] = (27));

} else {
var statearr_14772_14840 = state_14723__$1;
(statearr_14772_14840[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (34))){
var state_14723__$1 = state_14723;
var statearr_14773_14841 = state_14723__$1;
(statearr_14773_14841[(2)] = null);

(statearr_14773_14841[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (17))){
var state_14723__$1 = state_14723;
var statearr_14774_14842 = state_14723__$1;
(statearr_14774_14842[(2)] = null);

(statearr_14774_14842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (3))){
var inst_14721 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14723__$1,inst_14721);
} else {
if((state_val_14724 === (12))){
var inst_14650 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14775_14843 = state_14723__$1;
(statearr_14775_14843[(2)] = inst_14650);

(statearr_14775_14843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (2))){
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14723__$1,(4),ch);
} else {
if((state_val_14724 === (23))){
var state_14723__$1 = state_14723;
var statearr_14776_14844 = state_14723__$1;
(statearr_14776_14844[(2)] = null);

(statearr_14776_14844[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (35))){
var inst_14705 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14777_14845 = state_14723__$1;
(statearr_14777_14845[(2)] = inst_14705);

(statearr_14777_14845[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (19))){
var inst_14622 = (state_14723[(7)]);
var inst_14626 = cljs.core.chunk_first.call(null,inst_14622);
var inst_14627 = cljs.core.chunk_rest.call(null,inst_14622);
var inst_14628 = cljs.core.count.call(null,inst_14626);
var inst_14600 = inst_14627;
var inst_14601 = inst_14626;
var inst_14602 = inst_14628;
var inst_14603 = (0);
var state_14723__$1 = (function (){var statearr_14778 = state_14723;
(statearr_14778[(13)] = inst_14601);

(statearr_14778[(14)] = inst_14603);

(statearr_14778[(15)] = inst_14602);

(statearr_14778[(17)] = inst_14600);

return statearr_14778;
})();
var statearr_14779_14846 = state_14723__$1;
(statearr_14779_14846[(2)] = null);

(statearr_14779_14846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (11))){
var inst_14622 = (state_14723[(7)]);
var inst_14600 = (state_14723[(17)]);
var inst_14622__$1 = cljs.core.seq.call(null,inst_14600);
var state_14723__$1 = (function (){var statearr_14780 = state_14723;
(statearr_14780[(7)] = inst_14622__$1);

return statearr_14780;
})();
if(inst_14622__$1){
var statearr_14781_14847 = state_14723__$1;
(statearr_14781_14847[(1)] = (16));

} else {
var statearr_14782_14848 = state_14723__$1;
(statearr_14782_14848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (9))){
var inst_14652 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14783_14849 = state_14723__$1;
(statearr_14783_14849[(2)] = inst_14652);

(statearr_14783_14849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (5))){
var inst_14598 = cljs.core.deref.call(null,cs);
var inst_14599 = cljs.core.seq.call(null,inst_14598);
var inst_14600 = inst_14599;
var inst_14601 = null;
var inst_14602 = (0);
var inst_14603 = (0);
var state_14723__$1 = (function (){var statearr_14784 = state_14723;
(statearr_14784[(13)] = inst_14601);

(statearr_14784[(14)] = inst_14603);

(statearr_14784[(15)] = inst_14602);

(statearr_14784[(17)] = inst_14600);

return statearr_14784;
})();
var statearr_14785_14850 = state_14723__$1;
(statearr_14785_14850[(2)] = null);

(statearr_14785_14850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (14))){
var state_14723__$1 = state_14723;
var statearr_14786_14851 = state_14723__$1;
(statearr_14786_14851[(2)] = null);

(statearr_14786_14851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (45))){
var inst_14713 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14787_14852 = state_14723__$1;
(statearr_14787_14852[(2)] = inst_14713);

(statearr_14787_14852[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (26))){
var inst_14655 = (state_14723[(29)]);
var inst_14709 = (state_14723[(2)]);
var inst_14710 = cljs.core.seq.call(null,inst_14655);
var state_14723__$1 = (function (){var statearr_14788 = state_14723;
(statearr_14788[(31)] = inst_14709);

return statearr_14788;
})();
if(inst_14710){
var statearr_14789_14853 = state_14723__$1;
(statearr_14789_14853[(1)] = (42));

} else {
var statearr_14790_14854 = state_14723__$1;
(statearr_14790_14854[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (16))){
var inst_14622 = (state_14723[(7)]);
var inst_14624 = cljs.core.chunked_seq_QMARK_.call(null,inst_14622);
var state_14723__$1 = state_14723;
if(inst_14624){
var statearr_14791_14855 = state_14723__$1;
(statearr_14791_14855[(1)] = (19));

} else {
var statearr_14792_14856 = state_14723__$1;
(statearr_14792_14856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (38))){
var inst_14702 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14793_14857 = state_14723__$1;
(statearr_14793_14857[(2)] = inst_14702);

(statearr_14793_14857[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (30))){
var state_14723__$1 = state_14723;
var statearr_14794_14858 = state_14723__$1;
(statearr_14794_14858[(2)] = null);

(statearr_14794_14858[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (10))){
var inst_14601 = (state_14723[(13)]);
var inst_14603 = (state_14723[(14)]);
var inst_14611 = cljs.core._nth.call(null,inst_14601,inst_14603);
var inst_14612 = cljs.core.nth.call(null,inst_14611,(0),null);
var inst_14613 = cljs.core.nth.call(null,inst_14611,(1),null);
var state_14723__$1 = (function (){var statearr_14795 = state_14723;
(statearr_14795[(26)] = inst_14612);

return statearr_14795;
})();
if(cljs.core.truth_(inst_14613)){
var statearr_14796_14859 = state_14723__$1;
(statearr_14796_14859[(1)] = (13));

} else {
var statearr_14797_14860 = state_14723__$1;
(statearr_14797_14860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (18))){
var inst_14648 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14798_14861 = state_14723__$1;
(statearr_14798_14861[(2)] = inst_14648);

(statearr_14798_14861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (42))){
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14723__$1,(45),dchan);
} else {
if((state_val_14724 === (37))){
var inst_14682 = (state_14723[(25)]);
var inst_14691 = (state_14723[(23)]);
var inst_14591 = (state_14723[(11)]);
var inst_14691__$1 = cljs.core.first.call(null,inst_14682);
var inst_14692 = cljs.core.async.put_BANG_.call(null,inst_14691__$1,inst_14591,done);
var state_14723__$1 = (function (){var statearr_14799 = state_14723;
(statearr_14799[(23)] = inst_14691__$1);

return statearr_14799;
})();
if(cljs.core.truth_(inst_14692)){
var statearr_14800_14862 = state_14723__$1;
(statearr_14800_14862[(1)] = (39));

} else {
var statearr_14801_14863 = state_14723__$1;
(statearr_14801_14863[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (8))){
var inst_14603 = (state_14723[(14)]);
var inst_14602 = (state_14723[(15)]);
var inst_14605 = (inst_14603 < inst_14602);
var inst_14606 = inst_14605;
var state_14723__$1 = state_14723;
if(cljs.core.truth_(inst_14606)){
var statearr_14802_14864 = state_14723__$1;
(statearr_14802_14864[(1)] = (10));

} else {
var statearr_14803_14865 = state_14723__$1;
(statearr_14803_14865[(1)] = (11));

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
});})(c__13488__auto___14811,cs,m,dchan,dctr,done))
;
return ((function (switch__13376__auto__,c__13488__auto___14811,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13377__auto__ = null;
var cljs$core$async$mult_$_state_machine__13377__auto____0 = (function (){
var statearr_14807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14807[(0)] = cljs$core$async$mult_$_state_machine__13377__auto__);

(statearr_14807[(1)] = (1));

return statearr_14807;
});
var cljs$core$async$mult_$_state_machine__13377__auto____1 = (function (state_14723){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_14723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e14808){if((e14808 instanceof Object)){
var ex__13380__auto__ = e14808;
var statearr_14809_14866 = state_14723;
(statearr_14809_14866[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14867 = state_14723;
state_14723 = G__14867;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13377__auto__ = function(state_14723){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13377__auto____1.call(this,state_14723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13377__auto____0;
cljs$core$async$mult_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13377__auto____1;
return cljs$core$async$mult_$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___14811,cs,m,dchan,dctr,done))
})();
var state__13490__auto__ = (function (){var statearr_14810 = f__13489__auto__.call(null);
(statearr_14810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___14811);

return statearr_14810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___14811,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14868 = [];
var len__7484__auto___14871 = arguments.length;
var i__7485__auto___14872 = (0);
while(true){
if((i__7485__auto___14872 < len__7484__auto___14871)){
args14868.push((arguments[i__7485__auto___14872]));

var G__14873 = (i__7485__auto___14872 + (1));
i__7485__auto___14872 = G__14873;
continue;
} else {
}
break;
}

var G__14870 = args14868.length;
switch (G__14870) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14868.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m);
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,state_map);
} else {
var m__7073__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,mode);
} else {
var m__7073__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___14885 = arguments.length;
var i__7485__auto___14886 = (0);
while(true){
if((i__7485__auto___14886 < len__7484__auto___14885)){
args__7491__auto__.push((arguments[i__7485__auto___14886]));

var G__14887 = (i__7485__auto___14886 + (1));
i__7485__auto___14886 = G__14887;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14879){
var map__14880 = p__14879;
var map__14880__$1 = ((((!((map__14880 == null)))?((((map__14880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14880):map__14880);
var opts = map__14880__$1;
var statearr_14882_14888 = state;
(statearr_14882_14888[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14880,map__14880__$1,opts){
return (function (val){
var statearr_14883_14889 = state;
(statearr_14883_14889[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14880,map__14880__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14884_14890 = state;
(statearr_14884_14890[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14875){
var G__14876 = cljs.core.first.call(null,seq14875);
var seq14875__$1 = cljs.core.next.call(null,seq14875);
var G__14877 = cljs.core.first.call(null,seq14875__$1);
var seq14875__$2 = cljs.core.next.call(null,seq14875__$1);
var G__14878 = cljs.core.first.call(null,seq14875__$2);
var seq14875__$3 = cljs.core.next.call(null,seq14875__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14876,G__14877,G__14878,seq14875__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async15056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15056 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15057){
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
this.meta15057 = meta15057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15058,meta15057__$1){
var self__ = this;
var _15058__$1 = this;
return (new cljs.core.async.t_cljs$core$async15056(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15057__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15058){
var self__ = this;
var _15058__$1 = this;
return self__.meta15057;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15057","meta15057",377551557,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15056";

cljs.core.async.t_cljs$core$async15056.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async15056");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15056 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15056(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15057){
return (new cljs.core.async.t_cljs$core$async15056(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15057));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15056(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13488__auto___15221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___15221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___15221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15158){
var state_val_15159 = (state_15158[(1)]);
if((state_val_15159 === (7))){
var inst_15074 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15160_15222 = state_15158__$1;
(statearr_15160_15222[(2)] = inst_15074);

(statearr_15160_15222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (20))){
var inst_15086 = (state_15158[(7)]);
var state_15158__$1 = state_15158;
var statearr_15161_15223 = state_15158__$1;
(statearr_15161_15223[(2)] = inst_15086);

(statearr_15161_15223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (27))){
var state_15158__$1 = state_15158;
var statearr_15162_15224 = state_15158__$1;
(statearr_15162_15224[(2)] = null);

(statearr_15162_15224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (1))){
var inst_15062 = (state_15158[(8)]);
var inst_15062__$1 = calc_state.call(null);
var inst_15064 = (inst_15062__$1 == null);
var inst_15065 = cljs.core.not.call(null,inst_15064);
var state_15158__$1 = (function (){var statearr_15163 = state_15158;
(statearr_15163[(8)] = inst_15062__$1);

return statearr_15163;
})();
if(inst_15065){
var statearr_15164_15225 = state_15158__$1;
(statearr_15164_15225[(1)] = (2));

} else {
var statearr_15165_15226 = state_15158__$1;
(statearr_15165_15226[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (24))){
var inst_15118 = (state_15158[(9)]);
var inst_15132 = (state_15158[(10)]);
var inst_15109 = (state_15158[(11)]);
var inst_15132__$1 = inst_15109.call(null,inst_15118);
var state_15158__$1 = (function (){var statearr_15166 = state_15158;
(statearr_15166[(10)] = inst_15132__$1);

return statearr_15166;
})();
if(cljs.core.truth_(inst_15132__$1)){
var statearr_15167_15227 = state_15158__$1;
(statearr_15167_15227[(1)] = (29));

} else {
var statearr_15168_15228 = state_15158__$1;
(statearr_15168_15228[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (4))){
var inst_15077 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15077)){
var statearr_15169_15229 = state_15158__$1;
(statearr_15169_15229[(1)] = (8));

} else {
var statearr_15170_15230 = state_15158__$1;
(statearr_15170_15230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (15))){
var inst_15103 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15103)){
var statearr_15171_15231 = state_15158__$1;
(statearr_15171_15231[(1)] = (19));

} else {
var statearr_15172_15232 = state_15158__$1;
(statearr_15172_15232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (21))){
var inst_15108 = (state_15158[(12)]);
var inst_15108__$1 = (state_15158[(2)]);
var inst_15109 = cljs.core.get.call(null,inst_15108__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15110 = cljs.core.get.call(null,inst_15108__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15111 = cljs.core.get.call(null,inst_15108__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15158__$1 = (function (){var statearr_15173 = state_15158;
(statearr_15173[(13)] = inst_15110);

(statearr_15173[(12)] = inst_15108__$1);

(statearr_15173[(11)] = inst_15109);

return statearr_15173;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15158__$1,(22),inst_15111);
} else {
if((state_val_15159 === (31))){
var inst_15140 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15140)){
var statearr_15174_15233 = state_15158__$1;
(statearr_15174_15233[(1)] = (32));

} else {
var statearr_15175_15234 = state_15158__$1;
(statearr_15175_15234[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (32))){
var inst_15117 = (state_15158[(14)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15158__$1,(35),out,inst_15117);
} else {
if((state_val_15159 === (33))){
var inst_15108 = (state_15158[(12)]);
var inst_15086 = inst_15108;
var state_15158__$1 = (function (){var statearr_15176 = state_15158;
(statearr_15176[(7)] = inst_15086);

return statearr_15176;
})();
var statearr_15177_15235 = state_15158__$1;
(statearr_15177_15235[(2)] = null);

(statearr_15177_15235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (13))){
var inst_15086 = (state_15158[(7)]);
var inst_15093 = inst_15086.cljs$lang$protocol_mask$partition0$;
var inst_15094 = (inst_15093 & (64));
var inst_15095 = inst_15086.cljs$core$ISeq$;
var inst_15096 = (inst_15094) || (inst_15095);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15096)){
var statearr_15178_15236 = state_15158__$1;
(statearr_15178_15236[(1)] = (16));

} else {
var statearr_15179_15237 = state_15158__$1;
(statearr_15179_15237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (22))){
var inst_15118 = (state_15158[(9)]);
var inst_15117 = (state_15158[(14)]);
var inst_15116 = (state_15158[(2)]);
var inst_15117__$1 = cljs.core.nth.call(null,inst_15116,(0),null);
var inst_15118__$1 = cljs.core.nth.call(null,inst_15116,(1),null);
var inst_15119 = (inst_15117__$1 == null);
var inst_15120 = cljs.core._EQ_.call(null,inst_15118__$1,change);
var inst_15121 = (inst_15119) || (inst_15120);
var state_15158__$1 = (function (){var statearr_15180 = state_15158;
(statearr_15180[(9)] = inst_15118__$1);

(statearr_15180[(14)] = inst_15117__$1);

return statearr_15180;
})();
if(cljs.core.truth_(inst_15121)){
var statearr_15181_15238 = state_15158__$1;
(statearr_15181_15238[(1)] = (23));

} else {
var statearr_15182_15239 = state_15158__$1;
(statearr_15182_15239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (36))){
var inst_15108 = (state_15158[(12)]);
var inst_15086 = inst_15108;
var state_15158__$1 = (function (){var statearr_15183 = state_15158;
(statearr_15183[(7)] = inst_15086);

return statearr_15183;
})();
var statearr_15184_15240 = state_15158__$1;
(statearr_15184_15240[(2)] = null);

(statearr_15184_15240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (29))){
var inst_15132 = (state_15158[(10)]);
var state_15158__$1 = state_15158;
var statearr_15185_15241 = state_15158__$1;
(statearr_15185_15241[(2)] = inst_15132);

(statearr_15185_15241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (6))){
var state_15158__$1 = state_15158;
var statearr_15186_15242 = state_15158__$1;
(statearr_15186_15242[(2)] = false);

(statearr_15186_15242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (28))){
var inst_15128 = (state_15158[(2)]);
var inst_15129 = calc_state.call(null);
var inst_15086 = inst_15129;
var state_15158__$1 = (function (){var statearr_15187 = state_15158;
(statearr_15187[(7)] = inst_15086);

(statearr_15187[(15)] = inst_15128);

return statearr_15187;
})();
var statearr_15188_15243 = state_15158__$1;
(statearr_15188_15243[(2)] = null);

(statearr_15188_15243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (25))){
var inst_15154 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15189_15244 = state_15158__$1;
(statearr_15189_15244[(2)] = inst_15154);

(statearr_15189_15244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (34))){
var inst_15152 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15190_15245 = state_15158__$1;
(statearr_15190_15245[(2)] = inst_15152);

(statearr_15190_15245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (17))){
var state_15158__$1 = state_15158;
var statearr_15191_15246 = state_15158__$1;
(statearr_15191_15246[(2)] = false);

(statearr_15191_15246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (3))){
var state_15158__$1 = state_15158;
var statearr_15192_15247 = state_15158__$1;
(statearr_15192_15247[(2)] = false);

(statearr_15192_15247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (12))){
var inst_15156 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15158__$1,inst_15156);
} else {
if((state_val_15159 === (2))){
var inst_15062 = (state_15158[(8)]);
var inst_15067 = inst_15062.cljs$lang$protocol_mask$partition0$;
var inst_15068 = (inst_15067 & (64));
var inst_15069 = inst_15062.cljs$core$ISeq$;
var inst_15070 = (inst_15068) || (inst_15069);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15070)){
var statearr_15193_15248 = state_15158__$1;
(statearr_15193_15248[(1)] = (5));

} else {
var statearr_15194_15249 = state_15158__$1;
(statearr_15194_15249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (23))){
var inst_15117 = (state_15158[(14)]);
var inst_15123 = (inst_15117 == null);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15123)){
var statearr_15195_15250 = state_15158__$1;
(statearr_15195_15250[(1)] = (26));

} else {
var statearr_15196_15251 = state_15158__$1;
(statearr_15196_15251[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (35))){
var inst_15143 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
if(cljs.core.truth_(inst_15143)){
var statearr_15197_15252 = state_15158__$1;
(statearr_15197_15252[(1)] = (36));

} else {
var statearr_15198_15253 = state_15158__$1;
(statearr_15198_15253[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (19))){
var inst_15086 = (state_15158[(7)]);
var inst_15105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15086);
var state_15158__$1 = state_15158;
var statearr_15199_15254 = state_15158__$1;
(statearr_15199_15254[(2)] = inst_15105);

(statearr_15199_15254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (11))){
var inst_15086 = (state_15158[(7)]);
var inst_15090 = (inst_15086 == null);
var inst_15091 = cljs.core.not.call(null,inst_15090);
var state_15158__$1 = state_15158;
if(inst_15091){
var statearr_15200_15255 = state_15158__$1;
(statearr_15200_15255[(1)] = (13));

} else {
var statearr_15201_15256 = state_15158__$1;
(statearr_15201_15256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (9))){
var inst_15062 = (state_15158[(8)]);
var state_15158__$1 = state_15158;
var statearr_15202_15257 = state_15158__$1;
(statearr_15202_15257[(2)] = inst_15062);

(statearr_15202_15257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (5))){
var state_15158__$1 = state_15158;
var statearr_15203_15258 = state_15158__$1;
(statearr_15203_15258[(2)] = true);

(statearr_15203_15258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (14))){
var state_15158__$1 = state_15158;
var statearr_15204_15259 = state_15158__$1;
(statearr_15204_15259[(2)] = false);

(statearr_15204_15259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (26))){
var inst_15118 = (state_15158[(9)]);
var inst_15125 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15118);
var state_15158__$1 = state_15158;
var statearr_15205_15260 = state_15158__$1;
(statearr_15205_15260[(2)] = inst_15125);

(statearr_15205_15260[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (16))){
var state_15158__$1 = state_15158;
var statearr_15206_15261 = state_15158__$1;
(statearr_15206_15261[(2)] = true);

(statearr_15206_15261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (38))){
var inst_15148 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15207_15262 = state_15158__$1;
(statearr_15207_15262[(2)] = inst_15148);

(statearr_15207_15262[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (30))){
var inst_15110 = (state_15158[(13)]);
var inst_15118 = (state_15158[(9)]);
var inst_15109 = (state_15158[(11)]);
var inst_15135 = cljs.core.empty_QMARK_.call(null,inst_15109);
var inst_15136 = inst_15110.call(null,inst_15118);
var inst_15137 = cljs.core.not.call(null,inst_15136);
var inst_15138 = (inst_15135) && (inst_15137);
var state_15158__$1 = state_15158;
var statearr_15208_15263 = state_15158__$1;
(statearr_15208_15263[(2)] = inst_15138);

(statearr_15208_15263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (10))){
var inst_15062 = (state_15158[(8)]);
var inst_15082 = (state_15158[(2)]);
var inst_15083 = cljs.core.get.call(null,inst_15082,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15084 = cljs.core.get.call(null,inst_15082,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15085 = cljs.core.get.call(null,inst_15082,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15086 = inst_15062;
var state_15158__$1 = (function (){var statearr_15209 = state_15158;
(statearr_15209[(7)] = inst_15086);

(statearr_15209[(16)] = inst_15083);

(statearr_15209[(17)] = inst_15084);

(statearr_15209[(18)] = inst_15085);

return statearr_15209;
})();
var statearr_15210_15264 = state_15158__$1;
(statearr_15210_15264[(2)] = null);

(statearr_15210_15264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (18))){
var inst_15100 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
var statearr_15211_15265 = state_15158__$1;
(statearr_15211_15265[(2)] = inst_15100);

(statearr_15211_15265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (37))){
var state_15158__$1 = state_15158;
var statearr_15212_15266 = state_15158__$1;
(statearr_15212_15266[(2)] = null);

(statearr_15212_15266[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (8))){
var inst_15062 = (state_15158[(8)]);
var inst_15079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15062);
var state_15158__$1 = state_15158;
var statearr_15213_15267 = state_15158__$1;
(statearr_15213_15267[(2)] = inst_15079);

(statearr_15213_15267[(1)] = (10));


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
});})(c__13488__auto___15221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13376__auto__,c__13488__auto___15221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13377__auto__ = null;
var cljs$core$async$mix_$_state_machine__13377__auto____0 = (function (){
var statearr_15217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15217[(0)] = cljs$core$async$mix_$_state_machine__13377__auto__);

(statearr_15217[(1)] = (1));

return statearr_15217;
});
var cljs$core$async$mix_$_state_machine__13377__auto____1 = (function (state_15158){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15218){if((e15218 instanceof Object)){
var ex__13380__auto__ = e15218;
var statearr_15219_15268 = state_15158;
(statearr_15219_15268[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15269 = state_15158;
state_15158 = G__15269;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13377__auto__ = function(state_15158){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13377__auto____1.call(this,state_15158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13377__auto____0;
cljs$core$async$mix_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13377__auto____1;
return cljs$core$async$mix_$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___15221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13490__auto__ = (function (){var statearr_15220 = f__13489__auto__.call(null);
(statearr_15220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___15221);

return statearr_15220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___15221,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7073__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15270 = [];
var len__7484__auto___15273 = arguments.length;
var i__7485__auto___15274 = (0);
while(true){
if((i__7485__auto___15274 < len__7484__auto___15273)){
args15270.push((arguments[i__7485__auto___15274]));

var G__15275 = (i__7485__auto___15274 + (1));
i__7485__auto___15274 = G__15275;
continue;
} else {
}
break;
}

var G__15272 = args15270.length;
switch (G__15272) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15270.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15278 = [];
var len__7484__auto___15403 = arguments.length;
var i__7485__auto___15404 = (0);
while(true){
if((i__7485__auto___15404 < len__7484__auto___15403)){
args15278.push((arguments[i__7485__auto___15404]));

var G__15405 = (i__7485__auto___15404 + (1));
i__7485__auto___15404 = G__15405;
continue;
} else {
}
break;
}

var G__15280 = args15278.length;
switch (G__15280) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15278.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6409__auto__,mults){
return (function (p1__15277_SHARP_){
if(cljs.core.truth_(p1__15277_SHARP_.call(null,topic))){
return p1__15277_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15277_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15281 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15282){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15282 = meta15282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15283,meta15282__$1){
var self__ = this;
var _15283__$1 = this;
return (new cljs.core.async.t_cljs$core$async15281(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15282__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15283){
var self__ = this;
var _15283__$1 = this;
return self__.meta15282;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15282","meta15282",364138117,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15281";

cljs.core.async.t_cljs$core$async15281.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async15281");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15281 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15281(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15282){
return (new cljs.core.async.t_cljs$core$async15281(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15282));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15281(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13488__auto___15407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___15407,mults,ensure_mult,p){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___15407,mults,ensure_mult,p){
return (function (state_15355){
var state_val_15356 = (state_15355[(1)]);
if((state_val_15356 === (7))){
var inst_15351 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15357_15408 = state_15355__$1;
(statearr_15357_15408[(2)] = inst_15351);

(statearr_15357_15408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (20))){
var state_15355__$1 = state_15355;
var statearr_15358_15409 = state_15355__$1;
(statearr_15358_15409[(2)] = null);

(statearr_15358_15409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (1))){
var state_15355__$1 = state_15355;
var statearr_15359_15410 = state_15355__$1;
(statearr_15359_15410[(2)] = null);

(statearr_15359_15410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (24))){
var inst_15334 = (state_15355[(7)]);
var inst_15343 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15334);
var state_15355__$1 = state_15355;
var statearr_15360_15411 = state_15355__$1;
(statearr_15360_15411[(2)] = inst_15343);

(statearr_15360_15411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (4))){
var inst_15286 = (state_15355[(8)]);
var inst_15286__$1 = (state_15355[(2)]);
var inst_15287 = (inst_15286__$1 == null);
var state_15355__$1 = (function (){var statearr_15361 = state_15355;
(statearr_15361[(8)] = inst_15286__$1);

return statearr_15361;
})();
if(cljs.core.truth_(inst_15287)){
var statearr_15362_15412 = state_15355__$1;
(statearr_15362_15412[(1)] = (5));

} else {
var statearr_15363_15413 = state_15355__$1;
(statearr_15363_15413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (15))){
var inst_15328 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15364_15414 = state_15355__$1;
(statearr_15364_15414[(2)] = inst_15328);

(statearr_15364_15414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (21))){
var inst_15348 = (state_15355[(2)]);
var state_15355__$1 = (function (){var statearr_15365 = state_15355;
(statearr_15365[(9)] = inst_15348);

return statearr_15365;
})();
var statearr_15366_15415 = state_15355__$1;
(statearr_15366_15415[(2)] = null);

(statearr_15366_15415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (13))){
var inst_15310 = (state_15355[(10)]);
var inst_15312 = cljs.core.chunked_seq_QMARK_.call(null,inst_15310);
var state_15355__$1 = state_15355;
if(inst_15312){
var statearr_15367_15416 = state_15355__$1;
(statearr_15367_15416[(1)] = (16));

} else {
var statearr_15368_15417 = state_15355__$1;
(statearr_15368_15417[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (22))){
var inst_15340 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
if(cljs.core.truth_(inst_15340)){
var statearr_15369_15418 = state_15355__$1;
(statearr_15369_15418[(1)] = (23));

} else {
var statearr_15370_15419 = state_15355__$1;
(statearr_15370_15419[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (6))){
var inst_15336 = (state_15355[(11)]);
var inst_15334 = (state_15355[(7)]);
var inst_15286 = (state_15355[(8)]);
var inst_15334__$1 = topic_fn.call(null,inst_15286);
var inst_15335 = cljs.core.deref.call(null,mults);
var inst_15336__$1 = cljs.core.get.call(null,inst_15335,inst_15334__$1);
var state_15355__$1 = (function (){var statearr_15371 = state_15355;
(statearr_15371[(11)] = inst_15336__$1);

(statearr_15371[(7)] = inst_15334__$1);

return statearr_15371;
})();
if(cljs.core.truth_(inst_15336__$1)){
var statearr_15372_15420 = state_15355__$1;
(statearr_15372_15420[(1)] = (19));

} else {
var statearr_15373_15421 = state_15355__$1;
(statearr_15373_15421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (25))){
var inst_15345 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15374_15422 = state_15355__$1;
(statearr_15374_15422[(2)] = inst_15345);

(statearr_15374_15422[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (17))){
var inst_15310 = (state_15355[(10)]);
var inst_15319 = cljs.core.first.call(null,inst_15310);
var inst_15320 = cljs.core.async.muxch_STAR_.call(null,inst_15319);
var inst_15321 = cljs.core.async.close_BANG_.call(null,inst_15320);
var inst_15322 = cljs.core.next.call(null,inst_15310);
var inst_15296 = inst_15322;
var inst_15297 = null;
var inst_15298 = (0);
var inst_15299 = (0);
var state_15355__$1 = (function (){var statearr_15375 = state_15355;
(statearr_15375[(12)] = inst_15299);

(statearr_15375[(13)] = inst_15321);

(statearr_15375[(14)] = inst_15297);

(statearr_15375[(15)] = inst_15298);

(statearr_15375[(16)] = inst_15296);

return statearr_15375;
})();
var statearr_15376_15423 = state_15355__$1;
(statearr_15376_15423[(2)] = null);

(statearr_15376_15423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (3))){
var inst_15353 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15355__$1,inst_15353);
} else {
if((state_val_15356 === (12))){
var inst_15330 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15377_15424 = state_15355__$1;
(statearr_15377_15424[(2)] = inst_15330);

(statearr_15377_15424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (2))){
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15355__$1,(4),ch);
} else {
if((state_val_15356 === (23))){
var state_15355__$1 = state_15355;
var statearr_15378_15425 = state_15355__$1;
(statearr_15378_15425[(2)] = null);

(statearr_15378_15425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (19))){
var inst_15336 = (state_15355[(11)]);
var inst_15286 = (state_15355[(8)]);
var inst_15338 = cljs.core.async.muxch_STAR_.call(null,inst_15336);
var state_15355__$1 = state_15355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15355__$1,(22),inst_15338,inst_15286);
} else {
if((state_val_15356 === (11))){
var inst_15310 = (state_15355[(10)]);
var inst_15296 = (state_15355[(16)]);
var inst_15310__$1 = cljs.core.seq.call(null,inst_15296);
var state_15355__$1 = (function (){var statearr_15379 = state_15355;
(statearr_15379[(10)] = inst_15310__$1);

return statearr_15379;
})();
if(inst_15310__$1){
var statearr_15380_15426 = state_15355__$1;
(statearr_15380_15426[(1)] = (13));

} else {
var statearr_15381_15427 = state_15355__$1;
(statearr_15381_15427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (9))){
var inst_15332 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15382_15428 = state_15355__$1;
(statearr_15382_15428[(2)] = inst_15332);

(statearr_15382_15428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (5))){
var inst_15293 = cljs.core.deref.call(null,mults);
var inst_15294 = cljs.core.vals.call(null,inst_15293);
var inst_15295 = cljs.core.seq.call(null,inst_15294);
var inst_15296 = inst_15295;
var inst_15297 = null;
var inst_15298 = (0);
var inst_15299 = (0);
var state_15355__$1 = (function (){var statearr_15383 = state_15355;
(statearr_15383[(12)] = inst_15299);

(statearr_15383[(14)] = inst_15297);

(statearr_15383[(15)] = inst_15298);

(statearr_15383[(16)] = inst_15296);

return statearr_15383;
})();
var statearr_15384_15429 = state_15355__$1;
(statearr_15384_15429[(2)] = null);

(statearr_15384_15429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (14))){
var state_15355__$1 = state_15355;
var statearr_15388_15430 = state_15355__$1;
(statearr_15388_15430[(2)] = null);

(statearr_15388_15430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (16))){
var inst_15310 = (state_15355[(10)]);
var inst_15314 = cljs.core.chunk_first.call(null,inst_15310);
var inst_15315 = cljs.core.chunk_rest.call(null,inst_15310);
var inst_15316 = cljs.core.count.call(null,inst_15314);
var inst_15296 = inst_15315;
var inst_15297 = inst_15314;
var inst_15298 = inst_15316;
var inst_15299 = (0);
var state_15355__$1 = (function (){var statearr_15389 = state_15355;
(statearr_15389[(12)] = inst_15299);

(statearr_15389[(14)] = inst_15297);

(statearr_15389[(15)] = inst_15298);

(statearr_15389[(16)] = inst_15296);

return statearr_15389;
})();
var statearr_15390_15431 = state_15355__$1;
(statearr_15390_15431[(2)] = null);

(statearr_15390_15431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (10))){
var inst_15299 = (state_15355[(12)]);
var inst_15297 = (state_15355[(14)]);
var inst_15298 = (state_15355[(15)]);
var inst_15296 = (state_15355[(16)]);
var inst_15304 = cljs.core._nth.call(null,inst_15297,inst_15299);
var inst_15305 = cljs.core.async.muxch_STAR_.call(null,inst_15304);
var inst_15306 = cljs.core.async.close_BANG_.call(null,inst_15305);
var inst_15307 = (inst_15299 + (1));
var tmp15385 = inst_15297;
var tmp15386 = inst_15298;
var tmp15387 = inst_15296;
var inst_15296__$1 = tmp15387;
var inst_15297__$1 = tmp15385;
var inst_15298__$1 = tmp15386;
var inst_15299__$1 = inst_15307;
var state_15355__$1 = (function (){var statearr_15391 = state_15355;
(statearr_15391[(12)] = inst_15299__$1);

(statearr_15391[(14)] = inst_15297__$1);

(statearr_15391[(15)] = inst_15298__$1);

(statearr_15391[(17)] = inst_15306);

(statearr_15391[(16)] = inst_15296__$1);

return statearr_15391;
})();
var statearr_15392_15432 = state_15355__$1;
(statearr_15392_15432[(2)] = null);

(statearr_15392_15432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (18))){
var inst_15325 = (state_15355[(2)]);
var state_15355__$1 = state_15355;
var statearr_15393_15433 = state_15355__$1;
(statearr_15393_15433[(2)] = inst_15325);

(statearr_15393_15433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15356 === (8))){
var inst_15299 = (state_15355[(12)]);
var inst_15298 = (state_15355[(15)]);
var inst_15301 = (inst_15299 < inst_15298);
var inst_15302 = inst_15301;
var state_15355__$1 = state_15355;
if(cljs.core.truth_(inst_15302)){
var statearr_15394_15434 = state_15355__$1;
(statearr_15394_15434[(1)] = (10));

} else {
var statearr_15395_15435 = state_15355__$1;
(statearr_15395_15435[(1)] = (11));

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
});})(c__13488__auto___15407,mults,ensure_mult,p))
;
return ((function (switch__13376__auto__,c__13488__auto___15407,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_15399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15399[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_15399[(1)] = (1));

return statearr_15399;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_15355){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15400){if((e15400 instanceof Object)){
var ex__13380__auto__ = e15400;
var statearr_15401_15436 = state_15355;
(statearr_15401_15436[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15437 = state_15355;
state_15355 = G__15437;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_15355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_15355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___15407,mults,ensure_mult,p))
})();
var state__13490__auto__ = (function (){var statearr_15402 = f__13489__auto__.call(null);
(statearr_15402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___15407);

return statearr_15402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___15407,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15438 = [];
var len__7484__auto___15441 = arguments.length;
var i__7485__auto___15442 = (0);
while(true){
if((i__7485__auto___15442 < len__7484__auto___15441)){
args15438.push((arguments[i__7485__auto___15442]));

var G__15443 = (i__7485__auto___15442 + (1));
i__7485__auto___15442 = G__15443;
continue;
} else {
}
break;
}

var G__15440 = args15438.length;
switch (G__15440) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15438.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15445 = [];
var len__7484__auto___15448 = arguments.length;
var i__7485__auto___15449 = (0);
while(true){
if((i__7485__auto___15449 < len__7484__auto___15448)){
args15445.push((arguments[i__7485__auto___15449]));

var G__15450 = (i__7485__auto___15449 + (1));
i__7485__auto___15449 = G__15450;
continue;
} else {
}
break;
}

var G__15447 = args15445.length;
switch (G__15447) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15445.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15452 = [];
var len__7484__auto___15523 = arguments.length;
var i__7485__auto___15524 = (0);
while(true){
if((i__7485__auto___15524 < len__7484__auto___15523)){
args15452.push((arguments[i__7485__auto___15524]));

var G__15525 = (i__7485__auto___15524 + (1));
i__7485__auto___15524 = G__15525;
continue;
} else {
}
break;
}

var G__15454 = args15452.length;
switch (G__15454) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15452.length)].join('')));

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
var c__13488__auto___15527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___15527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___15527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15493){
var state_val_15494 = (state_15493[(1)]);
if((state_val_15494 === (7))){
var state_15493__$1 = state_15493;
var statearr_15495_15528 = state_15493__$1;
(statearr_15495_15528[(2)] = null);

(statearr_15495_15528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (1))){
var state_15493__$1 = state_15493;
var statearr_15496_15529 = state_15493__$1;
(statearr_15496_15529[(2)] = null);

(statearr_15496_15529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (4))){
var inst_15457 = (state_15493[(7)]);
var inst_15459 = (inst_15457 < cnt);
var state_15493__$1 = state_15493;
if(cljs.core.truth_(inst_15459)){
var statearr_15497_15530 = state_15493__$1;
(statearr_15497_15530[(1)] = (6));

} else {
var statearr_15498_15531 = state_15493__$1;
(statearr_15498_15531[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (15))){
var inst_15489 = (state_15493[(2)]);
var state_15493__$1 = state_15493;
var statearr_15499_15532 = state_15493__$1;
(statearr_15499_15532[(2)] = inst_15489);

(statearr_15499_15532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (13))){
var inst_15482 = cljs.core.async.close_BANG_.call(null,out);
var state_15493__$1 = state_15493;
var statearr_15500_15533 = state_15493__$1;
(statearr_15500_15533[(2)] = inst_15482);

(statearr_15500_15533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (6))){
var state_15493__$1 = state_15493;
var statearr_15501_15534 = state_15493__$1;
(statearr_15501_15534[(2)] = null);

(statearr_15501_15534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (3))){
var inst_15491 = (state_15493[(2)]);
var state_15493__$1 = state_15493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15493__$1,inst_15491);
} else {
if((state_val_15494 === (12))){
var inst_15479 = (state_15493[(8)]);
var inst_15479__$1 = (state_15493[(2)]);
var inst_15480 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15479__$1);
var state_15493__$1 = (function (){var statearr_15502 = state_15493;
(statearr_15502[(8)] = inst_15479__$1);

return statearr_15502;
})();
if(cljs.core.truth_(inst_15480)){
var statearr_15503_15535 = state_15493__$1;
(statearr_15503_15535[(1)] = (13));

} else {
var statearr_15504_15536 = state_15493__$1;
(statearr_15504_15536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (2))){
var inst_15456 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15457 = (0);
var state_15493__$1 = (function (){var statearr_15505 = state_15493;
(statearr_15505[(7)] = inst_15457);

(statearr_15505[(9)] = inst_15456);

return statearr_15505;
})();
var statearr_15506_15537 = state_15493__$1;
(statearr_15506_15537[(2)] = null);

(statearr_15506_15537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (11))){
var inst_15457 = (state_15493[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15493,(10),Object,null,(9));
var inst_15466 = chs__$1.call(null,inst_15457);
var inst_15467 = done.call(null,inst_15457);
var inst_15468 = cljs.core.async.take_BANG_.call(null,inst_15466,inst_15467);
var state_15493__$1 = state_15493;
var statearr_15507_15538 = state_15493__$1;
(statearr_15507_15538[(2)] = inst_15468);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15493__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (9))){
var inst_15457 = (state_15493[(7)]);
var inst_15470 = (state_15493[(2)]);
var inst_15471 = (inst_15457 + (1));
var inst_15457__$1 = inst_15471;
var state_15493__$1 = (function (){var statearr_15508 = state_15493;
(statearr_15508[(10)] = inst_15470);

(statearr_15508[(7)] = inst_15457__$1);

return statearr_15508;
})();
var statearr_15509_15539 = state_15493__$1;
(statearr_15509_15539[(2)] = null);

(statearr_15509_15539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (5))){
var inst_15477 = (state_15493[(2)]);
var state_15493__$1 = (function (){var statearr_15510 = state_15493;
(statearr_15510[(11)] = inst_15477);

return statearr_15510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15493__$1,(12),dchan);
} else {
if((state_val_15494 === (14))){
var inst_15479 = (state_15493[(8)]);
var inst_15484 = cljs.core.apply.call(null,f,inst_15479);
var state_15493__$1 = state_15493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15493__$1,(16),out,inst_15484);
} else {
if((state_val_15494 === (16))){
var inst_15486 = (state_15493[(2)]);
var state_15493__$1 = (function (){var statearr_15511 = state_15493;
(statearr_15511[(12)] = inst_15486);

return statearr_15511;
})();
var statearr_15512_15540 = state_15493__$1;
(statearr_15512_15540[(2)] = null);

(statearr_15512_15540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (10))){
var inst_15461 = (state_15493[(2)]);
var inst_15462 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15493__$1 = (function (){var statearr_15513 = state_15493;
(statearr_15513[(13)] = inst_15461);

return statearr_15513;
})();
var statearr_15514_15541 = state_15493__$1;
(statearr_15514_15541[(2)] = inst_15462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15493__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (8))){
var inst_15475 = (state_15493[(2)]);
var state_15493__$1 = state_15493;
var statearr_15515_15542 = state_15493__$1;
(statearr_15515_15542[(2)] = inst_15475);

(statearr_15515_15542[(1)] = (5));


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
});})(c__13488__auto___15527,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13376__auto__,c__13488__auto___15527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_15519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15519[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_15519[(1)] = (1));

return statearr_15519;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_15493){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15520){if((e15520 instanceof Object)){
var ex__13380__auto__ = e15520;
var statearr_15521_15543 = state_15493;
(statearr_15521_15543[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15544 = state_15493;
state_15493 = G__15544;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_15493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_15493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___15527,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13490__auto__ = (function (){var statearr_15522 = f__13489__auto__.call(null);
(statearr_15522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___15527);

return statearr_15522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___15527,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15546 = [];
var len__7484__auto___15604 = arguments.length;
var i__7485__auto___15605 = (0);
while(true){
if((i__7485__auto___15605 < len__7484__auto___15604)){
args15546.push((arguments[i__7485__auto___15605]));

var G__15606 = (i__7485__auto___15605 + (1));
i__7485__auto___15605 = G__15606;
continue;
} else {
}
break;
}

var G__15548 = args15546.length;
switch (G__15548) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15546.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13488__auto___15608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___15608,out){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___15608,out){
return (function (state_15580){
var state_val_15581 = (state_15580[(1)]);
if((state_val_15581 === (7))){
var inst_15560 = (state_15580[(7)]);
var inst_15559 = (state_15580[(8)]);
var inst_15559__$1 = (state_15580[(2)]);
var inst_15560__$1 = cljs.core.nth.call(null,inst_15559__$1,(0),null);
var inst_15561 = cljs.core.nth.call(null,inst_15559__$1,(1),null);
var inst_15562 = (inst_15560__$1 == null);
var state_15580__$1 = (function (){var statearr_15582 = state_15580;
(statearr_15582[(7)] = inst_15560__$1);

(statearr_15582[(9)] = inst_15561);

(statearr_15582[(8)] = inst_15559__$1);

return statearr_15582;
})();
if(cljs.core.truth_(inst_15562)){
var statearr_15583_15609 = state_15580__$1;
(statearr_15583_15609[(1)] = (8));

} else {
var statearr_15584_15610 = state_15580__$1;
(statearr_15584_15610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (1))){
var inst_15549 = cljs.core.vec.call(null,chs);
var inst_15550 = inst_15549;
var state_15580__$1 = (function (){var statearr_15585 = state_15580;
(statearr_15585[(10)] = inst_15550);

return statearr_15585;
})();
var statearr_15586_15611 = state_15580__$1;
(statearr_15586_15611[(2)] = null);

(statearr_15586_15611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (4))){
var inst_15550 = (state_15580[(10)]);
var state_15580__$1 = state_15580;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15580__$1,(7),inst_15550);
} else {
if((state_val_15581 === (6))){
var inst_15576 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
var statearr_15587_15612 = state_15580__$1;
(statearr_15587_15612[(2)] = inst_15576);

(statearr_15587_15612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (3))){
var inst_15578 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15580__$1,inst_15578);
} else {
if((state_val_15581 === (2))){
var inst_15550 = (state_15580[(10)]);
var inst_15552 = cljs.core.count.call(null,inst_15550);
var inst_15553 = (inst_15552 > (0));
var state_15580__$1 = state_15580;
if(cljs.core.truth_(inst_15553)){
var statearr_15589_15613 = state_15580__$1;
(statearr_15589_15613[(1)] = (4));

} else {
var statearr_15590_15614 = state_15580__$1;
(statearr_15590_15614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (11))){
var inst_15550 = (state_15580[(10)]);
var inst_15569 = (state_15580[(2)]);
var tmp15588 = inst_15550;
var inst_15550__$1 = tmp15588;
var state_15580__$1 = (function (){var statearr_15591 = state_15580;
(statearr_15591[(11)] = inst_15569);

(statearr_15591[(10)] = inst_15550__$1);

return statearr_15591;
})();
var statearr_15592_15615 = state_15580__$1;
(statearr_15592_15615[(2)] = null);

(statearr_15592_15615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (9))){
var inst_15560 = (state_15580[(7)]);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15580__$1,(11),out,inst_15560);
} else {
if((state_val_15581 === (5))){
var inst_15574 = cljs.core.async.close_BANG_.call(null,out);
var state_15580__$1 = state_15580;
var statearr_15593_15616 = state_15580__$1;
(statearr_15593_15616[(2)] = inst_15574);

(statearr_15593_15616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (10))){
var inst_15572 = (state_15580[(2)]);
var state_15580__$1 = state_15580;
var statearr_15594_15617 = state_15580__$1;
(statearr_15594_15617[(2)] = inst_15572);

(statearr_15594_15617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15581 === (8))){
var inst_15560 = (state_15580[(7)]);
var inst_15561 = (state_15580[(9)]);
var inst_15550 = (state_15580[(10)]);
var inst_15559 = (state_15580[(8)]);
var inst_15564 = (function (){var cs = inst_15550;
var vec__15555 = inst_15559;
var v = inst_15560;
var c = inst_15561;
return ((function (cs,vec__15555,v,c,inst_15560,inst_15561,inst_15550,inst_15559,state_val_15581,c__13488__auto___15608,out){
return (function (p1__15545_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15545_SHARP_);
});
;})(cs,vec__15555,v,c,inst_15560,inst_15561,inst_15550,inst_15559,state_val_15581,c__13488__auto___15608,out))
})();
var inst_15565 = cljs.core.filterv.call(null,inst_15564,inst_15550);
var inst_15550__$1 = inst_15565;
var state_15580__$1 = (function (){var statearr_15595 = state_15580;
(statearr_15595[(10)] = inst_15550__$1);

return statearr_15595;
})();
var statearr_15596_15618 = state_15580__$1;
(statearr_15596_15618[(2)] = null);

(statearr_15596_15618[(1)] = (2));


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
});})(c__13488__auto___15608,out))
;
return ((function (switch__13376__auto__,c__13488__auto___15608,out){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_15600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15600[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_15600[(1)] = (1));

return statearr_15600;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_15580){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15601){if((e15601 instanceof Object)){
var ex__13380__auto__ = e15601;
var statearr_15602_15619 = state_15580;
(statearr_15602_15619[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15620 = state_15580;
state_15580 = G__15620;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_15580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_15580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___15608,out))
})();
var state__13490__auto__ = (function (){var statearr_15603 = f__13489__auto__.call(null);
(statearr_15603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___15608);

return statearr_15603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___15608,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15621 = [];
var len__7484__auto___15670 = arguments.length;
var i__7485__auto___15671 = (0);
while(true){
if((i__7485__auto___15671 < len__7484__auto___15670)){
args15621.push((arguments[i__7485__auto___15671]));

var G__15672 = (i__7485__auto___15671 + (1));
i__7485__auto___15671 = G__15672;
continue;
} else {
}
break;
}

var G__15623 = args15621.length;
switch (G__15623) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15621.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13488__auto___15674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___15674,out){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___15674,out){
return (function (state_15647){
var state_val_15648 = (state_15647[(1)]);
if((state_val_15648 === (7))){
var inst_15629 = (state_15647[(7)]);
var inst_15629__$1 = (state_15647[(2)]);
var inst_15630 = (inst_15629__$1 == null);
var inst_15631 = cljs.core.not.call(null,inst_15630);
var state_15647__$1 = (function (){var statearr_15649 = state_15647;
(statearr_15649[(7)] = inst_15629__$1);

return statearr_15649;
})();
if(inst_15631){
var statearr_15650_15675 = state_15647__$1;
(statearr_15650_15675[(1)] = (8));

} else {
var statearr_15651_15676 = state_15647__$1;
(statearr_15651_15676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (1))){
var inst_15624 = (0);
var state_15647__$1 = (function (){var statearr_15652 = state_15647;
(statearr_15652[(8)] = inst_15624);

return statearr_15652;
})();
var statearr_15653_15677 = state_15647__$1;
(statearr_15653_15677[(2)] = null);

(statearr_15653_15677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (4))){
var state_15647__$1 = state_15647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15647__$1,(7),ch);
} else {
if((state_val_15648 === (6))){
var inst_15642 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
var statearr_15654_15678 = state_15647__$1;
(statearr_15654_15678[(2)] = inst_15642);

(statearr_15654_15678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (3))){
var inst_15644 = (state_15647[(2)]);
var inst_15645 = cljs.core.async.close_BANG_.call(null,out);
var state_15647__$1 = (function (){var statearr_15655 = state_15647;
(statearr_15655[(9)] = inst_15644);

return statearr_15655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15647__$1,inst_15645);
} else {
if((state_val_15648 === (2))){
var inst_15624 = (state_15647[(8)]);
var inst_15626 = (inst_15624 < n);
var state_15647__$1 = state_15647;
if(cljs.core.truth_(inst_15626)){
var statearr_15656_15679 = state_15647__$1;
(statearr_15656_15679[(1)] = (4));

} else {
var statearr_15657_15680 = state_15647__$1;
(statearr_15657_15680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (11))){
var inst_15624 = (state_15647[(8)]);
var inst_15634 = (state_15647[(2)]);
var inst_15635 = (inst_15624 + (1));
var inst_15624__$1 = inst_15635;
var state_15647__$1 = (function (){var statearr_15658 = state_15647;
(statearr_15658[(8)] = inst_15624__$1);

(statearr_15658[(10)] = inst_15634);

return statearr_15658;
})();
var statearr_15659_15681 = state_15647__$1;
(statearr_15659_15681[(2)] = null);

(statearr_15659_15681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (9))){
var state_15647__$1 = state_15647;
var statearr_15660_15682 = state_15647__$1;
(statearr_15660_15682[(2)] = null);

(statearr_15660_15682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (5))){
var state_15647__$1 = state_15647;
var statearr_15661_15683 = state_15647__$1;
(statearr_15661_15683[(2)] = null);

(statearr_15661_15683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (10))){
var inst_15639 = (state_15647[(2)]);
var state_15647__$1 = state_15647;
var statearr_15662_15684 = state_15647__$1;
(statearr_15662_15684[(2)] = inst_15639);

(statearr_15662_15684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15648 === (8))){
var inst_15629 = (state_15647[(7)]);
var state_15647__$1 = state_15647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15647__$1,(11),out,inst_15629);
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
});})(c__13488__auto___15674,out))
;
return ((function (switch__13376__auto__,c__13488__auto___15674,out){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_15666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15666[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_15666[(1)] = (1));

return statearr_15666;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_15647){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15667){if((e15667 instanceof Object)){
var ex__13380__auto__ = e15667;
var statearr_15668_15685 = state_15647;
(statearr_15668_15685[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15686 = state_15647;
state_15647 = G__15686;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_15647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_15647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___15674,out))
})();
var state__13490__auto__ = (function (){var statearr_15669 = f__13489__auto__.call(null);
(statearr_15669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___15674);

return statearr_15669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___15674,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15694 = (function (map_LT_,f,ch,meta15695){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15695 = meta15695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15696,meta15695__$1){
var self__ = this;
var _15696__$1 = this;
return (new cljs.core.async.t_cljs$core$async15694(self__.map_LT_,self__.f,self__.ch,meta15695__$1));
});

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15696){
var self__ = this;
var _15696__$1 = this;
return self__.meta15695;
});

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15697 = (function (map_LT_,f,ch,meta15695,_,fn1,meta15698){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15695 = meta15695;
this._ = _;
this.fn1 = fn1;
this.meta15698 = meta15698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15699,meta15698__$1){
var self__ = this;
var _15699__$1 = this;
return (new cljs.core.async.t_cljs$core$async15697(self__.map_LT_,self__.f,self__.ch,self__.meta15695,self__._,self__.fn1,meta15698__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15699){
var self__ = this;
var _15699__$1 = this;
return self__.meta15698;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15687_SHARP_){
return f1.call(null,(((p1__15687_SHARP_ == null))?null:self__.f.call(null,p1__15687_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15697.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15695","meta15695",2139374799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15694","cljs.core.async/t_cljs$core$async15694",-562593464,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15698","meta15698",701112842,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15697";

cljs.core.async.t_cljs$core$async15697.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async15697");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15697 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15697(map_LT___$1,f__$1,ch__$1,meta15695__$1,___$2,fn1__$1,meta15698){
return (new cljs.core.async.t_cljs$core$async15697(map_LT___$1,f__$1,ch__$1,meta15695__$1,___$2,fn1__$1,meta15698));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15697(self__.map_LT_,self__.f,self__.ch,self__.meta15695,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15695","meta15695",2139374799,null)], null);
});

cljs.core.async.t_cljs$core$async15694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15694";

cljs.core.async.t_cljs$core$async15694.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async15694");
});

cljs.core.async.__GT_t_cljs$core$async15694 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15694(map_LT___$1,f__$1,ch__$1,meta15695){
return (new cljs.core.async.t_cljs$core$async15694(map_LT___$1,f__$1,ch__$1,meta15695));
});

}

return (new cljs.core.async.t_cljs$core$async15694(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15703 = (function (map_GT_,f,ch,meta15704){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15704 = meta15704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15705,meta15704__$1){
var self__ = this;
var _15705__$1 = this;
return (new cljs.core.async.t_cljs$core$async15703(self__.map_GT_,self__.f,self__.ch,meta15704__$1));
});

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15705){
var self__ = this;
var _15705__$1 = this;
return self__.meta15704;
});

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15703.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15704","meta15704",1394015477,null)], null);
});

cljs.core.async.t_cljs$core$async15703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15703";

cljs.core.async.t_cljs$core$async15703.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async15703");
});

cljs.core.async.__GT_t_cljs$core$async15703 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15703(map_GT___$1,f__$1,ch__$1,meta15704){
return (new cljs.core.async.t_cljs$core$async15703(map_GT___$1,f__$1,ch__$1,meta15704));
});

}

return (new cljs.core.async.t_cljs$core$async15703(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15709 = (function (filter_GT_,p,ch,meta15710){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15710 = meta15710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15711,meta15710__$1){
var self__ = this;
var _15711__$1 = this;
return (new cljs.core.async.t_cljs$core$async15709(self__.filter_GT_,self__.p,self__.ch,meta15710__$1));
});

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15711){
var self__ = this;
var _15711__$1 = this;
return self__.meta15710;
});

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15710","meta15710",593824651,null)], null);
});

cljs.core.async.t_cljs$core$async15709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15709";

cljs.core.async.t_cljs$core$async15709.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async15709");
});

cljs.core.async.__GT_t_cljs$core$async15709 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15709(filter_GT___$1,p__$1,ch__$1,meta15710){
return (new cljs.core.async.t_cljs$core$async15709(filter_GT___$1,p__$1,ch__$1,meta15710));
});

}

return (new cljs.core.async.t_cljs$core$async15709(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15712 = [];
var len__7484__auto___15756 = arguments.length;
var i__7485__auto___15757 = (0);
while(true){
if((i__7485__auto___15757 < len__7484__auto___15756)){
args15712.push((arguments[i__7485__auto___15757]));

var G__15758 = (i__7485__auto___15757 + (1));
i__7485__auto___15757 = G__15758;
continue;
} else {
}
break;
}

var G__15714 = args15712.length;
switch (G__15714) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15712.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13488__auto___15760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___15760,out){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___15760,out){
return (function (state_15735){
var state_val_15736 = (state_15735[(1)]);
if((state_val_15736 === (7))){
var inst_15731 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15737_15761 = state_15735__$1;
(statearr_15737_15761[(2)] = inst_15731);

(statearr_15737_15761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (1))){
var state_15735__$1 = state_15735;
var statearr_15738_15762 = state_15735__$1;
(statearr_15738_15762[(2)] = null);

(statearr_15738_15762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (4))){
var inst_15717 = (state_15735[(7)]);
var inst_15717__$1 = (state_15735[(2)]);
var inst_15718 = (inst_15717__$1 == null);
var state_15735__$1 = (function (){var statearr_15739 = state_15735;
(statearr_15739[(7)] = inst_15717__$1);

return statearr_15739;
})();
if(cljs.core.truth_(inst_15718)){
var statearr_15740_15763 = state_15735__$1;
(statearr_15740_15763[(1)] = (5));

} else {
var statearr_15741_15764 = state_15735__$1;
(statearr_15741_15764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (6))){
var inst_15717 = (state_15735[(7)]);
var inst_15722 = p.call(null,inst_15717);
var state_15735__$1 = state_15735;
if(cljs.core.truth_(inst_15722)){
var statearr_15742_15765 = state_15735__$1;
(statearr_15742_15765[(1)] = (8));

} else {
var statearr_15743_15766 = state_15735__$1;
(statearr_15743_15766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (3))){
var inst_15733 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15735__$1,inst_15733);
} else {
if((state_val_15736 === (2))){
var state_15735__$1 = state_15735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15735__$1,(4),ch);
} else {
if((state_val_15736 === (11))){
var inst_15725 = (state_15735[(2)]);
var state_15735__$1 = state_15735;
var statearr_15744_15767 = state_15735__$1;
(statearr_15744_15767[(2)] = inst_15725);

(statearr_15744_15767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (9))){
var state_15735__$1 = state_15735;
var statearr_15745_15768 = state_15735__$1;
(statearr_15745_15768[(2)] = null);

(statearr_15745_15768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (5))){
var inst_15720 = cljs.core.async.close_BANG_.call(null,out);
var state_15735__$1 = state_15735;
var statearr_15746_15769 = state_15735__$1;
(statearr_15746_15769[(2)] = inst_15720);

(statearr_15746_15769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (10))){
var inst_15728 = (state_15735[(2)]);
var state_15735__$1 = (function (){var statearr_15747 = state_15735;
(statearr_15747[(8)] = inst_15728);

return statearr_15747;
})();
var statearr_15748_15770 = state_15735__$1;
(statearr_15748_15770[(2)] = null);

(statearr_15748_15770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15736 === (8))){
var inst_15717 = (state_15735[(7)]);
var state_15735__$1 = state_15735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15735__$1,(11),out,inst_15717);
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
});})(c__13488__auto___15760,out))
;
return ((function (switch__13376__auto__,c__13488__auto___15760,out){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_15752 = [null,null,null,null,null,null,null,null,null];
(statearr_15752[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_15752[(1)] = (1));

return statearr_15752;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_15735){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15753){if((e15753 instanceof Object)){
var ex__13380__auto__ = e15753;
var statearr_15754_15771 = state_15735;
(statearr_15754_15771[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15772 = state_15735;
state_15735 = G__15772;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_15735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_15735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___15760,out))
})();
var state__13490__auto__ = (function (){var statearr_15755 = f__13489__auto__.call(null);
(statearr_15755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___15760);

return statearr_15755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___15760,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15773 = [];
var len__7484__auto___15776 = arguments.length;
var i__7485__auto___15777 = (0);
while(true){
if((i__7485__auto___15777 < len__7484__auto___15776)){
args15773.push((arguments[i__7485__auto___15777]));

var G__15778 = (i__7485__auto___15777 + (1));
i__7485__auto___15777 = G__15778;
continue;
} else {
}
break;
}

var G__15775 = args15773.length;
switch (G__15775) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15773.length)].join('')));

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
var c__13488__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto__){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto__){
return (function (state_15945){
var state_val_15946 = (state_15945[(1)]);
if((state_val_15946 === (7))){
var inst_15941 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15947_15988 = state_15945__$1;
(statearr_15947_15988[(2)] = inst_15941);

(statearr_15947_15988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (20))){
var inst_15911 = (state_15945[(7)]);
var inst_15922 = (state_15945[(2)]);
var inst_15923 = cljs.core.next.call(null,inst_15911);
var inst_15897 = inst_15923;
var inst_15898 = null;
var inst_15899 = (0);
var inst_15900 = (0);
var state_15945__$1 = (function (){var statearr_15948 = state_15945;
(statearr_15948[(8)] = inst_15922);

(statearr_15948[(9)] = inst_15899);

(statearr_15948[(10)] = inst_15897);

(statearr_15948[(11)] = inst_15900);

(statearr_15948[(12)] = inst_15898);

return statearr_15948;
})();
var statearr_15949_15989 = state_15945__$1;
(statearr_15949_15989[(2)] = null);

(statearr_15949_15989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (1))){
var state_15945__$1 = state_15945;
var statearr_15950_15990 = state_15945__$1;
(statearr_15950_15990[(2)] = null);

(statearr_15950_15990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (4))){
var inst_15886 = (state_15945[(13)]);
var inst_15886__$1 = (state_15945[(2)]);
var inst_15887 = (inst_15886__$1 == null);
var state_15945__$1 = (function (){var statearr_15951 = state_15945;
(statearr_15951[(13)] = inst_15886__$1);

return statearr_15951;
})();
if(cljs.core.truth_(inst_15887)){
var statearr_15952_15991 = state_15945__$1;
(statearr_15952_15991[(1)] = (5));

} else {
var statearr_15953_15992 = state_15945__$1;
(statearr_15953_15992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (15))){
var state_15945__$1 = state_15945;
var statearr_15957_15993 = state_15945__$1;
(statearr_15957_15993[(2)] = null);

(statearr_15957_15993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (21))){
var state_15945__$1 = state_15945;
var statearr_15958_15994 = state_15945__$1;
(statearr_15958_15994[(2)] = null);

(statearr_15958_15994[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (13))){
var inst_15899 = (state_15945[(9)]);
var inst_15897 = (state_15945[(10)]);
var inst_15900 = (state_15945[(11)]);
var inst_15898 = (state_15945[(12)]);
var inst_15907 = (state_15945[(2)]);
var inst_15908 = (inst_15900 + (1));
var tmp15954 = inst_15899;
var tmp15955 = inst_15897;
var tmp15956 = inst_15898;
var inst_15897__$1 = tmp15955;
var inst_15898__$1 = tmp15956;
var inst_15899__$1 = tmp15954;
var inst_15900__$1 = inst_15908;
var state_15945__$1 = (function (){var statearr_15959 = state_15945;
(statearr_15959[(14)] = inst_15907);

(statearr_15959[(9)] = inst_15899__$1);

(statearr_15959[(10)] = inst_15897__$1);

(statearr_15959[(11)] = inst_15900__$1);

(statearr_15959[(12)] = inst_15898__$1);

return statearr_15959;
})();
var statearr_15960_15995 = state_15945__$1;
(statearr_15960_15995[(2)] = null);

(statearr_15960_15995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (22))){
var state_15945__$1 = state_15945;
var statearr_15961_15996 = state_15945__$1;
(statearr_15961_15996[(2)] = null);

(statearr_15961_15996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (6))){
var inst_15886 = (state_15945[(13)]);
var inst_15895 = f.call(null,inst_15886);
var inst_15896 = cljs.core.seq.call(null,inst_15895);
var inst_15897 = inst_15896;
var inst_15898 = null;
var inst_15899 = (0);
var inst_15900 = (0);
var state_15945__$1 = (function (){var statearr_15962 = state_15945;
(statearr_15962[(9)] = inst_15899);

(statearr_15962[(10)] = inst_15897);

(statearr_15962[(11)] = inst_15900);

(statearr_15962[(12)] = inst_15898);

return statearr_15962;
})();
var statearr_15963_15997 = state_15945__$1;
(statearr_15963_15997[(2)] = null);

(statearr_15963_15997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (17))){
var inst_15911 = (state_15945[(7)]);
var inst_15915 = cljs.core.chunk_first.call(null,inst_15911);
var inst_15916 = cljs.core.chunk_rest.call(null,inst_15911);
var inst_15917 = cljs.core.count.call(null,inst_15915);
var inst_15897 = inst_15916;
var inst_15898 = inst_15915;
var inst_15899 = inst_15917;
var inst_15900 = (0);
var state_15945__$1 = (function (){var statearr_15964 = state_15945;
(statearr_15964[(9)] = inst_15899);

(statearr_15964[(10)] = inst_15897);

(statearr_15964[(11)] = inst_15900);

(statearr_15964[(12)] = inst_15898);

return statearr_15964;
})();
var statearr_15965_15998 = state_15945__$1;
(statearr_15965_15998[(2)] = null);

(statearr_15965_15998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (3))){
var inst_15943 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15945__$1,inst_15943);
} else {
if((state_val_15946 === (12))){
var inst_15931 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15966_15999 = state_15945__$1;
(statearr_15966_15999[(2)] = inst_15931);

(statearr_15966_15999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (2))){
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15945__$1,(4),in$);
} else {
if((state_val_15946 === (23))){
var inst_15939 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15967_16000 = state_15945__$1;
(statearr_15967_16000[(2)] = inst_15939);

(statearr_15967_16000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (19))){
var inst_15926 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15968_16001 = state_15945__$1;
(statearr_15968_16001[(2)] = inst_15926);

(statearr_15968_16001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (11))){
var inst_15911 = (state_15945[(7)]);
var inst_15897 = (state_15945[(10)]);
var inst_15911__$1 = cljs.core.seq.call(null,inst_15897);
var state_15945__$1 = (function (){var statearr_15969 = state_15945;
(statearr_15969[(7)] = inst_15911__$1);

return statearr_15969;
})();
if(inst_15911__$1){
var statearr_15970_16002 = state_15945__$1;
(statearr_15970_16002[(1)] = (14));

} else {
var statearr_15971_16003 = state_15945__$1;
(statearr_15971_16003[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (9))){
var inst_15933 = (state_15945[(2)]);
var inst_15934 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15945__$1 = (function (){var statearr_15972 = state_15945;
(statearr_15972[(15)] = inst_15933);

return statearr_15972;
})();
if(cljs.core.truth_(inst_15934)){
var statearr_15973_16004 = state_15945__$1;
(statearr_15973_16004[(1)] = (21));

} else {
var statearr_15974_16005 = state_15945__$1;
(statearr_15974_16005[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (5))){
var inst_15889 = cljs.core.async.close_BANG_.call(null,out);
var state_15945__$1 = state_15945;
var statearr_15975_16006 = state_15945__$1;
(statearr_15975_16006[(2)] = inst_15889);

(statearr_15975_16006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (14))){
var inst_15911 = (state_15945[(7)]);
var inst_15913 = cljs.core.chunked_seq_QMARK_.call(null,inst_15911);
var state_15945__$1 = state_15945;
if(inst_15913){
var statearr_15976_16007 = state_15945__$1;
(statearr_15976_16007[(1)] = (17));

} else {
var statearr_15977_16008 = state_15945__$1;
(statearr_15977_16008[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (16))){
var inst_15929 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15978_16009 = state_15945__$1;
(statearr_15978_16009[(2)] = inst_15929);

(statearr_15978_16009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (10))){
var inst_15900 = (state_15945[(11)]);
var inst_15898 = (state_15945[(12)]);
var inst_15905 = cljs.core._nth.call(null,inst_15898,inst_15900);
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15945__$1,(13),out,inst_15905);
} else {
if((state_val_15946 === (18))){
var inst_15911 = (state_15945[(7)]);
var inst_15920 = cljs.core.first.call(null,inst_15911);
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15945__$1,(20),out,inst_15920);
} else {
if((state_val_15946 === (8))){
var inst_15899 = (state_15945[(9)]);
var inst_15900 = (state_15945[(11)]);
var inst_15902 = (inst_15900 < inst_15899);
var inst_15903 = inst_15902;
var state_15945__$1 = state_15945;
if(cljs.core.truth_(inst_15903)){
var statearr_15979_16010 = state_15945__$1;
(statearr_15979_16010[(1)] = (10));

} else {
var statearr_15980_16011 = state_15945__$1;
(statearr_15980_16011[(1)] = (11));

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
});})(c__13488__auto__))
;
return ((function (switch__13376__auto__,c__13488__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13377__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13377__auto____0 = (function (){
var statearr_15984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15984[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13377__auto__);

(statearr_15984[(1)] = (1));

return statearr_15984;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13377__auto____1 = (function (state_15945){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_15945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e15985){if((e15985 instanceof Object)){
var ex__13380__auto__ = e15985;
var statearr_15986_16012 = state_15945;
(statearr_15986_16012[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16013 = state_15945;
state_15945 = G__16013;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13377__auto__ = function(state_15945){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13377__auto____1.call(this,state_15945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13377__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13377__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto__))
})();
var state__13490__auto__ = (function (){var statearr_15987 = f__13489__auto__.call(null);
(statearr_15987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto__);

return statearr_15987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto__))
);

return c__13488__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16014 = [];
var len__7484__auto___16017 = arguments.length;
var i__7485__auto___16018 = (0);
while(true){
if((i__7485__auto___16018 < len__7484__auto___16017)){
args16014.push((arguments[i__7485__auto___16018]));

var G__16019 = (i__7485__auto___16018 + (1));
i__7485__auto___16018 = G__16019;
continue;
} else {
}
break;
}

var G__16016 = args16014.length;
switch (G__16016) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16014.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16021 = [];
var len__7484__auto___16024 = arguments.length;
var i__7485__auto___16025 = (0);
while(true){
if((i__7485__auto___16025 < len__7484__auto___16024)){
args16021.push((arguments[i__7485__auto___16025]));

var G__16026 = (i__7485__auto___16025 + (1));
i__7485__auto___16025 = G__16026;
continue;
} else {
}
break;
}

var G__16023 = args16021.length;
switch (G__16023) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16021.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16028 = [];
var len__7484__auto___16079 = arguments.length;
var i__7485__auto___16080 = (0);
while(true){
if((i__7485__auto___16080 < len__7484__auto___16079)){
args16028.push((arguments[i__7485__auto___16080]));

var G__16081 = (i__7485__auto___16080 + (1));
i__7485__auto___16080 = G__16081;
continue;
} else {
}
break;
}

var G__16030 = args16028.length;
switch (G__16030) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16028.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13488__auto___16083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___16083,out){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___16083,out){
return (function (state_16054){
var state_val_16055 = (state_16054[(1)]);
if((state_val_16055 === (7))){
var inst_16049 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16056_16084 = state_16054__$1;
(statearr_16056_16084[(2)] = inst_16049);

(statearr_16056_16084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (1))){
var inst_16031 = null;
var state_16054__$1 = (function (){var statearr_16057 = state_16054;
(statearr_16057[(7)] = inst_16031);

return statearr_16057;
})();
var statearr_16058_16085 = state_16054__$1;
(statearr_16058_16085[(2)] = null);

(statearr_16058_16085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (4))){
var inst_16034 = (state_16054[(8)]);
var inst_16034__$1 = (state_16054[(2)]);
var inst_16035 = (inst_16034__$1 == null);
var inst_16036 = cljs.core.not.call(null,inst_16035);
var state_16054__$1 = (function (){var statearr_16059 = state_16054;
(statearr_16059[(8)] = inst_16034__$1);

return statearr_16059;
})();
if(inst_16036){
var statearr_16060_16086 = state_16054__$1;
(statearr_16060_16086[(1)] = (5));

} else {
var statearr_16061_16087 = state_16054__$1;
(statearr_16061_16087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (6))){
var state_16054__$1 = state_16054;
var statearr_16062_16088 = state_16054__$1;
(statearr_16062_16088[(2)] = null);

(statearr_16062_16088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (3))){
var inst_16051 = (state_16054[(2)]);
var inst_16052 = cljs.core.async.close_BANG_.call(null,out);
var state_16054__$1 = (function (){var statearr_16063 = state_16054;
(statearr_16063[(9)] = inst_16051);

return statearr_16063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16054__$1,inst_16052);
} else {
if((state_val_16055 === (2))){
var state_16054__$1 = state_16054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16054__$1,(4),ch);
} else {
if((state_val_16055 === (11))){
var inst_16034 = (state_16054[(8)]);
var inst_16043 = (state_16054[(2)]);
var inst_16031 = inst_16034;
var state_16054__$1 = (function (){var statearr_16064 = state_16054;
(statearr_16064[(10)] = inst_16043);

(statearr_16064[(7)] = inst_16031);

return statearr_16064;
})();
var statearr_16065_16089 = state_16054__$1;
(statearr_16065_16089[(2)] = null);

(statearr_16065_16089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (9))){
var inst_16034 = (state_16054[(8)]);
var state_16054__$1 = state_16054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16054__$1,(11),out,inst_16034);
} else {
if((state_val_16055 === (5))){
var inst_16034 = (state_16054[(8)]);
var inst_16031 = (state_16054[(7)]);
var inst_16038 = cljs.core._EQ_.call(null,inst_16034,inst_16031);
var state_16054__$1 = state_16054;
if(inst_16038){
var statearr_16067_16090 = state_16054__$1;
(statearr_16067_16090[(1)] = (8));

} else {
var statearr_16068_16091 = state_16054__$1;
(statearr_16068_16091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (10))){
var inst_16046 = (state_16054[(2)]);
var state_16054__$1 = state_16054;
var statearr_16069_16092 = state_16054__$1;
(statearr_16069_16092[(2)] = inst_16046);

(statearr_16069_16092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16055 === (8))){
var inst_16031 = (state_16054[(7)]);
var tmp16066 = inst_16031;
var inst_16031__$1 = tmp16066;
var state_16054__$1 = (function (){var statearr_16070 = state_16054;
(statearr_16070[(7)] = inst_16031__$1);

return statearr_16070;
})();
var statearr_16071_16093 = state_16054__$1;
(statearr_16071_16093[(2)] = null);

(statearr_16071_16093[(1)] = (2));


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
});})(c__13488__auto___16083,out))
;
return ((function (switch__13376__auto__,c__13488__auto___16083,out){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_16075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16075[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_16075[(1)] = (1));

return statearr_16075;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_16054){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_16054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e16076){if((e16076 instanceof Object)){
var ex__13380__auto__ = e16076;
var statearr_16077_16094 = state_16054;
(statearr_16077_16094[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16095 = state_16054;
state_16054 = G__16095;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_16054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_16054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___16083,out))
})();
var state__13490__auto__ = (function (){var statearr_16078 = f__13489__auto__.call(null);
(statearr_16078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___16083);

return statearr_16078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___16083,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16096 = [];
var len__7484__auto___16166 = arguments.length;
var i__7485__auto___16167 = (0);
while(true){
if((i__7485__auto___16167 < len__7484__auto___16166)){
args16096.push((arguments[i__7485__auto___16167]));

var G__16168 = (i__7485__auto___16167 + (1));
i__7485__auto___16167 = G__16168;
continue;
} else {
}
break;
}

var G__16098 = args16096.length;
switch (G__16098) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16096.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13488__auto___16170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___16170,out){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___16170,out){
return (function (state_16136){
var state_val_16137 = (state_16136[(1)]);
if((state_val_16137 === (7))){
var inst_16132 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16138_16171 = state_16136__$1;
(statearr_16138_16171[(2)] = inst_16132);

(statearr_16138_16171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (1))){
var inst_16099 = (new Array(n));
var inst_16100 = inst_16099;
var inst_16101 = (0);
var state_16136__$1 = (function (){var statearr_16139 = state_16136;
(statearr_16139[(7)] = inst_16101);

(statearr_16139[(8)] = inst_16100);

return statearr_16139;
})();
var statearr_16140_16172 = state_16136__$1;
(statearr_16140_16172[(2)] = null);

(statearr_16140_16172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (4))){
var inst_16104 = (state_16136[(9)]);
var inst_16104__$1 = (state_16136[(2)]);
var inst_16105 = (inst_16104__$1 == null);
var inst_16106 = cljs.core.not.call(null,inst_16105);
var state_16136__$1 = (function (){var statearr_16141 = state_16136;
(statearr_16141[(9)] = inst_16104__$1);

return statearr_16141;
})();
if(inst_16106){
var statearr_16142_16173 = state_16136__$1;
(statearr_16142_16173[(1)] = (5));

} else {
var statearr_16143_16174 = state_16136__$1;
(statearr_16143_16174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (15))){
var inst_16126 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16144_16175 = state_16136__$1;
(statearr_16144_16175[(2)] = inst_16126);

(statearr_16144_16175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (13))){
var state_16136__$1 = state_16136;
var statearr_16145_16176 = state_16136__$1;
(statearr_16145_16176[(2)] = null);

(statearr_16145_16176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (6))){
var inst_16101 = (state_16136[(7)]);
var inst_16122 = (inst_16101 > (0));
var state_16136__$1 = state_16136;
if(cljs.core.truth_(inst_16122)){
var statearr_16146_16177 = state_16136__$1;
(statearr_16146_16177[(1)] = (12));

} else {
var statearr_16147_16178 = state_16136__$1;
(statearr_16147_16178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (3))){
var inst_16134 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16136__$1,inst_16134);
} else {
if((state_val_16137 === (12))){
var inst_16100 = (state_16136[(8)]);
var inst_16124 = cljs.core.vec.call(null,inst_16100);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16136__$1,(15),out,inst_16124);
} else {
if((state_val_16137 === (2))){
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16136__$1,(4),ch);
} else {
if((state_val_16137 === (11))){
var inst_16116 = (state_16136[(2)]);
var inst_16117 = (new Array(n));
var inst_16100 = inst_16117;
var inst_16101 = (0);
var state_16136__$1 = (function (){var statearr_16148 = state_16136;
(statearr_16148[(7)] = inst_16101);

(statearr_16148[(10)] = inst_16116);

(statearr_16148[(8)] = inst_16100);

return statearr_16148;
})();
var statearr_16149_16179 = state_16136__$1;
(statearr_16149_16179[(2)] = null);

(statearr_16149_16179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (9))){
var inst_16100 = (state_16136[(8)]);
var inst_16114 = cljs.core.vec.call(null,inst_16100);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16136__$1,(11),out,inst_16114);
} else {
if((state_val_16137 === (5))){
var inst_16104 = (state_16136[(9)]);
var inst_16101 = (state_16136[(7)]);
var inst_16100 = (state_16136[(8)]);
var inst_16109 = (state_16136[(11)]);
var inst_16108 = (inst_16100[inst_16101] = inst_16104);
var inst_16109__$1 = (inst_16101 + (1));
var inst_16110 = (inst_16109__$1 < n);
var state_16136__$1 = (function (){var statearr_16150 = state_16136;
(statearr_16150[(11)] = inst_16109__$1);

(statearr_16150[(12)] = inst_16108);

return statearr_16150;
})();
if(cljs.core.truth_(inst_16110)){
var statearr_16151_16180 = state_16136__$1;
(statearr_16151_16180[(1)] = (8));

} else {
var statearr_16152_16181 = state_16136__$1;
(statearr_16152_16181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (14))){
var inst_16129 = (state_16136[(2)]);
var inst_16130 = cljs.core.async.close_BANG_.call(null,out);
var state_16136__$1 = (function (){var statearr_16154 = state_16136;
(statearr_16154[(13)] = inst_16129);

return statearr_16154;
})();
var statearr_16155_16182 = state_16136__$1;
(statearr_16155_16182[(2)] = inst_16130);

(statearr_16155_16182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (10))){
var inst_16120 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16156_16183 = state_16136__$1;
(statearr_16156_16183[(2)] = inst_16120);

(statearr_16156_16183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (8))){
var inst_16100 = (state_16136[(8)]);
var inst_16109 = (state_16136[(11)]);
var tmp16153 = inst_16100;
var inst_16100__$1 = tmp16153;
var inst_16101 = inst_16109;
var state_16136__$1 = (function (){var statearr_16157 = state_16136;
(statearr_16157[(7)] = inst_16101);

(statearr_16157[(8)] = inst_16100__$1);

return statearr_16157;
})();
var statearr_16158_16184 = state_16136__$1;
(statearr_16158_16184[(2)] = null);

(statearr_16158_16184[(1)] = (2));


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
});})(c__13488__auto___16170,out))
;
return ((function (switch__13376__auto__,c__13488__auto___16170,out){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_16162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16162[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_16162[(1)] = (1));

return statearr_16162;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_16136){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_16136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e16163){if((e16163 instanceof Object)){
var ex__13380__auto__ = e16163;
var statearr_16164_16185 = state_16136;
(statearr_16164_16185[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16186 = state_16136;
state_16136 = G__16186;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_16136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_16136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___16170,out))
})();
var state__13490__auto__ = (function (){var statearr_16165 = f__13489__auto__.call(null);
(statearr_16165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___16170);

return statearr_16165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___16170,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16187 = [];
var len__7484__auto___16261 = arguments.length;
var i__7485__auto___16262 = (0);
while(true){
if((i__7485__auto___16262 < len__7484__auto___16261)){
args16187.push((arguments[i__7485__auto___16262]));

var G__16263 = (i__7485__auto___16262 + (1));
i__7485__auto___16262 = G__16263;
continue;
} else {
}
break;
}

var G__16189 = args16187.length;
switch (G__16189) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16187.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13488__auto___16265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___16265,out){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___16265,out){
return (function (state_16231){
var state_val_16232 = (state_16231[(1)]);
if((state_val_16232 === (7))){
var inst_16227 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
var statearr_16233_16266 = state_16231__$1;
(statearr_16233_16266[(2)] = inst_16227);

(statearr_16233_16266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (1))){
var inst_16190 = [];
var inst_16191 = inst_16190;
var inst_16192 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16231__$1 = (function (){var statearr_16234 = state_16231;
(statearr_16234[(7)] = inst_16192);

(statearr_16234[(8)] = inst_16191);

return statearr_16234;
})();
var statearr_16235_16267 = state_16231__$1;
(statearr_16235_16267[(2)] = null);

(statearr_16235_16267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (4))){
var inst_16195 = (state_16231[(9)]);
var inst_16195__$1 = (state_16231[(2)]);
var inst_16196 = (inst_16195__$1 == null);
var inst_16197 = cljs.core.not.call(null,inst_16196);
var state_16231__$1 = (function (){var statearr_16236 = state_16231;
(statearr_16236[(9)] = inst_16195__$1);

return statearr_16236;
})();
if(inst_16197){
var statearr_16237_16268 = state_16231__$1;
(statearr_16237_16268[(1)] = (5));

} else {
var statearr_16238_16269 = state_16231__$1;
(statearr_16238_16269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (15))){
var inst_16221 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
var statearr_16239_16270 = state_16231__$1;
(statearr_16239_16270[(2)] = inst_16221);

(statearr_16239_16270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (13))){
var state_16231__$1 = state_16231;
var statearr_16240_16271 = state_16231__$1;
(statearr_16240_16271[(2)] = null);

(statearr_16240_16271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (6))){
var inst_16191 = (state_16231[(8)]);
var inst_16216 = inst_16191.length;
var inst_16217 = (inst_16216 > (0));
var state_16231__$1 = state_16231;
if(cljs.core.truth_(inst_16217)){
var statearr_16241_16272 = state_16231__$1;
(statearr_16241_16272[(1)] = (12));

} else {
var statearr_16242_16273 = state_16231__$1;
(statearr_16242_16273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (3))){
var inst_16229 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16231__$1,inst_16229);
} else {
if((state_val_16232 === (12))){
var inst_16191 = (state_16231[(8)]);
var inst_16219 = cljs.core.vec.call(null,inst_16191);
var state_16231__$1 = state_16231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16231__$1,(15),out,inst_16219);
} else {
if((state_val_16232 === (2))){
var state_16231__$1 = state_16231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16231__$1,(4),ch);
} else {
if((state_val_16232 === (11))){
var inst_16195 = (state_16231[(9)]);
var inst_16199 = (state_16231[(10)]);
var inst_16209 = (state_16231[(2)]);
var inst_16210 = [];
var inst_16211 = inst_16210.push(inst_16195);
var inst_16191 = inst_16210;
var inst_16192 = inst_16199;
var state_16231__$1 = (function (){var statearr_16243 = state_16231;
(statearr_16243[(11)] = inst_16211);

(statearr_16243[(7)] = inst_16192);

(statearr_16243[(12)] = inst_16209);

(statearr_16243[(8)] = inst_16191);

return statearr_16243;
})();
var statearr_16244_16274 = state_16231__$1;
(statearr_16244_16274[(2)] = null);

(statearr_16244_16274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (9))){
var inst_16191 = (state_16231[(8)]);
var inst_16207 = cljs.core.vec.call(null,inst_16191);
var state_16231__$1 = state_16231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16231__$1,(11),out,inst_16207);
} else {
if((state_val_16232 === (5))){
var inst_16192 = (state_16231[(7)]);
var inst_16195 = (state_16231[(9)]);
var inst_16199 = (state_16231[(10)]);
var inst_16199__$1 = f.call(null,inst_16195);
var inst_16200 = cljs.core._EQ_.call(null,inst_16199__$1,inst_16192);
var inst_16201 = cljs.core.keyword_identical_QMARK_.call(null,inst_16192,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16202 = (inst_16200) || (inst_16201);
var state_16231__$1 = (function (){var statearr_16245 = state_16231;
(statearr_16245[(10)] = inst_16199__$1);

return statearr_16245;
})();
if(cljs.core.truth_(inst_16202)){
var statearr_16246_16275 = state_16231__$1;
(statearr_16246_16275[(1)] = (8));

} else {
var statearr_16247_16276 = state_16231__$1;
(statearr_16247_16276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (14))){
var inst_16224 = (state_16231[(2)]);
var inst_16225 = cljs.core.async.close_BANG_.call(null,out);
var state_16231__$1 = (function (){var statearr_16249 = state_16231;
(statearr_16249[(13)] = inst_16224);

return statearr_16249;
})();
var statearr_16250_16277 = state_16231__$1;
(statearr_16250_16277[(2)] = inst_16225);

(statearr_16250_16277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (10))){
var inst_16214 = (state_16231[(2)]);
var state_16231__$1 = state_16231;
var statearr_16251_16278 = state_16231__$1;
(statearr_16251_16278[(2)] = inst_16214);

(statearr_16251_16278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16232 === (8))){
var inst_16195 = (state_16231[(9)]);
var inst_16199 = (state_16231[(10)]);
var inst_16191 = (state_16231[(8)]);
var inst_16204 = inst_16191.push(inst_16195);
var tmp16248 = inst_16191;
var inst_16191__$1 = tmp16248;
var inst_16192 = inst_16199;
var state_16231__$1 = (function (){var statearr_16252 = state_16231;
(statearr_16252[(7)] = inst_16192);

(statearr_16252[(14)] = inst_16204);

(statearr_16252[(8)] = inst_16191__$1);

return statearr_16252;
})();
var statearr_16253_16279 = state_16231__$1;
(statearr_16253_16279[(2)] = null);

(statearr_16253_16279[(1)] = (2));


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
});})(c__13488__auto___16265,out))
;
return ((function (switch__13376__auto__,c__13488__auto___16265,out){
return (function() {
var cljs$core$async$state_machine__13377__auto__ = null;
var cljs$core$async$state_machine__13377__auto____0 = (function (){
var statearr_16257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16257[(0)] = cljs$core$async$state_machine__13377__auto__);

(statearr_16257[(1)] = (1));

return statearr_16257;
});
var cljs$core$async$state_machine__13377__auto____1 = (function (state_16231){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_16231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e16258){if((e16258 instanceof Object)){
var ex__13380__auto__ = e16258;
var statearr_16259_16280 = state_16231;
(statearr_16259_16280[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16281 = state_16231;
state_16231 = G__16281;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs$core$async$state_machine__13377__auto__ = function(state_16231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13377__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13377__auto____1.call(this,state_16231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13377__auto____0;
cljs$core$async$state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13377__auto____1;
return cljs$core$async$state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___16265,out))
})();
var state__13490__auto__ = (function (){var statearr_16260 = f__13489__auto__.call(null);
(statearr_16260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___16265);

return statearr_16260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___16265,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

