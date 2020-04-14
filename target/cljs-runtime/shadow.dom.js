goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__38379 = coll;
var G__38380 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__38379,G__38380) : shadow.dom.lazy_native_coll_seq.call(null,G__38379,G__38380));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__38404 = arguments.length;
switch (G__38404) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__38414 = arguments.length;
switch (G__38414) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__38423 = arguments.length;
switch (G__38423) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__38430 = arguments.length;
switch (G__38430) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__38437 = arguments.length;
switch (G__38437) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__38448 = arguments.length;
switch (G__38448) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e38459){if((e38459 instanceof Object)){
var e = e38459;
return console.log("didnt support attachEvent",el,e);
} else {
throw e38459;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__38470 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__38471 = null;
var count__38472 = (0);
var i__38473 = (0);
while(true){
if((i__38473 < count__38472)){
var el = chunk__38471.cljs$core$IIndexed$_nth$arity$2(null,i__38473);
var handler_39478__$1 = ((function (seq__38470,chunk__38471,count__38472,i__38473,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38470,chunk__38471,count__38472,i__38473,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39478__$1);


var G__39479 = seq__38470;
var G__39480 = chunk__38471;
var G__39481 = count__38472;
var G__39482 = (i__38473 + (1));
seq__38470 = G__39479;
chunk__38471 = G__39480;
count__38472 = G__39481;
i__38473 = G__39482;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38470);
if(temp__5735__auto__){
var seq__38470__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38470__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38470__$1);
var G__39486 = cljs.core.chunk_rest(seq__38470__$1);
var G__39487 = c__4609__auto__;
var G__39488 = cljs.core.count(c__4609__auto__);
var G__39489 = (0);
seq__38470 = G__39486;
chunk__38471 = G__39487;
count__38472 = G__39488;
i__38473 = G__39489;
continue;
} else {
var el = cljs.core.first(seq__38470__$1);
var handler_39490__$1 = ((function (seq__38470,chunk__38471,count__38472,i__38473,el,seq__38470__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__38470,chunk__38471,count__38472,i__38473,el,seq__38470__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_39490__$1);


var G__39499 = cljs.core.next(seq__38470__$1);
var G__39500 = null;
var G__39501 = (0);
var G__39502 = (0);
seq__38470 = G__39499;
chunk__38471 = G__39500;
count__38472 = G__39501;
i__38473 = G__39502;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__38508 = arguments.length;
switch (G__38508) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__38525 = cljs.core.seq(events);
var chunk__38526 = null;
var count__38527 = (0);
var i__38528 = (0);
while(true){
if((i__38528 < count__38527)){
var vec__38541 = chunk__38526.cljs$core$IIndexed$_nth$arity$2(null,i__38528);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39519 = seq__38525;
var G__39520 = chunk__38526;
var G__39521 = count__38527;
var G__39522 = (i__38528 + (1));
seq__38525 = G__39519;
chunk__38526 = G__39520;
count__38527 = G__39521;
i__38528 = G__39522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38525);
if(temp__5735__auto__){
var seq__38525__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38525__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38525__$1);
var G__39532 = cljs.core.chunk_rest(seq__38525__$1);
var G__39533 = c__4609__auto__;
var G__39534 = cljs.core.count(c__4609__auto__);
var G__39535 = (0);
seq__38525 = G__39532;
chunk__38526 = G__39533;
count__38527 = G__39534;
i__38528 = G__39535;
continue;
} else {
var vec__38549 = cljs.core.first(seq__38525__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38549,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__39542 = cljs.core.next(seq__38525__$1);
var G__39543 = null;
var G__39544 = (0);
var G__39545 = (0);
seq__38525 = G__39542;
chunk__38526 = G__39543;
count__38527 = G__39544;
i__38528 = G__39545;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__38558 = cljs.core.seq(styles);
var chunk__38559 = null;
var count__38560 = (0);
var i__38561 = (0);
while(true){
if((i__38561 < count__38560)){
var vec__38586 = chunk__38559.cljs$core$IIndexed$_nth$arity$2(null,i__38561);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39550 = seq__38558;
var G__39551 = chunk__38559;
var G__39552 = count__38560;
var G__39553 = (i__38561 + (1));
seq__38558 = G__39550;
chunk__38559 = G__39551;
count__38560 = G__39552;
i__38561 = G__39553;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38558);
if(temp__5735__auto__){
var seq__38558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38558__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38558__$1);
var G__39560 = cljs.core.chunk_rest(seq__38558__$1);
var G__39561 = c__4609__auto__;
var G__39562 = cljs.core.count(c__4609__auto__);
var G__39563 = (0);
seq__38558 = G__39560;
chunk__38559 = G__39561;
count__38560 = G__39562;
i__38561 = G__39563;
continue;
} else {
var vec__38593 = cljs.core.first(seq__38558__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38593,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39565 = cljs.core.next(seq__38558__$1);
var G__39566 = null;
var G__39567 = (0);
var G__39568 = (0);
seq__38558 = G__39565;
chunk__38559 = G__39566;
count__38560 = G__39567;
i__38561 = G__39568;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__38598_39571 = key;
var G__38598_39572__$1 = (((G__38598_39571 instanceof cljs.core.Keyword))?G__38598_39571.fqn:null);
switch (G__38598_39572__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_39589 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_39589,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_39589,"aria-");
}
})())){
el.setAttribute(ks_39589,value);
} else {
(el[ks_39589] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__38635){
var map__38637 = p__38635;
var map__38637__$1 = (((((!((map__38637 == null))))?(((((map__38637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38637):map__38637);
var props = map__38637__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__38640 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__38644 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__38644,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__38644;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__38647 = arguments.length;
switch (G__38647) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__38658){
var vec__38659 = p__38658;
var seq__38660 = cljs.core.seq(vec__38659);
var first__38661 = cljs.core.first(seq__38660);
var seq__38660__$1 = cljs.core.next(seq__38660);
var nn = first__38661;
var first__38661__$1 = cljs.core.first(seq__38660__$1);
var seq__38660__$2 = cljs.core.next(seq__38660__$1);
var np = first__38661__$1;
var nc = seq__38660__$2;
var node = vec__38659;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38668 = nn;
var G__38669 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38668,G__38669) : create_fn.call(null,G__38668,G__38669));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38671 = nn;
var G__38672 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__38671,G__38672) : create_fn.call(null,G__38671,G__38672));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__38677 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38677,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38677,(1),null);
var seq__38681_39664 = cljs.core.seq(node_children);
var chunk__38682_39665 = null;
var count__38683_39666 = (0);
var i__38684_39667 = (0);
while(true){
if((i__38684_39667 < count__38683_39666)){
var child_struct_39668 = chunk__38682_39665.cljs$core$IIndexed$_nth$arity$2(null,i__38684_39667);
var children_39669 = shadow.dom.dom_node(child_struct_39668);
if(cljs.core.seq_QMARK_(children_39669)){
var seq__38718_39670 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39669));
var chunk__38720_39671 = null;
var count__38721_39672 = (0);
var i__38722_39673 = (0);
while(true){
if((i__38722_39673 < count__38721_39672)){
var child_39676 = chunk__38720_39671.cljs$core$IIndexed$_nth$arity$2(null,i__38722_39673);
if(cljs.core.truth_(child_39676)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39676);


var G__39677 = seq__38718_39670;
var G__39678 = chunk__38720_39671;
var G__39679 = count__38721_39672;
var G__39680 = (i__38722_39673 + (1));
seq__38718_39670 = G__39677;
chunk__38720_39671 = G__39678;
count__38721_39672 = G__39679;
i__38722_39673 = G__39680;
continue;
} else {
var G__39685 = seq__38718_39670;
var G__39686 = chunk__38720_39671;
var G__39687 = count__38721_39672;
var G__39688 = (i__38722_39673 + (1));
seq__38718_39670 = G__39685;
chunk__38720_39671 = G__39686;
count__38721_39672 = G__39687;
i__38722_39673 = G__39688;
continue;
}
} else {
var temp__5735__auto___39690 = cljs.core.seq(seq__38718_39670);
if(temp__5735__auto___39690){
var seq__38718_39691__$1 = temp__5735__auto___39690;
if(cljs.core.chunked_seq_QMARK_(seq__38718_39691__$1)){
var c__4609__auto___39696 = cljs.core.chunk_first(seq__38718_39691__$1);
var G__39698 = cljs.core.chunk_rest(seq__38718_39691__$1);
var G__39699 = c__4609__auto___39696;
var G__39700 = cljs.core.count(c__4609__auto___39696);
var G__39701 = (0);
seq__38718_39670 = G__39698;
chunk__38720_39671 = G__39699;
count__38721_39672 = G__39700;
i__38722_39673 = G__39701;
continue;
} else {
var child_39704 = cljs.core.first(seq__38718_39691__$1);
if(cljs.core.truth_(child_39704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39704);


var G__39707 = cljs.core.next(seq__38718_39691__$1);
var G__39708 = null;
var G__39709 = (0);
var G__39710 = (0);
seq__38718_39670 = G__39707;
chunk__38720_39671 = G__39708;
count__38721_39672 = G__39709;
i__38722_39673 = G__39710;
continue;
} else {
var G__39712 = cljs.core.next(seq__38718_39691__$1);
var G__39713 = null;
var G__39714 = (0);
var G__39715 = (0);
seq__38718_39670 = G__39712;
chunk__38720_39671 = G__39713;
count__38721_39672 = G__39714;
i__38722_39673 = G__39715;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39669);
}


var G__39718 = seq__38681_39664;
var G__39719 = chunk__38682_39665;
var G__39720 = count__38683_39666;
var G__39721 = (i__38684_39667 + (1));
seq__38681_39664 = G__39718;
chunk__38682_39665 = G__39719;
count__38683_39666 = G__39720;
i__38684_39667 = G__39721;
continue;
} else {
var temp__5735__auto___39723 = cljs.core.seq(seq__38681_39664);
if(temp__5735__auto___39723){
var seq__38681_39726__$1 = temp__5735__auto___39723;
if(cljs.core.chunked_seq_QMARK_(seq__38681_39726__$1)){
var c__4609__auto___39728 = cljs.core.chunk_first(seq__38681_39726__$1);
var G__39730 = cljs.core.chunk_rest(seq__38681_39726__$1);
var G__39731 = c__4609__auto___39728;
var G__39732 = cljs.core.count(c__4609__auto___39728);
var G__39733 = (0);
seq__38681_39664 = G__39730;
chunk__38682_39665 = G__39731;
count__38683_39666 = G__39732;
i__38684_39667 = G__39733;
continue;
} else {
var child_struct_39737 = cljs.core.first(seq__38681_39726__$1);
var children_39739 = shadow.dom.dom_node(child_struct_39737);
if(cljs.core.seq_QMARK_(children_39739)){
var seq__38740_39744 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39739));
var chunk__38742_39745 = null;
var count__38743_39746 = (0);
var i__38744_39747 = (0);
while(true){
if((i__38744_39747 < count__38743_39746)){
var child_39754 = chunk__38742_39745.cljs$core$IIndexed$_nth$arity$2(null,i__38744_39747);
if(cljs.core.truth_(child_39754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39754);


var G__39759 = seq__38740_39744;
var G__39760 = chunk__38742_39745;
var G__39761 = count__38743_39746;
var G__39762 = (i__38744_39747 + (1));
seq__38740_39744 = G__39759;
chunk__38742_39745 = G__39760;
count__38743_39746 = G__39761;
i__38744_39747 = G__39762;
continue;
} else {
var G__39770 = seq__38740_39744;
var G__39771 = chunk__38742_39745;
var G__39772 = count__38743_39746;
var G__39773 = (i__38744_39747 + (1));
seq__38740_39744 = G__39770;
chunk__38742_39745 = G__39771;
count__38743_39746 = G__39772;
i__38744_39747 = G__39773;
continue;
}
} else {
var temp__5735__auto___39778__$1 = cljs.core.seq(seq__38740_39744);
if(temp__5735__auto___39778__$1){
var seq__38740_39779__$1 = temp__5735__auto___39778__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38740_39779__$1)){
var c__4609__auto___39780 = cljs.core.chunk_first(seq__38740_39779__$1);
var G__39781 = cljs.core.chunk_rest(seq__38740_39779__$1);
var G__39782 = c__4609__auto___39780;
var G__39783 = cljs.core.count(c__4609__auto___39780);
var G__39784 = (0);
seq__38740_39744 = G__39781;
chunk__38742_39745 = G__39782;
count__38743_39746 = G__39783;
i__38744_39747 = G__39784;
continue;
} else {
var child_39787 = cljs.core.first(seq__38740_39779__$1);
if(cljs.core.truth_(child_39787)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39787);


var G__39788 = cljs.core.next(seq__38740_39779__$1);
var G__39789 = null;
var G__39790 = (0);
var G__39791 = (0);
seq__38740_39744 = G__39788;
chunk__38742_39745 = G__39789;
count__38743_39746 = G__39790;
i__38744_39747 = G__39791;
continue;
} else {
var G__39793 = cljs.core.next(seq__38740_39779__$1);
var G__39794 = null;
var G__39795 = (0);
var G__39796 = (0);
seq__38740_39744 = G__39793;
chunk__38742_39745 = G__39794;
count__38743_39746 = G__39795;
i__38744_39747 = G__39796;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39739);
}


var G__39798 = cljs.core.next(seq__38681_39726__$1);
var G__39799 = null;
var G__39800 = (0);
var G__39801 = (0);
seq__38681_39664 = G__39798;
chunk__38682_39665 = G__39799;
count__38683_39666 = G__39800;
i__38684_39667 = G__39801;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38805 = cljs.core.seq(node);
var chunk__38806 = null;
var count__38807 = (0);
var i__38808 = (0);
while(true){
if((i__38808 < count__38807)){
var n = chunk__38806.cljs$core$IIndexed$_nth$arity$2(null,i__38808);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39824 = seq__38805;
var G__39825 = chunk__38806;
var G__39826 = count__38807;
var G__39827 = (i__38808 + (1));
seq__38805 = G__39824;
chunk__38806 = G__39825;
count__38807 = G__39826;
i__38808 = G__39827;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38805);
if(temp__5735__auto__){
var seq__38805__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38805__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38805__$1);
var G__39829 = cljs.core.chunk_rest(seq__38805__$1);
var G__39830 = c__4609__auto__;
var G__39831 = cljs.core.count(c__4609__auto__);
var G__39832 = (0);
seq__38805 = G__39829;
chunk__38806 = G__39830;
count__38807 = G__39831;
i__38808 = G__39832;
continue;
} else {
var n = cljs.core.first(seq__38805__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39834 = cljs.core.next(seq__38805__$1);
var G__39835 = null;
var G__39836 = (0);
var G__39837 = (0);
seq__38805 = G__39834;
chunk__38806 = G__39835;
count__38807 = G__39836;
i__38808 = G__39837;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38814 = arguments.length;
switch (G__38814) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38820 = arguments.length;
switch (G__38820) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38831 = arguments.length;
switch (G__38831) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39883 = arguments.length;
var i__4790__auto___39884 = (0);
while(true){
if((i__4790__auto___39884 < len__4789__auto___39883)){
args__4795__auto__.push((arguments[i__4790__auto___39884]));

var G__39887 = (i__4790__auto___39884 + (1));
i__4790__auto___39884 = G__39887;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38856_39890 = cljs.core.seq(nodes);
var chunk__38857_39891 = null;
var count__38858_39892 = (0);
var i__38859_39893 = (0);
while(true){
if((i__38859_39893 < count__38858_39892)){
var node_39899 = chunk__38857_39891.cljs$core$IIndexed$_nth$arity$2(null,i__38859_39893);
fragment.appendChild(shadow.dom._to_dom(node_39899));


var G__39900 = seq__38856_39890;
var G__39901 = chunk__38857_39891;
var G__39902 = count__38858_39892;
var G__39903 = (i__38859_39893 + (1));
seq__38856_39890 = G__39900;
chunk__38857_39891 = G__39901;
count__38858_39892 = G__39902;
i__38859_39893 = G__39903;
continue;
} else {
var temp__5735__auto___39906 = cljs.core.seq(seq__38856_39890);
if(temp__5735__auto___39906){
var seq__38856_39908__$1 = temp__5735__auto___39906;
if(cljs.core.chunked_seq_QMARK_(seq__38856_39908__$1)){
var c__4609__auto___39909 = cljs.core.chunk_first(seq__38856_39908__$1);
var G__39910 = cljs.core.chunk_rest(seq__38856_39908__$1);
var G__39911 = c__4609__auto___39909;
var G__39912 = cljs.core.count(c__4609__auto___39909);
var G__39913 = (0);
seq__38856_39890 = G__39910;
chunk__38857_39891 = G__39911;
count__38858_39892 = G__39912;
i__38859_39893 = G__39913;
continue;
} else {
var node_39914 = cljs.core.first(seq__38856_39908__$1);
fragment.appendChild(shadow.dom._to_dom(node_39914));


var G__39916 = cljs.core.next(seq__38856_39908__$1);
var G__39917 = null;
var G__39918 = (0);
var G__39919 = (0);
seq__38856_39890 = G__39916;
chunk__38857_39891 = G__39917;
count__38858_39892 = G__39918;
i__38859_39893 = G__39919;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38846){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38846));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38862_39926 = cljs.core.seq(scripts);
var chunk__38863_39927 = null;
var count__38864_39928 = (0);
var i__38865_39929 = (0);
while(true){
if((i__38865_39929 < count__38864_39928)){
var vec__38877_39933 = chunk__38863_39927.cljs$core$IIndexed$_nth$arity$2(null,i__38865_39929);
var script_tag_39934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877_39933,(0),null);
var script_body_39935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38877_39933,(1),null);
eval(script_body_39935);


var G__39939 = seq__38862_39926;
var G__39940 = chunk__38863_39927;
var G__39941 = count__38864_39928;
var G__39942 = (i__38865_39929 + (1));
seq__38862_39926 = G__39939;
chunk__38863_39927 = G__39940;
count__38864_39928 = G__39941;
i__38865_39929 = G__39942;
continue;
} else {
var temp__5735__auto___39943 = cljs.core.seq(seq__38862_39926);
if(temp__5735__auto___39943){
var seq__38862_39944__$1 = temp__5735__auto___39943;
if(cljs.core.chunked_seq_QMARK_(seq__38862_39944__$1)){
var c__4609__auto___39948 = cljs.core.chunk_first(seq__38862_39944__$1);
var G__39949 = cljs.core.chunk_rest(seq__38862_39944__$1);
var G__39950 = c__4609__auto___39948;
var G__39951 = cljs.core.count(c__4609__auto___39948);
var G__39952 = (0);
seq__38862_39926 = G__39949;
chunk__38863_39927 = G__39950;
count__38864_39928 = G__39951;
i__38865_39929 = G__39952;
continue;
} else {
var vec__38883_39955 = cljs.core.first(seq__38862_39944__$1);
var script_tag_39956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38883_39955,(0),null);
var script_body_39957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38883_39955,(1),null);
eval(script_body_39957);


var G__39960 = cljs.core.next(seq__38862_39944__$1);
var G__39961 = null;
var G__39962 = (0);
var G__39963 = (0);
seq__38862_39926 = G__39960;
chunk__38863_39927 = G__39961;
count__38864_39928 = G__39962;
i__38865_39929 = G__39963;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38886){
var vec__38887 = p__38886;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38887,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38887,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38893 = arguments.length;
switch (G__38893) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38926 = cljs.core.seq(style_keys);
var chunk__38927 = null;
var count__38928 = (0);
var i__38929 = (0);
while(true){
if((i__38929 < count__38928)){
var it = chunk__38927.cljs$core$IIndexed$_nth$arity$2(null,i__38929);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39985 = seq__38926;
var G__39986 = chunk__38927;
var G__39987 = count__38928;
var G__39988 = (i__38929 + (1));
seq__38926 = G__39985;
chunk__38927 = G__39986;
count__38928 = G__39987;
i__38929 = G__39988;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38926);
if(temp__5735__auto__){
var seq__38926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38926__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38926__$1);
var G__39989 = cljs.core.chunk_rest(seq__38926__$1);
var G__39990 = c__4609__auto__;
var G__39991 = cljs.core.count(c__4609__auto__);
var G__39992 = (0);
seq__38926 = G__39989;
chunk__38927 = G__39990;
count__38928 = G__39991;
i__38929 = G__39992;
continue;
} else {
var it = cljs.core.first(seq__38926__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39993 = cljs.core.next(seq__38926__$1);
var G__39994 = null;
var G__39995 = (0);
var G__39996 = (0);
seq__38926 = G__39993;
chunk__38927 = G__39994;
count__38928 = G__39995;
i__38929 = G__39996;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k38955,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__38970 = k38955;
var G__38970__$1 = (((G__38970 instanceof cljs.core.Keyword))?G__38970.fqn:null);
switch (G__38970__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38955,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__38977){
var vec__38978 = p__38977;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38978,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38978,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38954){
var self__ = this;
var G__38954__$1 = this;
return (new cljs.core.RecordIter((0),G__38954__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38956,other38957){
var self__ = this;
var this38956__$1 = this;
return (((!((other38957 == null)))) && ((this38956__$1.constructor === other38957.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38956__$1.x,other38957.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38956__$1.y,other38957.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38956__$1.__extmap,other38957.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__38954){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__38995 = cljs.core.keyword_identical_QMARK_;
var expr__38996 = k__4447__auto__;
if(cljs.core.truth_((pred__38995.cljs$core$IFn$_invoke$arity$2 ? pred__38995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38996) : pred__38995.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38996)))){
return (new shadow.dom.Coordinate(G__38954,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38995.cljs$core$IFn$_invoke$arity$2 ? pred__38995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38996) : pred__38995.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38996)))){
return (new shadow.dom.Coordinate(self__.x,G__38954,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__38954),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__38954){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38954,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38961){
var extmap__4478__auto__ = (function (){var G__39003 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38961,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38961)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39003);
} else {
return G__39003;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38961),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k39010,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__39017 = k39010;
var G__39017__$1 = (((G__39017 instanceof cljs.core.Keyword))?G__39017.fqn:null);
switch (G__39017__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39010,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__39021){
var vec__39022 = p__39021;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39022,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39009){
var self__ = this;
var G__39009__$1 = this;
return (new cljs.core.RecordIter((0),G__39009__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39011,other39012){
var self__ = this;
var this39011__$1 = this;
return (((!((other39012 == null)))) && ((this39011__$1.constructor === other39012.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39011__$1.w,other39012.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39011__$1.h,other39012.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39011__$1.__extmap,other39012.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__39009){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__39060 = cljs.core.keyword_identical_QMARK_;
var expr__39061 = k__4447__auto__;
if(cljs.core.truth_((pred__39060.cljs$core$IFn$_invoke$arity$2 ? pred__39060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39061) : pred__39060.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39061)))){
return (new shadow.dom.Size(G__39009,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39060.cljs$core$IFn$_invoke$arity$2 ? pred__39060.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39061) : pred__39060.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39061)))){
return (new shadow.dom.Size(self__.w,G__39009,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__39009),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__39009){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39009,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39014){
var extmap__4478__auto__ = (function (){var G__39076 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39014,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39014)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39076);
} else {
return G__39076;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39014),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39014),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__40164 = (i + (1));
var G__40165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40164;
ret = G__40165;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39096){
var vec__39097 = p__39096;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39097,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39105 = arguments.length;
switch (G__39105) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40187 = ps;
var G__40188 = (i + (1));
el__$1 = G__40187;
i = G__40188;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39139 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39149_40200 = cljs.core.seq(props);
var chunk__39150_40201 = null;
var count__39151_40202 = (0);
var i__39152_40203 = (0);
while(true){
if((i__39152_40203 < count__39151_40202)){
var vec__39193_40204 = chunk__39150_40201.cljs$core$IIndexed$_nth$arity$2(null,i__39152_40203);
var k_40205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39193_40204,(0),null);
var v_40206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39193_40204,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_40205);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40205),v_40206);


var G__40209 = seq__39149_40200;
var G__40210 = chunk__39150_40201;
var G__40211 = count__39151_40202;
var G__40212 = (i__39152_40203 + (1));
seq__39149_40200 = G__40209;
chunk__39150_40201 = G__40210;
count__39151_40202 = G__40211;
i__39152_40203 = G__40212;
continue;
} else {
var temp__5735__auto___40214 = cljs.core.seq(seq__39149_40200);
if(temp__5735__auto___40214){
var seq__39149_40215__$1 = temp__5735__auto___40214;
if(cljs.core.chunked_seq_QMARK_(seq__39149_40215__$1)){
var c__4609__auto___40216 = cljs.core.chunk_first(seq__39149_40215__$1);
var G__40217 = cljs.core.chunk_rest(seq__39149_40215__$1);
var G__40218 = c__4609__auto___40216;
var G__40219 = cljs.core.count(c__4609__auto___40216);
var G__40220 = (0);
seq__39149_40200 = G__40217;
chunk__39150_40201 = G__40218;
count__39151_40202 = G__40219;
i__39152_40203 = G__40220;
continue;
} else {
var vec__39204_40224 = cljs.core.first(seq__39149_40215__$1);
var k_40225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39204_40224,(0),null);
var v_40226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39204_40224,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_40225);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40225),v_40226);


var G__40227 = cljs.core.next(seq__39149_40215__$1);
var G__40228 = null;
var G__40229 = (0);
var G__40230 = (0);
seq__39149_40200 = G__40227;
chunk__39150_40201 = G__40228;
count__39151_40202 = G__40229;
i__39152_40203 = G__40230;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39224 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39224,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39224,(1),null);
var seq__39231_40234 = cljs.core.seq(node_children);
var chunk__39233_40235 = null;
var count__39234_40236 = (0);
var i__39235_40237 = (0);
while(true){
if((i__39235_40237 < count__39234_40236)){
var child_struct_40239 = chunk__39233_40235.cljs$core$IIndexed$_nth$arity$2(null,i__39235_40237);
if((!((child_struct_40239 == null)))){
if(typeof child_struct_40239 === 'string'){
var text_40241 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40241),child_struct_40239].join(''));
} else {
var children_40243 = shadow.dom.svg_node(child_struct_40239);
if(cljs.core.seq_QMARK_(children_40243)){
var seq__39278_40245 = cljs.core.seq(children_40243);
var chunk__39280_40246 = null;
var count__39281_40247 = (0);
var i__39282_40248 = (0);
while(true){
if((i__39282_40248 < count__39281_40247)){
var child_40250 = chunk__39280_40246.cljs$core$IIndexed$_nth$arity$2(null,i__39282_40248);
if(cljs.core.truth_(child_40250)){
node.appendChild(child_40250);


var G__40253 = seq__39278_40245;
var G__40254 = chunk__39280_40246;
var G__40255 = count__39281_40247;
var G__40256 = (i__39282_40248 + (1));
seq__39278_40245 = G__40253;
chunk__39280_40246 = G__40254;
count__39281_40247 = G__40255;
i__39282_40248 = G__40256;
continue;
} else {
var G__40257 = seq__39278_40245;
var G__40258 = chunk__39280_40246;
var G__40259 = count__39281_40247;
var G__40260 = (i__39282_40248 + (1));
seq__39278_40245 = G__40257;
chunk__39280_40246 = G__40258;
count__39281_40247 = G__40259;
i__39282_40248 = G__40260;
continue;
}
} else {
var temp__5735__auto___40261 = cljs.core.seq(seq__39278_40245);
if(temp__5735__auto___40261){
var seq__39278_40262__$1 = temp__5735__auto___40261;
if(cljs.core.chunked_seq_QMARK_(seq__39278_40262__$1)){
var c__4609__auto___40263 = cljs.core.chunk_first(seq__39278_40262__$1);
var G__40264 = cljs.core.chunk_rest(seq__39278_40262__$1);
var G__40265 = c__4609__auto___40263;
var G__40266 = cljs.core.count(c__4609__auto___40263);
var G__40267 = (0);
seq__39278_40245 = G__40264;
chunk__39280_40246 = G__40265;
count__39281_40247 = G__40266;
i__39282_40248 = G__40267;
continue;
} else {
var child_40269 = cljs.core.first(seq__39278_40262__$1);
if(cljs.core.truth_(child_40269)){
node.appendChild(child_40269);


var G__40270 = cljs.core.next(seq__39278_40262__$1);
var G__40271 = null;
var G__40272 = (0);
var G__40273 = (0);
seq__39278_40245 = G__40270;
chunk__39280_40246 = G__40271;
count__39281_40247 = G__40272;
i__39282_40248 = G__40273;
continue;
} else {
var G__40274 = cljs.core.next(seq__39278_40262__$1);
var G__40275 = null;
var G__40276 = (0);
var G__40277 = (0);
seq__39278_40245 = G__40274;
chunk__39280_40246 = G__40275;
count__39281_40247 = G__40276;
i__39282_40248 = G__40277;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40243);
}
}


var G__40278 = seq__39231_40234;
var G__40279 = chunk__39233_40235;
var G__40280 = count__39234_40236;
var G__40281 = (i__39235_40237 + (1));
seq__39231_40234 = G__40278;
chunk__39233_40235 = G__40279;
count__39234_40236 = G__40280;
i__39235_40237 = G__40281;
continue;
} else {
var G__40282 = seq__39231_40234;
var G__40283 = chunk__39233_40235;
var G__40284 = count__39234_40236;
var G__40285 = (i__39235_40237 + (1));
seq__39231_40234 = G__40282;
chunk__39233_40235 = G__40283;
count__39234_40236 = G__40284;
i__39235_40237 = G__40285;
continue;
}
} else {
var temp__5735__auto___40287 = cljs.core.seq(seq__39231_40234);
if(temp__5735__auto___40287){
var seq__39231_40290__$1 = temp__5735__auto___40287;
if(cljs.core.chunked_seq_QMARK_(seq__39231_40290__$1)){
var c__4609__auto___40292 = cljs.core.chunk_first(seq__39231_40290__$1);
var G__40293 = cljs.core.chunk_rest(seq__39231_40290__$1);
var G__40294 = c__4609__auto___40292;
var G__40295 = cljs.core.count(c__4609__auto___40292);
var G__40296 = (0);
seq__39231_40234 = G__40293;
chunk__39233_40235 = G__40294;
count__39234_40236 = G__40295;
i__39235_40237 = G__40296;
continue;
} else {
var child_struct_40297 = cljs.core.first(seq__39231_40290__$1);
if((!((child_struct_40297 == null)))){
if(typeof child_struct_40297 === 'string'){
var text_40299 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40299),child_struct_40297].join(''));
} else {
var children_40301 = shadow.dom.svg_node(child_struct_40297);
if(cljs.core.seq_QMARK_(children_40301)){
var seq__39310_40303 = cljs.core.seq(children_40301);
var chunk__39312_40304 = null;
var count__39313_40305 = (0);
var i__39314_40306 = (0);
while(true){
if((i__39314_40306 < count__39313_40305)){
var child_40307 = chunk__39312_40304.cljs$core$IIndexed$_nth$arity$2(null,i__39314_40306);
if(cljs.core.truth_(child_40307)){
node.appendChild(child_40307);


var G__40310 = seq__39310_40303;
var G__40311 = chunk__39312_40304;
var G__40312 = count__39313_40305;
var G__40313 = (i__39314_40306 + (1));
seq__39310_40303 = G__40310;
chunk__39312_40304 = G__40311;
count__39313_40305 = G__40312;
i__39314_40306 = G__40313;
continue;
} else {
var G__40318 = seq__39310_40303;
var G__40319 = chunk__39312_40304;
var G__40320 = count__39313_40305;
var G__40321 = (i__39314_40306 + (1));
seq__39310_40303 = G__40318;
chunk__39312_40304 = G__40319;
count__39313_40305 = G__40320;
i__39314_40306 = G__40321;
continue;
}
} else {
var temp__5735__auto___40323__$1 = cljs.core.seq(seq__39310_40303);
if(temp__5735__auto___40323__$1){
var seq__39310_40325__$1 = temp__5735__auto___40323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39310_40325__$1)){
var c__4609__auto___40330 = cljs.core.chunk_first(seq__39310_40325__$1);
var G__40333 = cljs.core.chunk_rest(seq__39310_40325__$1);
var G__40334 = c__4609__auto___40330;
var G__40335 = cljs.core.count(c__4609__auto___40330);
var G__40336 = (0);
seq__39310_40303 = G__40333;
chunk__39312_40304 = G__40334;
count__39313_40305 = G__40335;
i__39314_40306 = G__40336;
continue;
} else {
var child_40338 = cljs.core.first(seq__39310_40325__$1);
if(cljs.core.truth_(child_40338)){
node.appendChild(child_40338);


var G__40343 = cljs.core.next(seq__39310_40325__$1);
var G__40344 = null;
var G__40345 = (0);
var G__40346 = (0);
seq__39310_40303 = G__40343;
chunk__39312_40304 = G__40344;
count__39313_40305 = G__40345;
i__39314_40306 = G__40346;
continue;
} else {
var G__40348 = cljs.core.next(seq__39310_40325__$1);
var G__40349 = null;
var G__40350 = (0);
var G__40351 = (0);
seq__39310_40303 = G__40348;
chunk__39312_40304 = G__40349;
count__39313_40305 = G__40350;
i__39314_40306 = G__40351;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40301);
}
}


var G__40352 = cljs.core.next(seq__39231_40290__$1);
var G__40353 = null;
var G__40354 = (0);
var G__40355 = (0);
seq__39231_40234 = G__40352;
chunk__39233_40235 = G__40353;
count__39234_40236 = G__40354;
i__39235_40237 = G__40355;
continue;
} else {
var G__40360 = cljs.core.next(seq__39231_40290__$1);
var G__40361 = null;
var G__40362 = (0);
var G__40363 = (0);
seq__39231_40234 = G__40360;
chunk__39233_40235 = G__40361;
count__39234_40236 = G__40362;
i__39235_40237 = G__40363;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40370 = arguments.length;
var i__4790__auto___40371 = (0);
while(true){
if((i__4790__auto___40371 < len__4789__auto___40370)){
args__4795__auto__.push((arguments[i__4790__auto___40371]));

var G__40373 = (i__4790__auto___40371 + (1));
i__4790__auto___40371 = G__40373;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq39329){
var G__39330 = cljs.core.first(seq39329);
var seq39329__$1 = cljs.core.next(seq39329);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39330,seq39329__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__39343 = arguments.length;
switch (G__39343) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__35185__auto___40389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35186__auto__ = (function (){var switch__34930__auto__ = (function (state_39350){
var state_val_39351 = (state_39350[(1)]);
if((state_val_39351 === (1))){
var state_39350__$1 = state_39350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39350__$1,(2),once_or_cleanup);
} else {
if((state_val_39351 === (2))){
var inst_39347 = (state_39350[(2)]);
var inst_39348 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_39350__$1 = (function (){var statearr_39352 = state_39350;
(statearr_39352[(7)] = inst_39347);

return statearr_39352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39350__$1,inst_39348);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34931__auto__ = null;
var shadow$dom$state_machine__34931__auto____0 = (function (){
var statearr_39355 = [null,null,null,null,null,null,null,null];
(statearr_39355[(0)] = shadow$dom$state_machine__34931__auto__);

(statearr_39355[(1)] = (1));

return statearr_39355;
});
var shadow$dom$state_machine__34931__auto____1 = (function (state_39350){
while(true){
var ret_value__34932__auto__ = (function (){try{while(true){
var result__34933__auto__ = switch__34930__auto__(state_39350);
if(cljs.core.keyword_identical_QMARK_(result__34933__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34933__auto__;
}
break;
}
}catch (e39360){var ex__34934__auto__ = e39360;
var statearr_39361_40396 = state_39350;
(statearr_39361_40396[(2)] = ex__34934__auto__);


if(cljs.core.seq((state_39350[(4)]))){
var statearr_39364_40398 = state_39350;
(statearr_39364_40398[(1)] = cljs.core.first((state_39350[(4)])));

} else {
throw ex__34934__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40403 = state_39350;
state_39350 = G__40403;
continue;
} else {
return ret_value__34932__auto__;
}
break;
}
});
shadow$dom$state_machine__34931__auto__ = function(state_39350){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34931__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34931__auto____1.call(this,state_39350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34931__auto____0;
shadow$dom$state_machine__34931__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34931__auto____1;
return shadow$dom$state_machine__34931__auto__;
})()
})();
var state__35187__auto__ = (function (){var statearr_39369 = f__35186__auto__();
(statearr_39369[(6)] = c__35185__auto___40389);

return statearr_39369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35187__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
