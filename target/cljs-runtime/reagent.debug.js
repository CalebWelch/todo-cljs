goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__41371__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41373__i = 0, G__41373__a = new Array(arguments.length -  0);
while (G__41373__i < G__41373__a.length) {G__41373__a[G__41373__i] = arguments[G__41373__i + 0]; ++G__41373__i;}
  args = new cljs.core.IndexedSeq(G__41373__a,0,null);
} 
return G__41371__delegate.call(this,args);};
G__41371.cljs$lang$maxFixedArity = 0;
G__41371.cljs$lang$applyTo = (function (arglist__41378){
var args = cljs.core.seq(arglist__41378);
return G__41371__delegate(args);
});
G__41371.cljs$core$IFn$_invoke$arity$variadic = G__41371__delegate;
return G__41371;
})()
);

(o.error = (function() { 
var G__41382__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41385__i = 0, G__41385__a = new Array(arguments.length -  0);
while (G__41385__i < G__41385__a.length) {G__41385__a[G__41385__i] = arguments[G__41385__i + 0]; ++G__41385__i;}
  args = new cljs.core.IndexedSeq(G__41385__a,0,null);
} 
return G__41382__delegate.call(this,args);};
G__41382.cljs$lang$maxFixedArity = 0;
G__41382.cljs$lang$applyTo = (function (arglist__41386){
var args = cljs.core.seq(arglist__41386);
return G__41382__delegate(args);
});
G__41382.cljs$core$IFn$_invoke$arity$variadic = G__41382__delegate;
return G__41382;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
