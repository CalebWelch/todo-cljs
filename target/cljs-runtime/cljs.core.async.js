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
var G__9725 = arguments.length;
switch (G__9725) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9732 = (function (f,blockable,meta9733){
this.f = f;
this.blockable = blockable;
this.meta9733 = meta9733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9734,meta9733__$1){
var self__ = this;
var _9734__$1 = this;
return (new cljs.core.async.t_cljs$core$async9732(self__.f,self__.blockable,meta9733__$1));
}));

(cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9734){
var self__ = this;
var _9734__$1 = this;
return self__.meta9733;
}));

(cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async9732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async9732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9733","meta9733",673987940,null)], null);
}));

(cljs.core.async.t_cljs$core$async9732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9732");

(cljs.core.async.t_cljs$core$async9732.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9732.
 */
cljs.core.async.__GT_t_cljs$core$async9732 = (function cljs$core$async$__GT_t_cljs$core$async9732(f__$1,blockable__$1,meta9733){
return (new cljs.core.async.t_cljs$core$async9732(f__$1,blockable__$1,meta9733));
});

}

return (new cljs.core.async.t_cljs$core$async9732(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__9751 = arguments.length;
switch (G__9751) {
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
var G__9759 = arguments.length;
switch (G__9759) {
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
var G__9769 = arguments.length;
switch (G__9769) {
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
var val_11869 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11869) : fn1.call(null,val_11869));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_11869) : fn1.call(null,val_11869));
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
var G__9779 = arguments.length;
switch (G__9779) {
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
var n__4666__auto___11886 = n;
var x_11888 = (0);
while(true){
if((x_11888 < n__4666__auto___11886)){
(a[x_11888] = x_11888);

var G__11890 = (x_11888 + (1));
x_11888 = G__11890;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9793 = (function (flag,meta9794){
this.flag = flag;
this.meta9794 = meta9794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9795,meta9794__$1){
var self__ = this;
var _9795__$1 = this;
return (new cljs.core.async.t_cljs$core$async9793(self__.flag,meta9794__$1));
}));

(cljs.core.async.t_cljs$core$async9793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9795){
var self__ = this;
var _9795__$1 = this;
return self__.meta9794;
}));

(cljs.core.async.t_cljs$core$async9793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async9793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async9793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9794","meta9794",-845787032,null)], null);
}));

(cljs.core.async.t_cljs$core$async9793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9793");

(cljs.core.async.t_cljs$core$async9793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9793.
 */
cljs.core.async.__GT_t_cljs$core$async9793 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9793(flag__$1,meta9794){
return (new cljs.core.async.t_cljs$core$async9793(flag__$1,meta9794));
});

}

return (new cljs.core.async.t_cljs$core$async9793(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9805 = (function (flag,cb,meta9806){
this.flag = flag;
this.cb = cb;
this.meta9806 = meta9806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async9805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9807,meta9806__$1){
var self__ = this;
var _9807__$1 = this;
return (new cljs.core.async.t_cljs$core$async9805(self__.flag,self__.cb,meta9806__$1));
}));

(cljs.core.async.t_cljs$core$async9805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9807){
var self__ = this;
var _9807__$1 = this;
return self__.meta9806;
}));

(cljs.core.async.t_cljs$core$async9805.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async9805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async9805.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async9805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async9805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9806","meta9806",-1732197287,null)], null);
}));

(cljs.core.async.t_cljs$core$async9805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async9805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9805");

(cljs.core.async.t_cljs$core$async9805.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async9805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9805.
 */
cljs.core.async.__GT_t_cljs$core$async9805 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9805(flag__$1,cb__$1,meta9806){
return (new cljs.core.async.t_cljs$core$async9805(flag__$1,cb__$1,meta9806));
});

}

return (new cljs.core.async.t_cljs$core$async9805(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9820_SHARP_){
var G__9822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9820_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9822) : fret.call(null,G__9822));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9821_SHARP_){
var G__9823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9821_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9823) : fret.call(null,G__9823));
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
var G__11899 = (i + (1));
i = G__11899;
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
var len__4789__auto___11901 = arguments.length;
var i__4790__auto___11902 = (0);
while(true){
if((i__4790__auto___11902 < len__4789__auto___11901)){
args__4795__auto__.push((arguments[i__4790__auto___11902]));

var G__11903 = (i__4790__auto___11902 + (1));
i__4790__auto___11902 = G__11903;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9833){
var map__9834 = p__9833;
var map__9834__$1 = (((((!((map__9834 == null))))?(((((map__9834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9834):map__9834);
var opts = map__9834__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9828){
var G__9829 = cljs.core.first(seq9828);
var seq9828__$1 = cljs.core.next(seq9828);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9829,seq9828__$1);
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
var G__9845 = arguments.length;
switch (G__9845) {
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
var c__9632__auto___11914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_9914){
var state_val_9915 = (state_9914[(1)]);
if((state_val_9915 === (7))){
var inst_9909 = (state_9914[(2)]);
var state_9914__$1 = state_9914;
var statearr_9916_11921 = state_9914__$1;
(statearr_9916_11921[(2)] = inst_9909);

(statearr_9916_11921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (1))){
var state_9914__$1 = state_9914;
var statearr_9920_11923 = state_9914__$1;
(statearr_9920_11923[(2)] = null);

(statearr_9920_11923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (4))){
var inst_9889 = (state_9914[(7)]);
var inst_9889__$1 = (state_9914[(2)]);
var inst_9892 = (inst_9889__$1 == null);
var state_9914__$1 = (function (){var statearr_9922 = state_9914;
(statearr_9922[(7)] = inst_9889__$1);

return statearr_9922;
})();
if(cljs.core.truth_(inst_9892)){
var statearr_9923_11925 = state_9914__$1;
(statearr_9923_11925[(1)] = (5));

} else {
var statearr_9925_11927 = state_9914__$1;
(statearr_9925_11927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (13))){
var state_9914__$1 = state_9914;
var statearr_9926_11928 = state_9914__$1;
(statearr_9926_11928[(2)] = null);

(statearr_9926_11928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (6))){
var inst_9889 = (state_9914[(7)]);
var state_9914__$1 = state_9914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9914__$1,(11),to,inst_9889);
} else {
if((state_val_9915 === (3))){
var inst_9911 = (state_9914[(2)]);
var state_9914__$1 = state_9914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9914__$1,inst_9911);
} else {
if((state_val_9915 === (12))){
var state_9914__$1 = state_9914;
var statearr_9928_11930 = state_9914__$1;
(statearr_9928_11930[(2)] = null);

(statearr_9928_11930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (2))){
var state_9914__$1 = state_9914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9914__$1,(4),from);
} else {
if((state_val_9915 === (11))){
var inst_9901 = (state_9914[(2)]);
var state_9914__$1 = state_9914;
if(cljs.core.truth_(inst_9901)){
var statearr_9929_11932 = state_9914__$1;
(statearr_9929_11932[(1)] = (12));

} else {
var statearr_9930_11933 = state_9914__$1;
(statearr_9930_11933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (9))){
var state_9914__$1 = state_9914;
var statearr_9931_11934 = state_9914__$1;
(statearr_9931_11934[(2)] = null);

(statearr_9931_11934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (5))){
var state_9914__$1 = state_9914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9932_11935 = state_9914__$1;
(statearr_9932_11935[(1)] = (8));

} else {
var statearr_9933_11936 = state_9914__$1;
(statearr_9933_11936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (14))){
var inst_9907 = (state_9914[(2)]);
var state_9914__$1 = state_9914;
var statearr_9934_11937 = state_9914__$1;
(statearr_9934_11937[(2)] = inst_9907);

(statearr_9934_11937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (10))){
var inst_9898 = (state_9914[(2)]);
var state_9914__$1 = state_9914;
var statearr_9935_11938 = state_9914__$1;
(statearr_9935_11938[(2)] = inst_9898);

(statearr_9935_11938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9915 === (8))){
var inst_9895 = cljs.core.async.close_BANG_(to);
var state_9914__$1 = state_9914;
var statearr_9938_11939 = state_9914__$1;
(statearr_9938_11939[(2)] = inst_9895);

(statearr_9938_11939[(1)] = (10));


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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_9941 = [null,null,null,null,null,null,null,null];
(statearr_9941[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_9941[(1)] = (1));

return statearr_9941;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_9914){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_9914);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e9944){if((e9944 instanceof Object)){
var ex__9481__auto__ = e9944;
var statearr_9945_11942 = state_9914;
(statearr_9945_11942[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11943 = state_9914;
state_9914 = G__11943;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_9914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_9914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_9946 = f__9633__auto__();
(statearr_9946[(6)] = c__9632__auto___11914);

return statearr_9946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var process = (function (p__9954){
var vec__9955 = p__9954;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9955,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9955,(1),null);
var job = vec__9955;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__9632__auto___11944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_9964){
var state_val_9965 = (state_9964[(1)]);
if((state_val_9965 === (1))){
var state_9964__$1 = state_9964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9964__$1,(2),res,v);
} else {
if((state_val_9965 === (2))){
var inst_9961 = (state_9964[(2)]);
var inst_9962 = cljs.core.async.close_BANG_(res);
var state_9964__$1 = (function (){var statearr_9970 = state_9964;
(statearr_9970[(7)] = inst_9961);

return statearr_9970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9964__$1,inst_9962);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0 = (function (){
var statearr_9972 = [null,null,null,null,null,null,null,null];
(statearr_9972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__);

(statearr_9972[(1)] = (1));

return statearr_9972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1 = (function (state_9964){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_9964);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e9973){if((e9973 instanceof Object)){
var ex__9481__auto__ = e9973;
var statearr_9974_11945 = state_9964;
(statearr_9974_11945[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11946 = state_9964;
state_9964 = G__11946;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = function(state_9964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1.call(this,state_9964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_9975 = f__9633__auto__();
(statearr_9975[(6)] = c__9632__auto___11944);

return statearr_9975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__9980){
var vec__9981 = p__9980;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9981,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9981,(1),null);
var job = vec__9981;
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
var n__4666__auto___11947 = n;
var __11948 = (0);
while(true){
if((__11948 < n__4666__auto___11947)){
var G__9984_11949 = type;
var G__9984_11950__$1 = (((G__9984_11949 instanceof cljs.core.Keyword))?G__9984_11949.fqn:null);
switch (G__9984_11950__$1) {
case "compute":
var c__9632__auto___11952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__11948,c__9632__auto___11952,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async){
return (function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = ((function (__11948,c__9632__auto___11952,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async){
return (function (state_9998){
var state_val_9999 = (state_9998[(1)]);
if((state_val_9999 === (1))){
var state_9998__$1 = state_9998;
var statearr_10001_11953 = state_9998__$1;
(statearr_10001_11953[(2)] = null);

(statearr_10001_11953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (2))){
var state_9998__$1 = state_9998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9998__$1,(4),jobs);
} else {
if((state_val_9999 === (3))){
var inst_9996 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9998__$1,inst_9996);
} else {
if((state_val_9999 === (4))){
var inst_9987 = (state_9998[(2)]);
var inst_9988 = process(inst_9987);
var state_9998__$1 = state_9998;
if(cljs.core.truth_(inst_9988)){
var statearr_10003_11954 = state_9998__$1;
(statearr_10003_11954[(1)] = (5));

} else {
var statearr_10004_11955 = state_9998__$1;
(statearr_10004_11955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (5))){
var state_9998__$1 = state_9998;
var statearr_10005_11956 = state_9998__$1;
(statearr_10005_11956[(2)] = null);

(statearr_10005_11956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (6))){
var state_9998__$1 = state_9998;
var statearr_10007_11957 = state_9998__$1;
(statearr_10007_11957[(2)] = null);

(statearr_10007_11957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9999 === (7))){
var inst_9994 = (state_9998[(2)]);
var state_9998__$1 = state_9998;
var statearr_10009_11958 = state_9998__$1;
(statearr_10009_11958[(2)] = inst_9994);

(statearr_10009_11958[(1)] = (3));


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
});})(__11948,c__9632__auto___11952,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async))
;
return ((function (__11948,switch__9477__auto__,c__9632__auto___11952,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0 = (function (){
var statearr_10011 = [null,null,null,null,null,null,null];
(statearr_10011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__);

(statearr_10011[(1)] = (1));

return statearr_10011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1 = (function (state_9998){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_9998);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10018){if((e10018 instanceof Object)){
var ex__9481__auto__ = e10018;
var statearr_10020_11960 = state_9998;
(statearr_10020_11960[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11961 = state_9998;
state_9998 = G__11961;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = function(state_9998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1.call(this,state_9998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__;
})()
;})(__11948,switch__9477__auto__,c__9632__auto___11952,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async))
})();
var state__9634__auto__ = (function (){var statearr_10030 = f__9633__auto__();
(statearr_10030[(6)] = c__9632__auto___11952);

return statearr_10030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
});})(__11948,c__9632__auto___11952,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async))
);


break;
case "async":
var c__9632__auto___11962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__11948,c__9632__auto___11962,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async){
return (function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = ((function (__11948,c__9632__auto___11962,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async){
return (function (state_10058){
var state_val_10059 = (state_10058[(1)]);
if((state_val_10059 === (1))){
var state_10058__$1 = state_10058;
var statearr_10066_11963 = state_10058__$1;
(statearr_10066_11963[(2)] = null);

(statearr_10066_11963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10059 === (2))){
var state_10058__$1 = state_10058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10058__$1,(4),jobs);
} else {
if((state_val_10059 === (3))){
var inst_10055 = (state_10058[(2)]);
var state_10058__$1 = state_10058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10058__$1,inst_10055);
} else {
if((state_val_10059 === (4))){
var inst_10043 = (state_10058[(2)]);
var inst_10048 = async(inst_10043);
var state_10058__$1 = state_10058;
if(cljs.core.truth_(inst_10048)){
var statearr_10067_11964 = state_10058__$1;
(statearr_10067_11964[(1)] = (5));

} else {
var statearr_10069_11965 = state_10058__$1;
(statearr_10069_11965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10059 === (5))){
var state_10058__$1 = state_10058;
var statearr_10077_11966 = state_10058__$1;
(statearr_10077_11966[(2)] = null);

(statearr_10077_11966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10059 === (6))){
var state_10058__$1 = state_10058;
var statearr_10078_11967 = state_10058__$1;
(statearr_10078_11967[(2)] = null);

(statearr_10078_11967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10059 === (7))){
var inst_10053 = (state_10058[(2)]);
var state_10058__$1 = state_10058;
var statearr_10079_11968 = state_10058__$1;
(statearr_10079_11968[(2)] = inst_10053);

(statearr_10079_11968[(1)] = (3));


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
});})(__11948,c__9632__auto___11962,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async))
;
return ((function (__11948,switch__9477__auto__,c__9632__auto___11962,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0 = (function (){
var statearr_10084 = [null,null,null,null,null,null,null];
(statearr_10084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__);

(statearr_10084[(1)] = (1));

return statearr_10084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1 = (function (state_10058){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10058);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10085){if((e10085 instanceof Object)){
var ex__9481__auto__ = e10085;
var statearr_10086_11969 = state_10058;
(statearr_10086_11969[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10085;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11970 = state_10058;
state_10058 = G__11970;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = function(state_10058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1.call(this,state_10058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__;
})()
;})(__11948,switch__9477__auto__,c__9632__auto___11962,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async))
})();
var state__9634__auto__ = (function (){var statearr_10087 = f__9633__auto__();
(statearr_10087[(6)] = c__9632__auto___11962);

return statearr_10087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
});})(__11948,c__9632__auto___11962,G__9984_11949,G__9984_11950__$1,n__4666__auto___11947,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9984_11950__$1)].join('')));

}

var G__11971 = (__11948 + (1));
__11948 = G__11971;
continue;
} else {
}
break;
}

var c__9632__auto___11972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10112){
var state_val_10113 = (state_10112[(1)]);
if((state_val_10113 === (7))){
var inst_10107 = (state_10112[(2)]);
var state_10112__$1 = state_10112;
var statearr_10115_11974 = state_10112__$1;
(statearr_10115_11974[(2)] = inst_10107);

(statearr_10115_11974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (1))){
var state_10112__$1 = state_10112;
var statearr_10116_11975 = state_10112__$1;
(statearr_10116_11975[(2)] = null);

(statearr_10116_11975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (4))){
var inst_10091 = (state_10112[(7)]);
var inst_10091__$1 = (state_10112[(2)]);
var inst_10092 = (inst_10091__$1 == null);
var state_10112__$1 = (function (){var statearr_10117 = state_10112;
(statearr_10117[(7)] = inst_10091__$1);

return statearr_10117;
})();
if(cljs.core.truth_(inst_10092)){
var statearr_10119_11977 = state_10112__$1;
(statearr_10119_11977[(1)] = (5));

} else {
var statearr_10120_11978 = state_10112__$1;
(statearr_10120_11978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (6))){
var inst_10096 = (state_10112[(8)]);
var inst_10091 = (state_10112[(7)]);
var inst_10096__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_10098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10099 = [inst_10091,inst_10096__$1];
var inst_10100 = (new cljs.core.PersistentVector(null,2,(5),inst_10098,inst_10099,null));
var state_10112__$1 = (function (){var statearr_10123 = state_10112;
(statearr_10123[(8)] = inst_10096__$1);

return statearr_10123;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10112__$1,(8),jobs,inst_10100);
} else {
if((state_val_10113 === (3))){
var inst_10109 = (state_10112[(2)]);
var state_10112__$1 = state_10112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10112__$1,inst_10109);
} else {
if((state_val_10113 === (2))){
var state_10112__$1 = state_10112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10112__$1,(4),from);
} else {
if((state_val_10113 === (9))){
var inst_10104 = (state_10112[(2)]);
var state_10112__$1 = (function (){var statearr_10125 = state_10112;
(statearr_10125[(9)] = inst_10104);

return statearr_10125;
})();
var statearr_10126_11979 = state_10112__$1;
(statearr_10126_11979[(2)] = null);

(statearr_10126_11979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (5))){
var inst_10094 = cljs.core.async.close_BANG_(jobs);
var state_10112__$1 = state_10112;
var statearr_10127_11980 = state_10112__$1;
(statearr_10127_11980[(2)] = inst_10094);

(statearr_10127_11980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10113 === (8))){
var inst_10096 = (state_10112[(8)]);
var inst_10102 = (state_10112[(2)]);
var state_10112__$1 = (function (){var statearr_10128 = state_10112;
(statearr_10128[(10)] = inst_10102);

return statearr_10128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10112__$1,(9),results,inst_10096);
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
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0 = (function (){
var statearr_10129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__);

(statearr_10129[(1)] = (1));

return statearr_10129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1 = (function (state_10112){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10112);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10130){if((e10130 instanceof Object)){
var ex__9481__auto__ = e10130;
var statearr_10131_11981 = state_10112;
(statearr_10131_11981[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11982 = state_10112;
state_10112 = G__11982;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = function(state_10112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1.call(this,state_10112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10132 = f__9633__auto__();
(statearr_10132[(6)] = c__9632__auto___11972);

return statearr_10132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


var c__9632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10171){
var state_val_10172 = (state_10171[(1)]);
if((state_val_10172 === (7))){
var inst_10167 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10173_11983 = state_10171__$1;
(statearr_10173_11983[(2)] = inst_10167);

(statearr_10173_11983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (20))){
var state_10171__$1 = state_10171;
var statearr_10174_11984 = state_10171__$1;
(statearr_10174_11984[(2)] = null);

(statearr_10174_11984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (1))){
var state_10171__$1 = state_10171;
var statearr_10175_11985 = state_10171__$1;
(statearr_10175_11985[(2)] = null);

(statearr_10175_11985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (4))){
var inst_10135 = (state_10171[(7)]);
var inst_10135__$1 = (state_10171[(2)]);
var inst_10136 = (inst_10135__$1 == null);
var state_10171__$1 = (function (){var statearr_10177 = state_10171;
(statearr_10177[(7)] = inst_10135__$1);

return statearr_10177;
})();
if(cljs.core.truth_(inst_10136)){
var statearr_10178_11986 = state_10171__$1;
(statearr_10178_11986[(1)] = (5));

} else {
var statearr_10179_11987 = state_10171__$1;
(statearr_10179_11987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (15))){
var inst_10148 = (state_10171[(8)]);
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10171__$1,(18),to,inst_10148);
} else {
if((state_val_10172 === (21))){
var inst_10162 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10181_11989 = state_10171__$1;
(statearr_10181_11989[(2)] = inst_10162);

(statearr_10181_11989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (13))){
var inst_10164 = (state_10171[(2)]);
var state_10171__$1 = (function (){var statearr_10182 = state_10171;
(statearr_10182[(9)] = inst_10164);

return statearr_10182;
})();
var statearr_10183_11991 = state_10171__$1;
(statearr_10183_11991[(2)] = null);

(statearr_10183_11991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (6))){
var inst_10135 = (state_10171[(7)]);
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10171__$1,(11),inst_10135);
} else {
if((state_val_10172 === (17))){
var inst_10157 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
if(cljs.core.truth_(inst_10157)){
var statearr_10184_11992 = state_10171__$1;
(statearr_10184_11992[(1)] = (19));

} else {
var statearr_10185_11993 = state_10171__$1;
(statearr_10185_11993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (3))){
var inst_10169 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10171__$1,inst_10169);
} else {
if((state_val_10172 === (12))){
var inst_10145 = (state_10171[(10)]);
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10171__$1,(14),inst_10145);
} else {
if((state_val_10172 === (2))){
var state_10171__$1 = state_10171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10171__$1,(4),results);
} else {
if((state_val_10172 === (19))){
var state_10171__$1 = state_10171;
var statearr_10188_11994 = state_10171__$1;
(statearr_10188_11994[(2)] = null);

(statearr_10188_11994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (11))){
var inst_10145 = (state_10171[(2)]);
var state_10171__$1 = (function (){var statearr_10189 = state_10171;
(statearr_10189[(10)] = inst_10145);

return statearr_10189;
})();
var statearr_10190_11995 = state_10171__$1;
(statearr_10190_11995[(2)] = null);

(statearr_10190_11995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (9))){
var state_10171__$1 = state_10171;
var statearr_10191_11996 = state_10171__$1;
(statearr_10191_11996[(2)] = null);

(statearr_10191_11996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (5))){
var state_10171__$1 = state_10171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10192_11997 = state_10171__$1;
(statearr_10192_11997[(1)] = (8));

} else {
var statearr_10193_11998 = state_10171__$1;
(statearr_10193_11998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (14))){
var inst_10148 = (state_10171[(8)]);
var inst_10148__$1 = (state_10171[(2)]);
var inst_10150 = (inst_10148__$1 == null);
var inst_10151 = cljs.core.not(inst_10150);
var state_10171__$1 = (function (){var statearr_10194 = state_10171;
(statearr_10194[(8)] = inst_10148__$1);

return statearr_10194;
})();
if(inst_10151){
var statearr_10195_11999 = state_10171__$1;
(statearr_10195_11999[(1)] = (15));

} else {
var statearr_10196_12000 = state_10171__$1;
(statearr_10196_12000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (16))){
var state_10171__$1 = state_10171;
var statearr_10197_12001 = state_10171__$1;
(statearr_10197_12001[(2)] = false);

(statearr_10197_12001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (10))){
var inst_10142 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10198_12002 = state_10171__$1;
(statearr_10198_12002[(2)] = inst_10142);

(statearr_10198_12002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (18))){
var inst_10154 = (state_10171[(2)]);
var state_10171__$1 = state_10171;
var statearr_10199_12003 = state_10171__$1;
(statearr_10199_12003[(2)] = inst_10154);

(statearr_10199_12003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10172 === (8))){
var inst_10139 = cljs.core.async.close_BANG_(to);
var state_10171__$1 = state_10171;
var statearr_10200_12004 = state_10171__$1;
(statearr_10200_12004[(2)] = inst_10139);

(statearr_10200_12004[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0 = (function (){
var statearr_10201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__);

(statearr_10201[(1)] = (1));

return statearr_10201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1 = (function (state_10171){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10171);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10202){if((e10202 instanceof Object)){
var ex__9481__auto__ = e10202;
var statearr_10203_12005 = state_10171;
(statearr_10203_12005[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12006 = state_10171;
state_10171 = G__12006;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__ = function(state_10171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1.call(this,state_10171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9478__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10204 = f__9633__auto__();
(statearr_10204[(6)] = c__9632__auto__);

return statearr_10204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));

return c__9632__auto__;
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
var G__10207 = arguments.length;
switch (G__10207) {
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
var G__10219 = arguments.length;
switch (G__10219) {
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
var G__10227 = arguments.length;
switch (G__10227) {
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
var c__9632__auto___12016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10268){
var state_val_10269 = (state_10268[(1)]);
if((state_val_10269 === (7))){
var inst_10262 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
var statearr_10272_12017 = state_10268__$1;
(statearr_10272_12017[(2)] = inst_10262);

(statearr_10272_12017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (1))){
var state_10268__$1 = state_10268;
var statearr_10273_12018 = state_10268__$1;
(statearr_10273_12018[(2)] = null);

(statearr_10273_12018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (4))){
var inst_10241 = (state_10268[(7)]);
var inst_10241__$1 = (state_10268[(2)]);
var inst_10242 = (inst_10241__$1 == null);
var state_10268__$1 = (function (){var statearr_10274 = state_10268;
(statearr_10274[(7)] = inst_10241__$1);

return statearr_10274;
})();
if(cljs.core.truth_(inst_10242)){
var statearr_10277_12019 = state_10268__$1;
(statearr_10277_12019[(1)] = (5));

} else {
var statearr_10280_12020 = state_10268__$1;
(statearr_10280_12020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (13))){
var state_10268__$1 = state_10268;
var statearr_10282_12021 = state_10268__$1;
(statearr_10282_12021[(2)] = null);

(statearr_10282_12021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (6))){
var inst_10241 = (state_10268[(7)]);
var inst_10247 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10241) : p.call(null,inst_10241));
var state_10268__$1 = state_10268;
if(cljs.core.truth_(inst_10247)){
var statearr_10283_12024 = state_10268__$1;
(statearr_10283_12024[(1)] = (9));

} else {
var statearr_10286_12025 = state_10268__$1;
(statearr_10286_12025[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (3))){
var inst_10264 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10268__$1,inst_10264);
} else {
if((state_val_10269 === (12))){
var state_10268__$1 = state_10268;
var statearr_10287_12026 = state_10268__$1;
(statearr_10287_12026[(2)] = null);

(statearr_10287_12026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (2))){
var state_10268__$1 = state_10268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10268__$1,(4),ch);
} else {
if((state_val_10269 === (11))){
var inst_10241 = (state_10268[(7)]);
var inst_10251 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10268__$1,(8),inst_10251,inst_10241);
} else {
if((state_val_10269 === (9))){
var state_10268__$1 = state_10268;
var statearr_10291_12027 = state_10268__$1;
(statearr_10291_12027[(2)] = tc);

(statearr_10291_12027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (5))){
var inst_10244 = cljs.core.async.close_BANG_(tc);
var inst_10245 = cljs.core.async.close_BANG_(fc);
var state_10268__$1 = (function (){var statearr_10297 = state_10268;
(statearr_10297[(8)] = inst_10244);

return statearr_10297;
})();
var statearr_10298_12028 = state_10268__$1;
(statearr_10298_12028[(2)] = inst_10245);

(statearr_10298_12028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (14))){
var inst_10260 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
var statearr_10299_12029 = state_10268__$1;
(statearr_10299_12029[(2)] = inst_10260);

(statearr_10299_12029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (10))){
var state_10268__$1 = state_10268;
var statearr_10300_12030 = state_10268__$1;
(statearr_10300_12030[(2)] = fc);

(statearr_10300_12030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10269 === (8))){
var inst_10253 = (state_10268[(2)]);
var state_10268__$1 = state_10268;
if(cljs.core.truth_(inst_10253)){
var statearr_10301_12031 = state_10268__$1;
(statearr_10301_12031[(1)] = (12));

} else {
var statearr_10302_12032 = state_10268__$1;
(statearr_10302_12032[(1)] = (13));

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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_10303 = [null,null,null,null,null,null,null,null,null];
(statearr_10303[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_10303[(1)] = (1));

return statearr_10303;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_10268){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10268);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10304){if((e10304 instanceof Object)){
var ex__9481__auto__ = e10304;
var statearr_10305_12033 = state_10268;
(statearr_10305_12033[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12034 = state_10268;
state_10268 = G__12034;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_10268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_10268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10306 = f__9633__auto__();
(statearr_10306[(6)] = c__9632__auto___12016);

return statearr_10306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var c__9632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10333){
var state_val_10334 = (state_10333[(1)]);
if((state_val_10334 === (7))){
var inst_10329 = (state_10333[(2)]);
var state_10333__$1 = state_10333;
var statearr_10337_12036 = state_10333__$1;
(statearr_10337_12036[(2)] = inst_10329);

(statearr_10337_12036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (1))){
var inst_10313 = init;
var state_10333__$1 = (function (){var statearr_10338 = state_10333;
(statearr_10338[(7)] = inst_10313);

return statearr_10338;
})();
var statearr_10339_12037 = state_10333__$1;
(statearr_10339_12037[(2)] = null);

(statearr_10339_12037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (4))){
var inst_10316 = (state_10333[(8)]);
var inst_10316__$1 = (state_10333[(2)]);
var inst_10317 = (inst_10316__$1 == null);
var state_10333__$1 = (function (){var statearr_10341 = state_10333;
(statearr_10341[(8)] = inst_10316__$1);

return statearr_10341;
})();
if(cljs.core.truth_(inst_10317)){
var statearr_10344_12038 = state_10333__$1;
(statearr_10344_12038[(1)] = (5));

} else {
var statearr_10345_12039 = state_10333__$1;
(statearr_10345_12039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (6))){
var inst_10316 = (state_10333[(8)]);
var inst_10313 = (state_10333[(7)]);
var inst_10320 = (state_10333[(9)]);
var inst_10320__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_10313,inst_10316) : f.call(null,inst_10313,inst_10316));
var inst_10321 = cljs.core.reduced_QMARK_(inst_10320__$1);
var state_10333__$1 = (function (){var statearr_10347 = state_10333;
(statearr_10347[(9)] = inst_10320__$1);

return statearr_10347;
})();
if(inst_10321){
var statearr_10348_12040 = state_10333__$1;
(statearr_10348_12040[(1)] = (8));

} else {
var statearr_10352_12041 = state_10333__$1;
(statearr_10352_12041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (3))){
var inst_10331 = (state_10333[(2)]);
var state_10333__$1 = state_10333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10333__$1,inst_10331);
} else {
if((state_val_10334 === (2))){
var state_10333__$1 = state_10333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10333__$1,(4),ch);
} else {
if((state_val_10334 === (9))){
var inst_10320 = (state_10333[(9)]);
var inst_10313 = inst_10320;
var state_10333__$1 = (function (){var statearr_10353 = state_10333;
(statearr_10353[(7)] = inst_10313);

return statearr_10353;
})();
var statearr_10355_12042 = state_10333__$1;
(statearr_10355_12042[(2)] = null);

(statearr_10355_12042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (5))){
var inst_10313 = (state_10333[(7)]);
var state_10333__$1 = state_10333;
var statearr_10358_12043 = state_10333__$1;
(statearr_10358_12043[(2)] = inst_10313);

(statearr_10358_12043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (10))){
var inst_10327 = (state_10333[(2)]);
var state_10333__$1 = state_10333;
var statearr_10363_12044 = state_10333__$1;
(statearr_10363_12044[(2)] = inst_10327);

(statearr_10363_12044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10334 === (8))){
var inst_10320 = (state_10333[(9)]);
var inst_10323 = cljs.core.deref(inst_10320);
var state_10333__$1 = state_10333;
var statearr_10364_12045 = state_10333__$1;
(statearr_10364_12045[(2)] = inst_10323);

(statearr_10364_12045[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__9478__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9478__auto____0 = (function (){
var statearr_10369 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10369[(0)] = cljs$core$async$reduce_$_state_machine__9478__auto__);

(statearr_10369[(1)] = (1));

return statearr_10369;
});
var cljs$core$async$reduce_$_state_machine__9478__auto____1 = (function (state_10333){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10333);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10370){if((e10370 instanceof Object)){
var ex__9481__auto__ = e10370;
var statearr_10372_12046 = state_10333;
(statearr_10372_12046[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12047 = state_10333;
state_10333 = G__12047;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9478__auto__ = function(state_10333){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9478__auto____1.call(this,state_10333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9478__auto____0;
cljs$core$async$reduce_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9478__auto____1;
return cljs$core$async$reduce_$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10375 = f__9633__auto__();
(statearr_10375[(6)] = c__9632__auto__);

return statearr_10375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));

return c__9632__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__9632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10382){
var state_val_10383 = (state_10382[(1)]);
if((state_val_10383 === (1))){
var inst_10377 = cljs.core.async.reduce(f__$1,init,ch);
var state_10382__$1 = state_10382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10382__$1,(2),inst_10377);
} else {
if((state_val_10383 === (2))){
var inst_10379 = (state_10382[(2)]);
var inst_10380 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_10379) : f__$1.call(null,inst_10379));
var state_10382__$1 = state_10382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10382__$1,inst_10380);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__9478__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9478__auto____0 = (function (){
var statearr_10391 = [null,null,null,null,null,null,null];
(statearr_10391[(0)] = cljs$core$async$transduce_$_state_machine__9478__auto__);

(statearr_10391[(1)] = (1));

return statearr_10391;
});
var cljs$core$async$transduce_$_state_machine__9478__auto____1 = (function (state_10382){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10382);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10392){if((e10392 instanceof Object)){
var ex__9481__auto__ = e10392;
var statearr_10393_12050 = state_10382;
(statearr_10393_12050[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12052 = state_10382;
state_10382 = G__12052;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9478__auto__ = function(state_10382){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9478__auto____1.call(this,state_10382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9478__auto____0;
cljs$core$async$transduce_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9478__auto____1;
return cljs$core$async$transduce_$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10395 = f__9633__auto__();
(statearr_10395[(6)] = c__9632__auto__);

return statearr_10395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));

return c__9632__auto__;
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
var G__10401 = arguments.length;
switch (G__10401) {
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
var c__9632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10430){
var state_val_10431 = (state_10430[(1)]);
if((state_val_10431 === (7))){
var inst_10412 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
var statearr_10432_12056 = state_10430__$1;
(statearr_10432_12056[(2)] = inst_10412);

(statearr_10432_12056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (1))){
var inst_10405 = cljs.core.seq(coll);
var inst_10406 = inst_10405;
var state_10430__$1 = (function (){var statearr_10433 = state_10430;
(statearr_10433[(7)] = inst_10406);

return statearr_10433;
})();
var statearr_10434_12059 = state_10430__$1;
(statearr_10434_12059[(2)] = null);

(statearr_10434_12059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (4))){
var inst_10406 = (state_10430[(7)]);
var inst_10410 = cljs.core.first(inst_10406);
var state_10430__$1 = state_10430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10430__$1,(7),ch,inst_10410);
} else {
if((state_val_10431 === (13))){
var inst_10424 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
var statearr_10435_12060 = state_10430__$1;
(statearr_10435_12060[(2)] = inst_10424);

(statearr_10435_12060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (6))){
var inst_10415 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
if(cljs.core.truth_(inst_10415)){
var statearr_10436_12062 = state_10430__$1;
(statearr_10436_12062[(1)] = (8));

} else {
var statearr_10437_12064 = state_10430__$1;
(statearr_10437_12064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (3))){
var inst_10428 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10430__$1,inst_10428);
} else {
if((state_val_10431 === (12))){
var state_10430__$1 = state_10430;
var statearr_10438_12065 = state_10430__$1;
(statearr_10438_12065[(2)] = null);

(statearr_10438_12065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (2))){
var inst_10406 = (state_10430[(7)]);
var state_10430__$1 = state_10430;
if(cljs.core.truth_(inst_10406)){
var statearr_10441_12067 = state_10430__$1;
(statearr_10441_12067[(1)] = (4));

} else {
var statearr_10442_12068 = state_10430__$1;
(statearr_10442_12068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (11))){
var inst_10421 = cljs.core.async.close_BANG_(ch);
var state_10430__$1 = state_10430;
var statearr_10443_12069 = state_10430__$1;
(statearr_10443_12069[(2)] = inst_10421);

(statearr_10443_12069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (9))){
var state_10430__$1 = state_10430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10444_12070 = state_10430__$1;
(statearr_10444_12070[(1)] = (11));

} else {
var statearr_10445_12071 = state_10430__$1;
(statearr_10445_12071[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (5))){
var inst_10406 = (state_10430[(7)]);
var state_10430__$1 = state_10430;
var statearr_10446_12072 = state_10430__$1;
(statearr_10446_12072[(2)] = inst_10406);

(statearr_10446_12072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (10))){
var inst_10426 = (state_10430[(2)]);
var state_10430__$1 = state_10430;
var statearr_10447_12073 = state_10430__$1;
(statearr_10447_12073[(2)] = inst_10426);

(statearr_10447_12073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10431 === (8))){
var inst_10406 = (state_10430[(7)]);
var inst_10417 = cljs.core.next(inst_10406);
var inst_10406__$1 = inst_10417;
var state_10430__$1 = (function (){var statearr_10448 = state_10430;
(statearr_10448[(7)] = inst_10406__$1);

return statearr_10448;
})();
var statearr_10449_12074 = state_10430__$1;
(statearr_10449_12074[(2)] = null);

(statearr_10449_12074[(1)] = (2));


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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_10450 = [null,null,null,null,null,null,null,null];
(statearr_10450[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_10450[(1)] = (1));

return statearr_10450;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_10430){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10430);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10451){if((e10451 instanceof Object)){
var ex__9481__auto__ = e10451;
var statearr_10452_12075 = state_10430;
(statearr_10452_12075[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12076 = state_10430;
state_10430 = G__12076;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_10430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_10430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10453 = f__9633__auto__();
(statearr_10453[(6)] = c__9632__auto__);

return statearr_10453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));

return c__9632__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10461 = (function (ch,cs,meta10462){
this.ch = ch;
this.cs = cs;
this.meta10462 = meta10462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10463,meta10462__$1){
var self__ = this;
var _10463__$1 = this;
return (new cljs.core.async.t_cljs$core$async10461(self__.ch,self__.cs,meta10462__$1));
}));

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10463){
var self__ = this;
var _10463__$1 = this;
return self__.meta10462;
}));

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async10461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async10461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10462","meta10462",878577175,null)], null);
}));

(cljs.core.async.t_cljs$core$async10461.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10461");

(cljs.core.async.t_cljs$core$async10461.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async10461");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10461.
 */
cljs.core.async.__GT_t_cljs$core$async10461 = (function cljs$core$async$mult_$___GT_t_cljs$core$async10461(ch__$1,cs__$1,meta10462){
return (new cljs.core.async.t_cljs$core$async10461(ch__$1,cs__$1,meta10462));
});

}

return (new cljs.core.async.t_cljs$core$async10461(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9632__auto___12080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10628){
var state_val_10629 = (state_10628[(1)]);
if((state_val_10629 === (7))){
var inst_10622 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10636_12081 = state_10628__$1;
(statearr_10636_12081[(2)] = inst_10622);

(statearr_10636_12081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (20))){
var inst_10518 = (state_10628[(7)]);
var inst_10536 = cljs.core.first(inst_10518);
var inst_10537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10536,(0),null);
var inst_10538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10536,(1),null);
var state_10628__$1 = (function (){var statearr_10637 = state_10628;
(statearr_10637[(8)] = inst_10537);

return statearr_10637;
})();
if(cljs.core.truth_(inst_10538)){
var statearr_10638_12082 = state_10628__$1;
(statearr_10638_12082[(1)] = (22));

} else {
var statearr_10639_12083 = state_10628__$1;
(statearr_10639_12083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (27))){
var inst_10573 = (state_10628[(9)]);
var inst_10566 = (state_10628[(10)]);
var inst_10568 = (state_10628[(11)]);
var inst_10481 = (state_10628[(12)]);
var inst_10573__$1 = cljs.core._nth(inst_10566,inst_10568);
var inst_10574 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10573__$1,inst_10481,done);
var state_10628__$1 = (function (){var statearr_10640 = state_10628;
(statearr_10640[(9)] = inst_10573__$1);

return statearr_10640;
})();
if(cljs.core.truth_(inst_10574)){
var statearr_10641_12084 = state_10628__$1;
(statearr_10641_12084[(1)] = (30));

} else {
var statearr_10642_12085 = state_10628__$1;
(statearr_10642_12085[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (1))){
var state_10628__$1 = state_10628;
var statearr_10643_12086 = state_10628__$1;
(statearr_10643_12086[(2)] = null);

(statearr_10643_12086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (24))){
var inst_10518 = (state_10628[(7)]);
var inst_10543 = (state_10628[(2)]);
var inst_10544 = cljs.core.next(inst_10518);
var inst_10490 = inst_10544;
var inst_10491 = null;
var inst_10492 = (0);
var inst_10493 = (0);
var state_10628__$1 = (function (){var statearr_10648 = state_10628;
(statearr_10648[(13)] = inst_10543);

(statearr_10648[(14)] = inst_10493);

(statearr_10648[(15)] = inst_10492);

(statearr_10648[(16)] = inst_10491);

(statearr_10648[(17)] = inst_10490);

return statearr_10648;
})();
var statearr_10649_12087 = state_10628__$1;
(statearr_10649_12087[(2)] = null);

(statearr_10649_12087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (39))){
var state_10628__$1 = state_10628;
var statearr_10653_12088 = state_10628__$1;
(statearr_10653_12088[(2)] = null);

(statearr_10653_12088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (4))){
var inst_10481 = (state_10628[(12)]);
var inst_10481__$1 = (state_10628[(2)]);
var inst_10482 = (inst_10481__$1 == null);
var state_10628__$1 = (function (){var statearr_10654 = state_10628;
(statearr_10654[(12)] = inst_10481__$1);

return statearr_10654;
})();
if(cljs.core.truth_(inst_10482)){
var statearr_10655_12089 = state_10628__$1;
(statearr_10655_12089[(1)] = (5));

} else {
var statearr_10656_12090 = state_10628__$1;
(statearr_10656_12090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (15))){
var inst_10493 = (state_10628[(14)]);
var inst_10492 = (state_10628[(15)]);
var inst_10491 = (state_10628[(16)]);
var inst_10490 = (state_10628[(17)]);
var inst_10513 = (state_10628[(2)]);
var inst_10515 = (inst_10493 + (1));
var tmp10650 = inst_10492;
var tmp10651 = inst_10491;
var tmp10652 = inst_10490;
var inst_10490__$1 = tmp10652;
var inst_10491__$1 = tmp10651;
var inst_10492__$1 = tmp10650;
var inst_10493__$1 = inst_10515;
var state_10628__$1 = (function (){var statearr_10657 = state_10628;
(statearr_10657[(14)] = inst_10493__$1);

(statearr_10657[(15)] = inst_10492__$1);

(statearr_10657[(18)] = inst_10513);

(statearr_10657[(16)] = inst_10491__$1);

(statearr_10657[(17)] = inst_10490__$1);

return statearr_10657;
})();
var statearr_10658_12103 = state_10628__$1;
(statearr_10658_12103[(2)] = null);

(statearr_10658_12103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (21))){
var inst_10547 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10662_12104 = state_10628__$1;
(statearr_10662_12104[(2)] = inst_10547);

(statearr_10662_12104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (31))){
var inst_10573 = (state_10628[(9)]);
var inst_10577 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10573);
var state_10628__$1 = state_10628;
var statearr_10663_12105 = state_10628__$1;
(statearr_10663_12105[(2)] = inst_10577);

(statearr_10663_12105[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (32))){
var inst_10565 = (state_10628[(19)]);
var inst_10566 = (state_10628[(10)]);
var inst_10568 = (state_10628[(11)]);
var inst_10567 = (state_10628[(20)]);
var inst_10579 = (state_10628[(2)]);
var inst_10580 = (inst_10568 + (1));
var tmp10659 = inst_10565;
var tmp10660 = inst_10566;
var tmp10661 = inst_10567;
var inst_10565__$1 = tmp10659;
var inst_10566__$1 = tmp10660;
var inst_10567__$1 = tmp10661;
var inst_10568__$1 = inst_10580;
var state_10628__$1 = (function (){var statearr_10664 = state_10628;
(statearr_10664[(19)] = inst_10565__$1);

(statearr_10664[(21)] = inst_10579);

(statearr_10664[(10)] = inst_10566__$1);

(statearr_10664[(11)] = inst_10568__$1);

(statearr_10664[(20)] = inst_10567__$1);

return statearr_10664;
})();
var statearr_10665_12108 = state_10628__$1;
(statearr_10665_12108[(2)] = null);

(statearr_10665_12108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (40))){
var inst_10595 = (state_10628[(22)]);
var inst_10599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10595);
var state_10628__$1 = state_10628;
var statearr_10666_12109 = state_10628__$1;
(statearr_10666_12109[(2)] = inst_10599);

(statearr_10666_12109[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (33))){
var inst_10585 = (state_10628[(23)]);
var inst_10588 = cljs.core.chunked_seq_QMARK_(inst_10585);
var state_10628__$1 = state_10628;
if(inst_10588){
var statearr_10667_12110 = state_10628__$1;
(statearr_10667_12110[(1)] = (36));

} else {
var statearr_10668_12111 = state_10628__$1;
(statearr_10668_12111[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (13))){
var inst_10507 = (state_10628[(24)]);
var inst_10510 = cljs.core.async.close_BANG_(inst_10507);
var state_10628__$1 = state_10628;
var statearr_10669_12112 = state_10628__$1;
(statearr_10669_12112[(2)] = inst_10510);

(statearr_10669_12112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (22))){
var inst_10537 = (state_10628[(8)]);
var inst_10540 = cljs.core.async.close_BANG_(inst_10537);
var state_10628__$1 = state_10628;
var statearr_10670_12114 = state_10628__$1;
(statearr_10670_12114[(2)] = inst_10540);

(statearr_10670_12114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (36))){
var inst_10585 = (state_10628[(23)]);
var inst_10590 = cljs.core.chunk_first(inst_10585);
var inst_10591 = cljs.core.chunk_rest(inst_10585);
var inst_10592 = cljs.core.count(inst_10590);
var inst_10565 = inst_10591;
var inst_10566 = inst_10590;
var inst_10567 = inst_10592;
var inst_10568 = (0);
var state_10628__$1 = (function (){var statearr_10671 = state_10628;
(statearr_10671[(19)] = inst_10565);

(statearr_10671[(10)] = inst_10566);

(statearr_10671[(11)] = inst_10568);

(statearr_10671[(20)] = inst_10567);

return statearr_10671;
})();
var statearr_10672_12115 = state_10628__$1;
(statearr_10672_12115[(2)] = null);

(statearr_10672_12115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (41))){
var inst_10585 = (state_10628[(23)]);
var inst_10601 = (state_10628[(2)]);
var inst_10602 = cljs.core.next(inst_10585);
var inst_10565 = inst_10602;
var inst_10566 = null;
var inst_10567 = (0);
var inst_10568 = (0);
var state_10628__$1 = (function (){var statearr_10673 = state_10628;
(statearr_10673[(19)] = inst_10565);

(statearr_10673[(25)] = inst_10601);

(statearr_10673[(10)] = inst_10566);

(statearr_10673[(11)] = inst_10568);

(statearr_10673[(20)] = inst_10567);

return statearr_10673;
})();
var statearr_10674_12116 = state_10628__$1;
(statearr_10674_12116[(2)] = null);

(statearr_10674_12116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (43))){
var state_10628__$1 = state_10628;
var statearr_10675_12119 = state_10628__$1;
(statearr_10675_12119[(2)] = null);

(statearr_10675_12119[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (29))){
var inst_10610 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10676_12122 = state_10628__$1;
(statearr_10676_12122[(2)] = inst_10610);

(statearr_10676_12122[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (44))){
var inst_10619 = (state_10628[(2)]);
var state_10628__$1 = (function (){var statearr_10677 = state_10628;
(statearr_10677[(26)] = inst_10619);

return statearr_10677;
})();
var statearr_10678_12123 = state_10628__$1;
(statearr_10678_12123[(2)] = null);

(statearr_10678_12123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (6))){
var inst_10557 = (state_10628[(27)]);
var inst_10556 = cljs.core.deref(cs);
var inst_10557__$1 = cljs.core.keys(inst_10556);
var inst_10558 = cljs.core.count(inst_10557__$1);
var inst_10559 = cljs.core.reset_BANG_(dctr,inst_10558);
var inst_10564 = cljs.core.seq(inst_10557__$1);
var inst_10565 = inst_10564;
var inst_10566 = null;
var inst_10567 = (0);
var inst_10568 = (0);
var state_10628__$1 = (function (){var statearr_10679 = state_10628;
(statearr_10679[(19)] = inst_10565);

(statearr_10679[(10)] = inst_10566);

(statearr_10679[(11)] = inst_10568);

(statearr_10679[(27)] = inst_10557__$1);

(statearr_10679[(20)] = inst_10567);

(statearr_10679[(28)] = inst_10559);

return statearr_10679;
})();
var statearr_10680_12124 = state_10628__$1;
(statearr_10680_12124[(2)] = null);

(statearr_10680_12124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (28))){
var inst_10565 = (state_10628[(19)]);
var inst_10585 = (state_10628[(23)]);
var inst_10585__$1 = cljs.core.seq(inst_10565);
var state_10628__$1 = (function (){var statearr_10682 = state_10628;
(statearr_10682[(23)] = inst_10585__$1);

return statearr_10682;
})();
if(inst_10585__$1){
var statearr_10683_12125 = state_10628__$1;
(statearr_10683_12125[(1)] = (33));

} else {
var statearr_10686_12126 = state_10628__$1;
(statearr_10686_12126[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (25))){
var inst_10568 = (state_10628[(11)]);
var inst_10567 = (state_10628[(20)]);
var inst_10570 = (inst_10568 < inst_10567);
var inst_10571 = inst_10570;
var state_10628__$1 = state_10628;
if(cljs.core.truth_(inst_10571)){
var statearr_10688_12127 = state_10628__$1;
(statearr_10688_12127[(1)] = (27));

} else {
var statearr_10689_12128 = state_10628__$1;
(statearr_10689_12128[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (34))){
var state_10628__$1 = state_10628;
var statearr_10690_12129 = state_10628__$1;
(statearr_10690_12129[(2)] = null);

(statearr_10690_12129[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (17))){
var state_10628__$1 = state_10628;
var statearr_10691_12132 = state_10628__$1;
(statearr_10691_12132[(2)] = null);

(statearr_10691_12132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (3))){
var inst_10624 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10628__$1,inst_10624);
} else {
if((state_val_10629 === (12))){
var inst_10552 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10693_12134 = state_10628__$1;
(statearr_10693_12134[(2)] = inst_10552);

(statearr_10693_12134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (2))){
var state_10628__$1 = state_10628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10628__$1,(4),ch);
} else {
if((state_val_10629 === (23))){
var state_10628__$1 = state_10628;
var statearr_10694_12135 = state_10628__$1;
(statearr_10694_12135[(2)] = null);

(statearr_10694_12135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (35))){
var inst_10608 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10695_12136 = state_10628__$1;
(statearr_10695_12136[(2)] = inst_10608);

(statearr_10695_12136[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (19))){
var inst_10518 = (state_10628[(7)]);
var inst_10525 = cljs.core.chunk_first(inst_10518);
var inst_10527 = cljs.core.chunk_rest(inst_10518);
var inst_10529 = cljs.core.count(inst_10525);
var inst_10490 = inst_10527;
var inst_10491 = inst_10525;
var inst_10492 = inst_10529;
var inst_10493 = (0);
var state_10628__$1 = (function (){var statearr_10696 = state_10628;
(statearr_10696[(14)] = inst_10493);

(statearr_10696[(15)] = inst_10492);

(statearr_10696[(16)] = inst_10491);

(statearr_10696[(17)] = inst_10490);

return statearr_10696;
})();
var statearr_10697_12137 = state_10628__$1;
(statearr_10697_12137[(2)] = null);

(statearr_10697_12137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (11))){
var inst_10518 = (state_10628[(7)]);
var inst_10490 = (state_10628[(17)]);
var inst_10518__$1 = cljs.core.seq(inst_10490);
var state_10628__$1 = (function (){var statearr_10698 = state_10628;
(statearr_10698[(7)] = inst_10518__$1);

return statearr_10698;
})();
if(inst_10518__$1){
var statearr_10699_12139 = state_10628__$1;
(statearr_10699_12139[(1)] = (16));

} else {
var statearr_10700_12143 = state_10628__$1;
(statearr_10700_12143[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (9))){
var inst_10554 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10701_12144 = state_10628__$1;
(statearr_10701_12144[(2)] = inst_10554);

(statearr_10701_12144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (5))){
var inst_10488 = cljs.core.deref(cs);
var inst_10489 = cljs.core.seq(inst_10488);
var inst_10490 = inst_10489;
var inst_10491 = null;
var inst_10492 = (0);
var inst_10493 = (0);
var state_10628__$1 = (function (){var statearr_10702 = state_10628;
(statearr_10702[(14)] = inst_10493);

(statearr_10702[(15)] = inst_10492);

(statearr_10702[(16)] = inst_10491);

(statearr_10702[(17)] = inst_10490);

return statearr_10702;
})();
var statearr_10704_12150 = state_10628__$1;
(statearr_10704_12150[(2)] = null);

(statearr_10704_12150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (14))){
var state_10628__$1 = state_10628;
var statearr_10705_12151 = state_10628__$1;
(statearr_10705_12151[(2)] = null);

(statearr_10705_12151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (45))){
var inst_10616 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10706_12154 = state_10628__$1;
(statearr_10706_12154[(2)] = inst_10616);

(statearr_10706_12154[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (26))){
var inst_10557 = (state_10628[(27)]);
var inst_10612 = (state_10628[(2)]);
var inst_10613 = cljs.core.seq(inst_10557);
var state_10628__$1 = (function (){var statearr_10707 = state_10628;
(statearr_10707[(29)] = inst_10612);

return statearr_10707;
})();
if(inst_10613){
var statearr_10708_12159 = state_10628__$1;
(statearr_10708_12159[(1)] = (42));

} else {
var statearr_10709_12160 = state_10628__$1;
(statearr_10709_12160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (16))){
var inst_10518 = (state_10628[(7)]);
var inst_10520 = cljs.core.chunked_seq_QMARK_(inst_10518);
var state_10628__$1 = state_10628;
if(inst_10520){
var statearr_10710_12162 = state_10628__$1;
(statearr_10710_12162[(1)] = (19));

} else {
var statearr_10711_12163 = state_10628__$1;
(statearr_10711_12163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (38))){
var inst_10605 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10713_12165 = state_10628__$1;
(statearr_10713_12165[(2)] = inst_10605);

(statearr_10713_12165[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (30))){
var state_10628__$1 = state_10628;
var statearr_10716_12166 = state_10628__$1;
(statearr_10716_12166[(2)] = null);

(statearr_10716_12166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (10))){
var inst_10493 = (state_10628[(14)]);
var inst_10491 = (state_10628[(16)]);
var inst_10505 = cljs.core._nth(inst_10491,inst_10493);
var inst_10507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10505,(0),null);
var inst_10508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10505,(1),null);
var state_10628__$1 = (function (){var statearr_10718 = state_10628;
(statearr_10718[(24)] = inst_10507);

return statearr_10718;
})();
if(cljs.core.truth_(inst_10508)){
var statearr_10719_12167 = state_10628__$1;
(statearr_10719_12167[(1)] = (13));

} else {
var statearr_10720_12168 = state_10628__$1;
(statearr_10720_12168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (18))){
var inst_10550 = (state_10628[(2)]);
var state_10628__$1 = state_10628;
var statearr_10721_12169 = state_10628__$1;
(statearr_10721_12169[(2)] = inst_10550);

(statearr_10721_12169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (42))){
var state_10628__$1 = state_10628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10628__$1,(45),dchan);
} else {
if((state_val_10629 === (37))){
var inst_10585 = (state_10628[(23)]);
var inst_10595 = (state_10628[(22)]);
var inst_10481 = (state_10628[(12)]);
var inst_10595__$1 = cljs.core.first(inst_10585);
var inst_10596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10595__$1,inst_10481,done);
var state_10628__$1 = (function (){var statearr_10722 = state_10628;
(statearr_10722[(22)] = inst_10595__$1);

return statearr_10722;
})();
if(cljs.core.truth_(inst_10596)){
var statearr_10723_12170 = state_10628__$1;
(statearr_10723_12170[(1)] = (39));

} else {
var statearr_10724_12171 = state_10628__$1;
(statearr_10724_12171[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10629 === (8))){
var inst_10493 = (state_10628[(14)]);
var inst_10492 = (state_10628[(15)]);
var inst_10496 = (inst_10493 < inst_10492);
var inst_10497 = inst_10496;
var state_10628__$1 = state_10628;
if(cljs.core.truth_(inst_10497)){
var statearr_10725_12174 = state_10628__$1;
(statearr_10725_12174[(1)] = (10));

} else {
var statearr_10726_12175 = state_10628__$1;
(statearr_10726_12175[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__9478__auto__ = null;
var cljs$core$async$mult_$_state_machine__9478__auto____0 = (function (){
var statearr_10729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10729[(0)] = cljs$core$async$mult_$_state_machine__9478__auto__);

(statearr_10729[(1)] = (1));

return statearr_10729;
});
var cljs$core$async$mult_$_state_machine__9478__auto____1 = (function (state_10628){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10628);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e10730){if((e10730 instanceof Object)){
var ex__9481__auto__ = e10730;
var statearr_10733_12176 = state_10628;
(statearr_10733_12176[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12177 = state_10628;
state_10628 = G__12177;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9478__auto__ = function(state_10628){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9478__auto____1.call(this,state_10628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9478__auto____0;
cljs$core$async$mult_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9478__auto____1;
return cljs$core$async$mult_$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_10736 = f__9633__auto__();
(statearr_10736[(6)] = c__9632__auto___12080);

return statearr_10736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var G__10745 = arguments.length;
switch (G__10745) {
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
var len__4789__auto___12185 = arguments.length;
var i__4790__auto___12186 = (0);
while(true){
if((i__4790__auto___12186 < len__4789__auto___12185)){
args__4795__auto__.push((arguments[i__4790__auto___12186]));

var G__12187 = (i__4790__auto___12186 + (1));
i__4790__auto___12186 = G__12187;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10787){
var map__10788 = p__10787;
var map__10788__$1 = (((((!((map__10788 == null))))?(((((map__10788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10788):map__10788);
var opts = map__10788__$1;
var statearr_10791_12188 = state;
(statearr_10791_12188[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_10792_12189 = state;
(statearr_10792_12189[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_10794_12190 = state;
(statearr_10794_12190[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10778){
var G__10779 = cljs.core.first(seq10778);
var seq10778__$1 = cljs.core.next(seq10778);
var G__10780 = cljs.core.first(seq10778__$1);
var seq10778__$2 = cljs.core.next(seq10778__$1);
var G__10781 = cljs.core.first(seq10778__$2);
var seq10778__$3 = cljs.core.next(seq10778__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10779,G__10780,G__10781,seq10778__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10807 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10808){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10808 = meta10808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10809,meta10808__$1){
var self__ = this;
var _10809__$1 = this;
return (new cljs.core.async.t_cljs$core$async10807(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10808__$1));
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10809){
var self__ = this;
var _10809__$1 = this;
return self__.meta10808;
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async10807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10808","meta10808",-7818545,null)], null);
}));

(cljs.core.async.t_cljs$core$async10807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async10807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10807");

(cljs.core.async.t_cljs$core$async10807.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async10807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10807.
 */
cljs.core.async.__GT_t_cljs$core$async10807 = (function cljs$core$async$mix_$___GT_t_cljs$core$async10807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10808){
return (new cljs.core.async.t_cljs$core$async10807(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10808));
});

}

return (new cljs.core.async.t_cljs$core$async10807(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9632__auto___12193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_10936){
var state_val_10937 = (state_10936[(1)]);
if((state_val_10937 === (7))){
var inst_10844 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
var statearr_10938_12196 = state_10936__$1;
(statearr_10938_12196[(2)] = inst_10844);

(statearr_10938_12196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (20))){
var inst_10857 = (state_10936[(7)]);
var state_10936__$1 = state_10936;
var statearr_10939_12199 = state_10936__$1;
(statearr_10939_12199[(2)] = inst_10857);

(statearr_10939_12199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (27))){
var state_10936__$1 = state_10936;
var statearr_10940_12200 = state_10936__$1;
(statearr_10940_12200[(2)] = null);

(statearr_10940_12200[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (1))){
var inst_10829 = (state_10936[(8)]);
var inst_10829__$1 = calc_state();
var inst_10832 = (inst_10829__$1 == null);
var inst_10833 = cljs.core.not(inst_10832);
var state_10936__$1 = (function (){var statearr_10941 = state_10936;
(statearr_10941[(8)] = inst_10829__$1);

return statearr_10941;
})();
if(inst_10833){
var statearr_10946_12201 = state_10936__$1;
(statearr_10946_12201[(1)] = (2));

} else {
var statearr_10947_12204 = state_10936__$1;
(statearr_10947_12204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (24))){
var inst_10891 = (state_10936[(9)]);
var inst_10881 = (state_10936[(10)]);
var inst_10906 = (state_10936[(11)]);
var inst_10906__$1 = (inst_10881.cljs$core$IFn$_invoke$arity$1 ? inst_10881.cljs$core$IFn$_invoke$arity$1(inst_10891) : inst_10881.call(null,inst_10891));
var state_10936__$1 = (function (){var statearr_10952 = state_10936;
(statearr_10952[(11)] = inst_10906__$1);

return statearr_10952;
})();
if(cljs.core.truth_(inst_10906__$1)){
var statearr_10953_12205 = state_10936__$1;
(statearr_10953_12205[(1)] = (29));

} else {
var statearr_10954_12206 = state_10936__$1;
(statearr_10954_12206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (4))){
var inst_10847 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10847)){
var statearr_10959_12207 = state_10936__$1;
(statearr_10959_12207[(1)] = (8));

} else {
var statearr_10960_12208 = state_10936__$1;
(statearr_10960_12208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (15))){
var inst_10875 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10875)){
var statearr_10961_12209 = state_10936__$1;
(statearr_10961_12209[(1)] = (19));

} else {
var statearr_10962_12210 = state_10936__$1;
(statearr_10962_12210[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (21))){
var inst_10880 = (state_10936[(12)]);
var inst_10880__$1 = (state_10936[(2)]);
var inst_10881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10880__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10880__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10880__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10936__$1 = (function (){var statearr_10963 = state_10936;
(statearr_10963[(10)] = inst_10881);

(statearr_10963[(12)] = inst_10880__$1);

(statearr_10963[(13)] = inst_10883);

return statearr_10963;
})();
return cljs.core.async.ioc_alts_BANG_(state_10936__$1,(22),inst_10884);
} else {
if((state_val_10937 === (31))){
var inst_10914 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10914)){
var statearr_10967_12211 = state_10936__$1;
(statearr_10967_12211[(1)] = (32));

} else {
var statearr_10969_12212 = state_10936__$1;
(statearr_10969_12212[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (32))){
var inst_10890 = (state_10936[(14)]);
var state_10936__$1 = state_10936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10936__$1,(35),out,inst_10890);
} else {
if((state_val_10937 === (33))){
var inst_10880 = (state_10936[(12)]);
var inst_10857 = inst_10880;
var state_10936__$1 = (function (){var statearr_10970 = state_10936;
(statearr_10970[(7)] = inst_10857);

return statearr_10970;
})();
var statearr_10971_12217 = state_10936__$1;
(statearr_10971_12217[(2)] = null);

(statearr_10971_12217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (13))){
var inst_10857 = (state_10936[(7)]);
var inst_10864 = inst_10857.cljs$lang$protocol_mask$partition0$;
var inst_10865 = (inst_10864 & (64));
var inst_10866 = inst_10857.cljs$core$ISeq$;
var inst_10867 = (cljs.core.PROTOCOL_SENTINEL === inst_10866);
var inst_10868 = ((inst_10865) || (inst_10867));
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10868)){
var statearr_10972_12220 = state_10936__$1;
(statearr_10972_12220[(1)] = (16));

} else {
var statearr_10973_12221 = state_10936__$1;
(statearr_10973_12221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (22))){
var inst_10890 = (state_10936[(14)]);
var inst_10891 = (state_10936[(9)]);
var inst_10889 = (state_10936[(2)]);
var inst_10890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10889,(0),null);
var inst_10891__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10889,(1),null);
var inst_10893 = (inst_10890__$1 == null);
var inst_10894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10891__$1,change);
var inst_10895 = ((inst_10893) || (inst_10894));
var state_10936__$1 = (function (){var statearr_10974 = state_10936;
(statearr_10974[(14)] = inst_10890__$1);

(statearr_10974[(9)] = inst_10891__$1);

return statearr_10974;
})();
if(cljs.core.truth_(inst_10895)){
var statearr_10975_12222 = state_10936__$1;
(statearr_10975_12222[(1)] = (23));

} else {
var statearr_10976_12223 = state_10936__$1;
(statearr_10976_12223[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (36))){
var inst_10880 = (state_10936[(12)]);
var inst_10857 = inst_10880;
var state_10936__$1 = (function (){var statearr_10977 = state_10936;
(statearr_10977[(7)] = inst_10857);

return statearr_10977;
})();
var statearr_10978_12224 = state_10936__$1;
(statearr_10978_12224[(2)] = null);

(statearr_10978_12224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (29))){
var inst_10906 = (state_10936[(11)]);
var state_10936__$1 = state_10936;
var statearr_10980_12225 = state_10936__$1;
(statearr_10980_12225[(2)] = inst_10906);

(statearr_10980_12225[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (6))){
var state_10936__$1 = state_10936;
var statearr_10981_12226 = state_10936__$1;
(statearr_10981_12226[(2)] = false);

(statearr_10981_12226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (28))){
var inst_10902 = (state_10936[(2)]);
var inst_10903 = calc_state();
var inst_10857 = inst_10903;
var state_10936__$1 = (function (){var statearr_10985 = state_10936;
(statearr_10985[(7)] = inst_10857);

(statearr_10985[(15)] = inst_10902);

return statearr_10985;
})();
var statearr_10986_12227 = state_10936__$1;
(statearr_10986_12227[(2)] = null);

(statearr_10986_12227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (25))){
var inst_10928 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
var statearr_10987_12228 = state_10936__$1;
(statearr_10987_12228[(2)] = inst_10928);

(statearr_10987_12228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (34))){
var inst_10926 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
var statearr_10988_12229 = state_10936__$1;
(statearr_10988_12229[(2)] = inst_10926);

(statearr_10988_12229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (17))){
var state_10936__$1 = state_10936;
var statearr_10989_12230 = state_10936__$1;
(statearr_10989_12230[(2)] = false);

(statearr_10989_12230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (3))){
var state_10936__$1 = state_10936;
var statearr_10990_12231 = state_10936__$1;
(statearr_10990_12231[(2)] = false);

(statearr_10990_12231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (12))){
var inst_10930 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10936__$1,inst_10930);
} else {
if((state_val_10937 === (2))){
var inst_10829 = (state_10936[(8)]);
var inst_10836 = inst_10829.cljs$lang$protocol_mask$partition0$;
var inst_10837 = (inst_10836 & (64));
var inst_10838 = inst_10829.cljs$core$ISeq$;
var inst_10839 = (cljs.core.PROTOCOL_SENTINEL === inst_10838);
var inst_10840 = ((inst_10837) || (inst_10839));
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10840)){
var statearr_10991_12232 = state_10936__$1;
(statearr_10991_12232[(1)] = (5));

} else {
var statearr_10992_12233 = state_10936__$1;
(statearr_10992_12233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (23))){
var inst_10890 = (state_10936[(14)]);
var inst_10897 = (inst_10890 == null);
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10897)){
var statearr_10993_12234 = state_10936__$1;
(statearr_10993_12234[(1)] = (26));

} else {
var statearr_10994_12235 = state_10936__$1;
(statearr_10994_12235[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (35))){
var inst_10917 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
if(cljs.core.truth_(inst_10917)){
var statearr_10996_12236 = state_10936__$1;
(statearr_10996_12236[(1)] = (36));

} else {
var statearr_10997_12237 = state_10936__$1;
(statearr_10997_12237[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (19))){
var inst_10857 = (state_10936[(7)]);
var inst_10877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10857);
var state_10936__$1 = state_10936;
var statearr_11000_12238 = state_10936__$1;
(statearr_11000_12238[(2)] = inst_10877);

(statearr_11000_12238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (11))){
var inst_10857 = (state_10936[(7)]);
var inst_10861 = (inst_10857 == null);
var inst_10862 = cljs.core.not(inst_10861);
var state_10936__$1 = state_10936;
if(inst_10862){
var statearr_11002_12239 = state_10936__$1;
(statearr_11002_12239[(1)] = (13));

} else {
var statearr_11003_12240 = state_10936__$1;
(statearr_11003_12240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (9))){
var inst_10829 = (state_10936[(8)]);
var state_10936__$1 = state_10936;
var statearr_11004_12247 = state_10936__$1;
(statearr_11004_12247[(2)] = inst_10829);

(statearr_11004_12247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (5))){
var state_10936__$1 = state_10936;
var statearr_11005_12248 = state_10936__$1;
(statearr_11005_12248[(2)] = true);

(statearr_11005_12248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (14))){
var state_10936__$1 = state_10936;
var statearr_11006_12249 = state_10936__$1;
(statearr_11006_12249[(2)] = false);

(statearr_11006_12249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (26))){
var inst_10891 = (state_10936[(9)]);
var inst_10899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_10891);
var state_10936__$1 = state_10936;
var statearr_11007_12250 = state_10936__$1;
(statearr_11007_12250[(2)] = inst_10899);

(statearr_11007_12250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (16))){
var state_10936__$1 = state_10936;
var statearr_11008_12251 = state_10936__$1;
(statearr_11008_12251[(2)] = true);

(statearr_11008_12251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (38))){
var inst_10922 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
var statearr_11009_12252 = state_10936__$1;
(statearr_11009_12252[(2)] = inst_10922);

(statearr_11009_12252[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (30))){
var inst_10891 = (state_10936[(9)]);
var inst_10881 = (state_10936[(10)]);
var inst_10883 = (state_10936[(13)]);
var inst_10909 = cljs.core.empty_QMARK_(inst_10881);
var inst_10910 = (inst_10883.cljs$core$IFn$_invoke$arity$1 ? inst_10883.cljs$core$IFn$_invoke$arity$1(inst_10891) : inst_10883.call(null,inst_10891));
var inst_10911 = cljs.core.not(inst_10910);
var inst_10912 = ((inst_10909) && (inst_10911));
var state_10936__$1 = state_10936;
var statearr_11010_12253 = state_10936__$1;
(statearr_11010_12253[(2)] = inst_10912);

(statearr_11010_12253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (10))){
var inst_10829 = (state_10936[(8)]);
var inst_10853 = (state_10936[(2)]);
var inst_10854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10853,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10853,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10853,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10857 = inst_10829;
var state_10936__$1 = (function (){var statearr_11011 = state_10936;
(statearr_11011[(7)] = inst_10857);

(statearr_11011[(16)] = inst_10854);

(statearr_11011[(17)] = inst_10856);

(statearr_11011[(18)] = inst_10855);

return statearr_11011;
})();
var statearr_11012_12254 = state_10936__$1;
(statearr_11012_12254[(2)] = null);

(statearr_11012_12254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (18))){
var inst_10872 = (state_10936[(2)]);
var state_10936__$1 = state_10936;
var statearr_11013_12255 = state_10936__$1;
(statearr_11013_12255[(2)] = inst_10872);

(statearr_11013_12255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (37))){
var state_10936__$1 = state_10936;
var statearr_11015_12256 = state_10936__$1;
(statearr_11015_12256[(2)] = null);

(statearr_11015_12256[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10937 === (8))){
var inst_10829 = (state_10936[(8)]);
var inst_10850 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10829);
var state_10936__$1 = state_10936;
var statearr_11016_12261 = state_10936__$1;
(statearr_11016_12261[(2)] = inst_10850);

(statearr_11016_12261[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__9478__auto__ = null;
var cljs$core$async$mix_$_state_machine__9478__auto____0 = (function (){
var statearr_11018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11018[(0)] = cljs$core$async$mix_$_state_machine__9478__auto__);

(statearr_11018[(1)] = (1));

return statearr_11018;
});
var cljs$core$async$mix_$_state_machine__9478__auto____1 = (function (state_10936){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_10936);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11019){if((e11019 instanceof Object)){
var ex__9481__auto__ = e11019;
var statearr_11020_12262 = state_10936;
(statearr_11020_12262[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12263 = state_10936;
state_10936 = G__12263;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9478__auto__ = function(state_10936){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9478__auto____1.call(this,state_10936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9478__auto____0;
cljs$core$async$mix_$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9478__auto____1;
return cljs$core$async$mix_$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11024 = f__9633__auto__();
(statearr_11024[(6)] = c__9632__auto___12193);

return statearr_11024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var G__11037 = arguments.length;
switch (G__11037) {
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
var G__11047 = arguments.length;
switch (G__11047) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__11043_SHARP_){
if(cljs.core.truth_((p1__11043_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11043_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11043_SHARP_.call(null,topic)))){
return p1__11043_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11043_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11053 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11054){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11054 = meta11054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11055,meta11054__$1){
var self__ = this;
var _11055__$1 = this;
return (new cljs.core.async.t_cljs$core$async11053(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11054__$1));
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11055){
var self__ = this;
var _11055__$1 = this;
return self__.meta11054;
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async11053.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async11053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11054","meta11054",-614314209,null)], null);
}));

(cljs.core.async.t_cljs$core$async11053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11053");

(cljs.core.async.t_cljs$core$async11053.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async11053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11053.
 */
cljs.core.async.__GT_t_cljs$core$async11053 = (function cljs$core$async$__GT_t_cljs$core$async11053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11054){
return (new cljs.core.async.t_cljs$core$async11053(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11054));
});

}

return (new cljs.core.async.t_cljs$core$async11053(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9632__auto___12268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11143){
var state_val_11144 = (state_11143[(1)]);
if((state_val_11144 === (7))){
var inst_11139 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
var statearr_11145_12269 = state_11143__$1;
(statearr_11145_12269[(2)] = inst_11139);

(statearr_11145_12269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (20))){
var state_11143__$1 = state_11143;
var statearr_11146_12270 = state_11143__$1;
(statearr_11146_12270[(2)] = null);

(statearr_11146_12270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (1))){
var state_11143__$1 = state_11143;
var statearr_11147_12271 = state_11143__$1;
(statearr_11147_12271[(2)] = null);

(statearr_11147_12271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (24))){
var inst_11122 = (state_11143[(7)]);
var inst_11131 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_11122);
var state_11143__$1 = state_11143;
var statearr_11148_12273 = state_11143__$1;
(statearr_11148_12273[(2)] = inst_11131);

(statearr_11148_12273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (4))){
var inst_11070 = (state_11143[(8)]);
var inst_11070__$1 = (state_11143[(2)]);
var inst_11071 = (inst_11070__$1 == null);
var state_11143__$1 = (function (){var statearr_11150 = state_11143;
(statearr_11150[(8)] = inst_11070__$1);

return statearr_11150;
})();
if(cljs.core.truth_(inst_11071)){
var statearr_11151_12275 = state_11143__$1;
(statearr_11151_12275[(1)] = (5));

} else {
var statearr_11152_12276 = state_11143__$1;
(statearr_11152_12276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (15))){
var inst_11116 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
var statearr_11153_12277 = state_11143__$1;
(statearr_11153_12277[(2)] = inst_11116);

(statearr_11153_12277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (21))){
var inst_11136 = (state_11143[(2)]);
var state_11143__$1 = (function (){var statearr_11154 = state_11143;
(statearr_11154[(9)] = inst_11136);

return statearr_11154;
})();
var statearr_11156_12278 = state_11143__$1;
(statearr_11156_12278[(2)] = null);

(statearr_11156_12278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (13))){
var inst_11098 = (state_11143[(10)]);
var inst_11100 = cljs.core.chunked_seq_QMARK_(inst_11098);
var state_11143__$1 = state_11143;
if(inst_11100){
var statearr_11158_12279 = state_11143__$1;
(statearr_11158_12279[(1)] = (16));

} else {
var statearr_11159_12280 = state_11143__$1;
(statearr_11159_12280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (22))){
var inst_11128 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
if(cljs.core.truth_(inst_11128)){
var statearr_11162_12281 = state_11143__$1;
(statearr_11162_12281[(1)] = (23));

} else {
var statearr_11163_12282 = state_11143__$1;
(statearr_11163_12282[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (6))){
var inst_11124 = (state_11143[(11)]);
var inst_11070 = (state_11143[(8)]);
var inst_11122 = (state_11143[(7)]);
var inst_11122__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_11070) : topic_fn.call(null,inst_11070));
var inst_11123 = cljs.core.deref(mults);
var inst_11124__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11123,inst_11122__$1);
var state_11143__$1 = (function (){var statearr_11164 = state_11143;
(statearr_11164[(11)] = inst_11124__$1);

(statearr_11164[(7)] = inst_11122__$1);

return statearr_11164;
})();
if(cljs.core.truth_(inst_11124__$1)){
var statearr_11165_12283 = state_11143__$1;
(statearr_11165_12283[(1)] = (19));

} else {
var statearr_11166_12284 = state_11143__$1;
(statearr_11166_12284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (25))){
var inst_11133 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
var statearr_11167_12285 = state_11143__$1;
(statearr_11167_12285[(2)] = inst_11133);

(statearr_11167_12285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (17))){
var inst_11098 = (state_11143[(10)]);
var inst_11107 = cljs.core.first(inst_11098);
var inst_11108 = cljs.core.async.muxch_STAR_(inst_11107);
var inst_11109 = cljs.core.async.close_BANG_(inst_11108);
var inst_11110 = cljs.core.next(inst_11098);
var inst_11080 = inst_11110;
var inst_11081 = null;
var inst_11082 = (0);
var inst_11083 = (0);
var state_11143__$1 = (function (){var statearr_11168 = state_11143;
(statearr_11168[(12)] = inst_11080);

(statearr_11168[(13)] = inst_11109);

(statearr_11168[(14)] = inst_11083);

(statearr_11168[(15)] = inst_11082);

(statearr_11168[(16)] = inst_11081);

return statearr_11168;
})();
var statearr_11170_12286 = state_11143__$1;
(statearr_11170_12286[(2)] = null);

(statearr_11170_12286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (3))){
var inst_11141 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11143__$1,inst_11141);
} else {
if((state_val_11144 === (12))){
var inst_11118 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
var statearr_11173_12288 = state_11143__$1;
(statearr_11173_12288[(2)] = inst_11118);

(statearr_11173_12288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (2))){
var state_11143__$1 = state_11143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11143__$1,(4),ch);
} else {
if((state_val_11144 === (23))){
var state_11143__$1 = state_11143;
var statearr_11176_12289 = state_11143__$1;
(statearr_11176_12289[(2)] = null);

(statearr_11176_12289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (19))){
var inst_11124 = (state_11143[(11)]);
var inst_11070 = (state_11143[(8)]);
var inst_11126 = cljs.core.async.muxch_STAR_(inst_11124);
var state_11143__$1 = state_11143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11143__$1,(22),inst_11126,inst_11070);
} else {
if((state_val_11144 === (11))){
var inst_11080 = (state_11143[(12)]);
var inst_11098 = (state_11143[(10)]);
var inst_11098__$1 = cljs.core.seq(inst_11080);
var state_11143__$1 = (function (){var statearr_11177 = state_11143;
(statearr_11177[(10)] = inst_11098__$1);

return statearr_11177;
})();
if(inst_11098__$1){
var statearr_11179_12292 = state_11143__$1;
(statearr_11179_12292[(1)] = (13));

} else {
var statearr_11180_12293 = state_11143__$1;
(statearr_11180_12293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (9))){
var inst_11120 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
var statearr_11181_12295 = state_11143__$1;
(statearr_11181_12295[(2)] = inst_11120);

(statearr_11181_12295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (5))){
var inst_11077 = cljs.core.deref(mults);
var inst_11078 = cljs.core.vals(inst_11077);
var inst_11079 = cljs.core.seq(inst_11078);
var inst_11080 = inst_11079;
var inst_11081 = null;
var inst_11082 = (0);
var inst_11083 = (0);
var state_11143__$1 = (function (){var statearr_11185 = state_11143;
(statearr_11185[(12)] = inst_11080);

(statearr_11185[(14)] = inst_11083);

(statearr_11185[(15)] = inst_11082);

(statearr_11185[(16)] = inst_11081);

return statearr_11185;
})();
var statearr_11187_12297 = state_11143__$1;
(statearr_11187_12297[(2)] = null);

(statearr_11187_12297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (14))){
var state_11143__$1 = state_11143;
var statearr_11191_12298 = state_11143__$1;
(statearr_11191_12298[(2)] = null);

(statearr_11191_12298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (16))){
var inst_11098 = (state_11143[(10)]);
var inst_11102 = cljs.core.chunk_first(inst_11098);
var inst_11103 = cljs.core.chunk_rest(inst_11098);
var inst_11104 = cljs.core.count(inst_11102);
var inst_11080 = inst_11103;
var inst_11081 = inst_11102;
var inst_11082 = inst_11104;
var inst_11083 = (0);
var state_11143__$1 = (function (){var statearr_11194 = state_11143;
(statearr_11194[(12)] = inst_11080);

(statearr_11194[(14)] = inst_11083);

(statearr_11194[(15)] = inst_11082);

(statearr_11194[(16)] = inst_11081);

return statearr_11194;
})();
var statearr_11196_12299 = state_11143__$1;
(statearr_11196_12299[(2)] = null);

(statearr_11196_12299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (10))){
var inst_11080 = (state_11143[(12)]);
var inst_11083 = (state_11143[(14)]);
var inst_11082 = (state_11143[(15)]);
var inst_11081 = (state_11143[(16)]);
var inst_11090 = cljs.core._nth(inst_11081,inst_11083);
var inst_11091 = cljs.core.async.muxch_STAR_(inst_11090);
var inst_11094 = cljs.core.async.close_BANG_(inst_11091);
var inst_11095 = (inst_11083 + (1));
var tmp11188 = inst_11080;
var tmp11189 = inst_11082;
var tmp11190 = inst_11081;
var inst_11080__$1 = tmp11188;
var inst_11081__$1 = tmp11190;
var inst_11082__$1 = tmp11189;
var inst_11083__$1 = inst_11095;
var state_11143__$1 = (function (){var statearr_11199 = state_11143;
(statearr_11199[(17)] = inst_11094);

(statearr_11199[(12)] = inst_11080__$1);

(statearr_11199[(14)] = inst_11083__$1);

(statearr_11199[(15)] = inst_11082__$1);

(statearr_11199[(16)] = inst_11081__$1);

return statearr_11199;
})();
var statearr_11201_12300 = state_11143__$1;
(statearr_11201_12300[(2)] = null);

(statearr_11201_12300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (18))){
var inst_11113 = (state_11143[(2)]);
var state_11143__$1 = state_11143;
var statearr_11203_12301 = state_11143__$1;
(statearr_11203_12301[(2)] = inst_11113);

(statearr_11203_12301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11144 === (8))){
var inst_11083 = (state_11143[(14)]);
var inst_11082 = (state_11143[(15)]);
var inst_11087 = (inst_11083 < inst_11082);
var inst_11088 = inst_11087;
var state_11143__$1 = state_11143;
if(cljs.core.truth_(inst_11088)){
var statearr_11205_12302 = state_11143__$1;
(statearr_11205_12302[(1)] = (10));

} else {
var statearr_11206_12303 = state_11143__$1;
(statearr_11206_12303[(1)] = (11));

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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11207[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11207[(1)] = (1));

return statearr_11207;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11143){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11143);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11208){if((e11208 instanceof Object)){
var ex__9481__auto__ = e11208;
var statearr_11209_12304 = state_11143;
(statearr_11209_12304[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12306 = state_11143;
state_11143 = G__12306;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11210 = f__9633__auto__();
(statearr_11210[(6)] = c__9632__auto___12268);

return statearr_11210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var G__11212 = arguments.length;
switch (G__11212) {
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
var G__11216 = arguments.length;
switch (G__11216) {
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
var G__11220 = arguments.length;
switch (G__11220) {
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
var c__9632__auto___12312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11265){
var state_val_11266 = (state_11265[(1)]);
if((state_val_11266 === (7))){
var state_11265__$1 = state_11265;
var statearr_11268_12317 = state_11265__$1;
(statearr_11268_12317[(2)] = null);

(statearr_11268_12317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (1))){
var state_11265__$1 = state_11265;
var statearr_11269_12318 = state_11265__$1;
(statearr_11269_12318[(2)] = null);

(statearr_11269_12318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (4))){
var inst_11226 = (state_11265[(7)]);
var inst_11228 = (inst_11226 < cnt);
var state_11265__$1 = state_11265;
if(cljs.core.truth_(inst_11228)){
var statearr_11270_12323 = state_11265__$1;
(statearr_11270_12323[(1)] = (6));

} else {
var statearr_11271_12324 = state_11265__$1;
(statearr_11271_12324[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (15))){
var inst_11260 = (state_11265[(2)]);
var state_11265__$1 = state_11265;
var statearr_11272_12329 = state_11265__$1;
(statearr_11272_12329[(2)] = inst_11260);

(statearr_11272_12329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (13))){
var inst_11253 = cljs.core.async.close_BANG_(out);
var state_11265__$1 = state_11265;
var statearr_11275_12330 = state_11265__$1;
(statearr_11275_12330[(2)] = inst_11253);

(statearr_11275_12330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (6))){
var state_11265__$1 = state_11265;
var statearr_11276_12331 = state_11265__$1;
(statearr_11276_12331[(2)] = null);

(statearr_11276_12331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (3))){
var inst_11262 = (state_11265[(2)]);
var state_11265__$1 = state_11265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11265__$1,inst_11262);
} else {
if((state_val_11266 === (12))){
var inst_11250 = (state_11265[(8)]);
var inst_11250__$1 = (state_11265[(2)]);
var inst_11251 = cljs.core.some(cljs.core.nil_QMARK_,inst_11250__$1);
var state_11265__$1 = (function (){var statearr_11279 = state_11265;
(statearr_11279[(8)] = inst_11250__$1);

return statearr_11279;
})();
if(cljs.core.truth_(inst_11251)){
var statearr_11280_12332 = state_11265__$1;
(statearr_11280_12332[(1)] = (13));

} else {
var statearr_11281_12333 = state_11265__$1;
(statearr_11281_12333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (2))){
var inst_11225 = cljs.core.reset_BANG_(dctr,cnt);
var inst_11226 = (0);
var state_11265__$1 = (function (){var statearr_11282 = state_11265;
(statearr_11282[(7)] = inst_11226);

(statearr_11282[(9)] = inst_11225);

return statearr_11282;
})();
var statearr_11283_12334 = state_11265__$1;
(statearr_11283_12334[(2)] = null);

(statearr_11283_12334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (11))){
var inst_11226 = (state_11265[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11265,(10),Object,null,(9));
var inst_11235 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_11226) : chs__$1.call(null,inst_11226));
var inst_11236 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_11226) : done.call(null,inst_11226));
var inst_11237 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_11235,inst_11236);
var state_11265__$1 = state_11265;
var statearr_11286_12335 = state_11265__$1;
(statearr_11286_12335[(2)] = inst_11237);


cljs.core.async.impl.ioc_helpers.process_exception(state_11265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (9))){
var inst_11226 = (state_11265[(7)]);
var inst_11239 = (state_11265[(2)]);
var inst_11242 = (inst_11226 + (1));
var inst_11226__$1 = inst_11242;
var state_11265__$1 = (function (){var statearr_11287 = state_11265;
(statearr_11287[(7)] = inst_11226__$1);

(statearr_11287[(10)] = inst_11239);

return statearr_11287;
})();
var statearr_11288_12336 = state_11265__$1;
(statearr_11288_12336[(2)] = null);

(statearr_11288_12336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (5))){
var inst_11248 = (state_11265[(2)]);
var state_11265__$1 = (function (){var statearr_11291 = state_11265;
(statearr_11291[(11)] = inst_11248);

return statearr_11291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11265__$1,(12),dchan);
} else {
if((state_val_11266 === (14))){
var inst_11250 = (state_11265[(8)]);
var inst_11255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_11250);
var state_11265__$1 = state_11265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11265__$1,(16),out,inst_11255);
} else {
if((state_val_11266 === (16))){
var inst_11257 = (state_11265[(2)]);
var state_11265__$1 = (function (){var statearr_11292 = state_11265;
(statearr_11292[(12)] = inst_11257);

return statearr_11292;
})();
var statearr_11293_12337 = state_11265__$1;
(statearr_11293_12337[(2)] = null);

(statearr_11293_12337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (10))){
var inst_11230 = (state_11265[(2)]);
var inst_11231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_11265__$1 = (function (){var statearr_11294 = state_11265;
(statearr_11294[(13)] = inst_11230);

return statearr_11294;
})();
var statearr_11295_12338 = state_11265__$1;
(statearr_11295_12338[(2)] = inst_11231);


cljs.core.async.impl.ioc_helpers.process_exception(state_11265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11266 === (8))){
var inst_11246 = (state_11265[(2)]);
var state_11265__$1 = state_11265;
var statearr_11296_12339 = state_11265__$1;
(statearr_11296_12339[(2)] = inst_11246);

(statearr_11296_12339[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11297[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11297[(1)] = (1));

return statearr_11297;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11265){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11265);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11298){if((e11298 instanceof Object)){
var ex__9481__auto__ = e11298;
var statearr_11299_12342 = state_11265;
(statearr_11299_12342[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12344 = state_11265;
state_11265 = G__12344;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11300 = f__9633__auto__();
(statearr_11300[(6)] = c__9632__auto___12312);

return statearr_11300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var G__11303 = arguments.length;
switch (G__11303) {
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
var c__9632__auto___12346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11337){
var state_val_11338 = (state_11337[(1)]);
if((state_val_11338 === (7))){
var inst_11316 = (state_11337[(7)]);
var inst_11317 = (state_11337[(8)]);
var inst_11316__$1 = (state_11337[(2)]);
var inst_11317__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11316__$1,(0),null);
var inst_11318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11316__$1,(1),null);
var inst_11319 = (inst_11317__$1 == null);
var state_11337__$1 = (function (){var statearr_11342 = state_11337;
(statearr_11342[(9)] = inst_11318);

(statearr_11342[(7)] = inst_11316__$1);

(statearr_11342[(8)] = inst_11317__$1);

return statearr_11342;
})();
if(cljs.core.truth_(inst_11319)){
var statearr_11343_12347 = state_11337__$1;
(statearr_11343_12347[(1)] = (8));

} else {
var statearr_11344_12350 = state_11337__$1;
(statearr_11344_12350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (1))){
var inst_11305 = cljs.core.vec(chs);
var inst_11306 = inst_11305;
var state_11337__$1 = (function (){var statearr_11346 = state_11337;
(statearr_11346[(10)] = inst_11306);

return statearr_11346;
})();
var statearr_11347_12351 = state_11337__$1;
(statearr_11347_12351[(2)] = null);

(statearr_11347_12351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (4))){
var inst_11306 = (state_11337[(10)]);
var state_11337__$1 = state_11337;
return cljs.core.async.ioc_alts_BANG_(state_11337__$1,(7),inst_11306);
} else {
if((state_val_11338 === (6))){
var inst_11333 = (state_11337[(2)]);
var state_11337__$1 = state_11337;
var statearr_11350_12354 = state_11337__$1;
(statearr_11350_12354[(2)] = inst_11333);

(statearr_11350_12354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (3))){
var inst_11335 = (state_11337[(2)]);
var state_11337__$1 = state_11337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11337__$1,inst_11335);
} else {
if((state_val_11338 === (2))){
var inst_11306 = (state_11337[(10)]);
var inst_11309 = cljs.core.count(inst_11306);
var inst_11310 = (inst_11309 > (0));
var state_11337__$1 = state_11337;
if(cljs.core.truth_(inst_11310)){
var statearr_11352_12357 = state_11337__$1;
(statearr_11352_12357[(1)] = (4));

} else {
var statearr_11353_12358 = state_11337__$1;
(statearr_11353_12358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (11))){
var inst_11306 = (state_11337[(10)]);
var inst_11326 = (state_11337[(2)]);
var tmp11351 = inst_11306;
var inst_11306__$1 = tmp11351;
var state_11337__$1 = (function (){var statearr_11354 = state_11337;
(statearr_11354[(11)] = inst_11326);

(statearr_11354[(10)] = inst_11306__$1);

return statearr_11354;
})();
var statearr_11355_12359 = state_11337__$1;
(statearr_11355_12359[(2)] = null);

(statearr_11355_12359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (9))){
var inst_11317 = (state_11337[(8)]);
var state_11337__$1 = state_11337;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11337__$1,(11),out,inst_11317);
} else {
if((state_val_11338 === (5))){
var inst_11331 = cljs.core.async.close_BANG_(out);
var state_11337__$1 = state_11337;
var statearr_11358_12360 = state_11337__$1;
(statearr_11358_12360[(2)] = inst_11331);

(statearr_11358_12360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (10))){
var inst_11329 = (state_11337[(2)]);
var state_11337__$1 = state_11337;
var statearr_11359_12363 = state_11337__$1;
(statearr_11359_12363[(2)] = inst_11329);

(statearr_11359_12363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11338 === (8))){
var inst_11318 = (state_11337[(9)]);
var inst_11316 = (state_11337[(7)]);
var inst_11306 = (state_11337[(10)]);
var inst_11317 = (state_11337[(8)]);
var inst_11321 = (function (){var cs = inst_11306;
var vec__11312 = inst_11316;
var v = inst_11317;
var c = inst_11318;
return (function (p1__11301_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__11301_SHARP_);
});
})();
var inst_11322 = cljs.core.filterv(inst_11321,inst_11306);
var inst_11306__$1 = inst_11322;
var state_11337__$1 = (function (){var statearr_11360 = state_11337;
(statearr_11360[(10)] = inst_11306__$1);

return statearr_11360;
})();
var statearr_11361_12364 = state_11337__$1;
(statearr_11361_12364[(2)] = null);

(statearr_11361_12364[(1)] = (2));


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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11362 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11362[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11362[(1)] = (1));

return statearr_11362;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11337){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11337);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11365){if((e11365 instanceof Object)){
var ex__9481__auto__ = e11365;
var statearr_11366_12365 = state_11337;
(statearr_11366_12365[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12366 = state_11337;
state_11337 = G__12366;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11369 = f__9633__auto__();
(statearr_11369[(6)] = c__9632__auto___12346);

return statearr_11369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
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
var G__11371 = arguments.length;
switch (G__11371) {
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
var c__9632__auto___12368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11399){
var state_val_11400 = (state_11399[(1)]);
if((state_val_11400 === (7))){
var inst_11381 = (state_11399[(7)]);
var inst_11381__$1 = (state_11399[(2)]);
var inst_11382 = (inst_11381__$1 == null);
var inst_11383 = cljs.core.not(inst_11382);
var state_11399__$1 = (function (){var statearr_11402 = state_11399;
(statearr_11402[(7)] = inst_11381__$1);

return statearr_11402;
})();
if(inst_11383){
var statearr_11404_12370 = state_11399__$1;
(statearr_11404_12370[(1)] = (8));

} else {
var statearr_11405_12371 = state_11399__$1;
(statearr_11405_12371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (1))){
var inst_11376 = (0);
var state_11399__$1 = (function (){var statearr_11406 = state_11399;
(statearr_11406[(8)] = inst_11376);

return statearr_11406;
})();
var statearr_11407_12372 = state_11399__$1;
(statearr_11407_12372[(2)] = null);

(statearr_11407_12372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (4))){
var state_11399__$1 = state_11399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11399__$1,(7),ch);
} else {
if((state_val_11400 === (6))){
var inst_11394 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11408_12373 = state_11399__$1;
(statearr_11408_12373[(2)] = inst_11394);

(statearr_11408_12373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (3))){
var inst_11396 = (state_11399[(2)]);
var inst_11397 = cljs.core.async.close_BANG_(out);
var state_11399__$1 = (function (){var statearr_11409 = state_11399;
(statearr_11409[(9)] = inst_11396);

return statearr_11409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11399__$1,inst_11397);
} else {
if((state_val_11400 === (2))){
var inst_11376 = (state_11399[(8)]);
var inst_11378 = (inst_11376 < n);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11378)){
var statearr_11410_12374 = state_11399__$1;
(statearr_11410_12374[(1)] = (4));

} else {
var statearr_11411_12375 = state_11399__$1;
(statearr_11411_12375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (11))){
var inst_11376 = (state_11399[(8)]);
var inst_11386 = (state_11399[(2)]);
var inst_11387 = (inst_11376 + (1));
var inst_11376__$1 = inst_11387;
var state_11399__$1 = (function (){var statearr_11415 = state_11399;
(statearr_11415[(8)] = inst_11376__$1);

(statearr_11415[(10)] = inst_11386);

return statearr_11415;
})();
var statearr_11417_12376 = state_11399__$1;
(statearr_11417_12376[(2)] = null);

(statearr_11417_12376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (9))){
var state_11399__$1 = state_11399;
var statearr_11418_12377 = state_11399__$1;
(statearr_11418_12377[(2)] = null);

(statearr_11418_12377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (5))){
var state_11399__$1 = state_11399;
var statearr_11419_12380 = state_11399__$1;
(statearr_11419_12380[(2)] = null);

(statearr_11419_12380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (10))){
var inst_11391 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11420_12381 = state_11399__$1;
(statearr_11420_12381[(2)] = inst_11391);

(statearr_11420_12381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (8))){
var inst_11381 = (state_11399[(7)]);
var state_11399__$1 = state_11399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11399__$1,(11),out,inst_11381);
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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11423[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11423[(1)] = (1));

return statearr_11423;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11399){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11399);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11424){if((e11424 instanceof Object)){
var ex__9481__auto__ = e11424;
var statearr_11425_12383 = state_11399;
(statearr_11425_12383[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12385 = state_11399;
state_11399 = G__12385;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11426 = f__9633__auto__();
(statearr_11426[(6)] = c__9632__auto___12368);

return statearr_11426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11431 = (function (f,ch,meta11432){
this.f = f;
this.ch = ch;
this.meta11432 = meta11432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11433,meta11432__$1){
var self__ = this;
var _11433__$1 = this;
return (new cljs.core.async.t_cljs$core$async11431(self__.f,self__.ch,meta11432__$1));
}));

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11433){
var self__ = this;
var _11433__$1 = this;
return self__.meta11432;
}));

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11435 = (function (f,ch,meta11432,_,fn1,meta11436){
this.f = f;
this.ch = ch;
this.meta11432 = meta11432;
this._ = _;
this.fn1 = fn1;
this.meta11436 = meta11436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11437,meta11436__$1){
var self__ = this;
var _11437__$1 = this;
return (new cljs.core.async.t_cljs$core$async11435(self__.f,self__.ch,self__.meta11432,self__._,self__.fn1,meta11436__$1));
}));

(cljs.core.async.t_cljs$core$async11435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11437){
var self__ = this;
var _11437__$1 = this;
return self__.meta11436;
}));

(cljs.core.async.t_cljs$core$async11435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async11435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__11429_SHARP_){
var G__11439 = (((p1__11429_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__11429_SHARP_) : self__.f.call(null,p1__11429_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__11439) : f1.call(null,G__11439));
});
}));

(cljs.core.async.t_cljs$core$async11435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11432","meta11432",140135887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11431","cljs.core.async/t_cljs$core$async11431",-262617055,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11436","meta11436",666169408,null)], null);
}));

(cljs.core.async.t_cljs$core$async11435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11435");

(cljs.core.async.t_cljs$core$async11435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async11435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11435.
 */
cljs.core.async.__GT_t_cljs$core$async11435 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11435(f__$1,ch__$1,meta11432__$1,___$2,fn1__$1,meta11436){
return (new cljs.core.async.t_cljs$core$async11435(f__$1,ch__$1,meta11432__$1,___$2,fn1__$1,meta11436));
});

}

return (new cljs.core.async.t_cljs$core$async11435(self__.f,self__.ch,self__.meta11432,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__11440 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__11440) : self__.f.call(null,G__11440));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async11431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11432","meta11432",140135887,null)], null);
}));

(cljs.core.async.t_cljs$core$async11431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11431");

(cljs.core.async.t_cljs$core$async11431.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async11431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11431.
 */
cljs.core.async.__GT_t_cljs$core$async11431 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11431(f__$1,ch__$1,meta11432){
return (new cljs.core.async.t_cljs$core$async11431(f__$1,ch__$1,meta11432));
});

}

return (new cljs.core.async.t_cljs$core$async11431(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11445 = (function (f,ch,meta11446){
this.f = f;
this.ch = ch;
this.meta11446 = meta11446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11447,meta11446__$1){
var self__ = this;
var _11447__$1 = this;
return (new cljs.core.async.t_cljs$core$async11445(self__.f,self__.ch,meta11446__$1));
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11447){
var self__ = this;
var _11447__$1 = this;
return self__.meta11446;
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async11445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11446","meta11446",-290320032,null)], null);
}));

(cljs.core.async.t_cljs$core$async11445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11445");

(cljs.core.async.t_cljs$core$async11445.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async11445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11445.
 */
cljs.core.async.__GT_t_cljs$core$async11445 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11445(f__$1,ch__$1,meta11446){
return (new cljs.core.async.t_cljs$core$async11445(f__$1,ch__$1,meta11446));
});

}

return (new cljs.core.async.t_cljs$core$async11445(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11453 = (function (p,ch,meta11454){
this.p = p;
this.ch = ch;
this.meta11454 = meta11454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11455,meta11454__$1){
var self__ = this;
var _11455__$1 = this;
return (new cljs.core.async.t_cljs$core$async11453(self__.p,self__.ch,meta11454__$1));
}));

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11455){
var self__ = this;
var _11455__$1 = this;
return self__.meta11454;
}));

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async11453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11454","meta11454",837942694,null)], null);
}));

(cljs.core.async.t_cljs$core$async11453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11453");

(cljs.core.async.t_cljs$core$async11453.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async11453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11453.
 */
cljs.core.async.__GT_t_cljs$core$async11453 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11453(p__$1,ch__$1,meta11454){
return (new cljs.core.async.t_cljs$core$async11453(p__$1,ch__$1,meta11454));
});

}

return (new cljs.core.async.t_cljs$core$async11453(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11461 = arguments.length;
switch (G__11461) {
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
var c__9632__auto___12387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11482){
var state_val_11483 = (state_11482[(1)]);
if((state_val_11483 === (7))){
var inst_11478 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11484_12388 = state_11482__$1;
(statearr_11484_12388[(2)] = inst_11478);

(statearr_11484_12388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (1))){
var state_11482__$1 = state_11482;
var statearr_11485_12390 = state_11482__$1;
(statearr_11485_12390[(2)] = null);

(statearr_11485_12390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (4))){
var inst_11464 = (state_11482[(7)]);
var inst_11464__$1 = (state_11482[(2)]);
var inst_11465 = (inst_11464__$1 == null);
var state_11482__$1 = (function (){var statearr_11486 = state_11482;
(statearr_11486[(7)] = inst_11464__$1);

return statearr_11486;
})();
if(cljs.core.truth_(inst_11465)){
var statearr_11487_12392 = state_11482__$1;
(statearr_11487_12392[(1)] = (5));

} else {
var statearr_11488_12394 = state_11482__$1;
(statearr_11488_12394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (6))){
var inst_11464 = (state_11482[(7)]);
var inst_11469 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_11464) : p.call(null,inst_11464));
var state_11482__$1 = state_11482;
if(cljs.core.truth_(inst_11469)){
var statearr_11489_12395 = state_11482__$1;
(statearr_11489_12395[(1)] = (8));

} else {
var statearr_11490_12396 = state_11482__$1;
(statearr_11490_12396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (3))){
var inst_11480 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11482__$1,inst_11480);
} else {
if((state_val_11483 === (2))){
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11482__$1,(4),ch);
} else {
if((state_val_11483 === (11))){
var inst_11472 = (state_11482[(2)]);
var state_11482__$1 = state_11482;
var statearr_11491_12397 = state_11482__$1;
(statearr_11491_12397[(2)] = inst_11472);

(statearr_11491_12397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (9))){
var state_11482__$1 = state_11482;
var statearr_11492_12398 = state_11482__$1;
(statearr_11492_12398[(2)] = null);

(statearr_11492_12398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (5))){
var inst_11467 = cljs.core.async.close_BANG_(out);
var state_11482__$1 = state_11482;
var statearr_11493_12399 = state_11482__$1;
(statearr_11493_12399[(2)] = inst_11467);

(statearr_11493_12399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (10))){
var inst_11475 = (state_11482[(2)]);
var state_11482__$1 = (function (){var statearr_11495 = state_11482;
(statearr_11495[(8)] = inst_11475);

return statearr_11495;
})();
var statearr_11496_12400 = state_11482__$1;
(statearr_11496_12400[(2)] = null);

(statearr_11496_12400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11483 === (8))){
var inst_11464 = (state_11482[(7)]);
var state_11482__$1 = state_11482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11482__$1,(11),out,inst_11464);
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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11497 = [null,null,null,null,null,null,null,null,null];
(statearr_11497[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11497[(1)] = (1));

return statearr_11497;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11482){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11482);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11498){if((e11498 instanceof Object)){
var ex__9481__auto__ = e11498;
var statearr_11499_12402 = state_11482;
(statearr_11499_12402[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11498;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12403 = state_11482;
state_11482 = G__12403;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11502 = f__9633__auto__();
(statearr_11502[(6)] = c__9632__auto___12387);

return statearr_11502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__11505 = arguments.length;
switch (G__11505) {
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
var c__9632__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11567){
var state_val_11568 = (state_11567[(1)]);
if((state_val_11568 === (7))){
var inst_11563 = (state_11567[(2)]);
var state_11567__$1 = state_11567;
var statearr_11569_12405 = state_11567__$1;
(statearr_11569_12405[(2)] = inst_11563);

(statearr_11569_12405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (20))){
var inst_11533 = (state_11567[(7)]);
var inst_11544 = (state_11567[(2)]);
var inst_11545 = cljs.core.next(inst_11533);
var inst_11519 = inst_11545;
var inst_11520 = null;
var inst_11521 = (0);
var inst_11522 = (0);
var state_11567__$1 = (function (){var statearr_11570 = state_11567;
(statearr_11570[(8)] = inst_11519);

(statearr_11570[(9)] = inst_11521);

(statearr_11570[(10)] = inst_11520);

(statearr_11570[(11)] = inst_11544);

(statearr_11570[(12)] = inst_11522);

return statearr_11570;
})();
var statearr_11571_12408 = state_11567__$1;
(statearr_11571_12408[(2)] = null);

(statearr_11571_12408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (1))){
var state_11567__$1 = state_11567;
var statearr_11574_12410 = state_11567__$1;
(statearr_11574_12410[(2)] = null);

(statearr_11574_12410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (4))){
var inst_11508 = (state_11567[(13)]);
var inst_11508__$1 = (state_11567[(2)]);
var inst_11509 = (inst_11508__$1 == null);
var state_11567__$1 = (function (){var statearr_11575 = state_11567;
(statearr_11575[(13)] = inst_11508__$1);

return statearr_11575;
})();
if(cljs.core.truth_(inst_11509)){
var statearr_11576_12411 = state_11567__$1;
(statearr_11576_12411[(1)] = (5));

} else {
var statearr_11577_12412 = state_11567__$1;
(statearr_11577_12412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (15))){
var state_11567__$1 = state_11567;
var statearr_11581_12413 = state_11567__$1;
(statearr_11581_12413[(2)] = null);

(statearr_11581_12413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (21))){
var state_11567__$1 = state_11567;
var statearr_11582_12414 = state_11567__$1;
(statearr_11582_12414[(2)] = null);

(statearr_11582_12414[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (13))){
var inst_11519 = (state_11567[(8)]);
var inst_11521 = (state_11567[(9)]);
var inst_11520 = (state_11567[(10)]);
var inst_11522 = (state_11567[(12)]);
var inst_11529 = (state_11567[(2)]);
var inst_11530 = (inst_11522 + (1));
var tmp11578 = inst_11519;
var tmp11579 = inst_11521;
var tmp11580 = inst_11520;
var inst_11519__$1 = tmp11578;
var inst_11520__$1 = tmp11580;
var inst_11521__$1 = tmp11579;
var inst_11522__$1 = inst_11530;
var state_11567__$1 = (function (){var statearr_11583 = state_11567;
(statearr_11583[(8)] = inst_11519__$1);

(statearr_11583[(9)] = inst_11521__$1);

(statearr_11583[(10)] = inst_11520__$1);

(statearr_11583[(12)] = inst_11522__$1);

(statearr_11583[(14)] = inst_11529);

return statearr_11583;
})();
var statearr_11584_12415 = state_11567__$1;
(statearr_11584_12415[(2)] = null);

(statearr_11584_12415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (22))){
var state_11567__$1 = state_11567;
var statearr_11585_12416 = state_11567__$1;
(statearr_11585_12416[(2)] = null);

(statearr_11585_12416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (6))){
var inst_11508 = (state_11567[(13)]);
var inst_11517 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11508) : f.call(null,inst_11508));
var inst_11518 = cljs.core.seq(inst_11517);
var inst_11519 = inst_11518;
var inst_11520 = null;
var inst_11521 = (0);
var inst_11522 = (0);
var state_11567__$1 = (function (){var statearr_11588 = state_11567;
(statearr_11588[(8)] = inst_11519);

(statearr_11588[(9)] = inst_11521);

(statearr_11588[(10)] = inst_11520);

(statearr_11588[(12)] = inst_11522);

return statearr_11588;
})();
var statearr_11589_12417 = state_11567__$1;
(statearr_11589_12417[(2)] = null);

(statearr_11589_12417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (17))){
var inst_11533 = (state_11567[(7)]);
var inst_11537 = cljs.core.chunk_first(inst_11533);
var inst_11538 = cljs.core.chunk_rest(inst_11533);
var inst_11539 = cljs.core.count(inst_11537);
var inst_11519 = inst_11538;
var inst_11520 = inst_11537;
var inst_11521 = inst_11539;
var inst_11522 = (0);
var state_11567__$1 = (function (){var statearr_11592 = state_11567;
(statearr_11592[(8)] = inst_11519);

(statearr_11592[(9)] = inst_11521);

(statearr_11592[(10)] = inst_11520);

(statearr_11592[(12)] = inst_11522);

return statearr_11592;
})();
var statearr_11593_12418 = state_11567__$1;
(statearr_11593_12418[(2)] = null);

(statearr_11593_12418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (3))){
var inst_11565 = (state_11567[(2)]);
var state_11567__$1 = state_11567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11567__$1,inst_11565);
} else {
if((state_val_11568 === (12))){
var inst_11553 = (state_11567[(2)]);
var state_11567__$1 = state_11567;
var statearr_11594_12419 = state_11567__$1;
(statearr_11594_12419[(2)] = inst_11553);

(statearr_11594_12419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (2))){
var state_11567__$1 = state_11567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11567__$1,(4),in$);
} else {
if((state_val_11568 === (23))){
var inst_11561 = (state_11567[(2)]);
var state_11567__$1 = state_11567;
var statearr_11595_12420 = state_11567__$1;
(statearr_11595_12420[(2)] = inst_11561);

(statearr_11595_12420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (19))){
var inst_11548 = (state_11567[(2)]);
var state_11567__$1 = state_11567;
var statearr_11596_12421 = state_11567__$1;
(statearr_11596_12421[(2)] = inst_11548);

(statearr_11596_12421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (11))){
var inst_11519 = (state_11567[(8)]);
var inst_11533 = (state_11567[(7)]);
var inst_11533__$1 = cljs.core.seq(inst_11519);
var state_11567__$1 = (function (){var statearr_11597 = state_11567;
(statearr_11597[(7)] = inst_11533__$1);

return statearr_11597;
})();
if(inst_11533__$1){
var statearr_11598_12422 = state_11567__$1;
(statearr_11598_12422[(1)] = (14));

} else {
var statearr_11599_12423 = state_11567__$1;
(statearr_11599_12423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (9))){
var inst_11555 = (state_11567[(2)]);
var inst_11556 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_11567__$1 = (function (){var statearr_11600 = state_11567;
(statearr_11600[(15)] = inst_11555);

return statearr_11600;
})();
if(cljs.core.truth_(inst_11556)){
var statearr_11601_12424 = state_11567__$1;
(statearr_11601_12424[(1)] = (21));

} else {
var statearr_11602_12425 = state_11567__$1;
(statearr_11602_12425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (5))){
var inst_11511 = cljs.core.async.close_BANG_(out);
var state_11567__$1 = state_11567;
var statearr_11603_12426 = state_11567__$1;
(statearr_11603_12426[(2)] = inst_11511);

(statearr_11603_12426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (14))){
var inst_11533 = (state_11567[(7)]);
var inst_11535 = cljs.core.chunked_seq_QMARK_(inst_11533);
var state_11567__$1 = state_11567;
if(inst_11535){
var statearr_11604_12427 = state_11567__$1;
(statearr_11604_12427[(1)] = (17));

} else {
var statearr_11605_12428 = state_11567__$1;
(statearr_11605_12428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (16))){
var inst_11551 = (state_11567[(2)]);
var state_11567__$1 = state_11567;
var statearr_11606_12429 = state_11567__$1;
(statearr_11606_12429[(2)] = inst_11551);

(statearr_11606_12429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11568 === (10))){
var inst_11520 = (state_11567[(10)]);
var inst_11522 = (state_11567[(12)]);
var inst_11527 = cljs.core._nth(inst_11520,inst_11522);
var state_11567__$1 = state_11567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11567__$1,(13),out,inst_11527);
} else {
if((state_val_11568 === (18))){
var inst_11533 = (state_11567[(7)]);
var inst_11542 = cljs.core.first(inst_11533);
var state_11567__$1 = state_11567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11567__$1,(20),out,inst_11542);
} else {
if((state_val_11568 === (8))){
var inst_11521 = (state_11567[(9)]);
var inst_11522 = (state_11567[(12)]);
var inst_11524 = (inst_11522 < inst_11521);
var inst_11525 = inst_11524;
var state_11567__$1 = state_11567;
if(cljs.core.truth_(inst_11525)){
var statearr_11607_12430 = state_11567__$1;
(statearr_11607_12430[(1)] = (10));

} else {
var statearr_11608_12431 = state_11567__$1;
(statearr_11608_12431[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__9478__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9478__auto____0 = (function (){
var statearr_11609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11609[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9478__auto__);

(statearr_11609[(1)] = (1));

return statearr_11609;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9478__auto____1 = (function (state_11567){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11567);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11610){if((e11610 instanceof Object)){
var ex__9481__auto__ = e11610;
var statearr_11611_12432 = state_11567;
(statearr_11611_12432[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12433 = state_11567;
state_11567 = G__12433;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9478__auto__ = function(state_11567){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9478__auto____1.call(this,state_11567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9478__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9478__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11612 = f__9633__auto__();
(statearr_11612[(6)] = c__9632__auto__);

return statearr_11612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));

return c__9632__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11615 = arguments.length;
switch (G__11615) {
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
var G__11617 = arguments.length;
switch (G__11617) {
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
var G__11622 = arguments.length;
switch (G__11622) {
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
var c__9632__auto___12437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11648){
var state_val_11649 = (state_11648[(1)]);
if((state_val_11649 === (7))){
var inst_11643 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
var statearr_11650_12438 = state_11648__$1;
(statearr_11650_12438[(2)] = inst_11643);

(statearr_11650_12438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (1))){
var inst_11624 = null;
var state_11648__$1 = (function (){var statearr_11651 = state_11648;
(statearr_11651[(7)] = inst_11624);

return statearr_11651;
})();
var statearr_11652_12439 = state_11648__$1;
(statearr_11652_12439[(2)] = null);

(statearr_11652_12439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (4))){
var inst_11627 = (state_11648[(8)]);
var inst_11627__$1 = (state_11648[(2)]);
var inst_11629 = (inst_11627__$1 == null);
var inst_11630 = cljs.core.not(inst_11629);
var state_11648__$1 = (function (){var statearr_11653 = state_11648;
(statearr_11653[(8)] = inst_11627__$1);

return statearr_11653;
})();
if(inst_11630){
var statearr_11654_12440 = state_11648__$1;
(statearr_11654_12440[(1)] = (5));

} else {
var statearr_11655_12441 = state_11648__$1;
(statearr_11655_12441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (6))){
var state_11648__$1 = state_11648;
var statearr_11656_12442 = state_11648__$1;
(statearr_11656_12442[(2)] = null);

(statearr_11656_12442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (3))){
var inst_11645 = (state_11648[(2)]);
var inst_11646 = cljs.core.async.close_BANG_(out);
var state_11648__$1 = (function (){var statearr_11659 = state_11648;
(statearr_11659[(9)] = inst_11645);

return statearr_11659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11648__$1,inst_11646);
} else {
if((state_val_11649 === (2))){
var state_11648__$1 = state_11648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11648__$1,(4),ch);
} else {
if((state_val_11649 === (11))){
var inst_11627 = (state_11648[(8)]);
var inst_11637 = (state_11648[(2)]);
var inst_11624 = inst_11627;
var state_11648__$1 = (function (){var statearr_11662 = state_11648;
(statearr_11662[(10)] = inst_11637);

(statearr_11662[(7)] = inst_11624);

return statearr_11662;
})();
var statearr_11663_12443 = state_11648__$1;
(statearr_11663_12443[(2)] = null);

(statearr_11663_12443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (9))){
var inst_11627 = (state_11648[(8)]);
var state_11648__$1 = state_11648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11648__$1,(11),out,inst_11627);
} else {
if((state_val_11649 === (5))){
var inst_11624 = (state_11648[(7)]);
var inst_11627 = (state_11648[(8)]);
var inst_11632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11627,inst_11624);
var state_11648__$1 = state_11648;
if(inst_11632){
var statearr_11665_12444 = state_11648__$1;
(statearr_11665_12444[(1)] = (8));

} else {
var statearr_11666_12445 = state_11648__$1;
(statearr_11666_12445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (10))){
var inst_11640 = (state_11648[(2)]);
var state_11648__$1 = state_11648;
var statearr_11667_12446 = state_11648__$1;
(statearr_11667_12446[(2)] = inst_11640);

(statearr_11667_12446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11649 === (8))){
var inst_11624 = (state_11648[(7)]);
var tmp11664 = inst_11624;
var inst_11624__$1 = tmp11664;
var state_11648__$1 = (function (){var statearr_11668 = state_11648;
(statearr_11668[(7)] = inst_11624__$1);

return statearr_11668;
})();
var statearr_11669_12447 = state_11648__$1;
(statearr_11669_12447[(2)] = null);

(statearr_11669_12447[(1)] = (2));


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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11670[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11670[(1)] = (1));

return statearr_11670;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11648){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11648);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11671){if((e11671 instanceof Object)){
var ex__9481__auto__ = e11671;
var statearr_11672_12448 = state_11648;
(statearr_11672_12448[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12449 = state_11648;
state_11648 = G__12449;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11673 = f__9633__auto__();
(statearr_11673[(6)] = c__9632__auto___12437);

return statearr_11673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11675 = arguments.length;
switch (G__11675) {
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
var c__9632__auto___12452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11713){
var state_val_11714 = (state_11713[(1)]);
if((state_val_11714 === (7))){
var inst_11709 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
var statearr_11715_12453 = state_11713__$1;
(statearr_11715_12453[(2)] = inst_11709);

(statearr_11715_12453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (1))){
var inst_11676 = (new Array(n));
var inst_11677 = inst_11676;
var inst_11678 = (0);
var state_11713__$1 = (function (){var statearr_11716 = state_11713;
(statearr_11716[(7)] = inst_11677);

(statearr_11716[(8)] = inst_11678);

return statearr_11716;
})();
var statearr_11717_12454 = state_11713__$1;
(statearr_11717_12454[(2)] = null);

(statearr_11717_12454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (4))){
var inst_11681 = (state_11713[(9)]);
var inst_11681__$1 = (state_11713[(2)]);
var inst_11682 = (inst_11681__$1 == null);
var inst_11683 = cljs.core.not(inst_11682);
var state_11713__$1 = (function (){var statearr_11718 = state_11713;
(statearr_11718[(9)] = inst_11681__$1);

return statearr_11718;
})();
if(inst_11683){
var statearr_11719_12455 = state_11713__$1;
(statearr_11719_12455[(1)] = (5));

} else {
var statearr_11720_12456 = state_11713__$1;
(statearr_11720_12456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (15))){
var inst_11703 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
var statearr_11721_12457 = state_11713__$1;
(statearr_11721_12457[(2)] = inst_11703);

(statearr_11721_12457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (13))){
var state_11713__$1 = state_11713;
var statearr_11722_12458 = state_11713__$1;
(statearr_11722_12458[(2)] = null);

(statearr_11722_12458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (6))){
var inst_11678 = (state_11713[(8)]);
var inst_11699 = (inst_11678 > (0));
var state_11713__$1 = state_11713;
if(cljs.core.truth_(inst_11699)){
var statearr_11723_12459 = state_11713__$1;
(statearr_11723_12459[(1)] = (12));

} else {
var statearr_11724_12460 = state_11713__$1;
(statearr_11724_12460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (3))){
var inst_11711 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11713__$1,inst_11711);
} else {
if((state_val_11714 === (12))){
var inst_11677 = (state_11713[(7)]);
var inst_11701 = cljs.core.vec(inst_11677);
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11713__$1,(15),out,inst_11701);
} else {
if((state_val_11714 === (2))){
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11713__$1,(4),ch);
} else {
if((state_val_11714 === (11))){
var inst_11693 = (state_11713[(2)]);
var inst_11694 = (new Array(n));
var inst_11677 = inst_11694;
var inst_11678 = (0);
var state_11713__$1 = (function (){var statearr_11727 = state_11713;
(statearr_11727[(10)] = inst_11693);

(statearr_11727[(7)] = inst_11677);

(statearr_11727[(8)] = inst_11678);

return statearr_11727;
})();
var statearr_11730_12461 = state_11713__$1;
(statearr_11730_12461[(2)] = null);

(statearr_11730_12461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (9))){
var inst_11677 = (state_11713[(7)]);
var inst_11691 = cljs.core.vec(inst_11677);
var state_11713__$1 = state_11713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11713__$1,(11),out,inst_11691);
} else {
if((state_val_11714 === (5))){
var inst_11681 = (state_11713[(9)]);
var inst_11677 = (state_11713[(7)]);
var inst_11678 = (state_11713[(8)]);
var inst_11686 = (state_11713[(11)]);
var inst_11685 = (inst_11677[inst_11678] = inst_11681);
var inst_11686__$1 = (inst_11678 + (1));
var inst_11687 = (inst_11686__$1 < n);
var state_11713__$1 = (function (){var statearr_11731 = state_11713;
(statearr_11731[(12)] = inst_11685);

(statearr_11731[(11)] = inst_11686__$1);

return statearr_11731;
})();
if(cljs.core.truth_(inst_11687)){
var statearr_11732_12462 = state_11713__$1;
(statearr_11732_12462[(1)] = (8));

} else {
var statearr_11733_12463 = state_11713__$1;
(statearr_11733_12463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (14))){
var inst_11706 = (state_11713[(2)]);
var inst_11707 = cljs.core.async.close_BANG_(out);
var state_11713__$1 = (function (){var statearr_11735 = state_11713;
(statearr_11735[(13)] = inst_11706);

return statearr_11735;
})();
var statearr_11736_12464 = state_11713__$1;
(statearr_11736_12464[(2)] = inst_11707);

(statearr_11736_12464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (10))){
var inst_11697 = (state_11713[(2)]);
var state_11713__$1 = state_11713;
var statearr_11737_12465 = state_11713__$1;
(statearr_11737_12465[(2)] = inst_11697);

(statearr_11737_12465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11714 === (8))){
var inst_11677 = (state_11713[(7)]);
var inst_11686 = (state_11713[(11)]);
var tmp11734 = inst_11677;
var inst_11677__$1 = tmp11734;
var inst_11678 = inst_11686;
var state_11713__$1 = (function (){var statearr_11740 = state_11713;
(statearr_11740[(7)] = inst_11677__$1);

(statearr_11740[(8)] = inst_11678);

return statearr_11740;
})();
var statearr_11741_12466 = state_11713__$1;
(statearr_11741_12466[(2)] = null);

(statearr_11741_12466[(1)] = (2));


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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11743[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11743[(1)] = (1));

return statearr_11743;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11713){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11713);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11744){if((e11744 instanceof Object)){
var ex__9481__auto__ = e11744;
var statearr_11745_12467 = state_11713;
(statearr_11745_12467[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12468 = state_11713;
state_11713 = G__12468;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11747 = f__9633__auto__();
(statearr_11747[(6)] = c__9632__auto___12452);

return statearr_11747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11749 = arguments.length;
switch (G__11749) {
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
var c__9632__auto___12470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__9633__auto__ = (function (){var switch__9477__auto__ = (function (state_11793){
var state_val_11794 = (state_11793[(1)]);
if((state_val_11794 === (7))){
var inst_11789 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
var statearr_11797_12471 = state_11793__$1;
(statearr_11797_12471[(2)] = inst_11789);

(statearr_11797_12471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (1))){
var inst_11750 = [];
var inst_11751 = inst_11750;
var inst_11752 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11793__$1 = (function (){var statearr_11799 = state_11793;
(statearr_11799[(7)] = inst_11751);

(statearr_11799[(8)] = inst_11752);

return statearr_11799;
})();
var statearr_11800_12472 = state_11793__$1;
(statearr_11800_12472[(2)] = null);

(statearr_11800_12472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (4))){
var inst_11755 = (state_11793[(9)]);
var inst_11755__$1 = (state_11793[(2)]);
var inst_11756 = (inst_11755__$1 == null);
var inst_11757 = cljs.core.not(inst_11756);
var state_11793__$1 = (function (){var statearr_11801 = state_11793;
(statearr_11801[(9)] = inst_11755__$1);

return statearr_11801;
})();
if(inst_11757){
var statearr_11802_12473 = state_11793__$1;
(statearr_11802_12473[(1)] = (5));

} else {
var statearr_11803_12474 = state_11793__$1;
(statearr_11803_12474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (15))){
var inst_11783 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
var statearr_11804_12475 = state_11793__$1;
(statearr_11804_12475[(2)] = inst_11783);

(statearr_11804_12475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (13))){
var state_11793__$1 = state_11793;
var statearr_11805_12476 = state_11793__$1;
(statearr_11805_12476[(2)] = null);

(statearr_11805_12476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (6))){
var inst_11751 = (state_11793[(7)]);
var inst_11778 = inst_11751.length;
var inst_11779 = (inst_11778 > (0));
var state_11793__$1 = state_11793;
if(cljs.core.truth_(inst_11779)){
var statearr_11807_12477 = state_11793__$1;
(statearr_11807_12477[(1)] = (12));

} else {
var statearr_11808_12478 = state_11793__$1;
(statearr_11808_12478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (3))){
var inst_11791 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11793__$1,inst_11791);
} else {
if((state_val_11794 === (12))){
var inst_11751 = (state_11793[(7)]);
var inst_11781 = cljs.core.vec(inst_11751);
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11793__$1,(15),out,inst_11781);
} else {
if((state_val_11794 === (2))){
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11793__$1,(4),ch);
} else {
if((state_val_11794 === (11))){
var inst_11759 = (state_11793[(10)]);
var inst_11755 = (state_11793[(9)]);
var inst_11771 = (state_11793[(2)]);
var inst_11772 = [];
var inst_11773 = inst_11772.push(inst_11755);
var inst_11751 = inst_11772;
var inst_11752 = inst_11759;
var state_11793__$1 = (function (){var statearr_11810 = state_11793;
(statearr_11810[(11)] = inst_11773);

(statearr_11810[(7)] = inst_11751);

(statearr_11810[(8)] = inst_11752);

(statearr_11810[(12)] = inst_11771);

return statearr_11810;
})();
var statearr_11811_12479 = state_11793__$1;
(statearr_11811_12479[(2)] = null);

(statearr_11811_12479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (9))){
var inst_11751 = (state_11793[(7)]);
var inst_11769 = cljs.core.vec(inst_11751);
var state_11793__$1 = state_11793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11793__$1,(11),out,inst_11769);
} else {
if((state_val_11794 === (5))){
var inst_11759 = (state_11793[(10)]);
var inst_11755 = (state_11793[(9)]);
var inst_11752 = (state_11793[(8)]);
var inst_11759__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11755) : f.call(null,inst_11755));
var inst_11760 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11759__$1,inst_11752);
var inst_11761 = cljs.core.keyword_identical_QMARK_(inst_11752,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11762 = ((inst_11760) || (inst_11761));
var state_11793__$1 = (function (){var statearr_11812 = state_11793;
(statearr_11812[(10)] = inst_11759__$1);

return statearr_11812;
})();
if(cljs.core.truth_(inst_11762)){
var statearr_11813_12480 = state_11793__$1;
(statearr_11813_12480[(1)] = (8));

} else {
var statearr_11814_12481 = state_11793__$1;
(statearr_11814_12481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (14))){
var inst_11786 = (state_11793[(2)]);
var inst_11787 = cljs.core.async.close_BANG_(out);
var state_11793__$1 = (function (){var statearr_11816 = state_11793;
(statearr_11816[(13)] = inst_11786);

return statearr_11816;
})();
var statearr_11817_12482 = state_11793__$1;
(statearr_11817_12482[(2)] = inst_11787);

(statearr_11817_12482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (10))){
var inst_11776 = (state_11793[(2)]);
var state_11793__$1 = state_11793;
var statearr_11818_12483 = state_11793__$1;
(statearr_11818_12483[(2)] = inst_11776);

(statearr_11818_12483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11794 === (8))){
var inst_11759 = (state_11793[(10)]);
var inst_11755 = (state_11793[(9)]);
var inst_11751 = (state_11793[(7)]);
var inst_11766 = inst_11751.push(inst_11755);
var tmp11815 = inst_11751;
var inst_11751__$1 = tmp11815;
var inst_11752 = inst_11759;
var state_11793__$1 = (function (){var statearr_11819 = state_11793;
(statearr_11819[(7)] = inst_11751__$1);

(statearr_11819[(8)] = inst_11752);

(statearr_11819[(14)] = inst_11766);

return statearr_11819;
})();
var statearr_11820_12484 = state_11793__$1;
(statearr_11820_12484[(2)] = null);

(statearr_11820_12484[(1)] = (2));


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
var cljs$core$async$state_machine__9478__auto__ = null;
var cljs$core$async$state_machine__9478__auto____0 = (function (){
var statearr_11821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11821[(0)] = cljs$core$async$state_machine__9478__auto__);

(statearr_11821[(1)] = (1));

return statearr_11821;
});
var cljs$core$async$state_machine__9478__auto____1 = (function (state_11793){
while(true){
var ret_value__9479__auto__ = (function (){try{while(true){
var result__9480__auto__ = switch__9477__auto__(state_11793);
if(cljs.core.keyword_identical_QMARK_(result__9480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9480__auto__;
}
break;
}
}catch (e11822){if((e11822 instanceof Object)){
var ex__9481__auto__ = e11822;
var statearr_11823_12485 = state_11793;
(statearr_11823_12485[(5)] = ex__9481__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12486 = state_11793;
state_11793 = G__12486;
continue;
} else {
return ret_value__9479__auto__;
}
break;
}
});
cljs$core$async$state_machine__9478__auto__ = function(state_11793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9478__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9478__auto____1.call(this,state_11793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9478__auto____0;
cljs$core$async$state_machine__9478__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9478__auto____1;
return cljs$core$async$state_machine__9478__auto__;
})()
})();
var state__9634__auto__ = (function (){var statearr_11824 = f__9633__auto__();
(statearr_11824[(6)] = c__9632__auto___12470);

return statearr_11824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9634__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
