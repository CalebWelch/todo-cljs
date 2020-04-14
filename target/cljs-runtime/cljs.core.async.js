goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35270 = arguments.length;
switch (G__35270) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35272 = (function (f,blockable,meta35273){
this.f = f;
this.blockable = blockable;
this.meta35273 = meta35273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35274,meta35273__$1){
var self__ = this;
var _35274__$1 = this;
return (new cljs.core.async.t_cljs$core$async35272(self__.f,self__.blockable,meta35273__$1));
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35274){
var self__ = this;
var _35274__$1 = this;
return self__.meta35273;
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async35272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async35272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35273","meta35273",392385133,null)], null);
}));

(cljs.core.async.t_cljs$core$async35272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35272");

(cljs.core.async.t_cljs$core$async35272.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35272.
 */
cljs.core.async.__GT_t_cljs$core$async35272 = (function cljs$core$async$__GT_t_cljs$core$async35272(f__$1,blockable__$1,meta35273){
return (new cljs.core.async.t_cljs$core$async35272(f__$1,blockable__$1,meta35273));
});

}

return (new cljs.core.async.t_cljs$core$async35272(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__35293 = arguments.length;
switch (G__35293) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35316 = arguments.length;
switch (G__35316) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__35355 = arguments.length;
switch (G__35355) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_38313 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38313) : fn1.call(null,val_38313));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38313) : fn1.call(null,val_38313));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35371 = arguments.length;
switch (G__35371) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___38336 = n;
var x_38339 = (0);
while(true){
if((x_38339 < n__4666__auto___38336)){
(a[x_38339] = x_38339);

var G__38341 = (x_38339 + (1));
x_38339 = G__38341;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35393 = (function (flag,meta35394){
this.flag = flag;
this.meta35394 = meta35394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35395,meta35394__$1){
var self__ = this;
var _35395__$1 = this;
return (new cljs.core.async.t_cljs$core$async35393(self__.flag,meta35394__$1));
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35395){
var self__ = this;
var _35395__$1 = this;
return self__.meta35394;
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async35393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35394","meta35394",-767645904,null)], null);
}));

(cljs.core.async.t_cljs$core$async35393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35393");

(cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35393.
 */
cljs.core.async.__GT_t_cljs$core$async35393 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35393(flag__$1,meta35394){
return (new cljs.core.async.t_cljs$core$async35393(flag__$1,meta35394));
});

}

return (new cljs.core.async.t_cljs$core$async35393(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35416 = (function (flag,cb,meta35417){
this.flag = flag;
this.cb = cb;
this.meta35417 = meta35417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35418,meta35417__$1){
var self__ = this;
var _35418__$1 = this;
return (new cljs.core.async.t_cljs$core$async35416(self__.flag,self__.cb,meta35417__$1));
}));

(cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35418){
var self__ = this;
var _35418__$1 = this;
return self__.meta35417;
}));

(cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async35416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35417","meta35417",1393076005,null)], null);
}));

(cljs.core.async.t_cljs$core$async35416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35416");

(cljs.core.async.t_cljs$core$async35416.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35416.
 */
cljs.core.async.__GT_t_cljs$core$async35416 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35416(flag__$1,cb__$1,meta35417){
return (new cljs.core.async.t_cljs$core$async35416(flag__$1,cb__$1,meta35417));
});

}

return (new cljs.core.async.t_cljs$core$async35416(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35448_SHARP_){
var G__35456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35448_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35456) : fret.call(null,G__35456));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35449_SHARP_){
var G__35457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35449_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__35457) : fret.call(null,G__35457));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38377 = (i + (1));
i = G__38377;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___38382 = arguments.length;
var i__4790__auto___38383 = (0);
while(true){
if((i__4790__auto___38383 < len__4789__auto___38382)){
args__4795__auto__.push((arguments[i__4790__auto___38383]));

var G__38384 = (i__4790__auto___38383 + (1));
i__4790__auto___38383 = G__38384;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35483){
var map__35487 = p__35483;
var map__35487__$1 = (((((!((map__35487 == null))))?(((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35487):map__35487);
var opts = map__35487__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35474){
var G__35475 = cljs.core.first(seq35474);
var seq35474__$1 = cljs.core.next(seq35474);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35475,seq35474__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__35493 = arguments.length;
switch (G__35493) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35185__auto___38396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_35539){
var state_val_35541 = (state_35539[(1)]);
if((state_val_35541 === (7))){
var inst_35535 = (state_35539[(2)]);
var state_35539__$1 = state_35539;
var statearr_35544_38399 = state_35539__$1;
(statearr_35544_38399[(2)] = inst_35535);

(statearr_35544_38399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (1))){
var state_35539__$1 = state_35539;
var statearr_35545_38401 = state_35539__$1;
(statearr_35545_38401[(2)] = null);

(statearr_35545_38401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (4))){
var inst_35513 = (state_35539[(7)]);
var inst_35513__$1 = (state_35539[(2)]);
var inst_35514 = (inst_35513__$1 == null);
var state_35539__$1 = (function (){var statearr_35547 = state_35539;
(statearr_35547[(7)] = inst_35513__$1);

return statearr_35547;
})();
if(cljs.core.truth_(inst_35514)){
var statearr_35548_38403 = state_35539__$1;
(statearr_35548_38403[(1)] = (5));

} else {
var statearr_35549_38405 = state_35539__$1;
(statearr_35549_38405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (13))){
var state_35539__$1 = state_35539;
var statearr_35550_38408 = state_35539__$1;
(statearr_35550_38408[(2)] = null);

(statearr_35550_38408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (6))){
var inst_35513 = (state_35539[(7)]);
var state_35539__$1 = state_35539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35539__$1,(11),to,inst_35513);
} else {
if((state_val_35541 === (3))){
var inst_35537 = (state_35539[(2)]);
var state_35539__$1 = state_35539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35539__$1,inst_35537);
} else {
if((state_val_35541 === (12))){
var state_35539__$1 = state_35539;
var statearr_35554_38413 = state_35539__$1;
(statearr_35554_38413[(2)] = null);

(statearr_35554_38413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (2))){
var state_35539__$1 = state_35539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35539__$1,(4),from);
} else {
if((state_val_35541 === (11))){
var inst_35526 = (state_35539[(2)]);
var state_35539__$1 = state_35539;
if(cljs.core.truth_(inst_35526)){
var statearr_35555_38416 = state_35539__$1;
(statearr_35555_38416[(1)] = (12));

} else {
var statearr_35556_38417 = state_35539__$1;
(statearr_35556_38417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (9))){
var state_35539__$1 = state_35539;
var statearr_35561_38418 = state_35539__$1;
(statearr_35561_38418[(2)] = null);

(statearr_35561_38418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (5))){
var state_35539__$1 = state_35539;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35562_38422 = state_35539__$1;
(statearr_35562_38422[(1)] = (8));

} else {
var statearr_35563_38424 = state_35539__$1;
(statearr_35563_38424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (14))){
var inst_35533 = (state_35539[(2)]);
var state_35539__$1 = state_35539;
var statearr_35564_38426 = state_35539__$1;
(statearr_35564_38426[(2)] = inst_35533);

(statearr_35564_38426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (10))){
var inst_35521 = (state_35539[(2)]);
var state_35539__$1 = state_35539;
var statearr_35565_38428 = state_35539__$1;
(statearr_35565_38428[(2)] = inst_35521);

(statearr_35565_38428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35541 === (8))){
var inst_35518 = cljs.core.async.close_BANG_(to);
var state_35539__$1 = state_35539;
var statearr_35566_38431 = state_35539__$1;
(statearr_35566_38431[(2)] = inst_35518);

(statearr_35566_38431[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_35567 = [null,null,null,null,null,null,null,null];
(statearr_35567[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_35567[(1)] = (1));

return statearr_35567;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_35539){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35539);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e35568){var ex__34934__auto__ = e35568;
var statearr_35572_38432 = state_35539;
(statearr_35572_38432[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35539[(4)]))){
var statearr_35576_38434 = state_35539;
(statearr_35576_38434[(1)] = cljs.core.first((state_35539[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38438 = state_35539;
state_35539 = G__38438;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_35539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_35539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_35599 = f__35186__auto__();
(statearr_35599[(6)] = c__35185__auto___38396);

return statearr_35599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__35636){
var vec__35637 = p__35636;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35637,(1),null);
var job = vec__35637;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__35185__auto___38444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_35651){
var state_val_35652 = (state_35651[(1)]);
if((state_val_35652 === (1))){
var state_35651__$1 = state_35651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35651__$1,(2),res,v);
} else {
if((state_val_35652 === (2))){
var inst_35648 = (state_35651[(2)]);
var inst_35649 = cljs.core.async.close_BANG_(res);
var state_35651__$1 = (function (){var statearr_35667 = state_35651;
(statearr_35667[(7)] = inst_35648);

return statearr_35667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35651__$1,inst_35649);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0 = (function (){
var statearr_35672 = [null,null,null,null,null,null,null,null];
(statearr_35672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__);

(statearr_35672[(1)] = (1));

return statearr_35672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1 = (function (state_35651){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35651);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e35673){var ex__34934__auto__ = e35673;
var statearr_35674_38450 = state_35651;
(statearr_35674_38450[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35651[(4)]))){
var statearr_35675_38451 = state_35651;
(statearr_35675_38451[(1)] = cljs.core.first((state_35651[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38456 = state_35651;
state_35651 = G__38456;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = function(state_35651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1.call(this,state_35651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_35677 = f__35186__auto__();
(statearr_35677[(6)] = c__35185__auto___38444);

return statearr_35677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35678){
var vec__35679 = p__35678;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35679,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35679,(1),null);
var job = vec__35679;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___38461 = n;
var __38462 = (0);
while(true){
if((__38462 < n__4666__auto___38461)){
var G__35686_38463 = type;
var G__35686_38464__$1 = (((G__35686_38463 instanceof cljs.core.Keyword))?G__35686_38463.fqn:null);
switch (G__35686_38464__$1) {
case "compute":
var c__35185__auto___38466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38462,c__35185__auto___38466,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async){
return (function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = ((function (__38462,c__35185__auto___38466,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async){
return (function (state_35699){
var state_val_35700 = (state_35699[(1)]);
if((state_val_35700 === (1))){
var state_35699__$1 = state_35699;
var statearr_35702_38474 = state_35699__$1;
(statearr_35702_38474[(2)] = null);

(statearr_35702_38474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (2))){
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35699__$1,(4),jobs);
} else {
if((state_val_35700 === (3))){
var inst_35697 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35699__$1,inst_35697);
} else {
if((state_val_35700 === (4))){
var inst_35689 = (state_35699[(2)]);
var inst_35690 = process(inst_35689);
var state_35699__$1 = state_35699;
if(cljs.core.truth_(inst_35690)){
var statearr_35703_38475 = state_35699__$1;
(statearr_35703_38475[(1)] = (5));

} else {
var statearr_35704_38476 = state_35699__$1;
(statearr_35704_38476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (5))){
var state_35699__$1 = state_35699;
var statearr_35705_38477 = state_35699__$1;
(statearr_35705_38477[(2)] = null);

(statearr_35705_38477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (6))){
var state_35699__$1 = state_35699;
var statearr_35707_38478 = state_35699__$1;
(statearr_35707_38478[(2)] = null);

(statearr_35707_38478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35700 === (7))){
var inst_35695 = (state_35699[(2)]);
var state_35699__$1 = state_35699;
var statearr_35708_38479 = state_35699__$1;
(statearr_35708_38479[(2)] = inst_35695);

(statearr_35708_38479[(1)] = (3));


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
});})(__38462,c__35185__auto___38466,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async))
;
return ((function (__38462,switch__34930__auto__,c__35185__auto___38466,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0 = (function (){
var statearr_35710 = [null,null,null,null,null,null,null];
(statearr_35710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__);

(statearr_35710[(1)] = (1));

return statearr_35710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1 = (function (state_35699){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35699);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e35711){var ex__34934__auto__ = e35711;
var statearr_35712_38505 = state_35699;
(statearr_35712_38505[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35699[(4)]))){
var statearr_35713_38506 = state_35699;
(statearr_35713_38506[(1)] = cljs.core.first((state_35699[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38509 = state_35699;
state_35699 = G__38509;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = function(state_35699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1.call(this,state_35699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__;
})()
;})(__38462,switch__34930__auto__,c__35185__auto___38466,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async))
})();
var state__35187__auto__ = (function (){var statearr_35714 = f__35186__auto__();
(statearr_35714[(6)] = c__35185__auto___38466);

return statearr_35714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
});})(__38462,c__35185__auto___38466,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async))
);


break;
case "async":
var c__35185__auto___38517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38462,c__35185__auto___38517,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async){
return (function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = ((function (__38462,c__35185__auto___38517,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async){
return (function (state_35727){
var state_val_35728 = (state_35727[(1)]);
if((state_val_35728 === (1))){
var state_35727__$1 = state_35727;
var statearr_35729_38521 = state_35727__$1;
(statearr_35729_38521[(2)] = null);

(statearr_35729_38521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35728 === (2))){
var state_35727__$1 = state_35727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35727__$1,(4),jobs);
} else {
if((state_val_35728 === (3))){
var inst_35725 = (state_35727[(2)]);
var state_35727__$1 = state_35727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35727__$1,inst_35725);
} else {
if((state_val_35728 === (4))){
var inst_35717 = (state_35727[(2)]);
var inst_35718 = async(inst_35717);
var state_35727__$1 = state_35727;
if(cljs.core.truth_(inst_35718)){
var statearr_35731_38529 = state_35727__$1;
(statearr_35731_38529[(1)] = (5));

} else {
var statearr_35732_38530 = state_35727__$1;
(statearr_35732_38530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35728 === (5))){
var state_35727__$1 = state_35727;
var statearr_35733_38534 = state_35727__$1;
(statearr_35733_38534[(2)] = null);

(statearr_35733_38534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35728 === (6))){
var state_35727__$1 = state_35727;
var statearr_35734_38535 = state_35727__$1;
(statearr_35734_38535[(2)] = null);

(statearr_35734_38535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35728 === (7))){
var inst_35723 = (state_35727[(2)]);
var state_35727__$1 = state_35727;
var statearr_35735_38539 = state_35727__$1;
(statearr_35735_38539[(2)] = inst_35723);

(statearr_35735_38539[(1)] = (3));


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
});})(__38462,c__35185__auto___38517,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async))
;
return ((function (__38462,switch__34930__auto__,c__35185__auto___38517,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0 = (function (){
var statearr_35739 = [null,null,null,null,null,null,null];
(statearr_35739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__);

(statearr_35739[(1)] = (1));

return statearr_35739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1 = (function (state_35727){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35727);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e35740){var ex__34934__auto__ = e35740;
var statearr_35741_38548 = state_35727;
(statearr_35741_38548[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35727[(4)]))){
var statearr_35748_38552 = state_35727;
(statearr_35748_38552[(1)] = cljs.core.first((state_35727[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38553 = state_35727;
state_35727 = G__38553;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = function(state_35727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1.call(this,state_35727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__;
})()
;})(__38462,switch__34930__auto__,c__35185__auto___38517,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async))
})();
var state__35187__auto__ = (function (){var statearr_35749 = f__35186__auto__();
(statearr_35749[(6)] = c__35185__auto___38517);

return statearr_35749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
});})(__38462,c__35185__auto___38517,G__35686_38463,G__35686_38464__$1,n__4666__auto___38461,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35686_38464__$1)].join('')));

}

var G__38565 = (__38462 + (1));
__38462 = G__38565;
continue;
} else {
}
break;
}

var c__35185__auto___38566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_35771){
var state_val_35772 = (state_35771[(1)]);
if((state_val_35772 === (7))){
var inst_35767 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
var statearr_35773_38574 = state_35771__$1;
(statearr_35773_38574[(2)] = inst_35767);

(statearr_35773_38574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (1))){
var state_35771__$1 = state_35771;
var statearr_35774_38580 = state_35771__$1;
(statearr_35774_38580[(2)] = null);

(statearr_35774_38580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (4))){
var inst_35752 = (state_35771[(7)]);
var inst_35752__$1 = (state_35771[(2)]);
var inst_35753 = (inst_35752__$1 == null);
var state_35771__$1 = (function (){var statearr_35776 = state_35771;
(statearr_35776[(7)] = inst_35752__$1);

return statearr_35776;
})();
if(cljs.core.truth_(inst_35753)){
var statearr_35777_38589 = state_35771__$1;
(statearr_35777_38589[(1)] = (5));

} else {
var statearr_35778_38590 = state_35771__$1;
(statearr_35778_38590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (6))){
var inst_35757 = (state_35771[(8)]);
var inst_35752 = (state_35771[(7)]);
var inst_35757__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35758 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35759 = [inst_35752,inst_35757__$1];
var inst_35760 = (new cljs.core.PersistentVector(null,2,(5),inst_35758,inst_35759,null));
var state_35771__$1 = (function (){var statearr_35779 = state_35771;
(statearr_35779[(8)] = inst_35757__$1);

return statearr_35779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35771__$1,(8),jobs,inst_35760);
} else {
if((state_val_35772 === (3))){
var inst_35769 = (state_35771[(2)]);
var state_35771__$1 = state_35771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35771__$1,inst_35769);
} else {
if((state_val_35772 === (2))){
var state_35771__$1 = state_35771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35771__$1,(4),from);
} else {
if((state_val_35772 === (9))){
var inst_35764 = (state_35771[(2)]);
var state_35771__$1 = (function (){var statearr_35781 = state_35771;
(statearr_35781[(9)] = inst_35764);

return statearr_35781;
})();
var statearr_35782_38599 = state_35771__$1;
(statearr_35782_38599[(2)] = null);

(statearr_35782_38599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (5))){
var inst_35755 = cljs.core.async.close_BANG_(jobs);
var state_35771__$1 = state_35771;
var statearr_35784_38602 = state_35771__$1;
(statearr_35784_38602[(2)] = inst_35755);

(statearr_35784_38602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35772 === (8))){
var inst_35757 = (state_35771[(8)]);
var inst_35762 = (state_35771[(2)]);
var state_35771__$1 = (function (){var statearr_35785 = state_35771;
(statearr_35785[(10)] = inst_35762);

return statearr_35785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35771__$1,(9),results,inst_35757);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0 = (function (){
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1 = (function (state_35771){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35771);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e35790){var ex__34934__auto__ = e35790;
var statearr_35791_38606 = state_35771;
(statearr_35791_38606[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35771[(4)]))){
var statearr_35795_38610 = state_35771;
(statearr_35795_38610[(1)] = cljs.core.first((state_35771[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38611 = state_35771;
state_35771 = G__38611;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = function(state_35771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1.call(this,state_35771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_35796 = f__35186__auto__();
(statearr_35796[(6)] = c__35185__auto___38566);

return statearr_35796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


var c__35185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_35834){
var state_val_35835 = (state_35834[(1)]);
if((state_val_35835 === (7))){
var inst_35830 = (state_35834[(2)]);
var state_35834__$1 = state_35834;
var statearr_35840_38614 = state_35834__$1;
(statearr_35840_38614[(2)] = inst_35830);

(statearr_35840_38614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (20))){
var state_35834__$1 = state_35834;
var statearr_35841_38617 = state_35834__$1;
(statearr_35841_38617[(2)] = null);

(statearr_35841_38617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (1))){
var state_35834__$1 = state_35834;
var statearr_35842_38618 = state_35834__$1;
(statearr_35842_38618[(2)] = null);

(statearr_35842_38618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (4))){
var inst_35799 = (state_35834[(7)]);
var inst_35799__$1 = (state_35834[(2)]);
var inst_35800 = (inst_35799__$1 == null);
var state_35834__$1 = (function (){var statearr_35843 = state_35834;
(statearr_35843[(7)] = inst_35799__$1);

return statearr_35843;
})();
if(cljs.core.truth_(inst_35800)){
var statearr_35844_38624 = state_35834__$1;
(statearr_35844_38624[(1)] = (5));

} else {
var statearr_35845_38625 = state_35834__$1;
(statearr_35845_38625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (15))){
var inst_35812 = (state_35834[(8)]);
var state_35834__$1 = state_35834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35834__$1,(18),to,inst_35812);
} else {
if((state_val_35835 === (21))){
var inst_35825 = (state_35834[(2)]);
var state_35834__$1 = state_35834;
var statearr_35849_38634 = state_35834__$1;
(statearr_35849_38634[(2)] = inst_35825);

(statearr_35849_38634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (13))){
var inst_35827 = (state_35834[(2)]);
var state_35834__$1 = (function (){var statearr_35852 = state_35834;
(statearr_35852[(9)] = inst_35827);

return statearr_35852;
})();
var statearr_35854_38636 = state_35834__$1;
(statearr_35854_38636[(2)] = null);

(statearr_35854_38636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (6))){
var inst_35799 = (state_35834[(7)]);
var state_35834__$1 = state_35834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35834__$1,(11),inst_35799);
} else {
if((state_val_35835 === (17))){
var inst_35820 = (state_35834[(2)]);
var state_35834__$1 = state_35834;
if(cljs.core.truth_(inst_35820)){
var statearr_35859_38639 = state_35834__$1;
(statearr_35859_38639[(1)] = (19));

} else {
var statearr_35860_38643 = state_35834__$1;
(statearr_35860_38643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (3))){
var inst_35832 = (state_35834[(2)]);
var state_35834__$1 = state_35834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35834__$1,inst_35832);
} else {
if((state_val_35835 === (12))){
var inst_35809 = (state_35834[(10)]);
var state_35834__$1 = state_35834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35834__$1,(14),inst_35809);
} else {
if((state_val_35835 === (2))){
var state_35834__$1 = state_35834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35834__$1,(4),results);
} else {
if((state_val_35835 === (19))){
var state_35834__$1 = state_35834;
var statearr_35867_38645 = state_35834__$1;
(statearr_35867_38645[(2)] = null);

(statearr_35867_38645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (11))){
var inst_35809 = (state_35834[(2)]);
var state_35834__$1 = (function (){var statearr_35868 = state_35834;
(statearr_35868[(10)] = inst_35809);

return statearr_35868;
})();
var statearr_35869_38648 = state_35834__$1;
(statearr_35869_38648[(2)] = null);

(statearr_35869_38648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (9))){
var state_35834__$1 = state_35834;
var statearr_35870_38649 = state_35834__$1;
(statearr_35870_38649[(2)] = null);

(statearr_35870_38649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (5))){
var state_35834__$1 = state_35834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35872_38652 = state_35834__$1;
(statearr_35872_38652[(1)] = (8));

} else {
var statearr_35876_38653 = state_35834__$1;
(statearr_35876_38653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (14))){
var inst_35812 = (state_35834[(8)]);
var inst_35812__$1 = (state_35834[(2)]);
var inst_35813 = (inst_35812__$1 == null);
var inst_35814 = cljs.core.not(inst_35813);
var state_35834__$1 = (function (){var statearr_35883 = state_35834;
(statearr_35883[(8)] = inst_35812__$1);

return statearr_35883;
})();
if(inst_35814){
var statearr_35887_38654 = state_35834__$1;
(statearr_35887_38654[(1)] = (15));

} else {
var statearr_35888_38655 = state_35834__$1;
(statearr_35888_38655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (16))){
var state_35834__$1 = state_35834;
var statearr_35891_38656 = state_35834__$1;
(statearr_35891_38656[(2)] = false);

(statearr_35891_38656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (10))){
var inst_35806 = (state_35834[(2)]);
var state_35834__$1 = state_35834;
var statearr_35893_38657 = state_35834__$1;
(statearr_35893_38657[(2)] = inst_35806);

(statearr_35893_38657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (18))){
var inst_35817 = (state_35834[(2)]);
var state_35834__$1 = state_35834;
var statearr_35895_38662 = state_35834__$1;
(statearr_35895_38662[(2)] = inst_35817);

(statearr_35895_38662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35835 === (8))){
var inst_35803 = cljs.core.async.close_BANG_(to);
var state_35834__$1 = state_35834;
var statearr_35896_38663 = state_35834__$1;
(statearr_35896_38663[(2)] = inst_35803);

(statearr_35896_38663[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0 = (function (){
var statearr_35902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__);

(statearr_35902[(1)] = (1));

return statearr_35902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1 = (function (state_35834){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35834);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e35904){var ex__34934__auto__ = e35904;
var statearr_35905_38674 = state_35834;
(statearr_35905_38674[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35834[(4)]))){
var statearr_35906_38676 = state_35834;
(statearr_35906_38676[(1)] = cljs.core.first((state_35834[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38680 = state_35834;
state_35834 = G__38680;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__ = function(state_35834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1.call(this,state_35834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34931__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_35916 = f__35186__auto__();
(statearr_35916[(6)] = c__35185__auto__);

return statearr_35916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));

return c__35185__auto__;
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
var G__35923 = arguments.length;
switch (G__35923) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__35939 = arguments.length;
switch (G__35939) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__35954 = arguments.length;
switch (G__35954) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__35185__auto___38709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_35996){
var state_val_35997 = (state_35996[(1)]);
if((state_val_35997 === (7))){
var inst_35992 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_35998_38710 = state_35996__$1;
(statearr_35998_38710[(2)] = inst_35992);

(statearr_35998_38710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (1))){
var state_35996__$1 = state_35996;
var statearr_36000_38711 = state_35996__$1;
(statearr_36000_38711[(2)] = null);

(statearr_36000_38711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (4))){
var inst_35972 = (state_35996[(7)]);
var inst_35972__$1 = (state_35996[(2)]);
var inst_35974 = (inst_35972__$1 == null);
var state_35996__$1 = (function (){var statearr_36004 = state_35996;
(statearr_36004[(7)] = inst_35972__$1);

return statearr_36004;
})();
if(cljs.core.truth_(inst_35974)){
var statearr_36005_38712 = state_35996__$1;
(statearr_36005_38712[(1)] = (5));

} else {
var statearr_36006_38713 = state_35996__$1;
(statearr_36006_38713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (13))){
var state_35996__$1 = state_35996;
var statearr_36007_38715 = state_35996__$1;
(statearr_36007_38715[(2)] = null);

(statearr_36007_38715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (6))){
var inst_35972 = (state_35996[(7)]);
var inst_35979 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35972) : p.call(null,inst_35972));
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35979)){
var statearr_36011_38717 = state_35996__$1;
(statearr_36011_38717[(1)] = (9));

} else {
var statearr_36012_38724 = state_35996__$1;
(statearr_36012_38724[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (3))){
var inst_35994 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35996__$1,inst_35994);
} else {
if((state_val_35997 === (12))){
var state_35996__$1 = state_35996;
var statearr_36013_38729 = state_35996__$1;
(statearr_36013_38729[(2)] = null);

(statearr_36013_38729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (2))){
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35996__$1,(4),ch);
} else {
if((state_val_35997 === (11))){
var inst_35972 = (state_35996[(7)]);
var inst_35983 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35996__$1,(8),inst_35983,inst_35972);
} else {
if((state_val_35997 === (9))){
var state_35996__$1 = state_35996;
var statearr_36018_38730 = state_35996__$1;
(statearr_36018_38730[(2)] = tc);

(statearr_36018_38730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (5))){
var inst_35976 = cljs.core.async.close_BANG_(tc);
var inst_35977 = cljs.core.async.close_BANG_(fc);
var state_35996__$1 = (function (){var statearr_36022 = state_35996;
(statearr_36022[(8)] = inst_35976);

return statearr_36022;
})();
var statearr_36023_38735 = state_35996__$1;
(statearr_36023_38735[(2)] = inst_35977);

(statearr_36023_38735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (14))){
var inst_35990 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
var statearr_36028_38736 = state_35996__$1;
(statearr_36028_38736[(2)] = inst_35990);

(statearr_36028_38736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (10))){
var state_35996__$1 = state_35996;
var statearr_36029_38737 = state_35996__$1;
(statearr_36029_38737[(2)] = fc);

(statearr_36029_38737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (8))){
var inst_35985 = (state_35996[(2)]);
var state_35996__$1 = state_35996;
if(cljs.core.truth_(inst_35985)){
var statearr_36030_38738 = state_35996__$1;
(statearr_36030_38738[(1)] = (12));

} else {
var statearr_36031_38739 = state_35996__$1;
(statearr_36031_38739[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_36033 = [null,null,null,null,null,null,null,null,null];
(statearr_36033[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_36033[(1)] = (1));

return statearr_36033;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_35996){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_35996);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e36036){var ex__34934__auto__ = e36036;
var statearr_36037_38751 = state_35996;
(statearr_36037_38751[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_35996[(4)]))){
var statearr_36039_38752 = state_35996;
(statearr_36039_38752[(1)] = cljs.core.first((state_35996[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38753 = state_35996;
state_35996 = G__38753;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_35996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_35996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_36047 = f__35186__auto__();
(statearr_36047[(6)] = c__35185__auto___38709);

return statearr_36047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_36079){
var state_val_36080 = (state_36079[(1)]);
if((state_val_36080 === (7))){
var inst_36075 = (state_36079[(2)]);
var state_36079__$1 = state_36079;
var statearr_36084_38756 = state_36079__$1;
(statearr_36084_38756[(2)] = inst_36075);

(statearr_36084_38756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (1))){
var inst_36055 = init;
var inst_36056 = inst_36055;
var state_36079__$1 = (function (){var statearr_36085 = state_36079;
(statearr_36085[(7)] = inst_36056);

return statearr_36085;
})();
var statearr_36086_38763 = state_36079__$1;
(statearr_36086_38763[(2)] = null);

(statearr_36086_38763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (4))){
var inst_36061 = (state_36079[(8)]);
var inst_36061__$1 = (state_36079[(2)]);
var inst_36062 = (inst_36061__$1 == null);
var state_36079__$1 = (function (){var statearr_36087 = state_36079;
(statearr_36087[(8)] = inst_36061__$1);

return statearr_36087;
})();
if(cljs.core.truth_(inst_36062)){
var statearr_36088_38768 = state_36079__$1;
(statearr_36088_38768[(1)] = (5));

} else {
var statearr_36091_38789 = state_36079__$1;
(statearr_36091_38789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (6))){
var inst_36061 = (state_36079[(8)]);
var inst_36066 = (state_36079[(9)]);
var inst_36056 = (state_36079[(7)]);
var inst_36066__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_36056,inst_36061) : f.call(null,inst_36056,inst_36061));
var inst_36067 = cljs.core.reduced_QMARK_(inst_36066__$1);
var state_36079__$1 = (function (){var statearr_36092 = state_36079;
(statearr_36092[(9)] = inst_36066__$1);

return statearr_36092;
})();
if(inst_36067){
var statearr_36093_38793 = state_36079__$1;
(statearr_36093_38793[(1)] = (8));

} else {
var statearr_36095_38794 = state_36079__$1;
(statearr_36095_38794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (3))){
var inst_36077 = (state_36079[(2)]);
var state_36079__$1 = state_36079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36079__$1,inst_36077);
} else {
if((state_val_36080 === (2))){
var state_36079__$1 = state_36079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36079__$1,(4),ch);
} else {
if((state_val_36080 === (9))){
var inst_36066 = (state_36079[(9)]);
var inst_36056 = inst_36066;
var state_36079__$1 = (function (){var statearr_36099 = state_36079;
(statearr_36099[(7)] = inst_36056);

return statearr_36099;
})();
var statearr_36100_38795 = state_36079__$1;
(statearr_36100_38795[(2)] = null);

(statearr_36100_38795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (5))){
var inst_36056 = (state_36079[(7)]);
var state_36079__$1 = state_36079;
var statearr_36101_38796 = state_36079__$1;
(statearr_36101_38796[(2)] = inst_36056);

(statearr_36101_38796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (10))){
var inst_36073 = (state_36079[(2)]);
var state_36079__$1 = state_36079;
var statearr_36102_38797 = state_36079__$1;
(statearr_36102_38797[(2)] = inst_36073);

(statearr_36102_38797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36080 === (8))){
var inst_36066 = (state_36079[(9)]);
var inst_36069 = cljs.core.deref(inst_36066);
var state_36079__$1 = state_36079;
var statearr_36103_38799 = state_36079__$1;
(statearr_36103_38799[(2)] = inst_36069);

(statearr_36103_38799[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34931__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34931__auto____0 = (function (){
var statearr_36104 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36104[(0)] = cljs$core$async$reduce_$_state_machine__34931__auto__);

(statearr_36104[(1)] = (1));

return statearr_36104;
});
var cljs$core$async$reduce_$_state_machine__34931__auto____1 = (function (state_36079){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_36079);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e36105){var ex__34934__auto__ = e36105;
var statearr_36106_38809 = state_36079;
(statearr_36106_38809[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_36079[(4)]))){
var statearr_36107_38810 = state_36079;
(statearr_36107_38810[(1)] = cljs.core.first((state_36079[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38811 = state_36079;
state_36079 = G__38811;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34931__auto__ = function(state_36079){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34931__auto____1.call(this,state_36079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34931__auto____0;
cljs$core$async$reduce_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34931__auto____1;
return cljs$core$async$reduce_$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_36110 = f__35186__auto__();
(statearr_36110[(6)] = c__35185__auto__);

return statearr_36110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));

return c__35185__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__35185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_36117){
var state_val_36118 = (state_36117[(1)]);
if((state_val_36118 === (1))){
var inst_36111 = cljs.core.async.reduce(f__$1,init,ch);
var state_36117__$1 = state_36117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36117__$1,(2),inst_36111);
} else {
if((state_val_36118 === (2))){
var inst_36113 = (state_36117[(2)]);
var inst_36114 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_36113) : f__$1.call(null,inst_36113));
var state_36117__$1 = state_36117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36117__$1,inst_36114);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34931__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34931__auto____0 = (function (){
var statearr_36121 = [null,null,null,null,null,null,null];
(statearr_36121[(0)] = cljs$core$async$transduce_$_state_machine__34931__auto__);

(statearr_36121[(1)] = (1));

return statearr_36121;
});
var cljs$core$async$transduce_$_state_machine__34931__auto____1 = (function (state_36117){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_36117);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e36122){var ex__34934__auto__ = e36122;
var statearr_36123_38815 = state_36117;
(statearr_36123_38815[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_36117[(4)]))){
var statearr_36124_38816 = state_36117;
(statearr_36124_38816[(1)] = cljs.core.first((state_36117[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38817 = state_36117;
state_36117 = G__38817;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34931__auto__ = function(state_36117){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34931__auto____1.call(this,state_36117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34931__auto____0;
cljs$core$async$transduce_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34931__auto____1;
return cljs$core$async$transduce_$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_36131 = f__35186__auto__();
(statearr_36131[(6)] = c__35185__auto__);

return statearr_36131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));

return c__35185__auto__;
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
var G__36134 = arguments.length;
switch (G__36134) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_36160){
var state_val_36161 = (state_36160[(1)]);
if((state_val_36161 === (7))){
var inst_36142 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36169_38822 = state_36160__$1;
(statearr_36169_38822[(2)] = inst_36142);

(statearr_36169_38822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (1))){
var inst_36136 = cljs.core.seq(coll);
var inst_36137 = inst_36136;
var state_36160__$1 = (function (){var statearr_36171 = state_36160;
(statearr_36171[(7)] = inst_36137);

return statearr_36171;
})();
var statearr_36172_38825 = state_36160__$1;
(statearr_36172_38825[(2)] = null);

(statearr_36172_38825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (4))){
var inst_36137 = (state_36160[(7)]);
var inst_36140 = cljs.core.first(inst_36137);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36160__$1,(7),ch,inst_36140);
} else {
if((state_val_36161 === (13))){
var inst_36154 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36174_38828 = state_36160__$1;
(statearr_36174_38828[(2)] = inst_36154);

(statearr_36174_38828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (6))){
var inst_36145 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36145)){
var statearr_36176_38832 = state_36160__$1;
(statearr_36176_38832[(1)] = (8));

} else {
var statearr_36181_38833 = state_36160__$1;
(statearr_36181_38833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (3))){
var inst_36158 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36160__$1,inst_36158);
} else {
if((state_val_36161 === (12))){
var state_36160__$1 = state_36160;
var statearr_36183_38834 = state_36160__$1;
(statearr_36183_38834[(2)] = null);

(statearr_36183_38834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (2))){
var inst_36137 = (state_36160[(7)]);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36137)){
var statearr_36184_38835 = state_36160__$1;
(statearr_36184_38835[(1)] = (4));

} else {
var statearr_36185_38836 = state_36160__$1;
(statearr_36185_38836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (11))){
var inst_36151 = cljs.core.async.close_BANG_(ch);
var state_36160__$1 = state_36160;
var statearr_36187_38837 = state_36160__$1;
(statearr_36187_38837[(2)] = inst_36151);

(statearr_36187_38837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (9))){
var state_36160__$1 = state_36160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36188_38839 = state_36160__$1;
(statearr_36188_38839[(1)] = (11));

} else {
var statearr_36189_38840 = state_36160__$1;
(statearr_36189_38840[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (5))){
var inst_36137 = (state_36160[(7)]);
var state_36160__$1 = state_36160;
var statearr_36190_38841 = state_36160__$1;
(statearr_36190_38841[(2)] = inst_36137);

(statearr_36190_38841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (10))){
var inst_36156 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36191_38842 = state_36160__$1;
(statearr_36191_38842[(2)] = inst_36156);

(statearr_36191_38842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (8))){
var inst_36137 = (state_36160[(7)]);
var inst_36147 = cljs.core.next(inst_36137);
var inst_36137__$1 = inst_36147;
var state_36160__$1 = (function (){var statearr_36192 = state_36160;
(statearr_36192[(7)] = inst_36137__$1);

return statearr_36192;
})();
var statearr_36196_38845 = state_36160__$1;
(statearr_36196_38845[(2)] = null);

(statearr_36196_38845[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_36198 = [null,null,null,null,null,null,null,null];
(statearr_36198[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_36198[(1)] = (1));

return statearr_36198;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_36160){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_36160);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e36199){var ex__34934__auto__ = e36199;
var statearr_36200_38847 = state_36160;
(statearr_36200_38847[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_36160[(4)]))){
var statearr_36201_38848 = state_36160;
(statearr_36201_38848[(1)] = cljs.core.first((state_36160[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38849 = state_36160;
state_36160 = G__38849;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_36160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_36160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_36203 = f__35186__auto__();
(statearr_36203[(6)] = c__35185__auto__);

return statearr_36203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));

return c__35185__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36226 = (function (ch,cs,meta36227){
this.ch = ch;
this.cs = cs;
this.meta36227 = meta36227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36228,meta36227__$1){
var self__ = this;
var _36228__$1 = this;
return (new cljs.core.async.t_cljs$core$async36226(self__.ch,self__.cs,meta36227__$1));
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36228){
var self__ = this;
var _36228__$1 = this;
return self__.meta36227;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async36226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36227","meta36227",-798583611,null)], null);
}));

(cljs.core.async.t_cljs$core$async36226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36226");

(cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36226.
 */
cljs.core.async.__GT_t_cljs$core$async36226 = (function cljs$core$async$mult_$___GT_t_cljs$core$async36226(ch__$1,cs__$1,meta36227){
return (new cljs.core.async.t_cljs$core$async36226(ch__$1,cs__$1,meta36227));
});

}

return (new cljs.core.async.t_cljs$core$async36226(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__35185__auto___38894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_36388){
var state_val_36393 = (state_36388[(1)]);
if((state_val_36393 === (7))){
var inst_36381 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36398_38898 = state_36388__$1;
(statearr_36398_38898[(2)] = inst_36381);

(statearr_36398_38898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (20))){
var inst_36270 = (state_36388[(7)]);
var inst_36284 = cljs.core.first(inst_36270);
var inst_36285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36284,(0),null);
var inst_36286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36284,(1),null);
var state_36388__$1 = (function (){var statearr_36399 = state_36388;
(statearr_36399[(8)] = inst_36285);

return statearr_36399;
})();
if(cljs.core.truth_(inst_36286)){
var statearr_36400_38899 = state_36388__$1;
(statearr_36400_38899[(1)] = (22));

} else {
var statearr_36401_38900 = state_36388__$1;
(statearr_36401_38900[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (27))){
var inst_36324 = (state_36388[(9)]);
var inst_36322 = (state_36388[(10)]);
var inst_36239 = (state_36388[(11)]);
var inst_36330 = (state_36388[(12)]);
var inst_36330__$1 = cljs.core._nth(inst_36322,inst_36324);
var inst_36335 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36330__$1,inst_36239,done);
var state_36388__$1 = (function (){var statearr_36406 = state_36388;
(statearr_36406[(12)] = inst_36330__$1);

return statearr_36406;
})();
if(cljs.core.truth_(inst_36335)){
var statearr_36407_38909 = state_36388__$1;
(statearr_36407_38909[(1)] = (30));

} else {
var statearr_36408_38916 = state_36388__$1;
(statearr_36408_38916[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (1))){
var state_36388__$1 = state_36388;
var statearr_36410_38917 = state_36388__$1;
(statearr_36410_38917[(2)] = null);

(statearr_36410_38917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (24))){
var inst_36270 = (state_36388[(7)]);
var inst_36291 = (state_36388[(2)]);
var inst_36292 = cljs.core.next(inst_36270);
var inst_36248 = inst_36292;
var inst_36249 = null;
var inst_36250 = (0);
var inst_36251 = (0);
var state_36388__$1 = (function (){var statearr_36411 = state_36388;
(statearr_36411[(13)] = inst_36249);

(statearr_36411[(14)] = inst_36291);

(statearr_36411[(15)] = inst_36248);

(statearr_36411[(16)] = inst_36251);

(statearr_36411[(17)] = inst_36250);

return statearr_36411;
})();
var statearr_36412_38924 = state_36388__$1;
(statearr_36412_38924[(2)] = null);

(statearr_36412_38924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (39))){
var state_36388__$1 = state_36388;
var statearr_36416_38925 = state_36388__$1;
(statearr_36416_38925[(2)] = null);

(statearr_36416_38925[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (4))){
var inst_36239 = (state_36388[(11)]);
var inst_36239__$1 = (state_36388[(2)]);
var inst_36240 = (inst_36239__$1 == null);
var state_36388__$1 = (function (){var statearr_36417 = state_36388;
(statearr_36417[(11)] = inst_36239__$1);

return statearr_36417;
})();
if(cljs.core.truth_(inst_36240)){
var statearr_36428_38930 = state_36388__$1;
(statearr_36428_38930[(1)] = (5));

} else {
var statearr_36429_38939 = state_36388__$1;
(statearr_36429_38939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (15))){
var inst_36249 = (state_36388[(13)]);
var inst_36248 = (state_36388[(15)]);
var inst_36251 = (state_36388[(16)]);
var inst_36250 = (state_36388[(17)]);
var inst_36266 = (state_36388[(2)]);
var inst_36267 = (inst_36251 + (1));
var tmp36413 = inst_36249;
var tmp36414 = inst_36248;
var tmp36415 = inst_36250;
var inst_36248__$1 = tmp36414;
var inst_36249__$1 = tmp36413;
var inst_36250__$1 = tmp36415;
var inst_36251__$1 = inst_36267;
var state_36388__$1 = (function (){var statearr_36430 = state_36388;
(statearr_36430[(13)] = inst_36249__$1);

(statearr_36430[(18)] = inst_36266);

(statearr_36430[(15)] = inst_36248__$1);

(statearr_36430[(16)] = inst_36251__$1);

(statearr_36430[(17)] = inst_36250__$1);

return statearr_36430;
})();
var statearr_36435_38953 = state_36388__$1;
(statearr_36435_38953[(2)] = null);

(statearr_36435_38953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (21))){
var inst_36295 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36439_38963 = state_36388__$1;
(statearr_36439_38963[(2)] = inst_36295);

(statearr_36439_38963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (31))){
var inst_36330 = (state_36388[(12)]);
var inst_36338 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36330);
var state_36388__$1 = state_36388;
var statearr_36440_38969 = state_36388__$1;
(statearr_36440_38969[(2)] = inst_36338);

(statearr_36440_38969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (32))){
var inst_36324 = (state_36388[(9)]);
var inst_36322 = (state_36388[(10)]);
var inst_36323 = (state_36388[(19)]);
var inst_36321 = (state_36388[(20)]);
var inst_36340 = (state_36388[(2)]);
var inst_36341 = (inst_36324 + (1));
var tmp36436 = inst_36322;
var tmp36437 = inst_36323;
var tmp36438 = inst_36321;
var inst_36321__$1 = tmp36438;
var inst_36322__$1 = tmp36436;
var inst_36323__$1 = tmp36437;
var inst_36324__$1 = inst_36341;
var state_36388__$1 = (function (){var statearr_36442 = state_36388;
(statearr_36442[(9)] = inst_36324__$1);

(statearr_36442[(10)] = inst_36322__$1);

(statearr_36442[(21)] = inst_36340);

(statearr_36442[(19)] = inst_36323__$1);

(statearr_36442[(20)] = inst_36321__$1);

return statearr_36442;
})();
var statearr_36443_38981 = state_36388__$1;
(statearr_36443_38981[(2)] = null);

(statearr_36443_38981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (40))){
var inst_36354 = (state_36388[(22)]);
var inst_36358 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_36354);
var state_36388__$1 = state_36388;
var statearr_36444_38986 = state_36388__$1;
(statearr_36444_38986[(2)] = inst_36358);

(statearr_36444_38986[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (33))){
var inst_36344 = (state_36388[(23)]);
var inst_36346 = cljs.core.chunked_seq_QMARK_(inst_36344);
var state_36388__$1 = state_36388;
if(inst_36346){
var statearr_36445_38988 = state_36388__$1;
(statearr_36445_38988[(1)] = (36));

} else {
var statearr_36446_38989 = state_36388__$1;
(statearr_36446_38989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (13))){
var inst_36260 = (state_36388[(24)]);
var inst_36263 = cljs.core.async.close_BANG_(inst_36260);
var state_36388__$1 = state_36388;
var statearr_36447_38990 = state_36388__$1;
(statearr_36447_38990[(2)] = inst_36263);

(statearr_36447_38990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (22))){
var inst_36285 = (state_36388[(8)]);
var inst_36288 = cljs.core.async.close_BANG_(inst_36285);
var state_36388__$1 = state_36388;
var statearr_36449_38991 = state_36388__$1;
(statearr_36449_38991[(2)] = inst_36288);

(statearr_36449_38991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (36))){
var inst_36344 = (state_36388[(23)]);
var inst_36348 = cljs.core.chunk_first(inst_36344);
var inst_36350 = cljs.core.chunk_rest(inst_36344);
var inst_36351 = cljs.core.count(inst_36348);
var inst_36321 = inst_36350;
var inst_36322 = inst_36348;
var inst_36323 = inst_36351;
var inst_36324 = (0);
var state_36388__$1 = (function (){var statearr_36450 = state_36388;
(statearr_36450[(9)] = inst_36324);

(statearr_36450[(10)] = inst_36322);

(statearr_36450[(19)] = inst_36323);

(statearr_36450[(20)] = inst_36321);

return statearr_36450;
})();
var statearr_36451_38998 = state_36388__$1;
(statearr_36451_38998[(2)] = null);

(statearr_36451_38998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (41))){
var inst_36344 = (state_36388[(23)]);
var inst_36360 = (state_36388[(2)]);
var inst_36361 = cljs.core.next(inst_36344);
var inst_36321 = inst_36361;
var inst_36322 = null;
var inst_36323 = (0);
var inst_36324 = (0);
var state_36388__$1 = (function (){var statearr_36452 = state_36388;
(statearr_36452[(9)] = inst_36324);

(statearr_36452[(25)] = inst_36360);

(statearr_36452[(10)] = inst_36322);

(statearr_36452[(19)] = inst_36323);

(statearr_36452[(20)] = inst_36321);

return statearr_36452;
})();
var statearr_36453_38999 = state_36388__$1;
(statearr_36453_38999[(2)] = null);

(statearr_36453_38999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (43))){
var state_36388__$1 = state_36388;
var statearr_36454_39000 = state_36388__$1;
(statearr_36454_39000[(2)] = null);

(statearr_36454_39000[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (29))){
var inst_36369 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36456_39001 = state_36388__$1;
(statearr_36456_39001[(2)] = inst_36369);

(statearr_36456_39001[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (44))){
var inst_36378 = (state_36388[(2)]);
var state_36388__$1 = (function (){var statearr_36457 = state_36388;
(statearr_36457[(26)] = inst_36378);

return statearr_36457;
})();
var statearr_36458_39002 = state_36388__$1;
(statearr_36458_39002[(2)] = null);

(statearr_36458_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (6))){
var inst_36305 = (state_36388[(27)]);
var inst_36304 = cljs.core.deref(cs);
var inst_36305__$1 = cljs.core.keys(inst_36304);
var inst_36307 = cljs.core.count(inst_36305__$1);
var inst_36311 = cljs.core.reset_BANG_(dctr,inst_36307);
var inst_36320 = cljs.core.seq(inst_36305__$1);
var inst_36321 = inst_36320;
var inst_36322 = null;
var inst_36323 = (0);
var inst_36324 = (0);
var state_36388__$1 = (function (){var statearr_36459 = state_36388;
(statearr_36459[(9)] = inst_36324);

(statearr_36459[(27)] = inst_36305__$1);

(statearr_36459[(10)] = inst_36322);

(statearr_36459[(19)] = inst_36323);

(statearr_36459[(28)] = inst_36311);

(statearr_36459[(20)] = inst_36321);

return statearr_36459;
})();
var statearr_36460_39004 = state_36388__$1;
(statearr_36460_39004[(2)] = null);

(statearr_36460_39004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (28))){
var inst_36344 = (state_36388[(23)]);
var inst_36321 = (state_36388[(20)]);
var inst_36344__$1 = cljs.core.seq(inst_36321);
var state_36388__$1 = (function (){var statearr_36461 = state_36388;
(statearr_36461[(23)] = inst_36344__$1);

return statearr_36461;
})();
if(inst_36344__$1){
var statearr_36463_39005 = state_36388__$1;
(statearr_36463_39005[(1)] = (33));

} else {
var statearr_36464_39006 = state_36388__$1;
(statearr_36464_39006[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (25))){
var inst_36324 = (state_36388[(9)]);
var inst_36323 = (state_36388[(19)]);
var inst_36326 = (inst_36324 < inst_36323);
var inst_36327 = inst_36326;
var state_36388__$1 = state_36388;
if(cljs.core.truth_(inst_36327)){
var statearr_36465_39007 = state_36388__$1;
(statearr_36465_39007[(1)] = (27));

} else {
var statearr_36466_39008 = state_36388__$1;
(statearr_36466_39008[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (34))){
var state_36388__$1 = state_36388;
var statearr_36476_39013 = state_36388__$1;
(statearr_36476_39013[(2)] = null);

(statearr_36476_39013[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (17))){
var state_36388__$1 = state_36388;
var statearr_36478_39015 = state_36388__$1;
(statearr_36478_39015[(2)] = null);

(statearr_36478_39015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (3))){
var inst_36383 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36388__$1,inst_36383);
} else {
if((state_val_36393 === (12))){
var inst_36300 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36481_39016 = state_36388__$1;
(statearr_36481_39016[(2)] = inst_36300);

(statearr_36481_39016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (2))){
var state_36388__$1 = state_36388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36388__$1,(4),ch);
} else {
if((state_val_36393 === (23))){
var state_36388__$1 = state_36388;
var statearr_36488_39018 = state_36388__$1;
(statearr_36488_39018[(2)] = null);

(statearr_36488_39018[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (35))){
var inst_36367 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36489_39020 = state_36388__$1;
(statearr_36489_39020[(2)] = inst_36367);

(statearr_36489_39020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (19))){
var inst_36270 = (state_36388[(7)]);
var inst_36274 = cljs.core.chunk_first(inst_36270);
var inst_36277 = cljs.core.chunk_rest(inst_36270);
var inst_36278 = cljs.core.count(inst_36274);
var inst_36248 = inst_36277;
var inst_36249 = inst_36274;
var inst_36250 = inst_36278;
var inst_36251 = (0);
var state_36388__$1 = (function (){var statearr_36490 = state_36388;
(statearr_36490[(13)] = inst_36249);

(statearr_36490[(15)] = inst_36248);

(statearr_36490[(16)] = inst_36251);

(statearr_36490[(17)] = inst_36250);

return statearr_36490;
})();
var statearr_36492_39025 = state_36388__$1;
(statearr_36492_39025[(2)] = null);

(statearr_36492_39025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (11))){
var inst_36248 = (state_36388[(15)]);
var inst_36270 = (state_36388[(7)]);
var inst_36270__$1 = cljs.core.seq(inst_36248);
var state_36388__$1 = (function (){var statearr_36493 = state_36388;
(statearr_36493[(7)] = inst_36270__$1);

return statearr_36493;
})();
if(inst_36270__$1){
var statearr_36494_39034 = state_36388__$1;
(statearr_36494_39034[(1)] = (16));

} else {
var statearr_36495_39035 = state_36388__$1;
(statearr_36495_39035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (9))){
var inst_36302 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36497_39039 = state_36388__$1;
(statearr_36497_39039[(2)] = inst_36302);

(statearr_36497_39039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (5))){
var inst_36246 = cljs.core.deref(cs);
var inst_36247 = cljs.core.seq(inst_36246);
var inst_36248 = inst_36247;
var inst_36249 = null;
var inst_36250 = (0);
var inst_36251 = (0);
var state_36388__$1 = (function (){var statearr_36498 = state_36388;
(statearr_36498[(13)] = inst_36249);

(statearr_36498[(15)] = inst_36248);

(statearr_36498[(16)] = inst_36251);

(statearr_36498[(17)] = inst_36250);

return statearr_36498;
})();
var statearr_36499_39040 = state_36388__$1;
(statearr_36499_39040[(2)] = null);

(statearr_36499_39040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (14))){
var state_36388__$1 = state_36388;
var statearr_36504_39041 = state_36388__$1;
(statearr_36504_39041[(2)] = null);

(statearr_36504_39041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (45))){
var inst_36375 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36510_39043 = state_36388__$1;
(statearr_36510_39043[(2)] = inst_36375);

(statearr_36510_39043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (26))){
var inst_36305 = (state_36388[(27)]);
var inst_36371 = (state_36388[(2)]);
var inst_36372 = cljs.core.seq(inst_36305);
var state_36388__$1 = (function (){var statearr_36511 = state_36388;
(statearr_36511[(29)] = inst_36371);

return statearr_36511;
})();
if(inst_36372){
var statearr_36512_39049 = state_36388__$1;
(statearr_36512_39049[(1)] = (42));

} else {
var statearr_36514_39050 = state_36388__$1;
(statearr_36514_39050[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (16))){
var inst_36270 = (state_36388[(7)]);
var inst_36272 = cljs.core.chunked_seq_QMARK_(inst_36270);
var state_36388__$1 = state_36388;
if(inst_36272){
var statearr_36515_39051 = state_36388__$1;
(statearr_36515_39051[(1)] = (19));

} else {
var statearr_36516_39052 = state_36388__$1;
(statearr_36516_39052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (38))){
var inst_36364 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36518_39053 = state_36388__$1;
(statearr_36518_39053[(2)] = inst_36364);

(statearr_36518_39053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (30))){
var state_36388__$1 = state_36388;
var statearr_36519_39059 = state_36388__$1;
(statearr_36519_39059[(2)] = null);

(statearr_36519_39059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (10))){
var inst_36249 = (state_36388[(13)]);
var inst_36251 = (state_36388[(16)]);
var inst_36259 = cljs.core._nth(inst_36249,inst_36251);
var inst_36260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36259,(0),null);
var inst_36261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36259,(1),null);
var state_36388__$1 = (function (){var statearr_36524 = state_36388;
(statearr_36524[(24)] = inst_36260);

return statearr_36524;
})();
if(cljs.core.truth_(inst_36261)){
var statearr_36526_39063 = state_36388__$1;
(statearr_36526_39063[(1)] = (13));

} else {
var statearr_36529_39064 = state_36388__$1;
(statearr_36529_39064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (18))){
var inst_36298 = (state_36388[(2)]);
var state_36388__$1 = state_36388;
var statearr_36532_39065 = state_36388__$1;
(statearr_36532_39065[(2)] = inst_36298);

(statearr_36532_39065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (42))){
var state_36388__$1 = state_36388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36388__$1,(45),dchan);
} else {
if((state_val_36393 === (37))){
var inst_36344 = (state_36388[(23)]);
var inst_36239 = (state_36388[(11)]);
var inst_36354 = (state_36388[(22)]);
var inst_36354__$1 = cljs.core.first(inst_36344);
var inst_36355 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_36354__$1,inst_36239,done);
var state_36388__$1 = (function (){var statearr_36533 = state_36388;
(statearr_36533[(22)] = inst_36354__$1);

return statearr_36533;
})();
if(cljs.core.truth_(inst_36355)){
var statearr_36534_39066 = state_36388__$1;
(statearr_36534_39066[(1)] = (39));

} else {
var statearr_36535_39068 = state_36388__$1;
(statearr_36535_39068[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36393 === (8))){
var inst_36251 = (state_36388[(16)]);
var inst_36250 = (state_36388[(17)]);
var inst_36253 = (inst_36251 < inst_36250);
var inst_36254 = inst_36253;
var state_36388__$1 = state_36388;
if(cljs.core.truth_(inst_36254)){
var statearr_36536_39072 = state_36388__$1;
(statearr_36536_39072[(1)] = (10));

} else {
var statearr_36537_39074 = state_36388__$1;
(statearr_36537_39074[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__34931__auto__ = null;
var cljs$core$async$mult_$_state_machine__34931__auto____0 = (function (){
var statearr_36541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36541[(0)] = cljs$core$async$mult_$_state_machine__34931__auto__);

(statearr_36541[(1)] = (1));

return statearr_36541;
});
var cljs$core$async$mult_$_state_machine__34931__auto____1 = (function (state_36388){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_36388);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e36546){var ex__34934__auto__ = e36546;
var statearr_36547_39078 = state_36388;
(statearr_36547_39078[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_36388[(4)]))){
var statearr_36548_39080 = state_36388;
(statearr_36548_39080[(1)] = cljs.core.first((state_36388[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39081 = state_36388;
state_36388 = G__39081;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34931__auto__ = function(state_36388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34931__auto____1.call(this,state_36388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34931__auto____0;
cljs$core$async$mult_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34931__auto____1;
return cljs$core$async$mult_$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_36556 = f__35186__auto__();
(statearr_36556[(6)] = c__35185__auto___38894);

return statearr_36556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36560 = arguments.length;
switch (G__36560) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39110 = arguments.length;
var i__4790__auto___39111 = (0);
while(true){
if((i__4790__auto___39111 < len__4789__auto___39110)){
args__4795__auto__.push((arguments[i__4790__auto___39111]));

var G__39112 = (i__4790__auto___39111 + (1));
i__4790__auto___39111 = G__39112;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36621){
var map__36622 = p__36621;
var map__36622__$1 = (((((!((map__36622 == null))))?(((((map__36622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36622):map__36622);
var opts = map__36622__$1;
var statearr_36625_39115 = state;
(statearr_36625_39115[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36627_39116 = state;
(statearr_36627_39116[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_36630_39117 = state;
(statearr_36630_39117[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36607){
var G__36608 = cljs.core.first(seq36607);
var seq36607__$1 = cljs.core.next(seq36607);
var G__36609 = cljs.core.first(seq36607__$1);
var seq36607__$2 = cljs.core.next(seq36607__$1);
var G__36610 = cljs.core.first(seq36607__$2);
var seq36607__$3 = cljs.core.next(seq36607__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36608,G__36609,G__36610,seq36607__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36644 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36645){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36645 = meta36645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36646,meta36645__$1){
var self__ = this;
var _36646__$1 = this;
return (new cljs.core.async.t_cljs$core$async36644(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36645__$1));
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36646){
var self__ = this;
var _36646__$1 = this;
return self__.meta36645;
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36644.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async36644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36645","meta36645",-1131432930,null)], null);
}));

(cljs.core.async.t_cljs$core$async36644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36644");

(cljs.core.async.t_cljs$core$async36644.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36644.
 */
cljs.core.async.__GT_t_cljs$core$async36644 = (function cljs$core$async$mix_$___GT_t_cljs$core$async36644(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36645){
return (new cljs.core.async.t_cljs$core$async36644(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36645));
});

}

return (new cljs.core.async.t_cljs$core$async36644(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35185__auto___39171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_36792){
var state_val_36793 = (state_36792[(1)]);
if((state_val_36793 === (7))){
var inst_36690 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
var statearr_36797_39182 = state_36792__$1;
(statearr_36797_39182[(2)] = inst_36690);

(statearr_36797_39182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (20))){
var inst_36703 = (state_36792[(7)]);
var state_36792__$1 = state_36792;
var statearr_36798_39187 = state_36792__$1;
(statearr_36798_39187[(2)] = inst_36703);

(statearr_36798_39187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (27))){
var state_36792__$1 = state_36792;
var statearr_36802_39192 = state_36792__$1;
(statearr_36802_39192[(2)] = null);

(statearr_36802_39192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (1))){
var inst_36673 = (state_36792[(8)]);
var inst_36673__$1 = calc_state();
var inst_36675 = (inst_36673__$1 == null);
var inst_36676 = cljs.core.not(inst_36675);
var state_36792__$1 = (function (){var statearr_36808 = state_36792;
(statearr_36808[(8)] = inst_36673__$1);

return statearr_36808;
})();
if(inst_36676){
var statearr_36811_39199 = state_36792__$1;
(statearr_36811_39199[(1)] = (2));

} else {
var statearr_36812_39202 = state_36792__$1;
(statearr_36812_39202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (24))){
var inst_36758 = (state_36792[(9)]);
var inst_36729 = (state_36792[(10)]);
var inst_36741 = (state_36792[(11)]);
var inst_36758__$1 = (inst_36729.cljs$core$IFn$_invoke$arity$1 ? inst_36729.cljs$core$IFn$_invoke$arity$1(inst_36741) : inst_36729.call(null,inst_36741));
var state_36792__$1 = (function (){var statearr_36815 = state_36792;
(statearr_36815[(9)] = inst_36758__$1);

return statearr_36815;
})();
if(cljs.core.truth_(inst_36758__$1)){
var statearr_36816_39210 = state_36792__$1;
(statearr_36816_39210[(1)] = (29));

} else {
var statearr_36822_39212 = state_36792__$1;
(statearr_36822_39212[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (4))){
var inst_36693 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36693)){
var statearr_36823_39213 = state_36792__$1;
(statearr_36823_39213[(1)] = (8));

} else {
var statearr_36824_39215 = state_36792__$1;
(statearr_36824_39215[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (15))){
var inst_36722 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36722)){
var statearr_36826_39221 = state_36792__$1;
(statearr_36826_39221[(1)] = (19));

} else {
var statearr_36827_39222 = state_36792__$1;
(statearr_36827_39222[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (21))){
var inst_36727 = (state_36792[(12)]);
var inst_36727__$1 = (state_36792[(2)]);
var inst_36729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36727__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36727__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36727__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36792__$1 = (function (){var statearr_36829 = state_36792;
(statearr_36829[(12)] = inst_36727__$1);

(statearr_36829[(10)] = inst_36729);

(statearr_36829[(13)] = inst_36732);

return statearr_36829;
})();
return cljs.core.async.ioc_alts_BANG_(state_36792__$1,(22),inst_36734);
} else {
if((state_val_36793 === (31))){
var inst_36767 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36767)){
var statearr_36832_39238 = state_36792__$1;
(statearr_36832_39238[(1)] = (32));

} else {
var statearr_36833_39240 = state_36792__$1;
(statearr_36833_39240[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (32))){
var inst_36740 = (state_36792[(14)]);
var state_36792__$1 = state_36792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36792__$1,(35),out,inst_36740);
} else {
if((state_val_36793 === (33))){
var inst_36727 = (state_36792[(12)]);
var inst_36703 = inst_36727;
var state_36792__$1 = (function (){var statearr_36837 = state_36792;
(statearr_36837[(7)] = inst_36703);

return statearr_36837;
})();
var statearr_36839_39247 = state_36792__$1;
(statearr_36839_39247[(2)] = null);

(statearr_36839_39247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (13))){
var inst_36703 = (state_36792[(7)]);
var inst_36711 = inst_36703.cljs$lang$protocol_mask$partition0$;
var inst_36712 = (inst_36711 & (64));
var inst_36713 = inst_36703.cljs$core$ISeq$;
var inst_36714 = (cljs.core.PROTOCOL_SENTINEL === inst_36713);
var inst_36715 = ((inst_36712) || (inst_36714));
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36715)){
var statearr_36841_39248 = state_36792__$1;
(statearr_36841_39248[(1)] = (16));

} else {
var statearr_36842_39249 = state_36792__$1;
(statearr_36842_39249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (22))){
var inst_36740 = (state_36792[(14)]);
var inst_36741 = (state_36792[(11)]);
var inst_36739 = (state_36792[(2)]);
var inst_36740__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36739,(0),null);
var inst_36741__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36739,(1),null);
var inst_36742 = (inst_36740__$1 == null);
var inst_36743 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36741__$1,change);
var inst_36744 = ((inst_36742) || (inst_36743));
var state_36792__$1 = (function (){var statearr_36843 = state_36792;
(statearr_36843[(14)] = inst_36740__$1);

(statearr_36843[(11)] = inst_36741__$1);

return statearr_36843;
})();
if(cljs.core.truth_(inst_36744)){
var statearr_36844_39250 = state_36792__$1;
(statearr_36844_39250[(1)] = (23));

} else {
var statearr_36845_39251 = state_36792__$1;
(statearr_36845_39251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (36))){
var inst_36727 = (state_36792[(12)]);
var inst_36703 = inst_36727;
var state_36792__$1 = (function (){var statearr_36846 = state_36792;
(statearr_36846[(7)] = inst_36703);

return statearr_36846;
})();
var statearr_36847_39254 = state_36792__$1;
(statearr_36847_39254[(2)] = null);

(statearr_36847_39254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (29))){
var inst_36758 = (state_36792[(9)]);
var state_36792__$1 = state_36792;
var statearr_36850_39255 = state_36792__$1;
(statearr_36850_39255[(2)] = inst_36758);

(statearr_36850_39255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (6))){
var state_36792__$1 = state_36792;
var statearr_36853_39256 = state_36792__$1;
(statearr_36853_39256[(2)] = false);

(statearr_36853_39256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (28))){
var inst_36751 = (state_36792[(2)]);
var inst_36752 = calc_state();
var inst_36703 = inst_36752;
var state_36792__$1 = (function (){var statearr_36854 = state_36792;
(statearr_36854[(7)] = inst_36703);

(statearr_36854[(15)] = inst_36751);

return statearr_36854;
})();
var statearr_36855_39257 = state_36792__$1;
(statearr_36855_39257[(2)] = null);

(statearr_36855_39257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (25))){
var inst_36783 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
var statearr_36857_39258 = state_36792__$1;
(statearr_36857_39258[(2)] = inst_36783);

(statearr_36857_39258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (34))){
var inst_36781 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
var statearr_36858_39265 = state_36792__$1;
(statearr_36858_39265[(2)] = inst_36781);

(statearr_36858_39265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (17))){
var state_36792__$1 = state_36792;
var statearr_36860_39267 = state_36792__$1;
(statearr_36860_39267[(2)] = false);

(statearr_36860_39267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (3))){
var state_36792__$1 = state_36792;
var statearr_36862_39269 = state_36792__$1;
(statearr_36862_39269[(2)] = false);

(statearr_36862_39269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (12))){
var inst_36786 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36792__$1,inst_36786);
} else {
if((state_val_36793 === (2))){
var inst_36673 = (state_36792[(8)]);
var inst_36682 = inst_36673.cljs$lang$protocol_mask$partition0$;
var inst_36683 = (inst_36682 & (64));
var inst_36684 = inst_36673.cljs$core$ISeq$;
var inst_36685 = (cljs.core.PROTOCOL_SENTINEL === inst_36684);
var inst_36686 = ((inst_36683) || (inst_36685));
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36686)){
var statearr_36863_39273 = state_36792__$1;
(statearr_36863_39273[(1)] = (5));

} else {
var statearr_36864_39274 = state_36792__$1;
(statearr_36864_39274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (23))){
var inst_36740 = (state_36792[(14)]);
var inst_36746 = (inst_36740 == null);
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36746)){
var statearr_36868_39275 = state_36792__$1;
(statearr_36868_39275[(1)] = (26));

} else {
var statearr_36869_39276 = state_36792__$1;
(statearr_36869_39276[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (35))){
var inst_36770 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
if(cljs.core.truth_(inst_36770)){
var statearr_36871_39286 = state_36792__$1;
(statearr_36871_39286[(1)] = (36));

} else {
var statearr_36872_39288 = state_36792__$1;
(statearr_36872_39288[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (19))){
var inst_36703 = (state_36792[(7)]);
var inst_36724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36703);
var state_36792__$1 = state_36792;
var statearr_36873_39299 = state_36792__$1;
(statearr_36873_39299[(2)] = inst_36724);

(statearr_36873_39299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (11))){
var inst_36703 = (state_36792[(7)]);
var inst_36708 = (inst_36703 == null);
var inst_36709 = cljs.core.not(inst_36708);
var state_36792__$1 = state_36792;
if(inst_36709){
var statearr_36875_39300 = state_36792__$1;
(statearr_36875_39300[(1)] = (13));

} else {
var statearr_36876_39301 = state_36792__$1;
(statearr_36876_39301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (9))){
var inst_36673 = (state_36792[(8)]);
var state_36792__$1 = state_36792;
var statearr_36877_39303 = state_36792__$1;
(statearr_36877_39303[(2)] = inst_36673);

(statearr_36877_39303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (5))){
var state_36792__$1 = state_36792;
var statearr_36878_39305 = state_36792__$1;
(statearr_36878_39305[(2)] = true);

(statearr_36878_39305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (14))){
var state_36792__$1 = state_36792;
var statearr_36880_39306 = state_36792__$1;
(statearr_36880_39306[(2)] = false);

(statearr_36880_39306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (26))){
var inst_36741 = (state_36792[(11)]);
var inst_36748 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36741);
var state_36792__$1 = state_36792;
var statearr_36887_39308 = state_36792__$1;
(statearr_36887_39308[(2)] = inst_36748);

(statearr_36887_39308[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (16))){
var state_36792__$1 = state_36792;
var statearr_36890_39309 = state_36792__$1;
(statearr_36890_39309[(2)] = true);

(statearr_36890_39309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (38))){
var inst_36777 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
var statearr_36895_39316 = state_36792__$1;
(statearr_36895_39316[(2)] = inst_36777);

(statearr_36895_39316[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (30))){
var inst_36729 = (state_36792[(10)]);
var inst_36741 = (state_36792[(11)]);
var inst_36732 = (state_36792[(13)]);
var inst_36762 = cljs.core.empty_QMARK_(inst_36729);
var inst_36763 = (inst_36732.cljs$core$IFn$_invoke$arity$1 ? inst_36732.cljs$core$IFn$_invoke$arity$1(inst_36741) : inst_36732.call(null,inst_36741));
var inst_36764 = cljs.core.not(inst_36763);
var inst_36765 = ((inst_36762) && (inst_36764));
var state_36792__$1 = state_36792;
var statearr_36902_39317 = state_36792__$1;
(statearr_36902_39317[(2)] = inst_36765);

(statearr_36902_39317[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (10))){
var inst_36673 = (state_36792[(8)]);
var inst_36698 = (state_36792[(2)]);
var inst_36699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36698,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36698,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36698,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36703 = inst_36673;
var state_36792__$1 = (function (){var statearr_36904 = state_36792;
(statearr_36904[(7)] = inst_36703);

(statearr_36904[(16)] = inst_36699);

(statearr_36904[(17)] = inst_36701);

(statearr_36904[(18)] = inst_36702);

return statearr_36904;
})();
var statearr_36905_39319 = state_36792__$1;
(statearr_36905_39319[(2)] = null);

(statearr_36905_39319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (18))){
var inst_36719 = (state_36792[(2)]);
var state_36792__$1 = state_36792;
var statearr_36906_39320 = state_36792__$1;
(statearr_36906_39320[(2)] = inst_36719);

(statearr_36906_39320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (37))){
var state_36792__$1 = state_36792;
var statearr_36909_39321 = state_36792__$1;
(statearr_36909_39321[(2)] = null);

(statearr_36909_39321[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36793 === (8))){
var inst_36673 = (state_36792[(8)]);
var inst_36695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_36673);
var state_36792__$1 = state_36792;
var statearr_36910_39322 = state_36792__$1;
(statearr_36910_39322[(2)] = inst_36695);

(statearr_36910_39322[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__34931__auto__ = null;
var cljs$core$async$mix_$_state_machine__34931__auto____0 = (function (){
var statearr_36914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36914[(0)] = cljs$core$async$mix_$_state_machine__34931__auto__);

(statearr_36914[(1)] = (1));

return statearr_36914;
});
var cljs$core$async$mix_$_state_machine__34931__auto____1 = (function (state_36792){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_36792);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e36916){var ex__34934__auto__ = e36916;
var statearr_36917_39325 = state_36792;
(statearr_36917_39325[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_36792[(4)]))){
var statearr_36918_39327 = state_36792;
(statearr_36918_39327[(1)] = cljs.core.first((state_36792[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39331 = state_36792;
state_36792 = G__39331;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34931__auto__ = function(state_36792){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34931__auto____1.call(this,state_36792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34931__auto____0;
cljs$core$async$mix_$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34931__auto____1;
return cljs$core$async$mix_$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_36919 = f__35186__auto__();
(statearr_36919[(6)] = c__35185__auto___39171);

return statearr_36919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36950 = arguments.length;
switch (G__36950) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__36974 = arguments.length;
switch (G__36974) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36964_SHARP_){
if(cljs.core.truth_((p1__36964_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36964_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36964_SHARP_.call(null,topic)))){
return p1__36964_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36964_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36979 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36980){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36980 = meta36980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36981,meta36980__$1){
var self__ = this;
var _36981__$1 = this;
return (new cljs.core.async.t_cljs$core$async36979(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36980__$1));
}));

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36981){
var self__ = this;
var _36981__$1 = this;
return self__.meta36980;
}));

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36979.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36980","meta36980",716700780,null)], null);
}));

(cljs.core.async.t_cljs$core$async36979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36979");

(cljs.core.async.t_cljs$core$async36979.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36979.
 */
cljs.core.async.__GT_t_cljs$core$async36979 = (function cljs$core$async$__GT_t_cljs$core$async36979(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36980){
return (new cljs.core.async.t_cljs$core$async36979(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36980));
});

}

return (new cljs.core.async.t_cljs$core$async36979(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35185__auto___39386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37096){
var state_val_37097 = (state_37096[(1)]);
if((state_val_37097 === (7))){
var inst_37091 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
var statearr_37103_39388 = state_37096__$1;
(statearr_37103_39388[(2)] = inst_37091);

(statearr_37103_39388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (20))){
var state_37096__$1 = state_37096;
var statearr_37107_39389 = state_37096__$1;
(statearr_37107_39389[(2)] = null);

(statearr_37107_39389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (1))){
var state_37096__$1 = state_37096;
var statearr_37112_39390 = state_37096__$1;
(statearr_37112_39390[(2)] = null);

(statearr_37112_39390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (24))){
var inst_37074 = (state_37096[(7)]);
var inst_37083 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_37074);
var state_37096__$1 = state_37096;
var statearr_37120_39391 = state_37096__$1;
(statearr_37120_39391[(2)] = inst_37083);

(statearr_37120_39391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (4))){
var inst_37014 = (state_37096[(8)]);
var inst_37014__$1 = (state_37096[(2)]);
var inst_37015 = (inst_37014__$1 == null);
var state_37096__$1 = (function (){var statearr_37121 = state_37096;
(statearr_37121[(8)] = inst_37014__$1);

return statearr_37121;
})();
if(cljs.core.truth_(inst_37015)){
var statearr_37122_39400 = state_37096__$1;
(statearr_37122_39400[(1)] = (5));

} else {
var statearr_37124_39401 = state_37096__$1;
(statearr_37124_39401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (15))){
var inst_37067 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
var statearr_37130_39402 = state_37096__$1;
(statearr_37130_39402[(2)] = inst_37067);

(statearr_37130_39402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (21))){
var inst_37088 = (state_37096[(2)]);
var state_37096__$1 = (function (){var statearr_37139 = state_37096;
(statearr_37139[(9)] = inst_37088);

return statearr_37139;
})();
var statearr_37142_39406 = state_37096__$1;
(statearr_37142_39406[(2)] = null);

(statearr_37142_39406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (13))){
var inst_37045 = (state_37096[(10)]);
var inst_37051 = cljs.core.chunked_seq_QMARK_(inst_37045);
var state_37096__$1 = state_37096;
if(inst_37051){
var statearr_37143_39409 = state_37096__$1;
(statearr_37143_39409[(1)] = (16));

} else {
var statearr_37148_39410 = state_37096__$1;
(statearr_37148_39410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (22))){
var inst_37080 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
if(cljs.core.truth_(inst_37080)){
var statearr_37150_39411 = state_37096__$1;
(statearr_37150_39411[(1)] = (23));

} else {
var statearr_37151_39412 = state_37096__$1;
(statearr_37151_39412[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (6))){
var inst_37014 = (state_37096[(8)]);
var inst_37076 = (state_37096[(11)]);
var inst_37074 = (state_37096[(7)]);
var inst_37074__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_37014) : topic_fn.call(null,inst_37014));
var inst_37075 = cljs.core.deref(mults);
var inst_37076__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37075,inst_37074__$1);
var state_37096__$1 = (function (){var statearr_37156 = state_37096;
(statearr_37156[(11)] = inst_37076__$1);

(statearr_37156[(7)] = inst_37074__$1);

return statearr_37156;
})();
if(cljs.core.truth_(inst_37076__$1)){
var statearr_37157_39424 = state_37096__$1;
(statearr_37157_39424[(1)] = (19));

} else {
var statearr_37159_39425 = state_37096__$1;
(statearr_37159_39425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (25))){
var inst_37085 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
var statearr_37164_39430 = state_37096__$1;
(statearr_37164_39430[(2)] = inst_37085);

(statearr_37164_39430[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (17))){
var inst_37045 = (state_37096[(10)]);
var inst_37058 = cljs.core.first(inst_37045);
var inst_37059 = cljs.core.async.muxch_STAR_(inst_37058);
var inst_37060 = cljs.core.async.close_BANG_(inst_37059);
var inst_37061 = cljs.core.next(inst_37045);
var inst_37025 = inst_37061;
var inst_37026 = null;
var inst_37027 = (0);
var inst_37028 = (0);
var state_37096__$1 = (function (){var statearr_37169 = state_37096;
(statearr_37169[(12)] = inst_37028);

(statearr_37169[(13)] = inst_37026);

(statearr_37169[(14)] = inst_37027);

(statearr_37169[(15)] = inst_37025);

(statearr_37169[(16)] = inst_37060);

return statearr_37169;
})();
var statearr_37172_39441 = state_37096__$1;
(statearr_37172_39441[(2)] = null);

(statearr_37172_39441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (3))){
var inst_37093 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37096__$1,inst_37093);
} else {
if((state_val_37097 === (12))){
var inst_37069 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
var statearr_37176_39443 = state_37096__$1;
(statearr_37176_39443[(2)] = inst_37069);

(statearr_37176_39443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (2))){
var state_37096__$1 = state_37096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37096__$1,(4),ch);
} else {
if((state_val_37097 === (23))){
var state_37096__$1 = state_37096;
var statearr_37180_39445 = state_37096__$1;
(statearr_37180_39445[(2)] = null);

(statearr_37180_39445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (19))){
var inst_37014 = (state_37096[(8)]);
var inst_37076 = (state_37096[(11)]);
var inst_37078 = cljs.core.async.muxch_STAR_(inst_37076);
var state_37096__$1 = state_37096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37096__$1,(22),inst_37078,inst_37014);
} else {
if((state_val_37097 === (11))){
var inst_37025 = (state_37096[(15)]);
var inst_37045 = (state_37096[(10)]);
var inst_37045__$1 = cljs.core.seq(inst_37025);
var state_37096__$1 = (function (){var statearr_37186 = state_37096;
(statearr_37186[(10)] = inst_37045__$1);

return statearr_37186;
})();
if(inst_37045__$1){
var statearr_37187_39447 = state_37096__$1;
(statearr_37187_39447[(1)] = (13));

} else {
var statearr_37188_39450 = state_37096__$1;
(statearr_37188_39450[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (9))){
var inst_37071 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
var statearr_37194_39451 = state_37096__$1;
(statearr_37194_39451[(2)] = inst_37071);

(statearr_37194_39451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (5))){
var inst_37021 = cljs.core.deref(mults);
var inst_37022 = cljs.core.vals(inst_37021);
var inst_37023 = cljs.core.seq(inst_37022);
var inst_37025 = inst_37023;
var inst_37026 = null;
var inst_37027 = (0);
var inst_37028 = (0);
var state_37096__$1 = (function (){var statearr_37197 = state_37096;
(statearr_37197[(12)] = inst_37028);

(statearr_37197[(13)] = inst_37026);

(statearr_37197[(14)] = inst_37027);

(statearr_37197[(15)] = inst_37025);

return statearr_37197;
})();
var statearr_37203_39458 = state_37096__$1;
(statearr_37203_39458[(2)] = null);

(statearr_37203_39458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (14))){
var state_37096__$1 = state_37096;
var statearr_37208_39460 = state_37096__$1;
(statearr_37208_39460[(2)] = null);

(statearr_37208_39460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (16))){
var inst_37045 = (state_37096[(10)]);
var inst_37053 = cljs.core.chunk_first(inst_37045);
var inst_37054 = cljs.core.chunk_rest(inst_37045);
var inst_37055 = cljs.core.count(inst_37053);
var inst_37025 = inst_37054;
var inst_37026 = inst_37053;
var inst_37027 = inst_37055;
var inst_37028 = (0);
var state_37096__$1 = (function (){var statearr_37212 = state_37096;
(statearr_37212[(12)] = inst_37028);

(statearr_37212[(13)] = inst_37026);

(statearr_37212[(14)] = inst_37027);

(statearr_37212[(15)] = inst_37025);

return statearr_37212;
})();
var statearr_37213_39465 = state_37096__$1;
(statearr_37213_39465[(2)] = null);

(statearr_37213_39465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (10))){
var inst_37028 = (state_37096[(12)]);
var inst_37026 = (state_37096[(13)]);
var inst_37027 = (state_37096[(14)]);
var inst_37025 = (state_37096[(15)]);
var inst_37038 = cljs.core._nth(inst_37026,inst_37028);
var inst_37039 = cljs.core.async.muxch_STAR_(inst_37038);
var inst_37040 = cljs.core.async.close_BANG_(inst_37039);
var inst_37041 = (inst_37028 + (1));
var tmp37205 = inst_37026;
var tmp37206 = inst_37027;
var tmp37207 = inst_37025;
var inst_37025__$1 = tmp37207;
var inst_37026__$1 = tmp37205;
var inst_37027__$1 = tmp37206;
var inst_37028__$1 = inst_37041;
var state_37096__$1 = (function (){var statearr_37220 = state_37096;
(statearr_37220[(12)] = inst_37028__$1);

(statearr_37220[(13)] = inst_37026__$1);

(statearr_37220[(14)] = inst_37027__$1);

(statearr_37220[(15)] = inst_37025__$1);

(statearr_37220[(17)] = inst_37040);

return statearr_37220;
})();
var statearr_37221_39476 = state_37096__$1;
(statearr_37221_39476[(2)] = null);

(statearr_37221_39476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (18))){
var inst_37064 = (state_37096[(2)]);
var state_37096__$1 = state_37096;
var statearr_37230_39477 = state_37096__$1;
(statearr_37230_39477[(2)] = inst_37064);

(statearr_37230_39477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37097 === (8))){
var inst_37028 = (state_37096[(12)]);
var inst_37027 = (state_37096[(14)]);
var inst_37032 = (inst_37028 < inst_37027);
var inst_37033 = inst_37032;
var state_37096__$1 = state_37096;
if(cljs.core.truth_(inst_37033)){
var statearr_37234_39483 = state_37096__$1;
(statearr_37234_39483[(1)] = (10));

} else {
var statearr_37236_39484 = state_37096__$1;
(statearr_37236_39484[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_37241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37241[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_37241[(1)] = (1));

return statearr_37241;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_37096){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37096);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37242){var ex__34934__auto__ = e37242;
var statearr_37244_39503 = state_37096;
(statearr_37244_39503[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37096[(4)]))){
var statearr_37245_39504 = state_37096;
(statearr_37245_39504[(1)] = cljs.core.first((state_37096[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39507 = state_37096;
state_37096 = G__39507;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_37096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_37096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37249 = f__35186__auto__();
(statearr_37249[(6)] = c__35185__auto___39386);

return statearr_37249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37252 = arguments.length;
switch (G__37252) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37268 = arguments.length;
switch (G__37268) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__37281 = arguments.length;
switch (G__37281) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__35185__auto___39570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37341){
var state_val_37343 = (state_37341[(1)]);
if((state_val_37343 === (7))){
var state_37341__$1 = state_37341;
var statearr_37348_39575 = state_37341__$1;
(statearr_37348_39575[(2)] = null);

(statearr_37348_39575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (1))){
var state_37341__$1 = state_37341;
var statearr_37350_39576 = state_37341__$1;
(statearr_37350_39576[(2)] = null);

(statearr_37350_39576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (4))){
var inst_37294 = (state_37341[(7)]);
var inst_37295 = (state_37341[(8)]);
var inst_37297 = (inst_37295 < inst_37294);
var state_37341__$1 = state_37341;
if(cljs.core.truth_(inst_37297)){
var statearr_37352_39577 = state_37341__$1;
(statearr_37352_39577[(1)] = (6));

} else {
var statearr_37355_39582 = state_37341__$1;
(statearr_37355_39582[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (15))){
var inst_37327 = (state_37341[(9)]);
var inst_37332 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_37327);
var state_37341__$1 = state_37341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37341__$1,(17),out,inst_37332);
} else {
if((state_val_37343 === (13))){
var inst_37327 = (state_37341[(9)]);
var inst_37327__$1 = (state_37341[(2)]);
var inst_37328 = cljs.core.some(cljs.core.nil_QMARK_,inst_37327__$1);
var state_37341__$1 = (function (){var statearr_37361 = state_37341;
(statearr_37361[(9)] = inst_37327__$1);

return statearr_37361;
})();
if(cljs.core.truth_(inst_37328)){
var statearr_37363_39590 = state_37341__$1;
(statearr_37363_39590[(1)] = (14));

} else {
var statearr_37364_39591 = state_37341__$1;
(statearr_37364_39591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (6))){
var state_37341__$1 = state_37341;
var statearr_37368_39593 = state_37341__$1;
(statearr_37368_39593[(2)] = null);

(statearr_37368_39593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (17))){
var inst_37334 = (state_37341[(2)]);
var state_37341__$1 = (function (){var statearr_37380 = state_37341;
(statearr_37380[(10)] = inst_37334);

return statearr_37380;
})();
var statearr_37381_39598 = state_37341__$1;
(statearr_37381_39598[(2)] = null);

(statearr_37381_39598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (3))){
var inst_37339 = (state_37341[(2)]);
var state_37341__$1 = state_37341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37341__$1,inst_37339);
} else {
if((state_val_37343 === (12))){
var _ = (function (){var statearr_37383 = state_37341;
(statearr_37383[(4)] = cljs.core.rest((state_37341[(4)])));

return statearr_37383;
})();
var state_37341__$1 = state_37341;
var ex37379 = (state_37341__$1[(2)]);
var statearr_37384_39604 = state_37341__$1;
(statearr_37384_39604[(5)] = ex37379);


if((ex37379 instanceof Object)){
var statearr_37389_39607 = state_37341__$1;
(statearr_37389_39607[(1)] = (11));

(statearr_37389_39607[(5)] = null);

} else {
throw ex37379;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (2))){
var inst_37293 = cljs.core.reset_BANG_(dctr,cnt);
var inst_37294 = cnt;
var inst_37295 = (0);
var state_37341__$1 = (function (){var statearr_37399 = state_37341;
(statearr_37399[(7)] = inst_37294);

(statearr_37399[(11)] = inst_37293);

(statearr_37399[(8)] = inst_37295);

return statearr_37399;
})();
var statearr_37400_39611 = state_37341__$1;
(statearr_37400_39611[(2)] = null);

(statearr_37400_39611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (11))){
var inst_37302 = (state_37341[(2)]);
var inst_37304 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_37341__$1 = (function (){var statearr_37402 = state_37341;
(statearr_37402[(12)] = inst_37302);

return statearr_37402;
})();
var statearr_37403_39613 = state_37341__$1;
(statearr_37403_39613[(2)] = inst_37304);

(statearr_37403_39613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (9))){
var inst_37295 = (state_37341[(8)]);
var _ = (function (){var statearr_37407 = state_37341;
(statearr_37407[(4)] = cljs.core.cons((12),(state_37341[(4)])));

return statearr_37407;
})();
var inst_37310 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_37295) : chs__$1.call(null,inst_37295));
var inst_37311 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_37295) : done.call(null,inst_37295));
var inst_37312 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_37310,inst_37311);
var ___$1 = (function (){var statearr_37409 = state_37341;
(statearr_37409[(4)] = cljs.core.rest((state_37341[(4)])));

return statearr_37409;
})();
var state_37341__$1 = state_37341;
var statearr_37411_39630 = state_37341__$1;
(statearr_37411_39630[(2)] = inst_37312);

(statearr_37411_39630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (5))){
var inst_37323 = (state_37341[(2)]);
var state_37341__$1 = (function (){var statearr_37415 = state_37341;
(statearr_37415[(13)] = inst_37323);

return statearr_37415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37341__$1,(13),dchan);
} else {
if((state_val_37343 === (14))){
var inst_37330 = cljs.core.async.close_BANG_(out);
var state_37341__$1 = state_37341;
var statearr_37416_39637 = state_37341__$1;
(statearr_37416_39637[(2)] = inst_37330);

(statearr_37416_39637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (16))){
var inst_37337 = (state_37341[(2)]);
var state_37341__$1 = state_37341;
var statearr_37421_39641 = state_37341__$1;
(statearr_37421_39641[(2)] = inst_37337);

(statearr_37421_39641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (10))){
var inst_37295 = (state_37341[(8)]);
var inst_37315 = (state_37341[(2)]);
var inst_37317 = (inst_37295 + (1));
var inst_37295__$1 = inst_37317;
var state_37341__$1 = (function (){var statearr_37423 = state_37341;
(statearr_37423[(14)] = inst_37315);

(statearr_37423[(8)] = inst_37295__$1);

return statearr_37423;
})();
var statearr_37424_39644 = state_37341__$1;
(statearr_37424_39644[(2)] = null);

(statearr_37424_39644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37343 === (8))){
var inst_37321 = (state_37341[(2)]);
var state_37341__$1 = state_37341;
var statearr_37426_39651 = state_37341__$1;
(statearr_37426_39651[(2)] = inst_37321);

(statearr_37426_39651[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_37427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37427[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_37427[(1)] = (1));

return statearr_37427;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_37341){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37341);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37432){var ex__34934__auto__ = e37432;
var statearr_37433_39652 = state_37341;
(statearr_37433_39652[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37341[(4)]))){
var statearr_37434_39659 = state_37341;
(statearr_37434_39659[(1)] = cljs.core.first((state_37341[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39660 = state_37341;
state_37341 = G__39660;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_37341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_37341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37440 = f__35186__auto__();
(statearr_37440[(6)] = c__35185__auto___39570);

return statearr_37440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37448 = arguments.length;
switch (G__37448) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35185__auto___39689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37493){
var state_val_37494 = (state_37493[(1)]);
if((state_val_37494 === (7))){
var inst_37469 = (state_37493[(7)]);
var inst_37468 = (state_37493[(8)]);
var inst_37468__$1 = (state_37493[(2)]);
var inst_37469__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37468__$1,(0),null);
var inst_37470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37468__$1,(1),null);
var inst_37472 = (inst_37469__$1 == null);
var state_37493__$1 = (function (){var statearr_37509 = state_37493;
(statearr_37509[(7)] = inst_37469__$1);

(statearr_37509[(9)] = inst_37470);

(statearr_37509[(8)] = inst_37468__$1);

return statearr_37509;
})();
if(cljs.core.truth_(inst_37472)){
var statearr_37510_39716 = state_37493__$1;
(statearr_37510_39716[(1)] = (8));

} else {
var statearr_37518_39717 = state_37493__$1;
(statearr_37518_39717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (1))){
var inst_37456 = cljs.core.vec(chs);
var inst_37457 = inst_37456;
var state_37493__$1 = (function (){var statearr_37521 = state_37493;
(statearr_37521[(10)] = inst_37457);

return statearr_37521;
})();
var statearr_37523_39725 = state_37493__$1;
(statearr_37523_39725[(2)] = null);

(statearr_37523_39725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (4))){
var inst_37457 = (state_37493[(10)]);
var state_37493__$1 = state_37493;
return cljs.core.async.ioc_alts_BANG_(state_37493__$1,(7),inst_37457);
} else {
if((state_val_37494 === (6))){
var inst_37487 = (state_37493[(2)]);
var state_37493__$1 = state_37493;
var statearr_37525_39738 = state_37493__$1;
(statearr_37525_39738[(2)] = inst_37487);

(statearr_37525_39738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (3))){
var inst_37489 = (state_37493[(2)]);
var state_37493__$1 = state_37493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37493__$1,inst_37489);
} else {
if((state_val_37494 === (2))){
var inst_37457 = (state_37493[(10)]);
var inst_37460 = cljs.core.count(inst_37457);
var inst_37461 = (inst_37460 > (0));
var state_37493__$1 = state_37493;
if(cljs.core.truth_(inst_37461)){
var statearr_37534_39763 = state_37493__$1;
(statearr_37534_39763[(1)] = (4));

} else {
var statearr_37536_39769 = state_37493__$1;
(statearr_37536_39769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (11))){
var inst_37457 = (state_37493[(10)]);
var inst_37480 = (state_37493[(2)]);
var tmp37526 = inst_37457;
var inst_37457__$1 = tmp37526;
var state_37493__$1 = (function (){var statearr_37541 = state_37493;
(statearr_37541[(10)] = inst_37457__$1);

(statearr_37541[(11)] = inst_37480);

return statearr_37541;
})();
var statearr_37542_39785 = state_37493__$1;
(statearr_37542_39785[(2)] = null);

(statearr_37542_39785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (9))){
var inst_37469 = (state_37493[(7)]);
var state_37493__$1 = state_37493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37493__$1,(11),out,inst_37469);
} else {
if((state_val_37494 === (5))){
var inst_37485 = cljs.core.async.close_BANG_(out);
var state_37493__$1 = state_37493;
var statearr_37552_39802 = state_37493__$1;
(statearr_37552_39802[(2)] = inst_37485);

(statearr_37552_39802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (10))){
var inst_37483 = (state_37493[(2)]);
var state_37493__$1 = state_37493;
var statearr_37553_39804 = state_37493__$1;
(statearr_37553_39804[(2)] = inst_37483);

(statearr_37553_39804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37494 === (8))){
var inst_37469 = (state_37493[(7)]);
var inst_37470 = (state_37493[(9)]);
var inst_37457 = (state_37493[(10)]);
var inst_37468 = (state_37493[(8)]);
var inst_37474 = (function (){var cs = inst_37457;
var vec__37464 = inst_37468;
var v = inst_37469;
var c = inst_37470;
return (function (p1__37444_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__37444_SHARP_);
});
})();
var inst_37475 = cljs.core.filterv(inst_37474,inst_37457);
var inst_37457__$1 = inst_37475;
var state_37493__$1 = (function (){var statearr_37555 = state_37493;
(statearr_37555[(10)] = inst_37457__$1);

return statearr_37555;
})();
var statearr_37556_39814 = state_37493__$1;
(statearr_37556_39814[(2)] = null);

(statearr_37556_39814[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_37560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37560[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_37560[(1)] = (1));

return statearr_37560;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_37493){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37493);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37562){var ex__34934__auto__ = e37562;
var statearr_37563_39828 = state_37493;
(statearr_37563_39828[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37493[(4)]))){
var statearr_37565_39833 = state_37493;
(statearr_37565_39833[(1)] = cljs.core.first((state_37493[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39838 = state_37493;
state_37493 = G__39838;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_37493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_37493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37567 = f__35186__auto__();
(statearr_37567[(6)] = c__35185__auto___39689);

return statearr_37567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37574 = arguments.length;
switch (G__37574) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35185__auto___39853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37609){
var state_val_37611 = (state_37609[(1)]);
if((state_val_37611 === (7))){
var inst_37585 = (state_37609[(7)]);
var inst_37585__$1 = (state_37609[(2)]);
var inst_37587 = (inst_37585__$1 == null);
var inst_37588 = cljs.core.not(inst_37587);
var state_37609__$1 = (function (){var statearr_37619 = state_37609;
(statearr_37619[(7)] = inst_37585__$1);

return statearr_37619;
})();
if(inst_37588){
var statearr_37621_39857 = state_37609__$1;
(statearr_37621_39857[(1)] = (8));

} else {
var statearr_37623_39858 = state_37609__$1;
(statearr_37623_39858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (1))){
var inst_37580 = (0);
var state_37609__$1 = (function (){var statearr_37625 = state_37609;
(statearr_37625[(8)] = inst_37580);

return statearr_37625;
})();
var statearr_37626_39860 = state_37609__$1;
(statearr_37626_39860[(2)] = null);

(statearr_37626_39860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (4))){
var state_37609__$1 = state_37609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37609__$1,(7),ch);
} else {
if((state_val_37611 === (6))){
var inst_37601 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37630_39871 = state_37609__$1;
(statearr_37630_39871[(2)] = inst_37601);

(statearr_37630_39871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (3))){
var inst_37603 = (state_37609[(2)]);
var inst_37604 = cljs.core.async.close_BANG_(out);
var state_37609__$1 = (function (){var statearr_37635 = state_37609;
(statearr_37635[(9)] = inst_37603);

return statearr_37635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37609__$1,inst_37604);
} else {
if((state_val_37611 === (2))){
var inst_37580 = (state_37609[(8)]);
var inst_37582 = (inst_37580 < n);
var state_37609__$1 = state_37609;
if(cljs.core.truth_(inst_37582)){
var statearr_37637_39879 = state_37609__$1;
(statearr_37637_39879[(1)] = (4));

} else {
var statearr_37639_39880 = state_37609__$1;
(statearr_37639_39880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (11))){
var inst_37580 = (state_37609[(8)]);
var inst_37591 = (state_37609[(2)]);
var inst_37593 = (inst_37580 + (1));
var inst_37580__$1 = inst_37593;
var state_37609__$1 = (function (){var statearr_37640 = state_37609;
(statearr_37640[(10)] = inst_37591);

(statearr_37640[(8)] = inst_37580__$1);

return statearr_37640;
})();
var statearr_37641_39886 = state_37609__$1;
(statearr_37641_39886[(2)] = null);

(statearr_37641_39886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (9))){
var state_37609__$1 = state_37609;
var statearr_37645_39889 = state_37609__$1;
(statearr_37645_39889[(2)] = null);

(statearr_37645_39889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (5))){
var state_37609__$1 = state_37609;
var statearr_37646_39894 = state_37609__$1;
(statearr_37646_39894[(2)] = null);

(statearr_37646_39894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (10))){
var inst_37597 = (state_37609[(2)]);
var state_37609__$1 = state_37609;
var statearr_37649_39904 = state_37609__$1;
(statearr_37649_39904[(2)] = inst_37597);

(statearr_37649_39904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37611 === (8))){
var inst_37585 = (state_37609[(7)]);
var state_37609__$1 = state_37609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37609__$1,(11),out,inst_37585);
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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_37653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37653[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_37653[(1)] = (1));

return statearr_37653;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_37609){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37609);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37654){var ex__34934__auto__ = e37654;
var statearr_37656_39925 = state_37609;
(statearr_37656_39925[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37609[(4)]))){
var statearr_37658_39931 = state_37609;
(statearr_37658_39931[(1)] = cljs.core.first((state_37609[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39937 = state_37609;
state_37609 = G__39937;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_37609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_37609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37659 = f__35186__auto__();
(statearr_37659[(6)] = c__35185__auto___39853);

return statearr_37659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37661 = (function (f,ch,meta37662){
this.f = f;
this.ch = ch;
this.meta37662 = meta37662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37663,meta37662__$1){
var self__ = this;
var _37663__$1 = this;
return (new cljs.core.async.t_cljs$core$async37661(self__.f,self__.ch,meta37662__$1));
}));

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37663){
var self__ = this;
var _37663__$1 = this;
return self__.meta37662;
}));

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37668 = (function (f,ch,meta37662,_,fn1,meta37669){
this.f = f;
this.ch = ch;
this.meta37662 = meta37662;
this._ = _;
this.fn1 = fn1;
this.meta37669 = meta37669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37670,meta37669__$1){
var self__ = this;
var _37670__$1 = this;
return (new cljs.core.async.t_cljs$core$async37668(self__.f,self__.ch,self__.meta37662,self__._,self__.fn1,meta37669__$1));
}));

(cljs.core.async.t_cljs$core$async37668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37670){
var self__ = this;
var _37670__$1 = this;
return self__.meta37669;
}));

(cljs.core.async.t_cljs$core$async37668.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async37668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__37660_SHARP_){
var G__37672 = (((p1__37660_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37660_SHARP_) : self__.f.call(null,p1__37660_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__37672) : f1.call(null,G__37672));
});
}));

(cljs.core.async.t_cljs$core$async37668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37662","meta37662",-999681081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37661","cljs.core.async/t_cljs$core$async37661",-1664144032,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37669","meta37669",972040855,null)], null);
}));

(cljs.core.async.t_cljs$core$async37668.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37668");

(cljs.core.async.t_cljs$core$async37668.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37668");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37668.
 */
cljs.core.async.__GT_t_cljs$core$async37668 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37668(f__$1,ch__$1,meta37662__$1,___$2,fn1__$1,meta37669){
return (new cljs.core.async.t_cljs$core$async37668(f__$1,ch__$1,meta37662__$1,___$2,fn1__$1,meta37669));
});

}

return (new cljs.core.async.t_cljs$core$async37668(self__.f,self__.ch,self__.meta37662,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__37675 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37675) : self__.f.call(null,G__37675));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async37661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37662","meta37662",-999681081,null)], null);
}));

(cljs.core.async.t_cljs$core$async37661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37661");

(cljs.core.async.t_cljs$core$async37661.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37661.
 */
cljs.core.async.__GT_t_cljs$core$async37661 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37661(f__$1,ch__$1,meta37662){
return (new cljs.core.async.t_cljs$core$async37661(f__$1,ch__$1,meta37662));
});

}

return (new cljs.core.async.t_cljs$core$async37661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37676 = (function (f,ch,meta37677){
this.f = f;
this.ch = ch;
this.meta37677 = meta37677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37678,meta37677__$1){
var self__ = this;
var _37678__$1 = this;
return (new cljs.core.async.t_cljs$core$async37676(self__.f,self__.ch,meta37677__$1));
}));

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37678){
var self__ = this;
var _37678__$1 = this;
return self__.meta37677;
}));

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async37676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37677","meta37677",786130453,null)], null);
}));

(cljs.core.async.t_cljs$core$async37676.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37676");

(cljs.core.async.t_cljs$core$async37676.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37676");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37676.
 */
cljs.core.async.__GT_t_cljs$core$async37676 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37676(f__$1,ch__$1,meta37677){
return (new cljs.core.async.t_cljs$core$async37676(f__$1,ch__$1,meta37677));
});

}

return (new cljs.core.async.t_cljs$core$async37676(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37685 = (function (p,ch,meta37686){
this.p = p;
this.ch = ch;
this.meta37686 = meta37686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37687,meta37686__$1){
var self__ = this;
var _37687__$1 = this;
return (new cljs.core.async.t_cljs$core$async37685(self__.p,self__.ch,meta37686__$1));
}));

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37687){
var self__ = this;
var _37687__$1 = this;
return self__.meta37686;
}));

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async37685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37686","meta37686",263989312,null)], null);
}));

(cljs.core.async.t_cljs$core$async37685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37685");

(cljs.core.async.t_cljs$core$async37685.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37685.
 */
cljs.core.async.__GT_t_cljs$core$async37685 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37685(p__$1,ch__$1,meta37686){
return (new cljs.core.async.t_cljs$core$async37685(p__$1,ch__$1,meta37686));
});

}

return (new cljs.core.async.t_cljs$core$async37685(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37692 = arguments.length;
switch (G__37692) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35185__auto___40047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37717){
var state_val_37718 = (state_37717[(1)]);
if((state_val_37718 === (7))){
var inst_37713 = (state_37717[(2)]);
var state_37717__$1 = state_37717;
var statearr_37719_40053 = state_37717__$1;
(statearr_37719_40053[(2)] = inst_37713);

(statearr_37719_40053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (1))){
var state_37717__$1 = state_37717;
var statearr_37720_40054 = state_37717__$1;
(statearr_37720_40054[(2)] = null);

(statearr_37720_40054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (4))){
var inst_37697 = (state_37717[(7)]);
var inst_37697__$1 = (state_37717[(2)]);
var inst_37700 = (inst_37697__$1 == null);
var state_37717__$1 = (function (){var statearr_37721 = state_37717;
(statearr_37721[(7)] = inst_37697__$1);

return statearr_37721;
})();
if(cljs.core.truth_(inst_37700)){
var statearr_37722_40066 = state_37717__$1;
(statearr_37722_40066[(1)] = (5));

} else {
var statearr_37723_40067 = state_37717__$1;
(statearr_37723_40067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (6))){
var inst_37697 = (state_37717[(7)]);
var inst_37704 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37697) : p.call(null,inst_37697));
var state_37717__$1 = state_37717;
if(cljs.core.truth_(inst_37704)){
var statearr_37724_40070 = state_37717__$1;
(statearr_37724_40070[(1)] = (8));

} else {
var statearr_37725_40076 = state_37717__$1;
(statearr_37725_40076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (3))){
var inst_37715 = (state_37717[(2)]);
var state_37717__$1 = state_37717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37717__$1,inst_37715);
} else {
if((state_val_37718 === (2))){
var state_37717__$1 = state_37717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37717__$1,(4),ch);
} else {
if((state_val_37718 === (11))){
var inst_37707 = (state_37717[(2)]);
var state_37717__$1 = state_37717;
var statearr_37726_40085 = state_37717__$1;
(statearr_37726_40085[(2)] = inst_37707);

(statearr_37726_40085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (9))){
var state_37717__$1 = state_37717;
var statearr_37728_40091 = state_37717__$1;
(statearr_37728_40091[(2)] = null);

(statearr_37728_40091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (5))){
var inst_37702 = cljs.core.async.close_BANG_(out);
var state_37717__$1 = state_37717;
var statearr_37732_40097 = state_37717__$1;
(statearr_37732_40097[(2)] = inst_37702);

(statearr_37732_40097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (10))){
var inst_37710 = (state_37717[(2)]);
var state_37717__$1 = (function (){var statearr_37733 = state_37717;
(statearr_37733[(8)] = inst_37710);

return statearr_37733;
})();
var statearr_37734_40100 = state_37717__$1;
(statearr_37734_40100[(2)] = null);

(statearr_37734_40100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37718 === (8))){
var inst_37697 = (state_37717[(7)]);
var state_37717__$1 = state_37717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37717__$1,(11),out,inst_37697);
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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_37735 = [null,null,null,null,null,null,null,null,null];
(statearr_37735[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_37735[(1)] = (1));

return statearr_37735;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_37717){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37717);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37736){var ex__34934__auto__ = e37736;
var statearr_37737_40106 = state_37717;
(statearr_37737_40106[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37717[(4)]))){
var statearr_37738_40107 = state_37717;
(statearr_37738_40107[(1)] = cljs.core.first((state_37717[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40110 = state_37717;
state_37717 = G__40110;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_37717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_37717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37739 = f__35186__auto__();
(statearr_37739[(6)] = c__35185__auto___40047);

return statearr_37739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37742 = arguments.length;
switch (G__37742) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37813){
var state_val_37814 = (state_37813[(1)]);
if((state_val_37814 === (7))){
var inst_37809 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
var statearr_37818_40129 = state_37813__$1;
(statearr_37818_40129[(2)] = inst_37809);

(statearr_37818_40129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (20))){
var inst_37773 = (state_37813[(7)]);
var inst_37790 = (state_37813[(2)]);
var inst_37791 = cljs.core.next(inst_37773);
var inst_37758 = inst_37791;
var inst_37759 = null;
var inst_37760 = (0);
var inst_37761 = (0);
var state_37813__$1 = (function (){var statearr_37819 = state_37813;
(statearr_37819[(8)] = inst_37758);

(statearr_37819[(9)] = inst_37759);

(statearr_37819[(10)] = inst_37790);

(statearr_37819[(11)] = inst_37760);

(statearr_37819[(12)] = inst_37761);

return statearr_37819;
})();
var statearr_37821_40131 = state_37813__$1;
(statearr_37821_40131[(2)] = null);

(statearr_37821_40131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (1))){
var state_37813__$1 = state_37813;
var statearr_37822_40134 = state_37813__$1;
(statearr_37822_40134[(2)] = null);

(statearr_37822_40134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (4))){
var inst_37746 = (state_37813[(13)]);
var inst_37746__$1 = (state_37813[(2)]);
var inst_37747 = (inst_37746__$1 == null);
var state_37813__$1 = (function (){var statearr_37823 = state_37813;
(statearr_37823[(13)] = inst_37746__$1);

return statearr_37823;
})();
if(cljs.core.truth_(inst_37747)){
var statearr_37824_40142 = state_37813__$1;
(statearr_37824_40142[(1)] = (5));

} else {
var statearr_37825_40143 = state_37813__$1;
(statearr_37825_40143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (15))){
var state_37813__$1 = state_37813;
var statearr_37829_40145 = state_37813__$1;
(statearr_37829_40145[(2)] = null);

(statearr_37829_40145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (21))){
var state_37813__$1 = state_37813;
var statearr_37832_40146 = state_37813__$1;
(statearr_37832_40146[(2)] = null);

(statearr_37832_40146[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (13))){
var inst_37758 = (state_37813[(8)]);
var inst_37759 = (state_37813[(9)]);
var inst_37760 = (state_37813[(11)]);
var inst_37761 = (state_37813[(12)]);
var inst_37769 = (state_37813[(2)]);
var inst_37770 = (inst_37761 + (1));
var tmp37826 = inst_37758;
var tmp37827 = inst_37759;
var tmp37828 = inst_37760;
var inst_37758__$1 = tmp37826;
var inst_37759__$1 = tmp37827;
var inst_37760__$1 = tmp37828;
var inst_37761__$1 = inst_37770;
var state_37813__$1 = (function (){var statearr_37836 = state_37813;
(statearr_37836[(8)] = inst_37758__$1);

(statearr_37836[(9)] = inst_37759__$1);

(statearr_37836[(14)] = inst_37769);

(statearr_37836[(11)] = inst_37760__$1);

(statearr_37836[(12)] = inst_37761__$1);

return statearr_37836;
})();
var statearr_37837_40156 = state_37813__$1;
(statearr_37837_40156[(2)] = null);

(statearr_37837_40156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (22))){
var state_37813__$1 = state_37813;
var statearr_37838_40166 = state_37813__$1;
(statearr_37838_40166[(2)] = null);

(statearr_37838_40166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (6))){
var inst_37746 = (state_37813[(13)]);
var inst_37756 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37746) : f.call(null,inst_37746));
var inst_37757 = cljs.core.seq(inst_37756);
var inst_37758 = inst_37757;
var inst_37759 = null;
var inst_37760 = (0);
var inst_37761 = (0);
var state_37813__$1 = (function (){var statearr_37842 = state_37813;
(statearr_37842[(8)] = inst_37758);

(statearr_37842[(9)] = inst_37759);

(statearr_37842[(11)] = inst_37760);

(statearr_37842[(12)] = inst_37761);

return statearr_37842;
})();
var statearr_37843_40174 = state_37813__$1;
(statearr_37843_40174[(2)] = null);

(statearr_37843_40174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (17))){
var inst_37773 = (state_37813[(7)]);
var inst_37782 = cljs.core.chunk_first(inst_37773);
var inst_37783 = cljs.core.chunk_rest(inst_37773);
var inst_37784 = cljs.core.count(inst_37782);
var inst_37758 = inst_37783;
var inst_37759 = inst_37782;
var inst_37760 = inst_37784;
var inst_37761 = (0);
var state_37813__$1 = (function (){var statearr_37845 = state_37813;
(statearr_37845[(8)] = inst_37758);

(statearr_37845[(9)] = inst_37759);

(statearr_37845[(11)] = inst_37760);

(statearr_37845[(12)] = inst_37761);

return statearr_37845;
})();
var statearr_37846_40180 = state_37813__$1;
(statearr_37846_40180[(2)] = null);

(statearr_37846_40180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (3))){
var inst_37811 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37813__$1,inst_37811);
} else {
if((state_val_37814 === (12))){
var inst_37799 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
var statearr_37855_40182 = state_37813__$1;
(statearr_37855_40182[(2)] = inst_37799);

(statearr_37855_40182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (2))){
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37813__$1,(4),in$);
} else {
if((state_val_37814 === (23))){
var inst_37807 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
var statearr_37858_40185 = state_37813__$1;
(statearr_37858_40185[(2)] = inst_37807);

(statearr_37858_40185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (19))){
var inst_37794 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
var statearr_37860_40186 = state_37813__$1;
(statearr_37860_40186[(2)] = inst_37794);

(statearr_37860_40186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (11))){
var inst_37773 = (state_37813[(7)]);
var inst_37758 = (state_37813[(8)]);
var inst_37773__$1 = cljs.core.seq(inst_37758);
var state_37813__$1 = (function (){var statearr_37861 = state_37813;
(statearr_37861[(7)] = inst_37773__$1);

return statearr_37861;
})();
if(inst_37773__$1){
var statearr_37863_40189 = state_37813__$1;
(statearr_37863_40189[(1)] = (14));

} else {
var statearr_37864_40191 = state_37813__$1;
(statearr_37864_40191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (9))){
var inst_37801 = (state_37813[(2)]);
var inst_37802 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_37813__$1 = (function (){var statearr_37865 = state_37813;
(statearr_37865[(15)] = inst_37801);

return statearr_37865;
})();
if(cljs.core.truth_(inst_37802)){
var statearr_37866_40194 = state_37813__$1;
(statearr_37866_40194[(1)] = (21));

} else {
var statearr_37871_40195 = state_37813__$1;
(statearr_37871_40195[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (5))){
var inst_37749 = cljs.core.async.close_BANG_(out);
var state_37813__$1 = state_37813;
var statearr_37872_40199 = state_37813__$1;
(statearr_37872_40199[(2)] = inst_37749);

(statearr_37872_40199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (14))){
var inst_37773 = (state_37813[(7)]);
var inst_37777 = cljs.core.chunked_seq_QMARK_(inst_37773);
var state_37813__$1 = state_37813;
if(inst_37777){
var statearr_37873_40207 = state_37813__$1;
(statearr_37873_40207[(1)] = (17));

} else {
var statearr_37874_40208 = state_37813__$1;
(statearr_37874_40208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (16))){
var inst_37797 = (state_37813[(2)]);
var state_37813__$1 = state_37813;
var statearr_37877_40213 = state_37813__$1;
(statearr_37877_40213[(2)] = inst_37797);

(statearr_37877_40213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37814 === (10))){
var inst_37759 = (state_37813[(9)]);
var inst_37761 = (state_37813[(12)]);
var inst_37767 = cljs.core._nth(inst_37759,inst_37761);
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37813__$1,(13),out,inst_37767);
} else {
if((state_val_37814 === (18))){
var inst_37773 = (state_37813[(7)]);
var inst_37788 = cljs.core.first(inst_37773);
var state_37813__$1 = state_37813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37813__$1,(20),out,inst_37788);
} else {
if((state_val_37814 === (8))){
var inst_37760 = (state_37813[(11)]);
var inst_37761 = (state_37813[(12)]);
var inst_37763 = (inst_37761 < inst_37760);
var inst_37764 = inst_37763;
var state_37813__$1 = state_37813;
if(cljs.core.truth_(inst_37764)){
var statearr_37881_40231 = state_37813__$1;
(statearr_37881_40231[(1)] = (10));

} else {
var statearr_37882_40232 = state_37813__$1;
(statearr_37882_40232[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34931__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34931__auto____0 = (function (){
var statearr_37883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37883[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34931__auto__);

(statearr_37883[(1)] = (1));

return statearr_37883;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34931__auto____1 = (function (state_37813){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37813);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37885){var ex__34934__auto__ = e37885;
var statearr_37886_40238 = state_37813;
(statearr_37886_40238[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37813[(4)]))){
var statearr_37887_40240 = state_37813;
(statearr_37887_40240[(1)] = cljs.core.first((state_37813[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40244 = state_37813;
state_37813 = G__40244;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34931__auto__ = function(state_37813){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34931__auto____1.call(this,state_37813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34931__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34931__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37888 = f__35186__auto__();
(statearr_37888[(6)] = c__35185__auto__);

return statearr_37888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));

return c__35185__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37891 = arguments.length;
switch (G__37891) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37894 = arguments.length;
switch (G__37894) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37903 = arguments.length;
switch (G__37903) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35185__auto___40298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_37932){
var state_val_37933 = (state_37932[(1)]);
if((state_val_37933 === (7))){
var inst_37927 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37935_40302 = state_37932__$1;
(statearr_37935_40302[(2)] = inst_37927);

(statearr_37935_40302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (1))){
var inst_37906 = null;
var state_37932__$1 = (function (){var statearr_37936 = state_37932;
(statearr_37936[(7)] = inst_37906);

return statearr_37936;
})();
var statearr_37938_40308 = state_37932__$1;
(statearr_37938_40308[(2)] = null);

(statearr_37938_40308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (4))){
var inst_37912 = (state_37932[(8)]);
var inst_37912__$1 = (state_37932[(2)]);
var inst_37913 = (inst_37912__$1 == null);
var inst_37914 = cljs.core.not(inst_37913);
var state_37932__$1 = (function (){var statearr_37941 = state_37932;
(statearr_37941[(8)] = inst_37912__$1);

return statearr_37941;
})();
if(inst_37914){
var statearr_37943_40331 = state_37932__$1;
(statearr_37943_40331[(1)] = (5));

} else {
var statearr_37944_40337 = state_37932__$1;
(statearr_37944_40337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (6))){
var state_37932__$1 = state_37932;
var statearr_37945_40347 = state_37932__$1;
(statearr_37945_40347[(2)] = null);

(statearr_37945_40347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (3))){
var inst_37929 = (state_37932[(2)]);
var inst_37930 = cljs.core.async.close_BANG_(out);
var state_37932__$1 = (function (){var statearr_37946 = state_37932;
(statearr_37946[(9)] = inst_37929);

return statearr_37946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37932__$1,inst_37930);
} else {
if((state_val_37933 === (2))){
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37932__$1,(4),ch);
} else {
if((state_val_37933 === (11))){
var inst_37912 = (state_37932[(8)]);
var inst_37921 = (state_37932[(2)]);
var inst_37906 = inst_37912;
var state_37932__$1 = (function (){var statearr_37947 = state_37932;
(statearr_37947[(7)] = inst_37906);

(statearr_37947[(10)] = inst_37921);

return statearr_37947;
})();
var statearr_37948_40366 = state_37932__$1;
(statearr_37948_40366[(2)] = null);

(statearr_37948_40366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (9))){
var inst_37912 = (state_37932[(8)]);
var state_37932__$1 = state_37932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37932__$1,(11),out,inst_37912);
} else {
if((state_val_37933 === (5))){
var inst_37912 = (state_37932[(8)]);
var inst_37906 = (state_37932[(7)]);
var inst_37916 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37912,inst_37906);
var state_37932__$1 = state_37932;
if(inst_37916){
var statearr_37952_40369 = state_37932__$1;
(statearr_37952_40369[(1)] = (8));

} else {
var statearr_37953_40372 = state_37932__$1;
(statearr_37953_40372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (10))){
var inst_37924 = (state_37932[(2)]);
var state_37932__$1 = state_37932;
var statearr_37954_40374 = state_37932__$1;
(statearr_37954_40374[(2)] = inst_37924);

(statearr_37954_40374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37933 === (8))){
var inst_37906 = (state_37932[(7)]);
var tmp37949 = inst_37906;
var inst_37906__$1 = tmp37949;
var state_37932__$1 = (function (){var statearr_37955 = state_37932;
(statearr_37955[(7)] = inst_37906__$1);

return statearr_37955;
})();
var statearr_37956_40376 = state_37932__$1;
(statearr_37956_40376[(2)] = null);

(statearr_37956_40376[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_37961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37961[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_37961[(1)] = (1));

return statearr_37961;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_37932){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_37932);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e37963){var ex__34934__auto__ = e37963;
var statearr_37964_40379 = state_37932;
(statearr_37964_40379[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_37932[(4)]))){
var statearr_37965_40381 = state_37932;
(statearr_37965_40381[(1)] = cljs.core.first((state_37932[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40383 = state_37932;
state_37932 = G__40383;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_37932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_37932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_37970 = f__35186__auto__();
(statearr_37970[(6)] = c__35185__auto___40298);

return statearr_37970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37982 = arguments.length;
switch (G__37982) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35185__auto___40390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_38025){
var state_val_38026 = (state_38025[(1)]);
if((state_val_38026 === (7))){
var inst_38020 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38029_40391 = state_38025__$1;
(statearr_38029_40391[(2)] = inst_38020);

(statearr_38029_40391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (1))){
var inst_37987 = (new Array(n));
var inst_37988 = inst_37987;
var inst_37989 = (0);
var state_38025__$1 = (function (){var statearr_38031 = state_38025;
(statearr_38031[(7)] = inst_37988);

(statearr_38031[(8)] = inst_37989);

return statearr_38031;
})();
var statearr_38032_40397 = state_38025__$1;
(statearr_38032_40397[(2)] = null);

(statearr_38032_40397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (4))){
var inst_37992 = (state_38025[(9)]);
var inst_37992__$1 = (state_38025[(2)]);
var inst_37993 = (inst_37992__$1 == null);
var inst_37994 = cljs.core.not(inst_37993);
var state_38025__$1 = (function (){var statearr_38033 = state_38025;
(statearr_38033[(9)] = inst_37992__$1);

return statearr_38033;
})();
if(inst_37994){
var statearr_38034_40404 = state_38025__$1;
(statearr_38034_40404[(1)] = (5));

} else {
var statearr_38035_40405 = state_38025__$1;
(statearr_38035_40405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (15))){
var inst_38014 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38036_40406 = state_38025__$1;
(statearr_38036_40406[(2)] = inst_38014);

(statearr_38036_40406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (13))){
var state_38025__$1 = state_38025;
var statearr_38037_40407 = state_38025__$1;
(statearr_38037_40407[(2)] = null);

(statearr_38037_40407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (6))){
var inst_37989 = (state_38025[(8)]);
var inst_38010 = (inst_37989 > (0));
var state_38025__$1 = state_38025;
if(cljs.core.truth_(inst_38010)){
var statearr_38038_40408 = state_38025__$1;
(statearr_38038_40408[(1)] = (12));

} else {
var statearr_38039_40409 = state_38025__$1;
(statearr_38039_40409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (3))){
var inst_38022 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38025__$1,inst_38022);
} else {
if((state_val_38026 === (12))){
var inst_37988 = (state_38025[(7)]);
var inst_38012 = cljs.core.vec(inst_37988);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38025__$1,(15),out,inst_38012);
} else {
if((state_val_38026 === (2))){
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38025__$1,(4),ch);
} else {
if((state_val_38026 === (11))){
var inst_38004 = (state_38025[(2)]);
var inst_38005 = (new Array(n));
var inst_37988 = inst_38005;
var inst_37989 = (0);
var state_38025__$1 = (function (){var statearr_38040 = state_38025;
(statearr_38040[(7)] = inst_37988);

(statearr_38040[(8)] = inst_37989);

(statearr_38040[(10)] = inst_38004);

return statearr_38040;
})();
var statearr_38041_40412 = state_38025__$1;
(statearr_38041_40412[(2)] = null);

(statearr_38041_40412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (9))){
var inst_37988 = (state_38025[(7)]);
var inst_38002 = cljs.core.vec(inst_37988);
var state_38025__$1 = state_38025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38025__$1,(11),out,inst_38002);
} else {
if((state_val_38026 === (5))){
var inst_37997 = (state_38025[(11)]);
var inst_37988 = (state_38025[(7)]);
var inst_37992 = (state_38025[(9)]);
var inst_37989 = (state_38025[(8)]);
var inst_37996 = (inst_37988[inst_37989] = inst_37992);
var inst_37997__$1 = (inst_37989 + (1));
var inst_37998 = (inst_37997__$1 < n);
var state_38025__$1 = (function (){var statearr_38044 = state_38025;
(statearr_38044[(11)] = inst_37997__$1);

(statearr_38044[(12)] = inst_37996);

return statearr_38044;
})();
if(cljs.core.truth_(inst_37998)){
var statearr_38045_40415 = state_38025__$1;
(statearr_38045_40415[(1)] = (8));

} else {
var statearr_38046_40416 = state_38025__$1;
(statearr_38046_40416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (14))){
var inst_38017 = (state_38025[(2)]);
var inst_38018 = cljs.core.async.close_BANG_(out);
var state_38025__$1 = (function (){var statearr_38048 = state_38025;
(statearr_38048[(13)] = inst_38017);

return statearr_38048;
})();
var statearr_38053_40419 = state_38025__$1;
(statearr_38053_40419[(2)] = inst_38018);

(statearr_38053_40419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (10))){
var inst_38008 = (state_38025[(2)]);
var state_38025__$1 = state_38025;
var statearr_38055_40421 = state_38025__$1;
(statearr_38055_40421[(2)] = inst_38008);

(statearr_38055_40421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38026 === (8))){
var inst_37997 = (state_38025[(11)]);
var inst_37988 = (state_38025[(7)]);
var tmp38047 = inst_37988;
var inst_37988__$1 = tmp38047;
var inst_37989 = inst_37997;
var state_38025__$1 = (function (){var statearr_38061 = state_38025;
(statearr_38061[(7)] = inst_37988__$1);

(statearr_38061[(8)] = inst_37989);

return statearr_38061;
})();
var statearr_38063_40423 = state_38025__$1;
(statearr_38063_40423[(2)] = null);

(statearr_38063_40423[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_38067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38067[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_38067[(1)] = (1));

return statearr_38067;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_38025){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_38025);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e38068){var ex__34934__auto__ = e38068;
var statearr_38069_40424 = state_38025;
(statearr_38069_40424[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_38025[(4)]))){
var statearr_38070_40425 = state_38025;
(statearr_38070_40425[(1)] = cljs.core.first((state_38025[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40426 = state_38025;
state_38025 = G__40426;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_38025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_38025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_38071 = f__35186__auto__();
(statearr_38071[(6)] = c__35185__auto___40390);

return statearr_38071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38089 = arguments.length;
switch (G__38089) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__35185__auto___40434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_38143){
var state_val_38144 = (state_38143[(1)]);
if((state_val_38144 === (7))){
var inst_38139 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38147_40439 = state_38143__$1;
(statearr_38147_40439[(2)] = inst_38139);

(statearr_38147_40439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (1))){
var inst_38094 = [];
var inst_38095 = inst_38094;
var inst_38096 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38143__$1 = (function (){var statearr_38148 = state_38143;
(statearr_38148[(7)] = inst_38096);

(statearr_38148[(8)] = inst_38095);

return statearr_38148;
})();
var statearr_38149_40440 = state_38143__$1;
(statearr_38149_40440[(2)] = null);

(statearr_38149_40440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (4))){
var inst_38102 = (state_38143[(9)]);
var inst_38102__$1 = (state_38143[(2)]);
var inst_38103 = (inst_38102__$1 == null);
var inst_38104 = cljs.core.not(inst_38103);
var state_38143__$1 = (function (){var statearr_38150 = state_38143;
(statearr_38150[(9)] = inst_38102__$1);

return statearr_38150;
})();
if(inst_38104){
var statearr_38151_40441 = state_38143__$1;
(statearr_38151_40441[(1)] = (5));

} else {
var statearr_38153_40443 = state_38143__$1;
(statearr_38153_40443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (15))){
var inst_38133 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38158_40444 = state_38143__$1;
(statearr_38158_40444[(2)] = inst_38133);

(statearr_38158_40444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (13))){
var state_38143__$1 = state_38143;
var statearr_38159_40449 = state_38143__$1;
(statearr_38159_40449[(2)] = null);

(statearr_38159_40449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (6))){
var inst_38095 = (state_38143[(8)]);
var inst_38128 = inst_38095.length;
var inst_38129 = (inst_38128 > (0));
var state_38143__$1 = state_38143;
if(cljs.core.truth_(inst_38129)){
var statearr_38164_40453 = state_38143__$1;
(statearr_38164_40453[(1)] = (12));

} else {
var statearr_38165_40454 = state_38143__$1;
(statearr_38165_40454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (3))){
var inst_38141 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38143__$1,inst_38141);
} else {
if((state_val_38144 === (12))){
var inst_38095 = (state_38143[(8)]);
var inst_38131 = cljs.core.vec(inst_38095);
var state_38143__$1 = state_38143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38143__$1,(15),out,inst_38131);
} else {
if((state_val_38144 === (2))){
var state_38143__$1 = state_38143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38143__$1,(4),ch);
} else {
if((state_val_38144 === (11))){
var inst_38102 = (state_38143[(9)]);
var inst_38107 = (state_38143[(10)]);
var inst_38117 = (state_38143[(2)]);
var inst_38121 = [];
var inst_38122 = inst_38121.push(inst_38102);
var inst_38095 = inst_38121;
var inst_38096 = inst_38107;
var state_38143__$1 = (function (){var statearr_38179 = state_38143;
(statearr_38179[(11)] = inst_38117);

(statearr_38179[(7)] = inst_38096);

(statearr_38179[(12)] = inst_38122);

(statearr_38179[(8)] = inst_38095);

return statearr_38179;
})();
var statearr_38181_40471 = state_38143__$1;
(statearr_38181_40471[(2)] = null);

(statearr_38181_40471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (9))){
var inst_38095 = (state_38143[(8)]);
var inst_38115 = cljs.core.vec(inst_38095);
var state_38143__$1 = state_38143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38143__$1,(11),out,inst_38115);
} else {
if((state_val_38144 === (5))){
var inst_38096 = (state_38143[(7)]);
var inst_38102 = (state_38143[(9)]);
var inst_38107 = (state_38143[(10)]);
var inst_38107__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38102) : f.call(null,inst_38102));
var inst_38108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38107__$1,inst_38096);
var inst_38109 = cljs.core.keyword_identical_QMARK_(inst_38096,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38110 = ((inst_38108) || (inst_38109));
var state_38143__$1 = (function (){var statearr_38186 = state_38143;
(statearr_38186[(10)] = inst_38107__$1);

return statearr_38186;
})();
if(cljs.core.truth_(inst_38110)){
var statearr_38188_40481 = state_38143__$1;
(statearr_38188_40481[(1)] = (8));

} else {
var statearr_38189_40482 = state_38143__$1;
(statearr_38189_40482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (14))){
var inst_38136 = (state_38143[(2)]);
var inst_38137 = cljs.core.async.close_BANG_(out);
var state_38143__$1 = (function (){var statearr_38193 = state_38143;
(statearr_38193[(13)] = inst_38136);

return statearr_38193;
})();
var statearr_38194_40487 = state_38143__$1;
(statearr_38194_40487[(2)] = inst_38137);

(statearr_38194_40487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (10))){
var inst_38125 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38196_40490 = state_38143__$1;
(statearr_38196_40490[(2)] = inst_38125);

(statearr_38196_40490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (8))){
var inst_38102 = (state_38143[(9)]);
var inst_38107 = (state_38143[(10)]);
var inst_38095 = (state_38143[(8)]);
var inst_38112 = inst_38095.push(inst_38102);
var tmp38190 = inst_38095;
var inst_38095__$1 = tmp38190;
var inst_38096 = inst_38107;
var state_38143__$1 = (function (){var statearr_38197 = state_38143;
(statearr_38197[(7)] = inst_38096);

(statearr_38197[(14)] = inst_38112);

(statearr_38197[(8)] = inst_38095__$1);

return statearr_38197;
})();
var statearr_38198_40493 = state_38143__$1;
(statearr_38198_40493[(2)] = null);

(statearr_38198_40493[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34931__auto__ = null;
var cljs$core$async$state_machine__34931__auto____0 = (function (){
var statearr_38207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38207[(0)] = cljs$core$async$state_machine__34931__auto__);

(statearr_38207[(1)] = (1));

return statearr_38207;
});
var cljs$core$async$state_machine__34931__auto____1 = (function (state_38143){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_38143);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e38213){var ex__34934__auto__ = e38213;
var statearr_38214_40502 = state_38143;
(statearr_38214_40502[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_38143[(4)]))){
var statearr_38216_40503 = state_38143;
(statearr_38216_40503[(1)] = cljs.core.first((state_38143[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40510 = state_38143;
state_38143 = G__40510;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
cljs$core$async$state_machine__34931__auto__ = function(state_38143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34931__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34931__auto____1.call(this,state_38143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34931__auto____0;
cljs$core$async$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34931__auto____1;
return cljs$core$async$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_38219 = f__35186__auto__();
(statearr_38219[(6)] = c__35185__auto___40434);

return statearr_38219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
