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
return cljs.core.cons((coll[idx]),(function (){var G__30685 = coll;
var G__30686 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30685,G__30686) : shadow.dom.lazy_native_coll_seq.call(null,G__30685,G__30686));
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
var G__30701 = arguments.length;
switch (G__30701) {
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
var G__30703 = arguments.length;
switch (G__30703) {
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
var G__30709 = arguments.length;
switch (G__30709) {
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
var G__30719 = arguments.length;
switch (G__30719) {
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
var G__30747 = arguments.length;
switch (G__30747) {
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
var G__30755 = arguments.length;
switch (G__30755) {
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
}catch (e30768){if((e30768 instanceof Object)){
var e = e30768;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30768;

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
var seq__30769 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30770 = null;
var count__30771 = (0);
var i__30772 = (0);
while(true){
if((i__30772 < count__30771)){
var el = chunk__30770.cljs$core$IIndexed$_nth$arity$2(null,i__30772);
var handler_31525__$1 = ((function (seq__30769,chunk__30770,count__30771,i__30772,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30769,chunk__30770,count__30771,i__30772,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31525__$1);


var G__31530 = seq__30769;
var G__31531 = chunk__30770;
var G__31532 = count__30771;
var G__31533 = (i__30772 + (1));
seq__30769 = G__31530;
chunk__30770 = G__31531;
count__30771 = G__31532;
i__30772 = G__31533;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30769);
if(temp__5735__auto__){
var seq__30769__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30769__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30769__$1);
var G__31534 = cljs.core.chunk_rest(seq__30769__$1);
var G__31535 = c__4609__auto__;
var G__31536 = cljs.core.count(c__4609__auto__);
var G__31537 = (0);
seq__30769 = G__31534;
chunk__30770 = G__31535;
count__30771 = G__31536;
i__30772 = G__31537;
continue;
} else {
var el = cljs.core.first(seq__30769__$1);
var handler_31538__$1 = ((function (seq__30769,chunk__30770,count__30771,i__30772,el,seq__30769__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30769,chunk__30770,count__30771,i__30772,el,seq__30769__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31538__$1);


var G__31542 = cljs.core.next(seq__30769__$1);
var G__31543 = null;
var G__31544 = (0);
var G__31545 = (0);
seq__30769 = G__31542;
chunk__30770 = G__31543;
count__30771 = G__31544;
i__30772 = G__31545;
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
var G__30780 = arguments.length;
switch (G__30780) {
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
var seq__30787 = cljs.core.seq(events);
var chunk__30788 = null;
var count__30789 = (0);
var i__30790 = (0);
while(true){
if((i__30790 < count__30789)){
var vec__30802 = chunk__30788.cljs$core$IIndexed$_nth$arity$2(null,i__30790);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30802,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31588 = seq__30787;
var G__31589 = chunk__30788;
var G__31590 = count__30789;
var G__31591 = (i__30790 + (1));
seq__30787 = G__31588;
chunk__30788 = G__31589;
count__30789 = G__31590;
i__30790 = G__31591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30787);
if(temp__5735__auto__){
var seq__30787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30787__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30787__$1);
var G__31592 = cljs.core.chunk_rest(seq__30787__$1);
var G__31593 = c__4609__auto__;
var G__31594 = cljs.core.count(c__4609__auto__);
var G__31595 = (0);
seq__30787 = G__31592;
chunk__30788 = G__31593;
count__30789 = G__31594;
i__30790 = G__31595;
continue;
} else {
var vec__30805 = cljs.core.first(seq__30787__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30805,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31598 = cljs.core.next(seq__30787__$1);
var G__31599 = null;
var G__31600 = (0);
var G__31602 = (0);
seq__30787 = G__31598;
chunk__30788 = G__31599;
count__30789 = G__31600;
i__30790 = G__31602;
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
var seq__30809 = cljs.core.seq(styles);
var chunk__30810 = null;
var count__30811 = (0);
var i__30812 = (0);
while(true){
if((i__30812 < count__30811)){
var vec__30820 = chunk__30810.cljs$core$IIndexed$_nth$arity$2(null,i__30812);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30820,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31609 = seq__30809;
var G__31610 = chunk__30810;
var G__31611 = count__30811;
var G__31612 = (i__30812 + (1));
seq__30809 = G__31609;
chunk__30810 = G__31610;
count__30811 = G__31611;
i__30812 = G__31612;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30809);
if(temp__5735__auto__){
var seq__30809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30809__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30809__$1);
var G__31615 = cljs.core.chunk_rest(seq__30809__$1);
var G__31616 = c__4609__auto__;
var G__31617 = cljs.core.count(c__4609__auto__);
var G__31618 = (0);
seq__30809 = G__31615;
chunk__30810 = G__31616;
count__30811 = G__31617;
i__30812 = G__31618;
continue;
} else {
var vec__30824 = cljs.core.first(seq__30809__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30824,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31619 = cljs.core.next(seq__30809__$1);
var G__31620 = null;
var G__31621 = (0);
var G__31622 = (0);
seq__30809 = G__31619;
chunk__30810 = G__31620;
count__30811 = G__31621;
i__30812 = G__31622;
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
var G__30830_31623 = key;
var G__30830_31624__$1 = (((G__30830_31623 instanceof cljs.core.Keyword))?G__30830_31623.fqn:null);
switch (G__30830_31624__$1) {
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
var ks_31630 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_31630,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_31630,"aria-");
}
})())){
el.setAttribute(ks_31630,value);
} else {
(el[ks_31630] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30853){
var map__30854 = p__30853;
var map__30854__$1 = (((((!((map__30854 == null))))?(((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30854):map__30854);
var props = map__30854__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30854__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30867 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30867,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30867,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30867,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30871 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30871,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30871;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30877 = arguments.length;
switch (G__30877) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30881){
var vec__30882 = p__30881;
var seq__30883 = cljs.core.seq(vec__30882);
var first__30884 = cljs.core.first(seq__30883);
var seq__30883__$1 = cljs.core.next(seq__30883);
var nn = first__30884;
var first__30884__$1 = cljs.core.first(seq__30883__$1);
var seq__30883__$2 = cljs.core.next(seq__30883__$1);
var np = first__30884__$1;
var nc = seq__30883__$2;
var node = vec__30882;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30885 = nn;
var G__30886 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30885,G__30886) : create_fn.call(null,G__30885,G__30886));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30887 = nn;
var G__30888 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30887,G__30888) : create_fn.call(null,G__30887,G__30888));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30891 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30891,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30891,(1),null);
var seq__30895_31659 = cljs.core.seq(node_children);
var chunk__30896_31660 = null;
var count__30897_31661 = (0);
var i__30898_31662 = (0);
while(true){
if((i__30898_31662 < count__30897_31661)){
var child_struct_31663 = chunk__30896_31660.cljs$core$IIndexed$_nth$arity$2(null,i__30898_31662);
var children_31664 = shadow.dom.dom_node(child_struct_31663);
if(cljs.core.seq_QMARK_(children_31664)){
var seq__30944_31667 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31664));
var chunk__30946_31668 = null;
var count__30947_31669 = (0);
var i__30948_31670 = (0);
while(true){
if((i__30948_31670 < count__30947_31669)){
var child_31676 = chunk__30946_31668.cljs$core$IIndexed$_nth$arity$2(null,i__30948_31670);
if(cljs.core.truth_(child_31676)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31676);


var G__31677 = seq__30944_31667;
var G__31678 = chunk__30946_31668;
var G__31679 = count__30947_31669;
var G__31680 = (i__30948_31670 + (1));
seq__30944_31667 = G__31677;
chunk__30946_31668 = G__31678;
count__30947_31669 = G__31679;
i__30948_31670 = G__31680;
continue;
} else {
var G__31681 = seq__30944_31667;
var G__31682 = chunk__30946_31668;
var G__31683 = count__30947_31669;
var G__31684 = (i__30948_31670 + (1));
seq__30944_31667 = G__31681;
chunk__30946_31668 = G__31682;
count__30947_31669 = G__31683;
i__30948_31670 = G__31684;
continue;
}
} else {
var temp__5735__auto___31688 = cljs.core.seq(seq__30944_31667);
if(temp__5735__auto___31688){
var seq__30944_31689__$1 = temp__5735__auto___31688;
if(cljs.core.chunked_seq_QMARK_(seq__30944_31689__$1)){
var c__4609__auto___31690 = cljs.core.chunk_first(seq__30944_31689__$1);
var G__31691 = cljs.core.chunk_rest(seq__30944_31689__$1);
var G__31692 = c__4609__auto___31690;
var G__31693 = cljs.core.count(c__4609__auto___31690);
var G__31694 = (0);
seq__30944_31667 = G__31691;
chunk__30946_31668 = G__31692;
count__30947_31669 = G__31693;
i__30948_31670 = G__31694;
continue;
} else {
var child_31695 = cljs.core.first(seq__30944_31689__$1);
if(cljs.core.truth_(child_31695)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31695);


var G__31697 = cljs.core.next(seq__30944_31689__$1);
var G__31698 = null;
var G__31699 = (0);
var G__31700 = (0);
seq__30944_31667 = G__31697;
chunk__30946_31668 = G__31698;
count__30947_31669 = G__31699;
i__30948_31670 = G__31700;
continue;
} else {
var G__31703 = cljs.core.next(seq__30944_31689__$1);
var G__31704 = null;
var G__31705 = (0);
var G__31706 = (0);
seq__30944_31667 = G__31703;
chunk__30946_31668 = G__31704;
count__30947_31669 = G__31705;
i__30948_31670 = G__31706;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31664);
}


var G__31711 = seq__30895_31659;
var G__31712 = chunk__30896_31660;
var G__31713 = count__30897_31661;
var G__31714 = (i__30898_31662 + (1));
seq__30895_31659 = G__31711;
chunk__30896_31660 = G__31712;
count__30897_31661 = G__31713;
i__30898_31662 = G__31714;
continue;
} else {
var temp__5735__auto___31715 = cljs.core.seq(seq__30895_31659);
if(temp__5735__auto___31715){
var seq__30895_31716__$1 = temp__5735__auto___31715;
if(cljs.core.chunked_seq_QMARK_(seq__30895_31716__$1)){
var c__4609__auto___31717 = cljs.core.chunk_first(seq__30895_31716__$1);
var G__31724 = cljs.core.chunk_rest(seq__30895_31716__$1);
var G__31725 = c__4609__auto___31717;
var G__31726 = cljs.core.count(c__4609__auto___31717);
var G__31727 = (0);
seq__30895_31659 = G__31724;
chunk__30896_31660 = G__31725;
count__30897_31661 = G__31726;
i__30898_31662 = G__31727;
continue;
} else {
var child_struct_31728 = cljs.core.first(seq__30895_31716__$1);
var children_31730 = shadow.dom.dom_node(child_struct_31728);
if(cljs.core.seq_QMARK_(children_31730)){
var seq__30954_31733 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31730));
var chunk__30956_31734 = null;
var count__30957_31735 = (0);
var i__30958_31736 = (0);
while(true){
if((i__30958_31736 < count__30957_31735)){
var child_31738 = chunk__30956_31734.cljs$core$IIndexed$_nth$arity$2(null,i__30958_31736);
if(cljs.core.truth_(child_31738)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31738);


var G__31739 = seq__30954_31733;
var G__31740 = chunk__30956_31734;
var G__31741 = count__30957_31735;
var G__31742 = (i__30958_31736 + (1));
seq__30954_31733 = G__31739;
chunk__30956_31734 = G__31740;
count__30957_31735 = G__31741;
i__30958_31736 = G__31742;
continue;
} else {
var G__31743 = seq__30954_31733;
var G__31744 = chunk__30956_31734;
var G__31745 = count__30957_31735;
var G__31746 = (i__30958_31736 + (1));
seq__30954_31733 = G__31743;
chunk__30956_31734 = G__31744;
count__30957_31735 = G__31745;
i__30958_31736 = G__31746;
continue;
}
} else {
var temp__5735__auto___31748__$1 = cljs.core.seq(seq__30954_31733);
if(temp__5735__auto___31748__$1){
var seq__30954_31750__$1 = temp__5735__auto___31748__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30954_31750__$1)){
var c__4609__auto___31751 = cljs.core.chunk_first(seq__30954_31750__$1);
var G__31753 = cljs.core.chunk_rest(seq__30954_31750__$1);
var G__31754 = c__4609__auto___31751;
var G__31755 = cljs.core.count(c__4609__auto___31751);
var G__31756 = (0);
seq__30954_31733 = G__31753;
chunk__30956_31734 = G__31754;
count__30957_31735 = G__31755;
i__30958_31736 = G__31756;
continue;
} else {
var child_31757 = cljs.core.first(seq__30954_31750__$1);
if(cljs.core.truth_(child_31757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31757);


var G__31758 = cljs.core.next(seq__30954_31750__$1);
var G__31759 = null;
var G__31760 = (0);
var G__31761 = (0);
seq__30954_31733 = G__31758;
chunk__30956_31734 = G__31759;
count__30957_31735 = G__31760;
i__30958_31736 = G__31761;
continue;
} else {
var G__31762 = cljs.core.next(seq__30954_31750__$1);
var G__31763 = null;
var G__31764 = (0);
var G__31765 = (0);
seq__30954_31733 = G__31762;
chunk__30956_31734 = G__31763;
count__30957_31735 = G__31764;
i__30958_31736 = G__31765;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31730);
}


var G__31767 = cljs.core.next(seq__30895_31716__$1);
var G__31768 = null;
var G__31769 = (0);
var G__31771 = (0);
seq__30895_31659 = G__31767;
chunk__30896_31660 = G__31768;
count__30897_31661 = G__31769;
i__30898_31662 = G__31771;
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
var seq__30992 = cljs.core.seq(node);
var chunk__30993 = null;
var count__30994 = (0);
var i__30995 = (0);
while(true){
if((i__30995 < count__30994)){
var n = chunk__30993.cljs$core$IIndexed$_nth$arity$2(null,i__30995);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31787 = seq__30992;
var G__31788 = chunk__30993;
var G__31789 = count__30994;
var G__31790 = (i__30995 + (1));
seq__30992 = G__31787;
chunk__30993 = G__31788;
count__30994 = G__31789;
i__30995 = G__31790;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30992);
if(temp__5735__auto__){
var seq__30992__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30992__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__30992__$1);
var G__31796 = cljs.core.chunk_rest(seq__30992__$1);
var G__31797 = c__4609__auto__;
var G__31798 = cljs.core.count(c__4609__auto__);
var G__31799 = (0);
seq__30992 = G__31796;
chunk__30993 = G__31797;
count__30994 = G__31798;
i__30995 = G__31799;
continue;
} else {
var n = cljs.core.first(seq__30992__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31801 = cljs.core.next(seq__30992__$1);
var G__31802 = null;
var G__31803 = (0);
var G__31804 = (0);
seq__30992 = G__31801;
chunk__30993 = G__31802;
count__30994 = G__31803;
i__30995 = G__31804;
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
var G__31002 = arguments.length;
switch (G__31002) {
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
var G__31006 = arguments.length;
switch (G__31006) {
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
var G__31011 = arguments.length;
switch (G__31011) {
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
var len__4789__auto___31850 = arguments.length;
var i__4790__auto___31852 = (0);
while(true){
if((i__4790__auto___31852 < len__4789__auto___31850)){
args__4795__auto__.push((arguments[i__4790__auto___31852]));

var G__31855 = (i__4790__auto___31852 + (1));
i__4790__auto___31852 = G__31855;
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
var seq__31033_31863 = cljs.core.seq(nodes);
var chunk__31034_31864 = null;
var count__31035_31865 = (0);
var i__31036_31866 = (0);
while(true){
if((i__31036_31866 < count__31035_31865)){
var node_31870 = chunk__31034_31864.cljs$core$IIndexed$_nth$arity$2(null,i__31036_31866);
fragment.appendChild(shadow.dom._to_dom(node_31870));


var G__31871 = seq__31033_31863;
var G__31872 = chunk__31034_31864;
var G__31873 = count__31035_31865;
var G__31874 = (i__31036_31866 + (1));
seq__31033_31863 = G__31871;
chunk__31034_31864 = G__31872;
count__31035_31865 = G__31873;
i__31036_31866 = G__31874;
continue;
} else {
var temp__5735__auto___31875 = cljs.core.seq(seq__31033_31863);
if(temp__5735__auto___31875){
var seq__31033_31878__$1 = temp__5735__auto___31875;
if(cljs.core.chunked_seq_QMARK_(seq__31033_31878__$1)){
var c__4609__auto___31879 = cljs.core.chunk_first(seq__31033_31878__$1);
var G__31880 = cljs.core.chunk_rest(seq__31033_31878__$1);
var G__31881 = c__4609__auto___31879;
var G__31882 = cljs.core.count(c__4609__auto___31879);
var G__31883 = (0);
seq__31033_31863 = G__31880;
chunk__31034_31864 = G__31881;
count__31035_31865 = G__31882;
i__31036_31866 = G__31883;
continue;
} else {
var node_31886 = cljs.core.first(seq__31033_31878__$1);
fragment.appendChild(shadow.dom._to_dom(node_31886));


var G__31888 = cljs.core.next(seq__31033_31878__$1);
var G__31889 = null;
var G__31890 = (0);
var G__31891 = (0);
seq__31033_31863 = G__31888;
chunk__31034_31864 = G__31889;
count__31035_31865 = G__31890;
i__31036_31866 = G__31891;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq31023){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31023));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__31047_31897 = cljs.core.seq(scripts);
var chunk__31048_31898 = null;
var count__31049_31899 = (0);
var i__31050_31900 = (0);
while(true){
if((i__31050_31900 < count__31049_31899)){
var vec__31059_31905 = chunk__31048_31898.cljs$core$IIndexed$_nth$arity$2(null,i__31050_31900);
var script_tag_31906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31059_31905,(0),null);
var script_body_31907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31059_31905,(1),null);
eval(script_body_31907);


var G__31908 = seq__31047_31897;
var G__31909 = chunk__31048_31898;
var G__31910 = count__31049_31899;
var G__31911 = (i__31050_31900 + (1));
seq__31047_31897 = G__31908;
chunk__31048_31898 = G__31909;
count__31049_31899 = G__31910;
i__31050_31900 = G__31911;
continue;
} else {
var temp__5735__auto___31912 = cljs.core.seq(seq__31047_31897);
if(temp__5735__auto___31912){
var seq__31047_31913__$1 = temp__5735__auto___31912;
if(cljs.core.chunked_seq_QMARK_(seq__31047_31913__$1)){
var c__4609__auto___31915 = cljs.core.chunk_first(seq__31047_31913__$1);
var G__31916 = cljs.core.chunk_rest(seq__31047_31913__$1);
var G__31917 = c__4609__auto___31915;
var G__31918 = cljs.core.count(c__4609__auto___31915);
var G__31919 = (0);
seq__31047_31897 = G__31916;
chunk__31048_31898 = G__31917;
count__31049_31899 = G__31918;
i__31050_31900 = G__31919;
continue;
} else {
var vec__31063_31920 = cljs.core.first(seq__31047_31913__$1);
var script_tag_31921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31063_31920,(0),null);
var script_body_31922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31063_31920,(1),null);
eval(script_body_31922);


var G__31924 = cljs.core.next(seq__31047_31913__$1);
var G__31925 = null;
var G__31926 = (0);
var G__31927 = (0);
seq__31047_31897 = G__31924;
chunk__31048_31898 = G__31925;
count__31049_31899 = G__31926;
i__31050_31900 = G__31927;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__31068){
var vec__31072 = p__31068;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31072,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31072,(1),null);
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
var G__31090 = arguments.length;
switch (G__31090) {
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
var seq__31105 = cljs.core.seq(style_keys);
var chunk__31106 = null;
var count__31107 = (0);
var i__31108 = (0);
while(true){
if((i__31108 < count__31107)){
var it = chunk__31106.cljs$core$IIndexed$_nth$arity$2(null,i__31108);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31959 = seq__31105;
var G__31960 = chunk__31106;
var G__31961 = count__31107;
var G__31962 = (i__31108 + (1));
seq__31105 = G__31959;
chunk__31106 = G__31960;
count__31107 = G__31961;
i__31108 = G__31962;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31105);
if(temp__5735__auto__){
var seq__31105__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31105__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31105__$1);
var G__31963 = cljs.core.chunk_rest(seq__31105__$1);
var G__31964 = c__4609__auto__;
var G__31965 = cljs.core.count(c__4609__auto__);
var G__31966 = (0);
seq__31105 = G__31963;
chunk__31106 = G__31964;
count__31107 = G__31965;
i__31108 = G__31966;
continue;
} else {
var it = cljs.core.first(seq__31105__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31970 = cljs.core.next(seq__31105__$1);
var G__31971 = null;
var G__31972 = (0);
var G__31973 = (0);
seq__31105 = G__31970;
chunk__31106 = G__31971;
count__31107 = G__31972;
i__31108 = G__31973;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k31121,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__31131 = k31121;
var G__31131__$1 = (((G__31131 instanceof cljs.core.Keyword))?G__31131.fqn:null);
switch (G__31131__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31121,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__31133){
var vec__31137 = p__31133;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31137,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31120){
var self__ = this;
var G__31120__$1 = this;
return (new cljs.core.RecordIter((0),G__31120__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31122,other31123){
var self__ = this;
var this31122__$1 = this;
return (((!((other31123 == null)))) && ((this31122__$1.constructor === other31123.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31122__$1.x,other31123.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31122__$1.y,other31123.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31122__$1.__extmap,other31123.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__31120){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__31153 = cljs.core.keyword_identical_QMARK_;
var expr__31154 = k__4447__auto__;
if(cljs.core.truth_((pred__31153.cljs$core$IFn$_invoke$arity$2 ? pred__31153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__31154) : pred__31153.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31154)))){
return (new shadow.dom.Coordinate(G__31120,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31153.cljs$core$IFn$_invoke$arity$2 ? pred__31153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__31154) : pred__31153.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31154)))){
return (new shadow.dom.Coordinate(self__.x,G__31120,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__31120),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__31120){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31120,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31125){
var extmap__4478__auto__ = (function (){var G__31157 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31125,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__31125)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31157);
} else {
return G__31157;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31125),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31125),null,cljs.core.not_empty(extmap__4478__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k31180,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__31198 = k31180;
var G__31198__$1 = (((G__31198 instanceof cljs.core.Keyword))?G__31198.fqn:null);
switch (G__31198__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31180,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__31200){
var vec__31201 = p__31200;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31179){
var self__ = this;
var G__31179__$1 = this;
return (new cljs.core.RecordIter((0),G__31179__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31181,other31182){
var self__ = this;
var this31181__$1 = this;
return (((!((other31182 == null)))) && ((this31181__$1.constructor === other31182.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31181__$1.w,other31182.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31181__$1.h,other31182.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31181__$1.__extmap,other31182.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__31179){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__31216 = cljs.core.keyword_identical_QMARK_;
var expr__31217 = k__4447__auto__;
if(cljs.core.truth_((pred__31216.cljs$core$IFn$_invoke$arity$2 ? pred__31216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__31217) : pred__31216.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__31217)))){
return (new shadow.dom.Size(G__31179,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31216.cljs$core$IFn$_invoke$arity$2 ? pred__31216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__31217) : pred__31216.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__31217)))){
return (new shadow.dom.Size(self__.w,G__31179,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__31179),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__31179){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31179,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31189){
var extmap__4478__auto__ = (function (){var G__31238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31189,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__31189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31238);
} else {
return G__31238;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31189),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31189),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
var G__32124 = (i + (1));
var G__32125 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__32124;
ret = G__32125;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31246){
var vec__31247 = p__31246;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31247,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31258 = arguments.length;
switch (G__31258) {
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
var G__32152 = ps;
var G__32153 = (i + (1));
el__$1 = G__32152;
i = G__32153;
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
var vec__31284 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31284,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31284,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31284,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31289_32169 = cljs.core.seq(props);
var chunk__31290_32170 = null;
var count__31291_32171 = (0);
var i__31292_32172 = (0);
while(true){
if((i__31292_32172 < count__31291_32171)){
var vec__31307_32175 = chunk__31290_32170.cljs$core$IIndexed$_nth$arity$2(null,i__31292_32172);
var k_32176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31307_32175,(0),null);
var v_32177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31307_32175,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_32176);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32176),v_32177);


var G__32183 = seq__31289_32169;
var G__32184 = chunk__31290_32170;
var G__32185 = count__31291_32171;
var G__32186 = (i__31292_32172 + (1));
seq__31289_32169 = G__32183;
chunk__31290_32170 = G__32184;
count__31291_32171 = G__32185;
i__31292_32172 = G__32186;
continue;
} else {
var temp__5735__auto___32188 = cljs.core.seq(seq__31289_32169);
if(temp__5735__auto___32188){
var seq__31289_32190__$1 = temp__5735__auto___32188;
if(cljs.core.chunked_seq_QMARK_(seq__31289_32190__$1)){
var c__4609__auto___32191 = cljs.core.chunk_first(seq__31289_32190__$1);
var G__32195 = cljs.core.chunk_rest(seq__31289_32190__$1);
var G__32196 = c__4609__auto___32191;
var G__32197 = cljs.core.count(c__4609__auto___32191);
var G__32198 = (0);
seq__31289_32169 = G__32195;
chunk__31290_32170 = G__32196;
count__31291_32171 = G__32197;
i__31292_32172 = G__32198;
continue;
} else {
var vec__31312_32201 = cljs.core.first(seq__31289_32190__$1);
var k_32202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312_32201,(0),null);
var v_32203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31312_32201,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_32202);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_32202),v_32203);


var G__32206 = cljs.core.next(seq__31289_32190__$1);
var G__32207 = null;
var G__32208 = (0);
var G__32209 = (0);
seq__31289_32169 = G__32206;
chunk__31290_32170 = G__32207;
count__31291_32171 = G__32208;
i__31292_32172 = G__32209;
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
var vec__31320 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31320,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31320,(1),null);
var seq__31330_32215 = cljs.core.seq(node_children);
var chunk__31332_32216 = null;
var count__31333_32217 = (0);
var i__31334_32218 = (0);
while(true){
if((i__31334_32218 < count__31333_32217)){
var child_struct_32219 = chunk__31332_32216.cljs$core$IIndexed$_nth$arity$2(null,i__31334_32218);
if((!((child_struct_32219 == null)))){
if(typeof child_struct_32219 === 'string'){
var text_32220 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32220),child_struct_32219].join(''));
} else {
var children_32222 = shadow.dom.svg_node(child_struct_32219);
if(cljs.core.seq_QMARK_(children_32222)){
var seq__31360_32223 = cljs.core.seq(children_32222);
var chunk__31362_32224 = null;
var count__31363_32225 = (0);
var i__31364_32226 = (0);
while(true){
if((i__31364_32226 < count__31363_32225)){
var child_32227 = chunk__31362_32224.cljs$core$IIndexed$_nth$arity$2(null,i__31364_32226);
if(cljs.core.truth_(child_32227)){
node.appendChild(child_32227);


var G__32230 = seq__31360_32223;
var G__32231 = chunk__31362_32224;
var G__32232 = count__31363_32225;
var G__32233 = (i__31364_32226 + (1));
seq__31360_32223 = G__32230;
chunk__31362_32224 = G__32231;
count__31363_32225 = G__32232;
i__31364_32226 = G__32233;
continue;
} else {
var G__32235 = seq__31360_32223;
var G__32236 = chunk__31362_32224;
var G__32237 = count__31363_32225;
var G__32238 = (i__31364_32226 + (1));
seq__31360_32223 = G__32235;
chunk__31362_32224 = G__32236;
count__31363_32225 = G__32237;
i__31364_32226 = G__32238;
continue;
}
} else {
var temp__5735__auto___32239 = cljs.core.seq(seq__31360_32223);
if(temp__5735__auto___32239){
var seq__31360_32240__$1 = temp__5735__auto___32239;
if(cljs.core.chunked_seq_QMARK_(seq__31360_32240__$1)){
var c__4609__auto___32241 = cljs.core.chunk_first(seq__31360_32240__$1);
var G__32242 = cljs.core.chunk_rest(seq__31360_32240__$1);
var G__32243 = c__4609__auto___32241;
var G__32244 = cljs.core.count(c__4609__auto___32241);
var G__32245 = (0);
seq__31360_32223 = G__32242;
chunk__31362_32224 = G__32243;
count__31363_32225 = G__32244;
i__31364_32226 = G__32245;
continue;
} else {
var child_32247 = cljs.core.first(seq__31360_32240__$1);
if(cljs.core.truth_(child_32247)){
node.appendChild(child_32247);


var G__32249 = cljs.core.next(seq__31360_32240__$1);
var G__32250 = null;
var G__32251 = (0);
var G__32252 = (0);
seq__31360_32223 = G__32249;
chunk__31362_32224 = G__32250;
count__31363_32225 = G__32251;
i__31364_32226 = G__32252;
continue;
} else {
var G__32253 = cljs.core.next(seq__31360_32240__$1);
var G__32254 = null;
var G__32255 = (0);
var G__32256 = (0);
seq__31360_32223 = G__32253;
chunk__31362_32224 = G__32254;
count__31363_32225 = G__32255;
i__31364_32226 = G__32256;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32222);
}
}


var G__32260 = seq__31330_32215;
var G__32261 = chunk__31332_32216;
var G__32262 = count__31333_32217;
var G__32263 = (i__31334_32218 + (1));
seq__31330_32215 = G__32260;
chunk__31332_32216 = G__32261;
count__31333_32217 = G__32262;
i__31334_32218 = G__32263;
continue;
} else {
var G__32265 = seq__31330_32215;
var G__32266 = chunk__31332_32216;
var G__32267 = count__31333_32217;
var G__32268 = (i__31334_32218 + (1));
seq__31330_32215 = G__32265;
chunk__31332_32216 = G__32266;
count__31333_32217 = G__32267;
i__31334_32218 = G__32268;
continue;
}
} else {
var temp__5735__auto___32269 = cljs.core.seq(seq__31330_32215);
if(temp__5735__auto___32269){
var seq__31330_32270__$1 = temp__5735__auto___32269;
if(cljs.core.chunked_seq_QMARK_(seq__31330_32270__$1)){
var c__4609__auto___32274 = cljs.core.chunk_first(seq__31330_32270__$1);
var G__32275 = cljs.core.chunk_rest(seq__31330_32270__$1);
var G__32276 = c__4609__auto___32274;
var G__32277 = cljs.core.count(c__4609__auto___32274);
var G__32278 = (0);
seq__31330_32215 = G__32275;
chunk__31332_32216 = G__32276;
count__31333_32217 = G__32277;
i__31334_32218 = G__32278;
continue;
} else {
var child_struct_32280 = cljs.core.first(seq__31330_32270__$1);
if((!((child_struct_32280 == null)))){
if(typeof child_struct_32280 === 'string'){
var text_32281 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_32281),child_struct_32280].join(''));
} else {
var children_32282 = shadow.dom.svg_node(child_struct_32280);
if(cljs.core.seq_QMARK_(children_32282)){
var seq__31376_32283 = cljs.core.seq(children_32282);
var chunk__31378_32284 = null;
var count__31379_32285 = (0);
var i__31380_32286 = (0);
while(true){
if((i__31380_32286 < count__31379_32285)){
var child_32292 = chunk__31378_32284.cljs$core$IIndexed$_nth$arity$2(null,i__31380_32286);
if(cljs.core.truth_(child_32292)){
node.appendChild(child_32292);


var G__32293 = seq__31376_32283;
var G__32294 = chunk__31378_32284;
var G__32295 = count__31379_32285;
var G__32296 = (i__31380_32286 + (1));
seq__31376_32283 = G__32293;
chunk__31378_32284 = G__32294;
count__31379_32285 = G__32295;
i__31380_32286 = G__32296;
continue;
} else {
var G__32298 = seq__31376_32283;
var G__32299 = chunk__31378_32284;
var G__32300 = count__31379_32285;
var G__32301 = (i__31380_32286 + (1));
seq__31376_32283 = G__32298;
chunk__31378_32284 = G__32299;
count__31379_32285 = G__32300;
i__31380_32286 = G__32301;
continue;
}
} else {
var temp__5735__auto___32303__$1 = cljs.core.seq(seq__31376_32283);
if(temp__5735__auto___32303__$1){
var seq__31376_32304__$1 = temp__5735__auto___32303__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31376_32304__$1)){
var c__4609__auto___32313 = cljs.core.chunk_first(seq__31376_32304__$1);
var G__32315 = cljs.core.chunk_rest(seq__31376_32304__$1);
var G__32316 = c__4609__auto___32313;
var G__32317 = cljs.core.count(c__4609__auto___32313);
var G__32318 = (0);
seq__31376_32283 = G__32315;
chunk__31378_32284 = G__32316;
count__31379_32285 = G__32317;
i__31380_32286 = G__32318;
continue;
} else {
var child_32319 = cljs.core.first(seq__31376_32304__$1);
if(cljs.core.truth_(child_32319)){
node.appendChild(child_32319);


var G__32320 = cljs.core.next(seq__31376_32304__$1);
var G__32321 = null;
var G__32322 = (0);
var G__32323 = (0);
seq__31376_32283 = G__32320;
chunk__31378_32284 = G__32321;
count__31379_32285 = G__32322;
i__31380_32286 = G__32323;
continue;
} else {
var G__32324 = cljs.core.next(seq__31376_32304__$1);
var G__32325 = null;
var G__32326 = (0);
var G__32327 = (0);
seq__31376_32283 = G__32324;
chunk__31378_32284 = G__32325;
count__31379_32285 = G__32326;
i__31380_32286 = G__32327;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_32282);
}
}


var G__32329 = cljs.core.next(seq__31330_32270__$1);
var G__32330 = null;
var G__32331 = (0);
var G__32332 = (0);
seq__31330_32215 = G__32329;
chunk__31332_32216 = G__32330;
count__31333_32217 = G__32331;
i__31334_32218 = G__32332;
continue;
} else {
var G__32333 = cljs.core.next(seq__31330_32270__$1);
var G__32334 = null;
var G__32335 = (0);
var G__32336 = (0);
seq__31330_32215 = G__32333;
chunk__31332_32216 = G__32334;
count__31333_32217 = G__32335;
i__31334_32218 = G__32336;
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
var len__4789__auto___32344 = arguments.length;
var i__4790__auto___32345 = (0);
while(true){
if((i__4790__auto___32345 < len__4789__auto___32344)){
args__4795__auto__.push((arguments[i__4790__auto___32345]));

var G__32346 = (i__4790__auto___32345 + (1));
i__4790__auto___32345 = G__32346;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq31400){
var G__31401 = cljs.core.first(seq31400);
var seq31400__$1 = cljs.core.next(seq31400);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31401,seq31400__$1);
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
var G__31408 = arguments.length;
switch (G__31408) {
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
var c__30508__auto___32361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30509__auto__ = (function (){var switch__30469__auto__ = (function (state_31444){
var state_val_31445 = (state_31444[(1)]);
if((state_val_31445 === (1))){
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31444__$1,(2),once_or_cleanup);
} else {
if((state_val_31445 === (2))){
var inst_31427 = (state_31444[(2)]);
var inst_31437 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31444__$1 = (function (){var statearr_31453 = state_31444;
(statearr_31453[(7)] = inst_31427);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31444__$1,inst_31437);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30470__auto__ = null;
var shadow$dom$state_machine__30470__auto____0 = (function (){
var statearr_31461 = [null,null,null,null,null,null,null,null];
(statearr_31461[(0)] = shadow$dom$state_machine__30470__auto__);

(statearr_31461[(1)] = (1));

return statearr_31461;
});
var shadow$dom$state_machine__30470__auto____1 = (function (state_31444){
while(true){
var ret_value__30471__auto__ = (function (){try{while(true){
var result__30472__auto__ = switch__30469__auto__(state_31444);
if(cljs.core.keyword_identical_QMARK_(result__30472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30472__auto__;
}
break;
}
}catch (e31462){if((e31462 instanceof Object)){
var ex__30473__auto__ = e31462;
var statearr_31463_32399 = state_31444;
(statearr_31463_32399[(5)] = ex__30473__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30471__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32407 = state_31444;
state_31444 = G__32407;
continue;
} else {
return ret_value__30471__auto__;
}
break;
}
});
shadow$dom$state_machine__30470__auto__ = function(state_31444){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30470__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30470__auto____1.call(this,state_31444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30470__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30470__auto____0;
shadow$dom$state_machine__30470__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30470__auto____1;
return shadow$dom$state_machine__30470__auto__;
})()
})();
var state__30510__auto__ = (function (){var statearr_31464 = f__30509__auto__();
(statearr_31464[(6)] = c__30508__auto___32361);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30510__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
